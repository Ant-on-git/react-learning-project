import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // возвращаем набор лоадеров. порядок имеет значение

    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i, // woff|woff2 - добавил препод дополнительно для работы со шрифтами (в доке лоадера этого нет)
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // при подключении sass было:
            // Creates `style` nodes from JS strings
            // "style-loader",
            // это пришлось заменить на MiniCssExtractPlugin.loader, т.к. того просит этот плагин
            // Но оставим style-loader для режима разработки.
            options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,

            // при подключении sass было:
            // Translates CSS into CommonJS
            // "css-loader",
            // но т.к. добавили css modules, появилась необходимость донастроить
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => resPath.includes(".module."), // чтобы часть css файлов импортировалась как css modules с заменой имен (это будут файлы, в имени которых есть .module.), а остальные импортировались как обычные
                        localIdentName: options.isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]",
                        // по факту файлы, содержащие '.module.' – в них классы переименовываются в [набор букв 8 символов] а ссылающиеся на эти классы html объекты в коде получают имя класса [path][name]__[local]--[hash:base64:5]. Файлы без '.module.' остаются как есть.
                    },
                },
            },

            // Compiles Sass to CSS
            "sass-loader",
        ],
    };


    // babel loader должкен идти до typescript loader т.к. иначе typescript файлы будут обрабатываться не тем обработчиком
    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
                plugins: [
                    // babel-plugin-i18next-extract:
                    ["i18next-extract", {
                            locales: ["ru", "en"],      // языки, с которыми раюотаем
                            keyAsDefaultValue: true,    // ключ устанавливается в файлах с переводом в качестве значения (по умолчанию)
                        },
                    ],
                    // […] your other plugins […]
                ],
            },
        },
    };

    return [svgLoader, fileLoader, babelLoader, typescriptLoader, cssLoader];
}
