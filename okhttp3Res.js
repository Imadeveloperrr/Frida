Java.perform(function() {
    var ResponseClass = Java.use('okhttp3.Response');

    ResponseClass.body.implementation = function() {
        var responseBody = this.body();

        if (responseBody !== null) {
            var bodyString = responseBody.string();
            console.log("Response Body:");
            console.log(bodyString);

            // Restore response body after consuming
            var MediaType = Java.use('okhttp3.MediaType');
            var ResponseBody = Java.use('okhttp3.ResponseBody');
            var bodyMediaType = responseBody.contentType();
            responseBody = ResponseBody.create(bodyMediaType, bodyString);
        }

        return responseBody;
    };
});
