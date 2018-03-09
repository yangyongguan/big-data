function randomData() {
	return Math.round(Math.random()*100);
}
	//var jsonData = [
	//	{ name: '市南区', value:randomData()},
	//	{ name: '市北区', value:randomData()},
	//	{ name: '黄岛区', value:randomData()},
	//	{ name: '崂山区', value:randomData()},
	//	{ name: '李沧区', value:randomData()},
	//	{ name: '城阳区', value:randomData()},
	//	{ name: '胶州市', value:randomData()},
	//	{ name: '即墨市', value:randomData()},
	//	{ name: '平度市', value:randomData()},
	//	{ name: '莱西市', value:randomData()}
	//];
	var geoCoordMap = {
		'市南区':[120.38,36.07],
		'市北区':[120.38,36.08],
		'黄岛区':[120.18,35.97],
		'崂山区':[120.47,36.10],
		'李沧区':[120.43,36.15],
		'城阳区':[120.37,36.30],
		'胶州市':[120.03,36.27],
		'即墨市':[120.45,36.38],
		'平度市':[119.95,36.78],
		'莱西市':[120.50,36.87]
	};
	var convertData = function (data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name];
			if (geoCoord) {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value)
				});
			}
		}
		return res;
	};
	$(document).ready(function(){
		var myChart = echarts.init(document.getElementById('main'));
		$('.citem ul li').on('click',function(){
			//设置当前选中项为选中样式
			$(this).addClass('active').siblings().removeClass('active');
			var jsonData = [
				{ name: '市南区', value:randomData()},
				{ name: '市北区', value:randomData()},
				{ name: '黄岛区', value:randomData()},
				{ name: '崂山区', value:randomData()},
				{ name: '李沧区', value:randomData()},
				{ name: '城阳区', value:randomData()},
				{ name: '胶州市', value:randomData()},
				{ name: '即墨市', value:randomData()},
				{ name: '平度市', value:randomData()},
				{ name: '莱西市', value:randomData()}
			];
			CreateMap(myChart,convertData(jsonData));
		});
		//选中第一个
		$($('.citem ul li').get(0)).trigger('click');
	});

