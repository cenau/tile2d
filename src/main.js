import template from './template.mustache';

document.addEventListener("DOMContentLoaded",function(){
	startApp();

});

function startApp(){
	document.body.innerHTML = template.render({header: 'It Lives!'});
}

