const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        "css/style.css": "./src/scss/style.scss",
        "js/bundle.js": "./src/js/main.js",
        "js/contentful.js": "./src/js/contentful.js"
    },
    output: {
        path: path.join(__dirname, "assets"),
        filename: "[name]"
    },
    watch: true,

    watchOptions: {
       aggregateTimeout: 100,
       ignored: /node_modules/
    },

    devtool: "eval-source-map",

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: "style-loader",
                        use: ["css-loader", "postcss-loader", "sass-loader"]
                    }
                )
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["es2015"],
                        plugins: ["transform-runtime"]
                    }
                }
            },
            {
                test: /\.(jpe?g|svg|png|ttf|woff2?|eot|otf)(\?.+)?$/,
                use: {
                    loader: 'url-loader',
                    query:  {
                        limit: 1000000
                    }
                }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name]")
    ]
};
