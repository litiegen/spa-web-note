//菜单内容
var menu = {};
menu.fontHandler = function(e) {
	menu.fontFamily = e.family;
	menu.fontStype = e.style;
	menu.fontSize = e.size;
	$editor.setFont(e);
};
$(function() {
	$editor.show();
	$editor.setFont({
		family: 'Arial',
		style: '常规',
		size: '16'
	});
	$menubar.show(menu.json);
	$('body').click(function(){
		$menubar.hideMenu();
	});
});
menu.json = [{
	title: '文件(F)',
	menuItems: [{
		title: '新建(N)',
		txt: 'Ctrl+N',
		handler: function() {console.log('文件(F) check')}
	},
	{
		title: '退出(X)',
		handler: function() {console.log('退出(X) check')}
	}],
	width: '200px',
	left: '0px'
},
{
	title: '编辑(E)',
	menuItems: [{
		title: '撤销(U)',
        txt: 'Ctrl+Z',
		handler: function() {console.log('撤销(U) check')}
	},
	{
		title: '剪切(T)',
        txt: 'Ctrl+X',
		handler: function() {console.log('剪切(T) check')}
	}],
	width: '200px',
	left: '54px'
},
{ 
	title: '格式(O)',
	menuItems: [{
		title: '字体(F)...',
        handler: function() {
			$Font.show({
				family: menu.fontFamily,
				style: menu.fontStyle,
				size: menu.fontSize,
				okHandler: menu.fontHandler
			});
		}
	}],
	width: '120px',
	left: '108px'
},
{
	title: '查看(V)',
	menuItems: [{
		title: '状态栏',
		handler: function() {console.log('状态栏 check')}
	}],
	width: '120px',
	left: '162px'
},
{
	title: '帮助(H)',
	menuItems: [{
		title: '关于记事本',
		handler: function() {console.log('关于记事本 check')}
	}],
	width: '140px',
	left: '216px'
}];