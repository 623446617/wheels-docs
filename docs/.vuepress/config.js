module.exports = {
    title: 'XWheel UI',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {text: 'nav1', link: '/'},
            {text: 'nav2', link: '/install/'}
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-start/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button'
                ]
            }
        ]
    }
}
