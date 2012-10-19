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
// load css below
function loadStyle (url) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = url;
	// css file must loading before DOM
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}
// Like loadStyle("style.css")
// The same to loadScriptString()
function loadStyleString (css) {
	var style = document.createElement("style");
	style.type = "text/css";
	try{
		style.appendChild(document.createTextNode(css));
	} catch(ex){
		style.stylesheet.cssText = css;
	}
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(style);
}
// Like loadStyleString("body{color:#fff;}");