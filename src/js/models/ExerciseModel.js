maria.Model.subclass(YART, 'ExerciseModel', {
	properties: {
		// Input string to test regexp on
		_input: '',
		// Output string that should be got
		_output: '',
		// Current regexp as string
		_regexpString: '',
		// Status of exercise
		_isReady: false,

		setInputOutput: function(input, output) {
			this._input = "" + input;
			this._output = "" + output;
		},

		getInput: function() {
			return this._input;
		},

		getOutput: function() {
			return this._output;
		},

		getRegExp: function() {
			return this._regexpString;
		},

		setRegExp: function(newRegexpString) {
			this._regexpString = "" + newRegexpString;
		},

		isReady: function() {
			return this._isReady;
		},

		setReady: function(ready) {
			this._isReady = !!ready;
			this.dispatchEvent({type: 'change'});
		}

	}
});

YART.ExerciseModel.fromJSON = function(exerciseJSON) {
	var model = new YART.ExerciseModel();
	model._input = exerciseJSON.input;
	model._output = exerciseJSON.output;
	return model;
};