/**
 * Created by yyg on 2016/9/6.
 */
$(document).ready(function(){
    //var _charts = charts.init({id: 213,container: "box1"});
    var _charts = echarts.init(document.getElementById('box1'));
    var _charts2 = charts.init({id: 385,container: "box6"});
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
            tooltip: {
                trigger: 'item',
                borderWidth:1,
                borderColor:'red',
                backgroundColor:'rgba(255,255,255,.9)',
                padding:10,
                formatter:function(a){
                    return '<div class="tipbox"><h2>'+a.name+'<small>2015年用电量</small></h2>'+
                        '<p>156万亿千瓦时，同比增长<var  class="c1">2.8%</var></p>'+
                        '</div>'
                }
            },
            visualMap: {
                show:false,
                min: 0,
                max: 6,
                left: 'left',
                top: 'bottom',
                text: ['高','低'],           // 文本，默认为数值文本
                calculable: true,
                // color: ['#57d2ff', '#2ca8ff','#108fe5','#108fe5','#18a5ff','#033287' ],
                color:["red",'yellow'],
                textStyle: {
                    color: '#fff'
                },
            },
            series: [
                {
                    name: '商品举报数量',
                    type: 'map',
                    mapType: 'qingdao',
                    roam: false,
                    itemStyle: {
                        normal: { label: { show: true,textStyle:{color:'#fff'}} },
                        emphasis: { label: { show: true} }
                    },
                    showLegendSymbol: true,
                    data: [
                        { name: '市南区', value: 103},
                        { name: '市北区', value: 14 },
                        { name: '黄岛区', value: 1 },
                        { name: '崂山区', value: 3 },
                        { name: '李沧区', value: 2 },
                        { name: '城阳区', value: 41 },
                        { name: '胶州市', value: 22 },
                        { name: '即墨市', value: 4 },
                        { name: '平度市', value: 15 },
                        { name: '莱西市', value: 6 }
                    ]
                }
            ]
        };
        _charts.setOption(option);
    });
});