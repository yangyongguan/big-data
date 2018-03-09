webpackJsonp([8],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/9.
	 */
	var public = __webpack_require__(2);
	$(function() {
	    laydate({elem: '#start_date', event: 'focus'});
	    initChart();
	    function initChart(){
	        fn_chartTop();
	    }
	    /* 民意分类环比分析 */
	    function fn_chartTop() {
	        //alert(new Date('2016-08').Format('yyyy年MM月'));
	  	var dt={
				"data": {
					"yearMonth":['2016-08','2016-09'],
					"appealType":[
			 			{
			 				"appealTypeCode":"atc01",
			 				"appealTypeName":"咨询",
			 				"appealCounts":[
			 					2000,3000
			 				]
			 			},
			 			{
			 				"appealTypeCode":"atc01",
			 				"appealTypeName":"投诉举报",
			 				"appealCounts":[
			 					2600,3000
			 				]
			 			},
			 			{
			 				"appealTypeCode":"atc01",
			 				"appealTypeName":"求助",
			 				"appealCounts":[
			 					3000,3600
			 				]
			 			},
			 			{
			 				"appealTypeCode":"atc01",
			 				"appealTypeName":"建议",
			 				"appealCounts":[
			 					2800,3000
			 				]
			 			},
			 			{
			 				"appealTypeCode":"atc01",
			 				"appealTypeName":"表扬",
			 				"appealCounts":[
			 					2000,3000
			 				]
			 			}
					]
	      		}
			};
	  	var legends=[], xAxis=[],data0=[],data1=[];
	  	for(var i=0; i<dt.data.appealType.length; i++){
	  		xAxis.push(dt.data.appealType[i].appealTypeName);
	  		data0.push(dt.data.appealType[i].appealCounts[0]);
	  		data1.push(dt.data.appealType[i].appealCounts[1]);
	  	}
			var a=new Date(dt.data.yearMonth[0]).Format('yyyy年MM月');
			var b=new Date(dt.data.yearMonth[1]).Format('yyyy年MM月');
			legends.push(a,b);

	        var barData = {
	            id: 'box2',
	            yName: '民意数量',
	            title: '二级民意类型',
	            y: '90',
	            legend: legends,
	            xAxis: xAxis,
	            datas: [data0, data1],
	            names: legends
	        };
	        var myChart = public.ChartObj.barObj.barOne(barData);
	        myChart.on('click', function (param) {
	            //window.location.href = $('#box2').attr('href')+'?name='+param.name;
	            window.open($('#box2').attr('href') + '?type=0&type2=1&name=' + param.name);
	        });
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);