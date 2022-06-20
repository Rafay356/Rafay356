function calculateSpeed() {
  const a = x1 - x2;
  const b = y1 - y2;

  endDate = new Date();

  console.log("X1: ", x1, "X2: ", x2);

  console.log("A: ", a, "B: ", b);

  var c = Math.sqrt(a * a + b * b);

  console.log("Distance: ", c);

  console.log("TIME DIFF: ", (endDate.getTime() - startDate.getTime()) / 1000);

  speed = c / ((endDate.getTime() - startDate.getTime()) / 1000);

  console.log("Speed: ", speed);
}

export default calculateSpeed;
