$(function(){

    // 로그인

    let loginButton=$(".login_button");
    let popupLogin=$("#popup_login");
    loginButton.click(function(){
        popupLogin.addClass("active");
        loginButton.addClass("active");
    });
    $(".login_button").click(function(){
        loginButton.removeClass("active");
    });
    $("#login_submit").click(function(){
        popupLogin.removeClass("active");
        $("#page_2").addClass("active");
        loginButton.addClass("active");
    });

    // 관리자 페이지
    
    // tab 클릭 
    $("#top_nav .tab").click(function(){
        let navHeight = $("#side_nav").outerWidth();
        if ($("#side_nav").hasClass("hidden")) {
            $("#side_nav").removeClass("hidden");
            $("#table_section").removeClass("active");
        } else {
            $("#side_nav").addClass("hidden");
            $("#table_section").addClass("active");
        }
    
        $("#side_nav").animate({
            width: "toggle"
        });
    });

    // 모바일 nav
    $("#top_nav .tab").click(function() {
        if ($(window).width() < 1280) {
            $("#side_nav_mobile").toggleClass("active");
            $(".side_nav_bg").toggleClass("active");    
        }
    });

// 아코디언 메뉴 클릭 이벤트

    $("#side_nav > ul > li").click(function(){
        if ($(this).children("ul").length > 0) {
            $(this).children("ul").slideToggle();
            $(this).find(".arrow").toggleClass("active");
            $(this).siblings().children("ul").slideUp();
            $(this).siblings().find(".arrow").removeClass("active");
        }
        $("#side_nav ul ul").click(function(event){
            event.stopPropagation(); // 이벤트 버블링 방지
        });
    });
    $("#side_nav_mobile > ul > li").click(function(){
        if ($(this).children("ul").length > 0) {
            $(this).children("ul").slideToggle();
            $(this).find(".arrow").toggleClass("active");
            $(this).siblings().children("ul").slideUp();
            $(this).siblings().find(".arrow").removeClass("active");
        }
        $("#side_nav_mobile ul ul").click(function(event){
            event.stopPropagation(); // 이벤트 버블링 방지
        });
    });

    $(document).click(function(e) {
        if (!$(e.target).closest("#popup_logout, #top_nav .right .util").length) {
            $("#popup_logout").removeClass("active");
            $("#page_2").removeClass("active");
            loginButton.removeClass("active");
            $("#popup_logout").hide();
        }
    });
    
    $("#top_nav .right .util").click(function() {
        $("#popup_logout").toggle();
    });
    
    $("#popup_logout ul li.logout").click(function(e){
        e.preventDefault();
        $("#popup_logout").removeClass("active");
        $("#page_2").removeClass("active");
        loginButton.removeClass("active");
        $("#popup_logout").hide();
    });

    // 등록 팝업 열기
        $("#button_admin").click(function(){
        $("#popup_register").addClass("active"); 
        $(".popup_bg").addClass("active"); 
    });

    // 등록 팝업 닫기
    $(".popup_register_close").click(function(){
        $("#popup_register").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
    }); 

    // 등록 수정 버튼 클릭 이벤트
    $(".popup_register_button_re").click(function(){   
        $("#popup_register").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
        
        // 팝업 메시지 띄우기
        $("#alert_popup_dim").addClass("active");
        $("#alert_popup_info").addClass("active");
        $("#click_button").addClass("active");
    });

    $("#alert_popup_info_cancle_btn").click(function(){
        $("#alert_popup_dim").removeClass("active");
        $("#alert_popup_info").removeClass("active");
        $("#click_button").removeClass("active");
    });
    $("#alert_popup_accept_btn").click(function(){
        $("#alert_popup_dim").removeClass("active");
        $("#alert_popup_info").removeClass("active");
        $("#click_button").removeClass("active");
    });

    // 아이디 버튼 클릭 이벤트
    $(".button_id").click(function(){
        $("#popup_reform").addClass("active"); 
        $(".popup_bg").addClass("active"); 
    });

    // 아이디 팝업 닫기
    $(".popup_reform_close").click(function(){
        $("#popup_reform").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
    });

    // 아이디 수정 버튼 클릭 이벤트
    $(".popup_reform_button_re").click(function(){   
        $("#popup_reform").removeClass("active"); 
        $(".popup_bg").removeClass("active"); 
        
        // 팝업 메시지 띄우기
        $("#alert_popup_dim").addClass("active");
        $("#alert_popup_error").addClass("active");
        $("#click_button").addClass("active");
    });
    $("#alert_popup_error").click(function(){
        $("#alert_popup_dim").removeClass("active");
        $("#alert_popup_error").removeClass("active");
        $("#click_button").removeClass("active");
    });

    // 페이지네이션 hover 이벤트
    $(".pagination ul li").hover(function(){
        $(".pagination ul li.on").removeClass("on");
        $(this).addClass("on");
        $(".pagination ul li.active").removeClass("on");
    });

    // 페이지네이션 클릭 이벤트
    $(".pagination ul li").click(function() {
        $(".pagination ul li.active").removeClass("active");
        $(this).addClass("active");
        $(".pagination ul li.on").removeClass("on");
    });

    // 리사이즈
    let isMob
    $(window).resize(function(){
        const winWidth = $(window).width();
        if(winWidth <= 1280){
            isMobile = true;
        }
        else{
            isMobile = false;
            $("#side_nav_mobile").removeClass("active");
            $(".side_nav_bg").removeClass("active");
            $("#table_section").removeClass("active");
        }
    });
});
