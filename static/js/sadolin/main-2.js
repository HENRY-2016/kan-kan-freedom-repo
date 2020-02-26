/*
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            ==============
                                            | SADOLIN GUI |
                                            ==============
                                            Mainly only on custom pages
//////////////////////////////////////////////////////////////////////////////////////////////////////

/*
+++++++++++++++++++++++++ ++
+                          +
+   SADOLIN VIEW PAGE   +
+                          + 
++++++++++++++++++++++++++++
*/
function Load_home_page () {window.location="index.html"}

function Hid_All_Divs ()
{
    // ROOT DIVS
    document.getElementById("stock-received-root-div").style.display="none";
    document.getElementById("stock-flow-root-div").style.display="none";
    document.getElementById("stock-status-root-div").style.display="none";

    // CHILD DIVS
    document.getElementById("stock-received-view-all-div").style.display ="none";
    document.getElementById("stock-received-date-div").style.display ="none";
    document.getElementById("stock-received-date-div").style.display ="none";
    document.getElementById("stock-received-last-week-div").style.display ="none";
    document.getElementById("stock-received-from-to-div").style.display ="none";
    document.getElementById("stock-received-this-month-div").style.display ="none";
    document.getElementById("stock-received-last-month-div").style.display ="none";
    // document.getElementById("stock-received-by-size-div").style.display = "none";


    document.getElementById("stock-flow-view-all-div").style.display ="none";
    document.getElementById("stock-flow-date-div").style.display ="none";
    document.getElementById("stock-flow-date-today-grand-child-div").style.display ="none";
    document.getElementById("stock-flow-date-date-grand-child-div").style.display="none";
    document.getElementById("stock-flow-last-week-div").style.display ="none";
    document.getElementById("stock-flow-from-to-div").style.display ="none";
    document.getElementById("stock-flow-this-month-div").style.display ="none";
    document.getElementById("stock-flow-last-month-div").style.display ="none";

    document.getElementById("stock-status-view-all-div").style.display ="none";
    // document.getElementById("stock-status-view-by-name-div").style.display = "none";

    // GRAND CHILD DIVS
    document.getElementById("stock-received-date-today-grand-child-div").style.display="none";
    document.getElementById("stock-received-date-grand-child-div").style.display = "none";
    document.getElementById("stock-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("stock-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("stock-received-this-month-all-grand-child-div").style.display="none";

    // ---------------------
    // document.getElementById("stock-received-date-name-date-grand-child-div").style.display="none";
    // document.getElementById("stock-received-from-to-by-name-grand-child-div").style.display = "none";
    // document.getElementById("stock-received-last-week-by-name-grand-child-div").style.display = "none";
    document.getElementById("stock-received-last-month-by-all-grand-child-div").style.display = "none";
    // document.getElementById("stock-received-this-month-by-name-grand-child-div").style.display = "none";
    // document.getElementById("stock-received-last-month-name-grand-child-div").style.display = "none";

    // document.getElementById("stock-flow-by-size-div").style.display = "none";
    // document.getElementById("stock-flow-date-name-date-grand-child-div").style.display="none";
    document.getElementById("stock-flow-from-to-all-grand-child-div").style.display = "none";
    // document.getElementById("stock-flow-from-to-by-name-grand-child-div").style.display = "none";
    document.getElementById("stock-flow-last-week-all-child-div").style.display = "none";
    // document.getElementById("stock-flow-last-week-by-name-grand-child-div").style.display = "none";
    document.getElementById("stock-flow-this-month-all-grand-child-div").style.display = "none";
    // document.getElementById("stock-flow-last-month-by-name-grand-child-div").style.display = "none";
    document.getElementById("stock-flow-last-month-all-grand-child-div").style.display = "none";
    // document.getElementById("stock-flow-this-month-by-name-grand-child-div").style.display = "none";



    // LOADERS ---
    document.getElementById("stock-received-loader-all").style.display = "none";
    // document.getElementById("stock-received-loader-size").style.display = "none";
    document.getElementById("stock-received-loader-date-today").style.display = "none";
    // document.getElementById("stock-received-loader-date-name-date").style.display = "none";
    // document.getElementById("received-stock-loader-last-week-name").style.display = "none";
    // document.getElementById("stock-received-loader-from-to-name").style.display = "none";
    document.getElementById("stock-received-loader-date-date").style.display = "none";
    document.getElementById("stock-received-loader-last-week-all").style.display = "none";
    document.getElementById("stock-received-loader-from-to-all").style.display = "none";
    document.getElementById("stock-received-loader-this-month-all").style.display = "none";
    // document.getElementById("stock-received-loader-this-month-name").style.display = "none";
    document.getElementById("stock-received-loader-last-month-all").style.display = "none";
    // document.getElementById("stock-received-loader-last-month-name").style.display = "none";
    
    document.getElementById("stock-flow-loader-all").style.display = "none";
    // document.getElementById("stock-flow-loader-size").style.display = "none";
    // document.getElementById("stock-flow-loader-from-to-name").style.display = "none";
    document.getElementById("stock-flow-loader-date-today").style.display = "none";
    document.getElementById("stock-flow-loader-date-date").style.display = "none";
    // document.getElementById("stock-flow-loader-date-name-date").style.display = "none";
    document.getElementById("stock-flow-loader-from-to-all").style.display = "none";
    document.getElementById("stock-flow-loader-last-week-all").style.display = "none";
    // document.getElementById("stock-flow-loader-last-week-name").style.display = "none";
    document.getElementById("stock-flow-loader-this-month-all").style.display = "none";
    // document.getElementById("stock-flow-loader-this-month-name").style.display = "none";
    document.getElementById("stock-flow-loader-last-month-all").style.display = "none";
    // document.getElementById("stock-flow-loader-last-month-name").style.display = "none";


    document.getElementById("stock-status-loader-all").style.display = "none";
    // document.getElementById("stock-status-loader-name").style.display = "none";
}


function Show_Stock_Received_Root_Div()
{
    document.getElementById("stock-flow-root-div").style.display="none";
    document.getElementById("stock-status-root-div").style.display="none";
    document.getElementById("stock-received-root-div").style.display="block";
}function Close_Stock_Received_Root_Div () {document.getElementById("stock-received-root-div").style.display="none";}

function Show_Stock_Flow_Root_Div()
{
    document.getElementById("stock-status-root-div").style.display="none";
    document.getElementById("stock-received-root-div").style.display="none";
    document.getElementById("stock-flow-root-div").style.display="block";
}function Close_Stock_Flow_Root_Div () {document.getElementById("stock-flow-root-div").style.display="none";}

function Show_Stock_Status_Root_Div()
{
    document.getElementById("stock-flow-root-div").style.display="none";
    document.getElementById("stock-received-root-div").style.display="none";
    document.getElementById("stock-status-root-div").style.display="block";
}function Close_Stock_Status_Root_Div () {document.getElementById("stock-status-root-div").style.display="none";}

function show_stock_received_view_all_div ()
{
    document.getElementById("stock-received-date-div").style.display ="none";
    document.getElementById("stock-received-last-week-div").style.display ="none";
    document.getElementById("stock-received-from-to-div").style.display ="none";
    document.getElementById("stock-received-this-month-div").style.display ="none";
    document.getElementById("stock-received-last-month-div").style.display ="none";
    // document.getElementById("stock-received-by-size-div").style.display = "none";
    document.getElementById("stock-received-view-all-div").style.display ="block";
}function close_stock_received_view_all_div () {document.getElementById("stock-received-view-all-div").style.display ="none";}

// function show_stock_received_by_name_div ()
// {
//     document.getElementById("stock-received-view-all-div").style.display ="none";
//     document.getElementById("stock-received-date-div").style.display ="none";
//     document.getElementById("stock-received-date-div").style.display ="none";
//     document.getElementById("stock-received-last-week-div").style.display ="none";
//     document.getElementById("stock-received-from-to-div").style.display ="none";
//     document.getElementById("stock-received-this-month-div").style.display ="none";
//     document.getElementById("stock-received-last-month-div").style.display ="none";
//     document.getElementById("stock-received-by-size-div").style.display = "block";
// }function close_stock_received_by_name_div (){document.getElementById("stock-received-by-size-div").style.display = "none";}

function show_stock_received_view_date_div ()
{
    document.getElementById("stock-received-last-week-div").style.display ="none";
    document.getElementById("stock-received-from-to-div").style.display ="none";
    document.getElementById("stock-received-this-month-div").style.display ="none";
    document.getElementById("stock-received-view-all-div").style.display ="none";
    document.getElementById("stock-received-last-month-div").style.display ="none";
    // document.getElementById("stock-received-by-size-div").style.display = "none";
    
    document.getElementById("stock-received-date-div").style.display ="block";
}

// function show_stock_received_date_name_date_grand_child_div ()
// {
//     document.getElementById("stock-received-date-today-grand-child-div").style.display="none";
//     document.getElementById("stock-received-date-grand-child-div").style.display="none";
//     document.getElementById("stock-received-date-name-date-grand-child-div").style.display = "block";
// }function close_stock_received_date_name_date_grand_child_div (){document.getElementById("stock-received-date-name-date-grand-child-div").style.display = "none";}

function show_stock_received_view_last_week_div ()
{
    document.getElementById("stock-received-date-div").style.display ="none";
    document.getElementById("stock-received-from-to-div").style.display ="none";
    document.getElementById("stock-received-this-month-div").style.display ="none";
    document.getElementById("stock-received-view-all-div").style.display ="none";
    document.getElementById("stock-received-last-month-div").style.display ="none";
    // document.getElementById("stock-received-by-size-div").style.display = "none";
    document.getElementById("stock-received-last-week-div").style.display ="block";
}

function show_stock_received_from_to_week_div ()
{
    document.getElementById("stock-received-date-div").style.display ="none";
    document.getElementById("stock-received-this-month-div").style.display ="none";
    document.getElementById("stock-received-view-all-div").style.display ="none";
    document.getElementById("stock-received-last-month-div").style.display ="none";
    document.getElementById("stock-received-last-week-div").style.display ="none";
    // document.getElementById("stock-received-by-size-div").style.display = "none";
    document.getElementById("stock-received-from-to-div").style.display ="block";
}


function show_stock_received_view_last_week_div ()
{
    document.getElementById("stock-received-date-div").style.display ="none";
    document.getElementById("stock-received-from-to-div").style.display ="none";
    document.getElementById("stock-received-this-month-div").style.display ="none";
    // document.getElementById("stock-received-by-size-div").style.display = "none";
    document.getElementById("stock-received-view-all-div").style.display ="none";
    document.getElementById("stock-received-last-month-div").style.display ="none";
    document.getElementById("stock-received-last-week-div").style.display ="block";
}

function show_stock_received_view_this_month_div ()
{
    document.getElementById("stock-received-last-week-div").style.display ="none";
    document.getElementById("stock-received-from-to-div").style.display ="none";
    document.getElementById("stock-received-view-all-div").style.display ="none";
    document.getElementById("stock-received-last-month-div").style.display ="none";
    document.getElementById("stock-received-date-div").style.display ="none";
    document.getElementById("stock-received-this-month-div").style.display ="block";
}
function show_stock_received_view_last_month_div ()
{
    document.getElementById("stock-received-date-div").style.display ="none";
    document.getElementById("stock-received-from-to-div").style.display ="none";
    document.getElementById("stock-received-this-month-div").style.display ="none";
    // document.getElementById("stock-received-by-size-div").style.display = "none";
    document.getElementById("stock-received-view-all-div").style.display ="none";
    document.getElementById("stock-received-last-week-div").style.display ="none";
    document.getElementById("stock-received-last-month-div").style.display ="block";
}
function show_stock_received_date_today_grand_child_div ()
{
    document.getElementById("stock-received-date-grand-child-div").style.display = "none";
    document.getElementById("stock-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("stock-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("stock-received-this-month-all-grand-child-div").style.display="none";
    // document.getElementById("stock-received-last-month-all-grand-child-div").style.display="none";
    // document.getElementById("stock-received-date-name-date-grand-child-div").style.display="none";
    document.getElementById("stock-received-date-today-grand-child-div").style.display="block";
}function close_stock_received_date_today_grand_child_div () {document.getElementById("stock-received-date-today-grand-child-div").style.display="none";} 

function show_stock_received_date_grand_child_div ()
{
    // document.getElementById("stock-received-last-month-all-grand-child-div").style.display="none";
    document.getElementById("stock-received-date-today-grand-child-div").style.display="none";
    document.getElementById("stock-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("stock-received-last-week-all-grand-child-div").style.display = "none";
    document.getElementById("stock-received-this-month-all-grand-child-div").style.display="none";
    // document.getElementById("stock-received-date-name-date-grand-child-div").style.display="none";
    document.getElementById("stock-received-date-grand-child-div").style.display = "block";
}
function close_stock_received_date_grand_child_div () {document.getElementById("stock-received-date-grand-child-div").style.display="none";} 


function show_stock_received_from_to_grand_child_div ()
{
    // document.getElementById("stock-received-date-grand-child-div").style.display = "none";
    // document.getElementById("stock-received-last-week-all-grand-child-div").style.display = "none";
    // document.getElementById("stock-received-this-month-all-grand-child-div").style.display="none";
    // document.getElementById("stock-received-last-month-all-grand-child-div").style.display="none";
    // document.getElementById("stock-received-date-today-grand-child-div").style.display="none";
    // document.getElementById("stock-received-from-to-by-name-grand-child-div").style.display = "none";
    document.getElementById("stock-received-from-to-all-grand-child-div").style.display="block";
}
function close_received_from_to_grand_child_div () {document.getElementById("stock-received-from-to-all-grand-child-div").style.display="none";} 

// function show_stock_received_from_to_by_name_grand_child_div ()
// {
//     document.getElementById("stock-received-from-to-all-grand-child-div").style.display="none";
//     document.getElementById("stock-received-from-to-by-name-grand-child-div").style.display = "block";
// }

// function close_stock_received_from_to_by_name_grand_child_div (){document.getElementById("stock-received-from-to-by-name-grand-child-div").style.display = "none";}
function show_stock_received_last_week_all_grand_child_div ()
{
    // document.getElementById("stock-received-date-grand-child-div").style.display = "none";
    // document.getElementById("stock-received-this-month-all-grand-child-div").style.display="none";
    // document.getElementById("stock-received-last-month-all-grand-child-div").style.display="none";
    // document.getElementById("stock-received-date-today-grand-child-div").style.display="none";
    // document.getElementById("stock-received-from-to-all-grand-child-div").style.display="none";
    // document.getElementById("stock-received-last-week-by-name-grand-child-div").style.display = "none";
    document.getElementById("stock-received-last-week-all-grand-child-div").style.display = "block";
}function close_stock_received_last_week_all_grand_child_div () {document.getElementById("stock-received-last-week-all-grand-child-div").style.display="none";} 

// function show_stock_received_last_week_by_name_grand_child_div ()
// {
//     document.getElementById("stock-received-last-week-all-grand-child-div").style.display = "none";
//     document.getElementById("stock-received-last-week-by-name-grand-child-div").style.display = "block";
// }function close_stock_received_last_week_by_name_grand_child_div (){document.getElementById("stock-received-last-week-by-name-grand-child-div").style.display = "none";}


function show_stock_received_this_month_grand_child_div ()
{
    document.getElementById("stock-received-date-grand-child-div").style.display = "none";
    // document.getElementById("stock-received-last-month-all-grand-child-div").style.display="none";
    document.getElementById("stock-received-date-today-grand-child-div").style.display="none";
    document.getElementById("stock-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("stock-received-last-week-all-grand-child-div").style.display = "none";
    // document.getElementById("stock-received-by-size-div").style.display = "none";
    document.getElementById("stock-received-last-month-div").style.display= "none";
    document.getElementById("stock-received-this-month-div").style.display="block";
}function close_stock_received_this_month_grand_child_div () {document.getElementById("stock-received-this-month-div").style.display="none";} 

function show_stock_received_this_month_all_grand_child_div () 
{
    // document.getElementById("stock-received-this-month-by-name-grand-child-div").style.display = "none";
    document.getElementById("stock-received-this-month-all-grand-child-div").style.display = "block";
}
function close_stock_received_this_month_all_grand_child_div () {document.getElementById("stock-received-this-month-all-grand-child-div").style.display = "none";}

// function show_stock_received_this_month_by_name_grand_child_div ()
// {
//     document.getElementById("stock-received-this-month-all-grand-child-div").style.display = "none";
//     document.getElementById("stock-received-this-month-by-name-grand-child-div").style.display = "block";
// }function close_stock_received_this_month_by_name_grand_child_div (){document.getElementById("stock-received-this-month-by-name-grand-child-div").style.display = "none";}

function show_stock_received_last_month_all_grand_child_div ()
{
    document.getElementById("stock-received-date-grand-child-div").style.display = "none";
    document.getElementById("stock-received-date-today-grand-child-div").style.display="none";
    document.getElementById("stock-received-from-to-all-grand-child-div").style.display="none";
    document.getElementById("stock-received-this-month-all-grand-child-div").style.display="none";
    document.getElementById("stock-received-last-week-all-grand-child-div").style.display = "none";
    // document.getElementById("stock-received-last-month-name-grand-child-div").style.display="none";
    document.getElementById("stock-received-last-month-by-all-grand-child-div").style.display = "block";

}function close_stock_received_last_month_all_grand_child_div () {document.getElementById("stock-received-last-month-by-all-grand-child-div").style.display="none";} 

// function show_stock_received_last_month_by_name_grand_child_div  () 
// {
//     document.getElementById("stock-received-last-month-by-all-grand-child-div").style.display="none";
//     document.getElementById("stock-received-last-month-name-grand-child-div").style.display = "block";
// }function close_stock_received_last_month_by_name_grand_child_div  () {document.getElementById("stock-received-last-month-name-grand-child-div").style.display = "none";}


// STOCK FLOW

function show_stock_flow_view_all_div ()
{
    document.getElementById("stock-flow-date-div").style.display ="none";
    document.getElementById("stock-flow-last-week-div").style.display ="none";
    document.getElementById("stock-flow-from-to-div").style.display ="none";
    document.getElementById("stock-flow-this-month-div").style.display ="none";
    document.getElementById("stock-flow-last-month-div").style.display ="none";
    // document.getElementById("stock-flow-by-size-div").style.display = "none";
    document.getElementById("stock-flow-view-all-div").style.display ="block";
}function close_stock_flow_view_all_div () {document.getElementById("stock-flow-view-all-div").style.display ="none";}

// function show_stock_flow_by_name_div ()
// {
//     document.getElementById("stock-flow-view-all-div").style.display ="none";
//     document.getElementById("stock-flow-date-div").style.display ="none";
//     document.getElementById("stock-flow-date-div").style.display ="none";
//     document.getElementById("stock-flow-last-week-div").style.display ="none";
//     document.getElementById("stock-flow-from-to-div").style.display ="none";
//     document.getElementById("stock-flow-this-month-div").style.display ="none";
//     document.getElementById("stock-flow-last-month-div").style.display ="none";
//     // document.getElementById("stock-flow-by-size-div").style.display = "block";
// }function close_stock_flow_by_name_div (){document.getElementById("stock-flow-by-size-div").style.display = "none";}

function show_stock_flow_view_date_div ()
{
    // document.getElementById("stock-flow-by-size-div").style.display = "none";
    document.getElementById("stock-flow-last-week-div").style.display ="none";
    document.getElementById("stock-flow-from-to-div").style.display ="none";
    document.getElementById("stock-flow-this-month-div").style.display ="none";
    document.getElementById("stock-flow-view-all-div").style.display ="none";
    document.getElementById("stock-flow-last-month-div").style.display ="none";
    document.getElementById("stock-flow-date-div").style.display ="block";
}

function stock_flow_date_today_grand_child_div ()
{
    document.getElementById("stock-flow-date-date-grand-child-div").style.display="none";
    document.getElementById("stock-flow-date-today-grand-child-div").style.display ="block";
}function close_stock_flow_date_today_grand_child_div () {document.getElementById("stock-flow-date-today-grand-child-div").style.display ="none";}

// function show_stock_flow_date_name_date_grand_child_div ()
// {
//     document.getElementById("stock-flow-date-today-grand-child-div").style.display="none";
//     document.getElementById("stock-flow-date-date-grand-child-div").style.display="none";
//     document.getElementById("stock-flow-date-name-date-grand-child-div").style.display = "block";
// }function close_stock_flow_date_name_date_grand_child_div (){document.getElementById("stock-flow-date-name-date-grand-child-div").style.display = "none";}

function stock_flow_date_date_grand_child_div ()
{
    document.getElementById("stock-flow-date-today-grand-child-div").style.display ="none";
    document.getElementById("stock-flow-date-date-grand-child-div").style.display="block";
}function close_stock_flow_date_date_grand_child_div () {document.getElementById("stock-flow-date-date-grand-child-div").style.display ="none";}


function show_stock_flow_view_last_week_div ()
{
    // document.getElementById("stock-flow-by-size-div").style.display = "none";
    document.getElementById("stock-flow-date-div").style.display ="none";
    document.getElementById("stock-flow-from-to-div").style.display ="none";
    document.getElementById("stock-flow-this-month-div").style.display ="none";
    document.getElementById("stock-flow-view-all-div").style.display ="none";
    document.getElementById("stock-flow-last-month-div").style.display ="none";
    document.getElementById("stock-flow-last-week-div").style.display ="block";
}

function show_stock_flow_from_to_div ()
{
    // document.getElementById("stock-flow-by-size-div").style.display = "none";
    document.getElementById("stock-flow-date-div").style.display ="none";
    document.getElementById("stock-flow-this-month-div").style.display ="none";
    document.getElementById("stock-flow-view-all-div").style.display ="none";
    document.getElementById("stock-flow-last-month-div").style.display ="none";
    document.getElementById("stock-flow-last-week-div").style.display ="none";
    document.getElementById("stock-flow-from-to-div").style.display ="block";
}

function stock_flow_from_to_all_grand_child_div ()
{
    // document.getElementById("stock-flow-from-to-by-name-grand-child-div").style.display = "none";
    document.getElementById("stock-flow-from-to-all-grand-child-div").style.display="block";
}function close_flow_from_to_all_grand_child_div (){document.getElementById("stock-flow-from-to-all-grand-child-div").style.display="none";}

// function show_stock_flow_from_to_by_name_grand_child_div ()
// {
//     document.getElementById("stock-flow-from-to-all-grand-child-div").style.display="none";
//     document.getElementById("stock-flow-from-to-by-name-grand-child-div").style.display = "block";
// }function close_stock_flow_from_to_by_name_grand_child_div (){document.getElementById("stock-flow-from-to-by-name-grand-child-div").style.display = "none";}


function show_stock_flow_view_last_week_div ()
{
    // document.getElementById("stock-flow-by-size-div").style.display = "none";
    document.getElementById("stock-flow-date-div").style.display ="none";
    document.getElementById("stock-flow-from-to-div").style.display ="none";
    document.getElementById("stock-flow-this-month-div").style.display ="none";
    document.getElementById("stock-flow-view-all-div").style.display ="none";
    document.getElementById("stock-flow-last-month-div").style.display ="none";
    document.getElementById("stock-flow-last-week-div").style.display ="block";
}
function show_stock_flow_last_week_all_child_div ()
{
    // document.getElementById("stock-flow-last-week-by-name-grand-child-div").style.display = "none";
    document.getElementById("stock-flow-last-week-all-child-div").style.display = "block";
}function close_stock_flow_last_week_all_child_div (){document.getElementById("stock-flow-last-week-all-child-div").style.display = "none";}

// function show_stock_flow_last_week_by_name_grand_child_div ()
// {
//     document.getElementById("stock-flow-last-week-all-child-div").style.display = "none";
//     document.getElementById("stock-flow-last-week-by-name-grand-child-div").style.display = "block";
// }function close_stock_flow_last_week_by_name_grand_child_div (){document.getElementById("stock-flow-last-week-by-name-grand-child-div").style.display = "none";}


function show_stock_flow_view_this_month_div ()
{
    // document.getElementById("stock-flow-by-size-div").style.display = "none";
    document.getElementById("stock-flow-last-week-div").style.display ="none";
    document.getElementById("stock-flow-from-to-div").style.display ="none";
    document.getElementById("stock-flow-view-all-div").style.display ="none";
    document.getElementById("stock-flow-last-month-div").style.display ="none";
    document.getElementById("stock-flow-date-div").style.display ="none";
    document.getElementById("stock-flow-this-month-div").style.display ="block";
}

function show_stock_flow_this_month_all_grand_child_div ()
{
    // document.getElementById("stock-flow-this-month-by-name-grand-child-div").style.display = "none";
    document.getElementById("stock-flow-this-month-all-grand-child-div").style.display = "block";
}function close_stock_flow_this_month_all_grand_child_div (){document.getElementById("stock-flow-this-month-all-grand-child-div").style.display = "none";}

// function show_stock_flow_this_month_by_name_grand_child_div ()
// {
//     document.getElementById("stock-flow-this-month-all-grand-child-div").style.display = "none";
//     document.getElementById("stock-flow-this-month-by-name-grand-child-div").style.display = "block";
// }function close_stock_flow_this_month_by_name_grand_child_div (){document.getElementById("stock-flow-this-month-by-name-grand-child-div").style.display = "none";}

function show_stock_flow_view_last_month_div ()
{
    // document.getElementById("stock-flow-by-size-div").style.display = "none";
    document.getElementById("stock-flow-date-div").style.display ="none";
    document.getElementById("stock-flow-from-to-div").style.display ="none";
    document.getElementById("stock-flow-this-month-div").style.display ="none";
    document.getElementById("stock-flow-view-all-div").style.display ="none";
    document.getElementById("stock-flow-last-week-div").style.display ="none";
    document.getElementById("stock-flow-last-month-div").style.display ="block";
}

function show_stock_flow_last_month_all_grand_child_div () 
{
    // document.getElementById("stock-flow-last-month-by-name-grand-child-div").style.display = "none";
    document.getElementById("stock-flow-last-month-all-grand-child-div").style.display="block";
}function close_stock_flow_last_month_all_grand_child_div  () {document.getElementById("stock-flow-last-month-all-grand-child-div").style.display = "none";}

// function show_stock_flow_last_month_by_name_grand_child_div  () 
// {
//     document.getElementById("stock-flow-last-month-all-grand-child-div").style.display="none";
//     document.getElementById("stock-flow-last-month-by-name-grand-child-div").style.display = "block";
// }function close_stock_flow_last_month_by_name_grand_child_div  () {document.getElementById("stock-flow-last-month-by-name-grand-child-div").style.display = "none";}

// STOCK STATUS 
function show_stock_status_view_all_div ()
{
    // document.getElementById("stock-status-view-by-name-div").style.display ="none";
    document.getElementById("stock-status-view-all-div").style.display ="block";
}function close_stock_status_view_all_div (){document.getElementById("stock-status-view-all-div").style.display ="none";}

// function  show_stock_status_view_by_name_div ()
// {
//     document.getElementById("stock-status-view-all-div").style.display ="none";
//     document.getElementById("stock-status-view-by-name-div").style.display ="block";
// }function  close_stock_status_view_by_name_div (){document.getElementById("stock-status-view-by-name-div").style.display ="none";}
