(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4Laa":function(t,e,a){"use strict";a.r(e);var n=a("w48C"),s=a.n(n),l=(a("CVKz"),{components:{flatPicker:s.a},data:function(){return{dates:{simple:"2018-07-17",range:"2018-07-17 to 2018-07-19"}}}}),o=a("KHd+"),c=Object(o.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("small",{staticClass:"d-block text-uppercase font-weight-bold mb-3"},[t._v("Single date")]),t._v(" "),a("base-input",{attrs:{"addon-left-icon":"ni ni-calendar-grid-58"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.focus,s=e.blur;return a("flat-picker",{staticClass:"form-control datepicker",attrs:{config:{allowInput:!0}},on:{"on-open":n,"on-close":s},model:{value:t.dates.simple,callback:function(e){t.$set(t.dates,"simple",e)},expression:"dates.simple"}})}}])})],1),t._v(" "),a("div",{staticClass:"col-md-4 mt-4 mt-md-0"},[a("small",{staticClass:"d-block text-uppercase font-weight-bold mb-3"},[t._v("Date range")]),t._v(" "),a("div",{staticClass:"input-daterange datepicker row align-items-center"},[a("div",{staticClass:"col"},[a("base-input",{attrs:{"addon-left-icon":"ni ni-calendar-grid-58"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.focus,s=e.blur;return a("flat-picker",{staticClass:"form-control datepicker",attrs:{config:{allowInput:!0,mode:"range"}},on:{"on-open":n,"on-close":s},model:{value:t.dates.range,callback:function(e){t.$set(t.dates,"range",e)},expression:"dates.range"}})}}])})],1)])])])},[],!1,null,null,null);e.default=c.exports}}]);