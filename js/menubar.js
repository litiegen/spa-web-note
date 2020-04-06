//菜单栏
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