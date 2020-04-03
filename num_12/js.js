$(document).ready(function () {
    /*모달창 영역*/
    $("#data1,#data2,#data3,#data4,#data5").on("mouseover", function () {
        $(this).css("background-color", "#e1fee1");
    });
    $("#data1,#data2,#data3,#data4,#data5").on("mouseout", function () {
        $(this).css("background-color", "#fff");
    });

    $(".close_modal").on("click", function () {
        $(".modalBg,.modalBox").css("display", "none");
    });
    /*모달창 제목, 날짜*/
    $("#data1,#data2,#data3,#data4,#data5").on("click", function () {
        var modalTitleChane = $(this).find(".data_title").text();
        var modalDateChane = $(this).find(".data_date").text();
        $("#cont1_T").text(modalTitleChane);
        $("#tday").text(modalDateChane);
        $(".modalBg,.modalBox").css("display", "block");
    });

});





//박스 슬라이드
$(document).ready(function(){
 var hei=parseInt($(".slider").height());
        var intv=setInterval(function(){ nAni(); }, 3000);
        
        function nAni(){
            $(".slider ul").not(":animated").animate({"margin-top" : -hei+"px"}, 800, function(){
                $(".slider ul li").eq(0).appendTo($(".slider ul"));
                $(".slider ul").css("margin-top", "0px");
            });
        }
});