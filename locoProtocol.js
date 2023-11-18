Java.perform(function() {
    var cClass = Java.use('com.kakao.talk.loco.protocol.c'); // LocoProtocol

    cClass.toString.implementation = function() {
        console.log("toString is called");

        var origResult = this.toString();
        console.log("toString original result: ", origResult);
        return origResult;
    };
});
