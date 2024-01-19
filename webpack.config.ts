// ---- старые импорты для расширения .js (webpack.config.js) ------
// const path = require('path');
// const HTMLWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
// -----------------------------------------------------------------

import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, buildEnv } from './config/build/types/config';


// env - окружение (задается в скриптах package.json "--env ...")
export default (env: buildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', "index.tsx"),      // стартовая точка проекта,
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),  // для абсолютных импортов относительно папки src, чтоб вебпак понимал где искать
  }
  
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;    // env.port - берем номер порта из окружения 
  
  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  });

  return config;
}
