define('common-lib', function(){
    console.log('init common-lib');
    return function(){
        return 'this is common-lib';
    };
});

require(['common-lib'], function () {
    console.log('run myapp');
    window.runApp = function(){
        require(['myapp/myapp'], function(myapp){
            myapp();
        });
    };
});
