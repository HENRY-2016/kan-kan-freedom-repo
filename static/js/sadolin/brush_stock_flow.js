
/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           STOCK FLOW 
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

var brush_sf_url = "http://127.0.0.1:4444/";   
// var brush_sf_url = "http://172.105.158.108:4444/";

var seconds = 1000;
var loader_seconds = 3000;

// ======================================

function fetch_stock_flow_all_data ()
{
    document.getElementById("stock-flow-loader-all").style.display="block";
    setTimeout(stock_flow_all,loader_seconds)
}
function stock_flow_all ()
    {
        document.getElementById("stock-flow-loader-all").style.display="none";
        let req = new XMLHttpRequest();
        req.open('post', brush_sf_url+'brush_stock_flow_view_all',true)
        req.onload = function ()
            {
                let results = JSON.parse(this.responseText);
                if (! results || !results.length)
                    {
                        alert("No results found")
                    }
                else
                    {
                        let tbody = document.getElementById('stock-flow-all-tbody');
                        tbody.innerHTML = ' ';
    
                        // draw table
                        let td,tr;
                        // add table headings
                        let th_names = new Array ();
                        th_names.push(["Uname", "Name", "Size","Quatity", "Date"]);
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
            let div_tag = document.getElementById('show-all-tbody-div');
            req.send(div_tag);  
            setTimeout(save_stock_flow_all_data,seconds);      
    }

// ============================= view by name

function fetch_stock_flow_size_data ()
{
    document.getElementById("stock-flow-loader-size").style.display="block";
    setTimeout(stock_flow_name,loader_seconds)
}
function stock_flow_name ()
{
    document.getElementById("stock-flow-loader-size").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_view_by_size',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {
                    alert("No results found")
                }
            else
                {
                    let tbody = document.getElementById('stock-flow-view-by-size-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let view_by_name = new FormData(document.getElementById('stock-flow-view-by-name-form'));
        req.send(view_by_name);   
        setTimeout(save_stock_flow_view_by_size,seconds);     
}


// ============================= view by name

function fetch_stock_flow_date_today_data ()
{
    document.getElementById("stock-flow-loader-date-today").style.display="block";
    setTimeout(stock_flow_date_today,loader_seconds)
}
function stock_flow_date_today ()
{
    document.getElementById("stock-flow-loader-date-today").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_view_by_date_today',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-view-by-date-today-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let data = document.getElementById('stock-flow-view-by-date-today-div');
        req.send(data); 
        setTimeout (save_stock_flow_by_date_today_data,seconds);       
}

function fetch_stock_flow_date_date_data ()
{
    document.getElementById("stock-flow-loader-date-date").style.display="block";
    setTimeout(stock_flow_date_date,loader_seconds)
}
function stock_flow_date_date ()
{
    document.getElementById("stock-flow-loader-date-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_view_by_date_date',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-date-date-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let date = new FormData(document.getElementById('stock-flow-date-date-form'));
        req.send(date);        
        setTimeout(save_stock_flow_date_date_data,seconds);
}

// ====================================== date-date-name-tbody

function fetch_stock_flow_date_name_date_data ()
{
    document.getElementById("stock-flow-loader-date-name-date").style.display="block";
    setTimeout(stock_flow_date_name_date,loader_seconds)
}
function stock_flow_date_name_date ()
{
    document.getElementById("stock-flow-loader-date-name-date").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_by_date_date_name',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-date-date-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let date = new FormData(document.getElementById('stock-flow-date-date-name-form'));
        req.send(date);        
        setTimeout(save_stock_flow_date_date_name,seconds);
}

// ======================================

function fetch_stock_flow_from_to_all_data ()
{
    document.getElementById("stock-flow-loader-from-to-all").style.display="block";
    setTimeout(stock_flow_from_to_all,loader_seconds)
}
function stock_flow_from_to_all ()
{
     document.getElementById("stock-flow-loader-from-to-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_from_to_all',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-from-to-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size","Quatity", "Date"]);
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
                            for (let table_data = 1; table_data< (results[table_row].length);++table_data)
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
        let date = new FormData(document.getElementById('stock_flow_from-to-form'));
        req.send(date);        
        setTimeout(save_stock_flow_from_to,seconds);
}
// ======================================

function fetch_stock_flow_from_to_name_data ()
{
    document.getElementById("stock-flow-loader-from-to-name").style.display="block";
    setTimeout(stock_flow_from_to_name,loader_seconds)
}
function stock_flow_from_to_name ()
{
    document.getElementById("stock-flow-loader-from-to-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_from_to_name',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-from-to-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let date = new FormData(document.getElementById('stock-flow-from-to-name-form'));
        req.send(date);        
        setTimeout(save_stock_flow_from_to_name,seconds);
}
// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_stock_flow_last_week_all_data ()
{
    document.getElementById("stock-flow-loader-last-week-all").style.display="block";
    setTimeout(stock_flow_last_week_all,loader_seconds)
}
function stock_flow_last_week_all()
{
    document.getElementById("stock-flow-loader-last-week-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_last_week_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-last-week-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let date = document.getElementById('stock-flow-last-week-div');
        req.send(date);        
        setTimeout(save_stock_flow_last_week_all,seconds);
}


// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_stock_flow_last_week_name_data ()
{
    document.getElementById("stock-flow-loader-last-week-name").style.display="block";
    setTimeout(stock_flow_last_week_name,loader_seconds)
}
function stock_flow_last_week_name ()
{
    document.getElementById("stock-flow-loader-last-week-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_last_week_name_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-last-week-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let date = new FormData(document.getElementById('stock-flow-last-week-name-form'));
        req.send(date);        
        setTimeout(save_stock_flow_last_week_name,seconds);
}
// +++++++++++++++++++++++++++++++++++++++>>>


// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_stock_flow_this_month_all_data ()
{
    document.getElementById("stock-flow-loader-this-month-all").style.display="block";
    setTimeout(stock_flow_this_month_all,loader_seconds)
}
function stock_flow_this_month_all ()
{
    document.getElementById("stock-flow-loader-this-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_this_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-this-month-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let date = document.getElementById('stock-flow-this-month-all-grand-child-div');
        req.send(date);        
        setTimeout(save_stock_flow_this_month_all,seconds);
}

// +++++++++++++++++++++++++++++++++++++++>>>
function fetch_stock_flow_this_month_name_data ()
{
    document.getElementById("stock-flow-loader-this-month-name").style.display="block";
    setTimeout(stock_flow_this_month_name,loader_seconds)
}
function stock_flow_this_month_name ()
{
    document.getElementById("stock-flow-loader-this-month-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_this_month_by_name_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-this-month-by-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let date = new FormData(document.getElementById('stock-flow-this-month-name-form'));
        req.send(date);        
        setTimeout(save_stock_flow_this_month_by_name_data,seconds);
}


// +++++++++++++++++++++++++++++++++++++++ >>>

function fetch_stock_flow_last_month_all_data ()
{
    document.getElementById("stock-flow-loader-last-month-all").style.display="block";
    setTimeout(stock_flow_last_month_all,loader_seconds)
}
function stock_flow_last_month_all ()
{
    document.getElementById("stock-flow-loader-last-month-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_last_month_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-last-month-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let date = document.getElementById('stock-flow-last-month-all-div');
        req.send(date);        
        setTimeout(save_stock_flow_last_month_all,seconds);
}


// +++++++++++++++++++++++++++++++++++++++>>>

function fetch_stock_flow_last_month_name_data ()
{
    document.getElementById("stock-flow-loader-last-month-name").style.display="block";
    setTimeout(stock_flow_last_month_name,loader_seconds)
}
function stock_flow_last_month_name ()
{
    document.getElementById("stock-flow-loader-last-month-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_flow_last_month_name_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-flow-last-month-by-name-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Uname", "Name", "Size", "Quatity", "Date"]);
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
        let date = new FormData(document.getElementById('stock-flow-last-month-by-name-form'));
        req.send(date);        
        setTimeout(save_stock_flow_last_month_by_name_data,seconds);
}

/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           STOCK STATUS 
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

// +++++++++++++++++++++++++++++++++++++++>>>
function fetch_stock_status_all_data ()
{
    document.getElementById("stock-status-loader-all").style.display="block";
    setTimeout(stock_status_all,loader_seconds)
}
function stock_status_all ()
{
    document.getElementById("stock-status-loader-all").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_status_all_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);

            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById('stock-status-all-tbody');
                    tbody.innerHTML = ' ';
                    let td,tr;
                    let th_names = new Array ();
                    th_names.push([ "Name","One_inch", "Two inch", "Three inch","Four inch", "Five inch","Six inch"]);
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
        let date = document.getElementById('stock-status-all-grand-child-div');
        req.send(date);        
        setTimeout(save_stock_status_all,seconds);
}

// ============================= view by name
function fetch_stock_status_name_data ()
{
    document.getElementById("stock-status-loader-name").style.display="block";
    setTimeout(stock_status_name,loader_seconds)
}
function stock_status_name ()
{
    document.getElementById("stock-status-loader-name").style.display="none";
    let req = new XMLHttpRequest();
    req.open('post', brush_sf_url+'brush_stock_status_name_data',true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {
                    alert("No results found")
                }
            else
                {
                    let tbody = document.getElementById('stock-status-name-tbody');
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push([ "Name", "One_inch", "Two inch", "Three inch","Four inch", "Five inch","Six inch"]);
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
        let stock_view_by_name = new FormData(document.getElementById('stock-status-by-name-form'));
        req.send(stock_view_by_name);   
        setTimeout(save_stock_status_name,seconds);
}



/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @           SAVING DATA  ------ STORAGE
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

function save_stock_flow_all_data ()
{
    let data = document.getElementById ("stock-flow-all-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_all", data);
}
function save_stock_flow_view_by_size ()
{
    let data = document.getElementById ("stock-flow-view-by-size-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_by_size", data);
}

function save_stock_flow_by_date_today_data ()
{
    let data = document.getElementById ("stock-flow-view-by-date-today-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_date_today", data);
}
function save_stock_flow_date_date_data ()
{
    let data = document.getElementById ("stock-flow-date-date-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_date_date", data);
}
function save_stock_flow_date_date_name ()
{
    let data = document.getElementById ("stock-flow-date-date-name-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_date_date_name", data);
}

function save_stock_flow_from_to ()
{
    let data = document.getElementById("stock-flow-from-to-all-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_from_to",data);
}
function save_stock_flow_from_to_name ()
{
    let data = document.getElementById("stock-flow-from-to-name-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_from_to_name",data);
}
function save_stock_flow_last_week_all ()
{
    let data = document.getElementById ("stock-flow-last-week-all-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_last_week_all", data);
}
function save_stock_flow_last_week_name ()
{
    let data = document.getElementById ("stock-flow-last-week-name-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_last_week_name", data);
}
function save_stock_flow_this_month_all ()
{
    let data = document.getElementById ("stock-flow-this-month-all-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_dis_mth_all", data);
}
function save_stock_flow_this_month_by_name_data ()
{
    let data = document.getElementById ("stock-flow-this-month-by-name-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_dis_mth_name", data);
}
function save_stock_flow_last_month_all ()
{
    let data = document.getElementById ("stock-flow-last-month-all-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_lst_mth_all", data);
}
function save_stock_flow_last_month_by_name_data ()
{
    let data = document.getElementById ("stock-flow-last-month-by-name-tbody").innerHTML;
    localStorage.setItem("brush_stock_flow_lst_mth_name", data);
}

// STOCK STATUS
function save_stock_status_all ()
{
    let data = document.getElementById ("stock-status-all-tbody").innerHTML;
    localStorage.setItem("brush_stock_status_all", data);
}

function save_stock_status_name ()
{
    let data = document.getElementById ("stock-status-name-tbody").innerHTML;
    localStorage.setItem("brush_stock_status_name", data);
}



/*
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @
    @          LOADING OFFINE LINE DATA 
    @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
*/

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function Load_Stock_Flow_Offline_Data () 
{
    document.getElementById("stock-flow-all-tbody").innerHTML = localStorage.getItem("brush_stock_flow_all");
    document.getElementById("stock-flow-view-by-size-tbody").innerHTML = localStorage.getItem("brush_stock_flow_by_size");
    document.getElementById("stock-flow-view-by-date-today-tbody").innerHTML = localStorage.getItem("brush_stock_flow_date_today");
    document.getElementById("stock-flow-date-date-tbody").innerHTML = localStorage.getItem("brush_stock_flow_date_date");
    document.getElementById("stock-flow-date-date-name-tbody").innerHTML = localStorage.getItem("brush_stock_flow_date_date_name");
    document.getElementById("stock-flow-from-to-all-tbody").innerHTML = localStorage.getItem("brush_stock_flow_from_to")
    document.getElementById("stock-flow-from-to-name-tbody").innerHTML = localStorage.getItem("brush_stock_flow_from_to_name")
    document.getElementById("stock-flow-last-week-all-tbody").innerHTML = localStorage.getItem("brush_stock_flow_last_week_all");
    document.getElementById("stock-flow-last-week-name-tbody").innerHTML = localStorage.getItem("brush_stock_flow_last_week_name");
    document.getElementById("stock-flow-this-month-all-tbody").innerHTML = localStorage.getItem("brush_stock_flow_dis_mth_all");
    document.getElementById("stock-flow-this-month-by-name-tbody").innerHTML = localStorage.getItem("brush_stock_flow_dis_mth_name");
    document.getElementById("stock-flow-last-month-all-tbody").innerHTML = localStorage.getItem("brush_stock_flow_lst_mth_all");
    document.getElementById("stock-flow-last-month-by-name-tbody").innerHTML = localStorage.getItem("brush_stock_flow_lst_mth_name");

    // STOCK STATUS
    document.getElementById("stock-status-all-tbody").innerHTML = localStorage.getItem("brush_stock_status_all");
    document.getElementById("stock-status-name-tbody").innerHTML = localStorage.getItem("brush_stock_status_name");
}



