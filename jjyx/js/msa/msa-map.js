$(function(){
    window.createMsaMap = function(myChart){
        $.get('../js/qingdao.json', function(chinaJson) {
            echarts.registerMap('qingdao', chinaJson);
            option = {
                title: {
                    text: '',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                legend:{
                    left:0,
                    bottom:10,
                    orient:'vertical',
                    data:[">1500","900-1500","310-1000","200-300","10-200","<10"]
                },
                tooltip: {
                    trigger: 'item',
                    backgroundColor:'#303030'
                },

                visualMap: {
                    show:false,
                    max:700,
                    left: 'left',
                    top: 'bottom',           // 文本，默认为数值文本
                    calculable: false,
                    // color: ['#57d2ff', '#2ca8ff','#108fe5','#108fe5','#18a5ff','#033287' ],
                    color:["red",'yellow'],
                    textStyle: {
                        color: '#fff'
                    },
                },
                series: [
                    {
                        name: '>1500',
                        type: 'map',
                        mapType: 'qingdao',
                        roam: false,
                        itemStyle: {
                            normal: { label: { show: true,textStyle:{color:'#fff'}} },
                            emphasis: { label: { show: true} }
                        },
                        showLegendSymbol: false,
                        data: [
                            { name: '市南区', value:Math.ceil(Math.random()*100)},
                            { name: '市北区', value:Math.ceil(Math.random()*100)},
                            { name: '黄岛区', value:Math.ceil(Math.random()*100)},
                            { name: '崂山区', value:Math.ceil(Math.random()*100)},
                            { name: '李沧区', value:Math.ceil(Math.random()*100)},
                            { name: '城阳区', value:Math.ceil(Math.random()*100)},
                            { name: '胶州市', value:Math.ceil(Math.random()*100)},
                            { name: '即墨市', value:Math.ceil(Math.random()*100)},
                            { name: '平度市', value:Math.ceil(Math.random()*100)},
                            { name: '莱西市', value:Math.ceil(Math.random()*100)}
                        ]
                    },
                    {
                        name: '900-1500',
                        type: 'map',
                        mapType: 'qingdao',
                        // roam: false,
                        itemStyle: {
                            normal: { label: { show: true,textStyle:{color:'#fff'}} },
                            emphasis: { label: { show: true} }
                        },
                        showLegendSymbol: false,
                        data: [
                            { name: '市南区', value:Math.ceil(Math.random()*100)},
                            { name: '市北区', value:Math.ceil(Math.random()*100)},
                            { name: '黄岛区', value:Math.ceil(Math.random()*100)},
                            { name: '崂山区', value:Math.ceil(Math.random()*100)},
                            { name: '李沧区', value:Math.ceil(Math.random()*100)},
                            { name: '城阳区', value:Math.ceil(Math.random()*100)},
                            { name: '胶州市', value:Math.ceil(Math.random()*100)},
                            { name: '即墨市', value:Math.ceil(Math.random()*100)},
                            { name: '平度市', value:Math.ceil(Math.random()*100)},
                            { name: '莱西市', value:Math.ceil(Math.random()*100)}
                        ]
                    },
                    {
                        name: '310-1000',
                        type: 'map',
                        mapType: 'qingdao',
                        // roam: false,
                        itemStyle: {
                            normal: { label: { show: true,textStyle:{color:'#fff'}} },
                            emphasis: { label: { show: true} }
                        },
                        showLegendSymbol: false,
                        data: [
                            { name: '市南区', value:Math.ceil(Math.random()*100)},
                            { name: '市北区', value:Math.ceil(Math.random()*100)},
                            { name: '黄岛区', value:Math.ceil(Math.random()*100)},
                            { name: '崂山区', value:Math.ceil(Math.random()*100)},
                            { name: '李沧区', value:Math.ceil(Math.random()*100)},
                            { name: '城阳区', value:Math.ceil(Math.random()*100)},
                            { name: '胶州市', value:Math.ceil(Math.random()*100)},
                            { name: '即墨市', value:Math.ceil(Math.random()*100)},
                            { name: '平度市', value:Math.ceil(Math.random()*100)},
                            { name: '莱西市', value:Math.ceil(Math.random()*100)}
                        ]
                    },
                    {
                        name: '200-300',
                        type: 'map',
                        mapType: 'qingdao',
                        // roam: false,
                        itemStyle: {
                            normal: { label: { show: true,textStyle:{color:'#fff'}} },
                            emphasis: { label: { show: true} }
                        },
                        showLegendSymbol: false,
                        data: [
                            { name: '市南区', value:Math.ceil(Math.random()*100)},
                            { name: '市北区', value:Math.ceil(Math.random()*100)},
                            { name: '黄岛区', value:Math.ceil(Math.random()*100)},
                            { name: '崂山区', value:Math.ceil(Math.random()*100)},
                            { name: '李沧区', value:Math.ceil(Math.random()*100)},
                            { name: '城阳区', value:Math.ceil(Math.random()*100)},
                            { name: '胶州市', value:Math.ceil(Math.random()*100)},
                            { name: '即墨市', value:Math.ceil(Math.random()*100)},
                            { name: '平度市', value:Math.ceil(Math.random()*100)},
                            { name: '莱西市', value:Math.ceil(Math.random()*100)}
                        ]
                    },
                    {
                        name: '10-200',
                        type: 'map',
                        mapType: 'qingdao',
                        // roam: false,
                        itemStyle: {
                            normal: { label: { show: true,textStyle:{color:'#fff'}} },
                            emphasis: { label: { show: true} }
                        },
                        showLegendSymbol: false,
                        data: [
                            { name: '市南区', value:Math.ceil(Math.random()*100)},
                            { name: '市北区', value:Math.ceil(Math.random()*100)},
                            { name: '黄岛区', value:Math.ceil(Math.random()*100)},
                            { name: '崂山区', value:Math.ceil(Math.random()*100)},
                            { name: '李沧区', value:Math.ceil(Math.random()*100)},
                            { name: '城阳区', value:Math.ceil(Math.random()*100)},
                            { name: '胶州市', value:Math.ceil(Math.random()*100)},
                            { name: '即墨市', value:Math.ceil(Math.random()*100)},
                            { name: '平度市', value:Math.ceil(Math.random()*100)},
                            { name: '莱西市', value:Math.ceil(Math.random()*100)}
                        ]
                    },
                    {
                        name: '<10',
                        type: 'map',
                        mapType: 'qingdao',
                        // roam: false,
                        itemStyle: {
                            normal: { label: { show: true,textStyle:{color:'#fff'}} },
                            emphasis: { label: { show: true} }
                        },
                        showLegendSymbol: false,
                        data: [
                            { name: '市南区', value:Math.ceil(Math.random()*100)},
                            { name: '市北区', value:Math.ceil(Math.random()*100)},
                            { name: '黄岛区', value:Math.ceil(Math.random()*100)},
                            { name: '崂山区', value:Math.ceil(Math.random()*100)},
                            { name: '李沧区', value:Math.ceil(Math.random()*100)},
                            { name: '城阳区', value:Math.ceil(Math.random()*100)},
                            { name: '胶州市', value:Math.ceil(Math.random()*100)},
                            { name: '即墨市', value:Math.ceil(Math.random()*100)},
                            { name: '平度市', value:Math.ceil(Math.random()*100)},
                            { name: '莱西市', value:Math.ceil(Math.random()*100)}
                        ]
                    }
                ]
            };
            myChart.setOption(option);
        })
    }
});
