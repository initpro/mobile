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
                itemTpl: '{tenderid}',
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

                        type: "REST",

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

Ext.define('MyApp.proxy.FileContent', {
    extend: 'Ext.data.proxy.Proxy',
    alias: 'proxy.FileContent',

    create: function (operation, callback, scope) {
             //Here goes your create logic
        },
        read: function (operation, callback, scope) {
            Ext.Ajax.request({
                url: apiUrl + 'Files/GetFileInfo',
                method: "POST",
                defaultHeaders:{
                    'Content-Type': 'application/json; charset=utf-8',
                },
                jsonData: '{"file": "myfile"}',
                success: function(response){
                    var json = JSON.parse(response.responseText);
                },
                failure: function(){                 
                    alert("fail");
                }
            });  
        },
        update: function (operation, callback, scope) {
             //Here goes your update logic
        },
        destroy: function (operation, callback, scope) {
             //Here goes your delete logic
        }
});

Ext.define("MyApp.store.FileContent", {
    extend: "Ext.data.Store",
    model:'MyApp.model.FileContent',
    autoLoad: true,
    requires: ['MyApp.proxy.FileContent'],
    proxy: {
        type: 'FileContent'
    }
});