var sketch2 = function(q) {
  var xspacing = 16;    // Distance between each horizontal location
  var w;                // Width of entire wave
  var theta = 0.0;      // Start angle at 0
  var amplitude = 100.0; // Height of wave
  var period = 500.0;   // How many pixels before the wave repeats
  var dx;               // Value for incrementing x
  var yvalues;  // Using an array to store height values for the wave
  var counter = 0;
  q.setup = function() {
    q.createCanvas(600, 600);
    w = q.width+16;
    dx = (q.TWO_PI / period) * xspacing;
    yvalues = new Array(q.floor(w/xspacing));
  }

  q.draw = function() {
    counter += 1
    q.background(0);
    calcWave();
    renderWave();
    amplitude = q.sin(counter / 16) * counter
  }

  function calcWave() {
    // Increment theta (try different values for 
    // 'angular velocity' here)
    theta += 0.06;

    // For every x value, calculate a y value with sine function
    var x = theta;
    for (var i = 0; i < yvalues.length; i++) {
      yvalues[i] = q.sin(x)*amplitude;
      x+=dx;
    }
  }

  function renderWave() {
    q.noStroke();
    q.fill(255);
    // A simple way to draw the wave with an ellipse at each location
    for (var x = 0; x < yvalues.length; x++) {
      q.ellipse(x*xspacing, q.height/2+yvalues[x], 16, 16);
    }
  };
}
new p5(sketch2, 'sketch-2');
