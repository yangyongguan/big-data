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

