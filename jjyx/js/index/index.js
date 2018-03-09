$(function() {
    if ($(".topLeft").length>0) {
        var cw=210
    }else{
         var cw=0
    }

   var width=$("#main").parents('.citem').width()-cw
    $(".pie-map-div").width(width)
    $("#main").width(width);
    initScatterChart();
    //产业动态监测
    function  initScatterChart(){
        //var _charts1 = charts.init({ id: 396, container: "box2" });
        var scatterChart = echarts.init(document.getElementById('box2'));
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
        var option = {
            tooltip: {
                trigger: 'axis',
                showDelay: 0,
                axisPointer: {
                    show: true,
                    type: 'cross',
                    crossStyle: {
                        type: 'dashed ',
                        width:1,
                        color:"#3ff6f2",
                        textStyle:{
                            color:"#fff"
                        }
                    }
                }
            },
            legend: {
                data: ['第一产业','第二产业','第三产业'],
                itemGap: 44,
                y:'top',
                right:20,
                textStyle: {
                    color:'#666',
                    fontSize:16
                }
            },
            color:['#1585ec','#df221e','#38a60d',"#a74fb1"],
            toolbox: {
                show: false,
                feature: {
                    restore: {
                        show: true
                    },
                }
            },
            xAxis: [{
                name:'企业活\n跃度',
                type: 'value',
                nameTextStyle:{
                    fontSize:16
                },
                splitLine: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        fontSize:16,
                        color:'#666'
                    }
                },
                axisTick:{
                    show:false
                },
                axisLine : {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#666',
                        type: 'solid',
                        width: 1,

                    }
                }
            }],
            yAxis: [{
                name:'资本活跃度',
                type: 'value',
                nameTextStyle:{
                    fontSize:16
                },
                splitLine: {
                    show: false
                },
                axisLabel:{
                    textStyle:{
                        fontSize:16,
                        color:'#666'
                    }
                },
                axisTick:{
                    show:false
                },
                axisLine : {    // 轴线
                    show: true,
                    lineStyle: {
                        color: '#666',
                        type: 'solid',
                        width:1
                    }
                }
            }],
            grid: {
                borderWidth: 0,
                left:'40',
                bottom:'10%'
            },
            series: [{
                name: '第一产业',
                type: 'scatter',
                symbol: 'circle',
                symbolSize: 30,
                itemStyle: {
                    normal: {
                        label: {
                            show:true,
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
                            x: 100,
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
                            value: 3,
                            xAxis: 0,
                            yAxis: 3
                        }, // 当xAxis或yAxis为数值轴时，不管传入是什么，都被理解为数值后做空间位置换算
                            {
                                xAxis: 2.5,
                                yAxis: 3
                            }
                        ],
                        [{
                            value: 1.25,
                            xAxis: 1.25,
                            yAxis: 0
                        }, // 当xAxis或yAxis为数值轴时，不管传入是什么，都被理解为数值后做空间位置换算
                            {
                                xAxis: 1.25,
                                yAxis: 6
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
                                show:true,
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
                                show:true,
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
                                x: 100,
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
                                show:true,
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
        scatterChart.setOption(option);
    }
    var myChart = null;
    //添加宏观经济走势监听
    $("#tab1 a").on('click', function() {
        $(this).addClass("active").siblings().removeClass("active")
        if($(this).index()=="0"){//居民消费
            initLine1();
            //初始化并渲染数据到图表
            //charts.init({ id: 172, container: "box1", option:option });
        }else if($(this).index()=="1"){//工业生产价格
            //charts.init({ id: 508, container: "box1" });
            initLine2();
        }else if($(this).index()=="2"){//财政收入
            //charts.init({ id: 510, container: "box1" });
            initLine3();
        }else if ($(this).index()=="3") {//财政支出
            //charts.init({ id: 511, container: "box1", option:option});
            initLine4();
        }else if ($(this).index()=="4") {//固定资产投资
            //charts.init({ id: 380, container: "box1" });
            initLine5();
        }
    })
    //初始化触发“居民消费”按钮
    $($("#tab1 a")[0]).trigger("click");
    //可以在控制台查看数据格式
    //产生随机数
    function random_data(){
        function randomData() {
            return Math.round(Math.random() * 800 + 200);
        }
        var year = 8; //年2004-2011
        var datasSet = [];
        for (var i = 0; i < year; i++) {
            var dataSet = {
                china:[
                    {name: '北京', value: randomData()},
                    {name: '天津', value: randomData()},
                    {name: '上海', value: randomData()},
                    {name: '重庆', value: randomData()},
                    {name: '河北', value: randomData()},
                    {name: '河南', value: randomData()},
                    {name: '云南', value: randomData()},
                    {name: '辽宁', value: randomData()},
                    {name: '黑龙江', value: randomData()},
                    {name: '湖南', value: randomData()},
                    {name: '安徽', value: randomData()},
                    {name: '山东', value: randomData()},
                    {name: '新疆', value: randomData()},
                    {name: '江苏', value: randomData()},
                    {name: '浙江', value: randomData()},
                    {name: '江西', value: randomData()},
                    {name: '湖北', value: randomData()},
                    {name: '广西', value: randomData()},
                    {name: '甘肃', value: randomData()},
                    {name: '山西', value: randomData()},
                    {name: '内蒙古', value: randomData()},
                    {name: '陕西', value: randomData()},
                    {name: '吉林', value: randomData()},
                    {name: '福建', value: randomData()},
                    {name: '贵州', value: randomData()},
                    {name: '广东', value: randomData()},
                    {name: '青海', value: randomData()},
                    {name: '西藏', value: randomData()},
                    {name: '四川', value: randomData()},
                    {name: '宁夏', value: randomData()},
                    {name: '海南', value: randomData()},
                    {name: '台湾', value: randomData()},
                    {name: '香港', value: randomData()},
                    {name: '澳门', value: randomData()}
                ],
                shandong:[{name: '济南市', value: randomData(), cpi: 1000, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '青岛市', value: randomData(), cpi: 2200, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '淄博市', value: randomData(), cpi: 1300, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '枣庄市', value: randomData(), cpi: 1400, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '东营市', value: randomData(), cpi: 1500, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '烟台市', value: randomData(), cpi: 1600, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '潍坊市', value: randomData(), cpi: 1700, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '济宁市', value: randomData(), cpi: 1800, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '泰安市', value: randomData(), cpi: 1900, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '威海市', value: randomData(), cpi: 1200, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '日照市', value: randomData(), cpi: 1000, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '滨州市', value: randomData(), cpi: 1010, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '德州市', value: randomData(), cpi: 1010, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '聊城市', value: randomData(), cpi: 1200, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '临沂市', value: randomData(), cpi: 1060, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '菏泽市', value: randomData(), cpi: 1200, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '莱芜市', value: randomData(), cpi: 1200, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '德州市', value: randomData(), cpi: 1200, percentGdp: '1.3', percentCpi: '-0.8'}
                ],
                qingdao:[{name: '市南区', value: randomData(), cpi: 1000, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '市北区', value: randomData(),cpi: 1100, percentGdp: '1.5', percentCpi: '-0.8'},
                    {name: '黄岛区', value: randomData(),cpi: 1200, percentGdp: '1.7', percentCpi: '-0.8'},
                    {name: '崂山区', value: randomData(),cpi: 1300, percentGdp: '1.6', percentCpi: '-0.8'},
                    {name: '李沧区', value: randomData(),cpi: 1400, percentGdp: '1.8', percentCpi: '-0.8'},
                    {name: '城阳区', value: randomData(),cpi: 1500, percentGdp: '1.9', percentCpi: '-0.8'},
                    {name: '胶州市', value: randomData(),cpi: 1600, percentGdp: '1.1', percentCpi: '-0.8'},
                    {name: '即墨市', value: randomData(),cpi: 1700, percentGdp: '1.0', percentCpi: '-0.8'},
                    {name: '平度市', value: randomData(),cpi: 1800, percentGdp: '1.3', percentCpi: '-0.8'},
                    {name: '莱西市', value: randomData(),cpi: 1900, percentGdp: '1.2', percentCpi: '-0.8'}]
            };
            datasSet.push(dataSet);
        }
        return datasSet;
    }

    //console.log(datasSet);
    //初始化图表，所需参数(id,数据,第一套数据索引)
    var type=['qingdao','shandong','china'][$("#tab0 a.active").index()]
    var yearIndex = 0;
    var datasSet = random_data();
    setMapCharts("main", datasSet, yearIndex, type);
    //回调函数
    function changeFn(yIndex) {
        yearIndex = yIndex;
        setMapCharts("main", datasSet, yearIndex, type);
    }
    //时间轴控件所需对象
    var obj = {
        starTime: "2009",
        endTime: "2011",
        timer: "5000",
        text: {
            fontSize: 12,
            fontFamily: "Microsoft YaHei UI",
            textColor: "#ffffff"
        }
    };
    //时间轴控件
    control("banner", "btnLeft", "stop", "btnRight", obj, 140, changeFn);

    //选择季度Q1，Q2，Q3，Q4
    $('.select').on('change',function(){
        var q = this.value;//选择了那季度
        datasSet = random_data();//此处请求接口拿到 季度数据 datasSet
        setMapCharts("main", datasSet, yearIndex, type);
    });
    function initLine1(){
        myChart = myChart?myChart:echarts.init(document.getElementById('box1'));
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            grid:{
                x:'50'
            },
            legend: {
                left:'30',
                top:'10',
                data:['城市居民消费价格指数（上年＝100）','农村居民消费价格指数（上年＝100）']
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2010','2011','2012','2013','2014','2015','2016']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'城市居民消费价格指数（上年＝100）',
                    type:'line',
                    data:[11, 11, 15, 13, 12, 13, 10]
                },
                {
                    name:'农村居民消费价格指数（上年＝100）',
                    type:'line',
                    data:[1, 2, 2, 5, 3, 2, 5],
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    lineStyle:{
                        normal:{
                            //color:"#333",
                            width:'2'

                        }
                    }
                }
            ]
        };
        myChart.setOption(option,true);
    }
    function initLine2(){
        myChart = myChart?myChart:echarts.init(document.getElementById('box1'));
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            grid:{
                x:'50'
            },
            legend: {
                left:'30',
                top:'10',
                data:['城市居民消费价格指数（上年＝100）','农村居民消费价格指数（上年＝100）']
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2010','2011','2012','2013','2014','2015','2016']
            },
            yAxis: {
                type: 'value',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'城市居民消费价格指数（上年＝100）',
                    type:'line',
                    data:[20, 11, 15, 13, 12, 13, 10],

                },
                {
                    name:'农村居民消费价格指数（上年＝100）',
                    type:'line',
                    data:[1, 2, 2, 5, 3, 2, 5],
                    markPoint: {
                        data: [
                            {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                        ]
                    },
                    lineStyle:{
                        normal:{
                            //color:"#f05c00",
                            width:'2'

                        }
                    }
                }
            ]
        };
        myChart.setOption(option,true);
    }
    function initLine3(){
        myChart = myChart?myChart:echarts.init(document.getElementById('box1'));
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            grid:{
                x:'50',
                y:'80'
            },
            legend: {
                left:'30',
                top:'10',
                data:['地方财政一般预算收入','地方财政税收收入','地方财政国内增值税',
                    '地方财政营业税','地方财政企业所得税']
            },
            xAxis:  {
                type: 'category',
                boundaryGap: false,
                data: ['2010','2011','2012','2013','2014','2015','2016']
            },
            yAxis: {
                type: 'value',
                name:'亿元',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            color:['#f27538','#6dd84c','#5cb8ff','#efa65e','#5e65ef'],
            series: [
                {
                    name:'地方财政一般预算收入',
                    type:'line',
                    data:[20, 11, 15, 13, 12, 13, 10],

                },
                {
                    name:'地方财政税收收入',
                    type:'line',
                    data:[1, 2, 2, 5, 3, 2, 5]
                },
                {
                    name:'地方财政国内增值税',
                    type:'line',
                    data:[4, 3, 5, 6, 4, 6, 4]
                },
                {
                    name:'地方财政营业税',
                    type:'line',
                    data:[5, 6, 7, 7, 9, 8, 6]
                },
                {
                    name:'地方财政企业所得税',
                    type:'line',
                    data:[9, 10, 13, 12, 9, 12, 10]
                }
            ]
        };
        myChart.setOption(option,true);
    }
    function initLine4(){
        myChart = myChart?myChart:echarts.init(document.getElementById('box1'));
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
                bottom:'20',
                left:'10',
                itemGap: 10,
                orient:'horizontal',
                textStyle:{
                    color:'#585858'
                },
                data:['地方财政一般预算支出','地方财政一般公共服务支出','地方财政外交支出',
                    '地方财政国防支出','地方财政公共安全支出']
            },
            xAxis: [{
                type: 'category',
                data: ['2007年', '2008年', '2009年', '2010年', '2011年','2012年','2013年'],
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
                    show: true,

                }
            }],
            color:['#f27538','#6dd84c','#5cb8ff','#efa65e','#5e65ef'],
            yAxis: [{
                min:0,
                name:'亿元',
                // max:'2000',
                type: 'value',
                axisLabel: {
                    formatter: '{value}',
                    textStyle:{
                        color:'#333'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "red",
                        width: 1
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ccc',
                        type : "solid"
                    }
                },
                axisTick: {
                    show: false
                }
            }],
            grid: {
                x: '50',
                x2: '30',
                y2:110
            },
            series: [{
                name: '地方财政一般预算支出',
                type: 'bar',
                data: [ 1300, 1420, 1560, 1650, 1700,1120,1321],
                label:{
                    normal:{
                        show: false,
                        position: 'insideTop',
                        // formatter:'{c}',
                        textStyle:{
                            color:'#fff'
                        }
                    }
                }
            }, {
                name: '地方财政一般公共服务支出',
                type: 'bar',
                data: [0, 0, 0, 0, 0,0,0],
                label:{
                    normal:{
                        show: false,
                        position: 'insideTop',
                        // formatter:'{c}',
                        textStyle:{
                            color:'#fff'
                        }
                    }
                }
            }, {
                name: '地方财政外交支出',
                type: 'bar',
                data: [10, 0, 0, 0, 0,30,20],
                label:{
                    normal:{
                        show: false,
                        position: 'insideTop',
                        // formatter:'{c}',
                        textStyle:{
                            color:'#fff'
                        }
                    }
                }
            }, {
                name: '地方财政国防支出',
                type: 'bar',
                data: [10, 0, 0, 20, 30,0,0],
                label:{
                    normal:{
                        show: false,
                        position: 'insideTop',
                        // formatter:'{c}',
                        textStyle:{
                            color:'#fff'
                        }
                    }
                }
            }, {
                name: '地方财政公共安全支出',
                type: 'bar',
                data: [10, 20, 10, 100, 20,0,0],
                label:{
                    normal:{
                        show: false,
                        position: 'insideTop',
                        // formatter:'{c}',
                        textStyle:{
                            color:'#fff'
                        }
                    }
                }
            }]
        };
        myChart.setOption(option,true);
    }
    function initLine5(){
        myChart = myChart?myChart:echarts.init(document.getElementById('box1'));
        var option = {
            title: {
                text: '',
                textStyle: {
                    fontSize: 12
                }
            },
            tooltip: {
                trigger: 'axis',
            },
            calculable: true,
            legend: {
                bottom:'20',
                left:'10',
                itemGap: 10,
                orient:'horizontal',
                textStyle:{
                    color:'#585858'
                },
                data:['固定资产投资价格指数（ 上年＝100）','建筑安装工程固定资产投资价格指数（上年＝100）','设备工器具购置固定资产投资价格指数（上年＝100）','其他费用固定资产投资价格指数（上年＝100）'],
                // icon:'circle'
            },
            xAxis: [{
                type: 'category',
                data: ['2007年', '2008年', '2009年', '2010年', '2011年','2012年','2013年'],
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
                    show: true,

                },
            }],
            color:["#00a3ff","#ff4626","#f90","#0a0"],
            yAxis: [{
                min:0,
                // max:'2000',
                type: 'value',
                name: '',
                axisLabel: {
                    formatter: '{value}',
                    textStyle:{
                        color:'#333'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "red",
                        width: 1
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#ccc',
                        type : "solid"
                    }
                },
                axisTick: {
                    show: false
                },
            }],
            grid: {
                x: '50',
                x2: '30',
                y2:110
            },
            series: [{
                name: '固定资产投资价格指数（ 上年＝100）',
                type: 'bar',
                data: [ 1300, 1420, 1560, 1650, 1700,1120,1321],
                label:{
                    normal:{
                        show: false,
                        position: 'insideTop',
                        // formatter:'{c}',
                        textStyle:{
                            color:'#fff'
                        }
                    }
                }
            }, {
                name: '建筑安装工程固定资产投资价格指数（上年＝100）',
                type: 'bar',
                data: [1050, 1820, 920, 850, 1200,1232,199],
                label:{
                    normal:{
                        show: false,
                        position: 'insideTop',
                        // formatter:'{c}',
                        textStyle:{
                            color:'#fff'
                        }
                    }
                }
            }, {
                name: '设备工器具购置固定资产投资价格指数（上年＝100）',
                type: 'bar',
                data: [1550, 1624, 1120, 1450, 1200,1112,1299],
                label:{
                    normal:{
                        show: false,
                        position: 'insideTop',
                        // formatter:'{c}',
                        textStyle:{
                            color:'#fff'
                        }
                    }
                }
            }, {
                name: '其他费用固定资产投资价格指数（上年＝100）',
                type: 'bar',
                data: [870, 982, 1120, 1150, 1100,132,999],
                label:{
                    normal:{
                        show: false,
                        position: 'insideTop',
                        // formatter:'{c}',
                        textStyle:{
                            color:'#fff'
                        }
                    }
                }
            }]
        };
        myChart.setOption(option,true);
    }
})
