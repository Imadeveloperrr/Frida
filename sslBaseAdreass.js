Process.enumerateModules().forEach(function(module) {
    if (module.name === 'libssl.so') {
        console.log('모듈 이름: ' + module.name + ' - 베이스 주소: ' + module.base);

        Module.enumerateExports(module.name).forEach(function(exp) {
            if (exp.name === 'SSL_read' || exp.name === 'SSL_write') {
                console.log('SSL 관련 함수 찾음: ' + exp.name + ' - 주소: ' + exp.address);
            }
        });
    }
});
