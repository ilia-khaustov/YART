maria.SetView.subclass(YART, 'ExercisesListView', {
	properties: {
		createChildView: function(exerciseModel) {
			return new YART.ExerciseView(exerciseModel);
		}
	}
});