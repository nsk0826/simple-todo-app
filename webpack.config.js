const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    target: 'electron-renderer',
    entry: './src/index.tsx',
    cache: true,
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
            },
        ],
    },

    resolve: {
        extensions: [
            '.ts',
            '.tsx',
            '.js',
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
    ],
};