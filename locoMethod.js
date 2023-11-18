Java.perform(function() {
    var BClass = Java.use('com.kakao.talk.loco.protocol.LocoMethod');  // b 클래스의 경로는 실제 환경에 맞게 수정해야 합니다.

    BClass.getMethodBytes.implementation = function() {
        var result = this.getMethodBytes();
        console.log('getMethodBytes result: ', result);
        return result;
    };

    BClass.getMethodName.implementation = function() {
        var result = this.getMethodName();
        console.log('getMethodName result: ', result);
        return result;
    };

    BClass.getPushClass.implementation = function() {
        var result = this.getPushClass();
        console.log('getPushClass result: ', result);
        return result;
    };

    /*BClass.shouldCollapse.overload('e31.a', 'e31.a').implementation = function(aVar, aVar2) {
        console.log('shouldCollapse arguments: ', aVar, aVar2);
        var result = this.shouldCollapse(aVar, aVar2);
        console.log('shouldCollapse result: ', result);
        return result;
    };*/
});
