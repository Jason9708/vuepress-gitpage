(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{178:function(e,s,a){"use strict";a.r(s);var t=a(0),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"用hmr提高开发效率"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用hmr提高开发效率"}},[e._v("#")]),e._v(" 用HMR提高开发效率")]),e._v(" "),a("p",[a("code",[e._v("Hot Module Replacement")]),e._v("，即模块热替换。之前我们使用过"),a("code",[e._v("Hot Reloading")]),e._v("，当代码变更时通知浏览器刷新页面，避免手动刷新的繁琐环节。")]),e._v(" "),a("p",[a("code",[e._v("Hot Module Replacement")]),e._v("可以说是"),a("code",[e._v("Hot Reloading")]),e._v("的增加版，所谓增加，它不用整个页面刷新，而是局部替换掉部分模块代码并且使其生效。")]),e._v(" "),a("p",[e._v("所以，"),a("code",[e._v("Hot Module Replacement")]),e._v("即避免了频繁手动刷新页面，也减少了页面刷新时的等待时间，以此极大地提高前端页面开发效率")]),e._v(" "),a("h3",{attrs:{id:"配置使用hmr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置使用hmr"}},[e._v("#")]),e._v(" 配置使用HMR")]),e._v(" "),a("p",[e._v("我们需要在"),a("code",[e._v("webpack")]),e._v("的配置文件中添加启用"),a("code",[e._v("HMR")]),e._v("需要的两个插件")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const webpack = require('webpack')\n\nmodule.exports = {\n    // ...\n    devServer: {\n        hot: true   // dev-server 的配置要启动 hot，或者在命令行中带参数开启 \n    },\n    plugins: [\n        // ...\n        new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径\n        new webpack.HotModuleReplacementPlugin()  // Hot Module Replacement 的插件\n    ]\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("h3",{attrs:{id:"理解hmr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理解hmr"}},[e._v("#")]),e._v(" 理解HMR")]),e._v(" "),a("p",[e._v("开启"),a("code",[e._v("hot")]),e._v("功能的"),a("code",[e._v("webpack")]),e._v("会往我们应用的主要代码中添加"),a("code",[e._v("WS")]),e._v("相关的代码，用于和服务连接，等待更新动作")]),e._v(" "),a("p",[e._v("当你配置了"),a("code",[e._v("HMR")]),e._v("的插件时，会往应用代码中添加"),a("code",[e._v("HMR")]),e._v("运行时的代码，主要用于定义代码模块应用更新时的"),a("code",[e._v("API")])]),e._v(" "),a("p",[a("code",[e._v("HMR")]),e._v("运行时代码会提供定义代码模块应用更新执行的API，这些API可以让我们在模块中定义接收到"),a("code",[e._v("HMR")]),e._v("更新应用信号时，需要额外做一些什么工作")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("例如，style-loader 就需要实现 HMR 接口，当收到代码更新时，使用新的样式替换旧的样式\n\nif(module.hot){\n    module.hot.accept('xxx/, () => {\n        //  ...新样式替换旧样式\n    })\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[a("code",[e._v("HMR")]),e._v("应用更新时是使用"),a("code",[e._v("webpackHotUpdate")]),e._v("来处理的")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("webpackHotUpdate(id, {\n    'modulePath': function() {\n        // 模块更新后的代码\n    }\n})\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("执行"),a("code",[e._v("webpackHotUpdate")]),e._v("时如果发现模块代码实现了"),a("code",[e._v("HMR")]),e._v("接口，就会执行相应的回调或者方法，从而达到应用更新时，模块可以自行管理自己所需要额外做的工作")]),e._v(" "),a("p",[e._v("不过并不是所有的模块都需要做相关的处理，当遇见没有实现"),a("code",[e._v("HMR")]),e._v("接口的模块是，就会进行冒泡（向上）")]),e._v(" "),a("h3",{attrs:{id:"module-hot-常见的-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-hot-常见的-api"}},[e._v("#")]),e._v(" module.hot 常见的 API")]),e._v(" "),a("h5",{attrs:{id:"module-hot-accept"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-hot-accept"}},[e._v("#")]),e._v(" module.hot.accept")]),e._v(" "),a("p",[a("code",[e._v("module.hot.accept")]),e._v("方法指定在应用特定代码模块更新时执行相应的"),a("code",[e._v("callback")]),e._v("，第一个参数可以是字符串或者数组")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if(module.hot){\n    module.hot.accept(['./bar.js','./index.css'], () => {\n        // ... 这样当 bar.js或者 index.css 更新时都会执行该函数\n    })\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h5",{attrs:{id:"module-hot-decline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-hot-decline"}},[e._v("#")]),e._v(" module.hot.decline")]),e._v(" "),a("p",[a("code",[e._v("module.hot.decline")]),e._v("对于指定的代码模块，拒绝进行模块代码的更新，进入更新失败状态，例如"),a("code",[e._v("module.hot.decline('./bar.js')")])]),e._v(" "),a("h5",{attrs:{id:"module-hot-dispose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-hot-dispose"}},[e._v("#")]),e._v(" module.hot.dispose")]),e._v(" "),a("p",[a("code",[e._v("module.hot.dispose")]),e._v("用于添加一个处理函数，在当前模块代码被替换时运行该函数")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("if (module.hot) {\n  module.hot.dispose((data) => {\n    // data 用于传递数据，如果有需要传递的数据可以挂在 data 对象上，然后在模块代码更新后可以通过 module.hot.data 来获取\n  })\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h5",{attrs:{id:"module-hot-removedisposehandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-hot-removedisposehandler"}},[e._v("#")]),e._v(" module.hot.removeDisposeHandler")]),e._v(" "),a("p",[a("code",[e._v("module.hot.removeDisposeHandler")]),e._v(" 用于移除"),a("code",[e._v("dispose")]),e._v("方法添加的"),a("code",[e._v("callback")])]),e._v(" "),a("p",[a("code",[e._v("module.hot.accept")]),e._v(" 通常用于指定当前依赖的某个模块更新时需要做的处理，如果是当前模块更新时需要处理的动作，使用 "),a("code",[e._v("module.hot.dispose")]),e._v(" 会更加容易方便。")])])}),[],!1,null,null,null);s.default=n.exports}}]);