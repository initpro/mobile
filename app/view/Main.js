Ext.define('InitProMobile.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
       // 'Ext.TitleBar',
       // 'Ext.Video',
       // 'Ext.dataview.List'
    ],
    config: {
        tabBarPosition: 'top',

        items: [
            {
                title: 'tab1',
                layout: 'fit',
                items: [
                    Ext.create('Ext.dataview.List', {
                    fullscreen: true,
        //            height: 300,
                    itemTpl: '<div class="contact">{name} <strong>{email}</strong></div>',
                    store: Ext.create('Ext.data.Store', {
                        storeId: 'simpsonsStore',
                        fields: ['name', 'email', 'phone'],
                        data: [
                            { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
                            { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
                            { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
                            { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
                        ]
                    }),
                    items: [{
                        xtype: 'button',
                        scrollDock: 'bottom',
                        docked: 'bottom',
                        text: 'Load More...'
                    }]
                })
                ]
            }
            /*
            Ext.create('Ext.grid.Grid', {
                title: 'Simpsons',
                //store: Ext.data.StoreManager.lookup('simpsonsStore'),
                store: Ext.create('Ext.data.Store', {
                    storeId: 'simpsonsStore',
                    fields: ['name', 'email', 'phone'],
                    data: {'items': [
                        { 'name': 'Lisa',  "email":"lisa@simpsons.com",  "phone":"555-111-1224"  },
                        { 'name': 'Bart',  "email":"bart@simpsons.com",  "phone":"555-222-1234" },
                        { 'name': 'Homer', "email":"home@simpsons.com",  "phone":"555-222-1244"  },
                        { 'name': 'Marge', "email":"marge@simpsons.com", "phone":"555-222-1254"  }
                    ]}
                }),
                columns: [
                    { text: 'Name',  dataIndex: 'name', width: 200},
                    { text: 'Email', dataIndex: 'email', width: 250},
                    { text: 'Phone', dataIndex: 'phone', width: 120}
                ]
            })
            */
        ]
    }
});
