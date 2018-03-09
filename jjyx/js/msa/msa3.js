$(function() {
    var _charts1 = charts.init({
        id: 305,
        container: "box1"
    });
    var _charts2 = charts.init({
        id: 307,
        container: "box2"
    });
    var myChart = echarts.init(document.getElementById('box3'));
    createMsaMap(myChart);
    var _charts4 = charts.init({
        id: 308,
        container: "box4"
    });
})