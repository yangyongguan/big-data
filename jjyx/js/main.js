var scrollToTop=scrollToTop||{
	setup:function(){		
		var a=$(window).height()/2;		
		$(window).scroll(function(){
			(window.innerWidth?window.pageYOffset:document.documentElement.scrollTop)>=a?$("#scrollToTop").removeClass("off-screen"):$("#scrollToTop").addClass("off-screen")
		});
		$("#scrollToTop").click(function(){
			$("html, body").animate({scrollTop:"0"},400);
			return false;
		});
	}
};
// 返回顶部
scrollToTop.setup();

//点击隐藏显示

$().ready(function(){
    $(".click-i").click(function(){
         if($(".showUL").is(":hidden")){
               $(".showUL").show();    //如果元素为隐藏,则将它显现
         }else{
               $(".showUL").hide();     //如果元素为显现,则将其隐藏
         }
     });
	 $(".showUL li").click(function(){
		 $(this).parent("ul").siblings("input").val($(this).html());
		 $(this).parent("ul").hide();
		 })
});





