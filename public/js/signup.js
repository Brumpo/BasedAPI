$(document).ready(()=>{
  $('#signup').on('submit',(event)=>{
    event.preventDefault()
    let username = $('#email').val().toLowerCase()
    let password1 = $('#pass1').val()
    let password2 = $('#pass2').val()
    let firstName = $('#firstName').val()
    let lastName = $('#lastName').val()
    if(password1!=password2)
    {Materialize.toast('Passwords must match!')}
    else{
      $.ajax({
      url: `/user`,
      type: 'POST',
      data: {
        email: username,
        password: password1,
        firstName: firstName,
        lastName: lastName
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
   }
  })
})
