maria.SetModel.subclass(YART, "ExercisesListModel", {
	properties: {
		isAllReady: function() {
			return (this.size > 0) &&
				this.every(function(exercise) {
					return exercise.isReady();
				});
		}
	}
})