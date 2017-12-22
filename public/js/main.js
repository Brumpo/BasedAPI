$(document).ready(()=>{
  $('#login').on('submit',(event)=>{
    event.preventDefault()
    let username = $('#user').val().toLowerCase()
    let password = $('#pass').val()
    $.ajax({
      url: `/user`,
      type: 'POST',
      data: {
        email: username,
        password: password
      },
      success: function(data) {
        console.log(data);
        localStorage.setItem("user", data.id)
        window.location.href = "home.html"
      },
      error: function(data) {
        console.log('error');
        Materialize.toast('Please check your user name and / or password and try again', 6000)
      },
    })
  })
})
