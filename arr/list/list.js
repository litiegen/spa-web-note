function comList() {
	var $comList = $(
		'<div class="notepad-com-list">'
			+ '<input class="editor" type="text"><br>'
			+ '<ul class="list">'
			+ '</ul>'
		+ '</div>');
	
	var $editor = $comList.find('.editor'),
		$list = $comList.find('.list'),
		$items;
	
	var cfg = {
		container: '',
		list: [],
		select: 0,
		width: '200px',
		isFont: false,
		isFontStyle: false,
		selectHandler: null
	};
	
	function fillData() {
		var i = 0, $item;
		if(cfg.isFont) {
			for(i=0; i<cfg.list.length; i++) {
				$item = $('<li class="item"></li>');
				$item.css({'font-family': cfg.list[i]});
				$list.append($item.html(cfg.list[i]));
			}
		} 
		else if(cfg.isFontStyle) {
			for(i=0; i<cfg.list.length; i++) {
				$item = $('<li class="item"></li>');
				$list.append($item.html(cfg.list[i]));
			}
		} 
		else {
			for(i=0; i<cfg.list.length; i++) {
				$item = $('<li class="item"></li>');
				$list.append($item.html(cfg.list[i]));
			}
		}
		$items = $list.find('.item');
	}
	
	function setSelect(n) {
		$($items[n]).addClass('selected');
		$editor.val(cfg.list[n]);
		$editor.select();
	}
	
	function init() {
		var $oldList = $(cfg.container).find('.notepad-com-list');
		if($oldList.length !== 0) $oldList.remove();
		$(cfg.container).append($comList);
		$comList.css({ width: cfg.width });
		fillData();
		setSelect(cfg.select);
	}
	
	this.show = function(conf) {
		$.extend(cfg, conf);
		init();
		$list.click(function(e) {
			$($items[cfg.select]).removeClass('selected');
			cfg.select = cfg.list.indexOf($(e.target).html());
			$($items[cfg.select]).addClass('selected');
			$editor.val(cfg.list[cfg.select]);
			$editor.select();
			cfg.selectHandler(cfg.select);
		});
	};
}