
var all_names_url = "http://127.0.0.1:4444/";
// var all_names_url =  "http://172.105.158.108:4444/"


function check_sadolin_staffs_status (html_id)
{
    Load_sadolin_staffs (html_id);
    
    // if (navigator.onLine){Load_sadolin_staffs (html_id);}
    // else {ERROR = "Staffs Not Loaded Connect to Network "; alert (ERROR)}
}

function Load_sadolin_staffs (html_id)
{
    let staff_names_req = new XMLHttpRequest ();
    staff_names_req.open('post',all_names_url+'sadolin_staff_names',true);
    staff_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let staff_names = document.getElementById(html_id);
    staff_names_req.send(staff_names);
}

function view_keracolor_names_status (html_id)
{
    View_keracolor_names (html_id) ;
    // if (navigator.onLine){View_keracolor_names (html_id);} 
}

function View_keracolor_names (html_id)
{
    let keracolor_names_req = new XMLHttpRequest ();
    keracolor_names_req.open('post',all_names_url+'keracolor_names',true);
    keracolor_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText) ;
            let html_select_input = document.getElementById(html_id);
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let keracolor_names = document.getElementById(html_id);
    keracolor_names_req.send(keracolor_names);
}
