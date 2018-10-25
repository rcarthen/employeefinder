
const updatePost = function (post, employee) {
    $.ajax({
      method: 'POST',
      url: `/api/employees`,
      data: post
    })
      .then(function() {
        //window.location.replace('/blog');
      });
  }



  const getPost= function(get, employee){
$ajax({
    method: 'GET'
    url: '/api/employees',


 





//$("").val(); .onclick submission