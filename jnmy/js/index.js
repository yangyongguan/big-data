webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var public = __webpack_require__(2);
	var echarts = __webpack_require__(3);
	var layer = __webpack_require__(387);
	$(function() {
		/* 今日投诉举报情况 --假的*/
		var id=2;
		var arr=['良好','一般','轻微预警','高度预警'];
		var aBtn=$('.btn');
		aBtn.html(arr[id]);
		var val=aBtn.html();
		if(val == '良好'){
			aBtn.addClass('lh');
		}else if(val == '一般'){
			aBtn.addClass('yb');
		}else if(val == '轻微预警'){
			aBtn.addClass('qw');
		}else{
			aBtn.addClass('gd');
		}
		$('.btn').click(function(){
			$(this).addClass('active'); //按钮按下效果
			window.open($(this).attr('href')+'?name='+val);
		});
	    
		/* 导出文件路径-弹出框 */
	    exportInit('#exportId');
	    var layerOpt={content:null,height:'100px'};
	    function exportInit(ele){
	        for(var i=0;i<$(".dx_body .title p").length;i++){
	//      	var liDom= '<li><input type="checkbox">'+$(".dx_body .title p").eq(i).text()+'</li>';
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
	                area: ['420px', layerOpt.height], //宽高
	                shadeClose: true,
	                content: layerOpt.content,
	                success: function(layero){
	                    var btn = layero.find('.layui-layer-btn');
	                    btn.css('text-align', 'center');
	//                  //点击确定按钮-出现导出位置弹出框
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
	                	//layer.closeAll();
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
	//              //上一步
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
	    laydate({elem: '#start_date02', event: 'focus'});
	    laydate({elem: '#start_date03', event: 'focus'});
	    laydate({elem: '#start_date04', event: 'focus'});
	    laydate({elem: '#end_date01', event: 'focus'});
	    laydate({elem: '#end_date02', event: 'focus'});
	    laydate({elem: '#end_date03', event: 'focus'});
	    laydate({elem: '#end_date04', event: 'focus'});
	    
	    /* 初始化图表 */
	    initChart();
	    function initChart(){
	        fn_chart05();//民意来源占比
	        fn_chart06();//民意数量变化趋势分析
	        fn_rightBar();
	        fn_chart01();//民意数据图谱
	        fn_chart02();//民意区域分布分析
	        fn_chart03();//民意派发分析
	    }
	    
	    /* 地图按钮切换 */
	    $('.buttonList li').click(function(){
	    	if($(this).hasClass('active')){
	    		$(this).removeClass('active');
	    	}else{
	    		$(this).addClass('active');
	    	}
	    });
	    
	    /* 民意数据图谱 */
	    function fn_chart01(){
	        var dom = document.getElementById('box1');
	        var chart = new JusfounD3Charts.PolarBranchChart();
	        chart.radius($(dom).height() * 0.38);
	        chart.palette([
	            '#fe0000', '#ff9400', '#f6dd0e',
	            '#00d7fe', '#005ed2', '#b33ee3',
	            '#f320b0'
	        ]);
	        function window_resizeHandler() {
	            // 控制图像大小
	            chart.width($(dom).width());
	            chart.height($(dom).height());
	        }
	        window.addEventListener("resize", window_resizeHandler);
	        dom.appendChild(chart.domElement());
	        window_resizeHandler();
	        // 亦支持图结构数据的输入（顶点和边）
	        $.getJSON("../js/polarBranch/graphData.json", function (graphData) {
	            $('.modal').hide();
	            chart.vertexData(graphData.vertices);
	            chart.edgeData(graphData.edges);
	        });
	        //var t1 = setTimeout(function(){
	        //    $('.modal').hide();
	        //    clearTimeout(t1);
	        //    setTimeout(function(){
	        //        chart.capture(function (d) {
	        //            var a = document.createElement("a");
	        //            a.download = "capture_" + new Date().getTime() + ".png";
	        //            a.href = d;
	        //            a.click();
	        //        });
	        //    },2000);
	        //},1000);
	        // 截图操作演示
	    }
	    /* 民意区域分布分析 */ 
	    function fn_chart02(){
	        try{
	            // 创建3D地图应用，可在构造时传递信息，亦可使用Setter。
	            var app = new Jining3dMapLib.MapWithColumn({
	                // 地图板块信息
	                mapItemData: [
	                    {id: "任城区", color: '#5ccbf6'},
	                    {id: "兖州区", color: '#5ccbf6'},
	                    {id: "邹城区", color: '#5ccbf6'},
	                    {id: "金乡县", color: '#5ccbf6'},
	                    {id: "嘉祥县", color: '#5ccbf6'},
	                    {id: "鱼台县", color: '#5ccbf6'},
	                    {id: "微山县", color: '#5ccbf6'},
	                    {id: "泗水县", color: '#5ccbf6'},
	                    {id: "汶上县", color: '#5ccbf6'},
	                    {id: "梁山县", color: '#5ccbf6'},
	                    {id: "太白湖区", color: '#5ccbf6'},
	                    {id: "高新区", color: '#5ccbf6'},
	                    {id: "济宁高新区", color: '#5ccbf6'},
	                    {id: "曲阜市", color: '#5ccbf6'},
	                    {id: "邹城市", color: '#5ccbf6'}
	                ]
	            });
	            var data  ={
	                "status": 200,
	                "data": {"area":[
	                {"areaCode":"370802","areaName":"任城区","appealCount":1000},
	                {"areaCode":"370811","areaName":"高新区","appealCount":2300},
	                {"areaCode":"370826","areaName":"金乡县","appealCount":3000},
	                {"areaCode":"370827","areaName":"鱼台县","appealCount":5000},
	                {"areaCode":"370828","areaName":"微山县","appealCount":1000}]}
	            };
	            var params = [],maxValue=0;
	            for(var i=0;i<data.data.area.length;i++){
	                maxValue = maxValue<data.data.area[i].appealCount?data.data.area[i].appealCount:maxValue;
	                params.push({
	                    id:data.data.area[i].areaName
	            });
	            }
	            var colors=[];
	            var colors=['#fed700','#faba00','#e57100','#d5140b', '#ff7900','#fe9b00','#feb300','#ffc602', '#fce693', '#67e8fe','#00d7fe','#00c0fe','#009eff','#0081d2','#005ed2', '#e12001', '#fe2b00', '#ff4e18'];
	            for(var i=0;i<params.length;i++){
	                params[i].size = 20;
	            	//params[i].color = 0xFFFFFF * Math.random();
	                params[i].color = colors[i];
	            	params[i].height = data.data.area[i].appealCount/maxValue * 200;
	            }
	            // 柱子信息
	            app.columnData = params;
	            var dom = document.getElementById('box2');
	            function window_resizeHandler() {
	                // 控制地图缩放。
	                app.resize(window.innerWidth-300, 700);
	            }
	            window.addEventListener("resize", window_resizeHandler);
	            dom.appendChild(app.domElement);
	            window_resizeHandler();
	            app.appear();
	            //// 监听地图板块的鼠标事件，event上已经放置了必要的内容，基本上地图板块、柱子上附加的数据都在上面
	            // 监听柱子的鼠标事件
	            app.on("columnItemClick", function (event) {
	                window.open($('#box2').attr('href')+'?type=0&name='+event.item.id);
	            });
	            // 截图操作演示-这里使用右键触发。
	            window.addEventListener("contextmenu", function () {
	                //app.capture(function (d) {
	                //    var a = document.createElement("a");
	                //    a.download = "capture_" + new Date().getTime() + ".png";
	                //    a.href = d;
	                //    a.click();
	                //});
	            });
	        }catch (e){
	            console.warn(e.managers);
	        }

	    }
	    /* 民意派发分析 */ 
	    function fn_chart03(){
	        try {
	            // 简易tooltip实现
	            var $tooltip = $("<div></div>").css({
	                "max-width": "200px",
	                "border-radius": "5px",
	                "background-color": "#000000",
	                "color": "#FFFFFF",
	                "position": "absolute",
	                "padding": "10px"
	            });
	            $tooltip.hide();
	            $('#box3').append($tooltip);
	            // 检查浏览器的WebGL支持。
	            if (!Jining3dMapLib.webgl) {
	                alert("浏览器不支持WebGL.");
	                return;
	            }
	            var app = mapFlow();
	            var dom = document.getElementById('box3');
	            function window_resizeHandler() {
	                // 控制地图缩放。
	                app.resize(window.innerWidth-300, 700);
	            }
	            window.addEventListener("resize", window_resizeHandler);
	            dom.appendChild(app.domElement);
	            window_resizeHandler();
	            app.appear();
	            // 当地图隐藏时，可使用app.stop()来停止渲染。
	            // 当地图重新出现时，可使用app.start()继续渲染。
	        }catch (e){
	            console.warn(e.managers);
	        }
	    }
	    /* 民意来源分析--饼图 */
	    function fn_chart05(){
	        var data = {
	            "status": 200,
	            "data": {"origin":[
	                {"originCode":"origin01","originName":"市长热线12345","appealCount":1000},
	                {"originCode":"origin02","originName":"公安局","appealCount":2300},
	                {"originCode":"origin03","originName":"信访局","appealCount":3000},
	                {"originCode":"origin04","originName":"督查室","appealCount":5000},
	                {"originCode":"origin05","originName":"城管局","appealCount":1000}
	            ]}
	        };
	        var picData = {
	            id:'box5',
	            centers:[['50%', '56%'],['50%', '56%']],
	            radius:[['54%', '55%'],['20%', '50%']],
	            lengths:[40,40],
	            legend:{
	                bottom:'50',
	            },
	            seriesName:'民意来源',
	            data:[]
	        };
	        for(var i=0;i<data.data.origin.length;i++){
	            picData.data.push({
	                name:data.data.origin[i].originName,
	                nameCode:data.data.origin[i].originCode,
	                value:data.data.origin[i].appealCount
	            });
	        }

	        var myChart05 = public.ChartObj.pieObj.pieSource(picData);
	        var domEle = document.getElementById('box5');
	        myChart05.on('click',function(params){
	            //window.location.href = $(domEle).attr('href')+'?name='+params.data.name;
	            window.open($(domEle).attr('href')+'?type=1&originCode='+params.data.nameCode+'&name='+params.data.name);
	        })
	    }
	    /* 民意数量变化趋势分析 */ //折线图
	    function fn_chart06(){
	        var data = {
	            "status": 200,
	            "data": {"trend":[
	                {"statisticsDate":"2016-02-01","appealCount":1000},
	                {"statisticsDate":"2016-02-02","appealCount":2300},
	                {"statisticsDate":"2016-02-03","appealCount":3000},
	                {"statisticsDate":"2016-02-04","appealCount":5000},
	                {"statisticsDate":"2016-02-05","appealCount":1000}
	            ]}
	        };
	        var params = {
	            id:'box6',
	            yName:'',
	            xAxis:[],
	            data:[{name:'', data:[]}]
	        }
	        for(var i=0;i<data.data.trend.length;i++){
	            params.xAxis.push(data.data.trend[i].statisticsDate);
	            params.data[0].data.push(data.data.trend[i].appealCount);
	        }
	        params.data[1] = {name:'',data:[2000,2100,2200,2300,3000]};
	        params.data[2] = {name:'',data:[2200,3100,3200,2300,3800]};
	        params.data[3] = {name:'',data:[3000,3100,4200,4300,4600]};

	        var myLine = public.ChartObj.lineObj.lineInit(params);
	        myLine.on('click',function(param){
	            //window.location.href = $('#bhqs').attr('href')+'?name='+param.seriesName;
				window.open($('#box6').attr('href')+'?time='+param.name);
	        })
	    }
	    /* 民意派发分析 */  //右上下拉横向柱图
	    function fn_rightBar(){
	       var option = {
	           backgroundColor:'rgba(230,244,253,0.8)',
	           grid:{
	               left:'180',
	               top:'20',
	               bottom:'20'
	           },
	           yAxis : [
	               {
	                   type : 'category',
	                   data : [ '人口计划生育局','交通运输局','食品药品监督管理局', '司法局','公安局','教育局','卫生局','环保局','水利局','人力资源社会保障局'],
	                   boundaryGap:true,
	                   axisLabel: {
	                       textStyle: {
	                           fontSize: 16,
	                           color: "#000",
	                           fontFamily: "微软雅黑"
	                       },
	                       margin: 10
	                   },
	                   axisTick: {
	                       show:false
	                   },
	                   axisLine:{
	                       lineStyle:{
	                           color:'#ccc',
	                           width: 2,

	                       }
	                   }
	               }
	           ],
	           xAxis : [
	               {
	                   type : 'value',
	                   show:false
	               }
	           ],
	           label:{
	               normal:{
	                   show:true,
	                   position:'right',
	                   textStyle:{
	                       color:'#000'
	                   }
	               }
	           },
	           series : [
	               {
	                   name:'热点预警数量',
	                   type:'bar',
	                   barWidth: '60%',
	                   barGap :'80%',
	                   data:[
	                       {
	                           value:'10',
	                           itemStyle:{
	                               normal:{
	                                   color:['#7fc0e9']
	                               }
	                           }
	                       },
	                       {
	                           value:'20',
	                           itemStyle:{
	                               normal:{
	                                   color:['#7fd0ab']
	                               }
	                           },
	                       },
	                       {
	                           value:'30',
	                           itemStyle:{
	                               normal:{
	                                   color:['#7fc0e9']
	                               }
	                           }
	                       },
	                       {
	                           value:'40',
	                           itemStyle:{
	                               normal:{
	                                   color:['#7fd0ab']
	                               }
	                           }
	                       },
	                       {
	                           value:'50',
	                           itemStyle:{
	                               normal:{
	                                   color:['#7fc0e9']
	                               }
	                           }
	                       },
	                       {
	                           value:'60',
	                           itemStyle:{
	                               normal:{
	                                   color:['#7fd0ab']
	                               }
	                           }
	                       },
	                       {
	                           value:'70',
	                           itemStyle:{
	                               normal:{
	                                   color:['#7fc0e9']
	                               }
	                           }
	                       },
	                       {
	                           value:'80',
	                           itemStyle:{
	                               normal:{
	                                   color:['#7fd0ab']
	                               }
	                           }
	                       },
	                       {
	                           value:'90',
	                           itemStyle:{
	                               normal:{
	                                   color:['#7fc0e9']
	                               }
	                           }
	                       },
	                       {
	                           value:'99',
	                           itemStyle:{
	                               normal:{
	                                   color:['#7fd0ab']
	                               }
	                           }
	                       }
	                   ]
	               }
	           ]
	       };
	       var myRightBar = echarts.init(document.getElementById('barId'));
	       myRightBar.setOption(option);
	       myRightBar.on('click',function(param){
	           //window.location.href = $('#barId').attr('href')+'?name='+param.name;
	           window.open($('#barId').attr('href')+'?name='+param.name);
	       });
	        /* 点击民意指向不忙top10 */
	       $('#barSpanId').on('mouseover',function(){
	           if($('#barId').parent().hasClass('show')) return;
	           $('#barId').parent().addClass('show');
	       });
	        $('#barId').on('mouseout',function(){
	           $('#barId').parent().removeClass('show');
	        });
	    }
	    /* 民意派发分析 */
	    function mapFlow() {
	        var thickness = new Jining3dMapLib.LinearScale();
	        thickness.domain(0, 1);
	        thickness.range(10, 30);
	        // 创建3D地图应用，可在构造时传递信息，亦可使用Setter。
	        var app = new Jining3dMapLib.MapWithFlow({
	            mapItemData: [
	                {id: "任城区", color: '#5ccbf6'},
	                {id: "兖州区", color: '#5ccbf6'},
	                {id: "邹城区", color: '#5ccbf6'},
	                {id: "金乡县", color: '#5ccbf6'},
	                {id: "嘉祥县", color: '#5ccbf6'},
	                {id: "鱼台县", color: '#5ccbf6'},
	                {id: "微山县", color: '#5ccbf6'},
	                {id: "泗水县", color: '#5ccbf6'},
	                {id: "汶上县", color: '#5ccbf6'},
	                {id: "梁山县", color: '#5ccbf6'},
	                {id: "太白湖区", color: '#5ccbf6'},
	                {id: "高新区", color: '#5ccbf6'},
	                {id: "济宁高新区", color: '#5ccbf6'},
	                {id: "曲阜市", color: '#5ccbf6'},
	                {id: "邹城市", color: '#5ccbf6'}
	            ]
	        });
	        // 顶点用到的所有纹理
	        // 顶点用到的所有纹理
	        app.vertexTextures = [
	            // 图钉形标记纹理
	            // 同时由于设计师给的设计稿中图标尺寸太小，会产生发虚的情况
	            "../images/marker_blue_normal.png",
	            "../images/marker_light_blue_normal.png",
	            "../images/marker_red_normal.png",
	            "../images/marker_orange_normal.png",
	            "../images/marker_yellow_normal.png",
	            // 因为设计师忘记设计每个图标的强调态，所以暂时用黑色吧
	            "../images/marker_black_normal.png",
	            // 圆环形标记纹理
	            "../images/ring_white_normal.png",
	            // 同样因为设计师忘记设计每个图标的强调态，所以暂时用黑色吧
	            "../images/ring_black_normal.png"
	        ];
	        var data = {
	                "status": 200,
	                "data": {
	                "graph": {
	                    "vertices": [
	                        {
	                            "code": "origin01",
	                            "name": "12345",
	                            longitude: 116.5769934375,
	                            latitude: 35.348843000000045
	                        },
	                        {
	                            "code": "origin02",
	                            "name": "公安局",
	                            longitude: 116.73108066670773,
	                            latitude: 35.407611879389435
	                        },
	                        {
	                            "code": "origin03",
	                            "name": "信访局",
	                            longitude: 116.30512087890651,
	                            latitude: 35.0382149482422
	                        },
	                        {
	                            "code": "origin04",
	                            "name": "督查室",
	                            longitude: 116.60072390625001,
	                            latitude: 35.03324668652345
	                        },
	                        {
	                            "code": "origin05",
	                            "name": "城管局",
	                            longitude: 116.98503054687501,
	                            latitude: 34.883933332031305
	                        }
	                    ],
	                    "edges": [
	                        {
	                            "source": "origin02",
	                            "target": "origin03",
	                            "value": 233
	                        },
	                        {
	                            "source": "origin02",
	                            "target": "origin04",
	                            "value": 244
	                        },
	                        {
	                            "source": "origin02",
	                            "target": "origin05",
	                            "value": 2332
	                        },
	                        {
	                            "source": "origin01",
	                            "target": "origin02",
	                            "value": 332
	                        }
	                    ]
	                }
	            }
	        };
	        var vertexData = [],edgeData = [];
	        for(var i=0;i<data.data.graph.vertices.length;i++){
	            vertexData.push({
	                id:data.data.graph.vertices[i].code,
	                name:data.data.graph.vertices[i].name,
	                longitude: data.data.graph.vertices[i].longitude,
	                latitude: data.data.graph.vertices[i].latitude,
	                normalTextureIndex: i%5,
	                emphasisTextureIndex: 5
	            });
	        }
	        for(var i=0;i<data.data.graph.edges.length;i++){
	            edgeData.push({
	                source: data.data.graph.edges[i].source,
	                target: data.data.graph.edges[i].target,
	                //thickness: 10 + Math.random() * 20,
	                thickness: thickness.get(Math.random()),
	                // 边的颜色，开始颜色，结束颜色，中间会自动过渡
	                color0: 0xFFFFFF,
	                color1: 0xFFFFFF
	            });
	        }
	        // 顶点信息，这里模拟了5个点。
	        app.vertexData = vertexData;
	        // 边信息，这里模拟了4条边。
	        app.edgeData = edgeData;
	        return app;
	    }
	})
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);