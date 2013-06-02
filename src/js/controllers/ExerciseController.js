maria.Controller.subclass(YART, 'ExerciseController', {
	properties: {

		setResult: function() {
			var model = this.getModel();
			var patternAndFlags = model.getPatternFind().split("/");
			var patternFind = new RegExp(patternAndFlags[0], patternAndFlags[1]);
			var patternReplace = model.getPatternReplace();
			var result = model.getInput().replace(patternFind, patternReplace);
			result = (result + "" == "null" || result == "" ? "..." : result + "");
			
			this.checkResult(result);
			this.getView().setResult(result);
		},

		onPatternFindChanged: function(evt) {
			this.getModel().setPatternFind(evt.target.value);
			this.setResult();
		},

		onPatternReplaceChanged: function(evt) {
			this.getModel().setPatternReplace(evt.target.value);
			this.setResult();
		},

		checkResult: function(result) {
			this.getModel().setReady(
				result === this.getModel().getOutput());
		}
	}
})