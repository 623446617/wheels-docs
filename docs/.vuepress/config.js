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
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                    {
                        title: '基础',
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children:[
                            '/components/icon',
                            '/components/button',
                        ]
                    },
                    {
                        title: '布局',
                        collapsable: false, // 可选的, 默认值是 true,
                        sidebarDepth: 1,    // 可选的, 默认值是 1
                        children:[
                            '/components/grid'
                        ]
                    }
                ]
            }
        ]
    }
}
