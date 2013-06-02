(function() {

    var jsonLoaderView = new YART.JSONLoaderView(new YART.JSONLoaderModel());
    $('body').append(jsonLoaderView.build());

}());