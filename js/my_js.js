/*

	Template Name: Welcomewebdesign.com


*/



$(document).ready(function(){

            // home slider controls.....

            $('.bxslider').bxSlider({
                            auto: true,
                            controls:false,
                            autoControls:false,
                            pager:false,
                            mode:'vertical',	// vertical, horizontal, fade	
                            autoDirection:'next', // next, prev
                        });
                
            // About us click function.....
                
                
            $(".aboutUs").click(function(){		
                    $(this).addClass("active");
                    $(".about").fadeToggle(3500);
                    $(".contact").hide(1000);
                    $(".conc").removeClass("active");
                    $(".bxslider").hide(2000);	
                });
                
                
            // Portfolio list click function ....
                
                
            $(".protf").click(function(){		
                    $(".conc").removeClass("active");
                    $(".aboutUs").removeClass("active");
                    $(".bxslider").show(1000);
                    $(".about").hide(2000);
                    $(".contact").hide(2000);	
                });


                
            // Contact page click function ....
                
                
            $(".conc").click(function(){
                    $(this).addClass("active");		
                    $(".contact").fadeToggle(3500);
                    $(".about").hide(1000);
                    $(".aboutUs").removeClass("active");
                    $(".bxslider").hide(2000);			
                });
                

            // Portfolio slider controls.....

            $('.bxslider2').bxSlider({
                            auto: false,
                            controls:true,
                            autoControls:false,
                            pager:false,
                            minSlides:1,
                            maxSlides:5,
                            slideWidth:232,
                            slideMargin:23,
                            pause: 5000,
                            speed: 1000,
                            moveSlides:1
                        });
                
            //  Site map click functions......


            $(".siteManagment").click(function(){
                    $(this).addClass("selected animated pulse infinite");	
                    
                    $(".management").slideDown(3000);		
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                    
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                });
                
            $(".sitePort").click(function(){
                    $(this).addClass("selected animated pulse infinite");	
                    
                    $(".portfolioList").show(3000);
                    $(".default").hide(1000);
                    $(".management").hide(1000);
                    $(".siteOrder").slideUp(1000);
                    $(".Opportunity").hide(1000);
                    $(".testimonial").slideUp(1000);
                    $(".tutorial").hide(1000);
                    $(".contactDetail").slideUp(1000);
                    
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    
                   $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                      
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                });
                
            $(".siteOr").click(function(){
                    $(this).addClass("selected animated pulse infinite");
                    
                    $(".siteOrder").slideDown(3000);	
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".management").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                      
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                });
                
            $(".siteOpp").click(function(){
                    $(this).addClass("selected animated pulse infinite");
                    
                    $(".Opportunity").show(3000);
                    $(".default").hide(1000);
                    $(".portfolioList").hide(1000);
                    $(".siteOrder").slideUp(1000);
                    $(".management").hide(1000);
                    $(".testimonial").slideUp(1000);
                    $(".tutorial").hide(1000);
                    $(".contactDetail").slideUp(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                   
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                });
                
            $(".siteTest").click(function(){
                    $(this).addClass("selected animated pulse infinite");	
                    
                    $(".testimonial").slideDown(3000);
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".management").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                    
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                });
                
            $(".siteTuto").click(function(){
                    $(this).addClass("selected animated pulse infinite");
                    
                    $(".tutorial").show(3000);
                    $(".default").hide(1000);
                    $(".portfolioList").hide(1000);
                    $(".siteOrder").slideUp(1000);
                    $(".Opportunity").hide(1000);
                    $(".testimonial").slideUp(1000);
                    $(".management").hide(1000);
                    $(".contactDetail").slideUp(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                });
                
            $(".siteConc").click(function(){
                    $(this).addClass("selected animated pulse infinite");	
                    
                    $(".contactDetail").slideDown(3000);
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".management").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                     
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                });


          $(".portfCom").click(function(){
                    $(this).addClass("selected animated pulse infinite");
                    
                    $(".company").slideDown(3000);		
                    $(".management").hide(1000);		
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    
                    
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                      
                    
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                });    
                
          $(".portfPer").click(function(){
                    $(this).addClass("selected animated pulse infinite");
                    
                    $(".personal").slideDown(3000);			
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".management").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                  
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                });    
                
          $(".portfNew").click(function(){
                    $(this).addClass("selected animated pulse infinite");
                    
                    $(".news").slideDown(3000);		
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    
                   $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".management").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                });    
                
          $(".portfPho").click(function(){
                    $(this).addClass("selected animated pulse infinite");	
                    
                    $(".photography").slideDown(3000);		
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".management").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                });    
                
          $(".portfMed").click(function(){
                    $(this).addClass("selected animated pulse infinite");	
                    
                    $(".medical").slideDown(3000);		
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".management").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                  
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                });   
                
          $(".portfSch").click(function(){
                    $(this).addClass("selected animated pulse infinite");	
                    
                    $(".school").slideDown(3000);		
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".management").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                 
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                });    
                
          $(".portfBan").click(function(){
                    $(this).addClass("selected animated pulse infinite");	
                    
                    $(".bank").slideDown(3000);		
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".management").hide(1000);
                    $(".real").hide(1000);                    
                    $(".ecommerce").hide(1000);                   
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                });    
                
          $(".portfRea").click(function(){
                    $(this).addClass("selected animated pulse infinite");
                    
                    $(".real").slideDown(3000);		
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".management").hide(1000);                    
                    $(".ecommerce").hide(1000);                     
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfEcom").removeClass("selected animated pulse infinite");
                });    
                
          $(".portfEcom").click(function(){
                    $(this).addClass("selected animated pulse infinite");	
                                        
                    $(".ecommerce").slideDown(3000);		
                    $(".default").hide(1000);
                    $(".portfolioList").slideUp(1000);
                    $(".siteOrder").hide(1000);
                    $(".Opportunity").slideUp(1000);
                    $(".testimonial").hide(1000);
                    $(".tutorial").slideUp(1000);
                    $(".contactDetail").hide(1000);
                    
                    $(".sitePort").removeClass("selected animated pulse infinite");
                    $(".siteOr").removeClass("selected animated pulse infinite");
                    $(".siteOpp").removeClass("selected animated pulse infinite");
                    $(".siteTest").removeClass("selected animated pulse infinite");
                    $(".siteTuto").removeClass("selected animated pulse infinite");
                    $(".siteConc").removeClass("selected animated pulse infinite");
                    $(".siteManagment").removeClass("selected animated pulse infinite");
                    
                    $(".company").hide(1000);
                    $(".personal").hide(1000);
                    $(".news").hide(1000);
                    $(".photography").hide(1000);
                    $(".medical").hide(1000);
                    $(".school").hide(1000);
                    $(".bank").hide(1000);
                    $(".real").hide(1000);                    
                    $(".management").hide(1000);                     
                    
                    $(".portfCom").removeClass("selected animated pulse infinite");
                    $(".portfPer").removeClass("selected animated pulse infinite");
                    $(".portfNew").removeClass("selected animated pulse infinite");
                    $(".portfPho").removeClass("selected animated pulse infinite");
                    $(".portfMed").removeClass("selected animated pulse infinite");
                    $(".portfSch").removeClass("selected animated pulse infinite");
                    $(".portfBan").removeClass("selected animated pulse infinite");
                    $(".portfRea").removeClass("selected animated pulse infinite");
                });      
               
    
            
    // === Mobile sideber functions.........
    
    $(".mMenu1").click(function(){
        $(".sMenu").slideToggle(800);
    });
    
    $(".mMenu2").click(function(){
        $(".work_category").slideToggle(800);
    });
    
    $("img.lazy").show().lazyload();
				
	$("img.lazy").lazyload({
		effect : "fadeIn",
		// threshold : 200, // it's means image will be ready before 200px 
		//event : "click",
	}); 
	
	$('.portfolioList').mixItUp();

	
    
	
});