Java.perform(function() {
    var LocoBody = Java.use('com.kakao.talk.loco.protocol.LocoBody');
    var Exception = Java.use('java.lang.Exception');

    LocoBody.a.overload('java.lang.String').implementation = function(str) {
        console.log('Called a with:', str);
        var result = this.a(str);
        console.log('Result:', result);
        return result;
    };

    // Add more method hooks as needed...

    LocoBody.f.overload('java.lang.String').implementation = function(str) {
        console.log('Called f with:', str);
        var result = this.f(str);
        console.log('Result:', result);
        return result;
    };

    LocoBody.toString.implementation = function() {
        console.log('Called toString');
        var result = this.toString();
        console.log('Result:', result);
        return result;
    };
});
