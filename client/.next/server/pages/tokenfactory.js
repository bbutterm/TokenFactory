"use strict";
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
exports.id = "pages/tokenfactory";
exports.ids = ["pages/tokenfactory"];
exports.modules = {

/***/ "./components/TokenFactory.js":
/*!************************************!*\
  !*** ./components/TokenFactory.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_tokenFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/tokenFactory */ \"./data/tokenFactory.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_data_tokenFactory__WEBPACK_IMPORTED_MODULE_2__]);\n_data_tokenFactory__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// React App\n\n\n\nfunction TokenFactoryApp() {\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [symb, setSymb] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [ownerTokens, setOwnerTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [systemTokens, setSystemTokens] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [contractAddress, setContractAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const createNewTokenTransaction = async (e)=>{\n        e.preventDefault();\n        try {\n            await _data_tokenFactory__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createNewToken(name, symb, ownerTokens, systemTokens);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const handleOnChangeNameToken = (e)=>{\n        setName(e.target.value);\n    };\n    const handleOnChangeSymb = (e)=>{\n        setSymb(e.target.value);\n    };\n    const handleOnChangeOwnerTokens = (e)=>{\n        setOwnerTokens(e.target.value);\n    };\n    const handleOnChangeSystemTokens = (e)=>{\n        setSystemTokens(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Name\",\n                    value: name,\n                    onChange: handleOnChangeNameToken\n                }, void 0, false, {\n                    fileName: \"C:\\\\Program Files\\\\MCS\\\\poper\\\\client\\\\components\\\\TokenFactory.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Program Files\\\\MCS\\\\poper\\\\client\\\\components\\\\TokenFactory.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"Symbol\",\n                    value: symb,\n                    onChange: handleOnChangeSymb\n                }, void 0, false, {\n                    fileName: \"C:\\\\Program Files\\\\MCS\\\\poper\\\\client\\\\components\\\\TokenFactory.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Program Files\\\\MCS\\\\poper\\\\client\\\\components\\\\TokenFactory.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    placeholder: \"Owner Tokens\",\n                    value: ownerTokens,\n                    onChange: handleOnChangeOwnerTokens\n                }, void 0, false, {\n                    fileName: \"C:\\\\Program Files\\\\MCS\\\\poper\\\\client\\\\components\\\\TokenFactory.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Program Files\\\\MCS\\\\poper\\\\client\\\\components\\\\TokenFactory.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"number\",\n                    placeholder: \"System Tokens\",\n                    value: systemTokens,\n                    onChange: handleOnChangeSystemTokens\n                }, void 0, false, {\n                    fileName: \"C:\\\\Program Files\\\\MCS\\\\poper\\\\client\\\\components\\\\TokenFactory.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Program Files\\\\MCS\\\\poper\\\\client\\\\components\\\\TokenFactory.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: createNewTokenTransaction,\n                    children: \"Create Token\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Program Files\\\\MCS\\\\poper\\\\client\\\\components\\\\TokenFactory.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Program Files\\\\MCS\\\\poper\\\\client\\\\components\\\\TokenFactory.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenFactoryApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rva2VuRmFjdG9yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxZQUFZOztBQUNxQjtBQUNzQjtBQUV2RCxTQUFTRSxrQkFBa0I7SUFFekIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ0ssTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDVyxpQkFBaUJDLG1CQUFtQixHQUFHWiwrQ0FBUUEsQ0FBQztJQUl2RCxNQUFNYSw0QkFBNEIsT0FBT0MsSUFBTTtRQUMzQ0EsRUFBRUMsY0FBYztRQUNoQixJQUFJO1lBQ0YsTUFBTWQseUVBQW1DLENBQ3ZDRSxNQUNBRSxNQUNBRSxhQUNBRTtRQUdKLEVBQUUsT0FBT1EsS0FBSztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUdBLE1BQU1HLDBCQUEwQixDQUFDTixJQUFNO1FBQ3JDVixRQUFRVSxFQUFFTyxNQUFNLENBQUNDLEtBQUs7SUFDeEI7SUFFQSxNQUFNQyxxQkFBcUIsQ0FBQ1QsSUFBTTtRQUNoQ1IsUUFBUVEsRUFBRU8sTUFBTSxDQUFDQyxLQUFLO0lBQ3hCO0lBQ0EsTUFBTUUsNEJBQTRCLENBQUNWLElBQU07UUFDdkNOLGVBQWVNLEVBQUVPLE1BQU0sQ0FBQ0MsS0FBSztJQUMvQjtJQUNBLE1BQU1HLDZCQUE2QixDQUFDWCxJQUFNO1FBQ3hDSixnQkFBZ0JJLEVBQUVPLE1BQU0sQ0FBQ0MsS0FBSztJQUNoQztJQUdGLHFCQUNFOzswQkFDRSw4REFBQ0k7MEJBQ0MsNEVBQUNDO29CQUNDQyxNQUFLO29CQUNMQyxhQUFZO29CQUNaUCxPQUFPbkI7b0JBQ1AyQixVQUFVVjs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNNOzBCQUNDLDRFQUFDQztvQkFDQ0MsTUFBSztvQkFDTEMsYUFBWTtvQkFDWlAsT0FBT2pCO29CQUNQeUIsVUFBVVA7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDRzswQkFDQyw0RUFBQ0M7b0JBQ0NDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pQLE9BQU9mO29CQUNQdUIsVUFBVU47Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDRTswQkFDQyw0RUFBQ0M7b0JBQ0NDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pQLE9BQU9iO29CQUNQcUIsVUFBVUw7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDQzswQkFDQyw0RUFBQ0s7b0JBQU9DLFNBQVNuQjs4QkFBMkI7Ozs7Ozs7Ozs7Ozs7QUFLcEQ7QUFFQSxpRUFBZVgsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL2NvbXBvbmVudHMvVG9rZW5GYWN0b3J5LmpzPzNkZGUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVhY3QgQXBwXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjb250cmFjdFRva2VuRmFjdG9yeSBmcm9tICcuLi9kYXRhL3Rva2VuRmFjdG9yeSdcblxuZnVuY3Rpb24gVG9rZW5GYWN0b3J5QXBwKCkge1xuICBcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc3ltYiwgc2V0U3ltYl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtvd25lclRva2Vucywgc2V0T3duZXJUb2tlbnNdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzeXN0ZW1Ub2tlbnMsIHNldFN5c3RlbVRva2Vuc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NvbnRyYWN0QWRkcmVzcywgc2V0Q29udHJhY3RBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcblxuICBcblxuICBjb25zdCBjcmVhdGVOZXdUb2tlblRyYW5zYWN0aW9uID0gYXN5bmMgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb250cmFjdFRva2VuRmFjdG9yeS5jcmVhdGVOZXdUb2tlbihcbiAgICAgICAgICBuYW1lLFxuICAgICAgICAgIHN5bWIsXG4gICAgICAgICAgb3duZXJUb2tlbnMsXG4gICAgICAgICAgc3lzdGVtVG9rZW5zICAgICAgICAgXG4gIFxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfTtcblxuXG4gICAgY29uc3QgaGFuZGxlT25DaGFuZ2VOYW1lVG9rZW4gPSAoZSkgPT4ge1xuICAgICAgc2V0TmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZU9uQ2hhbmdlU3ltYiA9IChlKSA9PiB7XG4gICAgICBzZXRTeW1iKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU9uQ2hhbmdlT3duZXJUb2tlbnMgPSAoZSkgPT4ge1xuICAgICAgc2V0T3duZXJUb2tlbnMoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlT25DaGFuZ2VTeXN0ZW1Ub2tlbnMgPSAoZSkgPT4ge1xuICAgICAgc2V0U3lzdGVtVG9rZW5zKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9OyAgXG4gICAgXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlTmFtZVRva2VufVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTeW1ib2xcIlxuICAgICAgICAgIHZhbHVlPXtzeW1ifVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPbkNoYW5nZVN5bWJ9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3duZXIgVG9rZW5zXCJcbiAgICAgICAgICB2YWx1ZT17b3duZXJUb2tlbnN9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU9uQ2hhbmdlT3duZXJUb2tlbnN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3lzdGVtIFRva2Vuc1wiXG4gICAgICAgICAgdmFsdWU9e3N5c3RlbVRva2Vuc31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT25DaGFuZ2VTeXN0ZW1Ub2tlbnN9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17Y3JlYXRlTmV3VG9rZW5UcmFuc2FjdGlvbn0+Q3JlYXRlIFRva2VuPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRva2VuRmFjdG9yeUFwcDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjb250cmFjdFRva2VuRmFjdG9yeSIsIlRva2VuRmFjdG9yeUFwcCIsIm5hbWUiLCJzZXROYW1lIiwic3ltYiIsInNldFN5bWIiLCJvd25lclRva2VucyIsInNldE93bmVyVG9rZW5zIiwic3lzdGVtVG9rZW5zIiwic2V0U3lzdGVtVG9rZW5zIiwiY29udHJhY3RBZGRyZXNzIiwic2V0Q29udHJhY3RBZGRyZXNzIiwiY3JlYXRlTmV3VG9rZW5UcmFuc2FjdGlvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZU5ld1Rva2VuIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZU9uQ2hhbmdlTmFtZVRva2VuIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVPbkNoYW5nZVN5bWIiLCJoYW5kbGVPbkNoYW5nZU93bmVyVG9rZW5zIiwiaGFuZGxlT25DaGFuZ2VTeXN0ZW1Ub2tlbnMiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TokenFactory.js\n");

/***/ }),

/***/ "./data/tokenFactory.js":
/*!******************************!*\
  !*** ./data/tokenFactory.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _walletProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../walletProvider */ \"./walletProvider.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"ethers\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_walletProvider__WEBPACK_IMPORTED_MODULE_0__, ethers__WEBPACK_IMPORTED_MODULE_1__]);\n([_walletProvider__WEBPACK_IMPORTED_MODULE_0__, ethers__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst address = \"0x84CC24ADE74410149d46987C9455a434F900a92b\";\nconst abi = [\n    {\n        \"inputs\": [\n            {\n                \"internalType\": \"string\",\n                \"name\": \"_name\",\n                \"type\": \"string\"\n            },\n            {\n                \"internalType\": \"string\",\n                \"name\": \"_symb\",\n                \"type\": \"string\"\n            },\n            {\n                \"internalType\": \"uint256\",\n                \"name\": \"_ownerTokens\",\n                \"type\": \"uint256\"\n            },\n            {\n                \"internalType\": \"uint256\",\n                \"name\": \"_systemTokens\",\n                \"type\": \"uint256\"\n            }\n        ],\n        \"name\": \"createNewToke\",\n        \"outputs\": [\n            {\n                \"internalType\": \"address\",\n                \"name\": \"\",\n                \"type\": \"address\"\n            }\n        ],\n        \"stateMutability\": \"nonpayable\",\n        \"type\": \"function\"\n    }\n];\nconst ethABI = [\n    \"function createNewToken(string memory _name,string memory _symb,uint256 _ownerTokens,uint256 _systemTokens) public returns (address)\"\n];\nconst contractTokenFactory = new ethers__WEBPACK_IMPORTED_MODULE_1__.Contract(address, ethABI, _walletProvider__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contractTokenFactory);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kYXRhL3Rva2VuRmFjdG9yeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUM7QUFDVjtBQUUvQixNQUFNRSxVQUFVO0FBQ2YsTUFBTUMsTUFBTTtJQUNUO1FBQ0ksVUFBVTtZQUNOO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7WUFDQTtnQkFDSSxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1IsUUFBUTtZQUNaO1lBQ0E7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtZQUNBO2dCQUNJLGdCQUFnQjtnQkFDaEIsUUFBUTtnQkFDUixRQUFRO1lBQ1o7U0FDSDtRQUNELFFBQVE7UUFDUixXQUFXO1lBQ1A7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixRQUFRO2dCQUNSLFFBQVE7WUFDWjtTQUNIO1FBQ0QsbUJBQW1CO1FBQ25CLFFBQVE7SUFDWjtDQUNIO0FBQ0QsTUFBTUMsU0FBUztJQUNYO0NBQ0E7QUFHSixNQUFNQyx1QkFBdUIsSUFBSUosNENBQVFBLENBQUNDLFNBQVNFLFFBQVFKLHVEQUFRQTtBQUVuRSxpRUFBZUssb0JBQW9CQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vZGF0YS90b2tlbkZhY3RvcnkuanM/NmJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvdmlkZXIgZnJvbSBcIi4uL3dhbGxldFByb3ZpZGVyXCI7XG5pbXBvcnQge0NvbnRyYWN0fSBmcm9tIFwiZXRoZXJzXCJcblxuY29uc3QgYWRkcmVzcyA9IFwiMHg4NENDMjRBREU3NDQxMDE0OWQ0Njk4N0M5NDU1YTQzNEY5MDBhOTJiXCJcbiBjb25zdCBhYmkgPSBbXG4gICAge1xuICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJzdHJpbmdcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJfbmFtZVwiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiX3N5bWJcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInVpbnQyNTZcIixcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJfb3duZXJUb2tlbnNcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1aW50MjU2XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJ1aW50MjU2XCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiX3N5c3RlbVRva2Vuc1wiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInVpbnQyNTZcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm5hbWVcIjogXCJjcmVhdGVOZXdUb2tlXCIsXG4gICAgICAgIFwib3V0cHV0c1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJpbnRlcm5hbFR5cGVcIjogXCJhZGRyZXNzXCIsXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwibm9ucGF5YWJsZVwiLFxuICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gICAgfVxuXVxuY29uc3QgZXRoQUJJID0gW1xuICAgIFwiZnVuY3Rpb24gY3JlYXRlTmV3VG9rZW4oc3RyaW5nIG1lbW9yeSBfbmFtZSxzdHJpbmcgbWVtb3J5IF9zeW1iLHVpbnQyNTYgX293bmVyVG9rZW5zLHVpbnQyNTYgX3N5c3RlbVRva2VucykgcHVibGljIHJldHVybnMgKGFkZHJlc3MpXCJcbiAgIF1cblxuXG5jb25zdCBjb250cmFjdFRva2VuRmFjdG9yeSA9IG5ldyBDb250cmFjdChhZGRyZXNzLCBldGhBQkksIHByb3ZpZGVyKTtcblxuZXhwb3J0IGRlZmF1bHQgY29udHJhY3RUb2tlbkZhY3RvcnkiXSwibmFtZXMiOlsicHJvdmlkZXIiLCJDb250cmFjdCIsImFkZHJlc3MiLCJhYmkiLCJldGhBQkkiLCJjb250cmFjdFRva2VuRmFjdG9yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/tokenFactory.js\n");

/***/ }),

/***/ "./pages/tokenfactory.js":
/*!*******************************!*\
  !*** ./pages/tokenfactory.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_TokenFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TokenFactory */ \"./components/TokenFactory.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TokenFactory__WEBPACK_IMPORTED_MODULE_1__]);\n_components_TokenFactory__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Factory() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TokenFactory__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Program Files\\\\MCS\\\\poper\\\\client\\\\pages\\\\tokenfactory.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Factory);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90b2tlbmZhY3RvcnkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUQ7QUFFckQsU0FBU0MsVUFBUztJQUNkLHFCQUNJLDhEQUFDRCxnRUFBWUE7Ozs7O0FBRXJCO0FBQ0EsaUVBQWVDLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy90b2tlbmZhY3RvcnkuanM/YTc0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVG9rZW5GYWN0b3J5IGZyb20gXCIuLi9jb21wb25lbnRzL1Rva2VuRmFjdG9yeVwiXHJcblxyXG5mdW5jdGlvbiBGYWN0b3J5KCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPFRva2VuRmFjdG9yeSAvPlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZhY3RvcnkiXSwibmFtZXMiOlsiVG9rZW5GYWN0b3J5IiwiRmFjdG9yeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tokenfactory.js\n");

/***/ }),

/***/ "./walletProvider.js":
/*!***************************!*\
  !*** ./walletProvider.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ethers */ \"ethers\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([ethers__WEBPACK_IMPORTED_MODULE_0__]);\nethers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nlet signer = null;\nlet walletProvider;\nif (false) {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (walletProvider);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93YWxsZXRQcm92aWRlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUN6QyxJQUFJQyxTQUFTLElBQUk7QUFDakIsSUFBSUM7QUFFSixJQUFJLEtBQXVFLEVBQUMsRUFHM0U7QUFDRyxpRUFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3dhbGxldFByb3ZpZGVyLmpzP2VmYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3NlclByb3ZpZGVyIH0gZnJvbSBcImV0aGVyc1wiO1xubGV0IHNpZ25lciA9IG51bGw7XG5sZXQgd2FsbGV0UHJvdmlkZXJcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIil7XG5cbndhbGxldFByb3ZpZGVyID0gbmV3IEJyb3dzZXJQcm92aWRlcih3aW5kb3cuZXRoZXJldW0pXG59XG4gICAgZXhwb3J0IGRlZmF1bHQgd2FsbGV0UHJvdmlkZXIiXSwibmFtZXMiOlsiQnJvd3NlclByb3ZpZGVyIiwic2lnbmVyIiwid2FsbGV0UHJvdmlkZXIiLCJ3aW5kb3ciLCJldGhlcmV1bSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./walletProvider.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("ethers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/tokenfactory.js"));
module.exports = __webpack_exports__;

})();