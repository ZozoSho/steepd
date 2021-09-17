$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $('.carousel').carousel();

    $("#blackcard").click(function(){
        $("#blackcard").toggleClass("remove add");
        $(".blacktotal").toggle();
        $("#blackprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#greencard").click(function(){
        $("#greencard").toggleClass("remove add");
        $(".greentotal").toggle();
        $("#greenprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#oolongcard").click(function(){
        $("#oolongcard").toggleClass("remove add");
        $(".oolongtotal").toggle();
        $("#oolongprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#rooiboscard").click(function(){
        $("#rooiboscard").toggleClass("remove add");
        $(".rooibostotal").toggle();
        $("#rooibosprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#chamomilecard").click(function(){
        $("#chamomilecard").toggleClass("remove add");
        $(".chamomiletotal").toggle();
        $("#chamomileprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#hibiscuscard").click(function(){
        $("#hibiscuscard").toggleClass("remove add");
        $(".hibiscustotal").toggle();
        $("#hibiscusprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#marigoldcard").click(function(){
        $("#marigoldcard").toggleClass("remove add");
        $(".marigoldtotal").toggle();
        $("#marigoldprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#lavendercard").click(function(){
        $("#lavendercard").toggleClass("remove add");
        $(".lavendertotal").toggle();
        $("#lavenderprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#rosebudcard").click(function(){
        $("#rosebudcard").toggleClass("remove add");
        $(".rosebudtotal").toggle();
        $("#rosebudprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#cinnamoncard").click(function(){
        $("#cinnamoncard").toggleClass("remove add");
        $(".cinnamontotal").toggle();
        $("#cinnamonprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#anisecard").click(function(){
        $("#anisecard").toggleClass("remove add");
        $(".anisetotal").toggle();
        $("#aniseprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#gingercard").click(function(){
        $("#gingercard").toggleClass("remove add");
        $(".gingertotal").toggle();
        $("#gingerprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#peppercorncard").click(function(){
        $("#peppercorncard").toggleClass("remove add");
        $(".peppercorntotal").toggle();
        $("#peppercornprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#lemoncard").click(function(){
        $("#lemoncard").toggleClass("remove add");
        $(".lemontotal").toggle();
        $("#lemonprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#orangecard").click(function(){
        $("#orangecard").toggleClass("remove add");
        $(".orangetotal").toggle();
        $("#orangeprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#rosehipcard").click(function(){
        $("#rosehipcard").toggleClass("remove add");
        $(".rosehiptotal").toggle();
        $("#rosehipprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        
        
    });

    $("#elderberrycard").click(function(){
        $("#elderberrycard").toggleClass("remove add");
        $(".elderberrytotal").toggle();
        $("#elderberryprice").toggleClass("price");
        let total = 0.00;
        $(".price").each(function() {
            total += +$(this).text()||0;
        });
        $("#totalprice").text("$" + total);
        $(this).text(function(i, text){
            return text === "Add" ? "Remove" : "Add";
        })
        

        
        
    });
    
    
    


});