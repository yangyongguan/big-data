/**
 * Created by yyg on 2016/10/10.
 */

var data = [{name: '市南区', value: Math.ceil(Math.random()*100)},
    {name: '市北区', value: Math.ceil(Math.random()*100)},
    {name: '黄岛区', value: Math.ceil(Math.random()*100)},
    {name: '崂山区', value: Math.ceil(Math.random()*100)},
    {name: '李沧区', value: Math.ceil(Math.random()*100)},
    {name: '城阳区', value: Math.ceil(Math.random()*100)},
    {name: '胶州市', value: Math.ceil(Math.random()*100)},
    {name: '即墨市', value: Math.ceil(Math.random()*100)},
    {name: '平度市', value: Math.ceil(Math.random()*100)},
    {name: '莱西市', value: Math.ceil(Math.random()*100)}];

$.get('../js/qingdao.json', function(chinaJson) {
    echarts.registerMap('qingdao', chinaJson);
    myChart = echarts.init(document.getElementById("map"));
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
            backgroundColor:'#303030'
        },

        visualMap: {
            type:'piecewise',
            show:true,
            orient:'horizontal',
            left: 'left',
            top: 'bottom',
            text: ['1200','30'],           // 文本，默认为数值文本
            calculable: false,
            // color: ['#57d2ff', '#2ca8ff','#108fe5','#108fe5','#18a5ff','#033287' ],
            color:['#c04009',"#fdb096"],
            textStyle: {
                color: '#333'
            },
        },
        series: [
            {
                name: '商品举报数量',
                type: 'map',
                mapType: 'qingdao',
                // roam: false,
                itemStyle: {
                    normal: { label: { show: true,textStyle:{color:'#fff'}} },
                    emphasis: { label: { show: true} }
                },
                data: data
            }
        ]
    };
    myChart.setOption(option);
});