!function(n){function r(n){this.phrases=n&&n.phrases?n.phrases:{},this.currentLocale=n&&n.locale?n.locale:"en"}function t(n){return"shared.pluralize."+n}function e(n){var r,t,e,o={};for(r in n)if(n.hasOwnProperty(r)){t=n[r];for(e in t)o[t[e]]=r}return o}function o(n){var r=/^\s+|\s+$/g;return n.replace(r,"")}function u(n,r,t){var e,u,i;return null!=t&&n?(u=n.split(h),i=u[c(r,t)]||u[0],e=o(i)):e=n,e}function i(n){var r=e(p);return r[n]||r.en}function c(n,r){return f[i(n)](r)}function s(n,r){for(var t in r)"_"!==t&&r.hasOwnProperty(t)&&(n=n.replace(new RegExp("%\\{"+t+"\\}","g"),r[t]));return n}function a(r){n.console&&n.console.warn&&n.console.warn("WARNING: "+r)}function l(n){var r={};for(var t in n)r[t]=n[t];return r}r.VERSION="0.2.0",r.prototype.locale=function(n){return n&&(this.currentLocale=n),this.currentLocale},r.prototype.extend=function(n){for(var r in n)n.hasOwnProperty(r)&&(this.phrases[r]=n[r])},r.prototype.clear=function(){this.phrases={}},r.prototype.replace=function(n){this.clear(),this.extend(n)},r.prototype.t=function(n,r){var t;r=r||{};var e=this.phrases[n]||r._||"";return""===e?(a('Missing translation for key: "'+n+'"'),t=n):(r=l(r),null!=r.smart_count&&null!=r.smart_count.length&&(r.smart_count=r.smart_count.length),t=u(e,this.currentLocale,r.smart_count),t=s(t,r)),t},r.prototype.pluralize=function(n,r){null!=r&&null!=r.length&&(r=r.length);var e=t(n);return this.t(e,{smart_count:r})};var h="||||",f={chinese:function(){return 0},german:function(n){return 1!==n?1:0},french:function(n){return n>1?1:0},russian:function(n){return n%10===1&&n%100!==11?0:n%10>=2&&4>=n%10&&(10>n%100||n%100>=20)?1:2},czech:function(n){return 1===n?0:n>=2&&4>=n?1:2},polish:function(n){return 1===n?0:n%10>=2&&4>=n%10&&(10>n%100||n%100>=20)?1:2},icelandic:function(n){return n%10!==1||n%100===11?1:0}},p={chinese:["id","ja","ko","ms","th","tr","zh"],german:["da","de","en","es","fi","el","he","hu","it","nl","no","pt","sv"],french:["fr","tl"],russian:["hr","ru"],czech:["cs"],polish:["pl"],icelandic:["is"]};"undefined"!=typeof module&&module.exports?module.exports=r:n.Polyglot=r}(this);
//# sourceMappingURL=polyglot.js.map