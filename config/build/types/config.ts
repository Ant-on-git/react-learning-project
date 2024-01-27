
export type BuildMode = 'production' | 'development';

// пути до entrypoint, до главной папки проекта и тд
export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

// описываем тип опций сборки
export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean,
    port: number
}

export interface buildEnv {
    mode: BuildMode;
    port: number
}
