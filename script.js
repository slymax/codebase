$(document).ready(function(){
	
	var checked = ['HTML','CSS','JavaScript','jQuery'];
	var counter = 2;
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
		$('#left').empty();
		$('#right').empty();
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
							label = 'label label-info';
							var scheme = '<div class="span5"><div class="well"><span class="'+label+'">'+lang+'</span><strong>&nbsp;&nbsp;'+result.title+'</strong><span class="indicator"><code>&lt;'+element+'&gt;</code></span><br><br>'+result.description
							break;
							case 'CSS':
							label = 'label label-success';
							var scheme = '<div class="span5"><div class="well"><span class="'+label+'">'+lang+'</span><strong>&nbsp;&nbsp;'+result.title+'</strong><span class="indicator"><code>'+element+'</code></span><br><br>'+result.description
							break;
							case 'JavaScript':
							label = 'label label-important';
							var scheme = '<div class="span5"><div class="well"><span class="'+label+'">'+lang+'</span><strong>&nbsp;&nbsp;'+result.title+'</strong><br><br>'+result.description
							break;
							case 'jQuery':
							label = 'label label-warning';
							var scheme = '<div class="span5"><div class="well"><span class="'+label+'">'+lang+'</span><strong>&nbsp;&nbsp;'+result.title+'</strong><br><br>'+result.description
							break;
							default:
							label = 'label label-info';
							break;
						}
						if (result.code != 'NO_CODE') {
							scheme += '<br><br><pre>'+result.code+'</pre>'
						} else {
							scheme += '<br><br>'
						}
						scheme += '<a href="'+result.url+'" target="_blank"><button class="btn btn-small" type="button">READ MORE</button></a></div></div>';
						if (counter % 2 === 0) {
							$('#left').append(scheme);
							counter++;
						} else {
							$('#right').append(scheme);
							counter++;
						}
					}
				}
			}
		}
		counter = 2;
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
	
	$.getJSON('data.js', function(data) {
		base = data;
	});
});