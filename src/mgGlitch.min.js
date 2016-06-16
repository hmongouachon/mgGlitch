    /*!
 * mgGlitch : little jquery helper to glitch everything
 * (c) 2016 Hadrien Mongouachon
 * MIT Licensed.
 *
 * Author URI: http://hmongouachon.com
 * Plugin URI: http://hmongouachon.com
 * Date : 06/2016
 * Version: 1.0.0
 */


!function(t,s,e,i){"use strict";function n(s,e){this.element=s,this.settings=t.extend({},r,e),this._defaults=r,this._name=a,this.init()}var a="mgGlitch",r={destroy:!1,glitch:!0,scale:!0,blend:!0,blendModeType:"hue",glitch1TimeMin:600,glitch1TimeMax:900,glitch2TimeMin:10,glitch2TimeMax:115,zIndexStart:5};t.extend(n.prototype,{init:function(){this.glitch()},glitch:function(){function s(t,s){return Math.floor(Math.random()*(s-t+1))+t}function e(){var i=s(10,1900),n=9999,r=s(10,1300),o=0,h=s(0,16),f=s(0,16),d=s(c,l);t(a).css({clip:"rect("+i+"px, "+n+"px, "+r+"px,"+o+"px)",right:f,left:h}),setTimeout(e,d)}function i(){var e=s(10,1900),n=9999,c=s(10,1300),l=0,f=s(0,40),d=s(0,40),x=s(o,h);if(r===!0)var g=(Math.random()*(1.1-.9)+.9).toFixed(2);else if(r===!1)var g=1;t(a).next().css({clip:"rect("+e+"px, "+n+"px, "+c+"px,"+l+"px)",left:f,right:d,"-webkit-transform":"scale("+g+")","-ms-transform":"scale("+g+")",transform:"scale("+g+")"}),setTimeout(i,x)}function n(){var e=s(10,1900),i=9999,c=s(10,1300),l=0,f=s(0,40),d=s(0,40),x=s(o,h);if(r===!0)var g=(Math.random()*(1.1-.9)+.9).toFixed(2);else if(r===!1)var g=1;t(a).next().next().css({clip:"rect("+e+"px, "+i+"px, "+c+"px,"+l+"px)",left:f,right:d,"-webkit-transform":"scale("+g+")","-ms-transform":"scale("+g+")",transform:"scale("+g+")"}),setTimeout(n,x)}var a=this.element,r=this.settings.scale,c=this.settings.glitch1TimeMin,l=this.settings.glitch1TimeMax,o=this.settings.glitch2TimeMin,h=this.settings.glitch2TimeMax,f=this.settings.zIndexStart;if(this.settings.destroy===!0)(t(a).hasClass("el-front-1")||t(a).hasClass("front-3")||t(a).hasClass("back"))&&t(".front-1, .front-3, back").remove();else if(this.settings.destroy===!1){var d=t(a).clone();if(d.insertBefore(a).addClass("back").css({"z-index":f}),this.settings.blend===!0){var d=t(a).clone();d.insertAfter(a).addClass("front-3").css({"z-index":f+3,"mix-blend-mode":this.settings.blendModeType}),n()}if(this.settings.glitch===!0){var d=t(a).clone();d.insertAfter(a).addClass("front-2").css({"z-index":f+2}),t(".back").next().addClass("front-1").css({"z-index":f+1}),e(),i()}}}}),t.fn[a]=function(s){return this.each(function(){t.data(this,"plugin_"+a)||t.data(this,"plugin_"+a,new n(this,s))})}}(jQuery,window,document);
