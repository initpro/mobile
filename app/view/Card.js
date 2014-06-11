Ext.define('InitProMobile.view.Card', {
    extend: 'Ext.tab.Panel',
    xtype: 'card',
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
                    fields: ['name'],

                    proxy: {
                        type: 'ajax',
                        api: {
                            read: '/api/tender/getTenderInfo'
                        },
                        actionMethods: {
                            create: "GET", read: "GET", update: "GET", destroy: "GET"
                        },
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
