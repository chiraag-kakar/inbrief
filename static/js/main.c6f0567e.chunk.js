(this["webpackJsonpreact-ionic-app"]=this["webpackJsonpreact-ionic-app"]||[]).push([[1],{49:function(e,n,t){e.exports=t(78)},54:function(e,n,t){},55:function(e,n,t){},59:function(e,n,t){var r={"./ion-action-sheet.entry.js":[80,5],"./ion-alert.entry.js":[81,6],"./ion-app_8.entry.js":[82,7],"./ion-avatar_3.entry.js":[83,18],"./ion-back-button.entry.js":[84,19],"./ion-backdrop.entry.js":[85,43],"./ion-button_2.entry.js":[86,20],"./ion-card_5.entry.js":[87,21],"./ion-checkbox.entry.js":[88,22],"./ion-chip.entry.js":[89,23],"./ion-col_3.entry.js":[90,44],"./ion-datetime_3.entry.js":[91,10],"./ion-fab_3.entry.js":[92,24],"./ion-img.entry.js":[93,45],"./ion-infinite-scroll_2.entry.js":[94,46],"./ion-input.entry.js":[95,25],"./ion-item-option_3.entry.js":[96,26],"./ion-item_8.entry.js":[97,27],"./ion-loading.entry.js":[98,28],"./ion-menu_3.entry.js":[99,29],"./ion-modal.entry.js":[100,8],"./ion-nav_2.entry.js":[101,15],"./ion-popover.entry.js":[102,9],"./ion-progress-bar.entry.js":[103,30],"./ion-radio_2.entry.js":[104,31],"./ion-range.entry.js":[105,32],"./ion-refresher_2.entry.js":[106,11],"./ion-reorder_2.entry.js":[107,17],"./ion-ripple-effect.entry.js":[108,47],"./ion-route_4.entry.js":[109,33],"./ion-searchbar.entry.js":[110,34],"./ion-segment_2.entry.js":[111,35],"./ion-select_3.entry.js":[112,36],"./ion-slide_2.entry.js":[113,48],"./ion-spinner.entry.js":[114,13],"./ion-split-pane.entry.js":[115,49],"./ion-tab-bar_2.entry.js":[116,37],"./ion-tab_2.entry.js":[117,16],"./ion-text.entry.js":[118,38],"./ion-textarea.entry.js":[119,39],"./ion-toast.entry.js":[120,40],"./ion-toggle.entry.js":[121,12],"./ion-virtual-scroll.entry.js":[122,50]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=59,e.exports=o},61:function(e,n,t){var r={"./ion-icon.entry.js":[126,57]};function o(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((function(){return t(o)}))}o.keys=function(){return Object.keys(r)},o.id=61,e.exports=o},78:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),i=t(23),a=t.n(i),s=(t(54),t(4)),c=t(5),l=t(7),u=t(8),y=(t(55),t(56),t(57),t(14)),j=t(45),m=t.n(j),p=function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=n.call.apply(n,[this].concat(o))).API_URL="https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=in&apiKey=91d819b69e6d4c43953cefa5815517eb",e.state={items:[]},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;m.a.get(this.API_URL).then((function(e){return e.data})).then((function(n){e.setState({items:n.articles}),console.log(e.state.items)}))}},{key:"render",value:function(){return o.a.createElement(y.a,null,o.a.createElement(y.i,null,o.a.createElement(y.k,{color:"primary"},o.a.createElement("center",null,o.a.createElement(y.j,null,"Top Headlines served using News API")))),o.a.createElement(y.h,null,this.state.items.map((function(e){return o.a.createElement("center",null,o.a.createElement(y.c,null,o.a.createElement("img",{src:e.urlToImage}),o.a.createElement(y.e,null,o.a.createElement(y.g,null,e.title),o.a.createElement(y.f,null,e.author)),o.a.createElement(y.d,null,o.a.createElement("p",null,e.content),o.a.createElement(y.b,{href:e.url},"Read More"))))}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[49,3,4]]]);
//# sourceMappingURL=main.c6f0567e.chunk.js.map