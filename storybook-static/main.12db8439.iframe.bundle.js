(self.webpackChunk_1_1=self.webpackChunk_1_1||[]).push([[792],{"./node_modules/@storybook/addon-interactions/dist sync recursive":module=>{function webpackEmptyContext(req){var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/addon-interactions/dist sync recursive",module.exports=webpackEmptyContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels");let pipeline=x=>x(),importers=[async path=>{if(!/^\.[\\/](?:src(?:[\\/](?!\.)(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/]|[\\/]|$)(?!\.)(?=.)[^\\/]*?\.stories\.(js|jsx|mjs|ts|tsx))$/.exec(path))return;let pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$")("./"+pathRemainder)}];async function importFn(path){for(let i=0;i<importers.length;i++){let moduleExports=await pipeline(()=>importers[i](path));if(moduleExports)return moduleExports}}let channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);let preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:importFn,getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/dist/entry-preview.mjs"),__webpack_require__("./node_modules/@storybook/react/dist/entry-preview-docs.mjs"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.js"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.js"),__webpack_require__("./config/.storybook/preview.ts")])})},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'*{margin:0;padding:0;box-sizing:border-box}input,button,textarea,select{margin:0;font:inherit}:root{--font-family-main: consolas, "Times New Roman", serif;--font-size-m: 16px;--font-line-m: 24px;--font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);--font-size-l: 24px;--font-line-l: 32px;--font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);--navbar-height: 50px;--sidebar-width: 300px;--sidebar-width-collapsed: 80px}.app.light{--bg-color: #e8e8ea;--inverted-bg-color: #090949;--primary-color: #0232c2;--secondary-color: #0449e0;--inverted-primary-color: #049604;--inverted-secondary-color: #04ff04}.app.dark{--bg-color: #090949;--inverted-bg-color: #e8e8ea;--primary-color: #049604;--secondary-color: #04ff04;--inverted-primary-color: #0232c2;--inverted-secondary-color: #0452ff}.app{font:var(--font-m);background:var(--bg-color);color:var(--primary-color);min-height:100vh}.content-page{display:flex}.page-wrapper{flex-grow:1;padding:20px}',"",{version:3,sources:["webpack://./src/app/styles/reset.scss","webpack://./src/app/styles/variables/global.scss","webpack://./src/app/styles/themes/normal.scss","webpack://./src/app/styles/themes/dark.scss","webpack://./src/app/styles/index.scss"],names:[],mappings:"AAAA,EACI,QAAA,CACA,SAAA,CACA,qBAAA,CAGJ,6BAII,QAAA,CACA,YAAA,CCXJ,MAII,sDAAA,CACA,mBAAA,CACA,mBAAA,CACA,yEAAA,CAQA,mBAAA,CACA,mBAAA,CACA,yEAAA,CAIA,qBAAA,CACA,sBAAA,CACA,+BAAA,CCvBJ,WACI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCNJ,UAKI,mBAAA,CACA,4BAAA,CACA,wBAAA,CACA,0BAAA,CACA,iCAAA,CACA,mCAAA,CCJJ,KACI,kBAAA,CACA,0BAAA,CACA,0BAAA,CACA,gBAAA,CAGJ,cACI,YAAA,CAGJ,cACI,WAAA,CACA,YAAA",sourcesContent:["* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\ninput, \r\nbutton, \r\ntextarea, \r\nselect {\r\n    margin: 0;\r\n    font: inherit;      // делаем шрифт наследуемым\r\n}",':root {\r\n    // В CSS :root является псевдоклассом, который выбирает корневой элемент документа. Для HTML это <html>. Когда вы определяете переменные в :root, они становятся доступными глобально для всего документа.\r\n    // Это полезно, когда вы хотите определить набор переменных, которые будут использоваться во всем документе. Например, вы можете определить цвета, шрифты, отступы и другие общие стили в :root, и затем использовать эти переменные в любом месте вашего CSS.\r\n\r\n    --font-family-main: consolas, "Times New Roman", serif;     // основной шрифт\r\n    --font-size-m: 16px;    // объявление CSS переменной с именем --font-size-m, которая устанавливает размер шрифта на 16 пикселей.\r\n    --font-line-m: 24px;    // объявление CSS переменной с именем --font-line-m, которая устанавливает высоту строки (line height) на 24 пикселя.\r\n    --font-m: var(--font-size-m) / var(--font-line-m) var(--font-family-main);\r\n\r\n        // объявление CSS переменной с именем --font-m. Значение этой переменной состоит из трех частей\r\n        // знак деления / используется для создания свойства font в CSS. Это свойство позволяет задать все параметры шрифта в одну строку.\r\n            // Синтаксис свойства font следующий: font: [font-style] [font-variant] [font-weight] [font-stretch] font-size/line-height [font-family];\r\n            // Таким образом, --font-m = 16px / 24px Consolas, "Times New Roman", Serif;\r\n        // Это значение можно использовать в свойстве font в CSS, чтобы задать размер шрифта, высоту строки и семейство шрифтов одновременно.\r\n\r\n    --font-size-l: 24px;\r\n    --font-line-l: 32px;\r\n    --font-l: var(--font-size-l) / var(--font-line-l) var(--font-family-main);\r\n\r\n\r\n    // размеры\r\n    --navbar-height: 50px;\r\n    --sidebar-width: 300px;\r\n    --sidebar-width-collapsed: 80px;\r\n}',".app.light {\r\n    --bg-color: #e8e8ea;\r\n    --inverted-bg-color: #090949;\r\n    --primary-color: #0232c2;\r\n    --secondary-color: #0449e0;\r\n    --inverted-primary-color: #049604;\r\n    --inverted-secondary-color: #04ff04;\r\n}",".app.dark {\r\n    // Это называется областью видимости CSS.\r\n    // переменные будут доступны только для элементов, которые имеют оба класса app и dark.\r\n    // Это может быть полезно, когда вы хотите определить различные стили для разных состояний или вариантов вашего приложения. Например, вы можете иметь один набор стилей для светлого режима и другой набор стилей для темного режима.\r\n    \r\n    --bg-color: #090949;\r\n    --inverted-bg-color: #e8e8ea;\r\n    --primary-color: #049604;   // цвет шрифта, который делает акценты: загаловки \\ кнопки \\...\r\n    --secondary-color: #04ff04; // обычный цвет шрифта: текст и тд\r\n    --inverted-primary-color: #0232c2;\r\n    --inverted-secondary-color: #0452ff;\r\n}",'@import "reset";\r\n@import "variables/global";\r\n@import "themes/normal";\r\n@import "themes/dark";\r\n\r\n\r\n.app {\r\n    font: var(--font-m);\r\n    background: var(--bg-color);\r\n    color: var(--primary-color);\r\n    min-height: 100vh;\r\n}\r\n\r\n.content-page {\r\n    display: flex;\r\n}\r\n\r\n.page-wrapper {\r\n    flex-grow: 1;   // Элемент будет занимать всю оставшуюся ширину\r\n    padding: 20px;\r\n}'],sourceRoot:""}]);let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./config/.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),styles=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/app/styles/index.scss"),options={};function StyleDecorator(Story){return(0,jsx_runtime.jsx)(Story,{})}options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(styles.A,options),styles.A&&styles.A.locals&&styles.A.locals;try{StyleDecorator.displayName="StyleDecorator",StyleDecorator.__docgenInfo={description:"",displayName:"StyleDecorator",props:{name:{defaultValue:null,description:"Override the display name in the UI (CSF v3)",name:"name",required:!1,type:{name:"string"}},decorators:{defaultValue:null,description:"Wrapper components or Storybook decorators that wrap a story.\n\nDecorators defined in Meta will be applied to every story variation.\n@see [Decorators](https://storybook.js.org/docs/addons/introduction/#1-decorators)",name:"decorators",required:!1,type:{name:"DecoratorFunction<ReactRenderer, { [x: string]: any; }> | DecoratorFunction<ReactRenderer, { [x: string]: any; }>[]"}},parameters:{defaultValue:null,description:"Custom metadata for a story.\n@see [Parameters](https://storybook.js.org/docs/basics/writing-stories/#parameters)",name:"parameters",required:!1,type:{name:"Parameters"}},args:{defaultValue:null,description:"Dynamic data that are provided (and possibly updated by) Storybook and its addons.\n@see [Arg story inputs](https://storybook.js.org/docs/react/api/csf#args-story-inputs)",name:"args",required:!1,type:{name:"Partial<Args>"}},argTypes:{defaultValue:null,description:"ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.\n@see [Control annotations](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)",name:"argTypes",required:!1,type:{name:"Partial<ArgTypes<Args>>"}},loaders:{defaultValue:null,description:"Asynchronous functions which provide data for a story.\n@see [Loaders](https://storybook.js.org/docs/react/writing-stories/loaders)",name:"loaders",required:!1,type:{name:"LoaderFunction<ReactRenderer, Args> | LoaderFunction<ReactRenderer, Args>[]"}},render:{defaultValue:null,description:"Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.",name:"render",required:!1,type:{name:"ArgsStoryFn<ReactRenderer, Args>"}},storyName:{defaultValue:null,description:"Override the display name in the UI (CSF v2)",name:"storyName",required:!1,type:{name:"string"}},play:{defaultValue:null,description:"Function that is executed after the story is rendered.",name:"play",required:!1,type:{name:"PlayFunction<ReactRenderer, Args>"}},tags:{defaultValue:null,description:"Named tags for a story, used to filter stories in different contexts.",name:"tags",required:!1,type:{name:"string[]"}},story:{defaultValue:null,description:"@deprecated",name:"story",required:!1,type:{name:'Omit<StoryAnnotations<ReactRenderer, Args, Partial<Args>>, "story">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/storybook/StyleDecorator/StyleDecorator.tsx#StyleDecorator"]={docgenInfo:StyleDecorator.__docgenInfo,name:"StyleDecorator",path:"src/shared/config/storybook/StyleDecorator/StyleDecorator.tsx#StyleDecorator"})}catch(__react_docgen_typescript_loader_error){}var ThemeDecorator=__webpack_require__("./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx"),dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js");function RouterDecorator(Story){return(0,jsx_runtime.jsx)(dist.Kd,{children:(0,jsx_runtime.jsx)(Story,{})})}try{RouterDecorator.displayName="RouterDecorator",RouterDecorator.__docgenInfo={description:"",displayName:"RouterDecorator",props:{name:{defaultValue:null,description:"Override the display name in the UI (CSF v3)",name:"name",required:!1,type:{name:"string"}},decorators:{defaultValue:null,description:"Wrapper components or Storybook decorators that wrap a story.\n\nDecorators defined in Meta will be applied to every story variation.\n@see [Decorators](https://storybook.js.org/docs/addons/introduction/#1-decorators)",name:"decorators",required:!1,type:{name:"DecoratorFunction<ReactRenderer, { [x: string]: any; }> | DecoratorFunction<ReactRenderer, { [x: string]: any; }>[]"}},parameters:{defaultValue:null,description:"Custom metadata for a story.\n@see [Parameters](https://storybook.js.org/docs/basics/writing-stories/#parameters)",name:"parameters",required:!1,type:{name:"Parameters"}},args:{defaultValue:null,description:"Dynamic data that are provided (and possibly updated by) Storybook and its addons.\n@see [Arg story inputs](https://storybook.js.org/docs/react/api/csf#args-story-inputs)",name:"args",required:!1,type:{name:"Partial<Args>"}},argTypes:{defaultValue:null,description:"ArgTypes encode basic metadata for args, such as `name`, `description`, `defaultValue` for an arg. These get automatically filled in by Storybook Docs.\n@see [Control annotations](https://github.com/storybookjs/storybook/blob/91e9dee33faa8eff0b342a366845de7100415367/addons/controls/README.md#control-annotations)",name:"argTypes",required:!1,type:{name:"Partial<ArgTypes<Args>>"}},loaders:{defaultValue:null,description:"Asynchronous functions which provide data for a story.\n@see [Loaders](https://storybook.js.org/docs/react/writing-stories/loaders)",name:"loaders",required:!1,type:{name:"LoaderFunction<ReactRenderer, Args> | LoaderFunction<ReactRenderer, Args>[]"}},render:{defaultValue:null,description:"Define a custom render function for the story(ies). If not passed, a default render function by the renderer will be used.",name:"render",required:!1,type:{name:"ArgsStoryFn<ReactRenderer, Args>"}},storyName:{defaultValue:null,description:"Override the display name in the UI (CSF v2)",name:"storyName",required:!1,type:{name:"string"}},play:{defaultValue:null,description:"Function that is executed after the story is rendered.",name:"play",required:!1,type:{name:"PlayFunction<ReactRenderer, Args>"}},tags:{defaultValue:null,description:"Named tags for a story, used to filter stories in different contexts.",name:"tags",required:!1,type:{name:"string[]"}},story:{defaultValue:null,description:"@deprecated",name:"story",required:!1,type:{name:'Omit<StoryAnnotations<ReactRenderer, Args, Partial<Args>>, "story">'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx#RouterDecorator"]={docgenInfo:RouterDecorator.__docgenInfo,name:"RouterDecorator",path:"src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx#RouterDecorator"})}catch(__react_docgen_typescript_loader_error){}var ThemeProvider=__webpack_require__("./src/app/providers/ThemeProvider/index.ts");let _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},decorators:[StyleDecorator,(0,ThemeDecorator.n)(ThemeProvider.Sx.LIGHT),RouterDecorator]}},"./src/app/providers/ThemeProvider/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Sx:()=>Theme,DP:()=>useTheme});var Theme,react=__webpack_require__("./node_modules/react/index.js");!function(Theme){Theme.LIGHT="light",Theme.DARK="dark"}(Theme||(Theme={}));var ThemeContext_ThemeContext=(0,react.createContext)({}),LOCAL_STORAGE_THEME_KEY="theme";function useTheme(){var _useContext=(0,react.useContext)(ThemeContext_ThemeContext),theme=_useContext.theme,setTheme=_useContext.setTheme;function toggleTheme(){var NewTheme=theme===Theme.LIGHT?Theme.DARK:Theme.LIGHT;setTheme(NewTheme),localStorage.setItem(LOCAL_STORAGE_THEME_KEY,NewTheme)}return{theme:theme,toggleTheme:toggleTheme}}function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}__webpack_require__("./node_modules/react/jsx-runtime.js");var defaultTheme=localStorage.getItem(LOCAL_STORAGE_THEME_KEY)||Theme.LIGHT,ThemeProvider=function(param){var children=param.children,_useState=_sliced_to_array(useState(defaultTheme),2),theme=_useState[0],setTheme=_useState[1],defaultProps=useMemo(function(){return{theme:theme,setTheme:setTheme}},[theme]);return _jsx(ThemeContext.Provider,{value:defaultProps,children:children})};try{ThemeProvider.displayName="ThemeProvider",ThemeProvider.__docgenInfo={description:"",displayName:"ThemeProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"]={docgenInfo:ThemeProvider.__docgenInfo,name:"ThemeProvider",path:"src/app/providers/ThemeProvider/ui/ThemeProvider.tsx#ThemeProvider"})}catch(__react_docgen_typescript_loader_error){}},"./src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>ThemeDecorator});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ThemeDecorator(theme){return function(Story){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"app ".concat(theme),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})}}__webpack_require__("./node_modules/react/index.js");try{ThemeDecorator.displayName="ThemeDecorator",ThemeDecorator.__docgenInfo={description:"",displayName:"ThemeDecorator",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"]={docgenInfo:ThemeDecorator.__docgenInfo,name:"ThemeDecorator",path:"src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx#ThemeDecorator"})}catch(__react_docgen_typescript_loader_error){}},"./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./pages/AboutPage/ui/AboutPage.stories":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",365,14],"./pages/AboutPage/ui/AboutPage.stories.":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",365,14],"./pages/AboutPage/ui/AboutPage.stories.tsx":["./src/pages/AboutPage/ui/AboutPage.stories.tsx",365,14],"./pages/MainPage/ui/MainPage.stories":["./src/pages/MainPage/ui/MainPage.stories.tsx",365,38],"./pages/MainPage/ui/MainPage.stories.":["./src/pages/MainPage/ui/MainPage.stories.tsx",365,38],"./pages/MainPage/ui/MainPage.stories.tsx":["./src/pages/MainPage/ui/MainPage.stories.tsx",365,38],"./pages/NotFoundPage/ui/NotFoundPage.stories":["./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",365,466],"./pages/NotFoundPage/ui/NotFoundPage.stories.":["./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",365,466],"./pages/NotFoundPage/ui/NotFoundPage.stories.tsx":["./src/pages/NotFoundPage/ui/NotFoundPage.stories.tsx",365,466],"./shared/ui/AppLink/AppLink.stories":["./src/shared/ui/AppLink/AppLink.stories.tsx",739],"./shared/ui/AppLink/AppLink.stories.":["./src/shared/ui/AppLink/AppLink.stories.tsx",739],"./shared/ui/AppLink/AppLink.stories.tsx":["./src/shared/ui/AppLink/AppLink.stories.tsx",739],"./shared/ui/Button/Buton.stories":["./src/shared/ui/Button/Buton.stories.tsx",321],"./shared/ui/Button/Buton.stories.":["./src/shared/ui/Button/Buton.stories.tsx",321],"./shared/ui/Button/Buton.stories.tsx":["./src/shared/ui/Button/Buton.stories.tsx",321],"./shared/ui/Loader/Loader.stories":["./src/shared/ui/Loader/Loader.stories.tsx",495],"./shared/ui/Loader/Loader.stories.":["./src/shared/ui/Loader/Loader.stories.tsx",495],"./shared/ui/Loader/Loader.stories.tsx":["./src/shared/ui/Loader/Loader.stories.tsx",495],"./shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories":["./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",404],"./shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.":["./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",404],"./shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx":["./src/shared/ui/ThemeSwitcher/ui/ThemeSwitcher.stories.tsx",404],"./widgets/Navbar/ui/Navbar.stories":["./src/widgets/Navbar/ui/Navbar.stories.tsx",365,207],"./widgets/Navbar/ui/Navbar.stories.":["./src/widgets/Navbar/ui/Navbar.stories.tsx",365,207],"./widgets/Navbar/ui/Navbar.stories.tsx":["./src/widgets/Navbar/ui/Navbar.stories.tsx",365,207],"./widgets/PageError/ui/PageError.stories":["./src/widgets/PageError/ui/PageError.stories.tsx",365,445],"./widgets/PageError/ui/PageError.stories.":["./src/widgets/PageError/ui/PageError.stories.tsx",365,445],"./widgets/PageError/ui/PageError.stories.tsx":["./src/widgets/PageError/ui/PageError.stories.tsx",365,445],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",365,248],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories.":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",365,248],"./widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx":["./src/widgets/Sidebar/ui/Sidebar/Sidebar.stories.tsx",365,248]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then(()=>{var e=Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e});var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(()=>__webpack_require__(id))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:[\\\\/]src(?:[\\\\/](?%21\\.)(?:(?:(?%21(?:^%7C[\\\\/])\\.).)*?)[\\\\/]%7C[\\\\/]%7C$)(?%21\\.)(?=.)[^\\\\/]*?\\.stories\\.(js%7Cjsx%7Cmjs%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[405],()=>__webpack_exec__("./storybook-config-entry.js")),__webpack_require__.O()}]);