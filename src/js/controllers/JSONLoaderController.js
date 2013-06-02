maria.Controller.subclass(YART, 'JSONLoaderController', {
	properties: {
		onJSONLoadClick: function(evt) {
			this.getModel().setJSONUrl(this.getView().getJSONUrl());
			var jsonURL = this.getModel().getJSONUrl();

			var exercisesJSON = (function() {
		        var json = null;
		        $.ajax({
		            'async': false,
		            'global': false,
		            'url': jsonURL,
		            'dataType': "json",
		            'success': function (data) {
		                json = data;
		            }
		        });
		        return json;
		    })();



		    var exercisesListModel = new YART.ExercisesListModel();

		    for (var key in exercisesJSON) {
		        exercisesListModel.add(
		                YART.ExerciseModel.fromJSON(exercisesJSON[key])
		            );
		    }

		    document.body.appendChild(
		        (new YART.ExercisesListView(exercisesListModel)).build()
		        );
		}
	}
})