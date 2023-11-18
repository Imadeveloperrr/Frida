// 모든 모듈을 열거
Process.enumerateModules().forEach(function(module) {
  console.log('모듈 이름: ' + module.name + ' - 베이스 주소: ' + module.base);

  // 특정 라이브러리에서 내보낸 함수를 열거
  Module.enumerateExports(module.name).forEach(function(exp) {
    // SSL과 관련된 함수를 찾기 위한 조건 (예: 이름에 'ssl'이 포함되는 경우)
    if (exp.name.toLowerCase().includes('ssl')) {
      console.log('SSL 관련 함수 찾음: ' + exp.name + ' - 주소: ' + exp.address);

      // 해당 함수를 후킹
      // Interceptor.attach(exp.address, {
      //   onEnter: function(args) {
      //     console.log('함수 호출됨: ' + exp.name);
      //   },
      //   onLeave: function(retval) {
      //     console.log('함수 종료됨: ' + exp.name);
      //   }
      // });
    }
  });
});
