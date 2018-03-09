webpackJsonp([17],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/8.
	 */

	/**
	 * Created by yyg on 2016/11/5.
	 */
	__webpack_require__(2);
	var layer = __webpack_require__(387);

	$(function(){
	    var idx = 0;
	    /* 点击下一步 */
	    $('#pwd_ok01,#pwd_ok02').on('click',function(){
	        $('.button').removeAttr('disabled');
	        $(this).attr('disabled','disabled');
	        $('.pwd_main li').eq(idx++).addClass('active');
	        $('.pwd_main li').eq(idx).addClass('active1').siblings().removeClass('active1');
	        $('.pwd_con').hide();
	        $('.pwd_con').eq(idx).show();
	    });
	    /* 点击获取验证码 */
	    $('.button-primary-flat').on('click',function(){
	        var next = $(this);
	        next.attr('disabled','disabled');
	        var idx = 0,it=0;
	        var tempText = next.text();
	        it = setInterval(function(){
	            next.text('倒计时'+idx+++'秒');
	            if(idx>=30){
	                next.removeAttr('disabled');
	                next.text(tempText);
	                clearTimeout(it);
	            }
	        },1000);
	    });

	    /* 点击上一步 */
	    $('.pre_btn').on('click',function(){
	        $('.button').removeAttr('disabled');
	        $(this).attr('disabled','disabled');
	        $('.pwd_main li').eq(idx).removeClass('active');
	        $('.pwd_main li').eq(idx).removeClass('active1');
	        $('.pwd_main li').eq(--idx).addClass('active1');
	        $('.pwd_con').hide();
	        $('.pwd_con').eq(idx).show();
	    });

	    /* 点击登录 */
	    $('#login').on('click',function(){
	         window.location.href = $(this).attr('href');
	    });


	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);