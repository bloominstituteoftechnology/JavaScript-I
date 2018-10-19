function doHomework(subject, cb) {
  console.log(`Starting my ${subject} homework.`);
  cb();
}

let cb = () => console.log("Finished!");

doHomework("math", cb);
// generic reportOrders that shows your orders to the function


