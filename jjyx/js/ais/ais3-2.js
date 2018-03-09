$(function() {
    var _charts = charts.init({id: 328, container: "box1"});
    var _charts2 = charts.init({id: 329, container: "box2"});
    var _charts3 = charts.init({id: 330, container: "box3"});

    var ais2={};
    ais2.fn_tab = function(type,type2){
        //此处请求后台数据加载到表格中
    }
    //总产值增速
    ais2.fn_Chart1 = function(type){
        _charts = _charts?_charts:charts.init({id: 328, container: "box1"});
        var option = {
            legend: {
                data:['青岛增速','山东增速','全国增速']
            },
            xAxis:{
                data: ['2015.1','2015.2','2015.3','2015.4','2015.5','2015.6日','2015.7']
            },
            series: [
                {
                    name:'青岛增速',
                    data:[Math.round(Math.random() * 10+2), 11, 15, 13, 12, 13, 10]
                },
                {
                    name:'山东增速',
                    data:[Math.round(Math.random() * 10), 2, 2, 5, 3, 2, 7]
                },
                {
                    name:'全国增速',
                    data:[Math.round(Math.random() * 10),6, 4, 7, 9, 4, 8]
                }
            ]
        };
        _charts.setOption(option);
    }
    //资本周转率
    ais2.fn_Chart2 = function(type){
        var option = {
            legend: {
                data:['资本周转率']
            },
            xAxis:  {
                data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
            },
            series: [
                {
                    name:'资本周转率',
                    data:[Math.round(Math.random() * 10), 11, 15, 13, 12, 13, 10, 15, 13, 12, 13, 10]
                }
            ]
        };
        _charts2 = _charts2?_charts2:charts.init({id: 329, container: "box2"});
        _charts2.setOption(option);
    }
    //资金周转率
    ais2.fn_Chart3 = function(type){
        var option = {
            legend: {
                show:false,
                data:['资本金利率']
            },
            xAxis:  {
                data: ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
            },
            series: [
                {
                    name:'资本金利率',
                    data:[Math.round(Math.random() * 10), 11, 15, 13, 12, 13, 10, 15, 13, 12, 13, 10]
                }
            ]
        };
        _charts3 = _charts3?_charts3:charts.init({id: 330, container: "box3"});
        _charts3.setOption(option);
    }

    var type = 0, type2 = 0;
    $('#select01').on('change',function(){
        type = this.value;
    });
    $('#select02').on('change',function(){
        type2 = this.value;
        ais2.fn_tab(type,type2);
    });
    $('.searchBtn').on('click',function(){
        ais2.fn_tab(type,type2);
        ais2.fn_Chart1(type);
        ais2.fn_Chart2(type);
        ais2.fn_Chart3(type);
    });

})
