/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/script */ \"./node_modules/next/script.js\");\n/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/fonts.css */ \"./src/styles/fonts.css\");\n/* harmony import */ var _styles_fonts_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_fonts_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _themes_weddingTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../themes/weddingTheme */ \"./src/themes/weddingTheme/index.ts\");\n/* harmony import */ var _themes_GlobalStyles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../themes/GlobalStyles */ \"./src/themes/GlobalStyles.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _themes_weddingTheme__WEBPACK_IMPORTED_MODULE_9__, _themes_GlobalStyles__WEBPACK_IMPORTED_MODULE_10__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _emotion_react__WEBPACK_IMPORTED_MODULE_4__, _themes_weddingTheme__WEBPACK_IMPORTED_MODULE_9__, _themes_GlobalStyles__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n // To use Chakra UI, wrap your _app.js file with the ChakraProvider\n\n\n\n// Styles and theme\n\n\n\n\nconst Application = ({ Component, pageProps })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // To ensure that process.env.NEXT_PUBLIC_GA_ID is always a string:\n        // 1. Provide a fallback value:\n        const handleRouteChange = (url)=>{\n            const gaId = process.env.NEXT_PUBLIC_GA_ID || \"default_GA_ID\"; // Provide a default ID or handle it accordingly\n            window.gtag?.(\"config\", gaId, {\n                page_path: url\n            });\n        };\n        // OR\n        // 2. Assert that the value is not undefined:\n        /*\r\n        const handleRouteChange = (url: string) => {\r\n            if (process.env.NEXT_PUBLIC_GA_ID) {\r\n            (window as CustomWindow).gtag?.(\"config\", process.env.NEXT_PUBLIC_GA_ID, { page_path: url });\r\n            } else {\r\n                console.error(\"Google Analytics ID is undefined\");\r\n             }\r\n        };  */ router.events.on(\"routeChangeComplete\", handleRouteChange);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", handleRouteChange);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ChakraProvider, {\n        theme: _themes_weddingTheme__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.Global, {\n                styles: _themes_GlobalStyles__WEBPACK_IMPORTED_MODULE_10__.GlobalStyles\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Agboola Victor O\\\\Desktop\\\\REACT_PROJECTS\\\\WEDDN_CLONE\\\\weddn-app-clone\\\\mern\\\\client-0\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://cdn.jsdelivr.net/npm/react-calendar@3/dist/Calendar.min.css\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Agboola Victor O\\\\Desktop\\\\REACT_PROJECTS\\\\WEDDN_CLONE\\\\weddn-app-clone\\\\mern\\\\client-0\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        strategy: \"afterInteractive\",\n                        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Agboola Victor O\\\\Desktop\\\\REACT_PROJECTS\\\\WEDDN_CLONE\\\\weddn-app-clone\\\\mern\\\\client-0\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        id: \"google-analytics\",\n                        strategy: \"afterInteractive\",\n                        dangerouslySetInnerHTML: {\n                            __html: `\r\n                        window.dataLayer = window.dataLayer || [];\r\n                        function gtag(){dataLayer.push(arguments);}\r\n                        gtag('js', new Date());\r\n                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}', { page_path: window.location.pathname });\r\n                    `\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Agboola Victor O\\\\Desktop\\\\REACT_PROJECTS\\\\WEDDN_CLONE\\\\weddn-app-clone\\\\mern\\\\client-0\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Agboola Victor O\\\\Desktop\\\\REACT_PROJECTS\\\\WEDDN_CLONE\\\\weddn-app-clone\\\\mern\\\\client-0\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 52,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Agboola Victor O\\\\Desktop\\\\REACT_PROJECTS\\\\WEDDN_CLONE\\\\weddn-app-clone\\\\mern\\\\client-0\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                id: \"modals\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Agboola Victor O\\\\Desktop\\\\REACT_PROJECTS\\\\WEDDN_CLONE\\\\weddn-app-clone\\\\mern\\\\client-0\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 65,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Agboola Victor O\\\\Desktop\\\\REACT_PROJECTS\\\\WEDDN_CLONE\\\\weddn-app-clone\\\\mern\\\\client-0\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Application);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDa0M7QUFDTTtBQUNlLENBQUMsbUVBQW1FO0FBQ25GO0FBQ1g7QUFDSTtBQUVqQyxtQkFBbUI7QUFDWTtBQUNGO0FBQ2M7QUFDVztBQU90RCxNQUFNUyxjQUFrQyxDQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQzdELE1BQU1DLFNBQVNYLHNEQUFTQTtJQUV4QkQsZ0RBQVNBLENBQUM7UUFDTixtRUFBbUU7UUFDbkUsK0JBQStCO1FBQy9CLE1BQU1hLG9CQUFvQixDQUFDQztZQUN2QixNQUFNQyxPQUFPQyxRQUFRQyxHQUFHLENBQUNDLGlCQUFpQixJQUFJLGlCQUFpQixnREFBZ0Q7WUFDOUdDLE9BQXdCQyxJQUFJLEdBQUcsVUFBVUwsTUFBTTtnQkFBRU0sV0FBV1A7WUFBSTtRQUNyRTtRQUVBLEtBQUs7UUFFTCw2Q0FBNkM7UUFDN0M7Ozs7Ozs7WUFPSSxHQUVKRixPQUFPVSxNQUFNLENBQUNDLEVBQUUsQ0FBQyx1QkFBdUJWO1FBQ3hDLE9BQU87WUFDSEQsT0FBT1UsTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCWDtRQUM3QztJQUNKLEdBQUc7UUFBQ0QsT0FBT1UsTUFBTTtLQUFDO0lBRWxCLHFCQUNJLDhEQUFDbkIsNERBQWNBO1FBQUNJLE9BQU9BLDREQUFLQTs7MEJBQ3hCLDhEQUFDSCxrREFBTUE7Z0JBQUNxQixRQUFRakIsK0RBQVlBOzs7Ozs7MEJBQzVCLDhEQUFDSCxrREFBSUE7O2tDQUNELDhEQUFDcUI7d0JBQUtDLEtBQUk7d0JBQWFDLE1BQUs7Ozs7OztrQ0FDNUIsOERBQUN0QixvREFBTUE7d0JBQUN1QixVQUFTO3dCQUFtQkMsS0FBSyxDQUFDLDRDQUE0QyxFQUFFZCxRQUFRQyxHQUFHLENBQUNjLCtCQUErQixDQUFDLENBQUM7Ozs7OztrQ0FDckksOERBQUN6QixvREFBTUE7d0JBQUMwQixJQUFHO3dCQUFtQkgsVUFBUzt3QkFBbUJJLHlCQUF5Qjs0QkFDL0VDLFFBQVEsQ0FBQzs7Ozt3Q0FJVyxFQUFFbEIsUUFBUUMsR0FBRyxDQUFDYywrQkFBK0IsQ0FBQztvQkFDbEUsQ0FBQzt3QkFDTDs7Ozs7Ozs7Ozs7OzBCQUVKLDhEQUFDckI7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ1QsaURBQUdBO2dCQUFDOEIsSUFBRzs7Ozs7Ozs7Ozs7O0FBR3BCO0FBRUEsaUVBQWV2QixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50LTAvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEJveCwgQ2hha3JhUHJvdmlkZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiOyAvLyBUbyB1c2UgQ2hha3JhIFVJLCB3cmFwIHlvdXIgX2FwcC5qcyBmaWxlIHdpdGggdGhlIENoYWtyYVByb3ZpZGVyXHJcbmltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcblxyXG4vLyBTdHlsZXMgYW5kIHRoZW1lXHJcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZm9udHMuY3NzXCI7XHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVzL3dlZGRpbmdUaGVtZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxTdHlsZXMgfSBmcm9tIFwiLi4vdGhlbWVzL0dsb2JhbFN0eWxlc1wiO1xyXG5cclxuLy8gRGVmaW5lIGEgY3VzdG9tIHdpbmRvdyBpbnRlcmZhY2UgdGhhdCBpbmNsdWRlcyB0aGUgZ3RhZyBmdW5jdGlvblxyXG5pbnRlcmZhY2UgQ3VzdG9tV2luZG93IGV4dGVuZHMgV2luZG93IHtcclxuICAgIGd0YWc/OiAoY29tbWFuZDogc3RyaW5nLCB0YXJnZXQ6IHN0cmluZywgcGFyYW1zOiBvYmplY3QpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IEFwcGxpY2F0aW9uOiBSZWFjdC5GQzxBcHBQcm9wcz4gPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vIFRvIGVuc3VyZSB0aGF0IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dBX0lEIGlzIGFsd2F5cyBhIHN0cmluZzpcclxuICAgICAgICAvLyAxLiBQcm92aWRlIGEgZmFsbGJhY2sgdmFsdWU6XHJcbiAgICAgICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZ2FJZCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dBX0lEIHx8ICdkZWZhdWx0X0dBX0lEJzsgLy8gUHJvdmlkZSBhIGRlZmF1bHQgSUQgb3IgaGFuZGxlIGl0IGFjY29yZGluZ2x5XHJcbiAgICAgICAgICAgICh3aW5kb3cgYXMgQ3VzdG9tV2luZG93KS5ndGFnPy4oXCJjb25maWdcIiwgZ2FJZCwgeyBwYWdlX3BhdGg6IHVybCB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBPUlxyXG5cclxuICAgICAgICAvLyAyLiBBc3NlcnQgdGhhdCB0aGUgdmFsdWUgaXMgbm90IHVuZGVmaW5lZDpcclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HQV9JRCkge1xyXG4gICAgICAgICAgICAod2luZG93IGFzIEN1c3RvbVdpbmRvdykuZ3RhZz8uKFwiY29uZmlnXCIsIHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dBX0lELCB7IHBhZ2VfcGF0aDogdXJsIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkdvb2dsZSBBbmFseXRpY3MgSUQgaXMgdW5kZWZpbmVkXCIpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH07ICAqL1xyXG5cclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgICAgICB9O1xyXG4gICAgfSwgW3JvdXRlci5ldmVudHNdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFrcmFQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICA8R2xvYmFsIHN0eWxlcz17R2xvYmFsU3R5bGVzfSAvPlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9yZWFjdC1jYWxlbmRhckAzL2Rpc3QvQ2FsZW5kYXIubWluLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8U2NyaXB0IHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiIHNyYz17YGh0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanM/aWQ9JHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfQU5BTFlUSUNTX0lEfWB9IC8+XHJcbiAgICAgICAgICAgICAgICA8U2NyaXB0IGlkPVwiZ29vZ2xlLWFuYWx5dGljc1wiIHN0cmF0ZWd5PVwiYWZ0ZXJJbnRlcmFjdGl2ZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd0YWcoJ2pzJywgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGd0YWcoJ2NvbmZpZycsICcke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dPT0dMRV9BTkFMWVRJQ1NfSUR9JywgeyBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgfX0gLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICAgIDxCb3ggaWQ9XCJtb2RhbHNcIiAvPlxyXG4gICAgICAgIDwvQ2hha3JhUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwbGljYXRpb247Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkJveCIsIkNoYWtyYVByb3ZpZGVyIiwiR2xvYmFsIiwiSGVhZCIsIlNjcmlwdCIsInRoZW1lIiwiR2xvYmFsU3R5bGVzIiwiQXBwbGljYXRpb24iLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZXIiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImdhSWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR0FfSUQiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnRzIiwib24iLCJvZmYiLCJzdHlsZXMiLCJsaW5rIiwicmVsIiwiaHJlZiIsInN0cmF0ZWd5Iiwic3JjIiwiTkVYVF9QVUJMSUNfR09PR0xFX0FOQUxZVElDU19JRCIsImlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/themes/GlobalStyles.ts":
/*!************************************!*\
  !*** ./src/themes/GlobalStyles.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GlobalStyles: () => (/* binding */ GlobalStyles)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst GlobalStyles = (0,_emotion_react__WEBPACK_IMPORTED_MODULE_0__.css)`\r\n  body {\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: #16181d;\r\n    color: #fff;\r\n  }\r\n\r\n  /* Applying styles to disable scrollbar across browsers */\r\n  .no-scrollbar {\r\n    -ms-overflow-style: none; /* IE and Edge */\r\n    scrollbar-width: none; /* Firefox */\r\n\r\n    &::-webkit-scrollbar {\r\n      display: none; /* Chrome, Safari, Opera */\r\n    }\r\n  }\r\n\r\n\r\n  /* .no-scrollbar::-webkit-scrollbar {\r\n    display: none;\r\n  }\r\n\r\n  .no-scrollbar {\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n  }\r\n\r\n  .no-scrollbar::-webkit-scrollbar {\r\n    width: 0px;\r\n  }\r\n  .no-scrollbar::-webkit-scrollbar-thumb {\r\n    display: none;\r\n  } */\r\n\r\n\r\n    /* Scrollbar Styles:\r\n    The scrollbar styles are consolidated under the .no-scrollbar class to avoid redundancy and ensure all related styles are grouped\r\n    together.\r\n    The pseudo-element ::-webkit-scrollbar is nested within .no-scrollbar using Emotion's support for SCSS-like syntax. This makes it \r\n    clear that these styles are specifically for elements with the no-scrollbar class */.\r\n\r\n`;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWVzL0dsb2JhbFN0eWxlcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFxQztBQUU5QixNQUFNQyxlQUFlRCxtREFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwQ2hDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC0wLy4vc3JjL3RoZW1lcy9HbG9iYWxTdHlsZXMudHM/ZDhiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZXMgPSBjc3NgXHJcbiAgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE4MWQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC8qIEFwcGx5aW5nIHN0eWxlcyB0byBkaXNhYmxlIHNjcm9sbGJhciBhY3Jvc3MgYnJvd3NlcnMgKi9cclxuICAubm8tc2Nyb2xsYmFyIHtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZTsgLyogQ2hyb21lLCBTYWZhcmksIE9wZXJhICovXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogLm5vLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5uby1zY3JvbGxiYXIge1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLm5vLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDBweDtcclxuICB9XHJcbiAgLm5vLXNjcm9sbGJhcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9ICovXHJcblxyXG5cclxuICAgIC8qIFNjcm9sbGJhciBTdHlsZXM6XHJcbiAgICBUaGUgc2Nyb2xsYmFyIHN0eWxlcyBhcmUgY29uc29saWRhdGVkIHVuZGVyIHRoZSAubm8tc2Nyb2xsYmFyIGNsYXNzIHRvIGF2b2lkIHJlZHVuZGFuY3kgYW5kIGVuc3VyZSBhbGwgcmVsYXRlZCBzdHlsZXMgYXJlIGdyb3VwZWRcclxuICAgIHRvZ2V0aGVyLlxyXG4gICAgVGhlIHBzZXVkby1lbGVtZW50IDo6LXdlYmtpdC1zY3JvbGxiYXIgaXMgbmVzdGVkIHdpdGhpbiAubm8tc2Nyb2xsYmFyIHVzaW5nIEVtb3Rpb24ncyBzdXBwb3J0IGZvciBTQ1NTLWxpa2Ugc3ludGF4LiBUaGlzIG1ha2VzIGl0IFxyXG4gICAgY2xlYXIgdGhhdCB0aGVzZSBzdHlsZXMgYXJlIHNwZWNpZmljYWxseSBmb3IgZWxlbWVudHMgd2l0aCB0aGUgbm8tc2Nyb2xsYmFyIGNsYXNzICovLlxyXG5cclxuYDsiXSwibmFtZXMiOlsiY3NzIiwiR2xvYmFsU3R5bGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/themes/GlobalStyles.ts\n");

/***/ }),

/***/ "./src/themes/weddingTheme/index.ts":
/*!******************************************!*\
  !*** ./src/themes/weddingTheme/index.ts ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// Importing necessary functions and types from Chakra UI\n\n// to keep type declarations separate from actual value imports, which \n// can help in tree shaking and potentially reducing bundle sizes if \n// only types are used from a module.\n// Configuration for the theme\nconst config = {\n    // Setting the initial color mode to 'dark'\n    initialColorMode: \"dark\",\n    // Allowing the theme to use the system color mode settings, which is useful for user accessibility and preference.\n    useSystemColorMode: true\n};\n// Extending the default theme with custom configurations\n// extendTheme: This function is used to customize the default theme provided by Chakra UI. You can extend it further \n// by adding more properties like colors, fonts, etc., according to your design requirements.\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    config\n});\n// Exporting the custom theme to be used in your Chakra UI application\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWVzL3dlZGRpbmdUaGVtZS9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHlEQUF5RDtBQUNWO0FBRU0sdUVBQXVFO0FBQ3ZFLHFFQUFxRTtBQUNyRSxxQ0FBcUM7QUFFMUYsOEJBQThCO0FBQzlCLE1BQU1DLFNBQXNCO0lBQzFCLDJDQUEyQztJQUMzQ0Msa0JBQWtCO0lBQ2xCLG1IQUFtSDtJQUNuSEMsb0JBQW9CO0FBQ3RCO0FBRUEseURBQXlEO0FBQ3pELHNIQUFzSDtBQUN0SCw2RkFBNkY7QUFDN0YsTUFBTUMsUUFBUUosNkRBQVdBLENBQUM7SUFDeEJDO0FBQ0Y7QUFFQSxzRUFBc0U7QUFDdEUsaUVBQWVHLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQtMC8uL3NyYy90aGVtZXMvd2VkZGluZ1RoZW1lL2luZGV4LnRzPzUzNTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0aW5nIG5lY2Vzc2FyeSBmdW5jdGlvbnMgYW5kIHR5cGVzIGZyb20gQ2hha3JhIFVJXHJcbmltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHR5cGUgeyBUaGVtZUNvbmZpZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7IC8vIFR5cGUgSW1wb3J0OiBUaGUgdHlwZSBpbXBvcnQgZm9yIFRoZW1lQ29uZmlnIGlzIGV4cGxpY2l0bHkgZG9uZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBrZWVwIHR5cGUgZGVjbGFyYXRpb25zIHNlcGFyYXRlIGZyb20gYWN0dWFsIHZhbHVlIGltcG9ydHMsIHdoaWNoIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbiBoZWxwIGluIHRyZWUgc2hha2luZyBhbmQgcG90ZW50aWFsbHkgcmVkdWNpbmcgYnVuZGxlIHNpemVzIGlmIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgdHlwZXMgYXJlIHVzZWQgZnJvbSBhIG1vZHVsZS5cclxuXHJcbi8vIENvbmZpZ3VyYXRpb24gZm9yIHRoZSB0aGVtZVxyXG5jb25zdCBjb25maWc6IFRoZW1lQ29uZmlnID0ge1xyXG4gIC8vIFNldHRpbmcgdGhlIGluaXRpYWwgY29sb3IgbW9kZSB0byAnZGFyaydcclxuICBpbml0aWFsQ29sb3JNb2RlOiBcImRhcmtcIixcclxuICAvLyBBbGxvd2luZyB0aGUgdGhlbWUgdG8gdXNlIHRoZSBzeXN0ZW0gY29sb3IgbW9kZSBzZXR0aW5ncywgd2hpY2ggaXMgdXNlZnVsIGZvciB1c2VyIGFjY2Vzc2liaWxpdHkgYW5kIHByZWZlcmVuY2UuXHJcbiAgdXNlU3lzdGVtQ29sb3JNb2RlOiB0cnVlLFxyXG59O1xyXG5cclxuLy8gRXh0ZW5kaW5nIHRoZSBkZWZhdWx0IHRoZW1lIHdpdGggY3VzdG9tIGNvbmZpZ3VyYXRpb25zXHJcbi8vIGV4dGVuZFRoZW1lOiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3VzdG9taXplIHRoZSBkZWZhdWx0IHRoZW1lIHByb3ZpZGVkIGJ5IENoYWtyYSBVSS4gWW91IGNhbiBleHRlbmQgaXQgZnVydGhlciBcclxuLy8gYnkgYWRkaW5nIG1vcmUgcHJvcGVydGllcyBsaWtlIGNvbG9ycywgZm9udHMsIGV0Yy4sIGFjY29yZGluZyB0byB5b3VyIGRlc2lnbiByZXF1aXJlbWVudHMuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gIGNvbmZpZ1xyXG59KTtcclxuXHJcbi8vIEV4cG9ydGluZyB0aGUgY3VzdG9tIHRoZW1lIHRvIGJlIHVzZWQgaW4geW91ciBDaGFrcmEgVUkgYXBwbGljYXRpb25cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7Il0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3RlbUNvbG9yTW9kZSIsInRoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/themes/weddingTheme/index.ts\n");

/***/ }),

/***/ "./src/styles/fonts.css":
/*!******************************!*\
  !*** ./src/styles/fonts.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();