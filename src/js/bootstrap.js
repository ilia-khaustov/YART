(function() {
        
    var exercisesJSON = {
        1 : {
            "input" : "qwertyui",
            "output" : "er"
        },
        2 : {
            "input" : "A b c dd e",
            "output" : "dd"
        },
        3 : {
            "input" : "123456789",
            "output" : "56789"
        }
    };

    for (var key in exercisesJSON) {
        var view = new YART.ExerciseView(
                YART.ExerciseModel.fromJSON(exercisesJSON[key])
            );
        document.body.appendChild(view.build());
    }

}());