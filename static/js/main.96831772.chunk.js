(this["webpackJsonpmy-react-calculator"]=this["webpackJsonpmy-react-calculator"]||[]).push([[0],[,,function(_,e,r){"use strict";r.d(e,"b",(function(){return t})),r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return c}));var t={ADDITION:"+",SUBTRACTION:"-",MULTIPLICATION:"*",DIVISION:"/",CLEAR:"C",EQUAL:"="},a=Object.values(t),c=["7","8","9",t.DIVISION,"4","5","6",t.MULTIPLICATION,"1","2","3",t.SUBTRACTION,t.CLEAR,"0",t.EQUAL,t.ADDITION]},,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var _home_runner_work_my_react_calculator_my_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),_ui_calculator_screen__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_ui_calculator_keypad__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),_constants_operators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),_utils_calculator_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__),Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),_useState2=Object(_home_runner_work_my_react_calculator_my_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),value=_useState2[0],setValue=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),_useState4=Object(_home_runner_work_my_react_calculator_my_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),calculatorStringArray=_useState4[0],setCalculatorStringArray=_useState4[1],_useState5=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(),_useState6=Object(_home_runner_work_my_react_calculator_my_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState5,2),operator=_useState6[0],setOperator=_useState6[1];Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){if(operator){if(console.log("in first use effect hook"),operator===_constants_operators__WEBPACK_IMPORTED_MODULE_5__.b.CLEAR)return console.log("clearing screen value"),setValue(0),setOperator(null),void setCalculatorStringArray([]);console.log("resetting screen value"),setValue(0)}}),[operator]),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){if(console.log("calculatorStringArray is",calculatorStringArray),operator===_constants_operators__WEBPACK_IMPORTED_MODULE_5__.b.EQUAL){console.log("evaluating final result",calculatorStringArray);var evalString=calculatorStringArray.filter((function(_){return _!==_constants_operators__WEBPACK_IMPORTED_MODULE_5__.b.EQUAL})).join("");console.log("evaluating string",evalString);var result=eval(evalString);setValue(result)}}),[operator,calculatorStringArray]);var onKeyPressed=function(_){console.log("user pressed: ".concat(_)),Object(_utils_calculator_utils__WEBPACK_IMPORTED_MODULE_6__.a)(_)?setOperator(_):setValue(Number(String(value)+String(_))),calculatorStringArray.push(_)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_2___default()("bg-ui-primary border-4 border-gray-600 h-3/6 w-80","flex flex-col justify-between items-center"),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_calculator_screen__WEBPACK_IMPORTED_MODULE_3__.a,{operator:operator===_constants_operators__WEBPACK_IMPORTED_MODULE_5__.b.CLEAR?"":operator,value:value}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_calculator_keypad__WEBPACK_IMPORTED_MODULE_4__.a,{keys:_constants_operators__WEBPACK_IMPORTED_MODULE_5__.a,keyPressed:onKeyPressed})]})}},function(_,e,r){"use strict";r.d(e,"a",(function(){return a}));r(1);var t=r(0),a=function(_){var e=_.operator,r=void 0===e?"":e,a=_.value,c=void 0===a?0:a;return Object(t.jsxs)("div",{className:"bg-ui-secondary-100 flex justify-between border-4 my-4 p-2 border-gray-600 w-72 text-4xl",children:[Object(t.jsx)("span",{children:r}),Object(t.jsx)("span",{children:c})]})}},function(_,e,r){"use strict";r.d(e,"a",(function(){return n}));r(1);var t=r(3),a=r.n(t),c=r(0),s=function(_){var e=_.keyToDisplay,r=_.keyValue,t=_.onClick;return Object(c.jsx)("button",{className:a()("flex justify-center items-center border-4 border-gray-600","text-white text-4xl hover:bg-gray-600 hover"),onClick:function(){return t(r)},children:e})},n=function(_){var e=_.keyPressed,r=_.keys;return Object(c.jsx)("div",{className:"w-72 my-4 h-full grid grid-cols-4 gap-4",children:r.map((function(_){return Object(c.jsx)(s,{keyToDisplay:_,keyValue:_,onClick:function(_){return e(_)}},_)}))})}},function(_,e,r){"use strict";r.d(e,"a",(function(){return a}));var t=r(2),a=function(_){return t.c.includes(_)}},,,,,function(_,e,r){},,function(_,e,r){"use strict";r.r(e);var t=r(1),a=r.n(t),c=r(6),s=r.n(c),n=(r(15),r(7)),u=r(0),o=function(){return Object(u.jsx)("div",{className:"flex flex-grow justify-center items-center",children:Object(u.jsx)(n.a,{})})};var l=function(){return Object(u.jsx)("div",{className:"h-screen flex",children:Object(u.jsx)(o,{})})};s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(l,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.96831772.chunk.js.map