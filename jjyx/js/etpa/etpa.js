/**
 * Created by yyg on 2016/9/14.
 */
$(document).ready(function(){
    //点击查询按钮
    $('.search span').on('click',function(){
        $($('.etpa_list')[0]).hide();
        $($('.etpa_list')[1]).show();
    });
});