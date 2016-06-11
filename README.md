MgGlitch configuration

This plugin with clone the selected element 3 times :
   - element as static background
   - element with glitch property and lower interval
   - element with glitch property, higher interval and scale options
   - element with glitch property, higher interval, scale options and blend mode apply 

1 - Set the element you want to glitch with absolute position
2 - Include jquery script
3 - Instanciate plugin like this :

$( function() {
		$( ".glitch-img" ).mgGlitch({
				destroy : false, // set 'true' to stop the plugin
        glitch: true, // set 'false' to stop glitching
        scale: true, // set 'false' to stop scaling
        blend : true, // set 'false' to stop glitch blending
        blendModeType : 'hard-light', // select blend mode type
        glitch1TimeMin : 600, // set min time for glitch 1 elem
        glitch1TimeMax : 900, // set max time for glitch 1 elem
        glitch2TimeMin : 10, // set min time for glitch 2 elem
        glitch2TimeMax : 115, // set max time for glitch 2 elem
		});

});
