var $editor = (function() {
	var $DOM = $(
		'<div class="notepad-editor">'
			+ '<textarea spellcheck="false" auto-size="none"></textarea>'
		+ '</div>');
	
	var $textArea = $DOM.find('textarea');
	var cfg = {
		posHandler: null,
		contentHandler: null,
		wrap: false
	};
	
	function setFont(e) {
		$textArea.css({'font-family': e.family, 'font-size': e.size + 'pt'});
		if(e.style === '斜体') {
			$textArea.css({
				'font-style': 'italic',
				'font-weight':''
			});
			return;
		}
		else if(e.style === '粗体') {
			$textArea.css({
				'font-weight': 'bold',
				'font-style': '',
			});
			return;
		}
		else if(e.style === '粗偏斜体') {
			$textArea.css({
				'font-weight': 'bold', 
				'font-style': 'italic'});
			return;
		}
		else{
			$textArea.css({
				'font-weight': '', 
				'font-style': ''});
			return;
		}
	}
	
	function show(conf) {
		$.extend(cfg, conf);
		$('body').append($DOM);
		$textArea.trigger('focus');
	}
	
	return {
		show: show,
		setFont: setFont
	};
}());