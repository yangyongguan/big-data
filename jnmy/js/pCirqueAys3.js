webpackJsonp([10],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/9.
	 */
	var public = __webpack_require__(2);
	$(function() {
	    laydate({elem: '#start_date01', event: 'focus'});
	    laydate({elem: '#end_date01', event: 'focus'});
	    fn_chart();

	    function fn_chart(){
			var data = {
				"status": 200,
				"data": {"appealType":[
				{"appealTypeCode":"at01","appealTypeName":"咨询","appealCount":6000},
				{"appealTypeCode":"at02","appealTypeName":"投诉举报","appealCount":5300},
				{"appealTypeCode":"at03","appealTypeName":"求助","appealCount":4600},
				{"appealTypeCode":"at04","appealTypeName":"建议","appealCount":5000},
				{"appealTypeCode":"at05","appealTypeName":"表扬","appealCount":4000}]
			    }
			};
			function searchCode(name){
				for(var i=0;i<data.data.appealType.length;i++){
					if(data.data.appealType[i].appealTypeName==name){
						return data.data.appealType[i].appealTypeCode;
					}
				}
			}
			var pData = [],maxValue=0;
			for(var i=0;i<data.data.appealType.length;i++){
				maxValue = maxValue>data.data.appealType[i].appealCount?maxValue:data.data.appealType[i].appealCount;
				pData.push({
					name: data.data.appealType[i].appealTypeName,
					nameCode:data.data.appealType[i].appealTypeCode,
					values:[data.data.appealType[i].appealCount]
				});
			}
			for(var i=0;i<pData.length;i++){
				pData[i].maxValue = maxValue;
			}
			var params = {
				id:'box1',
				centers:['50%','50%'],
				data:{
					times:[''],
					data:pData
				}
			};
			var myChart = radarInit(params);
			myChart.on('click',function(param){
				var name=param.name.split('\r')[0];
				var code = searchCode(name);
				window.open($('#box1').attr('href')+'?type=2&code='+code+'&name='+name);
			});
		}
		function radarInit(param){
			var data = param.data;
			var indicator = [];
			var sumVal = 0;
			var times = [];
			var datas = [];
			var centers = param.centers?param.centers:['20%','60%'];
			for(var i=0;i<data.times.length;i++){
				times.push({
					name:data.times[i],
					icon:'circle'
				});
				if(i<1){
					datas.push({
						name:data.times[i],
						value:[],
						itemStyle: {
							normal: {
								areaStyle: {
									color: "rgba(254,127,0,0.6)"
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
					text : data.data[i].name + '\r\n' + data.data[i].values[0],
					max: data.data[i].maxValue
				});
				for(var j=0;j<data.times.length;j++){
					datas[j].value.push(data.data[i].values[j]);
					 sumVal += data.data[j].values[0];
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
				color: ["#fe7f00"],
				legend: {
					orient: "vertical",
					x:'right',
					y: "20",
					data: times
				},
				calculable : true,
				polar : [
					{
						type: "circle",
						center:centers,
						radius:150,
						indicator : indicator,
					}
				],
				series : [
					{
						name: '',
						type: 'radar',
						data : datas
					}
				]
			};
			var mychart = echarts.init(document.getElementById(param.id));
			mychart.setOption(option);
			//var imgBase = mychart.getDataURL(),size=4000;
			//var imgBaseSize = imgBase.length%size==0?imgBase.length/size:(imgBase.length/size+1);
			////public.CookieObj.setCookie('imgBaseSize',imgBaseSize ,3600);
			//for(var i=0;i<imgBaseSize - 1;i++){
			//	var img = imgBase.substring(i*size,(i+1)*size);
			//	public.CookieObj.setCookie('imgBase'+i,img ,3600);
			//}
			var node = document.createElement("div");
		    $('#box1').append(node);
		    node.innerHTML = sumVal;
		    node.className = 'sum';
			return mychart;
		}
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);