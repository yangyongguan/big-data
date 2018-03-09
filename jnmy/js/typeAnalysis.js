webpackJsonp([19],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/8.
	 */
	var public=__webpack_require__(2);
	var echarts = __webpack_require__(3);

	$(function() {
		laydate({elem: '#start_date01', event: 'focus'});
	    laydate({elem: '#start_date02', event: 'focus'});
	    laydate({elem: '#start_date03', event: 'focus'});
	    laydate({elem: '#end_date01', event: 'focus'});
	    laydate({elem: '#end_date02', event: 'focus'});
	    laydate({elem: '#end_date03', event: 'focus'});
	    
	    fn_charts01();
	    fn_charts02();
		fn_charts03();
		
	    /* 民意类型占比 */  //饼图
	    function fn_charts01(){
	    	//接口返回数据
	    	var dt={
				"data": {
					"appealType":
					[
		                {
							"appealTypeCode":"at01",
							"appealTypeName":"咨询",
							"appealCount":10
						},
		                {
							"appealTypeCode":"at02",
							"appealTypeName":"投诉举报",
							"appealCount":30
						},
		                {
							"appealTypeCode":"at03",
							"appealTypeName":"求助",
							"appealCount":30
						},
		                {
							"appealTypeCode":"at04",
							"appealTypeName":"建议",
							"appealCount":50
						},
		                {
							"appealTypeCode":"at05",
							"appealTypeName":"表扬",
							"appealCount":10
						}
					]
			    }
			};
	    	function searchName(name){
				for(var i = 0;i<dt.data.appealType.length; i++){
					if(dt.data.appealType[i].appealTypeName==name){
						return dt.data.appealType[i].appealTypeName;
					}
				}
			}
	    	function searchCode(name){
				for(var i = 0;i<dt.data.appealType.length; i++){
					if(dt.data.appealType[i].appealTypeName==name){
						return dt.data.appealType[i].appealTypeCode;
					}
				}
			}
	    	var datas=[];
	    	for(var i = 0; i<dt.data.appealType.length; i++){
	    		datas.push(
	    			{
	    				value:dt.data.appealType[i].appealCount,
	    				name:dt.data.appealType[i].appealTypeName
	    			}
	    		)
	    	}
			var picData = {
	            id:'lxzb',
	            title: {
					x: 'center',
					y:'10',
					//text:'全部民意类型占比',
					textStyle: {
						fontSize: 16,
						fontWeight: "bolder",
						color: "#666"
					}
				},
				legend: {
					show:false,
			        bottom:20,
			        right:'center',
			        itemGap: 30,
			        orient:'horizontal',
			        textStyle:{
			            color:'#585858',
			            fontSize: 14
			        },
			        icon:'square'
			    },
	            centers:[['50%', '50%'],['50%', '50%']],
	            radius:[['62%', '63%'],['20%', '56%']],
	            seriesName:'全部民意类型占比',
	            lengths:[30,40],
	            data:datas
			};
	        var myChart01 = public.ChartObj.pieObj.pieSource(picData);
	        myChart01.on('click',function(param){
	        	var code = searchCode(param.name);
	        	var name=searchName(param.data.name);
	            //window.location.href = $('#lxzb').attr('href')+'?name='+param.data.name;
				window.open($('#lxzb').attr('href')+'?type=0&type2=1&name='+name+'&code='+code);
	        })
	    }
	    /* 各类型民意指向部门top10 */  //堆积柱图
		function fn_charts03(){
			//接口返回数据
			var dt={
			  	"data": {
			  		"appealTypes":[
				  		{
				  			"appealTypeCode":"at01","appealTypeName":"咨询"
				  		},
				  		{
				  			"appealTypeCode":"at02","appealTypeName":"投诉举报"
				  		},
				  		{
				  			"appealTypeCode":"at03","appealTypeName":"求助"
				  		},
				  		{
				  			"appealTypeCode":"at04","appealTypeName":"建议"
				  		},
				  		{
				  			"appealTypeCode":"at05","appealTypeName":"表扬"
				  		}
			  		],
			  		"departments":[
						{
							"departCode":"dept01",
							"departName":"人口和计划生育局",
							"appealCounts":[
								242,223,214,204, 198
							]
						},
						{
							"departCode":"dept02",
							"departName":"交通运输局",
							"appealCounts":[
								222, 190,187,184, 180
							]
						},
						{
							"departCode":"dept03",
							"departName":"食品药品监督管理局",
							"appealCounts":[
								212,183,184,180, 160
							]
						},
						{
							"departCode":"dept04",
							"departName":"司法局",
							"appealCounts":[
								202, 175,174,174, 150
							]
						},
						{
							"departCode":"dept05",
							"departName":"公安局",
							"appealCounts":[
								190,183,164,164, 140
							]
						},
						{
							"departCode":"dept06",
							"departName":"教育局",
							"appealCounts":[
								172, 175,154,154, 130
							]
						},
						{
							"departCode":"dept07",
							"departName":"卫生局",
							"appealCounts":[
								162,170,150,144, 120
							]
						},
						{
							"departCode":"dept08",
							"departName":"环保局",
							"appealCounts":[
								160, 165,144,144, 110
							]
						},
						{
							"departCode":"dept09",
							"departName":"水利局",
							"appealCounts":[
								152,163,134,134,105
							]
						},
						{
							"departCode":"dept10",
							"departName":"人力资源与社会保障局",
							"appealCounts":[
								142, 155,124,124, 100
							]
						}
				 		]
			  		}
				};
			//诉求部门名称
			function searchDeptName(name){
				for(var i = 0;i<dt.data.departments.length; i++){
					if(dt.data.departments[i].departName==name){
						return dt.data.departments[i].departName;
					}
				}
			}
			//诉求类型名称
			function searchTypeName(name){
				for(var i = 0;i<dt.data.appealTypes.length; i++){
					if(dt.data.appealTypes[i].appealTypeName==name){
						return dt.data.appealTypes[i].appealTypeName;
					}
				}
			}
			//诉求类型code
			function searchCode(name){
				for(var i = 0;i<dt.data.appealTypes.length; i++){
					if(dt.data.appealTypes[i].appealTypeName==name){
						return dt.data.appealTypes[i].appealTypeCode;
					}
				}
			}
			//部门名称code
			function searchDeptCode(name){
				for(var j = 0;j<dt.data.departments.length; j++){
					if(dt.data.departments[j].departName==name){
						return dt.data.departments[j].departCode;
					}
				}
			}
			var legends = [];  //诉求类型name
			var aTypeCodes=[]; //诉求类型code
			var series=[];   //部门诉求account
			var xAxisName=[]; //部门name
			for(var i = 0;i<dt.data.appealTypes.length; i++)
			{
				aTypeCodes.push(dt.data.appealTypes[i].appealTypeCode);
				legends.push(dt.data.appealTypes[i].appealTypeName);
				var datas = [];
				for(var j = 0;j<dt.data.departments.length; j++){
					datas.push(dt.data.departments[j].appealCounts[i]);
					if(xAxisName.length==dt.data.departments.length) continue;
					xAxisName.push(dt.data.departments[j].departName);
				}
				series.push({
					name:dt.data.appealTypes[i].appealTypeName,
			        type:'bar',
			        barWidth:'50%',
			        stack: '1',
					data:datas
				});
			}
	        var option = {
	             tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    legend: {
			        top:'10',
			        right:'30',
			        itemGap: 30,
			        orient:'horizontal',
			        textStyle:{
			            color:'#585858',
			            fontSize: 14
			        },
			        data:legends,
			        icon:'square'
			    },
			    grid: {
			        x: '50',
			        x2: '30',
			        y: '60',
			        y2: '100'
			    },
			    color:['#fe9327','#fdc52e','#fb571f','#6fe7fc','#1aa0fb'],
			    xAxis : [
			        {
			            type : 'category',
			            axisLabel:{
			                textStyle:{
			                    color:'#333'
			                },
			                interval:'0',
			                rotate:'45'
			            },
			            axisLine:{
			                lineStyle:{
			                    color:'#d9d9d9'
			                }
			            },
			            axisTick:{
			                show:false
			            },
			            splitLine: {
			    			show: true,
			    			lineStyle: {
			    				color: '#ccc',
			    				type : "solid"
			    			}
			    		},	
			        	data :xAxisName
			        }
			    ],
			    yAxis : [
			        {
			            min: 0,
			            type : 'value',
			            name: '',
			            axisLabel:{
			                textStyle:{
			                    color:'#333'
			                }
			            },
			            axisLine:{
			                lineStyle:{
			                    color:'#d9d9d9'
			                }
			            },
			            axisTick:{
			                show:false
			            },
			            splitLine: {
			    			show: true,
			    			lineStyle: {
			    				color: '#ccc',
			    				type : "solid"
			    			}
			    		}
			        }
			    ],
			    series : series
	    	};
	        
	        var mychart = echarts.init(document.getElementById('zxbm'));
	        mychart.setOption(option);
	        
	        mychart.on('click',function(param){
	        	var code = searchCode(param.seriesName);
	        	var departCode=searchDeptCode(param.name);
	        	var dPName=searchDeptName(param.name);
	        	var aPName=searchTypeName(param.seriesName);
	//      	console.log(code + ' __ ' + departCode);
				window.open($('#zxbm').attr('href')+'?name='+dPName+'&name2='+aPName+'&code='+code+'&code2='+departCode);
	        });
	    }
		
	    /* 各类型民意变化趋势 */  //折线图
	    function fn_charts02(){
	    	//接口返回数据
	    	var dt={
				"status": 200,
				"data": {
					"statisticDate":['2016-10-10','2016-10-11','2016-10-12','2016-10-13','2016-10-14','2016-10-15','2016-10-16'],
					"appealType":[
						{
							"appealTypeCode":"at01",
							"appealTypeName":"全部",
							"appealCounts":[481, 471, 455, 473, 462, 403, 400]
						},
						{
							"appealTypeCode":"at02",
							"appealTypeName":"投诉举报",
							"appealCounts":[181, 171, 155, 173, 162, 203, 200]
						},
						{
							"appealTypeCode":"at03",
							"appealTypeName":"咨询",
							"appealCounts":[311, 301, 391, 351, 315, 318, 310]
						},
						{
							"appealTypeCode":"at04",
							"appealTypeName":"求助",
							"appealCounts":[211, 201, 161, 191, 215, 218, 210]
						},
						{
							"appealTypeCode":"at05",
							"appealTypeName":"建议",
							"appealCounts":[271, 271, 251, 211, 235, 258, 270]
						}
					]
		     	}
			};
			function searchNameCode(name){
				for(var i = 0;i<dt.data.appealType.length; i++){
					if(dt.data.appealType[i].appealTypeName==name){
						return dt.data.appealType[i].appealTypeCode;
					}
				}
			}
			var params = {
	            id:'bhqs',
	            yName:'民意数量',
				xAxis:dt.data.statisticDate,
	            data:[]
	        };
			for(var i=0;i<dt.data.appealType.length;i++){
				params.data.push({
					name:dt.data.appealType[i].appealTypeName,
					nameCode:dt.data.appealType[i].appealTypeCode,
					data:dt.data.appealType[i].appealCounts
				});
			}
	        var myLine = public.ChartObj.lineObj.lineInit(params);
	        myLine.on('click',function(param){
	        	var nameCode=searchNameCode(param.seriesName)
	            //window.location.href = $('#bhqs').attr('href')+'?name='+param.seriesName;
				window.open($('#bhqs').attr('href')+'?name='+param.seriesName+'&code='+nameCode);
	        })
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);