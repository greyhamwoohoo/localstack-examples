exports.handler = function(event, context, callback) {
  console.log("START- Of Lambda Handler. HOW DO DO DI!");
  console.log(event);
  callback(null, "END- Lambda Handler has been called");
};
