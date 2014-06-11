Ext.define('InitProMobile.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.List'
    ],
    config: {
        tabBarPosition: 'top',
        fullscreen: true,
        items: [
            {
                xtype: 'list',
                title: 'Поиск тендеров',
                //fullscreen: false,
                itemTpl: '{title}',
                data: [
                    { title: 'Item 1' },
                    { title: 'Item 2' },
                    { title: 'Item 3' },
                    { title: 'Item 4' }
                ]
            }

        ]
    }
});
