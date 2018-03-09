/**
 * Created by GaoYang on 2016/8/14.
 */
(function(window) {
    window.CreateMap = function(myChart, data) {
        $.get('../js/qingdao.json', function(chinaJson) {
            echarts.registerMap('qingdao', chinaJson);
            var option = {
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        return params.name + ' : ' + params.value[2];
                    }
                },
                visualMap: {
                    show:false,
                    min: 0,
                    max: 100,
                    x: '20%',
                    calculable: true,
                    inRange: {
                        //color: ['#fcc900', '#ff1002']
                        color: ['#ff1002']
                    },
                    textStyle: {
                        color: '#000'
                    }
                },

                geo: {
                    map: 'qingdao',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fff',
                            opacity: 1,
                            borderColor: '#fa7e02',
                            borderWidth: 1,
                            borderType: 'dashed'
                        },
                        emphasis: {
                            areaColor: '#f70'
                        }
                    }
                },
                series: [
                    {
                        name: '密集度',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data:data,
                        symbolSize: function (val) {
                            return val[2] / 2;
                        },
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: false
                            }
                        },
                        itemStyle: {
                            emphasis: {
                                borderColor: '#fff',
                                borderWidth: 1
                            }
                        }
                    }
                ]
            };
            // 为echarts对象加载数据
            myChart.setOption(option);
        })
    }
})(window);
