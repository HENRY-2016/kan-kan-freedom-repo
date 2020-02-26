function Load_home_page () {window.location="index.html"}

// MAPAI PAGES

function Load_mapei_view_adesilexp7 () {window.location="MapeiViewAdesilexp7.html"}
function Load_mapei_view_planiseal_grey () {window.location="MapeiViewPlanisealGrey.html"}
function Load_mapei_view_planiseal_liquid () {window.location="MapeiViewPlanisealLiquid.html"}
function Load_mapei_view_plastimul_dpm () {window.location="MapeiViewPlastimulDpm.html"}
function Load_mapei_view_keracolor () {window.location="MapeiViewKeracolor.html"}


    /*=======================================================================================================*/
                                        /*
                                            +++++++++++++++++++++++++ ++
                                            +                          +
                                            +   mapei_entries_page   +
                                            +                          + 
                                            ++++++++++++++++++++++++++++
                                        */
function Hide_All_Mapei_Divs ()
{
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Adesilex-P7-Id").style.display="none";
}


function Show_Adesilex_P7_Id ()
{
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Adesilex-P7-Id").style.display="block";

}function Close_Adesilex_P7_Id (){document.getElementById("Adesilex-P7-Id").style.display="none";}

function Show_Planiseal_288_A_Grey_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="block";
}function Close_Planiseal_288_A_Grey_Id (){document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";}

function Show_Planiseal_288_B_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="block";
}function Close_Planiseal_288_B_Id (){document.getElementById("Planiseal-288-B-Id").style.display="none";}

function Show_Plastimul_DPM_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="block";
}function Close_Plastimul_DPM_Id (){document.getElementById("Plastimul-DPM-Id").style.display="none";}

function Show_Keracolor_Id ()
{
    document.getElementById("Adesilex-P7-Id").style.display="none";
    document.getElementById("Planiseal-288-A-Grey-Id").style.display="none";
    document.getElementById("Planiseal-288-B-Id").style.display="none";
    document.getElementById("Plastimul-DPM-Id").style.display="none";
    document.getElementById("Keracolor-Id").style.display="block";
}function Close_Keracolor_Id (){document.getElementById("Keracolor-Id").style.display="none";}
                                           