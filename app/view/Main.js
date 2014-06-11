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
                title: 'Избранное',
                //fullscreen: false,
                itemTpl: '<span class="tenderRow">' + 
                            '<div class="name">{name:ellipsis(35, true)}</div>' + 
                            '<div class="price">{price} руб.</div>' + 
                            '<div class="finishDocDate">{finishdocdate}</div>' + 
                         '</span>',

                /*listeners: {
                    select: function(list, record) {
                        console.log(record);
                    }
                },
                */


                store: Ext.create('Ext.data.Store', {
                    fields: [
                        'Id', 'name', 'price', 'finishdocdate'
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
                            filterId: 0,
                            page: 1,
                            itemsOnPage: 100,
                            filters: {
                                favorite: true
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