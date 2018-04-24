(function() {
  var canvas = this.__canvas = new fabric.Canvas('canvas', { selection: false });
  fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

  function makeCircle( left, top ) {
    var c = new fabric.Circle({
      left: left,
      top: top,
      strokeWidth: 1,
      radius: 35,
      fill: 'green',
      stroke: 'green'
    });
    c.hasControls = c.hasBorders = false;

    return c;
  }

  function makeLine(coords) {
    return new fabric.Line(coords, {
      fill: 'yellow',
      stroke: 'yellow',
      strokeWidth: 5,
      selectable: true
    });
  }

  var line = makeLine([ 25, 12, 150, 75 ]),
      line2 = makeLine([ 250, 175, 290, 250 ])

  var img = "assets/ball_cropped.jpg";

  canvas.setBackgroundImage( img, canvas.renderAll.bind(canvas), {
    originX: 'left',
    originY: 'top'
  });

  canvas.add(line, line2);

  canvas.add(
    makeCircle( 200, 180, null, line)
  );
})();
