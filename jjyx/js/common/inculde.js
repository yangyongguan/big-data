/**
 * Created by admin on 2016/10/31.
 */
$(function() {
    var pt = null;
    //判断浏览器是否是IE9以下
    var ua = (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE6.0" || navigator.appName == "Microsoft Internet Explorer" &&
    navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE7.0" || navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.split(";")[1].replace(/[ ]/g, "") == "MSIE8.0");
    var html = '<div class="ieTips" style="z-index: 99999999;color:#000;position:fixed;top:0;left:0;width: 100%; height: 38px; line-height: 38px; background: #fff7d9;">' +
        '<div style="float:left;margin-left:20px;">' +
        '<span> 为了使您获得本平台最佳使用体验，建议使用如下浏览器：' +
        ' Internet Explorer 9/10/11、&nbsp;&nbsp;' +
        ' Mozilla Firefox 49、&nbsp;&nbsp;' +
        ' Chrome 54 。' +
        '</span>' +
        '</div>' +
        '<div style="float:right;margin-right:20px;">' +
        '<button type="button" class="close_prompt" style="border: 1px solid #ccc;padding:3px 15px;">关闭提示</button>' +
        '</div>' +
        '</div>';
    if (ua){
        $("body").append(html).css({'padding-top':'38px'});
        pt = parseInt($(".menu").css('padding-top').replace('px',''));
        $(".menu").css({'padding-top':(38 + pt +'px')});
    }
    $(".close_prompt").on("click", function () {
        $(this).parents(".ieTips").slideUp();
        $("body").css({'padding-top':'0px'});
        $(".menu").css({'padding-top':(pt +'px')});
    });

});

/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 * jquer ajax IE8的支持
 */
(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else if(typeof exports==='object'){module.exports=a(require('jquery'))}else{a(jQuery)}}(function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return}var n=/^https?:\/\//i;var o=/^get|post$/i;var p=new RegExp('^'+location.protocol,'i');$.ajaxTransport('* text html xml json',function(j,k,l){if(!j.crossDomain||!j.async||!o.test(j.type)||!n.test(j.url)||!p.test(j.url)){return}var m=null;return{send:function(f,g){var h='';var i=(k.dataType||'').toLowerCase();m=new XDomainRequest();if(/^\d+$/.test(k.timeout)){m.timeout=k.timeout}m.ontimeout=function(){g(500,'timeout')};m.onload=function(){var a='Content-Length: '+m.responseText.length+'\r\nContent-Type: '+m.contentType;var b={code:200,message:'success'};var c={text:m.responseText};try{if(i==='html'||/text\/html/i.test(m.contentType)){c.html=m.responseText}else if(i==='json'||(i!=='text'&&/\/json/i.test(m.contentType))){try{c.json=$.parseJSON(m.responseText)}catch(e){b.code=500;b.message='parseerror'}}else if(i==='xml'||(i!=='text'&&/\/xml/i.test(m.contentType))){var d=new ActiveXObject('Microsoft.XMLDOM');d.async=false;try{d.loadXML(m.responseText)}catch(e){d=undefined}if(!d||!d.documentElement||d.getElementsByTagName('parsererror').length){b.code=500;b.message='parseerror';throw'Invalid XML: '+m.responseText;}c.xml=d}}catch(parseMessage){throw parseMessage;}finally{g(b.code,b.message,c,a)}};m.onprogress=function(){};m.onerror=function(){g(500,'error',{text:m.responseText})};if(k.data){h=($.type(k.data)==='string')?k.data:$.param(k.data)}m.open(j.type,j.url);m.send(h)},abort:function(){if(m){m.abort()}}}})}));
/*IE8 ES5数组支持*/
if (typeof Array.prototype.forEach != "function") {
    Array.prototype.forEach = function (fn, context) {
        for (var k = 0, length = this.length; k < length; k++) {
            if (typeof fn === "function" && Object.prototype.hasOwnProperty.call(this, k)) fn.call(context, this[k], k, this);
        }
    };
}

if (typeof Array.prototype.map != "function") {
    Array.prototype.map = function (fn, context) {
        var arr = [];
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                arr.push(fn.call(context, this[k], k, this));
            }
        }
        return arr;
    };
}

if (typeof Array.prototype.filter != "function") {
    Array.prototype.filter = function (fn, context) {
        var arr = [];
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                fn.call(context, this[k], k, this) && arr.push(this[k]);
            }
        }
        return arr;
    };
}

if (typeof Array.prototype.some != "function") {
    Array.prototype.some = function (fn, context) {
        var passed = false;
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                if (passed === true) break;
                passed = !!fn.call(context, this[k], k, this);
            }
        }
        return passed;
    };
}

if (typeof Array.prototype.every != "function") {
    Array.prototype.every = function (fn, context) {
        var passed = true;
        if (typeof fn === "function") {
            for (var k = 0, length = this.length; k < length; k++) {
                if (passed === false) break;
                passed = !!fn.call(context, this[k], k, this);
            }
        }
        return passed;
    };
}

if (typeof Array.prototype.indexOf != "function") {
    Array.prototype.indexOf = function (searchElement, fromIndex) {
        var index = -1;
        fromIndex = fromIndex * 1 || 0;

        for (var k = 0, length = this.length; k < length; k++) {
            if (k >= fromIndex && this[k] === searchElement) {
                index = k;
                break;
            }
        }
        return index;
    };
}

if (typeof Array.prototype.lastIndexOf != "function") {
    Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
        var index = -1, length = this.length;
        fromIndex = fromIndex * 1 || length - 1;

        for (var k = length - 1; k > -1; k-=1) {
            if (k <= fromIndex && this[k] === searchElement) {
                index = k;
                break;
            }
        }
        return index;
    };
}

if (typeof Array.prototype.reduce != "function") {
    Array.prototype.reduce = function (callback, initialValue ) {
        var previous = initialValue, k = 0, length = this.length;
        if (typeof initialValue === "undefined") {
            previous = this[0];
            k = 1;
        }

        if (typeof callback === "function") {
            for (k; k < length; k++) {
                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
            }
        }
        return previous;
    };
}

if (typeof Array.prototype.reduceRight != "function") {
    Array.prototype.reduceRight = function (callback, initialValue ) {
        var length = this.length, k = length - 1, previous = initialValue;
        if (typeof initialValue === "undefined") {
            previous = this[length - 1];
            k--;
        }
        if (typeof callback === "function") {
            for (k; k > -1; k-=1) {
                this.hasOwnProperty(k) && (previous = callback(previous, this[k], k, this));
            }
        }
        return previous;
    };
}

if ($('.select').length>0) {
    /**/
    !function(t,e,i){"use strict";var n=navigator.userAgent.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/),a=!!n,r=a&&parseFloat(n[1])<7,d=navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i),o=a?"mousedown":"click",l="onwheel"in e?"wheel":"onmousewheel"in i?"mousewheel":"MouseScrollEvent"in e&&"DOMMouseScroll MozMousePixelScroll",s={fired:!1,fire:function(){t(i).on(o,".dk_options a",function(){var e=t(this),i=e.parent(),n=e.parents(".dk_container").first();return i.hasClass("disabled")||i.closest(".dk_optgroup",n).hasClass("disabled")||(i.hasClass("dk_option_current")||(b(e,n),$(e.parent(),n)),m(n)),!1}).on(l,".dk_options_inner",function(t){var e=t.originalEvent.wheelDelta||-t.originalEvent.deltaY||-t.originalEvent.detail;return a?(this.scrollTop-=Math.round(e/10),!1):e>0&&this.scrollTop<=0||0>e&&this.scrollTop>=this.scrollHeight-this.offsetHeight?!1:!0}).on({"keydown.dk_nav":function(t){var e=v||_;e&&A(t,e)},click:function(e){var i,n=t(e.target);if(v&&0===n.closest(".dk_container").length)m(v);else{if(n.is(".dk_toggle, .dk_label"))return i=n.parents(".dk_container").first(),i.hasClass("dk_open")?m(i):(v&&m(v),!i.attr("disabled")&&x(i,e)),!1;n.attr("for")&&t("#dk_container_"+n.attr("for"))[0]&&t("#dk_container_"+n.attr("for")).trigger("focus.dropkick")}}}),this.fired=!0}},p={},c=[],f={left:37,up:38,right:39,down:40,enter:13,tab:9,zero:48,z:90,last:221},h=['<div class="dk_container" id="dk_container_{{ id }}" tabindex="{{ tabindex }}" aria-hidden="true">','<a class="dk_toggle dk_label">{{ label }}</a>','<div class="dk_options">','<ul class="dk_options_inner" role="main" aria-hidden="true">',"</ul>","</div>","</div>"].join(""),u='<li class="{{ current }}{{ disabled }}"><a data-dk-dropdown-value="{{ value }}">{{ text }}</a></li>',k='<li class="dk_optgroup{{ disabled }}"><span>{{ text }}</span>',g={startSpeed:400,theme:!1,changes:!1,syncReverse:!0,nativeMobile:!0,autoWidth:!0},v=null,_=null,b=function(t,e,i){var n=e.data("dropkick"),a=n.$select,r=t.length?t:n.$original,d=r.attr("data-dk-dropdown-value")||t.attr("value"),o=r.text();e.find(".dk_label").html(o?o:"&nbsp;"),i?a.val(d):a.val(d).trigger("change"),n.settings.change&&!i&&!n.settings.syncReverse&&n.settings.change.call(a,d,o)},m=function(t){t.removeClass("dk_open dk_open_top"),v=null},C=function(i){if(i.data("dropkick").settings.fixedMove)return"up"==i.data("dropkick").settings.fixedMove?!1:!0;var n=i.find(".dk_toggle"),a=i.find(".dk_options").outerHeight(),r=t(e).height()-n.outerHeight()-n.offset().top+t(e).scrollTop(),d=n.offset().top-t(e).scrollTop();return d>a?r>a:!0},w=function(t,e,i){var n=t.find(".dk_options_inner"),a=e.prevAll("li").outerHeight()*e.prevAll("li").length+(e.closest(".dk_optgroup",n).length&&e.closest(".dk_optgroup",n).prevAll("li").outerHeight()*e.closest(".dk_optgroup",n).prevAll("li").length),r=n.scrollTop(),d=n.height()+n.scrollTop()-e.outerHeight();(i&&"keydown"===i.type||r>a||a>d)&&n.scrollTop(a)},x=function(t,e){var i=C(t),n="dk_open"+(i?"":" dk_open_top");t.find(".dk_options").css({top:i?t.find(".dk_toggle").outerHeight()-1:"",bottom:i?"":t.find(".dk_toggle").outerHeight()-1}),v=t.addClass(n),w(t,t.find(".dk_option_current"),e)},$=function(t,e,i){e.find(".dk_option_current").removeClass("dk_option_current"),t.addClass("dk_option_current"),w(e,t,i)},A=function(e,i){var n,a,r,d,o,l,s,p,c,h=e.keyCode,u=i.data("dropkick"),k=String.fromCharCode(h),g=i.find(".dk_options"),v=i.hasClass("dk_open"),_=g.find("li:not(.disabled)"),C=i.find(".dk_option_current"),w=C.closest(".dk_optgroup",g),A=_.first().hasClass("dk_optgroup")?_.first().find("li:not(.disabled)").first():_.first(),y=_.last().hasClass("dk_optgroup")?_.last().find("li:not(.disabled)").last():_.last(),T=[];switch(h){case f.enter:v?C.hasClass("disabled")||(b(C.find("a"),i),m(i)):x(i,e),e.preventDefault();break;case f.tab:v&&(C.length&&b(C.find("a"),i),m(i));break;case f.up:v?(d=C.prevAll("li:not(.disabled)").first(),d.hasClass("dk_optgroup")&&(d=d.find("li:not(.disabled)").last()),!d.length&&w.length&&(d=w.prevAll("li:not(.disabled)").first().hasClass("dk_optgroup")?w.prevAll("li:not(.disabled)").first().find("li:not(.disabled)").last():w.prevAll("li:not(.disabled)").first()),$(d.length?d:y,i,e)):x(i,e),e.preventDefault();break;case f.down:v?(r=C.nextAll("li:not(.disabled)").first(),r.hasClass("dk_optgroup")&&(r=r.find("li:not(.disabled)").first()),!r.length&&w.length&&(r=w.nextAll("li:not(.disabled)").first().hasClass("dk_optgroup")?w.nextAll("li:not(.disabled)").first().find("li:not(.disabled)").first():w.nextAll("li:not(.disabled)").first()),$(r.length?r:A,i,e)):x(i,e),e.preventDefault()}if(h>=f.zero&&h<=f.z){for(o=(new Date).getTime(),null===u.finder||void 0===u.finder?(u.finder=k.toUpperCase(),u.timer=o):o>parseInt(u.timer,10)+1e3?(u.finder=k.toUpperCase(),u.timer=o):(u.finder=u.finder+k.toUpperCase(),u.timer=o),l=_.find("a"),n=t.unique(u.finder.split("")),s=0,p=l.length;p>s;s++)if(c=t(l[s]),1===n.length&&c.text()[0].toUpperCase()===n[0]&&T.push(l[s]),0===c.html().toUpperCase().indexOf(u.finder)&&!c.closest(".dk_optgroup",g).hasClass("disabled")&&u.finder.length>1){b(c,i),$(c.parent(),i,e);break}(u.finder.length>1&&T.length>1&&1===n.length||1===u.finder.length)&&(a=t.inArray(C.find("a")[0],T),c=t(T).filter(function(t,e){return e!==C[0]&&t>a}),c=0===c.length?t(T[0]):c,b(c,i),$(c.parent(),i,e)),i.data("dropkick",u)}},y=function(e){return t.trim(e).length>0?e:!1},T=function(e,i){var n,a,r,d,o,l=function(e){var n=e.val(),a=e.html(),r=void 0!==e.attr("disabled");return u.replace("{{ value }}",n).replace("{{ current }}",y(n)!==i.value||r?"":"dk_option_current").replace("{{ disabled }}",r?"disabled":"").replace("{{ text }}",t.trim(a)?t.trim(a):"&nbsp;")},s=e.replace("{{ id }}",i.id).replace("{{ label }}",i.label).replace("{{ tabindex }}",i.tabindex),p=[];if(i.options&&i.options.length)for(a=0,r=i.options.length;r>a;a++){if(d=t(i.options[a]),d.is("option"))o=0===a&&void 0!==d.attr("selected")&&void 0!==d.attr("disabled")?null:l(d);else if(d.is("optgroup")){if(o=k.replace("{{ text }}",d.attr("label")||"---").replace("{{ disabled }}",void 0!==d.attr("disabled")?" disabled":""),t(i.options[a]).children().length){o+="<ul>";for(var c=0,f=t(i.options[a]).children().length;f>c;c++){var h=t(i.options[a]).children().eq(c);o+=l(h)}o+="</ul>"}o+="</li>"}p[p.length]=o}return n=t(s),n.find(".dk_options_inner").html(p.join("")),n};p.init=function(e){return e=t.extend({},g,e),h=e.dropdownTemplate?e.dropdownTemplate:h,u=e.optionTemplate?e.optionTemplate:u,!s.fired&&s.fire(),this.each(function(){var i,n=t(this),a=n.find(":selected").first(),r=n.children(),o=n.data("dropkick")||{},l=n.attr("id")||n.attr("name"),s=n.parent(".dk_wrap"),p=e.width||s.length?s.width()-(n.innerWidth()-n.width()):n.outerWidth(),f=n.attr("tabindex")||"0",u=!!n.attr("disabled"),k=!1;return o.id?n:(o.settings=e,o.tabindex=f,o.id=l,o.$original=a,o.$select=n,o.value=y(n.val())||y(a.attr("value")),o.label=a.text()?a.text():"&nbsp;",o.options=r,o.theme=e.theme||"default",k=T(h,o),o.settings.autoWidth&&k.find(".dk_toggle").css({width:p+"px"}),u&&k.attr({disabled:"disabled",tabindex:-1}),n.before(k).appendTo(k.addClass("dk_theme_"+o.theme)),s.length?(s.removeClass("dk_wrap"),k.show()):k.fadeIn(e.startSpeed),o.$dk=k,n.data("dropkick",o),k.addClass(n.attr("class")),k.data("dropkick",o),c[c.length]=n,k.on({"focus.dropkick":function(){_=!k.attr("disabled")&&k.addClass("dk_focus")},"blur.dropkick":function(){k.removeClass("dk_focus"),_=null}}),d&&o.settings.nativeMobile&&k.addClass("dk_mobile"),o.settings.syncReverse&&n.on("change",function(e){var i=n.val(),a=t('a[data-dk-dropdown-value="'+i+'"]',k),r=a.text();k.find(".dk_label").html(r?r:"&nbsp;"),$(a.parent(),k,e),o.settings.change&&o.settings.change.call(n,i,r)}),i=n.attr("form")?t("#"+n.attr("form").replace(" ",", #")):n.closest("form"),void(i.length&&i.on("reset",function(){n.dropkick("reset")})))})},p.theme=function(e){var i=t(this).data("dropkick"),n=i.$dk,a="dk_theme_"+i.theme;i.theme=e||i.theme,n.removeClass(a).addClass("dk_theme_"+e)},p.reset=function(e){return this.each(function(){var i=t(this).data("dropkick"),n=i.$dk,a=t('a[data-dk-dropdown-value="'+i.$original.attr("value")+'"]',n);i.$original.prop("selected",!0),$(a.parent(),n),b(a,n,!e)})},p.setValue=function(e){return this.each(function(){var i=t(this).data("dropkick").$dk,n=t('.dk_options a[data-dk-dropdown-value="'+e+'"]',i);n.length&&b(n,i)|$(n.parent(),i)})},p.refresh=function(e){return this.each(function(){var i,n,a=t(this).data("dropkick"),r=a.$select,d=a.$dk;a.options=r.children(),n=T(h,a).find(".dk_options_inner"),d.find(".dk_options_inner").replaceWith(n),a.$original.parent().length||(a.$original=r.find(":selected").first(),a.label=a.$original.text()),i=t('a[data-dk-dropdown-value="'+r.val()+'"]',d),$(i.parent(),d),b(i,d,!e)})},p.destroy=function(){return this.each(function(){var e=t(this).data("dropkick");e.$dk.before(function(){return e.$select.removeData("dropkick")}).remove()})},p.clone=function(e,i,n){var a=[];t.each(this,function(r){var d=t(this).data("dropkick"),o=d.settings,l=d.$select.clone();o.autoWidth&&(o.width=d.$dk.find(".dk_label").width()),i&&l.attr({id:i}),n&&l.attr({name:n}),l.removeData("dropkick"),e===!1?a[r]=l[0]:(l.dropkick(o),a[r]=l.data("dropkick").$dk[0])})},p.disable=function(e){return this.each(function(){var i=t(this).data("dropkick"),n=i.$select,a=i.$dk;e===!1?(n.removeAttr("disabled"),a.removeAttr("disabled").attr({tabindex:i.tabindex})):(a.hasClass("dk_open")&&m(a),n.attr({disabled:"disabled"}),a.attr({disabled:"disabled",tabindex:-1}))})},t.fn.dropkick=function(t){if(!r){if(p[t])return p[t].apply(this,Array.prototype.slice.call(arguments,1));if("object"==typeof t||!t)return p.init.apply(this,arguments)}}}(jQuery,window,document);
    $('.select').dropkick();
}
$(".menu dd").eq(did).addClass("active");

/**
 * common_lt.js
 * 前后端联调JS
 * 包含的函数有：
 * ajaxGetData：			ajax请求后台数据
 * ajaxGetDataCall：		ajax请求后台(异步),并处理业务逻辑
 *
 */
//动态获取项目路径
var root = getRootPath();
//测试路径
//var root = "http://202.106.10.250:60010/";
//示例参考
//ajaxGetData("/warningPlatformController/getPlatform","areaId=110000&forewarnType=嫌疑人&importantArea=寺庙");

/**
 * ajax请求后台数据
 *
 * @param url 		请求URl 示例：warningPlatformController/getPlatform
 * @param params	拼接请求参数 typeCode=-1
 * @returns json数据对象
 */
function ajaxGetData(url,params) {
    var obj = null;
    $.ajax({
        type : 'get',
        url : root + url+"?"+params,
        async : false,
        cache : false,
        dataType : 'json',
        success : function(data) {
            obj = data;
        }
    });
    return obj;
}


/**
 * ajax请求后台(异步),并处理业务逻辑
 *
 * @param url 		请求URl 示例：warningPlatformController/getPlatform
 * @param params	拼接请求参数 typeCode=-1
 * @param callback	业务逻辑处理
 * @returns json数据对象
 */
function ajaxGetDataCall(url,params,callback) {
    var obj = null;
    $.ajax({
        type : 'get',
        url : root + url+"?"+params,
        async : true,
        cache : false,
        dataType : 'json',
        success : function(data) {
            //debugger
            if(callback!=null){
                if (typeof (callback) == 'function') {
                    callback(data);
                }
            }
        }
    });
}

/**
 * ajax请求后台(异步),并处理业务逻辑
 *
 * @param url 		请求URl 示例：warningPlatformController/getPlatform
 * @param paramsObj	拼接请求参数 {typeCode:-1}
 * @param callback	业务逻辑处理
 * @returns json数据对象
 */
function ajaxPostDataCall(url,paramsObj,callback) {
    var obj = null;
    $.ajax({
        type : 'POST',
        url : root + url,
        async : true,
        data:paramsObj,
        cache : false,
        dataType : 'json',
        success : function(data) {
            //debugger
            if(callback!=null){
                if (typeof (callback) == 'function') {
                    callback(data);
                }
            }
        }
    });
}


/**
 * 获取请求后台的URl
 *
 * @param url 		请求URl 示例：warningPlatformController/getPlatform
 * @param params	拼接请求参数 typeCode=-1
 * @returns json数据对象
 */
function getRequestUrl(url,params) {
    return root + url+"?"+params;
}

/**
 * 由JSON字符串转换为JSON对象
 *
 * @param str json格式字符串
 */
function transStrToJosnObj(str) {
    return eval('(' + str + ')');
}
/**
 * js获取项目根路径
 */
function getRootPath() {
    // 获取当前网址，如： http://localhost:8083/uimcardprj/share/meun.jsp
    var curWwwPath = window.document.location.href;
    // 获取主机地址之后的目录，如： uimcardprj/share/meun.jsp
    var pathName = window.document.location.pathname;
    var pos = curWwwPath.indexOf(pathName);
    // 获取主机地址，如： http://localhost:8083
    var localhostPaht = curWwwPath.substring(0, pos);
    // 获取带"/"的项目名，如：/uimcardprj
    var projectName = pathName
        .substring(0, pathName.substr(1).indexOf('/') + 1);
    //return (localhostPaht + projectName);
    return localhostPaht + '/';
}
/**
 * 日期格式化
 *  @param   formatStr 日期格式， 如'YYYY-MM-DD'
 */
Date.prototype.format = function(formatStr) {
    var str = formatStr;
    str = str.replace(/yyyy|YYYY/, this.getFullYear());
    str = str.replace(/yy|YY/,
        (this.getYear() % 100) > 9 ? (this.getYear() % 100).toString()
            : '0' + (this.getYear() % 100));
    str = str.replace(/MM/, (this.getMonth()+1) > 9 ? (this.getMonth()+1).toString()
        : '0' + (this.getMonth()+1));
    str = str.replace(/M/g, (this.getMonth()+1));
    str = str.replace(/dd|DD/, this.getDate() > 9 ? this.getDate().toString()
        : '0' + this.getDate());
    str = str.replace(/d|D/g, this.getDate());
    return str;
}
/**
 * 计算日期
 * @param strInterval 增加频度 d按天，m按月，y按年
 * @param number	  增加幅度
 *
 */
Date.prototype.dateAdd = function(number,strInterval) {
    if(strInterval=="m"||strInterval=="M"){
        var month = this.getMonth();
        var date = new Date(this.getTime() + number*30 * 24 * 3600 * 1000);
        return date;
    }else{
        var date = new Date(this.getTime() + number * 24 * 3600 * 1000);
        return date;
    }
}

$('.time').text(fmtDate2Str(new Date()));
$('.week').text(fmtDate2Day(new Date()));
function fmtDate2Day(date){
    var day = date.getDay();
    if(day==0){
        return '星期日';
    }else if(day==1){
        return '星期一';
    }else if(day==2){
        return '星期二';
    }else if(day==3){
        return '星期三';
    }else if(day==4){
        return '星期四';
    }else if(day==5){
        return '星期五';
    }else if(day==6){
        return '星期六';
    }
}
/**
 *  把时间格式化为
 * @param date
 * @returns {string}
 */
function fmtDate2Str(date){
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    return year +'年'+ month +'月'+ day+'日';
}

