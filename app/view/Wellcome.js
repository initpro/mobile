Ext.define('InitProMobile.view.Wellcome', {
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
                title: 'Главная',
                store: {
                    autoLoad: true,
                    fields: ['allCount', 'plannedCount'],

                    proxy: {
                        type: 'ajax',
                        url: '/api/tender/getFirstInfo',
                        reader: {
                            type: 'json'
                        }
                    }
                },

                itemTpl: '<div class="wellcome"><div class="image"><img src="/assets/base/images/logo/logo_0.png" /></div><div class="title">Добро пожаловать на сайт информационно аналитической системы InitPro. Здесь вы найдете полную информацию обо всех коммерческих тендерах , а также государственных закупках Российской Федерации, и всегда сможете скачать всю необходимую для участия в них документацию.</div><div><table width="100%" class="table_1"><tr><td colspan="2">Количество тендеров</td><tr><tr><td width="50%">Всего</td><td width="50%">Планируемые</td></tr><tr><td>{allCount}</td><td>{plannedCount}</td></tr></table></div></div>'
            }
        ]
    }
});
