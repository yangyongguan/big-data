webpackJsonp([12],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by yyg on 2016/11/9.
	 */

	var public = __webpack_require__(2);
	$(function() {
	    var types = ['民意类型占比','来源占比','民意类型分布','民意类型占比','来源占比','民意类型占比'];
	    var types2 = ['民意类型数量分布','来源数量分布','民意类型数量分布','民意类型数量占比','二级来源数量分布','民意类型数量分布'];
	    initData();
	    function  initData(){
	        var name = public.GetUrlObj().name;
	        var type = public.GetUrlObj().type;
	        var txt = name + types[type]
	            ,txt2 = name + types2[type];
	        $('#sourcePeId').text(txt);
	        $('#sourceCountId').text(txt2);
	        fn_charts01();
	        fn_charts02();
	    }
	    /* 来源占比 */
	    function fn_charts01(){
	    	//接口返回的数据
	    	var dt={"status":200,"data":{"appealForms":[{"appealFormsCode":"af20","appealFormsName":"督察","appealCount":257},{"appealFormsCode":"af22","appealFormsName":"信访","appealCount":144},{"appealFormsCode":"af23","appealFormsName":"9600110民生警务热线","appealCount":210},{"appealFormsCode":"af27","appealFormsName":"网上建议","appealCount":279},{"appealFormsCode":"af03","appealFormsName":"电子邮箱","appealCount":210},{"appealFormsCode":"af04","appealFormsName":"手机短信","appealCount":107},{"appealFormsCode":"af11","appealFormsName":"人大政协提案","appealCount":292},{"appealFormsCode":"af19","appealFormsName":"督办","appealCount":159},{"appealFormsCode":"af26","appealFormsName":"网上投诉","appealCount":98},{"appealFormsCode":"af07","appealFormsName":"互联网民生警务平台网站","appealCount":131},{"appealFormsCode":"af10","appealFormsName":"领导批办","appealCount":243},{"appealFormsCode":"af13","appealFormsName":"媒体热线","appealCount":215},{"appealFormsCode":"af02","appealFormsName":"网页","appealCount":282},{"appealFormsCode":"af25","appealFormsName":"来访","appealCount":211},{"appealFormsCode":"af05","appealFormsName":"手工录入","appealCount":223},{"appealFormsCode":"af12","appealFormsName":"政务热线","appealCount":131},{"appealFormsCode":"af15","appealFormsName":"主流门户网站","appealCount":232},{"appealFormsCode":"af01","appealFormsName":"电话","appealCount":241},{"appealFormsCode":"af18","appealFormsName":"其他","appealCount":230},{"appealFormsCode":"af24","appealFormsName":"来信","appealCount":263},{"appealFormsCode":"af06","appealFormsName":"语音留言","appealCount":215},{"appealFormsCode":"af08","appealFormsName":"短信平台","appealCount":291},{"appealFormsCode":"af14","appealFormsName":"微博、微信、QQ群","appealCount":227},{"appealFormsCode":"af17","appealFormsName":"窗口受理","appealCount":134},{"appealFormsCode":"af21","appealFormsName":"网警","appealCount":218},{"appealFormsCode":"af09","appealFormsName":"领导信箱","appealCount":208},{"appealFormsCode":"af16","appealFormsName":"群众来访","appealCount":174}],"statisticsDates":["2016-10-28","2016-11-28"]}};

	    	var datas=[];
			for(var i=0; i<dt.data.appealForms.length; i++){
				datas.push(
					{
						value:dt.data.appealForms[i].appealCount,
						name:dt.data.appealForms[i].appealFormsName,
						nameCode:dt.data.appealForms[i].appealFormsCode
					}
				)
			}
	    	
	        var picData = {
	            id:'box1',
	            centers:[['50%', '45%'],['50%', '45%']],
	            radius:[['62%', '63%'],['20%', '56%']],
	            seriesName:'访问来源',
	            lengths:[40,40],
	            //赋值
				data:datas
			};
	        var myChart01 = public.ChartObj.pieObj.pieSource(picData);
	        myChart01.on('click',function(param){
	        	//window.location.href = $('#box1').attr('href')+'?name='+param.data.name+'&code='+param.data.nameCode;
	            window.open($('#box1').attr('href')+'?name='+param.data.name+'&code='+param.data.nameCode);
	        });
	    }
	    /* 二级来源数量分布 */
	    function fn_charts02(){
	    	//接口返回的数据
	    	var dt={
	  			"data": {
	  				"subOrigin":[
		                {
		                	"subOriginCode":"subOrigin01",
		                	"subOriginName":"电话",
		                	"appealCount":1000
		                },
		                {
		                	"subOriginCode":"subOrigin02",
		                	"subOriginName":"网页",
		                	"appealCount":2300},
		                {
		                	"subOriginCode":"subOrigin03",
		                	"subOriginName":"电子邮箱",
		                	"appealCount":3000
		                },
		                {
		                	"subOriginCode":"subOrigin04",
		                	"subOriginName":"手机短信",
		                	"appealCount":5000
		                },
		                {
		                	"subOriginCode":"subOrigin05",
		                	"subOriginName":"手工录入",
		                	"appealCount":1000
		                }
	        		]
	  			}
			};
	    	
	    	function searchCode(name){
				for(var i = 0;i<dt.data.subOrigin.length; i++){
					if(dt.data.subOrigin[i].subOriginName==name){
						return dt.data.subOrigin[i].subOriginCode;
					}
				}
			}
	    	var xAxis=[];
	    	var datas=[];
	    	for(var i=0; i<dt.data.subOrigin.length; i++){
	    		xAxis.push(dt.data.subOrigin[i].subOriginName);
	    		datas.push(dt.data.subOrigin[i].appealCount);
	    	}
	        var barData = {
	            id:'box2',
	            y:30,
	            yName:'民意数量',
	            //赋值
	            title:public.GetUrlObj().type2?'二级民意类型':'二级来源',
	            //xAxis:['手机短信','手工录入','语音留言','电话','网页','电子邮箱'],
	            xAxis:xAxis,
	            //datas:[[234, 111, 77, 77, 76, 56]]
	            datas:[datas]
	        };
	        var myChart = public.ChartObj.barObj.barOne(barData);
	        myChart.on('click',function(param){
	          	var nameCode=searchCode(param.name);
	//          window.location.href = $('#box2').attr('href')+'?name='+param.name+'&code='+nameCode;
	 			window.open($('#box2').attr('href')+'?name='+param.name+'&code='+nameCode);
	        });
	    }

	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }
]);