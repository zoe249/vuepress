const secret = require('./secret');
module.exports = {
    '@vuepress/back-to-top': true,
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
        clientId: secret.clientId,
        clientSecret: secret.clientSecret,
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