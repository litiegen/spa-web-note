//菜单
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
var $menubar = (function() {
	var tabbar = $('<div class="notepad-menubar"></div>');
	var menu;
	var menus = [];
	var active = -1;
	function check() {
		for(var i=0; i<menu.length; i++) {
			var $menus = $('<ul class="menus"></ul>');
			var items = menu[i].menuItems;
			for(var j=0; j<items.length; j++) {
				var $menu = $('<li class="menu-item"></li>');
				$menu.html(items[j].title);
				$menu.attr('data-x', i);
				$menu.attr('data-y', j);
				if(items[j].txt !== '') {
					$menu.append($('<span class="txt"></span>').html(items[j].txt));
				}
				$menus.append($menu);
				$menu.click(function() {
					menus[this.dataset.x].css({display: 'none'});
					active = -1;
					menu[this.dataset.x].menuItems[this.dataset.y].handler();
				});
			}
			$menus.css({
				width: menu[i].width,
				left: menu[i].left,
				display: 'none'
			});
			tabbar.append($menus);
			menus.push($menus);
		}
	}
	function menutabbar() {
		var $titles = $('<ul class="menu-title"></ul>');
		for(var i=0; i<menu.length; i++) {
			var $title = $('<li class="title"></li>');
			$title.attr('data-id',i);
			$title.html(menu[i].title);
			$titles.append($title);
			$title.click(function(e) {
				var i = Number(this.dataset.id);
				if(active === -1) {
					menus[i].css({display:'inline-block'});
					active = i;
				}
				else if(active !== i) {
					menus[active].css({display: 'none'});
					menus[i].css({display:'inline-block'});
					active = i;
				}
				else {
					menus[active].css({display: 'none'});
					active = -1;
				}
				e.stopPropagation();
			});
		}
		tabbar.append($titles);
	}
	function hideMenu() {
		if(active === -1){
			return;
		}
		menus[active].css({display: 'none'});
		active = -1;
	}
	function show(data) {
		menu = data;
		menutabbar();
		check();
		$('body').append(tabbar);
	}
	return {
		show: show,
		hideMenu: hideMenu
	};
}());