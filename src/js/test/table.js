/**
 * Created by Administrator on 2017-12-01.
 */
/**
 * 测试文件，此文件中集成大多数功能,用于演示和参考
 * @author yuanhuan yhlear@163.com
 * @exports   common
 * @lastModify 2017-11-21
 */
var config = require('../common/config');//加载配置
var common = require('../common/common');//加载公用模块
var columnsConfig = require('../tableColumns/test/providerColumns.config');//加载表格配置
require('datatables.net-responsive-dt/css/responsive.dataTables.css');//bootstrap 自适应样式
//console.log(config);
//console.log(columnsConfig);

//加载样式，样式打包时会提取到文件
require('datatables.net-bs4/css/dataTables.bootstrap4.css');//bootstrap 风格
require('jquery-colorbox/example4/colorbox.css');//弹窗样式
//加载依赖的js
require('jquery');
require('js-base64');
require('datatables.net-bs4');//表格
require('datatables.net-responsive-bs4');//表格自动缩放
require('jquery-colorbox');//弹窗组件

//功能
//显示隐藏更多搜索项
common.showHideExtend({
	formId: 'testForm'
});
var cmd = "queryProviderInfoByPage";
var arg = {
	providerName: '',
	sex: '',
	pid: '',
	providertype: '',
	certificationType: '',
	certificationDate: '',
	checkState: '',
	checkTime: '',
	transferStatus: ''
}
//var data = '{"data":[],"paramObj":'+JSON.stringify(arg)+'}';
var data = '{"data":[],"paramObj":{}}';
//Base64加密参数
var encoded = Base64['encode'](data);
var data = {"cmd": cmd, "bizPacket": encoded};
//默认的URL
//var url = "eliteAppAsyncServlet";
var url = "src/data/table.json";
$('#mytable').DataTable( {
	searching: false,//是否搜索
	ordering: false,//是否排序
	oLanguage: config.tableitLanguage,//汉化
	responsive: true,//自适应宽度
	ajax: {
		url: url,
		//type: 'POST',
		//data: data,
		//dataSrc: 'result'
	},
	columns: columnsConfig,//列配置
	dom: '<"toolbar">frtip',//表格头，不需要应删除
	//表头内容
	fnInitComplete: function(){
		var selectAll = $('<input type="checkbox"  />');
		selectAll.click(function () {
			alert($(this).is(':checked'));
		});
		$('div.toolbar').append(selectAll);
	},
	
} );
/*
$('#mytable').DataTable({
	searching: false,//是否搜索
	ordering: false,//是否排序
	oLanguage: config.tableitLanguage,//汉化
	columns: columnsConfig,//列配置
	ajax: {
		url: url,
		//type: 'POST',
		//data: data,
//		//dataSrc: 'result'
	},
	//responsive: true,
	//serverSide: true,//开启服务器模式:启用服务器分页
	paging: true,//是否分页
	pagingType: "full_numbers",//页数按钮
	dom: '<"toolbar">frtip',//表格头，不需要应删除
	//表头内容
	fnInitComplete: function(){
		var selectAll = $('<input type="checkbox"  />');
		selectAll.click(function () {
			alert($(this).is(':checked'));
		});
		$('div.toolbar').append(selectAll);
	},
	"aoColumns": [
		{ "sWidth": "100px" }
	]
});
*/
//todo 单选行
//$("#mytable tbody").on('click','tr',function () {
//	$(this).toggleClass('selected');
//});
//弹窗详情页面
var table = $('#mytable').DataTable();
$('#mytable tbody').on('click', '.openLayer', function () {
	var data = table.row(this).data();
	//alert('You clicked on ' + data[0] + '\'s row');
	var href = $(this).attr('href');
	var url = common.getUrl(href, '');
	$.colorbox({
		overlayClose: true, href: url, close: '[关闭]', width: '1100px', height: '680px', open: true,
		onComplete: function () {
			//$('#remark').focus();
		},
		onClosed: function () {
			//$('body').removeClass('modal-open');
		}
	});
});



