"use strict";

module.exports =
{
	install: function(less, pluginManager)
	{
		var functions = less.functions.functionRegistry._data;
		
		delete functions.alpha;
		delete functions.blue;
		delete functions.color;
		delete functions.contrast;
		delete functions.green;
		delete functions.hsl;
		delete functions.hsla;
		delete functions.hue;
		delete functions.lightness;
		delete functions.red;
		delete functions.rgb;
		delete functions.saturation;
		delete functions.shade;
		delete functions.tint;
	}
};
