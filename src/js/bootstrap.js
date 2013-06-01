(function() {
        
    var exercisesJSON = {
        1 : {
            "input" : "Миша",
            "output" : "Мш"
        },
        2 : {
            "input" : "огурец",
            "output" : "грц"
        }
    };

    for (var key in exercisesJSON) {
        var view = new YART.ExerciseView(
                YART.ExerciseModel.fromJSON(exercisesJSON[key])
            );
        document.body.appendChild(view.build());
    }

}());