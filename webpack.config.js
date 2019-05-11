const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const config = {
    entry: "./src/index.js",
    output: { path: path.resolve(__dirname, "dist"), filename: "bundle.js" },
    module: {
        rules: [
            {
                test: /\.(scss)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function () {
                                return [require("autoprefixer")];
                            }
                        }
                    },
                    { loader: "sass-loader" }
                ]
            },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.html$/, use: "html-loader" },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        outputPath: "img"
                    }
                }],

            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" }), new CleanWebpackPlugin()]
};
module.exports = config;
