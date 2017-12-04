module.exports = {
    cache: true,

    watch: true,

    entry: {
        'index': ['./src/index.js'],
    },

    output: {
        filename: '[name].js'
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader!transform/cacheable?envify'},
        ],
        postLoaders: [
            {loader: "transform?brfs"}
        ]
    },
    devtool: ['source-map'],
    resolve: {
        root: __dirname,
        alias: {
            'react-canvas': 'lib/ReactCanvas.js'
        }
    },
    query: {
        esModules: true
    }
};
