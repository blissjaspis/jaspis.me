(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{158:function(a,n,t){"use strict";t.r(n);var s=t(0),e=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"mengambil-random-data-dari-database-menggunakan-eloquent"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mengambil-random-data-dari-database-menggunakan-eloquent","aria-hidden":"true"}},[a._v("#")]),a._v(" Mengambil random data dari Database menggunakan Eloquent")]),t("p",[a._v("Pasti anda pernah menginginkan data yang anda tarik dari Database itu menghasilkan data secara random. Ya karena secara harafiah laravel mengambil data dari database dari "),t("code",[a._v("baru -> lama")]),a._v(".")]),t("p",[a._v("Mungkin banyak cara untuk mengambil data random di Laravel, tetapi disini saya memberikan 2 cara yang saya tahu.")]),t("ol",[t("li",[a._v("Mengunakan "),t("code",[a._v("Random()")])]),t("li",[a._v("Menggunakan Eloquent Query Raw")])]),t("h2",{attrs:{id:"menggunakan-random"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#menggunakan-random","aria-hidden":"true"}},[a._v("#")]),a._v(" Menggunakan Random()")]),t("p",[a._v("Memang cara termudah mengambil data secara random/acak adalah menggunakan fungsi method collection ini. Akan tetapi yang menjadi permasalahan nya ialah, bila data yang tarik tidak lebih besar sama dengan "),t("code",[a._v(">=")]),a._v(" nilai random yang anda masukkan akan mengeluarkan "),t("code",[a._v("InvalidArgumentException")]),a._v(".")]),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("Laravel"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token function"}},[a._v("where")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token single-quoted-string string"}},[a._v("'name'")]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{attrs:{class:"token variable"}},[a._v("$name")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token operator"}},[a._v("-")]),t("span",{attrs:{class:"token operator"}},[a._v(">")]),t("span",{attrs:{class:"token function"}},[a._v("get")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token operator"}},[a._v("-")]),t("span",{attrs:{class:"token operator"}},[a._v(">")]),t("span",{attrs:{class:"token function"}},[a._v("random")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token number"}},[a._v("12")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("Oleh karena itu bagi anda yang ingin menggunakan method tersebut, sebaiknya anda harus mengetahui dengan pasti nilai keluar dari data yang anda tarik.")]),t("h2",{attrs:{id:"menggunakan-laravel-query-raw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#menggunakan-laravel-query-raw","aria-hidden":"true"}},[a._v("#")]),a._v(" Menggunakan Laravel Query Raw")]),t("p",[a._v("Cara ke-2 ini bisa dibilang yang paling saya sarankan, kenapa? karena tidak seperti "),t("code",[a._v("random()")]),a._v(" bila tidak lebih besar "),t("code",[a._v(">=")]),a._v(" dari nilai yang ditarik mengeluarkan error, maka cara ke-2 ini tidak akan mengeluarkan error tersebut.")]),t("div",{staticClass:"language-php line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-php"}},[t("code",[a._v("Laravel"),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token punctuation"}},[a._v(":")]),t("span",{attrs:{class:"token function"}},[a._v("where")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token single-quoted-string string"}},[a._v("'name'")]),t("span",{attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{attrs:{class:"token variable"}},[a._v("$name")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token operator"}},[a._v("-")]),t("span",{attrs:{class:"token operator"}},[a._v(">")]),t("span",{attrs:{class:"token function"}},[a._v("orderByRaw")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token single-quoted-string string"}},[a._v("'RAND()'")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token operator"}},[a._v("-")]),t("span",{attrs:{class:"token operator"}},[a._v(">")]),t("span",{attrs:{class:"token function"}},[a._v("take")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token number"}},[a._v("12")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token operator"}},[a._v("-")]),t("span",{attrs:{class:"token operator"}},[a._v(">")]),t("span",{attrs:{class:"token function"}},[a._v("get")]),t("span",{attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("hr"),t("p",[a._v("Selesai 🎉  Ya mungkin segitu dulu ya. thanks 😃")])])}],!1,null,null,null);n.default=e.exports}}]);