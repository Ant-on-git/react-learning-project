import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // возвращаем набор лоадеров. порядок имеет значение

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2)$/i, // woff|woff2 - добавил препод дополнительно для работы со шрифтами (в доке лоадера этого нет)
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(options);


    // babel loader должкен идти до typescript loader т.к. иначе typescript файлы будут обрабатываться не тем обработчиком
    const babelLoader = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    // babel-plugin-i18next-extract:
                    ['i18next-extract', {
                        locales: ['ru', 'en'],      // языки, с которыми раюотаем
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
