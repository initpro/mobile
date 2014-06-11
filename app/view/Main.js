Ext.define('InitProMobile.view.Main', {
    xtype: 'main',
    requires: [
        'Ext.Container',
        'Ext.List'
    ],
    config: {

        items: [

            Ext.create('Ext.Container', {
                fullscreen: true,
                layout: 'fit',

                items: [
                    Ext.create('Ext.List', {
                        fullscreen: false,
                        store: {
                            fields: ['name', 'price', 'finishDocDate'],
                            data: [{
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
                            }]
                        },

                        itemTpl: '<span class="tenderRow"> <div class="name">{name}</div> <div class="price">{price}</div> <div class="finishDocDate">{finishDocDate}</div> </span>',

                        listeners: {
                            select: function(view, record) {
                                Ext.Msg.alert('Тендер', 'Вы переходите в карточку ' + record.get('name'));
                            }
                        }
                    }),
                    Ext.create('Ext.Container', {
                        fullscreen: false,
                        padding: 10,
                        items: {
                            xtype: 'button',
                            text: 'Расширенный поиск',
                        }
                    })
                ]
            })
        ]
    }
});
