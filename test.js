Java.perform(function() {
    var LocoReqClass = Java.use('com.kakao.talk.loco.protocol.LocoReq');
    var BSONObjectClass = Java.use('pq2.f');
    var LocoHeaderClass = Java.use('com.kakao.talk.loco.protocol.a');

    LocoReqClass.$init.overload('com.kakao.talk.loco.protocol.a', 'pq2.d').implementation = function(aVar, dVar) {
        console.log("e31.a 생성자의 호출을 가로챔: ", aVar, dVar);

        // 원래의 생성자 호출
        this.$init(aVar, dVar);

        // 추가 동작
        // ...
    };

    BSONObjectClass.a.implementation = function(str, obj) {
        console.log("'a' 메서드의 호출을 가로챔: ", str, obj);
        return this.a(str, obj);
    };

    BSONObjectClass.put.implementation = function(obj, obj2) {
        console.log("'put' 메서드의 호출을 가로챔: ", obj, obj2);
        return this.put(obj, obj2);
    };

    LocoHeaderClass.$init.overload('int', 'short', 'com.kakao.talk.loco.protocol.b').implementation = function(i13, s13, bVar) {
        console.log("'LocoHeader' 생성자의 호출을 가로챔: ", i13, s13, bVar);

        // 원래의 생성자 호출
        this.$init(i13, s13, bVar);

        // 추가 동작
        // ...
    };

    LocoHeaderClass.toString.implementation = function() {
        var result = this.toString();
        console.log("'toString' 메서드의 호출을 가로챔: ", result);
        return result;
    };
});
