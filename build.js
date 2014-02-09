({
    baseUrl: "../home/lib",
    shim: {
        myapp: {
            deps: ['main']
        }
    },
    mainConfigFile: 'home/requirejs.config.js',
    modules: [
        {
            name: 'myapp',
            exclude: ['main'] // exclude main
        }
    ],
    appDir: 'myapp',
    dir: 'build/myapp',

    optimize: 'none',
    removeCombined: true
})