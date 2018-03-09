webpackJsonp([21],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/8.
	 */

	var public=__webpack_require__(2);

	$(function() {
		laydate({elem: '#start_date01', event: 'focus'});
	    laydate({elem: '#start_date02', event: 'focus'});
	    laydate({elem: '#end_date01', event: 'focus'});
	    laydate({elem: '#end_date02', event: 'focus'});
	    
	    fn_charts01();
	    fn_charts02();

	    /* 民意类型占比 */
	    function fn_charts01(){
			var picData = {
	            id:'lyzb',
	            legend:{show:false},
	            centers:[['50%', '50%'],['50%', '50%']],
	            radius:[['59%', '60%'],['20%', '56%']],
	            seriesName:'',
	            lengths:[30,40],
	            data:[
					{value: 35,name: '电话'}, 
	                {value: 16,name: '网页'}, 
	                {value: 11,name: '电子邮箱'},
	                {value: 11,name: '手机短信'}, 
	                {value: 11,name: '手工录入'}, 
	                {value: 8,name: '语音留言'}
	            ]};
	        var myChart01 = public.ChartObj.pieObj.pieSource(picData);
	        var domEle = document.getElementById('lyzb');
	        myChart01.on('click',function(params){
	            window.location.href = $(domEle).attr('href')+'?name='+params.data.name;
	        })
	    }
	    
	    /* 民意类型数量分布 */
	    function fn_charts02(){
			var barData = {
	            id:'slfb',
	            yName:'民意数量',
	            title:'二级民意类型',
	            xAxis:['电话', '网页', '电子邮箱', '手机短信', '手工录入', '语音留言'],
	            data:[234, 111, 77, 77, 76, 56]};
	        var myChart = public.ChartObj.barObj.barOne(barData);
	    }

	})
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);