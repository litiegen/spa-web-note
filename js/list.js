//字体列表
function List() {
	var $List = $(
		'<div class="notepad-com-list">'
			+ '<input class="editor" type="text"><br>'
			+ '<ul class="list">'
			+ '</ul>'
		+ '</div>');
	var $editor = $List.find('.editor'),
		$lists = $List.find('.list'),
		$items;
	var cfg={};
	function fillData() {
		var i = 0, $item;
		console.log(cfg)
		if(cfg.isFont) {
			for(i=0; i<cfg.list.length; i++) {
				$item = $('<li class="item"></li>');
				$item.css({'font-family': cfg.list[i]});
				$lists.append($item.html(cfg.list[i]));
			}
		} 
		else if(cfg.isFontStyle) {
			for(i=0; i<cfg.list.length; i++) {
				$item = $('<li class="item"></li>');
				$lists.append($item.html(cfg.list[i]));
			}
		} 
		else {
			for(i=0; i<cfg.list.length; i++) {
				$item = $('<li class="item"></li>');
				$lists.append($item.html(cfg.list[i]));
			}
		}
		$items = $lists.find('.item');
	}
	function init() {
		if($(cfg.container).find('.notepad-com-list').length !== 0){
			$(cfg.container).find('.notepad-com-list').remove();
		}
		$(cfg.container).append($List);
		$List.css({ width: cfg.width });
		fillData();
		$($items[cfg.select]).addClass('selected');
		$editor.val(cfg.list[cfg.select]);
		$editor.select();
	}
	this.show = function(conf) {
		$.extend(cfg, conf);
		init();
		$lists.click(function(e) {
			$($items[cfg.select]).removeClass('selected');
			cfg.select = cfg.list.indexOf($(e.target).html());
			$($items[cfg.select]).addClass('selected');
			$editor.val(cfg.list[cfg.select]);
			$editor.select();
			cfg.selectHandler(cfg.select);
		});
	};
}