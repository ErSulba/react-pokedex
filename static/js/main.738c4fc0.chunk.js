(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports={search:"search_search__wRJSD"}},19:function(e,t,n){e.exports=n(51)},24:function(e,t,n){},26:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),o=n.n(c),s=(n(24),n(3)),i=n(4),l=n(6),u=n(5),m=n(7),p=(n(26),n(2)),h=n.n(p),v=n(9);function f(e){return r.a.createElement("img",{alt:e.name,src:e.front_default})}function d(e){return r.a.createElement("div",null)}function k(e){e.entries;return r.a.createElement("div",null,r.a.createElement("p",null," this is a pokdex entrie"))}function O(e){var t=e.name;return r.a.createElement("h1",null,t," ")}function b(e){var t=e.sprites;return e.isOk?r.a.createElement("div",null,r.a.createElement(O,{name:e.name}),r.a.createElement(f,Object.assign({name:e.name},t)),r.a.createElement(k,{entries:e.flavor_text_entries}),r.a.createElement(d,{moves:e.moves})):null}var E=n(10),g=n.n(E),w=n(18),j=n.n(w);function x(e){var t=e.handleOnchange;return r.a.createElement("div",{className:j.a.search},r.a.createElement("div",null,r.a.createElement("input",{onChange:t,placeholder:"search pokemon by dex number or name"})))}var y=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={pokemon:null,text:"",isOk:!1,speciesData:null},n.getPokemon=function(){var e=Object(v.a)(h.a.mark(function e(t){var a,r,c;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(""===(a=t.target.value)){e.next=15;break}return e.prev=2,e.next=5,g.a.get("https://pokeapi.co/api/v2/pokemon/".concat(a,"/"));case 5:r=e.sent,c=r.data.species.url,n.setState({pokemon:r.data,isOk:!0}),n.getPokemonSpecies(c),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),console.error(e.t0),n.setState({isOk:!1});case 15:case"end":return e.stop()}},e,this,[[2,11]])}));return function(t){return e.apply(this,arguments)}}(),n.getPokemonSpecies=function(){var e=Object(v.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.a.get(t);case 3:a=e.sent,n.setState({speciesData:a.data}),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}},e,this,[[0,7]])}));return function(t){return e.apply(this,arguments)}}(),n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null," This is a test"),r.a.createElement(b,Object.assign({},this.state.pokemon,{isOk:this.state.isOk},this.state.speciesData)),r.a.createElement(x,{handleOnchange:this.getPokemon}))}}]),t}(a.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.738c4fc0.chunk.js.map