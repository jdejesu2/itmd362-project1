$('#user').on("submit", function (e){

  // declares variables
  var entry = {email: false, phone: false, birthday: false, purpose: false};

  var name = $('#name').val();
  var namefilter =  /^([a-zA-Z ]){2,30}$/;

  var email = $('#email').val();
  var validfilter =/.+@.+/;

  var phone = $('#phone').val();
  var phonefilter = /\d{3}.+\d{3}.+\d{4}/;

  var birthday = $('#birthday').val();

  var purpose = document.getElementById("purpose");
  var purposefilter = purpose.value.length >= 10;

  e.preventDefault();

  if (!namefilter.test(name))
  {
    console.log('not valid first and last name');
    $('#nameneeded').remove();
    $('#user').append('<li id="nameneeded">You need to enter a first and last name</li>');

    return false;
  }
  else
  {
    $('#nameneeded').remove();
    entry.name= true;
  }

  // email validation selections
  if (!validfilter.test(email))
  {
    console.log('not valid email');
    $('#emailneeded').remove();
    $('#user').append('<li id="emailneeded">You need to enter a vaild email</li>');

    return false;
  }
  else
  {
    $('#emailneeded').remove();
    entry.email= true;
  }

  // phone validation
  if (!phonefilter.test(phone))
  {
    console.log('not valid phone number');
    $('#phonenumberneeded').remove();
    $('#user').append('<li id="phonenumberneeded">You need to enter a vaild phone number</li>');

    return false;
  }
  else
  {
    $('#phonenumberneeded').remove();
    entry.phone= true;
  }

  // birthday validation
  if (birthday === "")
  {
    console.log('not valid birthday');
    $('#nobirthday').remove();
    $('#user').append('<li id="nobirthday">Please enter an age ): </li>');
    return false;
  }
  else
  {
    $('#nobirthday').remove();
    entry.birthday= true;
  }

  // charater vaildation
  if (!purposefilter)
  {
    console.log('not enough charaters');
    $('#purposeneeded').remove();
    $('#user').append('<li id="purposeneeded">Its a minimum of 10 charaters</li>');

    return false;
  }
  else
  {
    $('#purposeneeded').remove();
    entry.purpose= true;
  }


  // if everything checks out (:
  if(entry.name === true && entry.email === true && entry.phone === true &&
    entry.birthday === true && entry.purpose === true)
  {
    $('#emailneeded').remove();
    $('#phonenumberneeded').remove();
    $('#nobirthday').remove();
    $('#purposeneeded').remove();
    $('#nameneeded').remove();

    $('#user').append('<h2 id="endmessage" >Thank you for applying! We will be emailing about information soon!</h2>');
  }

});
