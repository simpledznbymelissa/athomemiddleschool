(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"6WUh":function(e,t,a){"use strict";a.r(t);var n=a("N1om"),r=a.n(n),l=a("q1tI"),c=a.n(l),i=a("Wbzz"),m=a("9eSz"),o=a.n(m),s=a("E4U4"),u=a.n(s),d=a("Bl7J"),f=a("vrFN"),p=a("3CW5"),E=function(e){var t=e.condition,a=e.wrapper,n=e.children;return t?a(n):n};t.default=function(e){var t=e.data,a=e.pageContext,n=t.allMarkdownRemark.edges;return c.a.createElement(d.a,null,c.a.createElement(f.a,{title:"Articles",description:"All articles published by the Project",image:"/logo.png",pathname:"/articles"}),c.a.createElement("section",{className:u.a.articlelist},c.a.createElement("h2",null,"Articles"),c.a.createElement("ul",null,n.map((function(e,t){var a=e.node;return c.a.createElement("li",{key:t,className:u.a.listitem},a.frontmatter.featimg&&c.a.createElement("figure",{className:u.a.featimg},c.a.createElement(i.Link,{to:a.fields.slug},c.a.createElement(o.a,{fixed:a.frontmatter.featimg.childImageSharp.fixed,alt:a.frontmatter.title}))),c.a.createElement(E,{condition:a.frontmatter.featimg,wrapper:function(e){return c.a.createElement("div",{className:u.a.article__wrap},e)}},c.a.createElement(i.Link,{to:a.fields.slug},c.a.createElement("h1",{className:u.a.article__title},a.frontmatter.title)),c.a.createElement("div",{className:u.a.article__meta},"by ",a.frontmatter.author,". Published"," ",new Date(a.frontmatter.date).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})," "),c.a.createElement("div",{className:u.a.article__tax},"Filed under:"," ",a.frontmatter.subject.map((function(e,t){return[t>0&&", ",c.a.createElement(i.Link,{key:t,to:"/subjects/"+r()(e)},e)]}))),c.a.createElement("div",{className:u.a.article__content,dangerouslySetInnerHTML:{__html:a.excerpt}})))})))),c.a.createElement(p.a,{pageContext:a}))}}}]);
//# sourceMappingURL=component---src-templates-articles-js-c19cdc80ba2ac8f5f984.js.map