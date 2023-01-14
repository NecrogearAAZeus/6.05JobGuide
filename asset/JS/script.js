
$(function(){
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
  $("#accordian").fadeIn(1000);
  
  setTimeout(function(){
    $("#imgCover").fadeIn(1000);
  },1000);
  setTimeout(function(){
    $("#logo").add("#title").fadeIn(1000);
  },1000);
  
  $('#accordian>ul>li>span').click(function(){
    
    //hiding all open accordian
    $(this).parent().parent().find('.submenu').slideUp(300);
    
    //looking if any ul is not open then slide down accordiation
    
    if(!$(this).next().is(":visible")){
      $(this).next().slideDown(300);
    }
    /**
     아코디언 항목 갯수= 이미지 갯수
     */
    var cnt = $(this).parent().index();
    /*빠르게 전환할시 오류 발생*/ 
    /*클릭한거 또 클릭할시 오류 발생*/
    $("#imgCover > div").stop().fadeOut(800);
    $("#imgCover > div").eq(cnt).stop().fadeIn(800);
    /* 이미지 1~5번 찾아 오라고 한 다음 순서대로 나오기 사라지기 가능? */
    /*첫번쨰는 frist 마지막은 last 그럼 2 , 3번은 뭐라고*/
    if(cnt==0){$("#wrapper").css("background-color","#161a2b");}
    else if(cnt==1){$("#wrapper").css("background-color","#2b1617")}
    else{$("#wrapper").css("background-color","#162b19")};
    if(cnt!==0){$(".menu1").fadeOut(300);}
    else if(cnt==0){$(".menu1").fadeIn(300);};
    if(cnt!==1){$(".menu2").fadeOut(300);}
    else if(cnt==1){$(".menu2").fadeIn(300);};
    if(cnt!==2){$(".menu3").fadeOut(300);}
    else if(cnt==2){$(".menu3").fadeIn(300);};
    
    /*애니메이션 자연스럽게 바꾸기*/
    /*사다리꼴??? 늘어났다 들어갔다 하기 좌우로 클릭했을때*/
    /*같은칸 두번 눌렀을경우 사라지는거 처리하기*/
    $(".submenu2").slideUp(300);
    $(".hide").css({"display":"none"});
  });

  $(".Dsub span").click(function(){
    $(this).parent().parent().find('.submenu2').slideUp(300);
    if(!$(this).next().is(":visible")){
      $(this).next().slideDown(300);
    }
    /**
     딜러 메뉴 갯수
     */
    var cnt2 = $(this).parent().index();
      $("#imgCover > div").stop().fadeOut(800);
      $("#imgCover > div").eq(cnt2 + 3).stop().fadeIn(800);
      
  });


});

/*
$(function(){
  $('#accordian>ul>li>span').click(function(){
    //hiding all open accordian
    $(this).next().slideUp(300);
    
    //looking if any ul is not open then slide down accordiation
    
    if(!$(this).next().is(":visible")){
      $(this).next().slideDown(300);
    }
    var cnt = $(this).parent().index();
    /*빠르게 전환할시 오류 발생
    /*클릭한거 또 클릭할시 오류 발생
    $("#imgCover div").clearQueue().fadeOut("300");
    $("#imgCover > div").clearQueue().eq(cnt).fadeIn("300");
    /* 이미지 1~5번 찾아 오라고 한 다음 순서대로 나오기 사라지기 가능? */
    /*첫번쨰는 frist 마지막은 last 그럼 2 , 3번은 뭐라고
    if(cnt==0){$("#wrapper").css("background-color","#161a2b");}
    else if(cnt==1){$("#wrapper").css("background-color","#2b1617")}
    else{$("#wrapper").css("background-color","#162b19")};
    if(cnt!==0){$(".menu1").fadeOut(150);}
    else if(cnt==0){$(".menu1").fadeIn(150);};
    if(cnt!==1){$(".menu2").fadeOut(150);}
    else if(cnt==1){$(".menu2").fadeIn(150);};
    if(cnt!==2){$(".menu3").fadeOut(150);}
    else if(cnt==2){$(".menu3").fadeIn(150);};
    /*애니메이션 자연스럽게 바꾸기*/
    /*사다리꼴??? 늘어났다 들어갔다 하기 좌우로 클릭했을때*/
    /*같은칸 두번 눌렀을경우 사라지는거 처리하기
  });

  $(".Dsub span").click(function(){
    
    if(!$(this).next().is(":visible")){
      $(this).next().slideDown(300);
    }else{
   $(this).next().slideUp(300); 
  }
  });



}); */