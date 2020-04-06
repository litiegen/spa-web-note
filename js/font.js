var $Font = (function() {
	var $fonts = $(
		'<div class="notepad-dlg-mask notepad-dlg-font">'
			+ '<div class="dialogbox notepad-dlgbox">'
				+ '<div class="notepad-dlg-titlebar">'
					+ '<p class="title">字体</p>'
					+ '<span class="close-btn" title="关闭">✖</span>'
				+ '</div>'
				+ '<div class="main notepad-dlg-main">'
					+ '<div class="font-family"><p>字体(F):</p></div>'
					+ '<div class="font-style"><p>字形(Y):</p></div>'
					+ '<div class="font-size"><p>大小(S):</p></div>'
					+ '<fieldset class="sample">'
						+ '<legend>示例</legend>'
						+ '<p class="sample-txt">AaBbYyZz</p>'
					+ '</fieldset>'
					+ '<div class="script">'
						+ '<label>'
							+ '脚本(R):<br>'
							+ '<select>'
								+ '<option value="西欧语言">西欧语言</option>'
								+ '<option value="中文 GB2312">中文 GB2312</option>'
							+ '</select>'
						+ '</label>'
					+ '</div>'
					+ '<input class="btn-ok btn" type="button" value="确定">'
					+ '<input class="btn-cancel btn" type="button" value="取消">'
				+ '</div>'
			+ '</div>'
		+ '</div>');	
	var $btnOk = $fonts.find('.btn-ok'),
		$btnClose = $fonts.find('.close-btn'),
		$btnCancel = $fonts.find('.btn-cancel'),
		$sample = $fonts.find('.sample-txt');
	var fonts = [
		'Agency FB', 
		'Algerian', 
		'Arial', 
		'Arial Rounded MT', 
		'Axure Handwriting', 
		'Bahnschrift', 
		'Baskerville Old Face', 
		'Bauhaus 93', 
		'Bell MT', 
		'Berlin Sans FB', 
		'Bernard MT', 
		'BlackAdder ITC'
	];
	var styles = ['常规', '斜体', '粗体', '粗偏斜体'];
	var sizes = ['8','9','10','11','12','14','16','18',
	'20','22','24','26','28','36','48','72'];
	var cfg = {
		family: 'Arial',
		style: '常规',
		size: '16'
	};
	function sample() {
		$sample.css({
			'font-family': cfg.family, 
			'font-size': cfg.size + 'pt' 
		});
		if(cfg.style === '斜体') {
			$sample.css({
				'font-weight': '',
				'font-style': 'italic'
			});
			return;
		}
		else if(cfg.style === '粗体') {
			$sample.css({
				'font-weight': 'bold',
				'font-style': ''
			});
			return;
		}
		else if(cfg.style === '粗偏斜体') {
			$sample.css({
				'font-weight': 'bold', 
				'font-style': 'italic'
			});
			return;
		}
		else{
			$sample.css({
				'font-weight':'', 
				'font-style': ''
			});
			return;
		}
	}
	function init() {
		new List().show({
			container: '.notepad-dlg-font .font-family',
			width: '170px',
			list: fonts,
			select: fonts.indexOf(cfg.family),
			isFont: true,
			selectHandler: function(e) {
				cfg.family = fonts[e];
				sample();
			}
		});
		new List().show({
			container: '.notepad-dlg-font .font-style',
			width: '120px',
			list: styles,
			select: styles.indexOf(cfg.style),
			isFontStyle: true,
			selectHandler: function(e) {
				cfg.style = styles[e];
				sample();
			}
		});
		new List().show({
			container: '.notepad-dlg-font .font-size',
			width: '60px',
			list: sizes,
			select: sizes.indexOf(cfg.size),
			selectHandler: function(e) {
				cfg.size = sizes[e];
				sample();
			}
		});
		sample();
	}
	function destory() { 
		$fonts.remove(); 
	}
	function show(conf) {
		$.extend(cfg, conf);
		$('body').append($fonts);
		init();
		$btnClose.click(destory);
		$btnCancel.click(destory);
		$btnOk.click(function() {
			cfg.okHandler({
				family: cfg.family,
				style: cfg.style,
				size: cfg.size
			});
			destory();
		});
		$fonts.click(function(e) {
			e.stopPropagation();
		});
	}
	return {
		show: show
	};
}());