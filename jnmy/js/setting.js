webpackJsonp([18],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/5.
	 */
	//require('./common/public.js');
	var layer = __webpack_require__(387);
	$(function(){
	    /* 点击菜单 */
	    $('.y_menu2 li').on('click',function(){
	        $(this).addClass('active').siblings().removeClass('active');
	        $('.st_person').hide();
	        $('.st_person').eq($(this).index()).show();
	    });
	    
		changeInfo('.btn_ok','您的个人信息已经修改成功！');
		changeInfo('.btn_ok2','您的密码已经修改成功！');
		function changeInfo(ele,txt){
			 $(ele).on('click',function(){
		        var content = '<div class="selfModal">'+
		            '<i class="su_icon"></i>'+
		            '<p>'+txt+'</p>'+
		            '<span class="title_sub">3秒后将自动返回</span>'+
		            '<i class="loading"></i>'+
		            '</div>';
		        layer.open({
		            type: 1,
		            title:['提示','padding-left: 74px !important;height: 46px;line-height:46px;font-size:18px;text-align:center;background: #0298fa;color:#fff;'],
		            area: ['380px', '238px'], //宽高
		            shadeClose: false, //开启遮罩关闭
		            time:3000,
		            content: content
		        });
		    });
		}
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);