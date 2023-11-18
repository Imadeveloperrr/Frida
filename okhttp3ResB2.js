if (Java.available) {
    Java.perform(function () {
        var ResponseBody = Java.use('okhttp3.ResponseBody');

        ResponseBody.byteStream.implementation = function () {
            var result = this.byteStream();
            console.log('byteStream: ' + result);

            var InputStream = Java.use('java.io.InputStream');
            var byteArray = Java.array('byte', [1024]);
            var byteRead = Java.use('java.lang.Integer');
            var str = "";
            
            while (true) {
                var length = result.read(byteArray);
                if (length !== -1) {
                    for (var i = 0; i < length; i++) {
                        str += String.fromCharCode(byteArray[i]);
                    }
                } else {
                    break;
                }
            }
            console.log('byteStream content: ' + str);

            return result;
        };

        ResponseBody.charStream.implementation = function () {
            var result = this.charStream();
            console.log('charStream: ' + result);

            var InputStreamReader = Java.use('java.io.InputStreamReader');
            var BufferedReader = Java.use('java.io.BufferedReader');
            var br = BufferedReader.$new(result);
            var line;
            var str = "";

            while ((line = br.readLine()) !== null) {
                str += line;
            }
            console.log('charStream content: ' + str);

            return result;
        };
    });
}
