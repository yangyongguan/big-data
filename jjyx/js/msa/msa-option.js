
var option1 = {    tooltip: {
        trigger: 'axis'
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
    color:['#00a2ff',"#ff4425","#ff9600"],
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
        }
    }],
    yAxis: [{
        type: 'value',
        name: '区域企业资产规模',
        axisLabel: {
            formatter: '{value}'
        },
        axisLine: {
            lineStyle: {
                color: "red",
                width: 1
            }
        }
    }, {
        type: 'value',
        name: '增长率',
        axisLabel: {
            formatter: '{value}'
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
            type: 'line',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }, {
            name: '进口总额比上年增长（%）',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
    ]
};