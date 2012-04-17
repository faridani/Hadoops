/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
(function($){$.fn.jqm=function(o){var p={overlay:50,overlayClass:'jqmOverlay',closeClass:'jqmClose',trigger:'.jqModal',ajax:F,ajaxText:'',target:F,modal:true,toTop:F,onShow:F,onHide:F,onLoad:F};return this.each(function(){if(this._jqm)return H[this._jqm].c=$.extend({},H[this._jqm].c,o);s++;this._jqm=s;H[s]={c:$.extend(p,$.jqm.params,o),a:F,w:$(this).addClass('jqmID'+s),s:s};if(p.trigger)$(this).jqmAddTrigger(p.trigger);});};$.fn.jqmAddClose=function(e){return hs(this,e,'jqmHide');};$.fn.jqmAddTrigger=function(e){return hs(this,e,'jqmShow');};$.fn.jqmShow=function(t){return this.each(function(){t=t||window.event;$.jqm.open(this._jqm,t);});};$.fn.jqmHide=function(t){return this.each(function(){t=t||window.event;$.jqm.close(this._jqm,t)});};$.jqm={hash:{},open:function(s,t){var h=H[s],c=h.c,cc='.'+c.closeClass,z=(parseInt(h.w.css('z-index'))),z=(z>0)?z:3000,o=$('<div></div>').css({height:'100%',width:'100%',position:'fixed',left:0,top:0,'z-index':z-1,opacity:c.overlay/100});if(h.a)return F;h.t=t;h.a=true;h.w.css('z-index',z);if(c.modal){if(!A[0])L('bind');A.push(s);}
else if(c.overlay>0)h.w.jqmAddClose(o);else o=F;h.o=(o)?o.addClass(c.overlayClass).prependTo('body'):F;if(ie6){$('html,body').css({height:'100%',width:'100%'});if(o){o=o.css({position:'absolute'})[0];for(var y in{Top:1,Left:1})o.style.setExpression(y.toLowerCase(),"(_=(document.documentElement.scroll"+y+" || document.body.scroll"+y+"))+'px'");}}
if(c.ajax){var r=c.target||h.w,u=c.ajax,r=(typeof r=='string')?$(r,h.w):$(r),u=(u.substr(0,1)=='@')?$(t).attr(u.substring(1)):u;r.html(c.ajaxText).load(u,function(){if(c.onLoad)c.onLoad.call(this,h);if(cc)h.w.jqmAddClose($(cc,h.w));e(h);});}
else if(cc)h.w.jqmAddClose($(cc,h.w));if(c.toTop&&h.o)h.w.before('<span id="jqmP'+h.w[0]._jqm+'"></span>').insertAfter(h.o);(c.onShow)?c.onShow(h):h.w.show();e(h);return F;},close:function(s){var h=H[s];if(!h.a)return F;h.a=F;if(A[0]){A.pop();if(!A[0])L('unbind');}
if(h.c.toTop&&h.o)$('#jqmP'+h.w[0]._jqm).after(h.w).remove();if(h.c.onHide)h.c.onHide(h);else{h.w.hide();if(h.o)h.o.remove();}
return F;},params:{}};var s=0,H=$.jqm.hash,A=[],ie6=$.browser.msie&&($.browser.version=="6.0"),F=false,i=$('<iframe src="javascript:false;document.write(\'\');" class="jqm"></iframe>').css({opacity:0}),e=function(h){if(ie6)if(h.o)h.o.html('<p style="width:100%;height:100%"/>').prepend(i);else if(!$('iframe.jqm',h.w)[0])h.w.prepend(i);f(h);},f=function(h){try{$(':input:visible',h.w)[0].focus();}catch(_){}},L=function(t){$()[t]("keypress",m)[t]("keydown",m)[t]("mousedown",m);},m=function(e){var h=H[A[A.length-1]],r=(!$(e.target).parents('.jqmID'+h.s)[0]);if(r)f(h);return!r;},hs=function(w,t,c){return w.each(function(){var s=this._jqm;$(t).each(function(){if(!this[c]){this[c]=[];$(this).click(function(){for(var i in{jqmShow:1,jqmHide:1})for(var s in this[i])if(H[this[i][s]])H[this[i][s]].w[i](this);return F;});}
this[c].push(s);});});};})(jQuery);
﻿/*!
 * jQuery blockUI plugin
 * Version 2.33 (29-MAR-2010)
 * @requires jQuery v1.2.3 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2008 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

;(function($) {

if (/1\.(0|1|2)\.(0|1|2)/.test($.fn.jquery) || /^1.1/.test($.fn.jquery)) {
	alert('blockUI requires jQuery v1.2.3 or later!  You are using v' + $.fn.jquery);
	return;
}

$.fn._fadeIn = $.fn.fadeIn;

var noOp = function() {};

// this bit is to ensure we don't call setExpression when we shouldn't (with extra muscle to handle
// retarded userAgent strings on Vista)
var mode = document.documentMode || 0;
var setExpr = $.browser.msie && (($.browser.version < 8 && !mode) || mode < 8);
var ie6 = $.browser.msie && /MSIE 6.0/.test(navigator.userAgent) && !mode;

// global $ methods for blocking/unblocking the entire page
$.blockUI   = function(opts) { install(window, opts); };
$.unblockUI = function(opts) { remove(window, opts); };

// convenience method for quick growl-like notifications  (http://www.google.com/search?q=growl)
$.growlUI = function(title, message, timeout, onClose) {
	var $m = $('<div class="growlUI"></div>');
	if (title) $m.append('<h1>'+title+'</h1>');
	if (message) $m.append('<h2>'+message+'</h2>');
	if (timeout == undefined) timeout = 3000;
	$.blockUI({
		message: $m, fadeIn: 700, fadeOut: 1000, centerY: false,
		timeout: timeout, showOverlay: false,
		onUnblock: onClose, 
		css: $.blockUI.defaults.growlCSS
	});
};

// plugin method for blocking element content
$.fn.block = function(opts) {
	return this.unblock({ fadeOut: 0 }).each(function() {
		if ($.css(this,'position') == 'static')
			this.style.position = 'relative';
		if ($.browser.msie)
			this.style.zoom = 1; // force 'hasLayout'
		install(this, opts);
	});
};

// plugin method for unblocking element content
$.fn.unblock = function(opts) {
	return this.each(function() {
		remove(this, opts);
	});
};

$.blockUI.version = 2.33; // 2nd generation blocking at no extra cost!

// override these in your code to change the default behavior and style
$.blockUI.defaults = {
	// message displayed when blocking (use null for no message)
	message:  '<h1>Please wait...</h1>',

	title: null,	  // title string; only used when theme == true
	draggable: true,  // only used when theme == true (requires jquery-ui.js to be loaded)
	
	theme: false, // set to true to use with jQuery UI themes
	
	// styles for the message when blocking; if you wish to disable
	// these and use an external stylesheet then do this in your code:
	// $.blockUI.defaults.css = {};
	css: {
		padding:	0,
		margin:		0,
		width:		'30%',
		top:		'40%',
		left:		'35%',
		textAlign:	'center',
		color:		'#000',
		border:		'3px solid #aaa',
		backgroundColor:'#fff',
		cursor:		'wait'
	},
	
	// minimal style set used when themes are used
	themedCSS: {
		width:	'30%',
		top:	'40%',
		left:	'35%'
	},

	// styles for the overlay
	overlayCSS:  {
		background: '#fff url(/images/dashboard/common/spinner_blue.gif) center center no-repeat',
		opacity:	  	 0.8,
		cursor:		  	 'wait'
	},

	// styles applied when using $.growlUI
	growlCSS: {
		width:  	'350px',
		top:		'10px',
		left:   	'',
		right:  	'10px',
		border: 	'none',
		padding:	'5px',
		opacity:	0.6,
		cursor: 	'default',
		color:		'#fff',
		backgroundColor: '#000',
		'-webkit-border-radius': '10px',
		'-moz-border-radius':	 '10px',
		'border-radius': 		 '10px'
	},
	
	// IE issues: 'about:blank' fails on HTTPS and javascript:false is s-l-o-w
	// (hat tip to Jorge H. N. de Vasconcelos)
	iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank',

	// force usage of iframe in non-IE browsers (handy for blocking applets)
	forceIframe: false,

	// z-index for the blocking overlay
	baseZ: 1000,

	// set these to true to have the message automatically centered
	centerX: true, // <-- only effects element blocking (page block controlled via css above)
	centerY: true,

	// allow body element to be stetched in ie6; this makes blocking look better
	// on "short" pages.  disable if you wish to prevent changes to the body height
	allowBodyStretch: true,

	// enable if you want key and mouse events to be disabled for content that is blocked
	bindEvents: true,

	// be default blockUI will supress tab navigation from leaving blocking content
	// (if bindEvents is true)
	constrainTabKey: true,

	// fadeIn time in millis; set to 0 to disable fadeIn on block
	fadeIn:  100,

	// fadeOut time in millis; set to 0 to disable fadeOut on unblock
	fadeOut:  100,

	// time in millis to wait before auto-unblocking; set to 0 to disable auto-unblock
	timeout: 0,

	// disable if you don't want to show the overlay
	showOverlay: true,

	// if true, focus will be placed in the first available input field when
	// page blocking
	focusInput: true,

	// suppresses the use of overlay styles on FF/Linux (due to performance issues with opacity)
	applyPlatformOpacityRules: true,
	
	// callback method invoked when fadeIn has completed and blocking message is visible
	onBlock: null,

	// callback method invoked when unblocking has completed; the callback is
	// passed the element that has been unblocked (which is the window object for page
	// blocks) and the options that were passed to the unblock call:
	//	 onUnblock(element, options)
	onUnblock: null,

	// don't ask; if you really must know: http://groups.google.com/group/jquery-en/browse_thread/thread/36640a8730503595/2f6a79a77a78e493#2f6a79a77a78e493
	quirksmodeOffsetHack: 4
};

// private data and functions follow...

var pageBlock = null;
var pageBlockEls = [];

function install(el, opts) {
	var full = (el == window);
	var msg = opts && opts.message !== undefined ? opts.message : undefined;
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	opts.overlayCSS = $.extend({}, $.blockUI.defaults.overlayCSS, opts.overlayCSS || {});
	var css = $.extend({}, $.blockUI.defaults.css, opts.css || {});
	var themedCSS = $.extend({}, $.blockUI.defaults.themedCSS, opts.themedCSS || {});
	msg = msg === undefined ? opts.message : msg;

	// remove the current block (if there is one)
	if (full && pageBlock)
		remove(window, {fadeOut:0});

	// if an existing element is being used as the blocking content then we capture
	// its current place in the DOM (and current display style) so we can restore
	// it when we unblock
	if (msg && typeof msg != 'string' && (msg.parentNode || msg.jquery)) {
		var node = msg.jquery ? msg[0] : msg;
		var data = {};
		$(el).data('blockUI.history', data);
		data.el = node;
		data.parent = node.parentNode;
		data.display = node.style.display;
		data.position = node.style.position;
		if (data.parent)
			data.parent.removeChild(node);
	}

	var z = opts.baseZ;

	// blockUI uses 3 layers for blocking, for simplicity they are all used on every platform;
	// layer1 is the iframe layer which is used to supress bleed through of underlying content
	// layer2 is the overlay layer which has opacity and a wait cursor (by default)
	// layer3 is the message content that is displayed while blocking

	var lyr1 = ($.browser.msie || opts.forceIframe) 
		? $('<iframe class="blockUI" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+opts.iframeSrc+'"></iframe>')
		: $('<div class="blockUI" style="display:none"></div>');
	var lyr2 = $('<div class="blockUI blockOverlay" style="z-index:'+ (z++) +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');
	
	var lyr3, s;
	if (opts.theme && full) {
		s = '<div class="blockUI blockMsg blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+z+';display:none;position:fixed">' +
				'<div class="ui-widget-header ui-dialog-titlebar blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
				'<div class="ui-widget-content ui-dialog-content"></div>' +
			'</div>';
	}
	else if (opts.theme) {
		s = '<div class="blockUI blockMsg blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+z+';display:none;position:absolute">' +
				'<div class="ui-widget-header ui-dialog-titlebar blockTitle">'+(opts.title || '&nbsp;')+'</div>' +
				'<div class="ui-widget-content ui-dialog-content"></div>' +
			'</div>';
	}
	else if (full) {
		s = '<div class="blockUI blockMsg blockPage" style="z-index:'+z+';display:none;position:fixed"></div>';
	}			
	else {
		s = '<div class="blockUI blockMsg blockElement" style="z-index:'+z+';display:none;position:absolute"></div>';
	}
	lyr3 = $(s);

	// if we have a message, style it
	if (msg) {
		if (opts.theme) {
			lyr3.css(themedCSS);
			lyr3.addClass('ui-widget-content');
		}
		else 
			lyr3.css(css);
	}

	// style the overlay
	if (!opts.applyPlatformOpacityRules || !($.browser.mozilla && /Linux/.test(navigator.platform)))
		lyr2.css(opts.overlayCSS);
	lyr2.css('position', full ? 'fixed' : 'absolute');

	// make iframe layer transparent in IE
	if ($.browser.msie || opts.forceIframe)
		lyr1.css('opacity',0.0);

	//$([lyr1[0],lyr2[0],lyr3[0]]).appendTo(full ? 'body' : el);
	var layers = [lyr1,lyr2,lyr3], $par = full ? $('body') : $(el);
	$.each(layers, function() {
		this.appendTo($par);
	});
	
	if (opts.theme && opts.draggable && $.fn.draggable) {
		lyr3.draggable({
			handle: '.ui-dialog-titlebar',
			cancel: 'li'
		});
	}

	// ie7 must use absolute positioning in quirks mode and to account for activex issues (when scrolling)
	var expr = setExpr && (!$.boxModel || $('object,embed', full ? null : el).length > 0);
	if (ie6 || expr) {
		// give body 100% height
		if (full && opts.allowBodyStretch && $.boxModel)
			$('html,body').css('height','100%');

		// fix ie6 issue when blocked element has a border width
		if ((ie6 || !$.boxModel) && !full) {
			var t = sz(el,'borderTopWidth'), l = sz(el,'borderLeftWidth');
			var fixT = t ? '(0 - '+t+')' : 0;
			var fixL = l ? '(0 - '+l+')' : 0;
		}

		// simulate fixed position
		$.each([lyr1,lyr2,lyr3], function(i,o) {
			var s = o[0].style;
			s.position = 'absolute';
			if (i < 2) {
				full ? s.setExpression('height','Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.boxModel?0:'+opts.quirksmodeOffsetHack+') + "px"')
					 : s.setExpression('height','this.parentNode.offsetHeight + "px"');
				full ? s.setExpression('width','jQuery.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"')
					 : s.setExpression('width','this.parentNode.offsetWidth + "px"');
				if (fixL) s.setExpression('left', fixL);
				if (fixT) s.setExpression('top', fixT);
			}
			else if (opts.centerY) {
				if (full) s.setExpression('top','(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"');
				s.marginTop = 0;
			}
			else if (!opts.centerY && full) {
				var top = (opts.css && opts.css.top) ? parseInt(opts.css.top) : 0;
				var expression = '((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + '+top+') + "px"';
				s.setExpression('top',expression);
			}
		});
	}

	// show the message
	if (msg) {
		if (opts.theme)
			lyr3.find('.ui-widget-content').append(msg);
		else
			lyr3.append(msg);
		if (msg.jquery || msg.nodeType)
			$(msg).show();
	}

	if (($.browser.msie || opts.forceIframe) && opts.showOverlay)
		lyr1.show(); // opacity is zero
	if (opts.fadeIn) {
		var cb = opts.onBlock ? opts.onBlock : noOp;
		var cb1 = (opts.showOverlay && !msg) ? cb : noOp;
		var cb2 = msg ? cb : noOp;
		if (opts.showOverlay)
			lyr2._fadeIn(opts.fadeIn, cb1);
		if (msg)
			lyr3._fadeIn(opts.fadeIn, cb2);
	}
	else {
		if (opts.showOverlay)
			lyr2.show();
		if (msg)
			lyr3.show();
		if (opts.onBlock)
			opts.onBlock();
	}

	// bind key and mouse events
	bind(1, el, opts);

	if (full) {
		pageBlock = lyr3[0];
		pageBlockEls = $(':input:enabled:visible',pageBlock);
		if (opts.focusInput)
			setTimeout(focus, 20);
	}
	else
		center(lyr3[0], opts.centerX, opts.centerY);

	if (opts.timeout) {
		// auto-unblock
		var to = setTimeout(function() {
			full ? $.unblockUI(opts) : $(el).unblock(opts);
		}, opts.timeout);
		$(el).data('blockUI.timeout', to);
	}
};

// remove the block
function remove(el, opts) {
	var full = (el == window);
	var $el = $(el);
	var data = $el.data('blockUI.history');
	var to = $el.data('blockUI.timeout');
	if (to) {
		clearTimeout(to);
		$el.removeData('blockUI.timeout');
	}
	opts = $.extend({}, $.blockUI.defaults, opts || {});
	bind(0, el, opts); // unbind events
	
	var els;
	if (full) // crazy selector to handle odd field errors in ie6/7
		els = $('body').children().filter('.blockUI').add('body > .blockUI');
	else
		els = $('.blockUI', el);

	if (full)
		pageBlock = pageBlockEls = null;

	if (opts.fadeOut) {
		els.fadeOut(opts.fadeOut);
		setTimeout(function() { reset(els,data,opts,el); }, opts.fadeOut);
	}
	else
		reset(els, data, opts, el);
};

// move blocking element back into the DOM where it started
function reset(els,data,opts,el) {
	els.each(function(i,o) {
		// remove via DOM calls so we don't lose event handlers
		if (this.parentNode)
			this.parentNode.removeChild(this);
	});

	if (data && data.el) {
		data.el.style.display = data.display;
		data.el.style.position = data.position;
		if (data.parent)
			data.parent.appendChild(data.el);
		$(el).removeData('blockUI.history');
	}

	if (typeof opts.onUnblock == 'function')
		opts.onUnblock(el,opts);
};

// bind/unbind the handler
function bind(b, el, opts) {
	var full = el == window, $el = $(el);

	// don't bother unbinding if there is nothing to unbind
	if (!b && (full && !pageBlock || !full && !$el.data('blockUI.isBlocked')))
		return;
	if (!full)
		$el.data('blockUI.isBlocked', b);

	// don't bind events when overlay is not in use or if bindEvents is false
	if (!opts.bindEvents || (b && !opts.showOverlay)) 
		return;

	// bind anchors and inputs for mouse and key events
	var events = 'mousedown mouseup keydown keypress';
	b ? $(document).bind(events, opts, handler) : $(document).unbind(events, handler);

// former impl...
//	   var $e = $('a,:input');
//	   b ? $e.bind(events, opts, handler) : $e.unbind(events, handler);
};

// event handler to suppress keyboard/mouse events when blocking
function handler(e) {
	// allow tab navigation (conditionally)
	if (e.keyCode && e.keyCode == 9) {
		if (pageBlock && e.data.constrainTabKey) {
			var els = pageBlockEls;
			var fwd = !e.shiftKey && e.target == els[els.length-1];
			var back = e.shiftKey && e.target == els[0];
			if (fwd || back) {
				setTimeout(function(){focus(back)},10);
				return false;
			}
		}
	}
	// allow events within the message content
	if ($(e.target).parents('div.blockMsg').length > 0)
		return true;

	// allow events for content that is not being blocked
	return $(e.target).parents().children().filter('div.blockUI').length == 0;
};

function focus(back) {
	if (!pageBlockEls)
		return;
	var e = pageBlockEls[back===true ? pageBlockEls.length-1 : 0];
	if (e)
		e.focus();
};

function center(el, x, y) {
	var p = el.parentNode, s = el.style;
	var l = ((p.offsetWidth - el.offsetWidth)/2) - sz(p,'borderLeftWidth');
	var t = ((p.offsetHeight - el.offsetHeight)/2) - sz(p,'borderTopWidth');
	if (x) s.left = l > 0 ? (l+'px') : '0';
	if (y) s.top  = t > 0 ? (t+'px') : '0';
};

function sz(el, p) {
	return parseInt($.css(el,p))||0;
};

})(jQuery);
/*
 *
 * Copyright (c) 2010 C. F., Wong (<a href="http://cloudgen.w0ng.hk">Cloudgen Examplet Store</a>)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
(function($,len,createRange,duplicate){
	$.fn.caret=function(options,opt2){
		var start,end,t=this[0],browser=$.browser.msie;
		if(typeof options==="object" && typeof options.start==="number" && typeof options.end==="number") {
			start=options.start;
			end=options.end;
		} else if(typeof options==="number" && typeof opt2==="number"){
			start=options;
			end=opt2;
		} else if(typeof options==="string"){
			if((start=t.value.indexOf(options))>-1) end=start+options[len];
			else start=null;
		} else if(Object.prototype.toString.call(options)==="[object RegExp]"){
			var re=options.exec(t.value);
			if(re != null) {
				start=re.index;
				end=start+re[0][len];
			}
		}
		if(typeof start!="undefined"){
			if(browser){
				var selRange = this[0].createTextRange();
				selRange.collapse(true);
				selRange.moveStart('character', start);
				selRange.moveEnd('character', end-start);
				selRange.select();
			} else {
				this[0].selectionStart=start;
				this[0].selectionEnd=end;
			}
			this[0].focus();
			return this
		} else {
      if(browser){
				var selection=document.selection;
        if (this[0].tagName.toLowerCase() != "textarea") {
          var val = this.val(),
          range = selection[createRange]()[duplicate]();
          range.moveEnd("character", val[len]);
          var s = (range.text == "" ? val[len]:val.lastIndexOf(range.text));
          range = selection[createRange]()[duplicate]();
          range.moveStart("character", -val[len]);
          var e = range.text[len];
        } else {
          var range = selection[createRange](),
          stored_range = range[duplicate]();
          stored_range.moveToElementText(this[0]);
          stored_range.setEndPoint('EndToEnd', range);
          var s = stored_range.text[len] - range.text[len],
          e = s + range.text[len]
        }
      } else {
				var s=t.selectionStart,
        e=t.selectionEnd;
			}
			var te=t.value.substring(s,e);
			return {start:s,end:e,text:te,replace:function(st){
          return t.value.substring(0,s)+st+t.value.substring(e,t.value[len])
        }}
		}
	}
})(jQuery,"length","createRange","duplicate");

var GET_POS = null; // textarea id for which we need to get caret XY position
var GET_POS_EDITOR = null; // the actual jquery object

(function($) {

  /*
   * Auto-growing textareas; technique ripped from Facebook
   */
  $.fn.autogrow = function(options) {

    this.filter('textarea').each(function() {
      $(this).addClass('autogrow');

      var $this       = $(this),
      minHeight   = $this.height() || 33,
      lineHeight  = $this.css('lineHeight');
      if (!$this.hasClass('noAutoSize'))
        $this.height(160);
      var id = $this.attr('id') + "_shadow";
      var str = '<div id="' + id + '"></div>';
      if (options && options != "fixed")
        str = '<div class="auto-shadow" id="' + id + '"></div>';
      var shadow = $(str).css({
        position:   'absolute',
        top:        -10000,
        left:       -1000,
        width:      $(this).width() - parseInt($this.css('paddingLeft')) - parseInt($this.css('paddingRight')),
        fontSize:   $this.css('fontSize'),
        fontFamily: $this.css('fontFamily'),
        lineHeight: $this.css('lineHeight'),
        resize:     'none'
      }).appendTo(document.body);

      var update = function() {

        var times = function(string, number) {
          for (var i = 0, r = ''; i < number; i ++) r += string;
          return r;
        };
        var vvv = this.value;
        if (GET_POS == id) {
          var start = $(this).caret().start;
          var start_val = this.value.substr(0, start);
          var last_word = "";
          var tag_ok = true;
          if (start_val.lastIndexOf('<pre>') > start_val.lastIndexOf('</pre>') ||
            start_val.lastIndexOf('<cc>') > start_val.lastIndexOf('</cc>')) tag_ok = false;
          if (tag_ok) {
            var m = start_val.match(/#[\w\->.+]*$/)
            if (m && m.length > 0) {
              last_word = m[0].substr(1);
              $this.attr("last_word", last_word);
              start -= last_word.length;
              start_val = this.value.substr(0, start);
              vvv = start_val + "___cursor___" + this.value.substr(start + 1);
            } else { CLOSE_TAG(); }
          }
          $this.attr("last_word", last_word);
        }
        var val = vvv.replace(/</g, '_')
        .replace(/>/g, '_')
        .replace(/&/g, '_')
        .replace(/\n$/, '<br/>&nbsp;')
        .replace(/\n/g, '<br/>')
        .replace(/___cursor___/, "<span id='" + id + "_cursor'>#</span>")
        .replace(/ {2,}/g, function(space) { return times('&nbsp;', space.length -1) + ' ' });
        shadow.css({width:$this.width()});
        shadow.html(val);
        /* temporary fix for chrome
        if (options != "fixed")
          $(this).css('height', Math.max(shadow.height() + 20, minHeight));
        */
      }

      //$(this).change(update).keyup(update).keydown(update);
      $(this).change(update).keyup(update);
      update.apply(this);

    });

    return this;

  }

})(jQuery);
/*
 * tools.tooltip 1.1.3 - Tooltips done right.
 * 
 * Copyright (c) 2009 Tero Piirainen
 * http://flowplayer.org/tools/tooltip.html
 *
 * Dual licensed under MIT and GPL 2+ licenses
 * http://www.opensource.org/licenses
 *
 * Launch  : November 2008
 * Date: ${date}
 * Revision: ${revision} 
 */
(function(c){var d=[];c.tools=c.tools||{};c.tools.tooltip={version:"1.1.3",conf:{effect:"toggle",fadeOutSpeed:"fast",tip:null,predelay:0,delay:30,opacity:1,lazy:undefined,position:["top","center"],offset:[0,0],cancelDefault:true,relative:false,oneInstance:true,events:{def:"mouseover,mouseout",input:"focus,blur",widget:"focus mouseover,blur mouseout",tooltip:"mouseover,mouseout"},api:false},addEffect:function(e,g,f){b[e]=[g,f]}};var b={toggle:[function(e){var f=this.getConf(),g=this.getTip(),h=f.opacity;if(h<1){g.css({opacity:h})}g.show();e.call()},function(e){this.getTip().hide();e.call()}],fade:[function(e){this.getTip().fadeIn(this.getConf().fadeInSpeed,e)},function(e){this.getTip().fadeOut(this.getConf().fadeOutSpeed,e)}]};function a(f,g){var p=this,k=c(this);f.data("tooltip",p);var l=f.next();if(g.tip){l=c(g.tip);if(l.length>1){l=f.nextAll(g.tip).eq(0);if(!l.length){l=f.parent().nextAll(g.tip).eq(0)}}}function o(u){var t=g.relative?f.position().top:f.offset().top,s=g.relative?f.position().left:f.offset().left,v=g.position[0];t-=l.outerHeight()-g.offset[0];s+=f.outerWidth()+g.offset[1];var q=l.outerHeight()+f.outerHeight();if(v=="center"){t+=q/2}if(v=="bottom"){t+=q}v=g.position[1];var r=l.outerWidth()+f.outerWidth();if(v=="center"){s-=r/2}if(v=="left"){s-=r}return{top:t,left:s}}var i=f.is(":input"),e=i&&f.is(":checkbox, :radio, select, :button"),h=f.attr("type"),n=g.events[h]||g.events[i?(e?"widget":"input"):"def"];n=n.split(/,\s*/);if(n.length!=2){throw"Tooltip: bad events configuration for "+h}f.bind(n[0],function(r){if(g.oneInstance){c.each(d,function(){this.hide()})}var q=l.data("trigger");if(q&&q[0]!=this){l.hide().stop(true,true)}r.target=this;p.show(r);n=g.events.tooltip.split(/,\s*/);l.bind(n[0],function(){p.show(r)});if(n[1]){l.bind(n[1],function(){p.hide(r)})}});f.bind(n[1],function(q){p.hide(q)});if(!c.browser.msie&&!i&&!g.predelay){f.mousemove(function(){if(!p.isShown()){f.triggerHandler("mouseover")}})}if(g.opacity<1){l.css("opacity",g.opacity)}var m=0,j=f.attr("title");if(j&&g.cancelDefault){f.removeAttr("title");f.data("title",j)}c.extend(p,{show:function(r){if(r){f=c(r.target)}clearTimeout(l.data("timer"));if(l.is(":animated")||l.is(":visible")){return p}function q(){l.data("trigger",f);var t=o(r);if(g.tip&&j){l.html(f.data("title"))}r=r||c.Event();r.type="onBeforeShow";k.trigger(r,[t]);if(r.isDefaultPrevented()){return p}t=o(r);l.css({position:"absolute",top:t.top,left:t.left});var s=b[g.effect];if(!s){throw'Nonexistent effect "'+g.effect+'"'}s[0].call(p,function(){r.type="onShow";k.trigger(r)})}if(g.predelay){clearTimeout(m);m=setTimeout(q,g.predelay)}else{q()}return p},hide:function(r){clearTimeout(l.data("timer"));clearTimeout(m);if(!l.is(":visible")){return}function q(){r=r||c.Event();r.type="onBeforeHide";k.trigger(r);if(r.isDefaultPrevented()){return}b[g.effect][1].call(p,function(){r.type="onHide";k.trigger(r)})}if(g.delay&&r){l.data("timer",setTimeout(q,g.delay))}else{q()}return p},isShown:function(){return l.is(":visible, :animated")},getConf:function(){return g},getTip:function(){return l},getTrigger:function(){return f},bind:function(q,r){k.bind(q,r);return p},onHide:function(q){return this.bind("onHide",q)},onBeforeShow:function(q){return this.bind("onBeforeShow",q)},onShow:function(q){return this.bind("onShow",q)},onBeforeHide:function(q){return this.bind("onBeforeHide",q)},unbind:function(q){k.unbind(q);return p}});c.each(g,function(q,r){if(c.isFunction(r)){p.bind(q,r)}})}c.prototype.tooltip=function(e){var f=this.eq(typeof e=="number"?e:0).data("tooltip");if(f){return f}var g=c.extend(true,{},c.tools.tooltip.conf);if(c.isFunction(e)){e={onBeforeShow:e}}else{if(typeof e=="string"){e={tip:e}}}e=c.extend(true,g,e);if(typeof e.position=="string"){e.position=e.position.split(/,?\s/)}if(e.lazy!==false&&(e.lazy===true||this.length>20)){this.one("mouseover",function(h){f=new a(c(this),e);f.show(h);d.push(f)})}else{this.each(function(){f=new a(c(this),e);d.push(f)})}return e.api?f:this}})(jQuery);
/*
 * jQuery Address Plugin v1.3
 * http://www.asual.com/jquery/address/
 *
 * Copyright (c) 2009-2010 Rostislav Hristov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: 2010-09-26 17:58:16 +0300 (Sun, 26 Sep 2010)
 */
(function(c){c.address=function(){var x=function(a){c(c.address).trigger(c.extend(c.Event(a),function(){for(var b={},f=c.address.parameterNames(),h=0,q=f.length;h<q;h++)b[f[h]]=c.address.parameter(f[h]);return{value:c.address.value(),path:c.address.path(),pathNames:c.address.pathNames(),parameterNames:f,parameters:b,queryString:c.address.queryString()}}.call(c.address)))},y=function(a,b,f){c(c.address).bind(a,b,f);return c.address},A=function(){return z.pushState&&typeof d.state!==t},H=function(){return"/"+
e.pathname.replace(new RegExp(d.state),"")+e.search+(G()?"#"+G():"")},G=function(){var a=e.href.indexOf("#");return a!=-1?B(e.href.substr(a+1),l):""},u=function(){return A()?H():G()},ra=function(){return"javascript"},$=function(a,b){if(d.strict)a=b?a.substr(0,1)!="/"?"/"+a:a:a==""?"/":a;return a},B=function(a,b){if(d.crawlable&&b)return(a!=""?"!":"")+a;return a.replace(/^\!/,"")},C=function(a,b){return parseInt(a.css(b),10)},aa=function(a){for(var b,f,h=0,q=a.childNodes.length;h<q;h++){if(a.childNodes[h].src)b=
String(a.childNodes[h].src);if(f=aa(a.childNodes[h]))b=f}return b},M=function(){if(!R){var a=u(),b=g!=a;if(D&&o<523){if(I!=z.length){I=z.length;if(typeof F[I-1]!=t)g=F[I-1];J(l)}}else if(b)if(E&&o<7)e.reload();else{E&&o<8&&d.history&&v(U,50);g=a;J(l)}}},J=function(a){x(ba);x(a?ca:da);v(ea,10)},ea=function(){if(d.tracker!=="null"&&d.tracker!==null){var a=c.isFunction(d.tracker)?d.tracker:j[d.tracker],b=(e.pathname+e.search+(c.address&&!A()?c.address.value():"")).replace(/\/\//,"/").replace(/^\/$/,
"");if(c.isFunction(a))a(b);else if(c.isFunction(j.urchinTracker))j.urchinTracker(b);else if(typeof j.pageTracker!=t&&c.isFunction(j.pageTracker._trackPageview))j.pageTracker._trackPageview(b);else typeof j._gaq!=t&&c.isFunction(j._gaq.push)&&j._gaq.push(["_trackPageview",b])}},U=function(){var a=ra()+":"+l+";document.open();document.writeln('<html><head><title>"+m.title+"</title><script>var "+p+' = "'+u()+(m.domain!=e.host?'";document.domain="'+m.domain:"")+"\";<\/script></head></html>');document.close();";
if(o<7)n.src=a;else n.contentWindow.location.replace(a)},ga=function(){if(N&&fa!=-1){var a,b=N.substr(fa+1).split("&");for(r=0;r<b.length;r++){a=b[r].split("=");if(/^(autoUpdate|crawlable|history|strict|wrap)$/.test(a[0]))d[a[0]]=isNaN(a[1])?/^(true|yes)$/i.test(a[1]):parseInt(a[1],10)!==0;if(/^(state|tracker)$/.test(a[0]))d[a[0]]=a[1]}N=null}g=u()},ia=function(){if(!ha){ha=k;ga();var a=c("body").ajaxComplete(function(){sa.call(this);ta.call(this)}).trigger("ajaxComplete");if(d.wrap){c("body > *").wrapAll('<div style="padding:'+
(C(a,"marginTop")+C(a,"paddingTop"))+"px "+(C(a,"marginRight")+C(a,"paddingRight"))+"px "+(C(a,"marginBottom")+C(a,"paddingBottom"))+"px "+(C(a,"marginLeft")+C(a,"paddingLeft"))+'px;" />').parent().wrap('<div id="'+p+'" style="height:100%; overflow:auto;'+(D?window.statusbar.visible&&!/chrome/i.test(V)?"":" resize:both;":"")+'" />');c("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"});D&&c('<style type="text/css" />').appendTo("head").text("#"+p+"::-webkit-resizer { background-color: #fff; }")}if(E&&
o<8){a=m.getElementsByTagName("frameset")[0];n=m.createElement((a?"":"i")+"frame");if(a){a.insertAdjacentElement("beforeEnd",n);a[a.cols?"cols":"rows"]+=",0";n.noResize=k;n.frameBorder=n.frameSpacing=0}else{n.style.display="none";n.style.width=n.style.height=0;n.tabIndex=-1;m.body.insertAdjacentElement("afterBegin",n)}v(function(){c(n).bind("load",function(){var b=n.contentWindow;g=typeof b[p]!=t?b[p]:"";if(g!=u()){J(l);e.hash=B(g,k)}});typeof n.contentWindow[p]==t&&U()},50)}else if(D){if(o<418){c(m.body).append('<form id="'+
p+'" style="position:absolute;top:-9999px;" method="get"></form>');W=m.getElementById(p)}if(typeof e[p]==t)e[p]={};if(typeof e[p][e.pathname]!=t)F=e[p][e.pathname].split(",")}v(function(){x("init");J(l)},1);if(!A())if(E&&o>7||!E&&"on"+O in j)if(j.addEventListener)j.addEventListener(O,M,false);else j.attachEvent&&j.attachEvent("on"+O,M);else ua(M,50)}},sa=function(){var a,b=c("a"),f=b.size(),h=-1;v(function(){if(++h!=f){a=c(b.get(h));a.is("[rel*=address:]")&&a.address();v(arguments.callee,1)}},1)},
va=function(){if(g!=u()){g=u();J(l)}},wa=function(){if(j.removeEventListener)j.removeEventListener(O,M,false);else j.detachEvent&&j.detachEvent("on"+O,M)},ta=function(){var a=e.pathname.replace(/\/$/,"");c("body").html().indexOf("_escaped_fragment_")!=-1&&c("a[href]:not([href^=http]), , a[href*="+document.domain+"]",this).each(function(){var b=c(this).attr("href").replace(/^http:/,"").replace(new RegExp(a+"/?$"),"");if(b==""||b.indexOf("_escaped_fragment_")!=-1)c(this).attr("href","#"+this.decode(b.replace(/\/(.*)\?_escaped_fragment_=(.*)$/,
"!$2")))})},K=function(a){return encodeURIComponent(a).replace(/%20/g,"+")},ja=function(a){return a.split("#")[0].split("?")[0]},ka=function(a){a=ja(a);var b=a.replace(/\/{2,9}/g,"/").split("/");if(a.substr(0,1)=="/"||a.length===0)b.splice(0,1);a.substr(a.length-1,1)=="/"&&b.splice(b.length-1,1);return b},S=function(a){a=a.split("?");return a.slice(1,a.length).join("?").split("#")[0]},la=function(a,b){if(b=S(b)){params=b.split("&");b=[];for(r=0;r<params.length;r++){var f=params[r].split("=");f[0]==
a&&b.push(f.slice(1).join("="))}if(b.length!==0)return b.length!=1?b:b[0]}},ma=function(a){var b=S(a);a=[];if(b&&b.indexOf("=")!=-1){b=b.split("&");for(var f=0;f<b.length;f++){var h=b[f].split("=")[0];c.inArray(h,a)==-1&&a.push(h)}}return a},na=function(a){a=a.split("#");return a.slice(1,a.length).join("#")},p="jQueryAddress",t="undefined",O="hashchange",ba="change",ca="internalChange",da="externalChange",k=true,l=false,d={autoUpdate:k,crawlable:l,history:k,strict:k,wrap:l},s=c.browser,o=parseFloat(c.browser.version),
oa=s.mozilla,E=s.msie,pa=s.opera,D=s.webkit,X=l,j=function(){try{return top.document!==undefined?top:window}catch(a){return window}}(),m=j.document,z=j.history,e=j.location,ua=setInterval,v=setTimeout,V=navigator.userAgent,n,W,N=aa(document),fa=N?N.indexOf("?"):-1,Y=m.title,I=z.length,R=l,ha=l,Z=k,qa=k,T=l,F=[],g=u();if(E){o=parseFloat(V.substr(V.indexOf("MSIE")+4));if(m.documentMode&&m.documentMode!=o)o=m.documentMode!=8?7:8;c(document).bind("propertychange",function(){if(m.title!=Y&&m.title.indexOf("#"+
u())!=-1)m.title=Y})}if(X=oa&&o>=1||E&&o>=6||pa&&o>=9.5||D&&o>=312){for(var r=1;r<I;r++)F.push("");F.push(g);if(pa)history.navigationMode="compatible";if(document.readyState=="complete")var xa=setInterval(function(){if(c.address){ia();clearInterval(xa)}},50);else{ga();c(ia)}s=H();if(typeof d.state!==t)if(z.pushState)s.substr(0,3)=="/#/"&&e.replace(d.state.replace(/^\/$/,"")+s.substr(2));else s!="/"&&s.replace(/^\/#/,"")!=G()&&e.replace(d.state.replace(/^\/$/,"")+"/#"+s);c(window).bind("popstate",
va).bind("unload",wa)}else!X&&G()!=""||D&&o<418&&G()!=""&&e.search!=""?e.replace(e.href.substr(0,e.href.indexOf("#"))):ea();return{bind:function(a,b,f){return y(a,b,f)},init:function(a){return y("init",a)},change:function(a){return y(ba,a)},internalChange:function(a){return y(ca,a)},externalChange:function(a){return y(da,a)},baseURL:function(){var a=e.href;if(a.indexOf("#")!=-1)a=a.substr(0,a.indexOf("#"));if(/\/$/.test(a))a=a.substr(0,a.length-1);return a},autoUpdate:function(a){if(a!==undefined){d.autoUpdate=
a;return this}return d.autoUpdate},crawlable:function(a){if(a!==undefined){d.crawlable=a;return this}return d.crawlable},history:function(a){if(a!==undefined){d.history=a;return this}return d.history},state:function(a){if(a!==undefined){d.state=a;return this}return d.state},strict:function(a){if(a!==undefined){d.strict=a;return this}return d.strict},tracker:function(a){if(a!==undefined){d.tracker=a;return this}return d.tracker},wrap:function(a){if(a!==undefined){d.wrap=a;return this}return d.wrap},
update:function(){T=k;this.value(g);T=l;return this},encode:function(a){var b=ka(a),f=ma(a),h=S(a),q=na(a),P=a.substr(0,1),L=a.substr(a.length-1),i="";c.each(b,function(w,Q){i+="/"+K(Q)});if(h!==""){i+="?";if(f.length===0)i+=h;else{c.each(f,function(w,Q){w=la(Q,a);if(typeof w!=="string")c.each(w,function(za,ya){i+=K(Q)+"="+K(ya)+"&"});else i+=K(Q)+"="+K(w)+"&"});i=i.substr(0,i.length-1)}}if(q!=="")i+="#"+K(q);if(P!="/"&&i.substr(0,1)=="/")i=i.substr(1);if(/#|&|\?/.test(L))i+=L;return i},decode:function(a){return decodeURIComponent(a.replace(/\+/g,
"%20"))},title:function(a){if(a!==undefined){v(function(){Y=m.title=a;if(qa&&n&&n.contentWindow&&n.contentWindow.document){n.contentWindow.document.title=a;qa=l}if(!Z&&oa)e.replace(e.href.indexOf("#")!=-1?e.href:e.href+"#");Z=l},50);return this}return m.title},value:function(a){if(a!==undefined){a=$(this.encode(a),k);if(a=="/")a="";if(g==a&&!T)return;Z=k;g=a;if(d.autoUpdate||T){J(k);if(A())z[d.history?"pushState":"replaceState"]({},"",d.state.replace(/\/$/,"")+(g==""?"/":g));else{R=k;F[z.length]=
g;if(D)if(d.history){e[p][e.pathname]=F.toString();I=z.length+1;if(o<418){if(e.search==""){W.action="#"+B(g,k);W.submit()}}else if(o<523||g==""){a=m.createEvent("MouseEvents");a.initEvent("click",k,k);var b=m.createElement("a");b.href="#"+B(g,k);b.dispatchEvent(a)}else e.hash="#"+B(g,k)}else e.replace("#"+B(g,k));else if(g!=u())if(d.history)e.hash="#"+B(g,k);else e.replace("#"+B(g,k));E&&o<8&&d.history&&v(U,50);if(D)v(function(){R=l},1);else R=l}}return this}if(!X)return null;return $(this.decode(g),
l)},path:function(a){if(a!==undefined){var b=this.queryString(),f=this.hash();this.value(a+(b?"?"+b:"")+(f?"#"+f:""));return this}return ja(this.value())},pathNames:function(){return ka(this.value())},queryString:function(a){if(a!==undefined){var b=this.hash();this.value(this.path()+(a?"?"+a:"")+(b?"#"+b:""));return this}return S(this.value())},parameter:function(a,b,f){var h,q;if(b!==undefined){var P=this.parameterNames();q=[];for(h=0;h<P.length;h++){var L=P[h],i=this.parameter(L);if(typeof i=="string")i=
[i];if(L==a)i=b===null||b===""?[]:f?i.concat([b]):[b];for(var w=0;w<i.length;w++)q.push(L+"="+i[w])}c.inArray(a,P)==-1&&b!==null&&b!==""&&q.push(a+"="+b);this.queryString(q.join("&"));return this}return la(a,this.value())},parameterNames:function(){return ma(this.value())},hash:function(a){if(a!==undefined){this.value(this.value().split("#")[0]+(a?"#"+a:""));return this}return na(this.value())}}}();c.fn.address=function(x){if(!c(this).attr("address")){var y=function(A){if(c(this).is("a")){var H=x?
x.call(this):/address:/.test(c(this).attr("rel"))?c(this).attr("rel").split("address:")[1].split(" ")[0]:typeof c.address.state()!=="undefined"&&c.address.state()!="/"?c(this).attr("href").replace(new RegExp("^(.*"+c.address.state()+"|\\.)"),""):c(this).attr("href").replace(/^(#\!?|\.)/,"");c.address.value(H);A.preventDefault()}};c(this).click(y).live("click",y).submit(function(A){if(c(this).is("form")){var H=x?x.call(this):c(this).attr("action")+"?"+c.address.decode(c(this).serialize());c.address.value(H);
A.preventDefault()}}).attr("address",true)}return this}})(jQuery);
/*!
 * jQuery UI 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.11",keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,
NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,
"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");
if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,l,m){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(l)g-=parseFloat(c.curCSS(f,
"border"+this+"Width",true))||0;if(m)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,
d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){var b=a.nodeName.toLowerCase(),d=c.attr(a,"tabindex");if("area"===b){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&k(a)}return(/input|select|textarea|button|object/.test(b)?!a.disabled:"a"==b?a.href||!isNaN(d):!isNaN(d))&&k(a)},tabbable:function(a){var b=c.attr(a,"tabindex");return(isNaN(b)||b>=0)&&c(a).is(":focusable")}});
c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=0;e<b.length;e++)a.options[b[e][0]]&&
b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName)},_mouseDown:function(a){a.originalEvent=
a.originalEvent||{};if(!a.originalEvent.mouseHandled){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,e=a.which==1,f=typeof this.options.cancel=="string"?b(a.target).parents().add(a.target).filter(this.options.cancel).length:false;if(!e||f||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=
this._mouseStart(a)!==false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(d){return c._mouseMove(d)};this._mouseUpDelegate=function(d){return c._mouseUp(d)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return a.originalEvent.mouseHandled=
true}},_mouseMove:function(a){if(b.browser.msie&&!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Position 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function(c){c.ui=c.ui||{};var n=/left|center|right/,o=/top|center|bottom/,t=c.fn.position,u=c.fn.offset;c.fn.position=function(b){if(!b||!b.of)return t.apply(this,arguments);b=c.extend({},b);var a=c(b.of),d=a[0],g=(b.collision||"flip").split(" "),e=b.offset?b.offset.split(" "):[0,0],h,k,j;if(d.nodeType===9){h=a.width();k=a.height();j={top:0,left:0}}else if(d.setTimeout){h=a.width();k=a.height();j={top:a.scrollTop(),left:a.scrollLeft()}}else if(d.preventDefault){b.at="left top";h=k=0;j={top:b.of.pageY,
left:b.of.pageX}}else{h=a.outerWidth();k=a.outerHeight();j=a.offset()}c.each(["my","at"],function(){var f=(b[this]||"").split(" ");if(f.length===1)f=n.test(f[0])?f.concat(["center"]):o.test(f[0])?["center"].concat(f):["center","center"];f[0]=n.test(f[0])?f[0]:"center";f[1]=o.test(f[1])?f[1]:"center";b[this]=f});if(g.length===1)g[1]=g[0];e[0]=parseInt(e[0],10)||0;if(e.length===1)e[1]=e[0];e[1]=parseInt(e[1],10)||0;if(b.at[0]==="right")j.left+=h;else if(b.at[0]==="center")j.left+=h/2;if(b.at[1]==="bottom")j.top+=
k;else if(b.at[1]==="center")j.top+=k/2;j.left+=e[0];j.top+=e[1];return this.each(function(){var f=c(this),l=f.outerWidth(),m=f.outerHeight(),p=parseInt(c.curCSS(this,"marginLeft",true))||0,q=parseInt(c.curCSS(this,"marginTop",true))||0,v=l+p+(parseInt(c.curCSS(this,"marginRight",true))||0),w=m+q+(parseInt(c.curCSS(this,"marginBottom",true))||0),i=c.extend({},j),r;if(b.my[0]==="right")i.left-=l;else if(b.my[0]==="center")i.left-=l/2;if(b.my[1]==="bottom")i.top-=m;else if(b.my[1]==="center")i.top-=
m/2;i.left=Math.round(i.left);i.top=Math.round(i.top);r={left:i.left-p,top:i.top-q};c.each(["left","top"],function(s,x){c.ui.position[g[s]]&&c.ui.position[g[s]][x](i,{targetWidth:h,targetHeight:k,elemWidth:l,elemHeight:m,collisionPosition:r,collisionWidth:v,collisionHeight:w,offset:e,my:b.my,at:b.at})});c.fn.bgiframe&&f.bgiframe();f.offset(c.extend(i,{using:b.using}))})};c.ui.position={fit:{left:function(b,a){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();b.left=
d>0?b.left-d:Math.max(b.left-a.collisionPosition.left,b.left)},top:function(b,a){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();b.top=d>0?b.top-d:Math.max(b.top-a.collisionPosition.top,b.top)}},flip:{left:function(b,a){if(a.at[0]!=="center"){var d=c(window);d=a.collisionPosition.left+a.collisionWidth-d.width()-d.scrollLeft();var g=a.my[0]==="left"?-a.elemWidth:a.my[0]==="right"?a.elemWidth:0,e=a.at[0]==="left"?a.targetWidth:-a.targetWidth,h=-2*a.offset[0];b.left+=
a.collisionPosition.left<0?g+e+h:d>0?g+e+h:0}},top:function(b,a){if(a.at[1]!=="center"){var d=c(window);d=a.collisionPosition.top+a.collisionHeight-d.height()-d.scrollTop();var g=a.my[1]==="top"?-a.elemHeight:a.my[1]==="bottom"?a.elemHeight:0,e=a.at[1]==="top"?a.targetHeight:-a.targetHeight,h=-2*a.offset[1];b.top+=a.collisionPosition.top<0?g+e+h:d>0?g+e+h:0}}}};if(!c.offset.setOffset){c.offset.setOffset=function(b,a){if(/static/.test(c.curCSS(b,"position")))b.style.position="relative";var d=c(b),
g=d.offset(),e=parseInt(c.curCSS(b,"top",true),10)||0,h=parseInt(c.curCSS(b,"left",true),10)||0;g={top:a.top-g.top+e,left:a.left-g.left+h};"using"in a?a.using.call(b,g):d.css(g)};c.fn.offset=function(b){var a=this[0];if(!a||!a.ownerDocument)return null;if(b)return this.each(function(){c.offset.setOffset(this,b)});return u.call(this)}}})(jQuery);
;/*
 * jQuery UI Draggable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;return true},_mouseStart:function(a){var b=this.options;this.helper=this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-
this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();
d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);return true},_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||
this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&
this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==
a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone():this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||
0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-
(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),
height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[(a.containment=="document"?0:d(window).scrollLeft())-this.offset.relative.left-this.offset.parent.left,(a.containment=="document"?0:d(window).scrollTop())-this.offset.relative.top-this.offset.parent.top,(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?
document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){var b=d(a.containment)[0];if(b){a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),
10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),
10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom]}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&
d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],
this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-this.offset.click.left<this.containment[0])e=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])e=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=
this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;e=this.originalPageX+Math.round((e-this.originalPageX)/b.grid[0])*b.grid[0];e=this.containment?!(e-this.offset.click.left<this.containment[0]||e-this.offset.click.left>this.containment[2])?
e:!(e-this.offset.click.left<this.containment[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,
offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.11"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var g=d.data(this,"sortable");if(g&&!g.options.disabled){c.sortables.push({instance:g,shouldRevert:g.options.revert});g.refreshPositions();g._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},
b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=
d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().appendTo(this.instance.element).data("sortable-item",true);this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};
a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&
this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",
{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","iframeFix",{start:function(){var a=d(this).data("draggable").options;d(a.iframeFix===true?"iframe":a.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+
"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")})},stop:function(){d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)})}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",
a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!="x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+
c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<
c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+
c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),
f=c.options,e=f.snapTolerance,g=b.offset.left,n=g+c.helperProportions.width,m=b.offset.top,o=m+c.helperProportions.height,h=c.snapElements.length-1;h>=0;h--){var i=c.snapElements[h].left,k=i+c.snapElements[h].width,j=c.snapElements[h].top,l=j+c.snapElements[h].height;if(i-e<g&&g<k+e&&j-e<m&&m<l+e||i-e<g&&g<k+e&&j-e<o&&o<l+e||i-e<n&&n<k+e&&j-e<m&&m<l+e||i-e<n&&n<k+e&&j-e<o&&o<l+e){if(f.snapMode!="inner"){var p=Math.abs(j-o)<=e,q=Math.abs(l-m)<=e,r=Math.abs(i-n)<=e,s=Math.abs(k-g)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k}).left-c.margins.left}var t=p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(j-m)<=e;q=Math.abs(l-o)<=e;r=Math.abs(i-g)<=e;s=Math.abs(k-n)<=e;if(p)b.position.top=
c._convertPositionTo("relative",{top:j,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:l-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:i}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:k-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[h].snapping&&(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),
{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=p||q||r||s||t}else{c.snapElements[h].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[h].item}));c.snapElements[h].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=
parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Droppable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
a,this.ui(c));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.11"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){case "fit":return i<=e&&g<=k&&j<=f&&h<=l;case "intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case "pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case "touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=
i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}c[f].visible=c[f].element.css("display")!=
"none";if(c[f].visible){e=="mousedown"&&c[f]._activate.call(c[f],b);c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||
a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);if(c=!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=
d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})}}})(jQuery);
;/*
 * jQuery UI Resizable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.resizable",e.ui.mouse,{widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:1E3},_create:function(){var b=this,a=this.options;this.element.addClass("ui-resizable");e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,
_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)){/relative/.test(this.element.css("position"))&&e.browser.opera&&this.element.css({position:"relative",top:"auto",left:"auto"});this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),
top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("resizable",this.element.data("resizable"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=
this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=a.handles||(!e(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",
nw:".ui-resizable-nw"});if(this.handles.constructor==String){if(this.handles=="all")this.handles="n,e,s,w,se,sw,ne,nw";var c=this.handles.split(",");this.handles={};for(var d=0;d<c.length;d++){var f=e.trim(c[d]),g=e('<div class="ui-resizable-handle '+("ui-resizable-"+f)+'"></div>');/sw|se|ne|nw/.test(f)&&g.css({zIndex:++a.zIndex});"se"==f&&g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");this.handles[f]=".ui-resizable-"+f;this.element.append(g)}}this._renderAxis=function(h){h=h||this.element;for(var i in this.handles){if(this.handles[i].constructor==
String)this.handles[i]=e(this.handles[i],this.element).show();if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)){var j=e(this.handles[i],this.element),k=0;k=/sw|ne|nw|se|n|s/.test(i)?j.outerHeight():j.outerWidth();j=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join("");h.css(j,k);this._proportionallyResize()}e(this.handles[i])}};this._renderAxis(this.element);this._handles=e(".ui-resizable-handle",this.element).disableSelection();
this._handles.mouseover(function(){if(!b.resizing){if(this.className)var h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);b.axis=h&&h[1]?h[1]:"se"}});if(a.autoHide){this._handles.hide();e(this.element).addClass("ui-resizable-autohide").hover(function(){e(this).removeClass("ui-resizable-autohide");b._handles.show()},function(){if(!b.resizing){e(this).addClass("ui-resizable-autohide");b._handles.hide()}})}this._mouseInit()},destroy:function(){this._mouseDestroy();var b=function(c){e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};
if(this.elementIsWrapper){b(this.element);var a=this.element;a.after(this.originalElement.css({position:a.css("position"),width:a.outerWidth(),height:a.outerHeight(),top:a.css("top"),left:a.css("left")})).remove()}this.originalElement.css("resize",this.originalResizeStyle);b(this.originalElement);return this},_mouseCapture:function(b){var a=false;for(var c in this.handles)if(e(this.handles[c])[0]==b.target)a=true;return!this.options.disabled&&a},_mouseStart:function(b){var a=this.options,c=this.element.position(),
d=this.element;this.resizing=true;this.documentScroll={top:e(document).scrollTop(),left:e(document).scrollLeft()};if(d.is(".ui-draggable")||/absolute/.test(d.css("position")))d.css({position:"absolute",top:c.top,left:c.left});e.browser.opera&&/relative/.test(d.css("position"))&&d.css({position:"relative",top:"auto",left:"auto"});this._renderProxy();c=m(this.helper.css("left"));var f=m(this.helper.css("top"));if(a.containment){c+=e(a.containment).scrollLeft()||0;f+=e(a.containment).scrollTop()||0}this.offset=
this.helper.offset();this.position={left:c,top:f};this.size=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalSize=this._helper?{width:d.outerWidth(),height:d.outerHeight()}:{width:d.width(),height:d.height()};this.originalPosition={left:c,top:f};this.sizeDiff={width:d.outerWidth()-d.width(),height:d.outerHeight()-d.height()};this.originalMousePosition={left:b.pageX,top:b.pageY};this.aspectRatio=typeof a.aspectRatio=="number"?a.aspectRatio:
this.originalSize.width/this.originalSize.height||1;a=e(".ui-resizable-"+this.axis).css("cursor");e("body").css("cursor",a=="auto"?this.axis+"-resize":a);d.addClass("ui-resizable-resizing");this._propagate("start",b);return true},_mouseDrag:function(b){var a=this.helper,c=this.originalMousePosition,d=this._change[this.axis];if(!d)return false;c=d.apply(this,[b,b.pageX-c.left||0,b.pageY-c.top||0]);if(this._aspectRatio||b.shiftKey)c=this._updateRatio(c,b);c=this._respectSize(c,b);this._propagate("resize",
b);a.css({top:this.position.top+"px",left:this.position.left+"px",width:this.size.width+"px",height:this.size.height+"px"});!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize();this._updateCache(c);this._trigger("resize",b,this.ui());return false},_mouseStop:function(b){this.resizing=false;var a=this.options,c=this;if(this._helper){var d=this._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName);d=f&&e.ui.hasScroll(d[0],"left")?0:c.sizeDiff.height;
f=f?0:c.sizeDiff.width;f={width:c.helper.width()-f,height:c.helper.height()-d};d=parseInt(c.element.css("left"),10)+(c.position.left-c.originalPosition.left)||null;var g=parseInt(c.element.css("top"),10)+(c.position.top-c.originalPosition.top)||null;a.animate||this.element.css(e.extend(f,{top:g,left:d}));c.helper.height(c.size.height);c.helper.width(c.size.width);this._helper&&!a.animate&&this._proportionallyResize()}e("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");
this._propagate("stop",b);this._helper&&this.helper.remove();return false},_updateCache:function(b){this.offset=this.helper.offset();if(l(b.left))this.position.left=b.left;if(l(b.top))this.position.top=b.top;if(l(b.height))this.size.height=b.height;if(l(b.width))this.size.width=b.width},_updateRatio:function(b){var a=this.position,c=this.size,d=this.axis;if(b.height)b.width=c.height*this.aspectRatio;else if(b.width)b.height=c.width/this.aspectRatio;if(d=="sw"){b.left=a.left+(c.width-b.width);b.top=
null}if(d=="nw"){b.top=a.top+(c.height-b.height);b.left=a.left+(c.width-b.width)}return b},_respectSize:function(b){var a=this.options,c=this.axis,d=l(b.width)&&a.maxWidth&&a.maxWidth<b.width,f=l(b.height)&&a.maxHeight&&a.maxHeight<b.height,g=l(b.width)&&a.minWidth&&a.minWidth>b.width,h=l(b.height)&&a.minHeight&&a.minHeight>b.height;if(g)b.width=a.minWidth;if(h)b.height=a.minHeight;if(d)b.width=a.maxWidth;if(f)b.height=a.maxHeight;var i=this.originalPosition.left+this.originalSize.width,j=this.position.top+
this.size.height,k=/sw|nw|w/.test(c);c=/nw|ne|n/.test(c);if(g&&k)b.left=i-a.minWidth;if(d&&k)b.left=i-a.maxWidth;if(h&&c)b.top=j-a.minHeight;if(f&&c)b.top=j-a.maxHeight;if((a=!b.width&&!b.height)&&!b.left&&b.top)b.top=null;else if(a&&!b.top&&b.left)b.left=null;return b},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var b=this.helper||this.element,a=0;a<this._proportionallyResizeElements.length;a++){var c=this._proportionallyResizeElements[a];if(!this.borderDif){var d=
[c.css("borderTopWidth"),c.css("borderRightWidth"),c.css("borderBottomWidth"),c.css("borderLeftWidth")],f=[c.css("paddingTop"),c.css("paddingRight"),c.css("paddingBottom"),c.css("paddingLeft")];this.borderDif=e.map(d,function(g,h){g=parseInt(g,10)||0;h=parseInt(f[h],10)||0;return g+h})}e.browser.msie&&(e(b).is(":hidden")||e(b).parents(":hidden").length)||c.css({height:b.height()-this.borderDif[0]-this.borderDif[2]||0,width:b.width()-this.borderDif[1]-this.borderDif[3]||0})}},_renderProxy:function(){var b=
this.options;this.elementOffset=this.element.offset();if(this._helper){this.helper=this.helper||e('<div style="overflow:hidden;"></div>');var a=e.browser.msie&&e.browser.version<7,c=a?1:0;a=a?2:-1;this.helper.addClass(this._helper).css({width:this.element.outerWidth()+a,height:this.element.outerHeight()+a,position:"absolute",left:this.elementOffset.left-c+"px",top:this.elementOffset.top-c+"px",zIndex:++b.zIndex});this.helper.appendTo("body").disableSelection()}else this.helper=this.element},_change:{e:function(b,
a){return{width:this.originalSize.width+a}},w:function(b,a){return{left:this.originalPosition.left+a,width:this.originalSize.width-a}},n:function(b,a,c){return{top:this.originalPosition.top+c,height:this.originalSize.height-c}},s:function(b,a,c){return{height:this.originalSize.height+c}},se:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},sw:function(b,a,c){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,
c]))},ne:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))},nw:function(b,a,c){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))}},_propagate:function(b,a){e.ui.plugin.call(this,b,[a,this.ui()]);b!="resize"&&this._trigger(b,a,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,
originalPosition:this.originalPosition}}});e.extend(e.ui.resizable,{version:"1.8.11"});e.ui.plugin.add("resizable","alsoResize",{start:function(){var b=e(this).data("resizable").options,a=function(c){e(c).each(function(){var d=e(this);d.data("resizable-alsoresize",{width:parseInt(d.width(),10),height:parseInt(d.height(),10),left:parseInt(d.css("left"),10),top:parseInt(d.css("top"),10),position:d.css("position")})})};if(typeof b.alsoResize=="object"&&!b.alsoResize.parentNode)if(b.alsoResize.length){b.alsoResize=
b.alsoResize[0];a(b.alsoResize)}else e.each(b.alsoResize,function(c){a(c)});else a(b.alsoResize)},resize:function(b,a){var c=e(this).data("resizable");b=c.options;var d=c.originalSize,f=c.originalPosition,g={height:c.size.height-d.height||0,width:c.size.width-d.width||0,top:c.position.top-f.top||0,left:c.position.left-f.left||0},h=function(i,j){e(i).each(function(){var k=e(this),q=e(this).data("resizable-alsoresize"),p={},r=j&&j.length?j:k.parents(a.originalElement[0]).length?["width","height"]:["width",
"height","top","left"];e.each(r,function(n,o){if((n=(q[o]||0)+(g[o]||0))&&n>=0)p[o]=n||null});if(e.browser.opera&&/relative/.test(k.css("position"))){c._revertToRelativePosition=true;k.css({position:"absolute",top:"auto",left:"auto"})}k.css(p)})};typeof b.alsoResize=="object"&&!b.alsoResize.nodeType?e.each(b.alsoResize,function(i,j){h(i,j)}):h(b.alsoResize)},stop:function(){var b=e(this).data("resizable"),a=b.options,c=function(d){e(d).each(function(){var f=e(this);f.css({position:f.data("resizable-alsoresize").position})})};
if(b._revertToRelativePosition){b._revertToRelativePosition=false;typeof a.alsoResize=="object"&&!a.alsoResize.nodeType?e.each(a.alsoResize,function(d){c(d)}):c(a.alsoResize)}e(this).removeData("resizable-alsoresize")}});e.ui.plugin.add("resizable","animate",{stop:function(b){var a=e(this).data("resizable"),c=a.options,d=a._proportionallyResizeElements,f=d.length&&/textarea/i.test(d[0].nodeName),g=f&&e.ui.hasScroll(d[0],"left")?0:a.sizeDiff.height;f={width:a.size.width-(f?0:a.sizeDiff.width),height:a.size.height-
g};g=parseInt(a.element.css("left"),10)+(a.position.left-a.originalPosition.left)||null;var h=parseInt(a.element.css("top"),10)+(a.position.top-a.originalPosition.top)||null;a.element.animate(e.extend(f,h&&g?{top:h,left:g}:{}),{duration:c.animateDuration,easing:c.animateEasing,step:function(){var i={width:parseInt(a.element.css("width"),10),height:parseInt(a.element.css("height"),10),top:parseInt(a.element.css("top"),10),left:parseInt(a.element.css("left"),10)};d&&d.length&&e(d[0]).css({width:i.width,
height:i.height});a._updateCache(i);a._propagate("resize",b)}})}});e.ui.plugin.add("resizable","containment",{start:function(){var b=e(this).data("resizable"),a=b.element,c=b.options.containment;if(a=c instanceof e?c.get(0):/parent/.test(c)?a.parent().get(0):c){b.containerElement=e(a);if(/document/.test(c)||c==document){b.containerOffset={left:0,top:0};b.containerPosition={left:0,top:0};b.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}}else{var d=
e(a),f=[];e(["Top","Right","Left","Bottom"]).each(function(i,j){f[i]=m(d.css("padding"+j))});b.containerOffset=d.offset();b.containerPosition=d.position();b.containerSize={height:d.innerHeight()-f[3],width:d.innerWidth()-f[1]};c=b.containerOffset;var g=b.containerSize.height,h=b.containerSize.width;h=e.ui.hasScroll(a,"left")?a.scrollWidth:h;g=e.ui.hasScroll(a)?a.scrollHeight:g;b.parentData={element:a,left:c.left,top:c.top,width:h,height:g}}}},resize:function(b){var a=e(this).data("resizable"),c=a.options,
d=a.containerOffset,f=a.position;b=a._aspectRatio||b.shiftKey;var g={top:0,left:0},h=a.containerElement;if(h[0]!=document&&/static/.test(h.css("position")))g=d;if(f.left<(a._helper?d.left:0)){a.size.width+=a._helper?a.position.left-d.left:a.position.left-g.left;if(b)a.size.height=a.size.width/c.aspectRatio;a.position.left=c.helper?d.left:0}if(f.top<(a._helper?d.top:0)){a.size.height+=a._helper?a.position.top-d.top:a.position.top;if(b)a.size.width=a.size.height*c.aspectRatio;a.position.top=a._helper?
d.top:0}a.offset.left=a.parentData.left+a.position.left;a.offset.top=a.parentData.top+a.position.top;c=Math.abs((a._helper?a.offset.left-g.left:a.offset.left-g.left)+a.sizeDiff.width);d=Math.abs((a._helper?a.offset.top-g.top:a.offset.top-d.top)+a.sizeDiff.height);f=a.containerElement.get(0)==a.element.parent().get(0);g=/relative|absolute/.test(a.containerElement.css("position"));if(f&&g)c-=a.parentData.left;if(c+a.size.width>=a.parentData.width){a.size.width=a.parentData.width-c;if(b)a.size.height=
a.size.width/a.aspectRatio}if(d+a.size.height>=a.parentData.height){a.size.height=a.parentData.height-d;if(b)a.size.width=a.size.height*a.aspectRatio}},stop:function(){var b=e(this).data("resizable"),a=b.options,c=b.containerOffset,d=b.containerPosition,f=b.containerElement,g=e(b.helper),h=g.offset(),i=g.outerWidth()-b.sizeDiff.width;g=g.outerHeight()-b.sizeDiff.height;b._helper&&!a.animate&&/relative/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g});b._helper&&!a.animate&&
/static/.test(f.css("position"))&&e(this).css({left:h.left-d.left-c.left,width:i,height:g})}});e.ui.plugin.add("resizable","ghost",{start:function(){var b=e(this).data("resizable"),a=b.options,c=b.size;b.ghost=b.originalElement.clone();b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof a.ghost=="string"?a.ghost:"");b.ghost.appendTo(b.helper)},resize:function(){var b=e(this).data("resizable");
b.ghost&&b.ghost.css({position:"relative",height:b.size.height,width:b.size.width})},stop:function(){var b=e(this).data("resizable");b.ghost&&b.helper&&b.helper.get(0).removeChild(b.ghost.get(0))}});e.ui.plugin.add("resizable","grid",{resize:function(){var b=e(this).data("resizable"),a=b.options,c=b.size,d=b.originalSize,f=b.originalPosition,g=b.axis;a.grid=typeof a.grid=="number"?[a.grid,a.grid]:a.grid;var h=Math.round((c.width-d.width)/(a.grid[0]||1))*(a.grid[0]||1);a=Math.round((c.height-d.height)/
(a.grid[1]||1))*(a.grid[1]||1);if(/^(se|s|e)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else if(/^(ne)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}else{if(/^(sw)$/.test(g)){b.size.width=d.width+h;b.size.height=d.height+a}else{b.size.width=d.width+h;b.size.height=d.height+a;b.position.top=f.top-a}b.position.left=f.left-h}}});var m=function(b){return parseInt(b,10)||0},l=function(b){return!isNaN(parseInt(b,10))}})(jQuery);
;/*
 * jQuery UI Selectable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(e){e.widget("ui.selectable",e.ui.mouse,{options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch"},_create:function(){var c=this;this.element.addClass("ui-selectable");this.dragged=false;var f;this.refresh=function(){f=e(c.options.filter,c.element[0]);f.each(function(){var d=e(this),b=d.offset();e.data(this,"selectable-item",{element:this,$element:d,left:b.left,top:b.top,right:b.left+d.outerWidth(),bottom:b.top+d.outerHeight(),startselected:false,selected:d.hasClass("ui-selected"),
selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})})};this.refresh();this.selectees=f.addClass("ui-selectee");this._mouseInit();this.helper=e("<div class='ui-selectable-helper'></div>")},destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");this._mouseDestroy();return this},_mouseStart:function(c){var f=this;this.opos=[c.pageX,
c.pageY];if(!this.options.disabled){var d=this.options;this.selectees=e(d.filter,this.element[0]);this._trigger("start",c);e(d.appendTo).append(this.helper);this.helper.css({left:c.clientX,top:c.clientY,width:0,height:0});d.autoRefresh&&this.refresh();this.selectees.filter(".ui-selected").each(function(){var b=e.data(this,"selectable-item");b.startselected=true;if(!c.metaKey){b.$element.removeClass("ui-selected");b.selected=false;b.$element.addClass("ui-unselecting");b.unselecting=true;f._trigger("unselecting",
c,{unselecting:b.element})}});e(c.target).parents().andSelf().each(function(){var b=e.data(this,"selectable-item");if(b){var g=!c.metaKey||!b.$element.hasClass("ui-selected");b.$element.removeClass(g?"ui-unselecting":"ui-selected").addClass(g?"ui-selecting":"ui-unselecting");b.unselecting=!g;b.selecting=g;(b.selected=g)?f._trigger("selecting",c,{selecting:b.element}):f._trigger("unselecting",c,{unselecting:b.element});return false}})}},_mouseDrag:function(c){var f=this;this.dragged=true;if(!this.options.disabled){var d=
this.options,b=this.opos[0],g=this.opos[1],h=c.pageX,i=c.pageY;if(b>h){var j=h;h=b;b=j}if(g>i){j=i;i=g;g=j}this.helper.css({left:b,top:g,width:h-b,height:i-g});this.selectees.each(function(){var a=e.data(this,"selectable-item");if(!(!a||a.element==f.element[0])){var k=false;if(d.tolerance=="touch")k=!(a.left>h||a.right<b||a.top>i||a.bottom<g);else if(d.tolerance=="fit")k=a.left>b&&a.right<h&&a.top>g&&a.bottom<i;if(k){if(a.selected){a.$element.removeClass("ui-selected");a.selected=false}if(a.unselecting){a.$element.removeClass("ui-unselecting");
a.unselecting=false}if(!a.selecting){a.$element.addClass("ui-selecting");a.selecting=true;f._trigger("selecting",c,{selecting:a.element})}}else{if(a.selecting)if(c.metaKey&&a.startselected){a.$element.removeClass("ui-selecting");a.selecting=false;a.$element.addClass("ui-selected");a.selected=true}else{a.$element.removeClass("ui-selecting");a.selecting=false;if(a.startselected){a.$element.addClass("ui-unselecting");a.unselecting=true}f._trigger("unselecting",c,{unselecting:a.element})}if(a.selected)if(!c.metaKey&&
!a.startselected){a.$element.removeClass("ui-selected");a.selected=false;a.$element.addClass("ui-unselecting");a.unselecting=true;f._trigger("unselecting",c,{unselecting:a.element})}}}});return false}},_mouseStop:function(c){var f=this;this.dragged=false;e(".ui-unselecting",this.element[0]).each(function(){var d=e.data(this,"selectable-item");d.$element.removeClass("ui-unselecting");d.unselecting=false;d.startselected=false;f._trigger("unselected",c,{unselected:d.element})});e(".ui-selecting",this.element[0]).each(function(){var d=
e.data(this,"selectable-item");d.$element.removeClass("ui-selecting").addClass("ui-selected");d.selecting=false;d.selected=true;d.startselected=true;f._trigger("selected",c,{selected:d.element})});this._trigger("stop",c);this.helper.remove();return false}});e.extend(e.ui.selectable,{version:"1.8.11"})})(jQuery);
;/*
 * jQuery UI Sortable 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.sortable",d.ui.mouse,{widgetEventPrefix:"sort",options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1E3},_create:function(){this.containerCache={};this.element.addClass("ui-sortable");
this.refresh();this.floating=this.items.length?/left|right/.test(this.items[0].item.css("float"))||/inline|table-cell/.test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit()},destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");this._mouseDestroy();for(var a=this.items.length-1;a>=0;a--)this.items[a].item.removeData("sortable-item");return this},_setOption:function(a,b){if(a==="disabled"){this.options[a]=
b;this.widget()[b?"addClass":"removeClass"]("ui-sortable-disabled")}else d.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(a,b){if(this.reverting)return false;if(this.options.disabled||this.options.type=="static")return false;this._refreshItems(a);var c=null,e=this;d(a.target).parents().each(function(){if(d.data(this,"sortable-item")==e){c=d(this);return false}});if(d.data(a.target,"sortable-item")==e)c=d(a.target);if(!c)return false;if(this.options.handle&&!b){var f=false;
d(this.options.handle,c).find("*").andSelf().each(function(){if(this==a.target)f=true});if(!f)return false}this.currentItem=c;this._removeCurrentsFromItems();return true},_mouseStart:function(a,b,c){b=this.options;var e=this;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(a);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-
this.margins.left};this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.originalPosition=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
this.helper[0]!=this.currentItem[0]&&this.currentItem.hide();this._createPlaceholder();b.containment&&this._setContainment();if(b.cursor){if(d("body").css("cursor"))this._storedCursor=d("body").css("cursor");d("body").css("cursor",b.cursor)}if(b.opacity){if(this.helper.css("opacity"))this._storedOpacity=this.helper.css("opacity");this.helper.css("opacity",b.opacity)}if(b.zIndex){if(this.helper.css("zIndex"))this._storedZIndex=this.helper.css("zIndex");this.helper.css("zIndex",b.zIndex)}if(this.scrollParent[0]!=
document&&this.scrollParent[0].tagName!="HTML")this.overflowOffset=this.scrollParent.offset();this._trigger("start",a,this._uiHash());this._preserveHelperProportions||this._cacheHelperProportions();if(!c)for(c=this.containers.length-1;c>=0;c--)this.containers[c]._trigger("activate",a,e._uiHash(this));if(d.ui.ddmanager)d.ui.ddmanager.current=this;d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(a);
return true},_mouseDrag:function(a){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs)this.lastPositionAbs=this.positionAbs;if(this.options.scroll){var b=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if(this.overflowOffset.top+this.scrollParent[0].offsetHeight-a.pageY<b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+b.scrollSpeed;else if(a.pageY-this.overflowOffset.top<
b.scrollSensitivity)this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-b.scrollSpeed;if(this.overflowOffset.left+this.scrollParent[0].offsetWidth-a.pageX<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+b.scrollSpeed;else if(a.pageX-this.overflowOffset.left<b.scrollSensitivity)this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-b.scrollSpeed}else{if(a.pageY-d(document).scrollTop()<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()-
b.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<b.scrollSensitivity)c=d(document).scrollTop(d(document).scrollTop()+b.scrollSpeed);if(a.pageX-d(document).scrollLeft()<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()-b.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<b.scrollSensitivity)c=d(document).scrollLeft(d(document).scrollLeft()+b.scrollSpeed)}c!==false&&d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,
a)}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";for(b=this.items.length-1;b>=0;b--){c=this.items[b];var e=c.item[0],f=this._intersectsWithPointer(c);if(f)if(e!=this.currentItem[0]&&this.placeholder[f==1?"next":"prev"]()[0]!=e&&!d.ui.contains(this.placeholder[0],e)&&(this.options.type=="semi-dynamic"?!d.ui.contains(this.element[0],
e):true)){this.direction=f==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(c))this._rearrange(a,c);else break;this._trigger("change",a,this._uiHash());break}}this._contactContainers(a);d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);this._trigger("sort",a,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(a,b){if(a){d.ui.ddmanager&&!this.options.dropBehaviour&&d.ui.ddmanager.drop(this,a);if(this.options.revert){var c=this;b=c.placeholder.offset();
c.reverting=true;d(this.helper).animate({left:b.left-this.offset.parent.left-c.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:b.top-this.offset.parent.top-c.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(a)})}else this._clear(a,b);return false}},cancel:function(){var a=this;if(this.dragging){this._mouseUp({target:null});this.options.helper=="original"?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):
this.currentItem.show();for(var b=this.containers.length-1;b>=0;b--){this.containers[b]._trigger("deactivate",null,a._uiHash(this));if(this.containers[b].containerCache.over){this.containers[b]._trigger("out",null,a._uiHash(this));this.containers[b].containerCache.over=0}}}if(this.placeholder){this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.options.helper!="original"&&this.helper&&this.helper[0].parentNode&&this.helper.remove();d.extend(this,{helper:null,
dragging:false,reverting:false,_noFinalSort:null});this.domPosition.prev?d(this.domPosition.prev).after(this.currentItem):d(this.domPosition.parent).prepend(this.currentItem)}return this},serialize:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};d(b).each(function(){var e=(d(a.item||this).attr(a.attribute||"id")||"").match(a.expression||/(.+)[-=_](.+)/);if(e)c.push((a.key||e[1]+"[]")+"="+(a.key&&a.expression?e[1]:e[2]))});!c.length&&a.key&&c.push(a.key+"=");return c.join("&")},
toArray:function(a){var b=this._getItemsAsjQuery(a&&a.connected),c=[];a=a||{};b.each(function(){c.push(d(a.item||this).attr(a.attribute||"id")||"")});return c},_intersectsWith:function(a){var b=this.positionAbs.left,c=b+this.helperProportions.width,e=this.positionAbs.top,f=e+this.helperProportions.height,g=a.left,h=g+a.width,i=a.top,k=i+a.height,j=this.offset.click.top,l=this.offset.click.left;j=e+j>i&&e+j<k&&b+l>g&&b+l<h;return this.options.tolerance=="pointer"||this.options.forcePointerForContainers||
this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>a[this.floating?"width":"height"]?j:g<b+this.helperProportions.width/2&&c-this.helperProportions.width/2<h&&i<e+this.helperProportions.height/2&&f-this.helperProportions.height/2<k},_intersectsWithPointer:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left,a.width);b=b&&a;a=this._getDragVerticalDirection();
var c=this._getDragHorizontalDirection();if(!b)return false;return this.floating?c&&c=="right"||a=="down"?2:1:a&&(a=="down"?2:1)},_intersectsWithSides:function(a){var b=d.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,a.top+a.height/2,a.height);a=d.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,a.left+a.width/2,a.width);var c=this._getDragVerticalDirection(),e=this._getDragHorizontalDirection();return this.floating&&e?e=="right"&&a||e=="left"&&!a:c&&(c=="down"&&b||c=="up"&&!b)},
_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;return a!=0&&(a>0?"down":"up")},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;return a!=0&&(a>0?"right":"left")},refresh:function(a){this._refreshItems(a);this.refreshPositions();return this},_connectWith:function(){var a=this.options;return a.connectWith.constructor==String?[a.connectWith]:a.connectWith},_getItemsAsjQuery:function(a){var b=[],c=[],e=this._connectWith();
if(e&&a)for(a=e.length-1;a>=0;a--)for(var f=d(e[a]),g=f.length-1;g>=0;g--){var h=d.data(f[g],"sortable");if(h&&h!=this&&!h.options.disabled)c.push([d.isFunction(h.options.items)?h.options.items.call(h.element):d(h.options.items,h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),h])}c.push([d.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):d(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),
this]);for(a=c.length-1;a>=0;a--)c[a][0].each(function(){b.push(this)});return d(b)},_removeCurrentsFromItems:function(){for(var a=this.currentItem.find(":data(sortable-item)"),b=0;b<this.items.length;b++)for(var c=0;c<a.length;c++)a[c]==this.items[b].item[0]&&this.items.splice(b,1)},_refreshItems:function(a){this.items=[];this.containers=[this];var b=this.items,c=[[d.isFunction(this.options.items)?this.options.items.call(this.element[0],a,{item:this.currentItem}):d(this.options.items,this.element),
this]],e=this._connectWith();if(e)for(var f=e.length-1;f>=0;f--)for(var g=d(e[f]),h=g.length-1;h>=0;h--){var i=d.data(g[h],"sortable");if(i&&i!=this&&!i.options.disabled){c.push([d.isFunction(i.options.items)?i.options.items.call(i.element[0],a,{item:this.currentItem}):d(i.options.items,i.element),i]);this.containers.push(i)}}for(f=c.length-1;f>=0;f--){a=c[f][1];e=c[f][0];h=0;for(g=e.length;h<g;h++){i=d(e[h]);i.data("sortable-item",a);b.push({item:i,instance:a,width:0,height:0,left:0,top:0})}}},refreshPositions:function(a){if(this.offsetParent&&
this.helper)this.offset.parent=this._getParentOffset();for(var b=this.items.length-1;b>=0;b--){var c=this.items[b],e=this.options.toleranceElement?d(this.options.toleranceElement,c.item):c.item;if(!a){c.width=e.outerWidth();c.height=e.outerHeight()}e=e.offset();c.left=e.left;c.top=e.top}if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(b=this.containers.length-1;b>=0;b--){e=this.containers[b].element.offset();this.containers[b].containerCache.left=
e.left;this.containers[b].containerCache.top=e.top;this.containers[b].containerCache.width=this.containers[b].element.outerWidth();this.containers[b].containerCache.height=this.containers[b].element.outerHeight()}return this},_createPlaceholder:function(a){var b=a||this,c=b.options;if(!c.placeholder||c.placeholder.constructor==String){var e=c.placeholder;c.placeholder={element:function(){var f=d(document.createElement(b.currentItem[0].nodeName)).addClass(e||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!e)f.style.visibility="hidden";return f},update:function(f,g){if(!(e&&!c.forcePlaceholderSize)){g.height()||g.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10));g.width()||g.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10))}}}}b.placeholder=d(c.placeholder.element.call(b.element,b.currentItem));b.currentItem.after(b.placeholder);
c.placeholder.update(b,b.placeholder)},_contactContainers:function(a){for(var b=null,c=null,e=this.containers.length-1;e>=0;e--)if(!d.ui.contains(this.currentItem[0],this.containers[e].element[0]))if(this._intersectsWith(this.containers[e].containerCache)){if(!(b&&d.ui.contains(this.containers[e].element[0],b.element[0]))){b=this.containers[e];c=e}}else if(this.containers[e].containerCache.over){this.containers[e]._trigger("out",a,this._uiHash(this));this.containers[e].containerCache.over=0}if(b)if(this.containers.length===
1){this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}else if(this.currentContainer!=this.containers[c]){b=1E4;e=null;for(var f=this.positionAbs[this.containers[c].floating?"left":"top"],g=this.items.length-1;g>=0;g--)if(d.ui.contains(this.containers[c].element[0],this.items[g].item[0])){var h=this.items[g][this.containers[c].floating?"left":"top"];if(Math.abs(h-f)<b){b=Math.abs(h-f);e=this.items[g]}}if(e||this.options.dropOnEmpty){this.currentContainer=
this.containers[c];e?this._rearrange(a,e,null,true):this._rearrange(a,null,this.containers[c].element,true);this._trigger("change",a,this._uiHash());this.containers[c]._trigger("change",a,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[c]._trigger("over",a,this._uiHash(this));this.containers[c].containerCache.over=1}}},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a,this.currentItem])):
b.helper=="clone"?this.currentItem.clone():this.currentItem;a.parents("body").length||d(b.appendTo!="parent"?b.appendTo:this.currentItem[0].parentNode)[0].appendChild(a[0]);if(a[0]==this.currentItem[0])this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")};if(a[0].style.width==""||b.forceHelperSize)a.width(this.currentItem.width());if(a[0].style.height==
""||b.forceHelperSize)a.height(this.currentItem.height());return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.currentItem.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions=
{width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(d(a.containment=="document"?document:window).height()||
document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)){var b=d(a.containment)[0];a=d(a.containment).offset();var c=d(b).css("overflow")!="hidden";this.containment=[a.left+(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,
b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=
document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():
e?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,e=/(html|body)/i.test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0]))this.offset.relative=this._getRelativeOffset();var f=a.pageX,g=a.pageY;if(this.originalPosition){if(this.containment){if(a.pageX-
this.offset.click.left<this.containment[0])f=this.containment[0]+this.offset.click.left;if(a.pageY-this.offset.click.top<this.containment[1])g=this.containment[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>this.containment[2])f=this.containment[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>this.containment[3])g=this.containment[3]+this.offset.click.top}if(b.grid){g=this.originalPageY+Math.round((g-this.originalPageY)/b.grid[1])*b.grid[1];g=this.containment?!(g-this.offset.click.top<
this.containment[1]||g-this.offset.click.top>this.containment[3])?g:!(g-this.offset.click.top<this.containment[1])?g-b.grid[1]:g+b.grid[1]:g;f=this.originalPageX+Math.round((f-this.originalPageX)/b.grid[0])*b.grid[0];f=this.containment?!(f-this.offset.click.left<this.containment[0]||f-this.offset.click.left>this.containment[2])?f:!(f-this.offset.click.left<this.containment[0])?f-b.grid[0]:f+b.grid[0]:f}}return{top:g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&
this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():e?0:c.scrollTop()),left:f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():e?0:c.scrollLeft())}},_rearrange:function(a,b,c,e){c?c[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],this.direction=="down"?b.item[0]:b.item[0].nextSibling);this.counter=
this.counter?++this.counter:1;var f=this,g=this.counter;window.setTimeout(function(){g==f.counter&&f.refreshPositions(!e)},0)},_clear:function(a,b){this.reverting=false;var c=[];!this._noFinalSort&&this.currentItem[0].parentNode&&this.placeholder.before(this.currentItem);this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var e in this._storedCSS)if(this._storedCSS[e]=="auto"||this._storedCSS[e]=="static")this._storedCSS[e]="";this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();
this.fromOutside&&!b&&c.push(function(f){this._trigger("receive",f,this._uiHash(this.fromOutside))});if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!b)c.push(function(f){this._trigger("update",f,this._uiHash())});if(!d.ui.contains(this.element[0],this.currentItem[0])){b||c.push(function(f){this._trigger("remove",f,this._uiHash())});for(e=this.containers.length-1;e>=0;e--)if(d.ui.contains(this.containers[e].element[0],
this.currentItem[0])&&!b){c.push(function(f){return function(g){f._trigger("receive",g,this._uiHash(this))}}.call(this,this.containers[e]));c.push(function(f){return function(g){f._trigger("update",g,this._uiHash(this))}}.call(this,this.containers[e]))}}for(e=this.containers.length-1;e>=0;e--){b||c.push(function(f){return function(g){f._trigger("deactivate",g,this._uiHash(this))}}.call(this,this.containers[e]));if(this.containers[e].containerCache.over){c.push(function(f){return function(g){f._trigger("out",
g,this._uiHash(this))}}.call(this,this.containers[e]));this.containers[e].containerCache.over=0}}this._storedCursor&&d("body").css("cursor",this._storedCursor);this._storedOpacity&&this.helper.css("opacity",this._storedOpacity);if(this._storedZIndex)this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex);this.dragging=false;if(this.cancelHelperRemoval){if(!b){this._trigger("beforeStop",a,this._uiHash());for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}return false}b||
this._trigger("beforeStop",a,this._uiHash());this.placeholder[0].parentNode.removeChild(this.placeholder[0]);this.helper[0]!=this.currentItem[0]&&this.helper.remove();this.helper=null;if(!b){for(e=0;e<c.length;e++)c[e].call(this,a);this._trigger("stop",a,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){d.Widget.prototype._trigger.apply(this,arguments)===false&&this.cancel()},_uiHash:function(a){var b=a||this;return{helper:b.helper,placeholder:b.placeholder||d([]),position:b.position,
originalPosition:b.originalPosition,offset:b.positionAbs,item:b.currentItem,sender:a?a.element:null}}});d.extend(d.ui.sortable,{version:"1.8.11"})})(jQuery);
;/*
 * jQuery UI Accordion 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(c){c.widget("ui.accordion",{options:{active:0,animated:"slide",autoHeight:true,clearStyle:false,collapsible:false,event:"click",fillSpace:false,header:"> li > :first-child,> :not(li):even",icons:{header:"ui-icon-triangle-1-e",headerSelected:"ui-icon-triangle-1-s"},navigation:false,navigationFilter:function(){return this.href.toLowerCase()===location.href.toLowerCase()}},_create:function(){var a=this,b=a.options;a.running=0;a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
a.headers=a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion",function(){b.disabled||c(this).addClass("ui-state-hover")}).bind("mouseleave.accordion",function(){b.disabled||c(this).removeClass("ui-state-hover")}).bind("focus.accordion",function(){b.disabled||c(this).addClass("ui-state-focus")}).bind("blur.accordion",function(){b.disabled||c(this).removeClass("ui-state-focus")});a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
if(b.navigation){var d=a.element.find("a").filter(b.navigationFilter).eq(0);if(d.length){var h=d.closest(".ui-accordion-header");a.active=h.length?h:d.closest(".ui-accordion-content").prev()}}a.active=a._findActive(a.active||b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");a.active.next().addClass("ui-accordion-content-active");a._createIcons();a.resize();a.element.attr("role","tablist");a.headers.attr("role","tab").bind("keydown.accordion",
function(f){return a._keydown(f)}).next().attr("role","tabpanel");a.headers.not(a.active||"").attr({"aria-expanded":"false","aria-selected":"false",tabIndex:-1}).next().hide();a.active.length?a.active.attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}):a.headers.eq(0).attr("tabIndex",0);c.browser.safari||a.headers.find("a").attr("tabIndex",-1);b.event&&a.headers.bind(b.event.split(" ").join(".accordion ")+".accordion",function(f){a._clickHandler.call(a,f,this);f.preventDefault()})},_createIcons:function(){var a=
this.options;if(a.icons){c("<span></span>").addClass("ui-icon "+a.icons.header).prependTo(this.headers);this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);this.element.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.children(".ui-icon").remove();this.element.removeClass("ui-accordion-icons")},destroy:function(){var a=this.options;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
this.headers.find("a").removeAttr("tabIndex");this._destroyIcons();var b=this.headers.next().css("display","").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");if(a.autoHeight||a.fillHeight)b.css("height","");return c.Widget.prototype.destroy.call(this)},_setOption:function(a,b){c.Widget.prototype._setOption.apply(this,arguments);a=="active"&&this.activate(b);if(a=="icons"){this._destroyIcons();
b&&this._createIcons()}if(a=="disabled")this.headers.add(this.headers.next())[b?"addClass":"removeClass"]("ui-accordion-disabled ui-state-disabled")},_keydown:function(a){if(!(this.options.disabled||a.altKey||a.ctrlKey)){var b=c.ui.keyCode,d=this.headers.length,h=this.headers.index(a.target),f=false;switch(a.keyCode){case b.RIGHT:case b.DOWN:f=this.headers[(h+1)%d];break;case b.LEFT:case b.UP:f=this.headers[(h-1+d)%d];break;case b.SPACE:case b.ENTER:this._clickHandler({target:a.target},a.target);
a.preventDefault()}if(f){c(a.target).attr("tabIndex",-1);c(f).attr("tabIndex",0);f.focus();return false}return true}},resize:function(){var a=this.options,b;if(a.fillSpace){if(c.browser.msie){var d=this.element.parent().css("overflow");this.element.parent().css("overflow","hidden")}b=this.element.parent().height();c.browser.msie&&this.element.parent().css("overflow",d);this.headers.each(function(){b-=c(this).outerHeight(true)});this.headers.next().each(function(){c(this).height(Math.max(0,b-c(this).innerHeight()+
c(this).height()))}).css("overflow","auto")}else if(a.autoHeight){b=0;this.headers.next().each(function(){b=Math.max(b,c(this).height("").height())}).height(b)}return this},activate:function(a){this.options.active=a;a=this._findActive(a)[0];this._clickHandler({target:a},a);return this},_findActive:function(a){return a?typeof a==="number"?this.headers.filter(":eq("+a+")"):this.headers.not(this.headers.not(a)):a===false?c([]):this.headers.filter(":eq(0)")},_clickHandler:function(a,b){var d=this.options;
if(!d.disabled)if(a.target){a=c(a.currentTarget||b);b=a[0]===this.active[0];d.active=d.collapsible&&b?false:this.headers.index(a);if(!(this.running||!d.collapsible&&b)){var h=this.active;j=a.next();g=this.active.next();e={options:d,newHeader:b&&d.collapsible?c([]):a,oldHeader:this.active,newContent:b&&d.collapsible?c([]):j,oldContent:g};var f=this.headers.index(this.active[0])>this.headers.index(a[0]);this.active=b?c([]):a;this._toggle(j,g,e,b,f);h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
if(!b){a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);a.next().addClass("ui-accordion-content-active")}}}else if(d.collapsible){this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);this.active.next().addClass("ui-accordion-content-active");var g=this.active.next(),
e={options:d,newHeader:c([]),oldHeader:d.active,newContent:c([]),oldContent:g},j=this.active=c([]);this._toggle(j,g,e)}},_toggle:function(a,b,d,h,f){var g=this,e=g.options;g.toShow=a;g.toHide=b;g.data=d;var j=function(){if(g)return g._completed.apply(g,arguments)};g._trigger("changestart",null,g.data);g.running=b.size()===0?a.size():b.size();if(e.animated){d={};d=e.collapsible&&h?{toShow:c([]),toHide:b,complete:j,down:f,autoHeight:e.autoHeight||e.fillSpace}:{toShow:a,toHide:b,complete:j,down:f,autoHeight:e.autoHeight||
e.fillSpace};if(!e.proxied)e.proxied=e.animated;if(!e.proxiedDuration)e.proxiedDuration=e.duration;e.animated=c.isFunction(e.proxied)?e.proxied(d):e.proxied;e.duration=c.isFunction(e.proxiedDuration)?e.proxiedDuration(d):e.proxiedDuration;h=c.ui.accordion.animations;var i=e.duration,k=e.animated;if(k&&!h[k]&&!c.easing[k])k="slide";h[k]||(h[k]=function(l){this.slide(l,{easing:k,duration:i||700})});h[k](d)}else{if(e.collapsible&&h)a.toggle();else{b.hide();a.show()}j(true)}b.prev().attr({"aria-expanded":"false",
"aria-selected":"false",tabIndex:-1}).blur();a.prev().attr({"aria-expanded":"true","aria-selected":"true",tabIndex:0}).focus()},_completed:function(a){this.running=a?0:--this.running;if(!this.running){this.options.clearStyle&&this.toShow.add(this.toHide).css({height:"",overflow:""});this.toHide.removeClass("ui-accordion-content-active");if(this.toHide.length)this.toHide.parent()[0].className=this.toHide.parent()[0].className;this._trigger("change",null,this.data)}}});c.extend(c.ui.accordion,{version:"1.8.11",
animations:{slide:function(a,b){a=c.extend({easing:"swing",duration:300},a,b);if(a.toHide.size())if(a.toShow.size()){var d=a.toShow.css("overflow"),h=0,f={},g={},e;b=a.toShow;e=b[0].style.width;b.width(parseInt(b.parent().width(),10)-parseInt(b.css("paddingLeft"),10)-parseInt(b.css("paddingRight"),10)-(parseInt(b.css("borderLeftWidth"),10)||0)-(parseInt(b.css("borderRightWidth"),10)||0));c.each(["height","paddingTop","paddingBottom"],function(j,i){g[i]="hide";j=(""+c.css(a.toShow[0],i)).match(/^([\d+-.]+)(.*)$/);
f[i]={value:j[1],unit:j[2]||"px"}});a.toShow.css({height:0,overflow:"hidden"}).show();a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(g,{step:function(j,i){if(i.prop=="height")h=i.end-i.start===0?0:(i.now-i.start)/(i.end-i.start);a.toShow[0].style[i.prop]=h*f[i.prop].value+f[i.prop].unit},duration:a.duration,easing:a.easing,complete:function(){a.autoHeight||a.toShow.css("height","");a.toShow.css({width:e,overflow:d});a.complete()}})}else a.toHide.animate({height:"hide",
paddingTop:"hide",paddingBottom:"hide"},a);else a.toShow.animate({height:"show",paddingTop:"show",paddingBottom:"show"},a)},bounceslide:function(a){this.slide(a,{easing:a.down?"easeOutBounce":"swing",duration:a.down?1E3:200})}}})})(jQuery);
;/*
 * jQuery UI Autocomplete 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function(d){var e=0;d.widget("ui.autocomplete",{options:{appendTo:"body",autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null},pending:0,_create:function(){var a=this,b=this.element[0].ownerDocument,g;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off").attr({role:"textbox","aria-autocomplete":"list","aria-haspopup":"true"}).bind("keydown.autocomplete",function(c){if(!(a.options.disabled||a.element.attr("readonly"))){g=
false;var f=d.ui.keyCode;switch(c.keyCode){case f.PAGE_UP:a._move("previousPage",c);break;case f.PAGE_DOWN:a._move("nextPage",c);break;case f.UP:a._move("previous",c);c.preventDefault();break;case f.DOWN:a._move("next",c);c.preventDefault();break;case f.ENTER:case f.NUMPAD_ENTER:if(a.menu.active){g=true;c.preventDefault()}case f.TAB:if(!a.menu.active)return;a.menu.select(c);break;case f.ESCAPE:a.element.val(a.term);a.close(c);break;default:clearTimeout(a.searching);a.searching=setTimeout(function(){if(a.term!=
a.element.val()){a.selectedItem=null;a.search(null,c)}},a.options.delay);break}}}).bind("keypress.autocomplete",function(c){if(g){g=false;c.preventDefault()}}).bind("focus.autocomplete",function(){if(!a.options.disabled){a.selectedItem=null;a.previous=a.element.val()}}).bind("blur.autocomplete",function(c){if(!a.options.disabled){clearTimeout(a.searching);a.closing=setTimeout(function(){a.close(c);a._change(c)},150)}});this._initSource();this.response=function(){return a._response.apply(a,arguments)};
this.menu=d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo||"body",b)[0]).mousedown(function(c){var f=a.menu.element[0];d(c.target).closest(".ui-menu-item").length||setTimeout(function(){d(document).one("mousedown",function(h){h.target!==a.element[0]&&h.target!==f&&!d.ui.contains(f,h.target)&&a.close()})},1);setTimeout(function(){clearTimeout(a.closing)},13)}).menu({focus:function(c,f){f=f.item.data("item.autocomplete");false!==a._trigger("focus",c,{item:f})&&/^key/.test(c.originalEvent.type)&&
a.element.val(f.value)},selected:function(c,f){var h=f.item.data("item.autocomplete"),i=a.previous;if(a.element[0]!==b.activeElement){a.element.focus();a.previous=i;setTimeout(function(){a.previous=i;a.selectedItem=h},1)}false!==a._trigger("select",c,{item:h})&&a.element.val(h.value);a.term=a.element.val();a.close(c);a.selectedItem=h},blur:function(){a.menu.element.is(":visible")&&a.element.val()!==a.term&&a.element.val(a.term)}}).zIndex(this.element.zIndex()+1).css({top:0,left:0}).hide().data("menu");
d.fn.bgiframe&&this.menu.element.bgiframe()},destroy:function(){this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");this.menu.element.remove();d.Widget.prototype.destroy.call(this)},_setOption:function(a,b){d.Widget.prototype._setOption.apply(this,arguments);a==="source"&&this._initSource();if(a==="appendTo")this.menu.element.appendTo(d(b||"body",this.element[0].ownerDocument)[0]);a==="disabled"&&
b&&this.xhr&&this.xhr.abort()},_initSource:function(){var a=this,b,g;if(d.isArray(this.options.source)){b=this.options.source;this.source=function(c,f){f(d.ui.autocomplete.filter(b,c.term))}}else if(typeof this.options.source==="string"){g=this.options.source;this.source=function(c,f){a.xhr&&a.xhr.abort();a.xhr=d.ajax({url:g,data:c,dataType:"json",autocompleteRequest:++e,success:function(h){this.autocompleteRequest===e&&f(h)},error:function(){this.autocompleteRequest===e&&f([])}})}}else this.source=
this.options.source},search:function(a,b){a=a!=null?a:this.element.val();this.term=this.element.val();if(a.length<this.options.minLength)return this.close(b);clearTimeout(this.closing);if(this._trigger("search",b)!==false)return this._search(a)},_search:function(a){this.pending++;this.element.addClass("ui-autocomplete-loading");this.source({term:a},this.response)},_response:function(a){if(!this.options.disabled&&a&&a.length){a=this._normalize(a);this._suggest(a);this._trigger("open")}else this.close();
this.pending--;this.pending||this.element.removeClass("ui-autocomplete-loading")},close:function(a){clearTimeout(this.closing);if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.deactivate();this._trigger("close",a)}},_change:function(a){this.previous!==this.element.val()&&this._trigger("change",a,{item:this.selectedItem})},_normalize:function(a){if(a.length&&a[0].label&&a[0].value)return a;return d.map(a,function(b){if(typeof b==="string")return{label:b,value:b};return d.extend({label:b.label||
b.value,value:b.value||b.label},b)})},_suggest:function(a){var b=this.menu.element.empty().zIndex(this.element.zIndex()+1);this._renderMenu(b,a);this.menu.deactivate();this.menu.refresh();b.show();this._resizeMenu();b.position(d.extend({of:this.element},this.options.position));this.options.autoFocus&&this.menu.next(new d.Event("mouseover"))},_resizeMenu:function(){var a=this.menu.element;a.outerWidth(Math.max(a.width("").outerWidth(),this.element.outerWidth()))},_renderMenu:function(a,b){var g=this;
d.each(b,function(c,f){g._renderItem(a,f)})},_renderItem:function(a,b){return d("<li></li>").data("item.autocomplete",b).append(d("<a></a>").text(b.label)).appendTo(a)},_move:function(a,b){if(this.menu.element.is(":visible"))if(this.menu.first()&&/^previous/.test(a)||this.menu.last()&&/^next/.test(a)){this.element.val(this.term);this.menu.deactivate()}else this.menu[a](b);else this.search(null,b)},widget:function(){return this.menu.element}});d.extend(d.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,
"\\$&")},filter:function(a,b){var g=new RegExp(d.ui.autocomplete.escapeRegex(b),"i");return d.grep(a,function(c){return g.test(c.label||c.value||c)})}})})(jQuery);
(function(d){d.widget("ui.menu",{_create:function(){var e=this;this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({role:"listbox","aria-activedescendant":"ui-active-menuitem"}).click(function(a){if(d(a.target).closest(".ui-menu-item a").length){a.preventDefault();e.select(a)}});this.refresh()},refresh:function(){var e=this;this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","menuitem").children("a").addClass("ui-corner-all").attr("tabindex",
-1).mouseenter(function(a){e.activate(a,d(this).parent())}).mouseleave(function(){e.deactivate()})},activate:function(e,a){this.deactivate();if(this.hasScroll()){var b=a.offset().top-this.element.offset().top,g=this.element.attr("scrollTop"),c=this.element.height();if(b<0)this.element.attr("scrollTop",g+b);else b>=c&&this.element.attr("scrollTop",g+b-c+a.height())}this.active=a.eq(0).children("a").addClass("ui-state-hover").attr("id","ui-active-menuitem").end();this._trigger("focus",e,{item:a})},
deactivate:function(){if(this.active){this.active.children("a").removeClass("ui-state-hover").removeAttr("id");this._trigger("blur");this.active=null}},next:function(e){this.move("next",".ui-menu-item:first",e)},previous:function(e){this.move("prev",".ui-menu-item:last",e)},first:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},last:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},move:function(e,a,b){if(this.active){e=this.active[e+"All"](".ui-menu-item").eq(0);
e.length?this.activate(b,e):this.activate(b,this.element.children(a))}else this.activate(b,this.element.children(a))},nextPage:function(e){if(this.hasScroll())if(!this.active||this.last())this.activate(e,this.element.children(".ui-menu-item:first"));else{var a=this.active.offset().top,b=this.element.height(),g=this.element.children(".ui-menu-item").filter(function(){var c=d(this).offset().top-a-b+d(this).height();return c<10&&c>-10});g.length||(g=this.element.children(".ui-menu-item:last"));this.activate(e,
g)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||this.last()?":first":":last"))},previousPage:function(e){if(this.hasScroll())if(!this.active||this.first())this.activate(e,this.element.children(".ui-menu-item:last"));else{var a=this.active.offset().top,b=this.element.height();result=this.element.children(".ui-menu-item").filter(function(){var g=d(this).offset().top-a+b-d(this).height();return g<10&&g>-10});result.length||(result=this.element.children(".ui-menu-item:first"));
this.activate(e,result)}else this.activate(e,this.element.children(".ui-menu-item").filter(!this.active||this.first()?":last":":first"))},hasScroll:function(){return this.element.height()<this.element.attr("scrollHeight")},select:function(e){this._trigger("selected",e,{item:this.active})}})})(jQuery);
;/*
 * jQuery UI Button 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(a){var g,i=function(b){a(":ui-button",b.target.form).each(function(){var c=a(this).data("button");setTimeout(function(){c.refresh()},1)})},h=function(b){var c=b.name,d=b.form,f=a([]);if(c)f=d?a(d).find("[name='"+c+"']"):a("[name='"+c+"']",b.ownerDocument).filter(function(){return!this.form});return f};a.widget("ui.button",{options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset.button").bind("reset.button",
i);if(typeof this.options.disabled!=="boolean")this.options.disabled=this.element.attr("disabled");this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var b=this,c=this.options,d=this.type==="checkbox"||this.type==="radio",f="ui-state-hover"+(!d?" ui-state-active":"");if(c.label===null)c.label=this.buttonElement.html();if(this.element.is(":disabled"))c.disabled=true;this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role","button").bind("mouseenter.button",
function(){if(!c.disabled){a(this).addClass("ui-state-hover");this===g&&a(this).addClass("ui-state-active")}}).bind("mouseleave.button",function(){c.disabled||a(this).removeClass(f)}).bind("focus.button",function(){a(this).addClass("ui-state-focus")}).bind("blur.button",function(){a(this).removeClass("ui-state-focus")});d&&this.element.bind("change.button",function(){b.refresh()});if(this.type==="checkbox")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).toggleClass("ui-state-active");
b.buttonElement.attr("aria-pressed",b.element[0].checked)});else if(this.type==="radio")this.buttonElement.bind("click.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");b.buttonElement.attr("aria-pressed",true);var e=b.element[0];h(e).not(e).map(function(){return a(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed",false)});else{this.buttonElement.bind("mousedown.button",function(){if(c.disabled)return false;a(this).addClass("ui-state-active");
g=this;a(document).one("mouseup",function(){g=null})}).bind("mouseup.button",function(){if(c.disabled)return false;a(this).removeClass("ui-state-active")}).bind("keydown.button",function(e){if(c.disabled)return false;if(e.keyCode==a.ui.keyCode.SPACE||e.keyCode==a.ui.keyCode.ENTER)a(this).addClass("ui-state-active")}).bind("keyup.button",function(){a(this).removeClass("ui-state-active")});this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===a.ui.keyCode.SPACE&&a(this).click()})}this._setOption("disabled",
c.disabled)},_determineButtonType:function(){this.type=this.element.is(":checkbox")?"checkbox":this.element.is(":radio")?"radio":this.element.is("input")?"input":"button";if(this.type==="checkbox"||this.type==="radio"){var b=this.element.parents().filter(":last"),c="label[for="+this.element.attr("id")+"]";this.buttonElement=b.find(c);if(!this.buttonElement.length){b=b.length?b.siblings():this.element.siblings();this.buttonElement=b.filter(c);if(!this.buttonElement.length)this.buttonElement=b.find(c)}this.element.addClass("ui-helper-hidden-accessible");
(b=this.element.is(":checked"))&&this.buttonElement.addClass("ui-state-active");this.buttonElement.attr("aria-pressed",b)}else this.buttonElement=this.element},widget:function(){return this.buttonElement},destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
this.hasTitle||this.buttonElement.removeAttr("title");a.Widget.prototype.destroy.call(this)},_setOption:function(b,c){a.Widget.prototype._setOption.apply(this,arguments);if(b==="disabled")c?this.element.attr("disabled",true):this.element.removeAttr("disabled");this._resetButton()},refresh:function(){var b=this.element.is(":disabled");b!==this.options.disabled&&this._setOption("disabled",b);if(this.type==="radio")h(this.element[0]).each(function(){a(this).is(":checked")?a(this).button("widget").addClass("ui-state-active").attr("aria-pressed",
true):a(this).button("widget").removeClass("ui-state-active").attr("aria-pressed",false)});else if(this.type==="checkbox")this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed",true):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed",false)},_resetButton:function(){if(this.type==="input")this.options.label&&this.element.val(this.options.label);else{var b=this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only"),
c=a("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(b.empty()).text(),d=this.options.icons,f=d.primary&&d.secondary,e=[];if(d.primary||d.secondary){if(this.options.text)e.push("ui-button-text-icon"+(f?"s":d.primary?"-primary":"-secondary"));d.primary&&b.prepend("<span class='ui-button-icon-primary ui-icon "+d.primary+"'></span>");d.secondary&&b.append("<span class='ui-button-icon-secondary ui-icon "+d.secondary+"'></span>");if(!this.options.text){e.push(f?"ui-button-icons-only":
"ui-button-icon-only");this.hasTitle||b.attr("title",c)}}else e.push("ui-button-text-only");b.addClass(e.join(" "))}}});a.widget("ui.buttonset",{options:{items:":button, :submit, :reset, :checkbox, :radio, a, :data(button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(b,c){b==="disabled"&&this.buttons.button("option",b,c);a.Widget.prototype._setOption.apply(this,arguments)},refresh:function(){this.buttons=this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass("ui-corner-left").end().filter(":last").addClass("ui-corner-right").end().end()},
destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return a(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy");a.Widget.prototype.destroy.call(this)}})})(jQuery);
;/*
 * jQuery UI Dialog 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function(c,j){var k={buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},l={maxHeight:true,maxWidth:true,minHeight:true,minWidth:true};c.widget("ui.dialog",{options:{autoOpen:true,buttons:{},closeOnEscape:true,closeText:"close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:false,maxWidth:false,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",collision:"fit",using:function(a){var b=c(this).css(a).offset().top;b<0&&
c(this).css("top",a.top-b)}},resizable:true,show:null,stack:true,title:"",width:300,zIndex:1E3},_create:function(){this.originalTitle=this.element.attr("title");if(typeof this.originalTitle!=="string")this.originalTitle="";this.options.title=this.options.title||this.originalTitle;var a=this,b=a.options,d=b.title||"&#160;",e=c.ui.dialog.getTitleId(a.element),g=(a.uiDialog=c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b.dialogClass).css({zIndex:b.zIndex}).attr("tabIndex",
-1).css("outline",0).keydown(function(i){if(b.closeOnEscape&&i.keyCode&&i.keyCode===c.ui.keyCode.ESCAPE){a.close(i);i.preventDefault()}}).attr({role:"dialog","aria-labelledby":e}).mousedown(function(i){a.moveToTop(false,i)});a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);var f=(a.uiDialogTitlebar=c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g),h=c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role",
"button").hover(function(){h.addClass("ui-state-hover")},function(){h.removeClass("ui-state-hover")}).focus(function(){h.addClass("ui-state-focus")}).blur(function(){h.removeClass("ui-state-focus")}).click(function(i){a.close(i);return false}).appendTo(f);(a.uiDialogTitlebarCloseText=c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);c("<span></span>").addClass("ui-dialog-title").attr("id",e).html(d).prependTo(f);if(c.isFunction(b.beforeclose)&&!c.isFunction(b.beforeClose))b.beforeClose=
b.beforeclose;f.find("*").add(f).disableSelection();b.draggable&&c.fn.draggable&&a._makeDraggable();b.resizable&&c.fn.resizable&&a._makeResizable();a._createButtons(b.buttons);a._isOpen=false;c.fn.bgiframe&&g.bgiframe()},_init:function(){this.options.autoOpen&&this.open()},destroy:function(){var a=this;a.overlay&&a.overlay.destroy();a.uiDialog.hide();a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");a.uiDialog.remove();a.originalTitle&&
a.element.attr("title",a.originalTitle);return a},widget:function(){return this.uiDialog},close:function(a){var b=this,d,e;if(false!==b._trigger("beforeClose",a)){b.overlay&&b.overlay.destroy();b.uiDialog.unbind("keypress.ui-dialog");b._isOpen=false;if(b.options.hide)b.uiDialog.hide(b.options.hide,function(){b._trigger("close",a)});else{b.uiDialog.hide();b._trigger("close",a)}c.ui.dialog.overlay.resize();if(b.options.modal){d=0;c(".ui-dialog").each(function(){if(this!==b.uiDialog[0]){e=c(this).css("z-index");
isNaN(e)||(d=Math.max(d,e))}});c.ui.dialog.maxZ=d}return b}},isOpen:function(){return this._isOpen},moveToTop:function(a,b){var d=this,e=d.options;if(e.modal&&!a||!e.stack&&!e.modal)return d._trigger("focus",b);if(e.zIndex>c.ui.dialog.maxZ)c.ui.dialog.maxZ=e.zIndex;if(d.overlay){c.ui.dialog.maxZ+=1;d.overlay.$el.css("z-index",c.ui.dialog.overlay.maxZ=c.ui.dialog.maxZ)}a={scrollTop:d.element.attr("scrollTop"),scrollLeft:d.element.attr("scrollLeft")};c.ui.dialog.maxZ+=1;d.uiDialog.css("z-index",c.ui.dialog.maxZ);
d.element.attr(a);d._trigger("focus",b);return d},open:function(){if(!this._isOpen){var a=this,b=a.options,d=a.uiDialog;a.overlay=b.modal?new c.ui.dialog.overlay(a):null;a._size();a._position(b.position);d.show(b.show);a.moveToTop(true);b.modal&&d.bind("keypress.ui-dialog",function(e){if(e.keyCode===c.ui.keyCode.TAB){var g=c(":tabbable",this),f=g.filter(":first");g=g.filter(":last");if(e.target===g[0]&&!e.shiftKey){f.focus(1);return false}else if(e.target===f[0]&&e.shiftKey){g.focus(1);return false}}});
c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();a._isOpen=true;a._trigger("open");return a}},_createButtons:function(a){var b=this,d=false,e=c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),g=c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);b.uiDialog.find(".ui-dialog-buttonpane").remove();typeof a==="object"&&a!==null&&c.each(a,function(){return!(d=true)});if(d){c.each(a,function(f,
h){h=c.isFunction(h)?{click:h,text:f}:h;f=c('<button type="button"></button>').attr(h,true).unbind("click").click(function(){h.click.apply(b.element[0],arguments)}).appendTo(g);c.fn.button&&f.button()});e.appendTo(b.uiDialog)}},_makeDraggable:function(){function a(f){return{position:f.position,offset:f.offset}}var b=this,d=b.options,e=c(document),g;b.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(f,h){g=
d.height==="auto"?"auto":c(this).height();c(this).height(c(this).height()).addClass("ui-dialog-dragging");b._trigger("dragStart",f,a(h))},drag:function(f,h){b._trigger("drag",f,a(h))},stop:function(f,h){d.position=[h.position.left-e.scrollLeft(),h.position.top-e.scrollTop()];c(this).removeClass("ui-dialog-dragging").height(g);b._trigger("dragStop",f,a(h));c.ui.dialog.overlay.resize()}})},_makeResizable:function(a){function b(f){return{originalPosition:f.originalPosition,originalSize:f.originalSize,
position:f.position,size:f.size}}a=a===j?this.options.resizable:a;var d=this,e=d.options,g=d.uiDialog.css("position");a=typeof a==="string"?a:"n,e,s,w,se,sw,ne,nw";d.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:d.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:d._minHeight(),handles:a,start:function(f,h){c(this).addClass("ui-dialog-resizing");d._trigger("resizeStart",f,b(h))},resize:function(f,h){d._trigger("resize",f,b(h))},stop:function(f,
h){c(this).removeClass("ui-dialog-resizing");e.height=c(this).height();e.width=c(this).width();d._trigger("resizeStop",f,b(h));c.ui.dialog.overlay.resize()}}).css("position",g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")},_minHeight:function(){var a=this.options;return a.height==="auto"?a.minHeight:Math.min(a.minHeight,a.height)},_position:function(a){var b=[],d=[0,0],e;if(a){if(typeof a==="string"||typeof a==="object"&&"0"in a){b=a.split?a.split(" "):[a[0],a[1]];if(b.length===
1)b[1]=b[0];c.each(["left","top"],function(g,f){if(+b[g]===b[g]){d[g]=b[g];b[g]=f}});a={my:b.join(" "),at:b.join(" "),offset:d.join(" ")}}a=c.extend({},c.ui.dialog.prototype.options.position,a)}else a=c.ui.dialog.prototype.options.position;(e=this.uiDialog.is(":visible"))||this.uiDialog.show();this.uiDialog.css({top:0,left:0}).position(c.extend({of:window},a));e||this.uiDialog.hide()},_setOptions:function(a){var b=this,d={},e=false;c.each(a,function(g,f){b._setOption(g,f);if(g in k)e=true;if(g in
l)d[g]=f});e&&this._size();this.uiDialog.is(":data(resizable)")&&this.uiDialog.resizable("option",d)},_setOption:function(a,b){var d=this,e=d.uiDialog;switch(a){case "beforeclose":a="beforeClose";break;case "buttons":d._createButtons(b);break;case "closeText":d.uiDialogTitlebarCloseText.text(""+b);break;case "dialogClass":e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all "+b);break;case "disabled":b?e.addClass("ui-dialog-disabled"):e.removeClass("ui-dialog-disabled");
break;case "draggable":var g=e.is(":data(draggable)");g&&!b&&e.draggable("destroy");!g&&b&&d._makeDraggable();break;case "position":d._position(b);break;case "resizable":(g=e.is(":data(resizable)"))&&!b&&e.resizable("destroy");g&&typeof b==="string"&&e.resizable("option","handles",b);!g&&b!==false&&d._makeResizable(b);break;case "title":c(".ui-dialog-title",d.uiDialogTitlebar).html(""+(b||"&#160;"));break}c.Widget.prototype._setOption.apply(d,arguments)},_size:function(){var a=this.options,b,d,e=
this.uiDialog.is(":visible");this.element.show().css({width:"auto",minHeight:0,height:0});if(a.minWidth>a.width)a.width=a.minWidth;b=this.uiDialog.css({height:"auto",width:a.width}).height();d=Math.max(0,a.minHeight-b);if(a.height==="auto")if(c.support.minHeight)this.element.css({minHeight:d,height:"auto"});else{this.uiDialog.show();a=this.element.css("height","auto").height();e||this.uiDialog.hide();this.element.height(Math.max(a,d))}else this.element.height(Math.max(a.height-b,0));this.uiDialog.is(":data(resizable)")&&
this.uiDialog.resizable("option","minHeight",this._minHeight())}});c.extend(c.ui.dialog,{version:"1.8.11",uuid:0,maxZ:0,getTitleId:function(a){a=a.attr("id");if(!a){this.uuid+=1;a=this.uuid}return"ui-dialog-title-"+a},overlay:function(a){this.$el=c.ui.dialog.overlay.create(a)}});c.extend(c.ui.dialog.overlay,{instances:[],oldInstances:[],maxZ:0,events:c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","),function(a){return a+".dialog-overlay"}).join(" "),create:function(a){if(this.instances.length===
0){setTimeout(function(){c.ui.dialog.overlay.instances.length&&c(document).bind(c.ui.dialog.overlay.events,function(d){if(c(d.target).zIndex()<c.ui.dialog.overlay.maxZ)return false})},1);c(document).bind("keydown.dialog-overlay",function(d){if(a.options.closeOnEscape&&d.keyCode&&d.keyCode===c.ui.keyCode.ESCAPE){a.close(d);d.preventDefault()}});c(window).bind("resize.dialog-overlay",c.ui.dialog.overlay.resize)}var b=(this.oldInstances.pop()||c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({width:this.width(),
height:this.height()});c.fn.bgiframe&&b.bgiframe();this.instances.push(b);return b},destroy:function(a){var b=c.inArray(a,this.instances);b!=-1&&this.oldInstances.push(this.instances.splice(b,1)[0]);this.instances.length===0&&c([document,window]).unbind(".dialog-overlay");a.remove();var d=0;c.each(this.instances,function(){d=Math.max(d,this.css("z-index"))});this.maxZ=d},height:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
b=Math.max(document.documentElement.offsetHeight,document.body.offsetHeight);return a<b?c(window).height()+"px":a+"px"}else return c(document).height()+"px"},width:function(){var a,b;if(c.browser.msie&&c.browser.version<7){a=Math.max(document.documentElement.scrollWidth,document.body.scrollWidth);b=Math.max(document.documentElement.offsetWidth,document.body.offsetWidth);return a<b?c(window).width()+"px":a+"px"}else return c(document).width()+"px"},resize:function(){var a=c([]);c.each(c.ui.dialog.overlay.instances,
function(){a=a.add(this)});a.css({width:0,height:0}).css({width:c.ui.dialog.overlay.width(),height:c.ui.dialog.overlay.height()})}});c.extend(c.ui.dialog.overlay.prototype,{destroy:function(){c.ui.dialog.overlay.destroy(this.$el)}})})(jQuery);
;/*
 * jQuery UI Slider 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var b=this,a=this.options;this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");a.disabled&&this.element.addClass("ui-slider-disabled ui-disabled");
this.range=d([]);if(a.range){if(a.range===true){this.range=d("<div></div>");if(!a.values)a.values=[this._valueMin(),this._valueMin()];if(a.values.length&&a.values.length!==2)a.values=[a.values[0],a.values[0]]}else this.range=d("<div></div>");this.range.appendTo(this.element).addClass("ui-slider-range");if(a.range==="min"||a.range==="max")this.range.addClass("ui-slider-range-"+a.range);this.range.addClass("ui-widget-header")}d(".ui-slider-handle",this.element).length===0&&d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");
if(a.values&&a.values.length)for(;d(".ui-slider-handle",this.element).length<a.values.length;)d("<a href='#'></a>").appendTo(this.element).addClass("ui-slider-handle");this.handles=d(".ui-slider-handle",this.element).addClass("ui-state-default ui-corner-all");this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(c){c.preventDefault()}).hover(function(){a.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(a.disabled)d(this).blur();
else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(c){d(this).data("index.ui-slider-handle",c)});this.handles.keydown(function(c){var e=true,f=d(this).data("index.ui-slider-handle"),h,g,i;if(!b.options.disabled){switch(c.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:e=
false;if(!b._keySliding){b._keySliding=true;d(this).addClass("ui-state-active");h=b._start(c,f);if(h===false)return}break}i=b.options.step;h=b.options.values&&b.options.values.length?(g=b.values(f)):(g=b.value());switch(c.keyCode){case d.ui.keyCode.HOME:g=b._valueMin();break;case d.ui.keyCode.END:g=b._valueMax();break;case d.ui.keyCode.PAGE_UP:g=b._trimAlignValue(h+(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:g=b._trimAlignValue(h-(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(h===
b._valueMax())return;g=b._trimAlignValue(h+i);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(h===b._valueMin())return;g=b._trimAlignValue(h-i);break}b._slide(c,f,g);return e}}).keyup(function(c){var e=d(this).data("index.ui-slider-handle");if(b._keySliding){b._keySliding=false;b._stop(c,e);b._change(c,e);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
this._mouseDestroy();return this},_mouseCapture:function(b){var a=this.options,c,e,f,h,g;if(a.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:b.pageX,y:b.pageY});e=this._valueMax()-this._valueMin()+1;h=this;this.handles.each(function(i){var j=Math.abs(c-h.values(i));if(e>j){e=j;f=d(this);g=i}});if(a.range===true&&this.values(1)===a.min){g+=1;f=d(this.handles[g])}if(this._start(b,
g)===false)return false;this._mouseSliding=true;h._handleIndex=g;f.addClass("ui-state-active").focus();a=f.offset();this._clickOffset=!d(b.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:b.pageX-a.left-f.width()/2,top:b.pageY-a.top-f.height()/2-(parseInt(f.css("borderTopWidth"),10)||0)-(parseInt(f.css("borderBottomWidth"),10)||0)+(parseInt(f.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(b,g,c);return this._animateOff=true},_mouseStart:function(){return true},
_mouseDrag:function(b){var a=this._normValueFromMouse({x:b.pageX,y:b.pageY});this._slide(b,this._handleIndex,a);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(b){var a;
if(this.orientation==="horizontal"){a=this.elementSize.width;b=b.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{a=this.elementSize.height;b=b.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}a=b/a;if(a>1)a=1;if(a<0)a=0;if(this.orientation==="vertical")a=1-a;b=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+a*b)},_start:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=
this.values(a);c.values=this.values()}return this._trigger("start",b,c)},_slide:function(b,a,c){var e;if(this.options.values&&this.options.values.length){e=this.values(a?0:1);if(this.options.values.length===2&&this.options.range===true&&(a===0&&c>e||a===1&&c<e))c=e;if(c!==this.values(a)){e=this.values();e[a]=c;b=this._trigger("slide",b,{handle:this.handles[a],value:c,values:e});this.values(a?0:1);b!==false&&this.values(a,c,true)}}else if(c!==this.value()){b=this._trigger("slide",b,{handle:this.handles[a],
value:c});b!==false&&this.value(c)}},_stop:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("stop",b,c)},_change:function(b,a){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("change",b,c)}},value:function(b){if(arguments.length){this.options.value=
this._trimAlignValue(b);this._refreshValue();this._change(null,0)}return this._value()},values:function(b,a){var c,e,f;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(a);this._refreshValue();this._change(null,b)}if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;e=arguments[0];for(f=0;f<c.length;f+=1){c[f]=this._trimAlignValue(e[f]);this._change(null,f)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(b):this.value();
else return this._values()},_setOption:function(b,a){var c,e=0;if(d.isArray(this.options.values))e=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(b){case "disabled":if(a){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<e;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var b=this.options.value;return b=this._trimAlignValue(b)},_values:function(b){var a,c;if(arguments.length){a=this.options.values[b];
return a=this._trimAlignValue(a)}else{a=this.options.values.slice();for(c=0;c<a.length;c+=1)a[c]=this._trimAlignValue(a[c]);return a}},_trimAlignValue:function(b){if(b<=this._valueMin())return this._valueMin();if(b>=this._valueMax())return this._valueMax();var a=this.options.step>0?this.options.step:1,c=(b-this._valueMin())%a;alignValue=b-c;if(Math.abs(c)*2>=a)alignValue+=c>0?a:-a;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var b=this.options.range,a=this.options,c=this,e=!this._animateOff?a.animate:false,f,h={},g,i,j,l;if(this.options.values&&this.options.values.length)this.handles.each(function(k){f=(c.values(k)-c._valueMin())/(c._valueMax()-c._valueMin())*100;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";d(this).stop(1,1)[e?"animate":"css"](h,a.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(k===0)c.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},a.animate);
if(k===1)c.range[e?"animate":"css"]({width:f-g+"%"},{queue:false,duration:a.animate})}else{if(k===0)c.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},a.animate);if(k===1)c.range[e?"animate":"css"]({height:f-g+"%"},{queue:false,duration:a.animate})}g=f});else{i=this.value();j=this._valueMin();l=this._valueMax();f=l!==j?(i-j)/(l-j)*100:0;h[c.orientation==="horizontal"?"left":"bottom"]=f+"%";this.handle.stop(1,1)[e?"animate":"css"](h,a.animate);if(b==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[e?"animate":"css"]({width:f+"%"},a.animate);if(b==="max"&&this.orientation==="horizontal")this.range[e?"animate":"css"]({width:100-f+"%"},{queue:false,duration:a.animate});if(b==="min"&&this.orientation==="vertical")this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},a.animate);if(b==="max"&&this.orientation==="vertical")this.range[e?"animate":"css"]({height:100-f+"%"},{queue:false,duration:a.animate})}}});d.extend(d.ui.slider,{version:"1.8.11"})})(jQuery);
;/*
 * jQuery UI Tabs 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function(d,p){function u(){return++v}function w(){return++x}var v=0,x=0;d.widget("ui.tabs",{options:{add:null,ajaxOptions:null,cache:false,cookie:null,collapsible:false,disable:null,disabled:[],enable:null,event:"click",fx:null,idPrefix:"ui-tabs-",load:null,panelTemplate:"<div></div>",remove:null,select:null,show:null,spinner:"<em>Loading&#8230;</em>",tabTemplate:"<li><a href='#{href}'><span>#{label}</span></a></li>"},_create:function(){this._tabify(true)},_setOption:function(b,e){if(b=="selected")this.options.collapsible&&
e==this.options.selected||this.select(e);else{this.options[b]=e;this._tabify()}},_tabId:function(b){return b.title&&b.title.replace(/\s/g,"_").replace(/[^\w\u00c0-\uFFFF-]/g,"")||this.options.idPrefix+u()},_sanitizeSelector:function(b){return b.replace(/:/g,"\\:")},_cookie:function(){var b=this.cookie||(this.cookie=this.options.cookie.name||"ui-tabs-"+w());return d.cookie.apply(null,[b].concat(d.makeArray(arguments)))},_ui:function(b,e){return{tab:b,panel:e,index:this.anchors.index(b)}},_cleanup:function(){this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function(){var b=
d(this);b.html(b.data("label.tabs")).removeData("label.tabs")})},_tabify:function(b){function e(g,f){g.css("display","");!d.support.opacity&&f.opacity&&g[0].style.removeAttribute("filter")}var a=this,c=this.options,h=/^#.+/;this.list=this.element.find("ol,ul").eq(0);this.lis=d(" > li:has(a[href])",this.list);this.anchors=this.lis.map(function(){return d("a",this)[0]});this.panels=d([]);this.anchors.each(function(g,f){var i=d(f).attr("href"),l=i.split("#")[0],q;if(l&&(l===location.toString().split("#")[0]||
(q=d("base")[0])&&l===q.href)){i=f.hash;f.href=i}if(h.test(i))a.panels=a.panels.add(a.element.find(a._sanitizeSelector(i)));else if(i&&i!=="#"){d.data(f,"href.tabs",i);d.data(f,"load.tabs",i.replace(/#.*$/,""));i=a._tabId(f);f.href="#"+i;f=a.element.find("#"+i);if(!f.length){f=d(c.panelTemplate).attr("id",i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g-1]||a.list);f.data("destroy.tabs",true)}a.panels=a.panels.add(f)}else c.disabled.push(g)});if(b){this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.lis.addClass("ui-state-default ui-corner-top");this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");if(c.selected===p){location.hash&&this.anchors.each(function(g,f){if(f.hash==location.hash){c.selected=g;return false}});if(typeof c.selected!=="number"&&c.cookie)c.selected=parseInt(a._cookie(),10);if(typeof c.selected!=="number"&&this.lis.filter(".ui-tabs-selected").length)c.selected=
this.lis.index(this.lis.filter(".ui-tabs-selected"));c.selected=c.selected||(this.lis.length?0:-1)}else if(c.selected===null)c.selected=-1;c.selected=c.selected>=0&&this.anchors[c.selected]||c.selected<0?c.selected:0;c.disabled=d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"),function(g){return a.lis.index(g)}))).sort();d.inArray(c.selected,c.disabled)!=-1&&c.disabled.splice(d.inArray(c.selected,c.disabled),1);this.panels.addClass("ui-tabs-hide");this.lis.removeClass("ui-tabs-selected ui-state-active");
if(c.selected>=0&&this.anchors.length){a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");a.element.queue("tabs",function(){a._trigger("show",null,a._ui(a.anchors[c.selected],a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))});this.load(c.selected)}d(window).bind("unload",function(){a.lis.add(a.anchors).unbind(".tabs");a.lis=a.anchors=a.panels=null})}else c.selected=this.lis.index(this.lis.filter(".ui-tabs-selected"));
this.element[c.collapsible?"addClass":"removeClass"]("ui-tabs-collapsible");c.cookie&&this._cookie(c.selected,c.cookie);b=0;for(var j;j=this.lis[b];b++)d(j)[d.inArray(b,c.disabled)!=-1&&!d(j).hasClass("ui-tabs-selected")?"addClass":"removeClass"]("ui-state-disabled");c.cache===false&&this.anchors.removeData("cache.tabs");this.lis.add(this.anchors).unbind(".tabs");if(c.event!=="mouseover"){var k=function(g,f){f.is(":not(.ui-state-disabled)")&&f.addClass("ui-state-"+g)},n=function(g,f){f.removeClass("ui-state-"+
g)};this.lis.bind("mouseover.tabs",function(){k("hover",d(this))});this.lis.bind("mouseout.tabs",function(){n("hover",d(this))});this.anchors.bind("focus.tabs",function(){k("focus",d(this).closest("li"))});this.anchors.bind("blur.tabs",function(){n("focus",d(this).closest("li"))})}var m,o;if(c.fx)if(d.isArray(c.fx)){m=c.fx[0];o=c.fx[1]}else m=o=c.fx;var r=o?function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.hide().removeClass("ui-tabs-hide").animate(o,o.duration||"normal",
function(){e(f,o);a._trigger("show",null,a._ui(g,f[0]))})}:function(g,f){d(g).closest("li").addClass("ui-tabs-selected ui-state-active");f.removeClass("ui-tabs-hide");a._trigger("show",null,a._ui(g,f[0]))},s=m?function(g,f){f.animate(m,m.duration||"normal",function(){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");e(f,m);a.element.dequeue("tabs")})}:function(g,f){a.lis.removeClass("ui-tabs-selected ui-state-active");f.addClass("ui-tabs-hide");a.element.dequeue("tabs")};
this.anchors.bind(c.event+".tabs",function(){var g=this,f=d(g).closest("li"),i=a.panels.filter(":not(.ui-tabs-hide)"),l=a.element.find(a._sanitizeSelector(g.hash));if(f.hasClass("ui-tabs-selected")&&!c.collapsible||f.hasClass("ui-state-disabled")||f.hasClass("ui-state-processing")||a.panels.filter(":animated").length||a._trigger("select",null,a._ui(this,l[0]))===false){this.blur();return false}c.selected=a.anchors.index(this);a.abort();if(c.collapsible)if(f.hasClass("ui-tabs-selected")){c.selected=
-1;c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){s(g,i)}).dequeue("tabs");this.blur();return false}else if(!i.length){c.cookie&&a._cookie(c.selected,c.cookie);a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this));this.blur();return false}c.cookie&&a._cookie(c.selected,c.cookie);if(l.length){i.length&&a.element.queue("tabs",function(){s(g,i)});a.element.queue("tabs",function(){r(g,l)});a.load(a.anchors.index(this))}else throw"jQuery UI Tabs: Mismatching fragment identifier.";
d.browser.msie&&this.blur()});this.anchors.bind("click.tabs",function(){return false})},_getIndex:function(b){if(typeof b=="string")b=this.anchors.index(this.anchors.filter("[href$="+b+"]"));return b},destroy:function(){var b=this.options;this.abort();this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");this.anchors.each(function(){var e=
d.data(this,"href.tabs");if(e)this.href=e;var a=d(this).unbind(".tabs");d.each(["href","load","cache"],function(c,h){a.removeData(h+".tabs")})});this.lis.unbind(".tabs").add(this.panels).each(function(){d.data(this,"destroy.tabs")?d(this).remove():d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")});b.cookie&&this._cookie(null,b.cookie);return this},add:function(b,
e,a){if(a===p)a=this.anchors.length;var c=this,h=this.options;e=d(h.tabTemplate.replace(/#\{href\}/g,b).replace(/#\{label\}/g,e));b=!b.indexOf("#")?b.replace("#",""):this._tabId(d("a",e)[0]);e.addClass("ui-state-default ui-corner-top").data("destroy.tabs",true);var j=c.element.find("#"+b);j.length||(j=d(h.panelTemplate).attr("id",b).data("destroy.tabs",true));j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");if(a>=this.lis.length){e.appendTo(this.list);j.appendTo(this.list[0].parentNode)}else{e.insertBefore(this.lis[a]);
j.insertBefore(this.panels[a])}h.disabled=d.map(h.disabled,function(k){return k>=a?++k:k});this._tabify();if(this.anchors.length==1){h.selected=0;e.addClass("ui-tabs-selected ui-state-active");j.removeClass("ui-tabs-hide");this.element.queue("tabs",function(){c._trigger("show",null,c._ui(c.anchors[0],c.panels[0]))});this.load(0)}this._trigger("add",null,this._ui(this.anchors[a],this.panels[a]));return this},remove:function(b){b=this._getIndex(b);var e=this.options,a=this.lis.eq(b).remove(),c=this.panels.eq(b).remove();
if(a.hasClass("ui-tabs-selected")&&this.anchors.length>1)this.select(b+(b+1<this.anchors.length?1:-1));e.disabled=d.map(d.grep(e.disabled,function(h){return h!=b}),function(h){return h>=b?--h:h});this._tabify();this._trigger("remove",null,this._ui(a.find("a")[0],c[0]));return this},enable:function(b){b=this._getIndex(b);var e=this.options;if(d.inArray(b,e.disabled)!=-1){this.lis.eq(b).removeClass("ui-state-disabled");e.disabled=d.grep(e.disabled,function(a){return a!=b});this._trigger("enable",null,
this._ui(this.anchors[b],this.panels[b]));return this}},disable:function(b){b=this._getIndex(b);var e=this.options;if(b!=e.selected){this.lis.eq(b).addClass("ui-state-disabled");e.disabled.push(b);e.disabled.sort();this._trigger("disable",null,this._ui(this.anchors[b],this.panels[b]))}return this},select:function(b){b=this._getIndex(b);if(b==-1)if(this.options.collapsible&&this.options.selected!=-1)b=this.options.selected;else return this;this.anchors.eq(b).trigger(this.options.event+".tabs");return this},
load:function(b){b=this._getIndex(b);var e=this,a=this.options,c=this.anchors.eq(b)[0],h=d.data(c,"load.tabs");this.abort();if(!h||this.element.queue("tabs").length!==0&&d.data(c,"cache.tabs"))this.element.dequeue("tabs");else{this.lis.eq(b).addClass("ui-state-processing");if(a.spinner){var j=d("span",c);j.data("label.tabs",j.html()).html(a.spinner)}this.xhr=d.ajax(d.extend({},a.ajaxOptions,{url:h,success:function(k,n){e.element.find(e._sanitizeSelector(c.hash)).html(k);e._cleanup();a.cache&&d.data(c,
"cache.tabs",true);e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.success(k,n)}catch(m){}},error:function(k,n){e._cleanup();e._trigger("load",null,e._ui(e.anchors[b],e.panels[b]));try{a.ajaxOptions.error(k,n,b,c)}catch(m){}}}));e.element.dequeue("tabs");return this}},abort:function(){this.element.queue([]);this.panels.stop(false,true);this.element.queue("tabs",this.element.queue("tabs").splice(-2,2));if(this.xhr){this.xhr.abort();delete this.xhr}this._cleanup();return this},
url:function(b,e){this.anchors.eq(b).removeData("cache.tabs").data("load.tabs",e);return this},length:function(){return this.anchors.length}});d.extend(d.ui.tabs,{version:"1.8.11"});d.extend(d.ui.tabs.prototype,{rotation:null,rotate:function(b,e){var a=this,c=this.options,h=a._rotate||(a._rotate=function(j){clearTimeout(a.rotation);a.rotation=setTimeout(function(){var k=c.selected;a.select(++k<a.anchors.length?k:0)},b);j&&j.stopPropagation()});e=a._unrotate||(a._unrotate=!e?function(j){j.clientX&&
a.rotate(null)}:function(){t=c.selected;h()});if(b){this.element.bind("tabsshow",h);this.anchors.bind(c.event+".tabs",e);h()}else{clearTimeout(a.rotation);this.element.unbind("tabsshow",h);this.anchors.unbind(c.event+".tabs",e);delete this._rotate;delete this._unrotate}return this}})})(jQuery);
;/*
 * jQuery UI Datepicker 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function(d,A){function K(){this.debug=false;this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._inDialog=this._datepickerShowing=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass=
"ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su",
"Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",
minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false};d.extend(this._defaults,this.regional[""]);this.dpDiv=d('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}function F(a,b){d.extend(a,b);for(var c in b)if(b[c]==
null||b[c]==A)a[c]=b[c];return a}d.extend(d.ui,{datepicker:{version:"1.8.11"}});var y=(new Date).getTime();d.extend(K.prototype,{markerClassName:"hasDatepicker",log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(a){F(this._defaults,a||{});return this},_attachDatepicker:function(a,b){var c=null;for(var e in this._defaults){var f=a.getAttribute("date:"+e);if(f){c=c||{};try{c[e]=eval(f)}catch(h){c[e]=f}}}e=a.nodeName.toLowerCase();
f=e=="div"||e=="span";if(!a.id){this.uuid+=1;a.id="dp"+this.uuid}var i=this._newInst(d(a),f);i.settings=d.extend({},b||{},c||{});if(e=="input")this._connectDatepicker(a,i);else f&&this._inlineDatepicker(a,i)},_newInst:function(a,b){return{id:a[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1"),input:a,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:b,dpDiv:!b?this.dpDiv:d('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')}},
_connectDatepicker:function(a,b){var c=d(a);b.append=d([]);b.trigger=d([]);if(!c.hasClass(this.markerClassName)){this._attachments(c,b);c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});this._autoSize(b);d.data(a,"datepicker",b)}},_attachments:function(a,b){var c=this._get(b,"appendText"),e=this._get(b,"isRTL");b.append&&
b.append.remove();if(c){b.append=d('<span class="'+this._appendClass+'">'+c+"</span>");a[e?"before":"after"](b.append)}a.unbind("focus",this._showDatepicker);b.trigger&&b.trigger.remove();c=this._get(b,"showOn");if(c=="focus"||c=="both")a.focus(this._showDatepicker);if(c=="button"||c=="both"){c=this._get(b,"buttonText");var f=this._get(b,"buttonImage");b.trigger=d(this._get(b,"buttonImageOnly")?d("<img/>").addClass(this._triggerClass).attr({src:f,alt:c,title:c}):d('<button type="button"></button>').addClass(this._triggerClass).html(f==
""?c:d("<img/>").attr({src:f,alt:c,title:c})));a[e?"before":"after"](b.trigger);b.trigger.click(function(){d.datepicker._datepickerShowing&&d.datepicker._lastInput==a[0]?d.datepicker._hideDatepicker():d.datepicker._showDatepicker(a[0]);return false})}},_autoSize:function(a){if(this._get(a,"autoSize")&&!a.inline){var b=new Date(2009,11,20),c=this._get(a,"dateFormat");if(c.match(/[DM]/)){var e=function(f){for(var h=0,i=0,g=0;g<f.length;g++)if(f[g].length>h){h=f[g].length;i=g}return i};b.setMonth(e(this._get(a,
c.match(/MM/)?"monthNames":"monthNamesShort")));b.setDate(e(this._get(a,c.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())}a.input.attr("size",this._formatDate(a,b).length)}},_inlineDatepicker:function(a,b){var c=d(a);if(!c.hasClass(this.markerClassName)){c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker",function(e,f,h){b.settings[f]=h}).bind("getData.datepicker",function(e,f){return this._get(b,f)});d.data(a,"datepicker",b);this._setDate(b,this._getDefaultDate(b),
true);this._updateDatepicker(b);this._updateAlternate(b);b.dpDiv.show()}},_dialogDatepicker:function(a,b,c,e,f){a=this._dialogInst;if(!a){this.uuid+=1;this._dialogInput=d('<input type="text" id="'+("dp"+this.uuid)+'" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');this._dialogInput.keydown(this._doKeyDown);d("body").append(this._dialogInput);a=this._dialogInst=this._newInst(this._dialogInput,false);a.settings={};d.data(this._dialogInput[0],"datepicker",a)}F(a.settings,e||{});
b=b&&b.constructor==Date?this._formatDate(a,b):b;this._dialogInput.val(b);this._pos=f?f.length?f:[f.pageX,f.pageY]:null;if(!this._pos)this._pos=[document.documentElement.clientWidth/2-100+(document.documentElement.scrollLeft||document.body.scrollLeft),document.documentElement.clientHeight/2-150+(document.documentElement.scrollTop||document.body.scrollTop)];this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px");a.settings.onSelect=c;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);d.blockUI&&d.blockUI(this.dpDiv);d.data(this._dialogInput[0],"datepicker",a);return this},_destroyDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();d.removeData(a,"datepicker");if(e=="input"){c.append.remove();c.trigger.remove();b.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",
this._doKeyUp)}else if(e=="div"||e=="span")b.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=false;c.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().removeClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,
function(f){return f==a?null:f})}},_disableDatepicker:function(a){var b=d(a),c=d.data(a,"datepicker");if(b.hasClass(this.markerClassName)){var e=a.nodeName.toLowerCase();if(e=="input"){a.disabled=true;c.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else if(e=="div"||e=="span")b.children("."+this._inlineClass).children().addClass("ui-state-disabled");this._disabledInputs=d.map(this._disabledInputs,function(f){return f==a?null:
f});this._disabledInputs[this._disabledInputs.length]=a}},_isDisabledDatepicker:function(a){if(!a)return false;for(var b=0;b<this._disabledInputs.length;b++)if(this._disabledInputs[b]==a)return true;return false},_getInst:function(a){try{return d.data(a,"datepicker")}catch(b){throw"Missing instance data for this datepicker";}},_optionDatepicker:function(a,b,c){var e=this._getInst(a);if(arguments.length==2&&typeof b=="string")return b=="defaults"?d.extend({},d.datepicker._defaults):e?b=="all"?d.extend({},
e.settings):this._get(e,b):null;var f=b||{};if(typeof b=="string"){f={};f[b]=c}if(e){this._curInst==e&&this._hideDatepicker();var h=this._getDateDatepicker(a,true),i=this._getMinMaxDate(e,"min"),g=this._getMinMaxDate(e,"max");F(e.settings,f);if(i!==null&&f.dateFormat!==A&&f.minDate===A)e.settings.minDate=this._formatDate(e,i);if(g!==null&&f.dateFormat!==A&&f.maxDate===A)e.settings.maxDate=this._formatDate(e,g);this._attachments(d(a),e);this._autoSize(e);this._setDateDatepicker(a,h);this._updateDatepicker(e)}},
_changeDatepicker:function(a,b,c){this._optionDatepicker(a,b,c)},_refreshDatepicker:function(a){(a=this._getInst(a))&&this._updateDatepicker(a)},_setDateDatepicker:function(a,b){if(a=this._getInst(a)){this._setDate(a,b);this._updateDatepicker(a);this._updateAlternate(a)}},_getDateDatepicker:function(a,b){(a=this._getInst(a))&&!a.inline&&this._setDateFromField(a,b);return a?this._getDate(a):null},_doKeyDown:function(a){var b=d.datepicker._getInst(a.target),c=true,e=b.dpDiv.is(".ui-datepicker-rtl");
b._keyEvent=true;if(d.datepicker._datepickerShowing)switch(a.keyCode){case 9:d.datepicker._hideDatepicker();c=false;break;case 13:c=d("td."+d.datepicker._dayOverClass+":not(."+d.datepicker._currentClass+")",b.dpDiv);c[0]?d.datepicker._selectDay(a.target,b.selectedMonth,b.selectedYear,c[0]):d.datepicker._hideDatepicker();return false;case 27:d.datepicker._hideDatepicker();break;case 33:d.datepicker._adjustDate(a.target,a.ctrlKey?-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),
"M");break;case 34:d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 35:if(a.ctrlKey||a.metaKey)d.datepicker._clearDate(a.target);c=a.ctrlKey||a.metaKey;break;case 36:if(a.ctrlKey||a.metaKey)d.datepicker._gotoToday(a.target);c=a.ctrlKey||a.metaKey;break;case 37:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?+1:-1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?
-d.datepicker._get(b,"stepBigMonths"):-d.datepicker._get(b,"stepMonths"),"M");break;case 38:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,-7,"D");c=a.ctrlKey||a.metaKey;break;case 39:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,e?-1:+1,"D");c=a.ctrlKey||a.metaKey;if(a.originalEvent.altKey)d.datepicker._adjustDate(a.target,a.ctrlKey?+d.datepicker._get(b,"stepBigMonths"):+d.datepicker._get(b,"stepMonths"),"M");break;case 40:if(a.ctrlKey||a.metaKey)d.datepicker._adjustDate(a.target,
+7,"D");c=a.ctrlKey||a.metaKey;break;default:c=false}else if(a.keyCode==36&&a.ctrlKey)d.datepicker._showDatepicker(this);else c=false;if(c){a.preventDefault();a.stopPropagation()}},_doKeyPress:function(a){var b=d.datepicker._getInst(a.target);if(d.datepicker._get(b,"constrainInput")){b=d.datepicker._possibleChars(d.datepicker._get(b,"dateFormat"));var c=String.fromCharCode(a.charCode==A?a.keyCode:a.charCode);return a.ctrlKey||a.metaKey||c<" "||!b||b.indexOf(c)>-1}},_doKeyUp:function(a){a=d.datepicker._getInst(a.target);
if(a.input.val()!=a.lastVal)try{if(d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),a.input?a.input.val():null,d.datepicker._getFormatConfig(a))){d.datepicker._setDateFromField(a);d.datepicker._updateAlternate(a);d.datepicker._updateDatepicker(a)}}catch(b){d.datepicker.log(b)}return true},_showDatepicker:function(a){a=a.target||a;if(a.nodeName.toLowerCase()!="input")a=d("input",a.parentNode)[0];if(!(d.datepicker._isDisabledDatepicker(a)||d.datepicker._lastInput==a)){var b=d.datepicker._getInst(a);
d.datepicker._curInst&&d.datepicker._curInst!=b&&d.datepicker._curInst.dpDiv.stop(true,true);var c=d.datepicker._get(b,"beforeShow");F(b.settings,c?c.apply(a,[a,b]):{});b.lastVal=null;d.datepicker._lastInput=a;d.datepicker._setDateFromField(b);if(d.datepicker._inDialog)a.value="";if(!d.datepicker._pos){d.datepicker._pos=d.datepicker._findPos(a);d.datepicker._pos[1]+=a.offsetHeight}var e=false;d(a).parents().each(function(){e|=d(this).css("position")=="fixed";return!e});if(e&&d.browser.opera){d.datepicker._pos[0]-=
document.documentElement.scrollLeft;d.datepicker._pos[1]-=document.documentElement.scrollTop}c={left:d.datepicker._pos[0],top:d.datepicker._pos[1]};d.datepicker._pos=null;b.dpDiv.empty();b.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});d.datepicker._updateDatepicker(b);c=d.datepicker._checkOffset(b,c,e);b.dpDiv.css({position:d.datepicker._inDialog&&d.blockUI?"static":e?"fixed":"absolute",display:"none",left:c.left+"px",top:c.top+"px"});if(!b.inline){c=d.datepicker._get(b,"showAnim");
var f=d.datepicker._get(b,"duration"),h=function(){d.datepicker._datepickerShowing=true;var i=b.dpDiv.find("iframe.ui-datepicker-cover");if(i.length){var g=d.datepicker._getBorders(b.dpDiv);i.css({left:-g[0],top:-g[1],width:b.dpDiv.outerWidth(),height:b.dpDiv.outerHeight()})}};b.dpDiv.zIndex(d(a).zIndex()+1);d.effects&&d.effects[c]?b.dpDiv.show(c,d.datepicker._get(b,"showOptions"),f,h):b.dpDiv[c||"show"](c?f:null,h);if(!c||!f)h();b.input.is(":visible")&&!b.input.is(":disabled")&&b.input.focus();d.datepicker._curInst=
b}}},_updateDatepicker:function(a){var b=this,c=d.datepicker._getBorders(a.dpDiv);a.dpDiv.empty().append(this._generateHTML(a));var e=a.dpDiv.find("iframe.ui-datepicker-cover");e.length&&e.css({left:-c[0],top:-c[1],width:a.dpDiv.outerWidth(),height:a.dpDiv.outerHeight()});a.dpDiv.find("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a").bind("mouseout",function(){d(this).removeClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).removeClass("ui-datepicker-prev-hover");
this.className.indexOf("ui-datepicker-next")!=-1&&d(this).removeClass("ui-datepicker-next-hover")}).bind("mouseover",function(){if(!b._isDisabledDatepicker(a.inline?a.dpDiv.parent()[0]:a.input[0])){d(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");d(this).addClass("ui-state-hover");this.className.indexOf("ui-datepicker-prev")!=-1&&d(this).addClass("ui-datepicker-prev-hover");this.className.indexOf("ui-datepicker-next")!=-1&&d(this).addClass("ui-datepicker-next-hover")}}).end().find("."+
this._dayOverClass+" a").trigger("mouseover").end();c=this._getNumberOfMonths(a);e=c[1];e>1?a.dpDiv.addClass("ui-datepicker-multi-"+e).css("width",17*e+"em"):a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");a.dpDiv[(c[0]!=1||c[1]!=1?"add":"remove")+"Class"]("ui-datepicker-multi");a.dpDiv[(this._get(a,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");a==d.datepicker._curInst&&d.datepicker._datepickerShowing&&a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&
a.input[0]!=document.activeElement&&a.input.focus();if(a.yearshtml){var f=a.yearshtml;setTimeout(function(){f===a.yearshtml&&a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);f=a.yearshtml=null},0)}},_getBorders:function(a){var b=function(c){return{thin:1,medium:2,thick:3}[c]||c};return[parseFloat(b(a.css("border-left-width"))),parseFloat(b(a.css("border-top-width")))]},_checkOffset:function(a,b,c){var e=a.dpDiv.outerWidth(),f=a.dpDiv.outerHeight(),h=a.input?a.input.outerWidth():
0,i=a.input?a.input.outerHeight():0,g=document.documentElement.clientWidth+d(document).scrollLeft(),j=document.documentElement.clientHeight+d(document).scrollTop();b.left-=this._get(a,"isRTL")?e-h:0;b.left-=c&&b.left==a.input.offset().left?d(document).scrollLeft():0;b.top-=c&&b.top==a.input.offset().top+i?d(document).scrollTop():0;b.left-=Math.min(b.left,b.left+e>g&&g>e?Math.abs(b.left+e-g):0);b.top-=Math.min(b.top,b.top+f>j&&j>f?Math.abs(f+i):0);return b},_findPos:function(a){for(var b=this._get(this._getInst(a),
"isRTL");a&&(a.type=="hidden"||a.nodeType!=1||d.expr.filters.hidden(a));)a=a[b?"previousSibling":"nextSibling"];a=d(a).offset();return[a.left,a.top]},_hideDatepicker:function(a){var b=this._curInst;if(!(!b||a&&b!=d.data(a,"datepicker")))if(this._datepickerShowing){a=this._get(b,"showAnim");var c=this._get(b,"duration"),e=function(){d.datepicker._tidyDialog(b);this._curInst=null};d.effects&&d.effects[a]?b.dpDiv.hide(a,d.datepicker._get(b,"showOptions"),c,e):b.dpDiv[a=="slideDown"?"slideUp":a=="fadeIn"?
"fadeOut":"hide"](a?c:null,e);a||e();if(a=this._get(b,"onClose"))a.apply(b.input?b.input[0]:null,[b.input?b.input.val():"",b]);this._datepickerShowing=false;this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(d.blockUI){d.unblockUI();d("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(a){if(d.datepicker._curInst){a=
d(a.target);a[0].id!=d.datepicker._mainDivId&&a.parents("#"+d.datepicker._mainDivId).length==0&&!a.hasClass(d.datepicker.markerClassName)&&!a.hasClass(d.datepicker._triggerClass)&&d.datepicker._datepickerShowing&&!(d.datepicker._inDialog&&d.blockUI)&&d.datepicker._hideDatepicker()}},_adjustDate:function(a,b,c){a=d(a);var e=this._getInst(a[0]);if(!this._isDisabledDatepicker(a[0])){this._adjustInstDate(e,b+(c=="M"?this._get(e,"showCurrentAtPos"):0),c);this._updateDatepicker(e)}},_gotoToday:function(a){a=
d(a);var b=this._getInst(a[0]);if(this._get(b,"gotoCurrent")&&b.currentDay){b.selectedDay=b.currentDay;b.drawMonth=b.selectedMonth=b.currentMonth;b.drawYear=b.selectedYear=b.currentYear}else{var c=new Date;b.selectedDay=c.getDate();b.drawMonth=b.selectedMonth=c.getMonth();b.drawYear=b.selectedYear=c.getFullYear()}this._notifyChange(b);this._adjustDate(a)},_selectMonthYear:function(a,b,c){a=d(a);var e=this._getInst(a[0]);e._selectingMonthYear=false;e["selected"+(c=="M"?"Month":"Year")]=e["draw"+(c==
"M"?"Month":"Year")]=parseInt(b.options[b.selectedIndex].value,10);this._notifyChange(e);this._adjustDate(a)},_clickMonthYear:function(a){var b=this._getInst(d(a)[0]);b.input&&b._selectingMonthYear&&setTimeout(function(){b.input.focus()},0);b._selectingMonthYear=!b._selectingMonthYear},_selectDay:function(a,b,c,e){var f=d(a);if(!(d(e).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0]))){f=this._getInst(f[0]);f.selectedDay=f.currentDay=d("a",e).html();f.selectedMonth=f.currentMonth=
b;f.selectedYear=f.currentYear=c;this._selectDate(a,this._formatDate(f,f.currentDay,f.currentMonth,f.currentYear))}},_clearDate:function(a){a=d(a);this._getInst(a[0]);this._selectDate(a,"")},_selectDate:function(a,b){a=this._getInst(d(a)[0]);b=b!=null?b:this._formatDate(a);a.input&&a.input.val(b);this._updateAlternate(a);var c=this._get(a,"onSelect");if(c)c.apply(a.input?a.input[0]:null,[b,a]);else a.input&&a.input.trigger("change");if(a.inline)this._updateDatepicker(a);else{this._hideDatepicker();
this._lastInput=a.input[0];typeof a.input[0]!="object"&&a.input.focus();this._lastInput=null}},_updateAlternate:function(a){var b=this._get(a,"altField");if(b){var c=this._get(a,"altFormat")||this._get(a,"dateFormat"),e=this._getDate(a),f=this.formatDate(c,e,this._getFormatConfig(a));d(b).each(function(){d(this).val(f)})}},noWeekends:function(a){a=a.getDay();return[a>0&&a<6,""]},iso8601Week:function(a){a=new Date(a.getTime());a.setDate(a.getDate()+4-(a.getDay()||7));var b=a.getTime();a.setMonth(0);
a.setDate(1);return Math.floor(Math.round((b-a)/864E5)/7)+1},parseDate:function(a,b,c){if(a==null||b==null)throw"Invalid arguments";b=typeof b=="object"?b.toString():b+"";if(b=="")return null;var e=(c?c.shortYearCutoff:null)||this._defaults.shortYearCutoff;e=typeof e!="string"?e:(new Date).getFullYear()%100+parseInt(e,10);for(var f=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,h=(c?c.dayNames:null)||this._defaults.dayNames,i=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort,g=(c?
c.monthNames:null)||this._defaults.monthNames,j=c=-1,l=-1,u=-1,k=false,o=function(p){(p=z+1<a.length&&a.charAt(z+1)==p)&&z++;return p},m=function(p){var v=o(p);p=new RegExp("^\\d{1,"+(p=="@"?14:p=="!"?20:p=="y"&&v?4:p=="o"?3:2)+"}");p=b.substring(s).match(p);if(!p)throw"Missing number at position "+s;s+=p[0].length;return parseInt(p[0],10)},n=function(p,v,H){p=o(p)?H:v;for(v=0;v<p.length;v++)if(b.substr(s,p[v].length).toLowerCase()==p[v].toLowerCase()){s+=p[v].length;return v+1}throw"Unknown name at position "+
s;},r=function(){if(b.charAt(s)!=a.charAt(z))throw"Unexpected literal at position "+s;s++},s=0,z=0;z<a.length;z++)if(k)if(a.charAt(z)=="'"&&!o("'"))k=false;else r();else switch(a.charAt(z)){case "d":l=m("d");break;case "D":n("D",f,h);break;case "o":u=m("o");break;case "m":j=m("m");break;case "M":j=n("M",i,g);break;case "y":c=m("y");break;case "@":var w=new Date(m("@"));c=w.getFullYear();j=w.getMonth()+1;l=w.getDate();break;case "!":w=new Date((m("!")-this._ticksTo1970)/1E4);c=w.getFullYear();j=w.getMonth()+
1;l=w.getDate();break;case "'":if(o("'"))r();else k=true;break;default:r()}if(c==-1)c=(new Date).getFullYear();else if(c<100)c+=(new Date).getFullYear()-(new Date).getFullYear()%100+(c<=e?0:-100);if(u>-1){j=1;l=u;do{e=this._getDaysInMonth(c,j-1);if(l<=e)break;j++;l-=e}while(1)}w=this._daylightSavingAdjust(new Date(c,j-1,l));if(w.getFullYear()!=c||w.getMonth()+1!=j||w.getDate()!=l)throw"Invalid date";return w},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",
RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925))*24*60*60*1E7,formatDate:function(a,b,c){if(!b)return"";var e=(c?c.dayNamesShort:null)||this._defaults.dayNamesShort,f=(c?c.dayNames:null)||this._defaults.dayNames,h=(c?c.monthNamesShort:null)||this._defaults.monthNamesShort;c=(c?c.monthNames:null)||this._defaults.monthNames;var i=function(o){(o=k+1<a.length&&
a.charAt(k+1)==o)&&k++;return o},g=function(o,m,n){m=""+m;if(i(o))for(;m.length<n;)m="0"+m;return m},j=function(o,m,n,r){return i(o)?r[m]:n[m]},l="",u=false;if(b)for(var k=0;k<a.length;k++)if(u)if(a.charAt(k)=="'"&&!i("'"))u=false;else l+=a.charAt(k);else switch(a.charAt(k)){case "d":l+=g("d",b.getDate(),2);break;case "D":l+=j("D",b.getDay(),e,f);break;case "o":l+=g("o",(b.getTime()-(new Date(b.getFullYear(),0,0)).getTime())/864E5,3);break;case "m":l+=g("m",b.getMonth()+1,2);break;case "M":l+=j("M",
b.getMonth(),h,c);break;case "y":l+=i("y")?b.getFullYear():(b.getYear()%100<10?"0":"")+b.getYear()%100;break;case "@":l+=b.getTime();break;case "!":l+=b.getTime()*1E4+this._ticksTo1970;break;case "'":if(i("'"))l+="'";else u=true;break;default:l+=a.charAt(k)}return l},_possibleChars:function(a){for(var b="",c=false,e=function(h){(h=f+1<a.length&&a.charAt(f+1)==h)&&f++;return h},f=0;f<a.length;f++)if(c)if(a.charAt(f)=="'"&&!e("'"))c=false;else b+=a.charAt(f);else switch(a.charAt(f)){case "d":case "m":case "y":case "@":b+=
"0123456789";break;case "D":case "M":return null;case "'":if(e("'"))b+="'";else c=true;break;default:b+=a.charAt(f)}return b},_get:function(a,b){return a.settings[b]!==A?a.settings[b]:this._defaults[b]},_setDateFromField:function(a,b){if(a.input.val()!=a.lastVal){var c=this._get(a,"dateFormat"),e=a.lastVal=a.input?a.input.val():null,f,h;f=h=this._getDefaultDate(a);var i=this._getFormatConfig(a);try{f=this.parseDate(c,e,i)||h}catch(g){this.log(g);e=b?"":e}a.selectedDay=f.getDate();a.drawMonth=a.selectedMonth=
f.getMonth();a.drawYear=a.selectedYear=f.getFullYear();a.currentDay=e?f.getDate():0;a.currentMonth=e?f.getMonth():0;a.currentYear=e?f.getFullYear():0;this._adjustInstDate(a)}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))},_determineDate:function(a,b,c){var e=function(h){var i=new Date;i.setDate(i.getDate()+h);return i},f=function(h){try{return d.datepicker.parseDate(d.datepicker._get(a,"dateFormat"),h,d.datepicker._getFormatConfig(a))}catch(i){}var g=
(h.toLowerCase().match(/^c/)?d.datepicker._getDate(a):null)||new Date,j=g.getFullYear(),l=g.getMonth();g=g.getDate();for(var u=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,k=u.exec(h);k;){switch(k[2]||"d"){case "d":case "D":g+=parseInt(k[1],10);break;case "w":case "W":g+=parseInt(k[1],10)*7;break;case "m":case "M":l+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break;case "y":case "Y":j+=parseInt(k[1],10);g=Math.min(g,d.datepicker._getDaysInMonth(j,l));break}k=u.exec(h)}return new Date(j,
l,g)};if(b=(b=b==null||b===""?c:typeof b=="string"?f(b):typeof b=="number"?isNaN(b)?c:e(b):new Date(b.getTime()))&&b.toString()=="Invalid Date"?c:b){b.setHours(0);b.setMinutes(0);b.setSeconds(0);b.setMilliseconds(0)}return this._daylightSavingAdjust(b)},_daylightSavingAdjust:function(a){if(!a)return null;a.setHours(a.getHours()>12?a.getHours()+2:0);return a},_setDate:function(a,b,c){var e=!b,f=a.selectedMonth,h=a.selectedYear;b=this._restrictMinMax(a,this._determineDate(a,b,new Date));a.selectedDay=
a.currentDay=b.getDate();a.drawMonth=a.selectedMonth=a.currentMonth=b.getMonth();a.drawYear=a.selectedYear=a.currentYear=b.getFullYear();if((f!=a.selectedMonth||h!=a.selectedYear)&&!c)this._notifyChange(a);this._adjustInstDate(a);if(a.input)a.input.val(e?"":this._formatDate(a))},_getDate:function(a){return!a.currentYear||a.input&&a.input.val()==""?null:this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay))},_generateHTML:function(a){var b=new Date;b=this._daylightSavingAdjust(new Date(b.getFullYear(),
b.getMonth(),b.getDate()));var c=this._get(a,"isRTL"),e=this._get(a,"showButtonPanel"),f=this._get(a,"hideIfNoPrevNext"),h=this._get(a,"navigationAsDateFormat"),i=this._getNumberOfMonths(a),g=this._get(a,"showCurrentAtPos"),j=this._get(a,"stepMonths"),l=i[0]!=1||i[1]!=1,u=this._daylightSavingAdjust(!a.currentDay?new Date(9999,9,9):new Date(a.currentYear,a.currentMonth,a.currentDay)),k=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");g=a.drawMonth-g;var m=a.drawYear;if(g<0){g+=12;m--}if(o){var n=
this._daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth()-i[0]*i[1]+1,o.getDate()));for(n=k&&n<k?k:n;this._daylightSavingAdjust(new Date(m,g,1))>n;){g--;if(g<0){g=11;m--}}}a.drawMonth=g;a.drawYear=m;n=this._get(a,"prevText");n=!h?n:this.formatDate(n,this._daylightSavingAdjust(new Date(m,g-j,1)),this._getFormatConfig(a));n=this._canAdjustMonth(a,-1,m,g)?'<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', -"+j+", 'M');\" title=\""+n+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"e":"w")+'">'+n+"</span></a>":f?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+n+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"e":"w")+'">'+n+"</span></a>";var r=this._get(a,"nextText");r=!h?r:this.formatDate(r,this._daylightSavingAdjust(new Date(m,g+j,1)),this._getFormatConfig(a));f=this._canAdjustMonth(a,+1,m,g)?'<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._adjustDate('#"+a.id+"', +"+j+", 'M');\" title=\""+r+'"><span class="ui-icon ui-icon-circle-triangle-'+
(c?"w":"e")+'">'+r+"</span></a>":f?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+r+'"><span class="ui-icon ui-icon-circle-triangle-'+(c?"w":"e")+'">'+r+"</span></a>";j=this._get(a,"currentText");r=this._get(a,"gotoCurrent")&&a.currentDay?u:b;j=!h?j:this.formatDate(j,r,this._getFormatConfig(a));h=!a.inline?'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_'+y+'.datepicker._hideDatepicker();">'+this._get(a,
"closeText")+"</button>":"";e=e?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(c?h:"")+(this._isInRange(a,r)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_'+y+".datepicker._gotoToday('#"+a.id+"');\">"+j+"</button>":"")+(c?"":h)+"</div>":"";h=parseInt(this._get(a,"firstDay"),10);h=isNaN(h)?0:h;j=this._get(a,"showWeek");r=this._get(a,"dayNames");this._get(a,"dayNamesShort");var s=this._get(a,"dayNamesMin"),z=
this._get(a,"monthNames"),w=this._get(a,"monthNamesShort"),p=this._get(a,"beforeShowDay"),v=this._get(a,"showOtherMonths"),H=this._get(a,"selectOtherMonths");this._get(a,"calculateWeek");for(var L=this._getDefaultDate(a),I="",D=0;D<i[0];D++){for(var M="",E=0;E<i[1];E++){var N=this._daylightSavingAdjust(new Date(m,g,a.selectedDay)),t=" ui-corner-all",x="";if(l){x+='<div class="ui-datepicker-group';if(i[1]>1)switch(E){case 0:x+=" ui-datepicker-group-first";t=" ui-corner-"+(c?"right":"left");break;case i[1]-
1:x+=" ui-datepicker-group-last";t=" ui-corner-"+(c?"left":"right");break;default:x+=" ui-datepicker-group-middle";t="";break}x+='">'}x+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+t+'">'+(/all|left/.test(t)&&D==0?c?f:n:"")+(/all|right/.test(t)&&D==0?c?n:f:"")+this._generateMonthYearHeader(a,g,m,k,o,D>0||E>0,z,w)+'</div><table class="ui-datepicker-calendar"><thead><tr>';var B=j?'<th class="ui-datepicker-week-col">'+this._get(a,"weekHeader")+"</th>":"";for(t=0;t<7;t++){var q=
(t+h)%7;B+="<th"+((t+h+6)%7>=5?' class="ui-datepicker-week-end"':"")+'><span title="'+r[q]+'">'+s[q]+"</span></th>"}x+=B+"</tr></thead><tbody>";B=this._getDaysInMonth(m,g);if(m==a.selectedYear&&g==a.selectedMonth)a.selectedDay=Math.min(a.selectedDay,B);t=(this._getFirstDayOfMonth(m,g)-h+7)%7;B=l?6:Math.ceil((t+B)/7);q=this._daylightSavingAdjust(new Date(m,g,1-t));for(var O=0;O<B;O++){x+="<tr>";var P=!j?"":'<td class="ui-datepicker-week-col">'+this._get(a,"calculateWeek")(q)+"</td>";for(t=0;t<7;t++){var G=
p?p.apply(a.input?a.input[0]:null,[q]):[true,""],C=q.getMonth()!=g,J=C&&!H||!G[0]||k&&q<k||o&&q>o;P+='<td class="'+((t+h+6)%7>=5?" ui-datepicker-week-end":"")+(C?" ui-datepicker-other-month":"")+(q.getTime()==N.getTime()&&g==a.selectedMonth&&a._keyEvent||L.getTime()==q.getTime()&&L.getTime()==N.getTime()?" "+this._dayOverClass:"")+(J?" "+this._unselectableClass+" ui-state-disabled":"")+(C&&!v?"":" "+G[1]+(q.getTime()==u.getTime()?" "+this._currentClass:"")+(q.getTime()==b.getTime()?" ui-datepicker-today":
""))+'"'+((!C||v)&&G[2]?' title="'+G[2]+'"':"")+(J?"":' onclick="DP_jQuery_'+y+".datepicker._selectDay('#"+a.id+"',"+q.getMonth()+","+q.getFullYear()+', this);return false;"')+">"+(C&&!v?"&#xa0;":J?'<span class="ui-state-default">'+q.getDate()+"</span>":'<a class="ui-state-default'+(q.getTime()==b.getTime()?" ui-state-highlight":"")+(q.getTime()==u.getTime()?" ui-state-active":"")+(C?" ui-priority-secondary":"")+'" href="#">'+q.getDate()+"</a>")+"</td>";q.setDate(q.getDate()+1);q=this._daylightSavingAdjust(q)}x+=
P+"</tr>"}g++;if(g>11){g=0;m++}x+="</tbody></table>"+(l?"</div>"+(i[0]>0&&E==i[1]-1?'<div class="ui-datepicker-row-break"></div>':""):"");M+=x}I+=M}I+=e+(d.browser.msie&&parseInt(d.browser.version,10)<7&&!a.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':"");a._keyEvent=false;return I},_generateMonthYearHeader:function(a,b,c,e,f,h,i,g){var j=this._get(a,"changeMonth"),l=this._get(a,"changeYear"),u=this._get(a,"showMonthAfterYear"),k='<div class="ui-datepicker-title">',
o="";if(h||!j)o+='<span class="ui-datepicker-month">'+i[b]+"</span>";else{i=e&&e.getFullYear()==c;var m=f&&f.getFullYear()==c;o+='<select class="ui-datepicker-month" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+a.id+"', this, 'M');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";for(var n=0;n<12;n++)if((!i||n>=e.getMonth())&&(!m||n<=f.getMonth()))o+='<option value="'+n+'"'+(n==b?' selected="selected"':"")+">"+g[n]+"</option>";o+="</select>"}u||(k+=o+(h||!(j&&
l)?"&#xa0;":""));a.yearshtml="";if(h||!l)k+='<span class="ui-datepicker-year">'+c+"</span>";else{g=this._get(a,"yearRange").split(":");var r=(new Date).getFullYear();i=function(s){s=s.match(/c[+-].*/)?c+parseInt(s.substring(1),10):s.match(/[+-].*/)?r+parseInt(s,10):parseInt(s,10);return isNaN(s)?r:s};b=i(g[0]);g=Math.max(b,i(g[1]||""));b=e?Math.max(b,e.getFullYear()):b;g=f?Math.min(g,f.getFullYear()):g;for(a.yearshtml+='<select class="ui-datepicker-year" onchange="DP_jQuery_'+y+".datepicker._selectMonthYear('#"+
a.id+"', this, 'Y');\" onclick=\"DP_jQuery_"+y+".datepicker._clickMonthYear('#"+a.id+"');\">";b<=g;b++)a.yearshtml+='<option value="'+b+'"'+(b==c?' selected="selected"':"")+">"+b+"</option>";a.yearshtml+="</select>";if(d.browser.mozilla)k+='<select class="ui-datepicker-year"><option value="'+c+'" selected="selected">'+c+"</option></select>";else{k+=a.yearshtml;a.yearshtml=null}}k+=this._get(a,"yearSuffix");if(u)k+=(h||!(j&&l)?"&#xa0;":"")+o;k+="</div>";return k},_adjustInstDate:function(a,b,c){var e=
a.drawYear+(c=="Y"?b:0),f=a.drawMonth+(c=="M"?b:0);b=Math.min(a.selectedDay,this._getDaysInMonth(e,f))+(c=="D"?b:0);e=this._restrictMinMax(a,this._daylightSavingAdjust(new Date(e,f,b)));a.selectedDay=e.getDate();a.drawMonth=a.selectedMonth=e.getMonth();a.drawYear=a.selectedYear=e.getFullYear();if(c=="M"||c=="Y")this._notifyChange(a)},_restrictMinMax:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");b=c&&b<c?c:b;return b=a&&b>a?a:b},_notifyChange:function(a){var b=this._get(a,
"onChangeMonthYear");if(b)b.apply(a.input?a.input[0]:null,[a.selectedYear,a.selectedMonth+1,a])},_getNumberOfMonths:function(a){a=this._get(a,"numberOfMonths");return a==null?[1,1]:typeof a=="number"?[1,a]:a},_getMinMaxDate:function(a,b){return this._determineDate(a,this._get(a,b+"Date"),null)},_getDaysInMonth:function(a,b){return 32-this._daylightSavingAdjust(new Date(a,b,32)).getDate()},_getFirstDayOfMonth:function(a,b){return(new Date(a,b,1)).getDay()},_canAdjustMonth:function(a,b,c,e){var f=this._getNumberOfMonths(a);
c=this._daylightSavingAdjust(new Date(c,e+(b<0?b:f[0]*f[1]),1));b<0&&c.setDate(this._getDaysInMonth(c.getFullYear(),c.getMonth()));return this._isInRange(a,c)},_isInRange:function(a,b){var c=this._getMinMaxDate(a,"min");a=this._getMinMaxDate(a,"max");return(!c||b.getTime()>=c.getTime())&&(!a||b.getTime()<=a.getTime())},_getFormatConfig:function(a){var b=this._get(a,"shortYearCutoff");b=typeof b!="string"?b:(new Date).getFullYear()%100+parseInt(b,10);return{shortYearCutoff:b,dayNamesShort:this._get(a,
"dayNamesShort"),dayNames:this._get(a,"dayNames"),monthNamesShort:this._get(a,"monthNamesShort"),monthNames:this._get(a,"monthNames")}},_formatDate:function(a,b,c,e){if(!b){a.currentDay=a.selectedDay;a.currentMonth=a.selectedMonth;a.currentYear=a.selectedYear}b=b?typeof b=="object"?b:this._daylightSavingAdjust(new Date(e,c,b)):this._daylightSavingAdjust(new Date(a.currentYear,a.currentMonth,a.currentDay));return this.formatDate(this._get(a,"dateFormat"),b,this._getFormatConfig(a))}});d.fn.datepicker=
function(a){if(!this.length)return this;if(!d.datepicker.initialized){d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);d.datepicker.initialized=true}var b=Array.prototype.slice.call(arguments,1);if(typeof a=="string"&&(a=="isDisabled"||a=="getDate"||a=="widget"))return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this[0]].concat(b));if(a=="option"&&arguments.length==2&&typeof arguments[1]=="string")return d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,
[this[0]].concat(b));return this.each(function(){typeof a=="string"?d.datepicker["_"+a+"Datepicker"].apply(d.datepicker,[this].concat(b)):d.datepicker._attachDatepicker(this,a)})};d.datepicker=new K;d.datepicker.initialized=false;d.datepicker.uuid=(new Date).getTime();d.datepicker.version="1.8.11";window["DP_jQuery_"+y]=d})(jQuery);
;/*
 * jQuery UI Progressbar 1.8.11
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function(b,d){b.widget("ui.progressbar",{options:{value:0,max:100},min:0,_create:function(){this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min,"aria-valuemax":this.options.max,"aria-valuenow":this._value()});this.valueDiv=b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this.oldValue=this._value();this._refreshValue()},destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
this.valueDiv.remove();b.Widget.prototype.destroy.apply(this,arguments)},value:function(a){if(a===d)return this._value();this._setOption("value",a);return this},_setOption:function(a,c){if(a==="value"){this.options.value=c;this._refreshValue();this._value()===this.options.max&&this._trigger("complete")}b.Widget.prototype._setOption.apply(this,arguments)},_value:function(){var a=this.options.value;if(typeof a!=="number")a=0;return Math.min(this.options.max,Math.max(this.min,a))},_percentage:function(){return 100*
this._value()/this.options.max},_refreshValue:function(){var a=this.value(),c=this._percentage();if(this.oldValue!==a){this.oldValue=a;this._trigger("change")}this.valueDiv.toggleClass("ui-corner-right",a===this.options.max).width(c.toFixed(0)+"%");this.element.attr("aria-valuenow",a)}});b.extend(b.ui.progressbar,{version:"1.8.11"})})(jQuery);
;
(function($){$.fn.tipsy=function(options){options=$.extend({},$.fn.tipsy.defaults,options);return this.each(function(){var opts=$.fn.tipsy.elementOptions(this,options);$(this).hover(function(){$.data(this,'cancel.tipsy',true);var tip=$.data(this,'active.tipsy');if(!tip){tip=$('<div class="tipsy"><div class="tipsy-inner"/></div>');tip.css({position:'absolute',zIndex:100000});$.data(this,'active.tipsy',tip);}
if($(this).attr('title')||typeof($(this).attr('original-title'))!='string'){$(this).attr('original-title',$(this).attr('title')||'').removeAttr('title');}
var title;if(typeof opts.title=='string'){title=$(this).attr(opts.title=='title'?'original-title':opts.title);}else if(typeof opts.title=='function'){title=opts.title.call(this);}
tip.find('.tipsy-inner')[opts.html?'html':'text'](title||opts.fallback);var pos=$.extend({},$(this).offset(),{width:this.offsetWidth,height:this.offsetHeight});tip.get(0).className='tipsy';tip.remove().css({top:0,left:0,visibility:'hidden',display:'block'}).appendTo(document.body);var actualWidth=tip[0].offsetWidth,actualHeight=tip[0].offsetHeight;var gravity=(typeof opts.gravity=='function')?opts.gravity.call(this):opts.gravity;switch(gravity.charAt(0)){case'n':tip.css({top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}).addClass('tipsy-north');break;case's':tip.css({top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}).addClass('tipsy-south');break;case'e':tip.css({top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}).addClass('tipsy-east');break;case'w':tip.css({top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}).addClass('tipsy-west');break;}
if(opts.fade){tip.css({opacity:0,display:'block',visibility:'visible'}).animate({opacity:0.8});}else{tip.css({visibility:'visible'});}},function(){$.data(this,'cancel.tipsy',false);var self=this;setTimeout(function(){if($.data(this,'cancel.tipsy'))return;var tip=$.data(self,'active.tipsy');if(tip){if(opts.fade){tip.stop().fadeOut(function(){$(this).remove();});}else{tip.remove();}}},100);});});};$.fn.tipsy.elementOptions=function(ele,options){return $.metadata?$.extend({},options,$(ele).metadata()):options;};$.fn.tipsy.defaults={fade:false,fallback:'',gravity:'n',html:false,title:'title'};$.fn.tipsy.autoNS=function(){return $(this).offset().top>($(document).scrollTop()+$(window).height()/2)?'s':'n';};$.fn.tipsy.autoWE=function(){return $(this).offset().left>($(document).scrollLeft()+$(window).width()/2)?'e':'w';};})(jQuery);
/*
 * FancyBox - jQuery Plugin
 * Simple and fancy lightbox alternative
 *
 * Examples and documentation at: http://fancybox.net
 * 
 * Copyright (c) 2008 - 2010 Janis Skarnelis
 * That said, it is hardly a one-person project. Many people have submitted bugs, code, and offered their advice freely. Their support is greatly appreciated.
 * 
 * Version: 1.3.4 (11/11/2010)
 * Requires: jQuery v1.3+
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function(b){var m,t,u,f,D,j,E,n,z,A,q=0,e={},o=[],p=0,d={},l=[],G=null,v=new Image,J=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,W=/[^\.]\.(swf)\s*$/i,K,L=1,y=0,s="",r,i,h=false,B=b.extend(b("<div/>")[0],{prop:0}),M=b.browser.msie&&b.browser.version<7&&!window.XMLHttpRequest,N=function(){t.hide();v.onerror=v.onload=null;G&&G.abort();m.empty()},O=function(){if(false===e.onError(o,q,e)){t.hide();h=false}else{e.titleShow=false;e.width="auto";e.height="auto";m.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>');
F()}},I=function(){var a=o[q],c,g,k,C,P,w;N();e=b.extend({},b.fn.fancybox.defaults,typeof b(a).data("fancybox")=="undefined"?e:b(a).data("fancybox"));w=e.onStart(o,q,e);if(w===false)h=false;else{if(typeof w=="object")e=b.extend(e,w);k=e.title||(a.nodeName?b(a).attr("title"):a.title)||"";if(a.nodeName&&!e.orig)e.orig=b(a).children("img:first").length?b(a).children("img:first"):b(a);if(k===""&&e.orig&&e.titleFromAlt)k=e.orig.attr("alt");c=e.href||(a.nodeName?b(a).attr("href"):a.href)||null;if(/^(?:javascript)/i.test(c)||
c=="#")c=null;if(e.type){g=e.type;if(!c)c=e.content}else if(e.content)g="html";else if(c)g=c.match(J)?"image":c.match(W)?"swf":b(a).hasClass("iframe")?"iframe":c.indexOf("#")===0?"inline":"ajax";if(g){if(g=="inline"){a=c.substr(c.indexOf("#"));g=b(a).length>0?"inline":"ajax"}e.type=g;e.href=c;e.title=k;if(e.autoDimensions)if(e.type=="html"||e.type=="inline"||e.type=="ajax"){e.width="auto";e.height="auto"}else e.autoDimensions=false;if(e.modal){e.overlayShow=true;e.hideOnOverlayClick=false;e.hideOnContentClick=
false;e.enableEscapeButton=false;e.showCloseButton=false}e.padding=parseInt(e.padding,10);e.margin=parseInt(e.margin,10);m.css("padding",e.padding+e.margin);b(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){b(this).replaceWith(j.children())});switch(g){case "html":m.html(e.content);F();break;case "inline":if(b(a).parent().is("#fancybox-content")===true){h=false;break}b('<div class="fancybox-inline-tmp" />').hide().insertBefore(b(a)).bind("fancybox-cleanup",function(){b(this).replaceWith(j.children())}).bind("fancybox-cancel",
function(){b(this).replaceWith(m.children())});b(a).appendTo(m);F();break;case "image":h=false;b.fancybox.showActivity();v=new Image;v.onerror=function(){O()};v.onload=function(){h=true;v.onerror=v.onload=null;e.width=v.width;e.height=v.height;b("<img />").attr({id:"fancybox-img",src:v.src,alt:e.title}).appendTo(m);Q()};v.src=c;break;case "swf":e.scrolling="no";C='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+e.width+'" height="'+e.height+'"><param name="movie" value="'+c+
'"></param>';P="";b.each(e.swf,function(x,H){C+='<param name="'+x+'" value="'+H+'"></param>';P+=" "+x+'="'+H+'"'});C+='<embed src="'+c+'" type="application/x-shockwave-flash" width="'+e.width+'" height="'+e.height+'"'+P+"></embed></object>";m.html(C);F();break;case "ajax":h=false;b.fancybox.showActivity();e.ajax.win=e.ajax.success;G=b.ajax(b.extend({},e.ajax,{url:c,data:e.ajax.data||{},error:function(x){x.status>0&&O()},success:function(x,H,R){if((typeof R=="object"?R:G).status==200){if(typeof e.ajax.win==
"function"){w=e.ajax.win(c,x,H,R);if(w===false){t.hide();return}else if(typeof w=="string"||typeof w=="object")x=w}m.html(x);F()}}}));break;case "iframe":Q()}}else O()}},F=function(){var a=e.width,c=e.height;a=a.toString().indexOf("%")>-1?parseInt((b(window).width()-e.margin*2)*parseFloat(a)/100,10)+"px":a=="auto"?"auto":a+"px";c=c.toString().indexOf("%")>-1?parseInt((b(window).height()-e.margin*2)*parseFloat(c)/100,10)+"px":c=="auto"?"auto":c+"px";m.wrapInner('<div style="width:'+a+";height:"+c+
";overflow: "+(e.scrolling=="auto"?"auto":e.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>');e.width=m.width();e.height=m.height();Q()},Q=function(){var a,c;t.hide();if(f.is(":visible")&&false===d.onCleanup(l,p,d)){b.event.trigger("fancybox-cancel");h=false}else{h=true;b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");f.is(":visible")&&d.titlePosition!=="outside"&&f.css("height",f.height());l=o;p=q;d=e;if(d.overlayShow){u.css({"background-color":d.overlayColor,
opacity:d.overlayOpacity,cursor:d.hideOnOverlayClick?"pointer":"auto",height:b(document).height()});if(!u.is(":visible")){M&&b("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"});u.show()}}else u.hide();i=X();s=d.title||"";y=0;n.empty().removeAttr("style").removeClass();if(d.titleShow!==false){if(b.isFunction(d.titleFormat))a=d.titleFormat(s,l,p,d);else a=s&&s.length?
d.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+s+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+d.titlePosition+'">'+s+"</div>":false;s=a;if(!(!s||s==="")){n.addClass("fancybox-title-"+d.titlePosition).html(s).appendTo("body").show();switch(d.titlePosition){case "inside":n.css({width:i.width-d.padding*2,marginLeft:d.padding,marginRight:d.padding});
y=n.outerHeight(true);n.appendTo(D);i.height+=y;break;case "over":n.css({marginLeft:d.padding,width:i.width-d.padding*2,bottom:d.padding}).appendTo(D);break;case "float":n.css("left",parseInt((n.width()-i.width-40)/2,10)*-1).appendTo(f);break;default:n.css({width:i.width-d.padding*2,paddingLeft:d.padding,paddingRight:d.padding}).appendTo(f)}}}n.hide();if(f.is(":visible")){b(E.add(z).add(A)).hide();a=f.position();r={top:a.top,left:a.left,width:f.width(),height:f.height()};c=r.width==i.width&&r.height==
i.height;j.fadeTo(d.changeFade,0.3,function(){var g=function(){j.html(m.contents()).fadeTo(d.changeFade,1,S)};b.event.trigger("fancybox-change");j.empty().removeAttr("filter").css({"border-width":d.padding,width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2});if(c)g();else{B.prop=0;b(B).animate({prop:1},{duration:d.changeSpeed,easing:d.easingChange,step:T,complete:g})}})}else{f.removeAttr("style");j.css("border-width",d.padding);if(d.transitionIn=="elastic"){r=V();j.html(m.contents());
f.show();if(d.opacity)i.opacity=0;B.prop=0;b(B).animate({prop:1},{duration:d.speedIn,easing:d.easingIn,step:T,complete:S})}else{d.titlePosition=="inside"&&y>0&&n.show();j.css({width:i.width-d.padding*2,height:e.autoDimensions?"auto":i.height-y-d.padding*2}).html(m.contents());f.css(i).fadeIn(d.transitionIn=="none"?0:d.speedIn,S)}}}},Y=function(){if(d.enableEscapeButton||d.enableKeyboardNav)b(document).bind("keydown.fb",function(a){if(a.keyCode==27&&d.enableEscapeButton){a.preventDefault();b.fancybox.close()}else if((a.keyCode==
37||a.keyCode==39)&&d.enableKeyboardNav&&a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.target.tagName!=="SELECT"){a.preventDefault();b.fancybox[a.keyCode==37?"prev":"next"]()}});if(d.showNavArrows){if(d.cyclic&&l.length>1||p!==0)z.show();if(d.cyclic&&l.length>1||p!=l.length-1)A.show()}else{z.hide();A.hide()}},S=function(){if(!b.support.opacity){j.get(0).style.removeAttribute("filter");f.get(0).style.removeAttribute("filter")}e.autoDimensions&&j.css("height","auto");f.css("height","auto");
s&&s.length&&n.show();d.showCloseButton&&E.show();Y();d.hideOnContentClick&&j.bind("click",b.fancybox.close);d.hideOnOverlayClick&&u.bind("click",b.fancybox.close);b(window).bind("resize.fb",b.fancybox.resize);d.centerOnScroll&&b(window).bind("scroll.fb",b.fancybox.center);if(d.type=="iframe")b('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(b.browser.msie?'allowtransparency="true""':"")+' scrolling="'+e.scrolling+'" src="'+d.href+'"></iframe>').appendTo(j);
f.show();h=false;b.fancybox.center();d.onComplete(l,p,d);var a,c;if(l.length-1>p){a=l[p+1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}if(p>0){a=l[p-1].href;if(typeof a!=="undefined"&&a.match(J)){c=new Image;c.src=a}}},T=function(a){var c={width:parseInt(r.width+(i.width-r.width)*a,10),height:parseInt(r.height+(i.height-r.height)*a,10),top:parseInt(r.top+(i.top-r.top)*a,10),left:parseInt(r.left+(i.left-r.left)*a,10)};if(typeof i.opacity!=="undefined")c.opacity=a<0.5?0.5:a;f.css(c);
j.css({width:c.width-d.padding*2,height:c.height-y*a-d.padding*2})},U=function(){return[b(window).width()-d.margin*2,b(window).height()-d.margin*2,b(document).scrollLeft()+d.margin,b(document).scrollTop()+d.margin]},X=function(){var a=U(),c={},g=d.autoScale,k=d.padding*2;c.width=d.width.toString().indexOf("%")>-1?parseInt(a[0]*parseFloat(d.width)/100,10):d.width+k;c.height=d.height.toString().indexOf("%")>-1?parseInt(a[1]*parseFloat(d.height)/100,10):d.height+k;if(g&&(c.width>a[0]||c.height>a[1]))if(e.type==
"image"||e.type=="swf"){g=d.width/d.height;if(c.width>a[0]){c.width=a[0];c.height=parseInt((c.width-k)/g+k,10)}if(c.height>a[1]){c.height=a[1];c.width=parseInt((c.height-k)*g+k,10)}}else{c.width=Math.min(c.width,a[0]);c.height=Math.min(c.height,a[1])}c.top=parseInt(Math.max(a[3]-20,a[3]+(a[1]-c.height-40)*0.5),10);c.left=parseInt(Math.max(a[2]-20,a[2]+(a[0]-c.width-40)*0.5),10);return c},V=function(){var a=e.orig?b(e.orig):false,c={};if(a&&a.length){c=a.offset();c.top+=parseInt(a.css("paddingTop"),
10)||0;c.left+=parseInt(a.css("paddingLeft"),10)||0;c.top+=parseInt(a.css("border-top-width"),10)||0;c.left+=parseInt(a.css("border-left-width"),10)||0;c.width=a.width();c.height=a.height();c={width:c.width+d.padding*2,height:c.height+d.padding*2,top:c.top-d.padding-20,left:c.left-d.padding-20}}else{a=U();c={width:d.padding*2,height:d.padding*2,top:parseInt(a[3]+a[1]*0.5,10),left:parseInt(a[2]+a[0]*0.5,10)}}return c},Z=function(){if(t.is(":visible")){b("div",t).css("top",L*-40+"px");L=(L+1)%12}else clearInterval(K)};
b.fn.fancybox=function(a){if(!b(this).length)return this;b(this).data("fancybox",b.extend({},a,b.metadata?b(this).metadata():{})).unbind("click.fb").bind("click.fb",function(c){c.preventDefault();if(!h){h=true;b(this).blur();o=[];q=0;c=b(this).attr("rel")||"";if(!c||c==""||c==="nofollow")o.push(this);else{o=b("a[rel="+c+"], area[rel="+c+"]");q=o.index(this)}I()}});return this};b.fancybox=function(a,c){var g;if(!h){h=true;g=typeof c!=="undefined"?c:{};o=[];q=parseInt(g.index,10)||0;if(b.isArray(a)){for(var k=
0,C=a.length;k<C;k++)if(typeof a[k]=="object")b(a[k]).data("fancybox",b.extend({},g,a[k]));else a[k]=b({}).data("fancybox",b.extend({content:a[k]},g));o=jQuery.merge(o,a)}else{if(typeof a=="object")b(a).data("fancybox",b.extend({},g,a));else a=b({}).data("fancybox",b.extend({content:a},g));o.push(a)}if(q>o.length||q<0)q=0;I()}};b.fancybox.showActivity=function(){clearInterval(K);t.show();K=setInterval(Z,66)};b.fancybox.hideActivity=function(){t.hide()};b.fancybox.next=function(){return b.fancybox.pos(p+
1)};b.fancybox.prev=function(){return b.fancybox.pos(p-1)};b.fancybox.pos=function(a){if(!h){a=parseInt(a);o=l;if(a>-1&&a<l.length){q=a;I()}else if(d.cyclic&&l.length>1){q=a>=l.length?0:l.length-1;I()}}};b.fancybox.cancel=function(){if(!h){h=true;b.event.trigger("fancybox-cancel");N();e.onCancel(o,q,e);h=false}};b.fancybox.close=function(){function a(){u.fadeOut("fast");n.empty().hide();f.hide();b.event.trigger("fancybox-cleanup");j.empty();d.onClosed(l,p,d);l=e=[];p=q=0;d=e={};h=false}if(!(h||f.is(":hidden"))){h=
true;if(d&&false===d.onCleanup(l,p,d))h=false;else{N();b(E.add(z).add(A)).hide();b(j.add(u)).unbind();b(window).unbind("resize.fb scroll.fb");b(document).unbind("keydown.fb");j.find("iframe").attr("src",M&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank");d.titlePosition!=="inside"&&n.empty();f.stop();if(d.transitionOut=="elastic"){r=V();var c=f.position();i={top:c.top,left:c.left,width:f.width(),height:f.height()};if(d.opacity)i.opacity=1;n.empty().hide();B.prop=1;
b(B).animate({prop:0},{duration:d.speedOut,easing:d.easingOut,step:T,complete:a})}else f.fadeOut(d.transitionOut=="none"?0:d.speedOut,a)}}};b.fancybox.resize=function(){u.is(":visible")&&u.css("height",b(document).height());b.fancybox.center(true)};b.fancybox.center=function(a){var c,g;if(!h){g=a===true?1:0;c=U();!g&&(f.width()>c[0]||f.height()>c[1])||f.stop().animate({top:parseInt(Math.max(c[3]-20,c[3]+(c[1]-j.height()-40)*0.5-d.padding)),left:parseInt(Math.max(c[2]-20,c[2]+(c[0]-j.width()-40)*0.5-
d.padding))},typeof a=="number"?a:200)}};b.fancybox.init=function(){if(!b("#fancybox-wrap").length){b("body").append(m=b('<div id="fancybox-tmp"></div>'),t=b('<div id="fancybox-loading"><div></div></div>'),u=b('<div id="fancybox-overlay"></div>'),f=b('<div id="fancybox-wrap"></div>'));D=b('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(f);
D.append(j=b('<div id="fancybox-content"></div>'),E=b('<a id="fancybox-close"></a>'),n=b('<div id="fancybox-title"></div>'),z=b('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),A=b('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>'));E.click(b.fancybox.close);t.click(b.fancybox.cancel);z.click(function(a){a.preventDefault();b.fancybox.prev()});A.click(function(a){a.preventDefault();b.fancybox.next()});
b.fn.mousewheel&&f.bind("mousewheel.fb",function(a,c){if(h)a.preventDefault();else if(b(a.target).get(0).clientHeight==0||b(a.target).get(0).scrollHeight===b(a.target).get(0).clientHeight){a.preventDefault();b.fancybox[c>0?"prev":"next"]()}});b.support.opacity||f.addClass("fancybox-ie");if(M){t.addClass("fancybox-ie6");f.addClass("fancybox-ie6");b('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(D)}}};
b.fn.fancybox.defaults={padding:10,margin:40,opacity:false,modal:false,cyclic:false,scrolling:"auto",width:560,height:340,autoScale:true,autoDimensions:true,centerOnScroll:false,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:true,hideOnContentClick:false,overlayShow:true,overlayOpacity:0.7,overlayColor:"#777",titleShow:true,titlePosition:"float",titleFormat:null,titleFromAlt:false,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",
easingOut:"swing",showCloseButton:true,showNavArrows:true,enableEscapeButton:true,enableKeyboardNav:true,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}};b(document).ready(function(){b.fancybox.init()})})(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('h.i[\'1a\']=h.i[\'z\'];h.O(h.i,{y:\'D\',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});',62,74,'||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce'.split('|'),0,{}))

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
if(!this.JSON){this.JSON={};}
(function(){function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());
Track = {
  logClassProfileUsersReferred: function(nid, referrer, callback) {
    PA.call_pj("network.log_class_profile_users_referred", {
      nid: nid,
      referrer: referrer
    }, 1, callback, function(){});
  }
};
String.prototype.toRelativeTime = function(now_threshold) {
  var dt = new Date();
  dt.setISO8601(this);
  return dt.toRelativeTime(now_threshold);
};
String.prototype.toDate = function() {
  var dt = new Date();
  dt.setISO8601(this);
  return dt;
};
String.prototype.usDateToDB = function() {
  var arr = this.split('/');
  if (arr.length == 3) {
    if(arr[0].length == 1) arr[0] = "0" + arr[0];
    if(arr[1].length == 1) arr[1] = "0" + arr[1];
    return arr[2] + '-' + arr[0] + '-' + arr[1];
  }
};
String.prototype.trim = function() {
  return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};
function showSecs(secs) {
  if (secs == 0) return "1 sec";
  if (!secs) return "-";
  if (secs < 60) return "" + secs + " sec";
  if (secs < 60*60) return "" + Math.round(secs / 60) + " min";
  return "" + Math.round(secs / 60 / 6) / 10 + " hr";
}
Date.prototype.toRelativeTime = function(now_threshold) {
  var delta = new Date() - this;

  now_threshold = parseInt(now_threshold, 10);

  if (isNaN(now_threshold)) {
    now_threshold = 10000;
  }

  if (delta <= now_threshold) {
    return 'Just now';
  }

  var units = null;
  var conversions = {
    millisecond: 1, // ms    -> ms
    second: 1000,   // ms    -> sec
    minute: 60,     // sec   -> min
    hour:   60,     // min   -> hour
    day:    24,     // hour  -> day
    month:  30,     // day   -> month (roughly)
    year:   12      // month -> year
  };

  for (var key in conversions) {
    if (delta < conversions[key]) {
      break;
    } else {
      units = key; // keeps track of the selected key over the iteration
      delta = delta / conversions[key];
    }
  }

  // pluralize a unit when the difference is greater than 1.
  delta = Math.floor(delta);
  if (delta !== 1) { units += "s"; }
  return [delta, units, "ago"].join(" ");
};

/*
 * Wraps up a common pattern used with this plugin whereby you take a String
 * representation of a Date, and want back a date object.
 */
Date.fromString = function(str) {
  return new Date(Date.parse(str));
};


function isFunction(obj) { return Object.prototype.toString.call(obj) === "[object Function]"; };

Array.prototype.forEach = function(func) {
    for (var i in this) { if (this.hasOwnProperty(i)) { func(this[i]); } }
};

Array.prototype.map = function(func) {
  var ret = []
  for (var i in this) {
        if (this.hasOwnProperty(i)) {
          var val = func(this[i]);
          if (val) ret.push(val);
        }
      }
  return ret;
};

Array.prototype.remove = function(func) {
    for (var i in this) {
        if (func(this[i])) {
          this.splice(i, 1);
        }
    }
};

Array.prototype.findAll = function(func) {
    var items = [];
    this.forEach(function(i) { if (!isFunction(i)) { if (func(i)) { items.push(i); } } });
    return items;
};

Array.prototype.exist = function(val) {
  for (var i in this)
    if (this[i] == val) return true;
  return false;
};

var Observer = function() {
    this.observations = [];
};

var Observation = function(name, func) {
    this.name = name;
    this.func = func;
};

Observer.prototype = {
    observe: function(name, func) {
        var exists = this.observations.findAll(function(i) {
            return i.name == name && i.func == func; }).length > 0;
        if (!exists) { this.observations.push(new Observation(name, func)); }
    },
    unobserve: function(name, func) {
        this.observations.remove(function(i) {
            return i.name == name && i.func == func;
        });
    },
    fire: function(name, data, scope) {
        var funcs = this.observations.findAll(function(i) {
            return i.name == name; });
        funcs.forEach(function(i) { i.func.call(scope || window, data); });
    }
};

Date.prototype.get12 = function() {
  var hour = this.getHours();
  var mins = this.getMinutes();
  var ap = "AM";
  if (hour   > 11) { ap = "PM";         }
  if (hour   > 12) { hour = hour - 12;  }
  if (hour   == 0) { hour = 12;         }
  if (mins   < 10) { mins = "0" + mins; }
  return "" + hour + ":" + mins + ap;
}

Date.prototype.getWDay = function() {
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][this.getDay()];
}

Date.prototype.getFullDate = function() {
  return "" + (this.getMonth() + 1) + "/" + this.getDate() + "/" + (this.getFullYear() % 100);
}
Date.prototype.shortUTCDate  = function() {
  var m = this.getUTCMonth() + 1;
  var d = this.getUTCDate();
  if (m < 10) m = '0' + m;
  if (d < 10) d = '0' + d;
  return '' + m + '/' + (this.getUTCFullYear() % 100);
}
Date.prototype.setISO8601 = function(dString) {
  var regexp = /(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)(:)?(\d\d)(\.\d+)?(Z|([+-])(\d\d)(:)?(\d\d))/;
  if (!dString) return this;
  if (dString.toString().match(new RegExp(regexp))) {
    var d = dString.match(new RegExp(regexp));
    var offset = 0;
    this.setUTCDate(1);
    this.setUTCFullYear(parseInt(d[1],10));
    this.setUTCMonth(parseInt(d[3],10) - 1);
    this.setUTCDate(parseInt(d[5],10));
    this.setUTCHours(parseInt(d[7],10));
    this.setUTCMinutes(parseInt(d[9],10));
    this.setUTCSeconds(parseInt(d[11],10));
    if (d[12])
    this.setUTCMilliseconds(parseFloat(d[12]) * 1000);
    else
    this.setUTCMilliseconds(0);
    if (d[13] != 'Z') {
      offset = (d[15] * 60) + parseInt(d[17],10);
      offset *= ((d[14] == '-') ? -1 : 1);
      this.setTime(this.getTime() - offset * 60 * 1000);
    }
  } else {
    this.setTime(Date.parse(dString));
  }
  return this;
};

function GetUrlParameter( name )
{
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return results[1];
};

var dateFormat = function () {
	var	token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
		timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
		timezoneClip = /[^-+\dA-Z]/g,
		pad = function (val, len) {
			val = String(val);
			len = len || 2;
			while (val.length < len) val = "0" + val;
			return val;
		};

	// Regexes and supporting functions are cached through closure
	return function (date, mask, utc) {
		var dF = dateFormat;

		// You can't provide utc if you skip other args (use the "UTC:" mask prefix)
		if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
			mask = date;
			date = undefined;
		}

		// Passing date through Date applies Date.parse, if necessary
		date = date ? new Date(date) : new Date;
		if (isNaN(date)) throw SyntaxError("invalid date");

		mask = String(dF.masks[mask] || mask || dF.masks["default"]);

		// Allow setting the utc argument via the mask
		if (mask.slice(0, 4) == "UTC:") {
			mask = mask.slice(4);
			utc = true;
		}

		var	_ = utc ? "getUTC" : "get",
			d = date[_ + "Date"](),
			D = date[_ + "Day"](),
			m = date[_ + "Month"](),
			y = date[_ + "FullYear"](),
			H = date[_ + "Hours"](),
			M = date[_ + "Minutes"](),
			s = date[_ + "Seconds"](),
			L = date[_ + "Milliseconds"](),
			o = utc ? 0 : date.getTimezoneOffset(),
			flags = {
				d:    d,
				dd:   pad(d),
				ddd:  dF.i18n.dayNames[D],
				dddd: dF.i18n.dayNames[D + 7],
				m:    m + 1,
				mm:   pad(m + 1),
				mmm:  dF.i18n.monthNames[m],
				mmmm: dF.i18n.monthNames[m + 12],
				yy:   String(y).slice(2),
				yyyy: y,
				h:    H % 12 || 12,
				hh:   pad(H % 12 || 12),
				H:    H,
				HH:   pad(H),
				M:    M,
				MM:   pad(M),
				s:    s,
				ss:   pad(s),
				l:    pad(L, 3),
				L:    pad(L > 99 ? Math.round(L / 10) : L),
				t:    H < 12 ? "a"  : "p",
				tt:   H < 12 ? "am" : "pm",
				T:    H < 12 ? "A"  : "P",
				TT:   H < 12 ? "AM" : "PM",
				Z:    utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
				o:    (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
				S:    ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
			};

		return mask.replace(token, function ($0) {
			return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
		});
	};
}();

// Some common format strings
dateFormat.masks = {
	"default":      "ddd mmm dd yyyy HH:MM:ss",
	shortDate:      "m/d/yy",
	mediumDate:     "mmm d, yyyy",
	longDate:       "mmmm d, yyyy",
	fullDate:       "dddd, mmmm d, yyyy",
	shortTime:      "h:MM TT",
	mediumTime:     "h:MM:ss TT",
	longTime:       "h:MM:ss TT Z",
	isoDate:        "yyyy-mm-dd",
	isoTime:        "HH:MM:ss",
	isoDateTime:    "yyyy-mm-dd'T'HH:MM:ss",
	isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
	dayNames: [
		"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
		"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
	],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
		"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
	]
};

// For convenience...
Date.prototype.format = function (mask, utc) {
	return dateFormat(this, mask, utc);
};

function ProcessTextArea(text) {
  content_text = text;
  content_text = content_text.replace(/&lt;/g, "<");
  content_text = content_text.replace(/&gt;/g, ">");
  content_text = content_text.replace(/&amp;/g, "&");
  content_text = content_text.replace(/&quot;/g, '"');
  return content_text;
}

var DID_REPLACE_LATEST = false;
var POLL_OPTS = [];
function ProcessText(text, noReplace, contentType) {
  // do latex logic
  DID_REPLACE_LATEST = false;
  if (!text) return "";
  if (text.indexOf("<") >= 0) DID_REPLACE_LATEST = true;
  if (noReplace) {
    text = text.replace(/</g, "&lt;");
    text = text.replace(/>/g, "&gt;");
  }
  //text = text.replace(/([^>]|<br>)\n/g, "$1<br>");
  //text = text.replace(/([^>]|<br>)\n/g, "$1<br>");
  text = text.replace(/\n/g, "<br>");
  text = text.replace(/<\/li><br>/g, "</li>");
  if (noReplace) return text;
  text = text.replace(/&amp;/g, "&");
  text = text.replace(/&quot;/g, '"');
  var pres = text.match(/<pre>[\s\S]*?<\/pre>/g);
  var tts = text.match(/<tt>[\s\S]*?<\/tt>/g);
  if (pres) {
    for (var i = 0; i < pres.length; i++) {
      text = text.replace(pres[i], "<|_p_" + i + "_p_|>");
    }
  }
  if (tts) {
    for (var i = 0; i < tts.length; i++) {
      text = text.replace(tts[i], "<|_tt_" + i + "_tt_|>");
    }
  }
  var arr = text.split('$$');
  if (arr.length > 2) {
    // potential latex
    for (var i = 1; i <= arr.length - 1; i+=2) {
      var str = arr[i]
      if (str.length >= 1) {
        // look for special chars: \, _, ^
        //if ((!str.match(/[\s]/) || str.match(/[\\_^]/)) && str.indexOf("<br>") == -1) {
          var content_text = str;
          content_text = content_text.replace(/&lt;/g, "<");
          content_text = content_text.replace(/&gt;/g, ">");
          content_text = content_text.replace(/&amp;/g, "&");
          content_text = content_text.replace(/&quot;/g, '"');
          content_text = content_text.replace(/<br>/g, "\n");
          var replaced = "<img style='width: auto;vertical-align: text-bottom;' src='/main/show_latex?" + escape(content_text) + "'/>"
          DID_REPLACE_LATEST = true;
          text = text.replace("$$" + str + "$$", replaced);
          //text = text.replace("$" + replaced, replaced);
          //text = text.replace("$" + replaced, replaced);
          //text = text.replace(replaced + "$", replaced);
          //text = text.replace(replaced + "$", replaced);
        //}
      }
    }
  }
  text = text.replace(/([^"'])(http[s]*:\/\/[^ \t\n<\[\]"]+[\w\/?=)}])/g, '$1<a href="$2" target="_blank">$2</a>');
  text = text.replace(/^(http[s]*:\/\/[^ \t\n<\[\]"]+[\w\/?=)}])/g, '<a href="$1" target="_blank">$1</a>');
  text = text.replace(/target="_blank">http:\/\/piazza.com\/class/g, '>http://piazza.com/class');
  text = text.replace(/target="_blank">http:\/\/piazzza.com\/class/g, '>http://piazza.com/class');
  text = text.replace(/target="_blank">http:\/\/www.piazza.com\/class/g, '>http://piazza.com/class');
  text = text.replace(/target="_blank">http:\/\/www.piazzza.com\/class/g, '>http://piazza.com/class');
  if (typeof PD != 'undefined') {
    //text = text.replace(/([^\w\/])#(\w[\w-]*(-&gt;){0,1}[\w-]+)/g, "$1" + PD.makeTag("$2"));
    //text = text.replace(/^#(\w[\w-]*(-&gt;){0,1}[\w-]+)/g, PD.makeTag("$1"));
    text = text.replace(/([^\w\/])#(\w[\w\-.+]*[\w\-+]+)/g, "$1" + PD.makeTag("$2"));
    text = text.replace(/^#(\w[\w\-.+]*[\w\-+]+)/g, PD.makeTag("$1"));
    text = text.replace(/([^\w\/])#(\w)([^\w\/<\-.+])/g, "$1" + PD.makeTag("$2") + "$3");
    text = text.replace(/([^\w\/])#(\w)$/g, "$1" + PD.makeTag("$2"));
    text = text.replace(/^@(\d+)/g, '<a href="#' + PD.term + "/" + PD.selectedNetwork.course_number.replace(/[^\w]/g, '').toLowerCase() + '/$1">@$1</a>');
    text = text.replace(/([^\w])@(\d+)/g, '$1<a href="#' + PD.term + "/" + PD.selectedNetwork.course_number.replace(/[^\w]/g, '').toLowerCase() + '/$2">@$2</a>');
  }
  if (pres) {
    for (var i = 0; i < pres.length; i++) {
      text = text.replace("<|_p_" + i + "_p_|>", "<pre style='white-space: -moz-pre-wrap;white-space: -o-pre-wrap;white-space: pre-wrap;word-wrap: break-word;'>" +
        pres[i].substr(5, pres[i].length - 11).replace(/[$]/g, "$$$$").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&lt;br&gt;/g, "<br>") + "</pre>");
    }
  }
  if (tts) {
    for (var i = 0; i < tts.length; i++) {
      text = text.replace("<|_tt_" + i + "_tt_|>", "<tt>" + tts[i].substr(4, tts[i].length - 9).replace(/[$]/g, "$$$$").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/&lt;br&gt;/g, "<br>") + "</tt>");
    }
  }
  if (contentType == "poll") {
    var allToReplace = text.match(/\[[o*]]/g);
    POLL_OPTS = [];
    if (allToReplace) {
      for (var i = 0; i < allToReplace.length; i++) {
        var toReplace = allToReplace[i];
        var replaceWith = "<input type='radio' class='pollButton' name='pollRadioButton' id='pollButton" + i + "'/>";
        if (toReplace == "[*]")
          replaceWith = "<input type='checkbox' class='pollButton' name='pollRadioButton' id='pollButton" + i + "'/>";
        var at = text.indexOf(toReplace);
        var enter = text.indexOf("<br", at);
        if (enter < 0) enter = text.length;
        var label = text.substr(at + 3, (enter - at - 3));
        var goodLabel = label.replace(/<[^>]*>/g, "");
        POLL_OPTS.push(goodLabel);
        var before = text.substr(0, at + 3);
        var after = text.substr(enter);
        text = before + goodLabel + after;
        text = text.replace(toReplace, replaceWith);
      }
      text += "<br/><br/><span id='pollAnonymityPlaceholder' class='subregionMetadata'></span><br/><button onclick='PD.doVote();' class='pollButton'>Submit</button>";
    }
  }
  // get back pre and cc
  return text;
}

function getFileTypeIcon(name) {
  var fileTypes = {
    avi:'avi.png', css:'css.png', xls:'excel.png', xlsx:'excel.png', doc:'word.png', docx:'word.png',
    zip:'zip.png', gz:'zip.png', tar:'zip.png', gif:'gif.png', html:'html.png', htm:'html.png',
    jpg:'jpg.png', jepg:'jpg.png', jpeg:'jpg.png', js:'js.png', mov:'mov.png', mp3:'mp3.png', mpg:'mpg.png', mpeg:'mpg.png',
    pdf:'pdf.png', png:'png.png', ppt:'powerpoint.png', pptx:'powerpoint.png', txt:'text.png', wma:'wma.png',
    wmv:'wmv.png', doc:'word.png', docx:'word.png', xml:'xml.png'
  }
  var folder = "http://cdn.piazza.com/images/dashboard/qa-panel/types/"
  var parts = name.split('.');
  if (parts.length == 0) return folder + "default.png";
  var ext = parts[parts.length - 1].toLowerCase();
  if (fileTypes[ext]) return folder + fileTypes[ext];
  return folder + "default.png";
}
function injectJs(js){
  var script=document.createElement('script')
  script.setAttribute("type","text/javascript")
  //var jsNode = document.createTextNode(js);
  script.text = js;//appendChild(jsNode);
  document.getElementsByTagName("head")[0].appendChild(script)
}
function isEmail(email) {
  var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email.match(reg);
}
//================================================================
//                  PIAZZZA SECTION
//================================================================

var Piazzza = {};
var Piazza = {};

//
// Piazzza.Data holds all data for the site, and logic to
//
Piazzza.Ajax = {
  user: null,            // the main user who has logged in
  users: {},             // hash for all users that I know
  userQueue: [],         // all users I don't know, but need to get
  userTimeout: null,     // when to call request for users
  session: null,         // session id for this
  networks: null,        // all networks user is part of
  ajaxLogin: false,
  autoGrowTextArea: true, //Used for mobile version due to issues with the answers and questions modifying the page awkwardly

  events: new Observer(),
  push:   new Observer(),// event handler for push messages
  push_data: {t1: 0, t2:0, o1:"", o2:"", id:0}, // last info for object 1
  pushError: 0,
  pushCurrent: null,
  staticContent: false,
  canShowFriends: false,
  sentError: false,

  apiCache: {},

  getCached: function(method, params){
    var cacheKey = method + JSON.stringify(params);
    return PA.apiCache[cacheKey];
  },
  cache: function(method, params, result){
    var cacheKey = method + JSON.stringify(params);
    PA.apiCache[cacheKey] = result;
  },
  login: function(email, pass) {
    PA.call("user.login", {email:email, pass:pass}, null, function(){
      PA.call_pj("user.status", {}, null, function(data, aid) {
        PA.setUserStatus(data);
      }, null, this);
    });
  },
  // open push connection and deal with the results
  initPush: function() {
    if (PA.staticContent) return;
    if (PA.user.email == 'tutorial') return;
    var url = '/logic/push?id=' + PA.push.id + '&t1=' + PA.push_data.t1 + '&t2=' + PA.push_data.t2 +
      '&o1=' + PA.push_data.o1 + '&o2=' + PA.push_data.o2 + '&t=' + (new Date()).getTime();
    if (PA.cookie) url += "&cookie=" + PA.cookie;
    var id = PA.push_data.id;
    if (PA.pushCurrent) {
      PA.pushAbort = true;
      PA.pushCurrent.abort(); // abort previous request
      PA.pushAbort = false;
    }
    PA.pushCurrent = $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',
      timeout: 15 * 60 * 1000, // 15 minute timeout
      success: function(messages) {
        if (PA.pushAbort) return;
        PA.pushCurrent = false;
        if (PA.push_data.id == id)
          setTimeout(function(){ if (PA.push_data.id == id) PA.initPush();}, 1000);
        PA.pushError = 0;
        if (messages && messages instanceof Array) {
          var minT = 0;
          messages.forEach(function(message){
            if (message.type == "keep-alive") {
              minT = message.t;
            }
            if (message.reload) { // need to reload class
              setTimeout(function(){
                PD.loadFeed(false, false);
                if (PD.content) {
                  PA.call_pj("content.get", {cid:PD.content.id, nid:PD.networkId}, 1, function(content, aid) {
                    PD.content = content;
                    PD.populateTextArea('#question', '#question-editor', PD.content, PD.content.history[0].uid == PA.user.id);
                    PD.toggleFeedbackTags('#question', PD.content);
                    PA.push_data.t2 = content.t;
                    PA.push_data.o2 = content.id;
                    PA.push_data.id++;
                    var cur_id = PA.push_data.id;
                    // init push
                    setTimeout(function(){
                      // only init push if user is still viewing this question
                      if (cur_id == PA.push_data.id) {
                        PA.initPush();
                      }
                    }, 5000); // wait 5 seconds
                  });
                }
              }, 200);
            }
            if (message.msg && message.oid && message.t) {
              if (message.oid == PA.push_data.o1 || message.oid == PA.push_data.o2) {
                message.msg.oid = message.oid;
                PA.push.fire("push", message.msg);
                if (message.oid == PA.push_data.o1 && message.t > PA.push_data.t1)
                  PA.push_data.t1 = message.t;
                if (message.oid == PA.push_data.o2 && message.t > PA.push_data.t2)
                  PA.push_data.t2 = message.t;
                if (minT == 0 || minT > message.t)
                  minT = message.t;
              }
            }
          });
          if (PA.push_data.t1 < minT) PA.push_data.t1 = minT;
          if (PA.push_data.t2 < minT) PA.push_data.t2 = minT;
        }
      },
      error: function(req, status, err) {
        PA.pushCurrent = false;
        PA.pushError++;
        if (PA.pushError < 3) {
          if (PA.push_data.id == id)
            setTimeout(function(){ if (PA.push_data.id == id) PA.initPush();}, 5000);
        } else {
          PA.pushError = 0;
        }
      }
    });
  },
  init: function() {
    PA.push.id = (new Date()).getTime().toString(36) + Math.round(Math.random() * 1679616).toString(36);
    if (PA.ajaxLogin) {
      if (typeof(PD) != 'undefined' && PD.loading) PD.loadProgress(3);
      //PA.call_pj("user.status", {}, null, PA.setUserStatus, null, this);
      var tStart = new Date().getTime();
      PA.call_pj("user.status", {}, null, function(data, aid) {
        var tElapsed = new Date().getTime() - tStart;
        if (typeof(PD) != 'undefined') PD.reportUserTime("userSatus", tElapsed, aid);
        PA.setUserStatus(data);
      }, null, this);
    }
  },
  // ==================================================================
  //
  // Helper functions and asynchronous response handlers
  //
  // error handlers
  regularError: function(err) {
    if (err.indexOf("Session needed") >= 0 || err.indexOf("Not logged in") >= 0) {
      // try to make new session
      //this.call("user.get_session", {}, null, this.setUserStatus, function(error){
        // session cannot be obtained. Redirect to login page!
        // location.href = "/login.html";
      //if (err.indexOf("Session needed") >= 0)
      //  PA.init();
      //else
        PA.events.fire("no_user");
      //}, this);
    } else {
      PA.events.fire("error", err);
      //Piazzza.Common.error(err);
    }
  },
  // this happens when site cannot contact our server
  badError: function() {
    //PA.events.fire("error", );
    alert("Cannot communicate with main Piazza server. Check your internet connection, or try again later.");
  },

  reportError: function(e) {
    if( !PA.sentError){
      PA.sentError = true;
      var ev = e.originalEvent;
      var email = "-no-user-";
      if (PA.user) email = PA.user.email;
      //PA.call("user.js_error", {file:ev.filename, line:ev.lineno, msg:ev.message, type:ev.type, email:email}, 1);
    }
  },

  getUserName: function(id, anon) {
    var html = '';
    html += '<span anon="' + anon + '" class="user_name user_name_' + id ;
    if (id && (!anon || anon == "no" || id != PA.user.id || (typeof(PD) != 'undefined' && PD.isInst) ||
        (typeof(PL) != 'undefined' && PL.isInst)))
      if (Piazzza.Ajax.users[id]) {
        if (typeof(PD) != 'undefined' && anon  == "stud"){
          html += ' user_name_anon anon_box_color" notutorial="anonymous to classmates">' + Piazzza.Ajax.users[id].name + '</span><span class="smallText">&nbsp;(anon. to classmates)</span>';
        } else {
          if (PA.canShowFriends)
            html += '"><a href="/friends/search?uid=' + id + '" target="_blank">' + Piazzza.Ajax.users[id].name + '</a></span>';
          else
            html += '">' + Piazzza.Ajax.users[id].name + '</span>';
        }
      } else {
        html += ' user_loading">Loading...';
        Piazzza.Ajax.loadUser(id);
      }
    else {
      html += ' " notutorial="anonymous">Anonymous </span>';
    }
    //html += "</span>";
    //PD.showNoTutorialTipsy();
    return html;
  },
  getUserPic: function(id, no_click) {
    var html = '<div class="user_pic user_pic_' + id ;
    if (id && id != "0")
      if (PA.users[id]) {
        var imagePath = 'http://cdn.piazza.com/images/dashboard/common/default_user.png';
        if (PA.users[id].email == 'admin') imagePath = 'http://cdn.piazza.com/images/dashboard/common/nerd_small.png';
        if (PA.users[id].photo)
          imagePath = 'http://piazza-uploads.s3-website-us-east-1.amazonaws.com/photos/' + id + '/' + PA.users[id].photo;
        else if (PA.users[id].facebook_id)
          imagePath = 'http://graph.facebook.com/' + PA.users[id].facebook_id + '/picture?type=square';
        if (PA.user && id == PA.user.id && imagePath == 'http://cdn.piazza.com/images/dashboard/common/default_user.png' &&
          !PA.user.is_public && (no_click==undefined || !no_click) ) {
          imagePath = '';
          html += '"><a href="#" class="upload_photo" onclick="showImageUpload();return false;">' +
            '<img title="' + Piazzza.Ajax.users[id].name + '" src="http://cdn.piazza.com/images/dashboard/common/add-photo-pic.png"></a>';
        }
        else
          html += '"><img title="' + Piazzza.Ajax.users[id].name.replace(/"/g, '&quot;') + '" src="' + imagePath + '">';
      } else {
        html += ' user_loading">&nbsp;';
        PA.loadUser(id);
      }
    else {
      html += '"><img title="Anonymous" src="http://cdn.piazza.com/images/dashboard/common/default_anonymous.png"/>';
    }
    html += "</div>";
    return html;
  },
  loadUser: function(id) {
    if (!Piazzza.Ajax.userQueue.exist(id))
      Piazzza.Ajax.userQueue.push(id);
    if (!Piazzza.Ajax.userTimeout)
      Piazzza.Ajax.userTimeout = setTimeout('Piazzza.Ajax.getQueuedUsers()', 100);
  },
  setUserPic: function(usr) {
    $('.user_name_' + usr.id).each(function(){
      if (PA.canShowFriends)
        $(this).html('<a href="/friends/search?uid=' + usr.id + '" target="_blank">' + usr.name + '</a>');
      else
        $(this).html(usr.name);
      if ($(this).attr("anon") == "stud") {
        //$(this).html(usr.name + " <span class=\"smallText\">(Anonymous to classmates)</span>");
        $(this).addClass("user_name_anon");
      }
    });
    var imagePath = 'http://cdn.piazza.com/images/dashboard/common/default_user.png';
    if (usr.email == 'admin') imagePath = 'http://cdn.piazza.com/images/dashboard/common/nerd_small.png';
    if (usr.photo)
      imagePath = 'http://piazza-uploads.s3-website-us-east-1.amazonaws.com/photos/' + usr.id + '/' + usr.photo;
      //imagePath = '/view/' + usr.id + '?' + usr.photo;
    else if (usr.facebook_id)
      imagePath = 'http://graph.facebook.com/' + usr.facebook_id + '/picture?type=square';
    $('.user_pic_' + usr.id).html('<img title="'+usr.name.replace(/"/g, '&quot;')+'" src="' + imagePath + '"/>');
    if (usr.id == PA.user.id)
      PA.user.photo = usr.photo;
  },
  getQueuedUsers: function() {
    var nid = 0;
    if (Piazzza.Dashboard && Piazzza.Dashboard.selectedNetwork)
      nid = Piazzza.Dashboard.selectedNetwork.id;
    Piazzza.Ajax.call_pj("network.get_users", {ids:Piazzza.Ajax.userQueue, nid:nid}, 1, function(data){
      data.forEach(function(usr){
        PA.users[usr.id] = usr;
        PA.setUserPic(usr);
      });
      $('div.tipsy').remove(); // remove old tipsy messages
      //if (typeof(PD) != 'undefined') $('.user_name_anon').tipsy({gravity: 'n', html: true});
    });

    Piazzza.Ajax.userQueue = [];
    Piazzza.Ajax.userTimeout = null;
  },
  getUsersInfo: function(ids, nid, block, callback) {
    if (!ids) return;
    var ret = {};
    var queue = [];
    for (var i = 0; i < ids.length; i++) {
      if (PA.users[ids[i]])
        ret[ids[i]] = PA.users[ids[i]];
      else
        queue.push(ids[i]);
    }
    if (queue.length == 0)
      callback(ret);
    else {
      Piazzza.Ajax.call_pj("network.get_users", {ids:queue, nid:nid}, 1, function(data){
        data.forEach(function(usr) {
          ret[usr.id] = usr;
          PA.users[usr.id] = usr;
        });
        callback(ret);
      });
    }
  },

  // =================================================
  // called for user.login and user.status functions
  //
  setUserStatus: function(data) {
    PA.user = data;
    PA.session = data.session;
    PA.networks = data.networks;
    PA.captchaNeeded = false;
    PA.user.is_public = false;
    if (!PA.user.config)
      PA.user.config = {};
    if (PA.user.id.match("public")) PA.user.is_public = true;
    if (PA.user.is_public) {
      $('.no-public').hide();
      $('.for-no-public').show();
      PA.captchaNeeded = true;
    }
    // get all admin user info
    PA.networks.forEach(function(net){
      if (net.profs) {
        net.profs_hash = {};
        net.profs.forEach(function(usr){
          PA.users[usr.id] = usr;
          net.profs_hash[usr.id] = 1;
        });
      }
    });
    var adm = 0;
    for (var s in PA.user.can_admin) adm++;
    if (adm > 0)
      PA.user.is_admin = true;
    else
      PA.user.is_admin = false;
    /*
    if (typeof(PD) != 'undefined') {
      PD.show_tutorial = false;
      if (PA.user.email != 'tutorial' && (!PA.user.config.seen_message || !PA.user.config.seen_message.exist('tutorial'))) {
        PD.show_tutorial = true;
        PA.load("/dashboard/tutorial", $('#tutorial'), function(data){
          $('#tutorial').html(data);
          if (PD.selectedNetwork) {
            TUT.init();
            if (PD.networkId != "piazzza")
              TUT.showVideo();
          }
        });
      }
    }
    */

    if (PA.user.config == null)
      PA.user.config = {};
    if (PA.user.config.logins == null)
      PA.user.config.logins = 0;

    PA.events.fire("user_login", data);
    if (data.facebook) data.facebook_id = data.facebook.id;
    PA.users[data.id] = data;
    $('.my-pic').html(PA.getUserPic(data.id));
    $('.my-pic-noclick').html(PA.getUserPic(data.id, true));
    $('.my-name').html(data.name);
    $('.my-facebook-name').html(data.facebook.name);
    // initiate push handler in 2 seconds to avoid browser loading image
  },

  load: function(path, blockObject, callback, error, scope) {
    if (PA.user && PA.user.config && PA.user.config.no_spinner)
      blockObject = 1;
    if (blockObject) {
      if (blockObject != 1) blockObject.block();
    } else
      $.blockUI();
    if (path.indexOf('?') < 0)
      path += "?t=" + (new Date()).getTime();
    else
      path += "&t=" + (new Date()).getTime();
    $.ajax({
      url: path,
      type: 'GET',
      dataType: 'html',
      success: function(data) {
        if (blockObject) {
          if (blockObject != 1) blockObject.unblock();
        } else
          $.unblockUI();
        if (data && callback)
          callback.call(scope, data);
      },
      error: function(req, status, err) {
        if (blockObject)
          if (blockObject != 1) blockObject.unblock();
        else
          $.unblockUI();
        if (error)
          error.call(scope, err);
      }
    });
  },

  call_pj: function(method, params, blockObject, callback, error, scope) {
    //if (typeof(console) != 'undefined') console.log("PA.call_pj method:" + method + ", params:" + JSON.stringify(params));
    var cached = PA.getCached(method, params);
    if(callback && cached && !cached.error && cached.result){  //don't return cached errors
       callback.call(scope, cached.result, cached.aid);
       return;
    }
    if (PA.cookie)
      params.cookie = PA.cookie;
    var data = JSON.stringify({method:method, params:params});
    data = data.replace(/\\u000a/gi, "\\n");
    data = data.replace(/\?/gi, "%3F");
    if (PA.user && PA.user.config && PA.user.config.no_spinner)
      blockObject = 1;
    if (blockObject) {
      if (blockObject != 1) blockObject.block();
    } else
      $.blockUI();
    if (PA.staticContent && method != "network.search" && method != "network.filter_feed") {
      var path = "/static/" + PA.staticContent + "/" + method;
      if (params.cid)
        path += "/" + params.cid
      path += "?t=" + (new Date()).getTime();
      $.ajax({
        url: path,
        type: 'GET',
        success: function(data) {
          if (blockObject) {
            if (blockObject != 1) blockObject.unblock();
          } else
            $.unblockUI();
          if (data.result && callback)
            callback.call(scope, data.result, "static");
        },
        error: function(req, status, error) {
          if (blockObject && blockObject != 1)
            if (blockObject != 1) blockObject.unblock();
          else
            $.unblockUI();
          //Piazzza.Ajax.badError(error);
        }
      });
    } else {
      $.ajax({
        url: '/logic/api?method=' + method + '&aid=' + (new Date()).getTime().toString(36) + Math.round(Math.random() * 1679616).toString(36),
        data: data,
        success: function(data) {
          if (blockObject) {
            if (blockObject != 1) blockObject.unblock();
          } else
            $.unblockUI();
          if (data.result && callback)
            callback.call(scope, data.result, data.aid);
          if (data.error) {
            if (error)
              error.call(scope, data.error);
            else
              PA.regularError(data.error);
          }
        },
        error: function(req, status, error) {
          // try again first
          setTimeout(function(){
            $.ajax({
              url: '/logic/api?method=' + method + '&aid=' + (new Date()).getTime().toString(36) + Math.round(Math.random() * 1679616).toString(36),
              data: data,
              success: function(data) {
                if (blockObject) {
                  if (blockObject != 1) blockObject.unblock();
                } else
                  $.unblockUI();
                if (data.result && callback)
                  callback.call(scope, data.result, data.aid);
                if (data.error) {
                  if (error)
                    error.call(scope, data.error);
                  else
                    PA.regularError(data.error);
                }
              },
              error: function(req, status, error) {
                if (blockObject)
                  if (blockObject != 1) blockObject.unblock();
                else
                  $.unblockUI();
                PA.badError(error);
              }
            });
          }, 3000);
        }
      });
    }
  },

  call: function(method, params, blockObject, callback, error, scope) {
    //XXXXXXXXXXXX
    if (PA.cookie)
      params.cookie = PA.cookie;
    var data = JSON.stringify({method:method, params:params});
    data = data.replace(/\\u000a/gi, "\\n");
    if (typeof(PD) != 'undefined' && PD.loading)
      blockObject = 1; // do not show any block objects while loading
    if (PA.user && PA.user.config && PA.user.config.no_spinner)
      blockObject = 1;
    if (blockObject) {
      if (blockObject != 1) blockObject.block();
    } else
      $.blockUI();
    if (PA.staticContent && method != "network.search") {
      var path = "/static/" + PA.staticContent + "/" + method;
      if (params.cid)
        path += "/" + params.cid
      path += "?t=" + (new Date()).getTime();
      $.ajax({
        url: path,
        type: 'GET',
        success: function(data) {
          if (blockObject) {
            if (blockObject != 1) blockObject.unblock();
          } else
            $.unblockUI();
          if (data.result && callback)
            callback.call(scope, data.result, "static");
        },
        error: function(req, status, error) {
          if (blockObject && blockObject != 1)
            if (blockObject != 1) blockObject.unblock();
          else
            $.unblockUI();
          //Piazzza.Ajax.badError(error);
        }
      });
    } else {
      $.ajax({
        data: data,
        success: function(data) {
          if (blockObject) {
            if (blockObject != 1) blockObject.unblock();
          } else
            $.unblockUI();
          if (data.result && callback)
            callback.call(scope, data.result, data.aid);
          if (data.need_refresh && data.need_refresh.length > 0) {
            // session was stale, we need to refresh the state
            if (typeof(PD) != 'undefined') {
              if (PA.session != data.need_refresh) {
                PA.session = data.need_refresh;
              }
            }
          }
          if (data.error) {
            if (error)
              error.call(scope, data.error);
            else
              Piazzza.Ajax.regularError(data.error);
          }
        },
        error: function(req, status, error) {
          if (blockObject && blockObject != 1)
            blockObject.unblock();
          else
            $.unblockUI();
          //Piazzza.Ajax.badError(error);
        }
      });
    }
  },
 //tracks an event, writes it to db
  trackEvent2: function(async, event, loc, data){
    /*
    //alert("tracked - "+event);
    var url = "/tracking/trackEvent?event=" + event;
    url += "&loc="+loc.replace(".html","/");
    url += "&full_url=" + window.location.pathname + window.location.hash.replace("#","(hash)");
    if (data) {
      if (data instanceof Array) {
        url += "&data=" + data.join("|");
      } else {
        for (key in data) {
          if (data[key] instanceof Array) {
            url += "&" + key + "=" + data[key].join("|");
          } else {
            url += "&" + key + "=" + data[key];
          }
        }
      }
    }
    url += "&t=" + (new Date()).getTime();
    $.ajax({
      type: "GET",
      url: url,
      async: async
    });*/
  },

  // analytics tracker
  trackEvent: function(async, evnt, loc, data) {
    var url = "/analytics/trackEvent?event=" + evnt;
    url += "&loc="+loc.replace(".html","/");
    url += "&full_url=" + window.location.pathname + window.location.hash.replace("#","(hash)");
    if (data) {
      if (data instanceof Array) {
        url += "&data=" + data.join("|");
      } else {
        for (key in data) {
          if (data[key] instanceof Array) {
            url += "&" + key + "=" + data[key].join("|");
          } else {
            url += "&" + key + "=" + data[key];
          }
        }
      }
    }
    url += "&t=" + (new Date()).getTime();
    $.ajax({
      type: "GET",
      url: url,
      async: async
    });
  }
};

var PA = Piazzza.Ajax;

$(document).ready(function() {
  $.ajaxSetup({
      url: '/main/api',
      type: 'POST',
      dataType: 'json',
      timeout: 15 * 60 * 1000 // 15 minute timeout
  });
  if (typeof(PD) != 'undefined') PD.loadProgress(2);
  // avoid spinning browser
  setTimeout(function(){ PA.init();}, 50);
  $(window).error(function(e){PA.reportError(e);}); // default error handler
});

$.blockUI.defaults.css.border = 'none';
$.blockUI.defaults.css.cursor = 'default';
$.blockUI.defaults.overlayCSS.cursor = 'default';
//$.blockUI.defaults.overlayCSS.opacity = 0.3;
//$.blockUI.defaults.css.backgroundColor = 'transparent';
//$.blockUI.defaults.message = '<img src="http://cdn.piazza.com/images/dashboard/common/ajax-loader.gif"/>';
$.blockUI.defaults.message = '';

//
// Static callAjax method
//
function callAjax(method, params, callback, error) {
  var data = JSON.stringify({method:method, params:params});
  data = data.replace(/\\u000a/gi, "\\n");
  $.ajax({
    data: data,
    success: function(data) {
      if (data.result != null)
        callback(data.result);
      if (data.error != null) {
        if (error)
          error(data.error);
        else
          Piazzza.Ajax.regularError(data.error);
      }
    },
    error: function(data) {
      Piazzza.Ajax.badError(data.error);
    }
  });
}
Piazzza.Util = {
  networkToUrl:function (term, course_number, prefix) {
    if (typeof prefix === "undefined") {
      prefix = window.location.pathname;
    }

    if (prefix[0] !== "/") {
      prefix = '/' + prefix;
    }

    var lowerTerm = term.toLowerCase().replace(/\s+/g, "") || "other";
    var shortNumber = course_number.replace(/[^\w]/g, '').toLowerCase();
    return prefix + '#' + lowerTerm + "/" + shortNumber;
  },

  getNetworkByDeepParams:function (deepParams) {
    var network = null;
    PA.networks.forEach(function (net) {
      if (net.course_number.replace(/[^\w]/g, "").toLowerCase() == deepParams[1] &&
        (net.term.toLowerCase().replace(/\s+/g, "") || "other") == deepParams[0]) {
        network = net;
      }
    });
    return network;
  },

  getDeepParams:function () {
    return window.location.hash.substring(1).split('/');
  },

  getIsInst:function (nid, forceStud) {
    if (typeof forceStud === "undefined") {
      forceStud = false;
    }
    return !forceStud && PA.user.can_admin[nid];
  },

  resizeFontToHeight:function (elContainer, elText, maxHeight, minTextSize) {
    var textSize = elText.css('font-size');
    textSize = textSize.replace('px', '');
    while (elContainer.height() > maxHeight && textSize > minTextSize) {
      textSize--;
      elText.css('font-size', textSize + 'px');
    }
  }
};

var PU = Piazzza.Util;
Piazzza.Common = {
  lastContentMessage: 0,    // what time was last content message received
  lastNetworkMessage: 0,    // what time was last network message received
  //userPic: function(user) {
  //  return '<img src="http://cdn.piazza.com/images/sample_user_pic_01.jpg" width="30" style="vertical-align:middle;"/>';
  //}
  error: function(message) {
    //alert(message);
  },
  //
  // ===========     PUSH   HANDLERS   ================
  //
  handleContentMessage: function(message) {
    var sid = message.sid; // session id of message initiator
    if (!PD.content) return;
    if ((message.action == 'start_edit' || message.action == 'done_edit') && sid != PA.user.sid) {
      // someone is starting/finishing to edit answer
      if (!PD.content.q_edits) PD.content.q_edits = [];
      if (!PD.content.s_edits) PD.content.s_edits = [];
      if (!PD.content.i_edits) PD.content.i_edits = [];
      var arr = PD.content.q_edits;
      if (message.sub_action == 's_answer') arr = PD.content.s_edits;
      if (message.sub_action == 'i_answer') arr = PD.content.i_edits;
      if (message.action == 'start_edit') {
        arr.push(sid);
      } else {
        if (arr) {
          for (var i = 0; i < arr.length; i++)
            if (arr[i] == sid)
              arr.splice(i, 1);
        }
      }
      PD.updateIsEdited();
    }
    // feedback_tag is stuff like endorsements
    if (message.action == 'feedback_tag') {
      cnt = PC.getContentById(message.id);
      if (cnt.content) {
        if (!cnt.content[message.sub_action]) cnt.content[message.sub_action] = [];
        cnt.content[message.sub_action].push(message.user);
        PD.toggleFeedbackTags(cnt.feedback, cnt.content);
      }
    }
    if (message.action == 'feedback_tag_remove') {
      cnt = PC.getContentById(message.id);
      if (cnt.content) {
        if (!cnt.content[message.sub_action]) cnt.content[message.sub_action] = [];
        cnt.content[message.sub_action].remove(function(o) {return o.id == message.uid;});
        PD.toggleFeedbackTags(cnt.feedback, cnt.content);
      }
    }
    if (message.action == 'create' || message.action == 'update') {
      // based on message type
      var pid = message.parent; // where this should go
      var newContent = message.content;
      if (message.action == 'create' && newContent.type == 'followup') {
        var content = PD.content;
        if (!content.children) content.children = [];
        if (PD.followups[newContent.id]) return;
        content.children.push(newContent);
        //PD.showContent(PD.content);
        PD.addFollowup(newContent);
        $('.count_followups').html(PD.totalFollowups);
        $('#followupDiscussionsContent').show();
        $('#questionFollowupsLink').show();
      }
      if (message.action == 'update' && newContent.type == 'followup') {
        var newContent = message.content;
        var followup = PD.followups[newContent.id];
        if (followup && newContent) {
          followup.no_answer = newContent.no_answer;
          if (newContent.subject) followup.subject = newContent.subject;
          PD.populateFollowup(followup);
        }
      }
      if (message.action == 'create' && newContent.type == 'feedback') {
        var followup = PD.followups[pid];
        if (!followup) return;
        if (!followup.children) followup.children = [];
        var have = false;
        followup.children.forEach(function(c) { if (c.id == newContent.id) have = true;});
        if (!have) {
          followup.children.push(newContent);
          PD.populateFollowup(followup);
        }
      }
      if (message.action == 'create' && newContent.type == 'attach') {
        if (message.parent_type == 'question' || message.parent_type == 'note') {
          PD.content.children.push(newContent);
          PD.populateTextArea('#question', '#question-editor', PD.content, PD.canEditQuestion);
        }
        if (message.parent_type == 's_answer' && PD.s_answer) {
          PD.s_answer.children.push(newContent);
          PD.populateTextArea('#studentsResponse', '#student-answer-editor', PD.s_answer, !PD.isInst);
        }
        if (message.parent_type == 'i_answer' && PD.i_answer) {
          PD.i_answer.children.push(newContent);
          PD.populateTextArea('#instructorsResponse', '#instructor-answer-editor', PD.i_answer, PD.isInst);
        }
      }
      if (message.action == 'update' && (newContent.type == 'question' || newContent.type == 'note' || newContent.type == 'poll')) {
        if (newContent.type == "poll") {
          // remember my has_voted
          if (!newContent.data) newContent.data = {};
          if (!PD.content.data) PD.content.data = {};
          newContent.data.has_voted = PD.content.data.has_voted;
        }
        PD.content = newContent;
        PD.populateTextArea('#question', '#question-editor', PD.content, PD.content.history[0].uid == PA.user.id);
        PD.toggleFeedbackTags('#question', PD.content);
        PD.content.change_log[PD.content.change_log.length - 1].isNew = true;
        if (newContent.type == "poll") PD.populatePoll();
        //PD.populateRecentHistory();
      }
      if (newContent.type == 's_answer') {
        PD.s_answer = newContent;
        PD.content.no_answer = false;
        var found = false;
        if (!PD.content.children) PD.content.children = [];
        for (var q = 0; q < PD.content.children.length; q++)
          if (PD.content.children[q].type == "s_answer") {
            PD.content.children[q] = newContent;
            found = true;
          }
        if (!found) PD.content.children.push(newContent);
        PD.populateTextArea('#studentsResponse', '#student-answer-editor', PD.s_answer, !PD.isInst);
        PD.toggleFeedbackTags('#studentsResponse', PD.s_answer);
      }
      if (newContent.type == 'i_answer') {
        PD.i_answer = newContent;
        PD.content.no_answer = false;
        var found = false;
        if (!PD.content.children) PD.content.children = [];
        for (var q = 0; q < PD.content.children.length; q++)
          if (PD.content.children[q].type == "i_answer") {
            PD.content.children[q] = newContent;
            found = true;
          }
        if (!found) PD.content.children.push(newContent);
        PD.populateTextArea('#instructorsResponse', '#instructor-answer-editor', PD.i_answer, PD.isInst);
        PD.toggleFeedbackTags('#instructorsResponse', PD.i_answer);
      }
    }
    // if message contains recent activity entry, add it
    if (message.activity && message.cid == PD.contentId) {
      message.activity.isNew = true;
      var activity = message.activity;
      if (!activity.removed) // some activity causes remvoal of the item
        PD.content.change_log.push(message.activity);
      else {
        //alert(JSON.stringify(activity));
        PD.content.change_log.remove(function(o){
          if (o.type == activity.type && o.uid == activity.uid && (!o['for'] || o['for'] == activity['for']))
            return true;
          return false;
        });
      }
      //PD.populateRecentHistory();
      if (PD.history.version) {
        PD.history.version++;
      }
      PD.goHistory(PD.history.version || 0, false);
      PD.initHistoryBar();
    }
  },
  getContentById: function(id) {
    var cnt = null;
    var area = "";
    if (id == PD.contentId) {cnt = PD.content;area = '#question';}
    if (PD.s_answer && id == PD.s_answer.id) {cnt = PD.s_answer;area = '#studentsResponse';}
    if (PD.i_answer && id == PD.i_answer.id) {cnt = PD.i_answer;area = '#instructorsResponse';}
    return {content:cnt, feedback:area};
  },
  //
  //              Main network message handler
  //
  handleNetworkMessage: function(message) {
    if (message.action == 'feed_item_change' && PD.feed) {
      if (message.item.status == 'private' && !PD.isInst && !message.item.my_post) {
        PD.removeFromFeed(message.item.id);
        return;
      }
      var dt = new Date();
      dt.setISO8601(message.item.updated);
      message.item.updated = dt;
      for (var i = 0; i < PD.feed.length; i++)
        if (PD.feed[i].id == message.item.id) {
        	if (PD.feed[i].is_new)
        		message.item.is_new = true;
          message.item.version = PD.feed[i].version;
          message.item.book = PD.feed[i].book;
          if (PD.contentId && message.item.id == PD.contentId) {
            message.item.version = message.item.main_version;
            PA.call_pj("content.view", {cid:PD.contentId}, 1);
          } else {
            // see who made last few edits
            if (message.item.log && message.item.log[message.item.log.length - 1].u && message.item.log[message.item.log.length - 1].u == PA.user.id) {
              message.item.version = message.item.main_version;
            }
          }
          PD.feed[i] = message.item;
          break;
        }
      if (PD.search_feed && PD.search_feed.length > 0) {
        for (var i = 0; i < PD.search_feed.length; i++) {
          if (PD.search_feed[i].id == message.item.id) {
            PD.search_feed[i] = message.item;
          }
        }
      }
      //if (message.item.id != PD.contentId) { // we are not viewing this item, so we don't know what happened (no push)
      //}
      PD.feedItem_Update(message.item);
      if (message.item.book) {
        PD.addNotifications(message.item);
        PD.renderNotifications();
      }
      //if (!PD.searchQuery) // do not update feed if it is currently under a search
      //  PD.setNewFeed(PD.feed, true); // do  not scroll the feed to selected question
    }
    if (message.action == 'feed_item_delete' && PD.feed) {
      PD.removeFromFeed(message.cid);
    }
    if (message.action == 'feed_item_new') {
      if (message.item) {
        if (message.item.status == 'private' && !PD.isInst && !message.item.my_post)
          return;
        var dt = new Date();
        dt.setISO8601(message.item.updated);
        message.item.updated = dt;
        if (message.item.id == PD.contentId) {
          message.item.is_new = false;
          message.item.is_modified = false;
          message.item.changes = 0;
        }
        // see who made last few edits
        if (message.item.log && message.item.log[message.item.log.length - 1].u && message.item.log[message.item.log.length - 1].u == PA.user.id) {
          message.item.version = message.item.main_version;
          message.item.is_new = false;
        }
        // make sure we don't have this item yet --Where to add new items
        if (PD.feed) {
          for (var x = 0; x < PD.feed.length; x++)
            if (PD.feed[x].id == message.item.id) {
              message.item.version = message.item.main_version;
              PD.feed[x] = message.item;
              PD.feedItem_Update(PD.feed[x]);
              //PD.renderNotifications();
              PD.events.fire("feed_change");
              return;
            }
            if(!PD.addNewFeedItem(message.item)){
              if (!PD.searchQuery) // do not update feed if it is currently under a search
                PD.setNewFeed(PD.feed, true); // do not scroll feed to current selection
              else {
                PD.feed = PD.feed.sort(function(a,b){
                  if (b.updated > a.updated) return 1;
                  if (b.updated < a.updated) return -1;
                  return 0;
                });
              }
            }
          if (PD.contentId) {
            if (PD.contentId == message.item.id) PD.curItem = message.item;
            $('#PageFeed').find('li.selected').removeClass('selected');
            $('#' + PD.contentId).addClass('selected');
            if (PD.parentId)
              $('#' + PD.parentId).addClass('selected');
          }
        }
      }
    }
    if (message.action == 'new_user' || message.action == 'remove_user') {
      if (PD.selectedNetwork) {
        if (!PD.selectedNetwork.online_users)
          PD.selectedNetwork.online_users = [];
        if (message.action == 'new_user')
          PD.selectedNetwork.online_users.push(message.uid);
        else
          PD.selectedNetwork.online_users.remove(function(uid) {if (uid == message.uid) return true;return false;});
      }
      PD.updateOnlineUsers();
    }
    if (message.action == 'user_photo' && message.user) {
      PA.users[message.user.id] = message.user;
      PA.setUserPic(message.user);
    }
  },

  handleMessage: function(message) {
    if (message.oid == PD.networkId)
      PC.handleNetworkMessage(message);
    if (message.oid == PD.contentId)
      PC.handleContentMessage(message);
  },

  init: function() {
    PA.push.observe("push", PC.handleMessage);
    PA.events.observe("error", PC.error);
  }
}

var PC = Piazzza.Common;
PC.init();
var DRAG = {
  curWidth: 0,
  curPos: 0,
  mouseStatus: 'up',
  snippetHeight: "36px"
}

$(document).ready(function () {
  PD.newPostPanel_Init();
  if ($.fancybox) {
    $("a#ask-question-trigger").fancybox({
      'autoDimensions': false,
      'centerOnScroll': true,
      'showCloseButton': true,
      'hideOnOverlayClick': false
    });
    $('#getting-started-student-link').fancybox({
        'showCloseButton': false,
        'padding': 5,
        'hideOnOverlayClick': false
    });
    $('#getting-started-instructor-link').fancybox({
        'showCloseButton': false,
        'padding': 5,
        'hideOnOverlayClick': false
    });
  }
  minimizeCommentThreads();
  activateShowHideButtons();
  initDropdownMenus();
  addClassConfigModalBehaviors();
  $('.modalLink').fancybox({
    'padding': 0,
    'showCloseButton': false
  });
  $('#NewPostModal .tab-row li').click(function() {
    if (!$(this).hasClass('active')) {
      if ($(this).hasClass('note')) {
        PD.posting = "note";
        $('#new-question-button').html("Post This!");
        $('#new-question-title').html("Note Title")
        $('#new-question-summary').attr('placeholder', 'Enter a descriptive title...');
        $('#new-question-summary').focus();
        $('#new-question-summary').blur();
      } else {
        PD.posting = "question";
        $('#new-question-button').html("Ask This!");
        $('#new-question-title').html("Title")
        $('#new-question-summary').attr('placeholder', 'Enter a descriptive title...');
        $('#new-question-summary').focus();
        $('#new-question-summary').blur();
      }
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    }
  });
  $('#new-question-summary').keyup(function() {
    if ($(this).val().length > 100)
      $('#question-title-length').show();
    else
      $('#question-title-length').hide();
  });
  $('#new-question-topic').change(function() {
    var $selectedOption = $(this).find('option:selected');
    $('#new-question-topic-other').hide();
    $('#new-question-topic-nr').hide();
    $('.input-instructors').hide();
    var v = $selectedOption.val();
    if (v && v.indexOf('...') == v.length - 3) {
      $('#new-question-topic-other').show();
    }
    if (v && v.indexOf(':') >= 0 && v.indexOf(':') == v.length - 1) {
      $('#new-question-topic-nr').show();
      $('.input-instructors').show();
    }
  });
  $('.subregionContentEditWrapper').click(function () {
    $(this).find('.subregionContentEditor').focus();
  });
  $('.subregionContentEditor.contentText').autogrow();
  $('#new-question-details').autogrow("fixed");
  $('#tag-dropdown').scroll(function() {
    if (GET_POS_EDITOR)
      GET_POS_EDITOR.focus();
  });
  $(document).click(function(event){
    var a = $(event.target);
    if (GET_POS && a.attr("id") != "tag-dropdown" && !a.hasClass('tag-auto'))
      CLOSE_TAG();
  });
  $('.contentText, .enableHashtagDropdown').keyup(function(event){
    if (event.keyCode == 51) {
          GET_POS = $(this).attr('id') + "_shadow";
          OPEN_TAG($(this));
        }
        if (GET_POS == $(this).attr('id') + "_shadow") {
          FILTER_TAG($(this).attr('last_word'));
        }
    if (event.keyCode == 27) CLOSE_TAG();
  });
  $('.tag-auto').live('click', function(){
    if (!GET_POS_EDITOR) return false;
    var word = $(this).html();
    var caret = GET_POS_EDITOR.caret().start;
    var lastWord = GET_POS_EDITOR.attr('last_word');
    // delete last word, and add word
    var v = GET_POS_EDITOR.val();
    var newVal = v.substr(0, caret - lastWord.length) + word + v.substr(caret);
    GET_POS_EDITOR.val(newVal);
    var newPos = caret - lastWord.length + word.length;
    GET_POS_EDITOR.caret(newPos, newPos);
    CLOSE_TAG();
  });
  $('.subregionContentEditor').focus(function () {
    $(this).parent().addClass('focus');
  });
  $('.subregionContentEditor').blur(function () {
    $(this).parent().removeClass('focus');
  });
  $('.dotSeparator').each(function () {
    $(this).text('·');
  });
  $('.followupThread.unresolved').each(function () {
    $(this).find('.followupResolvedLabel').text('Unresolved');
  });
  $('.showHideFollowupReplies').toggle(function () {
    $(this).closest('.followupThread').find('.followupReplies').show();
    $(this).text('Hide ' + $(this).text().substr(5, $(this).text().length));
  }, function () {
    $(this).closest('.followupThread').find('.followupReplies').hide();
    $(this).text('Show ' + $(this).text().substr(5, $(this).text().length));
  });
  $('.jumpToNewFollowupReply').click(function () {
    if ($(this).closest('.followupThread').find('.followupReplies').is(':hidden')) {
      $(this).siblings('.showHideFollowupReplies').click();
    }
    $(this).closest('.followupThread').find('.newFollowupReply .subregionContentEditor').focus();
  });
  $('.bigAnswerButton').click(function () {
    var me = $(this);
    if (needCaptcha(function () {
      me.click();
    })) return false;
    $('.answerButtonForUnansweredQuestions').hide();
    var correctResponse = $('#studentsResponse');
    var cnt = PD.s_answer;
    if (PD.isInst) {
      correctResponse = $('#instructorsResponse');
      cnt = PD.i_answer;
    }
    correctResponse.show();
    correctResponse.find('.subregionActionBar').show();
    if (cnt == null) {
      correctResponse.find('.dropdownWrapper').hide();
      correctResponse.find('.subregionGrayText').hide();
    }
    correctResponse.find('.subregionContentEditButton').click();
  }); /* Added by CL on 10/19/10 */
  $('#popularTagsWrapper li, #popularTagsWrapper li').click(function () {
    $(this).find('a').click();
  });

  // initialize deep-linking
  $.address.change(function (event) {
    var oldTerm = null;
    var oldNet = null;
    var oldContent = null;

    if (PD.deepParams) {
      if (PD.deepParams.length > 0) oldTerm = PD.deepParams[0];
      if (PD.deepParams.length > 1) oldNet = PD.deepParams[1];
      if (PD.deepParams.length > 2) oldContent = PD.deepParams[2];
    }

    if (!oldTerm && PD.selectedNetwork) oldTerm = PD.term;
    if (!oldNet && PD.selectedNetwork) oldNet = PD.shortNumber;

    PD.deepParam = event.value;
    PD.deepParams = event.value.split('/');

    if (PD.selectedNetwork && PD.deepParams.length > 1 &&
      (PD.deepParams[0] != oldTerm || PD.deepParams[1] != oldNet)) {
      var net = PU.getNetworkByDeepParams(PD.deepParams);
      var nid = net !== null ? net.id : null;
      if (nid && nid != PD.selectedNetwork.id) {
        PD.selectNetwork(nid, true, true);
      }
    }

    if (PD.deepParams && PD.deepParams.length > 2) {
      if (PD.selectedNetwork && PD.deepParams[2] == 'statistics' && !$('#ClassStatisticsPanel').is(':visible')) {
        showWeeklyReportsPanel();
      } else if (PD.deepParams[2] == 'announcement') {
        PD.contentIsAnnouncement = true;
        if (PD.selectedNetwork) {
          showAnnouncementPanel();
        }
      } else if (PD.content && PD.deepParams[2] != oldContent && PD.deepParams[2] != PD.content.nr) {
        PD.selectContentByNr(PD.deepParams[2]);
        PD.createFeed(PD.feed);
        PD.scrollFeedToSelected();
      } else {
        showQuestionAnswerPanel();
      }
    }

  });
  $('#search-box').keyup(function () {
    PD.showFeed();
    var text = $(this).val();
    //alert("Search Text: " + text);
    if ((text.length > 1 || text.match("^\\d+$")) && !PD.autoSearch && text.substr(0, 1) != '@') {
      if (text.substr(0, 1) == '#') text.replace('#', 'tag:');
      if (PA.noSearch) { 						//JEG - If we want to disable search, set this variable true
        PD.displaySearchTooltip(-1,0);
      } else {
        PD.autoSearch = true;
        PD.feedFilter = null;
        $('#filter-show-all').attr('checked', true);
        $('#question-feed-filter-buttons').children().removeClass('active');
        $('#filter-show-all-label').addClass('active');
        PD.doSearch(text);

        if ($('#PageFeed').width() < 550 && !$('#hoverButton').hasClass('hoverEnabled')) {
          if (!PA.user.feed_width) PA.user.feed_width = $('#PageFeed').width();
          animateFeedToWidth(550);
        }

        showFeedDetails("yes");
      }
    } else {
      if (text.substr(0, 1) == '@' && (!PD.content || text != "@" + PD.content.nr) && text.length > 1) {
        var nr = parseInt(text.substr(1));
        $('#search-box').val("@" + nr);
        PD.selectContentByNr(nr);
      }
    }
    if (text.length == 0) {
      PD.filterFeed('');
      PD.autoSearch = false;
    }
    return true;
  });
  $('.subregionEditorCancelButton').click(function () {
    var top = $(this).closest('.subregion');
    PD.draft[PD.contentId] = {};
    PD.cancelAnswer(top);
    $('#answerButtonForUnansweredQuestions').hide();
    if (PD.content.type != "question") return;
    /*
    if (PD.s_answer) {
      $('#studentsResponse').show();
    } else {
      $('#studentsResponse').hide();
      if (!PD.isInst) $('#answerButtonForUnansweredQuestions').show();
    }
    if (PD.i_answer) {
      $('#instructorsResponse').show();
    } else {
      $('#instructorsResponse').hide();
      if (PD.isInst) $('#answerButtonForUnansweredQuestions').show();
    }
    */
    if ( (PD.isInst && !PD.i_answer) || (!PD.isInst && !PD.s_answer) )
      PD.setAnswerButton(true);
    else
      PD.setAnswerButton(false);
    return false;
  });

  // Initialize edit-in-place functionality.
  $('.subregionContentEditButton').click(function () {
    var me = $(this);
    if (needCaptcha(function () {
      me.click();
    })) return false;
    var top = $(this).closest('.subregion');
    if (top == null) return;
    var editor = top.find('.contentText');
    if (PD.inEdit && PD.editContentId != PD.contentId) PD.cancelAnswer(PD.inEdit);
    var type = 'question';
    var id = editor.attr('id');
    var content = PD.content;
    if (id == 'student-answer-editor') {
      content = PD.s_answer;
      type = 's_answer';
    }
    if (id == 'instructor-answer-editor') {
      content = PD.i_answer;
      type = 'i_answer';
    }

    // show draft
    if (!PD.draft[PD.contentId] || !PD.draft[PD.contentId].initial_saved) {
      PD.draft[PD.contentId] = {};
      PD.draft[PD.contentId].initial = 0;
      if (content && content.history) PD.draft[PD.contentId].initial = content.history.length;
      PD.draft[PD.contentId].initial_saved = true;
    }
    if (PD.draft[PD.contentId]) {
      if (PD.draft[PD.contentId][editor.attr("id")]) editor.val(PD.draft[PD.contentId][editor.attr("id")]);
      if (editor.attr("id") == "question-editor" && PD.draft[PD.contentId]["question-subject"]) $('#question-subject').val(PD.draft[PD.contentId]["question-subject"]);
    }
    PD.inEdit = top;
    top.find('.subregionContent[class!="editMode"]').hide();
    top.find('.subregionContent.editMode').show();
    top.find('.postActionsBar').hide();
    top.find('.postActionsBar.edit').show();
    if (type == 'question') {
      top.find('#question-subject').focus();
      if (PD.isInst && !PD.canEditQuestion) {
        if (!PA.user.config.seen_message || !PA.user.config.seen_message.exist("super-question")) $('.super-edit-answer').show();
        $('.question-only').hide();
        $('#question-edit-anonymous-0').attr('checked', true);
      } else {
        $('.question-only').show();
      }
    } else editor.focus();
    if (type == 's_answer' && PD.isInst) {
      $('.super-edit-answer').show();
      $('.s_answer-only').hide();
      $('#answer-anonymous-0').attr('checked', true);
    }
    PA.call_pj("content.edit", {
      cid: PD.contentId,
      type: type
    }, 1);
    PD.editContentId = PD.contentId;
    editor.height(160);
    editor.trigger("change");
    PD.initialEditText = editor.val();
    return false;
  });

  $('.plain_text').click(function () {
    if ($(this).html() == "View Plain Text") {
      $(this).html("View HTML");
      var p = $(this).closest('.subregion');
      p.find('.subregionText').html(ProcessText(p.find('.contentText').val(), true, p.find('.contentText').attr('type')));
    } else {
      $(this).html("View Plain Text");
      var p = $(this).closest('.subregion');
      p.find('.subregionText').html(ProcessText(p.find('.contentText').val(), false, p.find('.contentText').attr('type')));
    }
    return false;
  });

  $('.postActionsButton.preview_button').click(function () {
    return previewContent(this);
  })

  //$('.empty_textarea').autogrow(); // for followup questions
  //$('.commentBox textarea').autogrow();

	$('#question-feed-filter-buttons label').click(function() {
    if ($(this).hasClass('viewSwitcher'))
      return;
    $('#question-feed-filter-buttons label').removeClass('active');
    $(this).addClass('active');
	});
  $('.showFeedDetails').click(function() {
    if ($('#question-feed-questions').hasClass('compactView')) {
      PD.showFeedDetails = "yes";
    } else {
      PD.showFeedDetails = "no";
    }
    PA.call_pj("user.set", {stat: "feed_details", val: PD.showFeedDetails}, 1);
    if (!PA.user.config) PA.user.config = {};
    PA.user.config.feed_details = PD.showFeedDetails;
    showFeedDetails(PD.showFeedDetails);
  });

  // Initialize jqModal windows.
  $('#captcha_window').jqm({
    trigger: false,
    onShow: function () {
      $('#captcha_window').show();
    }
  });
  $('#report_spam_window').jqm({
    trigger: false,
    onShow: function () {
      $('#report_spam_window').show();
    }
  });
  $('#report_bug_dialog').jqm({
    trigger: 'a.jqModal.reportBug',
    onShow: function () {
      $('.bug-report-details').val('');
      $('#report_bug_dialog').show();
      $('#report_bug_thanks').hide();
      $('#report_bug_form').show();
      $('#submit_bug').show();
    }
  });
  $('#report_spam_window2').jqm({
    trigger: false
  });
  $('#question_followup_dialog').jqm({
    trigger: '#new_followup_btn',
    onShow: function () {
      $('.new-followup-summary').val('');
      $('.new-followup-details').val('');
      $('.followup-anonymous-0').attr('checked', true);
      $('.followup-error').hide();
      $('#question_followup_dialog').show();
    }
  });
  $('#sr_followup_dialog').jqm({
    trigger: 'a.jqModal.sr_followup',
    onShow: function () {
      $('.new-followup-summary').val('');
      $('.new-followup-details').val('');
      $('.followup-anonymous-0').attr('checked', true);
      $('.followup-error').hide();
      $('#sr_followup_dialog').show();
    }
  });
  $('#ir_followup_dialog').jqm({
    trigger: 'a.jqModal.ir_followup',
    onShow: function () {
      $('.new-followup-summary').val('');
      $('.new-followup-details').val('');
      $('.followup-anonymous-0').attr('checked', true);
      $('.followup-error').hide();
      $('#ir_followup_dialog').show();
    }
  });
  $('#preview_answer').jqm({
    trigger: false,
    toTop: true
  });
  $('#concurrency_conflict_dialog').jqm({
    trigger: false
  });
  $('#dialog_toplinks_accountSettings').jqm({
    trigger: false
  });
  $('#dialog_toplinks_uploadPhoto').jqm({
    trigger: false
  });
  $('#dialog_upload_attach').jqm({
    trigger: false
  });
  $('#dialog_toplinks_classSettings').jqm({
    trigger: false
  });
  $('a.jqModal.toplinks_accountSettings').click(function () {
    // populate data
    PA.load("/dashboard/account_settings", $('#WelcomeScreen'), function(data){
      $('#AccountSettings').html(data);
      $('.my-name-val').val(PA.user.name);
      $('.my-email-val').val(PA.user.email);
      var linkedEmails = [];
      PA.user.emails.forEach(function(email) {
        if (email != PA.user.email) {
          //linkedEmails.push(email + ' (<a href="#" onclick="PD.removeEmail(\'' + email + '\');return false;">remove</a>)');
          linkedEmails.push(email);
        }
      });
      if (linkedEmails.length > 0) {
        $('#AccountSettings_LinkedEmailsContainer').show();
        $('#AccountSettings_LinkedEmails').html(linkedEmails.join(', '));
      } else
        $('#AccountSettings_LinkedEmailsContainer').hide();
      $('#oldPassword').val('');
      $('#newPassword').val('');
      $('#confirmPassword').val('');
      if (PA.user.facebook.id) {
        $('#my-facebook-info').show();
        $('#my-facebook-signup').hide();
        $('.my-facebook-name').html(PA.user.facebook.name);
      } else {
        $('#my-facebook-info').hide();
        $('#my-facebook-signup').show();
      }
      if (PA.user.photo)
        $('#RemovePhotoLink').show();
      else
        $('#RemovePhotoLink').hide();
      // populate all my networks
      var courses = $('#my-course-list').empty();
      var inactive_courses = $('#my-inactive-course-list').empty();
      var global = 0;
      if (PA.user.email_pref == 'digest') global = 1;
      if (PA.user.email_pref == 'no-emails') global = 2;
      PA.networks.forEach(function (net) {
        var name = (net.status != "active" ? "(inactive) " : "") + net.course_number + ' (' + (net.term || 'Other') + '): ' + net.name;
        var html = '<li>';
        html += '<div><b>' + name + '</b> <a class="button" style="margin-left: 10px;" href="javascript:confirmUnenroll(\'' + net.id + '\')">Drop Class</a></div>';
        html += '<div style="clear: both;">For new Questions or Notes:</div>';
        html += '<div class="emailPreferencesNew" style="margin-left: 30px;">';
        var local = global;
        var updates = 0;
        var throttle_time = 4;
        var auto_follow = false;
        if (PA.user.config && PA.user.config.email_prefs && PA.user.config.email_prefs[net.id]) {
          if (PA.user.config.email_prefs[net.id]["new"] == 'realtime') local = 0;
          if (PA.user.config.email_prefs[net.id]["new"] == 'digest') local = 1;
          if (PA.user.config.email_prefs[net.id]["new"] == 'no-emails') local = 2;
          if (PA.user.config.email_prefs[net.id]["new"] == 'auto_throttle') local = 3;
          if (PA.user.config.email_prefs[net.id]["throttle"])
            throttle_time = Math.floor(PA.user.config.email_prefs[net.id]["throttle"]);
          if (PA.user.config.email_prefs[net.id]["new"] == 'no_throttle') local = 0;
          if (PA.user.config.email_prefs[net.id]["updates"] == 'no-emails') updates = 2;
          if (PA.user.config.email_prefs[net.id]["auto_follow"] == 'follow') auto_follow = true;
        }
        //html += '<span style="float: left;margin-right: 10px;"><input type="radio" name="email_' + net.id + '" id="email_nt_' + net.id + '" ' + (local == 3 ? 'checked' : '') + '/> Real Time</span>';
        html += '<span style="float: left;margin-right: 10px;"><input type="radio" name="email_' + net.id + '" id="email_rt_' + net.id + '" ' + (local == 0 ? 'checked' : '') + '/> Real Time</span>';
        html += '<span style="float: left;margin-right: 10px;"><input type="radio" name="email_' + net.id + '" id="email_no_' + net.id + '" ' + (local == 2 ? 'checked' : '') + '/> No Emails</span>';
        html += '<span style="float: left;margin-right: 10px;"><input type="radio" name="email_' + net.id + '" id="email_dig_' + net.id + '" ' + (local == 1 ? 'checked' : '') + '/> Daily Digest (<span class="digesthover daily" style="color: #0071BC;">?</span>)</span>';
        html += '<span style="float: left;margin-right: 10px;">';
          html += '<input type="radio" name="email_' + net.id + '" id="email_at_' + net.id + '" ' + (local == 3 ? 'checked' : '') + '/> Auto Digest per ';
          html += '<select id="email_at_period_' + net.id + '">';
          for (var i = 1; i <= 6; i++)
            html += '<option value="'+i+'" ' + ( throttle_time == i ? 'selected' : '') + '>'+ i + ' hour' + (i > 1 ? 's' : '') + '</option>';
          html += '</select>';
          html += ' (<span class="digesthover auto" style="color: #0071BC;">?</span>)';
        html += '</span>';
        //html += '<span style="float: left;margin-right: 10px;"><input type="radio" name="email_' + net.id + '" id="email_rt_' + net.id + '" ' + (local == 0 ? 'checked' : '') + '/> Auto Digest (<span class="digesthover" style="color: #0071BC;">?</span>)</span>';
        html += '</div>';
        html += '<div style="clear: both;">For updates to Questions or Notes you follow:</div>';
        html += '<div style="margin-left: 30px;">';
        html += '<span style="float: left;margin-right: 10px;"><input type="radio" name="email2_' + net.id + '" id="email_rt2_' + net.id + '" ' + (updates == 0 ? 'checked' : '') + '/> Real Time</span>';
        html += '<span style="float: left;margin-right: 10px;"><input type="radio" name="email2_' + net.id + '" id="email_no2_' + net.id + '" ' + (updates == 2 ? 'checked' : '') + '/> No Emails</span>';
        html += '<span style="float: left;margin-right: 10px;">&nbsp;</span>';
        html += '</div>';
        html += '<div style="clear: both; margin-left: 30px;"><input type="checkbox" ' + (auto_follow ? "checked" : "") + ' id="email_autofollow_' + net.id + '"/> Automatically follow every Question and Note';
        html += '</div></li>';
        if (net.status != "active")
          inactive_courses.append(html);
        else
          courses.append(html);
      });
      $('.digesthover').tipsy({
        title: function() {
          if ($(this).hasClass('daily'))
            return 'Receive emails about new posts once a day.';
          else {
            var hours = $(this).parent().find('select').val();
            return 'Receive at most one email every ' + (hours == 1 ? 'hour' : hours + ' hours') + '.';
          }
        },
        html: true
      });
      //$('#dialog_toplinks_accountSettings').jqmShow();
      $('#AccountSettings').show();
      $('#uploadPhotoIframe').attr('src', '/upload/upload_photo?uid=' + PA.user.id);
      // facebook
      if (!PA.staticContent) {
        getFBInfoFunction = function () {
          FB.api('/me', function (response) {
            if (!response.error) {
              PA.facebook_info = {
                name: response.name,
                id: response.id,
                gender: response.gender,
                education: response.education
              };
              $('#facebook-login').hide();
              $('#facebook-info').show();
              $('#addFacebook').attr('checked', true);
              $('.my-facebook-name').html('<b>' + response.name + '</b>');
            } else {
              FB._session = false;
            }
          });
        }
        $('#facebook-login').show();
        $('#facebook-info').hide();
        $('#addFacebook').attr('checked', false);
        getFBInfoFunction();
        if (!PA.fb_events) {
          FB.Event.subscribe('auth.login', function (response) {
            getFBInfoFunction();
          });
          FB.Event.subscribe('auth.logout', function (response) {
            $('#facebook-login').show();
            $('#facebook-info').hide();
            $('#addFacebook').attr('checked', false);
          });
          PA.fb_events = true;
        }
      }
      return false;
    });
    return false;
  });
  $('a.jqModal.toplinks_classSettings').click(function () {
    PD.populateClassSettings();
    $('#dialog_toplinks_classSettings').jqmShow();
    return false;
  });
  /*$('.user_name.anon_box').hover(
    function () {
      alert('hello');
      $(this).removeClass('anon_box_color');
    },
    function () {
      alert('bye');
      $(this).addClass('anon_box_color');
    }
  );*/
  $('#current-class-label').hover(
    function () {
      $('#current-class-title').css({'text-decoration':'underline'});
    },
    function () {
      $('#current-class-title').css({'text-decoration':'none'});
    }
  );
  $('#minimizeTitle').click(function () {
    if ($(this).attr("open") == "closed") {
      $(this).attr("open", "open");
      //$("#minimized_questions_top").hide();
      //$("#normal_questions_top").show();
      $("#minimizeWord").html("&#9666; Collapse");
      $("#PageFeed").css("width", "350px");
      $("#PageCenter").css("left", "350px");
      $("#searchNarrowMessage").hide();
      $("#searchWideMessage").show();
      PD.compactFeed = false;
      PD.createFeed(PD.feed);
      PD.markSeenUnseen("leftCollapsed", true);
    } else {
      $(this).attr("open", "closed");
      //$("#minimized_questions_top").show();
      $("#minimizeWord").html("&#9656; Expand");
      $("#PageFeed").css("width", "200px");
      $("#PageCenter").css("left", "200px");
      $("#searchNarrowMessage").show();
      $("#searchWideMessage").hide();
      PD.compactFeed = true;
      PD.createFeed(PD.feed);
      PD.markSeenUnseen("leftCollapsed", false);
    }
    return false;
  });
  $('.message-alert, .message-alert-onheader, .UIMessage').find('.close').click(function () {
    var main = $(this).parent();
    var msg = main.attr("id");
    PD.markSeenUnseen(msg);
    main.hide();
    return false;
  });
  $('.UIHoverCard').find('.button').click(function() {
    var main = $(this).closest('.UIHoverCard');
    var msg = main.attr('id');
    PD.markSeenUnseen(msg);
    main.hide();
    return false;
  });
  $('#newFollowupEditorWrapper').click(function () {
    $('#newFollowupEditor').focus();
  });
  $('.post-feedback').click(function () {
    var self = $(this);
    var topRegion = self.closest('.region');
    var tops = topRegion.find('.details');
    var actions = self.closest('.feedback-actions');
    //alert("tops.attr('id') = " + tops.attr('id') + "\nself.attr('posttype') = " + self.attr('posttype'));
    PD.postFeedbackTag(tops.attr('id'), self.attr('posttype'), topRegion, actions);
    return false;
  });
  $('.see-all-history').click(function () {
    if ($(this).attr('open') == 'closed') {
      $(this).attr('open', 'open');
      $(this).find('.see-all-history-text').html('Collapse');
      $(this).closest('.content').find('.recent-activity-container').children().show();
    } else {
      $(this).attr('open', 'closed');
      $(this).find('.see-all-history-text').html('View All');
      $(this).closest('.content').find('.recent-activity-container').children().slice(2).hide();
    }
    return false;
  });
  $('#questionFollowupsLink').click(function () {
    $('#mainScrollPanel').animate({
      scrollTop: $('#followupDiscussions').offset().top - 75 + $('#mainScrollPanel').scrollTop()
    }, 'slow');
    return false;
  });
  $('.askFollowup').click(function () {
    return PD.openNewFollowup();
  });
  $('.saveDraft').keyup(function () {
    if (PD.contentId) {
      if (!PD.draft[PD.contentId]) PD.draft[PD.contentId] = {};
      PD.draft[PD.contentId][$(this).attr("id")] = $(this).val();
    }
  });


  function minimizeCommentThreads() {
    $('.feedback ul.comment-thread').each(function () {
      var commentThread = $(this);
      commentThread.find('li.view-all-feedback a').toggle(function () {
        $(this).parent().attr("open", "open");
        $(this).find('.view-text').html('Collapse feedback');
        commentThread.children('li.comment').show();
      }, function () {
        $(this).parent().attr("open", "closed");
        $(this).find('.view-text').html('View all feedback');
        all = commentThread.children('li.comment');
        all.slice(0, all.size() - 2).hide();
      });
    });
  }


    /*
	 * Function: activateShowHideButtons()
	 * Returns:  (void)
	 * ===================================
	 * This function adds click event listeners to each of the Show/Hide buttons.
	 */

  function activateShowHideButtons() {
    $('a.toggle-answer-details').click(function () {
      var detailsPanel = $(this).closest('.region').children('.details_participants');
      var alreadyHidden = detailsPanel.attr('open');
      if (alreadyHidden == 'open') {
        detailsPanel.slideUp('fast');
        detailsPanel.attr('open', 'closed');
        $(this).text('▾ Show Participants');
      } else {
        detailsPanel.slideDown('fast');
        detailsPanel.attr('open', 'open');
        $(this).text('▴ Hide Participants'); /*$('#hide_details_button').text('Hide Participants ▴');*/
      }
      return false;
    });
  }
  $('input[type="text"], textarea').each(function () {
    var placeholderText = $(this).attr('placeholder');
    if (placeholderText) {
      $(this).addClass('placeholder');
      $(this).val($(this).attr('placeholder'));
      $(this).focus(function () {
        if ($(this).hasClass('placeholder')) {
          $(this).val('');
          $(this).removeClass('placeholder');
        }
      });
      $(this).blur(function () {
        if ($(this).val().length == 0) {
          $(this).addClass('placeholder');
          $(this).val($(this).attr('placeholder'));
        }
      });
    }
  });
  $('#split-bar').mousedown(function (e) {
    var curevent = (typeof event == 'undefined' ? e : event);
    DRAG.mouseStatus = 'down';
    DRAG.curPos = curevent.clientX;
    DRAG.curWidth = $('#PageFeed').width();
    DRAG.newWidth = DRAG.curWidth;
    return false;
  });
  $(document).mouseup(function (e) {
    if (DRAG.mouseStatus == 'down') {
      DRAG.mouseStatus = 'up';
      PA.call("user.set_stat", {
        stat: "feed_width",
        val: DRAG.newWidth
      }, 1);
      PA.user.feed_width = DRAG.newWidth;
    }
  });
  $(document).mousemove(function (e) {
    if (typeof(PD) != "undefined" && PD.removeTipsies) {
      $('div.tipsy').remove(); // remove old tipsy messages
      PD.removeTipsies = false;
    }
    if (DRAG.mouseStatus == 'down') {
      var curevent = (typeof event == 'undefined' ? e : event)
      var newPos = curevent.clientX
      var pxMove = parseInt(newPos - DRAG.curPos)
      var newWidth = parseInt(DRAG.curWidth + pxMove)
      newWidth = (newWidth < 350 ? 350 : newWidth)
      setFeedWidth(newWidth);
      return false;
    }
  });
});

function setFeedWidth(newWidth) {
  $('#PageFeed').width(newWidth + "px");
  newWidth = $('#PageFeed').width();
  DRAG.newWidth = newWidth;
  $('#PageCenter').css('left', newWidth + "px");
  $('#PageBottomBar').css('left', newWidth + "px");
  DRAG.snippetHeight = "36px";
  if (newWidth > 400) DRAG.snippetHeight = "48px";
  $('.main .snippet').css("max-height", DRAG.snippetHeight);
}

function initDropdownMenus() {
  // Clicking an item in a dropdown menu should close that dropdown menu.
  $('.dropdownMenu a').click(function () {
    closeDropdownMenu($(this).closest('.dropdownMenu'));
    if ($(this).attr("href") == "#") return false;
    return true;
  });
  // Clicking a dropdown toggler should toggle its corresponding dropdown menu (and close any other open dropdown menu).
  $('.dropdownToggler').click(function () {
    $('.UIDropdownSelector.open').find('.UIDropdownHandle').trigger('click');
    $('.memoryless').removeClass('open');
    if ($(this).hasClass('active')) {
      closeDropdownMenu($('.dropdownMenu'));
    } else if (aDropdownMenuIsOpen) {
      closeDropdownMenu($('.dropdownToggler.active').siblings('.dropdownMenu'));
      openDropdownMenu($(this).siblings('.dropdownMenu'));
    } else {
      openDropdownMenu($(this).siblings('.dropdownMenu'));
      $('.UIDropdownSelector').removeClass('open').addClass('closed');
    }
    $('#UserNotifications').removeClass('open').addClass('closed');
    return false;
  });
  // Clicking anywhere in the document should close an open dropdown menu.
  $(document).bind('click', function (e) {
    var target = $(e.target);
    if (aDropdownMenuIsOpen && !target.hasClass('course-number') && !target.hasClass('course-number-arrow') && !target.hasClass('dropdownToggler') && !target.hasClass('dropdownMenu') && target.closest('.dropdownToggler').length == 0 && target.closest('.dropdownMenu').length == 0) {
      closeDropdownMenu($('.dropdownToggler.active').siblings('.dropdownMenu'));
    }
  });
  $('#current-class-statistics-link').click(function () {
    showWeeklyReportsPanel();
    $('#WelcomeScreen').hide();
    return false;
  });
  $('input[name="show-init-email"]').click(function() {
    var enable = $(this).val() == "enable" ? 1 : 0;
    var req = {
      nid: PD.selectedNetwork.id,
      key: 'show_initial_email',
      value: enable
    };
    PA.call_pj("network.set_config", req, $('#ClassStatisticsPanel'), function(data) {
      PD.classStats = null;
      PD.selectedNetwork.config.show_initial_email = enable;
      showWeeklyReportsPanel();
    }, function(err) {
      alert(err);
    });
  });
  $('#current-class-questions-link').click(function () {
    showQuestionAnswerPanel();
    return false;
  });
  $('#AccountSettingsLink').click(function() {
    $(this).addClass('open');
    $('#settingsToggler').trigger('click');
    return false;
  });
  $('.feed-tab').click(function () {
    if (!$(this).hasClass('active')) {
      $('.feed-tab').removeClass('active');
      $(this).addClass('active');
      if ($(this).attr('id') == 'questions-tab') {
        $('#question-feed-filters').hide();
        $('#question-feed-questions').show();
      } else if ($(this).attr('id') == 'filters-tab') {
        $('#question-feed-questions').hide();
        $('#question-feed-filters').show();
      }
    }
  });
  $('input[name="filters"]').click(function() {
    PA.trackEvent(true, "filter-clicked", "/class/", {id: $(this).attr('id')});
  });
}
// currently not used

function limitChars(textObj, limit, infodiv) {
  var text = textObj.val();
  var textlength = text.length;
  if (textlength > limit) {
    textObj.val(text.substr(0, limit));
    return false;
  } else {
    textObj.parent().find(infodiv).html('' + (limit - textlength));
    return true;
  }
} /* Dashboard Dropdown Menus */
var aDropdownMenuIsOpen = false;

function openDropdownMenu(menu) {
  //$('#PageTopbar').css('z-index','1050');
  //menu.css('width', menu.parent().width() - 2); // This causes the menu to be as wide as its toggler if the title is wider than the default menu width. We subtract 2px to account for the 1px border surrounding the parent.
  menu.siblings('.dropdownToggler').addClass('active');
  menu.show();
  aDropdownMenuIsOpen = true;
}

function closeDropdownMenu(menu) {
  $('#AccountSettingsLink').removeClass('open');
  //$('#PageTopbar').css('z-index','1000');
  menu.siblings('.dropdownToggler').removeClass('active');
  menu.hide();
  aDropdownMenuIsOpen = false;
} /* Main View Panel Switching (The functions may be called from dashboard.js) */

function showWeeklyReportsPanel() {
    window.location = '#' + PD.term + '/' + PD.selectedNetwork.course_number.replace(/[^\w]/g, '').toLowerCase() + '/statistics';
    PD.showCenterView(PD.Constants.VIEWS.CLASS_STATISTICS);
    $('#PageFeed li.selected').addClass('inactive');
    if (PD.isInst) {
      var link = '(<a target="_blank" href="/class_statistics/' + PD.networkId + '">Get class statistics as a CSV file</a>)';
      var qs = 0;
      if (PD.feed && PD.feed.length > 0) {
        for (var i = 0; i < PD.feed.length; i++) {
          if (PD.feed[i].type == "question") qs++;
          if (qs >= 20) break;
        }
      }
      if (qs >= 20)
        link += ' (<a target="_blank" href="/stats/report/' + PD.networkId + '">' + PD.selectedNetwork.course_number + ' Piazza Report</a>)';
      $('#classStatisticLink').html(link);
      $('#statsHeader').show();
    } else{
      $('#classStatisticLink').html('');
      $('#statsHeader').hide();
    }
    if (!PD.classStats) {
      PA.call("network.get_stats", {
        nid: PD.networkId
      }, $('#ClassStatisticsPanel'), function (data) {
        PD.classStats = data;
        if (data.total) {
          $('#stats_posts').html(data.total.posts || 0);
          $('#stats_questions').html(data.total.questions || 0);
          $('#stats_ir').html(data.total.i_answers || 0);
          $('#stats_sr').html(data.total.s_answers || 0);
          $('#stats_rt').html(showSecs(data.total.response_time));
          $('#stats_total_time').html(showSecs(data.total.net_time));
        }
        $('#stats_most_active').empty();
        if (data.top_users) { // populate most active users
          data.top_users.forEach(function (usr) {
            $('#stats_most_active').append('<li><div class="student_name">' + usr.name + '</div>' + '<div class="value">' + usr.posts + ' contributions; ' + usr.days + ' days online</div></li>');
          })
        }
        $('#stats_askers').empty();
        if (data.top_askers && data.top_askers.length > 0) {
          var top_askers = '';
          top_askers += '<li>';
              top_askers += '<span class="span-300" style="font-size: 11px;width:275px;">Name, Email</span>';
              top_askers += '<span class="span-300" style="font-size: 11px;">questions asked</span>'
          top_askers += '</li>';
          data.top_askers.forEach(function(usr) {
            top_askers += '<li>';
              top_askers += '<span class="span-300" style="width: 290px; white-space: nowrap; overflow: hidden; text-overlfow: ellipsis;">';
                top_askers += usr.name + ' <span class="span-small">' + usr.email + '</span>';
              top_askers += '</span>';
              top_askers += '<span class="span-100" style="marign-left: 10px;">' + usr.asks + '</span>';
            top_askers += '</li>';
          });
          $('#top_askers').show();
          $('#stats_askers').html(top_askers);
        } else {
          $('#top_askers').hide();
        }
        $('#stats_good_q').empty();
        if (data.top_good_q && data.top_good_q.length > 0) {
          var good_q = '';
          good_q += '<li>';
            good_q += '<span class="span-300" style="font-size: 11px;width:275px;">Name, Email</span>';
            good_q += '<span class="span-300" style="font-size: 11px;">number of &quot;good question&quot;s</span>';
          good_q += '</li>';
          data.top_good_q.forEach(function(usr) {
            good_q += '<li>';
              good_q += '<span class="span-300" style="width: 290px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">';
                good_q += usr.name + ' <span class="span-small">' + usr.email + '</span>';
              good_q += '</span>';
              good_q += '<span class="span-100" style="margin-left: 10px;">' + usr.good_q + '</span>';
            good_q += '</li>';
          });
          $('#top_good_q').show();
          $('#stats_good_q').html(good_q);
        } else {
          $('#top_good_q').hide();
        }
        $('#stats_answerers').empty();
        if (data.top_answerers && data.top_answerers.length > 0) {
          var top_a = '';
          top_a += '<li>';
            top_a += '<span class="span-300" style="font-size: 11px;width: 275px;">Name, Email</span>';
            top_a += '<span class="span-300" style="font-size: 11px;">number of answers</span>';
          top_a += '</li>';
          data.top_answerers.forEach(function(usr) {
            top_a += '<li>';
              top_a += '<span class="span-300" style="width: 290px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">';
                top_a += usr.name + ' <span class="span-small">' + usr.email + '</span>';
              top_a += '</span>';
              top_a += '<span class="span-100" style="margin-left: 10px;">' + usr.answers + '</span>';
            top_a += '</li>';
          });
          $('#top_answerers').show();
          $('#stats_answerers').html(top_a);
        } else {
          $('#top_answerers').hide();
        }
        $('#stats_good_a').empty();
        if (data.top_good_a && data.top_good_a.length > 0) {
          var good_a = '';
          good_a += '<li>';
            good_a += '<span class="span-300" style="font-size: 11px;width:275px;">Name, Email</span>';
            good_a += '<span class="span-300" style="font-size: 11px;">number of endorsed answers</span>';
          good_a += '</li>';
          data.top_good_a.forEach(function(usr) {
            good_a += '<li>';
              good_a += '<span class="span-300" style="width: 290px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">';
                good_a += usr.name + ' <span class="span-small">' + usr.email + '</span>';
              good_a += '</span>';
              good_a += '<span class="span-100" style="margin-left: 10px;">' + usr.good_a + '</span>';
            good_a += '</li>';
          });
          $('#top_good_a').show();
          $('#stats_good_a').html(good_a);
        } else {
          $('#top_good_a').hide();
        }
        $('#stats_listeners').empty();
        if (data.top_listeners && data.top_listeners.length > 0) {
          var list = '';
          list += '<li>';
            list += '<span class="span-300" style="font-size: 11px;width:275px;">Name, Email</span>';
            list += '<span class="span-300" style="font-size: 11px;">number of questions/notes viewed</span>';
          list += '</li>';
          data.top_listeners.forEach(function(usr) {
            list += '<li>';
              list += '<span class="span-300" style="width: 290px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">';
                list += usr.name + ' <span class="span-small">' + usr.email + '</span>';
              list += '</span>';
              list += '<span class="span-100" style="margin-left: 10px;">' + usr.views + '</span>';
            list += '</li>';
          });
          $('#top_listeners').show();
          $('#stats_listeners').html(list);
        } else {
          $('#top_listeners').hide();
        }
        $('#stats_all_users').empty();
        if (data.users && data.users.length > 0) {
          $('#stats_all_users').show();
          $('#stud_participation').show();
          $('#more_info_coming').hide();
	/*$('#stats_all_users').append('' +
					'<tr>' +
						'<th>Name, Email</span>' +
				  		'<th>Days Online</span>' +
				  		'<th>Posts Viewed<em>*</em></span>' +
				  		'<th>Contributions<em>**</em></span>' +
					'</tr>');
				data.users.forEach(function(usr){
				  $('#stats_all_users').append('' +
					'<tr>' +
						'<td>' + usr.name + '<span class="span-small">' + usr.email + '</span></td>' +
						'<td>' + usr.days + '</td>' +
						'<td>' + usr.views + '</td>' +
						'<td>' + usr.posts + '</td>' +
					'</tr>');
				});*/
          $('#stats_all_users').append('<li><span class="span-300" style="font-size: 11px;width: 275px;">Name, Email</span>'
            + '<span class="span-100" style="font-size: 11px;">days online</span>'
            + '<span class="span-100" style="font-size: 11px;">posts viewed<em>*</em></span>'
            + '<span class="span-50" style="font-size: 11px;">contributions<em>**</em></span></li>');
          var total = 0;
          for (var i = 0; i < data.users.length; i++)
            if (data.users[i].posts > 0) total = total + 1;
          if (total >= 5 || (data.top_users && data.top_users.length >= 5)) {
            data.users.forEach(function (usr) {
              $('#stats_all_users').append('<li><span class="span-300" style="width: 290px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' + usr.name + ' <span class="span-small">' + usr.email + '</span></span>' + '<span class="span-100" style="margin-left: 10px;">' + usr.days + '</span>' + '<span class="span-75">' + usr.views + '</span>' + '<span class="span-50">' + usr.posts + '</span></li>');
            });
          } else {
            $('#stud_participation').hide();
            $('#more_info_coming').show();
            $('#stats_most_active').empty();
          }
        } else {
          $('#stats_all_users').hide();
          $('#stud_participation').hide();
          $('#more_info_coming').show();
        }
        $('#stats_all_instructors').empty();
        if (data.profs && data.profs.length > 0) {
          $('#stats_all_instructors').show();
          $('#prof_participation').show();
          $('#stats_all_instructors').append('<li><span class="span-300" style="font-size: 11px;width: 275px;">Name, Email</span>' + '<span class="span-100" style="font-size: 11px;">days online</span>' + '<span class="span-100" style="font-size: 11px;">posts viewed<em>*</em></span>' + '<span class="span-50" style="font-size: 11px;">contributions<em>**</em></span></li>');
          data.profs.forEach(function (usr) {
            $('#stats_all_instructors').append('<li><span class="span-300">' + usr.name + ' <span class="span-small">' + usr.email + '</span></span>' + '<span class="span-100">' + usr.days + '</span>' + '<span class="span-75">' + usr.views + '</span>' + '<span class="span-50">' + usr.posts + '</span></li>');
          });
        } else {
          $('#stats_all_instructors').hide();
          $('#prof_participation').hide();
        }
        PD.showStatsChart();
        if (PD.loading) PD.loadProgress(10);
      });
    }
  //}
}

function showQuestionAnswerPanel() {
  //$('#current-class-statistics-link').html("Class Statistics");
  $('#current-class-statistics-link').removeClass('open');
  $('#current-class-questions-link').addClass('open');
  var $notif = $('#UserNotifications');
  if ($notif.hasClass('open'))
    $notif.find('.UIDropdownHandle').click();
  closeDropdownMenu($('.dropdownToggler.active').siblings('.dropdownMenu'));
  $('#DeletedPostPanel').hide();
  $('#NewPostPanel').hide();
  if ($('#SelectedPostPanel').attr('animating') != 'true' && $('#ClassStatisticsPanel').attr('animating') != 'true') {
    $('#SelectedPostPanel').attr('animating', 'true');
    $('#ClassStatisticsPanel').attr('animating', 'true');
    $('#PageFeed li.selected').removeClass('inactive');
    $('#ClassStatisticsPanel').fadeOut(500, function () {
      $('#ClassStatisticsPanel').attr('animating', 'false');
      $('#SelectedPostPanel').fadeIn(500, function () {
        $('#SelectedPostPanel').attr('animating', 'false');
        if (PD.content || PD.contentIsAnnouncement)
          $('#WelcomeScreen').hide();
        else {
          if (PD.feed && PD.feed.length > 0)
            PD.selectContent(PD.feed[0].id);
          else
            $('#WelcomeScreen').show();
        }
      });
    });
  }
}

function showAnnouncementPanel() {
  PD.doPost();

  var $newPostPanel = $('#NewPostPanel');
  $newPostPanel.find(".postNoteTab").click();
  $("#NewPost_AlertAnnouncement").show();
  $("#NewPost_NoteAnnouncement").attr('checked', 'checked');
}

function showImageUpload() {
  $('#dialog_toplinks_uploadPhoto').jqmShow();
}

function adjustSearchAreaMargins() {
  $('#ask-search-container').css('margin-left', $('#logo-container').outerWidth() + $('#classes-container').outerWidth() + 10);
  $('#ask-search-container').css('margin-right', $('#account-container').outerWidth() + 70);
}

function animateFeedToWidth(width) {
  if (PA.user.config && PA.user.config.hide_feed) {
    $('#PageFeed').css('width', width);
    $('#PageCenter').css('left', width);
    $('#PageBottomBar').css('left', width);
  } else {
    $('#PageFeed').animate({
      width: width
    }, 300);
    $('#PageCenter').animate({
      left: width
    }, 300);
    $('#PageBottomBar').animate({
      left: width
    }, 300);
  }
}
function showFeedDetails(showDetails) {
  PD.showFeedDetails = "yes";
  if (showDetails == "no")
    PD.showFeedDetails = showDetails;
  if (PD.showFeedDetails == "no") {
    $('#question-feed-questions').addClass('compactView');
    $('.hideFeedDetails').addClass('active');
    $('.showFeedDetails').removeClass('active');
    $('.showFeedDetails').attr('tutorialw', 'Detailed Feed View');
  } else {
    $('#question-feed-questions').removeClass('compactView');
    $('.hideFeedDetails').removeClass('active');
    $('.showFeedDetails').addClass('active');
    $('.showFeedDetails').attr('tutorialw', 'Compact Feed View');
  }
}
function previewContent_EscapeText(text, noImages) {
  if (!text)
    return null;
  // escape html tags
  text = text.replace(/</g, "&lt;");
  text = text.replace(/>/g, "&gt;");
  var good = ["i", "u", "b", "pre", "blockquote", "tt", "em", "ul", "ol", "li"]
  good.forEach(function (tag) {
    text = text.replace(new RegExp("&lt;" + tag + "&gt;", "g"), "<" + tag + ">");
    text = text.replace(new RegExp("&lt;/" + tag + "&gt;", "g"), "</" + tag + ">");
  });
  // special regex for images
  if (!noImages) {
    text = text.replace(new RegExp("&lt;(img[^;]*)&gt;", "g"), "<$1> ");
    text = text.replace(new RegExp("&lt;/img&gt;", "g"), "</img> ");
  }
  return text;
}
function previewContent(who) {
    //var test = $(who).parent().parent().parent().attr('class');
    //alert(test);
    var text = $(who).parent().parent().parent().find('.contentText').val();
    var title = null;
    var type = "question";
    if (!text) {
      text = $('#NewPost_Details').find('textarea').val();
      title = $('#NewPost_Title').find('textarea').val();
      if ($('#NewPostPanel').hasClass('poll')) {
        type = "poll";
        var pollOption = "[o]";
        if ($('#pollSelectionsAllowedAll').attr('checked'))
          pollOption = "[*]";
        var opts = PD.pollChoices;
        for (var q = 0; q < opts.length; q++) {
          if (opts[q].length > 0)
            text += "\n" + pollOption + " " + opts[q];
        }
      }
    } else if ($(who).parent().parent().parent().find('.contentText').attr('id') == 'question-editor') {
      title = $('#question-subject').val();
    }
    text = previewContent_EscapeText(text);
    title = previewContent_EscapeText(title, true);
    var html = '';
    if (title)
     html += '<h1>' + ProcessText(title) + '</h1><br/>';
    html += ProcessText(text, false, type);
    $('#preview_area').html(html);
    $('#preview_answer').jqmShow();
    $('#preview_answer').css('z-index', '15000');
    $('#preview_area').find('.pollButton').attr('disabled', true);
    $('.jqmOverlay').css('z-index', '14000');
    return false;
}
function previewContentComment(who) {
    var text = $(who).parent().parent().parent().parent().parent().find('.contentText').val();
    var title = null;
    var type = "question";
    if (!text) {
      text = $('#NewPost_Details').find('textarea').val();
      title = $('#NewPost_Title').find('textarea').val();
      if ($('#NewPostPanel').hasClass('poll')) {
        type = "poll";
        var pollOption = "[o]";
        if ($('#pollSelectionsAllowedAll').attr('checked'))
          pollOption = "[*]";
        var opts = PD.pollChoices;
        for (var q = 0; q < opts.length; q++) {
          if (opts[q].length > 0)
            text += "\n" + pollOption + " " + opts[q];
        }
      }
    } else if ($(who).parent().parent().parent().parent().parent().find('.contentText').attr('id') == 'question-editor') {
      title = $('#question-subject').val();
    }
    text = previewContent_EscapeText(text);
    title = previewContent_EscapeText(title, true);
    var html = '';
    if (title)
     html += '<h1>' + ProcessText(title) + '</h1><br/>';
    html += ProcessText(text, false, type);
    $('#preview_area').html(html);
    $('#preview_answer').jqmShow();
    $('#preview_answer').css('z-index', '15000');
    $('#preview_area').find('.pollButton').attr('disabled', true);
    $('.jqmOverlay').css('z-index', '14000');
    return false;
}

function confirmUnenroll(netid) {

  var html = "";
  html += "<div class=\"UIModalWindow UIConfirmationWindow\" id=\"Confirmation_Unenroll\">";
  html += "<div class=\"topbar\">Drop class?</div>";
  html += "<div class=\"content\">";
  html += "<p>You won't be able to post or view questions for this class anymore.</p></div>";
  html += "<ul class=\"UIActions clearFix\">";
  html += "<li class=\"rightFloat\"><input type=\"button\" class=\"UIButton cancel\" id=\"fancyConfirm_cancel\" value=\"Cancel\"/></li>";
  html += "<li class=\"rightFloat\"><input type=\"button\" class=\"UIButton submit\" id=\"fancyConfirm_ok\" value=\"Yes, drop the class\"/></li>";
  html += "</ul></div>";

  jQuery.fancybox({
    autoscale : true,
    modal : true,
    content : html,
    onComplete : function() {
      jQuery("#fancyConfirm_cancel").click(function() {
        jQuery.fancybox.close();
      })
      jQuery("#fancyConfirm_ok").click(function() {
        PD.dropClass(netid);
        jQuery.fancybox.close();
      })
    },
    padding : 0,
    showCloseButton : false
  });
}

function acceptVerification() {
  PA.captchaNeeded = false;
  $('#captcha_window').jqmHide()
  if (PA.capchaCallback) PA.capchaCallback();
}

function needCaptcha(callback) {
  //if (PA.captchaNeeded) {
  //  $('#captcha_window').jqmShow();
  //  PA.capchaCallback = callback
  //  return true;
  //}
  if (PA.user.is_public) {
    if (PA.user.id.match("\\|ck12\\|")) {
      /*PA.load("/dashboard/ck12_login", $('#public-login-space'), function(data) {
        $('#public-login-space').html(data);
        $.fancybox({
          //title	 : 'Login is required',
          autoDimensions: true,
          //autoScale : true,
          href   : '#public-login-space',
          //type   : 'inline',
          showCloseButton : true
        });
      });*/
      $('#ck12-login-link').click();
    } else
      alert("You need to login");
    return true;
  }
  return false;
}

function addClassConfigModalBehaviors() {
  var $parent = $('#classConfigModal');
  var $tabs = $parent.find('.tab-row .tab');
  $tabs.each(function () {
    $(this).click(function () {
      if (!$(this).hasClass('active')) {
        var allClasses = $(this).attr('class').split(' ');
        var tabName = '';
        //alert(allClasses);
        for (var i = 0; i < allClasses.length; i++) {
          //alert('allClasses[i] = ' + allClasses[i]);
          for (var j = 0; j < classConfigModalTabNames.length; j++) {
            //alert('classConfigModalTabNames[j] = ' + classConfigModalTabNames[j]);
            if (allClasses[i] == classConfigModalTabNames[j]) {
              tabName = classConfigModalTabNames[j];
              break;
            }
          }
        }
        alert(tabName);
        $tabPane = $(this).closest('.modal').find('.pane.' + tabName);
        $tabPane.show();
      }
    });
  });
}
function OPEN_TAG(editor){
     editor.focus();
     editor.change();
     var id = editor.attr("id");
     var shadow = $('#' + id + '_shadow');
     if (shadow.length == 0) {
       alert('No shadow!');
       return;
     }
     GET_POS_EDITOR = editor;
     var zz = $('#' + id + '_shadow_cursor');
     if (zz.length > 0) {
       var o = zz.offset();
       var o2 = shadow.offset();
       var x = o.left - o2.left;
       var y = o.top - o2.top + 20 - editor.scrollTop();
       if (x > editor.width()) {
         x -= editor.width();
         y += 18;
       }
       $('#tag-dropdown').css('left', x + editor.offset().left);
       $('#tag-dropdown').css('top', y + editor.offset().top);
       $('#tag-dropdown').show();
       FILTER_TAG(editor.attr('last_word'));
     }
     editor.focus();
}

function CLOSE_TAG(){
  GET_POS = false;
  $('#tag-dropdown').hide();
  if (GET_POS_EDITOR)
    GET_POS_EDITOR.focus();
  GET_POS_EDITOR = null;
}

function FILTER_TAG(str){
  var html = "<ul>";
  var cnt = 0;
  for (var i = 0; i < PD.allTags.length; i++) {
    if (str.length == 0 || PD.allTags[i].indexOf(str) == 0) {
      html += "<li class='tag-auto'>" + PD.allTags[i] + "</li>";
      cnt += 1;
    }
  }
  html += "</ul>";
  if (cnt > 0) {
    $('#tag-dropdown').html(html);
    $('#tag-dropdown').show();
  } else {
    $('#tag-dropdown').hide();
  }
}

var INST_TUT = "gpgdzb2cavr";
//var INST_TUT = "gic3z0ofJlA"; // for teset server only

Piazzza.Dashboard = {

  // id of the div that holds question feed for the dashboard
  feedElementID: "PageFeed",  //BEWARE! changing this will likely break html insertion in PD.createFeed

  // id of the div that has main content of the question
  contentElementID: "scroll_area_container",
  feed: null,            // feed for currrently selected network
  feedFilter: null,      // what tag should feed be fitered by
  searchQuery: '',
  search_feed: null,     // result of a search
  contentId: null,       // what content is currently selected
  parentId: null,        // parent id
  content: null,         // full details of the selected content
  s_answer: null,        // student answer object
  i_answer: null,        // instructors answer object
  followups: {},         // all followups by id
  selectedNetwork: null, // which network is currently selected
  networkId: null,       // selected network id
  isInst: false,         // whether user is instructor in the selected network
  shortNumber: null,     // short course number, like cs144
  events: new Observer(),
  compactFeed: false,    // whether question feed is compact or not
  autoSearch: false,     // whether we're auto-searching at the moment
  feedBuckets: {},       // indicate whether or not a feed bucket is open
  draft: {},             // based on question ID => {elementId => new text}
  loading: true,         // if the site is currently loading
  history: {},           // describes which point in history we are showing
  maxHistory: 0,         // how many items we can go back in history
  curItem: null,         // currently selected item in feed
  posting: "question",  // by default we're posting question
  searchTooltipVisible: false, // flag to know if the tooltip is shown. Used for jQuery queue/animation opacity bugs.
  searchTooltipTimeout: null, // window store for timeout variable
  searchTooltipVarTimeout: null, // window store for timeout's variable
  allTags: [],           // all tags for current class
  popularTags: [],       // tags that are popular for current class
  notifications: [],     // list of all notifications
  subjects: {},
  fixedConcurrent: false,
  focus: "",             // Holds info about what is currently in focus. Used for keybindings
  initialFeedSize: 50,   // how many items to load at page start
  finalFeedSize: 200,    // stop dynamically loading the feed after we have this many items
  loadAtOnce: 150,       // how many feed items to load at a time after the initial feed has been loaded
  bucketIds: {},         // mapping of bucket names (like "Today", "This Week") to the ids of those buckets
  moreFeed: false,       // Whether there is more feed on the server that could be loaded into the dashboard
  forceStud: false,      // Whether or not to force a student view for someone who may be a prof
  getOnlineUsers: null,  // ref to 3 minute timeout to refresh online users

  showJLink: {
    cmu:1,
    princeton:1,
    mit:1,
    harvard:1,
    berkeley:1,
    stanford:1,
    caltech:1
  },
  // CONSTANTS
  Constants: {
    FEED_ITEM_DATA: {
      INNER_HTML: 0,
      STATUSES: 1
    },
    KEY_CODES: {
  	  BACKSPACE:     8,
  	  TAB:           9,
  	  ENTER:        13,
  	  SHIFT:        16,
  	  CTRL:         17,
  	  ALT:          18,
  	  PAUSE_BREAK:  19,
  	  CAPS_LOCK:    20,
  	  ESCAPE:       27,
  	  SPACE:        32,
  	  PAGE_UP:      33,
  	  PAGE_DOWN:    34,
  	  END:          35,
  	  HOME:         36,
  	  LEFT_ARROW:   37,
  	  UP_ARROW:     38,
  	  RIGHT_ARROW:  39,
  	  DOWN_ARROW:   40,
  	  INSERT:       45,
  	  DELETE:       46,
  	  DIGIT_0:      48,
  	  DIGIT_1:      49,
  	  DIGIT_2:      50,
  	  DIGIT_3:      51,
  	  DIGIT_4:      52,
  	  DIGIT_5:      53,
  	  DIGIT_6:      54,
  	  DIGIT_7:      55,
  	  DIGIT_8:      56,
  	  DIGIT_9:      57,
  	  LETTER_A:     65,
  	  LETTER_B:     66,
  	  LETTER_C:     67,
  	  LETTER_D:     68,
  	  LETTER_E:     69,
  	  LETTER_F:     70,
  	  LETTER_G:     71,
  	  LETTER_H:     72,
  	  LETTER_I:     73,
  	  LETTER_J:     74,
  	  LETTER_K:     75,
  	  LETTER_L:     76,
  	  LETTER_M:     77,
  	  LETTER_N:     78,
  	  LETTER_O:     79,
  	  LETTER_P:     80,
  	  LETTER_Q:     81,
  	  LETTER_R:     82,
  	  LETTER_S:     83,
  	  LETTER_T:     84,
  	  LETTER_U:     85,
  	  LETTER_V:     86,
  	  LETTER_W:     87,
  	  LETTER_X:     88,
  	  LETTER_Y:     89,
  	  LETTER_Z:     90,
  	  SEMI_COLON:  186,
  	  EQUAL_SIGN:  187,
  	  COMMA:       188,
  	  DASH:        189,
  	  PERIOD:      190,
  	  FORWARD_SLASH: 191,
  	  GRAVE_ACCENT:  192,
  	  OPEN_BRACKET:  219,
  	  BACK_SLASH:    220,
  	  CLOSE_BRACKET: 221,
  	  SINGLE_QUOTE:  222
  	},
    POPULAR_TAGS: {
      LOOKAHEAD: 30,
      MAX_TAGS:  15
    },
    VIEWS: {
      CLASS_STATISTICS:  'ClassStatisticsPanel',
      DELETED_POST:      'DeletedPostPanel',
      HELP: {
        ADVANCED_SEARCH: 'Help_AdvancedSearch'
      },
      NEW_POST:          'NewPostPanel',
      SELECTED_POST:     'SelectedPostPanel',
      NOTIFICATIONS:     'NotificationsPanel',
      WELCOME:           'WelcomeScreen'
    }
  },


  // Global UI Elements
  UIElements: {
    init: function() {
      this.UICollapse.init();
      this.UIMessage.init();
      this.UISearch.init();
      this.UITabSelector.init();
    },
    UICollapse: {
      init: function() {
        // initialize our collapsers
        PD.toggleHoverEnable();
        PD.hoverFeed();

        $('.UICollapse.stats').click(function() {
          PD.toggleStats();
        });
        $('#tagButton .icon').click(function() {
          PD.togglePopularTags();
        });
      }
    },
    UIDropdownSelector: {
      initOne: function($item, onSelectCallback, onOpenCallback, event) {
        if (!onSelectCallback) onSelectCallback = $item.attr('onSelect');
        $item.Piazza_UIDropdownSelector({
          'event'   : (event || 'hover'),
          'onSelect': onSelectCallback,
          'onOpen'  : onOpenCallback
        });
      }
    },
    UIMessage: {
      init: function() {
        Piazzza.Dashboard.UIElements.UIMessage.activateContentLoaderMessages();
      },
      activateContentLoaderMessages: function() {
        $('.UIMessage.loadMoreContent').click(function() {
          $(this).addClass('loading');
        });
      }
    },
    UIModalWindow: {
      Callbacks: {
        'Confirmation_CancelNewPost': {
          submit: function() {
            PD.postDraft = {};
            PA.call_pj("network.save_draft", {nid:PD.networkId, draft:{}}, 1);
            PD.newPostPanel_Close();
            return false;
          },
          cancel: function() {
            // Do nothing.
            return false;
          }
        },
        'Confirmation_RemoveEmail': {
          submit: function() {
            PD.emailToRemove = null;
            return false;
          },
          cancel: function() {
            PD.submitRemoveEmail();
            return false;
          }
        },
        'Confirmation_LinkEmail': {
          submit: function() {
            PD.submitAccountSettings();
            return false;
          },
          cancel: function() {
            // Do nothing.
            return false;
          }
        }
      },
      Initialized: {},
      showConfirmationWindow: function(confirmationWindowID) {
        var $modalWindow = $('#' + confirmationWindowID);

        // Open the corresponding confirmation window.
        if ($modalWindow.size() > 0) {
          $.fancybox({
            'autoScale': true,
            'hideOnOverlayClick': false,
            'href': '#' + confirmationWindowID,
            'padding': 0,
            'showCloseButton': false,
            'transitionIn': 'none',
            'transitionOut': 'none'
          });
        }

        if (!PD.UIElements.UIModalWindow.Initialized[confirmationWindowID]) {
          // Return true when the submit button is clicked.
          $modalWindow.find('.UIActions .submit').click(function() {
            PD.UIElements.UIModalWindow.Callbacks[confirmationWindowID].submit.call();
            $.fancybox.close();
            return false;
          });

          // Return false when the cancel button is clicked.
          $modalWindow.find('.UIActions .cancel').click(function() {
            PD.UIElements.UIModalWindow.Callbacks[confirmationWindowID].cancel.call()
            $.fancybox.close();
            return false;
          });
          PD.UIElements.UIModalWindow.Initialized[confirmationWindowID] = true;
        }
      }
    },
    UISearch: {
      init: function() {
        PD.UIElements.UISearch.activateEvents();
      },
      activateEvents: function() {
        // When the user clicks anywhere in the document...
        $(document).click(function(e) {
          var $target = $(e.target);
          if (!PD.search_feed) return;
          if ($target.closest('.UISearchBar .clearButton').size() != 0) {
            PD.UIElements.UISearch.emptySearchBox();
          } else if ($target.closest('.UISearchPane').size() == 0) {
            PD.UIElements.UISearch.exitSearchMode();
          }
        });

        // When the user types into the search bar...
        $('#FeedSearch .UISearchBar input').keyup(function() {
          var query = $(this).val();
          if (query.length > 0 && query.indexOf(':') < 0) {
            if (!PD.UIElements.UISearch.inSearchMode()) {
              PD.UIElements.UISearch.enterSearchMode();
            }
            PD.UIElements.UISearch.populateAdvancedSearchFields(query);
          } else {
            PD.UIElements.UISearch.exitSearchMode();
          }
        });
        $('#FeedSearch .UISearchPane').click(function(e) {
          var $target = $(e.target);
          if ($target.length > 0) {
            var elem = $target.parent().find('.input');
            var typ = elem.attr('type');
            var str = elem.text();
            if (typ && str) {
              var term = typ + ":\"" + str + "\"";
              $('#search-box').val(term);
              PD.doSearch(term);
              PD.UIElements.UISearch.exitSearchMode();
            }
          }
          return false;
        });

        // When the user clicks on the learn more link in the search pane...
        $('#FeedSearch .UISearchPane .UIActions .learn').click(function() {
          PD.showCenterView(PD.Constants.VIEWS.HELP.ADVANCED_SEARCH);
          PD.UIElements.UISearch.exitSearchMode();
        });
      },
      enterSearchMode: function() {
        // Variables.
        var $feedSearchWrapper = $('#FeedSearch');
        var $feedSearchBar = $feedSearchWrapper.find('.UISearchBar');
        $('#clear-search-button').show();
        // Exit search mode.
        $feedSearchWrapper.addClass('isSearching');
        $feedSearchBar.addClass('focus');
      },
      exitSearchMode: function() {
        // Variables.
        var $feedSearchWrapper = $('#FeedSearch');
        var $feedSearchBar = $feedSearchWrapper.find('.UISearchBar');

        // Exit search mode.
        $feedSearchWrapper.removeClass('isSearching');
        if ($feedSearchBar.find('input[type="text"]').val().length == 0) {
          $feedSearchBar.removeClass('focus');
        }
      },
      inSearchMode: function() {
        return $('#FeedSearch').hasClass('isSearching');
      },
      emptySearchBox: function() {
        $('#FeedSearch .UISearchBar input[type="text"]').val('');
        PD.filterFeed('');
        PD.UIElements.UISearch.exitSearchMode();
      },
      populateAdvancedSearchFields: function(query) {
        var $advancedSearchFields = $('#FeedSearch .UISearchPane .input');
        $advancedSearchFields.each(function() {
          $(this).text(query);
        });
      }
    },
    UITabSelector: {
      init: function() {
        $('.UITabSelector .UITab').live('click', function() {
          $(this).siblings().removeClass('selected');
          $(this).addClass('selected');
        });
      }
    }
  },
  // Topbar
  Topbar: {
    init: function() {
      PD.Topbar.activateNotificationsMenu();
    },
    activateNotificationsMenu: function() {
      var $notificationsMenu = $('#PageTopbar .UIElement[rel="notifications"]');

      // Activate the menu open/close behavior.
      PD.UIElements.UIDropdownSelector.initOne($notificationsMenu, null, function onSelect(){
        // clear the number
        $('.notificationBadge').html("");
        if (PD.notifications.length > 0) {
          if (PA.user && PA.user.config && PA.user.config.last_notif && PA.user.config.last_notif[PD.networkId] >= PD.notifications[0].t)
            return;
          PA.call_pj("user.set", {stat: "last_notif." + PD.networkId, val: PD.notifications[0].t}, 1);
          if (!PA.user.config) PA.user.config = {};
          if (!PA.user.config.last_notif) PA.user.config.last_notif = {};
          PA.user.config.last_notif[PD.networkId] = PD.notifications[0].t;
        } else if (!PA.user.config.last_notif) {
          PA.user.config.last_notif = {};
          PA.call_pj("user.set", {stat: "last_notif", val: {}}, 1);
        }
      }, 'click');
      // Activate clicking on the notifications badge too.
      $notificationsMenu.find('.notificationBadge').click(function() {
        $notificationsMenu.find('.UIDropdownHandle').click();
      })

      // Activate the "See All" link
      $notificationsMenu.find('.UIActions .seeMore').click(function() {
        PD.showCenterView(PD.Constants.VIEWS.NOTIFICATIONS);
      });
    }
  },
  updateFilterDropdown: function() {
    $('.filters-dropdown-menu.dropdownMenu .filter-option').live('click',function(){
      var selectedFilter = $(this).text();
      $('.filters-dropdown span.current-filter').html(selectedFilter);
      $('.filters-dropdown-menu.dropdownMenu').hide();
      $('.dropdownToggler').removeClass('active');
    });
  },
  // when user changes his class; fetch the feed
  selectNetwork: function(nid, showWelcome, loadFeed) {
    // get network feed
    if (!nid) return;
    $('#welcmeRegion').show();
    if (PD.selectedNetwork && PD.selectedNetwork.id == nid) {
      PD.populateNetworkDropdown(nid);
      return;
    }
    $('.dropdownToggler').removeClass('active');
    $('.dropdownMenu').hide();
    //$('#popularTagsWrapper').hide();
    PD.classStats = false;
    PA.networks.forEach(function(net) {
      if (net.id == nid) {
        PD.selectedNetwork = net;
        PD.content = null;
        PD.selectedNetwork.online_users = 0;
        PD.shortNumber = net.course_number.replace(/[^\w]/g, '').toLowerCase();
        PD.term = net.term.toLowerCase().replace(/\s+/g, "") || "other";
        PD.networkId = nid;
        window.onresize = function() {
          var windowSize = PD.getBrowserWindowSize();
          if(windowSize.width > 1115){
            $('#PageTopbar #account-name-container #account-name').css({'max-width':'180px'});
            $('#PageCenter .mainPanel .postActionsBar .user_name').css({'max-width':'120px'});
          }else{
            $('#PageTopbar #account-name-container #account-name').css({'max-width':'80px'});
            $('#PageCenter .mainPanel .postActionsBar .user_name').css({'max-width':'90px'});
          }
        }
        // check for jobs link
        if (PD.showJLink[net.school_ext]) {
          $('#JobsLink').show();
          $('#account-name').css('margin-top', '-2px');
        } else {
          $('#JobsLink').hide();
          $('#account-name').css('margin-top', '5px');
        }
       /* if (net.school_ext == "stanford" || net.school_ext == "berkeley") {
          $('#showForSelectedSchoolsOnly').show();
          if (net.term == "Spring 2012")
            $('.welcomeScreenFF').show();
          PA.canShowFriends = true;
        } else {
          $('#showForSelectedSchoolsOnly').hide();
          $('.welcomeScreenFF').hide();
          PA.canShowFriends = false;
        }*/
        var adm = PA.user.can_admin[net.id] || 0;
        PD.isInst = (adm > 0) && !PD.forceStud;
        $('.course-number').html(net.course_number);
        if (!PA.staticContent || PA.staticContent == "demo")
          $('#current-class-title').html(net.course_number);
        //$('#filter-show-all').attr('checked', true);
        $('.course-name').html(net.name);
        //if (net.course_number == "PIAZZZA 101")
        //  $('#current-class-statistics-link').hide();
        //else
        //  $('#current-class-statistics-link').show();

        if (PA.user && PA.user.config) {
          $('.message-alert, .message-alert-onheader, .UIHelpMessage, .UIHoverCard').each(function(idx){
            var msg = $(this).attr("id");
            if (PA.user.config.seen_message && PA.user.config.seen_message.exist(msg) || (msg == "feed_view_toggle_msg" && PA.user.config.logins < 20))
              $(this).hide();
            else {
              $(this).show();
              if (msg == "feed_view_toggle_msg") {
                if (!PA.user.config || !PA.user.config.logins) {
                  $(this).hide();
                } else {
                  if (PA.user.config.feed_details != "yes") {
                    PA.user.config.feed_details = "yes";
                    PA.call_pj("user.set", {stat: "feed_details", val: "yes"}, 1);
                  }
                  showFeedDetails(PA.user.config.feed_details);
                }
              }
            }
          });
        }

        if (PD.isInst) {
          $('#newFollowupAnonymityCheckboxWrapper').hide();
          $('.student-only').hide();
          $('.showForStudents').hide();
          $('.showForInstructors').show();
          $('.prof_override').show();
          $('.toplinks_classSettings').show();
          $('#current-class-title').css({'margin-top':'0px'});
          $('.course-number-arrow').css({'top':'5px'});
          $('#student_participation_name').html('Student Participation Report (<a href="#" id="PageBottomBar-options-link">Options &raquo;</a>)');
          $('#PageBottomBar-options-link').click(function() {
            PD.showStatsPaneOptions();
            return false;
          });
          $('.my-role').html('Instructor');
          //$('.invite-link').hide();
          if (!PA.staticContent && PD.selectedNetwork.type != "trial")
            PA.load("/dashboard/prof_welcome?nid=" + PD.selectedNetwork.id, $('#WelcomeScreen'), function(data){$('#WelcomeScreen').html(data);});
          PD.showCenterView(PD.Constants.VIEWS.WELCOME);
          /*
          if (PA.user.config && (!PA.user.config.logins || PA.user.config.logins < 8))
            showWelcome = true;
          */

          // messages
          if (!PA.staticContent || PA.staticContent == "demo")
            $("#s_answer_msg").hide();
          if (PA.user.config && PA.user.config.seen_message) {
            if (PA.user.config.seen_message.exist("i_answer_msg")) {
              $("#i_answer_msg").hide();
            } else {
              $("#i_answer_msg").show();
            }
          }
        } else {
          $('#newFollowupAnonymityCheckboxWrapper').show();
          $('.showForStudents').show();
          $('.showForInstructors').hide();
          $('.student-only').show();
          $('.prof_override').hide();
          $('#student_participation_name').html("My Participation Report");
          $('.toplinks_classSettings').hide();
          $('#current-class-title').css({'margin-top':'6px'});
          $('.course-number-arrow').css({'top':'12px'});
          $('.my-role').html('Student');
          //$('.invite-link').show();
          if (!PA.staticContent && !PA.user.is_public && PD.selectedNetwork.type != "trial")
            PA.load("/dashboard/stud_welcome?nid=" + PD.selectedNetwork.id, $('#WelcomeScreen'), function(data){$('#WelcomeScreen').html(data);});
          PD.showCenterView(PD.Constants.VIEWS.WELCOME);
          /*
          if (PA.user.config && (!PA.user.config.logins || PA.user.config.logins < 8))
            showWelcome = true;
          */

          // messages
          $("#i_answer_msg").hide();
          if (PA.user.config && PA.user.config.seen_message) {
            if (PA.user.config.seen_message.exist("s_answer_msg")) {
              $("#s_answer_msg").hide();
            } else {
              $("#s_answer_msg").show();
            }
          }
        }
        $('.anonymity-dropdown').show();
        if (net.anonymity == "full" || net.anonymity == "no") {
          $('.full_anonymity').show();
          $('.anonymity-select').html('<option value="no">' + PA.user.name + '</option><option value="stud">Anonymous to classmates</option><option value="full">Anonymous to everyone</option>');
        }
        if (net.anonymity == "stud") {
          $('.full_anonymity').hide();
          $('.anonymity-select').html('<option value="no">' + PA.user.name + '</option><option value="stud">Anonymous to classmates</option>');
        }
        if (net.anonymity == "no")
          $('.anonymity-dropdown').hide();
        $('#class-inactive').hide();
        $('#ask-button-container').show();
        if (net.id == "piazzza") {
          // this is FAQ class
          PD.isInst = PA.user.is_admin;
          $('#current-class-links').hide();
          $('.no-tutorial').hide();
        } else {
          $('.no-tutorial').show();
          $('#clickhere_arrow').hide();
          if (net.status != 'active') {
            if (!(PA.staticContent == "demo")) {
              $('#class-inactive').show();
              $('#ask-button-container').hide();
            }
          }
          if (PA.user.email != 'tutorial') $('#current-class-links').show();
          if (PA.user.config && PA.user.config.no_tips) {
            $('#turn-off-tutorial').hide();
            PD.hideTutorial();
          } else {
            if (PA.user.email != 'tutorial') $('#turn-off-tutorial').show();
            $('#class-inactive').hide();
          }
        }
      }
    });
    if (PD.selectedNetwork == null) {
      if (PA.networks.length > 0)
        PD.selectNetwork(PA.networks[0].id, showWelcome, loadFeed);
      return;
    }

    // load trial welcome screen
    if (PD.selectedNetwork.type == "trial") {
      PA.load("/dashboard/trial_welcome", $('#WelcomeScreen'), function(data) {
        $('#WelcomeScreen').html(data);
      });
    }


    PD.school_ext = PD.selectedNetwork.school_ext;
    PD.school_emails = PD.selectedNetwork.school_emails;
    if (PD.school_ext && PD.selectedNetwork.type != "trial")
      PD.valid_school = true;
    else
      PD.valid_school = false;
    PD.populateNetworkDropdown(nid);
    PD.events.fire("network_change");
    if (PD.loading) PD.loadProgress(5);
    $('.class_user_count').html(PD.selectedNetwork.user_count);
    //PD.loadPartialFeed = 300; // only load part of the feed initially
    if (PD.deepParams && PD.term == PD.deepParams[0] && PD.shortNumber == PD.deepParams[1] && PD.deepParams.length > 2)
      window.location = '#' + PD.term + "/" + PD.shortNumber + "/" + PD.deepParams[2];
    else
      window.location = '#' + PD.term + "/" + PD.shortNumber;

    /* this is only called if switching from original network: initial dashboard load already prefetches the feed */
    if (loadFeed)
      PD.loadFeed(false, showWelcome);
  },
  loadFeed: function(initialFeed, showWelcome) {
      var curNetwork = PD.networkId;
      PD.bucketIds = {};
      PA.call_pj("network.get_my_feed", {nid:PD.networkId, limit: PD.initialFeedSize}, $("#" + PD.feedElementID),
      function(feed, aid) {
        if (PD.loading) PD.loadProgress(6);
        if (PD.networkId != curNetwork)
          return;

        //PD.setNewFeed(feed.feed);
        PD.feed = feed.feed;
        PD.filterFeed('');
        PD.events.fire("feed_loaded");

      	PD.selectedNetwork.online_users = feed.users;
        PD.selectedNetwork.users_7 = feed.users_7;
        // show HoF
      	if (feed.avg_cnt > 4)  {
        	if (feed.avg < 60*60*3)
          	$('#avg_resp_time').html(showSecs(feed.avg));
        	else
          	$('#avg_resp_time').html(">3 hr");
        	$('#avg_resp_time').show();
      	} else {
        	$('#avg_resp_time').html('N/A');
      	}
      	$('.online-this-week').html(feed.users_7);
      	// show hof
      	PD.hof = feed.hof;
        PD.postDraft = feed.draft;
      	PD.showHoF();
      	PD.updateOnlineUsers();
      	PC.lastNetworkMessage = feed.now;
        PA.push_data.t1 = feed.t; // set the time we got feed
        PA.push_data.o1 = PD.networkId;
      	if (feed.more) {
      	  setTimeout(function() {PD.getMoreFeed(PD.initialFeedSize);}, 500);         //Should be doing this after page is fully loaded -JEG
          PD.moreFeed = true;
        } else
          PD.moreFeed = false;
        if (feed.notifications) {
          PD.notifications = feed.notifications;
          PD.subjects = feed.notification_subjects;
          PD.renderNotifications();
        }
        if (initialFeed) {
          if (!showWelcome && PD.deepParams && PD.deepParams.length > 2 && PD.deepParams[2]) {
                  PD.selectContentByNr(PD.deepParams[2]);
                  if (PD.topic) PD.doAutoSearch('tag:' + PD.topic);
              return;
          } else if(!PD.haveSentHomeTrack){ //track we showed the welcome panel
            PD.haveSentHomeTrack = true
            var h = {"isInst" : PD.isInst, "class" : PD.selectedNetwork.course_number, "school" : PD.selectedNetwork.school_ext};
            PA.trackEvent(true, "showed-welcome-panel", "/class/", h);
          }
          PA.push_data.t2 = "";
          PA.push_data.o2 = "";
          PA.push_data.id++;
          setTimeout(function(){PA.initPush();}, 3000); // after 3 seconds init push

          if (PD.topic) PD.doAutoSearch('tag:' + PD.topic);
          // special case sandbox
          if (PA.staticContent) {
                  //PD.selectContent(PD.feed[PD.feed.length-1].id);
                  if (PD.loading) PD.loadProgress(10);
                  return;
          }
          if (PD.loading) PD.loadProgress(10); // couldn't find content to select; stop loading
        }
        if (PD.getOnlineUsers) {
          clearTimeout(PD.getOnlineUsers);
        }
        PD.getOnlineUsers = setTimeout(function(){ PD.refreshOnlineUsers(PD.networkId); }, 1000 * 180); // 3 minute timeout
      },
      function() {
        if (GetUrlParameter('nid'))
          window.location = "/class";
      });
  },
  refreshOnlineUsers: function(nid) {
    if (nid == PD.networkId) {
      PA.call_pj("network.get_online_users", {nid:nid}, 1, function(data) {
        if (nid == PD.networkId) {
          PD.selectedNetwork.online_users = data.users;
          PD.updateOnlineUsers();
          PD.getOnlineUsers = setTimeout(function(){ PD.refreshOnlineUsers(PD.networkId); }, 1000 * 180); // 3 minute timeout
        }
      });
    }
  },
  onPrivatePostClick: function() {
    // hide no anonymous option when posting privately
    if ($('#NewPostPanel').hasClass("poll")) return;
    if ($('#NewPost_PrivatePost').attr('checked')) {
      if ( !PD.isInst && PD.selectedNetwork.anonymity == "full") {
        $('#NewPost_Anonymity').show();
        $('.showForOnlyPrivate').show();
        $('.showForOnlyClassmates').hide();
        $('.showForFull').hide();
      } else {
        $('#NewPost_Anonymity').hide();
        $('#NewPost_StudentAnonymity').attr("checked", false);
      }
    } else {
      if (PD.selectedNetwork.anonymity != "no" && !PD.isInst) {
        $('#NewPost_Anonymity').show();
        $('.showForOnlyPrivate').hide();
        if (PD.selectedNetwork.anonymity == "full") {
          $('.showForFull').show();
        } else {
          $('.showForOnlyClassmates').show();
        }
      } else {
        $('#NewPost_Anonymity').hide();
      }
    }

    // special case non anonymous networks
    if (PD.selectedNetwork.anonymity == "no") {
      $('#NewPost_Anonymity').hide();
      $('#NewPost_StudentAnonymity').attr("checked", false);
    }
  },
  /*
  *  Loads additional feed items
  *  @param offset - however many we alread have, skip these. Defaults to the length of the current feed
  *  @param limit - only load this many. Defaults to PD.loadAtOnce
  *  @param getAll - if true, continue getting until we have the whole feed
  */
  getMoreFeed: function(offset, limit, getAll) {
    offset = (typeof(offset) == 'undefined' || offset == null) ? PD.feed.length : offset;
    limit = (typeof(limit) == 'undefined' || limit == null) ? PD.loadAtOnce : limit;
    getAll = (typeof(getAll) == 'undefined' || getAll == null) ? false :  getAll;

    $msg = $('#' + PD.feedElementID).find('.scrollable').find('.loadMoreContent');
    if ($msg.size() > 0)
      $msg.addClass('loading');
    else
      PD.displayShowAll(true);
    var curNetwork = PD.networkId;
    var params = {nid:PD.networkId, offset:offset, limit:limit};
    PA.call_pj("network.get_my_feed", params, $("#feed_loading_div"),
      function(feed) {
        if (PD.networkId != curNetwork)
          return;
        feed.feed.forEach(function(item){
          if (!(item.updated instanceof Date)) {
            var dt = new Date();
            dt.setISO8601(item.updated);
            item.updated = dt;
          }
          //if ($('#' + item.id).length == 0) //don't add the same item twice, if we already have it
          //  PD.feed.push(item);
        });
        $('#' + PD.feedElementID).find('.scrollable').find('.loadMoreContent').remove();
        if (feed.more)
          PD.moreFeed = true;
        else
          PD.moreFeed = false;
        //for(var i = 0; i<feed.feed.length; i++){
        //  if($('#' + feed.feed[i].id).length != 0){
        //    feed.feed.splice(i,1);
        //    i--;
        //  }
        //}
        PD.feed = PD.feed.concat(feed.feed).sort(function(a,b){
          if (b.updated > a.updated) return 1;
          if (b.updated < a.updated) return -1;
          return 0;
        });
        PD.createFeed(PD.feed);
        //PD.addToFeedBottom(feed.feed);
        // if we're already showing as much feed as will be loaded, but there's more, show all link
        if ((PD.feed.length < PD.finalFeedSize || getAll) && feed.more) {// If there are more feed items, load them later
          setTimeout(function() {PD.getMoreFeed(null,null,getAll);}, 500);
        } else {
          if (PD.feed.length >= PD.finalFeedSize && feed.more) {

            //Recalculate tags bar
            PD.getTopTags();

            //$('#' + PD.feedElementID).find('.scrollable').append(html);
            PD.displayShowAll();
            //$('#' + PD.feedElementID).find('.scrollable').find('.loadMoreContent').removeClass('loading');
          }
        }
      }, function(err) {
        $('#' + PD.feedElementID).find('.scrollable').find('.loadMoreContent').remove();
        PD.moreFeed = false;
      });
  },

  /**
  * Displays the "Show All" element at the bottom of the feed.
  * If loading is true, add the loading class to the element so that a spinner gif shows
  * loading defaults to false
  */
  displayShowAll: function(loading){
    loading = (typeof(open) == 'undefined' || open == null) ? false : loading; //loading defaults to false
    if (PD.search_feed) return;
    $feedRegion = $('#' + PD.feedElementID).find('.scrollable');
    if($feedRegion.find('.loadMoreContent').length > 0) return; //already displayed

    var html =  '<a id="loadMoreButton" class="UIMessage loadMoreContent';
    html += (loading?" loading":"");
    html += '" onclick="return PD.showAllFeed();">';
    html += '<span>Show All</span>';
    html += '<div class="activityIndicator">';
    html += '<img src="/images/__unused/ajax-loader-small.gif" />';
    html += '</div>';
    html += '</a>';

    $feedRegion.append(html);
  },
  showAllFeed: function() {
    //PD.loadPartialFeed = 1000000;
    //PD.loadAtOnce = 300;
    PD.getMoreFeed(null,1000000,true);
    return false;
  },

  selectContentSpecial: function(callback) {
    callback();
    if (PD.loading) PD.loadProgress(10);
    return true;
  },

  selectContentByNr: function(nr) {
    if (nr == "statistics") {
      return this.selectContentSpecial(showWeeklyReportsPanel);
    }
    if (nr == "announcement") {
      return this.selectContentSpecial(showAnnouncementPanel);
    } else {
      //PD.selectContent(nr);
      if (PD.feed) {
        for (var i = 0; i < PD.feed.length; i++) {
          if (PD.feed[i].nr == nr) {
            PD.selectContent(PD.feed[i].id);
            return true;
          }
        }
      }
    }
    PD.selectContent(nr);
    //if (PD.loading) PD.loadProgress(10);
    return true;
  },
  setNewFeed: function(feed, block_scroll) {
    var sortBy = "updated";
    PD.feed = feed.sort(function(a,b) {
      var pos_a = a[sortBy]; // + a["rank"];
      var pos_b = b[sortBy]; // + b["rank"];

      if (pos_a > pos_b) return -1;
      if (pos_b > pos_a) return 1;
      return 0;
    });
    PD.createFeed(PD.feed);
    if (!block_scroll)
      PD.scrollFeedToSelected();
    PD.getTopTags();
    PD.events.fire("feed_created");
  },
  closeQuestion: function() {
    //PD.showWelcomeScreen();
    PD.showCenterView(PD.Constants.VIEWS.WELCOME);
    $(".continueButtonContainer").hide();
    $('.click-on-question').show();
    $('#PageFeed').find('li.selected').removeClass('selected');
    if (!PA.user.config.seen_message || !PA.user.config.seen_message.exist("home_button_msg")) {
      PD.markSeenUnseen("home_button_msg");
      $('#home_button_msg').hide();
    }

    var h = {"isInst" : PD.isInst, "class" : PD.selectedNetwork.course_number, "school" : PD.selectedNetwork.school_ext};
    PA.trackEvent(true, "closed-question-panel", "/class/", h);
    PD.events.fire("content_closed");

  },
  // when user clicks on a question in the feed
  selectShowContent: function(content, cid, scrollWith) {
    var id = content.id;
    if (PD.contentId == id) return;
    //if (!PD.loading)
    PD.showCenterView(PD.Constants.VIEWS.SELECTED_POST);
    PD.contentId = id;
    $('.auto-shadow').remove();
    var v = $('#search-box').val();
    if (v.length > 1 && v.substr(0, 1) == "@" && v != "@" + content.nr)
      $('#search-box').val('');

    $('#PageFeed').find('li.selected').removeClass('selected');
    $('#' + id).addClass('selected');
    if (id != cid || !PD.content || scrollWith) {
      var off = $('#' + id).offset();
      if (off) {
        var elem = $("#" + PD.feedElementID).find('.scrollable');
        var curTop = elem.scrollTop();
        elem.scrollTop(off.top - 250 + curTop);
      }
    }
    PA.user.last_content[PD.networkId] = id;
    if (Piazzza.Dashboard.inEdit)
      PD.cancelAnswer(Piazzza.Dashboard.inEdit);
    PD.content = content;
    var item;
    if (PD.feed)
      for (var i = 0; i < PD.feed.length; i++)
        if (PD.feed[i].id == id) {
          item = PD.feed[i];
          break;
        }
    PD.curItem = item;
    if (item) PD.contentChanges = item.main_version - item.version; else PD.contentChanges = 0;
    PD.showContent(content);
    if (item) {
      if (item.is_new && PA.user.new_questions && PA.user.new_questions[PD.networkId] > 0) {
        PA.user.new_questions[PD.networkId]--;
        PD.populateNetworkDropdown();
      }
      item.is_new = false;
      //item.is_modified = false;
      //item.changes = 0;
      PD.content.version = item.version;
      item.version = item.main_version;
      PD.feedItem_Update(item);
    }
    if (PD.search_feed) {
      var s_item = null;
      for (var i = 0; i < PD.search_feed.length; i++)
        if  (PD.search_feed[i].id == id) {
          s_item = PD.search_feed[i];
          break;
        }
      if (s_item == null) s_item = item;
      if (s_item) {
        s_item.version = s_item.main_version;
        s_item.is_new = false;
        PD.feedItem_Update(s_item);
      }
    }
    $('#if_not_new').show();
    PD.events.fire("content_change");
    var nn = '#' + PD.term + '/' + PD.shortNumber + '/' + content.nr;
    window.location = nn;
    PD.initHistoryBar();
  },
  sortHistory: function(arr) {
   if (!arr) return null;
   return arr.sort(function(a,b){
            if (b.created > a.created) return 1;
            if (b.created < a.created) return -1;
            return 0;
          });
  },
  selectContent: function(cid, scrollWith) {
    PD.history = {}; // clear any history stuff
    PD.loadingId = cid;
    PD.contentId = false;
    PD.showCenterView(PD.Constants.VIEWS.SELECTED_POST);
    // show tutorial?
    if ((!PA.user.config.seen_message || !PA.user.config.seen_message.exist('tutorial')) && $('#tutorialPage01').length > 0)
      $.fancybox({href: '#tutorialPage01',hideOnOverlayClick: false,padding:0,showCloseButton:0,enableEscapeButton:0,transitionIn:'none',transitionOut:'none'});
    PA.call_pj("content.get", {cid:cid, nid:PD.networkId}, $("#SelectedPostPanel"),
      function(content, aid) {
        // sort content history correctly
        if (content.history) {
          content.history = PD.sortHistory(content.history);
        }

        // if edit is in place, cancel it
        if (PD.loading) PD.loadProgress(7);
        PD.selectShowContent(content, cid, scrollWith);
        if (PA.staticContent){ //if tutorial log
          PA.trackEvent(true, "tutorial_question/"+content.history[0].subject, '/splash/');
        }
        //PD.contentCache[cid] = content;
        //PD.contentCache[content.id] = content;
        if (PD.loading) PD.loadProgress(10);
        PA.push_data.t2 = content.t;
        PA.push_data.o2 = content.id;
        if (PA.pushCurrent) {
          var newT1 = content.t - 5000;  // subtract 5 seconds for push servers not to reload page
          if (newT1 > PA.push_data.t1)
            PA.push_data.t1 = newT1;
        }
        PA.push_data.id++;
        var cur_id = PA.push_data.id;
        // init push
        setTimeout(function(){
          // only init push if user is still viewing this question
          if (cur_id == PA.push_data.id) {
            PA.initPush();
          }
        }, 5000); // wait 5 seconds
    }, function(err) {
      //alert(err);
        if (PD.feed && PD.feed.length > 0 && cid != PD.feed[0].id)
          PD.selectContent(PD.feed[0].id);
    });
    return false;
  },
  scrollFeedToSelected: function() {
    if (PD.contentId) {
      $("#" + PD.feedElementID).find('.scrollable').scrollTop(0);
      var off = $('#' + PD.contentId).offset();
      if (off)
        $("#" + PD.feedElementID).find('.scrollable').scrollTop(off.top - 250);
    }
  },
  filterFeed: function(filter, isTag) {
    PD.search_feed = null;
    PD.showHidden = false;
    if (!filter) {
      PD.manualFilter = null;
      PD.feedFilter = null;
      $('#filter-show-all').attr('checked', true);
      $('#question-feed-filter-buttons').children().removeClass('active');
      $('#filter-show-all-label').addClass('active');
      PD.searchQuery = '';
      PD.setNewFeed(PD.feed);
      if (!$('#search-box').hasClass('placeholder')) {
        $('#search-box').val('');
      }
      $('#clear-search-button').hide();
      PD.scrollFeedToSelected();
      //if (PA.user.config && PA.user.config.hide_feed)
      //  PD.hideFeed();
      return false;
    }
    if (PA.staticContent && isTag) {
      filter = filter.toLowerCase();
      $('#search-box').removeClass('placeholder');
      $('#search-box').val('tag:' + filter);
      PD.feedFilterTag = filter;
      if (PD.feed && PD.feed.length > 0)
        PD.createFeed(PD.feed);
      $("#" + PD.feedElementID).find('.scrollable').scrollTop(0);
      return false;
    }
    var manualFilters = {'good_question':'Instructor-marked Good Questions', 'unread':'Unread Posts',
      'following':'Posts I Follow', 'unresolved':'Unresolved Questions', 'updated':'Updated Posts',
      'hidden':'Posts I hid'};
    PD.feedFilter = manualFilters[filter];
    PD.manualFilter = filter;
    PD.searchQuery = '';
    var params = {nid:PD.networkId};
    params[filter] = 1;
    if (PA.staticContent) {
      PD.createFeed(PD.feed);
      $("#" + PD.feedElementID).find('.scrollable').scrollTop(0);
      return false;
    }
    PA.call_pj("network.filter_feed", params, $('#question-feed-questions'), function(result){
      if (result.feed) {
        PD.search_feed = result.feed.sort(function(a,b){
          if (b.updated > a.updated) return 1;
          if (b.updated < a.updated) return -1;
          return 0;
        });
        if (filter == 'hidden') PD.showHidden = true;
        PD.createFeed(PD.search_feed);
        PD.autoSearch = false;
      }
    }, function(err) {
      alert(err);
      PD.autoSearch = false;
    });
  },
  doSearch: function(str) {
    PD.searchQuery = str;
    if (!str || str == "Search or post a question...")
      return PD.filterFeed('');
    if (str.length < 2 && !str.match("^\\d+$")) {
      PD.autoSearch = false;
      return;
    }
    $('#searchErrorMessage').hide();
    $('#searchOkMessage').show();
    //var block =  $("#" + PD.feedElementID).find('.scrollable');
    PA.call_pj("network.search", {nid:PD.networkId, query:str}, 1, function(result){
      PD.feedFilter = null;
      PD.search_feed = result.sort(function(a,b){
        if (b.updated > a.updated) return 1;
        if (b.updated < a.updated) return -1;
        return 0;
      });
      //PD.displaySearchTooltip(1,PD.search_feed.length);
      PD.createFeed(PD.search_feed);
      if ($('#search-box').val() != PD.searchQuery)
        setTimeout(function(){PD.doSearch($('#search-box').val());}, 500);
      else
        PD.autoSearch = false;
    }, function(err) {
      //alert(err);
      PD.autoSearch = false;
    });
    return false;
  },
  doAutoSearch: function(str) {
    $('#search-box').val(str);
    $('#search-box').removeClass('placeholder');
    $('#clear-search-button').show();
    $('#search-box').trigger("keyup");
  },
  displaySearchTooltip: function(showNum, numDataReturned) {
  	// showNum:
  	//   0: User notified to type question
  	//   1: Tooltip shows number of similar results
  	//   2: User notified their question is too short
    $sT = $("#searchTooltip");
    if (showNum==1) {
      $sT.removeClass().addClass('searchTooltipGreen');
      $sT.html("Found <strong>"+numDataReturned+"</strong> similar questions.");
    } else if (showNum==0) {
      $sT.removeClass().addClass('searchTooltipRedNormal');
      $sT.html("First enter your question summary in the text box, we'll look for similar posts. If you don’t find your question, ask a new one.");
    } else if (showNum==-1) {
      $sT.removeClass().addClass('searchTooltipRed');
      $sT.html("Search is not supported for this class");
    } else {
      $sT.removeClass().addClass('searchTooltipRed');
      $sT.html("Your question is too short.");
    }
    if (!PD.searchTooltipVisible) {
      PD.searchTooltipVisible = true;
      $sT.show().fadeTo(500,1.0);
      PD.searchTooltipTimeout = window.setTimeout("$('#searchTooltip').stop(true,true).fadeTo(500,0.0)",7000);
      PD.searchTooltipVarTimeout = window.setTimeout("PD.searchTooltipVisible = false; $('#searchTooltip').hide();",7500);
    }
  },
  doPost: function(override) {
    if (PD.isInst){
      $('.postQuestionTab').removeClass('selected');
      $('.postNoteTab').addClass('selected');
      $('#NewPostPanel').addClass('note');
    }
    if (needCaptcha(PD.doPost)) return false;
    $('#question-title-length').hide();
    if (!$('#NewPostPanel').hasClass('poll'))
      $('.hideForPoll').show();
    if (PD.selectedNetwork.anonymity == "no")
      $('#question-anonymity-dropdown').hide();
    $('#new-question-anonymity').find('option').attr('disabled', false);
    //$('#new_question_dialog').jqmShow();
    var newQuestionSummary = null;
    if (!$('#search-box').hasClass('placeholder')) {
      if ($('#search-box').val() != '' && $('#search-box').val().substr(0, 1) != '#' && $('#search-box').val().substr(0, 1) != '@') {
        if ($('#search-box').val().length < 4) {
          if (PD.feed.length > 30) {
            PD.displaySearchTooltip(2,0);
            return false;
          }
        } else {
          newQuestionSummary = $('#search-box').val().replace(/[^:\s]+:/g, "").replace(/"/g, "");
        }
      }
    } else {
      if (!PD.isInst && PD.feed.length > 30 && !override) {
        PD.displaySearchTooltip(0,0);
        return false;
      }
    }
    $('#searchTooltip').stop(true,true).fadeTo(20,0.0).hide();
    PD.UIElements.UISearch.exitSearchMode();
    PD.newPostPanel_Open();
    PD.pollChoices = [];
    $('#allPollChoices').html('');
    if (PD.isInst) {
      $('#pollVote4Div').show();
      $('#pollFullAnonymous').show();
      $('#pollAnonymousYes').attr('checked', true);
    } else {
      $('#pollVote4Div').hide();
      $('#pollFullAnonymous').hide();
      $('#pollAnonymousStud').attr('checked', true);
    }
    if (newQuestionSummary)
      PD.newPostPanel_SetPostSummary(newQuestionSummary);
    if (PD.postDraft && PD.postDraft.subject && PD.postDraft.subject.length > 0) {
      PD.newPostPanel_SetPostSummary(PD.postDraft.subject);
      $('#newQuestionDetails').val(PD.postDraft.text);
      $('#newQuestionDetailsWrap').removeClass("empty").addClass('active');
    }
    $('input[type="text"], textarea').blur();
    if (PA.user.is_public) {
      $('#new-question-name').focus();
    }
    return false;
  },
  addPollChoice: function() {
    var choice = $('#pollChoiceText').val().trim();
    if (choice.length == 0) return;
    choice = choice.replace(/<[^>]*>/g, "");
    PD.pollChoices.push(choice);
    PD.redrawPollChoices();
    $('#pollChoiceText').val('');
    $('#pollChoiceText').focus();
  },
  redrawPollChoices: function() {
    var html = "";
    for (var i = 0; i < PD.pollChoices.length; i++) {
      html += '<div class="defaultTagItem" style="display:block; line-height: 20px;">' +
                '<span class="tagInput" style="width: 200px; display: inline-block;">' + PD.pollChoices[i] +
                '</span>&nbsp;<a class="removePollChoice" onclick="return PD.removePollChoice(' + i + ');">Remove</a></div>';
    }
    $('#allPollChoices').html(html);
  },
  removePollChoice: function(i) {
    if (i < PD.pollChoices.length)
      PD.pollChoices.splice(i, 1);
    PD.redrawPollChoices();
    return false;
  },
  getTopTags: function() {
    var noTags = {
      'private':              true,
      'instructor-note':      true,
      'instructor-question':  true,
      'unanswered':           true,
      'pin':                  true
    };
    // build array of all tags in class
    allTags = {}
    // first look through feed
    PD.feed.forEach(function(item) {
      item.tags.forEach(function(tag) {
        if (!noTags[tag])
          allTags[tag] = true;
      });
    });
    // then through category tags
    if (PD.selectedNetwork.special_tags && PD.selectedNetwork.special_tags.length > 0) {
      PD.selectedNetwork.special_tags.forEach(function(specialTag) {
        if (typeof(specialTag) == "object") {
          if (Math.floor(specialTag.nr) == 1) {
            allTags[specialTag.name] = true;
          } else {
            for (var i = 1; i <= Math.floor(specialTag.nr); i++) {
              allTags[specialTag.name + i] = true;
            }
          }
        }
      });
    }
    // then through any topic tags
    if (PD.selectedNetwork.topics && PD.selectedNetwork.topics.length > 0) {
      PD.selectedNetwork.topics.forEach(function(topicTag) {
        if (typeof(topicTag) == "string") {
          allTags[topicTag] = true;
        }
      });
    }
    // finally build array and sort
    PD.allTags = [];
    for (var tag in allTags)
      PD.allTags.push(tag);
    PD.allTags.sort();
  },
  // today - beginning of today; this_week - beginning of this week
  getDateDiffBucket: function(target, today, this_week, when) {
    if (target >= today) return "Today";
    if (target >= today - 24 * 60 * 60 * 1000) return "Yesterday";
    if (target >= this_week) return "This week";
    if (target >= this_week - 7 * 24 * 60 * 60 * 1000) return "Last week";
    var start = new Date(when.getTime() - when.getDay() * 24 * 60 * 60 * 1000);
    var end = new Date(start.getTime() + 6 * 24 * 60 * 60 * 1000);
    return "Week " + (start.getMonth() + 1) + "/" + start.getDate() + " - " + (end.getMonth() + 1) + "/" + end.getDate();
  },

  // when whole feed is feched, this will be called to show the feed
  createFeed: function(feed) {
    //if (typeof(console) != 'undefined') console.log("creating feed of length " + PD.feed.length);
    var createFeedStart = (new Date()).getTime();
    var feedHTML = '';
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    PD.today = today;
    var this_week = new Date(today.getTime() - today.getDay() * 24 * 60 * 60 * 1000);
    today = today.getTime();
    this_week = this_week.getTime();
    var item;
    //$('div.tipsy').remove(); // remove old tipsy messages
    // we want to show "Today", "Yesterday", "This week", "Last week" and "Older"
    var lastBucket = "";
    var dateType = -1;
    var need_titles = true;
    if (!PD.search_feed) {
      //PD.notifications = [];
      //PD.subjects = {};
      if (PA.user.feed_width && $('#PageFeed').width() > PA.user.feed_width) {
        animateFeedToWidth(PA.user.feed_width);
        $('#searchTooltip').stop(true,true).fadeTo(500,0.0);
        clearTimeout(PD.searchTooltipTimeout);
        clearTimeout(PD.searchTooltipVarTimeout);
        PD.searchTooltipVarTimeout = window.setTimeout("PD.searchTooltipVisible = false;$('#searchTooltip').hide();",500);
      }
      if (PA.user.config) showFeedDetails(PA.user.config.feed_details);
    }
    PD.feedDateTypes = {};
    var shown = 0;
    var lastOpen = true;
    var selContentIn = false;
    PD.bid = 0;
    var pinned = "";
    for (var i = 0; i < feed.length; i++) {
      item = feed[i];
      if (!item) continue;
      if (PA.staticContent && (PD.manualFilter || PD.feedFilterTag)) {
        if (PD.feedFilterTag) {
          if (!item.tags) continue;
          var found = false;
          for (var j = 0; j < item.tags.length; j++) {
            if (item.tags[j].indexOf(PD.feedFilterTag) == 0) {
              found = true;
              break;
            }
          }
          if (!found) continue;
        }
        if (PD.manualFilter == 'good_question' && !item.tag_good_prof) continue;
        if (PD.manualFilter == 'unread' && !item.is_new) continue;
        if (PD.manualFilter == 'unresolved' && !item.no_answer && !item.no_answer_followup) continue;
        if (PD.manualFilter == 'follow' && !item.book) continue;
        if (PD.manualFilter == 'updated' && item.main_version <= item.version) continue;
      }
      if (!item.updated) item.updated = item.created; //NEED TO DO THIS??
      if (!(item.updated instanceof Date)) {
        var dt = new Date();
        dt.setISO8601(item.updated);
        item.updated = dt;
      }
      var bucket = PD.getDateDiffBucket(item.updated.getTime(), today, this_week, item.updated);
      if (dateType < 0)
        dateType = PD.getDateType(bucket);
      if (PA.staticContent && PA.staticContent != "demo" && bucket != "Today") bucket = "Questions";
      if (bucket != lastBucket && need_titles && !(item.tags && item.tags.exist("pin"))) {
        var open = true;
        if (shown > 50 && !PD.search_feed) {
          open = false;
        }
        var start_css;
        var arrow;
        lastOpen = open;
        PD.bid++;
        if (PD.feedBuckets['bucket_' + PD.bid] == 1) open = false;
        if (PD.feedBuckets['bucket_' + PD.bid] == 2) open = true;
        if (open) {
          start_css = "start_open";
          arrow = "&#9662;";
        } else {
          start_css = "start_closed";
          arrow = "&#9656;";
        }
        if (lastBucket.length > 0) feedHTML += '</div>';
        //var id = "bucket_" + bid;
        //feedHTML += '<div class="question_group"><div title="' + bucket + '" onclick="PD.toggleBucket(' + "'" + id + "'" + ')" id="' + id + '" class="' + start_css + ' header_bar' + (PD.compactFeed ? '_compact' : '') + '"><span>' + arrow + ' ' + bucket + '</span></div><ul id="bucket_' + bid + '-item-list" class="item-list-in-bucket">';
        feedHTML += '<div class="question_group">'
        feedHTML += PD.bucketHeaderHTML(bucket, PD.bid, start_css, arrow);
        feedHTML += '<ul id="bucket_' + PD.bid + '-item-list" class="item-list-in-bucket">';
        PD.bucketIds[bucket] = 'bucket_' + PD.bid; //keep mapping of bucket name to id
        lastBucket = bucket;
        dateType = PD.getDateType(bucket);
      }
      if (item.id == PD.contentId || item.id == PD.loadingId || item.nr == PD.loadingId) selContentIn = PD.bid;
      if (lastOpen) shown++;
      var itemHTML = PD.createFeedItem(item, dateType);
      if (item.tags && item.tags.exist("pin")) {
        pinned += itemHTML;
      } else
        feedHTML += itemHTML;
    }




    //feedHTML += this.createFeedItem(feed[10]);
    if (lastBucket.length > 0)
      feedHTML += '</ul></div>';
    if (pinned.length > 0) {
      var pinnedHTML = '<div class="question_group">';
      //feedHTML = '<div class="question_group"><div title="Pinned" id="bucket_pin" onclick="PD.toggleBucket(\'bucket_pin\')" class="start_open header_bar"><span>&#9662; Pinned</span></div><ul id="bucket_pin-item-list" class="item-list-in-bucket">' + pinned + '</ul></div>' + feedHTML;
      pinnedHTML += PD.bucketHeaderHTML("Pinned", "pin", "start_open", '&#9662;');
      pinnedHTML += '<ul id="bucket_pin-item-list" class="item-list-in-bucket">' + pinned + '</ul></div>'
      feedHTML = pinnedHTML + feedHTML;
      PD.bucketIds['Pinned'] = "bucket_pin";
    }
    if (PD.search_feed || PD.feedFilter) {
      feedHTML = '<div id="questionFeedFilterMessage">' +
                    '<strong>Filtering by:</strong> <em>' + (PD.searchQuery ? PD.searchQuery : PD.feedFilter) + '</em>' +
                    '<div class="clearSearchBoxLink" onclick="$(\'#filter-show-all\').click();return true;"></div>' +
                 '</div>' + feedHTML;
    }
    var oldTop = $("#" + PD.feedElementID).find('.scrollable').scrollTop();
    document.getElementById('question-feed-questions').innerHTML = feedHTML;

    $("#" + PD.feedElementID).find('.scrollable').scrollTop(oldTop);
    if (selContentIn) {
      $('#bucket_' + selContentIn).removeClass('start_closed').addClass('start_open');
    }
    if (PD.contentId) {
	    $('#PageFeed').find('li.selected').removeClass('selected');
	    $('#' + PD.contentId).addClass('selected');
      if (!PD.searchQuery) {
        if (PD.parentId)
          $('#' + PD.parentId).addClass('selected');
      }
    }
	  //No more toggle binding here. Done in bucket html with onclick=
    $('#PageFeed .start_closed').closest('.question_group').find('.item-list-in-bucket').hide();
    if (PA.user.config && !PA.user.config.no_tips)
      PD.showTutorial();
    else
      PD.showNoTutorialTipsy();
      //$('.main .snippet').css("max-height", DRAG.snippetHeight);
    $('#PageFeed .feedItem:not(.ui-droppable)').each(function() {
      PD.popularTagsBar_activateTagsDroppable($(this));
    });

    if(PD.moreFeed) PD.displayShowAll();
  },

  bucketHeaderHTML: function(bucketName, bucketNumber, start_css, arrow){
    var id = "bucket_" + bucketNumber;
    var html = '<div title="' + bucketName + '" onclick="PD.toggleBucket(' + "'" + id + "'" + ')" id="' + id + '" class="' + start_css + ' header_bar' + (PD.compactFeed ? '_compact' : '') + '"><span>' + arrow + ' ' + bucketName + '</span></div>';
    return html;
  },

  /*
  *  Adds new feed items to the bottom of the feed.
  *  Always assumes that these new items belong at the bottom of the feed
  */
  addToFeedBottom: function(items){
    if(items == null) return;

    //don't add the same item twice, if we already have it
    for(var i = 0; i<items.length; i++){
      if($('#' + items[i].id).length != 0){
        items.splice(i,1);
        i--;
      }
    }

    //Sort items from new to old
    var sortBy = "updated";
    items = items.sort(function(a,b){
      if (b[sortBy] > a[sortBy]) return 1;
      if (b[sortBy] < a[sortBy]) return -1;
      return 0;
    });


    PD.feed = PD.feed.concat(items);
    PD.getTopTags();
    if (PD.searchQuery) return;

    var buckets = PD.bucketize(items);
    if(buckets == null){ // we changed days. need to rebuild feed
      PD.createFeed(PD.feed);
      return;
    }

    if(typeof(PD.bid) == 'undefined') PD.bid = 10000;  // not sure why it would ever be undefined, but this should be safe for avoiding id collisions

    var html = '';
    for(var i = 0; i<buckets.length; i++){
      if(PD.bucketIds[buckets[i]['name']]){ //bucket already exists, put these items at the end of it
        PD.addToBucketBottom(buckets[i]['items'], buckets[i]['name']);
        continue;
      }

      //create new bucket
      var bucketNumber = ++PD.bid;
      html += PD.newBucketHTML(buckets[i], bucketNumber);
      PD.bucketIds[buckets[i]['name']] = 'bucket_' + bucketNumber;
    }


    $('#question-feed-questions').append(html);

    PD.feedItem_AcivateTagsDroppable();
  },


  addFeedTop: function(items){


  },

  /*
  *  Will add new feed items to the feed under normal circumstances
  *  Returns false if the feed needs to be rebuilt
  *
  *  Assumes that the item is not already present in the feed
  *
  *  Returns false if something went wrong. If you get false, you need to rebuild the feed.
  *  Guaranteed to add the new item to PD.feed, even if the new item can't be redered.
  */
  addNewFeedItem: function(item){

    if(item.tags && item.tags.exist("pin")){
      PD.spliceFeed(item);
      PD.addToBucketTop(item, "Pinned"); //make this top
      return true;
    }

    // Figure out what buckets labels the current item and the one below it have
    // If the labels are the same, just insert the current item above the next one in the same bucket
    // If not, try putting the item in the previous bucket
    var itemAfter = PD.spliceFeed(item);

    if(PD.searchQuery) return false;

    if(itemAfter == null) return false; // something's not right if you get pushed a super old question
    var itemAfterBucketized = PD.bucketize(itemAfter);
    if(itemAfterBucketized == null) return false; //check whether date changed
    var itemAfterBucket = itemAfterBucketized[0]['name'];

    var itemBucketized = PD.bucketize(item);
    if(itemBucketized == null) return false;
    var itemBucket = itemBucketized[0]['name'];

    if(itemBucket == itemAfterBucket){
      var html = PD.createFeedItem(item, PD.getDateType(itemBucket));
      $('#' + itemAfter.id).before(html);
    } else { //item must go in previous bucket
      if(PD.bucketIds[itemBucket]){ //bucket exists
        PD.addToBucketBottom(item, itemBucket)
      } else { //bucket doesn't exist already
        return false; //just rebuild feed
      }
    }
    PD.feedItem_AcivateTagsDroppable();
    return true;
  },

  itemAfter: function(item){
    for(var i = 0; i < PD.feed.length; i++){
      if(item.updated > PD.feed[i].updated) return PD.feed[i];
    }
    return null;
  },

  /*
  *  Adds an item to PD.feed in proper order
  *  Returns the feed item immediately after the newly inserted item.
  *  Steps down the feed from top to bottom so will be most effecient on new items.
  */
  spliceFeed: function(item){
    for(var i = 0; i < PD.feed.length; i++){
      if(item.updated >= PD.feed[i].updated){
        if(item.id == PD.feed[i].id) return null;
        PD.feed.splice(i,0,item);
        return PD.feed[i+1];
      }
    }
    PD.feed.push(item);
    return null;
  },

  getDateType: function(bucketLabel){
    dateType = 2;
    if (bucketLabel == "This week" || bucketLabel == "Last week")
      dateType = 1;
    if (bucketLabel == "Today" || bucketLabel == "Yesterday")
      dateType = 0;
    return dateType;
  },

  /*
  *  The next two functions add either a single feed item to the top of a bucket,
  *  or an array of feeditems to the bottom of a bucket.
  *
  *  The first is useful for populating a newly pushed feed item while the second is
  *  good for loading more feed items dynamically.
  */
  addToBucketTop: function(feedItem, bucketName){
    var bucketId = PD.bucketIds[bucketName];
    var $currentItems = $('#' + bucketId + '-item-list');
    var html = PD.createFeedItem(feedItem, PD.getDateType(bucketName));
    $currentItems.prepend(html);
  },
  addToBucketBottom: function(feedItems, bucketName){
    if(typeof(feedItems.length) != "number") feedItems = [feedItems];
    //assemble the new feed item html
    var dateType = PD.getDateType(bucketName);
    var html = "";
    for(var i=0; i<feedItems.length; i++){
      html += PD.createFeedItem(feedItems[i], dateType);
    }
    //insert the html into the bucket
    var bucketId = PD.bucketIds[bucketName];
    var $currentItems = $('#' + bucketId + '-item-list');
    $currentItems.append(html);
  },

  /*
  *  Make the html for a bucket holding the specified data
  */
  newBucketHTML: function(bucket, bucketNumber, open){
    open = (typeof(open) == 'undefined' || open == null) ? false : open;
    var arrow = "&#9656;"; //closed
    var start_css = "start_closed";
    var display = "none";
    if(open){
      arrow = "&#9662;";
      start_css = "start_open";
      display = "block";
    }

    var html = '<div class="question_group">';
    html += PD.bucketHeaderHTML(bucket['name'], bucketNumber, start_css, arrow);
    html += '<ul id="bucket_' + bucketNumber + '-item-list" class="item-list-in-bucket" style="display: ' + display + ';">'

    for(var i = 0; i < bucket['items'].length; i++){ //generate html for each item
      html += PD.createFeedItem(bucket['items'][i], PD.getDateType(bucket['name']));
    }

    html += '</ul></div>';
    return html;
  },

  /*
  *  Takes a flat array of feed items and sorts them into buckets
  *  Returns an array of buckets where each bucket is a map
  *  that contains 'name' - the label for the bucket and 'items' - items that belong in the bucket
  *
  *  Returns null if the day has changed since the last time the feed was built. This means you should rebuild the feed.
  */
  bucketize: function(items){
    if(typeof(items.length) != "number") items = [items]; //make it into an array, if it's not already
    var now = new Date();
    var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if(PD.today.getTime() - today.getTime() != 0) return null; //if we pass into the next day, the entire feed needs to be rebuilt
    var this_week = new Date(today.getTime() - today.getDay() * 24 * 60 * 60 * 1000);
    today = today.getTime();
    this_week = this_week.getTime();

    var buckets = [];
    var curBucket = {name:null};
    var pinned = {name:"Pinned",items:[]};
    for(var i = 0; i<items.length; i++){
      var item = items[i];
      if (item.tags && item.tags.exist("pin")){
        pinned['items'].push(item);
        continue;
      }
      var bucketName = PD.getDateDiffBucket(item.updated.getTime(), today, this_week, item.updated);
      if(bucketName == curBucket['name']){
        curBucket['items'].push(item);
      } else { //goes in the next bucket
        curBucket = new Object();
        buckets.push(curBucket);
        curBucket['name'] = bucketName;
        curBucket['items'] = [];
        curBucket['items'].push(item);
      }
    }
    if(pinned['items'].length > 0){
      buckets = [pinned].concat(buckets);
    }
    return buckets;
  },

  toggleBucket: function(bucketId){
    var $bucket = $('#' +  bucketId);
    if($bucket.closest('.question_group').find('.item-list-in-bucket').is(':visible')){
      PD.feedBuckets[$bucket.attr('id')] = 1;
      $bucket.find('span').html('&#9656;' + $bucket.find('span').html().substring(1));
      $bucket.closest('.question_group').find('.item-list-in-bucket').hide();
    } else {
      PD.feedBuckets[$bucket.attr('id')] = 2;
      $bucket.find('span').html('&#9662;' + $bucket.find('span').html().substring(1));
      $bucket.closest('.question_group').find('.item-list-in-bucket').show();
    }
  },
  toggleHoverEnable: function() {
    $('#hoverButton .icon').click(function() {
      $('#hoverButton').toggleClass('hoverEnabled').toggleClass('active');
      if($('#hoverButton').hasClass('hoverEnabled')) {
        if (!PA.user.config.hide_feed) {
          if (!PA.user.config || !PA.user.config.seen_message ||
            !PA.user.config.seen_message.exist("hide_feed_msg")) {
            $('#feedShowTooltip').hide();
            $('#feedHideTooltip').show().fadeTo(500,1.0);
            PD.searchTooltipVisible = true;
            PD.searchTooltipTimeout = window.setTimeout("$('#feedHideTooltip').stop(true,true).fadeTo(500,0.0)",7000);
            PD.searchTooltipVarTimeout = window.setTimeout("PD.searchTooltipVisible = false; $('#feedHideTooltip').hide();",7500);
          }
          PA.call_pj('user.set', {stat:'hide_feed', val:'yes'}, 1);
          PA.user.config.hide_feed = 'yes';
          $('#hoverButton').attr('tutorialw', 'Disable Auto-hide');
        }
      } else {
        if (!PA.user.config || !PA.user.config.seen_message ||
          !PA.user.config.seen_message.exist("hide_feed_msg")) {
          $('#feedHideTooltip').hide();
          $('#feedShowTooltip').show().fadeTo(500,1.0);
          PD.searchTooltipVisible = true;
          PD.searchTooltipTimeout = window.setTimeout("$('#feedShowTooltip').stop(true,true).fadeTo(500,0.0)",7000);
          PD.searchTooltipVarTimeout = window.setTimeout("PD.searchTooltipVisible = false; $('#feedShowTooltip').hide();",7500);
        }
        PA.call_pj('user.unset', {stat:'hide_feed'}, 1);
        PA.user.config.hide_feed = null;
        $('#hoverButton').attr('tutorialw', 'Enable Auto-hide');
      }
    });
  },
  privatePostIncognito: function() {
    if($('#question').hasClass('private')){
      $('#questionBannerTitle').prepend('private ');
      $('#mainScrollPanelWrapper .scrollable').css({'background':'#707D8D'});
      //$('#PageCenter .mainPanel .subregion.private, #PageCenter .mainPanel #responsesRegion').css({'background':'#f6f7f9'});
      $('.subregionMiscItem.privatePostMessage').show();
      $('#privatePoster').html(PA.getUserName(PD.content.change_log[0].uid, PD.content.change_log[0].anon));
      $('li.public_toggle').hide();
    } else{
      $('#questionBannerTitle').text().replace('private ','');
      $('#mainScrollPanelWrapper .scrollable').css({'background':'#d7dbe0'});
      $('#PageCenter .mainPanel .subregion.private, #PageCenter .mainPanel #responsesRegion').css({'background':'white'});
      $('.subregionMiscItem.privatePostMessage').hide();
      $('li.public_toggle').show();
    }
  },
  hoverFeed: function() {
    $('#PageCenterArea').mouseenter(function() {
      PD.hideFeed();
    });
    $('#PageFeed').mouseenter(function() {
      PD.showFeed();
    });
    $('#PageTopBar').mouseenter(function() {
      if(!PD.UIElements.UISearch.inSearchMode()){
        PD.showFeed();
      }
    });
  },
  hideFeed: function() {
    if($('#hoverButton').hasClass('hoverEnabled') && !PD.UIElements.UISearch.inSearchMode() && !$('#PageTopbar').is(':hover')){
      $('#PageFeed').css({'left':'-315px','width':'350px'});
      $('#PageCenter').css('left', '35px');
      $('#PageBottomBar').css('left', '35px');
      $('#HoverMessageArea').show().css('left', '315px');
    }else if($('#hoverButton').hasClass('hoverEnabled') && PD.UIElements.UISearch.inSearchMode() && !$('#PageCenter').is(':hover')){
      $('#PageFeed').css({'left':'-515px','width':'550px'});
      $('#PageCenter').css({'left':'35px'});
      $('#PageBottomBar').css({'left':'35px'});
      $('#HoverMessageArea').show().css({'left':'515px'});
    } else if($('#hoverButton').hasClass('hoverEnabled') && PD.UIElements.UISearch.inSearchMode() && $('#PageCenter').is(':hover')){
      $('#PageFeed').css({'left':'0px','width':'350px'});
      $('#PageCenter').css({'left':'350px'});
      $('#PageBottomBar').css({'left':'350px'});
      $('#HoverMessageArea').css({'left':'-35px'});
    }
  },
  showFeed: function() {
    if($('#hoverButton').hasClass('hoverEnabled') && !PD.UIElements.UISearch.inSearchMode() && !$('#PageTopbar').is(':hover')){
      $('#PageFeed').css({'left':'0px','width':'350px'});
      $('#PageCenter').css({'left':'350px'});
      $('#PageBottomBar').css({'left':'350px'});
      $('#HoverMessageArea').css({'left':'-35px'});
    } else if($('#hoverButton').hasClass('hoverEnabled') && PD.UIElements.UISearch.inSearchMode()){
      $('#PageFeed').css({'left':'0px','width':'550px'});
      $('#PageCenter').css({'left':'550px'});
      $('#PageBottomBar').css({'left':'550px'});
      $('#HoverMessageArea').css({'left':'-35px'});
    }
  },
  resetShowFeed: function() {
    $('#PageFeed').show().css({'left':'0px','width':'550px'});
    $('#PageCenter').removeClass('feedHidden').css({'left':'550px'});
    $('#PageBottomBar').removeClass('feedHidden').css({'left':'550px'});
  },
  toggleStats: function() {
    if ($('#PageBottomBar').is(':visible')) {
      PD.hideStats();
      PA.call_pj('user.set', {stat:'hide_stats', val:'yes'}, 1);
      PA.user.config.hide_stats = 'yes';
    } else {
      PD.showStats();
      PA.call_pj('user.unset', {stat:'hide_stats'}, 1);
      PA.user.config.hide_stats = null;
    }
  },
  togglePopularTags: function() {
    if ($('#PageMain').hasClass('hasPopularTagsBar')) {
      PD.hidePopularTags();
    } else {
      PD.showPopularTags();
    }
  },
  showFilterActions: function() {
    $('.bulk.actions').show();
    $('.filter.arrow.right').hide();
    $('.filter.arrow.left').show();
    $('#PageCenter .mainPanel #question-history').css({'left':'84px'});
  },
  hideFilterActions: function() {
    $('.bulk.actions').hide();
    $('.filter.arrow.right').show();
    $('.filter.arrow.left').hide();
    $('#PageCenter .mainPanel #question-history').css({'left':'0'});
  },
  hidePopularTags: function() {
    $('#PageMain').removeClass('hasPopularTagsBar');
    $('.barButton.iconButton.showTagsPanel').removeClass('active');
    $('.barButton.iconButton.showTagsPanel').attr('tutorialw', 'Show Popular Tags');
  },
  showPopularTags: function() {
    $('#PageMain').addClass('hasPopularTagsBar');
    $('.barButton.iconButton.showTagsPanel').addClass('active');
    $('.barButton.iconButton.showTagsPanel').attr('tutorialw', 'Hide Popular Tags');
  },
  hideStats: function() {
    $('#PageBottomBar').hide();
    //$('#PageBottomBar #averageResponseTimeWrapper').hide();
    //$('#PageBottomBar #overview-stats').hide();
    //$('#PageBottomBar #special-mentions').hide();
    //$('#PageBottomBar #tutorial').hide();
    $('#PageCenter').addClass('statsHidden');
  },
  showStats: function() {
    $('#PageBottomBar').show();
    //$('#PageBottomBar #averageResponseTimeWrapper').show();
    //$('#PageBottomBar #overview-stats').show();
    //$('#PageBottomBar #special-mentions').show();
    //$('#PageBottomBar #tutorial').show();
    $('#PageCenter').removeClass('statsHidden');
  },


  /********************************************************************
                            Feed Item Creation
   ********************************************************************/

  /*
   * Private Function: PD.createFeed_activateFeedItems
   * =================================================
   * This functiona activates all event listeners for each feed item.
   */
  createFeed_activateFeedItems: function() {
    PD.feedItem_ActivateClickEvents();
    PD.feedItem_ActivateHoverEvents();
    PD.feedItem_ActivateDropdownMenus();
  },

  /*
  *  Enables drag and drop tags on any feed items that aren't already droppable
  */
  feedItem_AcivateTagsDroppable: function(){
    $('#PageFeed .feedItem:not(.ui-droppable)').each(function() {
      PD.popularTagsBar_activateTagsDroppable($(this));
    });
  },

  /*
   * Private Function: PD.feedItem_ActivateClickEvents
   * =================================================
   * This function activates click events for all feed items. **This
   * function does not need to be called again when a feed item is
   * updated.**
   */
  feedItem_ActivateClickEvents: function() {
    var $feedContent = $('#question-feed-questions');
    var $targets     = $feedContent.find('.feedItem');

    /*$targets.live('click', function(e) {
      // If the user clicks the unread indicator when the question is "read"...
      if ($(e.target).closest('.unreadIndicator').size() > 0 && !$(this).hasClass('unread')) {
        if (!$(this).hasClass('unread')) {
          $(this).addClass('unread');
          PD.markUnread($(this).attr('id'));
        }
      }

      // Else if the user clicks anywhere except within the dropdown selector...
      else if ($(e.target).closest('.UIDropdownSelector').size() == 0) {
        $(this).removeClass('unread');
        $feedContent.find('.selected').removeClass('selected');
        PD.selectContent($(this).attr('id'));
        console.log("in content");
      }
    });*/

		return false;
	},

  feedItem_click: function(ev, that) {
    var e = ev;
    //var isIE = false;
    try {
      e.stopPropagation();
    } catch (error) {
      try {
        e = window.event;
        e.cancelBubble = true;
      } catch (error) {
      }
    }

    PD.focus = "feed_item";
    // If the user clicks the unread indicator when the question is "read"...
    if ($(e.target).closest('.unreadIndicator').size() > 0 && !$(that).hasClass('unread')) {
      if (!$(that).hasClass('unread')) {
        $(that).addClass('unread');
        PD.markUnread($(that).attr('id'));
      }
    }

    // Else if the user clicks anywhere except within the dropdown selector...
    else if ($(e.target).closest('.UIDropdownSelector').size() == 0) {
      $(that).removeClass('unread');
      $('#question-feed-questions').find('.selected').removeClass('selected');
      PD.selectContent($(that).attr('id'));
    }
  },


  /*
   * Private Function: PD.feedItem_ActivateHoverEvents
   * =================================================
   * This function activates hover events for all feed items.
   */
  feedItem_ActivateHoverEvents: function() {
    $('#PageFeed .title').live('mousemove', function (e) {
        var x = e.pageX - this.offsetLeft;
        var widthAllow = $(this).width() - 15;
        if ( x > widthAllow )
          $(this).removeClass('ellipses');
    });

    $('#PageFeed .title').live('mouseleave', function () {
        $(this).addClass('ellipses');
    });
  },

  /*
   * Private Function: PD.feedItem_ActivateDropdownMenus
   * ===================================================
   * Works with or without a parameter. If no parameter is passed, then
   * the function activates dropdown menus for all feed items. If a feed
   * item object is passed as a parameter, the function only activates
   * the dropdown menu for that feed item (this is used when a feed item
   * is updated, for example).
   */
  feedItem_ActivateDropdownMenus: function() {
    // Variables.
    var $feedContent = $('#question-feed-questions');
    var $targets     = $feedContent.find('.feedItem:not(.activated)') ;

    // Activate each dropdown menu individually.
    $targets.live('mouseenter', function() {
      PD.UIElements.UIDropdownSelector.initOne($(this).find('.UIDropdownSelector'), 'PD.feedItem_DropdownMenuCallback');
      $(this).addClass('activated');
    });
  },

  /*
   * Private Function: PD.feedItem_DropdownMenuCallback
   * ==================================================
   * This function is called any time a user selects an item from a feed
   * item's dropdown menu. It takes in the selected item as a jQuery
   * object and then references the enclosing feed item's ID to take the
   * appropriate action.
   */
  feedItem_DropdownMenuCallback: function($selectedItem) {
    // Variables.
    var postID = $selectedItem.closest('.feedItem').attr('id');
    var action = $selectedItem.attr('class');

    // Archive the post (from your feed).
    if (action == 'archiveAction') {
      PD.delFeedItem(postID);
    }
    // Unarchive the post (from your feed).
    else if (action == 'unarchiveAction') {
      PD.addFeedItem(postID);
    }
    // Mark the post unread.
    else if (action == 'markUnreadAction') {
      PD.markUnread(postID);
    }
    // Mark the post unread.
    else if (action == 'markReadAction') {
      PD.markUnread(postID, true);
    }

    // Mark the post as a duplicate of another.
    else if (action == 'markDuplicateAction') {
      alert('Mark Duplicate is coming soon!');
      //PD.enterDuplicate(postID);
    }

    // Report the post as spam.
    else if (action == 'reportSpamAction') {
      PD.reportSpam(postID);
    }

    // Delete the post (from everyone's feed).
    else if (action == 'deleteAction') {
      PD.deleteContent(postID);
    }

    // Make a private post public
    else if (action == 'makePublicAction') {
      PD.makePublic(postID);
    }

    // Make a public post private
    else if (action == 'makePrivateAction') {
      PD.makePrivate(postID);
    }
    /*
    // Pin post.
    else if (action == 'pinPost') {
      //PD.addFeedItem(postID);
    }
    // Unpin post
    else if (action == 'unpinPost') {
      //PD.addFeedItem(postID);
    }
    */
    return false;
  },

  /*
   * Private Function: PD.feedItem_Update
   * ====================================
   * This function should be called any time a feed item is updated. For
   * instance, it is called when a user selects a feed item or marks it
   * unread, and when a feed item has new unresolved followups or other
   * pieces of activity.
   */
  feedItem_Update: function(content) {
    var itemData = PD.createFeedItem_InnerHTML(content, PD.feedDateTypes[content.id]);

    var $feedItem = $("#" + content.id);
    if ($feedItem.size() > 0) {
      // Parse the new feed item data.
      var itemInnerHTML = itemData[PD.Constants.FEED_ITEM_DATA.INNER_HTML];
      var itemStatuses  = itemData[PD.Constants.FEED_ITEM_DATA.STATUSES];

      // Insert the new feed item data.
      $feedItem.html(itemInnerHTML);
      $feedItem.attr('class', 'feedItem ' + itemStatuses);

      // Select it, if necessary.
      if (content.id == PD.contentId || content.id == PD.parentId)
        $feedItem.addClass("selected");
    }

    if (PA.user.config && !PA.user.config.no_tips)
      PD.showTutorial();
    else
      PD.showNoTutorialTipsy();
    //$('div.tipsy').remove(); // remove old tipsy messages
    PD.events.fire("feed_change");
    PD.renderNotifications();
  },

  /*
   * Private Function: PD.createFeedItem
   * ===================================
   * This function constructs all of the HTML for a single feed item. It
   * handles the showing and hiding of all elements based on the state of
   * the associated content (i.e. if it has a students' response and/or
   * instructors' response, if it has new activity, if it is unread or
   * unanswered, if it has unresolved followups, etc.), so no additional
   * logic is needed on that front.
   */
  createFeedItem: function (content, dateType) {
    // Get the item data in the format: [INNER_HTML, STATUSES]
    var itemData = PD.createFeedItem_InnerHTML(content, dateType);

    // Parse the returned feed item data.
    var itemInnerHTML = itemData[PD.Constants.FEED_ITEM_DATA.INNER_HTML];
    var itemStatuses  = itemData[PD.Constants.FEED_ITEM_DATA.STATUSES];

    // Construct the feed item HTML.
    var itemHTML = '';
		itemHTML += '<li class="feedItem ' + itemStatuses + '" id="' + content.id + '" onclick="PD.feedItem_click(event, this)">';
    itemHTML += itemInnerHTML;
    itemHTML += '</li>';

    return itemHTML;
  },

  /*
   * Priavte function: PD.addNotifications
   * =====================================
   * Adds notifications from a given feed item into the notification queue
   * Refreshes notification drop-down
   */
  addNotifications: function(content) {
    var start = 0;
    if (content.version) start = content.version;
    if (!content.log || start >= content.log.length) return;
    // add all items from content.log into notification array; auto-sort?
    for (var i = start; i < content.log.length; i++) {
      if (content.log[i].n != "create") {
        content.log[i].cid = content.id;
        content.log[i].w = content.type;
        // check if we already have this item
        var have = false;
        for (var j = 0; j < PD.notifications.length; j++) {
          if (PD.notifications[j].t == content.log[i].t &&
            PD.notifications[j].cid == content.log[i].cid) {
            have = true;
            break;
          }
          if (PD.notifications[j].t < content.log[j].t) break;
        }
        if (!have)
          PD.notifications.push(content.log[i]);
      }
    }
    PD.subjects[content.id] = content.subject;
    PD.notifications.sort(function(a,b) {
        if (a.t > b.t) return -1;
        if (a.t < b.t) return 1;
        return 0;
      });
  },
  renderNotifications: function() {
    var top = $('#topbar-notifications');
    top.find(".UIMessageItem").remove();
    var last = top.find(".noItemsMessage");
    var big = $('#big-notification-list');
    big.find(".UIMessageItem").remove();
    var howManyNew = 0;
    var lastSeen = null;
    if (PA.user.config && PA.user.config.last_notif && PA.user.config.last_notif[PD.networkId])
      lastSeen = PA.user.config.last_notif[PD.networkId];
    // show top X on the top-bar and rest on the panel
    for (var i = 0; i < PD.notifications.length; i++) {
      var txt = PD.createSingleNotification(PD.notifications[i]);
      if (i < 6)
        last.before(txt);
      big.append(txt);
      if (!lastSeen || PD.notifications[i].t > lastSeen)
        howManyNew += 1;
    }
    if (!PA.user.config.last_notif && howManyNew == 0) howManyNew = 1;
    if (PD.notifications.length > 6)
      $('#see-all-notifications').show();
    else
      $('#see-all-notifications').hide();
    if (PD.notifications.length == 0)
      top.find('.noItemsMessage').show();
    else
      top.find('.noItemsMessage').hide();

    if (howManyNew > 0)
      $('#UserNotifications').find('.notificationBadge').html(howManyNew);
    else
      $('#UserNotifications').find('.notificationBadge').html("");
  },
  createSingleNotification: function(data) {
    var message = PD.recentActivityTemplates[data.n];
    if (message) message = message.replace(/%w/g, data.w);
    message = message + "<br/><span style='color:#999;'>" + PD.subjects[data.cid] + "</span>";
    var txt = "<li class='UIImageItem UIMessageItem clearFix' onclick=\"return PD.selectContent('" + data.cid + "');\">";
    txt += PA.getUserPic(data.u);
    txt += "<div class='text'><span class='UIUserListing'>" + PA.getUserName(data.u);
    txt += "<span class='dashSeparator'>&mdash;</span></span>";
    txt += "<span class='message'>" + message;
    if (data.t) txt += "<em class='date'>" + data.t.toRelativeTime() + "</em>";
    txt += "</span></div></li>";
    return txt;
  },
  /*
   * Private Function: PD.createFeedItem_InnerHTML
   * =============================================
   * This function constructs all of the inner HTML for a single feed item
   * (i.e. everything except the parent <li> tags). It should be called
   * whenever a given feed item is updated, as this ensures any and all
   * event listeners and bindings on the parent .feedItem will continue
   * to function as before.
   */
  createFeedItem_InnerHTML: function(content, dateType) {
    // Count the number of new activity notifications.
    content.changes = (content.version)
                    ? content.main_version - content.version
                    : content.main_version;
    if (content.changes < 0) {
      content.changes = 0;
    }

    // consider feed item for notification
    //if (content.book && !PD.search_feed) PD.addNotifications(content);

    // Construct component HTML regions.
    var itemStatuses = PD.createFeedItem_Statuses(content); // Keeps track of statuses such as unread, unanswered, note, etc.
    var previewsHTML = PD.createFeedItem_Previews(content); // HTML for the feed item's title and snippet
    var messagesHTML = PD.createFeedItem_Messages(content); // HTML for the feed item's messages (unresolved followups, IR-endorsed post, etc.)
    var dropdownHTML = PD.createFeedItem_Dropdown(content); // HTML for the feed item's dropdown menu
    var metadataHTML = PD.createFeedItem_Metadata(content, dateType); // HTML for the feed item's metadata elements (timestamp, icons, etc.)
    var tagsListHTML = PD.createFeedItem_TagsList(content); // HTML for the feed item's list of tags

    // Construct the feed item's complete inner HTML.
    var innerHTML = '';
    innerHTML += metadataHTML;
    innerHTML += '<div class="unreadIndicator"></div>';
    innerHTML += dropdownHTML;
    innerHTML += '<div class="content">';
    innerHTML += previewsHTML;
    innerHTML += tagsListHTML;
    innerHTML += messagesHTML;
    innerHTML += '</div>'; // END .content

    // Return the feed item data as an array.
    var feedItemData = [];
    feedItemData[PD.Constants.FEED_ITEM_DATA.INNER_HTML] = innerHTML;
    feedItemData[PD.Constants.FEED_ITEM_DATA.STATUSES]   = itemStatuses;
    return feedItemData;
  },

  /*
   * Private Function: PD.createFeedItem_Statuses
   * ============================================
   * This function contructs a string of pertinent CSS "status" classes for
   * the given piece of content. It should be called from
   * PD.createFeedItem_InnerHTML.
   */
  createFeedItem_Statuses: function(content) {
    var statuses = '';

    if (content.has_s)                  statuses += 'hasSR ';                           // SR
    if (content.has_i)                  statuses += 'hasIR ';                           // IR
    if (content.no_answer)              statuses += 'unanswered ';                      // Unanswered
    if (content.type == 'note')         statuses += 'note ';                            // Note
    if (content.type == 'poll')         statuses += 'poll ';                            // Poll
    if (content.tag_endorse_prof)       statuses += 'instructorEndorsedSR ';            // Instructor-Endorsed SR
    if (content.tag_good_prof > 0)      statuses += 'instructorEndorsedPost ';          // Instructor-Endorsed Post
    if (content.status == 'private')    statuses += 'private ';                         // Private
    if (content.no_answer_followup > 0) statuses += 'hasUnresolvedFollowups ';          // Unanswered Followups
    if (content.changes > 0 && !PA.user.is_public) statuses += 'hasNewActivity ';       // New Activity
    if (content.is_new && !PD.compactFeed && !PA.user.is_public) statuses += 'unread '; // Unread

    return statuses;
  },

  /*
   * Private Function: PD.createFeedItem_Previews
   * ============================================
   * This function constructs the HTML for the title and snippet of the
   * feed item for the given piece of content. It should be called from
   * PD.createFeedItem_InnerHTML.
   */
  createFeedItem_Previews: function(content) {
    // Remove troublesome items from the preview snippet.
    var snippetText = content.content_snipet;

    if (content.rank_debug) {
      snippetText = "(" + content.rank + ") " + snippetText;
    }
    var subject = content.subject;
    subject = subject.replace(/</g, "&lt;");
    subject = subject.replace(/>/g, "&gt;");
    snippetText = snippetText.replace(/<[^>]+>/g, "");
    snippetText = snippetText.replace(/___bold_start___/g, "<strong style='color:#222'>");
    snippetText = snippetText.replace(/___bold_end___/g, "</strong>");
    if (snippetText.indexOf("<script") >= 0 || snippetText.indexOf("PA.load(") == 0) snippetText = "";

    // Construct the preview text HTML.
    var previewsHTML = '';
    previewsHTML += '<div class="title ellipses">';
    if (content.has_attach)
      previewsHTML += '<div class="attachIcon"></div>';
    if (content.status == 'private')
      previewsHTML += '<span class="privateIcon">Private</span>';
    if (content.status != 'private' && content.tags.exist("instructor-note"))
      previewsHTML += '<span class="privateIcon" style="display:block;">Instr Note</span>';
    previewsHTML += subject;
    previewsHTML += '</div>';
    previewsHTML += '<div class="snippet">' + snippetText + '</div>';

    return previewsHTML;
  },

  /*
   * Private Function: PD.createFeedItem_Metadata
   * ============================================
   * This function constructs the HTML for the metadata (timestamp, icons,
   * new activity notification, etc.) of the feed item for the given piece
   * of content. It should be called from PD.createFeedItem_InnerHTML.
   */
  createFeedItem_Metadata: function(content, dateType) {
    var metadataHTML = '';

    if (!PD.compactFeed) {
      metadataHTML += '<div class="metadata">';
      metadataHTML += PD.createFeedItem_MetadataTimestamp(content, dateType);;
      metadataHTML += PD.createFeedItem_MetadataIcons(content);
      metadataHTML += '</div>'; // END .metadata
    }

    return metadataHTML;
  },

  /*
   * Private Function: PD.createFeedItem_MetadataTimestamp
   * =====================================================
   * This function constructs the HTML for the timestamp that will be
   * displayed in the feed item for the given piece of content. It should
   * be called from PD.createFeedItem_Metadata.
   */
  createFeedItem_MetadataTimestamp: function(content, dateType) {
    if (dateType != undefined)
      content.dateType = dateType;
    else
      dateType = content.dateType;

    // Render the timestamp in the most appropriate format.
    var timestampHTML = '<div class="timestamp">';
    if (dateType == 0) timestampHTML += content.updated.get12();       // x units ago
    if (dateType == 1) timestampHTML += content.updated.getWDay();     // Mon, Tue, Wed
    if (dateType == 2) timestampHTML += content.updated.getFullDate(); // MM/DD/YY
    timestampHTML += '</div>';

    return timestampHTML;
  },

  /*
   * Private Function: PD.createFeedItem_MetadataIcons
   * =================================================
   * This function constructs the HTML for the icons that will be displayed
   * in the feed item for the given piece of content. It should be called
   * from PD.createFeedItem_Metadata.
   */
  createFeedItem_MetadataIcons: function(content) {
    var iconHTML = '';
    iconHTML += '<div class="icons clearFix">';

    // Common Icons
    if(content.no_answer){
      iconHTML += '<div class="feedIcon unansweredIcon"></div>';
    }
    else if (content.type == 'poll')
      iconHTML += '<div class="feedIcon pollIcon"></div>';
    else {
      iconHTML += '<div class="feedIcon note"></div>';    // Note Icon
      iconHTML += '<div class="feedIcon irIcon"></div>';  // IR Icon
    }
    //
    // Endorsed vs non-endorsed
    var klass = 'feedIcon srIcon';
    if (content.tag_endorse_prof)
      klass += ' endorsed'
    iconHTML += '<div class="' + klass + '"></div>';  // SR Icon

    // New Activity Notification
    iconHTML += '<div class="feedIcon newActivityIcon" notutorial="' + content.changes + ' update' + (content.changes > 1 ? 's' : '') + ' since you last viewed this">';
    iconHTML += '<span>' + content.changes + '</span>';
    iconHTML += '</div>';

    iconHTML += '</div>'; // END .icons
    return iconHTML;
  },

  /*
   * Private Function: PD.createFeedItem_Dropdown
   * ============================================
   * This function constructs the HTML for the dropdown menu of the feed
   * item for the given piece of content. It should be called from
   * PD.createFeedItem_InnerHTML.
   */
  createFeedItem_Dropdown: function(content) {
    var dropdownHTML = '';
    dropdownHTML += '<div id="FeedItemDropdown_' + content.id + '" class="feedItemDropdownSelector UIDropdownSelector closed memoryless clearFix">';
    dropdownHTML += '<div class="UIDropdownHandle">&#9660;</div>';
    dropdownHTML += '<ul class="UIDropdownMenu">';
    dropdownHTML += PD.createFeedItem_DropdownItem('disabled', 'Type "@' + content.nr + '" to link to this post');
    if (!PA.user.is_public) {
      if (content.status == 'private')
        dropdownHTML += PD.createFeedItem_DropdownItem('makePublicAction', 'Make Public to Class');
      else if (PD.isInst || content.my_post)
        dropdownHTML += PD.createFeedItem_DropdownItem('makePrivateAction', 'Make Private to Class');

      if (!PD.showHidden)
        dropdownHTML += PD.createFeedItem_DropdownItem('archiveAction', 'Archive <em>(Hide from your feed)</em>');
      else
        dropdownHTML += PD.createFeedItem_DropdownItem('unarchiveAction', 'Unarchive <em>(Show in your feed)</em>');
      if (PD.isInst)
        dropdownHTML += PD.createFeedItem_DropdownItem('deleteAction', 'Delete <em>(from everyone\'s feed)</em>');
      /*
      if (content.status == 'pin'){
        dropdownHTML += PD.createFeedItem_DropdownItem('pinPost', 'Pin This');
      }else{
        dropdownHTML += PD.createFeedItem_DropdownItem('unpinPost', 'Unpin This');
      }
      */
    }
    dropdownHTML += PD.createFeedItem_DropdownItem('markUnreadAction',    'Mark as Unread');
    if (content.is_new)
      dropdownHTML += PD.createFeedItem_DropdownItem('markReadAction',    'Mark as Read');
    // disabled for now until we figure out what UI looks like
    // dropdownHTML += PD.createFeedItem_DropdownItem('markDuplicateAction', 'Mark as Duplicate');

    // removed until better spam UI
    // dropdownHTML += PD.createFeedItem_DropdownItem('reportSpamAction',    'Report Spam');
    dropdownHTML += '</ul>';  // END .UIDropdownMenu
    dropdownHTML += '</div>'; // END .UIDropdownSelector
    return dropdownHTML;
  },

  /*
   * Private Function: PD.createFeedItem_DropdownItem
   * ================================================
   * This function constructs the HTML for a single dropdown item in a
   * feed item dropdown menu. It requires an identifying CSS class and
   * a short string of HTML to display in the menu item. It should be
   * called from PD.createFeedItem_Dropdown.
   */
  createFeedItem_DropdownItem: function(itemClass, itemHTML) {
    return '<li class="' + itemClass + '">' + itemHTML + '</li>';
  },

  /*
   * Private Function: PD.createFeedItem_Messages
   * ============================================
   * This function constructs the HTML for any messages pertaining to
   * the feed item for the given piece of content (unresolved followups,
   * instructor-endorsements, etc.). It should be called from
   * PD.createFeedItem_InnerHTML.
   */
  createFeedItem_Messages: function(content) {
    var messagesHTML = '';
    messagesHTML += '<ul class="messages">';

    // Instructor-Endorsed Post
    messagesHTML += '<li class="instructorEndorsed">';
    messagesHTML += 'An instructor thinks this is a good ' + content.type;
    messagesHTML += '</li>';

    // Unresolved Followups
    messagesHTML += '<li class="unresolvedFollowups">';
    messagesHTML += content.no_answer_followup + ' Unresolved Followup' + ((content.no_answer_followup > 1) ? 's' : '');
    messagesHTML += '</li>';

    messagesHTML += '</ul>'; // END .messages
    return messagesHTML;
  },

  /*
   * Private Function: PD.createFeedItem_TagsList
   * ============================================
   * This function constructs the HTML for any tags contained in the
   * given piece of content (e.g. #homework1, #midterm). It should be
   * called from PD.createFeedItem_InnerHTML.
   */
  createFeedItem_TagsList: function(content) {
    var tagsListHTML = '';

    // Construct HTML for any special tags (piazza-note, instructor-note, etc.)
    var specialTags = '';
    if (content.special_tags && !PD.compactFeed) {
      content.special_tags.forEach(function(tag) {
        if (tag.indexOf("instructor") >= 0 || tag == "piazzza-note" || tag == "piazza-note") {
          specialTags += PD.createFeedItem_TagsListItem(tag);
        }
      });

      tagsListHTML += '<ul class="tags">';
      tagsListHTML += specialTags;
    }

    // Construct HTML for all other tags.
    if (content.tags && content.tags.length > 0) {
      var sortedTags = content.tags.sort().map(function(tag) {
        if (tag != 'private' && tag != 'unanswered')
          return tag;
      });

      if (sortedTags.length > 0) {
        // Open the ul if there were no special tags.
        if (tagsListHTML.length == 0) tagsListHTML = '<ul class="tags">';

        for (var i = 0; i < sortedTags.length; i++) {
          tagsListHTML += PD.createFeedItem_TagsListItem(sortedTags[i]);
        }
      }
    }

    if (tagsListHTML.length > 0) {
      tagsListHTML += '</ul>';
    }

    return tagsListHTML;
  },

  /*
   * Private Function: PD.createFeedItem_TagsListItem
   * ================================================
   * This function constructs the HTML for a single tag in the tags
   * list of the feed item for the given piece of content. It should
   * be called from PD.createFeedItem_TagsList.
   */
  createFeedItem_TagsListItem: function(tagText) {
    var tagHTML = '';
    if (tagText != 'private' && tagText != 'unanswered') {
      tagHTML += '<li>' + PD.makeTag(tagText) + '</li>';
    }
    return tagHTML;
  },


  /********************************************************************
                            Screen Toggling
   ********************************************************************/

   /*
    * Private Function: PD.showCenterView
    * ===================================
    * This function displays the view with the given ID, if that view
    * exists.
    */
  showCenterView: function(viewID) {

    if ($('#NewPostPanel').is(':visible')) {
      PD.newPostPanel_SaveDraft();
      PD.newPostPanel_Close();
    }
    var $viewsWrapper = $('#PageCenter .views');
    var $view = $('#' + viewID);

    if ($view.length > 0) {
      $viewsWrapper.children().hide();
      $view.show();
    }
    $('.memoryless').removeClass('open');
    $('#UserNotifications').removeClass('open').addClass('closed');
    if (viewID == 'SelectedPostPanel')
      $('#current-class-questions-link').addClass('open');
    if (viewID == 'ClassStatisticsPanel')
      $('#current-class-statistics-link').addClass('open');
    var $notif = $('#UserNotifications');
    if ($notif.hasClass('open'))
      $notif.find('.UIDropdownHandle').click();
    closeDropdownMenu($('.dropdownToggler.active').siblings('.dropdownMenu'));
  },

  /*
   * Private Function: PD.showCenterView
   * ===================================
   * This function hides the current view and shows the welcome screen.
   */
  hideCenterView: function() {
    PD.showCenterView('WelcomeScreen');
  },

  /********************************************************************
                              New Post Panel
   ********************************************************************/

  newPostPanel_SawTagsMessage: false,

  /*
   * Private Function: PD.newPostPanel_Init
   * ======================================
   * This function initializes the panel for posting new questions and
   * notes, including activating click events, activating drag events,
   * and performing validation on form submission.
   */
  newPostPanel_Init: function() {
    if (PD.postPanelInitDone) return; // make sure we only call this once
    PD.postPanelInitDone = true;
    PD.newPostPanel_ActivateClickEvents();
    PD.newPostPanel_ActivateKeyListeners();
  },

  /*
   * Private Function: PD.newPostPanel_Show
   * ======================================
   * This function hides the current panel and displays the new post
   * panel.
   */
  newPostPanel_Open: function() {
    // Repopulate and activate tags bar
    PD.newPostPanel_ActivateDragEvents();

    // Reset all form elements to their blank/default states.
    PD.newPostPanel_ResetForm();

    // Hide other panels.
    $('#WelcomeScreen').hide();
    $('#SelectedPostPanel').hide();
    $('#ClassStatisticsPanel').hide();

    // Show the New Post Panel.
    $('#NewPostPanel').show();
    PD.autoSaveDraft = true;
    if (!PD.autoSaveSet) {
      PD.autoSaveSet = true;
      setTimeout(function(){PD.autoSaveSet = false;PD.newPostPanel_SaveDraft()}, 30000); // 30 seconds autosave
    }
  },

  /*
   * Private Function: PD.newPostPanel_Hide
   * ======================================
   * This function hides the new post panel and displays the welcome
   * screen.
   */
  newPostPanel_Close: function() {
    PD.autoSaveDraft = false;
    $('#SelectedPostPanel').hide();
    $('#NewPostPanel').hide();
    $('#WelcomeScreen').show();
  },

  newPostPanel_SaveDraft: function() {
    if ($('#NewPostPanel').is(':visible')) {
      PD.postDraft = {subject:$('#newQuestionSubject').val(), text:$('#newQuestionDetails').val()};
      $('#saveNewPostDraft').html("<span style='color:#4C4;text-decoration: none;'>Saving...</span>");
      PA.call_pj("network.save_draft", {nid:PD.networkId, draft:PD.postDraft}, 1, function(data) {
        $('#saveNewPostDraft').html("<span style='color:#4C4;text-decoration: none;'>Draft Saved!</span>");
        setTimeout(function(){$('#saveNewPostDraft').html("Save as draft");}, 5000);
      });
      if (PD.autoSaveDraft && !PD.autoSaveSet) {
        PD.autoSaveSet = true;
        setTimeout(function(){PD.autoSaveSet = false;PD.newPostPanel_SaveDraft()}, 30000); // 30 seconds autosave
      }
    }
  },
  /*
   * Private Function: PD.newPostPanel_ResetForm
   * ===========================================
   * This function resets the new post form to its original state.
   */
  newPostPanel_ResetForm: function() {
    // Variables.
    var $newPostPanel = $('#NewPostPanel');
    var $form = $newPostPanel.find('.UIForm');

    // Empty search box.
    PD.filterFeed('');

    // Remove all error states.
    $form.removeClass('error noTitleError tooLongTitleError noTagsError');
    $form.find('.UIFormElement').removeClass('error');

    PD.newPostPanel_SawTagsMessage = false;
    $('#newPostButton_WithTags').show();
    $('#newPostButton_WithoutTags').hide();

    // Empty all text boxes.
    $form.find('.UITextBox').each(function() {
      $(this).find('textarea').val('');
      $(this).removeClass('active error bold').addClass('empty');
    });

    // Uncheck all checkboxes.
    $form.find('input[type="checkbox"]').each(function() {
      $(this).removeAttr('checked');
    });

    // Hide/show role and network-specific options.
    if (PD.isInst) {
      $('#NewPost_StudentAnonymity').parent().hide();
      $('#NewPost_ProfOverride').parent().show();
      $('#NewPost_NoteAnnouncement').parent().show();
    } else {
      if (PD.selectedNetwork.anonymity == 'no')
        $('#NewPost_Anonymity').hide();
      else {
        $('#NewPost_Anonymity').show();
        $('.showForOnlyPrivate').hide();
        if (PD.selectedNetwork.anonymity == 'full') {
          $('#NewPost_Anonymity').removeClass('onlyClassmates');
          $('.showForFull').show();
        } else {
          $('#NewPost_Anonymity').addClass('onlyClassmates');
          $('.showForOnlyClassmates').show();
        }
      }
      $('#NewPost_ProfOverride').parent().hide();
      $('#NewPost_NoteAnnouncement').parent().hide();
    }

    // Select the first item in all dropdown menus.
    $form.find('select').each(function() {
      var defaultValue = $(this).find('option').first().val();
      $(this).val(defaultValue);
    });

    // Set popular tags area based on tags
    if (PD.popularTags.length == 0) {
      $('#NewPost_PopularTags').addClass('noTags');
      $('#NewPost_Details').removeClass('dragToTag');
    } else {
      $('#NewPost_PopularTags').removeClass('noTags');
      $('#NewPost_Details').addClass('dragToTag');
    }
  },

  /*
   * Private Function: PD.newPostPanel_ActivateClickEvents
   * =====================================================
   * This function activates all click events necessary for the new
   * post panel to work correctly.
   */
  newPostPanel_ActivateClickEvents: function() {
    PD.newPostPanel_ActivateClickEvents_UITabs();
    PD.newPostPanel_ActivateClickEvents_CancelButton();
    PD.selectedPostPanel_Question_ActivateClickEvents_CancelButton();
    PD.selectedPostPanel_SR_ActivateClickEvents_CancelButton();
    PD.selectedPostPanel_IR_ActivateClickEvents_CancelButton();
    PD.selectedPostPanel_Followup_ActivateClickEvents_CancelButton();
    //PD.selectedPostPanel_Followup_Edit_ActivateClickEvents_CancelButton();
    //PD.selectedPostPanel_Followup_Reply_ActivateClickEvents_CancelButton();
  },

  /*
   * Private Function: PD.newPostPanel_ActivateClickEvents_UITabs
   * ============================================================
   * This function activates the click event necessary to switch
   * between post types (question or note) in the new post panel.
   */
  newPostPanel_ActivateClickEvents_UITabs: function() {
    var $newPostPanel = $('#NewPostPanel');
    $('#NewPostPanel .UITabSelector .UITab').click(function() {
      var $tab = $(this);
      $newPostPanel.removeClass('note');
      $newPostPanel.removeClass('poll');

      // Clear Announcement defaults
      $newPostPanel.removeClass('announcement');
      $("#NewPost_NoteAnnouncement").attr('checked', false);
      $("#NewPost_AlertAnnouncement").hide();

      $('.hideForPoll').show();
      PD.onPrivatePostClick();
      if ($tab.hasClass('postNoteTab')) {
        $newPostPanel.addClass('note');
      } else if ($tab.hasClass('postPollTab')) {
        $newPostPanel.addClass('poll');
        $('.hideForPoll').hide();
        if (PD.isInst) $('#postingOptionsDiv').show();
      }
    });
  },

  /*
   * Private Function: PD.newPostPanel_ActivateClickEvents_UITabs
   * ============================================================
   * This function activates the submit button in the new post panel.
   */
  //newPostPanel_ActivateClickEvents_SubmitButton: function() {
  newPostPanel_SubmitButton: function() {
    if (PD.newPostPanel_ValidateForm()) {
      PD.newPostPanel_HandleSubmission();
    }
    return false;
  },

  /*
   * Private Function: PD.newPostPanel_ActivateClickEvents_CancelButton
   * ==================================================================
   * This function activates the cancel button in the new post panel.
   */
  newPostPanel_ActivateClickEvents_CancelButton: function() {
    $('#NewPostPanel .UIActions .cancel').click(function() {
      var title = $('#newQuestionSubject').val();
      var details = $('.enableHashtagDropdown').val();
      if(title == "" && details == ""){
        PD.newPostPanel_Close();
        return false;
      }else{
        PD.UIElements.UIModalWindow.showConfirmationWindow('Confirmation_CancelNewPost');
      }
    });
  },
  selectedPostPanel_Question_ActivateClickEvents_CancelButton: function() {
    $('#SelectedPostPanel #questionEditorActionBar .subregionEditorCancelButtonConfirm').click(function() {
      var questionContent = $('#question-editor').val();
      if(questionContent == PD.initialEditText){
        $('.subregionEditorCancelButton').click();
        $.fancybox.close();
      }else{
        PD.UIElements.UIModalWindow.showConfirmationWindow('Confirmation_CancelEditor_Question');
      }
    });
  },
  selectedPostPanel_SR_ActivateClickEvents_CancelButton: function() {
    $('#SelectedPostPanel #studentsResponseEditor .subregionEditorCancelButtonConfirm').click(function() {
      var SRContent = $('#student-answer-editor').val();
      if(SRContent == PD.initialEditText){
        $('.subregionEditorCancelButton').click();
        $.fancybox.close();
      }else{
        PD.UIElements.UIModalWindow.showConfirmationWindow('Confirmation_CancelEditor_SR');
      }
    });
  },
  selectedPostPanel_IR_ActivateClickEvents_CancelButton: function() {
    $('#SelectedPostPanel #instructorsResponseEditor .subregionEditorCancelButtonConfirm').click(function() {
      var IRContent = $('#instructor-answer-editor').val();
      if(IRContent == PD.initialEditText){
        $('.subregionEditorCancelButton').click();
        $.fancybox.close();
      }else{
        PD.UIElements.UIModalWindow.showConfirmationWindow('Confirmation_CancelEditor_IR');
      }
    });
  },
  selectedPostPanel_Followup_ActivateClickEvents_CancelButton: function() {
    $('#newFollowupShow').live('click',function() {
      var followupContent = $('#newFollowupEditor').val();
      if(followupContent == ""){
        $('#newFollowupThread').hide();
        $('#newFollowup').show();
        $.fancybox.close();
        return false;
      }else{
        PD.UIElements.UIModalWindow.showConfirmationWindow('Confirmation_CancelEditor_Followup');
      }
    });
  },
  selectedPostPanel_Followup_Edit_ActivateClickEvents_CancelButton: function() {
    //$('#followupEditCancel').live('click',function() {
      PD.UIElements.UIModalWindow.showConfirmationWindow('Confirmation_CancelEditor_Followup_Edit');   
    //});
  },
  selectedPostPanel_Followup_Reply_ActivateClickEvents_CancelButton: function() {
    //$('#followupReplyCancel').live('click',function() {
      PD.UIElements.UIModalWindow.showConfirmationWindow('Confirmation_CancelEditor_Followup_Reply');
    //});
  },

  /*
   * Private Function: PD.newPostPanel_ValidateForm
   * ==============================================
   * This function validates certain user input before submitting
   * the new post panel. It should be called when the submit
   * button is clicked. It returns true if all fields are valid,
   * and false otherwise.
   */
  newPostPanel_ValidateForm: function() {
    // Grab the form object.
    var $form = $('#NewPostPanel .UIForm');

    // Remove any error messages from previous submissions.
    $form.removeClass('error noTitleError tooLongTitleError noTagsError');

    // Validate the title and details fields.
    var titleIsValid = PD.newPostPanel_ValidateFormTitle($form);
    var tagIsValid   = PD.newPostPanel_ValidateFormTags($form);

    // Return true if there are no errors.
    return (titleIsValid && tagIsValid);
  },

  /*
   * Private Function: PD.newPostPanel_ValidateFormTitle
   * ===================================================
   * This function validates the user's input for the title
   * field of the new post panel. It returns true if the title
   * is valid, and false otherwise.
   */
  newPostPanel_ValidateFormTitle: function($form) {
    // Variables.
    var isValid = true;
    var $titleFormElement = $form.find('#NewPost_Title');
    var title = $titleFormElement.find('textarea').val();

    // Verify that the user entered a title.
    if (title.length <= 0) {
      $form.addClass('error noTitleError');
      $titleFormElement.addClass('error');
      isValid = false;
    } else if (title.length > 100) {
      PD.newPostPanel_ShowTitleTooLongError();
      isValid = false;
    } else {
      $form.removeClass('noTitleError');
      $titleFormElement.removeClass('error');
    }

    // Return true if valid.
    return isValid;
  },

  /*
   * Private Function: PD.newPostPanel_ValidateFormTags
   * ==================================================
   * This function returns true if there is at least one tag
   * present in the details field of the new post panel, and
   * false otherwise.
   */
  newPostPanel_ValidateFormTags: function($form) {
    // Variables.
    var isValid = true;
    var $tagsFormElement    = $form.find('#NewPost_PopularTags');
    var $detailsFormElement = $form.find('#NewPost_Details');
    var details = $detailsFormElement.find('textarea').val();

    // Verify that the user entered at least one tag.
    if (details.search(/#[A-Za-z0-9]+/) < 0) {
      $form.addClass('error noTagsError');
      $tagsFormElement.addClass('error');
      isValid = false;
    } else {
      $form.removeClass('noTagsError');
      $tagsFormElement.removeClass('error');
    }

    var sawMessage = false;
    if (isValid) {
      $('#newPostButton_WithoutTags').hide();
      $('#newPostButton_WithTags').show();
    } else {
      $('#newPostButton_WithTags').hide();
      $('#newPostButton_WithoutTags').show();
      sawMessage = PD.newPostPanel_SawTagsMessage;
      PD.newPostPanel_SawTagsMessage = true;
    }

    // Return true if valid.
    return isValid || sawMessage;
  },

  /*
   * Private Function: PD.newPostPanel_ActivateDragEvents
   * ====================================================
   * This function activates all drag events necessary for the new
   * post panel to work correctly.
   */
  newPostPanel_ActivateDragEvents: function() {
    PD.newPostPanel_ActivateDragEvents_PopulateTags();
    PD.newPostPanel_ActivateDragEvents_TagDragging();
    PD.newPostPanel_ActivateDragEvents_TagDropping();
  },

  newPostPanel_ActivateDragEvents_PopulateTags: function() {
    PD.popularTagsBar_findPopularTags();
    $('#NewPost_PopularTags').find('ul').empty();
    PD.popularTags.forEach(function(tag) {
      $('#NewPost_PopularTags').find('ul').append('<li><a tutorial="Drag this tag onto a question to tag it!" class="tag">#' + tag + '</a></li>');
    });
  },

  /*
   * Private Function: PD.newPostPanel_ActivateDragEvents_TagDragging
   * ================================================================
   * This function activates listeners necessary to support users'
   * dragging popular tags in the newpost panel.
   */
  newPostPanel_ActivateDragEvents_TagDragging: function() {
    $('#NewPost_PopularTags .tag').draggable({
      cursor: 'move',    // show a 'move' cursor on hover
      helper: 'clone',   // show a ghost of this tag as the user drags the mouse
      revert: 'invalid', // when not dropped, the item will revert back to its initial position
      scroll: false      // don't scroll the dashboard as the user drags
    });
  },

  /*
   * Private Function: PD.newPostPanel_ActivateDragEvents_TagDragging
   * ================================================================
   * This function activates listeners necessary to support users'
   * dropping popular tags into the details text field of the new
   * post panel.
   */
  newPostPanel_ActivateDragEvents_TagDropping: function() {
    $('#NewPost_Details .UITextBox').droppable({
      accept: '#NewPost_PopularTags .tag, #PopularTagsBar .tag',
      activeClass: 'droppableTargetActive',
      drop: function(event, ui) {
        var $textarea = $('#NewPost_Details textarea');
        var currText  = $textarea.val();
        var tagText   = ui.draggable[0].innerHTML;

        $textarea.val(currText + ' ' + tagText);
        $textarea.closest('.UITextBox').removeClass('empty').addClass('active');
      },
      hoverClass: 'droppableTargetHover'
    });
  },

  /*
   * Private Function: PD.newPostPanel_ActivateKeyListeners
   * ======================================================
   * This function activates key listeners inside the new post form.
   */
  newPostPanel_ActivateKeyListeners: function() {
    $('#NewPost_Title').find('textarea').keyup(function() {
      if ($(this).val().length > 100)
        PD.newPostPanel_ShowTitleTooLongError();
      else
        PD.newPostPanel_HideTitleTooLongError();
    });
    $('#NewPost_Details').find('textarea').autogrow();
  },

  /*
   * Private Function: PD.newPostPanel_SetPostSummary
   * ================================================
   * This funciton sets the summary field of the new post form.
   * Used to set the field based on what was searched, if long enough.
   */
  newPostPanel_SetPostSummary: function(newPostSummary) {
    if (!newPostSummary)
      newPostSummary = "";
    $('#newQuestionSubject').val(newPostSummary);
    $('#NewPost_Title .UITextBox').removeClass('empty').addClass('active');
    if (newPostSummary.length > 100)
      PD.newPostPanel_ShowTitleTooLongError();
  },

  /*
   * Private Function: PD.newPostPanel_ShowTitleTooLongError
   * =======================================================
   * This function shows the "title is too long" error message.
   * Called from multiple places, so it was busted out into a helper.
   */
  newPostPanel_ShowTitleTooLongError: function() {
    $('#NewPost_Title').addClass('error tooLongTitleError');
    $('#NewPost_Title .UITextBox').addClass('error bold');
  },


  /*
   * Private Function: PD.newPostPanel_HideTitleTooLongError
   * =======================================================
   * This funciton hides the "title is too long" error message.
   * Called from multiple places, so it was busted out into a helper.
   */
  newPostPanel_HideTitleTooLongError: function() {
    $form = $('#NewPostPanel .UIForm');
    if (!$form.hasClass('noTitleError')) {
      $('#NewPost_Title').removeClass('error');
      $('#NewPost_Title .UITextBox').removeClass('error');
    }
    $('#NewPost_Title').removeClass('tooLongTitleError');
    $('#NewPost_Title .UITextBox').removeClass('bold');
  },

  /*
   * Private Function: PD.newPostPanel_HandleSubmission
   * ==================================================
   * This function handles the new post form and submits its content
   * to the api.
   */
  newPostPanel_HandleSubmission: function() {
    // gather data and submit post
    var type = "question";
    if ($('#NewPostPanel').hasClass('note'))
      type = "note";
    if ($('#NewPostPanel').hasClass('poll'))
      type = "poll";

    var subject = $('#NewPost_Title').find('textarea').val();

    var content = $('#NewPost_Details').find('textarea').val();

    var anonymity = "no";
    if ($('#NewPost_StudentAnonymity').attr('checked')) {
      if ($('#NewPost_StudentAnonymityMenu').val() == "all")
        anonymity = "full";
      else
        anonymity = "stud";
    }

    var status = "active";
    if ($('#NewPost_PrivatePost').attr('checked')) {
      status = "private";
      if (anonymity == "no")
        anonymity = "stud";
      else
        anonymity = "full";
    }

    var params = {
      nid:          PD.selectedNetwork.id,
      type:         type,
      subject:      subject,
      content:      content,
      anonymous:    anonymity,
      client_time:  (new Date()).format("m/dd/yy h:MM TT"),
      status:       status
    };
    if ($('#NewPost_ProfOverride').attr('checked'))
      params.prof_override = true;

    var config = {};
    if (type == "note" && $('#NewPost_NoteAnnouncement').attr('checked')) {
      config.is_announcement = 1;
    }

    if ($('#NewPost_Email_Notification').attr('checked')) {
      config.emails_notifications = false;
    }

    if (type == "poll") {
      var pollOption = "[o]";
      if ($('#pollSelectionsAllowedAll').attr('checked'))
        pollOption = "[*]";
      var opts = PD.pollChoices;
      var optCount = 0;
      for (var q = 0; q < opts.length; q++) {
        if (opts[q].length > 0) {
          content += "\n" + pollOption + " " + opts[q];
          optCount++;
        }
      }
      if (optCount < 2) {
        alert("Please enter at least two options");
        $('#pollOptionList').focus();
        return;
      }
      params.content = content;

      config.anonymous = "no";
      config.show_results = "av"; //av = after vote; ac = after close; "" = right away; nn = never
      config.close_after = $("#PollCloseDateMenu").val();
      config.allow_followups = "yes";
      config.always_open = 0;

      if ($('#pollAlwaysOpen').attr('checked')) config.always_open = 1;
      if ($('#pollVote1').attr('checked')) config.show_results = "";
      if ($('#pollVote2').attr('checked')) config.show_results = "av";
      if ($('#pollVote3').attr('checked')) config.show_results = "ac";
      if ($('#pollVote4').attr('checked')) config.show_results = "nn";
      if ($('#pollAnonymousYes').attr('checked')) config.anonymous = "yes";
      if ($('#pollAnonymousStud').attr('checked')) config.anonymous = "stud";
      //if ($('#pollCommentsNo').attr('checked')) conf.allow_followups = "no";
    }

    params.config = config;
    PA.call_pj('content.create', params, $('#PageCenter'), function(data) {
      // hide form
      PD.postDraft = {};
      PD.newPostPanel_Close();
      PD.selectContent(data.id);
    }, function(err) {
      alert(err);
    });
  },

  populateNetworkDropdown: function(nid) {
    var allNets = $('#myClassesMenuItems').empty();
    var allNetsForQ = "";
    var totalNew = 0;
    if (PA.user.new_questions) PA.user.new_questions[nid] = 0;
    var active = [];
    var inactive = [];

    PA.networks.forEach(function(net){
      if (net.status == "active" || net.id == "piazzza" || net.id == INST_TUT ) {
        active.push(net);
      } else {
        inactive.push(net);
      }
    });
    function placeNetwork(net, active) {
      //var newContent = "";
      allNetsForQ += "<option value='" + net.id + "' " + (nid == net.id ? "selected" : "") + ">" + net.course_number + "</option>";
      if (PA.user.new_questions && PA.user.new_questions[net.id] > 0) {
        //newContent = " (" + PA.user.new_questions[net.id] + " new posts)";
        totalNew += PA.user.new_questions[net.id];
      }
      var inactive = "";
      var sortable = ' sortable';
      if (!active) {
        inactive = "(inactive) ";
        sortable = ' inactive';
      }
      if (PA.user.new_questions && PA.user.new_questions[net.id] && PA.user.new_questions[net.id] < 0)
        PA.user.new_questions[net.id] = 0
      //allNets.append('<a href="#" onclick="PD.selectNetwork(\'' + net.id + '\', true);return false;"><li><strong>' + net.course_number + ':</strong> ' + net.name + newContent + '</li></a>');
      allNets.append('<li class="classDropdownItem' + sortable + '" id="'+net.id+'">' +
                                              ( PA.user.new_questions[net.id] ?
												'<div class="notification-wrapper">' +
													'<span class="notification">' + PA.user.new_questions[net.id] + '</span>' +
												'</div>' : '' ) +
												'<div class="main">' +
													'<strong>' + inactive + net.course_number + '</strong> <span style="color:#AAA">[' + (net.term || 'other') + ']</span>: ' + net.name +/*newContent +*/
												'</div>' +
										 '</li>');
      if (PD.deepParams && PD.deepParams.length > 1) {
        var nr = net.course_number.replace(/[^\w]/g, "").toLowerCase();
        var term = net.term.replace(/\s+/g, "").toLowerCase() || "other";
        if (nr == PD.deepParams[1] && term == PD.deepParams[0]) nid = net.id;
      }
    }
    active.forEach(function(net){
      placeNetwork(net, true);
    });
    inactive.forEach(function(net){
      placeNetwork(net, false);
    });
    $('#myClassesMenuItems').sortable('destroy');
    $('#myClassesMenuItems').sortable({
      items: 'li.sortable',
      update: PD.updateClassListOrder,
      start:  function(event, ui) {
        $(ui.item).addClass('beingSorted');
      }
    });
    //$('#new_question_class').html(allNetsForQ);
    //if (PA.networks.length > 1)
    //  $('#new_question_class_wrapper').show();
    //else
    //  $('#new_question_class_wrapper').hide();
    if (totalNew > 0) {
      $('#global-notifications').html(totalNew);
      $('.notification-wrapper').show();
    } else {
      $('.notification-wrapper').hide();
    }
    if($('.classDropdownItem').hasClass('inactive')){
      allNets.append('<a href="#"><li class="inactive-class show">Show Inactive Classes</li></a>');
      allNets.append('<a href="#"><li class="inactive-class hide" style="display:none">Hide Inactive Classes</li></a>');
      $('.classDropdownItem.inactive').hide();
      $('.inactive-class.show').click(function() {
        $('.inactive-class.show').hide();
        $('.inactive-class.hide').show();
        $('.classDropdownItem.inactive').show();
        return false;
      });
      $('.inactive-class.hide').click(function() {
        $('.inactive-class.hide').hide();
        $('.inactive-class.show').show();
        $('.classDropdownItem.inactive').hide();
        return false;
      });
    }
    if (!PA.user.is_public && PD.valid_school && PD.school_ext && PA.networks[0].type != "public") {
      var url = "/" + PD.school_ext;
      if (PD.isInst)
        url = "/signup" + url;
      var h = {}
      h["instructor"] = PD.isInst;
      allNets.append('<a href="'+url+'"><li class="add-new-class">+&nbsp;Add Another Class</li></a>');
    }
    allNets.find('.classDropdownItem').click(function() {
      if (!$(this).hasClass('beingSorted'))
        PD.selectNetwork($(this).attr('id'), true, true);
        $(this).removeClass('beingSorted');
        $('.filters-dropdown span.current-filter').html('All');
    });
    return nid;
  },
  updateClassListOrder: function() {
    var arr = $('#myClassesMenuItems').sortable('toArray');
    var list = {};
    for (var i = 0; i < arr.length; i++)
      list[arr[i]] = i;
    var req = {
      stat: 'class_list',
      val:  list
    };
    PA.call_pj("user.set", req, $('#myClassesMenuItems'), function(data) {
      // sort array on the frontend
      PA.networks.sort(function(a,b) {
        return list[a.id] - list[b.id];
      });
    }, function(err) {
      alert(err);
    });
  },
  // pickNetwork: function() {
  //   //select last network and get data
  //   var nid = PA.user.last_network;
  //   if ((nid == null || nid.length == 0) && PA.networks && PA.networks.length > 0) {
  //     nid = PA.networks[0].id;
  //   }
  //   if (GetUrlParameter('nid')) nid = GetUrlParameter('nid');
  //   //populate all networks
  //   nid = PD.populateNetworkDropdown(nid);
  //   if (!PD.topic)
  //     PD.topic = '';
  //   PD.selectNetwork(nid);
  // },
  contentTypes: {question:"Question", note:"Note", poll:"Poll", s_answer:"students' response", i_answer: "instructors' response"},
  showContent: function(content) {
    if (content.status == 'deleted') {
      PD.showCenterView(PD.Constants.VIEWS.DELETED_POST);
      return;
    }
    var q_idx = PD.history.q_idx || 0;
    var h0 = content.history[q_idx];
    PD.s_answer = null;
    PD.i_answer = null;
    Piazzza.Common.lastContentMessage = content.now;
    PD.followups = {};
    PD.feedbacks = {};
    PD.attachments = {};
    $('#followupDiscussionsContent').empty();
    var totalFollowups = 0;
    PD.totalFollowups = 0;
    for (var i = 0; i < content.children.length; i++) {
      if (content.children[i].type == 's_answer' || content.children[i].type == 'answer')
        PD.s_answer = content.children[i];
      if (content.children[i].type == 'i_answer' || content.children[i].type == 'note')
        PD.i_answer = content.children[i];
      if (content.children[i].type == 'followup') {
        PD.addFollowup(content.children[i]);
        totalFollowups++;
      }
    }
    if (PD.s_answer && PD.s_answer.history)
      PD.s_answer.history = PD.sortHistory(PD.s_answer.history);
    if (PD.i_answer && PD.i_answer.history)
      PD.i_answer.history = PD.sortHistory(PD.i_answer.history);
    if (totalFollowups == 0) {
      //$('.section.followups').hide();
      $('.count_followups').html('');
      $('#questionFollowupsLink').hide();
      $('#followupDiscussionsContent').hide();
    } else {
      //$('.section.followups').show();
      $('.count_followups').html(totalFollowups);
      $('#followupDiscussionsContent').show();
      $('#questionFollowupsLink').show();
    }
    var h1 = content.history[content.history.length - 1];

    PD.canEditQuestion = (PD.isInst || !PD.selectedNetwork.profs_hash[h1.uid]) && (content.nr > 1 || PA.staticContent);
    //$('.content-subject').html(h0.subject);
    var subj = h0.subject;
    if (PD.dupFrom) { // populate mark duplicate form
      if (PD.dupFrom != PD.contentId) {
        $('#duplicate-of-title').html('<b>' + PD.content.history[0].subject + '</b>');
        PD.dupTo = PD.contentId;
        $('#mark-duplicate').attr('disabled', false);
      } else {
        $('#duplicate-of-title').html('-please select-');
        PD.dupTo = false;
        $('#mark-duplicate').attr('disabled', true);
      }
    }
  	$('#questionTitle').html(subj);
    subj = subj.replace(/&lt;/g, "<");
    subj = subj.replace(/&gt;/g, ">");
    subj = subj.replace(/&amp;/g, "&");
    subj = subj.replace(/&quot;/g, '"');
    $('#question-subject').val(subj);
    $('#question-subject').attr("old-value", subj);
    PD.popularTagsBar_activateTagsDroppable($('#questionContent'));
    var what = PD.contentTypes[content.type];

    var content_status = '' + content.unique_views + ' Views'
    if (content.bookmarked > 0)
	  content_status += ', ' +  content.bookmarked + ' Follows';
    var likes = '';
    if (content.tag_good && content.tag_good.length > 0) {
      var names = "";
      var cnt = 0;
      content.tag_good.forEach(function(usr){
        if (PD.history.tag_good && PD.history.tag_good[usr.id])
          return;
        names += usr.name.replace(/"/g,'&quot;') + "<br/>";
        cnt++;
      });
      if (cnt > 0) {
        if (PD.isInst)
          likes = '<span class="show-tipsy" title="' + names + '">, ' + content.tag_good.length + " Good " + what + "</span>";
        else
          likes += '<span class="show-tipsy" title="' + names + '">, ' + content.tag_good.length + " Likes</span>";
      }
    }

    $('#question-stats').html(content_status +'<span class="subregionGrayText">' + likes + '</span>');
    $('.show-tipsy').tipsy({gravity: 'n', html: true});

    // Question Stats
    if (!content.unique_views)
      content.unique_views = 1;
    $('.subregionHeaderArea div.viewCount span.count').html(content.unique_views);

    //if (content.bookmarked > 0) {
      $('.postActionsButton.follow div.buttonNumber span.count').html(content.bookmarked);
      $('.postActionsButton.follow').show();
    //} else {
    //  $('.postActionsButton.follow').hide();
    //}

    // show/hide delete button and "super edit" abilities
    if (PD.isInst && content.nr > 1) {
    	$('#delete_content').show();
    	$('.super_edit_content').show();
    } else {
    	$('#delete_content').hide();
    	$('.super_edit_content').hide();
    }

    // show/hide anonymity fields and email override
    if (PD.isInst) {
    	$('#newFollowupAnonymityCheckboxWrapper').hide();
    	$('.student-only').hide();
    	$('.prof_override').show();
    } else {
    	$('#newFollowupAnonymityCheckboxWrapper').show();
    	$('.student-only').show();
    	$('.prof_override').hide();
    }

    if (PA.user.is_public) {
      $('.no-public').hide();
    }

  	var $question		   = $('#question');
  	var $questionViews	   = $('#questionViews');
  	var $questionFollowers = $('#questionFollowers');
  	var $studentsResponse  = $('#studentsResponse');
    var $pollResponse  = $('#pollResults');
  	var $instructorsResponse = $('#instructorsResponse');
    var $questionBanner = $('#questionBannerIcon');
    var $studentBanner = $('#studentBannerIcon');
    var $instructorBanner = $('#instructorBannerIcon');
    var $pollBanner = $('#pollBannerIcon');
	  $questionViews.html(content.unique_views + ' views');
	  $questionFollowers.html(content.bookmarked + ' followers');

	  $question.removeClass(); // Removes all CSS classes
	  $question.addClass('subregion');
    if (content.type == 'poll') {
      $questionBanner.addClass('poll');
      $questionBanner.removeClass('question');
      $questionBanner.removeClass('note');
      $questionBanner.removeClass('unanswered');
      $('#questionBannerTitle').text('poll');
      $question.addClass('poll');
      $pollResponse.show();
      if (content.status == "private")
        $question.addClass('private');
      PD.privatePostIncognito();
		  $studentsResponse.hide();
      $('.subregionHeaderArea.studentAnswer').hide();

		  $instructorsResponse.hide();
      $('.subregionHeaderArea.instructorAnswer').hide();
      PD.what = "poll";
      $('#question-type-2').attr('checked', true);
      $('#contentTypeSelector').hide();
      if (content.config && content.config.allow_followups != "yes")
        $('#followupDiscussions').hide();
      $('.hide-for-poll').hide();
      if (PD.isInst)
        $('.edit-question-button').show();
      $('#attach-to-question').hide();
	  } else {
      $pollResponse.hide();
      $('#followupDiscussions').show();
      $('#contentTypeSelector').show();
      $('.hide-for-poll').show();
      $('#attach-to-question').show();
      //$('.edit-question-button').show();
      if (PD.canEditQuestion)
        $('.edit-question-button').show();
      else
        $('.edit-question-button').hide();
    }
    if (content.type == 'note') {
      $questionBanner.addClass('note');
      $questionBanner.removeClass('question');
      $questionBanner.removeClass('poll');
      $questionBanner.removeClass('unanswered');
      $('#questionBannerTitle').text('note');
		  $question.addClass('note');
      if (content.status == "private")
        $question.addClass('private');
      PD.privatePostIncognito();
		  $studentsResponse.hide();
      $('.subregionHeaderArea.studentAnswer').hide();
		  $instructorsResponse.hide();
      $('.subregionHeaderArea.instructorAnswer').hide();
		  //$bigAnswerButton.hide();
		  $('#questionLabel').text('Student Note');
      PD.what = "note";
      $('#question-type-1').attr('checked', true);
	  }
    if (content.type == 'question') { // The content is a question.
      $questionBanner.addClass('question');
      $questionBanner.removeClass('note');
      $questionBanner.removeClass('poll');
      $('#questionBannerTitle').text('question');
      PD.what = "question";
      $('#question-type-0').attr('checked', true);
      $question.removeClass('private');
      if (content.status == "private")
        $question.addClass('private');
		  if (content.no_answer) {
			  if (content.status != "private"){

          //$('#questionBannerTitle').prepend('unanswered ');

        }
        $('#questionBannerTitle').prepend('unanswered ');
        $questionBanner.addClass('unanswered');
        $question.addClass('unanswered');
			  $studentsResponse.hide();
        $('.subregionHeaderArea.studentAnswer').hide();
			  $instructorsResponse.hide();
        $('.subregionHeaderArea.instructorAnswer').hide();
			  $('#questionLabel').text('Unanswered Question');
		  } else {
        $questionBanner.removeClass('unanswered');
		    $studentsResponse.show();
        $('.subregionHeaderArea.studentAnswer').show();
		    $instructorsResponse.show();
        $('.subregionHeaderArea.instructorAnswer').show();
        $('#questionLabel').text('Student Question');
	    }
      PD.privatePostIncognito();
      $('#question .public_toggle').hide();
      if (content.status != "private" && (content.my_post || PD.isInst))
        $('#question .public_toggle').show();
	  }

    $('#instructorResponseActions').hide();
    $('#studentResponseActions').hide();

    this.populateTextArea('#question', '#question-editor', content, PD.canEditQuestion);
    if (content.type == 'question') {
      this.populateTextArea('#studentsResponse', '#student-answer-editor', PD.s_answer, !PD.isInst);
      this.populateTextArea('#instructorsResponse', '#instructor-answer-editor', PD.i_answer, PD.isInst);
    }
    this.populateAllTags(content.tags);

    this.toggleFeedbackTags('#question', content);
    this.toggleFeedbackTags('#studentsResponse', PD.s_answer);
    this.toggleFeedbackTags('#instructorsResponse', PD.i_answer);
    $('.super-edit-answer').hide();
    //$('.details_participants').hide();
    //$('.details_participants').attr('open', 'closed');
    //$('a.toggle-answer-details').text('▾ Show Participants');

    // enable follow / unfollow
    Piazzza.Dashboard.showHideBookmark();
    if (content.type == "poll") PD.populatePoll(); // this must be after populateTextArea call
    // clear all new-content text areas
    $('.itextarea').val('');
    $('#newFollowupEditor').val('');

    // hide answers for note
    if (content.type == 'note' || content.type == 'poll') {
      $('.question-only').hide();
      $('#question .mainContent').addClass('note');
			$('#questionLabel').text('Student Note');
      $('#top-edit-answer').hide();
    } else {
      $('.question-only').show();
      $('#question .mainContent').removeClass('note');
			$('#questionLabel').text('Student Question');
      $('#top-edit-answer').show();
    }
    // show correct content type
    var capitalType = what[0].toUpperCase() + what.slice(1);
    $('.content-type-title-history').html(capitalType);
    capitalType = capitalType.toLowerCase();
    $('.content-type-title').html('good '+capitalType);
    //$('div.tipsy').remove();
    //$('.user_name_anon').tipsy({gravity: 'n', html: true});
    $('#followupDiscussions').val(''); // clear side-comment text area
    $('#answer-anonymous-0').attr('checked', true);
    // populate recent history
    //PD.populateRecentHistory();
    if (PD.content.is_dupe) {
      $('#question-is-dupe').show();
    } else
      $('#question-is-dupe').hide();
    // show if content is currently being edited
    Piazzza.Dashboard.updateIsEdited();
    $('#newFollowupThread').hide();$('#newFollowup').show();
    // count how many times we can go back
    PD.maxHistory = 0;
    var lastItem = null;
    PD.content.change_log.forEach(function(item){ if (item.type != "dupe") {PD.maxHistory++; lastItem = item;} });
    // removing history highlights
    $('#questionText').css('border-top', 'none');
    $('#questionText').css('border-bottom', 'none');
    $('#studentsResponseText').css('border-top', 'none');
    $('#studentsResponseText').css('border-bottom', 'none');
    $('#instructorsResponseText').css('border-top', 'none');
    $('#instructorsResponseText').css('border-bottom', 'none');
    if (!PD.history.version && !(PD.history.version == 0)) {
      $('#mainScrollPanel').scrollTop(0); // scroll to the top of the question
      $('#mainScrollPanelWrapper').css('bottom', '0');
      //$('#question-history').hide();
      if (PD.maxHistory > 1) {
        //$('#question-history-link').show();
        $('#question-history').show();
        $('#mainScrollPanelWrapper').css('top', '24px');
      } else {
        //$('#question-history-link').hide();
        $('#question-history').hide();
        $('#mainScrollPanelWrapper').css('top', '0px');
      }
      PD.curLog = lastItem;
    } else
      PD.finalizeHistory();
    // show/hide edit button(s)
    if (content.nr <= 1 && !PA.staticContent) {
      $('.edit-answer-button').hide();
    }

    // anonymity selector business
    if (content.status == 'private') {
      // find anonymity selectors, select anonymous to classmates, and disable no anonymous
      $('#SelectedPostPanel').find('.anonymity-select').each(function() {
        $(this).val('stud');
        $(this).find('option').each(function() {
          if ($(this).val() == 'no')
            $(this).attr('disabled', true);
        });
      });
    } else {
      // un-disable anonymity selectors
      $('#SelectedPostPanel').find('.anonymity-select').each(function() {
        $(this).val('no');
        $(this).find('option').attr('disabled', false);
      });
    }
  },
  // add/remove borders around question/answer editor boxes
  updateIsEdited: function() {
    var content = Piazzza.Dashboard.content;
    var toCheck = [{arr:content.q_edits, content:PD.content,  item:$('#question-status'), area:'#question'},
                   {arr:content.s_edits, content:PD.s_answer, item:$('.s_answer-status'), area:'#studentsResponse'},
                   {arr:content.i_edits, content:PD.i_answer, item:$('.i_answer-status'), area:'#instructorsResponse'}];
    toCheck.forEach(function(obj){
      //if (obj.arr && obj.arr.length > 0) alert(obj.area);
      PD.toggleFeedbackTags(obj.area, obj.content);
      PD.addStatus(obj.item, obj.content, null, 0, obj.arr);
    });
  },
  populatePoll: function() {
    $('#pollSubmitted').hide();
    $('#pollNotSubmitted').hide();
    $('#pollNotClosed').hide();
    $('#pollWillClose').hide();
    $('#pollNoData').hide();
    $('#pollClosed').hide();
    $('#pollOnlyInstructors').hide();
    if (PD.content.data.has_voted.length > 0)
      $('#pollSubmitted').show();
    var conf = PD.content.config;
    var isClosed = false;
    var dontShowNoData = false;
    var openDate = new Date();
    openDate.setISO8601(PD.content.created);
    var openHours = Math.floor((new Date() - openDate) / (1000 * 60 * 60));
    var openMinutes = Math.floor((new Date() - openDate) / (1000 * 60));
    if (openMinutes < 0) openMinutes = 0;
    if (openHours < 0) openHours = 0;
    $('#pollTotalTime').html(openHours);
    if (openHours >= parseInt(conf.close_after) && conf.always_open == 0) {
      isClosed = true;
      $('.pollButton').attr("disabled", true);
      $('#pollClosed').show();
      $('#pollNotSubmitted').hide();
    }
    if (!isClosed && conf.always_open == 0) {
      var closesAfter = parseInt(conf.close_after) - openHours;
      var closesAfterMin = parseInt(conf.close_after) * 60 - openMinutes;
      if (closesAfterMin < 60)
        $('.pollClosesIn').html((closesAfterMin > 0 ? closesAfterMin : 1) + " minutes");
      else {
        $('.pollClosesIn').html(closesAfter + " hours");
        if (closesAfter > 24)
          $('.pollClosesIn').html(Math.floor(closesAfter / 24) + " day(s)");
      }
      $('#pollWillClose').show();
    }
    if (!PD.isInst) {
      if (PD.content.data.has_voted.length == 0 && conf.show_results == "av" && !isClosed) {
        $('#pollNotSubmitted').show();
        dontShowNoData = true;
      }
      if (conf.show_results == "ac" && !isClosed && conf.always_open == 0) {
        $('#pollNotClosed').show();
        $('#pollWillClose').hide();
        $('#pollNoData').hide();
        dontShowNoData = true;
      }
    }
    var res = PD.content.data.result;
    var totalVotes = 0;
    for (var z = 0; z < POLL_OPTS.length; z++) {
      if (res[z]) {
        if (typeof(res[z]) == "number")
          totalVotes += res[z];
        if (typeof(res[z].length) != "undefined")
          totalVotes += res[z].length;
      }
    }
    if (totalVotes == 0) {
      $('#pollResultsGraph').hide();
      if (conf.show_results == "nn")
        $('#pollOnlyInstructors').show();
      else {
        if (!dontShowNoData) $('#pollNoData').show();
      }
    } else {
      $('#pollNotSubmitted').hide();
      var html = "";
      $('#pollResultsGraph').show();
      $('#pollTotalResponses').html(totalVotes);
      for (var z = 0; z < POLL_OPTS.length; z++) {
        var votes = 0;
        var haveVoters = false;
        if (res[z]) {
          if (typeof(res[z]) == "number")
            votes += res[z];
          if (typeof(res[z].length) != "undefined") {
            votes += res[z].length;
            haveVoters = true;
          }
        }
        html += '<div id="pollResultsGraphWrapper" class="clearFix">' +
                  '<div id="optionCount" class="optionResults">' + votes + ' (<span id="optionCountPercentage">' + Math.round(votes * 100 / totalVotes) + '%</span>)</div>' +
                  '<div id="" class="graphOuterLayer"><div id="" class="graphInnerLayer" style="width:' + Math.round(votes * 100 / totalVotes) + '%;"></div></div>' +
                  '<div id="optionName" class="optionLabel">' + POLL_OPTS[z] + '</div>';
        if (haveVoters) {
          html += '<div id="voters" class="showVoters clearFix"><a href="#" onclick="return false;"><span class="votersLabel" id="allVotersLink' + z + '" onclick="PD.showHideVoters(' + z + ');">Show Voters</span></a></div>' +
                  '<div id="allVoters' + z + '" class="clearFix" style="display:none;margin-top:5px;">';
          var users = "";
          for (var u = 0; u < res[z].length; u++)
              users += (users.length > 0 ? " &middot; " : "") + PA.getUserName(res[z][u]);
          html += users + '</div>';
        }
        html += '</div>';
      }
      $('#allPollResults').html(html);
    }
  },
  showHideVoters: function(nr) {
    if ($('#allVoters' + nr).is(':visible')) {
      $('#allVotersLink' + nr).html("Show Voters");
      $('#allVoters' + nr).hide();
    } else {
      $('#allVotersLink' + nr).html("Hide Voters");
      $('#allVoters' + nr).show();
    }
  },
  // helper function for showContent
  populateTextArea: function(topId, areaId, content, canEdit) {
    var top = $(topId);
    var editor = $(areaId);
    var content_text = "";
    //var last_update = '';
    top.find('.attachments').hide();
    if (content) {
      top.find('.dropdownWrapper').show();
      top.find('.subregionGrayText').show();
      top.show();
      if ((content.type == "question" || content.type == "note" || content.type == "poll") && content.status != "private")
        $('#question').removeClass('private');
      var idx = PD.history.q_idx || 0;
      if (content.type == "s_answer")
        idx = PD.history.sa_idx || 0;
      if (content.type == "i_answer")
        idx = PD.history.ia_idx || 0;
      if (idx >= content.history.length) {
        idx = content.history.length - 1;
        PD.history.hide[content.type] = 1;
      }
      var h0 = content.history[idx];
      content_text = h0.content;
      var hx = content.history[content.history.length - 1];

      // For ranking algorithm breakdown
      if (content.rank_debug) {
        content_text += content.rank_breakdown;
      }

      var content_text_raw = ProcessText(content_text, false, content.type);
      content_text = content.history[0].content;
      if (content_text) {
        content_text = content_text.replace(/&lt;/g, "<");
        content_text = content_text.replace(/&gt;/g, ">");
        content_text = content_text.replace(/&amp;/g, "&");
        content_text = content_text.replace(/&quot;/g, '"');
      }
      //last_update = '';
      var started_off = '';
      /*
      if (content.history.length > idx + 1)
        started_off = '<span class="smallText">Last updated by</span> <span class="bold" style="font-size:12px;">' + PA.getUserName(h0.uid, h0.anon) + '</span>';
      else
        started_off = '<span class="smallText">Started off by</span> <span class="bold" style="font-size:12px;">' + PA.getUserName(h0.uid, h0.anon) + '</span>';
      */
      //last_update = 'Last updated by <span class="value">' + PA.getUserName(h0.uid, h0.anon) + '</span> ' + h0.created.toRelativeTime();
      started_off = '<span class="smallText">' + h0.created.toRelativeTime() + ' by</span>' + PA.getUserName(h0.uid, h0.anon) + '</span>';
      if ((content.type == 'question' || content.type == 'note') && content.history.length > idx + 1)
        started_off = '<span class="smallText">' + hx.created.toRelativeTime() + ' by</span>' + PA.getUserName(hx.uid, hx.anon) + '</span>';
      if (!editor.is(":visible")) { // if editor is visible, someone is currently editing
        editor.val(content_text);
        content.collision = false;
      } else {
        if (content_text != editor.attr("old-value"))
          content.collision = true;
      }
      var contributors = 0;
      //var contributorNames = "";
      var contributorHash = {};
      content.history.forEach(function(item){
        if (!contributorHash[item.uid]) {
          contributors++;
          //if (!item.anon || item.anon == "no")
          //  contributorNames +=
          contributorHash[item.uid] = true;
        }
      });
      top.find('.contributorCount').html("" + contributors + " contributor" + (contributors > 1 ? "s" : ""));
      // populate attachments
      var attach = "";
      var att_cnt = 0;
      content.children.forEach(function(child) {
        if (child.type == "attach" && child.subject) {
          att_cnt++;
          PD.attachments[child.id] = child;
          var name = child.subject.split('|')[0].replace(/</g, "&lt;").replace(/>/g, "&gt;");
          var size = parseInt(child.subject.split('|')[1]);
          var size_str = "";
          if (size > 1000000) size_str = "" + Math.round(size / 1000000) + "M";
          else if (size > 1000) size_str = "" + Math.round(size / 1000) + "K";
          else size_str = "" + size + "b";
          var icon = getFileTypeIcon(name);
          var url = 'http://piazza-uploads.s3-website-us-east-1.amazonaws.com/attach/' + PD.networkId + '/' + content.id + '/' + child.id + '/' + name;
          attach += '<tr class="attachmentsItem" id="attach_' + child.id + '"><td class="preview"><img src="' + icon + '" /></td>';
          attach += '<td class="info"><div class="wrapper"><div class="title">' + name + '</div>';
          attach += '<div class="other"><span class="size">' + size_str + '</span>';
          attach += '<a href="' + url + '" target="_blank">Open</a>';
          //attach += '&nbsp;<a href="/download/' + child.id + '" target="_blank">Download</a>';
          if (PD.isInst || child.uid == PA.user.id)
            attach += '&nbsp;<a href="#" onclick="return PD.deleteItem(\'' + child.id + '\')">Delete</a>';
          if (icon.match("jpg\\.png|gif\\.png|png\\.png"))
            attach += '&nbsp;&nbsp;&nbsp;<a href="#" id="m_' + child.id + '" onclick="$(\'#m_' + child.id + '\').hide();$(\'#l_' + child.id + '\').show();return false;">Embed this image inline</a><span id="l_' + child.id + '" style="display:none;">Copy and paste this text where you want your image inline: &lt;img src="' + url + '"/&gt;</span>';
          attach += '</div></div></td></tr>';
        }
      });
      if (att_cnt > 0) {
        top.find('.att-count').html(att_cnt);
        top.find('.attachmentsList').html(attach);
        top.find('.attachments').show();
      }
      if (content.type == "question" || content.type == "note")
        $('#questionTitle').html(h0.subject);
    } else {
      editor.val(content_text);
      top.hide();
      content_text_raw = '';
    }
    if (topId.match('Response')) {
      if ( !PD.inEdit && ((PD.isInst && !PD.i_answer) || (!PD.isInst && !PD.s_answer)))
        PD.setAnswerButton(true);
      else
        PD.setAnswerButton(false);
    }
    if (topId == '#studentsResponse' && PD.s_answer)
      $('#studentResponseActions').show();
    if (topId == '#instructorsResponse' && PD.i_answer)
      $('#instructorResponseActions').show();
    //top.find('.last_edit').html(last_update);
    top.find('.started_off').html(started_off);
    top.find('.subregionText').html(content_text_raw);
    top.find('.plain_text').html("View Plain Text");
    if (DID_REPLACE_LATEST)
      top.find('.plain_text').show();
    else
      top.find('.plain_text').hide();

    editor.attr("old-value", content_text);
    if (content)
      editor.attr("type", content.type);
    else
      editor.attr("type", "");

    if (content && content.type == "poll") {
      if (content.data && content.data.has_voted && content.data.has_voted.length > 0) {
        for (var z = 0; z < content.data.has_voted.length; z++) {
          $('#pollButton' + content.data.has_voted[z]).attr('checked', true);
        }
        $('.pollButton').attr("disabled", true);
      }
      if (content.config.anonymous == "yes")
        $('#pollAnonymityPlaceholder').html("Your name will <b>not be visible to anyone</b>");
      if (content.config.anonymous == "stud")
        $('#pollAnonymityPlaceholder').html("Your name will be <b>visible to instructors but not students</b>");
      if (content.config.anonymous == "no")
        $('#pollAnonymityPlaceholder').html("Your name will be <b>visible to everyone</b>");
    }

    if (canEdit || (content && (content.type == "question" || content.type == "note"))) {
      //editor.addClass('editable');
      editor.attr('readonly', false);
      top.find('.edit-answer-button').show();
    } else {
      //editor.removeClass('editable');
      editor.attr('readonly', true && !PD.isInst);
      if (PD.isInst)
        top.find('.edit-answer-button').show();
      else
        top.find('.edit-answer-button').hide();
    }
    editor.height(40);
    editor.trigger("change");
    // check if we need to trigger edit mode based on draft
    if (PD.draft[PD.contentId] && PD.draft[PD.contentId][editor.attr("id")]) {
      //top.find('.edit-answer-button').hide();
      if (content != null) {
        if (content.type == "s_answer")
          $('#edit-student-button').click();
        if (content.type == "i_answer")
          $('#edit-instructor-button').click();
        if (content.type == "question" || content.type == "note")
          $('#edit-question-button').click();
      } else
        $('#bigAnswerButton').click();
    }
  },
  goHistory: function(idx, show) {
    // idx - how long back; 0 = most current
    PD.maxHistory = 0;
    PD.content.change_log.forEach(function(item){ if (item.type != "dupe") {PD.maxHistory++; } });
    PD.history.version = idx;
    if (idx > PD.maxHistory)
      idx = PD.maxHistory;
    PD.history.q_idx = 0;
    PD.history.ia_idx = 0;
    PD.history.sa_idx = 0;
    PD.history.tag_good = {};
    PD.history.tag_endorse = {};
    PD.history.hide_followups = 0;
    PD.history.hide_feedbacks = 0;
    PD.history.hide_attach = 0;
    PD.history.hide = {}; // whether or not to hide i_answer and s_answer; set by populateTextArea
    var cnt = 0;
    var max = PD.content.change_log.length - 1;
    for (var i = 0; i < idx; i++) {
      var item = PD.content.change_log[max - cnt];
      if (item.type == "dupe") {
        cnt++;//PD.history.hide_feedbacks++;
        if (cnt <= max)
          item = PD.content.change_log[max - cnt];
      }
      if (item.type == "s_answer" || item.type == "s_answer_update") PD.history.sa_idx++;
      if (item.type == "i_answer" || item.type == "i_answer_update") PD.history.ia_idx++;
      if (item.type == "question" || item.type == "update") PD.history.q_idx++;
      if (item.type == "tag_good") PD.history.tag_good[item.uid] = 1;
      if (item.type == "tag_endorse") PD.history.tag_endorse[item.uid] = 1;
      if (item.type == "followup") PD.history.hide_followups++;
      if (item.type == "feedback") PD.history.hide_feedbacks++;
      if (item.type == "attach") PD.history.hide_attach++;
      cnt++;
    }
    PD.curLog = PD.content.change_log[max - cnt];
    if (show) {
      //var scroll = $('#mainScrollPanel').scrollTop();
      PD.setRecentActivity(PD.curLog);
      PD.showContent(PD.content);
      //$('#mainScrollPanel').scrollTop(scroll);
      PD.displayHistoryItem();
    }
  },
  displayHistoryItem: function() {
    PD.setRecentActivity(PD.curLog);
    $('#question-history-description-wrapper').show();
  },
  recentActivityTemplates: {update:"updated the %w",
    s_answer: "started off the students' response", i_answer: "started off the instructors' response",
    question_update: "edited the question", note_update: "edited the note",
    attach: "added attachment", dupe: "marked duplicate to this %w",
    s_answer_update: "enhanced the students' response", i_answer_update: "enhanced the instructors' response",
    followup: "asked a follow-up question", feedback: "added a comment to the followup discussion",
    tag_endorse_add: "endorsed the %w", tag_endorse_remove: "un-endorsed the %w",
    tag_flag_add: "flagged the %w", tag_flag_remove: "un-flagged the %w",
    tag_good_add: "thinks this is a good %w", tag_good_remove: "no longer thinks this is a good %w",
    tag_disagree_add: "disagrees with %w", tag_disagree_remove: "no longer disagrees with %w"
  },
  setRecentActivity: function(activity) {
    if (!activity) return;
    var content = PD.content;
    PD.history.highlight = "question";
    if (activity.to) {
      if (PD.s_answer && activity.to == PD.s_answer.id) {content = PD.s_answer;PD.history.highlight = "s_answer";}
      if (PD.i_answer && activity.to == PD.i_answer.id) {content = PD.i_answer;PD.history.highlight = "i_answer";}
    }
    if (activity['for']) {
      if (PD.s_answer && activity['for'] == 's_answer') {content = PD.s_answer;PD.history.highlight = "s_answer";}
      if (PD.i_answer && activity['for'] == 'i_answer') {content = PD.i_answer;PD.history.highlight = "i_answer";}
    }
    var c_type = content.type;
    if (activity['for']) c_type = activity['for'];
    var what = PD.contentTypes[c_type];
    // special case for followup
    var type = activity.type;
    if (activity.action) type = type + "_" + activity.action;
    var tmp = PD.recentActivityTemplates[type];
    if (type == "followup" || type == "dupe") PD.history.highlight = "followup";
    if (type == "feedback") PD.history.highlight = "feedback";
    if (type == "attach") PD.history.highlight = "attach";
    if (type == "s_answer" || type == "s_answer_update") PD.history.highlight = "s_answer";
    if (type == "i_answer" || type == "i_answer_update") PD.history.highlight = "i_answer";
    if (type == 'create') {
      if (content.type == 'question') tmp = 'asked a question';
      if (content.type == 'note') tmp = 'posted a note';
    }
    if (tmp) tmp = tmp.replace(/%w/g, what);
    tmp = PA.getUserName(activity.uid) + " " + tmp;
    $('#question-history-image').html(PA.getUserPic(activity.uid));
   //     else tmp = JSON.stringify(activity);
    $('#question-history-timestamp').html(activity.when.toRelativeTime());
    $('#question-history-data').html(tmp + ". ");
    // activity.when  - timestamp
    // activity.type  - what type
    // activity.data  - more data about it
    // activity.uid   - user id, if not anonymous
  },
  hideHistory: function() {
    if (PD.checkNotActive()) return false;
    var hide = "yes";
    if (PD.no_history) hide = "no";
    PA.call_pj("content.show_hide_history", {cid:PD.contentId, hide:hide}, 1, function(data){
      if (PD.no_history) {
        PD.content.tags.remove(function(str){ return str == "no_history"; });
      } else {
        PD.content.tags.push("no_history");
      }
      PD.initHistoryBar();
    });
  },
  initHistoryBar: function() {
    if (!PD.content || !PD.content.tags) return;
    if (PD.content.tags.exist("no_history")) {
      $("#question-history-slider-no-history").show();
      $("#question-history-slider-no-history").html('History disabled by instructor');
      $("#question-history-slider").hide();
      $('.show-hide-history').html("Enable");
      $('#question-history-ticks').hide();
      PD.no_history = true;
      return;
    }
    $('.show-hide-history').html("Disable");
    PD.no_history = false;
    if (PD.maxHistory > 1) {
      $("#question-history-slider-no-history").hide();
      $("#question-history-slider").show();
      var val = PD.maxHistory;
      if (PD.history && PD.history.version) val = PD.maxHistory - PD.history.version;
      $("#question-history-slider").slider({min:1, max:PD.maxHistory, step:1, value:val,
            slide: function( event, ui ) {
				PD.goHistory( PD.maxHistory - ui.value, true );
			},
            start: function(event, ui) {
              if (PD.removeHistory) clearTimeout(PD.removeHistory);
              PD.displayHistoryItem();
              //PA.call('slide-dummy', {cid:PD.contentId, nid:PD.networkId}, 1);
            },
            stop: function(event, ui) {
              if (PD.removeHistory) clearTimeout(PD.removeHistory);
              PD.removeHistory = setTimeout(function(){
                $('#question-history-description-wrapper').fadeOut();
                PD.removeHistory = false;
                if (PD.history.borderObject) PD.history.borderObject.css("border-top", "none").css("border-bottom", "none");
              }, 1500); // fade out in 1.5 seconds
            }
          });
      // create tick marks
      $('#question-history-ticks').show();
      var ticks = '';
      var size = 100 / (PD.maxHistory - 1);
      //var isNew = false;
      for (var i = 0; i < PD.maxHistory - 1; i++) {
        if (i >= PD.content.version - 1 && PD.content.version > 1) {
          ticks += '<td style="width: ' + size + '%; border-left: 1px solid #d6d6d6; border-right: 1px solid #707D8D; background: #FCC;" title="New since your last visit"></td>';
          //isNew = true;
        } else
          ticks += '<td style="width: ' + size + '%; border-left: 1px solid #d6d6d6; border-right: 1px solid #707D8D;"></td>';
      }
      //if (isNew) {
	  // $('#question-history-tick-table').css("border-left",  "1px solid #707D8D");
	  // $('#question-history-tick-table').css("border-right", "1px solid #fff");
	  // } else {
      //$('#question-history-tick-table').css("border-left",  "1px solid #707D8D");
      //$('#question-history-tick-table').css("border-right", "1px solid #d6d6d6");
      //}
			$('#question-history-tick-row').html(ticks);
    } else {
      $('#question-history-ticks').hide();
      $("#question-history-slider-no-history").show();
      $("#question-history-slider-no-history").html('No history yet');
      $("#question-history-slider").hide();
    }
    $('#question-history-description-wrapper').hide();
    if (PD.removeHistory) clearTimeout(PD.removeHistory);
  },
  finalizeHistory: function() {
    if (PD.history.hide) {
      var hashToArray = function(hash){
        var all = [];
        for (var fid in hash)
          all.push(hash[fid])
        all = all.sort(function(a,b){
          if (b.updated > a.updated) return 1;
          if (b.updated < a.updated) return -1;
          return 0;
        });
        return all;
      };

      if (PD.history.hide.s_answer) {
        $("#studentsResponse").hide();
        $('.subregionHeaderArea.studentAnswer').hide();
      }
      if (PD.history.hide.i_answer) {
        $("#instructorsResponse").hide();
        $('.subregionHeaderArea.instructorAnswer').hide();
      }
      var allFollowups = hashToArray(PD.followups);
      var latestFollowup = 0;
      if (PD.history.hide_followups && PD.history.hide_followups > 0) {
        for (var i = 0; i < PD.history.hide_followups; i++)
          if (i < allFollowups.length) $('#' + allFollowups[i].id).hide();
        latestFollowup = PD.history.hide_followups;
        if (latestFollowup >= allFollowups.length) latestFollowup = allFollowups.length - 1;
      }
      var allFeedbacks = hashToArray(PD.feedbacks);
      var latestFeedback = 0;
      if (PD.history.hide_feedbacks && PD.history.hide_feedbacks > 0) {
        for (var i = 0; i < PD.history.hide_feedbacks; i++)
          if (i < allFeedbacks.length) $('#followup_div_' + allFeedbacks[i].id).hide();
        latestFeedback = PD.history.hide_feedbacks;
        if (latestFeedback >= allFeedbacks.length) latestFeedback = allFeedbacks.length - 1;
      }

      var allAttach = hashToArray(PD.attachments);
      var latestAttach = 0;
      if (PD.history.hide_attach && PD.history.hide_attach > 0) {
        for (var i = 0; i < PD.history.hide_attach; i++)
          if (i < allAttach.length) $('#attach_' + allAttach[i].id).hide();
        latestAttach = PD.history.hide_attach;
        if (latestAttach >= allAttach.length) latestAttach = allAttach.length - 1;
        if (PD.history.hide_attach == allAttach.length)
          $('.attachments').hide();
      }
      // highlight area
      var obj = false;
      if (PD.history.highlight == "question") obj = $('#questionText');
      if (PD.history.highlight == "s_answer") obj = $('#studentsResponseText');
      if (PD.history.highlight == "i_answer") obj = $('#instructorsResponseText');
      if (PD.history.highlight == "followup") obj = $('#' + allFollowups[latestFollowup].id);
      if (PD.history.highlight == "feedback") obj = $('#followup_div_' + allFeedbacks[latestFeedback].id);
      if (PD.history.highlight == "attach") obj = $('#attach_' + allAttach[latestAttach].id).find('.info');
      if (obj) {
        PD.history.borderObject = obj;
        var color = "#5e5";
        //if (PD.content.version < (PD.maxHistory - PD.history.version)) color = "#e55";
        obj.css('border-top', '2px solid ' + color);
        obj.css('border-bottom', '2px solid ' + color);
        $('#mainScrollPanel').scrollTop(0);
        $('#mainScrollPanel').scrollTop(obj.offset().top - 200);
      }
    }
  },
  populateAllTags: function(tags) {
    var tagContainer = $('#tags-container');
    tagContainer.empty();
    if (tags)
      tags.forEach(function(tag){
        tagContainer.append('<li>' + PD.makeTag(tag) + '</li>');
      });
  },
  makeTag: function(tag) {
    if (tag == 'no_history') return '';
    if (PA.staticContent && PA.staticContent != "demo")
      return '<a href="#" tutorialw="Filter questions tagged with #' + tag + '" class="tag ' + (tag == 'private' ? 'private' : '') + '" onclick="return PD.filterFeed(\'' + tag + '\', true)">#' + tag + '</a>';
    return '<a href="#" tutorialw="Filter questions tagged with #' + tag + '" class="tag ' + (tag == 'private' ? 'private' : '') + '" onclick="return PD.doAutoSearch(\'tag:' + tag + '\')">#' + tag + '</a>';
  },
  // remove previous stuff, and populate everything anew
  addFollowup: function(followup) {
    PD.totalFollowups++;
    PD.followups[followup.id] = followup;
    //var me = 'Student';
    //if (PD.isInst) me = 'Instructor';
    var canEdit = PD.isInst;
    if (followup.uid == PA.user.id) canEdit = true;
    var html = '';
    var role = '';
    var setBackground = '';
    if (PD.selectedNetwork.prof_hash && PD.selectedNetwork.prof_hash[followup.uid]){
      role = '(Instructor)';
      setBackground = 'instructor';
    }
    html += '<div class="followupThread" id="' + followup.id + '">';
    html += '<div class="followupComment '+setBackground+' clearFix" id="followup_div_' + followup.id + '">';
    html += '<div class="followupCommentMetadataWrapper">' +
                //'<div class="followupCommentUserImageWrapper">' + PA.getUserPic(followup.uid) + '</div>' +
              '</div>' +
              '<div class="followupCommentCounter">' + PD.totalFollowups + '</div>' +
              '<div class="followupCommentContent meta">' +
                '<div class="dupe-alert" id="followup-dupe-' + followup.id + '" style="display: none; border: none;"></div>' +
                '<div class="followupResolvedLabel">' +
                  '<div class="followup_radio">' +
                    '<input type="radio" name="' + followup.id + '_state" id="' + followup.id + '_res" value="resolved" onclick="PD.followupResolve(\'' + followup.id + '\', true);return false;"><label class="do_resolve" for="' + followup.id + '_res">resolved</label>&nbsp;' +
                    '<input type="radio" name="' + followup.id + '_state" id="' + followup.id + '_unres" value="unresolved" onclick="PD.followupResolve(\'' + followup.id + '\', false);return false;"><label class="do_unresolve" for="' + followup.id + '_unres">unresolved</label>&nbsp;' +
                  '</div>' +
				'</div>';
    html += '<div class="followupCommentUserImageWrapper">' + PA.getUserPic(followup.uid) + '</div>' +

          '<div class="followupCommentText">' +
				  '<span class="followupCommentUserName">' + PA.getUserName(followup.uid, followup.anon) + '</span>&nbsp;' +
          '<span class="followupCommentUserType user_name">'+role+'</span>&nbsp;' +
				  '<span class="followupCommentDate">(' + followup.updated.toRelativeTime() + ')</span>&nbsp;-&nbsp;' +
				  ProcessText(followup.subject) +
                '</div>';
      if (canEdit) {
        html += '<div class="followupCommentEdit">' +
                  '<div  id="newFollowupReplyEditor" class="subregionContentEditorWrapper newFollowupReplyEditorWrapper">' +
                    '<textarea class="subregionContentEditor mainComment contentText" id="edit_' + followup.id + '">' + followup.subject + '</textarea>' +
                  '</div>' +
                  '<div class="followupCommentActions2">' +
                    '<a href="#" class="followupbutton" onclick="return PD.saveFollowupComment(\'' + followup.id + '\');">save</a>' +
                    //'<span class="dotSeparator">&nbsp;·&nbsp;</span>' +
                    '<a id="followupEditCancel" onclick="return PD.cancelFollowupEdit(\'' + followup.id + '\');" href="#" class="followupbutton">cancel</a>' +
                    '<a href="#" class="subregionEditorEditCancelButton" onclick="return PD.cancelFollowupEdit(\'' + followup.id + '\');"></a>' +
                    '<a id="newFollowupPreviewButton" href="#" class="preview_button followupbutton" onclick="return previewContent(this);" style="float: right; margin-top:-4px;">preview</a>' +
                  '</div>' +
                '</div>';
      }
        html += '<div class="followupCommentActions">';/* +
                  //'<a href="#" class="jumpToNewFollowupReply" onclick="PD.openAndEditFollowup(\'' + followup.id + '\');return false;">Post a Reply</a>&nbsp;' +
                  //'<span class="dotSeparator">&nbsp;·&nbsp;</span>' +
                  '<a href="#" class="showHideFollowupReplies" onclick="PD.openCloseFollowup(\'' + followup.id + '\');return false;"><span class="action">Show</span> Replies (<span id="' + followup.id + '_size"></span>)</a>';
    */
    if (canEdit) {
      html += '<a href="#" class="subtle followupbutton edit" onclick="return PD.editFollowupItem(\'' + followup.id + '\')">edit</a>';
    }
    if (PD.isInst) {
      html += '<a href="#" class="subtle followupbutton" onclick="return PD.deleteItem(\'' + followup.id + '\')">delete</a>';
    }
    html +=     '</div>' +
              '</div>' +
            '</div>';
    html += '<div class="followupReplies" id="' + followup.id + '_children">';
    html += '</div>'; // followupReplies
    html += '</div>'; // followupThread


    $('#followupDiscussionsContent').append(html);
    PD.populateFollowup(followup);
    //$('#questionFollowupsLink').show();
    //if (followup.no_answer)
    //  $('#' + followup.id).find('.content').addClass('unanswered-followup');
    //$('.section.followups').show();
  },
  openCloseFollowup: function(fid) {
    var all = $('#' + fid + '_children');
    var isOpen = all.attr("open");
    if (isOpen == "open") {
      PD.closeFollowup(fid);
    } else {
      PD.openFollowup(fid);
    }
  },
  closeFollowup: function(fid) {
      var followup = $('#' + fid + '_children');
      followup.attr("open", "closed");
      followup.hide();
      var showText = $('#' + fid).find('.showHideFollowupReplies');
      showText.find(".action").text('Show');
  },
  openFollowup: function(fid) {
      //var followup = $('#' + fid + '_children');
      var followup = $('#' + fid + '_children');
      followup.attr("open", "open");
      followup.show();
      var showText = $('#' + fid).find('.showHideFollowupReplies');
      showText.find(".action").text('Hide');
  },
  openAndEditFollowup: function (fid) {
    PD.openFollowup(fid);
    $('#' + fid + "_text").focus();
  },
  populateFollowup: function(followup) {
    var area = $('#' + followup.id + '_children');
    var html = "";
    var me = 'Student';
    if (PD.isInst) me = 'Instructor';

    var size = 0;
    var isOpen = "open";
    if (area.attr("open") == "closed") isOpen = "closed";
    var custom_name = $('.custom-name').val();
    var custom_email = $('.custom-email ').val();
    area.attr("open", isOpen);
    if (followup.children) {
      size = followup.children.length;
      var dupe = false;
      followup.children.forEach(function(item){
        if (item.type == 'dupe') {
          dupe = item;
          return;
        }
        PD.feedbacks[item.id] = item;
        //var owner = 'Student';
        //if (item.uid && PA.users[item.uid] && PA.users[item.uid].admin) owner = 'Instructor';
        //if (item.uid == PA.user.id) owner = me;
    var canEdit = PD.isInst;
    var setBackground = '';
    var role = '';
      if (PD.selectedNetwork.prof_hash && PD.selectedNetwork.prof_hash[item.uid]){
        role = '(Instructor)';
        setBackground = 'instructor';
      }
    if (item.uid == PA.user.id) canEdit = true;
    html += '<div class="followupComment '+setBackground+' reply clearFix" id="followup_div_' + item.id + '">' +
              '<div class="followupCommentMetadataWrapper">' +
                '<div class="followupCommentUserImageWrapper">' + PA.getUserPic(item.uid) +
                '</div>' +
              '</div>' +
              '<div class="followupCommentContent">' +
                '<div class="followupCommentText">' +
				  '<span class="followupCommentUserName">' + PA.getUserName(item.uid, item.anon) + '</span>&nbsp;' +
          '<span class="followupCommentUserType user_name">' + role + '</span>&nbsp;' +
				  '<span class="followupCommentDate">(' + item.updated.toRelativeTime() + ')</span>&nbsp;-&nbsp;' +
                  ProcessText(item.subject) +
                '</div>';
        if (canEdit) {
          html += '<div class="followupCommentEdit">' +
                    '<div id="newFollowupReplyEditor" class="subregionContentEditorWrapper newFollowupReplyEditorWrapper">' +
                      '<textarea class="subregionContentEditor replyComment contentText" id="edit_' + item.id + '">' + item.subject + '</textarea>' +
                    '</div>' +
                    '<div class="followupCommentActions2">' +
                      '<a href="#" class="followupbutton" onclick="return PD.saveFollowupComment(\'' + item.id + '\');">save</a>' +
                      //'<span class="dotSeparator">&nbsp;·&nbsp;</span>' +
                      '<a id="followupEditCancel" onclick="return PD.cancelFollowupEdit(\'' + followup.id + '\');" href="#" class="followupbutton">cancel</a>' +
                      '<a href="#" class="subregionEditorEditCancelButton" onclick="return PD.cancelFollowupEdit(\'' + item.id + '\');"></a>' +
                      '<a id="newFollowupPreviewButton" href="#" class="preview_button followupbutton" onclick="return previewContent(this);" style="float: right; margin-top:-4px">preview</a>' +
                    '</div>' +
                  '</div>';
        }
          html += '<div class="followupCommentActions">';
        if (canEdit) {
          html += '<a href="#" class="subtle followupbutton edit"" onclick="return PD.editFollowupItem(\'' + item.id + '\');">edit</a>';
          if (PD.isInst)
            html += '<span class="dotSeparator"></span>';
        }
        if (PD.isInst) {
          html += '<a href="#" class="subtle followupbutton" onclick="return PD.deleteItem(\'' + item.id + '\');">delete</a>&nbsp;';
        }
    html +=   '</div>' +
            '</div>' +
          '</div>';
      });
    }
    html += '<div class="followupComment reply newFollowupFake clearFix" onclick="return PD.showFollowupReply($(this));">' +
      '<span href="#" id="newFollowupReplyEditor" class="subregionContentEditorWrapper" style="display: block; color:#9da5a8; margin-bottom: 0px;">Write a reply...</span></div>';
    html += '<div class="followupComment reply newFollowupReply editMode clearFix" style="display:none;">' +
              '<div class="followupCommentMetadataWrapper">' +
                '<div class="followupCommentUserImageWrapper">' + PA.getUserPic(PA.user.id) + '</div>' +
                '<div class="followupCommentMetadata"><span class="followupCommentUserName">' + PA.user.name + '</span>' +
                  '<span class="followupCommentUserType">' + me + '</span>' +
                '</div>' +
              '</div>' +
              '<div class="followupCommentContent">';
    if (PA.user.is_public) {
      html +=     '<div class="blockItem">' +
                      '<label style="width: 50px;display: inline-block;">Name:</label>' +
                      '<input type="text" id="' + followup.id + '-name" class="custom-name" value="' + custom_name + '" style="width:150px;"/>' +
                      '<em style="color:#555;">(optional)</em>' +
                  '</div>' +
                  '<div class="blockItem">' +
                      '<label style="width: 50px;display: inline-block;">Email:</label>' +
                      '<input type="text" id="' + followup.id + '-email" class="custom-email" value="' + custom_email + '" style="width:150px;"/>' +
                      '<em style="color:#555;">(optional; we\'ll notify when answer is updated)</em>' +
                  '</div>';
    }
    html +=     '<div id="newFollowupReplyEditor" class="subregionContentEditorWrapper newFollowupReplyEditorWrapper">' +
                  '<textarea class="subregionContentEditor mainComment contentText" id="' + followup.id + '_text"></textarea>' +
                '</div>' +
                '<div class="subregionCheckboxWrapper">';
        // if (!PD.isInst) {
        //  html += 'My name visible to <input class="iradio" type="radio" name="'+followup.id+'-followup-anonymity" id="'+followup.id+'-followup-anonymous-0" value="Visible to everyone" checked /><label for="visibleToEveryone" class="ilabel">everyone</label>&nbsp;' +
        //          '<input class="iradio" type="radio" name="'+followup.id+'-followup-anonymity" id="'+followup.id+'-followup-anonymous-1" value="Visible only to instructors" /><label for="anonymousToStudents" class="ilabel">only instructors</label>&nbsp;';
        //    if (PD.selectedNetwork.anonymity == "full") {
        //    html += '<span class="full_anonymity">' +
        //              '<input class="iradio" type="radio" name="'+followup.id+'-followup-anonymity" id="'+followup.id+'-followup-anonymous-2" value="Visible to no one" /><label for="anonymousToEveryone" class="ilabel">no one</label>&nbsp;' +
        //            '</span>';
        //    }
        //}
        html += '</div>';
        html += '<div class="postActionsBar edit" style="margin: 0;">';
        html += '<div class="leftIcons">'
        html += '<div class="postActionsButton submitButton"><span><a href="#" onclick="PD.postComment(\'' + followup.id + '\'); return false;">Submit</a></span></div>';
        html += '<div id="newFollowupPreviewButton" href="#" class="postActionsButton preview_button" ><span><a href="#" class="preview_button" onclick="return previewContentComment(this);">Preview</a></span></div>';
        if (!PD.isInst && !PA.user.is_public && PD.selectedNetwork.anonymity != "no") {
          html += '<span class="anonymity-dropdown">';
          html += '&nbsp;&nbsp;as&nbsp;&nbsp;' +
                  '<select id="'+followup.id+'-followup-anonymous" class="anonymity-select">' +
                  '<option class="my-name" value="no">' + PA.user.name + '</option>' +
                  '<option value="stud">Anonymous to classmates</option>';
                if (PD.selectedNetwork.anonymity == "full")
                  html += '<option value="full" class="full_anonymity">Anonymous to everyone</option>';
          html += '</select>';
          html += '</span>';
        }
        html += '</div>';
        html += '<div class="rightIcons">';
		html += '<div href="#" class="postActionsButton"><span><a id="followupReplyCancel" href="#" onclick="return PD.hideFollowupReply($(this));">Cancel</a><a href="#" class="subregionEditorReplyCancelButton" onclick="return PD.hideFollowupReply($(this));"></span></div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>'; // followupComment
    var old_text = $('#' + followup.id + "_text").val();
    area.html(html);
    $('#' + followup.id + '_size').html(size);
    if (old_text && old_text.length > 0) {
      $('#' + followup.id + "_text").val(old_text);
      PD.showFollowupReply(area.find(".newFollowupFake"));
    }
    if (isOpen == "closed")
      PD.closeFollowup(followup.id);
    else
      PD.openFollowup(followup.id);
    if (followup.no_answer == 1) {
      $("#" + followup.id + "_unres").attr('checked', true);
      $('#' + followup.id).addClass('unresolved');
      $('#followup-encorp-help-' + followup.id).hide();
    } else {
      $("#" + followup.id + "_res").attr('checked', true);
      $('#' + followup.id).removeClass('unresolved');
      $('#followup-encorp-help-' + followup.id).show();
    }
    if (dupe) {
      $('#followup-encorp-help-' + followup.id).hide();
      var text = "This was marked a duplicate to the question/note above by " + PA.getUserName(dupe.uid) + " " + dupe.updated.toRelativeTime();
      if (dupe.subject && dupe.subject.length > 0)
        text += '<br/>"' + dupe.subject + '"';
      $('#followup-dupe-' + followup.id).html( text );
      $('#followup-dupe-' + followup.id).show();
    }
    $('#' + followup.id + '_text').autogrow(true);
    followup.children.forEach(function(item){
      $('#edit_' + item.id).autogrow(true);
    });
    $('#edit_' + followup.id).autogrow(true);
  },
  showFollowupReply: function(item) {
    if (needCaptcha(function(){PD.showFollowupReply(item);})) return false;
    item.hide();
    $('.newFollowupReply').hide();
    $('.newFollowupReply').parent().find('.newFollowupFake').show();
    var real = item.parent().find('.newFollowupReply');
    real.parent().find('.newFollowupFake').hide();
    //alert(real.attr('class'));
    if (PD.content.status == "private") {
      // find anonymity selector
      real.find('.anonymity-select').val('stud');
      real.find('.anonymity-select').find('option').each(function() {
        if ($(this).val() == "no")
          $(this).attr('disabled', true);
      });
    }
    real.show();
    real.find('textarea').height(160);
    real.find('.subregionContentEditorWrapper').addClass('focus');
    real.find('.subregionContentEditorWrapper textarea').focus();

    return false;
  },
  hideFollowupReply: function(item) {
    var real = item.closest('.newFollowupReply');
    var newFollowupText = real.find('.subregionContentEditor.mainComment').val();
      if(newFollowupText == ""){
        real.find('textarea').val('');
        real.hide();
        real.parent().find('.newFollowupFake').show();
        return false;
      }else{
        PD.selectedPostPanel_Followup_Reply_ActivateClickEvents_CancelButton();
      }
    return false;
  },
  toggleFollowupNotify: function() {
      var state = $('#followup_notify_link').find('.toggleText').text();
      if (state == 'ON') {
          PD.turnOnFollowupNotify();
      } else {
          PD.turnOffFollowupNotify();
      }
  },
  turnOnFollowupNotify: function() {
      $('#followup_notify_link').find('.toggleText').html('OFF');
  },
  turnOffFollowupNotify: function() {
      $('#followup_notify_link').find('.toggleText').html('ON');
  },
  addContributor: function(area, id) {
    area.append('<li>' + Piazzza.Ajax.getUserPic(id) + '</li>');
  },
  feedbackTagTypes: ['tag_good', 'tag_endorse', 'tag_disagree'],
  feedbackName:  {tag_good:'Good Question!', tag_endorse:'Endorse', tag_disagree:'Needs Improvement'},
  feedbackClass: {tag_good:'subregionContentGoodQuestionButton', tag_endorse:'subregionContentGoodAnswerButton',
                  tag_disagree:'subregionContentPoorAnswerButton'},
  feedbackStatus: {tag_endorse: '~ An instructor (%name) endorsed this %w ~', tag_flag: 'Your instructor noticed problems with this %w',
                   tag_good: '~ An instructor (%name) thinks this is a good %w ~', tag_disagree: 'Your instructor thinks this needs improvement',
                   tag_need_detail: 'Your instructor suggests the asker think harder'},
  toggleFeedbackTags: function(areaId, content) {
    var area = $(areaId);
    var totalParticipants = {};
    var counts = {};
    var statusArea = area.find('.subregionMessage');
    if (!content || !content.my_status || !content.my_status.score || content.my_status.score < 500) {
      if (content) content.my_status = false;
      statusArea.html("");
      statusArea.hide();
    }
    if (!content) return; // this is not visible if content doesn't exist
    PD.feedbackName.tag_good = 'Good ' + PD.contentTypes[content.type] + '!';
    PD.feedbackTagTypes.forEach(function(type){
      var span = area.find('.' + PD.feedbackClass[type]);
      //var participants = area.find('.' + type + '_people').empty();
      if (content[type]) {
        var cnt = content[type].length;
        span.find('.' + type).html((cnt > 0 ? " (" + cnt + ")" : ""));
      }
      var undo = span.find('.undo');
      if (content['is_' + type]) {
        span.parent().addClass('selected');
        span.parent().find('.buttonArrow').addClass('selected');
        span.parent().find('a span').css({'color':'white'});
        if (PD.isInst){
          undo.html('undo');
          undo.show();
        }else{
          undo.show().siblings().hide();
        }
      } else {
        span.parent().removeClass('selected');
        span.parent().find('.buttonArrow').removeClass('selected');
        span.parent().find('a span').css({'color':'#97A4B0'});
        if (PD.isInst){
          undo.html('');
          undo.hide();
        }else{
          undo.hide().siblings().show();
        }
      }
      if (content[type] && content[type].length > 0) {
        counts[type] = {s:0, i:0, t:0, names:"", adm:""};
        content[type].forEach(function(usr) {
          // make sure that it is not a black-list history item
          if (PD.history[type] && PD.history[type][usr.id]) return;
          counts[type].names += usr.name + "<br>";
          counts[type].t++;
          if (usr.admin) {
            counts[type].i++;
            counts[type].adm = usr.name;
          } else
            counts[type].s++;
          //PD.addContributor(participants, usr.id);
          totalParticipants[usr.id] = 1;
        });
        if (counts[type].i > 0) {
          var status = PD.feedbackStatus[type];
          status = status.replace("%w", PD.contentTypes[content.type]);
          status = status.replace("%name", counts[type].adm);
          if (type == "tag_good" || type == "tag_endorse")
            PD.addStatus(statusArea, content, status, 100, false, 2);
          if (type == "tag_need_detail" || type == "tag_disagree")
            PD.addStatus(statusArea, content, status, 101, false, 1);
        }
      }
    });
    // Good "X" Dropdown
    PD.populateGoodRatings(area, content);

    // Contributor Dropdown
    PD.populateContributions(area, content);

    //if (content.tag_disagree && content.tag_disagree.length > 0)
    //  status.push(content.tag_disagree.length + " Flagged");
    //area.find('.subregionGrayText').html(status_str);
    $('.show-tipsy').tipsy({gravity: 'n', html: true});
  },
  activateGoodRatings: function() {
    PD.UIElements.UIDropdownSelector.initOne($('#QuestionGoodRatings'), null, null, 'click');
    PD.UIElements.UIDropdownSelector.initOne($('#InstructorsResponseGoodRatings'), null, null, 'click');
    PD.UIElements.UIDropdownSelector.initOne($('#StudentsResponseGoodRatings'), null, null, 'click');
  },
  populateGoodRatings: function(area, content) {
    var arr;
    if (content.type.match(/answer/i))
      arr = content.tag_endorse;
    else
      arr = content.tag_good;
    var cnt = 0;
    var ratings = '';
    area.find('li.goodratings ul.UIDropdownMenu').empty();
    arr.forEach(function(usr) {
      if (PD.history.tag_good && PD.history.tag_good[usr.id])
        return;
      cnt++;
      var role = 'Student';
      if (PD.selectedNetwork.prof_hash && PD.selectedNetwork.prof_hash[usr.id])
        role = 'Instructor';
      ratings += '<li class="UIImageItem UIMessageItem UIContribItem clearFix">';
        ratings += PA.getUserPic(usr.id);
        ratings += '<div class="itemText">';
          ratings += '<span class="UIUserListing">';
            ratings += '<span class="userName">';
              ratings += PA.getUserName(usr.id);
            ratings += '</span>';
            ratings += '<br/>';
            ratings += '<span class="userRole">';
              ratings += role;
            ratings += '</span>';
          ratings += '</span>';
        ratings += '</div>';
      ratings += '</li>';
    });
    area.find('.postActionsButton.goodratings span.count').html(cnt);
    if (cnt > 0) {
      area.find('.postActionsButton.goodratings ul.UIDropdownMenu').html(ratings);
      area.find('.postActionsButton.goodratings').show();
      area.find('.postActionsButton.goodratings .post-actions-arrow').html('&#9662;');
    }else{
        //area.find('.postActionsButton.goodratings ul.UIDropdownMenu').html('');
        area.find('.postActionsButton.goodratings .post-actions-arrow').html('');
      }
  },
  activateContributions: function() {
    PD.UIElements.UIDropdownSelector.initOne($('#InstructorsResponseContributors'), null, null, 'click');
    PD.UIElements.UIDropdownSelector.initOne($('#StudentsResponseContributors'), null, null, 'click');
    PD.UIElements.UIDropdownSelector.initOne($('#QuestionContributors'), null, null, 'click');
  },
  populateContributions: function(area, content) {
    var cnt = 0;
    var $li = area.find('.postActionsButton.more');
    $li.find('ul.UIDropdownMenu').empty();
    if (content.type.match(/answer/i) || content.type.match(/question/i) || content.type.match(/note/i)) {
      var contributors = '';
      if (PD.content.change_log) {
        for (var i = 0; i < PD.content.change_log.length; i++) {
          var hist = PD.content.change_log[i];
          if (content.type.match(/answer/i) && !hist.type.match(content.type))
            continue;
          if (!content.type.match(/answer/i) && !hist.type.match(/^(create|update)$/i))
            continue;
          cnt++;
          var dte = hist.when.toDate();
          var month = dte.getMonth() + 1;
          if (dte.getMonth < 10)
            month = '0' + month;
          var date = dte.getDate();
          if (date < 10)
            date = '0' + date;
          var date_str = month + '/' + date + '/' + dte.getFullYear();
          date_str += ' at ';
          var hours = dte.getHours();
          var pm = 'am';
          if (hours >= 12) {
            pm = 'pm';
            if (hours != 12)
              hours = hours - 12;
          }
          var minutes = dte.getMinutes();
          if (minutes < 10)
            minutes = '0' + minutes;
          date_str += hours + ':' + minutes + pm;
          var role = 'Student';
          if (PD.selectedNetwork.prof_hash && PD.selectedNetwork.prof_hash[hist.uid])
            role = 'Instructor';
          var tmp = 'Created';
          if (hist.type.match(/update/i))
            tmp = 'Updated';
          contributors += '<li class="UIImageItem UIMessageItem UIContribItem clearFix" onclick="PD.setCurrHistory(' + (i + 1) + ');return false;">';
            contributors += PA.getUserPic(hist.uid);
            contributors += '<div class="itemText">';
              contributors += '<span class="UIUserListing">';
                contributors += '<span class="userName">';
                  contributors += PA.getUserName(hist.uid);
                contributors += '</span>';
                //contributors += '&mdash;';
                contributors += '<span class="userRole">(';
                  contributors += role;
                contributors += ')</span>';
              contributors += '</span>';
              contributors += '<br/>';
              contributors += '<span class="message">';
                contributors += '<em class="date">';
                contributors += tmp + ' ' + date_str;
                contributors += '</em>';
              contributors += '</span>';
            contributors += '</div>';
          contributors += '</li>';
        }
      }
    }
    //if (cnt > 0) {
      area.find('.postActionsButton.more span.count').html(cnt);
      if(cnt == 1){
        area.find('.postActionsButton.more span.edits').html('edit');
      }else{
        area.find('.postActionsButton.more span.edits').html('edits');
      }
    $li.find('ul.UIDropdownMenu').html(contributors);
    if(cnt>0){
      $li.show();
      $('.postActionsButton.contributors .post-actions-arrow').show();
    }else{
      $li.hide();
      $('.postActionsButton.contributors .post-actions-arrow').hide();
    }
    //} else {
    //  $li.hide();
    //}
  },
  setCurrHistory: function(idx) {
    if (PD.maxHistory < 2)
      return;
    if (PD.no_history) return;
    $('#question-history-slider').slider("option", "value", idx);
    PD.displayHistoryItem();
    PD.goHistory(PD.maxHistory - idx, true);
    if (PD.removeHistory) clearTimeout(PD.removeHistory);
    PD.removeHistory = setTimeout(function(){
      $('#question-history-description-wrapper').fadeOut();
      PD.removeHistory = false;
      if (PD.history.borderObject) PD.history.borderObject.css("border-top", "none").css("border-bottom", "none");
    }, 1500); // fade out in 1.5 seconds
  },
  addStatus: function(area, content, text, score, edits, color) {
    if (edits) {
      if (edits.length > 0) {
        //alert(JSON.stringify(edits));
        var editors_text = '&#8764; ' + edits.length + ' other user' + (edits.length > 1 ? 's are' : ' is') + ' editing this right now. &#8764;';
        if (content)
          content.my_status = {score:1000, color:1, text:editors_text};
        else {
          area.addClass('warningMessage');
          area.html(editors_text);
          area.show();
        }
      } else {
        if (content) {
          if (!content.my_status || content.my_status.score == 1000)
            content.my_status = {score:0, color:0, text:''};
        } else {
          area.removeClass('warningMessage');
          area.html('');
          area.hide();
        }
      }
    }
    if (!content) return;
    if (content && score > 0 && (!content.my_status || score >= content.my_status.score)) {
      content.my_status = {score:score, text:text, color:color};
    }
    // show status
    if (content.my_status) {
      area.removeClass('warningMessage');
      area.removeClass('goodMessage');
      if (content.my_status.color == 1) area.addClass('warningMessage');
      if (content.my_status.color == 2) area.addClass('goodMessage');
      area.html(content.my_status.text);
      if (!content.my_status.text)
        area.hide();
      else
        area.show();
    } else
      area.hide();
  },
  showHideBookmark: function() {
    if (PA.user.is_public) return; // do not show follow buttons to public users
    if (Piazzza.Dashboard.content.is_bookmarked) {
      $('.question-follow').hide();
      $('.question-unfollow').show();
      $('.postActionsButton.follow').addClass('selected');
      $('.postActionsButton.follow .buttonArrow').addClass('selected');
      $('.postActionsButton.follow > span a').css({'color':'white'});

    } else {
      $('.question-follow').show();
      $('.question-unfollow').hide();
      $('.postActionsButton.follow').removeClass('selected');
      $('.postActionsButton.follow .buttonArrow').removeClass('selected');
      $('.postActionsButton.follow > span a').css({'color':'#97A4B0'});
    }
  },

  //
  // ========================    STATS		  ==============
  //
  updateOnlineUsers: function() {
      if (PD.selectedNetwork) {
        var num = PD.selectedNetwork.online_users;
        if (typeof(num) == "object")
          num = num.length;
        if (PA.staticContent && num < 40)
          num = 40 + Math.floor(Math.random()*20);
        if (num > 99999) num = 99999;
        $('#users_online_stat').html(num);
        if (!PD.selectedNetwork.users_7 || num > PD.selectedNetwork.users_7) {
          if (PA.staticContent)
            num += Math.floor(10*Math.random());
          PD.selectedNetwork.users_7 = num;
          $('.online-this-week').html(num);
        }
      }
  },
  //
  // ========================    ACTIONS    ==========================
  //
  newFollowup: function() {
    if (PD.checkNotActive()) return false;
    var subject = $('#newFollowupEditor').val();
    var ct = PD.content;
    var anon = $('#followup-anonymous').val();
    var item = PD.curItem;
    PA.call_pj("content.create", {nid:PD.networkId, cid:ct.id, type:'followup', subject:subject,
      content:"", anonymous:anon, name:$('#new-followup-name').val(), email:$('#new-followup-email').val()},
      $('#followupDiscussions'),
      function(data) {
        if (item) item.book = true;
        if (!ct.children) ct.children = [];
        PD.draft[PD.contentId] = {};
        ct.children.push(data);
        PD.addFollowup(data);
        $('#newFollowupEditor').val('');
        $('.count_followups').html(PD.totalFollowups);
        $('#followupDiscussionsContent').show();
        $('#newFollowupThread').hide();$('#newFollowup').show();
        PD.content.is_bookmarked = true;
        PD.showHideBookmark();
    }, function(error) {
        //alert(error);
    });
    $('.custom-name').val($('#new-followup-name').val());
    $('.custom-email').val($('#new-followup-email').val());
  },
  // when owner decides to save question
  saveQuestion: function() {
    if (PD.checkNotActive()) return false;
    var subject = $('#question-subject').val();
    var content = $('#question-editor').val();
    var anon = $('#question-edit-anonymous').val();
    var type = 'question';
    if ($('#question-type-1').attr('checked')) type = 'note';
    if ($('#question-type-2').attr('checked')) type = 'poll';
    var obj = {cid:PD.contentId, subject:subject, content:content, anonymous:anon, type:type};
    PA.call_pj("content.update", obj, $("#question"),
      function(data) {
        var q = $('#question');
        PD.draft[PD.contentId] = {};
        q.find('.subregionContent[class!="editMode"]').show();
        q.find('.subregionContent.editMode').hide();
        q.find('.postActionsBar').show();
        q.find('.postActionsBar.edit').hide();
        PD.content.subject = subject;
        PD.content.history[0].subject = subject;
        PD.content.history[0].content = content;
        PD.content.type = type;
        PD.inEdit = false;
        PD.showContent(PD.content);
    }, function(err) { setTimeout(function(){alert(err);}, 1000); });//anonymous
  },
  concurrencyConflict: function(content, body) {
    $('#concurrency_conflict_dialog').jqmShow();
    $('#conflictServerResponse').val(content.history[0].content);
    $('#conflictMyResponse').val(body);
    $('#conflictMyResponse').focus();
  },
  doVote: function() {
    if (!PD.content || PD.content.type != "poll") return;
    var arr = [];
    $('.pollButton').each( function (idx, item) {
      if ($(item).attr('checked')) {
        var id = $(item).attr("id").replace("pollButton", "");
        arr.push(id);
      }
    });
    if (arr.length == 0) {
      alert("Please make your selection");
      return;
    }
    PA.call_pj("content.vote", {cid:PD.contentId, votes:arr}, null, function(data) {
      PD.content.data = data;
      PD.populateTextArea('#question', '#question-editor', PD.content, PD.canEditQuestion);
      PD.populatePoll();
    }, function(err) {
      alert(err);
    });
  },
  saveAnswer: function(type, editor, top) {
    if (PD.checkNotActive()) return false;
    if (!editor && !type && !top && PD.concurrentSave) {
      type = PD.concurrentSave.type;
      editor = PD.concurrentSave.editor;
      top = PD.concurrentSave.top;
      $(editor).val($('#conflictServerResponse').val());
    }
    var body = $(editor).val();
    // Todo: Add anonymous radio buttoin
    var content = null;
    if (type == 's_answer') content = PD.s_answer;
    if (type == 'i_answer') content = PD.i_answer;
    var revision = 0;
    if (content && content.history) revision = content.history.length ;
    if (PD.draft[PD.contentId] && PD.draft[PD.contentId].initial_saved &&
      PD.draft[PD.contentId].initial != revision && content) {
      content.collision = true;
      PD.draft[PD.contentId].initial = revision;
    }
    if (content && content.collision) {
      PD.concurrentSave = {type:type, editor:editor, top:top};
      PD.concurrencyConflict(content, body);
      content.collision = false;
      return false;
    }
    var obj = {content:body, anonymous:'no', type:type, cid:PD.contentId, revision:revision,
      name:$('#s-answer-name').val(), email:$('#s-answer-email').val()};
    if (PD.fixedConcurrent) {obj.collision = true;}
    $('.custom-name').val($('#s-answer-name').val());
    $('.custom-email').val($('#s-answer-email').val());
    var anon = $('#answer-anonymous').val();
    if (type == 's_answer') {obj.anonymous = anon;}
    var item = PD.curItem;
    PA.call_pj("content.answer", obj, null,
        function(data) {
          if (data.bad) {
            if (type == 's_answer') {
              PD.s_answer = data.bad;
              PD.populateTextArea('#studentsResponse', '#student-answer-editor', PD.s_answer, !PD.isInst);
            }
            if (type == 'i_answer') {
              PD.i_answer = data.bad;
              PD.populateTextArea('#instructorsResponse', '#instructor-answer-editor', PD.i_answer, PD.isInst);
            }
            if (data.bad.history)
              PD.draft[PD.contentId].initial = data.bad.history.length;
            PD.concurrentSave = {type:type, editor:editor, top:top};
            PD.concurrencyConflict(data.bad, body);
            return false;
          }
          if (item) item.book = true;
          $(editor).attr("old-value", content);
          $(top).find('.subregionContent[class!="editMode"]').show();
          $(top).find('.subregionContent.editMode').hide();
          $(top).find('.postActionsBar').show();
          $(top).find('.postActionsBar.edit').hide();
          $('.super-edit-answer').hide();
          PD.inEdit = false;
          PD.draft[PD.contentId] = {};
          PD.content.no_answer = false;
          $('#questionLabel').text('Student Question');
          $('#question').removeClass('unanswered');
          if (type == 's_answer') {
            PD.s_answer = data;
            var found = false;
            for (var q = 0; q < PD.content.children.length; q++)
              if (PD.content.children[q].type == "s_answer") {
                PD.content.children[q] = data;
                found = true;
              }
            if (!found) PD.content.children.push(data);
            PD.populateTextArea('#studentsResponse', '#student-answer-editor', PD.s_answer, !PD.isInst);
            PD.toggleFeedbackTags('#studentsResponse', PD.s_answer);
          }
          if (type == 'i_answer') {
            PD.i_answer = data;
            var found = false;
            for (var q = 0; q < PD.content.children.length; q++)
              if (PD.content.children[q].type == "i_answer") {
                PD.content.children[q] = data;
                found = true;
              }
            if (!found) PD.content.children.push(data);
            PD.populateTextArea('#instructorsResponse', '#instructor-answer-editor', PD.i_answer, PD.isInst);
            PD.toggleFeedbackTags('#instructorsResponse', PD.i_answer);
          }
          PD.cancelAnswer($(top));
          PD.content.is_bookmarked = true;
          PD.showHideBookmark();
      });
  },
  cancelAnswer: function(top) {
    PA.call_pj("content.cancel_edit", {cid:PD.editContentId}, 1);
    if (!top) return;
    var editor  = top.find('.contentText');
    var subj = $('.question-subject').attr("old-value");
    $('.question-subject').val(subj);
    editor.val(editor.attr("old-value"));
    Piazzza.Dashboard.inEdit = false;
    editor.trigger("change");
    top.find('.subregionContent[class!="editMode"]').show();
    top.find('.subregionContent.editMode').hide();
    top.find('.postActionsBar').show();
    top.find('.postActionsBar.edit').hide();
    //editor.hide();
    //displ.show();
    //saveBar.hide();
    $('#super-edit-answer').hide();
  },
  bookmark: function(do_book) {
    if (PD.checkNotActive()) return false;
    var method = "content.bookmark";
    if (!do_book) method = "content.unbookmark";
    var item = PD.curItem;
    PA.call_pj(method, {cid:Piazzza.Dashboard.contentId}, 1,
        function(data) {
          if (item) item.book = do_book;
          Piazzza.Dashboard.content.is_bookmarked = !Piazzza.Dashboard.content.is_bookmarked;
          if (do_book){
            PD.content.bookmarked++;
            //$('.postActionsButton.follow').addClass('selected');
            //$('.postActionsButton.follow .buttonArrow').addClass('selected');
            //$('.postActionsButton.follow > span a').css({'color':'white'});
          }else{
            PD.content.bookmarked--;
            //$('.postActionsButton.follow').removeClass('selected');
            //$('.postActionsButton.follow .buttonArrow').removeClass('selected');
            //$('.postActionsButton.follow > span a').css({'color':'#97A4B0'});
          }
          //if (PD.content.bookmarked > 0) {
            $('.postActionsButton.follow div.buttonNumber span.count').html(PD.content.bookmarked);
            $('.postActionsButton.follow').show();

          //} else
           // $('.postActionsButton.follow').hide();
          Piazzza.Dashboard.showHideBookmark();
      });
  },
  markUnread: function(cid, markRead) {
    if (!cid) cid = PD.contentId;
    $('#if_not_new').hide();
    if (markRead) {
      PA.call_pj("content.view", {cid:cid}, 1, function(data){
        //mark it read on the feed
        PD.feed.forEach(function(item){
          if (item.id == cid) {
            item.is_new = false;
            PD.feedItem_Update(item);
          }
        });
      });
    } else {
      PA.call_pj("content.mark_unread", {cid:cid}, 1,
        function(data) {
          //mark it unread on the feed
          PD.feed.forEach(function(item){
            if (item.id == cid) {
              item.is_new = true;
              PD.feedItem_Update(item);
            }
          });
        });
    }
  },
  markAllRead: function() {
    PA.call_pj("network.mark_all", {nid:PD.selectedNetwork.id,read:"read"}, null, function(data) {
      // set feed as all read and regenerate
      PD.feed.forEach(function(item) {
        item.is_new = false;
        item.version = item.main_version;
        //PD.feedItem_Update(item);
      });
      PD.setNewFeed(PD.feed);
    }, function(err) {
      alert(err);
    });
  },
  markAllUnread: function() {
    PA.call_pj("network.mark_all", {nid:PD.selectedNetwork.id,read:"unread"}, null, function(data) {
      PD.feed.forEach(function(item) {
        item.is_new = true;
      });
      PD.setNewFeed(PD.feed);
    }, function(err) {
      alert(err);
    });
  },
  followupResolve: function(followupId, res) {
    if (needCaptcha(function(){PD.followupResolve(followupId, res);})) return;
    if (PD.checkNotActive()) return false;
    var params = {cid:followupId};
    params.resolved = res;
    PA.call_pj('content.mark_resolved', params, 1, function(data) {
      var followup = PD.followups[data.id];
      if (followup) followup.no_answer = data.no_answer;
      PD.populateFollowup(data);
    });
  },
  postComment: function(followupId) {
    // first determine where to post

    var textArea = $('#' + followupId + '_text');
    var text = textArea.val();
    var block = $('#' + followupId + '_children');

    if (!text) return;
    if (PD.checkNotActive()) return false;
    var followup = PD.followups[followupId];
    if (!followup) {Piazzza.Common.error('You cannot post feedback here');return;}
    var anon = $('#' + followupId + '-followup-anonymous').val();
    var name = $('#' + followupId + '-name').val();
    var email = $('#' + followupId + '-email').val();
    var item = PD.curItem;
    PA.call_pj('content.create', {cid:followup.id, subject:text,
      nid:PD.networkId, type:'feedback', anonymous:anon, name:name, email:email}, block,
      function(data) {
        if (item) item.book = true;
        // do nothing? push will take care of this?
        $('#' + followupId + '_text').val('');
        if (!followup.children) followup.children = [];
        followup.children.push(data);
        PD.populateFollowup(followup);
        PD.content.is_bookmarked = true;
        PD.showHideBookmark();
    });
    $('.custom-name').val(name);
    $('.custom-email').val(email);
  },
  postFeedbackTag: function(topAreaId, feedbackType) {
    if (PD.checkNotActive()) return false;
    var content = null;
    if (topAreaId == '#question') content = Piazzza.Dashboard.content;
    if (topAreaId == '#studentsResponse') content = Piazzza.Dashboard.s_answer;
    if (topAreaId == '#instructorsResponse') content = Piazzza.Dashboard.i_answer;
    if (!content) {Piazzza.Common.error('You cannot post feedback here');return;}
    var method = 'content.add_feedback';
    if (!content['is_' + feedbackType]) {
      content['is_' + feedbackType] = 1;
      if (!content[feedbackType]) content[feedbackType] = [];
      content[feedbackType].push({id:PA.user.id, name:PA.user.name, admin:PD.isInst});
    } else {
      method = 'content.remove_feedback';
      content['is_' + feedbackType] = false;
      if (content[feedbackType]) content[feedbackType].remove(function(usr){return usr.id == PA.user.id;});
    }
    PD.toggleFeedbackTags(topAreaId, content);
    PA.call_pj(method, {cid:content.id, type:feedbackType}, 1);
  },
  saveAccountSettings: function() {
    if ($('#email').val().length > 0 && !PA.user.emails.exist($('#email').val()) || $('#addEmail').val().length > 0 && !PA.user.emails.exist($('#addEmail').val()))
      PD.UIElements.UIModalWindow.showConfirmationWindow('Confirmation_LinkEmail');
    else
      PD.submitAccountSettings();
  },
  submitAccountSettings: function() {
    var params = {email: $('#email').val(), addEmail: $('#addEmail').val(), name: $('#fullName').val()};
    var emailPrefs = {};
    PA.networks.forEach(function(net){
      emailPrefs[net.id] = {"new":"realtime", "updates":"realtime", "auto_follow":""};
      if ($('#email_dig_' + net.id).attr('checked')) emailPrefs[net.id]["new"] = "digest";
      if ($('#email_no_' + net.id).attr('checked'))  emailPrefs[net.id]["new"] = "no-emails";
      if ($('#email_nt_' + net.id).attr('checked'))  emailPrefs[net.id]["new"] = "no_throttle";
      if ($('#email_at_' + net.id).attr('checked')) {
        emailPrefs[net.id]["new"] = "auto_throttle";
        emailPrefs[net.id]["throttle"] = Math.floor($('#email_at_period_' + net.id).val());
      }
      if ($('#email_no2_' + net.id).attr('checked')) emailPrefs[net.id]["updates"] = "no-emails";
      if ($('#email_autofollow_' + net.id).attr('checked')) emailPrefs[net.id]["auto_follow"] = "follow";
    });
    params.email_prefs = emailPrefs;

    if ($('#oldPassword').val() && $('#newPassword').val()) {
      if ($('#newPassword').val() != $('#confirmPassword').val()) {
        alert('Your passwords don\'t match');
        $('#newPassword').focus();
        return;
      }
      if ($('#newPassword').val().length < 6) {
        alert('Please enter password of 6 or more characters');
        $('#newPassword').focus();
        return;
      }
      params.pass = $('#newPassword').val();
      params.old_pass = $('#oldPassword').val()
    }
    if ($('#addFacebook').attr('checked'))
      params.facebook = PA.facebook_info;
    PA.call_pj("user.update", params, $('#AccountSettings'), function(data){
      // done!
      PA.user = data;
      /*
      if (data.email_change && data.email_change == "VERIFY_EMAIL")
        alert("We have sent a confirmation email to your new preferred address.\n\nClick the confirmation link in the email to begin receiving Piazza notifications at that address.");
      if (data.email_change && data.email_change == "VERIFY_LINK")
        alert("We have sent a confirmation email to your new email address.\n\nClick the confirmation link in the email to link that email address to this account.");
      */
      $('#AccountSettings').hide();
      $('.my-pic').html(PA.getUserPic(data.id));
      $('.my-name').html(data.name);
      $('.my-facebook-name').html(data.facebook.name);
    }, function(err) { alert(err);});
  },
  removeEmail: function(email) {
    PD.emailToRemove = email;
    PD.UIElements.UIModalWindow.showConfirmationWindow('Confirmation_RemoveEmail');
  },
  submitRemoveEmail: function() {
    PA.call_pj("user.remove_email", {email:PD.emailToRemove}, $('#dialog_toplinks_accountSettings'), function(data) {
      PA.user = data;
      var linkedEmails = [];
      PA.user.emails.forEach(function(email) {
        if (email != PA.user.email) {
          //linkedEmails.push(email + ' (<a href="#" onclick="PD.removeEmail(\'' + email + '\');return false;">remove</a>)');
          linkedEmails.push(email);
        }
      });
      if (linkedEmails.length > 0) {
        $('#AccountSettings_LinkedEmailsContainer').show();
        $('#AccountSettings_LinkedEmails').html(linkedEmails.join(', '));
      } else
        $('#AccountSettings_LinkedEmailsContainer').hide();
    }, function(err) {
      alert(err);
    });
    PD.emailToRemove = null;
  },
  removeFacebook: function() {
    PA.call_pj("user.remove_facebook", {nid:PD.selectedNetwork.id}, $('#dialog_toplinks_accountSettings'), function(data) {
      PA.user = data;
      $('#my-facebook-info').hide();
      $('#my-facebook-signup').show();
    }, function(err) {
      alert(err);
    });
    return false;
  },
  removePhoto: function() {
    PA.call_pj("user.remove_photo", {nid:PD.selectedNetwork.id}, $('#dialog_toplinks_accountSettings'), function(data) {
      PA.user = data;
      $('#RemovePhotoLink').hide();
    }, function(err) {
      alert(err);
    });
  },
  editAnswerFromQuestionArea: function() {
    if (PD.isInst) {
      $('#mainScrollPanel').animate({scrollTop: $('#instructorsResponse').offset().top}, 'slow');
      $('#instructors_response').find('.button.edit').click();
    } else {
      $('#mainScrollPanel').animate({scrollTop: $('#studentsResponse').offset().top}, 'slow');
      $('#students_response').find('.button.edit').click();
    }
    return false;
  },
  gotoFollowupSection: function() {
    $('#questionScrollableArea').animate({scrollTop: $('#beginFollowupSection').offset().top}, 'slow');
    return false;
  },
  showOverlays: function() {
    if (PD.overlayLoaded || !PA.user || !PA.user.config || !PA.user.config.seen_message)
      return;
    PD.overlayLoaded = true;
    $('.statsPaneContent').hide();
    // show special mentions if no overlays trigger
    PD.hideOverlays();
  },
  hideOverlays: function() {
    $('.statsPaneContent').hide();
    $('#PageBottomBar').removeClass('centeredMessage');
    $('#PageBottomBar-content').css('display','block');
  },
  closeStudQuad: function() {
    var h = {"isInst" : PD.isInst, "class" : PD.selectedNetwork.course_number, "school" : PD.selectedNetwork.school_ext};
    h["overlay-type"] = "studentViral"
    PA.trackEvent(true, 'close-overlay', 'special-mentions-overlay', h);
    PD.markSeenUnseen('stud_quad_msg');
    PD.hideOverlays();
    return false;
  },
  closeCategoriesOverlay: function() {
    PD.markSeenUnseen('instr_categ_msg');
    PD.hideOverlays();

    var h = {"isInst" : PD.isInst, "class" : PD.selectedNetwork.course_number, "school" : PD.selectedNetwork.school_ext};
    h["overlay-type"] = "setCategories";
    PA.trackEvent(false, "close-overlay", "special-mentions-overlay", h);
    return false;
  },
  showHoF: function() {
    PD.hideOverlays();
    PD.overlayLoaded = false;
    $('#hof_best_answer2').html("There are no special mentions at this time.");
    if (!PD.hof) {
      PD.events.fire('hof_loaded');
      return;
    }
    if (PD.hof.best_answer && PD.hof.best_answer.length > 0) {
      var total_html = "";
      for (var i = 0; i < PD.hof.best_answer.length && i < 1; i++) {
        var ba = PD.hof.best_answer[i];
        if (!ba || ba.time < 2) continue;
        var html = '<div class="ellipses" style="text-align: center; line-height: 18px;">';
        if (ba.time < 60) html += "Whoa! ";
        html += PA.getUserName(ba.uid);
        html += ' answered ';
        /*
        var url = PD.term + '/' + PD.selectedNetwork.course_number.replace(/[^\w]/g, '').toLowerCase() + '/' + ba.nr
        html += '<a href="#' + url + '">';
        */
        html += '<a href="#" onclick="PD.selectContent('+ba.nr+');">';
        var text = ba.text.split(' ')
        if (text.length > 4)
          html += text.slice(0,4).join(" ") + ' ...</a> in ';
        else
          html += ba.text + '</a> in ';
        if (PD.selectedNetwork.id == "piazzza")
          html += showSecs(60*12);
        else if (PD.selectedNetwork.id == INST_TUT)
          html += showSecs(60*18);
        else
          html += showSecs(ba.time);
        html += '.';
        if (ba.when && ba.when > 0) {
          var when = new Date(ba.when * 1000);
          html += '<span class="timestamp">' + when.toRelativeTime() + '</span>';
        }
        html += '</div>';
        total_html += html;
      }
      if (total_html) {
        $('#hof_best_answer2').html(total_html);
      }
    } else {
      //$('#hof_best_answer').hide();
    }
    PD.events.fire('hof_loaded');
  },
  showBulk: function() {
    $('span.filters').hide();
    $('span.bulk').show();
  },
  showFilters: function() {
    $('span.filters').show();
    $('span.bulk').hide();
  },
  dropClass: function(nid) {
    for (var i = 0; i < PA.networks.length; i++) {
      var net = PA.networks[i];
      if (net.id == nid) {
        var answer = confirm("Drop " + net.my_name + "?");
        if (answer) {
          PA.call_pj("network.drop", {nid:nid}, $('#dialog_toplinks_accountSettings'), function(data) {
            window.location = "class";
          });
        }
        break;
      }
    }
  },
  deleteItem:function(id) {
    var answer = confirm("Are you sure you want to delete this?");
    if (answer) {
      PA.call_pj("content.delete", {cid:id}, null, function(data){
        PD.selectContent(PD.contentId);
      }, function(err) {alert(err);});
    }
    return false;
  },
  delFeedItem: function(id, event) {
    if (PD.checkNotActive()) return false;
    PA.call_pj("network.del_item", {cid:id}, $('#' + id), function(data){
      PD.removeFromFeed(id);
    });
    if (event)
      event.stopPropagation();
    return false;//do not bubble event
  },
  addFeedItem: function(id, event) {
    if (PD.checkNotActive()) return false;
    PA.call_pj("network.add_item", {cid:id}, $('#' + id), function(data){
      PD.search_feed.remove(function(item){if (id == item.id) { PD.feed.push(item); return true;}return false;});
      $('#' + id).hide();
      //PD.createFeed(PD.search_feed);
    });
    if (event)
      event.stopPropagation();
    return false;//do not bubble event
  },
  enterDuplicate: function(id) {
    PD.dupFrom = (id) ? id : PD.contentId;
    $('#duplicate-title').html('<b>' + PD.content.history[0].subject + '</b>');
    $('#duplicate-of-title').html('-please select-');
    $('#duplicate-reason').val('');
    PD.dupTo = false;
    $('#mark-duplicate').attr('disabled', true);
    $('#duplicate').show();
    return false;
  },
  markDuplicate: function() {
    if (PD.checkNotActive()) return false;
    if (PD.dupFrom && PD.dupTo) {
      PA.call("content.duplicate", {cid_dupe:PD.dupFrom, cid_to:PD.dupTo, msg:$('#duplicate-reason').val()}, $('#SelectedPostPanel'), function(data){
        PD.cancelDuplicate();
        PD.selectContent(PD.contentId);
      }, function(err) {alert(err);});
    }
  },
  cancelDuplicate: function() {
    PD.dupFrom = false;
    $('#duplicate').hide();
    return false;
  },
  editFollowupItem: function(id) {
    $('.followupCommentEdit').hide();
    $('.followupCommentEdit #newFollowupReplyEditor').removeClass('focus');
    $('.followupCommentEdit textarea').blur();
    $('.followupCommentText').show();
    $('.followupCommentActions').show();
    var top = $('#followup_div_' + id);
    if (top.size() == 0) return false;
    top.find('.followupCommentEdit').show();
    top.find('.followupCommentEdit #newFollowupReplyEditor').addClass('focus');
    top.find('.followupCommentEdit textarea').focus();
    top.find('.followupCommentText').hide();
    top.find('.followupCommentActions').hide();
    $('#edit_' + id).trigger("change");
    $('#edit_' + id).focus();
    PD.initialFollowupEditText = top.find('.subregionContentEditor.mainComment').val();
    PD.initialFollowupReplyEditText = top.find('.subregionContentEditor.replyComment').val();
    return false;
  },
  cancelFollowupEdit: function(id) {
    //For followup comments
    var top = $('#followup_div_' + id);
    //For followup replies
    var top2 = $('#'+id+'_children');
    if (top.size() == 0) return false;
    if (top2.size() == 0) return false;

    var FollowupEditContent = top.find('.subregionContentEditor.mainComment').val();
    var FollowupReplyEditContent = top2.find('.focus .subregionContentEditor.replyComment').val();

      if(FollowupEditContent == PD.initialFollowupEditText){
        top.find('.followupCommentEdit').hide();
        top.find('.followupCommentText').show();
        top.find('.followupCommentActions').show();
      }else if(typeof PD.initialFollowupEditText != 'undefined'){
        PD.selectedPostPanel_Followup_Edit_ActivateClickEvents_CancelButton();
      }
      if(FollowupReplyEditContent == PD.initialFollowupReplyEditText){
        top2.find('.followupCommentEdit').hide();
        top2.find('.followupCommentText').show();
        top2.find('.followupCommentActions').show();
      }else if(typeof PD.initialFollowupReplyEditText != 'undefined'){
        PD.selectedPostPanel_Followup_Reply_ActivateClickEvents_CancelButton();
      }
    return false;
  },
  saveFollowupComment: function(id) {
    if (PD.checkNotActive()) return false;
    var text = $('#edit_' + id).val();
    if (text) {
      PA.call_pj("content.update", {cid:id, subject: text}, $('#followupDiscussions'), function(data){
        // find the real followup
        PD.content.children.forEach(function(followup){
          if (followup.id == id) {
            followup.subject = text;
          }
          if (followup.children) {
            followup.children.forEach(function(item){
              if (item.id == id)
                item.subject = text;
            });
          }
        });
        //PD.cancelFollowupEdit(id);
        PD.showContent(PD.content);
      });
    }
    top.find('.followupCommentUserImageWrapper').show();
    return false;
  },
  deleteContent: function(id) {
    var contentID = (id) ? id : PD.contentId;
    if (PD.checkNotActive()) return false;
    var answer = confirm("Delete this content?");
    if (answer) {
      PA.call_pj("content.delete", {cid:contentID}, null, function(data){
        PD.removeFromFeed(contentID);
        PD.closeQuestion();
      }, function(err) {setTimeout(function() {alert(err);}, 1000)});
    }
    return false;
  },
  removeFromFeed: function(cid) {
    PD.feed.remove(function(item){if (cid == item.id) return true;return false;});
    $('#' + cid).hide();
  },
  makePublic: function(cid) {
    if (!cid)
      cid = PD.content.id;
    PA.call_pj('content.make_public', {cid:cid}, 1, function() {
      $('#'+cid).removeClass('private');
      if (PD.content && PD.content.id == cid)
        $('#question').removeClass('private');
      if (PD.content.my_post){
        $('li.private_toggle').hide();
        $('li.public_toggle').show();
      }

    }, function(err) {
      alert(err);
    });
    return false;
  },
  makePrivate: function(cid) {
    if (!cid)
      cid = PD.content.id;
    PA.call_pj('content.make_private', {cid:cid}, 1, function() {
      $('#'+cid).addClass('private');
      if (PD.content && PD.content.id == cid)
        $('#question').addClass('private');
      if (PD.content.my_post){
        $('li.private_toggle').show();
        $('li.public_toggle').hide();
      }

    }, function(err) {
      alert(err);
    });
    return false;
  },
  toggleTutorial: function(no_tips) {
    if (!no_tips) {
      PA.user.config.no_tips = false;
      PD.showTutorial();
      PA.call_pj("user.unset", {stat:"no_tips"}, 1);
    } else {
      $('#turn-off-tutorial').hide();
      PA.user.config.no_tips = 1;
      PD.showNoTutorialTipsy();
      PA.call_pj("user.set", {stat:"no_tips", val:1}, 1);
    }
    return false;
  },
  hideQATutorial: function() {
    $.fancybox.close();
    PD.markSeenUnseen('tutorial');
    // RECORD THAT USER SAW THIS
    return false;
  },
  showNoTutorialTipsy: function() {
    PD.hideTutorial();
    $('.hide-feed-button').attr("notutorialw", "Hide this question from your feed");
    $('.unhide-feed-button').attr("notutorialw", "Add this question back to your feed");
    $('[notutorialw]').tipsy({gravity: 'w', html: true, title:"notutorialw"});
    $('[notutorial]').tipsy({gravity: 'n', html: true, title:"notutorial"});
    $('[notutoriale]').tipsy({gravity: 'e', html: true, title:"notutoriale"});
  },
  showTutorial: function() {
    PD.hideTutorial();
    $('#tooltip-oposite').html("off");
    $('#ask-button-container').find("a").attr("tutorial", "Click 'New Post' where you can enter details before submitting");
    $('.do_resolve').attr("tutorial", "Mark this followup discussion resolved");
    $('.do_unresolve').attr("tutorial", "Mark this followup discussion unresolved");

    $('.icons .srIcon').attr("tutorial", "Question has a Students' Response");
    $('.icons .srIcon.endorsed').attr("tutorial", "Question has an instructor-endorsed Students' Response");
    $('.icons .irIcon').attr("tutorial", "Question has an Instructor' Response");
    $('.icons .note').attr("tutorial", "This is a note");
    $('.hide-feed-button').attr("tutorialw", "Hide this question from your feed");
    $('.unhide-feed-button').attr("tutorialw", "Add this question back to your feed");

    $('[tutorialw]').tipsy({gravity: 'w', html: true, title:"tutorialw"});
    $('[tutorial]').tipsy({gravity: 'n', html: true, title:"tutorial"});
    $('[notutorialw]').tipsy({gravity: 'w', html: true, title:"notutorialw"});
    $('[notutorial]').tipsy({gravity: 'n', html: true, title:"notutorial"});
  },
  hideTutorial: function() {
    $('[tutorial]').unbind('mouseenter mouseleave')
    $('[tutorialw]').unbind('mouseenter mouseleave')
    $('[notutorial]').unbind('mouseenter mouseleave')
    $('[notutorialw]').unbind('mouseenter mouseleave')
    PD.removeTipsies = true;

    $('#tooltip-oposite').html("on");
  },
  markSeenUnseen: function(message, unmark) {
    PA.call_pj("user." + (unmark ? "un" : "") + "mark_seen", {msg:message}, 1);
    if (!unmark) {
      if (!PA.user.config.seen_message) PA.user.config.seen_message = [];
      PA.user.config.seen_message.push(message);
    }
  },
  showUploadAttachment: function(cid, type) {
    if (needCaptcha(function(){PD.showUploadAttachment(cid, type);})) return false;
    if (PD.checkNotActive()) return false;
    $('#attachment-what').html(type);
    $('#dialog_upload_attach').jqmShow();
    $('#upload-attachment-iframe').contents().find('#cid').val(cid);
    $('#upload-attachment-iframe').contents().find('#nid').val(PD.networkId);
    $('#upload-attachment-iframe').contents().find('#uid').val(PA.user.id);
    return false;
  },
  showStatsChart: function() {
    if (!PD.classStats) return;
    var type = $('#stats_chart_selector').val();
    var data = "";
    var chxl = "";
    var mc = 0;
    var len = 0;
    var plot = type;
    var modulo = (PD.classStats.daily.length + 1) % 7;
    var minus = 1;
    if (PD.classStats.daily.length > 1 && !PD.classStats.daily[PD.classStats.daily.length - 2].users)
      minus = 2;
    for (var i = 0; i < PD.classStats.daily.length - minus; i++) {
      var o = PD.classStats.daily[i];
      if (!o[type]) o[type] = 0;
      if (o[type] > mc) mc = o[type];
      if (i % 7 == modulo) chxl = chxl + (chxl.length > 0 ? "|" : "") + o.day;
      data = data + (data.length > 0 ? "," : "") + o[type];
    }
    len = PD.classStats.daily.length;
    var graph = "/chart?cht=lc&chd=t:" + data + "&chs=560x300&chxt=x,y&chxl=0:|" + chxl +
      "&chxr=0,1," + len + "|1,0," + mc + "&chdl=" + plot + "&chdlp=b&chds=0," + mc + "&chco=8080FF";
    $("#googleChart").html('<img src="http://chart.apis.google.com' + graph + '"/>');
  },
  showStatsPaneOptions: function() {
    $('#PageBottomBar-options-link').html('Hide Options &raquo;');
    $('#PageBottomBar-options-link').unbind('click').click(function() {
      $(this).html('Options &raquo;');
      $(this).unbind('click').click(function() {
        PD.showStatsPaneOptions();
        return false;
      });
      $('#PageBottomBar-options').hide();
      return false;
    });
    $('#PageBottomBar-options').show();
    if (PD.selectedNetwork && PD.selectedNetwork.config && PD.selectedNetwork.config.show_initial_email && PD.selectedNetwork.config.show_initial_email > 0) {
      $('#show-init-email-on').attr('checked', true);
      $('#show-init-email-off').attr('checked', false);
    } else {
      $('#show-init-email-on').attr('checked', false);
      $('#show-init-email-off').attr('checked', true);
    }
  },
  gotoInvite: function(forClass) {
    var param = PD.selectedNetwork.school.replace(/ /g, "_").toLowerCase();
    if (forClass)
      param = param + "/" + PD.selectedNetwork.course_number.replace(/\s/g, "").toLowerCase();;
    if (GetUrlParameter("cid")) param = param + "?cid=" + GetUrlParameter("cid");
    window.location = "/invite/" + param;
  },
  gotoClassConfig: function(anchor) {
    var url = '/configure-classes/' + PD.term + '/' + PD.shortNumber;
    if (anchor)
      url += '#'+anchor;
    window.location = url;
    return false;
  },
  gotoClassReg: function() {
    window.location = '/'  + PD.selectedNetwork.school_short + '/' + PD.shortNumber;
    return false;
  },
  gotoLogin: function(signup) {
    $.fancybox.close();
    if (PA.user.id.match("\\|ck12\\|")) {
      //if (signup)
      window.location = "http://code.ck12.org/service/signin/?next=https://" + window.location.hostname + "/ck12login/" + PD.selectedNetwork.id;
      //else
      //  window.location = "http://code.ck12.org/service/signin/?next=";
      return false;
      // redirect to the CK12 login page
    }
    window.location = "/login";
    return false;
  },
  gotoHomepage: function() {
    window.location = '/signup';
    return false;
  },
  openNewFollowup: function() {
    if (needCaptcha(PD.openNewFollowup)) return false;
    if (PD.checkNotActive()) return false;
    $('#mainScrollPanel').animate({scrollTop: $('#mainScrollPanel').scrollTop() + $('#followupDiscussionsContentNew').offset().top}, 'slow');
    $('#newFollowupThread').show();
    $('#newFollowup').hide();
    $('#newFollowupEditor').focus();
    return false;
  },
  reportBug: function() {
    PA.call("user.bug_report", {details:$('#bug_details').val(), can_contact:$('#bug_can_contact').attr('checked')},
      $('#report_bug_dialog'), function() {
        $('#report_bug_thanks').show();
        $('#report_bug_form').hide();
        $('#submit_bug').hide();
    });
  },
  reportSpam: function(contentID) {
    if (PD.checkNotActive()) return false;
    //if (content != null) {
    PA.call("content.report_spam", {cid:contentID}, null, function() {
      if (PD.isInst)
        $('#report_spam_window2').jqmShow();
      else
        $('#report_spam_window').jqmShow();
    });
    //}
  },
  checkNotActive: function() {
    if (PD.selectedNetwork.status != 'active' || PD.selectedNetwork.id == "piazzza" || PD.selectedNetwork.id == INST_TUT) {
      if (PD.selectedNetwork.id == "piazzza" && PA.user.email.indexOf('@') < 0 && !PA.staticContent ) return false;
      if (PD.selectedNetwork.id == 'piazzza')
        alert("You're in the Piazza Tutorial class, this action is not permitted for this class.");
      else if (PD.selectedNetwork.id == INST_TUT)
        alert("You're in the Instructor FAQ class. This action is not permitted for this class.");
      else
        alert("This class is no longer active.");
      return true;
    }
    return false;
  },
  logout: function() {
    $.blockUI();
    if (FB.getSession()) {
      FB.logout(function(response) {
        Piazzza.Ajax.call("user.logout", {}, null, function() {
          window.location = '/';
        });
      });
    } else {
      Piazzza.Ajax.call("user.logout", {}, null, function() {
        window.location = '/';
      });
    }
  },
  setAnswerButton: function(show) {
    if (show) {
      // shows the answer button in the response area when missing the corresponding answer type
      if (PD.isInst) {
        $('#instructorsAnswerButton').show();
        $('#studentsAnswerButton').hide();
        $('#i_answer_msg').removeClass('improve');
        $('#i_answer_msg').addClass('start');
        $('#instructorResponseActions').hide();
        $('#instructorsResponse').find('.subregionGrayText').html('');
        $('#InstructorsResponseStatusIcons').hide();
        $('#instructorsResponse').find('.dropdownWrapper').hide();
        $('#instructorsResponseContent').addClass('notStarted');
        $('#instructorsResponse').show();
        $('.subregionHeaderArea.instructorAnswer').show();
      } else {
        $('#studentsAnswerButton').show();
        $('#instructorsAnswerButton').hide();
        $('#s_answer_msg').removeClass('improve');
        $('#s_answer_msg').addClass('start');
        $('#studentResponseActions').hide();
        $('#studentsResponse').find('.subregionGrayText').html('');
        $('#StudentsResponseStatusIcons').hide();
        $('#studentsResponse').find('.dropdownWrapper').hide();
        $('#studentsResponseContent').addClass('notStarted');
        $('#studentsResponse').show();
        $('.subregionHeaderArea.studentAnswer').show();
      }
    } else {
      // hide answer button and fix tooltip message
      if (PD.isInst) {
        $('#i_answer_msg').removeClass('start');
        $('#i_answer_msg').addClass('improve');
        $('#instructorsAnswerButton').hide();
        $('#studentsAnswerButton').hide();
        $('#instructorResponseActions').show();
        $('#InstructorsResponseStatusIcons').show();
        $('#instructorsResponseContent').removeClass('notStarted');
      } else {
        $('#s_answer_msg').removeClass('start');
        $('#s_answer_msg').addClass('improve');
        $('#instructorsAnswerButton').hide();
        $('#studentsAnswerButton').hide();
        $('#studentResponseActions').show();
        $('#StudentsResponseStatusIcons').show();
        $('#instructorsResponseContent').removeClass('notStarted');
      }
    }
    if (PA.staticContent) {
      if (PD.s_answer) {
        $('#s_answer_msg').removeClass('start');
        $('#s_answer_msg').addClass('improve');
      } else {
        $('#s_answer_msg').removeClass('improve');
        $('#s_answer_msg').addClass('start');
      }
    }
  },

  /* For now we only log the total dashboard render time, -dkislyuk */
  reportUserTime: function(id, time, aid) {
    if (PA.staticContent) return;
    if (!PD.userTimes) PD.userTimes = [];
    PD.userTimes.push({id:id, time:time, aid:aid});
    PA.call("t_reportUserTime", {data:PD.userTimes}, 1);
  },

  showEmbedVideo: function() {
    $('#embedVideo').click();
    return false;
  },
  // ========================    INIT   =====================
  // called once to add listeners
  //prevLoad:0,
  loadProgress: function(i) {
    $('#loading-bar').width(15 + 24 * i);
    if (i == 10) {
      PD.loading = false;
      $('#loading-screen').hide();
      PD.activate_keyboardNavigation();
    }
  },
  activate_keyboardNavigation: function() {
    $('body').click(function(e){
      PD.focus = "not feed";
    });
  },
  activate_KeyListeners: function() {
    $(document).keydown(function(e) {
      // escape key listener
      if (e.which == PD.Constants.KEY_CODES.ESCAPE) {
        // find open dropdowns and close them
        $('.UIDropdownSelector.open').find('.UIDropdownHandle').trigger('click');
      }

      if(PD.focus && PD.focus == "feed_item"){ //navigate the feed with keyboard shortcuts
        switch(e.which){
          //case PD.Constants.KEY_CODES.DOWN_ARROW:
          case PD.Constants.KEY_CODES.LETTER_J:
          PD.viewNextQuestion(+1);
          break;

          //case PD.Constants.KEY_CODES.UP_ARROW:
          case PD.Constants.KEY_CODES.LETTER_K:
          PD.viewNextQuestion(-1);
          break;
        }
        e.stopPropagation();
      }
    });
  },
  viewNextQuestion: function(offset){
    if(!PD.content) return;
    if(PD.searchQuery) return;
    for(var i = 0; i< PD.feed.length; i++){
      if(PD.feed[i].id == PD.content.id){
        var next = PD.feed[i + offset];
        if(next && next.id) {
          var topOfNext = $('#' + next.id).offset().top;
          var scrollWith = false;
          if($(document).height() - topOfNext < 100 || (topOfNext < 100 && topOfNext > 0)) scrollWith = true;
          PD.selectContent(next.id, scrollWith);
          return;
        }
      }
    }
  },

  /********************************************************************
                            Popular Tags Bar
   ********************************************************************/
  popularTagsBar_init: function() {
    PD.popularTagsBar_findPopularTags();
    PD.popularTagsBar_populateTagsBar();
    PD.popularTagsBar_activateDraggables();
    PD.popularTagsBar_activateHelpMessages();
  },

  popularTagsBar_findPopularTags: function() {
    var tags = {};
    var numTags = 0;
    var noTags = {
      'private':              true,
      'instructor-question':  true,
      'instructor-note':      true,
      'instructor-poll':      true,
      'unanswered':           true,
      'pin':                  true
    };

    // 1. look at most recent pieces of content for populating the tags bar
    // 2. keep track of the frequency
    // 3. filter out bad tags
    for (var i = 0; i < Math.min(PD.feed.length, PD.Constants.POPULAR_TAGS.LOOKAHEAD); i++) {
      PD.feed[i].tags.forEach(function(tag) {
        if (!noTags[tag]) {
          if (!tags[tag]) {
            tags[tag] = 1;
            numTags++;
          } else {
            tags[tag]++;
          }
        }
      });
    }

    // seed the list if it is too empty
    if (numTags < PD.Constants.POPULAR_TAGS.MAX_TAGS) {
      // start by going through each of the special tags and adding the first one
      if (PD.selectedNetwork.special_tags && PD.selectedNetwork.special_tags.length > 0) {
        PD.selectedNetwork.special_tags.forEach(function(specialTag) {
          if (typeof(specialTag) == "object") {
            var firstTag = specialTag.name + '1';
            if (specialTag.nr == 1)
              firstTag = specialTag.name;
            if (!tags[firstTag]) {
              tags[firstTag] = 1;
              numTags++;
            } else
              tags[firstTag]++;
          }
        });
      }

      // then add all topic tags
      if (PD.selectedNetwork.topics && PD.selectedNetwork.topics.length > 0) {
        PD.selectedNetwork.topics.forEach(function(topicTag) {
          if (typeof(topicTag) == "string") {
            if (!tags[topicTag]) {
              tags[topicTag] = 1;
              numTags++;
            } else
              tags[topicTag]++;
          }
        });
      }

      // if it is still too empty, add some more special tags
      if (numTags < PD.Constants.POPULAR_TAGS.MAX_TAGS) {
        if (PD.selectedNetwork.special_tags && PD.selectedNetwork.special_tags.length > 0) {
          PD.selectedNetwork.special_tags.forEach(function(specialTag) {
            if (typeof(specialTag) == "object") {
              // add the first three if possible
              for (var i = 2; i <= Math.min(4, Math.floor(specialTag.nr)); i++) {
                var tagName = specialTag.name + i;
                if (!tags[tagName]) {
                  tags[tagName] = 1;
                  numTags++;
                } else
                  tags[tagName]++;
              }
            }
          });
        }
      }
    }

    // sort the tags by frequency of use
    var tagSorter = [];
    for (var tag in tags)
      tagSorter.push([tag, tags[tag]]);
    tagSorter.sort(function(a,b) {
      return b[1] - a[1];
    });
    PD.tagSorter = tagSorter;

    // pretty up the array
    PD.popularTags = [];
    tagSorter.forEach(function(sortedTag) {
      PD.popularTags.push(sortedTag[0]);
    });
  },

  popularTagsBar_populateTagsBar: function() {
    if (PD.popularTags.length == 0)
      $('#PageMain').removeClass('hasPopularTagsBar');
    else {
      $('#PageMain').addClass('hasPopularTagsBar');
      $('#PopularTagsList').empty();
      for (var i = 0; i < Math.min(PD.Constants.POPULAR_TAGS.MAX_TAGS, PD.popularTags.length); i++)
        $('#PopularTagsList').append('<li><a tutorial="Drag this tag onto a question to tag it!" class="tag">#' + PD.popularTags[i]  + '</a></li>');
      PD.hidePopularTags();
    }
  },

  popularTagsBar_activateDraggables: function() {
    $('#PopularTagsBar .tag').draggable({
      cursor: 'move',
      helper: 'clone',
      revert: 'invalid', // when not dropped, the item will revert back to its initial position
      scroll: false
    });

    $('#PopularTagsBar .tag').click(function() {
      PD.doAutoSearch("tag:" + $(this).html().substr(1));
      return false;
    });
  },

  popularTagsBar_activateHelpMessages: function() {
    if (PA.user.config && !PA.user.config.no_tips) {
      $('#PopularTagsBar .tag').each(function() {
        $(this).tipsy({title: 'tutorial'});
      });
    }

    $('#PopularTagsBar').mouseenter(function() {
      if (PD.isInst) {
        var $helpMessage = $(this).find('.helpMessage');
        if (!$helpMessage.is(':visible')) {
          $helpMessage.fadeIn().delay(3000).fadeOut();
        }
      }
    });
  },

  popularTagsBar_handleTagDrop: function($droppable, event, ui) {
    var tagText = ui.draggable[0].innerHTML;

    var feedItem = true;
    var cid = $droppable.attr('id');
    var $block = $('#question-feed-questions');

    if ($droppable.attr('id') == 'questionContent') {
      feedItem = false;
      cid = PD.content.id;
      $block = $('#question');
    }

    var placeDropped = "question"
    if (feedItem)
      placeDropped = "feed"

    PA.trackEvent(true, "used_tag_bar", "/class", {"isInst" : PD.isInst, "class" : PD.selectedNetwork.course_number, "school" : PD.selectedNetwork.school, "placeDropped" : placeDropped});

    PA.call_pj('content.add_tag', {cid: cid, tag: tagText}, $block, function(data) {
      if (feedItem) {
        for (var i = 0; i < PD.feed.length; i++) {
          if (PD.feed[i].id == cid) {
            PD.feed[i].content_snipet = data.item.content_snipet;
            PD.feed[i].tags = data.item.tags;
            PD.feed[i].version++;
            PD.feedItem_Update(PD.feed[i]);
          }
        }
        if (PD.content && PD.content.id == cid) {
          PD.content.history = data.info.history;
          PD.showContent(PD.content);
        }
      } else {
        PD.content.history = data.info.history;
        PD.showContent(PD.content);
      }
    }, function(err) {
      // This is on purpose to give a prettier error message.
      if (err.match(/permission/i))
        alert('Sorry! Students cannot tag instructor questions or notes.');
      else
        alert(err);
    });
  },

  popularTagsBar_activateTagsDroppable: function($item) {
    $item.droppable({
      accept: '#PopularTagsBar .tag',
      activeClass: 'droppableTargetActive',
      drop: function(event, ui) {
        PD.popularTagsBar_handleTagDrop($(this), event, ui);
      },
      hoverClass: 'droppableTargetHover'
    });
  },

  popularTagsBar_destroyTagsDroppable: function($item) {
    $item.droppable("destroy");
  },
  getBrowserWindowSize: function() {
    var myWidth = 0, myHeight = 0;
    if( typeof( window.innerWidth ) == 'number' )
    {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    }
    else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) )
    {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
    }
    else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) )
    {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
    }
    return {width:myWidth, height:myHeight};
  },

  ClassProfile: {
    go: function(referrer) {
      Track.logClassProfileUsersReferred(PD.networkId, referrer, function() {
        window.location = '/class_profile#'+PD.deepParams[0]+'/'+PD.deepParams[1];
      });
    }
  },

  init: function() {
    PD.activate_KeyListeners();
    PA.ajaxLogin = true;
    PA.events.observe("no_user", function() {
      //Piazzza.Common.error("User not logged in");
      //window.location = "/";
      alert("No user");
    });
    Piazzza.Ajax.events.observe("user_login", function() {
      if (PD.loading) PD.loadProgress(4);
      Piazzza.Dashboard.createFeed_activateFeedItems();
      if (PA.user.email == "tutorial") {
        PA.user.config.feed_details = "no";
        if (!PA.user.seen_message) PA.user.seen_message = [];
        $('#settingsWrapper').hide();
        $('#current-class-links').hide();
        if (PA.networks.length > 1) PA.networks = [PA.networks[0]];
      }
      // hide all closed messages
      if (PA.user && PA.user.config && PA.user.config.seen_message)
        $('.message-alert, .message-alert-onheader, .UIHelpMessage, .UIHoverCard').each(function(idx){
          var msg = $(this).attr("id");
          if (PA.user.config.seen_message.exist(msg) || (msg == "feed_view_toggle_msg" && PA.user.config.logins < 20))
            $(this).hide();
          else {
            $(this).show();
            if (msg == "feed_view_toggle_msg") {
              if (PA.user.config.feed_details != "yes") {
                PA.user.config.feed_details = "yes";
                PA.call_pj("user.set", {stat: "feed_details", val: "yes"}, 1);
              }
              showFeedDetails(PA.user.config.feed_details);
            }
          }
        });
      if (PA.user && PA.user.config) {
        if (PA.user.config.hide_feed)
          $('#hoverButton .icon').click();
        if (PA.user.config.hide_stats)
          PD.hideStats();
      }
      if (PA.user.feed_width)
        setFeedWidth(PA.user.feed_width);


      /* Set prefetched feed. */
      var feed = PA.user.feed_prefetch;
      var nid = PD.populateNetworkDropdown(PA.user.last_network)
      if (feed && nid == PA.user.last_network) {
        if (!PA.user.last_network)
          PA.user.last_network = PA.user.networks[0].id;
        PD.selectNetwork(PA.user.last_network, false, false);
        PD.feed = feed.feed;
        PD.filterFeed('');
        PD.events.fire("feed_loaded");
        PD.selectedNetwork.online_users = feed.users;
        PD.selectedNetwork.users_7 = feed.users_7;

        if (feed.avg_cnt > 4)  {
            if (feed.avg < 60*60*3)
              $('#avg_resp_time').html(showSecs(feed.avg));
            else
              $('#avg_resp_time').html(">3 hr");
            $('#avg_resp_time').show();
        } else {
          $('#avg_resp_time').html('N/A');
        }
        $('.online-this-week').html(feed.users_7);
        // show hof
        PD.hof = feed.hof;
        PD.postDraft = feed.draft;
        PD.showHoF();
        PD.updateOnlineUsers();
        PC.lastNetworkMessage = feed.now;
        PA.push_data.t1 = feed.t; // set the time we got feed
        PA.push_data.o1 = PD.networkId;
        if (feed.more) {
          setTimeout(function() {PD.getMoreFeed(feed.length);}, 500);         //Should be doing this after page is fully loaded -JEG
        PD.moreFeed = true;
        } else
          PD.moreFeed = false;

        PD.notifications = feed.notifications;
        PD.subjects = feed.notification_subjects;
        PD.renderNotifications();

        if (PD.deepParams && PD.deepParams.length > 2 && PD.deepParams[2]) {
          if (PA.user.selected_content) {
            PD.showCenterView(PD.Constants.VIEWS.SELECTED_POST);
            var content = PA.user.selected_content;

            if (content.history) {
              content.history = PD.sortHistory(content.history);
            }
            PD.selectShowContent(content, content.id);
          } else {
            PD.selectContentByNr(PD.deepParams[2]);
          }
        }
      } else {
        if (nid) {
          PD.selectNetwork(nid, true, true);
          if (PD.deepParams && PD.deepParams.length > 2 && PD.deepParams[2]) {
            PD.selectContentByNr(PD.deepParams[2]);
          }
        } else {
          PD.selectNetwork(PA.user.networks[0], true, true);
        }
      }
      // if (PD.topic) PD.doAutoSearch('tag:' + PD.topic);
      // special case sandbox
      if (PA.staticContent) {
        if (PD.loading) PD.loadProgress(10);
        return;
      }
      if (PD.loading) PD.loadProgress(10); // couldn't find content to select; stop loading

      $('#uploadPhotoIframe2').attr('src', '/upload/upload_photo?uid=' + PA.user.id);
      if (PA.user.photo)
        $('#RemovePhotoLink').show();
      else
        $('#RemovePhotoLink').hide();
      if (PD.getOnlineUsers) {
        clearTimeout(PD.getOnlineUsers);
      }
      PD.getOnlineUsers = setTimeout(function(){ PD.refreshOnlineUsers(PD.networkId); }, 1000 * 180); // 3 minute timeout
      setTimeout(function(){PA.initPush();}, 3000); // after 3 seconds init push
      setTimeout(function() {
        PA.call_pj("user.get_my_special_requests", {nid: PD.networkId}, 1, function(data) {
          if (data && data.special_requests && data.special_requests.length > 0) {
            PA.user.srq = data;
            PA.load("/js/dashboard/special_request_box.html", 1, function(data){
              $('#SpecialRequestArea').html(data);
            });
          }
        });
      }, 1000);// after 10 seconds get special requests

      PA.events.fire("init_dashboard");
    });
    PD.events.observe("content_change", function() {
      PD.showOverlays();
    });
    PD.events.observe("content_closed", function() {
      PD.overlayLoaded = false;
      PD.hideOverlays();
    });
    PD.events.observe("feed_loaded", function() {
      PD.popularTagsBar_init();
    });


    $(document).ready(function() {
      PD.Topbar.init();
      PD.UIElements.init();
      PD.activateGoodRatings();
      PD.activateContributions();
    });
  }


};

var PD = Piazzza.Dashboard;
PD.init();
/*
Location: JIT Construction: v279425
Locale: en_US
*/

if(!window.FB)FB={_apiKey:null,_session:null,_userStatus:'unknown',_logging:true,_inCanvas:((window.location.search.indexOf('fb_sig_in_iframe=1')>-1)||(window.location.search.indexOf('session=')>-1)),_domain:{api:'https://api.facebook.com/',api_read:'https://api-read.facebook.com/',cdn:(window.location.protocol=='https:'?'https://s-static.ak.fbcdn.net/':'http://static.ak.fbcdn.net/'),graph:'https://graph.facebook.com/',staticfb:'http://static.ak.facebook.com/',www:window.location.protocol+'//www.facebook.com/'},_locale:null,_localeIsRtl:false,copy:function(d,c,b,e){for(var a in c)if(b||typeof d[a]==='undefined')d[a]=e?e(c[a]):c[a];return d;},create:function(c,h){var e=window.FB,d=c?c.split('.'):[],a=d.length;for(var b=0;b<a;b++){var g=d[b];var f=e[g];if(!f){f=(h&&b+1==a)?h:{};e[g]=f;}e=f;}return e;},provide:function(c,b,a){return FB.copy(typeof c=='string'?FB.create(c):c,b,a);},guid:function(){return 'f'+(Math.random()*(1<<30)).toString(16).replace('.','');},log:function(a){if(FB._logging)if(window.Debug&&window.Debug.writeln){window.Debug.writeln(a);}else if(window.console)window.console.log(a);if(FB.Event)FB.Event.fire('fb.log',a);},$:function(a){return document.getElementById(a);}};
FB.provide('Array',{indexOf:function(a,c){if(a.indexOf)return a.indexOf(c);var d=a.length;if(d)for(var b=0;b<d;b++)if(a[b]===c)return b;return -1;},merge:function(c,b){for(var a=0;a<b.length;a++)if(FB.Array.indexOf(c,b[a])<0)c.push(b[a]);return c;},filter:function(a,c){var b=[];for(var d=0;d<a.length;d++)if(c(a[d]))b.push(a[d]);return b;},keys:function(c,d){var a=[];for(var b in c)if(d||c.hasOwnProperty(b))a.push(b);return a;},map:function(a,d){var c=[];for(var b=0;b<a.length;b++)c.push(d(a[b]));return c;},forEach:function(c,a,f){if(!c)return;if(Object.prototype.toString.apply(c)==='[object Array]'||(!(c instanceof Function)&&typeof c.length=='number')){if(c.forEach){c.forEach(a);}else for(var b=0,e=c.length;b<e;b++)a(c[b],b,c);}else for(var d in c)if(f||c.hasOwnProperty(d))a(c[d],d,c);}});
FB.provide('QS',{encode:function(c,d,a){d=d===undefined?'&':d;a=a===false?function(e){return e;}:encodeURIComponent;var b=[];FB.Array.forEach(c,function(f,e){if(f!==null&&typeof f!='undefined')b.push(a(e)+'='+a(f));});b.sort();return b.join(d);},decode:function(f){var a=decodeURIComponent,d={},e=f.split('&'),b,c;for(b=0;b<e.length;b++){c=e[b].split('=',2);if(c&&c[0])d[a(c[0])]=a(c[1]||'');}return d;}});
FB.provide('Content',{_root:null,_hiddenRoot:null,_callbacks:{},append:function(a,c){if(!c)if(!FB.Content._root){FB.Content._root=c=FB.$('fb-root');if(!c){FB.log('The "fb-root" div has not been created.');return;}else c.className+=' fb_reset';}else c=FB.Content._root;if(typeof a=='string'){var b=document.createElement('div');c.appendChild(b).innerHTML=a;return b;}else return c.appendChild(a);},appendHidden:function(a){if(!FB.Content._hiddenRoot){var b=document.createElement('div'),c=b.style;c.position='absolute';c.top='-10000px';c.width=c.height=0;FB.Content._hiddenRoot=FB.Content.append(b);}return FB.Content.append(a,FB.Content._hiddenRoot);},insertIframe:function(e){e.id=e.id||FB.guid();e.name=e.name||FB.guid();var a=FB.guid(),f=false,d=false;FB.Content._callbacks[a]=function(){if(f&&!d){d=true;e.onload&&e.onload(e.root.firstChild);}};if(document.attachEvent){var b=('<iframe'+' id="'+e.id+'"'+' name="'+e.name+'"'+(e.className?' class="'+e.className+'"':'')+' style="border:none;'+(e.width?'width:'+e.width+'px;':'')+(e.height?'height:'+e.height+'px;':'')+'"'+' src="'+e.url+'"'+' frameborder="0"'+' scrolling="no"'+' allowtransparency="true"'+' onload="FB.Content._callbacks.'+a+'()"'+'></iframe>');e.root.innerHTML='<iframe src="javascript:false"'+' frameborder="0"'+' scrolling="no"'+' style="height:1px"></iframe>';f=true;window.setTimeout(function(){e.root.innerHTML=b;},0);}else{var c=document.createElement('iframe');c.id=e.id;c.name=e.name;c.onload=FB.Content._callbacks[a];c.style.border='none';c.style.overflow='hidden';if(e.className)c.className=e.className;if(e.height)c.style.height=e.height+'px';if(e.width)c.style.width=e.width+'px';e.root.appendChild(c);f=true;c.src=e.url;}},postTarget:function(b){var a=document.createElement('form');a.action=b.url;a.target=b.target;a.method='POST';FB.Content.appendHidden(a);FB.Array.forEach(b.params,function(e,d){if(e!==null&&e!==undefined){var c=document.createElement('input');c.name=d;c.value=e;a.appendChild(c);}});a.submit();a.parentNode.removeChild(a);}});
FB.provide('Flash',{_minVersions:[[9,0,159,0],[10,0,22,87]],_swfPath:'swf/XdComm.swf',_callbacks:[],init:function(){if(FB.Flash._init)return;FB.Flash._init=true;window.FB_OnFlashXdCommReady=function(){FB.Flash._ready=true;for(var d=0,e=FB.Flash._callbacks.length;d<e;d++)FB.Flash._callbacks[d]();FB.Flash._callbacks=[];};var a=!!document.attachEvent,c=FB._domain.cdn+FB.Flash._swfPath,b=('<object '+'type="application/x-shockwave-flash" '+'id="XdComm" '+(a?'name="XdComm" ':'')+(a?'':'data="'+c+'" ')+(a?'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" ':'')+'allowscriptaccess="always">'+'<param name="movie" value="'+c+'"></param>'+'<param name="allowscriptaccess" value="always"></param>'+'</object>');FB.Content.appendHidden(b);},hasMinVersion:function(){if(typeof FB.Flash._hasMinVersion==='undefined'){var i,a,b,h=[];try{i=new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version');}catch(j){if(navigator.mimeTypes.length>0){var mimeType='application/x-shockwave-flash';if(navigator.mimeTypes[mimeType].enabledPlugin){var name='Shockwave Flash';i=(navigator.plugins[name+' 2.0']||navigator.plugins[name]).description;}}}if(i){var f=i.replace(/\D+/g,',').match(/^,?(.+),?$/)[1].split(',');for(a=0,b=f.length;a<b;a++)h.push(parseInt(f[a],10));}FB.Flash._hasMinVersion=false;majorVersion:for(a=0,b=FB.Flash._minVersions.length;a<b;a++){var g=FB.Flash._minVersions[a];if(g[0]!=h[0])continue;for(var c=1,d=g.length,e=h.length;(c<d&&c<e);c++)if(h[c]<g[c]){FB.Flash._hasMinVersion=false;continue majorVersion;}else{FB.Flash._hasMinVersion=true;if(h[c]>g[c])break majorVersion;}};}return FB.Flash._hasMinVersion;},onReady:function(a){FB.Flash.init();if(FB.Flash._ready){window.setTimeout(a,0);}else FB.Flash._callbacks.push(a);}});
if(!this.JSON)this.JSON={};(function(){function f(n){return n<10?'0'+n:n;}if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+f(this.getUTCMonth()+1)+'-'+f(this.getUTCDate())+'T'+f(this.getUTCHours())+':'+f(this.getUTCMinutes())+':'+f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function')value=value.toJSON(key);if(typeof rep==='function')value=rep.call(holder,key,value);switch(typeof value){case 'string':return quote(value);case 'number':return isFinite(value)?String(value):'null';case 'boolean':case 'null':return String(value);case 'object':if(!value)return 'null';gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1)partial[i]=str(i,value)||'null';v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v)partial.push(quote(k)+(gap?': ':':')+v);}}}else for(k in value)if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v)partial.push(quote(k)+(gap?': ':':')+v);}v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}if(typeof JSON.stringify!=='function')JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1)indent+=' ';}else if(typeof space==='string')indent=space;rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number'))throw new Error('JSON.stringify');return str('',{'':value});};if(typeof JSON.parse!=='function')JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object')for(k in value)if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else delete value[k];}return reviver.call(holder,key,value);}cx.lastIndex=0;if(cx.test(text))text=text.replace(cx,function(a){return '\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);});if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}throw new SyntaxError('JSON.parse');};}());
FB.provide('JSON',{stringify:function(a){if(window.Prototype&&Object.toJSON){return Object.toJSON(a);}else return JSON.stringify(a);},parse:function(a){return JSON.parse(a);},flatten:function(c){var a={};for(var b in c)if(c.hasOwnProperty(b)){var d=c[b];if(null===d||undefined===d){continue;}else if(typeof d=='string'){a[b]=d;}else a[b]=FB.JSON.stringify(d);}return a;}});
FB.provide('',{api:function(){if(typeof arguments[0]==='string'){FB.ApiServer.graph.apply(FB.ApiServer,arguments);}else FB.ApiServer.rest.apply(FB.ApiServer,arguments);}});FB.provide('ApiServer',{METHODS:['get','post','delete','put'],_callbacks:{},_readOnlyCalls:{fql_query:true,fql_multiquery:true,friends_get:true,notifications_get:true,stream_get:true,users_getinfo:true},graph:function(){var a=Array.prototype.slice.call(arguments),f=a.shift(),d=a.shift(),c,e,b;while(d){var g=typeof d;if(g==='string'&&!c){c=d.toLowerCase();}else if(g==='function'&&!b){b=d;}else if(g==='object'&&!e){e=d;}else{FB.log('Invalid argument passed to FB.api(): '+d);return;}d=a.shift();}c=c||'get';e=e||{};if(f[0]==='/')f=f.substr(1);if(FB.Array.indexOf(FB.ApiServer.METHODS,c)<0){FB.log('Invalid method passed to FB.api(): '+c);return;}FB.ApiServer.oauthRequest('graph',f,c,e,b);},rest:function(e,a){var c=e.method.toLowerCase().replace('.','_');if(FB.Auth&&c==='auth_revokeauthorization'){var d=a;a=function(f){if(f===true)FB.Auth.setSession(null,'notConnected');d&&d(f);};}e.format='json-strings';e.api_key=FB._apiKey;var b=FB.ApiServer._readOnlyCalls[c]?'api_read':'api';FB.ApiServer.oauthRequest(b,'restserver.php','get',e,a);},oauthRequest:function(b,e,c,d,a){if(FB._session&&FB._session.access_token&&!d.access_token)d.access_token=FB._session.access_token;d.sdk='joey';try{FB.ApiServer.jsonp(b,e,c,FB.JSON.flatten(d),a);}catch(f){if(FB.Flash.hasMinVersion()){FB.ApiServer.flash(b,e,c,FB.JSON.flatten(d),a);}else throw new Error('Flash is required for this API call.');}},jsonp:function(b,f,d,e,a){var c=FB.guid(),g=document.createElement('script');if(b==='graph'&&d!=='get')e.method=d;e.callback='FB.ApiServer._callbacks.'+c;var h=(FB._domain[b]+f+(f.indexOf('?')>-1?'&':'?')+FB.QS.encode(e));if(h.length>2000)throw new Error('JSONP only support a maximum of 2000 bytes of input.');FB.ApiServer._callbacks[c]=function(i){a&&a(i);delete FB.ApiServer._callbacks[c];g.parentNode.removeChild(g);};g.src=h;document.getElementsByTagName('head')[0].appendChild(g);},flash:function(b,e,c,d,a){if(!window.FB_OnXdHttpResult)window.FB_OnXdHttpResult=function(g,f){FB.ApiServer._callbacks[g](decodeURIComponent(f));};FB.Flash.onReady(function(){var h=FB._domain[b]+e,f=FB.QS.encode(d);if(c==='get'){if(h.length+f.length>2000){if(b==='graph')d.method='get';c='post';f=FB.QS.encode(d);}else{h+=(h.indexOf('?')>-1?'&':'?')+f;f='';}}else if(c!=='post'){if(b==='graph')d.method=c;c='post';f=FB.QS.encode(d);}var g=document.XdComm.sendXdHttpRequest(c.toUpperCase(),h,f,null);FB.ApiServer._callbacks[g]=function(i){a&&a(FB.JSON.parse(i));delete FB.ApiServer._callbacks[g];};});}});
FB.provide('EventProvider',{subscribers:function(){if(!this._subscribersMap)this._subscribersMap={};return this._subscribersMap;},subscribe:function(b,a){var c=this.subscribers();if(!c[b]){c[b]=[a];}else c[b].push(a);},unsubscribe:function(b,a){var c=this.subscribers()[b];FB.Array.forEach(c,function(e,d){if(e==a)c[d]=null;});},monitor:function(d,a){if(!a()){var b=this,c=function(){if(a.apply(a,arguments))b.unsubscribe(d,c);};this.subscribe(d,c);}},clear:function(a){delete this.subscribers()[a];},fire:function(){var a=Array.prototype.slice.call(arguments),b=a.shift();FB.Array.forEach(this.subscribers()[b],function(c){if(c)c.apply(this,a);});}});FB.provide('Event',FB.EventProvider);
FB.provide('Intl',{_punctCharClass:('['+'.!?'+'\u3002'+'\uFF01'+'\uFF1F'+'\u0964'+'\u2026'+'\u0EAF'+'\u1801'+'\u0E2F'+'\uFF0E'+']'),_endsInPunct:function(a){if(typeof a!='string')return false;return a.match(new RegExp(FB.Intl._punctCharClass+'['+')"'+"'"+'\u00BB'+'\u0F3B'+'\u0F3D'+'\u2019'+'\u201D'+'\u203A'+'\u3009'+'\u300B'+'\u300D'+'\u300F'+'\u3011'+'\u3015'+'\u3017'+'\u3019'+'\u301B'+'\u301E'+'\u301F'+'\uFD3F'+'\uFF07'+'\uFF09'+'\uFF3D'+'\s'+']*$'));},_tx:function(d,a){if(a!==undefined)if(typeof a!='object'){FB.log('The second arg to FB.Intl._tx() must be an Object for '+'tx('+d+', ...)');}else{var c;for(var b in a)if(a.hasOwnProperty(b)){if(FB.Intl._endsInPunct(a[b])){c=new RegExp('\{'+b+'\}'+FB.Intl._punctCharClass+'*','g');}else c=new RegExp('\{'+b+'\}','g');d=d.replace(c,a[b]);}}return d;},tx:function(b,a){function c(e,d){void(0);}if(!FB.Intl._stringTable)return null;return FBIntern.Intl._tx(FB.Intl._stringTable[b],a);}});
FB.provide('String',{trim:function(a){return a.replace(/^\s*|\s*$/g,'');},format:function(a){if(!FB.String.format._formatRE)FB.String.format._formatRE=/(\{[^\}^\{]+\})/g;var b=arguments;return a.replace(FB.String.format._formatRE,function(e,d){var c=parseInt(d.substr(1),10),f=b[c+1];if(f===null||f===undefined)return '';return f.toString();});},escapeHTML:function(b){var a=document.createElement('div');a.appendChild(document.createTextNode(b));return a.innerHTML.replace(/"/g,'&quot;').replace(/'/g,'&#39;');},quote:function(c){var a=/["\\\x00-\x1f\x7f-\x9f]/g,b={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};return a.test(c)?'"'+c.replace(a,function(d){var e=b[d];if(e)return e;e=d.charCodeAt();return '\\u00'+Math.floor(e/16).toString(16)+(e%16).toString(16);})+'"':'"'+c+'"';}});
FB.provide('Dom',{containsCss:function(c,a){var b=' '+c.className+' ';return b.indexOf(' '+a+' ')>=0;},addCss:function(b,a){if(!FB.Dom.containsCss(b,a))b.className=b.className+' '+a;},removeCss:function(b,a){if(FB.Dom.containsCss(b,a)){b.className=b.className.replace(a,'');FB.Dom.removeCss(b,a);}},getStyle:function(a,c){var d=false,b=a.style;if(a.currentStyle){FB.Array.forEach(c.match(/\-([a-z])/g),function(e){c=c.replace(e,e.substr(1,1).toUpperCase());});d=a.currentStyle[c];}else{FB.Array.forEach(c.match(/[A-Z]/g),function(e){c=c.replace(e,'-'+e.toLowerCase());});if(window.getComputedStyle){d=document.defaultView.getComputedStyle(a,null).getPropertyValue(c);if(c=='background-position-y'||c=='background-position-x')if(d=='top'||d=='left')d='0px';}}if(c=='opacity'){if(a.filters&&a.filters.alpha)return d;return d*100;}return d;},setStyle:function(a,c,d){var b=a.style;if(c=='opacity'){if(d>=100)d=99.999;if(d<0)d=0;b.opacity=d/100;b.MozOpacity=d/100;b.KhtmlOpacity=d/100;if(a.filters)if(a.filters.alpha==undefined){a.filter="alpha(opacity="+d+")";}else a.filters.alpha.opacity=d;}else b[c]=d;},addScript:function(b){var a=document.createElement('script');a.type="text/javascript";a.src=b;return document.getElementsByTagName('head')[0].appendChild(a);},addCssRules:function(e,c){if(!FB.Dom._cssRules)FB.Dom._cssRules={};var a=true;FB.Array.forEach(c,function(f){if(!(f in FB.Dom._cssRules)){a=false;FB.Dom._cssRules[f]=true;}});if(a)return;if(FB.Dom.getBrowserType()!='ie'){var d=document.createElement('style');d.type='text/css';d.textContent=e;document.getElementsByTagName('head')[0].appendChild(d);}else try{document.createStyleSheet().cssText=e;}catch(b){if(document.styleSheets[0])document.styleSheets[0].cssText+=e;}},getBrowserType:function(){if(!FB.Dom._browserType){var d=window.navigator.userAgent.toLowerCase(),b=['msie','firefox','safari','gecko'],c=['ie','mozilla','safari','mozilla'];for(var a=0;a<b.length;a++)if(d.indexOf(b[a])>=0){FB.Dom._browserType=c[a];break;}}return FB.Dom._browserType;},getViewportInfo:function(){var a=(document.documentElement&&document.compatMode=='CSS1Compat')?document.documentElement:document.body;return {scrollTop:a.scrollTop,scrollLeft:a.scrollLeft,width:self.innerWidth?self.innerWidth:a.clientWidth,height:self.innerHeight?self.innerHeight:a.clientHeight};},ready:function(a){if(FB.Dom._isReady){a();}else FB.Event.subscribe('dom.ready',a);}});(function(){function domReady(){FB.Dom._isReady=true;FB.Event.fire('dom.ready');FB.Event.clear('dom.ready');}if(FB.Dom._isReady||document.readyState=='complete')return domReady();if(document.addEventListener){document.addEventListener('DOMContentLoaded',domReady,false);}else if(document.attachEvent)document.attachEvent('onreadystatechange',domReady);if(FB.Dom.getBrowserType()=='ie'&&window===top)(function(){try{document.documentElement.doScroll('left');}catch(error){setTimeout(arguments.callee,0);return;}domReady();})();var oldonload=window.onload;window.onload=function(){domReady();if(oldonload)if(typeof oldonload=='string'){eval(oldonload);}else oldonload();};})();
FB.provide('Dialog',{_loaderEl:null,_stack:[],_active:null,_findRoot:function(a){while(a){if(FB.Dom.containsCss(a,'fb_dialog'))return a;a=a.parentNode;}},_showLoader:function(a){if(!FB.Dialog._loaderEl)FB.Dialog._loaderEl=FB.Dialog._findRoot(FB.Dialog.create({content:('<div class="fb_dialog_loader">'+FB.Intl._tx("Loading...")+'<a id="fb_dialog_loader_close"></a>'+'</div>')}));var b=FB.$('fb_dialog_loader_close');if(a){FB.Dom.removeCss(b,'fb_hidden');b.onclick=function(){FB.Dialog._hideLoader();a();};}else{FB.Dom.addCss(b,'fb_hidden');b.onclick=null;}FB.Dialog._makeActive(FB.Dialog._loaderEl);},_hideLoader:function(){if(FB.Dialog._loaderEl&&FB.Dialog._loaderEl==FB.Dialog._active)FB.Dialog._loaderEl.style.top='-10000px';},_makeActive:function(b){FB.Dialog._lowerActive();var a={width:parseInt(b.offsetWidth,10),height:parseInt(b.offsetHeight,10)},e=FB.Dom.getViewportInfo(),c=(e.scrollLeft+(e.width-a.width)/2),d=(e.scrollTop+(e.height-a.height)/2.5);b.style.left=(c>0?c:0)+'px';b.style.top=(d>0?d:0)+'px';FB.Dialog._active=b;},_lowerActive:function(){if(!FB.Dialog._active)return;FB.Dialog._active.style.top='-10000px';FB.Dialog._active=null;},_removeStacked:function(a){FB.Dialog._stack=FB.Array.filter(FB.Dialog._stack,function(b){return b!=a;});},create:function(e){e=e||{};if(e.loader)FB.Dialog._showLoader(e.onClose);var d=document.createElement('div'),c=document.createElement('div'),a='fb_dialog';if(e.closeIcon&&e.onClose){var b=document.createElement('a');b.className='fb_dialog_close_icon';b.onclick=e.onClose;d.appendChild(b);}if(FB.Dom.getBrowserType()=='ie'){a+=' fb_dialog_legacy';FB.Array.forEach(['vert_left','vert_right','horiz_top','horiz_bottom','top_left','top_right','bottom_left','bottom_right'],function(f){var g=document.createElement('span');g.className='fb_dialog_'+f;d.appendChild(g);});}else a+=' fb_dialog_advanced';if(e.content)FB.Content.append(e.content,c);d.className=a;c.className='fb_dialog_content';d.appendChild(c);FB.Content.append(d);if(e.visible)FB.Dialog.show(d);return c;},show:function(a){a=FB.Dialog._findRoot(a);if(a){FB.Dialog._removeStacked(a);FB.Dialog._hideLoader();FB.Dialog._makeActive(a);FB.Dialog._stack.push(a);}},remove:function(a){a=FB.Dialog._findRoot(a);if(a){var b=FB.Dialog._active==a;FB.Dialog._removeStacked(a);if(b)if(FB.Dialog._stack.length>0){FB.Dialog.show(FB.Dialog._stack.pop());}else FB.Dialog._lowerActive();window.setTimeout(function(){a.parentNode.removeChild(a);},3000);}}});
FB.provide('XD',{_origin:null,_transport:null,_callbacks:{},_forever:{},init:function(a){if(FB.XD._origin)return;if(window.addEventListener&&window.postMessage){FB.XD._origin=(window.location.protocol+'//'+window.location.host+'/'+FB.guid());FB.XD.PostMessage.init();FB.XD._transport='postmessage';}else if(!a&&FB.Flash.hasMinVersion()){FB.XD._origin=(window.location.protocol+'//'+document.domain+'/'+FB.guid());FB.XD.Flash.init();FB.XD._transport='flash';}else{FB.XD._transport='fragment';FB.XD.Fragment._channelUrl=a||window.location.toString();}},resolveRelation:function(b){var g,d,f=b.split('.'),e=window;for(var a=0,c=f.length;a<c;a++){g=f[a];if(g==='opener'||g==='parent'||g==='top'){e=e[g];}else if(d=/^frames\[['"]?([a-zA-Z0-9-_]+)['"]?\]$/.exec(g)){e=e.frames[d[1]];}else throw new SyntaxError('Malformed id to resolve: '+b+', pt: '+g);}return e;},handler:function(a,e,b){if(window.location.toString().indexOf(FB.XD.Fragment._magic)>0)return 'javascript:false;//';var f=FB._domain.cdn+'connect/xd_proxy.php#',c=FB.guid();if(FB.XD._transport=='fragment'){f=FB.XD.Fragment._channelUrl;var d=f.indexOf('#');if(d>0)f=f.substr(0,d);f+=((f.indexOf('?')<0?'?':'&')+FB.XD.Fragment._magic+'#?=&');}if(b)FB.XD._forever[c]=true;FB.XD._callbacks[c]=a;return f+FB.QS.encode({cb:c,origin:FB.XD._origin,relation:e||'opener',transport:FB.XD._transport});},recv:function(b){if(typeof b=='string')b=FB.QS.decode(b);var a=FB.XD._callbacks[b.cb];if(!FB.XD._forever[b.cb])delete FB.XD._callbacks[b.cb];a&&a(b);},PostMessage:{init:function(){var a=FB.XD.PostMessage.onMessage;window.addEventListener?window.addEventListener('message',a,false):window.attachEvent('onmessage',a);},onMessage:function(event){FB.XD.recv(event.data);}},Flash:{init:function(){FB.Flash.onReady(function(){document.XdComm.postMessage_init('FB.XD.Flash.onMessage',FB.XD._origin);});},onMessage:function(a){FB.XD.recv(decodeURIComponent(a));}},Fragment:{_magic:'fb_xd_fragment',checkAndDispatch:function(){var b=window.location.toString(),a=b.substr(b.indexOf('#')+1),c=b.indexOf(FB.XD.Fragment._magic);if(c>0){FB.init=FB.getLoginStatus=FB.api=function(){};document.documentElement.style.display='none';FB.XD.resolveRelation(FB.QS.decode(a).relation).FB.XD.recv(a);}}}});FB.XD.Fragment.checkAndDispatch();
FB.provide('',{ui:function(e,b){if(!e.method){FB.log('"method" is a required parameter for FB.ui().');return;}var a=FB.UIServer.prepareCall(e,b);if(!a)return;var d=a.params.display;if(d=='dialog')d='iframe';var c=FB.UIServer[d];if(!c){FB.log('"display" must be one of "popup", "iframe" or "hidden".');return;}c(a);}});FB.provide('UIServer',{Methods:{},_active:{},_defaultCb:{},_resultToken:'"xxRESULTTOKENxx"',genericTransform:function(a){if(a.params.display=='dialog'){a.params.display='iframe';a.params.channel=FB.UIServer._xdChannelHandler(a.id,'parent.parent');}return a;},prepareCall:function(f,b){var e=FB.UIServer.Methods[f.method.toLowerCase()],d=FB.guid();if(!e){FB.log('"'+f.method.toLowerCase()+'" is an unknown method.');return;}FB.copy(f,{api_key:FB._apiKey,display:FB._session?'dialog':'popup',locale:FB._locale,sdk:'joey',session_key:FB._session&&FB._session.session_key});if(!FB._session&&f.display=='dialog'&&!e.loggedOutIframe){FB.log('"dialog" mode can only be used when the user is connected.');f.display='popup';}var a={cb:b,id:d,size:e.size||{},url:FB._domain.www+e.url,params:f};if(e.transform){a=e.transform(a);if(!a)return;}var g=a.params.display=='popup'?'opener':'parent';if(!(a.id in FB.UIServer._defaultCb)&&!('next' in a.params))a.params.next=FB.UIServer._xdResult(a.cb,a.id,g,true);if(g==='parent')a.params.channel_url=FB.UIServer._xdChannelHandler(d,'parent.parent');var c=FB.QS.encode(FB.JSON.flatten(a.params));if((a.url+c).length>2000){a.post=true;}else if(c)a.url+='?'+c;return a;},popup:function(a){var g=typeof window.screenX!='undefined'?window.screenX:window.screenLeft,h=typeof window.screenY!='undefined'?window.screenY:window.screenTop,f=typeof window.outerWidth!='undefined'?window.outerWidth:document.documentElement.clientWidth,e=typeof window.outerHeight!='undefined'?window.outerHeight:(document.documentElement.clientHeight-22),j=a.size.width,c=a.size.height,d=parseInt(g+((f-j)/2),10),i=parseInt(h+((e-c)/2.5),10),b=('width='+j+',height='+c+',left='+d+',top='+i);if(a.post){FB.UIServer._active[a.id]=window.open('about:blank',a.id,b);FB.Content.postTarget({url:a.url,target:a.id,params:a.params});}else FB.UIServer._active[a.id]=window.open(a.url,a.id,b);if(a.id in FB.UIServer._defaultCb)FB.UIServer._popupMonitor();},hidden:function(a){a.className='FB_UI_Hidden';a.root=FB.Content.appendHidden('');FB.UIServer._insertIframe(a);},iframe:function(a){a.className='FB_UI_Dialog';a.root=FB.Dialog.create({onClose:function(){FB.UIServer._triggerDefault(a.id);},loader:true,closeIcon:true});FB.Dom.addCss(a.root,'fb_dialog_iframe');FB.UIServer._insertIframe(a);},_insertIframe:function(a){if(a.post){FB.Content.insertIframe({url:'about:blank',root:a.root,className:a.className,width:a.size.width,height:a.size.height,onload:function(b){FB.UIServer._active[a.id]=b;FB.Content.postTarget({url:a.url,target:b.name,params:a.params});}});}else FB.Content.insertIframe({url:a.url,root:a.root,className:a.className,width:a.size.width,height:a.size.height,onload:function(b){FB.UIServer._active[a.id]=b;}});},_triggerDefault:function(a){FB.UIServer._xdRecv({frame:a},FB.UIServer._defaultCb[a]||function(){});},_popupMonitor:function(){var a;for(var b in FB.UIServer._active)if(FB.UIServer._active.hasOwnProperty(b)&&b in FB.UIServer._defaultCb){var c=FB.UIServer._active[b];try{if(c.tagName)continue;}catch(d){}try{if(c.closed){FB.UIServer._triggerDefault(b);}else a=true;}catch(e){}}if(a&&!FB.UIServer._popupInterval){FB.UIServer._popupInterval=window.setInterval(FB.UIServer._popupMonitor,100);}else if(!a&&FB.UIServer._popupInterval){window.clearInterval(FB.UIServer._popupInterval);FB.UIServer._popupInterval=null;}},_xdChannelHandler:function(a,b){return FB.XD.handler(function(c){var d=FB.UIServer._active[a];if(!d)return;if(c.type=='resize'){if(c.height)d.style.height=c.height+'px';if(c.width)d.style.width=c.width+'px';FB.Dialog.show(d);}},b,true);},_xdNextHandler:function(a,b,d,c){if(c)FB.UIServer._defaultCb[b]=a;return FB.XD.handler(function(e){FB.UIServer._xdRecv(e,a);},d)+'&frame='+b;},_xdRecv:function(b,a){var c=FB.UIServer._active[b.frame];try{if(FB.Dom.containsCss(c,'FB_UI_Hidden')){window.setTimeout(function(){c.parentNode.parentNode.removeChild(c.parentNode);},3000);}else if(FB.Dom.containsCss(c,'FB_UI_Dialog'))FB.Dialog.remove(c);}catch(d){}try{if(c.close){c.close();FB.UIServer._popupCount--;}}catch(e){}delete FB.UIServer._active[b.frame];delete FB.UIServer._defaultCb[b.frame];a(b);},_xdResult:function(a,b,d,c){return (FB.UIServer._xdNextHandler(function(e){a&&a(e.result&&e.result!=FB.UIServer._resultToken&&JSON.parse(e.result));},b,d,c)+'&result='+encodeURIComponent(FB.UIServer._resultToken));}});
FB.provide('',{getLoginStatus:function(a,b){if(!FB._apiKey){FB.log('FB.getLoginStatus() called before calling FB.init().');return;}if(a)if(!b&&FB.Auth._loadState=='loaded'){a({status:FB._userStatus,session:FB._session});return;}else FB.Event.subscribe('FB.loginStatus',a);if(!b&&FB.Auth._loadState=='loading')return;FB.Auth._loadState='loading';var c=function(d){FB.Auth._loadState='loaded';FB.Event.fire('FB.loginStatus',d);FB.Event.clear('FB.loginStatus');};FB.ui({method:'auth.status',display:'hidden'},c);},getSession:function(){return FB._session;},login:function(a,b){b=FB.copy({method:'auth.login',display:'popup'},b||{});FB.ui(b,a);},logout:function(a){FB.ui({method:'auth.logout',display:'hidden'},a);}});FB.provide('Auth',{_callbacks:[],setSession:function(e,g){var b=!FB._session&&e,c=FB._session&&!e,a=FB._session&&e&&FB._session.uid!=e.uid,f=b||c||(FB._session&&e&&FB._session.session_key!=e.session_key),h=g!=FB._userStatus;var d={session:e,status:g};FB._session=e;FB._userStatus=g;if(f&&FB.Cookie&&FB.Cookie.getEnabled())FB.Cookie.set(e);if(h)FB.Event.fire('auth.statusChange',d);if(c||a)FB.Event.fire('auth.logout',d);if(b||a)FB.Event.fire('auth.login',d);if(f)FB.Event.fire('auth.sessionChange',d);if(FB.Auth._refreshTimer){window.clearTimeout(FB.Auth._refreshTimer);delete FB.Auth._refreshTimer;}if(FB.Auth._loadState&&e&&e.expires)FB.Auth._refreshTimer=window.setTimeout(function(){FB.getLoginStatus(null,true);},1200000);return d;},xdHandler:function(a,b,f,c,e,d){return FB.UIServer._xdNextHandler(function(g){try{d=FB.JSON.parse(g.session);}catch(i){}var h=FB.Auth.setSession(d||null,e);h.perms=(g.result!='xxRESULTTOKENxx'&&g.result||'');a&&a(h);},b,f,c)+'&result=xxRESULTTOKENxx';}});FB.provide('UIServer.Methods',{'auth.login':{size:{width:627,height:326},url:'login.php',transform:function(a){if(!FB._apiKey){FB.log('FB.login() called before calling FB.init().');return;}if(FB._session&&!a.params.perms){FB.log('FB.login() called when user is already connected.');a.cb&&a.cb({status:FB._userStatus,session:FB._session});return;}var g=FB.Auth.xdHandler,c=a.cb,d=a.id,f=FB._session,b=g(c,d,'opener',true,FB._userStatus,f),e=g(c,d,'opener',false,'connected',f);FB.copy(a.params,{cancel_url:b,channel_url:window.location.toString(),next:e,fbconnect:FB._inCanvas?0:1,req_perms:a.params.perms,enable_profile_selector:a.params.enable_profile_selector,profile_selector_ids:a.params.profile_selector_ids,return_session:1,session_version:3,v:'1.0'});delete a.cb;delete a.params.perms;return a;}},'auth.logout':{url:'logout.php',transform:function(a){if(!FB._apiKey){FB.log('FB.logout() called before calling FB.init().');}else if(!FB._session){FB.log('FB.logout() called without a session.');}else{a.params.next=FB.Auth.xdHandler(a.cb,a.id,'parent',false,'unknown');return a;}}},'auth.status':{url:'extern/login_status.php',transform:function(a){var b=a.cb,c=a.id,d=FB.Auth.xdHandler;delete a.cb;FB.copy(a.params,{no_session:d(b,c,'parent',false,'notConnected'),no_user:d(b,c,'parent',false,'unknown'),ok_session:d(b,c,'parent',false,'connected'),session_version:3,extern:FB._inCanvas?0:2});return a;}}});
FB.provide('Arbiter',{inform:function(a,b){var d=FB._domain.staticfb+'connect/canvas_proxy.php#'+FB.QS.encode({method:a,params:FB.JSON.stringify(b||{})});var c=FB.Content.appendHidden('');FB.Content.insertIframe({url:d,root:c,width:1,height:1,onload:function(){setTimeout(function(){c.parentNode.removeChild(c);},10);}});}});
FB.provide('Canvas',{_timer:null,_lastSize:{},setSize:function(a){if(typeof a!="object")a={};a=FB.copy(a||{},FB.Canvas._computeContentSize());a=FB.copy(a,{frame:'iframe_canvas'});if(FB.Canvas._lastSize[a.frame]&&FB.Canvas._lastSize[a.frame].width==a.width&&FB.Canvas._lastSize[a.frame].height==a.height)return false;FB.Canvas._lastSize[a.frame]=a;FB.Arbiter.inform('setSize',a);return true;},setAutoResize:function(b,a){if(a===undefined&&typeof b=="number"){a=b;b=true;}if(b===undefined||b){if(FB.Canvas._timer===null)FB.Canvas._timer=window.setInterval(FB.Canvas.setSize,a||100);FB.Canvas.setSize();}else if(FB.Canvas._timer!==null){window.clearInterval(FB.Canvas._timer);FB.Canvas._timer=null;}},_computeContentSize:function(){var a=document.body,c=document.documentElement,d=0,b=Math.max(Math.max(a.offsetHeight,a.scrollHeight)+a.offsetTop,Math.max(c.offsetHeight,c.scrollHeight)+c.offsetTop);if(a.offsetWidth<a.scrollWidth){d=a.scrollWidth+a.offsetLeft;}else FB.Array.forEach(a.childNodes,function(e){var f=e.offsetWidth+e.offsetLeft;if(f>d)d=f;});if(c.clientLeft>0)d+=(c.clientLeft*2);if(c.clientTop>0)b+=(c.clientTop*2);return {height:b,width:d};}});
FB.provide('',{share:function(a){FB.log('FB.share() has been deprecated. Please use FB.ui() instead.');FB.ui({display:'popup',method:'stream.share',u:a});},publish:function(b,a){FB.log('FB.publish() has been deprecated. Please use FB.ui() instead.');b=b||{};FB.ui(FB.copy({display:'popup',method:'stream.publish',preview:1},b||{}),a);},addFriend:function(b,a){FB.log('FB.addFriend() has been deprecated. Please use FB.ui() instead.');FB.ui({display:'popup',id:b,method:'friend.add'},a);}});
FB.provide('XFBML',{_renderTimeout:30000,parse:function(c,a){c=c||document.body;var b=1,d=function(){b--;if(b===0){a&&a();FB.Event.fire('xfbml.render');}};FB.Array.forEach(FB.XFBML._tagInfos,function(f){if(!f.xmlns)f.xmlns='fb';var g=FB.XFBML._getDomElements(c,f.xmlns,f.localName);for(var e=0;e<g.length;e++){b++;FB.XFBML._processElement(g[e],f,d);}});window.setTimeout(function(){if(b>0)FB.log(b+' XFBML tags failed to render in '+FB.XFBML._renderTimeout+'ms.');},FB.XFBML._renderTimeout);d();},registerTag:function(a){FB.XFBML._tagInfos.push(a);},_processElement:function(dom,tagInfo,cb){var element=dom._element;if(element){element.subscribe('render',cb);element.process();}else{var processor=function(){var fn=eval(tagInfo.className);var getBoolAttr=function(attr){var attr=dom.getAttribute(attr);return (attr&&FB.Array.indexOf(['true','1','yes','on'],attr.toLowerCase())>-1);};var isLogin=false;var showFaces=true;var renderInIframe=false;if(tagInfo.className==='FB.XFBML.LoginButton'){renderInIframe=getBoolAttr('render-in-iframe');showFaces=getBoolAttr('show-faces');isLogin=renderInIframe||showFaces;if(isLogin)fn=FB.XFBML.Login;}element=dom._element=new fn(dom);if(isLogin){var extraParams={show_faces:showFaces};var perms=dom.getAttribute('perms');if(perms)extraParams.perms=perms;element.setExtraParams(extraParams);}element.subscribe('render',cb);element.process();};if(FB.CLASSES[tagInfo.className.substr(3)]){processor();}else FB.log('Tag '+tagInfo.className+' was not found.');}},_getDomElements:function(a,e,d){var c=e+':'+d;switch(FB.Dom.getBrowserType()){case 'mozilla':return a.getElementsByTagNameNS(document.body.namespaceURI,c);case 'ie':try{var docNamespaces=document.namespaces;if(docNamespaces&&docNamespaces[e])return a.getElementsByTagName(d);}catch(b){}return a.getElementsByTagName(c);default:return a.getElementsByTagName(c);}},_tagInfos:[{localName:'activity',className:'FB.XFBML.Activity'},{localName:'add-profile-tab',className:'FB.XFBML.AddProfileTab'},{localName:'bookmark',className:'FB.XFBML.Bookmark'},{localName:'comments',className:'FB.XFBML.Comments'},{localName:'connect-bar',className:'FB.XFBML.ConnectBar'},{localName:'fan',className:'FB.XFBML.Fan'},{localName:'like',className:'FB.XFBML.Like'},{localName:'like-box',className:'FB.XFBML.LikeBox'},{localName:'live-stream',className:'FB.XFBML.LiveStream'},{localName:'login',className:'FB.XFBML.Login'},{localName:'login-button',className:'FB.XFBML.LoginButton'},{localName:'facepile',className:'FB.XFBML.Facepile'},{localName:'friendpile',className:'FB.XFBML.Friendpile'},{localName:'name',className:'FB.XFBML.Name'},{localName:'profile-pic',className:'FB.XFBML.ProfilePic'},{localName:'recommendations',className:'FB.XFBML.Recommendations'},{localName:'serverfbml',className:'FB.XFBML.ServerFbml'},{localName:'share-button',className:'FB.XFBML.ShareButton'},{localName:'social-bar',className:'FB.XFBML.SocialBar'}]});(function(){try{if(document.namespaces&&!document.namespaces.item.fb)document.namespaces.add('fb');}catch(a){}}());
FB.provide('XFBML',{set:function(b,c,a){FB.log('FB.XFBML.set() has been deprecated.');b.innerHTML=c;FB.XFBML.parse(b,a);}});
FB.provide('',{bind:function(){var a=Array.prototype.slice.call(arguments),c=a.shift(),b=a.shift();return function(){return c.apply(b,a.concat(Array.prototype.slice.call(arguments)));};},Class:function(b,a,d){if(FB.CLASSES[b])return FB.CLASSES[b];var c=a||function(){};c.prototype=d;c.prototype.bind=function(e){return FB.bind(e,this);};c.prototype.constructor=c;FB.create(b,c);FB.CLASSES[b]=c;return c;},subclass:function(d,b,c,e){if(FB.CLASSES[d])return FB.CLASSES[d];var a=FB.create(b);FB.copy(e,a.prototype);e._base=a;e._callBase=function(g){var f=Array.prototype.slice.call(arguments,1);return a.prototype[g].apply(this,f);};return FB.Class(d,c?c:function(){if(a.apply)a.apply(this,arguments);},e);},CLASSES:{}});FB.provide('Type',{isType:function(a,b){while(a)if(a.constructor===b||a===b){return true;}else a=a._base;return false;}});
FB.Class('Obj',null,FB.copy({setProperty:function(a,b){if(FB.JSON.stringify(b)!=FB.JSON.stringify(this[a])){this[a]=b;this.fire(a,b);}}},FB.EventProvider));
FB.subclass('Waitable','Obj',function(){},{set:function(a){this.setProperty('value',a);},error:function(a){this.fire("error",a);},wait:function(a,b){if(b)this.subscribe('error',b);this.monitor('value',this.bind(function(){if(this.value!==undefined){a(this.value);return true;}}));}});
FB.subclass('Data.Query','Waitable',function(){if(!FB.Data.Query._c)FB.Data.Query._c=1;this.name='v_'+FB.Data.Query._c++;},{parse:function(a){var b=FB.String.format.apply(null,a),d=(/^select (.*?) from (\w+)\s+where (.*)$/i).exec(b);this.fields=this._toFields(d[1]);this.table=d[2];this.where=this._parseWhere(d[3]);for(var c=1;c<a.length;c++)if(FB.Type.isType(a[c],FB.Data.Query))a[c].hasDependency=true;return this;},toFql:function(){var a='select '+this.fields.join(',')+' from '+this.table+' where ';switch(this.where.type){case 'unknown':a+=this.where.value;break;case 'index':a+=this.where.key+'='+this._encode(this.where.value);break;case 'in':if(this.where.value.length==1){a+=this.where.key+'='+this._encode(this.where.value[0]);}else a+=this.where.key+' in ('+FB.Array.map(this.where.value,this._encode).join(',')+')';break;}return a;},_encode:function(a){return typeof(a)=='string'?FB.String.quote(a):a;},toString:function(){return '#'+this.name;},_toFields:function(a){return FB.Array.map(a.split(','),FB.String.trim);},_parseWhere:function(s){var re=(/^\s*(\w+)\s*=\s*(.*)\s*$/i).exec(s),result,value,type='unknown';if(re){value=re[2];if(/^(["'])(?:\\?.)*?\1$/.test(value)){value=eval(value);type='index';}else if(/^\d+\.?\d*$/.test(value))type='index';}if(type=='index'){result={type:'index',key:re[1],value:value};}else result={type:'unknown',value:s};return result;}});
FB.provide('Data',{query:function(c,a){var b=new FB.Data.Query().parse(arguments);FB.Data.queue.push(b);FB.Data._waitToProcess();return b;},waitOn:function(dependencies,callback){var result=new FB.Waitable(),count=dependencies.length;if(typeof(callback)=='string'){var s=callback;callback=function(args){return eval(s);};}FB.Array.forEach(dependencies,function(item){item.monitor('value',function(){var done=false;if(FB.Data._getValue(item)!==undefined){count--;done=true;}if(count===0){var value=callback(FB.Array.map(dependencies,FB.Data._getValue));result.set(value!==undefined?value:true);}return done;});});return result;},_getValue:function(a){return FB.Type.isType(a,FB.Waitable)?a.value:a;},_selectByIndex:function(a,d,b,e){var c=new FB.Data.Query();c.fields=a;c.table=d;c.where={type:'index',key:b,value:e};FB.Data.queue.push(c);FB.Data._waitToProcess();return c;},_waitToProcess:function(){if(FB.Data.timer<0)FB.Data.timer=setTimeout(FB.Data._process,10);},_process:function(){FB.Data.timer=-1;var c={},e=FB.Data.queue;FB.Data.queue=[];for(var a=0;a<e.length;a++){var b=e[a];if(b.where.type=='index'&&!b.hasDependency){FB.Data._mergeIndexQuery(b,c);}else c[b.name]=b;}var d={method:'fql.multiquery',queries:{}};FB.copy(d.queries,c,true,function(f){return f.toFql();});d.queries=FB.JSON.stringify(d.queries);FB.api(d,function(f){if(f.error_msg){FB.Array.forEach(c,function(g){g.error(Error(f.error_msg));});}else FB.Array.forEach(f,function(g){c[g.name].set(g.fql_result_set);});});},_mergeIndexQuery:function(a,d){var b=a.where.key,f=a.where.value;var e='index_'+a.table+'_'+b;var c=d[e];if(!c){c=d[e]=new FB.Data.Query();c.fields=[b];c.table=a.table;c.where={type:'in',key:b,value:[]};}FB.Array.merge(c.fields,a.fields);FB.Array.merge(c.where.value,[f]);c.wait(function(g){a.set(FB.Array.filter(g,function(h){return h[b]==f;}));});},timer:-1,queue:[]});
FB.provide('Cookie',{_domain:null,_enabled:false,setEnabled:function(a){FB.Cookie._enabled=a;},getEnabled:function(){return FB.Cookie._enabled;},load:function(){var a=document.cookie.match('\\bfbs_'+FB._apiKey+'="([^;]*)\\b'),b;if(a){b=FB.QS.decode(a[1]);b.expires=parseInt(b.expires,10);FB.Cookie._domain=b.base_domain;}return b;},setRaw:function(c,b,a){document.cookie='fbs_'+FB._apiKey+'="'+c+'"'+(c&&b==0?'':'; expires='+new Date(b*1000).toGMTString())+'; path=/'+(a?'; domain=.'+a:'');FB.Cookie._domain=a;},set:function(a){a?FB.Cookie.setRaw(FB.QS.encode(a),a.expires,a.base_domain):FB.Cookie.clear();},clear:function(){FB.Cookie.setRaw('',0,FB.Cookie._domain);}});
FB.provide('',{init:function(a){a=FB.copy(a||{},{logging:true});FB._apiKey=a.appId||a.apiKey;if(!a.logging&&window.location.toString().indexOf('fb_debug=1')<0)FB._logging=false;FB.XD.init(a.channelUrl);if(FB._apiKey){FB.Cookie.setEnabled(a.cookie);a.session=a.session||FB.Cookie.load();FB.Auth.setSession(a.session,a.session?'connected':'unknown');if(a.status)FB.getLoginStatus();}if(a.xfbml)window.setTimeout(function(){if(FB.XFBML)FB.Dom.ready(FB.XFBML.parse);},0);}});
window.setTimeout(function(){var a=/(connect.facebook.net|facebook.com\/assets.php).*?#(.*)/;FB.Array.forEach(document.getElementsByTagName('script'),function(d){if(d.src){var b=a.exec(d.src);if(b){var c=FB.QS.decode(b[2]);FB.Array.forEach(c,function(f,e){if(f=='0')c[e]=0;});FB.init(c);}}});if(window.fbAsyncInit)fbAsyncInit();},0);
FB.provide('UIServer.Methods',{'friends.add':{size:{width:575,height:240},url:'connect/uiserver.php',transform:FB.UIServer.genericTransform},'stream.publish':{size:{width:575,height:240},url:'connect/prompt_feed.php',transform:function(a){var b=a.cb;a.cb=function(c){if(c)if(c.postId){c={post_id:c.postId};}else c=null;b&&b(c);};a.params.callback=FB.UIServer._xdResult(a.cb,a.id,a.params.display=='popup'?'opener':'parent',true);return a;}},'stream.share':{size:{width:575,height:380},url:'sharer.php',transform:function(a){if(!a.params.u)a.params.u=window.location.toString();return a;}},'fbml.dialog':{size:{width:575,height:300},url:'render_fbml.php',loggedOutIframe:true},'bookmark.add':{size:{width:460,height:226},url:'connect/uiserver.php',transform:FB.UIServer.genericTransform},'profile.addtab':{size:{width:460,height:226},url:'connect/uiserver.php',transform:FB.UIServer.genericTransform}});
FB.Class('XFBML.Element',function(a){this.dom=a;},FB.copy({getAttribute:function(b,a,c){var d=(this.dom.getAttribute(b)||this.dom.getAttribute(b.replace(/-/g,'_'))||this.dom.getAttribute(b.replace(/-/g,'')));return d?(c?c(d):d):a;},_getBoolAttribute:function(b,a){return this.getAttribute(b,a,function(c){c=c.toLowerCase();return c=='true'||c=='1'||c=='yes'||c=='on';});},_getPxAttribute:function(b,a){return this.getAttribute(b,a,function(c){var d=parseInt(c.replace('px',''),10);if(isNaN(d)){return a;}else return d;});},_getAttributeFromList:function(c,b,a){return this.getAttribute(c,b,function(d){d=d.toLowerCase();if(FB.Array.indexOf(a,d)>-1){return d;}else return b;});},isValid:function(){for(var a=this.dom;a;a=a.parentNode)if(a==document.body)return true;},clear:function(){this.dom.innerHTML='';}},FB.EventProvider));
FB.subclass('XFBML.IframeWidget','XFBML.Element',null,{_showLoader:true,_refreshOnAuthChange:false,_allowReProcess:false,_visibleAfter:'load',getUrlBits:function(){throw new Error('Inheriting class needs to implement getUrlBits().');},setupAndValidate:function(){return true;},oneTimeSetup:function(){},getSize:function(){},getIframeName:function(){},getChannelUrl:function(){if(!this._channelUrl){var a=this;this._channelUrl=FB.XD.handler(function(b){a.fire('xd.'+b.type,b);},'parent.parent',true);}return this._channelUrl;},getIframeNode:function(){return this.dom.getElementsByTagName('iframe')[0];},process:function(a){if(this._done){if(!this._allowReProcess&&!a)return;this.clear();}else this._oneTimeSetup();this._done=true;if(!this.setupAndValidate()){this.fire('render');return;}if(this._showLoader)this._addLoader();FB.Dom.addCss(this.dom,'fb_iframe_widget');if(this._visibleAfter!='immediate'){FB.Dom.addCss(this.dom,'fb_hide_iframes');}else this.subscribe('iframe.onload',FB.bind(this.fire,this,'render'));var c=this.getSize()||{};var d=this._getURL()+'?'+FB.QS.encode(this._getQS());if(d.length>2000){d='about:blank';var b=FB.bind(function(){this._postRequest();this.unsubscribe('iframe.onload',b);},this);this.subscribe('iframe.onload',b);}FB.Content.insertIframe({url:d,root:this.dom.appendChild(document.createElement('span')),name:this.getIframeName(),className:FB._localeIsRtl?'fb_rtl':'fb_ltr',height:c.height,width:c.width,onload:FB.bind(this.fire,this,'iframe.onload')});},_oneTimeSetup:function(){this.subscribe('xd.resize',FB.bind(this._handleResizeMsg,this));if(FB.getLoginStatus){this.subscribe('xd.refreshLoginStatus',FB.bind(FB.getLoginStatus,FB,function(){},true));this.subscribe('xd.logout',FB.bind(FB.logout,FB,function(){}));}if(this._refreshOnAuthChange)this._setupAuthRefresh();if(this._visibleAfter=='load')this.subscribe('iframe.onload',FB.bind(this._makeVisible,this));this.oneTimeSetup();},_makeVisible:function(){this._removeLoader();FB.Dom.removeCss(this.dom,'fb_hide_iframes');this.fire('render');},_setupAuthRefresh:function(){FB.getLoginStatus(FB.bind(function(b){var a=b.status;FB.Event.subscribe('auth.statusChange',FB.bind(function(c){if(!this.isValid())return;if(a=='unknown'||c.status=='unknown')this.process(true);a=c.status;},this));},this));},_handleResizeMsg:function(b){if(!this.isValid())return;var a=this.getIframeNode();a.style.height=b.height+'px';if(b.width)a.style.width=b.width+'px';a.style.border='none';this._makeVisible();},_addLoader:function(){if(!this._loaderDiv){FB.Dom.addCss(this.dom,'fb_iframe_widget_loader');this._loaderDiv=document.createElement('div');this._loaderDiv.className='FB_Loader';this.dom.appendChild(this._loaderDiv);}},_removeLoader:function(){if(this._loaderDiv){FB.Dom.removeCss(this.dom,'fb_iframe_widget_loader');if(this._loaderDiv.parentNode)this._loaderDiv.parentNode.removeChild(this._loaderDiv);this._loaderDiv=null;}},_getQS:function(){return FB.copy({api_key:FB._apiKey,locale:FB._locale,sdk:'joey',session_key:FB._session&&FB._session.session_key},this.getUrlBits().params);},_getURL:function(){return FB._domain.www+'plugins/'+this.getUrlBits().name+'.php';},_postRequest:function(){FB.Content.postTarget({url:this._getURL(),target:this.getIframeNode().name,params:this._getQS()});}});
FB.subclass('XFBML.Activity','XFBML.IframeWidget',null,{_visibleAfter:'load',_refreshOnAuthChange:true,setupAndValidate:function(){this._attr={border_color:this.getAttribute('border-color'),colorscheme:this.getAttribute('color-scheme'),font:this.getAttribute('font'),header:this._getBoolAttribute('header'),height:this._getPxAttribute('height',300),recommendations:this._getBoolAttribute('recommendations'),site:this.getAttribute('site',location.hostname),width:this._getPxAttribute('width',300)};return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'activity',params:this._attr};}});
FB.subclass('XFBML.ButtonElement','XFBML.Element',null,{_allowedSizes:['icon','small','medium','large','xlarge'],onClick:function(){throw new Error('Inheriting class needs to implement onClick().');},setupAndValidate:function(){return true;},getButtonMarkup:function(){return this.getOriginalHTML();},getOriginalHTML:function(){return this._originalHTML;},process:function(){if(!('_originalHTML' in this))this._originalHTML=FB.String.trim(this.dom.innerHTML);if(!this.setupAndValidate()){this.fire('render');return;}var d=this._getAttributeFromList('size','medium',this._allowedSizes),a='',b='';if(d=='icon'){a='fb_button_simple';}else{var c=FB._localeIsRtl?'_rtl':'';b=this.getButtonMarkup();a='fb_button'+c+' fb_button_'+d+c;}this.dom.innerHTML=('<a class="'+a+'">'+'<span class="fb_button_text">'+b+'</span>'+'</a>');this.dom.firstChild.onclick=FB.bind(this.onClick,this);this.fire('render');}});
FB.provide('Helper',{isUser:function(a){return a<2.2e+09||(a>=1e+14&&a<=100099999989999);},getLoggedInUser:function(){return FB._session?FB._session.uid:null;},upperCaseFirstChar:function(a){if(a.length>0){return a.substr(0,1).toUpperCase()+a.substr(1);}else return a;},getProfileLink:function(c,b,a){a=a||(c?FB._domain.www+'profile.php?id='+c.uid:null);if(a)b='<a class="fb_link" href="'+a+'">'+b+'</a>';return b;},invokeHandler:function(handler,scope,args){if(handler)if(typeof handler==='string'){eval(handler);}else if(handler.apply)handler.apply(scope,args||[]);}});
FB.subclass('XFBML.AddProfileTab','XFBML.ButtonElement',null,{getButtonMarkup:function(){return FB.Intl._tx("Add Profile Tab on Facebook");},onClick:function(){FB.ui({method:'profile.addtab'},this.bind(function(a){if(a.tab_added)FB.Helper.invokeHandler(this.getAttribute('on-add'),this);}));}});
FB.subclass('XFBML.Bookmark','XFBML.ButtonElement',null,{getButtonMarkup:function(){return FB.Intl._tx("Bookmark on Facebook");},onClick:function(){FB.ui({method:'bookmark.add'},this.bind(function(a){if(a.bookmarked)FB.Helper.invokeHandler(this.getAttribute('on-add'),this);}));}});
FB.subclass('XFBML.Comments','XFBML.IframeWidget',null,{_visibleAfter:'resize',_refreshOnAuthChange:true,setupAndValidate:function(){var a={channel_url:this.getChannelUrl(),css:this.getAttribute('css'),notify:this.getAttribute('notify'),numposts:this.getAttribute('num-posts',10),quiet:this.getAttribute('quiet'),reverse:this.getAttribute('reverse'),simple:this.getAttribute('simple'),title:this.getAttribute('title',document.title),url:this.getAttribute('url',document.URL),width:this._getPxAttribute('width',550),xid:this.getAttribute('xid')};if(!a.xid){var b=document.URL.indexOf('#');if(b>0){a.xid=encodeURIComponent(document.URL.substring(0,b));}else a.xid=encodeURIComponent(document.URL);}this._attr=a;return true;},oneTimeSetup:function(){this.subscribe('xd.addComment',FB.bind(this._handleCommentMsg,this));},getSize:function(){return {width:this._attr.width,height:200};},getUrlBits:function(){return {name:'comments',params:this._attr};},_handleCommentMsg:function(a){if(!this.isValid())return;FB.Event.fire('comments.add',{post:a.post,user:a.user,widget:this});}});
FB.provide('Anim',{ate:function(c,g,d,b){d=!isNaN(parseFloat(d))&&d>=0?d:750;var e=40,f={},j={},a=null,h=c.style,i=setInterval(FB.bind(function(){if(!a)a=new Date().getTime();var k=1;if(d!=0)k=Math.min((new Date().getTime()-a)/d,1);FB.Array.forEach(g,FB.bind(function(o,m){if(!f[m]){var n=FB.Dom.getStyle(c,m);if(n===false)return;f[m]=this._parseCSS(n+'');}if(!j[m])j[m]=this._parseCSS(o.toString());var l='';FB.Array.forEach(f[m],function(q,p){if(isNaN(j[m][p].numPart)&&j[m][p].textPart=='?'){l=q.numPart+q.textPart;}else if(isNaN(q.numPart)){l=q.textPart;}else l+=(q.numPart+Math.ceil((j[m][p].numPart-q.numPart)*Math.sin(Math.PI/2*k)))+j[m][p].textPart+' ';});FB.Dom.setStyle(c,m,l);},this));if(k==1){clearInterval(i);if(b)b(c);}},this),e);},_parseCSS:function(a){var b=[];FB.Array.forEach(a.split(' '),function(d){var c=parseInt(d,10);b.push({numPart:c,textPart:d.replace(c,'')});});return b;}});
FB.provide('Insights',{impression:function(e,a){var b=FB.guid(),g="//ah8.facebook.com/impression.php/"+b+"/",c=new Image(1,1),f=[];if(!e.api_key&&FB._apiKey)e.api_key=FB._apiKey;for(var d in e)f.push(encodeURIComponent(d)+'='+encodeURIComponent(e[d]));g+='?'+f.join('&');if(a)c.onload=a;c.src=g;}});
FB.subclass('XFBML.ConnectBar','XFBML.Element',null,{_initialHeight:null,_initTopMargin:0,_picFieldName:'pic_square',_page:null,_displayed:false,_notDisplayed:false,_container:null,_animationSpeed:0,process:function(){FB.getLoginStatus(this.bind(function(a){FB.Event.monitor('auth.statusChange',this.bind(function(){if(this.isValid()&&FB._userStatus=='connected'){this._uid=FB.Helper.getLoggedInUser();FB.api({method:'Connect.shouldShowConnectBar'},this.bind(function(b){if(b!=2){this._animationSpeed=(b==0)?750:0;this._showBar();}else this._noRender();}));}else this._noRender();return false;}));}));},_showBar:function(){var a=FB.Data._selectByIndex(['first_name','profile_url',this._picFieldName],'user','uid',this._uid);var b=FB.Data._selectByIndex(['display_name'],'application','api_key',FB._apiKey);FB.Data.waitOn([a,b],FB.bind(function(c){c[0][0].site_name=c[1][0].display_name;if(!this._displayed){this._displayed=true;this._notDisplayed=false;this._renderConnectBar(c[0][0]);this.fire('render');FB.Insights.impression({lid:104,name:'widget_load'});this.fire('connectbar.ondisplay');FB.Event.fire('connectbar.ondisplay',this);FB.Helper.invokeHandler(this.getAttribute('on-display'),this);}},this));},_noRender:function(){if(this._displayed){this._displayed=false;this._closeConnectBar();}if(!this._notDisplayed){this._notDisplayed=true;this.fire('render');this.fire('connectbar.onnotdisplay');FB.Event.fire('connectbar.onnotdisplay',this);FB.Helper.invokeHandler(this.getAttribute('on-not-display'),this);}},_renderConnectBar:function(d){var b=document.createElement('div'),c=document.createElement('div');b.className='fb_connect_bar';c.className='fb_reset fb_connect_bar_container';c.appendChild(b);document.body.appendChild(c);this._container=c;this._initialHeight=Math.round(parseFloat(FB.Dom.getStyle(c,'height'))+parseFloat(FB.Dom.getStyle(c,'borderBottomWidth')));b.innerHTML=FB.String.format('<div class="fb_buttons">'+'<a href="#" class="fb_bar_close">'+'<img src="{1}" alt="{2}" title="{2}"/>'+'</a>'+'</div>'+'<a href="{7}" class="fb_profile" target="_blank">'+'<img src="{3}" alt="{4}" title="{4}"/>'+'</a>'+'{5}'+' <span>'+'<a href="{8}" class="fb_learn_more" target="_blank">{6}</a> &ndash; '+'<a href="#" class="fb_no_thanks">{0}</a>'+'</span>',FB.Intl._tx("No Thanks"),FB._domain.cdn+FB.XFBML.ConnectBar.imgs.buttonUrl,FB.Intl._tx("Close"),d[this._picFieldName]||FB._domain.cdn+FB.XFBML.ConnectBar.imgs.missingProfileUrl,FB.String.escapeHTML(d.first_name),FB.Intl._tx("Hi {firstName}. <strong>{siteName}<\/strong> is using Facebook to personalize your experience.",{firstName:FB.String.escapeHTML(d.first_name),siteName:FB.String.escapeHTML(d.site_name)}),FB.Intl._tx("Learn More"),d.profile_url,FB._domain.www+'sitetour/connect.php');var a=this;FB.Array.forEach(b.getElementsByTagName('a'),function(g){g.onclick=FB.bind(a._clickHandler,a);});this._page=document.body;var f=0;if(this._page.parentNode){f=Math.round((parseFloat(FB.Dom.getStyle(this._page.parentNode,'height'))-parseFloat(FB.Dom.getStyle(this._page,'height')))/2);}else f=parseInt(FB.Dom.getStyle(this._page,'marginTop'),10);f=isNaN(f)?0:f;this._initTopMargin=f;if(!window.XMLHttpRequest){c.className+=" fb_connect_bar_container_ie6";}else{c.style.top=(-1*this._initialHeight)+'px';FB.Anim.ate(c,{top:'0px'},this._animationSpeed);}var e={marginTop:this._initTopMargin+this._initialHeight+'px'};if(FB.Dom.getBrowserType()=='ie'){e.backgroundPositionY=this._initialHeight+'px';}else e.backgroundPosition='? '+this._initialHeight+'px';FB.Anim.ate(this._page,e,this._animationSpeed);},_clickHandler:function(a){a=a||window.event;var b=a.target||a.srcElement;while(b.nodeName!='A')b=b.parentNode;switch(b.className){case 'fb_bar_close':FB.api({method:'Connect.connectBarMarkAcknowledged'});FB.Insights.impression({lid:104,name:'widget_user_closed'});this._closeConnectBar();break;case 'fb_learn_more':case 'fb_profile':window.open(b.href);break;case 'fb_no_thanks':this._closeConnectBar();FB.api({method:'Connect.connectBarMarkAcknowledged'});FB.Insights.impression({lid:104,name:'widget_user_no_thanks'});FB.api({method:'auth.revokeAuthorization'},this.bind(function(){this.fire('connectbar.ondeauth');FB.Event.fire('connectbar.ondeauth',this);FB.Helper.invokeHandler(this.getAttribute('on-deauth'),this);if(this._getBoolAttribute('auto-refresh',true))window.location.reload();}));break;}return false;},_closeConnectBar:function(){this._notDisplayed=true;var a={marginTop:this._initTopMargin+'px'};if(FB.Dom.getBrowserType()=='ie'){a.backgroundPositionY='0px';}else a.backgroundPosition='? 0px';var b=(this._animationSpeed==0)?0:300;FB.Anim.ate(this._page,a,b);FB.Anim.ate(this._container,{top:(-1*this._initialHeight)+'px'},b,function(c){c.parentNode.removeChild(c);});this.fire('connectbar.onclose');FB.Event.fire('connectbar.onclose',this);FB.Helper.invokeHandler(this.getAttribute('on-close'),this);}});FB.provide('XFBML.ConnectBar',{imgs:{buttonUrl:'http://cdn.piazza.com/images/facebook-widgets/close_btn.png',missingProfileUrl:'pics/q_silhouette.gif'}});
FB.subclass('XFBML.Facepile','XFBML.IframeWidget',null,{_visibleAfter:'load',_extraParams:{},setupAndValidate:function(){this._attr={channel:this.getChannelUrl(),max_rows:this.getAttribute('max-rows'),width:this._getPxAttribute('width',200)};for(var a in this._extraParams)this._attr[a]=this._extraParams[a];return true;},setExtraParams:function(a){this._extraParams=a;},oneTimeSetup:function(){var a=FB._userStatus;FB.Event.subscribe('auth.statusChange',FB.bind(function(b){if(a=='connected'||b.status=='connected')this.process(true);a=b.status;},this));},getSize:function(){return {width:this._attr.width,height:70};},getUrlBits:function(){return {name:'facepile',params:this._attr};}});
FB.subclass('XFBML.Fan','XFBML.IframeWidget',null,{_visibleAfter:'load',setupAndValidate:function(){this._attr={api_key:FB._apiKey,connections:this.getAttribute('connections','10'),css:this.getAttribute('css'),height:this._getPxAttribute('height'),id:this.getAttribute('profile-id'),logobar:this._getBoolAttribute('logo-bar'),name:this.getAttribute('name'),stream:this._getBoolAttribute('stream',true),width:this._getPxAttribute('width',300)};if(!this._attr.id&&!this._attr.name){FB.log('<fb:fan> requires one of the "id" or "name" attributes.');return false;}var a=this._attr.height;if(!a)if((!this._attr.connections||this._attr.connections==='0')&&!this._attr.stream){a=65;}else if(!this._attr.connections||this._attr.connections==='0'){a=375;}else if(!this._attr.stream){a=250;}else a=550;if(this._attr.logobar)a+=25;this._attr.height=a;return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'fan',params:this._attr};}});
FB.subclass('XFBML.Friendpile','XFBML.Facepile',null,{});
FB.subclass('XFBML.EdgeCommentWidget','XFBML.IframeWidget',function(a){this._iframeWidth=a.width;this._iframeHeight=a.height;this._attr={master_frame_name:a.masterFrameName};this.dom=a.commentNode;this.dom.style.top=a.relativeHeightOffset;if(a.relativeWidthOffset)if(FB._localeIsRtl){this.dom.style.right=a.relativeWidthOffset;}else this.dom.style.left=a.relativeWidthOffset;this.dom.style.zIndex=FB.XFBML.EdgeCommentWidget.NextZIndex++;FB.Dom.addCss(this.dom,'fb_edge_comment_widget');},{_visibleAfter:'load',_showLoader:false,getSize:function(){return {width:this._iframeWidth,height:this._iframeHeight};},getUrlBits:function(){return {name:'comment_widget_shell',params:this._attr};}});FB.provide('XFBML.EdgeCommentWidget',{NextZIndex:10000});
FB.subclass('XFBML.EdgeWidget','XFBML.IframeWidget',null,{_visibleAfter:'immediate',_showLoader:false,setupAndValidate:function(){FB.Dom.addCss(this.dom,'fb_edge_widget_with_comment');this._attr={channel_url:this.getChannelUrl(),debug:this._getBoolAttribute('debug'),href:this.getAttribute('href',window.location.href),is_permalink:this._getBoolAttribute('is-permalink'),node_type:this.getAttribute('node-type','link'),width:this._getWidgetWidth(),font:this.getAttribute('font'),layout:this._getLayout(),colorscheme:this.getAttribute('color-scheme'),action:this.getAttribute('action'),ref:this.getAttribute('ref'),show_faces:this._shouldShowFaces(),no_resize:this._getBoolAttribute('no_resize')};return true;},oneTimeSetup:function(){this.subscribe('xd.presentEdgeCommentDialog',FB.bind(this._onEdgeCreate,this));this.subscribe('xd.presentEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogPresentation,this));this.subscribe('xd.dismissEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogDismissal,this));this.subscribe('xd.hideEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogHide,this));this.subscribe('xd.showEdgeCommentDialog',FB.bind(this._handleEdgeCommentDialogShow,this));},getSize:function(){return {width:this._getWidgetWidth(),height:this._getWidgetHeight()};},_getWidgetHeight:function(){var a=this._getLayout();var c=this._shouldShowFaces()?'show':'hide';var b={standard:{show:80,hide:35},box_count:{show:65,hide:65},button_count:{show:21,hide:21}};return b[a][c];},_getWidgetWidth:function(){var e=this._getLayout();var g=this._shouldShowFaces()?'show':'hide';var c=this.getAttribute('action')==='recommend'?130:90;var b=this.getAttribute('action')==='recommend'?100:55;var f={standard:{show:450,hide:450},box_count:{show:b,hide:b},button_count:{show:c,hide:c}};var d=f[e][g];var h=this._getPxAttribute('width',d);var a={standard:{min:225,max:900},box_count:{min:b,max:900},button_count:{min:c,max:900}};if(h<a[e].min){h=a[e].min;}else if(h>a[e].max)h=a[e].max;return h;},_getLayout:function(){return this._getAttributeFromList('layout','standard',['standard','button_count','box_count']);},_shouldShowFaces:function(){return this._getLayout()!=='button_count'&&this._getBoolAttribute('show-faces',true);},_handleEdgeCommentDialogPresentation:function(b){if(!this.isValid())return;if(!b.version){b.version=1;}else b.version=parseInt(b.version,10);var a=document.createElement('span');var c={commentNode:a,externalUrl:b.externalURL,width:330,height:200,masterFrameName:b.masterFrameName,layout:this._getLayout(),relativeHeightOffset:this._getHeightOffset(b.version),relativeWidthOffset:this._getWidthOffset(b.version)};this._commentSlave=new FB.XFBML.EdgeCommentWidget(c);this.dom.appendChild(a);this._commentSlave.process();this._commentWidgetNode=a;},_getHeightOffset:function(c){var a=this._getLayout();if(c&&c>=2){var b={standard:'20px',button_count:'17px',box_count:'48px'};}else var b={standard:'26px',button_count:'20px',box_count:'48px'};return b[a];},_getWidthOffset:function(c){if(!c||c<=1)return;var a=this._getLayout();var b={standard:'-6px',box_count:'0px',button_count:'0px'};return b[a];},_handleEdgeCommentDialogDismissal:function(a){if(this._commentWidgetNode){this.dom.removeChild(this._commentWidgetNode);delete this._commentWidgetNode;}},_handleEdgeCommentDialogHide:function(){if(this._commentWidgetNode)this._commentWidgetNode.style.display="none";},_handleEdgeCommentDialogShow:function(){if(this._commentWidgetNode)this._commentWidgetNode.style.display="block";},_onEdgeCreate:function(){this.fire('edge.create',this._attr.href);FB.Event.fire('edge.create',this._attr.href,this);FB.Helper.invokeHandler(this.getAttribute('on-create'),this,[this._attr.href]);}});
FB.subclass('XFBML.Like','XFBML.EdgeWidget',null,{getUrlBits:function(){return {name:'like',params:this._attr};}});
FB.subclass('XFBML.LikeBox','XFBML.IframeWidget',null,{_visibleAfter:'load',setupAndValidate:function(){this._attr={channel:this.getChannelUrl(),api_key:FB._apiKey,connections:this.getAttribute('connections','10'),css:this.getAttribute('css'),height:this.getAttribute('height'),id:this.getAttribute('profile-id'),header:this._getBoolAttribute('header',true),name:this.getAttribute('name'),stream:this._getBoolAttribute('stream',true),width:this._getPxAttribute('width',300),show_faces:this._getBoolAttribute('show-faces',false),href:this.getAttribute('href'),colorscheme:this.getAttribute('colorscheme','light')};if(!this._attr.id&&!this._attr.name&&!this._attr.href){FB.log('<fb:like-box> requires one of the "id" or "name" attributes.');return false;}var a=this._attr.height;if(!a)if((!this._attr.connections||this._attr.connections==='0')&&!this._attr.stream){a=62;}else{a=95;if(this._attr.connections&&this._attr.connections!=='0')a+=160;if(this._attr.stream)a+=300;if(this._attr.header&&this._attr.header!=='0'&&!this._attr.href)a+=32;}this._attr.height=a;this.subscribe('xd.likeboxLiked',FB.bind(this._onLiked,this));return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'likebox',params:this._attr};},_onLiked:function(){this.fire('edge.create',this._attr.href);FB.Event.fire('edge.create',this._attr.href,this);}});
FB.subclass('XFBML.LiveStream','XFBML.IframeWidget',null,{_visibleAfter:'load',setupAndValidate:function(){this._attr={height:this._getPxAttribute('height',500),hideFriendsTab:this.getAttribute('hide-friends-tab'),redesigned:this._getBoolAttribute('redesigned-stream'),width:this._getPxAttribute('width',400),xid:this.getAttribute('xid','default'),always_post_to_friends:this._getBoolAttribute('always-post-to-friends',false)};return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){var a=this._attr.redesigned?'live_stream_box':'livefeed';return {name:a,params:this._attr};}});
FB.subclass('XFBML.Login','XFBML.Facepile',null,{_visibleAfter:'load',getSize:function(){return {width:this._attr.width,height:94};},getUrlBits:function(){return {name:'login',params:this._attr};}});
FB.subclass('XFBML.LoginButton','XFBML.ButtonElement',null,{setupAndValidate:function(){this.autologoutlink=this._getBoolAttribute('auto-logout-link');this.onlogin=this.getAttribute('on-login');this.perms=this.getAttribute('perms');this.length=this._getAttributeFromList('length','short',['long','short']);this.iframe=this._getBoolAttribute('iframe');if(this.autologoutlink)FB.Event.subscribe('auth.statusChange',FB.bind(this.process,this));return true;},getButtonMarkup:function(){var a=this.getOriginalHTML();if(a===''){if(FB.getSession()&&this.autologoutlink){return FB.Intl._tx("Facebook Logout");}else return this.length=='short'?FB.Intl._tx("Login"):FB.Intl._tx("Login with Facebook");}else return a;},onClick:function(){if(!FB.getSession()||!this.autologoutlink){FB.login(FB.bind(this._authCallback,this),{perms:this.perms});}else FB.logout(FB.bind(this._authCallback,this));},_authCallback:function(a){FB.Helper.invokeHandler(this.onlogin,this,[a]);}});
FB.subclass('XFBML.Name','XFBML.Element',null,{process:function(){FB.copy(this,{_uid:this.getAttribute('uid'),_firstnameonly:this._getBoolAttribute('first-name-only'),_lastnameonly:this._getBoolAttribute('last-name-only'),_possessive:this._getBoolAttribute('possessive'),_reflexive:this._getBoolAttribute('reflexive'),_objective:this._getBoolAttribute('objective'),_linked:this._getBoolAttribute('linked',true),_subjectId:this.getAttribute('subject-id')});if(!this._uid){FB.log('"uid" is a required attribute for <fb:name>');this.fire('render');return;}var b=[];if(this._firstnameonly){b.push('first_name');}else if(this._lastnameonly){b.push('last_name');}else b.push('name');if(this._subjectId){b.push('sex');if(this._subjectId==FB.Helper.getLoggedInUser())this._reflexive=true;}var a;FB.Event.monitor('auth.statusChange',this.bind(function(){if(!this.isValid()){this.fire('render');return true;}if(FB._userStatus){if(this._uid=='loggedinuser')this._uid=FB.Helper.getLoggedInUser();if(FB.Helper.isUser(this._uid)){a=FB.Data._selectByIndex(b,'user','uid',this._uid);}else a=FB.Data._selectByIndex(['name','id'],'profile','id',this._uid);a.wait(this.bind(function(c){if(this._uid)if(this._subjectId==this._uid){this._renderPronoun(c[0]);}else this._renderOther(c[0]);this.fire('render');}));}return false;}));},_renderPronoun:function(b){var c='',a=this._objective;if(this._subjectId){a=true;if(this._subjectId===this._uid)this._reflexive=true;}if(this._uid==FB.Connect.get_loggedInUser()&&this._getBoolAttribute('use-you',true)){if(this._possessive){if(this._reflexive){c='your own';}else c='your';}else if(this._reflexive){c='yourself';}else c='you';}else switch(b.sex){case 'male':if(this._possessive){c=this._reflexive?'his own':'his';}else if(this._reflexive){c='himself';}else if(a){c='him';}else c='he';break;case 'female':if(this._possessive){c=this._reflexive?'her own':'her';}else if(this._reflexive){c='herself';}else if(a){c='her';}else c='she';break;default:if(this._getBoolAttribute('use-they',true)){if(this._possessive){if(this._reflexive){c='their own';}else c='their';}else if(this._reflexive){c='themselves';}else if(a){c='them';}else c='they';}else if(this._possessive){if(this._reflexive){c='his/her own';}else c='his/her';}else if(this._reflexive){c='himself/herself';}else if(a){c='him/her';}else c='he/she';break;}if(this._getBoolAttribute('capitalize',false))c=FB.Helper.upperCaseFirstChar(c);this.dom.innerHTML=c;},_renderOther:function(c){if(!c)return;var b='',a='';if(this._uid==FB.Helper.getLoggedInUser()&&this._getBoolAttribute('use-you',true)){if(this._reflexive){if(this._possessive){b='your own';}else b='yourself';}else if(this._possessive){b='your';}else b='you';}else{if(null===c.first_name)c.first_name='';if(null===c.last_name)c.last_name='';if(this._firstnameonly){b=FB.String.escapeHTML(c.first_name);}else if(this._lastnameonly)b=FB.String.escapeHTML(c.last_name);if(!b)b=FB.String.escapeHTML(c.name);if(b!==''&&this._possessive)b+='\'s';}if(!b)b=FB.String.escapeHTML(this.getAttribute('if-cant-see','Facebook User'));if(b){if(this._getBoolAttribute('capitalize',false))b=FB.Helper.upperCaseFirstChar(b);if(this._linked){a=FB.Helper.getProfileLink(c,b,this.getAttribute('href',null));}else a=b;}this.dom.innerHTML=a;}});
FB.subclass('XFBML.ProfilePic','XFBML.Element',null,{process:function(){var d=this.getAttribute('size','thumb'),b=FB.XFBML.ProfilePic._sizeToPicFieldMap[d],g=this._getPxAttribute('width'),a=this._getPxAttribute('height'),e=this.dom.style,f=this.getAttribute('uid');if(this._getBoolAttribute('facebook-logo'))b+='_with_logo';if(g){g=g+'px';e.width=g;}if(a){a=a+'px';e.height=a;}var c=this.bind(function(j){var l=j?j[0]:null,i=l?l[b]:null;if(!i)i=FB._domain.cdn+FB.XFBML.ProfilePic._defPicMap[b];var k=((g?'width:'+g+';':'')+(a?'height:'+g+';':'')),h=FB.String.format('<img src="{0}" alt="{1}" title="{1}" style="{2}" class="{3}" />',i,l?FB.String.escapeHTML(l.name):'',k,this.dom.className);if(this._getBoolAttribute('linked',true))h=FB.Helper.getProfileLink(l,h,this.getAttribute('href',null));this.dom.innerHTML=h;FB.Dom.addCss(this.dom,'fb_profile_pic_rendered');this.fire('render');});FB.Event.monitor('auth.statusChange',this.bind(function(){if(!this.isValid()){this.fire('render');return true;}if(this.getAttribute('uid',null)=='loggedinuser')f=FB.Helper.getLoggedInUser();if(FB._userStatus&&f){FB.Data._selectByIndex(['name',b],FB.Helper.isUser(f)?'user':'profile',FB.Helper.isUser(f)?'uid':'id',f).wait(c);}else c();}));}});FB.provide('XFBML.ProfilePic',{_defPicMap:{pic:'pics/s_silhouette.jpg',pic_big:'pics/d_silhouette.gif',pic_big_with_logo:'pics/d_silhouette_logo.gif',pic_small:'pics/t_silhouette.jpg',pic_small_with_logo:'pics/t_silhouette_logo.gif',pic_square:'pics/q_silhouette.gif',pic_square_with_logo:'pics/q_silhouette_logo.gif',pic_with_logo:'pics/s_silhouette_logo.gif'},_sizeToPicFieldMap:{n:'pic_big',normal:'pic_big',q:'pic_square',s:'pic',small:'pic',square:'pic_square',t:'pic_small',thumb:'pic_small'}});
FB.subclass('XFBML.Recommendations','XFBML.IframeWidget',null,{_visibleAfter:'load',_refreshOnAuthChange:true,setupAndValidate:function(){this._attr={border_color:this.getAttribute('border-color'),colorscheme:this.getAttribute('color-scheme'),font:this.getAttribute('font'),header:this._getBoolAttribute('header'),height:this._getPxAttribute('height',300),site:this.getAttribute('site',location.hostname),width:this._getPxAttribute('width',300)};return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'recommendations',params:this._attr};}});
FB.subclass('XFBML.ServerFbml','XFBML.IframeWidget',null,{_visibleAfter:'resize',setupAndValidate:function(){this._attr={channel_url:this.getChannelUrl(),fbml:this.getAttribute('fbml'),width:this._getPxAttribute('width')};if(!this._attr.fbml){var a=this.dom.getElementsByTagName('script')[0];if(a&&a.type==='text/fbml')this._attr.fbml=a.innerHTML;}if(!this._attr.fbml){FB.log('<fb:serverfbml> requires the "fbml" attribute.');return false;}return true;},getSize:function(){return {width:this._attr.width,height:this._attr.height};},getUrlBits:function(){return {name:'serverfbml',params:this._attr};}});
FB.subclass('XFBML.ShareButton','XFBML.Element',null,{process:function(){this._href=this.getAttribute('href',window.location.href);this._type=this.getAttribute('type','icon_link');FB.Dom.addCss(this.dom,'fb_share_count_hidden');this._renderButton(true);},_renderButton:function(f){if(!this.isValid()){this.fire('render');return;}var b='',c='',d='',a='',e=FB.Intl._tx("Share"),g='';switch(this._type){case 'icon':case 'icon_link':a='fb_button_simple';b=('<span class="fb_button_text">'+(this._type=='icon_link'?e:'&nbsp;')+'</span>');f=false;break;case 'link':b=FB.Intl._tx("Share on Facebook");f=false;break;case 'button':b='<span class="fb_button_text">'+e+'</span>';a='fb_button fb_button_small';f=false;break;case 'button_count':b='<span class="fb_button_text">'+e+'</span>';c=('<span class="fb_share_count_nub_right">&nbsp;</span>'+'<span class="fb_share_count fb_share_count_right">'+this._getCounterMarkup()+'</span>');a='fb_button fb_button_small';break;default:b='<span class="fb_button_text">'+e+'</span>';d=('<span class="fb_share_count_nub_top">&nbsp;</span>'+'<span class="fb_share_count fb_share_count_top">'+this._getCounterMarkup()+'</span>');a='fb_button fb_button_small';g='fb_share_count_wrapper';}this.dom.innerHTML=FB.String.format('<span class="{0}">{4}<a href="{1}" class="{2}" '+'onclick=\'FB.ui({6});return false;\''+'target="_blank">{3}</a>{5}</span>',g,this._href,a,b,d,c,FB.JSON.stringify({method:'stream.share',u:this._href}));if(!f)this.fire('render');},_getCounterMarkup:function(){if(!this._count)this._count=FB.Data._selectByIndex(['total_count'],'link_stat','url',this._href);var b='0';if(this._count.value!==undefined){if(this._count.value.length>0){var a=this._count.value[0].total_count;if(a>3){FB.Dom.removeCss(this.dom,'fb_share_count_hidden');b=a>=1e+07?Math.round(a/1e+06)+'M':(a>=10000?Math.round(a/1000)+'K':a);}}}else this._count.wait(FB.bind(this._renderButton,this,false));return '<span class="fb_share_count_inner">'+b+'</span>';}});
void(0);

FB.provide("", {"_domain":{"api":"https:\/\/api.facebook.com\/","api_read":"https:\/\/api-read.facebook.com\/","cdn":"https:\/\/s-static.ak.fbcdn.net\/","graph":"https:\/\/graph.facebook.com\/","staticfb":"http:\/\/static.ak.facebook.com\/","www":"https:\/\/www.facebook.com\/"},"_locale":"en_US","_localeIsRtl":false}, true);
FB.provide("Flash", {"_minVersions":[[10,0,22,87]],"_swfPath":"rsrc.php\/z6D2S\/hash\/c729bxo3.swf"}, true);
FB.provide("XFBML.ConnectBar", {"imgs":{"buttonUrl":"rsrc.php\/z6PMX\/hash\/3fjrfzwb.png","missingProfileUrl":"rsrc.php\/z5HB7\/hash\/ecyu2wwn.gif"}}, true);
FB.provide("XFBML.ProfilePic", {"_defPicMap":{"pic":"rsrc.php\/zCN9D\/hash\/8l4nfau6.jpg","pic_big":"rsrc.php\/zBPOE\/hash\/k9bm7yii.gif","pic_big_with_logo":"rsrc.php\/zNZOF\/hash\/f3zlirsm.gif","pic_small":"rsrc.php\/z3ZLQ\/hash\/16xbk6xz.jpg","pic_small_with_logo":"rsrc.php\/z1RLR\/hash\/c1lvcd6d.gif","pic_square":"rsrc.php\/z5HB7\/hash\/ecyu2wwn.gif","pic_square_with_logo":"rsrc.php\/z5R3Z\/hash\/d91h84jp.gif","pic_with_logo":"rsrc.php\/z2MBJ\/hash\/43j60xpm.gif"}}, true);
if (FB.Dom && FB.Dom.addCssRules) { FB.Dom.addCssRules(".fb_hidden{position:absolute;top:-10000px;z-index:10001}\n.fb_reset{background:none;border-spacing:0;border:0;color:#000;cursor:auto;direction:ltr;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;font-size:11px;font-style:normal;font-variant:normal;font-weight:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal}\n.fb_link img{border:none}\n.fb_dialog{position:absolute;top:-10000px;z-index:10001}\n.fb_dialog_advanced{background:rgba(82, 82, 82, .7);padding:10px;-moz-border-radius:8px;-webkit-border-radius:8px}\n.fb_dialog_content{background:#fff;color:#333}\n.fb_dialog_close_icon{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/zA63Q\/hash\/8o4lssjn.gif) no-repeat scroll 3px 0 transparent;cursor:pointer;display:block;height:16px;position:absolute;right:19px;top:18px;width:14px;top:10px\\9;right:7px\\9}\n.fb_dialog_close_icon:hover{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/zA63Q\/hash\/8o4lssjn.gif) no-repeat scroll -10px 0 transparent}\n.fb_dialog_loader{background-color:#f2f2f2;border:1px solid #606060;font-size:24px;padding:20px}\n#fb_dialog_loader_close{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/z2APY\/hash\/41s5ptdj.gif) no-repeat scroll left top transparent;cursor:pointer;display:-moz-inline-block;display:inline-block;height:9px;margin-left:20px;position:relative;vertical-align:middle;width:9px}\n#fb_dialog_loader_close:hover{background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/z7ZL1\/hash\/bf2f4q72.png)}\n.fb_dialog_top_left,\n.fb_dialog_top_right,\n.fb_dialog_bottom_left,\n.fb_dialog_bottom_right{height:10px;width:10px;overflow:hidden;position:absolute}\n.fb_dialog_top_left{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/zEYDZ\/hash\/4xk9rts8.png) no-repeat 0 0;left:-10px;top:-10px}\n.fb_dialog_top_right{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/zEYDZ\/hash\/4xk9rts8.png) no-repeat 0 -10px;right:-10px;top:-10px}\n.fb_dialog_bottom_left{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/zEYDZ\/hash\/4xk9rts8.png) no-repeat 0 -20px;bottom:-10px;left:-10px}\n.fb_dialog_bottom_right{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/zEYDZ\/hash\/4xk9rts8.png) no-repeat 0 -30px;right:-10px;bottom:-10px}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right,\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{position:absolute;background:#525252;filter:alpha(opacity=70);opacity:.7}\n.fb_dialog_vert_left,\n.fb_dialog_vert_right{width:10px;height:100%}\n.fb_dialog_vert_left{margin-left:-10px}\n.fb_dialog_vert_right{right:0;margin-right:-10px}\n.fb_dialog_horiz_top,\n.fb_dialog_horiz_bottom{width:100%;height:10px}\n.fb_dialog_horiz_top{margin-top:-10px}\n.fb_dialog_horiz_bottom{bottom:0;margin-bottom:-10px}\n.fb_dialog_iframe{line-height:0}\n.fb_iframe_widget{position:relative;display:-moz-inline-block;display:inline-block}\n.fb_iframe_widget iframe{position:relative;vertical-align:text-bottom}\n.fb_iframe_widget span{position:relative}\n.fb_hide_iframes iframe{position:relative;left:-10000px}\n.fb_iframe_widget_loader{position:relative;display:inline-block}\n.fb_iframe_widget_loader iframe{min-height:32px;z-index:2;zoom:1}\n.fb_iframe_widget_loader .FB_Loader{background:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/z5R48\/hash\/ejut8v2y.gif) no-repeat;height:32px;width:32px;margin-left:-16px;position:absolute;left:50%;z-index:4}\n.fb_button_simple,\n.fb_button_simple_rtl{background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/z6IY3\/hash\/5gh7aaaq.png);background-repeat:no-repeat;cursor:pointer;outline:none;text-decoration:none}\n.fb_button_simple_rtl{background-position:right 0}\n.fb_button_simple .fb_button_text{margin:0 0 0 20px;padding-bottom:1px}\n.fb_button_simple_rtl .fb_button_text{margin:0 10px 0 0}\na.fb_button_simple:hover .fb_button_text,\na.fb_button_simple_rtl:hover .fb_button_text,\n.fb_button_simple:hover .fb_button_text,\n.fb_button_simple_rtl:hover .fb_button_text{text-decoration:underline}\n.fb_button,\n.fb_button_rtl{background:#29447e url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/zDYYQ\/hash\/deh9tyqv.png);background-repeat:no-repeat;cursor:pointer;display:inline-block;padding:0 0 0 1px;text-decoration:none;outline:none}\n.fb_button .fb_button_text,\n.fb_button_rtl .fb_button_text{background:#5f78ab url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/zDYYQ\/hash\/deh9tyqv.png);border-top:solid 1px #879ac0;border-bottom:solid 1px #1a356e;color:#fff;display:block;font-family:\"lucida grande\",tahoma,verdana,arial,sans-serif;font-weight:bold;padding:2px 6px 3px 6px;margin:1px 1px 0 21px;text-shadow:none}\na.fb_button,\na.fb_button_rtl,\n.fb_button,\n.fb_button_rtl{text-decoration:none}\na.fb_button:active .fb_button_text,\na.fb_button_rtl:active .fb_button_text,\n.fb_button:active .fb_button_text,\n.fb_button_rtl:active .fb_button_text{border-bottom:solid 1px #29447e;border-top:solid 1px #45619d;background:#4f6aa3;text-shadow:none}\n.fb_button_xlarge,\n.fb_button_xlarge_rtl{background-position:left -60px;font-size:24px;line-height:30px}\n.fb_button_xlarge .fb_button_text{padding:3px 8px 3px 12px;margin-left:38px}\na.fb_button_xlarge:active{background-position:left -99px}\n.fb_button_xlarge_rtl{background-position:right -268px}\n.fb_button_xlarge_rtl .fb_button_text{padding:3px 8px 3px 12px;margin-right:39px}\na.fb_button_xlarge_rtl:active{background-position:right -307px}\n.fb_button_large,\n.fb_button_large_rtl{background-position:left -138px;font-size:13px;line-height:16px}\n.fb_button_large .fb_button_text{margin-left:24px;padding:2px 6px 4px 6px}\na.fb_button_large:active{background-position:left -163px}\n.fb_button_large_rtl{background-position:right -346px}\n.fb_button_large_rtl .fb_button_text{margin-right:25px}\na.fb_button_large_rtl:active{background-position:right -371px}\n.fb_button_medium,\n.fb_button_medium_rtl{background-position:left -188px;font-size:11px;line-height:14px}\na.fb_button_medium:active{background-position:left -210px}\n.fb_button_medium_rtl{background-position:right -396px}\n.fb_button_text_rtl,\n.fb_button_medium_rtl .fb_button_text{padding:2px 6px 3px 6px;margin-right:22px}\na.fb_button_medium_rtl:active{background-position:right -418px}\n.fb_button_small,\n.fb_button_small_rtl{background-position:left -232px;font-size:10px;line-height:10px}\n.fb_button_small .fb_button_text{padding:2px 6px 3px;margin-left:17px}\na.fb_button_small:active,\n.fb_button_small:active{background-position:left -250px}\n.fb_button_small_rtl{background-position:right -440px}\n.fb_button_small_rtl .fb_button_text{padding:2px 6px;margin-right:18px}\na.fb_button_small_rtl:active{background-position:right -458px}\n.fb_connect_bar_container div,\n.fb_connect_bar_container span,\n.fb_connect_bar_container a,\n.fb_connect_bar_container img,\n.fb_connect_bar_container strong{background:none;border-spacing:0;border:0;direction:ltr;font-style:normal;font-variant:normal;letter-spacing:normal;line-height:1;margin:0;overflow:visible;padding:0;text-align:left;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;visibility:visible;white-space:normal;word-spacing:normal;vertical-align:baseline}\n.fb_connect_bar_container{position:fixed;left:0 !important;right:0 !important;height:42px !important;padding:0 25px !important;margin:0 !important;vertical-align:middle !important;border-bottom:1px solid #333 !important;background:#3b5998 !important;z-index:99999999 !important;overflow:hidden !important}\n.fb_connect_bar_container_ie6{position:absolute;top:expression(document.compatMode==\"CSS1Compat\"? document.documentElement.scrollTop+\"px\":body.scrollTop+\"px\")}\n.fb_connect_bar{position:relative;margin:auto;height:100%;width:100%;padding:6px 0 0 0 !important;background:none;color:#fff !important;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif !important;font-size:13px !important;font-style:normal !important;font-variant:normal !important;font-weight:normal !important;letter-spacing:normal !important;line-height:1 !important;text-decoration:none !important;text-indent:0 !important;text-shadow:none !important;text-transform:none !important;white-space:normal !important;word-spacing:normal !important}\n.fb_connect_bar a:hover{color:#fff}\n.fb_connect_bar .fb_profile img{height:30px;width:30px;vertical-align:middle;margin:0 6px 5px 0}\n.fb_connect_bar div a,\n.fb_connect_bar span,\n.fb_connect_bar span a{color:#bac6da;font-size:11px;text-decoration:none}\n.fb_connect_bar .fb_buttons{float:right;margin-top:7px}\n.fb_edge_widget_with_comment{position:relative;*z-index:1000}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget{position:absolute}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget iframe.fb_ltr{left:-4px}\n.fb_edge_widget_with_comment span.fb_edge_comment_widget iframe.fb_rtl{left:2px}\n.fb_share_count_wrapper{position:relative;float:left}\n.fb_share_count{background:#b0b9ec none repeat scroll 0 0;color:#333;font-family:\"lucida grande\", tahoma, verdana, arial, sans-serif;text-align:center}\n.fb_share_count_inner{background:#e8ebf2;display:block}\n.fb_share_count_right{margin-left:-1px;display:inline-block}\n.fb_share_count_right .fb_share_count_inner{border-top:solid 1px #e8ebf2;border-bottom:solid 1px #b0b9ec;margin:1px 1px 0 1px;font-size:10px;line-height:10px;padding:2px 6px 3px;font-weight:bold}\n.fb_share_count_top{display:block;letter-spacing:-1px;line-height:34px;margin-bottom:7px;font-size:22px;border:solid 1px #b0b9ec}\n.fb_share_count_nub_top{border:none;display:block;position:absolute;left:7px;top:35px;margin:0;padding:0;width:6px;height:7px;background-repeat:no-repeat;background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/zCXBS\/hash\/89zgzk50.png)}\n.fb_share_count_nub_right{border:none;display:inline-block;padding:0;width:5px;height:10px;background-repeat:no-repeat;background-image:url(https:\/\/s-static.ak.fbcdn.net\/rsrc.php\/zAQB0\/hash\/1a8txe26.png);vertical-align:top;background-position:right 5px;z-index:10;left:2px;margin:0 2px 0 0;position:relative}\n.fb_share_no_count{display:none}\n.fb_share_size_Small .fb_share_count_right .fb_share_count_inner{font-size:10px}\n.fb_share_size_Medium .fb_share_count_right .fb_share_count_inner{font-size:11px;padding:2px 6px 3px;letter-spacing:-1px;line-height:14px}\n.fb_share_size_Large .fb_share_count_right .fb_share_count_inner{font-size:13px;line-height:16px;padding:2px 6px 4px;font-weight:normal;letter-spacing:-1px}\n.fb_share_count_hidden .fb_share_count_nub_top,\n.fb_share_count_hidden .fb_share_count_top,\n.fb_share_count_hidden .fb_share_count_nub_right,\n.fb_share_count_hidden .fb_share_count_right{visibility:hidden}", ["fb.css.base","fb.css.dialog","fb.css.iframewidget","fb.css.button","fb.css.connectbarwidget","fb.css.edgecommentwidget","fb.css.sharebutton"]); }
var MixpanelLib=function(j,n,m){function k(a,c,b){if(a.length){var e;for(e=0;e<a.length;e++)c.call(b||c,a[e],e)}else if(typeof a=="object")for(e in a)Object.hasOwnProperty.call(a,e)&&c.call(b||c,a[e],e)}function z(a,c){a.prototype=new c;a.prototype.constructor=a;a.superclass=c.prototype;return a}function v(a){if(!a)return!1;var c=Object.prototype.toString.call(a);return c==="[object Array]"||c==="[object HTMLCollection]"||c==="[object NodeList]"||typeof a.jquery!=="undefined"&&typeof a.length!=="undefined"||
typeof a.length==="number"&&typeof a.item==="function"||typeof a.length==="number"&&typeof a.item==="string"||typeof a.length==="number"&&typeof a.item==="object"}function s(a){return typeof a==="object"&&!v(a)}function t(a){var c,b=0,e=[];if(a===null||a===void 0)return[];try{return Array.prototype.slice.call(a,0)}catch(f){if(typeof a.length==="number")for(c=a.length;b<c;b++)e[b]=a[b];else for(;a[b]!==void 0;)e[b]=a[b],b++;return e}}function A(a){if(!a)return!1;return a.charAt(0)==="."||a.charAt(0)===
"#"}function B(a){if(!a)return{type:"error",query:""};var c=a.charAt(0),c=c==="."?"class":c==="#"?"id":"error";return{type:c,query:c==="error"?"":a.slice(1)}}function C(a){if(typeof document.getElementsByClassName==="undefined"){var c=RegExp("(?:^|\\s)"+a+"(?:$|\\s)"),b=document.getElementsByTagName("*"),e=[],f,g;for(g=0;(f=b[g])!=null;g++){var h=f.className;h&&h.indexOf(a)!=-1&&c.test(h)&&e.push(f)}return e}else return a=document.getElementsByClassName(a),t(a)}function D(a){if(typeof a!=="string")return a;
if(document.getElementById===void 0){if(document.all!==void 0)return document.all[a];if(document.layers!==void 0)return document.layers[a];return null}else return document.getElementById(a)}function w(a,c,b){if(a!==void 0&&a!==null&&typeof c==="string"){var e=a[c]?a[c]:function(){};a[c]=function(a){e(a);return b(a)}}}function E(a,c,d,e,f){w(a,c,function(a){var c=!1,a=a||window.event,i={new_tab_click:H(a)},k=window.setTimeout(function(){c||(c=!0,f(!1,e,i))},b.config.track_links_timeout);b.track(d,
e,function(){c||(c=!0,window.clearTimeout(k),f(!0,e,i))});if(!i.new_tab_click)return F(a)})}function H(a){if(a&&a.type==="click"){var c=0,b=a.metaKey||a.ctrlKey;a.which===null&&a.button!==null?c=a.button<2?0:a.button==4?1:2:a.which!==null&&(c=a.which<2?0:a.which==2?1:2);return c==1||b&&c==0}return!1}function F(a){if(a)a.returnValue=!1,a.preventDefault!==void 0&&a.preventDefault();return!1}function q(){this.function_name="track_links";this.override_event="onclick"}function x(){this.function_name="track_forms";
this.override_event="onsubmit"}function u(){if(!r){r=!0;document.removeEventListener&&(document.removeEventListener("DOMContentLoaded",u,!1),document.removeEventListener("load",u,!1));for(;y.length>0;){var a=y.shift();b[a[0]].apply(b,a.slice(1))}}}var b={},G=!1,r=!1,y=[];b.config={cross_subdomain_cookie:!0,cookie_name:"mp_super_properties",test:!1,store_google:!1,debug:!1,track_links_timeout:300,img:!1};b.jsonp_callback=function(){};b.super_properties={all:{},events:{},funnels:{}};b.funnels={};var o=
{log:function(){if(typeof window.console!=="undefined"&&window.console&&b.config.debug)try{window.console.log.apply(window.console,arguments)}catch(a){var c=Array.prototype.slice.call(arguments);window.console.log(c.join("\n"))}},error:function(){if(typeof window.console!=="undefined"&&window.console&&b.config.debug)try{window.console.error.apply(window.console,arguments)}catch(a){var c=Array.prototype.slice.call(arguments);window.console.error(c.join("\n"))}}},p=function(){};p.prototype.track=function(){if(!r)return y.push([this.function_name].concat(t(arguments))),
!0;var a=arguments.length>0?arguments[0]:void 0;if(a===void 0)o.error("Invalid arguments for track_forms:",arguments);else if(typeof a==="string"&&A(a))return this.track_query.apply(this,arguments);else if(v(a))return arguments[0]=t(a),this.track_dom.apply(this,arguments);else o.error("Invalid arguments for track_links:",arguments);return!1};p.prototype.track_query=function(a,c,b,e){var a=B(a),f=null;a.type==="class"?f=C(a.query):a.type==="id"&&(a=D(a.query),f=a!==null?[a]:[]);a=f;if(a===null)return!1;
return this.track_dom(a,c,b,e)};p.prototype.track_dom=function(a,c,b,e){if(!c)return o.error("No event name provided to mpmetrics."+this.function_name),!1;b=b||{};k(a,function(a){if(typeof a!=="object"||typeof a.nodeName==="undefined")return o.error("Invalid element provided to "+this.function_name,a),!1;var g=this.update_properties(a,b);E(a,this.override_event,c,g,this.callback_generator(a,e))},this);return!0};p.prototype.update_properties=function(a,c){var b={};k(c,function(a,c){b[c]=a});return b};
z(q,p);q.prototype.callback_generator=function(a,c){return function(b,e,f){c&&c(b,e)===!1||f.new_tab_click||a.href!==void 0&&a.href!==null&&setTimeout(function(){window.location=a.href},0)}};q.prototype.update_properties=function(a,c){var b=q.superclass.update_properties.call(this,a,c);if(a.href)b.url=a.href;return b};z(x,p);x.prototype.callback_generator=function(a,b){return function(d,e){b&&b(d,e)===!1||setTimeout(function(){document.createElement("form").submit.call(a)},0)}};b.track_links=function(){var a=
new q;return a.track.apply(a,arguments)};b.track_forms=function(){var a=new x;return a.track.apply(a,arguments)};b.send_request=function(a,c){var d;d=/google web preview/i.test(navigator.userAgent)?!0:!1;if(!d){if(b.config.test)c.test=1;if(b.config.img)c.img=1;c._=(new Date).getTime().toString();a+="?"+b.http_build_query(c);if(b.config.img)d=document.createElement("img"),d.src=a,document.body.appendChild(d);else{d=document.createElement("script");d.type="text/javascript";d.async=!0;d.defer=!0;d.src=
a;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(d,e)}}};b.get_query_param=function(a,b){var b=b.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),d=RegExp("[\\?&]"+b+"=([^&#]*)").exec(a);return d===null||d&&typeof d[1]!=="string"&&d[1].length?"":unescape(d[1]).replace(/\+/g," ")};b.track=function(a,c,d,e){if(a){b.load_super_once();e=e||"events";c=c||{};c.token=c.token||b.token;var f=Math.floor(Math.random()*1E4),g=b.callback_fn;d!==void 0&&(b.jsonp_callback[""+f]=d,g+='["'+
f+'"]');c.time=b.get_unixtime();b.save_campaign_params();b.save_search_keyword(document.referrer);e!="all"&&k(b.super_properties[e],function(a,b){b in c||(c[b]=a)});k(b.super_properties.all,function(a,b){b in c||(c[b]=a)});d={event:a,properties:c};e=b.base64_encode(b.json_encode(d));b.config.debug&&(o.log("-------------- REQUEST --------------"),o.log(d));b.send_request(b.api_host+"/track/",{data:e,ip:1,callback:g});b.track_predefined_funnels(a,c);return d}else o.error("No event name provided to mpmetrics.track")};
b.track_funnel=function(a,c,d,e,f){e=e||{};e.funnel=a;e.step=parseInt(c,10);e.goal=d;return b.track("mp_funnel",e,f,"funnels")};b.track_pageview=function(){b.track("mp_page_view",b.get_pageview_info())};b.identify=function(a){b.register_once({distinct_id:a},"all",null,30)};b.name_tag=function(a){b.register({mp_name_tag:a},"all",30)};b.register_once=function(a,c,d,e){if(s(a)){b.load_super_once();c=c||"all";d===void 0&&(d="None");e===void 0&&(e=7);if(b.super_properties.hasOwnProperty(c)){var f=b.super_properties[c];
k(a,function(a,e){if(!f[e]||f[e]===d)b.super_properties[c][e]=a})}b.config.cross_subdomain_cookie&&b.clear_old_cookie();b.set_cookie(b.config.cookie_name,b.json_encode(b.super_properties),e,b.config.cross_subdomain_cookie);return!0}else return!1};b.register=function(a,c,d){return s(a)?(b.load_super_once(),c=c||"all",d===void 0&&(d=7),b.super_properties.hasOwnProperty(c)&&k(a,function(a,d){b.super_properties[c][d]=a}),b.config.cross_subdomain_cookie&&b.clear_old_cookie(),b.set_cookie(b.config.cookie_name,
b.json_encode(b.super_properties),d,b.config.cross_subdomain_cookie),!0):!1};b.http_build_query=function(a,b){var d,e,f=[];b||(b="&");k(a,function(a,b){d=encodeURIComponent(a.toString());e=encodeURIComponent(b);f[f.length]=e+"="+d});return f.join(b)};b.get_unixtime=function(){return parseInt((new Date).getTime().toString().substring(0,10),10)};b.json_encode=function(a){var b=function(a){var b=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
c={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};b.lastIndex=0;return b.test(a)?'"'+a.replace(b,function(a){var b=c[a];return typeof b==="string"?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'},d=function(a,f){var g="",h=0,i=h="",i=0,k=g,j=[],l=f[a];l&&typeof l==="object"&&typeof l.toJSON==="function"&&(l=l.toJSON(a));switch(typeof l){case "string":return b(l);case "number":return isFinite(l)?String(l):"null";case "boolean":case "null":return String(l);
case "object":if(!l)return"null";g+="    ";j=[];if(Object.prototype.toString.apply(l)==="[object Array]"){i=l.length;for(h=0;h<i;h+=1)j[h]=d(h,l)||"null";return i=j.length===0?"[]":g?"[\n"+g+j.join(",\n"+g)+"\n"+k+"]":"["+j.join(",")+"]"}for(h in l)Object.hasOwnProperty.call(l,h)&&(i=d(h,l))&&j.push(b(h)+(g?": ":":")+i);return i=j.length===0?"{}":g?"{"+j.join(",")+""+k+"}":"{"+j.join(",")+"}"}};return d("",{"":a})};b.base64_encode=function(a){var c,d,e,f,g=0,h=0,i="",i=[];if(!a)return a;a=b.utf8_encode(a+
"");do c=a.charCodeAt(g++),d=a.charCodeAt(g++),e=a.charCodeAt(g++),f=c<<16|d<<8|e,c=f>>18&63,d=f>>12&63,e=f>>6&63,f&=63,i[h++]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e)+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f);while(g<a.length);i=i.join("");switch(a.length%3){case 1:i=i.slice(0,
-2)+"==";break;case 2:i=i.slice(0,-1)+"="}return i};b.utf8_encode=function(a){var a=(a+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n"),b="",d,e,f=0,g;d=e=0;f=a.length;for(g=0;g<f;g++){var h=a.charCodeAt(g),i=null;h<128?e++:i=h>127&&h<2048?String.fromCharCode(h>>6|192)+String.fromCharCode(h&63|128):String.fromCharCode(h>>12|224)+String.fromCharCode(h>>6&63|128)+String.fromCharCode(h&63|128);i!==null&&(e>d&&(b+=a.substring(d,e)),b+=i,d=e=g+1)}e>d&&(b+=a.substring(d,a.length));return b};b.set_cookie=function(a,
c,d,e){var f=new Date,e=e?b.parse_domain(document.location.hostname):"",a=a+"="+escape(c);f.setDate(f.getDate()+d);a+=d===null?"":";expires="+f.toGMTString();a+="; path=/";a+=e?";domain=."+e:"";document.cookie=a};b.get_cookie=function(a){var b;if(document.cookie.length>0&&(document.cookie.match("^"+a+"=")?b=0:(b=document.cookie.search("; "+a+"="),b!==-1&&(b+=2)),b!==-1)){b=b+a.length+1;a=document.cookie.indexOf(";",b);if(a==-1)a=document.cookie.length;return unescape(document.cookie.substring(b,a))}return""};
b.delete_cookie=function(a,c){b.set_cookie(a,"",-1,c)};b.parse_domain=function(a){return(a=a.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i))?a[0]:""};b.get_super=function(){var a=eval("("+b.get_cookie(b.config.cookie_name)+")")||{};k(a,function(a,d){b.super_properties[d]=a});return b.super_properties};b.load_super_once=function(){if(!G)try{b.get_super(),G=!0}catch(a){}};b.register_funnel=function(a,c){b.funnels[a]=c};b.track_predefined_funnels=function(a,c){var d,e;if(a&&b.funnels)for(d in b.funnels)if(b.funnels.hasOwnProperty(d))for(e=
0;e<b.funnels[d].length;++e)b.funnels[d][e]&&b.funnels[d][e]==a&&b.track_funnel(d,e+1,a,c)};b.save_campaign_params=function(){b.campaign_params_saved=b.campaign_params_saved||!1;if(b.config.store_google&&!b.campaign_params_saved){var a="",c={};k(["utm_source","utm_medium","utm_campaign","utm_content","utm_term"],function(d){a=b.get_query_param(document.URL,d);a.length&&(c[d]=a)});b.register_once(c);b.campaign_params_saved=!0}};b.save_search_keyword=function(a){var c="";a.search("https?://(.*)google.([^/?]*)")===
0?c=b.get_query_param(a,"q"):a.search("https?://(.*)bing.com")===0?c=b.get_query_param(a,"q"):a.search("https?://(.*)yahoo.com")===0?c=b.get_query_param(a,"p"):a.search("https?://(.*)duckduckgo.com")===0&&(c=b.get_query_param(a,"q"));c.length&&b.register({mp_keyword:c},"all")};b.get_pageview_info=function(){var a=document.referrer,b;b=navigator.userAgent;b=window.opera?"Opera":/chrom/i.test(b)?"Chrome":/msie/i.test(b)?"Internet Explorer":/AppleWebKit/.test(navigator.appVersion)?"Safari":/mozilla/i.test(b)&&
!/compatible|webkit/i.test(b)?"Firefox":"";var d;d=navigator.userAgent;d=/Windows/i.test(d)?"Windows":/iPhone/.test(d)?"iPhone":/Android/.test(d)?"Android":/Mac/i.test(d)?"Mac OS X":/X11/.test(d)||/Linux/.test(d)?"Linux":"";var e=document.location.href,f={};if(a.length)f.mp_referrer=a;if(b.length)f.mp_browser=b;if(d.length)f.mp_platform=d;if(e.length)f.mp_page=e;return f};b.clear_old_cookie=function(){b.delete_cookie(b.config.cookie_name,!1);b.set_cookie(b.config.cookie_name,b.json_encode(b.super_properties),
7,!0)};b.set_config=function(a){s(a)&&k(a,function(a,d){b.config[d]=a})};(function(a){var b=navigator.userAgent.toLowerCase();/webkit/.test(b)?timeout=setTimeout(function(){document.readyState==="loaded"||document.readyState==="complete"?a():setTimeout(arguments.callee,10)},10):/mozilla/.test(b)&&!/(compatible)/.test(b)||/opera/.test(b)?document.addEventListener("DOMContentLoaded",a,!1):w(window,"onload",a)})(u);b._private={dom_loaded:function(a){if(typeof a!=="undefined")r=a;else return r},is_list:v,
is_object:s,is_dom_query:A,parse_dom_query:B,to_array:t,get_elements_by_class_name:C,get_element_by_id:D,register_event:w,register_tracking_event:E,prevent_default:F,process_dom_loaded_queue:u};b.set_config(m||{});m="https:"==document.location.protocol?"https://":"http://";b.token=j;b.api_host=m+"api.mixpanel.com";b.callback_fn=n?n+".jsonp_callback":"mpmetrics.jsonp_callback";b.track_pageview();return b};
typeof mpq!="undefined"&&mpq&&mpq[0]&&mpq[0][0]=="init"&&function(j){j.metrics=new MixpanelLib(j[0][1],"mpq.metrics",j[0][2]);j.push=function(m){if(m)if(typeof m=="function")m();else if(m.constructor==Array){var k=j.metrics[m[0]];typeof k=="function"&&k.apply(j.metrics,m.slice(1))}};var n;for(n=1;n<j.length;n++)j.push(j[n]);j.length=0}(mpq);

(function($) {
  $.fn.Piazza_UIDropdownSelector = function(options) {
    // Variables.
    var $wrapper  = this;
    var wrapperID = $wrapper.attr('id');
    var overlayID = 'Overlay';
    var openID    = null;

    // Activate all menu behaviors.
    activateHandle();
    activateSelectionBehavior();

    // Functions.
    function activateHandle() {
      // Activate open/closing each dropdown menu.
      $wrapper.find('.UIDropdownHandle').click(function() {
        if ($wrapper.hasClass('closed')) {
          openDropdownMenu(wrapperID);
        } else if ($wrapper.hasClass('open')) {
          //closeDropdownMenu(wrapperID);  //this is unintuitive.
        }
      });
      // bind optional events
      if (options.event) {
        if (options.event == 'hover') {
          $wrapper.find('.UIDropdownHandle').mouseenter(function(e) {
            openDropdownMenu(wrapperID);
          });
          $wrapper.find('.UIDropdownHandle').mouseleave(function(e) {
            var toElement = e.relatedTarget || e.toElement;
            if (!$(toElement).closest('.UIDropdownMenu').hasClass('UIDropdownMenu'))
              closeDropdownMenu(wrapperID);
          });
          $wrapper.find('.UIDropdownMenu').mouseleave(function() {
            closeDropdownMenu(wrapperID);
          });
        }
      }

      // Closes any open dropdown menus when the user clicks anywhere else in the window.
      $(document).bind('click', function(e) {
        if (!e.isDefaultPrevented()) {
          var target = $(e.target);
          if ((target.attr('id') != overlayID) && !target.hasClass('UIDropdownHandle') &&
              !target.hasClass('UIDropdownMenu') &&
              target.closest('.UIDropdownSelector').length == 0)
          {
            $('.UIDropdownSelector.open').each(function() {
              var id = $(this).attr('id');
              closeDropdownMenu(id);
            });
          }
        }
      });
    }
		function activateSelectionBehavior() {
      // Activate selection behavior for each dropdown menu item.
      //if ($wrapper.data('added-listener'))
      //  return;
      //$wrapper.data('added-listener', true);
      $wrapper.find('.UIDropdownMenu li').click(function(event) {
        if (!$wrapper.hasClass('nonSelectable') && !$(this).hasClass('disabled')) {
          selectDropdownItem($(this), options.onSelect);
        }
        closeDropdownMenu(wrapperID);
      });
    }
    function closeDropdownMenu(dropdownSelectorID) {
      $('#' + dropdownSelectorID).removeClass('open').addClass('closed');
    }
    function openDropdownMenu(dropdownSelectorID) {
      $('.memoryless').removeClass('open');
      $('.UIDropdownSelector.open').each(function() {
        var id = $(this).attr('id');
        closeDropdownMenu(id);
      });
      $('#' + dropdownSelectorID).removeClass('closed').addClass('open');
      if (options && options.onOpen)
        options.onOpen();
    }
    function selectDropdownItem($selectedItem, selectionFunction) {
      if (!$wrapper.hasClass('memoryless')) {
        // Select the menu item.
        $wrapper.find('.UIDropdownMenu li.selected').each(function() {
          $(this).removeClass('selected');
        });
        $selectedItem.addClass('selected');
      }

      if (options != null && options.onSelect != null) {
        // Evaluate the onSelect function provided by the user.
        eval(selectionFunction + '($selectedItem)');
      } else {
        // Do nothing.
      }
    }

    // Return the object for chaining.
    return this;
  }
})(jQuery);
