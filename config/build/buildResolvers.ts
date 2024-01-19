import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,                           // чтоб вебпак понимал абсолютные пути
        modules: [options.paths.src, 'node_modules'],   // исходные точки для абсолютных путей
        mainFiles: ['index'],                           // чтоб при обращении к модулю не прописывать каждый раз /index на конце
      }
}