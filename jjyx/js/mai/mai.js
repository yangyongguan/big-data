/**
 * Created by yyg on 2016/10/28.
 */
$(function(){
    initChart();
    function initChart(){
        lineCharts1();
        lineCharts2();
        lineCharts3();
        lineCharts4();
    }
    function lineCharts1(){
        var option = {
            title: {
                text: '农、林、牧、渔业',
                textStyle:{
                    fontSize:14
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            grid:{
                x:50,
                y:50,
                y2:20,
                x2:10
            },
            legend: {
                show:false,
                data:['农、林、牧、渔业']
            },
            color:['#67bf4f'],
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2005年','2006年','2007年','2008年','2009年','20010年','20011年']
            },
            yAxis: {
                type : 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'农、林、牧、渔业',
                    type:'line',
                    symbolSize:12,
                    data:[1211, 2211, 2311, 2413, 2412, 2613, 2110]
                }
            ]
        };
        var _charts2 = echarts.init(document.getElementById('box1'));
        _charts2.setOption(option);
    }
    function lineCharts2(){
        var option = {
            title: {
                text: '采矿业',
                textStyle:{
                    fontSize:14
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            grid:{
                x:50,
                y:50,
                y2:20,
                x2:10
            },
            legend: {
                show:false,
                data:['采矿业']
            },
            color:['#39baff'],
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2005年','2006年','2007年','2008年','2009年','20010年','20011年']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'采矿业',
                    type:'line',
                    symbolSize:12,

                    data:[1211, 2211, 2311, 2413, 2412, 2613, 2110]
                }
            ]
        };
        var _charts3 = echarts.init(document.getElementById('box2'));
        _charts3.setOption(option);
    }
    function lineCharts3(){
        var option = {
            title: {
                text: '电力、热力、燃气及水生产和供应业',
                textStyle:{
                    fontSize:14
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            grid:{
                x:50,
                y:50,
                y2:20,
                x2:10
            },
            legend: {
                show:false,
                data:['电力、热力、燃气及水生产和供应业']
            },
            color:['#ff9103'],
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2005年','2006年','2007年','2008年','2009年','20010年','20011年']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'电力、热力、燃气及水生产和供应业',
                    type:'line',
                    symbolSize:12,

                    data:[1211, 2211, 2311, 2413, 2412, 2613, 2110]
                }
            ]
        };
        var _charts4 = echarts.init(document.getElementById('box3'));
        _charts4.setOption(option);
    }
    function lineCharts4(){
        var option = {
            title: {
                text: '建筑业',
                textStyle:{
                    fontSize:14
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            grid:{
                x:50,
                y:50,
                y2:20,
                x2:10
            },
            legend: {
                show:false,
                data:['建筑业']
            },
            color:['#ff0000'],
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2005年','2006年','2007年','2008年','2009年','20010年','20011年']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'建筑业',
                    type:'line',
                    symbolSize:12,

                    data:[1211, 2211, 2311, 2413, 2412, 2613, 2110]
                }
            ]
        };
        var _charts5 = echarts.init(document.getElementById('box4'));
        _charts5.setOption(option);
    }
});