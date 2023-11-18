Java.perform(function () {
    Java.enumerateLoadedClasses({
        onMatch: function(className) {
            if (className.includes('ssl')) {
                console.log(className);
            }
        },
        onComplete: function() {}
    });
});
