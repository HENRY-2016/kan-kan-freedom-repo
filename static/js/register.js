
var register_url = "http://127.0.0.1:4444/";
// var register_url = "http://192.168.43.23:4444/" // laptop


/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           POSTING REGISTRATION DATA
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

function SubmitePainterRegistrationData ()
{
    // let terms =  $('#terms').innerText
    console.log(terms)

    $.ajax({
            data :
                {
                    name : $('#name').val(),
                    date : $('#date').val(),
                    contacts : $('#contacts').val(),
                    address : $('#address').val(),
                    qn1 : $('#qn1').val(),
                    qn2 : $('#qn2').val(),
                    // terms : $('#terms').innerText
                },
                url : register_url + 'register_painter_registration_post',
                type : 'POST'


    });
}



function SubmiteSubdealerRegistrationData ()
{
    // let terms =  $('#terms').innerText
    // console.log(terms)

    $.ajax({
            data :
                {
                    method : $('#method').val(), 
                    name : $('#name').val(),
                    town : $('#town').val(),
                    contacts: $('#contacts').val(),
                    email : $('#email').val(),
                    company_num : $('#company_num').val(),
                    date : $('#date').val(),
                    location : $('#location').val(),
                    nature : $('#nature').val(),
                    capital : $('#capital').val(),
                    stock : $('#stock').val(),
                    turnover : $('#turnover').val(),
                    years : $('#years').val(),
                    bank_name : $('#bank_name').val(),
                    bank_ac : $('#bank_ac').val(),
                    director_name : $('#director_name').val(),
                    director_contact : $('#director_contact').val(),
                    director_designation : $('#director_designation').val(),
                    director_nationality : $('#director_nationality').val(),
                    referee_name : $('#referee_name').val(),
                    referee_contact : $('#referee_contact').val(),
                    referee_designation : $('#referee_designation').val(),
                    referee_nationality : $('#referee_nationality').val()
                    // terms : $('#terms').innerText
                },
                url : register_url + 'register_subdealer_registration_post',
                type : 'POST'


    });
}

