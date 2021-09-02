// const moment = require('moment');

module.exports = {
    base: "/vuepress/",
    title: '你那天在脸红什么',
    description: "你那天在脸红什么",
    head: [
        // ['meta', { name: 'keywords', content: 'vuepress介绍' }]
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]

    ],
    themeConfig: {
        lastUpdated: '更新时间',
        logo: '/assets/img/logo.png',
        nav: [
            { text: "home", link: '/' },
            { text: "about", link: '/about.html' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: {
            "/css/": [
                'css-a',
                'css-b',
                'css-c',
            ],
            "/javascript/": [
                'js-a',
                'js-b',
                'js-c',
            ]
        }
    },
    plugins: {
        '@vuepress/pwa': {
            serviceWorker: true,
            updatePopup: {
                message: "发现新内容可用",
                buttonText: "刷新"
            }
        },
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github-v4',

            // 其他的 Vssue 配置
            owner: 'zoe249',
            repo: 'vuepress',
            clientId: 'ee504f8100edfb46fef4',
            clientSecret: 'a06b64bc8e9d4218de8b81fdca679b95884e4d43',
            autoCreateIssue: 'true'
        }
        // [
        //     '@vuepress/last-updated',
        //     {
        //         transformer: (timestamp, lang) => {
        //             // 不要忘了安装 moment
        //             moment.locale('zh-cn')
        //             return moment(timestamp).format('LLLL')
        //         }
        //     }
        // ],
    }
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