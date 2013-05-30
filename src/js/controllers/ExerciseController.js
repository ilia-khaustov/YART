maria.Controller.subclass(YART, 'ExerciseController', {
	properties: {

		onExpressionChanged: function(evt) {
			this.getModel().setRegExp(evt.srcElement.value);
			var re = new RegExp(this.getModel().getRegExp(), "");
			var result = re.exec(this.getModel().getInput());
			result = (result + "" == "null" || result == "" ? "..." : result + "");
			this.getView().setResult(result);
		},

		onOutputChanged: function(evt) {
			this.getModel().setReady(
				evt.srcElement.data == this.getModel().getOutput());
		}
	}
})