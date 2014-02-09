require(['common-lib'], function (common) {
    console.log('run myapp');
    window.runApp = function(){
        require(['myapp/myapp'], function(myapp){
            myapp();
        });
    };
});
