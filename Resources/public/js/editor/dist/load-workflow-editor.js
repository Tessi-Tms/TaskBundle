!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(e,r,a){for(var i,s,u=0,c=[];u<e.length;u++)s=e[u],o[s]&&c.push(o[s][0]),o[s]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);for(n&&n(e,r,a);c.length;)c.shift()()};var r={},o={2:0};e.e=function(t){function n(){s.onerror=s.onload=null,clearTimeout(u);var e=o[t];0!==e&&(e&&e[1](new Error("Loading chunk "+t+" failed.")),o[t]=void 0)}var r=o[t];if(0===r)return new Promise(function(t){t()});if(r)return r[2];var a=new Promise(function(e,n){r=o[t]=[e,n]});r[2]=a;var i=document.getElementsByTagName("head")[0],s=document.createElement("script");s.type="text/javascript",s.charset="utf-8",s.async=!0,s.timeout=12e4,e.nc&&s.setAttribute("nonce",e.nc),s.src=e.p+""+({0:"trigger-workflow-vue-editor"}[t]||t)+".async.js";var u=setTimeout(n,12e4);return s.onerror=s.onload=n,i.appendChild(s),a},e.m=t,e.c=r,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/bundles/idcitask/js/editor/dist/",e.oe=function(t){throw console.error(t),t},e(e.s=4)}([function(t,e,n){"use strict";(function(t){var n,r,o,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(i,s){"object"==a(e)&&"object"==a(t)?t.exports=s():(r=[],n=s,void 0!==(o="function"==typeof n?n.apply(e,r):n)&&(t.exports=o))}(0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e){t.exports=function(t,e,n,r,o){var i,s=t=t||{},u=a(t.default);"object"!==u&&"function"!==u||(i=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),r&&(c._scopeId=r);var l;if(o?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=l):n&&(l=n),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?c.render=function(t,e){return l.call(e),f(t,e)}:c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:i,exports:s,options:c}}},function(t,e,n){var r=n(9),o=n(0),a=o(r.a,null,null,null,null);e.a=a.exports},function(t,e,n){var r=n(22),o=n(0),a=o(r.a,null,null,null,null);e.a=a.exports},function(t,e,n){var r=n(23),o=n(0),a=o(r.a,null,null,null,null);e.a=a.exports},function(t,e,n){var r=n(5);e.a={toJson:function(t){function e(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function n(t){var e=t.removeLineBreaksAnsExtraSpaces().replace(/([^\\])"/g,'$1\\"');return localStorage.setItem(Object(r.e)(e),t),e}function o(t,e,n,r){return e+': "'+r+'"'}var a=/{{(.*)?}}/g,i=/\[(\s*?){%([\s\S]*?)%}(\s*?)\]/g,s=/("([\w.|]*)"): (\[(\s*?){%([\s\S]*?)%}(\s*?)\])/g;return t.replace(a,e).replace(i,n).replace(s,o)},toRaw:function(t){function e(t){return t.replace(/\\\\/g,"\\").replace(/\\"/g,'"')}function n(t){var e=t.substring(1,t.length-1);return null!==localStorage.getItem(Object(r.e)(e))?localStorage.getItem(Object(r.e)(e)):e.replace(/\\"/g,'"').replace(/\\\\'/g,"\\'")}var o=/{{(.*)?}}/g,a=/"\[( {0,1}){%(.*)?%}( {0,1})\]"/g;return t.replace(a,n).replace(o,e)}}},function(t,e,n){function r(t,e){var n={};for(var r in t)t.hasOwnProperty(r)&&e(t[r])&&(n[r]=t[r]);return n}function o(t,e,n){var r={};void 0===n&&(n=!0),void 0===e&&(e=[]);for(var o=0,a=e.length;o<a;o++){var i=e[o];r[i]=t[i]}if(n)Object.keys(t).sort().forEach(function(n){-1===e.indexOf(n)&&(r[n]=t[n])});else for(var s in t)t.hasOwnProperty(s)&&-1===e.indexOf(s)&&(r[s]=t[s]);return r}function a(){return Math.random().toString(36).substr(2,9)}function i(t){var e=0;if(0===t.length)return e.toString();for(var n=0;n<t.length;n++)e=(e<<5)-e+t.charCodeAt(n),e|=0;return e.toString()}function s(t){for(var e,n=t.attributes,r={},o=0,a=n.length;o<a;o++)e=n[o],r[e.nodeName]=e.nodeValue;return r.value=t.value,r}function u(t,e,n,r,o,a){return'<div id="'+e+"-"+t+'" class="editor-modal modal fade '+n+" "+e+'"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">'+r+'</h4></div><div class="modal-body">'+o+'</div><div class="modal-footer">'+(a||"")+"</div></div></div></div>"}n.d(e,"c",function(){return r}),n.d(e,"f",function(){return o}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return i}),n.d(e,"b",function(){return u}),n.d(e,"a",function(){return s}),String.prototype.removeLineBreaksAnsExtraSpaces=function(){return this.replace(/\r?\n|\r/g," ").replace(/ {2,}/g," ")}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"utils",function(){return b});var r=n(7),o=n(11),a=n(14),i=n(17),s=n(20),u=n(25),c=n(28),l=n(30),d=n(2),f=n(1),p=n(3),v=n(32),m=n(33),h=n(34),_=n(4),g=n(5);n.d(e,"checkBoxComponent",function(){return r.a}),n.d(e,"choiceComponent",function(){return o.a}),n.d(e,"integerComponent",function(){return a.a}),n.d(e,"numberComponent",function(){return i.a}),n.d(e,"textComponent",function(){return s.a}),n.d(e,"textareaComponent",function(){return u.a}),n.d(e,"modalComponent",function(){return c.a}),n.d(e,"httpMixin",function(){return l.a}),n.d(e,"jsonOptionMixin",function(){return d.a}),n.d(e,"optionMixin",function(){return f.a}),n.d(e,"waitForItMixin",function(){return p.a}),n.d(e,"actions",function(){return v.a}),n.d(e,"getters",function(){return m.a}),n.d(e,"mutations",function(){return h.a}),n.d(e,"JsonToTwigTransformer",function(){return _.a});var b={filterObject:g.c,sortObject:g.f,generateUniqueId:g.d,hashCode:g.e,createBootstrapModal:g.b,createAttributeMapObject:g.a}},function(t,e,n){var r=n(8),o=n(10),a=n(0),i=a(r.a,o.a,null,null,null);e.a=i.exports},function(t,e,n){var r=n(1);e.a={mixins:[r.a]}},function(t,e,n){e.a={props:["option","name","value","required-star"],data:function(){return{data:this.option.options.data}},computed:{displayRequiredStar:function(){return this.option.options.required&&this.requiredStar}},created:function(){void 0!==this.value&&(this.data=this.value,"object"==a(this.value)&&(this.data=JSON.stringify(this.value)))},watch:{value:{handler:function(t){void 0!==t&&(this.data=t,"object"==(void 0===t?"undefined":a(t))&&(this.data=JSON.stringify(t)))}}},methods:{updateOption:function(t){void 0!==t&&(this.data=t,this.$emit("changed",{name:this.name,value:t}))}}}},function(t,e,n){var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"name"}},[t._v(t._s(t.name))]),t._v(" "),t.displayRequiredStar?n("span",{staticClass:"required-star"},[t._v("*")]):t._e(),t._v(" "),n("div",{staticClass:"form-control-wrapper"},[t.option.options.help?n("span",[t._v(t._s(t.option.options.help))]):t._e(),t._v(" "),n("input",{attrs:{required:t.option.options.required,type:"checkbox",name:t.name},domProps:{checked:t.data},on:{click:function(e){t.updateOption(e.target.checked)}}})])])},o=[],a={render:r,staticRenderFns:o};e.a=a},function(t,e,n){var r=n(12),o=n(13),a=n(0),i=a(r.a,o.a,null,null,null);e.a=i.exports},function(t,e,n){var r=n(1);e.a={mixins:[r.a],watch:{value:{handler:function(t){this.data=t},deep:!0},data:{handler:function(t){this.updateOption(t)},deep:!0}}}},function(t,e,n){var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:t.name}},[t._v(t._s(t.name))]),t._v(" "),t.displayRequiredStar?n("span",{staticClass:"required-star"},[t._v("*")]):t._e(),t._v(" "),n("div",{staticClass:"form-control-wrapper"},[t.option.options.help?n("span",[t._v(t._s(t.option.options.help))]):t._e(),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.data,expression:"data"}],staticClass:"form-control",attrs:{required:t.option.options.required,name:t.name},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.data=e.target.multiple?n:n[0]}}},t._l(t.option.options.choices,function(e,r){return n("option",{domProps:{value:r}},[t._v(t._s(e))])}))])])},o=[],a={render:r,staticRenderFns:o};e.a=a},function(t,e,n){var r=n(15),o=n(16),a=n(0),i=a(r.a,o.a,null,null,null);e.a=i.exports},function(t,e,n){var r=n(1);e.a={mixins:[r.a]}},function(t,e,n){var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:t.name}},[t._v(t._s(t.name))]),t._v(" "),t.displayRequiredStar?n("span",{staticClass:"required-star"},[t._v("*")]):t._e(),t._v(" "),n("div",{staticClass:"form-control-wrapper"},[t.option.options.help?n("span",[t._v(t._s(t.option.options.help))]):t._e(),t._v(" "),n("input",{staticClass:"form-control",attrs:{required:t.option.options.required,type:"number",name:t.name},domProps:{value:t.data},on:{input:function(e){t.updateOption(e.target.value)}}})])])},o=[],a={render:r,staticRenderFns:o};e.a=a},function(t,e,n){var r=n(18),o=n(19),a=n(0),i=a(r.a,o.a,null,null,null);e.a=i.exports},function(t,e,n){var r=n(1);e.a={mixins:[r.a]}},function(t,e,n){var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:t.name}},[t._v(t._s(t.name))]),t._v(" "),t.displayRequiredStar?n("span",{staticClass:"required-star"},[t._v("*")]):t._e(),t._v(" "),n("div",{staticClass:"form-control-wrapper"},[t.option.options.help?n("span",[t._v(t._s(t.option.options.help))]):t._e(),t._v(" "),n("input",{staticClass:"form-control",attrs:{required:t.option.options.required,type:"text",name:t.name},domProps:{value:t.data},on:{input:function(e){t.updateOption(e.target.value)}}})])])},o=[],a={render:r,staticRenderFns:o};e.a=a},function(t,e,n){var r=n(21),o=n(24),a=n(0),i=a(r.a,o.a,null,null,null);e.a=i.exports},function(t,e,n){var r=n(2);e.a={mixins:[r.a]}},function(t,e,n){var r=n(1),o=n(3),i=n(4);e.a={mixins:[r.a,o.a],data:function(){return{classes:""}},created:function(){"object"==a(this.value)&&(this.data=i.a.toRaw(JSON.stringify(this.value,null,4)),this.setJsonAttemptClass(this.data))},watch:{value:{handler:function(t){"object"==(void 0===t?"undefined":a(t))&&(this.data=i.a.toRaw(JSON.stringify(t,null,4)),this.setJsonAttemptClass(this.data))}}},methods:{onOptionValueChanged:function(t){var e=this;return new Promise(function(n){e.waitForIt(function(){e.updateOption(t),e.setJsonAttemptClass(t),n()},300)})},setJsonAttemptClass:function(t){if(0===t.indexOf("{{")||0!==t.indexOf("{")&&0!==t.indexOf("["))this.classes="";else try{JSON.parse(i.a.toJson(t)),this.classes="fa fa-check success feedback"}catch(t){this.classes="fa fa-exclamation-circle warning feedback"}}}}},function(t,e,n){e.a={data:function(){return{timeout:null}},methods:{waitForIt:function(t,e){void 0===e&&(e=500),clearTimeout(this.timeout),this.timeout=setTimeout(t,e)}}}},function(t,e,n){var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:t.name}},[t._v("\n    "+t._s(t.name)+"\n    "),n("i",{class:t.classes,attrs:{"aria-hidden":"true"}})]),t._v(" "),t.displayRequiredStar?n("span",{staticClass:"required-star"},[t._v("*")]):t._e(),t._v(" "),n("div",{staticClass:"form-control-wrapper"},[t.option.options.help?n("span",[t._v(t._s(t.option.options.help))]):t._e(),t._v(" "),n("input",{staticClass:"form-control",attrs:{required:t.option.options.required,type:"text",name:t.name},domProps:{value:t.data},on:{input:function(e){t.onOptionValueChanged(e.target.value)}}})])])},o=[],a={render:r,staticRenderFns:o};e.a=a},function(t,e,n){var r=n(26),o=n(27),a=n(0),i=a(r.a,o.a,null,null,null);e.a=i.exports},function(t,e,n){var r=n(2);e.a={mixins:[r.a]}},function(t,e,n){var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"form-group"},[n("label",{attrs:{for:t.name}},[t._v("\n    "+t._s(t.name)+"\n    "),n("i",{class:t.classes,attrs:{"aria-hidden":"true"}})]),t._v(" "),t.displayRequiredStar?n("span",{staticClass:"required-star"},[t._v("*")]):t._e(),t._v(" "),n("div",{staticClass:"form-control-wrapper"},[t.option.options.help?n("span",[t._v(t._s(t.option.options.help))]):t._e(),t._v(" "),n("textarea",{staticClass:"form-control",attrs:{required:t.option.options.required,name:t.name},domProps:{value:t.data},on:{input:function(e){t.onOptionValueChanged(e.target.value)}}})])])},o=[],a={render:r,staticRenderFns:o};e.a=a},function(t,e,n){var r=n(29),o=n(0),a=o(null,r.a,null,null,null);e.a=a.exports},function(t,e,n){var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"vue-modal-mask"},[n("div",{staticClass:"vue-modal-container"},[n("div",{staticClass:"vue-modal-header"},[t._t("header")],2),t._v(" "),n("div",{staticClass:"vue-modal-body"},[t._t("body")],2),t._v(" "),n("div",{staticClass:"vue-modal-footer"},[t._t("footer")],2)])])])},o=[],a={render:r,staticRenderFns:o};e.a=a},function(t,e,n){var r=n(31),o=n(0),a=o(r.a,null,null,null,null);e.a=a.exports},function(t,e,n){e.a={methods:{handleGetRequest:function(t,e){var n=this,r=this.$store.getters.getCachedResource(t);if(r)return e(r);this.$http.get(t).then(function(t){return t.json()},function(){return null}).then(function(r){return n.$store.commit({type:"cache",api_url:t,api_response:r}),e(r)})}}}},function(t,e,n){var r={handleGetRequest:function(t,e,n,r){var o=e.getters.getCachedResource(t);if(o)return r(o);n.get(t).then(function(t){return t.json()},function(){return null}).then(function(n){return e.commit({type:"cache",api_url:t,api_response:n}),r(n)},function(){return r()})}};e.a=r},function(t,e,n){e.a={editorId:function(t){return t.configuration.editorId},getCachedResource:function(t){return function(e){return t.apiCache[e]}}}},function(t,e,n){e.a={cache:function(t,e){t.apiCache[e.api_url]=e.api_response}}}])})}).call(e,n(1)(t))},function(t,e,n){"use strict";t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},,,function(t,e,n){"use strict";(0,n(5).loadEditors)()},function(t,e,n){"use strict";function r(){const t=document.querySelectorAll(".workflow-editor");[].forEach.call(t,function(t){n.e(0).then(n.bind(null,7)).then(function(e){const n="workflow_editor_"+t.id;if(!document.getElementById(n)){var r=window[t.getAttribute("data-configuration-variable")];r.form=o.utils.createAttributeMapObject(t),t.style.display="none";var a=document.createElement("div");a.id=n,a.innerHTML="<workflow-editor></workflow-editor>",t.parentNode.insertBefore(a,t.nextSibling),e.triggerVueEditor("#"+n,r)}})})}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"loadEditors",function(){return r});var o=n(0);n.n(o)}]);