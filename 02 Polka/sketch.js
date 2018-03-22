var sketch = function(p) {
	var opacity = p.random(10,255)
	p.setup = function() {
	  p.createCanvas(600, 600);
	}
	var xoff = 0.0;
	var r1, r2, g1, g2, b1, b2;
	p.draw = function() {
		xoff = xoff + 0.01;
		p.background(r2,g2,b2);
		// Draw a circle
		p.strokeWeight(0);
		p.fill(r1, g1, b1, 255);
		for (var x = p.width/50 - 1; x >= 0; x--) {
			for (var y = p.height/50 - 1; y >= 0; y--) {
  			var n = p.noise(xoff) * 20;
			p.ellipse(x*50 + 12.5 + y%2 * 25, y*50 + 25, 20 + n, 20 + n);
		}
	}
	}
	var inverted = true
	p.mousePressed = function() {
		if (inverted) {
			r1 = 255, g1 = 255, b1 = 255;
			r2 = 255, g2 = 0, b2 = 0;
			inverted = false
		}else{
			r1 = 255, g1 = 0, b1 = 0;
			r2 = 255, g2 = 255, b2 = 255;
			inverted = true
		}
	}

}
new p5(sketch, 'sketch-1');
