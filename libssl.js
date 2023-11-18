Java.perform(function() {
    // libssl.so 모듈의 베이스 주소 가져오기
    var libsslBase = Module.findBaseAddress('libssl.so');
    console.log('libssl.so 베이스 주소: ' + libsslBase);

    // SSL_read 및 SSL_write 함수의 주소 가져오기
    var SSL_read_addr = Module.findExportByName('libssl.so', 'SSL_read');
    var SSL_write_addr = Module.findExportByName('libssl.so', 'SSL_write');
    console.log('SSL_read 주소: ' + SSL_read_addr);
    console.log('SSL_write 주소: ' + SSL_write_addr);

    // SSL_read 함수 후킹
    Interceptor.attach(SSL_read_addr, {
        onEnter: function(args) {
            console.log('SSL_read 호출됨, 인자:', args[0], args[1], args[2]);
        },
        onLeave: function(retval) {
            console.log('SSL_read 반환값:', retval);
        }
    });

    // SSL_write 함수 후킹
    Interceptor.attach(SSL_write_addr, {
        onEnter: function(args) {
            console.log('SSL_write 호출됨, 인자:', args[0], args[1], args[2]);
        },
        onLeave: function(retval) {
            console.log('SSL_write 반환값:', retval);
        }
    });
});
