Java.perform(function() {
    const OkHttpClient = Java.use('okhttp3.OkHttpClient');
  
    OkHttpClient.newCall.overload('okhttp3.Request').implementation = function(request) {
      console.log("요청:");
      console.log("URL: " + request.url().toString());
      console.log("메소드: " + request.method());
      
      const headers = request.headers();
      console.log("헤더: ");
      for (let i = 0; i < headers.size(); i++) {
        console.log(headers.name(i) + ": " + headers.value(i));
      }
  
      if (request.body()) {
        console.log("바디: " + Java.use("okio.Buffer").readUtf8());
      }
      
      const tags = request.getTags$okhttp();
      console.log("태그: ");
      for (let tag in tags) {
        console.log(tag + ": " + tags[tag]);
      }
  
      // 원래의 메소드 호출을 계속하고 그 결과를 반환
      return this.newCall.overload('okhttp3.Request').call(this, request);
    };
  });
  