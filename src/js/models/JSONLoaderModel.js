maria.Model.subclass(YART, "JSONLoaderModel", {
	properties: {
		_jsonUrl: "https://dl.dropboxusercontent.com/u/45499397/task.json",
		getJSONUrl: function() {
			return this._jsonUrl;
		},
		setJSONUrl: function(url) {
			this._jsonUrl = url;
		}
	}
});