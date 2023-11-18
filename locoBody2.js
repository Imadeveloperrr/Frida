Java.perform(function() {
  var LocoBody = Java.use('com.kakao.talk.loco.protocol.LocoBody');

  var methods = LocoBody.class.getDeclaredMethods();
  methods.forEach(function(method) {
      try {
          var methodName = method.getName();
          var overloads = LocoBody[methodName].overloads;
          overloads.forEach(function(overload) {
              overload.implementation = function() {
                  console.log("Call to " + methodName + " with arguments: " + JSON.stringify(arguments));
                  var result = overload.apply(this, arguments);
                  console.log("Return value from " + methodName + ": " + JSON.stringify(result));
                  return result;
              };
          });
      } catch (error) {
          console.log("Error hooking method " + methodName + ": " + error.message);
      }
  });
});