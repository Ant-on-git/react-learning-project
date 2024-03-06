import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';


export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    // возвращаем нвбор плагинов
    return [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css', // когда будем разбивать файлы на асинхронные и будут появляться отдельный чанки, кот. будут асинхронно подгружаться
        }),
        new webpack.DefinePlugin({    // для создания глобальных переменных, к которым можно получить доступ в любом месте приложения
            __IS_DEV__: JSON.stringify(isDev),
        }),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,            // чтоб не открывалсяя каждый раз при запуске приложения. (ссылка юудет в терминале)
        }),
    ];
}
