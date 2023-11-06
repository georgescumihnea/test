"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 2845:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/go.135b57cb.svg","height":48,"width":48});

/***/ }),

/***/ 5513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ GridPattern)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function GridPattern({ width , height , x , y , squares , ...props }) {
    let patternId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pattern", {
                    id: patternId,
                    width: width,
                    height: height,
                    patternUnits: "userSpaceOnUse",
                    x: x,
                    y: y,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: `M.5 ${height}V.5H${width}`,
                        fill: "none"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: "100%",
                height: "100%",
                strokeWidth: 0,
                fill: `url(#${patternId})`
            }),
            squares && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                x: x,
                y: y,
                className: "overflow-visible",
                children: squares.map(([x, y])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        strokeWidth: "0",
                        width: width + 1,
                        height: height + 1,
                        x: x * width,
                        y: y * height
                    }, `${x}-${y}`))
            })
        ]
    });
}


/***/ }),

/***/ 1512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Guides)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1109);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9078);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Heading__WEBPACK_IMPORTED_MODULE_2__]);
_components_Heading__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const guides = [
    {
        href: "/authentication",
        name: "Authentication",
        description: "Learn how to authenticate your API requests."
    },
    {
        href: "/pagination",
        name: "Pagination",
        description: "Understand how to work with paginated responses."
    },
    {
        href: "/errors",
        name: "Errors",
        description: "Read about the different types of errors returned by the API."
    },
    {
        href: "/webhooks",
        name: "Webhooks",
        description: "Learn how to programmatically configure webhooks for your app."
    }
];
function Guides() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-16 xl:max-w-none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
                level: 2,
                id: "guides",
                children: "Guides"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4",
                children: guides.map((guide)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: "text-sm font-semibold text-zinc-900 dark:text-white",
                                children: guide.name
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400",
                                children: guide.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "mt-4",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                                    href: guide.href,
                                    variant: "text",
                                    arrow: "right",
                                    children: "Read more"
                                })
                            })
                        ]
                    }, guide.href))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ HeroPattern)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_GridPattern__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5513);


function HeroPattern() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "absolute inset-0 -z-10 mx-0 max-w-none overflow-hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "absolute left-1/2 top-0 ml-[-38rem] h-[25rem] w-[81.25rem] dark:[mask-image:linear-gradient(white,transparent)]",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute inset-0 bg-gradient-to-r from-[#36b49f] to-[#DBFF75] opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-[#36b49f]/30 dark:to-[#DBFF75]/30 dark:opacity-100",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPattern__WEBPACK_IMPORTED_MODULE_1__/* .GridPattern */ .K, {
                        width: 72,
                        height: 56,
                        x: "-12",
                        y: "4",
                        squares: [
                            [
                                4,
                                3
                            ],
                            [
                                2,
                                1
                            ],
                            [
                                7,
                                3
                            ],
                            [
                                10,
                                6
                            ]
                        ],
                        className: "absolute inset-x-0 inset-y-[-50%] h-[200%] w-full skew-y-[-18deg] fill-black/40 stroke-black/50 mix-blend-overlay dark:fill-white/2.5 dark:stroke-white/5"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    viewBox: "0 0 1113 440",
                    "aria-hidden": "true",
                    className: "absolute top-0 left-1/2 ml-[-19rem] w-[69.5625rem] fill-white blur-[26px] dark:hidden",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M.016 439.5s-9.5-300 434-300S882.516 20 882.516 20V0h230.004v439.5H.016Z"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 3545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
// components/ImageComponent.js


const ImageComponent = ({ src , alt , width , height  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-64 w-64",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
            src: src,
            alt: alt,
            width: width,
            height: height,
            layout: "responsive",
            className: "object-cover"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageComponent);


/***/ }),

/***/ 5174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Resources)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components_GridPattern__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5513);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9078);
/* harmony import */ var _components_icons_ChatBubbleIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2640);
/* harmony import */ var _components_icons_EnvelopeIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6077);
/* harmony import */ var _components_icons_UserIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(665);
/* harmony import */ var _components_icons_UsersIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7363);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_Heading__WEBPACK_IMPORTED_MODULE_4__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components_Heading__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const resources = [
    {
        href: "/contacts",
        name: "Contacts",
        description: "Learn about the contact model and how to create, retrieve, update, delete, and list contacts.",
        icon: _components_icons_UserIcon__WEBPACK_IMPORTED_MODULE_7__/* .UserIcon */ .t,
        pattern: {
            y: 16,
            squares: [
                [
                    0,
                    1
                ],
                [
                    1,
                    3
                ]
            ]
        }
    },
    {
        href: "/conversations",
        name: "Conversations",
        description: "Learn about the conversation model and how to create, retrieve, update, delete, and list conversations.",
        icon: _components_icons_ChatBubbleIcon__WEBPACK_IMPORTED_MODULE_5__/* .ChatBubbleIcon */ .m,
        pattern: {
            y: -6,
            squares: [
                [
                    -1,
                    2
                ],
                [
                    1,
                    3
                ]
            ]
        }
    },
    {
        href: "/messages",
        name: "Messages",
        description: "Learn about the message model and how to create, retrieve, update, delete, and list messages.",
        icon: _components_icons_EnvelopeIcon__WEBPACK_IMPORTED_MODULE_6__/* .EnvelopeIcon */ ._,
        pattern: {
            y: 32,
            squares: [
                [
                    0,
                    2
                ],
                [
                    1,
                    4
                ]
            ]
        }
    },
    {
        href: "/groups",
        name: "Groups",
        description: "Learn about the group model and how to create, retrieve, update, delete, and list groups.",
        icon: _components_icons_UsersIcon__WEBPACK_IMPORTED_MODULE_8__/* .UsersIcon */ .o,
        pattern: {
            y: 22,
            squares: [
                [
                    0,
                    1
                ]
            ]
        }
    }
];
function ResourceIcon({ icon: Icon  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
            className: "h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
        })
    });
}
function ResourcePattern({ mouseX , mouseY , ...gridProps }) {
    let maskImage = framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = {
        maskImage,
        WebkitMaskImage: maskImage
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pointer-events-none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPattern__WEBPACK_IMPORTED_MODULE_3__/* .GridPattern */ .K, {
                    width: 72,
                    height: 56,
                    x: "50%",
                    className: "absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5",
                    ...gridProps
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]",
                style: style
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                className: "absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100",
                style: style,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPattern__WEBPACK_IMPORTED_MODULE_3__/* .GridPattern */ .K, {
                    width: 72,
                    height: 56,
                    x: "50%",
                    className: "absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10",
                    ...gridProps
                })
            })
        ]
    });
}
function Resource({ resource  }) {
    let mouseX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    let mouseY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    function onMouseMove({ currentTarget , clientX , clientY  }) {
        let { left , top  } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onMouseMove: onMouseMove,
        className: "group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResourcePattern, {
                ...resource.pattern,
                mouseX: mouseX,
                mouseY: mouseY
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative rounded-2xl px-4 pt-16 pb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResourceIcon, {
                        icon: resource.icon
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: resource.href,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "absolute inset-0 rounded-2xl"
                                }),
                                resource.name
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400",
                        children: resource.description
                    })
                ]
            })
        ]
    }, resource.href);
}
function Resources() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-16 xl:max-w-none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_4__/* .Heading */ .X, {
                level: 2,
                id: "resources",
                children: "Resources"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4",
                children: resources.map((resource)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Resource, {
                        resource: resource
                    }, resource.href))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ ChatBubbleIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ChatBubbleIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10 16.5c4.142 0 7.5-3.134 7.5-7s-3.358-7-7.5-7c-4.142 0-7.5 3.134-7.5 7 0 1.941.846 3.698 2.214 4.966L3.5 17.5c2.231 0 3.633-.553 4.513-1.248A8.014 8.014 0 0 0 10 16.5Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7.5 8.5h5M8.5 11.5h3"
            })
        ]
    });
}


/***/ }),

/***/ 6077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ EnvelopeIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function EnvelopeIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M2.5 5.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-8Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10 10 4.526 5.256c-.7-.607-.271-1.756.655-1.756h9.638c.926 0 1.355 1.15.655 1.756L10 10Z"
            })
        ]
    });
}


/***/ }),

/***/ 665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ UserIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function UserIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeWidth: "0",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M10 .5a9.5 9.5 0 0 1 5.598 17.177C14.466 15.177 12.383 13.5 10 13.5s-4.466 1.677-5.598 4.177A9.5 9.5 0 0 1 10 .5ZM12.5 8a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10 .5a9.5 9.5 0 0 1 5.598 17.177A9.458 9.458 0 0 1 10 19.5a9.458 9.458 0 0 1-5.598-1.823A9.5 9.5 0 0 1 10 .5Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M4.402 17.677C5.534 15.177 7.617 13.5 10 13.5s4.466 1.677 5.598 4.177M10 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            })
        ]
    });
}


/***/ }),

/***/ 7363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ UsersIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function UsersIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10.046 16H1.955a.458.458 0 0 1-.455-.459C1.5 13.056 3.515 11 6 11h.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7.5 15.454C7.5 12.442 9.988 10 13 10s5.5 2.442 5.5 5.454a.545.545 0 0 1-.546.546H8.045a.545.545 0 0 1-.545-.546Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M13 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            })
        ]
    });
}


/***/ }),

/***/ 831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7834);
/* harmony import */ var _components_Guides__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1512);
/* harmony import */ var _components_Resources__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5174);
/* harmony import */ var _components_HeroPattern__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9137);
/* harmony import */ var _components_ImageComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3545);
/* harmony import */ var _images_logos_go_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2845);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_Guides__WEBPACK_IMPORTED_MODULE_2__, _components_Resources__WEBPACK_IMPORTED_MODULE_3__]);
([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_Guides__WEBPACK_IMPORTED_MODULE_2__, _components_Resources__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*@jsxRuntime automatic @jsxImportSource react*/ 

const title = "Welcome";





const description = "Learn everything there is to know about the Protocol API and integrate Protocol into your product.";
const sections = [
    {
        title: "Guides",
        id: "guides"
    },
    {
        title: "Resources",
        id: "resources"
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        strong: "strong",
        blockquote: "blockquote",
        a: "a",
        img: "img",
        ul: "ul",
        li: "li",
        code: "code",
        h2: "h2",
        ol: "ol",
        pre: "pre"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components), { Button  } = _components;
    if (!Button) _missingMdxReference("Button", true);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HeroPattern__WEBPACK_IMPORTED_MODULE_4__/* .HeroPattern */ .f, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Welcome"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "This is a ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.strong, {
                        children: "live demo"
                    }),
                    " of MDXEditor with all default features on."
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.blockquote, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                        children: "The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible.\nThe idea is that a Markdown-formatted document should be publishable as-is, as plain text,\nwithout looking like it’s been marked up with tags or formatting instructions."
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://daringfireball.net/projects/markdown/",
                        children: "— Daring Fireball"
                    }),
                    ".\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.img, {
                        src: "https://i.imgur.com/u3urcI2.png",
                        alt: ""
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ImageComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                src: _images_logos_go_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                alt: "Example Image",
                width: 500,
                height: 300
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In here, you can find the following markdown elements:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Headings"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Lists"
                            }),
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Unordered"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "Ordered"
                                    }),
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                        children: "And nested ;)"
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Links"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Bold/Italic/Underline formatting"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Tables"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Code block editors"
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "And much more."
                            }),
                            "\n"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The current editor content is styled using the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "@tailwindcss/typography"
                    }),
                    " ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "https://tailwindcss.com/docs/typography-plugin",
                        children: "plugin"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "what-can-you-do-here",
                children: "What can you do here?"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "This is a great location for you to test how editing markdown feels. If you have an existing markdown source, you can switch to source mode using the toggle group in the top right, paste it in there, and go back to rich text mode."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If you need a few ideas, here's what you can try:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Add your own code sample"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Change the type of the headings"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Insert a table, add a few rows and columns"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Switch back to source markdown to see what you're going to get as an output"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Test the diff feature to see how the markdown has changed"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Add a frontmatter block through the toolbar button"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "a-code-sample",
                children: "A code sample"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "MDXEditor embeds CodeMirror for code editing."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "tsx",
                code: "export default function App() {\n  return <div>Hello world</div>\n}\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-tsx",
                    children: '<span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">App</span><span style="color: var(--shiki-color-text)">() {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;Hello world&lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "a-live-code-example",
                children: "A live code example"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The block below is a live React component. You can configure multiple live code presets that specify the available npm packages and the default imports. You can also specify a default component that will be rendered in the live code block."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.pre, {
                language: "jsx",
                code: "export default function App() {\n  return (\n    <div>\n      <p>\n        This is a live React component, that's being previewed in\n        codesandbox.{' '}\n      </p>\n      <p>Editing it will update the fenced codeblock in the markdown.</p>\n    </div>\n  )\n}\n",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                    className: "language-jsx",
                    children: '<span><span style="color: var(--shiki-token-keyword)">export</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">default</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-keyword)">function</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-function)">App</span><span style="color: var(--shiki-color-text)">() {</span></span>\n<span><span style="color: var(--shiki-color-text)">  </span><span style="color: var(--shiki-token-keyword)">return</span><span style="color: var(--shiki-color-text)"> (</span></span>\n<span><span style="color: var(--shiki-color-text)">    &lt;</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>\n<span><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">p</span><span style="color: var(--shiki-color-text)">&gt;</span></span>\n<span><span style="color: var(--shiki-color-text)">        This is a live React component, that&#39;s being previewed in</span></span>\n<span><span style="color: var(--shiki-color-text)">        codesandbox.{</span><span style="color: var(--shiki-token-string-expression)">&#39; &#39;</span><span style="color: var(--shiki-color-text)">}</span></span>\n<span><span style="color: var(--shiki-color-text)">      &lt;/</span><span style="color: var(--shiki-token-string-expression)">p</span><span style="color: var(--shiki-color-text)">&gt;</span></span>\n<span><span style="color: var(--shiki-color-text)">      &lt;</span><span style="color: var(--shiki-token-string-expression)">p</span><span style="color: var(--shiki-color-text)">&gt;Editing it will update the fenced codeblock in the markdown.&lt;/</span><span style="color: var(--shiki-token-string-expression)">p</span><span style="color: var(--shiki-color-text)">&gt;</span></span>\n<span><span style="color: var(--shiki-color-text)">    &lt;/</span><span style="color: var(--shiki-token-string-expression)">div</span><span style="color: var(--shiki-color-text)">&gt;</span></span>\n<span><span style="color: var(--shiki-color-text)">  )</span></span>\n<span><span style="color: var(--shiki-color-text)">}</span></span>\n<span></span>'
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "a-table",
                children: "A table"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "Play with the table below - add rows, columns, change column alignment. When editing,\nyou can navigate the cells with ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "enter"
                    }),
                    ", ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "shift+enter"
                    }),
                    ", ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "tab"
                    }),
                    " and ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.code, {
                        children: "shift+tab"
                    }),
                    "."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "| Item              | In Stock | Price |\n| :---------------- | :------: | ----: |\n| Python Hat        |   True   | 23.99 |\n| SQL Hat           |   True   | 23.99 |\n| Codecademy Tee    |  False   | 19.99 |\n| Codecademy Hoodie |  False   | 42.99 |"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "not-prose mb-16 mt-6 flex gap-3",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                        href: "/quickstart",
                        arrow: "right",
                        children: "Quickstart"
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                        href: "/sdks",
                        variant: "outline",
                        children: "Explore SDKs"
                    })
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "getting-started",
                children: "Getting started",
                ...{
                    anchor: false
                }
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "To get started, create a new application in your ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "#",
                        children: "developer settings"
                    }),
                    ", then read about how to make requests for the resources you need to access using our HTTP APIs or dedicated client SDKs. When your integration is ready to go live, publish it to our ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "#",
                        children: "integrations directory"
                    }),
                    " to reach the Protocol community."
                ],
                ...{
                    className: "lead"
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "not-prose",
                children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                    href: "/sdks",
                    variant: "text",
                    arrow: "right",
                    children: "Get your API key"
                })
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Guides__WEBPACK_IMPORTED_MODULE_2__/* .Guides */ .t, {}),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Resources__WEBPACK_IMPORTED_MODULE_3__/* .Resources */ ._, {})
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return MDXLayout ? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);
function _missingMdxReference(id, component) {
    throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const getStaticProps = ()=>({
        props: JSON.parse(JSON.stringify({
            Guides: _components_Guides__WEBPACK_IMPORTED_MODULE_2__/* .Guides */ .t,
            HeroPattern: _components_HeroPattern__WEBPACK_IMPORTED_MODULE_4__/* .HeroPattern */ .f,
            ImageComponent: _components_ImageComponent__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
            Resources: _components_Resources__WEBPACK_IMPORTED_MODULE_3__/* .Resources */ ._,
            _provideComponents: _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents,
            description,
            pulaimg: _images_logos_go_svg__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
            sections,
            title
        }))
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,387], () => (__webpack_exec__(831)));
module.exports = __webpack_exports__;

})();