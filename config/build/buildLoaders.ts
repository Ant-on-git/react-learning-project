import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';


export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // возвращаем набор лоадеров. порядок имеет значение

    const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }
    
    const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // при подключении sass было:
          // Creates `style` nodes from JS strings
          // "style-loader",
        // это пришлось заменить на MiniCssExtractPlugin.loader, т.к. того просит этот плагин
        // Но оставим style-loader для режима разработки.
        options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        
        // при подключении sass было:
          // Translates CSS into CommonJS
          // "css-loader",
        // но т.к. добавили css modules, появилась необходимость донастроить
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: (resPath: string) => resPath.includes('.module.'),  // чтобы часть css файлов импортировалась как css modules с заменой имен (это будут файлы, в имени которых есть .module.), а остальные импортировались как обычные
              localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
              // по факту файлы, содержащие '.module.' – в них классы переименовываются в [набор букв 8 символов] а ссылающиеся на эти классы html объекты в коде получают имя класса [path][name]__[local]--[hash:base64:5]. Файлы без '.module.' остаются как есть.
            }
          }
        },

        // Compiles Sass to CSS
        "sass-loader",
      ],
    }

    return [typescriptLoader, cssLoader]
}