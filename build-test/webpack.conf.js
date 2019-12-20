const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    plugins: [
        // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
        new HtmlWebpackPlugin({
            title: 'Development',
        }),
    ],
    output: {
        //Физический аутпут билда
        filename: '../[name].bundle.js',
        //Папка, в которой будет билд
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, '../src'),
        compress: true,
        port: 9000
    }
};