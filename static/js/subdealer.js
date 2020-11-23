


// var ordersreceived_url = "http://192.168.43.140:4444/"; // rasberry ...
var ordersreceived_url = "http://127.0.0.1:4444/";
// var ordersreceived_url = "http://192.168.43.23:4444/" // laptop


var seconds = 1000;

function HideAllVeiwDivs ()
{
    // =============> SUBDEALER 
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none'
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    // grand child
    document.getElementById('plascon-subdealer-by-date-today-grand-child-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-date-div').style.display = 'none';
}

// ==================>> SUBDEALER 
function ShowPlasconSubdealerViewAllDiv ()
{
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'block';

}

function ShowPlasconSubdealerOrdersByDateDiv ()
{
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='block';

}

function ShowPlasconSubdealerOrdersByFromToDiv ()
{
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='block';
}
function ShowPlasconSubdealerOrdersByLastWeekDiv ()
{
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'block';
}

function ShowPlasconSubdealerOrdersByThisMonthDiv ()
{
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'block';
}

function ShowPlasconSubdealerOrdersByLastMonthDiv ()
{
    document.getElementById('plascon-subdealer-view-all-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-date-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-from-to-div').style.display='none';
    document.getElementById('plascon-subdealer-orders-by-last-week-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-this-month-div').style.display = 'none';
    document.getElementById('plascon-subdealer-orders-by-last-month-div').style.display = 'block';
}

// Grand children
function ShowPlasconSubdealerByDateTodayGrandChildDiv ()
{document.getElementById('plascon-subdealer-orders-by-date-date-div').style.display = 'none';document.getElementById('plascon-subdealer-by-date-today-grand-child-div').style.display = 'block';}

function ShowPlasconSubdealerOrdersByDateDateDiv ()
{document.getElementById('plascon-subdealer-by-date-today-grand-child-div').style.display = 'none';document.getElementById('plascon-subdealer-orders-by-date-date-div').style.display = 'block';}



function DisplayUploadedImage ( event, id )
{   
    let image = document.getElementById(id);
	image.src = URL.createObjectURL(event.target.files[0]);
}

function ShowCloseDynamicDropdownList (id) 
{
    let x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {x.className += " w3-show";} 
    else {x.className = x.className.replace(" w3-show", "");}
}

function CreateDynamicDropdownListWithArrayLengthOfSix  (listoflists,id,OuterHtmlDiv)
{
    let HtmlDiv = document.getElementById(OuterHtmlDiv);
    let DivContainer = document.createElement('div');
    let DropdownHoverDiv = document.createElement('div');
    let ButtonTxt = document.createElement('button') //document.createElement('label');
    let DropdownContentDiv = document.createElement('div')
    let ListTxt = document.createElement('li');
    let LabelTxt = document.createElement('label');

    // Set attributs ...
    DivContainer.setAttribute('class','w3-container')
    ButtonTxt.setAttribute('class','button-dropdown-content-js')
    DropdownHoverDiv.setAttribute('class','w3-dropdown-click'); //w3-dropdown-hover
    DropdownContentDiv.setAttribute('class','dropdown-content-js')
    // DropdownContentDiv.setAttribute('id','contentlist'+(id));
    DropdownContentDiv.setAttribute('id',OuterHtmlDiv + (id));
    ListTxt.setAttribute('class','w3-bar-item w3-button')
    LabelTxt.setAttribute('class','label-txt-js')
    contentid = DropdownContentDiv.id
    ButtonTxt.setAttribute('onclick' , 'ShowCloseDynamicDropdownList("'+contentid+'")')

    // Define variables from array
    name = listoflists[0]
    number = listoflists[1]
    amount = listoflists[2]
    status = listoflists[3]
    date = listoflists[4]
    list = listoflists[5]


    // Assign content of each to hmtl
    stringfromlist = list.toString();// convert to string 
    formatedlist =  stringfromlist.replace(/×/g,"<br>") //insert a <br> tag note:: × is different 4m x

    ButtonTxt.innerHTML = name +" | " +amount;
    ListTxt.innerHTML = formatedlist
    LabelTxt.innerHTML = date+" | "+number+ " | "+ amount +" | "+status

    // appendChild to ....
    ListTxt.appendChild(LabelTxt);
    DropdownContentDiv.appendChild(ListTxt)
    ButtonTxt.appendChild(DropdownContentDiv);
    DropdownHoverDiv.appendChild(ButtonTxt);
    DivContainer.appendChild(DropdownHoverDiv);
    HtmlDiv.appendChild(DivContainer);
    // OriginalDiv.appendChild(HtmlDiv);
}


function CreateDynamicDropdownListWithArrayLengthOfNine  (listoflists,id,OuterHtmlDiv)
{
    let HtmlDiv = document.getElementById(OuterHtmlDiv);
    let DivContainer = document.createElement('div');
    let DropdownHoverDiv = document.createElement('div');
    let ButtonTxt = document.createElement('button') //document.createElement('label');
    let DropdownContentDiv = document.createElement('div')
    let ListTxt = document.createElement('li');
    let LabelTxt = document.createElement('label');

    // Set attributs ...
    DivContainer.setAttribute('class','w3-container')
    ButtonTxt.setAttribute('class','button-dropdown-content-js')
    DropdownHoverDiv.setAttribute('class','w3-dropdown-click'); //w3-dropdown-hover
    DropdownContentDiv.setAttribute('class','dropdown-content-js')
    DropdownContentDiv.setAttribute('id',OuterHtmlDiv + (id));
    ListTxt.setAttribute('class','w3-bar-item w3-button')
    LabelTxt.setAttribute('class','label-txt-js')
    contentid = DropdownContentDiv.id
    ButtonTxt.setAttribute('onclick' , 'ShowCloseDynamicDropdownList("'+contentid+'")')

    // Define variables from array
    name = listoflists[1]
    number = listoflists[5]
    amount = listoflists[3]
    status = listoflists[7]
    date = listoflists[4]
    list = listoflists[6]


    // Assign content of each to hmtl
    stringfromlist = list.toString();// convert to string 
    formatedlist =  stringfromlist.replace(/×/g,"<br>") //insert a <br> tag note:: × is different 4m x

    ButtonTxt.innerHTML = name +" | " +amount;
    ListTxt.innerHTML = formatedlist
    LabelTxt.innerHTML = date+" | "+number+ " | "+ amount +" | "+status

    // appendChild to ....
    ListTxt.appendChild(LabelTxt);
    DropdownContentDiv.appendChild(ListTxt)
    ButtonTxt.appendChild(DropdownContentDiv);
    DropdownHoverDiv.appendChild(ButtonTxt);
    DivContainer.appendChild(DropdownHoverDiv);
    HtmlDiv.appendChild(DivContainer);
}

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           POSTING REGISTRATION DATA
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

function SubmiteRegistrationData ()
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
                url : ordersreceived_url + 'register_painter_registration_post',
                type : 'POST'


    });
}





/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED ORDERS
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

// ============================= View Prices ...........

function fetch_subdealer_names_and_prices (endpointurl, tabletbody, htmldiv)
{
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+ endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById(tabletbody);
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Name","20 Ltrs","4 Ltrs", "1 Ltr","0.5 Ltr"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let data = document.getElementById(htmldiv);
        req.send(data); 
        // setTimeout (save_by_date_today_data,seconds);       
}


// ==================
function FetchOrdersDataFromServerWithArrayLengthOfSix (endpointurl,OuterHtmlDiv)
{
    /*
        Called on ::
            outer-plascon-view-by-all-div
            outer-plascon-view-by-date-div
            outer-plascon-view-by-date-today-div
            outer-plascon-view-by-this-month-div
            outer-plascon-view-by-last-month-div

    */
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    let listindex = 0;
                    for (id=0; id<=results.length;id++)
                    {
                        let currentlistindex = results[listindex]
                        CreateDynamicDropdownListWithArrayLengthOfSix (currentlistindex,id,OuterHtmlDiv)
                        listindex ++;
                    }
                }
        }
        req.send();
    // setTimeout(save_show_all_data, seconds)
}

function FetchFormOrdersDataFromServerWithArrayLengthOfSix_Date (endpointurl,OuterHtmlDiv,OrdersFormId)
{
    /*
        Called on 
            outer-plascon-view-by-date-date-div only
                coz of a form 
    */
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    let listindex = 0;
                    for (id=0; id<=results.length;id++)
                    {
                        let currentlistindex = results[listindex]
                        CreateDynamicDropdownListWithArrayLengthOfSix (currentlistindex,id,OuterHtmlDiv)
                        listindex ++;
                    }
                }
        }
        let date = new FormData(document.getElementById(OrdersFormId));
        req.send(date);
}


function FetchFormOrdersDataFromServerWithArrayLengthOfNine (endpointurl,OuterHtmlDiv,OrdersFormId)
{
    /*
        Called on
            outer-plascon-view-by-from-to-div
            
    */
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    let listindex = 0;
                    for (id=0; id<=results.length;id++)
                    {
                        let currentlistindex = results[listindex]
                        CreateDynamicDropdownListWithArrayLengthOfNine (currentlistindex,id,OuterHtmlDiv)
                        listindex ++;
                    }
                }
        }
        let date = new FormData(document.getElementById(OrdersFormId));
        req.send(date);
}


function FetchFormOrdersDataFromServerWithArrayLengthOfNine_LastWeek (endpointurl,OuterHtmlDiv)
{
    /*
        Called on
            outer-plascon-view-by-last-week-div
            
    */
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    document.getElementById(OuterHtmlDiv).innerText = "";
                    let listindex = 0;
                    for (id=0; id<=results.length;id++)
                    {
                        let currentlistindex = results[listindex]
                        CreateDynamicDropdownListWithArrayLengthOfNine (currentlistindex,id,OuterHtmlDiv)
                        listindex ++;
                    }
                }
        }
        req.send(date);
}



// ========================================================================
// On storage
function save_show_all_data ()
{
    // let data = document.getElementById ("subdealer-show-all-tbody").innerHTML;
    let data = document.getElementById ("plascon-customer-list-div").innerHTML;

    localStorage.setItem("subdealerall", data);
    console.log("data saved well");
}

function save_by_date_today_data ()
{
    let data = document.getElementById ("subdealer-date-today-tbody").innerHTML;
    localStorage.setItem("subdealerdatetoday", data);
}
function save_date_date_data ()
{
    let data = document.getElementById ("subdealer-date-date-tbody").innerHTML;
    localStorage.setItem("subdealerdatedate", data);
}

function save_from_to ()
{
    let data = document.getElementById("subdealer-from-to-all-tbody").innerHTML;
    localStorage.setItem("subdealerfromtoall",data);
}

function save_show_last_week_all ()
{
    let data = document.getElementById ("subdealer-last-week-all-tbody").innerHTML;
    localStorage.setItem("subdealerlstweekall", data);
}

function save_show_this_month_all ()
{
    let data = document.getElementById ("subdealer-show-all-tbody").innerHTML;
    localStorage.setItem("subdealerdismthall", data);
}

function save_show_last_month_all ()
{
    let data = document.getElementById ("subdealer-last-month-all-tbody").innerHTML;
    localStorage.setItem("subdealerlstmthall", data);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Load_subdealer_Offline_Data () 
{
    document.getElementById("plascon-customer-list-div").innerHTML = localStorage.getItem("subdealerall");
    // document.getElementById("subdealer-date-today-tbody").innerHTML = localStorage.getItem("subdealerdatetoday");
    // document.getElementById("subdealer-date-date-tbody").innerHTML = localStorage.getItem("subdealerdatedate");
    // document.getElementById("subdealer-from-to-all-tbody").innerHTML = localStorage.getItem("subdealerfromtoall")
    // document.getElementById("subdealer-last-week-all-tbody").innerHTML = localStorage.getItem("subdealerlstweekall");
    // document.getElementById("subdealer-this-month-all-tbody").innerHTML = localStorage.getItem("subdealerdismthall");
    // document.getElementById("subdealer-last-month-all-tbody").innerHTML = localStorage.getItem("subdealerlstmthall");
}


function dolist ()
{
arr = [ "WeatherGuard Black 20ltrs 30 285000 8,550,000\n× WeatherGuard2 Black 20ltrs 30 285000 8,550,000\n× Vinyl Matt Lollipop 4ltrs 10 45000 450,000\n×", "Henry2", "2020-10-28" ]
customer_list = arr[0]
list_header = arr[1] + " |" + " "+ arr[2]

document.getElementById("list-header").innerHTML = list_header
// console.log(customer_list)

document.getElementById("customer-list").innerHTML = customer_list


}
