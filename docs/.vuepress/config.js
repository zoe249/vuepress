module.exports = {
    title: '你那天在脸红什么',
    description: "你那天在脸红什么",
    head: [
        // ['meta', { name: 'keywords', content: 'vuepress介绍' }]
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
        // sidebar: {
        //     "/css/": [
        //         'css-a',
        //         'css-b',
        //         'css-c',
        //     ],
        //     "/javascript/": [
        //         'js-a',
        //         'js-b',
        //         'js-c',
        //     ]
        // }
        sidebar: [
            '',
            'about',
            'about1',
            {
                title: '我的css', // 必要的
                path: '/css/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    '/css/css-a',
                    '/css/css-b',
                    '/css/css-c'
                ]
            },
        ]
    }
}