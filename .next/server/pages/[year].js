(() => {
var exports = {};
exports.id = 507;
exports.ids = [507];
exports.modules = {

/***/ 263:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Index_container__rpw15",
	"monthsContainer": "Index_monthsContainer__vfq_z",
	"yearChanger": "Index_yearChanger__2xOvp",
	"chevronIcon": "Index_chevronIcon__RLIZn",
	"calendarForm": "Index_calendarForm__kpFK6",
	"monthName": "Index_monthName__1Li5b",
	"calendarContainer": "Index_calendarContainer__4QekG",
	"calendarElement": "Index_calendarElement__JqRkI",
	"calendarMarkdown": "Index_calendarMarkdown__IbeVM",
	"calendarSunday": "Index_calendarSunday__vODuh",
	"footer": "Index_footer__ZoGf4",
	"heartIcon": "Index_heartIcon__ACabL"
};


/***/ }),

/***/ 37:
/***/ ((module) => {

// Exports
module.exports = {
	"monthName": "ShowMonth_monthName__F_Oeb",
	"calendarContainer": "ShowMonth_calendarContainer__rnb1A",
	"calendarElement": "ShowMonth_calendarElement__1iS7t",
	"calendarMarkdown": "ShowMonth_calendarMarkdown__LA50Q",
	"calendarSunday": "ShowMonth_calendarSunday__KglYZ"
};


/***/ }),

/***/ 924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _year_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/ShowMonth.module.css
var ShowMonth_module = __webpack_require__(37);
var ShowMonth_module_default = /*#__PURE__*/__webpack_require__.n(ShowMonth_module);
;// CONCATENATED MODULE: ./components/ShowMonth.js


function DifferDays(monthObject, day) {
    if (monthObject[day] == 0) {
        return /*#__PURE__*/ jsx_runtime_.jsx("span", {
            className: (ShowMonth_module_default()).calendarSunday,
            children: day
        }, day);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        style: {
            gridColumn: monthObject[day] + 1
        },
        className: (ShowMonth_module_default()).calendarElement,
        children: day
    }, day);
}
function ShowMonth({ children , month  }) {
    const weekdays = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (ShowMonth_module_default()).monthName,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                children: monthNames[month - 1]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (ShowMonth_module_default()).calendarContainer,
                children: [
                    weekdays.map((weekday)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: (ShowMonth_module_default()).calendarMarkdown,
                            children: weekday
                        }, weekday)
                    ),
                    Object.keys(children).map((day)=>DifferDays(children, day)
                    )
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/Index.module.css
var Index_module = __webpack_require__(263);
var Index_module_default = /*#__PURE__*/__webpack_require__.n(Index_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
;// CONCATENATED MODULE: external "@fortawesome/free-solid-svg-icons"
const free_solid_svg_icons_namespaceObject = require("@fortawesome/free-solid-svg-icons");
;// CONCATENATED MODULE: ./pages/[year].js








async function getStaticPaths() {
    const years = await fetch("https://calendar-api-six.vercel.app/api/?initial=1900&final=2100").then((res)=>res.json()
    );
    const paths = Object.keys(years).map((year)=>{
        return {
            params: {
                year: year
            }
        };
    });
    return {
        paths,
        fallback: true
    };
}
async function getStaticProps(context) {
    const queryYear = isNaN(context.params.year) ? new Date().getFullYear() : parseInt(context.params.year);
    const year = await fetch(`https://calendar-api-six.vercel.app/api/${queryYear}`).then((res)=>res.json()
    );
    return {
        props: {
            year,
            queryYear
        }
    };
}

function ShowCalendar({ year , queryYear  }) {
    let { 0: inputYear , 1: setInputYear  } = (0,external_react_.useState)(queryYear);
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        setInputYear(queryYear);
    }, [
        queryYear
    ]);
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: "loading..."
        });
    }
    const handleChange = (text)=>{
        setInputYear(text.replace(/[^0-9]*/g, ""));
    };
    const handleSubmit = (ev)=>{
        ev.preventDefault();
        router.push(`/${inputYear}`);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Index_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Index_module_default()).yearChanger,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/${queryYear - 1}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                className: (Index_module_default()).chevronIcon,
                                icon: free_solid_svg_icons_namespaceObject.faChevronLeft
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("form", {
                        className: (Index_module_default()).calendarForm,
                        onSubmit: handleSubmit,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            type: "text",
                            maxLength: 4,
                            value: inputYear,
                            onChange: (t)=>{
                                handleChange(t.target.value);
                            }
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `/${queryYear + 1}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                className: (Index_module_default()).chevronIcon,
                                icon: free_solid_svg_icons_namespaceObject.faChevronRight
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Index_module_default()).monthsContainer,
                children: Object.keys(year).map((month)=>/*#__PURE__*/ jsx_runtime_.jsx(ShowMonth, {
                        month: month,
                        children: year[month]
                    }, month)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: (Index_module_default()).footer,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "Made with ",
                        /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                            className: (Index_module_default()).heartIcon,
                            icon: free_solid_svg_icons_namespaceObject.faHeart
                        }),
                        " by ",
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "https://github.com/BPThiago",
                            children: "Thiago B."
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const _year_ = (ShowCalendar);


/***/ }),

/***/ 796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 14:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 20:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 52:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 422:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [505,664], () => (__webpack_exec__(924)));
module.exports = __webpack_exports__;

})();