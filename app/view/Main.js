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
                //fullscreen: false,
                itemTpl: '<span class="tenderRow">' + 
                            '<div class="name">{name:ellipsis(35, true)}</div>' + 
                            '<div class="price">{price}</div>' + 
                            '<div class="finishDocDate">{finishDocDate}</div>' + 
                         '</span>',
                store: Ext.create('Ext.data.Store', {
                    remoteFilter: true,
                    fields: [
                        'tenderid', 'name'
                    ],

                    proxy: {                        
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                        },

                        actionMethods: {
                            read : 'POST'
                        },
                        api: {
                            read: '/api/tender/getHash'
                        },

                        type: "ajax",
                        
                        writer: {
                            encodeRequest: true,
                            type: 'json'
                        },
                        extraParams: {
                            "filterId":0,
                            "page":1,
                            "itemsOnPage":100,
                            "filters":{
                                "favorite":true
                            }
                        },
                        reader: {
                            type: "json",
                            rootProperty: "tenders"
                        }
                    },
                    autoLoad: true
                })
            }

        ]
    }
});