webpackJsonp([20],{240:function(t,e,o){var r,s;r=o(393),s=o(426),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),s&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=s)},393:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(84);e["default"]={data:function(){return{status:"loading"}},route:{activate:function(){return this.auth?this.deleteBearer():void 0}},vuex:{actions:{deleteBearer:r.deleteBearer}},watch:{auth:function(t){var e=this;this.$nextTick(function(){t||e.$route.router.go("/")})}}}},426:function(t,e){t.exports="<div class=logout> {{status}} </div>"}});
//# sourceMappingURL=20.b95bf32af81b755b7047.js.map