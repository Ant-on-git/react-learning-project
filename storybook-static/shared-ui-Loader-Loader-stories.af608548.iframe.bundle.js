"use strict";(self.webpackChunk_1_1=self.webpackChunk_1_1||[]).push([[495],{"./src/shared/ui/Loader/Loader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Loader_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classNames=__webpack_require__("./src/shared/lib/classNames/classNames.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Loader_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default(),injectStylesIntoStyleTag_default()(Loader_module.A,options);let Loader_Loader_module=Loader_module.A&&Loader_module.A.locals?Loader_module.A.locals:void 0;var Loader=function(param){return param.className,(0,jsx_runtime.jsx)("div",{className:(0,classNames.x)(Loader_Loader_module.loader,{},[])})};try{Loader.displayName="Loader",Loader.__docgenInfo={description:"",displayName:"Loader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/shared/ui/Loader/Loader.tsx#Loader"]={docgenInfo:Loader.__docgenInfo,name:"Loader",path:"src/shared/ui/Loader/Loader.tsx#Loader"})}catch(__react_docgen_typescript_loader_error){}let Loader_stories={title:"shared/Loader",component:Loader,parameters:{},tags:["autodocs"]};var Primary={args:{}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Primary.parameters?.docs?.source}}};let __namedExportsOrder=["Primary"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/shared/ui/Loader/Loader.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.src-shared-ui-Loader-Loader-module__loader--Cvt9d{height:15px;aspect-ratio:5;display:grid;--g: no-repeat radial-gradient(farthest-side, var(--inverted-bg-color) 94%, var(--inverted-bg-color))}.src-shared-ui-Loader-Loader-module__loader--Cvt9d::before,.src-shared-ui-Loader-Loader-module__loader--Cvt9d::after{content:"";grid-area:1/1;background:var(--g) left,var(--g) right;background-size:20% 100%;animation:src-shared-ui-Loader-Loader-module__l32--MNoVb 1s infinite}.src-shared-ui-Loader-Loader-module__loader--Cvt9d::after{background:var(--g) 33.3333333333%,var(--g) 66.6666666667%;background-size:20% 100%;animation-direction:reverse}@keyframes src-shared-ui-Loader-Loader-module__l32--MNoVb{80%,100%{transform:rotate(0.5turn)}}',"",{version:3,sources:["webpack://./src/shared/ui/Loader/Loader.module.scss"],names:[],mappings:"AACA,mDACI,WAAA,CACA,cAAA,CACA,YAAA,CAEA,qGAAA,CAGJ,qHAEI,UAAA,CACA,aAAA,CACA,uCACI,CAEJ,wBAAA,CACA,oEAAA,CAGJ,0DACI,0DACI,CAEJ,wBAAA,CACA,2BAAA,CAGJ,0DACI,SAEI,yBAAA,CAAA",sourcesContent:['/* HTML: <div class="loader"></div> */\r\n.loader {\r\n    height: 15px;\r\n    aspect-ratio: 5;\r\n    display: grid;\r\n\r\n    --g: no-repeat radial-gradient(farthest-side, var(--inverted-bg-color) 94%, var(--inverted-bg-color));\r\n}\r\n\r\n.loader::before,\r\n.loader::after {\r\n    content: "";\r\n    grid-area: 1/1;\r\n    background:\r\n        var(--g) left,\r\n        var(--g) right;\r\n    background-size: 20% 100%;\r\n    animation: l32 1s infinite;\r\n}\r\n\r\n.loader::after {\r\n    background:\r\n        var(--g) calc(1 * 100% / 3),\r\n        var(--g) calc(2 * 100% / 3);\r\n    background-size: 20% 100%;\r\n    animation-direction: reverse;\r\n}\r\n\r\n@keyframes l32 {\r\n    80%,\r\n    100% {\r\n        transform: rotate(.5turn)\r\n    }\r\n}'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={loader:"src-shared-ui-Loader-Loader-module__loader--Cvt9d",l32:"src-shared-ui-Loader-Loader-module__l32--MNoVb"};let __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/shared/lib/classNames/classNames.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function classNames(cls){var mods=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},additional=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return[cls].concat(_to_consumable_array(Object.entries(mods).filter(function(param){var _param=_sliced_to_array(param,2);return _param[0],!!_param[1]}).map(function(param){var _param=_sliced_to_array(param,2),className=_param[0];return _param[1],className})),_to_consumable_array(additional.filter(Boolean))).join(" ")}__webpack_require__.d(__webpack_exports__,{x:()=>classNames})}}]);