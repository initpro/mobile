Ext.define("Ext.data.writer.UrlEncode", {
	extend: "Ext.data.writer.Writer",
	alternateClassName: "Ext.data.JsonWriter",
	alias: "writer.urlencode",
 
	config: {
		allowSingle: true
	},
 
	writeRecords: function(request, data){
		var params = request.getParams(),
			allowSingle = this.getAllowSingle();
 
		if (!data || !(data.length || (allowSingle && Ext.isObject(data)))) {
			return request;
		}
 
		if (allowSingle && data && data.length === 1) {
			data = data[0];
		}
 
		request.setParams(Ext.apply(data, params || {}));
		return request;
	},
});