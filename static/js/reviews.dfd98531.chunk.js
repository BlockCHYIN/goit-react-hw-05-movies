"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[912],{9122:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(5861),a=t(885),u=t(7757),c=t.n(u),s=t(4390),i=t(6871),o=t(2791),f=t(184);function p(){var n=(0,o.useState)(null),e=(0,a.Z)(n,2),t=e[0],u=e[1],p=(0,o.useState)(null),v=(0,a.Z)(p,2),l=v[0],d=v[1],h=(0,i.UO)().postId,x=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.Hx)(e);case 3:0!==(t=n.sent).total_results&&u(t),n.next=11;break;case 7:n.prev=7,n.t0=n.catch(0),u(null),d("Error server!!!");case 11:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){x(h)}),[h]),(0,f.jsxs)(f.Fragment,{children:[l&&(0,f.jsx)("h2",{children:l}),t?(0,f.jsx)("ul",{children:t.results.map((function(n){var e=n.author,t=n.content,r=n.id;return(0,f.jsxs)("li",{children:[(0,f.jsxs)("h3",{children:["Author: ",e," "]}),(0,f.jsx)("p",{children:t})]},r)}))}):(0,f.jsx)("p",{children:"We don`t have any reviews for this movie."})]})}},4390:function(n,e,t){t.d(e,{Ai:function(){return o},AR:function(){return f},Y5:function(){return p},xc:function(){return v},Hx:function(){return l}});var r=t(5861),a=t(7757),u=t.n(a),c=t(4569),s=t.n(c),i="04f04bc22a38496cedb77ffb55edd218";s().defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("search/movie?api_key=".concat(i,"&language=en-US&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en_US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=reviews.dfd98531.chunk.js.map