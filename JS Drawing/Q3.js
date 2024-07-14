function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      var ctx = canvas.getContext("2d");
  
      // Draw red rectangle
      ctx.fillStyle = "rgb(256, 0, 0)";
      ctx.fillRect(15, 10, 55, 50);
  
      // Draw blue rectangle with 60% transparency
      ctx.fillStyle = "rgba(0, 0, 200, 0.6)";
      ctx.fillRect(35, 30, 55, 50);
    }
  }
draw();  