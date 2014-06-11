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
                title: 'Поиск',
                itemTpl: '<span class="tenderRow"> <div class="name">{name}</div> <div class="price">{price}</div> <div class="finishDocDate">{finishDocDate}</div> </span>',
                data: [
                    {
                        name: 'Тендер 1',
                        price: '1231.11 руб.',
                        finishDocDate: '12 июля 2014'
                    }, {
                        name: 'Тендер 2',
                        price: '1231.11 руб.',
                        finishDocDate: '12 июля 2014'
                    }, {
                        name: 'Тендер 3',
                        price: '1231.11 руб.',
                        finishDocDate: '12 июля 2014'
                    }, {
                        name: 'Тендер 4',
                        price: '1231.11 руб.',
                        finishDocDate: '12 июля 2014'
                    }
                ]
            }

        ]
    }
});
