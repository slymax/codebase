$(document).ready(function(){

	$('.search').width($(window).width() - 350);
	var checked = ['HTML','CSS','JavaScript','jQuery'];
	var label, base;

	function search(term,result,element){
		var found = 0;
		var title = result.title.toLowerCase();
		var element = element.toLowerCase();
		var description = result.description.toLowerCase();
		for (var i in term) {
			if ((title.indexOf(term[i]) >= 0) || (element.indexOf(term[i]) >= 0) || (description.indexOf(term[i]) >= 0)) {
				found += 1;
			}
		}
		if (found === term.length) {
			return true;
		}
	}

	function display(term) {
		$('.overview').hide();
		$('.results').empty();
		length = term.length
		if (length < 3) {
			$('.overview').show();
		} else {
			term = term.toLowerCase().split(' ');
			for(var lang in base) {
				for (var element in base[lang]) {
					var obj1 = base[lang];
					var result = obj1[element];
					if (length > 2 && checked.indexOf(lang) > -1 && search(term,result,element)) {
						switch (lang) {
							case 'HTML':
							label = 'ui ribbon blue label';
							var scheme = '<div class="card"><div class="ui piled segment"><div class="'+label+'">'+lang+'</div><strong>'+result.title+'</strong><div class="indicator ui small label"><code>&lt;'+element+'&gt;</code></div><br><br>'+result.description
							break;
							case 'CSS':
							label = 'ui ribbon green label';
							var scheme = '<div class="card"><div class="ui piled segment"><div class="'+label+'">'+lang+'</div><strong>'+result.title+'</strong><div class=" indicator ui small label"><code>'+element+'</code></div><br><br>'+result.description
							break;
							case 'JavaScript':
							label = 'ui ribbon red label';
							var scheme = '<div class="card"><div class="ui piled segment"><div class="'+label+'">'+lang+'</div><strong>'+result.title+'</strong><br><br>'+result.description
							break;
							case 'jQuery':
							label = 'ui ribbon black label';
							var scheme = '<div class="card"><div class="ui piled segment"><div class="'+label+'">'+lang+'</div><strong>'+result.title+'</strong><br><br>'+result.description
							break;
							default:
							label = 'ui ribbon blue label';
							break;
						}
						if (result.code != 'NO_CODE') {
							scheme += '<br><div class="code ui secondary segment"><code>'+result.code+'</code></div>'
						} else {
							scheme += '<br>'
						}
						scheme += '<a href="'+result.url+'" target="_blank" class="more"><div class="tiny fluid ui button">READ MORE</div></a></div></div>';

						$('.results').append(scheme);
					}
				}
			}
			$('.results').gridalicious({
			    width: 325,
			    gutter: 25,
			    selector: '.card',
			    animate: false
			});
		}
	}

	$('#HTML').change(function() {
		if (checked.indexOf('HTML') >= 0) {
			checked.splice(checked.indexOf('HTML'), 1);
		} else {
			checked.push('HTML');
		}
		display($(".search").val());
	});
	$('#CSS').change(function() {
		if (checked.indexOf('CSS') >= 0) {
			checked.splice(checked.indexOf('CSS'), 1);
		} else {
			checked.push('CSS');
		}
		display($(".search").val());
	});
	$('#JavaScript').change(function() {
		if (checked.indexOf('JavaScript') >= 0) {
			checked.splice(checked.indexOf('JavaScript'), 1);
		} else {
			checked.push('JavaScript');
		}
		display($(".search").val());
	});

	$('.search').typing({
		stop: function () {
			display($(".search").val());
		}
	});

	$.getJSON('../data/data.min.js', function(data) {
		base = data;
	});

	$(window).on('resize', function(){
		$('.search').width($(window).width() - 350);
	});
});