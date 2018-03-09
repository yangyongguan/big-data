/**
 * Created by Jeason on 2016/8/14.
 */
(function() {
    var flag = true;
    var myChart = null;
    var option = {};
    /*点击地图事件*/
    function clickMapOn(myChart){
        myChart.on('click',function(param){

            updateTab(param.data);//此处加载点击地图的数据
        });
        updateTab();//初始化数据
    }
    function updateTab(param){
        var data = {
            percentKq:Math.round(Math.random()*100),//克强指数
            percentPs:Math.round(Math.random()*100),//居民消费信心指数
            dataList:[
                {title:'生产总值',total:'1477.5亿元',avg:'1405亿元',range:'14.2%',state:0},
                {title:'社会消费品零售额',total:'376亿元',avg:'356亿元',range:'10.6%',state:0},
                {title:'企业数量',total:'1027家',avg:'986家',range:'13.7%',state:0},
                {title:'居民收入',total:'73465元',avg:'73234元',range:'17.8%',state:0},
                {title:'固定资产投资',total:'387亿元',avg:'402亿元',range:'5.9%',state:0},
                {title:'财政支出',total:'81.5亿元',avg:'79亿元',range:'7.6%',state:0},
                {title:'财政收入',total:'67.93亿元',avg:'65.7亿元',range:'6.1%',state:1},
                {title:'进口额',total:'8.78亿美元',avg:'7.96亿美元',range:'7.93%',state:0},
                {title:'出口额',total:'7.56亿美元',avg:'7.74亿美元',range:'6.8%',state:1}
            ]
        };
        var type = $("#tab0 a.active").index();
        if(type==0){//市级经济
            data.cityName = '崂山区';
            data.avgTitle = '全市平均';
        }else if(type==1){//省级经济
            data.cityName = '青岛市';
            data.avgTitle = '全省平均';
        }else if(type==2){//全国经济
            data.cityName = '山东省';
            data.avgTitle = '全国平均';
        }
        if(param){
            $('#cityId').text(param.name);
        }else{
            $('#cityId').text(data.cityName);
        }
        $('#cityAvgId').text(data.avgTitle);
        var kq=document.getElementById('percentKq');
        if(!(kq==null||kq==undefined)){
           kq.innerText = data.percentKq+'%';
        }
        var ps=document.getElementById('percentPs');
        if(!(ps==null||ps==undefined)){
            ps.innerText = data.percentPs+'%';
        }
        var html = template('tabId', data);
        $("#tbdId").html(html);
    }
    var chinaJson='',shandongJson='',qingdaoJson='';
    window.setMapCharts = function(id, dataSet, yearIndex, type) {
        /*绘制中国地图*/
        function initChinaMap(mapJson){
            echarts.registerMap('china', mapJson);
            flag = false;
            myChart = myChart?myChart:echarts.init(document.getElementById(id));
            //myChart = echarts.init(document.getElementById(id));
            option = {
                tooltip: {
                    trigger: 'item',
                    borderWidth:1,
                    borderColor:'red',
                    backgroundColor:'rgba(255,255,255,.9)',
                    padding:10,
                    formatter:function(a){
                        return '<div class="tipbox"><h2>'+a.name+'<small>2016年6月</small></h2>'+
                            '<p>GDP <var class="c1">234</var>亿元，增速 <var  class="c2">1.3%</var></p>'+
                            '<p>CPI <var  class="c1">234</var>亿元，增速 <var  class="c3">－0.8%</var></p>'+
                            '</div>'
                    }
                },
                color: ["#81f594", "#59c16b", "#00ac1d", "#0787e8", "#ffa800", "#ff4800"],
                visualMap: {
                    min: 0,
                    max: 2500,
                    color: ['red', 'yellow'],
                    left: '150',
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
                    seriesIndex: 0
                },
                series: [{
                    name: '',
                    type: 'map',
                    map: 'china',
                    top: "0%",
                    roam: false,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#0587aa'
                        },
                        emphasis: {
                            areaColor: 'yellow'
                        }
                    },
                    data: dataSet[yearIndex].china
                }]
            };
            myChart.setOption(option);
            clickMapOn(myChart);
        }
        /*初始化山东地图*/
        function  initShandongMap(mapJson){
            echarts.registerMap('shandong', mapJson);
            flag = false;
            myChart = myChart?myChart:echarts.init(document.getElementById(id));
            //myChart = echarts.init(document.getElementById(id));
            option = {
                tooltip: {
                    trigger: 'item',
                    borderWidth:1,
                    borderColor:'red',
                    backgroundColor:'rgba(255,255,255,.9)',
                    padding:10,
                    formatter:function(a){
                        return '<div class="tipbox"><h2>'+a.name+'<small>2016年6月</small></h2>'+
                            '<p>GDP <var class="c1">'+a.data.value+'</var>亿元，增速 <var  class="c2">'+a.data.percentGdp+'%</var></p>'+
                            '<p>CPI <var  class="c1">'+a.data.cpi+'</var>亿元，增速 <var  class="c3">'+a.data.percentCpi+'%</var></p>'+
                            '</div>';
                    }
                },
                color: ["#81f594", "#59c16b", "#00ac1d", "#0787e8", "#ffa800", "#ff4800"],
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
                    seriesIndex: 0
                },
                series: [{
                    name: '',
                    type: 'map',
                    map: 'shandong',
                    top: "0%",
                    roam: false,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#0587aa'
                        },
                        emphasis: {
                            areaColor: 'yellow'
                        }
                    },
                    data: dataSet[yearIndex].shandong
                }]
            };
            myChart.setOption(option);
            clickMapOn(myChart);
        }
        /*初始化青岛地图*/
        function initQingdaoMap(mapJson){
            echarts.registerMap('qingdao', mapJson);
            flag = false;
            myChart = myChart?myChart:echarts.init(document.getElementById(id));
            //myChart = echarts.init(document.getElementById(id));
            option = {
                tooltip: {
                    trigger: 'item',
                    borderWidth:1,
                    borderColor:'red',
                    backgroundColor:'rgba(255,255,255,.9)',
                    padding:10,
                    formatter:function(a){
                        return '<div class="tipbox"><h2>'+a.name+'<small>2016年6月</small></h2>'+
                            '<p>GDP <var class="c1">'+a.data.value+'</var>亿元，增速 <var  class="c2">'+a.data.percentGdp+'%</var></p>'+
                            '<p>CPI <var  class="c1">'+a.data.cpi+'</var>亿元，增速 <var  class="c3">'+a.data.percentCpi+'%</var></p>'+
                            '</div>'
                    }
                },
                color: ["#81f594", "#59c16b", "#00ac1d", "#0787e8", "#ffa800", "#ff4800"],
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
                    seriesIndex: 0
                },
                series: [{
                    name: '',
                    type: 'map',
                    map: 'qingdao',
                    top: "0%",
                    roam: false,
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#0587aa'
                        },
                        emphasis: {
                            areaColor: 'yellow'
                        }
                    },
                    data: dataSet[yearIndex].qingdao
                }]
            };
            myChart.setOption(option);
            clickMapOn(myChart);
        }
        if (type == "china") {
             if(chinaJson){
                 initChinaMap(chinaJson);
             }else {
                 $.get('../js/china.json', function(mapJson) {
                     chinaJson = mapJson;
                     initChinaMap(chinaJson);
                 });
             }
        } else if (type == "shandong") {
             if(qingdaoJson){
                 initShandongMap(shandongJson);
             }else{
                 $.get('../js/shandong.json', function(mapJson) {
                     shandongJson = mapJson;
                     initShandongMap(shandongJson);
                 })
             }
        } else if (type == "qingdao") {
            if(qingdaoJson){
                initQingdaoMap(qingdaoJson);
            }else{
                $.get('../js/qingdao.json', function(mapJson) {
                    qingdaoJson = mapJson;
                    initQingdaoMap(qingdaoJson);
                })
            }
        }
    }
})()