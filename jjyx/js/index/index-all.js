/**
 * Created by yyg on 2016/10/31.
 */

/*
 * id1    控制台
 * id2    轴
 * obj    起始时间/结束时间/运动时间/文字配置(字体大小/字体风格/字体颜色)
 * width  轴的长度
 * callBack  回调方法
 * */
function control(id1, id2, id3, id4, obj, width, callBack) {
    //hasClass:判断当前元素上是否有这个strClass（class名）
    function hasClass(curEle, strClass) {
        var reg = new RegExp('(\\b)' + strClass + '(\\b)');
        return reg.test(curEle.className);
    }
    //addClass:添加一堆class名
    function addClass(curEle, strClass) {
        var aryClass = strClass.replace(/(^\s+)|(\s+$)/g, '').split(/\s+/g);
        for (var i = 0; i < aryClass.length; i++) {
            var curClass = aryClass[i];
            if (!hasClass(curEle, curClass)) {
                curEle.className += ' ' + curClass;
            }
        }

    }
    //removeClass:移除掉当前元素上的class名
    function removeClass(curEle, strClass) {
        var aryClass = strClass.replace(/(^\s+)|(\s+$)/g, '').split(/\s+/g);
        for (var i = 0; i < aryClass.length; i++) {
            var curClass = aryClass[i];
            if (hasClass(curEle, curClass)) {
                var reg = new RegExp('(^| +)' + curClass + '( +|$)');
                curEle.className = curEle.className.replace(reg, ' ');
            }
        }

    }
    var btnLeft = document.getElementById(id2);
    var stop = document.getElementById(id3);
    var btnRight = document.getElementById(id4);
    btnLeft.setAttribute("class", "btnLeft");
    stop.setAttribute("class", "stop");
    btnRight.setAttribute("class", "btnRight");

    var starTime = obj.starTime;
    var endTime = obj.endTime;
    var timer = obj.timer;
    var text = obj.text;
    var textColor = text.textColor;
    var fontSize = text.fontSize;
    var fontFamily = text.fontFamily;


    var button = document.getElementById("button");
    var oDiv = document.getElementById(id1);
    var oUl = oDiv.getElementsByTagName("ul")[0];


    /* 动态创建内容区域标签*/
    function bind() {
        var array = [];
        var kkklll = obj.starTime;
        var lllkkk = obj.endTime;
        var klklkl = lllkkk - kkklll;
        var oUl = document.createElement("ul");
        for (var i = 0; i < klklkl + 1; i++) {
            var oLis = document.createElement("li");
            var ospan = document.createElement("span");
            var oBr = document.createElement("br");
            addClass(ospan, "text");
            ospan.style.fontFamily = fontFamily;
            ospan.style.fontSize = fontSize+"px";
            ospan.style.color = textColor;
            ospan.style.left=-fontSize/1.8+"px";

            oLis.appendChild(oBr);
            oLis.appendChild(ospan);
            oUl.appendChild(oLis);
            var data1 = parseInt(starTime) + i;
            ospan.innerHTML = data1;
            //添加到该数组I位
            array[i] = oUl;
            oDiv.appendChild(array[i]);
        }
        var Lis = oUl.getElementsByTagName("li");
        for (var i = 0; i < Lis.length; i++) {
            var margin1 = width / Lis.length - 17;
            Lis[i].style.marginLeft = margin1 + "px";
        }
        addClass(Lis[0], 'bg');

        //var line = document.getElementsByClassName("line")[0];
        var line = $('.line')[0];//解决ie8及其以下兼容性

        var pointWarp=Lis.length*10+margin1*(Lis.length-1)
        line.style.width =pointWarp-5+"px";
        line.style.left =($("#main").outerWidth(true)-pointWarp)/2+16+"px";
        //console.log()

    }

    bind();
    var lis = oDiv.getElementsByTagName("li");
    var leftBtn = document.getElementById("btnLeft");
    var rightBtn = document.getElementById("btnRight");
    var stop = document.getElementById("stop");
    //定义一个空定时器
    var autoTimer = null;
    //索引
    var step = 0;
    //console.log(oDiv)
    oDiv.style.width = "100%";
    clearInterval(autoTimer);

    /*自动落轮播*/
    autoTimer = window.setInterval(bannerTip, timer);
    function bannerTip() {
        if (step >= lis.length - 1) {
            step = 0;
            callBack(step);
        } else {
            step++;
            callBack(step);
        }
        renderCls();
    }

    function renderCls(){
        var tmpStep = step;
        callBack(step);
        var curLi = [];
        curLi.push(lis);
        var liSpan=oDiv.getElementsByTagName("span");
        for (var i = 0; i < lis.length; i++) {
            var curLis = curLi[0][i];
            if (tmpStep <= lis.length || tmpStep == 0) {
                if (i === tmpStep) {
                    addClass(curLis, 'bg');
                    addClass(curLis,"bg1");
                } else {
                    removeClass(curLis, 'bg');

                }
            }
        }
    }

    /*点击圆点切换*/
    handleChange();
    function handleChange() {
        clearInterval(autoTimer);
        for (var i = 0; i < lis.length; i++) {
            var curLi = lis[i];
            curLi.index = i - 1;
            curLi.onclick = function () {
                step = this.index;
                bannerTip()
            }
        }
        autoTimer = setInterval(bannerTip, timer)
    }
    //点击左面
    leftBtn.onclick = function () {
        clearInterval(autoTimer);
        step = step - 1;
        if (step < 0) {
            step = lis.length -1;
        }
        renderCls();
        if(flag)
        {
            autoTimer = setInterval(bannerTip, timer);
        }
    };
    /*点击暂停事件*/
    flag = true;
    stop.onclick = function () {
        clearInterval(autoTimer);
        //如果开关是开着的,那就清除定时器,清除完在把开关关掉
        if (flag) {
            this.setAttribute("class", "play");
            flag = false;
        } else {
            //如果开关是关着的.那就加上定时器,并且把开关打开
            autoTimer = setInterval(bannerTip, timer);
            this.setAttribute("class", "stop");
            flag = true;
        }
    };

    /*点击向右走*/
    rightBtn.onclick = function () {
        clearInterval(autoTimer);
        step++;
        if (step >= lis.length) {
            step = 0;
        }
        renderCls();
        if(flag)
        {
            autoTimer=setInterval(bannerTip,timer)
        }
    };
}

(function() {
    var flag = true;
    var myChartMap = null;
    var myChart = null;
    var option = {};
    /*点击地图事件*/
    function clickMapOn(myChartMap){
        myChartMap.on('click',function(param){
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
            myChartMap = myChartMap?myChartMap:echarts.init(document.getElementById(id));
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
            myChartMap.setOption(option);
            clickMapOn(myChartMap);
        }
        /*初始化山东地图*/
        function  initShandongMap(mapJson){
            echarts.registerMap('shandong', mapJson);
            flag = false;
            myChartMap = myChartMap?myChartMap:echarts.init(document.getElementById(id));
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
            myChartMap.setOption(option);
            clickMapOn(myChartMap);
        }
        /*初始化青岛地图*/
        function initQingdaoMap(mapJson){
            echarts.registerMap('qingdao', mapJson);
            flag = false;
            myChartMap = myChartMap?myChartMap:echarts.init(document.getElementById(id));
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
            myChartMap.setOption(option);
            clickMapOn(myChartMap);
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

    /*原index.js内容*/
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
                itemGap: 30,
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
                right:'120',
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

})();