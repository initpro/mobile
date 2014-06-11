Ext.define('InitProMobile.view.Card', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.DataView'
    ],
    config: {
        tabBarPosition: 'top',
        fullscreen: true,
        items: [
            {
                xtype: 'dataview',
                title: 'Карточка тендера',
                store: {
                    autoLoad: true,
                    fields: ['name'],

                    proxy: {
                        type: 'ajax',
                        url: '/api/tender/getTenderInfo?tenderId=1231231',
                        reader: {
                            type: 'json'
                        }
                    }
                },

                itemTpl: '{name}'
            }
        ]
    }
});
