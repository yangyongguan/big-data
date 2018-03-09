/**
 * Created by JUSFOUN on 2016-11-8.
 *
 * Option               Defaults    Type        Description
 * type                 'single'    string      选择滑块的类型，可以设置成'single'表示单一控制器，或者设置'double'表示两个控制器
 * min                  10          number      设置滑块最小值
 * max                  100         number      设置滑块最大值
 * from                 min         number      设置滑块左控制器的开始位置(或者单一控制)
 * to                   max         number      设置滑块右控制器的开始位置
 * step                 1           number      设置滑块的步骤大小。总是大于0。不能是分数。
 * values               []          array       设置自定义的滑块数组。可以是数字或者字符串。如果被设置，min,max和step参数将不能被修改。
 * prettify_enabled     true        boolean     提高长数的可读性。例如：10000000 -> 10 000 000
 * prettify             null        function    设置自定义美化函数。
 * grid                 false       boolean     使用grid值
 * grid_margin          true        boolean     设置左右值的grid边框
 * hide_min_max         false       boolean     隐藏 min 和 max 的标签
 * hide_from_to         false       boolean     隐藏 from 和 to 的标签
 * prefix               -           string      设置前缀的值。
 * postfix              -           string      设置后缀的值
 * max_postfix          -           string      仅设置最大值的后缀值
 * disable              false       boolean     锁定滑块使它无效
 * onStart              null        function    回调函数，在滑块开始时被回调。
 * onChange             null        function    回调函数，在滑块值改变时执行。
 * onFinish             null        function    回调函数，用户释放控制杆后执行。
 */
var moment = require('../bubblecloud/moment-with-locales.min.js');
exports.bubbleCloudSlider = function(_options) {
    var options = {
        width: '80%',
        height: '500px',
        bubbleId: 'bubbleID',
        sliderId: 'sliderID'
    };
    // Merge _options into options, recursively
    $.extend(true, options, _options);
    // 创建两个div显示气泡和滑块
    if (typeof options === 'undefined' || options['id'] === 'undefined') {
        throw new Error('Please enter right params.');
    }
    var _bcs = $('#' + options.id);
    _bcs.attr({ 'style': 'width:' + options.width + ";height:" + options.height +";margin: 0 auto;"});
    // 气泡容器
    var bubbleCloudDiv = $('<div></div>');
    bubbleCloudDiv.attr('id', options.bubbleId).attr({ 'style': 'width: 100%;height:100%' });
    // 滑块容器
    var sliderDiv = $('<div></div>');
    sliderDiv.attr('id', options.sliderId).attr({ 'style': 'width:100%;border-radius:20px;margin:20px;' });
    // 生成容器dom
    _bcs.append(bubbleCloudDiv).append(sliderDiv);
    // 创建
    return createBubbleSlider(options);

}

function createBubbleSlider(options) {
    // 气泡代码
    // 根据url获取数据，这里使用模拟数据。
    //var data = createRandomData();
	var colors = ['#f2b9a6','#02b865','#2993e9','#ed5224','#edad31','#24df67', '#1788f1', '#f72f63','#2b821d', '#fdd030','#fa6822'];
    var chart = new BubbleCloudChart(document.getElementById(options.bubbleId), 
    {colors: colors});;
    chart.init();
    chart.setData(options.data.cloudData);
    window.addEventListener('resize', function(argument) {
        chart.resize();
    });

    // 滑块代码
    moment.locale('zh-cn');
    $("#" + options.sliderId).ionRangeSlider({
        type: "double",
        min: +moment(options.startDate).format('X'),
        max: +moment(options.endDate).format('X'),
        from: +moment(options.fromDate).format('X'),
        to: +moment(options.toDate).format('X'),
        prettify: function(num) {
            return moment(num, "X").format("LL");
        },
        onChange: function(data) {
            //console.log(moment(data.from, "X").format("LL"));
            //console.log(moment(data.to, "X").format("LL"));
            //chart.setData(createRandomData());
            if(!options.onChange) return;
            options.onChange(data);
        },
        onFinish: function(data) {
            if(!options.onFinish) return;
            var times = [];
            times[0] = moment(data.from, "X").format("LL");
            times[1] = moment(data.to, "X").format("LL");
            options.onFinish(times);
            //console.log(moment(data.from, "X").format("LL"));
            //console.log(moment(data.to, "X").format("LL"));
        }
    });
    return chart;
}
