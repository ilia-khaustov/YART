maria.ElementView.subclass(YART, 'ExerciseView', {
	uiActions: {
		'input .regexpString' : 'onExpressionChanged',
		'DOMSubtreeModified .output' : 'onOutputChanged'
	},
	properties: {
		buildData: function() {
			var model = this.getModel();
			this.find('.input').innerHTML = 
				YART.escapeHTML(model.getInput());
			this.find('.outputDesired').innerHTML = 
				YART.escapeHTML(model.getOutput());
			aristocrat[model.isReady() ? 'addClass' : 'removeClass'](
				this.find('.Exercise'), 'ExerciseReady')
		},
		update: function() {
			this.buildData();
		},
		setResult: function(result) {
			this.find('.output').innerHTML = 
				YART.escapeHTML(result);
		}
	}
})