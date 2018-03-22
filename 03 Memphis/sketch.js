var sketch = function(p) {
	var shapes = [];
	p.setup = function() {
		p.createCanvas(600, 600);
		updatecoord()
	}
	var t = 0
	p.draw = function() {
		// t + 1
		// if (p.random(1) > 0.6){
		// 	updatecoord()
		// }
		p.background(255,255,255);

		for (var i = shapes.length - 1; i >= 0; i--) {
			if (shapes[i].type == "rect"){
				p.strokeWeight(0);
				p.fill(243,234,95)
				p.rect(shapes[i].x + shapes[i].offset, shapes[i].y + shapes[i].offset, shapes[i].r, shapes[i].r);

				p.strokeWeight(5);
				p.stroke(51);
				p.fill(0,0,0,0);
				p.rect(shapes[i].x, shapes[i].y, shapes[i].r, shapes[i].r);
			} else if (shapes[i].type == "ellipse"){
				p.strokeWeight(0);
				p.fill(43,209,252)
				p.ellipse(shapes[i].x + shapes[i].offset *0.8, shapes[i].y + shapes[i].offset * 0.8, shapes[i].r *1.2, shapes[i].r * 1.2);

				p.strokeWeight(5);
				p.stroke(51);
				p.fill(0,0,0,0);
				p.ellipse(shapes[i].x, shapes[i].y, shapes[i].r *1.2, shapes[i].r * 1.2);
			} else if (shapes[i].type == "triangle"){
				p.strokeWeight(0);
				p.fill(255,72,196)
				p.triangle(shapes[i].x + shapes[i].offset *0.8, 
						   shapes[i].y + shapes[i].offset *0.8, 
						   shapes[i].x + 60 * shapes[i].r/60 + shapes[i].offset *0.8, 
						   shapes[i].y + 40 * shapes[i].r/60 + shapes[i].offset *0.8, 
						   shapes[i].x + 40 * shapes[i].r/60 + shapes[i].offset *0.8, 
						   shapes[i].y - 20 * shapes[i].r/60 + shapes[i].offset *0.8);

				p.strokeWeight(5);
				p.stroke(51);
				p.fill(0,0,0,0);
				p.triangle(shapes[i].x, shapes[i].y, shapes[i].x + 60* shapes[i].r/60 , shapes[i].y + 40* shapes[i].r/60 , shapes[i].x + 40* shapes[i].r/60 , shapes[i].y - 20 * shapes[i].r/60 );

			} else {
				p.angleMode(p.RADIANS);
				p.strokeWeight(8);
				p.strokeCap(p.PROJECT);
				p.stroke(255,63,63)
				p.line(shapes[i].x + shapes[i].offset, shapes[i].y + shapes[i].offset, shapes[i].x + p.cos(shapes[i].theta)*shapes[i].r + shapes[i].offset, shapes[i].y + p.sin(shapes[i].theta)*shapes[i].r + shapes[i].offset)
				p.stroke(51)
				p.line(shapes[i].x, shapes[i].y, shapes[i].x + p.cos(shapes[i].theta)*shapes[i].r, shapes[i].y + p.sin(shapes[i].theta)*shapes[i].r)
			}
			
		}
	}
	p.mousePressed = function() {
		updatecoord()
		// p.save()
	}
	p.keyTyped = function() {
			p.saveCanvas();
	}
	function updatecoord() {
		shapes = [];
		while(shapes.length < 10){
			var overlapping = false;
			var shape = {
				x: p.random(p.width),
				y: p.random(p.height),
				r: 80
			}
			if (p.random(1) > .5){
				shape.offset = 13;
			} else {
				shape.offset = -13;
			}

			if (p.random(1) > .75){
				shape.type = "rect";
			}else if (p.random(1)> .8){
				shape.type = "ellipse";
			}else if (p.random(1) > .8){
				shape.type = "triangle";
			}else {
				shape.type = "line";
				shape.theta = p.random(2*p.PI)
			}

			shape.color = p.random(p.color(0, 100, 255), p.color(100, 255, 0), p.color(255, 0, 100))

			for(var j = 0; j < shapes.length; j++) {
				var other = shapes[j]
				var d = p.dist(shape.x, shape.y, other.x, other.y)
				if(d < shape.r + other.r){
					overlapping = true;
					break;
				}
				if(d < 300){
					overlapping = shape.type == other.type;
					if(overlapping){
						break;
					}
				}
			}
			if(!overlapping){
				shapes.push(shape);
			}


		}
	}

}
new p5(sketch, 'sketch-1');
