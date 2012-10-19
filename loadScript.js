function loadScript (url) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = url;
	document.body.appendChild(script);
}
// Use it as loadScript("some.js");
// if want to load code ,look below
function loadScriptString (code) {
	var script = document.createElement("script");
	script.type = "text/javascript";
	try{
		script.appendChild(document.createTextNode(code));
	} catch(ex){
		script.text = code;
	}
	document.body.appendChild(script);
}
// like loadScriptString("(function say(){alert('hello world!');})()")