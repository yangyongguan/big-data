webpackJsonp([15],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/10.
	 */
	var public = __webpack_require__(2);
	var echarts = __webpack_require__(3);
	$(function() {
	    initChart();
	    function initChart(){
			var pText = public.GetUrlObj().name+$('#pTypeId').text();
			$('#pTypeId').text(pText);
	        laydate({elem: '#start_date01', event: 'focus'});
	        laydate({elem: '#end_date01', event: 'focus'});
	        fn_chart();
	    }
	    function fn_chart(){
	    	var dt={
				"data": {
					"statisticsDates":["2016-11-01","2016-11-20"],
					"appealType":[
		           		{
							"appealTypeCode":"at01",
							"appealTypeName":"咨询",
							"appealCount":1500,
							"areaCode":"370801001",
							"areaName":"任城区"
						},
		                {
							"appealTypeCode":"at02",
							"appealTypeName":"投诉举报",
							"appealCount":2300,
							"areaCode":"370801001",
							"areaName":"任城区"
						},
		                {
							"appealTypeCode":"at03",
							"appealTypeName":"求助",
							"appealCount":2300,
							"areaCode":"370801001",
							"areaName":"任城区"
						},
		                {
							"appealTypeCode":"at04",
							"appealTypeName":"建议",
							"appealCount":2000,
							"areaCode":"370801001",
							"areaName":"任城区"
						},
		                {
							"appealTypeCode":"at05",
							"appealTypeName":"表扬",
							"appealCount":3000,
							"areaCode":"370801001",
							"areaName":"任城区"
						}
			        ]
				}
			};
	    	var datas=[];
	    	for(var i=0; i<dt.data.appealType.length; i++){
	    		datas.push(
	    			{
	    				value:dt.data.appealType[i].appealCount,
	    				name:dt.data.appealType[i].appealTypeName,
	    				nameCode:dt.data.appealType[i].appealTypeCode,
	    				areaName:dt.data.appealType[i].areaName,
	    				areaNameCode:dt.data.appealType[i].areaCode
	    			}
	    		)
	    	}
	        var option = {
	            title:{
			        text:'',
			        textStyle:{
			            color:'#fff',
			            fontSize:18,
			            fontWeight: 'normal'
			        }
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{b} : {c} ({d}%)",
			        textStyle:{
			            fontSize:16,
			        }
			    },
			    series : [
			        {
			            name:'面积模式',
			            type:'pie',
			            radius : [60, 200],
			            roseType : 'area',
			            itemStyle: {
			    			normal: {
			    				color: function(params) {
			    					var colorList = ['#fe2b00','#ff7900','#ffc602','#67e8fe','#009eff'];
			    					return colorList[params.dataIndex]
			    				}
			    			}
			    		},
			    		label:{
			    		    normal:{
			    		        formatter:'{b}  {d}%',
			    		        textStyle: {
			                        fontSize:16
			                    }
			    		    }
			    		},
						data:datas
			        }
			    ]
	        };
	        var mychart = echarts.init(document.getElementById('box1'));
	        mychart.setOption(option);
			mychart.on('click',function(param){
				window.open($('#box1').attr('href')+'?type=0&type2=1&name='+public.GetUrlObj().name+param.name+'&nameCode='+param.data.nameCode+'&areaNameCode='+param.data.areaNameCode);
			});
	    }

	})
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);