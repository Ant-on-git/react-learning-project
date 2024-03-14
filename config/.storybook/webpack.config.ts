import path from "path";
import webpack, { RuleSetRule } from "webpack"
import { BuildPaths } from "../build/types/config";
import { buildCssLoader } from "../build/loaders/buildCssLoader";

// // экспортируем конфиг вебпака. внутри его можно как угодно изменять. 
// // Это именно конфиг встроенного в сторибук вебпака, а не вебпака основного приложения
// // Нужно чтоб подстроить storybook под приложение и убрать ошибки
// export default ({config}: {config: webpack.Configuration}) => {
//     return config
// }


export default ({config}: {config: webpack.Configuration}) => {
    const pathToSrc = path.resolve(__dirname, "../../src");
    config.resolve?.modules?.push(pathToSrc);                   // добавляем путь к главной папке чтоб в storybook работали абсолютные импорты в компонентах
    config.resolve?.extensions?.push('ts', 'tsx')               // добавляем расширеня файлов для typescript чтоб.. хз чтоб что. "потому что работаем с typescript"

    config.module?.rules?.push(buildCssLoader({isDev: true}))   // чтоб сторибук понимал css modules

    
    // настраиваем сторибук на работу с svg:
    // проходим по имеющимся правилам ищем правило для svg и отключаем его
    config.module.rules = config.module?.rules?.map((rule: any) => {    
        if (/svg/.test(rule.test)) {    // для проверки, содержит ли строка rule.test подстроку "svg". Метод test() выполняет поиск указанной строки на соответствие с регулярным выражением
            // Если условие выполняется, то отключаем обработку SVG файлов
            return {...rule, exclude: /\.svg$/i}
        }
        return rule;
    })
    config.module?.rules?.push({test: /\.svg$/, use: ['@svgr/webpack'],})       // и добавляем правило для svg из основного вебпака
    // Свойство exclude в контексте конфигурации Webpack используется для указания 
    // шаблонов файлов или директорий, которые должны быть исключены из обработки определенным загрузчиком (loader). 
    // В вашем случае, {...rule, exclude: /\.svg$/i} добавляет свойство exclude к существующему 
    // правилу обработки файлов, указывая, что файлы с расширением .svg не должны обрабатываться этим правилом.



    return config
}
