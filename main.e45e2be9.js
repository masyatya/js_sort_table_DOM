parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=e(t))){var r=0,n=function(){};return{s:n,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,c=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==a.return||a.return()}finally{if(c)throw o}}}}function e(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var n=document.querySelector("tbody"),a=[];document.body.addEventListener("click",function(e){if("TH"===e.target.tagName){var r=e.target.innerText,o=0;switch(r){case"Name":o=0;break;case"Position":o=1;break;case"Age":o=2;break;case"Salary":o=3}var i,c=t(n.children);try{for(c.s();!(i=c.n()).done;){var l=i.value;a.push(l)}}catch(y){c.e(y)}finally{c.f()}a.sort(function(t,e){var r=t.children[o].textContent.replace(/[$,]/g,""),n=e.children[o].textContent.replace(/[$,]/g,"");return 3===o?r-n:r.localeCompare(n)});var u,f=t(a);try{for(f.s();!(u=f.n()).done;){var s=u.value;n.append(s)}}catch(y){f.e(y)}finally{f.f()}}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e45e2be9.js.map