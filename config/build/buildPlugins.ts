import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';


export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  // возвращаем нвбор плагинов
    return [
        new HTMLWebpackPlugin({
          template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css'   // когда будем разбивать файлы на асинхронные и будут появляться отдельный чанки, кот. будут асинхронно подгружаться
        })
      ]
}