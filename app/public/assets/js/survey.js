
$("#submit").on("click", function (event) {

    event.preventDefault()
    console.log("click works");

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
            $("#question10").val()

        ]


    }
    console.log(userInfo)
        $.ajax({

            url: "/api/employees",
            method: "POST",
            data:userInfo

        
        }).then(function(response){
            $("#matchname").text(response.name);
            $("#matchpic").attr("src", response.photo);
        })
    

    });












