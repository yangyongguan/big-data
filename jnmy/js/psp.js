webpackJsonp([16],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/9.
	 */
	var public = __webpack_require__(2);
	$(function() {
	    initData();
	    function initData(){
	        var time = public.GetUrlObj().time;
	        var dt={
	  			"data": {"origin":[
							{"originCode":"origin01","originName":"市长热线12345","appealCount":1000},
	                 		{"originCode":"origin02","originName":"公安局","appealCount":2300},
	                 		{"originCode":"origin03","originName":"信访局","appealCount":3000},
	                 		{"originCode":"origin04","originName":"督查室","appealCount":5000}, 
	                 		{"originCode":"origin05","originName":"城管局","appealCount":1000}
	         			]
	  				}
				}
	        
	        var datas=[];
	        for(var i=0; i<dt.data.origin.length; i++){
	        	datas.push(
	        		{
	        			value:dt.data.origin[i].appealCount,
	        			name:dt.data.origin[i].originName,
	        			nameCode:dt.data.origin[i].originCode
	        		}
	        	);
	        }
	        var picData = {
	            id:'box1',
	            seriesName:'民意来源',
	            centers:[['50%', '50%'],['50%', '50%']],
	            radius:[['62%', '63%'],['20%', '56%']],
	            lengths:[40,50],
				data:datas
	        };
	        var myChart = public.ChartObj.pieObj.pieSource(picData);
	        myChart.on('click',function(param){
	        	window.open($('#box1').attr('href')+'?type=4&name='+param.name+'&code='+param.data.nameCode);
	            //window.location.href = $('#box1').attr('href')+'?type=4&name='+param.name;
	        });
	    }
	})
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);