(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{Snxs:function(e,t,a){"use strict";a.r(t);var n=a("N1om"),r=a.n(n),l=a("q1tI"),c=a.n(l),i=a("Wbzz"),m=a("9eSz"),s=a.n(m),o=a("E4U4"),u=a.n(o),d=a("Bl7J"),f=a("vrFN"),p=a("3CW5"),E=function(e){var t=e.condition,a=e.wrapper,n=e.children;return t?a(n):n};t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMarkdownRemark.edges,l=a.subject;console.log(a);var m="Articles";return l&&(m="Filed under "+l+":"),c.a.createElement(d.a,null,c.a.createElement(f.a,{title:'All articles on the subject "'+l+'"',description:"All articles filed under this subject.",image:"/logo.png",pathname:"/subjects/"+l}),c.a.createElement("section",{className:u.a.articlelist},c.a.createElement("h2",null,m),c.a.createElement("ul",null,n.map((function(e,t){var a=e.node;return c.a.createElement("li",{key:t,className:u.a.listitem},a.frontmatter.featimg&&c.a.createElement("figure",{className:u.a.featimg},c.a.createElement(i.Link,{to:a.fields.slug},c.a.createElement(s.a,{fixed:a.frontmatter.featimg.childImageSharp.fixed,alt:a.frontmatter.title}))),c.a.createElement(E,{condition:a.frontmatter.featimg,wrapper:function(e){return c.a.createElement("div",{className:u.a.article__wrap},e)}},c.a.createElement(i.Link,{to:a.fields.slug},c.a.createElement("h1",{className:u.a.article__title},a.frontmatter.title)),c.a.createElement("div",{className:u.a.article__meta},"by ",a.frontmatter.author,". Published"," ",new Date(a.frontmatter.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})," "),c.a.createElement("div",{className:u.a.article__tax},"Filed under:"," ",a.frontmatter.subject.map((function(e,t){return[t>0&&", ",c.a.createElement(i.Link,{key:t,to:"/subjects/"+r()(e)},e)]}))),c.a.createElement("div",{className:u.a.article__content,dangerouslySetInnerHTML:{__html:a.excerpt}})))})))),c.a.createElement(p.a,{pageContext:a}))}}}]);
//# sourceMappingURL=component---src-templates-subjects-js-60bd0d633dd20fcd294e.js.map