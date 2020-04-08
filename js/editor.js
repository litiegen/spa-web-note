//编辑
var $editor = (function() {
	var $text = $(
		'<div class="notepad-editor">'
			+ '<textarea spellcheck="false" auto-size="none"></textarea>'
		+ '</div>');

	var $textArea = $text.find('textarea');
	function setFont(e){
		$textArea.css({
			'font-family': e.family,
			'font-size': e.size + 'pt'
		});
		if(e.style === '斜体'){
			$textArea.css({
				'font-style': 'italic',
				'font-weight':''
			});
			return;
		}
		else if(e.style === '粗体') {
			$textArea.css({
				'font-style': '',
				'font-weight': 'bold'
			});
			return;
		}
		else if(e.style === '粗偏斜体') {
			$textArea.css({
				'font-style': 'italic',
				'font-weight': 'bold'
			});
			return;
		}
		else{
			$textArea.css({
				'font-style': '',
				'font-weight': ''
			});
			return;
		}
	}
	function show() {
		$('body').append($text);
	}
	return {
		show: show,
		setFont: setFont
	};
}());