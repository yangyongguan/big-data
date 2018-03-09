
var ais3_charts1 = echarts.init(document.getElementById('left1'));
ais3_charts1.setOption(ais3_option1);

var myChart2 = echarts.init(document.getElementById('right1'));
myChart2.setOption(ais3_option2);
//产业用电水油煤数量变化,下拉框选择

var myChart3 = echarts.init(document.getElementById('left2'));
myChart3.setOption(ais3_option3);

var myChart4 = echarts.init(document.getElementById('right2'));
myChart4.setOption(ais3_option4);
var myChart5 = echarts.init(document.getElementById('left3'));
myChart5.setOption(ais3_option5);
var myChart6 = echarts.init(document.getElementById('right3'));
myChart6.setOption(ais3_option6);
var myChart7 = echarts.init(document.getElementById('left4'));
myChart7.setOption(ais3_option7);

var aisChart={};
//企业数量变化
aisChart.fn_Chart1 = function(type){
	var one = Math.round(Math.random() * 900);
	ais3_charts1.setOption({
		xAxis: [{
			data: ['2015年1月','2015年2月','2015年3月','2015年4月','2015年5月','2015年6月','2015年7月',
				'2015年8月','2015年9月','2015年10月','2015年11月','2015年12月']
		}],
		series: [{
			name: '辅助',
			data: [0, one, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292,1100]
		},{
			name: '企业新增数',
			data: [one, 345, 393, '-', '-', 135, 178, 286, 300, 400, 100,'-']
		},{
			name: '企业减少数',
			data: ['-', '-', '-', 200, 100, '-', '-', '-', '-', '-', '-',300]
		}
		]
	});
}
//产业用电水油煤数量变化
aisChart.fn_Chart2 = function(type1,type2){
	myChart2.setOption({
		series: [{
			name: '用量',
			type: 'bar',
			data: [Math.round(Math.random() * 100), 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		}, {
			name: '对比增速',
			type: 'line',
			data: [Math.round(Math.random() * 20), 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
		}]});
}
aisChart.fn_Chart3 = function(type){
	var one = Math.round(Math.random() * 10);
	myChart3.setOption({
		xAxis: [{
			data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
		}],
		series: [{
			name: '山东',
			data: [11, 11, 4, 13, 12, 13, 10]
		}, {
			name: '青岛',
			data: [one, 2, 7, 5, 3, 9, 8]
		}]
	});
}
aisChart.fn_Chart4 = function(type){
	var one = Math.round(Math.random() * 10);
	myChart4.setOption({
		xAxis: [{
			data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
		}],
		series: [{
			name: '山东',
			data: [11, 11, 4, 13, 12, 13, 10]
		}, {
			name: '青岛',
			data: [one, 2, 7, 5, 3, 9, 8]
		}]
	});
}

aisChart.fn_Chart5 = function(type){
	var one = Math.round(Math.random() * 10);
	myChart5.setOption({
		xAxis: [{
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		}],
		series: [
			{
				name: '出口总额（亿美元）',
				data: [one, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			}, {
				name: '进口额数（亿美元）',
				data: [one+2, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
			}, {
				name: '进口总额比上年增长（%）',
				yAxisIndex: 1,
				data: [one+0.5, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
			}
		]
	});
}

aisChart.fn_Chart6 = function(type){
	var one = Math.round(Math.random() * 100);
	myChart6.setOption({
		xAxis: [{
			data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
		}],
		series: [
			{
				name: '企业规模',
				data: [one, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			},
			{
				name: '企业资本性质',
				data: [one, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			},
			{
				name: '企业推出数',
				data: [one, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			}
		]
	});
}

aisChart.fn_Chart7 = function(type) {
	var one = Math.round(Math.random() * 10);
	var two = Math.round(Math.random() * 10);
	myChart7.setOption({
		xAxis: [{
			data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
		}],
		series: [{
			name: '山东',
			data: [one, 11, 4, 13, 12, 13, 10]
		}, {
			name: '青海',
			data: [two, 2, 7, 5, 3, 9, 7]
		}]
	});
}
aisChart.fn_Tab1 = function(type) {
   //此处请求后台，加载表格1数据
}
aisChart.fn_Tab2 = function(type) {
  //此处请求后台，加载表格2数据
}

var type = 0,type2 = 0;
$('#select02').on('change',function(){
	type2 = this.value;
	aisChart.fn_Chart2(type,type2);
});
$('#select01').on('change',function(){
	type = this.value;//选中类别
});
//细分行业下拉框, 重写加载所有数据
$('.searchBtn').on('click',function(){
	aisChart.fn_Chart1(type);
	aisChart.fn_Chart2(type,type2);
	aisChart.fn_Tab1(type);//表格1
	aisChart.fn_Tab2(type);//表格2
	aisChart.fn_Chart3(type);
	aisChart.fn_Chart4(type);
	aisChart.fn_Chart5(type);
	aisChart.fn_Chart6(type);
	aisChart.fn_Chart7(type);
});
$('.searchBtn').trigger('click');

	