define(['common-lib'], function(common){
    console.log('init myapp/start');
    return function(){
        console.log('> common', common());
    };
});
