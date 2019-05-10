$(document).ready(function() {
    $("#pay").hide();
    //$("#notempty").hide();

    //if is empty, use
    //$("#empty").show();
    //else
    //$("#notempty").show();
    //get data from ?
    // $("#main-meal .howmany").text("x "+??);
    // $("#main-meal .howmuch").text("$ "+??);
    //create detail
    // var i;
    // for (i = 0; i < 2; i++) {
    //     $("#main-meal").append(getDetail());

    // }

    // $("#side-meal .howmany").text("x "+??);
    // $("#side-meal .howmuch").text("$ "+??);

    // $("#drinks .howmany").text("x "+??);
    // $("#drinks .howmuch").text("$ "+??);


    $(".list").append(getDetail("我的主餐", 10, "黑膠鮮檸鮭魚堡", "不要洋蔥，正常", "80"));

});

$(".checklist .checkout").click(function() {

    $("#pay .cancel").transition('fade', 0);
    $("#pay").transition('fade');
    $(".MainContainer").toggleClass('is-blurred');;

});

$("#pay .cancel").click(function() {
    $(this).transition('fade', 300, function() {
        $("#pay").transition('fade');
        $(".MainContainer").toggleClass('is-blurred');
    })

});



function removeThis() {
    console.log("why");
    $(".close").closest(".detail").hide(500, function() {
        $(".close").closest(".detail").remove();
    });

}








function getDetail(title, item, name, detail, money) {
    var s = "";
    s = s + '   <p class="title">' + title + '</p>';
    var i;
    for (i = 0; i < item; i++) {
        s = s + '<div class="item">'
        s = s + '   <p class="name">' + name + '+ </p>';
        s = s + '   <p class="detail">' + detail + '</p>';
        s = s + '   <p class="howmuch">' + money + '</p>';
        s = s + '</div>';
    }
    return s;
}