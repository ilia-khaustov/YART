maria.ElementView.subclass(YART, 'ExerciseView', {
	uiActions: {
		'input .patternFind' : 'onPatternFindChanged',
		'input .patternReplace' : 'onPatternReplaceChanged'
	},
	properties: {

		buildData: function() {
			var model = this.getModel();
			this.find('.input').innerHTML = 
				model.getInput();
			this.find('.outputDesired').innerHTML = 
				model.getOutput();
			this.getController().setResult();
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