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

                scrollable: {
                    direction: 'horizontal',
                    directionLock: true
                },

                listeners: {

                    itemtouchend: function() {
                         
                        var mainItem = Ext.Viewport.getItems().items[0];
                        Ext.Viewport.setActiveItem(mainItem);

                    }

                },

                title: 'Карточка тендера',
                store: {
                    fields: ['name', 'price', 'regionnames', 'subcategory', 'documents', 'lots'], 

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

                //itemTpl: '<h1>{name}</h1><tpl for="documents">{fileName}</tpl>',
                itemTpl: 
                            '<div class="tenderCard">' + 
                                '<div class="block">' +
                                    '<div class="name">{name}</div>' + 
                                    '<div class="region"><span class="region_small">{regionnames}</span></div>' +
                                    '<div class="price">{price} руб.</div>' + 
                                '</div>' + 
                                '<div class="block">' +
                                    '<div class="documents"><span class="doc_title">Документы:</span><ul><tpl for="documents"><li><a href="{url}">{fileName:ellipsis(30, true)}</a></li></tpl></ul></div>' +
                                '</div>' + 
                                '<div class="block">' +
                                    '<div class="lots">' +
                                        '<span class="lot_title">Лоты:</span>' +
                                        '<table class="lot_table"><tpl for="lots"><tr><td class="lot_table_td">{subject:ellipsis(22, true)}</td><td class="lot_table_td" class="lot_tr_right" align="right">{price}</td></tr></tpl></table>' +
                                    '</div>' +
                                   // '<div class="lots"><span class="lot_title">Лоты:</span><ul><tpl for="lots"><li class="lot_item">{ordinalNumber}. {subject:ellipsis(22, true)} - <span class="price">{price} руб.</span></li></tpl></ul></div>' + 
                                '</div>' +
                            '</div>'
            }
        ]
    }
});
