/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */
! function (t) {
    var e = {}
        , s = {
            mode: "horizontal"
            , slideSelector: ""
            , infiniteLoop: !0
            , hideControlOnEnd: !1
            , speed: 500
            , easing: null
            , slideMargin: 0
            , startSlide: 0
            , randomStart: !1
            , captions: !1
            , ticker: !1
            , tickerHover: !1
            , adaptiveHeight: !1
            , adaptiveHeightSpeed: 500
            , video: !1
            , useCSS: !0
            , preloadImages: "visible"
            , responsive: !0
            , slideZIndex: 50
            , touchEnabled: !0
            , swipeThreshold: 50
            , oneToOneTouch: !0
            , preventDefaultSwipeX: !0
            , preventDefaultSwipeY: !1
            , pager: !0
            , pagerType: "full"
            , pagerShortSeparator: " / "
            , pagerSelector: null
            , buildPager: null
            , pagerCustom: null
            , controls: !0
            , nextText: "Next"
            , prevText: "Prev"
            , nextSelector: null
            , prevSelector: null
            , autoControls: !1
            , startText: "Start"
            , stopText: "Stop"
            , autoControlsCombine: !1
            , autoControlsSelector: null
            , auto: !1
            , pause: 4e3
            , autoStart: !0
            , autoDirection: "next"
            , autoHover: !1
            , autoDelay: 0
            , minSlides: 1
            , maxSlides: 1
            , moveSlides: 0
            , slideWidth: 0
            , onSliderLoad: function () {}
            , onSlideBefore: function () {}
            , onSlideAfter: function () {}
            , onSlideNext: function () {}
            , onSlidePrev: function () {}
            , onSliderResize: function () {}
        };
    t.fn.bxSlider = function (n) {
        if (0 == this.length) return this;
        if (this.length > 1) return this.each(function () {
            t(this).bxSlider(n)
        }), this;
        var o = {}
            , r = this;
        e.el = this;
        var a = t(window).width()
            , l = t(window).height()
            , d = function () {
                o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {
                    index: o.settings.startSlide
                }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function () {
                    var t = document.createElement("div")
                        , e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in e)
                        if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
                    return !1
                }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function () {
                    t(this).data("origStyle", t(this).attr("style"))
                }), c()
            }
            , c = function () {
                r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
                    width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto"
                    , position: "relative"
                }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
                    width: "100%"
                    , overflow: "hidden"
                    , position: "relative"
                }), o.viewport.parent().css({
                    maxWidth: p()
                }), o.settings.pager || o.viewport.parent().css({
                    margin: "0 auto 0px"
                }), o.children.css({
                    "float": "horizontal" == o.settings.mode ? "left" : "none"
                    , listStyle: "none"
                    , position: "relative"
                }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
                    position: "absolute"
                    , zIndex: 0
                    , display: "none"
                }), o.children.eq(o.settings.startSlide).css({
                    zIndex: o.settings.slideZIndex
                    , display: "block"
                })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
                var e = o.children.eq(o.settings.startSlide);
                "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
            }
            , g = function (e, i) {
                var s = e.find("img, iframe").length;
                if (0 == s) return i(), void 0;
                var n = 0;
                e.find("img, iframe").each(function () {
                    t(this).one("load", function () {
                        ++n == s && i()
                    }).each(function () {
                        this.complete && t(this).load()
                    })
                })
            }
            , h = function () {
                if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
                    var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides
                        , i = o.children.slice(0, e).clone().addClass("bx-clone")
                        , s = o.children.slice(-e).clone().addClass("bx-clone");
                    r.append(i).prepend(s)
                }
                o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
            }
            , v = function () {
                var e = 0
                    , s = t();
                if ("vertical" == o.settings.mode || o.settings.adaptiveHeight)
                    if (o.carousel) {
                        var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
                        for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
                    } else s = o.children.eq(o.active.index);
                else s = o.children;
                return "vertical" == o.settings.mode ? (s.each(function () {
                    e += t(this).outerHeight()
                }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function () {
                    return t(this).outerHeight(!1)
                }).get()), e
            }
            , p = function () {
                var t = "100%";
                return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
            }
            , u = function () {
                var t = o.settings.slideWidth
                    , e = o.viewport.width();
                return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
            }
            , f = function () {
                var t = 1;
                if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0)
                    if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides;
                    else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides;
                else {
                    var e = o.children.first().width();
                    t = Math.floor(o.viewport.width() / e)
                } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
                return t
            }
            , x = function () {
                var t = 0;
                if (o.settings.moveSlides > 0)
                    if (o.settings.infiniteLoop) t = o.children.length / m();
                    else
                        for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
                else t = Math.ceil(o.children.length / f());
                return t
            }
            , m = function () {
                return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
            }
            , S = function () {
                if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
                    if ("horizontal" == o.settings.mode) {
                        var t = o.children.last()
                            , e = t.position();
                        b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
                    } else if ("vertical" == o.settings.mode) {
                        var i = o.children.length - o.settings.minSlides
                            , e = o.children.eq(i).position();
                        b(-e.top, "reset", 0)
                    }
                } else {
                    var e = o.children.eq(o.active.index * m()).position();
                    o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
                }
            }
            , b = function (t, e, i, s) {
                if (o.usingCSS) {
                    var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                    r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
                    })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
                    }))
                } else {
                    var a = {};
                    a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function () {
                        D()
                    }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function () {
                        b(s.resetValue, "reset", 0), N()
                    })
                }
            }
            , w = function () {
                for (var e = "", i = x(), s = 0; i > s; s++) {
                    var n = "";
                    o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
                }
                o.pagerEl.html(e)
            }
            , T = function () {
                o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)
            }
            , C = function () {
                o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
            }
            , E = function () {
                o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
            }
            , P = function () {
                o.children.each(function () {
                    var e = t(this).find("img:first").attr("title");
                    void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
                })
            }
            , y = function (t) {
                o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
            }
            , z = function (t) {
                o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
            }
            , k = function (t) {
                r.startAuto(), t.preventDefault()
            }
            , M = function (t) {
                r.stopAuto(), t.preventDefault()
            }
            , I = function (e) {
                o.settings.auto && r.stopAuto();
                var i = t(e.currentTarget)
                    , s = parseInt(i.attr("data-slide-index"));
                s != o.active.index && r.goToSlide(s), e.preventDefault()
            }
            , q = function (e) {
                var i = o.children.length;
                return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function (i, s) {
                    t(s).find("a").eq(e).addClass("active")
                }), void 0)
            }
            , D = function () {
                if (o.settings.infiniteLoop) {
                    var t = "";
                    0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
                }
                o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
            }
            , A = function (t) {
                o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
            }
            , W = function () {
                1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
            }
            , H = function () {
                o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function () {
                    o.interval && (r.stopAuto(!0), o.autoPaused = !0)
                }, function () {
                    o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
                })
            }
            , L = function () {
                var e = 0;
                if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone"));
                else {
                    r.prepend(o.children.clone().addClass("bx-clone"));
                    var i = o.children.first().position();
                    e = "horizontal" == o.settings.mode ? -i.left : -i.top
                }
                b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function () {
                    r.stop()
                }, function () {
                    var e = 0;
                    o.children.each(function () {
                        e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                    });
                    var i = o.settings.speed / e
                        , s = "horizontal" == o.settings.mode ? "left" : "top"
                        , n = i * (e - Math.abs(parseInt(r.css(s))));
                    N(n)
                }), N()
            }
            , N = function (t) {
                speed = t ? t : o.settings.speed;
                var e = {
                        left: 0
                        , top: 0
                    }
                    , i = {
                        left: 0
                        , top: 0
                    };
                "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
                var s = "horizontal" == o.settings.mode ? -e.left : -e.top
                    , n = "horizontal" == o.settings.mode ? -i.left : -i.top
                    , a = {
                        resetValue: n
                    };
                b(s, "ticker", speed, a)
            }
            , O = function () {
                o.touch = {
                    start: {
                        x: 0
                        , y: 0
                    }
                    , end: {
                        x: 0
                        , y: 0
                    }
                }, o.viewport.bind("touchstart", X)
            }
            , X = function (t) {
                if (o.working) t.preventDefault();
                else {
                    o.touch.originalPos = r.position();
                    var e = t.originalEvent;
                    o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
                }
            }
            , Y = function (t) {
                var e = t.originalEvent
                    , i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x)
                    , s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
                if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
                    var n = 0;
                    if ("horizontal" == o.settings.mode) {
                        var r = e.changedTouches[0].pageX - o.touch.start.x;
                        n = o.touch.originalPos.left + r
                    } else {
                        var r = e.changedTouches[0].pageY - o.touch.start.y;
                        n = o.touch.originalPos.top + r
                    }
                    b(n, "reset", 0)
                }
            }
            , V = function (t) {
                o.viewport.unbind("touchmove", Y);
                var e = t.originalEvent
                    , i = 0;
                if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
                    var s = Math.abs(o.touch.start.x - o.touch.end.x);
                    s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
                } else {
                    var s = 0;
                    "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
                }
                o.viewport.unbind("touchend", V)
            }
            , Z = function () {
                var e = t(window).width()
                    , i = t(window).height();
                (a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
            };
        return r.goToSlide = function (e, i) {
            if (!o.working && o.active.index != e)
                if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                    height: v()
                }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({
                    zIndex: 0
                }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function () {
                    t(this).css("zIndex", o.settings.slideZIndex), D()
                });
                else {
                    o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({
                        height: v()
                    }, o.settings.adaptiveHeightSpeed);
                    var s = 0
                        , n = {
                            left: 0
                            , top: 0
                        };
                    if (!o.settings.infiniteLoop && o.carousel && o.active.last)
                        if ("horizontal" == o.settings.mode) {
                            var a = o.children.eq(o.children.length - 1);
                            n = a.position(), s = o.viewport.width() - a.outerWidth()
                        } else {
                            var l = o.children.length - o.settings.minSlides;
                            n = o.children.eq(l).position()
                        } else if (o.carousel && o.active.last && "prev" == i) {
                        var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides)
                            , a = r.children(".bx-clone").eq(d);
                        n = a.position()
                    } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1;
                    else if (e >= 0) {
                        var c = e * m();
                        n = o.children.eq(c).position()
                    }
                    if ("undefined" != typeof n) {
                        var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
                        b(g, "slide", o.settings.speed)
                    }
                }
        }, r.goToNextSlide = function () {
            if (o.settings.infiniteLoop || !o.active.last) {
                var t = parseInt(o.active.index) + 1;
                r.goToSlide(t, "next")
            }
        }, r.goToPrevSlide = function () {
            if (o.settings.infiniteLoop || 0 != o.active.index) {
                var t = parseInt(o.active.index) - 1;
                r.goToSlide(t, "prev")
            }
        }, r.startAuto = function (t) {
            o.interval || (o.interval = setInterval(function () {
                "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
            }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
        }, r.stopAuto = function (t) {
            o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
        }, r.getCurrentSlide = function () {
            return o.active.index
        }, r.getCurrentSlideElement = function () {
            return o.children.eq(o.active.index)
        }, r.getSlideCount = function () {
            return o.children.length
        }, r.redrawSlider = function () {
            o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
        }, r.destroySlider = function () {
            o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function () {
                void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
            }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Z))
        }, r.reloadSlider = function (t) {
            void 0 != t && (n = t), r.destroySlider(), d()
        }, d(), this
    }
}(jQuery);
//включить/выключить функцию
var mouse = false; //выход мышки

var popUpBy = false; //попап с заказами

var checkCode = false; //проверка кода продукта

var todayBayVal = false; //количество купленых сегодня товаров

var bPhone = false; //синяя трука для попапа

var mBrowser = true; //подключить стили для браузеров

var operaMini = true; //опера мини

var internetEx = true; //ИЕ

var safariWin = true; //Сафари виндовс

var safariMac = true; //Сафари МасОС

var fireFox = true; //Мозила








//PopUp на заказы
function popUp() {
    //$(".show-message").html('<div style="display: none;"><span id="price-current" class="x_price_current x_price">990</span></div><div class="show-message__item show-message_call "><img class="show-message__icon" src="img/bucket.png" alt=""> <p class="show-message__info"><span class="js-show-name"><span class="js-name">block</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><img class="show-message__icon" src="img/online_user.png" alt=""><p class="show-message__info">Количество посетителей на сайте:  <span id="js-user-id2">462</span> </p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><img class="show-message__icon" src="img/online_user.png" alt=""><p class="show-message__info">Количество посетителей на сайте:  <span id="js-user-id3">387</span> </p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><img src="img/callback.png" alt="" class="show-message__icon"><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заявку на обратный звонок</p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><img src="img/callback.png" alt="" class="show-message__icon"><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заявку на обратный звонок</p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><img class="show-message__icon" src="img/online_user.png" alt=""><p class="show-message__info">Количество посетителей на сайте: <span id="js-user-id4">308</span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><img class="show-message__icon" src="img/online_user.png" alt=""><p class="show-message__info">Количество посетителей на сайте:  <span id="js-user-id5">427</span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><img class="show-message__icon" src="img/online_user.png" alt=""><p class="show-message__info">Количество посетителей на сайте:  <span id="js-user-id6">415</span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><img src="img/callback.png" alt="" class="show-message__icon"><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span> сделал(а) заявку на обратный звонок</p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br> <span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced">фл.</span> <br><span class="package_left">Осталось <span class="pacedNamed">флаконов</span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call last-message"><img class="show-message__icon" src="img/bucket.png" alt=""><p class="show-message__info"><span style="font-size: 16px;">Осталось <span class="pacedNamed">флаконов</span> по акции<br><span style="color: red;font-size: 20px;font-weight: bold;"> <span style="color: red;">5</span></span></span></p></div><div class="show-message__item-first show-message_online first-message"><img class="show-message__icon" src="img/online_user.png" alt=""><p class="show-message__info">Количество посетителей на сайте: <span id="js-user-id">421</span> </p></div>');






    window.onload = function () {
        var timeOut = 12000;
        var x_price = Number($('.x_price_current').html()); //цена
        var last = 60; //количество упаковок
        var i = 0;
        var bay = 0;
        var total_price;
        var count = 0;
        var OneTimeOut = 48000;
        var fistShow = 0;
        var TwoTimeOut = 24000;
        //-----записываем в ленд количество упаковок
        function firstNumberPack() {
            $('.lastpack').html(last); // количество оставшихся упаковок  (этот класс подставляем в span)
            $('.paced').html('шт.'); // Записываем - шт., флаконы, и тд.
            $('.pacedNamed').html('упаковок'); // Записываем - упаковок., флаконов, и тд.
        }
        function numberCase() {
            a = Math.floor(Math.random() * (400 - 100 + 1) + 300)
        }
        function ShowMessage() {
            i = 1;
            $('.show-message__item:nth-child(' + i + ')').fadeIn(0).delay(6000).fadeOut(0);
            numberCase();
            document.getElementById('js-user-id').innerHTML = a;
            numberCase();
            document.getElementById('js-user-id2').innerHTML = a;
            numberCase();
            document.getElementById('js-user-id3').innerHTML = a;
            numberCase();
            document.getElementById('js-user-id4').innerHTML = a;
            numberCase();
            document.getElementById('js-user-id5').innerHTML = a;
            numberCase();
            document.getElementById('js-user-id6').innerHTML = a;
        }
        setTimeout(function () {
            setInterval(
                function () {
                    i++;
                    if (i > 38) i = 1;
                    $('.show-message__item:nth-child(' + i + ')').fadeIn(500).delay(6000).fadeOut(500);
                }, 24000);
            ShowMessage();
        }, 0);
        function lastpack() {
            if (last > 5) {
                bay = (count == 0) ? 3 : (count == 1) ? 4 : (count == 2) ? 6 : (count == 3) ? 8 : (count == 4) ? 10 : (count == 5 || count == 9) ? 3 : (count == 6 || count == 10) ? 5 : (count == 7 || count == 8) ? 4 : 4;
                $('.blink').html(last);
                last = last - bay;
                count++;
                total_price = x_price * bay;
                $('.lastpack').html(last);
                $('.bay').html(bay);
                $('.blink_me').html(last);
                $('.x_price').html(total_price);
                $('.count').html(count);
                timeOut = (count == 3 || count == 5 || count == 8 || count == 10 || count == 12 || count == 15 || count == 17 || count == 20) ? OneTimeOut : TwoTimeOut;

                setTimeout(lastpack, timeOut, last);
            }
            if (last <= 5) {
                setTimeout(function () {
                    $('.show-message__item').addClass('lost_position');
                }, timeOut);

                // выводим последнее сообщение
                setTimeout(function () {
                    $('.last-message').addClass('block_position');
                }, timeOut);
            }
        }
        firstNumberPack();
        setTimeout(lastpack, 23000);
        setTimeout(function () {
            $('.first-message').show();
        }, 2000);
        setTimeout(function () {
            $('.first-message').hide();
        }, 8000);
        var nameList = [
                //girl
                'Анна Па*****'
                , 'Алина Ер*****'
                , 'Александра Ло****'
                , 'Елена Бы****'
                , 'Марина Ел****'
                , 'Анна Мо****'
                , 'Ксения Кр*****'
                , 'Алена Бо****'
                , 'Виктория Ка****'
                , 'Маргарита Бе****'
                , 'Анна Ры*****'
                , 'Дарья Са*****'
                , 'Алла Кр*****'
                , 'Евгения Ко****'
                , 'Антонина Пе****'
                , 'Ирина Со****'
                , 'Алена Во****'
                , 'Валентина Бу****'
                , 'Вика Др****'
                , 'Валерия Ло****'
                , 'Кристина Со****'
                , 'Наталья Го*****'
                , 'Марина Ма*****'
                , 'Катерина Ля****'
                , 'Анастасия Ле*****'
                , 'Екатерина Во*****'
                , 'Наталья Ло****'
                , 'Валентина Ля****'
                , 'Вероника Ан****'
                , 'Викуся Пр*****'
                , 'Мария Ша****'
                , 'Василиса Ма****'
                , 'Ольга Дм****'
                , 'Виктория Ни****'
                , 'Дарья Пе****'
                , 'Татьяна Ко****'
                , 'Валентина Ко****'
                , 'Оля Са******'
                , 'Лилия Ма*****'
                , 'Ирина Пе*****'
                , 'Анна Да*******'
                , 'Анастасия Во****'
                , 'Полина Гр****'
                , 'Мария Ко****'
                , 'Кристина До****'
                , 'Юлия Пу****'
                , 'Татьяна Ла****'
                , 'Валерия Лу****'
                , 'Анастасия Шп****'
                , 'Алёна Ши****'
                , //man
                'Валерий Фе****'
                , 'Владислав Ко****'
                , 'Владимир Ма****'
                , 'Валентин Ди****'
                , 'Валерий Ще******'
                , 'Иван Ба*****'
                , 'Вячеслав Ку****'
                , 'Михаил Ро*****'
                , 'Сергей Во*****'
                , 'Дмитрий Де*****'
                , 'Вячеслав Шу****'
                , 'Дима Ав*****'
                , 'Денис Ми***'
                , 'Евгений Ма*****'
                , 'Виталий Ми****'
                , 'Даниил Те*****'
                , 'Влад Бу*****'
                , 'Иван Гр*****'
                , 'Алексей Ре*****'
                , 'Владимир Су****'
                , 'Вадим Тр*****'
                , 'Вадим Га*****'
                , 'Евгений Го****'
                , 'Евгений Ба****'
                , 'Сергей Жу***'
                , 'Влад Че*****'
                , 'Владислав Ни****'
                , 'Виктор Че*****'
                , 'Олег Як*****'
                , 'Дмитрий Гл*****'
                , 'Василий Кр****'
                , 'Антон За****'
                , 'Антон Бе****'
                , 'Илья Со****'
                , 'Сергей Ми****'
                , 'Дмитрий Да****'
                , 'Владислав Ра****'
                , 'Дмитрий Вл*****'
                , 'Иван Ма*****'
                , 'Павел Пр*****'
                , 'Никита Ки****'
                , 'Максим Ша*****'
                , 'Ярослав Ко****'
                , 'Илья См*****'
                , 'Андрей Ле****'
                , 'Андрей Ни*****'
                , 'Артём Ре****'
                , 'Анатолий Ти*****'
                , 'Ярослав За*****'
                , 'Василий Гу****'
            ]
            , NameCount = nameList.length - 1
            , $nameWrap = $('.js-show-name')
            , $name = $('.js-name');
        function nameValue() {
            var randomNameIndex = 0;
            var indexName = 0;
            var k = 0;
            var secondNameList = [];
            for (k = 0; k < 36; k++) {

                randomNameIndex = (Math.random() * NameCount).toFixed(0);
                if (nameList[randomNameIndex] == secondNameList) {
                    randomNameIndex = (Math.random() * NameCount).toFixed(0);
                } else {
                    $('.js-name').eq(k).html(nameList[randomNameIndex]);
                    secondNameList = nameList[randomNameIndex];
                    console.log(secondNameList);
                }
                indexName = indexName + 1;
            }
            console.log(indexName);
        }
        nameValue();
    };
}
//Функция проверки ввода кода функцый
function codeCheck(){
    var $code = $(".check_popup_code_input"),
        $message = $(".js-message"),
        $button = $(".button-popup-first");


    var codeValues = /^\d+$/;

    $button.on("click", function (ev) {
        ev.preventDefault();
        var $codeLenght = $(".check_popup_code_input").val().length;
        var codeValue = $code.val();

        if (codeValues.test(codeValue) && $codeLenght==15){
            return $message.text("Данный код верен. Cпасибо, что выбрали нашу продукцию!");
        } else if ($code.val() !== '' && $code.val() !== ' ' && $code.val() !== '  '){
            return $message.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.");
        }else{
            return $message.text("Введите, пожалуйста, код.");
        }

    });}


//Количество купленых товаров на данный момент

function NowTime(){
    var d = new Date();
    var result = (d.getHours()*60 + d.getMinutes())*2+2000;
    $('#todayBay').html(result);
};


//Добавить синюю трубку телефона
function bluePhone(){
    $('.bluePhone').html('<div class="phone-call cbh-phone cbh-green cbh-show  cbh-static" id="clbh_phone_div"><a href="#" class="phoneJs"><div class="cbh-ph-circle"></div><div class="cbh-ph-circle-fill"></div><div class="cbh-ph-img-circle1"></div></a></div>');
    $('.phoneJs').click(function(event){
        event.preventDefault();
        $('.popup-second').fadeIn(300);
    });
}

//Спрятать попапы


$('.modal_mouse_out .modal ').click(function(){
    $('.modal_mouse_out').addClass('hide');
});
$('.close-modal-mouse').click(function(){
    $('.modal_mouse_out').addClass('hide');
});

//спрятать попапы конек


//Стили для браузеров

function mobileBrowser(){
    function safari_windows() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') != -1) {
            if (ua.indexOf('chrome') > -1) {
                var a = 1;
            } else {
                var tag_css = document.createElement('link');
                var basePath = window.cdn_path || '';
                tag_css.type = 'text/css';
                tag_css.rel = 'stylesheet';
                tag_css.href = basePath + "css/safari.css";
                var tag_head = document.getElementsByTagName('head');
                tag_head[0].appendChild(tag_css);
            }
        }
        ;
    };
    function firefox() {
        var browser = navigator.userAgent.toLowerCase();
        if (browser.indexOf('firefox') > -1) {
            var basePath = window.cdn_path || '';
            var tag_css = document.createElement('link');
            tag_css.type = 'text/css';
            tag_css.rel = 'stylesheet';
            tag_css.href = basePath + "css/firefox.css";
            var tag_head = document.getElementsByTagName('head');
            tag_head[0].appendChild(tag_css);
        }
        else {               // If another browser, return 0
            var b = 1;
        }
        return false;
    };
    function internet_explorer() {
        var basePath = window.cdn_path || '';
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {     // If Internet Explorer, return version number
            var tag_css = document.createElement('link');
            tag_css.type = 'text/css';
            tag_css.rel = 'stylesheet';
            tag_css.href = basePath + "css/ie.css";
            var tag_head = document.getElementsByTagName('head');
            tag_head[0].appendChild(tag_css);
        }
        else {               // If another browser, return 0
            var b = 1;
        }
        return false;
    };


    function getMobileOperatingSystem() {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
            var basePath = window.cdn_path || '';
            var tag_css = document.createElement('link');
            tag_css.type = 'text/css';
            tag_css.rel = 'stylesheet';
            tag_css.href = basePath + "css/ios.css";
            var tag_head = document.getElementsByTagName('head');
            tag_head[0].appendChild(tag_css);
        }

    };

    function opera_mini() {
        var isMobile = {
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            }
        };
        if (isMobile.Opera()) {
            var basePath = window.cdn_path || '';
            var tag_css = document.createElement('link');
            tag_css.type = 'text/css';
            tag_css.rel = 'stylesheet';
            tag_css.href = basePath + "css/operamini.css";
            var tag_head = document.getElementsByTagName('head');
            tag_head[0].appendChild(tag_css);

        }
    }

    function checkBrowser() {

        if (safariMac == true) {
            getMobileOperatingSystem();
        }
        if (internetEx == true) {
            internet_explorer();
        }
        if (safariWin == true) {
            safari_windows();
        }
        if (fireFox == true) {
            firefox();
        }
        if (operaMini == true) {
            opera_mini();
        }

    }
    checkBrowser();
};

//Стили для браузеров конец


//Функция проверки и включения/выключения функцый
function check() {

    if (mouse == true) {
        mouseMoved();
    }
    if (popUpBy == true) {
        popUp();
    }
    if (checkCode == true) {
        codeCheck();
    }
    if (todayBayVal == true) {
        NowTime();
    }
    if (bPhone == true) {
        bluePhone();
    }
    if (mBrowser == true) {
        mobileBrowser();
    }

}
check();
function randomCity() {
    var arr = [
        "Москва", "Санкт-Петербург", "Краснодар", "Свердловск", "Ростов", "Тюмень", "Челябинск", "Нижний Новгород", "Самара", "Красноярск", "Ставрополь", "Новосибирск", "Кемерово", "Пермь", "Волгоград",
        "Саратов", "Иркутск", "Барнаул", "Воронеж", "Оренбург", "Омск", "Владивосток", "Ханты-Мансийск", "Белгород", "Ижевск", "Тула", "Владимир", "Пенза", "Хабаровск", "Тверь", "Киров", "Ярославль",
        "Ульяновск", "Брянск", "Вологда", "Архангельск", "Липецк", "Рязань", "Курск", "Томск", "Тамбов", "Иваново", "Астрахань", "Калуга", "Калининград", "Смоленск", "Курган", "Благовещенск", "Мурманск",
        "Орел", "Кострома", "Псков", "Новгород", "Южно-Сахалинск", "Магадан", "Казань", "Ростов-на-Дону", "Уфа"
    ];
    var arrUkr = [
        "Винница", "Днепр", "Житомир", "Запорожье", "Ивано-Франковск", "Кропивницкий", "Луцк", "Львов", "Николаев", "Одесса", "Полтава", "Ровно", "Сумы", "Тернополь",
        "Ужгород", "Харьков", "Херсон", "Хмельницкий", "Черкассы", "Чернигов", "Черновцы"
    ];
    rand = Math.floor(Math.random() * arr.length);
    randUkr = Math.floor(Math.random() * arrUkr.length);

    countryCode = $("input[name='country_code']").val();

    if (countryCode == 'RU') {
        return arr[rand]
    }
    else return arrUkr[randUkr]
}

for (var i = 0; i < $('.random-city').length; i++) {
    var cityKey = 'city' + i;
    if (!localStorage.getItem(cityKey)) {
        localStorage.setItem(cityKey, randomCity());
    }
}
$('.random-city').each(function (i) {
    var cityKey = localStorage.getItem('city' + i);
    $(this).text(cityKey);
});


$(document).ready(function () {
    $(".scroll-to-audio").on("click", function (event) {
        event.preventDefault();
        var id = this.getAttribute('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2000);
    });


    $('.main-slider').bxSlider({
        controls: false,
        auto: true,
        pause: 12000,
        autoHover: true
    });


    /* modal */
    $('.header-call').on('click', function (event) {
        event.preventDefault();
        $(".popup-callback").fadeIn(300);
    });
    $('.phone-call').on('click', function (event) {
        event.preventDefault();
        $(".popup-phone").fadeIn(300);
    });

    $('.close-modal,.popup-close').on('click', function (event) {
        event.preventDefault();
        $(".popup-callback").fadeOut(300);
        $(".popup-phone").fadeOut(300);
    });

    $('.popup-mouseleave .close-modal,.popup-mouseleave .popup-close').on('click', function (event) {
        event.preventDefault();
        $('.popup-mouseleave').addClass('hide');
    });


    var $code = $(".check_popup_code_input"),
        $message = $(".js-message"),
        $button = $(".button-popup-first");


    var codeValues = /^\d+$/;

    $button.on("click", function (ev) {
        ev.preventDefault();
        var $codeLenght = $(".check_popup_code_input").val().length;
        var codeValue = $code.val();

        if (codeValues.test(codeValue) && $codeLenght == 15) {
            return $message.text("Данный код верен. Cпасибо, что выбрали нашу продукцию!");
        } else if ($code.val() !== '' && $code.val() !== ' ' && $code.val() !== '  ') {
            return $message.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.");
        } else {
            return $message.text("Введите, пожалуйста, код.");
        }

    });
});
//включить/выключить функцию
var mouse = true; //выход мышки

var popUpBy = false; //попап с заказами

var checkCode = false; //проверка кода продукта

var todayBayVal = false; //количество купленых сегодня товаров

var bPhone = false; //синяя трука для попапа

var mBrowser = false; //подключить стили для браузеров

var operaMini = false; //опера мини

var internetEx = false; //ИЕ

var safariWin = false; //Сафари виндовс

var safariMac = false; //Сафари МасОС

var fireFox = false; //Мозила







//Выход мышки
function mouseMoved() {
	$(".mouse").html('<div class="line_top mouse_moved"></div><div class="line_bottom mouse_moved"></div>');
	$('.mouse_moved').mouseover(function () {
		var displayPop = $(".popup-callback").css('display');
		var displayP = $(".popup-phone").css('display');
		if (displayPop == 'none' && displayP == 'none') {
			$('.popup-mouseleave').show();
		}
	});

}



//var countryCodeLocation = 'az';
//console.log(countryCodeLocation);
var countryCodeLocation = $("input[name='country_code']").val();


//PopUp на заказы
function popUp() {

	var linkToImg = $('.take').attr('src');
	$("body").append('<div class="show-message"><div style="display: none;"><span id="price-current" class="x_price_current x_price">990</span></div><div class="show-message__item show-message_call "><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">block</span></span>, сделал(а) заказ на <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Уже <span id="js-user-id2">462</span> человек получили упаковку за 1* рубль</p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Уже <span id="js-user-id3">387</span>  человек получили упаковку за 1* рубль</p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-callback"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заявку на обратный звонок</p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-callback"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заявку на обратный звонок</p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Уже <span id="js-user-id4">308</span>  человек получили упаковку за 1* рубль</p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Уже <span id="js-user-id5">427</span> человек получили упаковку за 1* рубль</p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Уже <span id="js-user-id6">415</span> человек получили упаковку за 1* рубль</p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-callback"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span> сделал(а) заявку на обратный звонок</p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br> <span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на  <span class="bay">10</span> акционных упаковок<br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span style="font-size: 16px;">Осталось <span class="pacedNamed"></span> по акции "Цена со скидкой 1* рубль"<br><span style="color: red;font-size: 20px;font-weight: bold;"> <span style="color: red;">5</span></span></span></p></div><div class="show-message__item-first show-message_online first-message"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Уже <span id="js-user-id">421</span> человек получили упаковку за 1* рубль</p></div></div>');

	window.onload = function () {
		var timeOut = 12000;
		var x_price = Number($('.x_price_current').html()); //цена
		var last = 60; //количество упаковок
		var i = 0;
		var bay = 0;
		var total_price;
		var count = 0;
		var OneTimeOut = 48000;
		var fistShow = 0;
		var TwoTimeOut = 24000;

		//-----записываем в ленд количество упаковок
		function firstNumberPack() {
			$('.lastpack').html(last); // количество оставшихся упаковок  (этот класс подставляем в span)
			$('.paced').html('шт.'); // Записываем - шт., флаконы, и тд.
			$('.pacedNamed').html('упаковок'); // Записываем - упаковок., , и тд.
		};

		function numberCase() {
			a = Math.floor(Math.random() * (400 - 100 + 1) + 300)
		};

		function ShowMessage() {
			i = 1;
			$('.show-message__item:nth-child(' + i + ')').fadeIn(0).delay(6000).fadeOut(0);
			numberCase();
			document.getElementById('js-user-id').innerHTML = a;
			numberCase();
			document.getElementById('js-user-id2').innerHTML = a;
			numberCase();
			document.getElementById('js-user-id3').innerHTML = a;
			numberCase();
			document.getElementById('js-user-id4').innerHTML = a;
			numberCase();
			document.getElementById('js-user-id5').innerHTML = a;
			numberCase();
			document.getElementById('js-user-id6').innerHTML = a;
		};

		setTimeout(function () {
			setInterval(
				function () {
					i++;
					if (i > 38) i = 1;
					$('.show-message__item:nth-child(' + i + ')').fadeIn(500).delay(6000).fadeOut(500);
				}, 24000);
			ShowMessage();
		}, 0);

		function lastpack() {
			if (last > 5) {
				bay = (count == 0) ? 3 : (count == 1) ? 4 : (count == 2) ? 6 : (count == 3) ? 8 : (count == 4) ? 10 : (count == 5 || count == 9) ? 3 : (count == 6 || count == 10) ? 5 : (count == 7 || count == 8) ? 4 : 4;
				$('.blink').html(last);
				last = last - bay;
				count++;
				total_price = x_price * bay;
				$('.lastpack').html(last);
				$('.bay').html(bay);
				$('.blink_me').html(last);
				$('.x_price').html(total_price);
				$('.count').html(count);
				timeOut = (count == 3 || count == 5 || count == 8 || count == 10 || count == 12 || count == 15 || count == 17 || count == 20) ? OneTimeOut : TwoTimeOut;

				setTimeout(lastpack, timeOut, last);
			};
			if (last <= 5) {
				setTimeout(function () {
					$('.show-message__item').addClass('lost_position');
				}, timeOut);

				// выводим последнее сообщение
				setTimeout(function () {
					$('.last-message').addClass('block_position');
				}, timeOut);
			};
		};

		firstNumberPack();
		setTimeout(lastpack, 23000);
		setTimeout(function () {
			$('.first-message').show();
		}, 2000);
		setTimeout(function () {
			$('.first-message').hide();
		}, 8000);
		var nameList = [
			//girl
			'Анна Па*****'
			, 'Алина Ер*****'
			, 'Александра Ло****'
			, 'Елена Бы****'
			, 'Марина Ел****'
			, 'Анна Мо****'
			, 'Ксения Кр*****'
			, 'Алена Бо****'
			, 'Виктория Ка****'
			, 'Маргарита Бе****'
			, 'Анна Ры*****'
			, 'Дарья Са*****'
			, 'Алла Кр*****'
			, 'Евгения Ко****'
			, 'Антонина Пе****'
			, 'Ирина Со****'
			, 'Алена Во****'
			, 'Валентина Бу****'
			, 'Вика Др****'
			, 'Валерия Ло****'
			, 'Кристина Со****'
			, 'Наталья Го*****'
			, 'Марина Ма*****'
			, 'Катерина Ля****'
			, 'Анастасия Ле*****'
			, 'Екатерина Во*****'
			, 'Наталья Ло****'
			, 'Валентина Ля****'
			, 'Вероника Ан****'
			, 'Викуся Пр*****'
			, 'Мария Ша****'
			, 'Василиса Ма****'
			, 'Ольга Дм****'
			, 'Виктория Ни****'
			, 'Дарья Пе****'
			, 'Татьяна Ко****'
			, 'Валентина Ко****'
			, 'Оля Са******'
			, 'Лилия Ма*****'
			, 'Ирина Пе*****'
			, 'Анна Да*******'
			, 'Анастасия Во****'
			, 'Полина Гр****'
			, 'Мария Ко****'
			, 'Кристина До****'
			, 'Юлия Пу****'
			, 'Татьяна Ла****'
			, 'Валерия Лу****'
			, 'Анастасия Шп****'
			, 'Алёна Ши****'
			, //man
			'Валерий Фе****'
			, 'Владислав Ко****'
			, 'Владимир Ма****'
			, 'Валентин Ди****'
			, 'Валерий Ще******'
			, 'Иван Ба*****'
			, 'Вячеслав Ку****'
			, 'Михаил Ро*****'
			, 'Сергей Во*****'
			, 'Дмитрий Де*****'
			, 'Вячеслав Шу****'
			, 'Дима Ав*****'
			, 'Денис Ми***'
			, 'Евгений Ма*****'
			, 'Виталий Ми****'
			, 'Даниил Те*****'
			, 'Влад Бу*****'
			, 'Иван Гр*****'
			, 'Алексей Ре*****'
			, 'Владимир Су****'
			, 'Вадим Тр*****'
			, 'Вадим Га*****'
			, 'Евгений Го****'
			, 'Евгений Ба****'
			, 'Сергей Жу***'
			, 'Влад Че*****'
			, 'Владислав Ни****'
			, 'Виктор Че*****'
			, 'Олег Як*****'
			, 'Дмитрий Гл*****'
			, 'Василий Кр****'
			, 'Антон За****'
			, 'Антон Бе****'
			, 'Илья Со****'
			, 'Сергей Ми****'
			, 'Дмитрий Да****'
			, 'Владислав Ра****'
			, 'Дмитрий Вл*****'
			, 'Иван Ма*****'
			, 'Павел Пр*****'
			, 'Никита Ки****'
			, 'Максим Ша*****'
			, 'Ярослав Ко****'
			, 'Илья См*****'
			, 'Андрей Ле****'
			, 'Андрей Ни*****'
			, 'Артём Ре****'
			, 'Анатолий Ти*****'
			, 'Ярослав За*****'
			, 'Василий Гу****'
		]
			, NameCount = nameList.length - 1
			, $nameWrap = $('.js-show-name')
			, $name = $('.js-name');

		function nameValue() {
			var randomNameIndex = 0;
			var indexName = 0;
			var k = 0;
			var secondNameList = [];
			for (k = 0; k < 36; k++) {

				randomNameIndex = (Math.random() * NameCount).toFixed(0);
				if (nameList[randomNameIndex] == secondNameList) {
					randomNameIndex = (Math.random() * NameCount).toFixed(0);
				} else {
					$('.js-name').eq(k).html(nameList[randomNameIndex]);
					secondNameList = nameList[randomNameIndex];
					console.log(secondNameList);
				}
				indexName = indexName + 1;
			}
			console.log(indexName);
		}
		nameValue();
	};
};
//попапы для AZ




function popUpAZ() {

	var linkToImg = $('.take').attr('src');
	$("body").append('<div class="show-message"><div style="display: none;"><span id="price-current" class="x_price_current x_price">990</span></div><div class="show-message__item show-message_call "><i class="everad-sprite everad-sprite-bucket"></i> <p class="show-message__info"><span class="js-show-name"><span class="js-name">block</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i> <p class="show-message__info">Количество посетителей на сайте:  <span id="js-user-id2">462</span> </p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Количество посетителей на сайте:  <span id="js-user-id3">387</span> </p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-callback"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заявку на обратный звонок</p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name"></span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-callback"></i> <p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заявку на обратный звонок</p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Количество посетителей на сайте: <span id="js-user-id4">308</span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Количество посетителей на сайте:  <span id="js-user-id5">427</span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Количество посетителей на сайте:  <span id="js-user-id6">415</span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_online"><i class="everad-sprite everad-sprite-callback"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span> сделал(а) заявку на обратный звонок</p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br> <span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span class="js-show-name"><span class="js-name">Вика Др****</span></span>, сделал(а) заказ на сумму <span class="x_price_current x_price">9900</span> <span class="x_currency">руб.</span>, заказано <span class="bay">10</span> <span class="paced"></span> <br><span class="package_left">Осталось <span class="pacedNamed"></span> по акции <br><span class="blink">30</span> <span class="blink_me">30</span></span></p></div><div class="show-message__item show-message_call last-message"><i class="everad-sprite everad-sprite-bucket"></i><p class="show-message__info"><span style="font-size: 16px;">Осталось <span class="pacedNamed"></span> по акции<br><span style="color: red;font-size: 20px;font-weight: bold;"> <span style="color: red;">5</span></span></span></p></div><div class="show-message__item-first show-message_online first-message"><i class="everad-sprite everad-sprite-online_user"></i><p class="show-message__info">Количество посетителей на сайте: <span id="js-user-id">421</span> </p></div></div>');

	window.onload = function () {
		var timeOut = 12000;
		var x_price = Number($('.x_price_current').html()); //цена
		var last = 60; //количество упаковок
		var i = 0;
		var bay = 0;
		var total_price;
		var count = 0;
		var OneTimeOut = 48000;
		var fistShow = 0;
		var TwoTimeOut = 24000;

		//-----записываем в ленд количество упаковок
		function firstNumberPack() {
			$('.lastpack').html(last); // количество оставшихся упаковок  (этот класс подставляем в span)
			$('.paced').html('шт.'); // Записываем - шт., флаконы, и тд.
			$('.pacedNamed').html('упаковок'); // Записываем - упаковок., , и тд.
		};

		function numberCase() {
			a = Math.floor(Math.random() * (400 - 100 + 1) + 300)
		};

		function ShowMessage() {
			i = 1;
			$('.show-message__item:nth-child(' + i + ')').fadeIn(0).delay(6000).fadeOut(0);
			numberCase();
			document.getElementById('js-user-id').innerHTML = a;
			numberCase();
			document.getElementById('js-user-id2').innerHTML = a;
			numberCase();
			document.getElementById('js-user-id3').innerHTML = a;
			numberCase();
			document.getElementById('js-user-id4').innerHTML = a;
			numberCase();
			document.getElementById('js-user-id5').innerHTML = a;
			numberCase();
			document.getElementById('js-user-id6').innerHTML = a;
		};

		setTimeout(function () {
			setInterval(
				function () {
					i++;
					if (i > 38) i = 1;
					$('.show-message__item:nth-child(' + i + ')').fadeIn(500).delay(6000).fadeOut(500);
				}, 24000);
			ShowMessage();
		}, 0);

		function lastpack() {
			if (last > 5) {
				bay = (count == 0) ? 3 : (count == 1) ? 4 : (count == 2) ? 6 : (count == 3) ? 8 : (count == 4) ? 10 : (count == 5 || count == 9) ? 3 : (count == 6 || count == 10) ? 5 : (count == 7 || count == 8) ? 4 : 4;
				$('.blink').html(last);
				last = last - bay;
				count++;
				total_price = x_price * bay;
				$('.lastpack').html(last);
				$('.bay').html(bay);
				$('.blink_me').html(last);
				$('.x_price').html(total_price);
				$('.count').html(count);
				timeOut = (count == 3 || count == 5 || count == 8 || count == 10 || count == 12 || count == 15 || count == 17 || count == 20) ? OneTimeOut : TwoTimeOut;

				setTimeout(lastpack, timeOut, last);
			};
			if (last <= 5) {
				setTimeout(function () {
					$('.show-message__item').addClass('lost_position');
				}, timeOut);

				// выводим последнее сообщение
				setTimeout(function () {
					$('.last-message').addClass('block_position');
				}, timeOut);
			};
		};

		firstNumberPack();
		setTimeout(lastpack, 23000);
		setTimeout(function () {
			$('.first-message').show();
		}, 2000);
		setTimeout(function () {
			$('.first-message').hide();
		}, 8000);
		var nameList = [
			//girl
			'Vera Na****',
			'Samirə Sə****',
			'Cəmilə İs****',
			'İradə Hə****',
			'Rəşidə Xə****',
			'Elmira Mu****',
			'Səbinə Mə****',
			'Aynur Zə****',
			'Leyla He****',
			'Nigar Sa****',
			'Xalida Al****',
			'Farida Rz****',
			'Gulnara Al****',
			'Tamara Di****',
			'Zarifa Ah****',
			'Təranə Şa****',
			'Kəmalə Əl****',
			'Nəzrin Ka****',
			'Sevil Qu****',
			'Liana Xu****',
			'Yaqut Ağ****',
			'Naziyə Qa****',
			'Ülkər Ma****',
			'Sevil Mu****',
			'Sədaqət Cə****',
			'Gülnaz Ab****',
			'Elmira Nu****',
			'Nigar Ba****',
			'Aliyə İm****',
			'Mehparə Ab****',
			'Aydan Əl****',
			'Gülnar Mi****',
			'İrina Bo****',
			'Sevinc Rə****',
			'Sevda Qu****',
			'Konul Al****',
			'Xalidə İs****',
			'İrina Hə****',
			'Sabina Xa****',
			'Sevil Or****',
			'Almara Me****',
			'Həqiqət Ca****',
			'Firangiz Qu****',
			'Lala Sə****',
			'Lyudmila Rz****',
			'Leyla Gü****',
			'Ruqiya İs****',
			'Könül Sə****',
			'Təranə At****',
			'Günel Na****',
			'Lyudmila Əh****',
			'Mexriban Me****',
			'Ramilə Mə****',
			'Tamila Rə****',
			'Nailə Za****',
			'Sabina Хa****',
			'Valentina Ku****',
			'Nina Mu****',
			'Zeynəb Ma****',
			'Kəmalə Oc****',
			'İradə Əl****',
			'Meryem Əl****',
			'Elina Əh****',
			'Könül Pi****',
			'Zema Nə****',
			'Leyla Sü****',
			'Nərgiz Əl****',
			'Safiya Qa****',
			'Elmira Ta****',
			'Nigar Əl****',
			'Jalə Ağ****',
			'Flora Na****',
			'Səbinə İb****',
			'Aida İs****',
			'Gula Sa****',
			'Tahira He****',
			'Raya Ey****',
			'Rəna Hə****',
			'Gülşən Əl****',
			'Gülarə Əh****',
			'Gulum Mi****',
			'Mahira Am****',
			'Aybəniz Ya****',
			'Təranə Qu****',


			//man
			'Anar Hu****',
			'İqrar Mə**** ',
			'Murad Pa**** ',
			'Elməddin Al**** ',
			'Ruslan Ab****',
			'Bilal Sə**** ',
			'Deyanet Ağ****',
			'Nağı Is**** ',
			'Kənan Mə**** ',
			'Ramiz Mə****',
			'Hikmet As****',
			'Nagı Is****',
			'Agali Rz****',
			'Rüstəm Mə****',
			'Elnur Pa****',
			'Məhərrəm Cə****',
			'Abülfəz Su****',
			'Əziz Qa****',
			'Nuri Əh****',
			'Zəlimxan Şa****',
			'Aslan İs****',
			'Vəli Və****',
			'Nizami Və****',
			'Faiq Na****',
			'Aleksandr Eq****',
			'Mirata Ağ****',
			'Etibar Ab****',
			'Məmməd Ba****',
			'Rüstəm Mə****',
			'İlqar İs****',
			'Elşən Mə****',
			'Rafiq Mu****',
			'Ceyhun Sə****',
			'Yaşar Al****',
			'Telman Qa****',
			'Arif Hə****',
			'Akif Sə****',
			'Yaşar Ab****',
			'Fizuli Pa****',
			'Ruslan İs****',
			'Yusif Mu****',
			'Asif Ab****',
			'Səbuxi Mə****',
			'İbrahim Qu****',
			'Sergey Vo****',
			'Elxan Ze****',
			'Rauf At****',
			'Ənvər Hə****',
			'Elcin Qu****',
			'Nizami Qu****',
			'Süleyman Nə****',
			'Fəzail Xu****',
			'Rasim Kə****',
			'Cavid Əl****',
			'İzafət Mə****',
			'Zahid Tə****',
			'İlqar Mə****',
			'Rasim Se****',
			'Müşfiq Ab****',
			'Aliovsad Ab****',
			'Çingiz Mi****',
			'Iskəndər Ze****',
			'Şahid Hə****',
			'Tofiq Qu****',
			'Vahid Yu****',
			'Xosrov Da****',
			'Royal He****',
			'Huseyn Ve****',
			'Aydin Ka****',
			'Rüfət Ax****',
			'İslam Ab****',
			'Ədalət Mə****',
			'İdris Qa****',
			'Zəfər Rə****',
			'Rəşad Mu****',
			'Elçin Az****',
			'Asif Əl****',
			'Xabil Ab****',
			'Zeynal  Mu****',
			'Ivan Se****',
			'Verullah Qu****',
			'Vəli Ab****',
			'Vüqar Əs****',
			'Həsən İs****',
			'Tofiq  Mu****',
			'Sakit Al****',
			'Calal Im****'


		]
			, NameCount = nameList.length - 1
			, $nameWrap = $('.js-show-name')
			, $name = $('.js-name');

		function nameValue() {
			var randomNameIndex = 0;
			var indexName = 0;
			var k = 0;
			var secondNameList = [];
			for (k = 0; k < 36; k++) {

				randomNameIndex = (Math.random() * NameCount).toFixed(0);
				if (nameList[randomNameIndex] == secondNameList) {
					randomNameIndex = (Math.random() * NameCount).toFixed(0);
				} else {
					$('.js-name').eq(k).html(nameList[randomNameIndex]);
					secondNameList = nameList[randomNameIndex];
					console.log(secondNameList);
				}
				indexName = indexName + 1;
			}
			console.log(indexName);
		}
		nameValue();
	};
};
//Функция проверки ввода кода функцый
function codeCheck(){
	var $code = $(".check_popup_code_input"),
		$message = $(".js-message"),
		$button = $(".button-popup-first");


	var codeValues = /^\d+$/;

	$button.on("click", function (ev) {
		ev.preventDefault();
		var $codeLenght = $(".check_popup_code_input").val().length;
		var codeValue = $code.val();

		if (codeValues.test(codeValue) && $codeLenght==15){
			return $message.text("Данный код верен. Cпасибо, что выбрали нашу продукцию!");
		} else if ($code.val() !== '' && $code.val() !== ' ' && $code.val() !== '  '){
			return $message.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.");
		}else{
			return $message.text("Введите, пожалуйста, код.");
		}

	});}


//Количество купленых товаров на данный момент

function NowTime(){
	var d = new Date();
	var result = (d.getHours()*60 + d.getMinutes())*2+2000;
	$('#todayBay').html(result);
};


//Добавить синюю трубку телефона
function bluePhone(){
	$('.bluePhone').html('<div class="phone-call cbh-phone cbh-green cbh-show  cbh-static" id="clbh_phone_div"><a href="#" class="phoneJs"><div class="cbh-ph-circle"></div><div class="cbh-ph-circle-fill"></div><div class="cbh-ph-img-circle1"></div></a></div>');
	$('.phoneJs').click(function(){
		event.preventDefault();
		$('.popup-second').fadeIn(300);
	});
}

//Спрятать попапы

$('html').mouseleave(function(){
	var displayP1 = $(".popup1").css('display');
	var displayP2 = $(".popup-second").css('display');
	if ( displayP1 == 'none' && displayP2 == 'none'){
		$('.modal_mouse_out').show();
	}
});

$('.mouse_moved').mouseover(function(){
	var displayPop = $(".popup1").css('display');
	var displayP = $(".popup-second").css('display');
	if ( displayPop == 'none' && displayP == 'none'){
		$('.modal_mouse_out').show();
	}
});

$('.modal_mouse_out .modal ').click(function(){
	$('.modal_mouse_out').addClass('hide');
});
$('.close-modal-mouse').click(function(){
	$('.modal_mouse_out').addClass('hide');
});

$('.header-call').on('click', function(event) {
	event.preventDefault();
	$(".popup1").fadeIn(300);
});


$('.modal').on('click', function(event) {
	event.preventDefault();
	$(".popup1").fadeOut(300);
	$(".popup-second").fadeOut(300);
});

//спрятать попапы конек


//Стили для браузеров

function mobileBrowser(){
	function safari_windows() {
		var ua = navigator.userAgent.toLowerCase();
		if (ua.indexOf('safari') != -1) {
			if (ua.indexOf('chrome') > -1) {
				var a = 1;
			} else {
				var tag_css = document.createElement('link');
				var basePath = window.cdn_path || '';
				tag_css.type = 'text/css';
				tag_css.rel = 'stylesheet';
				tag_css.href = basePath + "css/safari.css";
				var tag_head = document.getElementsByTagName('head');
				tag_head[0].appendChild(tag_css);
			}
		}
		;
	};
	function firefox() {
		var browser = navigator.userAgent.toLowerCase();
		if (browser.indexOf('firefox') > -1) {
			var basePath = window.cdn_path || '';
			var tag_css = document.createElement('link');
			tag_css.type = 'text/css';
			tag_css.rel = 'stylesheet';
			tag_css.href = basePath + "css/firefox.css";
			var tag_head = document.getElementsByTagName('head');
			tag_head[0].appendChild(tag_css);
		}
		else {               // If another browser, return 0
			var b = 1;
		}
		return false;
	};
	function internet_explorer() {
		var basePath = window.cdn_path || '';
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf("MSIE ");

		if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {     // If Internet Explorer, return version number
			var tag_css = document.createElement('link');
			tag_css.type = 'text/css';
			tag_css.rel = 'stylesheet';
			tag_css.href = basePath + "css/ie.css";
			var tag_head = document.getElementsByTagName('head');
			tag_head[0].appendChild(tag_css);
		}
		else {               // If another browser, return 0
			var b = 1;
		}
		return false;
	};


	function getMobileOperatingSystem() {
		var userAgent = navigator.userAgent || navigator.vendor || window.opera;

		if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) {
			var basePath = window.cdn_path || '';
			var tag_css = document.createElement('link');
			tag_css.type = 'text/css';
			tag_css.rel = 'stylesheet';
			tag_css.href = basePath + "css/ios.css";
			var tag_head = document.getElementsByTagName('head');
			tag_head[0].appendChild(tag_css);
		}

	};

	function opera_mini() {
		var isMobile = {
			Opera: function () {
				return navigator.userAgent.match(/Opera Mini/i);
			}
		};
		if (isMobile.Opera()) {
			var basePath = window.cdn_path || '';
			var tag_css = document.createElement('link');
			tag_css.type = 'text/css';
			tag_css.rel = 'stylesheet';
			tag_css.href = basePath + "css/operamini.css";
			var tag_head = document.getElementsByTagName('head');
			tag_head[0].appendChild(tag_css);

		}
	}

	function checkBrowser() {

		if (safariMac == true) {
			getMobileOperatingSystem();
		}
		if (internetEx == true) {
			internet_explorer();
		}
		if (safariWin == true) {
			safari_windows();
		}
		if (fireFox == true) {
			firefox();
		}
		if (operaMini == true) {
			opera_mini();
		}

	}
	checkBrowser();
};

//Стили для браузеров конец


//Функция проверки и включения/выключения функцый
function check() {

	if (mouse == true) {
		mouseMoved();
	}
	if (popUpBy == true) {
		console.log(countryCodeLocation);
		if(countryCodeLocation == "az"){
			popUpAZ();
		} else{popUp();}
	}
	if (checkCode == true) {
		codeCheck();
	}
	if (todayBayVal == true) {
		NowTime();
	}
	if (bPhone == true) {
		bluePhone();
	}
	if (mBrowser == true) {
		mobileBrowser();
	}

}
check();
// закрытие попапа при клике
$(".show-message>div").on("click", function(){
	$(".show-message>div").addClass("popup-off");
});

var mejs=mejs||{};mejs.version="2.14.2";mejs.meIndex=0;mejs.plugins={silverlight:[{version:[3,0],types:["video/mp4","video/m4v","video/mov","video/wmv","audio/wma","audio/m4a","audio/mp3","audio/wav","audio/mpeg"]}],flash:[{version:[9,0,124],types:["video/mp4","video/m4v","video/mov","video/flv","video/rtmp","video/x-flv","audio/flv","audio/x-flv","audio/mp3","audio/m4a","audio/mpeg","video/youtube","video/x-youtube"]}],youtube:[{version:null,types:["video/youtube","video/x-youtube","audio/youtube","audio/x-youtube"]}],vimeo:[{version:null,types:["video/vimeo","video/x-vimeo"]}]};mejs.Utility={encodeUrl:function(a){return encodeURIComponent(a)},escapeHTML:function(a){return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")},absolutizeUrl:function(a){var b=document.createElement("div");b.innerHTML='<a href="'+this.escapeHTML(a)+'">x</a>';return b.firstChild.href},getScriptPath:function(a){for(var b=0,c,d="",e="",g,f,i=document.getElementsByTagName("script"),k=i.length,h=a.length;b<k;b++){g=i[b].src;c=g.lastIndexOf("/");if(c>-1){f=g.substring(c+1);g=g.substring(0,c+1)}else{f=g;g=""}for(c=0;c<h;c++){e=a[c];e=f.indexOf(e);if(e>-1){d=g;break}}if(d!=="")break}return d},secondsToTimeCode:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d=="undefined")d=25;var e=Math.floor(a/3600)%24,g=Math.floor(a/60)%60,f=Math.floor(a%60);a=Math.floor((a%1*d).toFixed(3));return(b||e>0?(e<10?"0"+e:e)+":":"")+(g<10?"0"+g:g)+":"+(f<10?"0"+f:f)+(c?":"+(a<10?"0"+a:a):"")},timeCodeToSeconds:function(a,b,c,d){if(typeof c=="undefined")c=false;else if(typeof d=="undefined")d=25;a=a.split(":");b=parseInt(a[0],10);var e=parseInt(a[1],10),g=parseInt(a[2],10),f=0,i=0;if(c)f=parseInt(a[3])/d;return i=b*3600+e*60+g+f},convertSMPTEtoSeconds:function(a){if(typeof a!="string")return false;a=a.replace(",",".");var b=0,c=a.indexOf(".")!=-1?a.split(".")[1].length:0,d=1;a=a.split(":").reverse();for(var e=0;e<a.length;e++){d=1;if(e>0)d=Math.pow(60,e);b+=Number(a[e])*d}return Number(b.toFixed(c))},removeSwf:function(a){var b=document.getElementById(a);if(b&&/object|embed/i.test(b.nodeName))if(mejs.MediaFeatures.isIE){b.style.display="none";(function(){b.readyState==4?mejs.Utility.removeObjectInIE(a):setTimeout(arguments.callee,10)})()}else
b.parentNode.removeChild(b)},removeObjectInIE:function(a){if(a=document.getElementById(a)){for(var b in a)if(typeof a[b]=="function")a[b]=null;a.parentNode.removeChild(a)}}};mejs.PluginDetector={hasPluginVersion:function(a,b){var c=this.plugins[a];b[1]=b[1]||0;b[2]=b[2]||0;return c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?true:false},nav:window.navigator,ua:window.navigator.userAgent.toLowerCase(),plugins:[],addPlugin:function(a,b,c,d,e){this.plugins[a]=this.detectPlugin(b,c,d,e)},detectPlugin:function(a,b,c,d){var e=[0,0,0],g;if(typeof this.nav.plugins!="undefined"&&typeof this.nav.plugins[a]=="object"){if((c=this.nav.plugins[a].description)&&!(typeof this.nav.mimeTypes!="undefined"&&this.nav.mimeTypes[b]&&!this.nav.mimeTypes[b].enabledPlugin)){e=c.replace(a,"").replace(/^\s+/,"").replace(/\sr/gi,".").split(".");for(a=0;a<e.length;a++)e[a]=parseInt(e[a].match(/\d+/),10)}}else if(typeof window.ActiveXObject!="undefined")try{if(g=new ActiveXObject(c))e=d(g)}catch(f){}return e}};mejs.PluginDetector.addPlugin("flash","Shockwave Flash","application/x-shockwave-flash","ShockwaveFlash.ShockwaveFlash",function(a){var b=[];if(a=a.GetVariable("$version")){a=a.split(" ")[1].split(",");b=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)]}return b});mejs.PluginDetector.addPlugin("silverlight","Silverlight Plug-In","application/x-silverlight-2","AgControl.AgControl",function(a){var b=[0,0,0,0],c=function(d,e,g,f){for(;d.isVersionSupported(e[0]+"."+e[1]+"."+e[2]+"."+e[3]);)e[g]+=f;e[g]-=f};c(a,b,0,1);c(a,b,1,1);c(a,b,2,1E4);c(a,b,2,1E3);c(a,b,2,100);c(a,b,2,10);c(a,b,2,1);c(a,b,3,1);return b});mejs.MediaFeatures={init:function(){var a=this,b=document,c=mejs.PluginDetector.nav,d=mejs.PluginDetector.ua.toLowerCase(),e,g=["source","track","audio","video"];a.isiPad=d.match(/ipad/i)!==null;a.isiPhone=d.match(/iphone/i)!==null;a.isiOS=a.isiPhone||a.isiPad;a.isAndroid=d.match(/android/i)!==null;a.isBustedAndroid=d.match(/android 2\.[12]/)!==null;a.isBustedNativeHTTPS=location.protocol==="https:"&&(d.match(/android [12]\./)!==null||d.match(/macintosh.* version.* safari/)!==null);a.isIE=c.appName.toLowerCase().indexOf("microsoft")!=-1||c.appName.toLowerCase().match(/trident/gi)!==null;a.isChrome=d.match(/chrome/gi)!==null;a.isFirefox=d.match(/firefox/gi)!==null;a.isWebkit=d.match(/webkit/gi)!==null;a.isGecko=d.match(/gecko/gi)!==null&&!a.isWebkit&&!a.isIE;a.isOpera=d.match(/opera/gi)!==null;a.hasTouch="ontouchstart"in window;a.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect;for(c=0;c<g.length;c++)e=document.createElement(g[c]);a.supportsMediaTag=typeof e.canPlayType!=="undefined"||a.isBustedAndroid;try{e.canPlayType("video/mp4")}catch(f){a.supportsMediaTag=false}a.hasSemiNativeFullScreen=typeof e.webkitEnterFullscreen!=="undefined";a.hasNativeFullscreen=typeof e.requestFullscreen!=="undefined";a.hasWebkitNativeFullScreen=typeof e.webkitRequestFullScreen!=="undefined";a.hasMozNativeFullScreen=typeof e.mozRequestFullScreen!=="undefined";a.hasMsNativeFullScreen=typeof e.msRequestFullscreen!=="undefined";a.hasTrueNativeFullScreen=a.hasWebkitNativeFullScreen||a.hasMozNativeFullScreen||a.hasMsNativeFullScreen;a.nativeFullScreenEnabled=a.hasTrueNativeFullScreen;if(a.hasMozNativeFullScreen)a.nativeFullScreenEnabled=document.mozFullScreenEnabled;else if(a.hasMsNativeFullScreen)a.nativeFullScreenEnabled=document.msFullscreenEnabled;if(a.isChrome)a.hasSemiNativeFullScreen=false;if(a.hasTrueNativeFullScreen){a.fullScreenEventName="";if(a.hasWebkitNativeFullScreen)a.fullScreenEventName="webkitfullscreenchange";else if(a.hasMozNativeFullScreen)a.fullScreenEventName="mozfullscreenchange";else if(a.hasMsNativeFullScreen)a.fullScreenEventName="MSFullscreenChange";a.isFullScreen=function(){if(e.mozRequestFullScreen)return b.mozFullScreen;else if(e.webkitRequestFullScreen)return b.webkitIsFullScreen;else if(e.hasMsNativeFullScreen)return b.msFullscreenElement!==null};a.requestFullScreen=function(i){if(a.hasWebkitNativeFullScreen)i.webkitRequestFullScreen();else if(a.hasMozNativeFullScreen)i.mozRequestFullScreen();else
a.hasMsNativeFullScreen&&i.msRequestFullscreen()};a.cancelFullScreen=function(){if(a.hasWebkitNativeFullScreen)document.webkitCancelFullScreen();else if(a.hasMozNativeFullScreen)document.mozCancelFullScreen();else
a.hasMsNativeFullScreen&&document.msExitFullscreen()}}if(a.hasSemiNativeFullScreen&&d.match(/mac os x 10_5/i)){a.hasNativeFullScreen=false;a.hasSemiNativeFullScreen=false}}};mejs.MediaFeatures.init();mejs.HtmlMediaElement={pluginType:"native",isFullScreen:false,setCurrentTime:function(a){this.currentTime=a},setMuted:function(a){this.muted=a},setVolume:function(a){this.volume=a},stop:function(){this.pause()},setSrc:function(a){for(var b=this.getElementsByTagName("source");b.length>0;)this.removeChild(b[0]);if(typeof a=="string")this.src=a;else{var c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.src=c.src;break}}}},setVideoSize:function(a,b){this.width=a;this.height=b}};mejs.PluginMediaElement=function(a,b,c){this.id=a;this.pluginType=b;this.src=c;this.events={};this.attributes={}};mejs.PluginMediaElement.prototype={pluginElement:null,pluginType:"",isFullScreen:false,playbackRate:-1,defaultPlaybackRate:-1,seekable:[],played:[],paused:true,ended:false,seeking:false,duration:0,error:null,tagName:"",muted:false,volume:1,currentTime:0,play:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.playVideo():this.pluginApi.playMedia();this.paused=false}},load:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"||this.pluginApi.loadMedia();this.paused=false}},pause:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.pauseVideo():this.pluginApi.pauseMedia();this.paused=true}},stop:function(){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.stopVideo():this.pluginApi.stopMedia();this.paused=true}},canPlayType:function(a){var b,c,d,e=mejs.plugins[this.pluginType];for(b=0;b<e.length;b++){d=e[b];if(mejs.PluginDetector.hasPluginVersion(this.pluginType,d.version))for(c=0;c<d.types.length;c++)if(a==d.types[c])return"probably"}return""},positionFullscreenButton:function(a,b,c){this.pluginApi!=null&&this.pluginApi.positionFullscreenButton&&this.pluginApi.positionFullscreenButton(Math.floor(a),Math.floor(b),c)},hideFullscreenButton:function(){this.pluginApi!=null&&this.pluginApi.hideFullscreenButton&&this.pluginApi.hideFullscreenButton()},setSrc:function(a){if(typeof a=="string"){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));this.src=mejs.Utility.absolutizeUrl(a)}else{var b,c;for(b=0;b<a.length;b++){c=a[b];if(this.canPlayType(c.type)){this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));this.src=mejs.Utility.absolutizeUrl(a);break}}}},setCurrentTime:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.seekTo(a):this.pluginApi.setCurrentTime(a);this.currentTime=a}},setVolume:function(a){if(this.pluginApi!=null){this.pluginType=="youtube"||this.pluginType=="vimeo"?this.pluginApi.setVolume(a*100):this.pluginApi.setVolume(a);this.volume=a}},setMuted:function(a){if(this.pluginApi!=null){if(this.pluginType=="youtube"||this.pluginType=="vimeo"){a?this.pluginApi.mute():this.pluginApi.unMute();this.muted=a;this.dispatchEvent("volumechange")}else
this.pluginApi.setMuted(a);this.muted=a}},setVideoSize:function(a,b){if(this.pluginElement.style){this.pluginElement.style.width=a+"px";this.pluginElement.style.height=b+"px"}this.pluginApi!=null&&this.pluginApi.setVideoSize&&this.pluginApi.setVideoSize(a,b)},setFullscreen:function(a){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.pluginApi.setFullscreen(a)},enterFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.setFullscreen(true)},exitFullScreen:function(){this.pluginApi!=null&&this.pluginApi.setFullscreen&&this.setFullscreen(false)},addEventListener:function(a,b){this.events[a]=this.events[a]||[];this.events[a].push(b)},removeEventListener:function(a,b){if(!a){this.events={};return true}var c=this.events[a];if(!c)return true;if(!b){this.events[a]=[];return true}for(var d=0;d<c.length;d++)if(c[d]===b){this.events[a].splice(d,1);return true}return false},dispatchEvent:function(a){var b,c,d=this.events[a];if(d){c=Array.prototype.slice.call(arguments,1);for(b=0;b<d.length;b++)d[b].apply(null,c)}},hasAttribute:function(a){return a in this.attributes},removeAttribute:function(a){delete this.attributes[a]},getAttribute:function(a){if(this.hasAttribute(a))return this.attributes[a];return""},setAttribute:function(a,b){this.attributes[a]=b},remove:function(){mejs.Utility.removeSwf(this.pluginElement.id);mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)}};mejs.MediaPluginBridge={pluginMediaElements:{},htmlMediaElements:{},registerPluginElement:function(a,b,c){this.pluginMediaElements[a]=b;this.htmlMediaElements[a]=c},unregisterPluginElement:function(a){delete this.pluginMediaElements[a];delete this.htmlMediaElements[a]},initPlugin:function(a){var b=this.pluginMediaElements[a],c=this.htmlMediaElements[a];if(b){switch(b.pluginType){case"flash":b.pluginElement=b.pluginApi=document.getElementById(a);break;case"silverlight":b.pluginElement=document.getElementById(b.id);b.pluginApi=b.pluginElement.Content.MediaElementJS}b.pluginApi!=null&&b.success&&b.success(b,c)}},fireEvent:function(a,b,c){var d,e;if(a=this.pluginMediaElements[a]){b={type:b,target:a};for(d in c){a[d]=c[d];b[d]=c[d]}e=c.bufferedTime||0;b.target.buffered=b.buffered={start:function(){return 0},end:function(){return e},length:1};a.dispatchEvent(b.type,b)}}};mejs.MediaElementDefaults={mode:"auto",plugins:["flash","silverlight","youtube","vimeo"],enablePluginDebug:false,httpsBasicAuthSite:false,type:"",pluginPath:mejs.Utility.getScriptPath(["mediaelement.js","mediaelement.min.js","mediaelement-and-player.js","mediaelement-and-player.min.js"]),flashName:"flashmediaelement.swf",flashStreamer:"",enablePluginSmoothing:false,enablePseudoStreaming:false,pseudoStreamingStartQueryParam:"start",silverlightName:"silverlightmediaelement.xap",defaultVideoWidth:480,defaultVideoHeight:270,pluginWidth:-1,pluginHeight:-1,pluginVars:[],timerRate:250,startVolume:0.8,success:function(){},error:function(){}};mejs.MediaElement=function(a,b){return mejs.HtmlMediaElementShim.create(a,b)};mejs.HtmlMediaElementShim={create:function(a,b){var c=mejs.MediaElementDefaults,d=typeof a=="string"?document.getElementById(a):a,e=d.tagName.toLowerCase(),g=e==="audio"||e==="video",f=g?d.getAttribute("src"):d.getAttribute("href");e=d.getAttribute("poster");var i=d.getAttribute("autoplay"),k=d.getAttribute("preload"),h=d.getAttribute("controls"),j;for(j in b)c[j]=b[j];f=typeof f=="undefined"||f===null||f==""?null:f;e=typeof e=="undefined"||e===null?"":e;k=typeof k=="undefined"||k===null||k==="false"?"none":k;i=!(typeof i=="undefined"||i===null||i==="false");h=!(typeof h=="undefined"||h===null||h==="false");j=this.determinePlayback(d,c,mejs.MediaFeatures.supportsMediaTag,g,f);j.url=j.url!==null?mejs.Utility.absolutizeUrl(j.url):"";if(j.method=="native"){if(mejs.MediaFeatures.isBustedAndroid){d.src=j.url;d.addEventListener("click",function(){d.play()},false)}return this.updateNative(j,c,i,k)}else if(j.method!=="")return this.createPlugin(j,c,e,i,k,h);else{this.createErrorMessage(j,c,e);return this}},determinePlayback:function(a,b,c,d,e){var g=[],f,i,k,h={method:"",url:"",htmlMediaElement:a,isVideo:a.tagName.toLowerCase()!="audio"},j;if(typeof b.type!="undefined"&&b.type!=="")if(typeof b.type=="string")g.push({type:b.type,url:e});else
for(f=0;f<b.type.length;f++)g.push({type:b.type[f],url:e});else if(e!==null){k=this.formatType(e,a.getAttribute("type"));g.push({type:k,url:e})}else
for(f=0;f<a.childNodes.length;f++){i=a.childNodes[f];if(i.nodeType==1&&i.tagName.toLowerCase()=="source"){e=i.getAttribute("src");k=this.formatType(e,i.getAttribute("type"));i=i.getAttribute("media");if(!i||!window.matchMedia||window.matchMedia&&window.matchMedia(i).matches)g.push({type:k,url:e})}}if(!d&&g.length>0&&g[0].url!==null&&this.getTypeFromFile(g[0].url).indexOf("audio")>-1)h.isVideo=false;if(mejs.MediaFeatures.isBustedAndroid)a.canPlayType=function(m){return m.match(/video\/(mp4|m4v)/gi)!==null?"maybe":""};if(c&&(b.mode==="auto"||b.mode==="auto_plugin"||b.mode==="native")&&!(mejs.MediaFeatures.isBustedNativeHTTPS&&b.httpsBasicAuthSite===true)){if(!d){f=document.createElement(h.isVideo?"video":"audio");a.parentNode.insertBefore(f,a);a.style.display="none";h.htmlMediaElement=a=f}for(f=0;f<g.length;f++)if(a.canPlayType(g[f].type).replace(/no/,"")!==""||a.canPlayType(g[f].type.replace(/mp3/,"mpeg")).replace(/no/,"")!==""||a.canPlayType(g[f].type.replace(/m4a/,"mp4")).replace(/no/,"")!==""){h.method="native";h.url=g[f].url;break}if(h.method==="native"){if(h.url!==null)a.src=h.url;if(b.mode!=="auto_plugin")return h}}if(b.mode==="auto"||b.mode==="auto_plugin"||b.mode==="shim")for(f=0;f<g.length;f++){k=g[f].type;for(a=0;a<b.plugins.length;a++){e=b.plugins[a];i=mejs.plugins[e];for(c=0;c<i.length;c++){j=i[c];if(j.version==null||mejs.PluginDetector.hasPluginVersion(e,j.version))for(d=0;d<j.types.length;d++)if(k==j.types[d]){h.method=e;h.url=g[f].url;return h}}}}if(b.mode==="auto_plugin"&&h.method==="native")return h;if(h.method===""&&g.length>0)h.url=g[0].url;return h},formatType:function(a,b){return a&&!b?this.getTypeFromFile(a):b&&~b.indexOf(";")?b.substr(0,b.indexOf(";")):b},getTypeFromFile:function(a){a=a.split("?")[0];a=a.substring(a.lastIndexOf(".")+1).toLowerCase();return(/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a)?"video":"audio")+"/"+this.getTypeFromExtension(a)},getTypeFromExtension:function(a){switch(a){case"mp4":case"m4v":case"m4a":return"mp4";case"webm":case"webma":case"webmv":return"webm";case"ogg":case"oga":case"ogv":return"ogg";default:return a}},createErrorMessage:function(a,b,c){var d=a.htmlMediaElement,e=document.createElement("div");e.className="me-cannotplay";try{e.style.width=d.width+"px";e.style.height=d.height+"px"}catch(g){}e.innerHTML=b.customError?b.customError:c!==""?'<a href="'+a.url+'"><img src="'+c+'" width="100%" height="100%" /></a>':'<a href="'+a.url+'"><span>'+mejs.i18n.t("Download File")+"</span></a>";d.parentNode.insertBefore(e,d);d.style.display="none";b.error(d)},createPlugin:function(a,b,c,d,e,g){c=a.htmlMediaElement;var f=1,i=1,k="me_"+a.method+"_"+mejs.meIndex++,h=new mejs.PluginMediaElement(k,a.method,a.url),j=document.createElement("div"),m;h.tagName=c.tagName;for(m=0;m<c.attributes.length;m++){var q=c.attributes[m];q.specified==true&&h.setAttribute(q.name,q.value)}for(m=c.parentNode;m!==null&&m.tagName.toLowerCase()!=="body"&&m.parentNode!=null;){if(m.parentNode.tagName.toLowerCase()==="p"){m.parentNode.parentNode.insertBefore(m,m.parentNode);break}m=m.parentNode}if(a.isVideo){f=b.pluginWidth>0?b.pluginWidth:b.videoWidth>0?b.videoWidth:c.getAttribute("width")!==null?c.getAttribute("width"):b.defaultVideoWidth;i=b.pluginHeight>0?b.pluginHeight:b.videoHeight>0?b.videoHeight:c.getAttribute("height")!==null?c.getAttribute("height"):b.defaultVideoHeight;f=mejs.Utility.encodeUrl(f);i=mejs.Utility.encodeUrl(i)}else if(b.enablePluginDebug){f=320;i=240}h.success=b.success;mejs.MediaPluginBridge.registerPluginElement(k,h,c);j.className="me-plugin";j.id=k+"_container";a.isVideo?c.parentNode.insertBefore(j,c):document.body.insertBefore(j,document.body.childNodes[0]);d=["id="+k,"isvideo="+(a.isVideo?"true":"false"),"autoplay="+(d?"true":"false"),"preload="+e,"width="+f,"startvolume="+b.startVolume,"timerrate="+b.timerRate,"flashstreamer="+b.flashStreamer,"height="+i,"pseudostreamstart="+b.pseudoStreamingStartQueryParam];if(a.url!==null)a.method=="flash"?d.push("file="+mejs.Utility.encodeUrl(a.url)):d.push("file="+a.url);b.enablePluginDebug&&d.push("debug=true");b.enablePluginSmoothing&&d.push("smoothing=true");b.enablePseudoStreaming&&d.push("pseudostreaming=true");g&&d.push("controls=true");if(b.pluginVars)d=d.concat(b.pluginVars);switch(a.method){case"silverlight":j.innerHTML='<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="'+k+'" name="'+k+'" width="'+f+'" height="'+i+'" class="mejs-shim"><param name="initParams" value="'+d.join(",")+'" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="'+b.pluginPath+b.silverlightName+'" /></object>';break;case"flash":if(mejs.MediaFeatures.isIE){a=document.createElement("div");j.appendChild(a);a.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+k+'" width="'+f+'" height="'+i+'" class="mejs-shim"><param name="movie" value="'+b.pluginPath+b.flashName+"?x="+new Date+'" /><param name="flashvars" value="'+d.join("&amp;")+'" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /><param name="scale" value="default" /></object>'}else
j.innerHTML='<embed id="'+k+'" name="'+k+'" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="'+b.pluginPath+b.flashName+'" flashvars="'+d.join("&")+'" width="'+f+'" height="'+i+'" scale="default"class="mejs-shim"></embed>';break;case"youtube":if(a.url.lastIndexOf("youtu.be")!=-1){a=a.url.substr(a.url.lastIndexOf("/")+1);if(a.indexOf("?")!=-1)a=a.substr(0,a.indexOf("?"))}else
a=a.url.substr(a.url.lastIndexOf("=")+1);youtubeSettings={container:j,containerId:j.id,pluginMediaElement:h,pluginId:k,videoId:a,height:i,width:f};mejs.PluginDetector.hasPluginVersion("flash",[10,0,0])?mejs.YouTubeApi.createFlash(youtubeSettings):mejs.YouTubeApi.enqueueIframe(youtubeSettings);break;case"vimeo":b=k+"_player";h.vimeoid=a.url.substr(a.url.lastIndexOf("/")+1);j.innerHTML='<iframe src="//player.vimeo.com/video/'+h.vimeoid+"?api=1&portrait=0&byline=0&title=0&player_id="+b+'" width="'+f+'" height="'+i+'" frameborder="0" class="mejs-shim" id="'+b+'"></iframe>';if(typeof $f=="function"){var l=$f(j.childNodes[0]);l.addEvent("ready",function(){function o(n,p,r,s){n={type:r,target:p};if(r=="timeupdate"){p.currentTime=n.currentTime=s.seconds;p.duration=n.duration=s.duration}p.dispatchEvent(n.type,n)}l.playVideo=function(){l.api("play")};l.pauseVideo=function(){l.api("pause")};l.seekTo=function(n){l.api("seekTo",n)};l.addEvent("play",function(){o(l,h,"play");o(l,h,"playing")});l.addEvent("pause",function(){o(l,h,"pause")});l.addEvent("finish",function(){o(l,h,"ended")});l.addEvent("playProgress",function(n){o(l,h,"timeupdate",n)});h.pluginApi=l;mejs.MediaPluginBridge.initPlugin(k)})}else
console.warn("You need to include froogaloop for vimeo to work")}c.style.display="none";c.removeAttribute("autoplay");return h},updateNative:function(a,b){var c=a.htmlMediaElement,d;for(d in mejs.HtmlMediaElement)c[d]=mejs.HtmlMediaElement[d];b.success(c,c);return c}};mejs.YouTubeApi={isIframeStarted:false,isIframeLoaded:false,loadIframeApi:function(){if(!this.isIframeStarted){var a=document.createElement("script");a.src="//www.youtube.com/player_api";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b);this.isIframeStarted=true}},iframeQueue:[],enqueueIframe:function(a){if(this.isLoaded)this.createIframe(a);else{this.loadIframeApi();this.iframeQueue.push(a)}},createIframe:function(a){var b=a.pluginMediaElement,c=new YT.Player(a.containerId,{height:a.height,width:a.width,videoId:a.videoId,playerVars:{controls:0},events:{onReady:function(){a.pluginMediaElement.pluginApi=c;mejs.MediaPluginBridge.initPlugin(a.pluginId);setInterval(function(){mejs.YouTubeApi.createEvent(c,b,"timeupdate")},250)},onStateChange:function(d){mejs.YouTubeApi.handleStateChange(d.data,c,b)}}})},createEvent:function(a,b,c){c={type:c,target:b};if(a&&a.getDuration){b.currentTime=c.currentTime=a.getCurrentTime();b.duration=c.duration=a.getDuration();c.paused=b.paused;c.ended=b.ended;c.muted=a.isMuted();c.volume=a.getVolume()/100;c.bytesTotal=a.getVideoBytesTotal();c.bufferedBytes=a.getVideoBytesLoaded();var d=c.bufferedBytes/c.bytesTotal*c.duration;c.target.buffered=c.buffered={start:function(){return 0},end:function(){return d},length:1}}b.dispatchEvent(c.type,c)},iFrameReady:function(){for(this.isIframeLoaded=this.isLoaded=true;this.iframeQueue.length>0;)this.createIframe(this.iframeQueue.pop())},flashPlayers:{},createFlash:function(a){this.flashPlayers[a.pluginId]=a;var b,c="//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid="+a.pluginId+"&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";if(mejs.MediaFeatures.isIE){b=document.createElement("div");a.container.appendChild(b);b.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="'+a.pluginId+'" width="'+a.width+'" height="'+a.height+'" class="mejs-shim"><param name="movie" value="'+c+'" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'}else
a.container.innerHTML='<object type="application/x-shockwave-flash" id="'+a.pluginId+'" data="'+c+'" width="'+a.width+'" height="'+a.height+'" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'},flashReady:function(a){var b=this.flashPlayers[a],c=document.getElementById(a),d=b.pluginMediaElement;d.pluginApi=d.pluginElement=c;mejs.MediaPluginBridge.initPlugin(a);c.cueVideoById(b.videoId);a=b.containerId+"_callback";window[a]=function(e){mejs.YouTubeApi.handleStateChange(e,c,d)};c.addEventListener("onStateChange",a);setInterval(function(){mejs.YouTubeApi.createEvent(c,d,"timeupdate")},250)},handleStateChange:function(a,b,c){switch(a){case-1:c.paused=true;c.ended=true;mejs.YouTubeApi.createEvent(b,c,"loadedmetadata");break;case 0:c.paused=false;c.ended=true;mejs.YouTubeApi.createEvent(b,c,"ended");break;case 1:c.paused=false;c.ended=false;mejs.YouTubeApi.createEvent(b,c,"play");mejs.YouTubeApi.createEvent(b,c,"playing");break;case 2:c.paused=true;c.ended=false;mejs.YouTubeApi.createEvent(b,c,"pause");break;case 3:mejs.YouTubeApi.createEvent(b,c,"progress")}}};function onYouTubePlayerAPIReady(){mejs.YouTubeApi.iFrameReady()}function onYouTubePlayerReady(a){mejs.YouTubeApi.flashReady(a)}window.mejs=mejs;window.MediaElement=mejs.MediaElement;(function(a,b){var c={locale:{language:"",strings:{}},methods:{}};c.getLanguage=function(){return(c.locale.language||window.navigator.userLanguage||window.navigator.language).substr(0,2).toLowerCase()};if(typeof mejsL10n!="undefined")c.locale.language=mejsL10n.language;c.methods.checkPlain=function(d){var e,g,f={"&":"&amp;",'"':"&quot;","<":"&lt;",">":"&gt;"};d=String(d);for(e in f)if(f.hasOwnProperty(e)){g=RegExp(e,"g");d=d.replace(g,f[e])}return d};c.methods.t=function(d,e){if(c.locale.strings&&c.locale.strings[e.context]&&c.locale.strings[e.context][d])d=c.locale.strings[e.context][d];return c.methods.checkPlain(d)};c.t=function(d,e){if(typeof d==="string"&&d.length>0){var g=c.getLanguage();e=e||{context:g};return c.methods.t(d,e)}else
throw{name:"InvalidArgumentException",message:"First argument is either not a string or empty."};};b.i18n=c})(document,mejs);(function(a){if(typeof mejsL10n!="undefined")a[mejsL10n.language]=mejsL10n.strings})(mejs.i18n.locale.strings);(function(a){if(typeof a.de==="undefined")a.de={Fullscreen:"Vollbild","Go Fullscreen":"Vollbild an","Turn off Fullscreen":"Vollbild aus",Close:"Schlie\u00dfen"}})(mejs.i18n.locale.strings);(function(a){if(typeof a.zh==="undefined")a.zh={Fullscreen:"\u5168\u87a2\u5e55","Go Fullscreen":"\u5168\u5c4f\u6a21\u5f0f","Turn off Fullscreen":"\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",Close:"\u95dc\u9589"}})(mejs.i18n.locale.strings);if(typeof jQuery!="undefined")mejs.$=jQuery;else if(typeof ender!="undefined")mejs.$=ender;(function(f){mejs.MepDefaults={poster:"",showPosterWhenEnded:false,defaultVideoWidth:480,defaultVideoHeight:270,videoWidth:-1,videoHeight:-1,defaultAudioWidth:400,defaultAudioHeight:30,defaultSeekBackwardInterval:function(a){return a.duration*0.05},defaultSeekForwardInterval:function(a){return a.duration*0.05},audioWidth:-1,audioHeight:-1,startVolume:0.8,loop:false,autoRewind:true,enableAutosize:true,alwaysShowHours:false,showTimecodeFrameCount:false,framesPerSecond:25,autosizeProgress:true,alwaysShowControls:false,hideVideoControlsOnLoad:false,clickToPlayPause:true,iPadUseNativeControls:false,iPhoneUseNativeControls:false,AndroidUseNativeControls:false,features:["playpause","current","progress","duration","tracks","volume","fullscreen"],isVideo:true,enableKeyboard:true,pauseOtherPlayers:true,keyActions:[{keys:[32,179],action:function(a,b){b.paused||b.ended?a.play():a.pause()}},{keys:[38],action:function(a,b){b.setVolume(Math.min(b.volume+0.1,1))}},{keys:[40],action:function(a,b){b.setVolume(Math.max(b.volume-0.1,0))}},{keys:[37,227],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.max(b.currentTime-a.options.defaultSeekBackwardInterval(b),0);b.setCurrentTime(c)}}},{keys:[39,228],action:function(a,b){if(!isNaN(b.duration)&&b.duration>0){if(a.isVideo){a.showControls();a.startControlsTimer()}var c=Math.min(b.currentTime+a.options.defaultSeekForwardInterval(b),b.duration);b.setCurrentTime(c)}}},{keys:[70],action:function(a){if(typeof a.enterFullScreen!="undefined")a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}}]};mejs.mepIndex=0;mejs.players={};mejs.MediaElementPlayer=function(a,b){if(!(this instanceof mejs.MediaElementPlayer))return new mejs.MediaElementPlayer(a,b);this.$media=this.$node=f(a);this.node=this.media=this.$media[0];if(typeof this.node.player!="undefined")return this.node.player;else
this.node.player=this;if(typeof b=="undefined")b=this.$node.data("mejsoptions");this.options=f.extend({},mejs.MepDefaults,b);this.id="mep_"+mejs.mepIndex++;mejs.players[this.id]=this;this.init();return this};mejs.MediaElementPlayer.prototype={hasFocus:false,controlsAreVisible:true,init:function(){var a=this,b=mejs.MediaFeatures,c=f.extend(true,{},a.options,{success:function(d,g){a.meReady(d,g)},error:function(d){a.handleError(d)}}),e=a.media.tagName.toLowerCase();a.isDynamic=e!=="audio"&&e!=="video";a.isVideo=a.isDynamic?a.options.isVideo:e!=="audio"&&a.options.isVideo;if(b.isiPad&&a.options.iPadUseNativeControls||b.isiPhone&&a.options.iPhoneUseNativeControls){a.$media.attr("controls","controls");b.isiPad&&a.media.getAttribute("autoplay")!==null&&a.play()}else if(!(b.isAndroid&&a.options.AndroidUseNativeControls)){a.$media.removeAttr("controls");a.container=f('<div id="'+a.id+'" class="mejs-container '+(mejs.MediaFeatures.svg?"svg":"no-svg")+'"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);a.container.addClass((b.isAndroid?"mejs-android ":"")+(b.isiOS?"mejs-ios ":"")+(b.isiPad?"mejs-ipad ":"")+(b.isiPhone?"mejs-iphone ":"")+(a.isVideo?"mejs-video ":"mejs-audio "));if(b.isiOS){b=a.$media.clone();a.container.find(".mejs-mediaelement").append(b);a.$media.remove();a.$node=a.$media=b;a.node=a.media=b[0]}else
a.container.find(".mejs-mediaelement").append(a.$media);a.controls=a.container.find(".mejs-controls");a.layers=a.container.find(".mejs-layers");b=a.isVideo?"video":"audio";e=b.substring(0,1).toUpperCase()+b.substring(1);a.width=a.options[b+"Width"]>0||a.options[b+"Width"].toString().indexOf("%")>-1?a.options[b+"Width"]:a.media.style.width!==""&&a.media.style.width!==null?a.media.style.width:a.media.getAttribute("width")!==null?a.$media.attr("width"):a.options["default"+e+"Width"];a.height=a.options[b+"Height"]>0||a.options[b+"Height"].toString().indexOf("%")>-1?a.options[b+"Height"]:a.media.style.height!==""&&a.media.style.height!==null?a.media.style.height:a.$media[0].getAttribute("height")!==null?a.$media.attr("height"):a.options["default"+e+"Height"];a.setPlayerSize(a.width,a.height);c.pluginWidth=a.width;c.pluginHeight=a.height}mejs.MediaElement(a.$media[0],c);typeof a.container!="undefined"&&a.controlsAreVisible&&a.container.trigger("controlsshown")},showControls:function(a){var b=this;a=typeof a=="undefined"||a;if(!b.controlsAreVisible){if(a){b.controls.css("visibility","visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=true;b.container.trigger("controlsshown")});b.container.find(".mejs-control").css("visibility","visible").stop(true,true).fadeIn(200,function(){b.controlsAreVisible=true})}else{b.controls.css("visibility","visible").css("display","block");b.container.find(".mejs-control").css("visibility","visible").css("display","block");b.controlsAreVisible=true;b.container.trigger("controlsshown")}b.setControlsSize()}},hideControls:function(a){var b=this;a=typeof a=="undefined"||a;if(!(!b.controlsAreVisible||b.options.alwaysShowControls))if(a){b.controls.stop(true,true).fadeOut(200,function(){f(this).css("visibility","hidden").css("display","block");b.controlsAreVisible=false;b.container.trigger("controlshidden")});b.container.find(".mejs-control").stop(true,true).fadeOut(200,function(){f(this).css("visibility","hidden").css("display","block")})}else{b.controls.css("visibility","hidden").css("display","block");b.container.find(".mejs-control").css("visibility","hidden").css("display","block");b.controlsAreVisible=false;b.container.trigger("controlshidden")}},controlsTimer:null,startControlsTimer:function(a){var b=this;a=typeof a!="undefined"?a:1500;b.killControlsTimer("start");b.controlsTimer=setTimeout(function(){b.hideControls();b.killControlsTimer("hide")},a)},killControlsTimer:function(){if(this.controlsTimer!==null){clearTimeout(this.controlsTimer);delete this.controlsTimer;this.controlsTimer=null}},controlsEnabled:true,disableControls:function(){this.killControlsTimer();this.hideControls(false);this.controlsEnabled=false},enableControls:function(){this.showControls(false);this.controlsEnabled=true},meReady:function(a,b){var c=this,e=mejs.MediaFeatures,d=b.getAttribute("autoplay");d=!(typeof d=="undefined"||d===null||d==="false");var g;if(!c.created){c.created=true;c.media=a;c.domNode=b;if(!(e.isAndroid&&c.options.AndroidUseNativeControls)&&!(e.isiPad&&c.options.iPadUseNativeControls)&&!(e.isiPhone&&c.options.iPhoneUseNativeControls)){c.buildposter(c,c.controls,c.layers,c.media);c.buildkeyboard(c,c.controls,c.layers,c.media);c.buildoverlays(c,c.controls,c.layers,c.media);c.findTracks();for(g in c.options.features){e=c.options.features[g];if(c["build"+e])try{c["build"+e](c,c.controls,c.layers,c.media)}catch(k){}}c.container.trigger("controlsready");c.setPlayerSize(c.width,c.height);c.setControlsSize();if(c.isVideo){if(mejs.MediaFeatures.hasTouch)c.$media.bind("touchstart",function(){if(c.controlsAreVisible)c.hideControls(false);else
c.controlsEnabled&&c.showControls(false)});else{c.clickToPlayPauseCallback=function(){if(c.options.clickToPlayPause)c.media.paused?c.play():c.pause()};c.media.addEventListener("click",c.clickToPlayPauseCallback,false);c.container.bind("mouseenter mouseover",function(){if(c.controlsEnabled)if(!c.options.alwaysShowControls){c.killControlsTimer("enter");c.showControls();c.startControlsTimer(2500)}}).bind("mousemove",function(){if(c.controlsEnabled){c.controlsAreVisible||c.showControls();c.options.alwaysShowControls||c.startControlsTimer(2500)}}).bind("mouseleave",function(){c.controlsEnabled&&!c.media.paused&&!c.options.alwaysShowControls&&c.startControlsTimer(1E3)})}c.options.hideVideoControlsOnLoad&&c.hideControls(false);d&&!c.options.alwaysShowControls&&c.hideControls();c.options.enableAutosize&&c.media.addEventListener("loadedmetadata",function(j){if(c.options.videoHeight<=0&&c.domNode.getAttribute("height")===null&&!isNaN(j.target.videoHeight)){c.setPlayerSize(j.target.videoWidth,j.target.videoHeight);c.setControlsSize();c.media.setVideoSize(j.target.videoWidth,j.target.videoHeight)}},false)}a.addEventListener("play",function(){for(var j in mejs.players){var m=mejs.players[j];m.id!=c.id&&c.options.pauseOtherPlayers&&!m.paused&&!m.ended&&m.pause();m.hasFocus=false}c.hasFocus=true},false);c.media.addEventListener("ended",function(){if(c.options.autoRewind)try{c.media.setCurrentTime(0)}catch(j){}c.media.pause();c.setProgressRail&&c.setProgressRail();c.setCurrentRail&&c.setCurrentRail();if(c.options.loop)c.play();else!c.options.alwaysShowControls&&c.controlsEnabled&&c.showControls()},false);c.media.addEventListener("loadedmetadata",function(){c.updateDuration&&c.updateDuration();c.updateCurrent&&c.updateCurrent();if(!c.isFullScreen){c.setPlayerSize(c.width,c.height);c.setControlsSize()}},false);setTimeout(function(){c.setPlayerSize(c.width,c.height);c.setControlsSize()},50);c.globalBind("resize",function(){c.isFullScreen||mejs.MediaFeatures.hasTrueNativeFullScreen&&document.webkitIsFullScreen||c.setPlayerSize(c.width,c.height);c.setControlsSize()});c.media.pluginType=="youtube"&&c.container.find(".mejs-overlay-play").hide()}d&&a.pluginType=="native"&&c.play();if(c.options.success)typeof c.options.success=="string"?window[c.options.success](c.media,c.domNode,c):c.options.success(c.media,c.domNode,c)}},handleError:function(a){this.controls.hide();this.options.error&&this.options.error(a)},setPlayerSize:function(a,b){if(typeof a!="undefined")this.width=a;if(typeof b!="undefined")this.height=b;if(this.height.toString().indexOf("%")>0||this.$node.css("max-width")==="100%"||parseInt(this.$node.css("max-width").replace(/px/,""),10)/this.$node.offsetParent().width()===1||this.$node[0].currentStyle&&this.$node[0].currentStyle.maxWidth==="100%"){var c=this.isVideo?this.media.videoWidth&&this.media.videoWidth>0?this.media.videoWidth:this.options.defaultVideoWidth:this.options.defaultAudioWidth,e=this.isVideo?this.media.videoHeight&&this.media.videoHeight>0?this.media.videoHeight:this.options.defaultVideoHeight:this.options.defaultAudioHeight,d=this.container.parent().closest(":visible").width();c=this.isVideo||!this.options.autosizeProgress?parseInt(d*e/c,10):e;if(isNaN(c))c=this.container.parent().closest(":visible").height();if(this.container.parent()[0].tagName.toLowerCase()==="body"){d=f(window).width();c=f(window).height()}if(c!=0&&d!=0){this.container.width(d).height(c);this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%");this.isVideo&&this.media.setVideoSize&&this.media.setVideoSize(d,c);this.layers.children(".mejs-layer").width("100%").height("100%")}}else{this.container.width(this.width).height(this.height);this.layers.children(".mejs-layer").width(this.width).height(this.height)}d=this.layers.find(".mejs-overlay-play");c=d.find(".mejs-overlay-button");d.height(this.container.height()-this.controls.height());c.css("margin-top","-"+(c.height()/2-this.controls.height()/2).toString()+"px")},setControlsSize:function(){var a=0,b=0,c=this.controls.find(".mejs-time-rail"),e=this.controls.find(".mejs-time-total");this.controls.find(".mejs-time-current");this.controls.find(".mejs-time-loaded");var d=c.siblings(),g=d.last(),k=null;if(!(!this.container.is(":visible")||!c.length||!c.is(":visible"))){if(this.options&&!this.options.autosizeProgress)b=parseInt(c.css("width"));if(b===0||!b){d.each(function(){var j=f(this);if(j.css("position")!="absolute"&&j.is(":visible"))a+=f(this).outerWidth(true)});b=this.controls.width()-a-(c.outerWidth(true)-c.width())}do{c.width(b);e.width(b-(e.outerWidth(true)-e.width()));if(g.css("position")!="absolute"){k=g.position();b--}}while(k!=null&&k.top>0&&b>0);this.setProgressRail&&this.setProgressRail();this.setCurrentRail&&this.setCurrentRail()}},buildposter:function(a,b,c,e){var d=f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);b=a.$media.attr("poster");if(a.options.poster!=="")b=a.options.poster;b!==""&&b!=null?this.setPoster(b):d.hide();e.addEventListener("play",function(){d.hide()},false);a.options.showPosterWhenEnded&&a.options.autoRewind&&e.addEventListener("ended",function(){d.show()},false)},setPoster:function(a){var b=this.container.find(".mejs-poster"),c=b.find("img");if(c.length==0)c=f('<img width="100%" height="100%" />').appendTo(b);c.attr("src",a);b.css({"background-image":"url("+a+")"})},buildoverlays:function(a,b,c,e){var d=this;if(a.isVideo){var g=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),k=f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),j=f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).bind("click touchstart",function(){d.options.clickToPlayPause&&e.paused&&e.play()});e.addEventListener("play",function(){j.hide();g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);e.addEventListener("playing",function(){j.hide();g.hide();b.find(".mejs-time-buffering").hide();k.hide()},false);e.addEventListener("seeking",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("seeked",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);e.addEventListener("pause",function(){mejs.MediaFeatures.isiPhone||j.show()},false);e.addEventListener("waiting",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("loadeddata",function(){g.show();b.find(".mejs-time-buffering").show()},false);e.addEventListener("canplay",function(){g.hide();b.find(".mejs-time-buffering").hide()},false);e.addEventListener("error",function(){g.hide();b.find(".mejs-time-buffering").hide();k.show();k.find("mejs-overlay-error").html("Error loading this resource")},false)}},buildkeyboard:function(a,b,c,e){this.globalBind("keydown",function(d){if(a.hasFocus&&a.options.enableKeyboard)for(var g=0,k=a.options.keyActions.length;g<k;g++)for(var j=a.options.keyActions[g],m=0,q=j.keys.length;m<q;m++)if(d.keyCode==j.keys[m]){d.preventDefault();j.action(a,e,d.keyCode);return false}return true});this.globalBind("click",function(d){a.hasFocus=f(d.target).closest(".mejs-container").length!=0})},findTracks:function(){var a=this,b=a.$media.find("track");a.tracks=[];b.each(function(c,e){e=f(e);a.tracks.push({srclang:e.attr("srclang")?e.attr("srclang").toLowerCase():"",src:e.attr("src"),kind:e.attr("kind"),label:e.attr("label")||"",entries:[],isLoaded:false})})},changeSkin:function(a){this.container[0].className="mejs-container "+a;this.setPlayerSize(this.width,this.height);this.setControlsSize()},play:function(){this.load();this.media.play()},pause:function(){try{this.media.pause()}catch(a){}},load:function(){this.isLoaded||this.media.load();this.isLoaded=true},setMuted:function(a){this.media.setMuted(a)},setCurrentTime:function(a){this.media.setCurrentTime(a)},getCurrentTime:function(){return this.media.currentTime},setVolume:function(a){this.media.setVolume(a)},getVolume:function(){return this.media.volume},setSrc:function(a){this.media.setSrc(a)},remove:function(){var a,b;for(a in this.options.features){b=this.options.features[a];if(this["clean"+b])try{this["clean"+b](this)}catch(c){}}if(this.isDynamic)this.$node.insertBefore(this.container);else{this.$media.prop("controls",true);this.$node.clone().show().insertBefore(this.container);this.$node.remove()}this.media.pluginType!=="native"&&this.media.remove();delete mejs.players[this.id];typeof this.container=="object"&&this.container.remove();this.globalUnbind();delete this.node.player}};(function(){function a(c,e){var d={d:[],w:[]};f.each((c||"").split(" "),function(g,k){var j=k+"."+e;if(j.indexOf(".")===0){d.d.push(j);d.w.push(j)}else
d[b.test(k)?"w":"d"].push(j)});d.d=d.d.join(" ");d.w=d.w.join(" ");return d}var b=/^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;mejs.MediaElementPlayer.prototype.globalBind=function(c,e,d){c=a(c,this.id);c.d&&f(document).bind(c.d,e,d);c.w&&f(window).bind(c.w,e,d)};mejs.MediaElementPlayer.prototype.globalUnbind=function(c,e){c=a(c,this.id);c.d&&f(document).unbind(c.d,e);c.w&&f(window).unbind(c.w,e)}})();if(typeof jQuery!="undefined")jQuery.fn.mediaelementplayer=function(a){a===false?this.each(function(){var b=jQuery(this).data("mediaelementplayer");b&&b.remove();jQuery(this).removeData("mediaelementplayer")}):this.each(function(){jQuery(this).data("mediaelementplayer",new mejs.MediaElementPlayer(this,a))});return this};f(document).ready(function(){f(".mejs-player").mediaelementplayer()});window.MediaElementPlayer=mejs.MediaElementPlayer})(mejs.$);(function(f){f.extend(mejs.MepDefaults,{playpauseText:mejs.i18n.t("Play/Pause")});f.extend(MediaElementPlayer.prototype,{buildplaypause:function(a,b,c,e){var d=f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="'+this.id+'" title="'+this.options.playpauseText+'" aria-label="'+this.options.playpauseText+'"></button></div>').appendTo(b).click(function(g){g.preventDefault();e.paused?e.play():e.pause();return false});e.addEventListener("play",function(){d.removeClass("mejs-play").addClass("mejs-pause")},false);e.addEventListener("playing",function(){d.removeClass("mejs-play").addClass("mejs-pause")},false);e.addEventListener("pause",function(){d.removeClass("mejs-pause").addClass("mejs-play")},false);e.addEventListener("paused",function(){d.removeClass("mejs-pause").addClass("mejs-play")},false)}})})(mejs.$);(function(f){f.extend(mejs.MepDefaults,{stopText:"Stop"});f.extend(MediaElementPlayer.prototype,{buildstop:function(a,b,c,e){f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="'+this.id+'" title="'+this.options.stopText+'" aria-label="'+this.options.stopText+'"></button></div>').appendTo(b).click(function(){e.paused||e.pause();if(e.currentTime>0){e.setCurrentTime(0);e.pause();b.find(".mejs-time-current").width("0px");b.find(".mejs-time-handle").css("left","0px");b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));c.find(".mejs-poster").show()}})}})})(mejs.$);(function(f){f.extend(MediaElementPlayer.prototype,{buildprogress:function(a,b,c,e){f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);b.find(".mejs-time-buffering").hide();var d=this,g=b.find(".mejs-time-total");c=b.find(".mejs-time-loaded");var k=b.find(".mejs-time-current"),j=b.find(".mejs-time-handle"),m=b.find(".mejs-time-float"),q=b.find(".mejs-time-float-current"),p=function(h){h=h.originalEvent.changedTouches?h.originalEvent.changedTouches[0].pageX:h.pageX;var l=g.offset(),r=g.outerWidth(true),n=0,o=n=0;if(e.duration){if(h<l.left)h=l.left;else if(h>r+l.left)h=r+l.left;o=h-l.left;n=o/r;n=n<=0.02?0:n*e.duration;t&&n!==e.currentTime&&e.setCurrentTime(n);if(!mejs.MediaFeatures.hasTouch){m.css("left",o);q.html(mejs.Utility.secondsToTimeCode(n));m.show()}}},t=false;g.bind("mousedown touchstart",function(h){if(h.which===1||h.which===0){t=true;p(h);d.globalBind("mousemove.dur touchmove.dur",function(l){p(l)});d.globalBind("mouseup.dur touchend.dur",function(){t=false;m.hide();d.globalUnbind(".dur")});return false}}).bind("mouseenter",function(){d.globalBind("mousemove.dur",function(h){p(h)});mejs.MediaFeatures.hasTouch||m.show()}).bind("mouseleave",function(){if(!t){d.globalUnbind(".dur");m.hide()}});e.addEventListener("progress",function(h){a.setProgressRail(h);a.setCurrentRail(h)},false);e.addEventListener("timeupdate",function(h){a.setProgressRail(h);a.setCurrentRail(h)},false);d.loaded=c;d.total=g;d.current=k;d.handle=j},setProgressRail:function(a){var b=a!=undefined?a.target:this.media,c=null;if(b&&b.buffered&&b.buffered.length>0&&b.buffered.end&&b.duration)c=b.buffered.end(0)/b.duration;else if(b&&b.bytesTotal!=undefined&&b.bytesTotal>0&&b.bufferedBytes!=undefined)c=b.bufferedBytes/b.bytesTotal;else if(a&&a.lengthComputable&&a.total!=0)c=a.loaded/a.total;if(c!==null){c=Math.min(1,Math.max(0,c));this.loaded&&this.total&&this.loaded.width(this.total.width()*c)}},setCurrentRail:function(){if(this.media.currentTime!=undefined&&this.media.duration)if(this.total&&this.handle){var a=Math.round(this.total.width()*this.media.currentTime/this.media.duration),b=a-Math.round(this.handle.outerWidth(true)/2);this.current.width(a);this.handle.css("left",b)}}})})(mejs.$);(function(f){f.extend(mejs.MepDefaults,{duration:-1,timeAndDurationSeparator:"<span> | </span>"});f.extend(MediaElementPlayer.prototype,{buildcurrent:function(a,b,c,e){f('<div class="mejs-time"><span class="mejs-currenttime">'+(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00")+"</span></div>").appendTo(b);this.currenttime=this.controls.find(".mejs-currenttime");e.addEventListener("timeupdate",function(){a.updateCurrent()},false)},buildduration:function(a,b,c,e){if(b.children().last().find(".mejs-currenttime").length>0)f(this.options.timeAndDurationSeparator+'<span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span>").appendTo(b.find(".mejs-time"));else{b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">'+(this.options.duration>0?mejs.Utility.secondsToTimeCode(this.options.duration,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25):(a.options.alwaysShowHours?"00:":"")+(a.options.showTimecodeFrameCount?"00:00:00":"00:00"))+"</span></div>").appendTo(b)}this.durationD=this.controls.find(".mejs-duration");e.addEventListener("timeupdate",function(){a.updateDuration()},false)},updateCurrent:function(){if(this.currenttime)this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime,this.options.alwaysShowHours||this.media.duration>3600,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))},updateDuration:function(){this.container.toggleClass("mejs-long-video",this.media.duration>3600);if(this.durationD&&(this.options.duration>0||this.media.duration))this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration>0?this.options.duration:this.media.duration,this.options.alwaysShowHours,this.options.showTimecodeFrameCount,this.options.framesPerSecond||25))}})})(mejs.$);(function(f){f.extend(mejs.MepDefaults,{muteText:mejs.i18n.t("Mute Toggle"),hideVolumeOnTouchDevices:true,audioVolume:"horizontal",videoVolume:"vertical"});f.extend(MediaElementPlayer.prototype,{buildvolume:function(a,b,c,e){if(!((mejs.MediaFeatures.isAndroid||mejs.MediaFeatures.isiOS)&&this.options.hideVolumeOnTouchDevices)){var d=this,g=d.isVideo?d.options.videoVolume:d.options.audioVolume,k=g=="horizontal"?f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+d.id+'" title="'+d.options.muteText+'" aria-label="'+d.options.muteText+'"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b):f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="'+d.id+'" title="'+d.options.muteText+'" aria-label="'+d.options.muteText+'"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),j=d.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),m=d.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),q=d.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),p=d.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),t=function(n,o){if(!j.is(":visible")&&typeof o=="undefined"){j.show();t(n,true);j.hide()}else{n=Math.max(0,n);n=Math.min(n,1);n==0?k.removeClass("mejs-mute").addClass("mejs-unmute"):k.removeClass("mejs-unmute").addClass("mejs-mute");if(g=="vertical"){var s=m.height(),u=m.position(),v=s-s*n;p.css("top",Math.round(u.top+v-p.height()/2));q.height(s-v);q.css("top",u.top+v)}else{s=m.width();u=m.position();s=s*n;p.css("left",Math.round(u.left+s-p.width()/2));q.width(Math.round(s))}}},h=function(n){var o=null,s=m.offset();if(g=="vertical"){o=m.height();parseInt(m.css("top").replace(/px/,""),10);o=(o-(n.pageY-s.top))/o;if(s.top==0||s.left==0)return}else{o=m.width();o=(n.pageX-s.left)/o}o=Math.max(0,o);o=Math.min(o,1);t(o);o==0?e.setMuted(true):e.setMuted(false);e.setVolume(o)},l=false,r=false;k.hover(function(){j.show();r=true},function(){r=false;!l&&g=="vertical"&&j.hide()});j.bind("mouseover",function(){r=true}).bind("mousedown",function(n){h(n);d.globalBind("mousemove.vol",function(o){h(o)});d.globalBind("mouseup.vol",function(){l=false;d.globalUnbind(".vol");!r&&g=="vertical"&&j.hide()});l=true;return false});k.find("button").click(function(){e.setMuted(!e.muted)});e.addEventListener("volumechange",function(){if(!l)if(e.muted){t(0);k.removeClass("mejs-mute").addClass("mejs-unmute")}else{t(e.volume);k.removeClass("mejs-unmute").addClass("mejs-mute")}},false);if(d.container.is(":visible")){t(a.options.startVolume);a.options.startVolume===0&&e.setMuted(true);e.pluginType==="native"&&e.setVolume(a.options.startVolume)}}}})})(mejs.$);(function(f){f.extend(mejs.MepDefaults,{usePluginFullScreen:true,newWindowCallback:function(){return""},fullscreenText:mejs.i18n.t("Fullscreen")});f.extend(MediaElementPlayer.prototype,{isFullScreen:false,isNativeFullScreen:false,isInIframe:false,buildfullscreen:function(a,b,c,e){if(a.isVideo){a.isInIframe=window.location!=window.parent.location;if(mejs.MediaFeatures.hasTrueNativeFullScreen){c=function(){if(a.isFullScreen)if(mejs.MediaFeatures.isFullScreen()){a.isNativeFullScreen=true;a.setControlsSize()}else{a.isNativeFullScreen=false;a.exitFullScreen()}};mejs.MediaFeatures.hasMozNativeFullScreen?a.globalBind(mejs.MediaFeatures.fullScreenEventName,c):a.container.bind(mejs.MediaFeatures.fullScreenEventName,c)}var d=this,g=f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="'+d.id+'" title="'+d.options.fullscreenText+'" aria-label="'+d.options.fullscreenText+'"></button></div>').appendTo(b);if(d.media.pluginType==="native"||!d.options.usePluginFullScreen&&!mejs.MediaFeatures.isFirefox)g.click(function(){mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||a.isFullScreen?a.exitFullScreen():a.enterFullScreen()});else{var k=null;if(function(){var h=document.createElement("x"),l=document.documentElement,r=window.getComputedStyle;if(!("pointerEvents"in h.style))return false;h.style.pointerEvents="auto";h.style.pointerEvents="x";l.appendChild(h);r=r&&r(h,"").pointerEvents==="auto";l.removeChild(h);return!!r}()&&!mejs.MediaFeatures.isOpera){var j=false,m=function(){if(j){for(var h in q)q[h].hide();g.css("pointer-events","");d.controls.css("pointer-events","");d.media.removeEventListener("click",d.clickToPlayPauseCallback);j=false}},q={};b=["top","left","right","bottom"];var p,t=function(){var h=g.offset().left-d.container.offset().left,l=g.offset().top-d.container.offset().top,r=g.outerWidth(true),n=g.outerHeight(true),o=d.container.width(),s=d.container.height();for(p in q)q[p].css({position:"absolute",top:0,left:0});q.top.width(o).height(l);q.left.width(h).height(n).css({top:l});q.right.width(o-h-r).height(n).css({top:l,left:h+r});q.bottom.width(o).height(s-n-l).css({top:l+n})};d.globalBind("resize",function(){t()});p=0;for(c=b.length;p<c;p++)q[b[p]]=f('<div class="mejs-fullscreen-hover" />').appendTo(d.container).mouseover(m).hide();g.on("mouseover",function(){if(!d.isFullScreen){var h=g.offset(),l=a.container.offset();e.positionFullscreenButton(h.left-l.left,h.top-l.top,false);g.css("pointer-events","none");d.controls.css("pointer-events","none");d.media.addEventListener("click",d.clickToPlayPauseCallback);for(p in q)q[p].show();t();j=true}});e.addEventListener("fullscreenchange",function(){d.isFullScreen=!d.isFullScreen;d.isFullScreen?d.media.removeEventListener("click",d.clickToPlayPauseCallback):d.media.addEventListener("click",d.clickToPlayPauseCallback);m()});d.globalBind("mousemove",function(h){if(j){var l=g.offset();if(h.pageY<l.top||h.pageY>l.top+g.outerHeight(true)||h.pageX<l.left||h.pageX>l.left+g.outerWidth(true)){g.css("pointer-events","");d.controls.css("pointer-events","");j=false}}})}else
g.on("mouseover",function(){if(k!==null){clearTimeout(k);delete k}var h=g.offset(),l=a.container.offset();e.positionFullscreenButton(h.left-l.left,h.top-l.top,true)}).on("mouseout",function(){if(k!==null){clearTimeout(k);delete k}k=setTimeout(function(){e.hideFullscreenButton()},1500)})}a.fullscreenBtn=g;d.globalBind("keydown",function(h){if((mejs.MediaFeatures.hasTrueNativeFullScreen&&mejs.MediaFeatures.isFullScreen()||d.isFullScreen)&&h.keyCode==27)a.exitFullScreen()})}},cleanfullscreen:function(a){a.exitFullScreen()},containerSizeTimeout:null,enterFullScreen:function(){var a=this;if(!(a.media.pluginType!=="native"&&(mejs.MediaFeatures.isFirefox||a.options.usePluginFullScreen))){f(document.documentElement).addClass("mejs-fullscreen");normalHeight=a.container.height();normalWidth=a.container.width();if(a.media.pluginType==="native")if(mejs.MediaFeatures.hasTrueNativeFullScreen){mejs.MediaFeatures.requestFullScreen(a.container[0]);a.isInIframe&&setTimeout(function c(){if(a.isNativeFullScreen){var e=(window.devicePixelRatio||1)*f(window).width(),d=screen.width;Math.abs(d-e)>d*0.0020?a.exitFullScreen():setTimeout(c,500)}},500)}else if(mejs.MediaFeatures.hasSemiNativeFullScreen){a.media.webkitEnterFullscreen();return}if(a.isInIframe){var b=a.options.newWindowCallback(this);if(b!=="")if(mejs.MediaFeatures.hasTrueNativeFullScreen)setTimeout(function(){if(!a.isNativeFullScreen){a.pause();window.open(b,a.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no")}},250);else{a.pause();window.open(b,a.id,"top=0,left=0,width="+screen.availWidth+",height="+screen.availHeight+",resizable=yes,scrollbars=no,status=no,toolbar=no");return}}a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");a.containerSizeTimeout=setTimeout(function(){a.container.css({width:"100%",height:"100%"});a.setControlsSize()},500);if(a.media.pluginType==="native")a.$media.width("100%").height("100%");else{a.container.find(".mejs-shim").width("100%").height("100%");a.media.setVideoSize(f(window).width(),f(window).height())}a.layers.children("div").width("100%").height("100%");a.fullscreenBtn&&a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");a.setControlsSize();a.isFullScreen=true}},exitFullScreen:function(){clearTimeout(this.containerSizeTimeout);if(this.media.pluginType!=="native"&&mejs.MediaFeatures.isFirefox)this.media.setFullscreen(false);else{if(mejs.MediaFeatures.hasTrueNativeFullScreen&&(mejs.MediaFeatures.isFullScreen()||this.isFullScreen))mejs.MediaFeatures.cancelFullScreen();f(document.documentElement).removeClass("mejs-fullscreen");this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);if(this.media.pluginType==="native")this.$media.width(normalWidth).height(normalHeight);else{this.container.find(".mejs-shim").width(normalWidth).height(normalHeight);this.media.setVideoSize(normalWidth,normalHeight)}this.layers.children("div").width(normalWidth).height(normalHeight);this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");this.setControlsSize();this.isFullScreen=false}}})})(mejs.$);(function(f){f.extend(mejs.MepDefaults,{startLanguage:"",tracksText:mejs.i18n.t("Captions/Subtitles"),hideCaptionsButtonWhenEmpty:true,toggleCaptionsButtonWhenOnlyOne:false,slidesSelector:""});f.extend(MediaElementPlayer.prototype,{hasChapters:false,buildtracks:function(a,b,c,e){if(a.tracks.length!=0){var d;if(this.domNode.textTracks)for(d=this.domNode.textTracks.length-1;d>=0;d--)this.domNode.textTracks[d].mode="hidden";a.chapters=f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();a.captions=f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();a.captionsText=a.captions.find(".mejs-captions-text");a.captionsButton=f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="'+this.id+'" title="'+this.options.tracksText+'" aria-label="'+this.options.tracksText+'"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="'+a.id+'_captions" id="'+a.id+'_captions_none" value="none" checked="checked" /><label for="'+a.id+'_captions_none">'+mejs.i18n.t("None")+"</label></li></ul></div></div>").appendTo(b);for(d=b=0;d<a.tracks.length;d++)a.tracks[d].kind=="subtitles"&&b++;this.options.toggleCaptionsButtonWhenOnlyOne&&b==1?a.captionsButton.on("click",function(){a.setTrack(a.selectedTrack==null?a.tracks[0].srclang:"none")}):a.captionsButton.hover(function(){f(this).find(".mejs-captions-selector").css("visibility","visible")},function(){f(this).find(".mejs-captions-selector").css("visibility","hidden")}).on("click","input[type=radio]",function(){lang=this.value;a.setTrack(lang)});a.options.alwaysShowControls?a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover"):a.container.bind("controlsshown",function(){a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")}).bind("controlshidden",function(){e.paused||a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")});a.trackToLoad=-1;a.selectedTrack=null;a.isLoadingTrack=false;for(d=0;d<a.tracks.length;d++)a.tracks[d].kind=="subtitles"&&a.addTrackButton(a.tracks[d].srclang,a.tracks[d].label);a.loadNextTrack();e.addEventListener("timeupdate",function(){a.displayCaptions()},false);if(a.options.slidesSelector!=""){a.slidesContainer=f(a.options.slidesSelector);e.addEventListener("timeupdate",function(){a.displaySlides()},false)}e.addEventListener("loadedmetadata",function(){a.displayChapters()},false);a.container.hover(function(){if(a.hasChapters){a.chapters.css("visibility","visible");a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())}},function(){a.hasChapters&&!e.paused&&a.chapters.fadeOut(200,function(){f(this).css("visibility","hidden");f(this).css("display","block")})});a.node.getAttribute("autoplay")!==null&&a.chapters.css("visibility","hidden")}},setTrack:function(a){var b;if(a=="none"){this.selectedTrack=null;this.captionsButton.removeClass("mejs-captions-enabled")}else
for(b=0;b<this.tracks.length;b++)if(this.tracks[b].srclang==a){this.selectedTrack==null&&this.captionsButton.addClass("mejs-captions-enabled");this.selectedTrack=this.tracks[b];this.captions.attr("lang",this.selectedTrack.srclang);this.displayCaptions();break}},loadNextTrack:function(){this.trackToLoad++;if(this.trackToLoad<this.tracks.length){this.isLoadingTrack=true;this.loadTrack(this.trackToLoad)}else{this.isLoadingTrack=false;this.checkForTracks()}},loadTrack:function(a){var b=this,c=b.tracks[a];f.ajax({url:c.src,dataType:"text",success:function(e){c.entries=typeof e=="string"&&/<tt\s+xml/ig.exec(e)?mejs.TrackFormatParser.dfxp.parse(e):mejs.TrackFormatParser.webvvt.parse(e);c.isLoaded=true;b.enableTrackButton(c.srclang,c.label);b.loadNextTrack();c.kind=="chapters"&&b.media.addEventListener("play",function(){b.media.duration>0&&b.displayChapters(c)},false);c.kind=="slides"&&b.setupSlides(c)},error:function(){b.loadNextTrack()}})},enableTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("input[value="+a+"]").prop("disabled",false).siblings("label").html(b);this.options.startLanguage==a&&f("#"+this.id+"_captions_"+a).click();this.adjustLanguageBox()},addTrackButton:function(a,b){if(b==="")b=mejs.language.codes[a]||a;this.captionsButton.find("ul").append(f('<li><input type="radio" name="'+this.id+'_captions" id="'+this.id+"_captions_"+a+'" value="'+a+'" disabled="disabled" /><label for="'+this.id+"_captions_"+a+'">'+b+" (loading)</label></li>"));this.adjustLanguageBox();this.container.find(".mejs-captions-translations option[value="+a+"]").remove()},adjustLanguageBox:function(){this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true)+this.captionsButton.find(".mejs-captions-translations").outerHeight(true))},checkForTracks:function(){var a=false;if(this.options.hideCaptionsButtonWhenEmpty){for(i=0;i<this.tracks.length;i++)if(this.tracks[i].kind=="subtitles"){a=true;break}if(!a){this.captionsButton.hide();this.setControlsSize()}}},displayCaptions:function(){if(typeof this.tracks!="undefined"){var a,b=this.selectedTrack;if(b!=null&&b.isLoaded)for(a=0;a<b.entries.times.length;a++)if(this.media.currentTime>=b.entries.times[a].start&&this.media.currentTime<=b.entries.times[a].stop){this.captionsText.html(b.entries.text[a]);this.captions.show().height(0);return}this.captions.hide()}},setupSlides:function(a){this.slides=a;this.slides.entries.imgs=[this.slides.entries.text.length];this.showSlide(0)},showSlide:function(a){if(!(typeof this.tracks=="undefined"||typeof this.slidesContainer=="undefined")){var b=this,c=b.slides.entries.text[a],e=b.slides.entries.imgs[a];if(typeof e=="undefined"||typeof e.fadeIn=="undefined")b.slides.entries.imgs[a]=e=f('<img src="'+c+'">').on("load",function(){e.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()});else!e.is(":visible")&&!e.is(":animated")&&e.fadeIn().siblings(":visible").fadeOut()}},displaySlides:function(){if(typeof this.slides!="undefined"){var a=this.slides,b;for(b=0;b<a.entries.times.length;b++)if(this.media.currentTime>=a.entries.times[b].start&&this.media.currentTime<=a.entries.times[b].stop){this.showSlide(b);break}}},displayChapters:function(){var a;for(a=0;a<this.tracks.length;a++)if(this.tracks[a].kind=="chapters"&&this.tracks[a].isLoaded){this.drawChapters(this.tracks[a]);this.hasChapters=true;break}},drawChapters:function(a){var b=this,c,e,d=e=0;b.chapters.empty();for(c=0;c<a.entries.times.length;c++){e=a.entries.times[c].stop-a.entries.times[c].start;e=Math.floor(e/b.media.duration*100);if(e+d>100||c==a.entries.times.length-1&&e+d<100)e=100-d;b.chapters.append(f('<div class="mejs-chapter" rel="'+a.entries.times[c].start+'" style="left: '+d.toString()+"%;width: "+e.toString()+'%;"><div class="mejs-chapter-block'+(c==a.entries.times.length-1?" mejs-chapter-block-last":"")+'"><span class="ch-title">'+a.entries.text[c]+'</span><span class="ch-time">'+mejs.Utility.secondsToTimeCode(a.entries.times[c].start)+"&ndash;"+mejs.Utility.secondsToTimeCode(a.entries.times[c].stop)+"</span></div></div>"));d+=e}b.chapters.find("div.mejs-chapter").click(function(){b.media.setCurrentTime(parseFloat(f(this).attr("rel")));b.media.paused&&b.media.play()});b.chapters.show()}});mejs.language={codes:{af:"Afrikaans",sq:"Albanian",ar:"Arabic",be:"Belarusian",bg:"Bulgarian",ca:"Catalan",zh:"Chinese","zh-cn":"Chinese Simplified","zh-tw":"Chinese Traditional",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",et:"Estonian",tl:"Filipino",fi:"Finnish",fr:"French",gl:"Galician",de:"German",el:"Greek",ht:"Haitian Creole",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",ga:"Irish",it:"Italian",ja:"Japanese",ko:"Korean",lv:"Latvian",lt:"Lithuanian",mk:"Macedonian",ms:"Malay",mt:"Maltese",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",tl:"Tagalog",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese",cy:"Welsh",yi:"Yiddish"}};mejs.TrackFormatParser={webvvt:{pattern_identifier:/^([a-zA-z]+-)?[0-9]+$/,pattern_timecode:/^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,parse:function(a){var b=0;a=mejs.TrackFormatParser.split2(a,/\r?\n/);for(var c={text:[],times:[]},e,d;b<a.length;b++)if(this.pattern_identifier.exec(a[b])){b++;if((e=this.pattern_timecode.exec(a[b]))&&b<a.length){b++;d=a[b];for(b++;a[b]!==""&&b<a.length;){d=d+"\n"+a[b];b++}d=f.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>");c.text.push(d);c.times.push({start:mejs.Utility.convertSMPTEtoSeconds(e[1])==0?0.2:mejs.Utility.convertSMPTEtoSeconds(e[1]),stop:mejs.Utility.convertSMPTEtoSeconds(e[3]),settings:e[5]})}}return c}},dfxp:{parse:function(a){a=f(a).filter("tt");var b=0;b=a.children("div").eq(0);var c=b.find("p");b=a.find("#"+b.attr("style"));var e,d;a={text:[],times:[]};if(b.length){d=b.removeAttr("id").get(0).attributes;if(d.length){e={};for(b=0;b<d.length;b++)e[d[b].name.split(":")[1]]=d[b].value}}for(b=0;b<c.length;b++){var g;d={start:null,stop:null,style:null};if(c.eq(b).attr("begin"))d.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));if(!d.start&&c.eq(b-1).attr("end"))d.start=mejs.Utility.convertSMPTEtoSeconds(c.eq(b-1).attr("end"));if(c.eq(b).attr("end"))d.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));if(!d.stop&&c.eq(b+1).attr("begin"))d.stop=mejs.Utility.convertSMPTEtoSeconds(c.eq(b+1).attr("begin"));if(e){g="";for(var k in e)g+=k+":"+e[k]+";"}if(g)d.style=g;if(d.start==0)d.start=0.2;a.times.push(d);d=f.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,"<a href='$1' target='_blank'>$1</a>");a.text.push(d);if(a.times.start==0)a.times.start=2}return a}},split2:function(a,b){return a.split(b)}};if("x\n\ny".split(/\n/gi).length!=3)mejs.TrackFormatParser.split2=function(a,b){var c=[],e="",d;for(d=0;d<a.length;d++){e+=a.substring(d,d+1);if(b.test(e)){c.push(e.replace(b,""));e=""}}c.push(e);return c}})(mejs.$);(function(f){f.extend(mejs.MepDefaults,{contextMenuItems:[{render:function(a){if(typeof a.enterFullScreen=="undefined")return null;return a.isFullScreen?mejs.i18n.t("Turn off Fullscreen"):mejs.i18n.t("Go Fullscreen")},click:function(a){a.isFullScreen?a.exitFullScreen():a.enterFullScreen()}},{render:function(a){return a.media.muted?mejs.i18n.t("Unmute"):mejs.i18n.t("Mute")},click:function(a){a.media.muted?a.setMuted(false):a.setMuted(true)}},{isSeparator:true},{render:function(){return mejs.i18n.t("Download Video")},click:function(a){window.location.href=a.media.currentSrc}}]});f.extend(MediaElementPlayer.prototype,{buildcontextmenu:function(a){a.contextMenu=f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();a.container.bind("contextmenu",function(b){if(a.isContextMenuEnabled){b.preventDefault();a.renderContextMenu(b.clientX-1,b.clientY-1);return false}});a.container.bind("click",function(){a.contextMenu.hide()});a.contextMenu.bind("mouseleave",function(){a.startContextMenuTimer()})},cleancontextmenu:function(a){a.contextMenu.remove()},isContextMenuEnabled:true,enableContextMenu:function(){this.isContextMenuEnabled=true},disableContextMenu:function(){this.isContextMenuEnabled=false},contextMenuTimeout:null,startContextMenuTimer:function(){var a=this;a.killContextMenuTimer();a.contextMenuTimer=setTimeout(function(){a.hideContextMenu();a.killContextMenuTimer()},750)},killContextMenuTimer:function(){var a=this.contextMenuTimer;if(a!=null){clearTimeout(a);delete a}},hideContextMenu:function(){this.contextMenu.hide()},renderContextMenu:function(a,b){for(var c=this,e="",d=c.options.contextMenuItems,g=0,k=d.length;g<k;g++)if(d[g].isSeparator)e+='<div class="mejs-contextmenu-separator"></div>';else{var j=d[g].render(c);if(j!=null)e+='<div class="mejs-contextmenu-item" data-itemindex="'+g+'" id="element-'+Math.random()*1E6+'">'+j+"</div>"}c.contextMenu.empty().append(f(e)).css({top:b,left:a}).show();c.contextMenu.find(".mejs-contextmenu-item").each(function(){var m=f(this),q=parseInt(m.data("itemindex"),10),p=c.options.contextMenuItems[q];typeof p.show!="undefined"&&p.show(m,c);m.click(function(){typeof p.click!="undefined"&&p.click(c);c.contextMenu.hide()})});setTimeout(function(){c.killControlsTimer("rev3")},100)}})})(mejs.$);(function(f){f.extend(mejs.MepDefaults,{postrollCloseText:mejs.i18n.t("Close")});f.extend(MediaElementPlayer.prototype,{buildpostroll:function(a,b,c){var e=this.container.find('link[rel="postroll"]').attr("href");if(typeof e!=="undefined"){a.postroll=f('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">'+this.options.postrollCloseText+'</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();this.media.addEventListener("ended",function(){f.ajax({dataType:"html",url:e,success:function(d){c.find(".mejs-postroll-layer-content").html(d)}});a.postroll.show()},false)}}})})(mejs.$);
jQuery(document).ready(function ($) {
    $('#progression-toggle-tada').click(function () {
        $(".progression-playlist-height").toggleClass('active-progression');
    });
});
(function ($) {
    $.extend(mejs.MepDefaults, {
        loopText: 'Repeat On/Off',
        shuffleText: 'Shuffle On/Off',
        nextText: 'Next Track',
        prevText: 'Previous Track',
        playlistText: 'Show/Hide Playlist'
    });
    $.extend(MediaElementPlayer.prototype, {
        buildloop: function (player, controls, layers, media) {
            var t = this;
            var loop = $('<div class="mejs-button mejs-loop-button ' + ((player.options.loop) ? 'mejs-loop-on' : 'mejs-loop-off') + '">' + '<button type="button" aria-controls="' + player.id + '" title="' + player.options.loopText + '"></button>' + '</div>').appendTo(controls).click(function (e) {
                player.options.loop = !player.options.loop;
                $(media).trigger('mep-looptoggle', [player.options.loop]);
                if (player.options.loop) {
                    loop.removeClass('mejs-loop-off').addClass('mejs-loop-on');
                } else {
                    loop.removeClass('mejs-loop-on').addClass('mejs-loop-off');
                }
            });
            t.loopToggle = t.controls.find('.mejs-loop-button');
        }, loopToggleClick: function () {
            var t = this;
            t.loopToggle.trigger('click');
        }, buildshuffle: function (player, controls, layers, media) {
            var t = this;
            var shuffle = $('<div class="mejs-button mejs-shuffle-button ' + ((player.options.shuffle) ? 'mejs-shuffle-on' : 'mejs-shuffle-off') + '">' + '<button type="button" aria-controls="' + player.id + '" title="' + player.options.shuffleText + '"></button>' + '</div>').appendTo(controls).click(function (e) {
                player.options.shuffle = !player.options.shuffle;
                $(media).trigger('mep-shuffletoggle', [player.options.shuffle]);
                if (player.options.shuffle) {
                    shuffle.removeClass('mejs-shuffle-off').addClass('mejs-shuffle-on');
                } else {
                    shuffle.removeClass('mejs-shuffle-on').addClass('mejs-shuffle-off');
                }
            });
            t.shuffleToggle = t.controls.find('.mejs-shuffle-button');
        }, shuffleToggleClick: function () {
            var t = this;
            t.shuffleToggle.trigger('click');
        }, buildprevtrack: function (player, controls, layers, media) {
            var t = this;
            var prevTrack = $('<div class="mejs-button mejs-prevtrack-button mejs-prevtrack">' + '<button type="button" aria-controls="' + player.id + '" title="' + player.options.prevText + '"></button>' + '</div>').appendTo(controls).click(function (e) {
                $(media).trigger('mep-playprevtrack');
                player.playPrevTrack();
            });
            t.prevTrack = t.controls.find('.mejs-prevtrack-button');
        }, prevTrackClick: function () {
            var t = this;
            t.prevTrack.trigger('click');
        }, buildnexttrack: function (player, controls, layers, media) {
            var t = this;
            var nextTrack = $('<div class="mejs-button mejs-nexttrack-button mejs-nexttrack">' + '<button type="button" aria-controls="' + player.id + '" title="' + player.options.nextText + '"></button>' + '</div>').appendTo(controls).click(function (e) {
                $(media).trigger('mep-playnexttrack');
                player.playNextTrack();
            });
            t.nextTrack = t.controls.find('.mejs-nexttrack-button');
        }, nextTrackClick: function () {
            var t = this;
            t.nextTrack.trigger('click');
        }, buildplaylist: function (player, controls, layers, media) {
            var t = this;
            var playlistToggle = $('<div class="mejs-button mejs-playlist-button ' + ((player.options.playlist) ? 'mejs-hide-playlist' : 'mejs-show-playlist') + '">' + '<button type="button" aria-controls="' + player.id + '" title="' + player.options.playlistText + '"></button>' + '</div>').appendTo(controls).click(function (e) {
                player.options.playlist = !player.options.playlist;
                $(".progression-playlist-height").toggleClass('active-progression');
                $(media).trigger('mep-playlisttoggle', [player.options.playlist]);
                if (player.options.playlist) {
                    layers.children('.mejs-playlist').show();
                    playlistToggle.removeClass('mejs-show-playlist').addClass('mejs-hide-playlist');
                } else {
                    layers.children('.mejs-playlist').hide();
                    playlistToggle.removeClass('mejs-hide-playlist').addClass('mejs-show-playlist');
                }
            });
            t.playlistToggle = t.controls.find('.mejs-playlist-button');
        }, playlistToggleClick: function () {
            var t = this;
            t.playlistToggle.trigger('click');
        }, buildplaylistfeature: function (player, controls, layers, media) {
            var playlist = $('<div class="mejs-playlist mejs-layer">' + '<ul class="mejs"></ul>' + '</div>').appendTo(layers);
            if (!player.options.playlist) {
                playlist.hide();
            }
            if (player.options.playlistposition == 'bottom') {
                playlist.css('top', player.options.audioHeight + 'px');
            } else {
                playlist.css('bottom', player.options.audioHeight + 'px');
            }
            var getTrackName = function (trackUrl) {
                var trackUrlParts = trackUrl.split("/");
                if (trackUrlParts.length > 0) {
                    return decodeURIComponent(trackUrlParts[trackUrlParts.length - 1]);
                } else {
                    return '';
                }
            };
            var tracks = [];
            $('#' + player.id).find('.mejs-mediaelement source').each(function (index, element) {
                if ($.trim(this.src) != '') {
                    var track = {};
                    track.source = $.trim(this.src);
                    if ($.trim(this.title) != '') {
                        track.name = $.trim(this.title);
                    } else {
                        track.name = getTrackName(track.source);
                    }
                    tracks.push(track);
                }
            });
            for (var track in tracks) {
                layers.find('.mejs-playlist > ul').append('<li data-url="' + tracks[track].source + '" title="' + tracks[track].name + '">' + tracks[track].name + '</li>');
            }
            layers.find('li:first').addClass('current played');
            layers.find('.mejs-playlist > ul li').click(function (e) {
                if (!$(this).hasClass('current')) {
                    $(this).addClass('played');
                    player.playTrack($(this));
                } else {
                }
            });
            media.addEventListener('ended', function (e) {
                player.playNextTrack();
            }, false);
        }, playNextTrack: function () {
            var t = this;
            var tracks = t.layers.find('.mejs-playlist > ul > li');
            var current = tracks.filter('.current');
            var notplayed = tracks.not('.played');
            if (notplayed.length < 1) {
                current.removeClass('played').siblings().removeClass('played');
                notplayed = tracks.not('.current');
            }
            if (t.options.shuffle) {
                var random = Math.floor(Math.random() * notplayed.length);
                var nxt = notplayed.eq(random);
            } else {
                var nxt = current.next();
                if (nxt.length < 1 && t.options.loop) {
                    nxt = current.siblings().first();
                }
            }
            if (nxt.length == 1) {
                nxt.addClass('played');
                t.playTrack(nxt);
            }
        }, playPrevTrack: function () {
            var t = this;
            var tracks = t.layers.find('.mejs-playlist > ul > li');
            var current = tracks.filter('.current');
            var played = tracks.filter('.played').not('.current');
            if (played.length < 1) {
                current.removeClass('played');
                played = tracks.not('.current');
            }
            if (t.options.shuffle) {
                var random = Math.floor(Math.random() * played.length);
                var prev = played.eq(random);
            } else {
                var prev = current.prev();
                if (prev.length < 1 && t.options.loop) {
                    prev = current.siblings().last();
                }
            }
            if (prev.length == 1) {
                current.removeClass('played');
                t.playTrack(prev);
            }
        }, playTrack: function (track) {
            var t = this;
            t.pause();
            t.setSrc(track.attr('data-url'));
            t.load();
            t.play();
            track.addClass('current').siblings().removeClass('current');
        }, playTrackURL: function (url) {
            var t = this;
            var tracks = t.layers.find('.mejs-playlist > ul > li');
            var track = tracks.filter('[data-url="' + url + '"]');
            t.playTrack(track);
        }
    });
})(mejs.$);