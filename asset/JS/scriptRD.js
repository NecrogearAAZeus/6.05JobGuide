
$(document).ready(function() {
  var width_size = window.outerWidth;
  var height_size = window.outerHeight;
  if(width_size <= 1500 || height_size <= 900 ) {
    $("#alert").css("display","block");
  }else{$("#alert").css("display","none");};

  setInterval(function(){ 
    if($("#alert").css('display') === "block" ){
    setTimeout(function(){
      $("#alert").fadeOut(300);
    },2000);
  }
    
  },100);
  
  
    $(".back img").mouseover(function(){
      $(this).attr("src","../asset/images/ICONS/arrow-left2.png")
    });
    $(".back img").mouseleave(function(){
      $(this).attr("src","../asset/images/ICONS/arrow-left.png")
    });
    window.addEventListener("keydown",function(event){
      if(event.defaultPrevented){
        return;
      }
      var handled = false;
      if(event.keyCode == 9){
      handled = true;
      }
      if(handled){
        event.preventDefault();
      }
      });
      /**
      현재 페이지에서 url 읽기
      */
      let url = document.location.href;
      console.log(url);
      var curPage = 1;
      var numOfPages = $(".skw-page").length;
      var animTime = 1000;
      var scrolling = false;
      var pgPrefix = ".skw-page-";
  
      $("#wrapper").fadeIn(1500);
      function pagination() {
        scrolling = true;
        
        $(pgPrefix + curPage).removeClass("inactive").addClass("active");
        $(pgPrefix + (curPage - 1)).addClass("inactive");
        $(pgPrefix + (curPage + 1)).removeClass("active");
        
        setTimeout(function() {
          scrolling = false;
        }, animTime);
      };
   
      if(url.includes('#MAC')){ 
        curPage = 2;
        $(".skw-page-1").removeClass("active")
        $(pgPrefix + curPage).addClass("active");
      } 
  
      if(url.includes('#DAN')){ 
        curPage = numOfPages;
        $(".skw-page-1").removeClass("active")
        $(pgPrefix + curPage).addClass("active");
      } 
      if(curPage === 1){
        $(".container2").css("display","none")
      }else{
        $(".container2").css("display","block");
      };
      if(curPage === numOfPages){
        $(".container").css("display","none")
      }else{
        $(".container").css("display","block");
      }
      $("#wrapper").fadeIn(500);
      function navigateUp() {
        if (curPage === 1) return;
        curPage--;
        pagination();
        console.log(curPage);
        $(".container").fadeIn(500);
        if(curPage === 1){
          $(".container2").fadeOut(500);
        }else{
          $(".container2").fadeIn(500);
        }
      }
       
      function navigateDown() {
        if (curPage === numOfPages) return;
        curPage++;
        pagination();
        console.log(curPage);
        $(".container2").fadeIn(500);
        if(curPage === numOfPages){
          $(".container").fadeOut(500);
        }else{
          $(".container").fadeIn(500);
        }
      };
    
      $(document).on("mousewheel DOMMouseScroll", function(e) {
        if (scrolling) return;
        if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
          navigateUp();
        } else { 
          navigateDown();
        }
      });
   
      $(document).on("keydown", function(e) {
        if (scrolling) return;
        if (e.which === 38) {
          navigateUp();
        } else if (e.which === 40) {
          navigateDown();
        }
      });
      $(".pEX img").mouseover(function(){
        /**
        좌측 특화 스킬 이미지 번호
        */
        var imgNum = $(".pEX img").index(this);
        console.log(imgNum);
          $(".exL").eq(imgNum).css({"display": "block"});
      
      });
      $(".pEX img").mouseleave(function(){
        /**
        좌측 특화 스킬 이미지 번호
        */
        var imgNum = $(".pEX img").index(this);
        console.log(imgNum);
          $(".exL").eq(imgNum).css({"display": "none"});
      
      });
      $(".pEX2 img").mouseover(function(){
        /**
        우측 특화 스킬 이미지 번호
        */
        var imgNum2 = $(".ParagraphR4 img").index(this);
        console.log(imgNum2);
        $(".exR").eq(imgNum2).css({"display": "block"});
      
      });
      $(".pEX2 img").mouseleave(function(){
        /**
        우측 특화 스킬 이미지 번호
        */
        var imgNum2 = $(".pEX2 img").index(this);
        console.log(imgNum2);
          $(".exR").eq(imgNum2).css({"display": "none"});
      
      });
      var buttonNum2 = 0
      $(".shortcut").click(function(){
        buttonNum2++
           if(buttonNum2%2 == 0){
          $(".shortcut>img").attr("src","../asset/images/ICONS/button1.png")
          $(".shortcut").animate({left:-540},400,'swing');
          
          $(".back").fadeIn(250);
         
        }else{
          $(".shortcut>img").attr("src","../asset/images/ICONS/button2.png")
          $(".shortcut").animate({left:0},400,'swing');
          $(".back").fadeOut(250);
        }
  
      });
      var buttonNum = 0
      $(".shortcut>img").click(function(){
        
        buttonNum++
        if(buttonNum%2 == 0){
          $(".shortcut>img").attr("src","../asset/images/ICONS/button1.png")
          $(".shortcut").animate({left:-540},400,'swing');
          
          $(".back").fadeIn(250);
         
        }else{
          $(".shortcut>img").attr("src","../asset/images/ICONS/button2.png")
          $(".shortcut").animate({left:0},400,'swing');
          $(".back").fadeOut(250);
        }
  
      });
      


      $(".Box").mouseover(function(){
        var Box = $(".SWrap>div>div>.Box").index(this);
        $(".Box").eq(Box).css("border","2px solid #dadeec").css("box-shadow","0px 0px 10px #dadeec");
        $(".Box").eq(Box).children().children().siblings().css("opacity","1");
      });
  
      $(".Box").mouseleave(function(){
        var Box = $(".SWrap>div>div>.Box").index(this);
        $(".Box").eq(Box).css("border","2px solid #3c3c45b0").css("box-shadow","none");
        $(".Box").eq(Box).children().children().nextUntil(".Stop").css("opacity","0.7");
      });
  

      
    $(".RD1Wrap>.ABox").click(function(){
      curPage = 1;
      console.log(curPage);
      $(pgPrefix + curPage).removeClass("inactive").addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");
      $(".skw-page-3").removeClass("active");
      $(".container").fadeIn(500);
      $(".container2").fadeOut(500);
    });
    $(".RD2Wrap>.ABox").click(function(){
      curPage = 2;
      console.log(curPage);
      $(pgPrefix + curPage).removeClass("inactive").addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");
      $(".container").fadeIn(500);
      $(".container2").fadeIn(500);

    });
    $(".RD3Wrap>.ABox").click(function(){
      curPage = 3;
      console.log(curPage);
      $(pgPrefix + curPage).removeClass("inactive").addClass("active");
      $(pgPrefix + (curPage - 1)).addClass("inactive");
      $(pgPrefix + (curPage + 1)).removeClass("active");
      $(pgPrefix + "1").removeClass("active");
      $(".container").fadeOut(500);
      $(".container2").fadeIn(500);
 
    });
        
  });