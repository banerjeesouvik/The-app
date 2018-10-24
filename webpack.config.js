const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[contenthash].js',
    },
    module: {
        rules: [
            {
                test: '/\.js$/',
                use: 'babel-loader',
            },
            {
                test: '/\.html$/',
                use: 'html-loader',
            },
            {
                test: '/\.css$/',
                use: 'css-loader',
            },
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ]
};