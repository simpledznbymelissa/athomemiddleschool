(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"/9aa":function(t,e,n){var r=n("NykK"),a=n("ExA7");t.exports=function(t){return"symbol"==typeof t||a(t)&&"[object Symbol]"==r(t)}},"3cYt":function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},"6nK8":function(t,e,n){var r=n("dVn5"),a=n("fo6e"),u=n("dt0z"),o=n("9NmV");t.exports=function(t,e,n){return t=u(t),void 0===(e=n?void 0:e)?a(t)?o(t):r(t):t.match(e)||[]}},"9NmV":function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",a="\\d+",u="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",c="[^\\ud800-\\udfff"+n+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",i="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",d="(?:"+o+"|"+c+")",s="(?:"+l+"|"+c+")",x="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?"+x+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,i].join("|")+")[\\ufe0e\\ufe0f]?"+x+")*"),p="(?:"+[u,f,i].join("|")+")"+m,g=RegExp([l+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,l,"$"].join("|")+")",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,l+d,"$"].join("|")+")",l+"?"+d+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,p].join("|"),"g");t.exports=function(t){return t.match(g)||[]}},AP2z:function(t,e,n){var r=n("nmnc"),a=Object.prototype,u=a.hasOwnProperty,o=a.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=u.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(f){}var a=o.call(t);return r&&(e?t[c]=n:delete t[c]),a}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),a="object"==typeof self&&self&&self.Object===Object&&self,u=r||a||Function("return this")();t.exports=u},N1om:function(t,e,n){var r=n("sgoq")((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},NykK:function(t,e,n){var r=n("nmnc"),a=n("AP2z"),u=n("KfNM"),o=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":o&&o in Object(t)?a(t):u(t)}},TKrE:function(t,e,n){var r=n("qRkn"),a=n("dt0z"),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=a(t))&&t.replace(u,r).replace(o,"")}},VRlk:function(t,e,n){"use strict";n.r(e);var r=n("N1om"),a=n.n(r),u=n("q1tI"),o=n.n(u),c=n("Wbzz"),f=n("9eSz"),i=n.n(f),l=n("Bl7J"),d=n("vrFN"),s=n("bgTc"),x=n.n(s);e.default=function(t){var e=t.data.markdownRemark;return o.a.createElement(l.a,null,o.a.createElement(d.a,{title:e.frontmatter.title,description:e.excerpt,image:"/logo.png",pathname:e.fields.slug,article:!0}),o.a.createElement("article",{className:x.a.article},e.frontmatter.featimg&&o.a.createElement("figure",{className:x.a.featimg},o.a.createElement(i.a,{fluid:e.frontmatter.featimg.childImageSharp.fluid,alt:e.frontmatter.title})),o.a.createElement("h1",{className:x.a.article__title},e.frontmatter.title),o.a.createElement("div",{className:x.a.article__meta},"by ",e.frontmatter.author,". Published"," ",new Date(e.frontmatter.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})," "),o.a.createElement("div",{className:x.a.article__tax},"Filed under:"," ",e.frontmatter.subject.map((function(t,e){return[e>0&&", ",o.a.createElement(c.Link,{key:e,to:"/subjects/"+a()(t)},t)]}))),o.a.createElement("div",{className:x.a.article__content,dangerouslySetInnerHTML:{__html:e.html}})))}},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("yLpj"))},Z0cm:function(t,e){var n=Array.isArray;t.exports=n},asDA:function(t,e){t.exports=function(t,e,n,r){var a=-1,u=null==t?0:t.length;for(r&&u&&(n=t[++a]);++a<u;)n=e(n,t[a],a,t);return n}},bgTc:function(t,e,n){t.exports={article__meta:"article-module--article__meta--1ZTgb",article__tax:"article-module--article__tax--125y8",article:"article-module--article--1FVBh",featimg:"article-module--featimg--10HBm",article__title:"article-module--article__title--2zMDg",article__content:"article-module--article__content--1Num2",customMedia:{},customProperties:{},customSelectors:{}}},dVn5:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},fo6e:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},qRkn:function(t,e,n){var r=n("3cYt")({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},sgoq:function(t,e,n){var r=n("asDA"),a=n("TKrE"),u=n("6nK8"),o=RegExp("['’]","g");t.exports=function(t){return function(e){return r(u(a(e).replace(o,"")),t,"")}}},zoYe:function(t,e,n){var r=n("nmnc"),a=n("eUgh"),u=n("Z0cm"),o=n("/9aa"),c=r?r.prototype:void 0,f=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(u(e))return a(e,t)+"";if(o(e))return f?f.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-article-js-ae0d3c9ccaff1f83204d.js.map