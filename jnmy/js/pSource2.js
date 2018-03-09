webpackJsonp([13],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/9.
	 */

	var public = __webpack_require__(2);
	$(function() {
	    var types = ['民意类型占比','来源占比','民意类型分布','民意类型占比','来源占比','民意类型占比'];
	    var types2 = ['民意类型数量分布','来源数量分布','民意类型数量分布','民意类型数量占比','二级来源数量分布','民意类型数量分布'];
	    initData();
	    function  initData(){
	        var name = public.GetUrlObj().name;
	        var type = public.GetUrlObj().type;
	        var txt = name + types[type]
	            ,txt2 = name + types2[type];
	        $('#sourcePeId').text(txt);
	        $('#sourceCountId').text(txt2);
	        fn_charts01();
	        fn_charts02();
	    }
	    /* 民意类型占比 */
	    function fn_charts01(){
	    	//接口返回的数据
	    	var dt={
	  			"data": {
	  				"subOrigin":[
		                {
		                	"subOriginCode":"subOrigin01",
		                	"subOriginName":"食品",
		                	"appealCount":1000
		                },
		                {
		                	"subOriginCode":"subOrigin02",
		                	"subOriginName":"环境",
		                	"appealCount":2300
		                },
		                {
		                	"subOriginCode":"subOrigin03",
		                	"subOriginName":"医疗",
		                	"appealCount":3000
		                },
		                {
		                	"subOriginCode":"subOrigin04",
		                	"subOriginName":"交通",
		                	"appealCount":5000
		                },
		                {
		                	"subOriginCode":"subOrigin05",
		                	"subOriginName":"教育",
		                	"appealCount":1000
		                },
		                {
		                	"subOriginCode":"subOrigin06",
		                	"subOriginName":"住房",
		                	"appealCount":2300
		                },
		                {
		                	"subOriginCode":"subOrigin07",
		                	"subOriginName":"工商",
		                	"appealCount":3000
		                }
	        		]
	  			}
			};
	    	var datas=[];
	    	for(var i=0; i<dt.data.subOrigin.length; i++){
	    		datas.push(
	    			{
	    				value:dt.data.subOrigin[i].appealCount,
	    				name:dt.data.subOrigin[i].subOriginName,
	    				nameCode:dt.data.subOrigin[i].subOriginCode
	    			}
	    		)
	    	}
	    	
	        var picData = {
	            id:'box1',
	            centers:[['50%', '45%'],['50%', '45%']],
	            radius:[['62%', '63%'],['20%', '56%']],
	            seriesName:'访问来源',
	            lengths:[40,40],
	            //赋值
				data:datas
	        };
	        var myChart01 = public.ChartObj.pieObj.pieSource(picData);
	        myChart01.on('click',function(param){
	        	window.open($('#box1').attr('href')+'?name='+param.data.name+'&code='+param.data.nameCode);
	            //window.location.href = $('#box1').attr('href')+'?name='+param.data.name;
	        });
	    }
	    /* 民意类型数量分布 */
	    function fn_charts02(){
	    	//接口返回的数据
	    	var dt={
	  			"data": {
	  				"subOrigin":[
		                {
		                	"subOriginCode":"subOrigin01",
		                	"subOriginName":"食品",
		                	"appealCount":1000
		                },
		                {
		                	"subOriginCode":"subOrigin02",
		                	"subOriginName":"环境",
		                	"appealCount":2300
		                },
		                {
		                	"subOriginCode":"subOrigin03",
		                	"subOriginName":"医疗",
		                	"appealCount":3000
		                },
		                {
		                	"subOriginCode":"subOrigin04",
		                	"subOriginName":"交通",
		                	"appealCount":5000
		                },
		                {
		                	"subOriginCode":"subOrigin05",
		                	"subOriginName":"教育",
		                	"appealCount":1000
		                },
		                {
		                	"subOriginCode":"subOrigin06",
		                	"subOriginName":"住房",
		                	"appealCount":2300
		                },
		                {
		                	"subOriginCode":"subOrigin07",
		                	"subOriginName":"工商",
		                	"appealCount":3000
		                }
	        		]
	  			}
			};
	    	
	    	function searchCode(name){
				for(var i = 0;i<dt.data.subOrigin.length; i++){
					if(dt.data.subOrigin[i].subOriginName==name){
						return dt.data.subOrigin[i].subOriginCode;
					}
				}
			}
	    	var xAxis=[];
	    	var datas=[];
	    	for(var i=0; i<dt.data.subOrigin.length; i++){
	    		xAxis.push(dt.data.subOrigin[i].subOriginName);
	    		datas.push(dt.data.subOrigin[i].appealCount);
	    	}
	        var barData = {
	            id:'box2',
	            y:30,
	            yName:'民意数量',
	            title:public.GetUrlObj().type2?'二级民意类型':'二级来源',
	            //赋值
	            xAxis:xAxis,
	            datas:[datas]
	        };
	        var myChart = public.ChartObj.barObj.barOne(barData);
	        myChart.on('click',function(param){
	          	var nameCode=searchCode(param.name);
	//          window.location.href = $('#box2').attr('href')+'?name='+param.name+'&code='+nameCode;
	 			window.open($('#box2').attr('href')+'?name='+param.name+'&code='+nameCode);
	        });
	    }

	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);