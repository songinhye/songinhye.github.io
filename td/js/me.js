$(document).ready(function () {
    $(".item_coment_box .moalOp").on("click", function () {
        var img_src = $(this).parents(".itemWrapBox").find("img").attr("src");
        $("#modalview").attr("src", img_src);
    });
    $(".item_coment_box .moalOp").on("click", function () {
        var h3_text = $(this).parents(".itemWrapBox").find(".item_coment_box h3").text();
        $("#itemName").text(h3_text);
    });
});


$(document).ready(function () {
    $("#bg_back").hide();
    $(".modal").hide();
    $(".item_coment_box .moalOp").on("click", function () {
        $("#bg_back").show();
        $(".modal").show();
    });
    $(".modal .modal_close").on("click", function () {
        $("#bg_back").hide();
        $(".modal").hide();
    });
});

$(document).ready(function () {
    $("#label2").css("display", "none");
    $("#label1").on("click", function () {
        $("#ftinner").slideUp();
        $("#label1").css("display", "none");
        $("#label2").css("display", "block");
        $(".bottomImg").css("height", "180px");
    });
    $("#label2").on("click", function () {
        $("#ftinner").slideDown();
        $("#label1").css("display", "block");
        $("#label2").css("display", "none");
        $(".bottomImg").css("height", "201px");
    });
});


$(document).ready(function () {
    $(".saContents").hide();
    $(".depbtn1").on("click", function () {
        $(".depbtn2").removeClass("mainOn");
        $(".saContents").fadeOut();
        $(this).addClass("mainOn");
        $(".reContents").fadeIn(500);

    });
    $(".depbtn2").on("click", function () {
        $(".depbtn1").removeClass("mainOn");
        $(".reContents").fadeOut();
        $(this).addClass("mainOn");
        $(".saContents").fadeIn(500);
    });
});

$(document).ready(function () {
    /*아이템 메뉴에 마우스 올리면 */
    $(".reItem .itemWrapBox").on("mouseover", function () {
        $(this).find(".item_coment_box").stop().animate({
            bottom: 0
        }, 500);
    });
    $(".reItem .itemWrapBox").on("mouseout", function () {
        $(this).find(".item_coment_box").stop().animate({
            bottom: "-100%"
        }, 500);
    });



    /*배너움직임*/
    var $banner = $(".banDummy").find("ul");

    var $bannerWidth = $banner.children().outerWidth(); //이미지의 폭을 계산해서 변수에 담아준다 
    var $bannerHeight = $banner.children().outerHeight(); // 높이를 계산에서 변수에 담아준다 
    var $length = $banner.children().length; //이미지의 갯수를 센다
    var rollingInterval;

    rollingInterval = setInterval(function () {
        rollingStart();
    }, 3000); //3초에 한번씩 돌리기

    //롤링 펑션
    function rollingStart() {
        $banner.css("width", $bannerWidth * $length + "px"); //ul 넓이를 지정해준다 이미지폭 * 이미지수 
        $banner.css("height", $bannerHeight + "px"); //ul 높이를 지정해준다

        //배너의 좌측 위치를 옮겨 준다.
        $banner.animate({
            left: -$bannerWidth + "px"
        }, 1500, function () { //애니메이션 1.5초 진행시간 
            //첫번째 이미지를 마지막으로 복사해준다 
            $(this).append("<li>" + $(this).find("li:first").html() + "</li>");
            //그리고 첫번째 이미지는 복사가 되었기때문에 삭제해준다 
            $(this).find("li:first").remove();
            //다음 움직임을 위해서 배너 좌측의 위치값을 초기화 한다.
            $(this).css("left", 0);
        });
    }
});

$(document).ready(function () {
    /*메뉴박스*/
   $(".m_menu").hide();
   $(".mo_toggle").on("click",function(){
       $(".m_menu").slideDown(400);
       $(".mo_toggle").hide();
   });
    $(".m_menu_close").on("click",function(){
       $(".m_menu").slideUp(400);
       $(".mo_toggle").show();
   });
    
});























