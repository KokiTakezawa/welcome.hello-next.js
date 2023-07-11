exports.id = 752;
exports.ids = [752];
exports.modules = {

/***/ 6643:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 8709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9150, 23))

/***/ }),

/***/ 8152:
/***/ (() => {



/***/ }),

/***/ 229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3103);
//ページタイトルコンポーネント



//styled-componentsを使ってみた
const MyStyledComponent = styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP.div.withConfig({
    componentId: "sc-ff55bbf5-0"
})`
  text-decoration: underline;
`;
const Pagetitle = ({ title })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyStyledComponent, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
            className: "text-lg font-bold",
            children: title
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagetitle);


/***/ }),

/***/ 4494:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(7454);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.scss
var globals = __webpack_require__(9302);
// EXTERNAL MODULE: ./src/app/styles/style.scss
var style = __webpack_require__(5971);
;// CONCATENATED MODULE: ./src/app/components/header.tsx
//ヘッダーコンポーネント

function Header() {
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: " text-gray-600",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: " mb-4 flex items-center font-medium text-gray-900 md:mb-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            className: "h-10 w-10 rounded-full bg-indigo-500 p-2 text-white",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "ml-3 text-xl",
                            children: "Tailblocks"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                    className: "flex flex-wrap items-center justify-center text-base md:ml-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mr-5 hover:text-gray-900",
                            children: "First Link"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mr-5 hover:text-gray-900",
                            children: "Second Link"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mr-5 hover:text-gray-900",
                            children: "Third Link"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "mr-5 hover:text-gray-900",
                            children: "Fourth Link"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    className: "mt-4 inline-flex items-center rounded border-0 bg-gray-100 px-3 py-1 text-base hover:bg-gray-200 focus:outline-none md:mt-0",
                    children: [
                        "Button",
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            className: "ml-1 h-4 w-4",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M5 12h14M12 5l7 7-7 7"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/components/footer.tsx
//フッターコンポーネント

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "text-gray-600",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "flex items-center justify-center font-medium text-gray-900 md:justify-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            stroke: "currentColor",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            "stroke-width": "2",
                            className: "h-10 w-10 rounded-full bg-indigo-500 p-2 text-white",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "ml-3 text-xl",
                            children: "Tailblocks"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    className: "mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4",
                    children: [
                        "\xa9 2020 Tailblocks —",
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: "https://twitter.com/knyttneve",
                            className: "ml-1 text-gray-600",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: "@knyttneve"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "mt-4 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-gray-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                fill: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                className: "h-5 w-5",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "ml-3 text-gray-500",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                fill: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                className: "h-5 w-5",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "ml-3 text-gray-500",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                className: "h-5 w-5",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        width: "20",
                                        height: "20",
                                        x: "2",
                                        y: "2",
                                        rx: "5",
                                        ry: "5"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "ml-3 text-gray-500",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                fill: "currentColor",
                                stroke: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "0",
                                className: "h-5 w-5",
                                viewBox: "0 0 24 24",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        stroke: "none",
                                        d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                        cx: "4",
                                        cy: "4",
                                        r: "2",
                                        stroke: "none"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/layout.tsx






const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 9302:
/***/ (() => {



/***/ }),

/***/ 5971:
/***/ (() => {



/***/ })

};
;