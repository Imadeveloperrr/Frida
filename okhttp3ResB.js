Java.perform(function () {
    // Target class: okhttp3.ResponseBody
    var responseBodyClass = Java.use('okhttp3.ResponseBody');
// JavaScript Frida script to hook the inputStream() method of ResponseBodySource


    // Intercept the 'byteStream' method
    responseBodyClass.byteStream.implementation = function () {
        console.log('[+] Intercepting byteStream()');
        var result = this.byteStream();
        console.log('[+] Response body byteStream():', result);
        return result;
    };

    // Intercept the 'bytes' method
    responseBodyClass.bytes.implementation = function () {
        console.log('[+] Intercepting bytes()');
        var result = this.bytes();
        console.log('[+] Response body bytes():', result);
        return result;
    };

    // Intercept the 'string' method
    responseBodyClass.string.implementation = function () {
        console.log('[+] Intercepting string()');
        var result = this.string();
        console.log('[+] Response body string():', result);
        return result;
    };

    // Intercept the 'charStream' method
    responseBodyClass.charStream.implementation = function () {
        console.log('[+] Intercepting charStream()');
        var result = this.charStream();
        console.log('[+] Response body charStream():', result);
        return result;
    };

    // Intercept the 'contentType' method
    responseBodyClass.contentType.implementation = function () {
        console.log('[+] Intercepting contentType()');
        var result = this.contentType();
        console.log('[+] Response body contentType():', result);
        return result;
    };

    // Intercept the 'contentLength' method
    responseBodyClass.contentLength.implementation = function () {
        console.log('[+] Intercepting contentLength()');
        var result = this.contentLength();
        console.log('[+] Response body contentLength():', result);
        return result;
    };
});
