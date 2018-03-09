var o1 = {
    title: {
        text: '重要商品价格指数监测',
        padding:'2',
        textStyle: {
            fontSize: '16'
        }
    },
    tooltip: {
        trigger: 'item',
        enterable: false
    },
    legend: {
        show: false,
        data: ['财经事件', '政治事件']
    },
    xAxis: [{
        type: 'time',
        boundaryGap: [0.05, 0.1],
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 0
            }
        }
    }],
    yAxis: [{
        axisLine: {
            lineStyle: {
                color: "#ccc",
                width: 1
            }
        }

    }],
    series: [{
        "name": "财经事件",
        "type": "eventRiver",
        "weight": 600,
        'color':'#666',
        "data": [{
            "name": "生姜价格3.76元／斤，下降7.8%",
            "weight": 600,
            "evolution": [{
                "time": "2014-05-01",
                "value": 14
            }, {
                "time": "2014-05-02",
                "value": 34
            }, {
                "time": "2014-05-03",
                "value": 60
            }, {
                "time": "2014-05-04",
                "value": 40
            }, {
                "time": "2014-05-05",
                "value": 10
            }]
        }, {
            "name": "有色金属价格指数103.2，上涨8.3%",
            "weight": 123,
            "evolution": [{
                "time": "2014-05-02",
                "value": 10
            }, {
                "time": "2014-05-03",
                "value": 34
            }, {
                "time": "2014-05-04",
                "value": 40
            }, {
                "time": "2014-05-05",
                "value": 10
            }]
        }, {
            "name": "钢材价格指数94.73，上涨3.01%",
            "weight": 123,
            "evolution": [{
                "time": "2014-05-03",
                "value": 24
            }, {
                "time": "2014-05-04",
                "value": 34
            }, {
                "time": "2014-05-05",
                "value": 50
            }, {
                "time": "2014-05-06",
                "value": 30
            }, {
                "time": "2014-05-07",
                "value": 20
            }]
        }]
    }, {
        "name": "猪肉价格17.89元／斤，上涨10.1%",
        "type": "eventRiver",
        "weight": 123,
        "data": [{
            "name": "水泥价格指数97.4，下降4.5%",
            "weight": 123,
            "evolution": [{
                "time": "2014-05-08",
                "value": 4
            }, {
                "time": "2014-05-09",
                "value": 14
            }, {
                "time": "2014-05-10",
                "value": 30
            }, {
                "time": "2014-05-11",
                "value": 20
            }, {
                "time": "2014-05-12",
                "value": 10
            }]
        }, {
            "name": "水泥价格指数97.4，下降4.5%",
            "weight": 123,
            "evolution": [{
                "time": "2014-05-11",
                "value": 4
            }, {
                "time": "2014-05-12",
                "value": 24
            }, {
                "time": "2014-05-13",
                "value": 40
            }, {
                "time": "2014-05-14",
                "value": 20
            }, {
                "time": "2014-05-15",
                "value": 15
            }, {
                "time": "2014-05-16",
                "value": 10
            }]
        }]
    }]
};
