


// var ordersreceived_url = "http://192.168.43.140:4444/"; // rasberry ...
var ordersreceived_url = "http://127.0.0.1:4444/";
// var ordersreceived_url = "http://192.168.43.23:4444/" // laptop


var seconds = 1000;

function CreateDynamicList (listoflists)
{
    /*
    This creats the following stracture

        <ul id="myUL">
        <span class="headings">(holds title)
        <ul class="nested">
        <li class="customer-list">
    */
    // create elements
    let HtmlDiv = document.getElementById("plascon-customer-list-div");
    let outer_ul =  document.createElement('ul');
    let title_span = document.createElement('span');
    let sub_title_label = document.createElement('label'); 
    let nested_ul = document.createElement('ul');
    let customer_li_list = document.createElement('li');
    let br = document.createElement('br');
    let br2 = document.createElement('br');

    let stringfromlist;

    // set attribes to css
    outer_ul.setAttribute('id','myUL');
    sub_title_label.setAttribute('class','sub-title-headings ')
    title_span.setAttribute('class','headings view_font_styles');
    nested_ul.setAttribute('class','nested view_font_styles')
    customer_li_list.setAttribute('class','customer-list view_font_styles')

    // server object ===> re.NAME,re.ORDERNUMBER,re.TOTAL,re.CONTACT,re.DATE,re.LIST
    // split to customer attributs
    name = listoflists[0]
    ordernumember = listoflists[1]
    total = listoflists[2]
    contact = listoflists[3]
    orderdate = listoflists[4]
    customerlist = listoflists[5];

    // set text to created elements
    title_span.innerHTML = name +" | "+ ordernumember;
    sub_title_label.innerHTML =  contact +" | "+ orderdate+" | "+total 
    stringfromlist = customerlist.toString();// convert to string 
    formatedlist =  stringfromlist.replace(/×/g,"<br>") //insert a <br> tag note:: × is different 4m x
    customer_li_list.innerHTML = formatedlist;
    
    // console.log(outer_ul);
    // console.log(title_span);
    // console.log(nested_ul);
    // console.log(customer_li_list);

    // appendChildrens to html
    // sub_title_label.appendChild(customer_li_list); // close li
    // nested_ul.appendChild(sub_title_label) // close label
    // title_span.appendChild(nested_ul); //close ul
    // outer_ul.appendChild(title_span); // close span
    // HtmlDiv.appendChild(outer_ul); // close ul
     
    
    outer_ul.appendChild(br);// close br
    customer_li_list.appendChild(sub_title_label); // close sub title
    title_span.appendChild(customer_li_list); // close label
    outer_ul.appendChild(title_span); // close span
    HtmlDiv.appendChild(outer_ul); // close ul
}


function ShowCloseDynamicDropdownList (id) 
{
    let x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {x.className += " w3-show";} 
    else {x.className = x.className.replace(" w3-show", "");}

}

function CreateDynamicDropdownList  (listoflists,id,OriginalHtmlDiv,htmldiv)
{
    let OriginalDiv = document.getElementById(OriginalHtmlDiv)
    let HtmlDiv = document.getElementById(htmldiv);
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
    DropdownContentDiv.setAttribute('id','contentlist'+(id));
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
    OriginalDiv.appendChild(HtmlDiv);
}



/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           RECIEVED ORDERS
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

// ==================
function FetchOrdersReceivedAllData (endpointurl,OriginalHtmlDiv,htmldiv)
{
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url + endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length){alert("No results found")}
            else
                {
                    let listindex = 0;
                    for (id=0; id<=results.length;id++)
                    {
                        let currentlistindex = results[listindex]
                        // CreateDynamicList (currentlistindex)
                        CreateDynamicDropdownList (currentlistindex,id,OriginalHtmlDiv,htmldiv)
                        listindex ++;
                    }
                }
        }
        req.send();
    // setTimeout(save_show_all_data, seconds)
}


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

// ============================= >>> date date
function fetch_subdealer_orders_received_date_date_data ()
{
    document.getElementById("subdealer-orders-received-loader-date-date").style.display="block";
    setTimeout(subdealer_orders_view_by_date_date,loader_seconds)
}
function subdealer_orders_view_by_date_date ()
{
    document.getElementById("subdealer-orders-received-loader-date-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+'subdealer_orders_view_by_date_date',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('subdealer-date-date-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
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
        let date = new FormData(document.getElementById('orders-date-date-form'));
        req.send(date);        
        setTimeout(save_date_date_data,seconds);
}

function fetch_subdealer_orders_received_from_to_all_data () 
{
    document.getElementById("subdealer-orders-received-loader-from-to-all").style.display="block";
    setTimeout(subdealer_orders_from_to_all,loader_seconds)
}
function subdealer_orders_from_to_all ()
{
    document.getElementById("subdealer-orders-received-loader-from-to-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+'subdealer_orders_from_to_all',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('subdealer-from-to-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
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
                            for (let table_data = 1; table_data< (results[table_row].length-1);++table_data)
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
        let date =  new FormData(document.getElementById('subdealer-from-to-form'));
        req.send(date);        
        setTimeout(save_from_to,seconds);
}
// ======================================

// +++++++++++++++++++++++++++++++++++++++>>>
function fetch_subdealer_orders_received_last_week_all_data ()
{
    document.getElementById("subdealer-orders-received-loader-last-week-all").style.display="block";
    setTimeout(subdealer_orders_last_week_all,loader_seconds)
}

function subdealer_orders_last_week_all ()
{
    document.getElementById("subdealer-orders-received-loader-last-week-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+'subdealer_orders_last_week_all_data',true)
    req.onload = function ()
        {
            document.getElementById("subdealer-orders-received-loader-last-week-all").style.display="none";
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('subdealer-last-week-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
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
                            for (let table_data = 1; table_data< (results[table_row].length-1);++table_data)
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
        let date = document.getElementById('last-week-all-grand-child-div');
        req.send(date);        
        setTimeout(save_show_last_week_all,seconds);
}

function fetch_subdealer_orders_received_this_month_all_data ()
{
    document.getElementById("subdealer-orders-received-loader-this-month-all").style.display="block";
    setTimeout(subdealer_orders_this_month_all,loader_seconds)
}

function subdealer_orders_this_month_all ()
{
    document.getElementById("subdealer-orders-received-loader-this-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+'subdealer_orders_this_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('subdealer-this-month-all-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
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
                            // class="w3-hover-black"
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            // tr.className='js_table';
                            //draw td
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 

                                    // put in data
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let date = document.getElementById('this-month-all-grand-child-div');
        req.send(date);        
        setTimeout(save_show_this_month_all,seconds);
}


// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_subdealer_orders_received_last_month_all_data ()
{
    document.getElementById("subdealer-orders-received-loader-last-month-all").style.display="block";
    setTimeout(subdealer_orders_last_month_all,loader_seconds)
}

function subdealer_orders_last_month_all ()
{
    document.getElementById("subdealer-orders-received-loader-last-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', ordersreceived_url+'subdealer_orders_last_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('subdealer-last-month-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name","Avenue","Location", "Contacts","Price","Date","Time","Staff"]);
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
        let date = document.getElementById('last-month-all-grand-child-div');
        req.send(date);        
        setTimeout(save_show_last_month_all,seconds);
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