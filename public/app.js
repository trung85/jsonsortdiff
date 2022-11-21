$(document).ready(function () {

    var qsp = 'json1',
        para = getUrlParameter(qsp);

    console.log(para);

    $("#t1").html("Hello, World!");
    $("#t2").html("Hello, World!");
});
