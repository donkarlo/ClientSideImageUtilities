$(document).ready(function () {
    $("img").click(function () {
        var $clickedImg = $(this);
        var src = $clickedImg.attr('src');
        var tarr = src.split('/');
        var file = tarr[tarr.length - 1];
        var name = file.split('.')[0];
        console.log(name);
        $.ajax({
            url: 'show.php',
            timeout: 10000,
            type: 'POST',
            dataType: 'json',
            data: {name: name},
            success: function (data) {
                $("#theclickedImageNameRevealer").html(data["server_response_from_show.php"]);
            }
            , complete(xhr, status) {
                console.log("The request is completed regardless of it's success or failure");
            }
        });
    });

});
