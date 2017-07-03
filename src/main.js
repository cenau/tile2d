import template from './template.mustache';

document.addEventListener("DOMContentLoaded",function(){
	document.body.innerHTML = template.render({header: 'It Lives!'});

});

