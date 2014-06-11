Ext.define('InitProMobile.controller.MainController', {

	extend: 'Ext.app.Controller',

	config: {
		views: [
			'InitProMobile.view.Main'
		],

		control: {
			tenderList: {
				select: 'onSelectTender'
			}
		},


		refs: {
            tenderList: 'list'
        }


	},


	onSelectTender: function(list, record) {
		window.console.log(record);
		window.console.log(record.get('Id'));
		//console.log(Ext.Viewport.getItems().items); return;
		//var ViewportItems = Ext.Viewport.getItems().items;

		//console.log(record);
		//var cardView
		/*
		Ext.iterate(ViewportItems, function(item) {
			console.log(item);
		})

		if( !cardView ) {
			cardView = Ext.create('InitProMobile.view.Card');
		}
		*/
		var cardView = Ext.create('InitProMobile.view.Card');
		Ext.Viewport.add(cardView);
		Ext.Viewport.setActiveItem(cardView);

		var cardStore = cardView.down('dataview').getStore();
		//cardStore.getProxy().extraParams = { tenderId: record.get('Id') };
		cardStore.load({
			params: { tenderId: record.get('Id') }
		});

		

	}

});