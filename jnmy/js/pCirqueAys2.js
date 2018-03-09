webpackJsonp([9],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/9.
	 */
	$(function() {
	    laydate({
	        elem: '#changTime',
	        event: 'focus',
	        format: 'YYYY/MM',
	        choose: function(datas){ //选择日期完毕的回调
	           // alert('得到：'+datas);
	        }});
	    fn_chart();

	    function fn_chart(){
	//接口返回的数据 starts
	    	var dt={
			  	"data": {
			  		"yearMonth":['2016-02','2016-03'],
			  		"origin":[
			            {
			            	"originCode":"origin01",
			            	"originName":"市长热线12345",
			            	"appealCounts":[800,900]
			            },
			            {
			            	"originCode":"origin02",
			            	"originName":"公安局",
			            	"appealCounts":[800,980]
			            },
			            {
			            	"originCode":"origin03",
			            	"originName":"信访局",
			            	"appealCounts":[800,880]
			            },
			            {
			            	"originCode":"origin04",
			            	"originName":"督查室",
			            	"appealCounts":[700,900]
			            },
			            {
			            	"originCode":"origin05",
			            	"originName":"城管局",
			            	"appealCounts":[900,970]
			            }
			        ]
			  	}
			}
	//接口返回的数据 ends
	    	var datas=[],maxValue=0;
			for(var i=0; i<dt.data.origin.length;i++){
	    		for(var j=0;j<dt.data.origin[i].appealCounts.length;j++){
	    			maxValue = dt.data.origin[i].appealCounts[j]>maxValue?dt.data.origin[i].appealCounts[j]:maxValue;
	    		}
	    		datas.push(
	    			{
	    				name:dt.data.origin[i].originName,
	    				maxValue:maxValue,
	    				values:dt.data.origin[i].appealCounts
	    			}
	    		)
	    		
	    	}
			//获取来源code
			function searchOriginCode(name){
				for(var i=0;i<dt.data.origin.length;i++){
					if(dt.data.origin[i].originName==name){
						return dt.data.origin[i].originCode;
					}
				}
			}
	        var params = {
	            id:'box1',
	            data:{
	                times:dt.data.yearMonth,
	                data:datas
	            }
	        };
	        var myChart = radarInit(params);
	        myChart.on('click',function(param){
	        	var originCode=searchOriginCode(param.name);
	            window.open($('#box1').attr('href')+'?type=4&name='+param.name+'&time='+param.seriesName+'&code='+originCode);
	        });
	    }
	    function radarInit(param){
	        var data = param.data;
	        var indicator = [];
	        var times = [];
	        var datas = [];
	        for(var i=0;i<data.times.length;i++){
	            times.push({
	                name:data.times[i]
	                //icon:'line'
	            });
	            if(i<1){
	                datas.push({
	                    name:data.times[i],
	                    value:[],
	                    itemStyle: {
	                        normal: {
	                            areaStyle: {
	                                color: "rgba(0,144,244,0.23)"
	                            }
	                        }
	                    }
	                });
	            }else{
	                datas.push({
	                    name:data.times[i],
	                    value:[],
	                    itemStyle: {
	                        normal: {
	                            areaStyle: {},
	                            lineStyle: {
	                                type: "dashed"
	                            }
	                        }
	                    }
	                });
	            }
	        }
	        for(var i=0;i<data.data.length;i++){
	            indicator.push({
	                text : data.data[i].name,
	                max: data.data[i].maxValue
	            });
	            for(var j=0;j<data.times.length;j++){
	                datas[j].value.push(data.data[i].values[j]);
	            }
	        }
	        var option = {
	            title : {
	                text: ''
	            },
	            name: {
	                textStyle: {
	                    color: "#333",
	                    fontSize: 16
	                }
	            },
	            color: ["#008ff5","#f12622"],
	            legend: {
	                orient: "horizontal",
	                x:'right',
	                y: "20",
	                data: times
	            },
	            tooltip : {
	                trigger: 'axis'
	            },
	            calculable : true,
	            polar : [
	                {
	                    type: "circle",
	                    radius:160,
	                    indicator : indicator
	                }
	            ],
	            series : [
	                {
	                    name: '',
	                    type: 'radar',
	                    data : datas,
	                    itemStyle:{
	                    	normal:{
		                    	label:{
		                    		textStyle:{
		                    			fontSize:16
		                    		}
		                    	}
		                    }
	                    }
	                }
	            ]
	        };
	        var mychart = echarts.init(document.getElementById(param.id));
	        mychart.setOption(option);
	        return mychart;
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);