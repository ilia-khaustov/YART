maria.ElementView.subclass(YART, "JSONLoaderView", {
	uiActions: {
		'click #JSONLoad': 'onJSONLoadClick'
	},
	properties: {
		getJSONUrl: function() {
			return this.find('.JSONUrl').value;
		},
		buildData: function() {
			this.find('.JSONUrl').value = this.getModel().getJSONUrl();
		}
	}
})