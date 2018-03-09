$(function() {
    var mychart = null;
    option = {
        tooltip: {
            trigger: 'item',
            showDelay: 200,
            hideDelay: 600,
            enterable: true,
            backgroundColor: "rgba(1,83,160,1)",
            borderColor: "#33a4e7",
            borderWidth: 2
        },
        visualMap: {
            min: 0,
            max: 2500,
            color: ['red', 'yellow'],
            left: '0',
            top: '49%',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            itemWidth: 10,
            itemHeight: 90,
            textStyle: {
                color: "#01abff"
            },
            // orient: "horizontal",
            inverse: true,
            seriesIndex: 0,
            show: false
        },
        geo: {
            map: 'qingdao',
            left: '240',
            top: '10',
            label: {
                emphasis: {
                    show: true
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#1e4a9a',
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    areaColor: '#2ca8ff',
                }
            }
        },
        series: [{
            name: '',
            stack: '',
            type: 'effectScatter',
            symbolSize: function(val) {
                return val[2] / 20;
            },
            rippleEffect: {
                period: 400,
                scale: 100.0,
                brushType: 'fill',
            },
            coordinateSystem: 'geo',
            // showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: false
                }
            },

        }
        ]
    };

    // 指定图表的配置项和数据
    var main = function(p) {
        $.get('../js/qingdao.json', function(data) {
            echarts.registerMap('qingdao', data);
            _render_init_(p);
            _render_set_(p);
        });
    };

    // 命名空间
    var _render_ = function() {
        // null
    }

    // 指定图表的配置项和数据
    var _render_init_ = function(p) {
        var e = _render_.element = document.getElementById(p.id);
        e.style.width = '100%';
        e.style.height = p.height + 'px';
    };
    var _render_set_ = function(p) {
        option.series[0].data = p.data[0];
        //mychart = echarts.init(_render_.element);
        mychart = mychart?mychart:echarts.init(_render_.element);
        mychart.setOption(option);
    };
    window.map_trander = main;

    var _charts = charts.init({id: 323, container: "box3"});
    var _charts2 = charts.init({id: 325, container: "box4"});
    var _charts3 = charts.init({id: 327, container: "box6"});
    var ais3 = {};
    ais3.fn_Charts1 = function(type,type2){
        var option = {
            title: {
                text: '',
                textStyle: {
                    fontSize: 12
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            calculable: true,
            legend: {
                top:10,
                data: ['消费者市场需求量', '同比增速'],
                textStyle: {
                    color: "#333"
                }
            },
            xAxis: [{
                type: 'category',
                data: ['2004', '2005', '2006', '2007', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014'],
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
                    formatter: '{value}'
                    ,textStyle:{
                        color:'#333'
                    }
                },splitLine: {
                    show: false
                }
            }],
            color:["#ff9600","#37d2ff"],
            yAxis: [{
                type: 'value',
                name: '',
                axisLabel: {
                    formatter: '{value}'
                    ,textStyle:{
                        color:'#333'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#ccc",
                        width: 1
                    }
                },splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ccc',
                        type : "solid"
                    }
                },	axisTick: {
                    show: false
                }
            }, {
                type: 'value',
                name: '',
                axisLabel: {
                    show: false,
                    formatter: ''
                },	axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "#ccc",
                        width: 1
                    }
                },splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(0,0,0,0)',
                        type : "dashed"
                    }
                }
            }],
            grid: {
                x: '50',
                x2: '30',
                y: '40',
                y2: '60'
            },
            series: [{
                name: '消费者市场需求量',
                type: 'bar',
                data: [Math.round(Math.random() * 10), 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            }, {
                name: '同比增速',
                type: 'line',
                yAxisIndex: 1,
                data: [Math.round(Math.random() * 10), 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
                symbolSize:10
            }]
        };
        _charts.setOption(option);
    }
    //行业内消费占比
    ais3.fn_Charts2 = function(type){
        var option = {
                tooltip: {
                    show: true,
                    formatter: function(params) {
                        if (params.seriesIndex != "0" && params.seriesIndex != "1" && params.seriesIndex != "2") {
                            "{a} <br/>{b} : {c} ({d}%)";
                        }
                    }
                },
                legend:{
                    x:20,
                    y2:20,
                    orient: 'vertical',
                    data:["铁路运输业","公路运输业","航空运输业","港口运输业"]
                },
                color: ['#4a4dd9','#2e9de8','#0dd32f','#f23d22','#e86d12'],
                calculable: false,
                series: [{
                    z: 0,
                    name: '',
                    type: 'pie',
                    center: ['46%', '50%'],
                    radius: [120, 121],
                    labelLine: {
                        normal: {
                            show: false

                        }
                    },
                    data: [{
                        value: 223,
                        itemStyle: {
                            normal: {
                                color: '#e0fae4' //颜色填充
                            }
                        },
                        tooltip:{show:false}
                    }]
                },{
                    z: 0,
                    name: '',
                    type: 'pie',
                    center: ['46%', '50%'],
                    radius: [130, 131],
                    labelLine: {
                        normal: {
                            show: false

                        }
                    },
                    data: [{
                        value: 223,
                        itemStyle: {
                            normal: {
                                color: '#e0fae4' //颜色填充
                            }
                        },
                        tooltip:{show:false}
                    }]
                }, {
                    name: '注销企业数量',
                    type: 'pie',
                    center: ['46%', '50%'],
                    radius: [65, 95],
                    label: {
                        normal: {
                            position: 'outside',
                            show: true,
                            formatter: "{b}\n\n{d}%",
                            textStyle: {
                                color: "#333",
                                fontSize:10
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            textStyle: {
                                fontSize: 10
                            },
                            length: 44,
                            length2: 60,
                            lineStyle: {
                                width: 1
                            }
                        }
                    },
                    data: [{
                        value: Math.round(Math.random() * 100),
                        name: '铁路运输业',
                    }, {
                        value: 15,
                        name: '公路运输业'
                    }, {
                        value: 25,
                        name: '航空运输业'
                    }, {
                        value: 50,
                        name: '港口运输业'
                    }]
                }]
            };
        _charts2.setOption(option);
    }
    ais3.fn_Charts3 = function(type){
        var option = {
            title: {
                text: '',
                textStyle: {
                    fontSize: 12
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            calculable: true,
            legend: {
                top:10,
                data: ['实体消费额', '电商消费额'],
                textStyle: {
                    color: "#333"
                }
            },
            xAxis: [{
                type: 'category',
                data: ['卷烟行业', '烟丝行业', '烟丝行业'],
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
                    formatter: '{value}'
                    ,textStyle:{
                        color:'#333'
                    }
                },splitLine: {
                    show: false
                }
            }],
            color:["#ff6600","#0dd32f",'#abd7f6'],
            yAxis: [{
                type: 'value',
                name: '',
                axisLabel: {
                    formatter: '{value}'
                    ,textStyle:{
                        color:'#333'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "#ccc",
                        width: 1
                    }
                },splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ccc',
                        type : "solid"
                    }
                },	axisTick: {
                    show: false
                }
            }, {
                type: 'value',
                name: '',
                axisLabel: {
                    show: false,
                    formatter: ''
                },	axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "#ccc",
                        width: 1
                    }
                },splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(0,0,0,0)',
                        type : "dashed"
                    }
                }
            }],
            grid: {
                x: '50',
                x2: '30',
                y: '40',
                y2: '60'
            },
            series: [{
                name: '实体消费额',
                type: 'bar',
                data: [Math.round(Math.random() * 10), 4.9, 7.0]
            },{
                name: '电商消费额',
                type: 'bar',
                data: [Math.round(Math.random() * 10), 4.9, 7.0]
            }
            ]
        };
        _charts3.setOption(option);
    }
    //消费者分布
    ais3.fn_Charts_map = function(type){
        var chart = map_trander;
        chart({
            id: 'box5',
            width: 800,
            height: 520,
            data: [
                [{
                    name: '市南区',
                    value: [120.38,36.07, Math.round(Math.random() * 200)],
                }, {
                    name: '市北区',
                    value: [120.38,36.08, Math.round(Math.random() * 200)],
                }, {
                    name: '黄岛区',
                    value: [120.18,35.97, Math.round(Math.random() * 200)],
                }, {
                    name: '崂山区',
                    value: [120.47,36.10, Math.round(Math.random() * 200)],
                }, {
                    name: '李沧区',
                    value: [120.43,36.15, Math.round(Math.random() * 200)],
                }, {
                    name: '城阳区',
                    value: [120.37,36.30, Math.round(Math.random() * 200)],
                }, {
                    name: '胶州市',
                    value: [120.03,36.27, Math.round(Math.random() * 200)],
                }, {
                    name: '即墨市',
                    value: [120.45,36.38, Math.round(Math.random() * 200)],
                }, {
                    name: '平度市',
                    value: [119.95,36.78, Math.round(Math.random() * 400)],
                },{
                    name: '平度市',
                    value: [120.20,36.78, Math.round(Math.random() * 200)],
                },{
                    name: '平度市',
                    value: [120.10,36.78, Math.round(Math.random() * 200)],
                },{
                    name: '平度市',
                    value: [119.90,36.58, Math.round(Math.random() * 200)],
                },{
                    name: '莱西市',
                    value: [120.50,36.87, Math.round(Math.random() * 200)],
                }]
            ],
            callback: function(data) {
                //console.log(data);
            }
        });
    }
    //table表格1
    ais3.fn_tab1 = function(type){
        //此处加载后台数据填充表格
    }
    //table表格2
    ais3.fn_tab2 = function(type){
        //此处加载后台数据填充表格
    }
    //初始化地图
    ais3.fn_Charts_map(0);
    var  type = 0, type2 = 0;
    $('#select01').on('change',function(){
        type = this.value;
    });
    $('#select02').on('change',function(){
        type2 = this.value;
        ais3.fn_Charts1(type,type2);
    });
    $('.searchBtn').on('click',function(){
        ais3.fn_Charts1(type,type2);
        ais3.fn_Charts2(type);
        ais3.fn_Charts3(type);
        ais3.fn_Charts_map(type);
        ais3.fn_tab1(type);
        ais3.fn_tab2(type);
    });
    $('.searchBtn').trigger('click');
})
