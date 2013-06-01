(function() {
        
    var exercisesJSON = {
        1 : {
            "input" : "Rumpelstiltskin",
            "output" : "Rmplstltskn"
        },
        2 : {
            "input" : "I am not a jerk",
            "output" : "I am a jerk"
        },
        3 : {
            "input" : "Булочка",
            "output" : "Белочка"
        }
    };

    for (var key in exercisesJSON) {
        var view = new YART.ExerciseView(
                YART.ExerciseModel.fromJSON(exercisesJSON[key])
            );
        document.body.appendChild(view.build());
    }

}());