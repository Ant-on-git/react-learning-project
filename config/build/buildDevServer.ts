import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
// as DevServerConfiguration чтобы небыло конфликтов с Configuration из вебпака


export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return {
        port: options.port,
        open: true,     // автоматически открывать в браузере страницу приложения
        historyApiFallback: true,   // добавили чтоб пофиксить ошибку "Cannot GET /about" при обновлении не главной страницы на одностраничном приложении (html файл один)
    }
}