maria.ElementView.subclass(YART, 'ExerciseView', {
	uiActions: {
		'input .patternFind' : 'onPatternFindChanged',
		'input .patternReplace' : 'onPatternReplaceChanged',
		'DOMSubtreeModified .output' : 'onOutputChanged'
	},
	properties: {
		buildData: function() {
			var model = this.getModel();
			this.find('.input').innerHTML = 
				model.getInput();
			this.find('.outputDesired').innerHTML = 
				model.getOutput();
			aristocrat[model.isReady() ? 'addClass' : 'removeClass'](
				this.find('.Exercise'), 'ExerciseReady')
		},
		update: function() {
			this.buildData();
		},
		setResult: function(result) {
			this.find('.output').innerHTML = 
				result + "";
		}
	}
})