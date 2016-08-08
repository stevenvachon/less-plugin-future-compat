"use strict";
var expect = require("chai").expect;
var less = require("less");
var plugin = require("./");

var options = { plugins:[plugin] };


var properties = "";
properties += "  color: color(yellow alpha(25%));\n";
properties += "  color: color(yellow blue(25%));\n";
properties += "  color: color(yellow contrast(25%));\n";
properties += "  color: color(yellow green(25%));\n";
properties += "  color: color(yellow hue(25deg));\n";
properties += "  color: color(yellow lightness(25%));\n";
properties += "  color: color(yellow red(25%));\n";
properties += "  color: color(yellow saturation(25%));\n";
properties += "  color: color(yellow shade(25%));\n";
properties += "  color: color(yellow tint(25%));\n";

properties += "  color: color(hsl(25, 25%, 25%) contrast(25%));\n";
properties += "  color: color(hsla(25, 25%, 25%, 0.25) contrast(25%));\n";
properties += "  color: color(rgb(25, 25, 25) contrast(25%));\n";
properties += "  color: color(rgba(25, 25, 25, 0.25) contrast(25%));\n";

properties += "  color: hsl(25, 25%, 25%);\n";
properties += "  color: hsla(25, 25%, 25%, 0.25);\n";
properties += "  color: rgb(25, 25, 25);\n";
properties += "  color: rgba(25, 25, 25, 0.25);\n";


var cssString = "body {\n"+ properties +"}\n";

var lessString = ".properties(){"+ properties +"} body{.properties}";



it("css", function(done)
{
	less.render(cssString, options).then( function(output)
	{
		expect(output.css).to.equal(cssString);
		done();
	});
});



it("less", function(done)
{
	less.render(lessString, options).then( function(output)
	{
		expect(output.css).to.equal(cssString);
		done();
	});
});
