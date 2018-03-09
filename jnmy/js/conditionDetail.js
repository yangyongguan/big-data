webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/9.
	 */
	var public = __webpack_require__(2);
	var echarts = __webpack_require__(3);
	var layer = __webpack_require__(387);
	$(function() {
		/* 今日投诉举报情况 */
		//获取url参数
		var name = public.GetUrlObj().name;
		var str='今日投诉举报民意超过了轻微预警线，建议领导重视；<br/>投诉举报主题主要集中在：交通管理、资源环境、三农问题三个方面，建议领导对这三方面重点关注；<br/>投诉举报主要针对交管局、环保局、农业局，建议领导督促这三个部门尽快进行处理。';
		var aBtn=$('.btn');
		var oUl=$('.today_con_exp');
		if(name == '良好'){
			aBtn.addClass('lh');
		}else if(name == '一般'){
			aBtn.addClass('yb');
		}else if(name == '轻微预警'){
			aBtn.addClass('qw');
		}else{
			aBtn.addClass('gd');
		}
		aBtn.html(name);
		oUl.html(str);
		
		/* 导出文件路径-弹出框 */
	    exportInit('#exportId');
	    var layerOpt={content:null,height:'100px'};
	    function exportInit(ele){
	        for(var i=0;i<$(".dx_body .title p").length;i++){
	//          var liDom= '<li><input type="checkbox">'+$(".dx_body .title p").eq(i).text()+'</li>';
	            var liDom= '<li><input type="checkbox" class="chk_1" id="m'+i+'"><label for="m'+i+'"></label>'+$(".dx_body .title p").eq(i).text()+'</li>';
	            $('#exportModalId ul').append(liDom);
	        }
	        $(ele).on('click',function(){
	            if(!layerOpt.content){
	                layerOpt.content = $('#exportModalId').html();
	                layerOpt.height = 100 + $('#exportModalId .exportModal').height()+'px';
	                $('#exportModalId').remove();
	            }
	            layer.open({
	                type: 1,
	                btn:['确认','取消'],
	                btnAlign: 'l',
	                title:['请选择导出的内容','padding-left: 74px !important;height: 46px;line-height:46px;font-size:18px;text-align:center;background: #0298fa;color:#fff;'],
	                area: ['480px', layerOpt.height], //宽高
	                shadeClose: true,
	                content: layerOpt.content,
	                success: function(layero){
	                    var btn = layero.find('.layui-layer-btn');
	                    btn.css('text-align', 'center');
	                    //导出位置弹出框
	                    var confirm=layero.find('.layui-layer-btn0');
		                confirm.css({'background-color':'#169bf6','border-color':'#4898d5','color':'#fff'});
	                    confirm.attr('id','confirmBtn');
	                    confirm.click(function(){
	                    	if($('input[type=checkbox]').is(':checked')) {
	                    		layer.closeAll();
	                    		//exportInit2('#confirmBtn');
	                    		
							}else{
						        var content = '<div class="selfModal" style="height:130px;">'+
	//					            '<i class="su_icon"></i>'+
						            '<p>'+'请您至少选择一项！'+'</p>'+
						            '<span class="title_sub">3秒后将自动返回</span>'+
						            '<i class="loading"></i>'+
						            '</div>';
						        layer.open({
						            type: 1,
						            title:['提示','padding-left: 74px !important;height: 46px;line-height:46px;font-size:18px;text-align:center;background: #0298fa;color:#fff;'],
						            area: ['420px', ''], //宽高
						            shadeClose: false, //开启遮罩关闭
						            time:3000,
						            content: content
						        });
							}
	                    });
	                },
	                yes: function(index, layero){//点击确定按钮
	                    var imgs = [];
	                    var inputs = $('input[type="checkbox"]');
	                    for(var k=1;k<inputs.length;k++){
	                        var imgBase64='';
	                        //if(k==1){
	                        //    imgBase64 = localStorage.getItem('imgBase');
	                        //}
	                        if(inputs.eq(k).is(':checked')){
	                            var input =  $(".dx_body .title").eq(k-1).find('input');
	                            imgs.push({
	                                startDate:input.eq(0).length!=0?input.eq(0).val():'',
	                                endDate:input.eq(1).length!=0?input.eq(1).val():'',
	                                imgBase64:imgBase64
	                            });
	                            //console.log(imgs);
	                        }
	                    }
	                }
	            });
	            $("#selectAll").click(function(){
	                $("input[type='checkbox']").attr("checked", $(this).attr("checked"));
	                $("input[type='checkbox']").prop("checked", $(this).prop("checked"));
	                var str = '';
	                $($("input[type='checkbox']:checked")).each(function(){
	                    str += $(this).next().text() + ',';
	                });
	            });
	        });
	    }
	    
		/* 导出文件位置-弹出框 */
	//	var layerOpt2={content:null,height:'100px'};
	//  function exportInit2(ele){
	//      if(!layerOpt2.content){
	//          layerOpt2.content = $('#exportModalId2').html();
	//          layerOpt2.height = '280px';
	//          $('#exportModalId2').remove();
	//      }
	//      layer.open({
	//          type: 1,
	//          btn:['上一步','确认','取消'],
	//          btnAlign: '2',
	//          title:['请选择文件导出位置','padding-left: 74px !important;height: 46px;line-height:46px;font-size:18px;text-align:center;background: #0298fa;color:#fff;'],
	//          area: ['420px', layerOpt2.height], //宽高
	//          shadeClose: true,
	//          content: layerOpt2.content,
	//          success: function(layero){
	//              var btn = layero.find('.layui-layer-btn');
	//              btn.css('text-align', 'center');
	//               //上一步
	//              var preBtn=layero.find('.layui-layer-btn0');
	//              preBtn.click(function(){
	//              	$('#layui-layer1').show();
	//  				$('#layui-layer-shade1').show();
	//              })
	//              //确定
	//              var blueBtn = layero.find('.layui-layer-btn1');
	//              blueBtn.css({'background-color':'#169bf6','border-color':'#4898d5','color':'#fff'});
	//              blueBtn.click(function(){
	//              	layer.closeAll();
	//              });
	//          },
	//      });
	//  }
	    
		/* 日历 */
		laydate({elem: '#start_date01', event: 'focus'});
	    laydate({elem: '#end_date01', event: 'focus'});
	    
	    /* 初始化图表 */
		initChart();
		function initChart(){
	        fn_chart01();//今日投诉举报民意变化趋势
	        fn_chart02();//投诉举报民意主题top10
	        fn_chart03();//投诉举报指向部门top10
	   	}
		
		/* 今日投诉举报民意变化趋势 */
		function fn_chart01(){
	        var option = {
	            title: {
			        text: '今日投诉举报变化',
			        textStyle: {
			            fontSize: 14
			        },
			        top:10,
			        left:'center'
			    },
			    tooltip: {
			        trigger: 'axis'
			    },
			    legend: {
			        data:['投诉总量','主要部门','主要主题'],
			        right:30,
			        top:10,
			        itemGap: 30,
			        itemHeight:10,
			        icon:'square'
			    },
			    grid: {
			        x: '60',
			        x2: '45',
			        y: '50',
			        y2: '60'
			    },
			    label:{
			        normal:{
			            show:true,
			            position:'top',
			            textStyle:{
			                color:'#808080'
			            }
			        }
			    },
			    xAxis:  {
			        name:'时间',
			        nameLocation:'middle',
			        nameGap :'30',
			        nameTextStyle:{
			             color:'#333'
			        },
			        type: 'category',
			        axisLabel:{
			            textStyle:{
			                color:'#333'
			            }
			        },
			        axisLine:{
			            lineStyle:{
			                color:'#ccc'
			            }
			        },
			        axisTick:{
			            show:false
			        },
			        splitLine: {
						show:false,
						lineStyle: {
							color: '#ccc',
							type : "solid"
						}
					},	
			        boundaryGap: false,
				    data: ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点','24点']
				    },
				    yAxis: {
				        name:'数量',
				        nameGap :'40',
				        nameLocation:'middle',
				        nameTextStyle:{
				             color:'#333'
				        },
				        min:'-200',
				        interval:200,
				        type: 'value',
				        axisLabel:{
				            textStyle:{
				                color:'#333'
				            },
				            formatter: '{value}'
				        },
				        axisLine:{
				        	show:false,
				            lineStyle:{
				                color:'#d9d9d9'
				            }
				        },
				        axisTick:{
				            show:false
				        },
				        splitLine: {
							show:true,
							lineStyle: {
								color: '#ddd',
								type : "solid"
							}
						}
				    },
				    color:['#fb0c0f','#fc8124','#efd51c','#5ccbf6','#009eff'],
				    series: [
			        {
			            name:'投诉总量',
			            type:'line',
			            data:[11, 21, 21, 21, 25, 28, 30,31, 31, 251, 281, 315, 328, 340,371, 411, 431, 551, 665, 781, 800,911, 1031, 1161, 1281],
			            symbol:'emptyCircle',
			            symbolSize:10,
			            markLine: {
			                data: [
			                    {type: '', name:'预警线',yAxis:1000}
			                ],
			                label:{
			                    normal:{
			                        formatter:'预警线'
			                    }
			                }
			            }
			        },
			        {
			            name:'主要部门',
			            type:'line',
			            data:[11, 21, 21, 21, 25, 28, 30,31, 31,131, 201, 215, 223, 232, 273, 310,322,333,344,355,366,377,388,422,422],
			            symbol:'emptyCircle',
			            symbolSize:10
			        },
			        {
			            name:'主要主题',
			            type:'line',
			            data:[11, 21, 21, 21, 25, 28, 30,31, 31,61, 102, 122, 145, 153, 162, 170,180,190,200,210,220,230,240,250,260],
			            symbol:'emptyCircle',
			            symbolSize:10
			        }
			    ]
	        };
	        var myTrendLine = echarts.init(document.getElementById('box1'));
	        myTrendLine.setOption(option);
	    }
		
		/* 投诉举报民意主题top10 */
		function fn_chart02(){
	        var option = {
	        	title: {
			        text: '投诉举报民意主题top10',
			        textStyle: {
			            fontSize: 14
			        },
			        top:10,
			        left:'center'
			    },
			    tooltip: {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    calculable: true,
			    xAxis: [{
			        type: 'category',
			        name: '民意主题',
			        nameLocation:'middle',
			        nameGap :'30',
			        nameTextStyle:{
			             color:'#333'
			        },
			        data: ['交通管理','资源环境','三农问题','财税金融','文化教育','人事劳动','民生问题','社会治安','机关建设','公共服务'],
			        axisLine: {
			            lineStyle: {
			                color: "#ccc",
			                width: 1
			            }
			        },
			        axisTick: {
			            show: false
			        },
			        axisLabel: {
			            formatter: '{value}'
			            ,textStyle:{
			                color:'#333'
			            }
			        },
			       splitLine: {
						show: false,
						lineStyle: {
							color: '#ddd',
							type : "solid"
						}
					},
			    }],
			    color:["#018ff3"],
			    yAxis: [{
			        min:0,
			        interval:50,
			        type: 'value',
			        name: '数量',
			        nameLocation:'middle',
			        nameGap :'40',
			        nameTextStyle:{
			             color:'#333'
			        },
			        axisLabel: 
			        {
			            formatter: '{value}',
			            textStyle:{
			                color:'#333'
			            }
			        },
			        axisLine: {
			            lineStyle: {
			                color: "#ccc",
			                width: 1
			            },
			            show: false
			        },
			        splitLine: {
						show: true,
						lineStyle: {
							color: '#ddd',
							type : "solid"
						}
					},	
					axisTick: {
						show: false
					}
			    }],
			    label:{
			        normal:{
			            show:true,
			            position:'top',
			            textStyle:{
			                color:'#808080'
			            }
			        }
			    },
			    grid: {
			        x: '60',
			        x2: '45',
			        y: '50',
			        y2: '60'
			    },
			    series: [{
			        name: '投诉数量',
			        type: 'bar',
			        barWidth:'50',
			        data:[
			            {
			                name:'交通管理',
			                value:334,
			                //循环数据，判断vallue是否大于300，如果大于300，则添加‘itemStyle的color为red’的这个属性
			                itemStyle:{
			                    normal:{
			                        color:'#fb0c0f'
			                    }
			                }
			            },
			            {
			                name:'资源环境',
			                value:251
			            },
			            {
			                name:'三农问题',
			                value:197
			            },
			            {
			                name:'财税金融',
			                value:177
			            },
			            {
			                name:'文化教育',
			                value:156
			            },
			            {
			                name:'人事劳动',
			                value:136
			            },
			            {
			                name:'民生问题',
			                value:106
			            },
			            {
			                name:'社会治安',
			                value:96
			            },
			            {
			                name:'机关建设',
			                value:76
			            },
			            {
			                name:'公共服务',
			                value:56
			            }
			        ],
			        markLine: {
			            data: [
			                {
			                    type: '',
			                    name:'预警线',
			                    yAxis:300
			                },
			                
			            ],
			            label:{
			                normal:{
			                    formatter:'预警线'
			                }
			            },
			            lineStyle:{
			                normal:{
			                    color:'#fb0c0f'
			                }
			            }
			        }
			    }]
	        };
	        var myThemeBar = echarts.init(document.getElementById('box2'));
	        myThemeBar.setOption(option);
	    }
		
		/* 投诉举报指向部门top10 */
		function fn_chart03(){
	        var option = {
	    	    title: {
			        text: '投诉举报指向部门top10',
			        textStyle: {
			            fontSize: 14
			        },
			        top:10,
			        left:'center'
			    },
			    tooltip: {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    calculable: true,
			    xAxis: [{
			        type: 'category',
			        name: '主题名称',
			        nameLocation:'middle',
			        nameGap :'30',
			        nameTextStyle:{
			             color:'#333'
			        },
			        data: ['交管局','环保局','农业局','城管局','公安局','司法局','水利局','计划生育局','城建局','任城管理办公室'],
			        axisLine: {
			            lineStyle: {
			                color: "#ccc",
			                width: 1
			            }
			        },
			        axisTick: {
			            show: false
			        },
			        axisLabel: {
			            formatter: '{value}'
			            ,textStyle:{
			                color:'#333'
			            }
			        },
			       splitLine: {
						show: false,
						lineStyle: {
							color: '#ddd',
							type : "solid"
						}
					},
			    }],
			    color:["#018ff3"],
			    yAxis: [{
			        min:0,
			        interval:50,
			        type: 'value',
			        name: '数量',
			        nameLocation:'middle',
			        nameGap :'40',
			        nameTextStyle:{
			             color:'#333'
			        },
			        axisLabel: 
			        {
			            formatter: '{value}',
			            textStyle:{
			                color:'#333'
			            }
			        },
			        axisLine: {
			            lineStyle: {
			                color: "#ccc",
			                width: 1
			            },
			            show: false
			        },
			        splitLine: {
						show: true,
						lineStyle: {
							color: '#ddd',
							type : "solid"
						}
					},	
					axisTick: {
						show: false
					}
			    }],
			     label:{
			        normal:{
			            show:true,
			            position:'top',
			            textStyle:{
			                color:'#808080'
			            }
			        }
			    },
			    grid: {
			        x: '60',
			        x2: '45',
			        y: '50',
			        y2: '60'
			    },
			    series: [{
			        name: '投诉数量',
			        type: 'bar',
			        barWidth:'50',
			        data:[
			            {
			                name:'交管局',
			                value:434,
			                //循环数据，判断vallue是否大于200，如果大于300，则添加‘itemStyle的color为red’的这个属性
			                itemStyle:{
			                    normal:{
			                        color:'#fb0c0f'
			                    }
			                }
			            },
			            {
			                name:'环保局',
			                value:351,
			                //循环数据，判断vallue是否大于200，如果大于300，则添加‘itemStyle的color为red’的这个属性
			                itemStyle:{
			                    normal:{
			                        color:'#fb0c0f'
			                    }
			                }
			            },
			            {
			                name:'农业局',
			                value:297,
			                //循环数据，判断vallue是否大于200，如果大于300，则添加‘itemStyle的color为red’的这个属性
			                itemStyle:{
			                    normal:{
			                        color:'#fb0c0f'
			                    }
			                }
			            },
			            {
			                name:'城管局',
			                value:177
			            },
			            {
			                name:'公安局',
			                value:136
			            },
			            {
			                name:'司法局',
			                value:96
			            },
			            {
			                name:'水利局',
			                value:76
			            },
			            {
			                name:'计划生育局',
			                value:56
			            },
			            {
			                name:'城建局',
			                value:36
			            },
			            {
			                name:'任城管理办公室',
			                value:16
			            }
			        ],
			        markLine: {
			            data: [
			                {
			                    type: '',
			                    name:'预警线',
			                    yAxis:200
			                },
			                
			            ],
			            label:{
			                normal:{
			                    formatter:'预警线'
			                }
			            },
			            lineStyle:{
			                normal:{
			                    color:'#fb0c0f'
			                }
			            }
			        }
			    }]
	        };
	        var myDeptBar = echarts.init(document.getElementById('box3'));
	        myDeptBar.setOption(option);
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);