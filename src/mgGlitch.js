    /*!
 * mgGlitch : little jquery helper to glitch everything
 * (c) 2016 Hadrien Mongouachon
 * MIT Licensed.
 *
 * Author URI: http://hmongouachon.com
 * Plugin URI: http://hmongouachon.com

 * Version: 1.0.0
 */


;( function( $, window, document, undefined ) {

	"use strict";

		// Create the defaults once
		var pluginName = "mgGlitch",
			defaults = {
				destroy : false,
				glitch: true,
				scale: true,
				blend : true,
				blendModeType : 'hue',
				glitch1TimeMin : 600,
				glitch1TimeMax : 900,
				glitch2TimeMin : 10,
				glitch2TimeMax : 115,
				zIndexStart : 5

			};

		// The actual plugin constructor
		function Plugin ( element, options ) {

			this.element = element;
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();

		}

		// Avoid Plugin.prototype conflicts
		$.extend( Plugin.prototype, {

                       // init plugin
		       init: function() {
		       	
                               // this.element
                               // this._defaults.propertyName = get the defaults options
                               // this.settings.propertyName = get options from plugin instance
                               this.glitch();
		        },
            
                        // public function
			glitch: function() {

                                // element glitch
				var el = this.element;
                                
                                // set options as var to use in nested functions
                                // scale option : true or false
				var scale = this.settings.scale;

                                // random time interval for first glitch elem : between min and max
				var glitch1TimeMin = this.settings.glitch1TimeMin;
				var glitch1TimeMax = this.settings.glitch1TimeMax;

                                // random time interval for second glitch elem : between min and max
				var glitch2TimeMin = this.settings.glitch2TimeMin;
				var glitch2TimeMax = this.settings.glitch2TimeMax;
				
				// zIndex value for first layer
				var zIndexStart = this.settings.zIndexStart;
                
                                // randomize number between min and max
				function getRandomInt(min, max) {
                                        return Math.floor(Math.random() * (max - min + 1)) + min;
                                }
                
                                // destroy method : set true or false
                                if(this.settings.destroy === true) {

                	                // check if created elements exists and remove them
                                        if($(el).siblings().hasClass('el-front-1') || $(el).siblings().hasClass('front-3') || $(el).siblings().hasClass('front-2')){
                	                        $(el).siblings('.front-1, .front-2, .front-3').remove();
                                        }
                                        $('.back').removeClass('back');
                                } 
                
                                else if(this.settings.destroy === false ) {

                	                // clone this.element insert before addclass back = static element
                                        var cloneEl = $(el).clone();
                                        cloneEl.insertBefore(el).addClass('back').css({'z-index': zIndexStart});

                                        // blending elements : front-3
                                        if (this.settings.blend === true) { 

                                                // clone element insert front addclass el-front-3
                                                var cloneEl = $(el).clone();
                                                cloneEl.insertAfter(el).addClass('front-3').css({'z-index' : zIndexStart + 3, 'mix-blend-mode' : this.settings.blendModeType}); // , 'mix-blend-mode': 'hard-light'
                                               blendElem();
                                        } 

                                        // glitching element : front-1, front-2
                                        if (this.settings.glitch === true) {

                                                // clone element insert front addclass el-front-1 = first glitch element
                                               var cloneEl = $(el).clone();
                                               cloneEl.insertAfter(el).addClass('front-2').css({'z-index' : zIndexStart + 2});

                                               // add class middle to elem
                                               $('.back').next().addClass('front-1').css({'z-index' : zIndexStart + 1});

                                               // call recursives functions with random timing apply
                                               glitch1(), glitch2();

                                        }
                                }

                                // first glitched element with lower timing and no scale : apply to front-1
                                function glitch1() {
                                	
                                        var clipPos1 = getRandomInt(10, 1900);
                                        var clipPos2 = 9999;
                                        var clipPos3 = getRandomInt(10, 1300);
                                        var clipPos4 = 0;
                                        var leftValue = getRandomInt(0, 16);
                                        var rightValue = getRandomInt(0, 16);
                                        var randomTime = getRandomInt(glitch1TimeMin, glitch1TimeMax);
                    
                                        // select front-1 selector : random clip, right and left values
                                        $(el).css({
                    	                        'clip' : 'rect('+clipPos1+'px, '+clipPos2+'px, '+clipPos3+'px,' + clipPos4 +'px)' ,
                    	                        'right' : rightValue,
                                                'left' : leftValue	
                                        });

                                        // set loop with random time
                                       setTimeout(glitch1, randomTime); 
                                }

                                // second glitched element with higher timing + scale options : apply to front-2
                                function glitch2() {
                    
                                        var clipPos1 = getRandomInt(10, 1900);
                                        var clipPos2 = 9999;
                                        var clipPos3 = getRandomInt(10, 1300);
                                        var clipPos4 = 0;
                                        var leftValue = getRandomInt(0, 40);
                                        var rightValue = getRandomInt(0, 40);
                                        var randomTime = getRandomInt(glitch2TimeMin, glitch2TimeMax);

                                        // check if scale option is active = true or not = false
                                        if (scale === true) { 
                 	                        // get random scale value between 0.9 and 1.1 with decimal
                                                var scaleValue = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2); // toFixed(n) where n = decimal
                                        } 
                                        else if (scale === false) { 
                                                // if false always set scale value to 1
                 	                        var scaleValue = 1;
                                        };
                    
                                        // select front-2 selector : random clip, right, left and scale values
                                        $(el).next().css({
                    	                        'clip' : 'rect('+clipPos1+'px, '+clipPos2+'px, '+clipPos3+'px,' + clipPos4 +'px)',
                    	                        'left' : leftValue,
                                                'right' : rightValue,
                                                '-webkit-transform' : 'scale(' + scaleValue + ')',
                                                '-ms-transform' : 'scale(' + scaleValue + ')',
                    	                        'transform' : 'scale(' + scaleValue + ')'
                                        });

                                        // set loop with random time
                                        setTimeout(glitch2, randomTime); 
                                }

                                // third glitched element with higher timing + scale options + blend-mode : apply to front-3
                                function blendElem() {
                
                                        var clipPos1 = getRandomInt(10, 1900);
                                        var clipPos2 = 9999;
                                        var clipPos3 = getRandomInt(10, 1300);
                                        var clipPos4 = 0;
                                        var leftValue = getRandomInt(0, 40);
                                        var rightValue = getRandomInt(0, 40);
                                        var randomTime = getRandomInt(glitch2TimeMin, glitch2TimeMax);
                    
                                        // check if scale option is active = true or not = false
                                        if (scale === true) { 
                 	                        // get random scale value between 0.9 and 1.1 with decimal
                                                var scaleValue = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2); // toFixed(n) where n = decimal
                                        } 
                                        else if (scale === false) { 
                    	                        // if false always set scale value to 1
                 	                        var scaleValue = 1;
                                        };

                                        // select front-3 selector : random clip, right, left and scale values
                                        $(el).next().next().css({
                    	                        'clip' : 'rect('+clipPos1+'px, '+clipPos2+'px, '+clipPos3+'px,' + clipPos4 +'px)',
                    	                        'left' : leftValue,
                                                'right' : rightValue,
                    	                        '-webkit-transform' : 'scale(' + scaleValue + ')',
                                                '-ms-transform' : 'scale(' + scaleValue + ')',
                                                'transform' : 'scale(' + scaleValue + ')'
                                        });

                                        // set loop with random time
                                        setTimeout(blendElem, randomTime); 
                                }
		        }
		});

		// A really lightweight plugin wrapper around the constructor,
		// preventing against multiple instantiations
		$.fn[ pluginName ] = function( options ) {
			return this.each( function() {
				new Plugin( this, options );
			} );
		};

} )( jQuery, window, document );



