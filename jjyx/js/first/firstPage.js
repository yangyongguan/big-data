/**
 * Created by yyg on 2016/9/23.
 */
$(document).ready(function(){
    //var _charts01 = charts.init({id: 537,container: "chartId01"});
    //var _charts02 = charts.init({id: 538,container: "chartId02"});
    //var _charts03 = charts.init({id: 539,container: "chartId03"});
    //var _charts04 = charts.init({id: 540,container: "chartId04"});
    //var _charts06 = charts.init({id: 541,container: "chartId06"});
    //var _charts05 = echarts.init(document.getElementById('chartId05'));
    //var scatterChart = charts.init({id: 665,container: "scatterChart"});
    var gdpChart = echarts.init(document.getElementById('gdpChart'));
    var pieChart = echarts.init(document.getElementById('pieChart'));
    var scatterChart = echarts.init(document.getElementById('scatterChart'));


    $('.fs_more').on('click',function(){
        if($('.con1').get(0).style.opacity==1||$('.con1').get(0).style.opacity==""){
            $('.con1').get(0).style.opacity = 0;
            setTimeout(function(){
                $('.con2').get(0).style.opacity = 1;
            },1000);
        }else {
            $('.con2').get(0).style.opacity = 0;
            setTimeout(function(){
                $('.con1').get(0).style.opacity = 1;
            },1000);
        }
    });

    //initChart();
    initGdpChart();
    initPieChart();
    initScatterChart();
    function initPieChart(){
        var option = {
            color: ['#cc2c1e','#f15123','#f5ce3f','#f99d00','#e86d12'],
            tooltip : {
                show: true,
                formatter: function(param){
                    return '<div style="width:120px;color:#333;text-align: center;font-size:16px;">'+param.percent+"%</div>"
                },
                position:['38%','35%'],
                backgroundColor:'none'
            },
            calculable: false,
            series: [{
                name: '',
                type: 'pie',
                center: ['50%', '40%'],
                radius: [30, 45],
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
                    value: 20,
                    name: '个体企业',
                }, {
                    value: 15,
                    name: '集体企业'
                }, {
                    value: 25,
                    name: '国有企业'
                },  {
                    value: 50,
                    name: '民营企业'
                }]
            }]
        };
        pieChart.setOption(option);
    }
    function initGdpChart(){
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
                right:20,
                data: ['第一产业', '第二产业','第三产业'],
                textStyle: {
                    color: "#333"
                }
            },
            xAxis: [{
                type: 'category',
                data: ['2014', '2015', '2016'],
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
                    show: false,

                },
            }],
            color:["#00a2ff","#ff4425",'#ff9600'],
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
                        color: "red",
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
                },

            }],
            grid: {
                x: '20',
                x2: '30',
                y: '40',
                y2: '80'
            },
            series: [{
                name: '第一产业',
                type: 'bar',
                data: [2.0, 4.9, 7.0]
            },{
                name: '第二产业',
                type: 'bar',
                data: [2.0, 4.9, 7.0]
            }
                ,{
                    name: '第三产业',
                    type: 'bar',
                    data: [2.0, 4.9, 7.0]
                }
            ]
        };
        gdpChart.setOption(option);
    }
    function  initScatterChart(){
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
});