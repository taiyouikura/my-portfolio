$ (function() {
  
  // $("#show-write").children('a').click(function(){
  //   $("#write").fadeIn();
  // });
  
// 一枚目
    $("#show-write").click(function(){
      $(".write-img").fadeIn();  
    });
    
    $("#close-img").click(function(){
      $(".write-img").fadeOut();
    });
// 
// みぎやじるし
    $("#next-img").click(function(){
      $(".write-img").fadeOut();
      $(".write-img-se").fadeIn();
    });
// 
// 二枚目
    $("#close-modal-se").click(function(){
      $(".write-img-se").fadeOut();
    });

    $("#return-img").click(function(){
      $(".write-img-se").fadeOut();
      $(".write-img").fadeIn();
    });

// 
});
