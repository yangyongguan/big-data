

var data = [
		{
			name : '农、林、牧、渔业',
			value: [0.95,5.09]
		}
	],
	data2=[
		{
			name : '建筑业',
			value: [1.58, 2.99]
		},
		{
			name : '批发和零售业',
			value: [2.3, 3.29]
		}
	],
	data3 =[
		{
			name : '居民服务', value: [1.07, 1.85]
		},
		{
			name : '教育', value: [0.8, 1.2]
		},
		{
			name : '', value: [0.65, 1.07]
		},
		{
			name : '文化、体育和娱乐业', value: [0.32, 1.72]
		}
	],
	data4 =[
		{
			name : '居民服务、修理和其他服务业', value: [2.07, 0.85]
		},
		{
			name : '教育', value: [1.89, 1.2]
		},
		{
			name : '', value: [1.65, 2.47]
		},
		{
			name : '文化、体育和娱乐业', value: [1.72, 2.72]
		}
	];
var maxX= 0,maxY=0;
function jisuan(arr){
	for(var i=0;i<arr.length;i++){
		var x = arr[i].value[0];
		var y = arr[i].value[1];
		maxX = x>maxX ? x : maxX;
		maxY = y>maxY ? y : maxY;
	}
}
jisuan(data);
jisuan(data2);
jisuan(data3);
jisuan(data4);

var option = {
	tooltip: {
		trigger: 'axis',
		showDelay: 0,
		axisPointer: {
			show: true,
			type: 'cross',
			crossStyle: {
				type: 'dashed ',
				width: 1,
				color: "3ff6f2",
				textStyle: {
					color: "#c6c6c6"
				}
			}
		}
	},
	legend: {
		data: ['第一产业', '第二产业', '第三产业'],
		itemGap: 34,
		y: '20',
		x: '65%',
		textStyle: {
			color: '#000',
			fontSize: 16
		}
	},
	color: ['#e60f0f', '#ff9f30', '#ffdf30'],
	xAxis: [{
		name: '企业活\n跃度',
		type: 'value',
		max:'dataMax',
		nameTextStyle: {
			fontSize: 16
		},
		splitLine: {
			show: false
		},
		axisLabel: {
			textStyle: {
				fontSize: 16

			}
		},
		axisLine: { // 轴线
			show: true,
			lineStyle: {
				color: '#333',
				type: 'solid',
				width: 1,

			}
		}
	}],
	yAxis: [{
		name: '资本活跃度',
		max:'dataMax',
		type: 'value',
		nameTextStyle: {
			fontSize: 16
		},
		splitLine: {
			show: false
		},
		axisLabel: {
			textStyle: {
				fontSize: 16
			}
		},
		axisLine: { // 轴线
			show: true,
			lineStyle: {
				color: '#333',
				type: 'solid',
				width: 1
			}
		}
	}],
	grid: {
		borderWidth: 0,
		left: '60',
		bottom: '30'
	},
	series: [{
		name: '第一产业',
		type: 'scatter',
		symbol: 'circle',
		symbolSize: 30,
		itemStyle: {
			normal: {
				label: {
					show:false,
					formatter: function(param) {
						return param.name;
					},
					position: 'right',
					textStyle: {
						color: '#666',
						fontSize:10
					}
				}
			}
		},
		markPoint:{
			symbol:'roundRect',
			symbolSize:[100,22],
			data: [
				{
					name: '潜力行业',
					x: 120,
					y: 70,
					label:{
						normal:{
							formatter:'潜力行业'
						}
					},
					textStyle:{
						color:'#666'
					}
				}
			]
		},
		data: data,
		markLine: {
			itemStyle: {
				normal: {
					lineStyle: {
						type: 'solid',
						color: '#c8d4e8'
					}
				},
				emphasis:{
					lineStyle: {
						width:1,
						type: 'solid',
						color: '#c8d4e8'
					}
				}
			},
			symbol: ['none', 'none'],
			data: [
				[{
					value: maxY/2,
					xAxis: 0,
					yAxis: maxY/2
				}, // 当xAxis或yAxis为数值轴时，不管传入是什么，都被理解为数值后做空间位置换算
					{
						xAxis: maxX,
						yAxis: maxY/2
					}
				],
				[{
					value: maxX/2,
					xAxis: maxX/2,
					yAxis: 0
				}, // 当xAxis或yAxis为数值轴时，不管传入是什么，都被理解为数值后做空间位置换算
					{
						xAxis: maxX/2,
						yAxis: maxY
					}
				]
			]
		}
	},
		{
			name: '第二产业',
			type: 'scatter',
			symbol: 'circle',
			symbolSize: 30,
			itemStyle: {
				normal: {
					label: {
						show:false,
						formatter: function(param) {
							return param.name;
						},
						position: 'right',
						textStyle: {
							color: '#666',
							fontSize:10
						}
					}
				}
			},
			markPoint:{
				symbol:'roundRect',
				symbolSize:[100,22],
				data: [
					{
						name: '优势行业',
						x: "85%",
						y: 70,
						label:{
							normal:{
								formatter:'优势行业'
							}
						},
						textStyle:{
							color:'#666'
						}
					}
				]
			},
			data: data2
		},
		{
			name: '第三产业',
			type: 'scatter',
			symbol: 'circle',
			symbolSize: 30,
			itemStyle: {
				normal: {
					label: {
						show:false,
						formatter: function(param) {
							return param.name;
						},
						position: 'right',
						textStyle: {
							color:'#666',
							fontSize:10
						}
					}
				}
			},
			markPoint:{
				symbol:'roundRect',
				symbolSize:[100,22],
				data: [
					{
						name: '弱势行业',
						x: 120,
						y: '85%',
						label:{
							normal:{
								formatter:'弱势行业'
							}
						},
						textStyle:{
							color:'#666'
						}
					}
				]
			},
			data: data3
		},
		{
			name: '第四产业',
			type: 'scatter',
			symbol: 'circle',
			symbolSize: 30,
			itemStyle: {
				normal: {
					label: {
						show:false,
						formatter: function(param) {
							return param.name;
						},
						position: 'right',
						textStyle: {
							color:'#666',
							fontSize:10
						}
					}
				}
			},
			markPoint:{
				symbol:'roundRect',
				symbolSize:[100,22],
				data: [
					{
						name: '支柱行业',
						x:"85%",
						y: "85%",
						label:{
							normal:{
								formatter:'支柱行业'
							}
						},
						textStyle:{
							color:'#666'
						}
					}
				]
			},
			data: data4
		}
	]
};

var ais3_option1 = {
	title: {
		text: '企业新增数',
		y: 10,
		textStyle: {
			fontSize: 12
		}
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		},
		formatter: function(params) {
			var tar;
			if (params[1].value != '-') {
				tar = params[1];
			} else {
				tar = params[0];
			}
			return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
		}
	},
	legend: {
		show: false,
		data: ['企业新增数']
	},
	grid: {
		x: '80',
		x2: '2',
		y: '65',
		y2: '60'
	},
	xAxis: [{
		type: 'category',
		data: ['2015年1月','2015年2月','2015年3月','2015年4月','2015年5月','2015年6月','2015年7月',
			'2015年8月','2015年9月','2015年10月','2015年11月','2015年12月'],
		axisLabel: {
			rotate: 30,
			textStyle:{
				color:'#666'
			}
		},
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		},
		axisTick: {
			show: false
		},
		splitLine: {
			show: true
		},
	}],
	yAxis: [{
		type: 'value',
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		},
		axisLabel: {
			formatter: '{value}个',
			textStyle:{
				color:'#666'
			}
		}
	}, ],
	color:['#d40a02','#fc9f61'],
	series: [{
		name: '辅助',
		type: 'bar',
		stack: '总量',
		itemStyle: {
			normal: {
				barBorderColor: 'rgba(0,0,0,0)',
				color: 'rgba(0,0,0,0)'
			},
			emphasis: {
				barBorderColor: 'rgba(0,0,0,0)',
				color: 'rgba(0,0,0,0)'
			}
		},
		data: [0, 900, 1245, 1530, 1376, 1376, 1511, 1689, 1856, 1495, 1292,1100]
	},{
		name: '企业新增数',
		type: 'bar',
		stack: '总量',
		itemStyle: {
			normal: {
				label: {
					show: true,
					position: 'top'
				}
			}
		},
		data: [900, 345, 393, '-', '-', 135, 178, 286, 300, 400, 100,'-']
	},{
		name: '企业减少数',
		type: 'bar',
		stack: '总量',
		itemStyle: {
			normal: {
				label: {
					show: true,
					position: 'top'
				}
			}
		},
		data: ['-', '-', '-', 200, 100, '-', '-', '-', '-', '-', '-',300]
	}
	]
};



var ais3_option2 = {
	title: {
		text: '产业用电--同比增速',
		textStyle: {
			fontSize: 12
		},
		show: false
	},
	tooltip: {
		trigger: 'axis'
	},
	calculable: true,
	legend: {
		show: false,
		data: ['用量', '对比增速']
	},
	xAxis: [{
		type: 'category',
		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		},
		axisLabel:{
			textStyle:{
				color:'#666'
			}
		},
		axisTick: {
			show: false
		},
	}],
	yAxis: [{
		type: 'value',
		name: '1',
		axisLabel: {
			formatter: '{value}度',
			// margin:[10,0]
			nameGap:10,
			textStyle:{
				color:'#666'
			}
		},
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		}

	}],
	grid: {
		x: '90',
		x2: '30',
		y: '10',
		y2: '80'
	},
	series: [{
		name: '用量',
		type: 'bar',
		data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
	}, {
		name: '对比增速',
		type: 'line',
		data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
	}]
};


var ais3_option3 = {
	title: {
		text: '企业数量增数',
		textStyle: {
			fontSize: 12
		}
	},
	grid: {
		x: '50',
		x2: '30',
		y: '40',
		y2: '20'
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		show: false,
		data: ['山东', '青岛']
	},
	color: ['#62cad7', '#ff9000'],
	xAxis: [{
		type: 'category',
		data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		},axisLabel: {
			formatter: '{value}',
			textStyle:{
				color:"#666"
			}
		},
	}],
	yAxis: [{
		type: 'value',
		axisLabel: {
			formatter: '{value}',
			textStyle:{
				color:'#666'
			}
		},
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		}
	}],
	series: [{
		name: '山东',
		type: 'line',
		data: [11, 11, 4, 13, 12, 13, 10]
	}, {
		name: '青岛',
		type: 'line',
		data: [6, 2, 7, 5, 3, 9, 8]
	}]
};
var ais3_option4 = {
	title: {
		text: '用电量增速对比',
		textStyle: {
			fontSize: 12
		}
	},
	grid: {
		x: '50',
		x2: '30',
		y: '40',
		y2: '20'
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		show: false,
		data: ['山东', '青岛']
	},
	color: ['#62cad7', '#ff9000'],
	xAxis: [{
		type: 'category',
		data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		},
		axisLabel: {
			// formatter: '{value}',
			textStyle:{
				color:'#666'
			}
		},
	}],
	yAxis: [{
		type: 'value',
		axisLabel: {
			formatter: '{value}',
			textStyle:{
				color:'#666'
			}
		},
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		}
	}],
	series: [{
		name: '山东',
		type: 'line',
		data: [11, 11, 4, 13, 12, 13, 10]
	}, {
		name: '青岛',
		type: 'line',
		data: [6, 2, 7, 5, 3, 9, 7]
	}]
};


var ais3_option5 = {
	tooltip: {
		trigger: 'axis'
	},
	title: {
		text: '进出口总额',
		textStyle: {
			fontSize: 12
		}
	},
	grid: {
		x: '50',
		x2: '30',
		y: '40',
		y2: '20'
	},
	calculable: true,
	legend: {
		data: ['出口总额（亿美元）', '进口额数（亿美元）', '进口总额比上年增长（%）']
	},
	color: ['#00a2ff', "#ff4425", "#ff9600"],
	xAxis: [{
		type: 'category',
		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		},
		axisTick: {
			show: false
		},
		axisLabel: {
			// formatter: '{value}',
			textStyle:{
				color:'#666'
			}
		},
	}],
	yAxis: [{
		type: 'value',
		name: '',
		axisLabel: {
			formatter: '{value}',
			textStyle:{
				color:'#666'
			}
		},
		axisLine: {
			lineStyle: {
				color: "#000",
				width: 1
			}
		}
	}, {
		type: 'value',
		name: '',
		axisLabel: {
			formatter: '{value}',
			textStyle:{
				color:'#666'
			}
		},
		axisLine: {
			lineStyle: {
				color: "red",
				width: 0
			}
		}
	}],
	series: [

		{
			name: '出口总额（亿美元）',
			type: 'bar',
			data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		}, {
			name: '进口额数（亿美元）',
			type: 'bar',
			data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
		}, {
			name: '进口总额比上年增长（%）',
			type: 'line',
			yAxisIndex: 1,
			data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
		}
	]
};

var ais3_option6 = {
	title: {
		text: '产业总值',
		textStyle: {
			fontSize: 12
		}
	},
	tooltip: {
		trigger: 'axis'
	},
	grid: {
		x: '50',
		x2: '30',
		y: '40',
		y2: '20'
	},
	calculable: true,
	//legend: {
	//    show: false,
	//    data: ['产业总值']
	//},
	legend: {
		data: ['企业规模', '企业资本性质', '企业推出数']
	},
	color: ['#00a2ff', "#ff4425", "#ff9600"],
	//color: ["#ff9600"],
	xAxis: [{
		type: 'category',
		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		},
		axisTick: {
			show: false
		},axisLabel: {
			// formatter: '{value}',
			textStyle:{
				color:"#666"
			}
		},
	}],
	yAxis: [{
		type: 'value',
		name: '',
		axisLabel: {
			formatter: '{value}',
			textStyle:{
				color:'#666'
			}
		},
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		}
	}],
	series: [
		{
			name: '企业规模',
			type: 'bar',
			data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		},
		{
			name: '企业资本性质',
			type: 'bar',
			data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		},
		{
			name: '企业推出数',
			type: 'bar',
			data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		}
	]
};
var ais3_option7 = {
	title: {
		text: '进口额增速',
		textStyle: {
			fontSize: 12
		}
	},
	grid: {
		x: '50',
		x2: '30',
		y: '40',
		y2: '20'
	},
	tooltip: {
		trigger: 'axis'
	},
	legend: {
		show: false,
		data: ['山东', '青海']
	},
	color: ['#62cad7', '#ff9000'],
	xAxis: [{
		type: 'category',
		data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月'],
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		},
		axisLabel: {
			formatter: '{value}',
			textStyle:{
				color:"#666"
			}
		},
	}],
	yAxis: [{
		type: 'value',
		axisLabel: {
			formatter: '{value}',
			textStyle:{
				color:"#666"
			}
		},
		axisLine: {
			lineStyle: {
				color: "red",
				width: 1
			}
		}
	}],
	series: [{
		name: '青海',
		type: 'line',
		data: [11, 11, 4, 13, 12, 13, 10]
	}, {
		name: '西宁',
		type: 'line',
		data: [6, 2, 7, 5, 3, 9, 7]
	}]
};

var myChart = echarts.init(document.getElementById('box1'));
myChart.setOption(option);

$(function(){
	$("#tab1 a").on('click',function(){
		myChart.setOption(option);
	})
})
