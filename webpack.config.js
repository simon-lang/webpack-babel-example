const path = require('path')

module.exports = {
    entry: {
        'app.js': './src/entry.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name]',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /.js?$/,
                loader: 'babel-loader',
                include: /src/,
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true
                }
            },
        ]
    },
}
