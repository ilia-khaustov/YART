(function() {
    var exerciseModel = new YART.ExerciseModel();
    exerciseModel.setInputOutput("qwerty", "erty");

    var exerciseModel2 = new YART.ExerciseModel();
    exerciseModel2.setInputOutput("asd123fg", "123");

    var view = new YART.ExerciseView(exerciseModel);
    document.body.appendChild(view.build());

    var view2 = new YART.ExerciseView(exerciseModel2);
    document.body.appendChild(view2.build());
}());