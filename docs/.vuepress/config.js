// const moment = require('moment');
const headConfig = require('./config/headConf');
const pluginsConfig = require('./config/pluginsConf');
const navbarConfig = require('./config/navbarConf')
const sidebarConfig = require('./config/sidebarConf')
module.exports = {
    base: "/vuepress/",
    title: '你那天在脸红什么',
    description: "你那天在脸红什么",
    head: headConfig,
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/logo.png',
        nav: navbarConfig,
        sidebar: sidebarConfig,
    },
    plugins: pluginsConfig,
}

// sidebar: [
//     '',
//     'about',
//     'about1',
//     {
//         title: '我的css', // 必要的
//         path: '/css/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//         collapsable: false, // 可选的, 默认值是 true,
//         sidebarDepth: 1, // 可选的, 默认值是 1
//         children: [
//             '/css/css-a',
//             '/css/css-b',
//             '/css/css-c'
//         ]
//     },
// ]