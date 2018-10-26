
$('.submit').on('click', function (event) {
console.log("it works");
    const userInfo = {
        name: $("#name").val(),
        photo: $("#photo").val(),
        scores: [
            $("#question1").val(),
            $("#question2").val(),
            $("#question3").val(),
            $("#question4").val(),
            $("#question5").val(),
            $("#question6").val(),
            $("#question7").val(),
            $("#question8").val(),
            $("#question9").val(),
            $("#quesstion10").val()
        ]
        }

        //post ajax call ('/api/employess')

    });