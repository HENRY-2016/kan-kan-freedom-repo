
// INDEX PAGES
function Open_mapei_popup (){let popup = document.getElementById("mapeiPopup");popup.classList.toggle("show");}                                        
function Open_chint_popup (){let popup = document.getElementById("chintPopup");popup.classList.toggle("show");}                                        
function Open_sadolin_popup (){let popup = document.getElementById("myPopup");popup.classList.toggle("show");}
                                        

// AGENCY PAGES
function Load_home_page () {window.location="index.html"}
function Load_agency_entries () {window.location="AgencyEntriesGui.html"}
function Load_agency_view() {window.location="AgencyViewGui.html"}


// MAPAI PAGES
function Load_mapei_entries () {window.location="MapeiEntriesGui.html"};
function Load_mapei_view () {window.location="MapeiViewGui.html"};
function Load_mapei_record () {window.location="MapeiRecordGui.html"}
function Load_mapei_view_adesilexp7 () {window.location="MapeiViewAdesilexp7.html"}
function Load_mapei_view_planiseal_grey () {window.location="MapeiViewPlanisealGrey.html"}
function Load_mapei_view_planiseal_liquid () {window.location="MapeiViewPlanisealLiquid.html"}
function Load_mapei_view_plastimul_dpm () {window.location="MapeiViewPlastimulDpm.html"}
function Load_mapei_view_keracolor () {window.location="MapeiViewKeracolor.html"}




// CHINT PAGES
function Load_chint_entries () {window.location="ChintEntriesGui.html";}
function Load_chint_record () {window.location="ChintRecordGui.html";}
function Load_chint_view () {window.location="ChintViewGui.html";}

// CHINT VIEW GUI
function Load_Mcb1P_View () {window.location="ChintViewMcb1p.html";}
function Load_Mcb2P_View () {window.location="ChintViewMcb2p.html";}
function Load_Mcb3P_View () {window.location="ChintViewMcb3p.html";}
function Load_Mcb4P_View () {window.location="ChintViewMcb4p.html";}
function Load_Mccb_View () {window.location="ChintViewMccb.html";}
function Load_Bulbs_View () {window.location="ChintViewBulbs.html";}
function Load_Cabels_View () {window.location="ChintViewCabels.html";}
function Load_Ceilling_View () {window.location="ChintViewCeilling.html";}
function Load_Contactor_View () {window.location="ChintViewContactor.html";}
function Load_Flood_View () {window.location="ChintViewFlood.html";}
function Load_MainSwitch_View () {window.location="ChintViewMainSwitch.html";}
function Load_Surface_View () {window.location="ChintViewSurface.html";}

function Load_Industrial_Switch_View () {window.location="ChintViewIndustrialSwitch.html";}
function Load_Industrial_Socket_View () {window.location="ChintViewIndustrialSocket.html";}
function Load_Gold_Switch_View () {window.location="ChintViewGoldSwitch.html";}
function Load_Gold_Socket_View () {window.location="ChintViewGoldSocket.html";}
function Load_White_Switch_View () {window.location="ChintViewWhiteSwitch.html";}
function Load_White_Socket_View () {window.location="ChintViewWhiteSocket.html";}
function Load_Silver_Switch_View () {window.location="ChintViewSilverSwitch.html";}
function Load_Silver_Socket_View () {window.location="ChintViewSilverSocket.html";}



// SADOLIN PAGES
function Load_sadolin_entries () {window.location="SadolinEntriesGui.html"}
function Load_sadolin_view() {window.location="SadolinViewGui.html"}
function Load_sadolin_view_emulsion () {window.location="SadolinViewEmulsion.html"}
function Load_sadolin_view_bg_stock() {window.location="SadolinViewBudgetGloss.html"}
function Load_sadolin_view_matt () {window.location="SadolinViewMatt.html"}
function Load_sadolin_view_silk () {window.location="SadolinViewSilk.html"}
function Load_sadolin_view_silk_base () {window.location="SadolinViewBaseSilk.html"}
function Load_sadolin_view_super () {window.location="SadolinViewSuper.html"}
function Load_sadolin_view_super_base () {window.location="SadolinViewBaseSuper.html"}
function Load_sadolin_view_undercoat () {window.location="SadolinViewUndercoat.html"}
function Load_sadolin_view_weather_guard () {window.location="SadolinViewWeather.html"}
function Load_sadolin_view_weather_base () {window.location="SadolinViewBaseWeather.html"}
function Load_sadolin_record() {window.location="SadolinRecordGui.html"}


// ---------------
function Load_sadolin_view_thinner() {window.location="SadolinViewThinner.html"}
function Load_sadolin_view_rood_marking(){window.location="SadolinViewRoadmarking.html"}
function Load_sadolin_view_wallguard ()	{window.location="SadolinViewWallguard.html"}
function Load_sadolin_view_roofguard ()	{window.location="SadolinViewRoofguard.html"}
function Load_sadolin_view_rainshild () {window.location="SadolinViewRainshild.html"}
function Load_sadolin_view_dampshild ()	{window.location="SadolinViewDampshild.html"}
function Load_sadolin_view_clear_varnish ()	{window.location="SadolinViewClearVarnish.html"}
function Load_sadolin_view_colour_varnish () {window.location="ViewColourVarnish.html"}
function Load_sadolin_view_ceilling ()	{window.location="SadolinViewCeilling.html"}
function Load_sadolin_view_colourant (){window.location="SadolinViewColourant.html"}
function Load_sadolin_view_primer (){window.location="SadolinViewPrimer.html"}


// --------------------------
function Load_sadolin_view_brush (){window.location="CustomViewBrush.html"}
function Load_sadolin_view_masking (){window.location="CustomViewMasking.html"}
function Load_sadolin_view_whitting (){window.location="CustomViewWhitting.html"}
function Load_sadolin_view_cement (){window.location="CustomViewCement.html"}
function Load_sadolin_view_roller (){window.location="CustomViewRoller.html"}
function Load_sadolin_view_sandpaper (){window.location="CustomViewSandpaper.html"}
function Load_sadolin_view_stainner (){window.location="CustomViewStainner.html"}


function Show_Industrial_View_Switch_Socket ()
{
    document.getElementById("Silver_Switches_Sockets_Div").style.display = "none";
    document.getElementById("White_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Gold_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Industrial_Metal_Clad_Div").style.display="block";
}
function Show_Gold_View_Switch_Socket ()
{
    document.getElementById("Silver_Switches_Sockets_Div").style.display = "none";
    document.getElementById("White_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Industrial_Metal_Clad_Div").style.display="none";
    document.getElementById("Gold_Switches_Sockets_Div").style.display = "block";
}

function Show_White_View_Switch_Socket ()
{
    document.getElementById("Silver_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Industrial_Metal_Clad_Div").style.display="none";
    document.getElementById("Gold_Switches_Sockets_Div").style.display = "none";
    document.getElementById("White_Switches_Sockets_Div").style.display = "block";
}


function Show_Silver_View_Switch_Socket ()
{
    document.getElementById("Industrial_Metal_Clad_Div").style.display="none";
    document.getElementById("Gold_Switches_Sockets_Div").style.display = "none";
    document.getElementById("White_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Silver_Switches_Sockets_Div").style.display = "block";
}

function Hide_All_Chint_Switchs_Socket_Divs ()
{
    document.getElementById("Silver_Switches_Sockets_Div").style.display = "none";
    document.getElementById("White_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Gold_Switches_Sockets_Div").style.display = "none";
    document.getElementById("Industrial_Metal_Clad_Div").style.display="none";
}






/*
////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            ==============
                                            | SADOLIN GUI |
                                            ==============
//////////////////////////////////////////////////////////////////////////////////////////////////////

/*
+++++++++++++++++++++++++ ++
+                          +
+   SADOLIN VIEW PAGE   +
+                          + 
++++++++++++++++++++++++++++
*/

function SadolinViewHideAllChildDiv ()
{
    document.getElementById("custom").style.display = "none";
    document.getElementById("others").style.display = "none";
    document.getElementById("protection-paint").style.display = "none";
    document.getElementById("varnish-paint").style.display = "none";   
    document.getElementById("emulsion-paint").style.display = "none";   
    document.getElementById("ceilling-paint").style.display = "none";   
    document.getElementById("gloss-paint").style.display = "none";   
    document.getElementById("water-paint").style.display = "none";   
}

function ShowCustom ()
{
    document.getElementById("others").style.display = "none";
    document.getElementById("protection-paint").style.display = "none";
    document.getElementById("varnish-paint").style.display = "none";   
    document.getElementById("emulsion-paint").style.display = "none";   
    document.getElementById("ceilling-paint").style.display = "none";   
    document.getElementById("gloss-paint").style.display = "none";   
    document.getElementById("water-paint").style.display = "none";   
    document.getElementById("custom").style.display = "block";

}
function ShowOthersPaint ()
{
    document.getElementById("custom").style.display = "none";
    document.getElementById("protection-paint").style.display = "none";   
    document.getElementById("varnish-paint").style.display = "none";   
    document.getElementById("emulsion-paint").style.display = "none";   
    document.getElementById("ceilling-paint").style.display = "none";   
    document.getElementById("gloss-paint").style.display = "none";   
    document.getElementById("water-paint").style.display = "none";   
    document.getElementById("others").style.display = "block";
}

function ShowProtectionPaint ()
{
    document.getElementById("custom").style.display = "none";
    document.getElementById("varnish-paint").style.display = "none";   
    document.getElementById("emulsion-paint").style.display = "none";   
    document.getElementById("ceilling-paint").style.display = "none";   
    document.getElementById("gloss-paint").style.display = "none";   
    document.getElementById("water-paint").style.display = "none";   
    document.getElementById("others").style.display = "none";
    document.getElementById("protection-paint").style.display = "block";
}

function ShowVarnishPaint ()
{
    document.getElementById("custom").style.display = "none";
    document.getElementById("emulsion-paint").style.display = "none";   
    document.getElementById("ceilling-paint").style.display = "none";   
    document.getElementById("gloss-paint").style.display = "none";   
    document.getElementById("water-paint").style.display = "none";   
    document.getElementById("others").style.display = "none";
    document.getElementById("protection-paint").style.display = "none";
    document.getElementById("varnish-paint").style.display = "block";   
}
function ShowEmulsionPaint ()
{
    document.getElementById("custom").style.display = "none";
    document.getElementById("ceilling-paint").style.display = "none";   
    document.getElementById("gloss-paint").style.display = "none";   
    document.getElementById("water-paint").style.display = "none";   
    document.getElementById("others").style.display = "none";
    document.getElementById("protection-paint").style.display = "none";
    document.getElementById("varnish-paint").style.display = "none";   
    document.getElementById("emulsion-paint").style.display = "block";   
}
function ShowCeillingPaint ()
{
    document.getElementById("custom").style.display = "none";
    document.getElementById("gloss-paint").style.display = "none";   
    document.getElementById("water-paint").style.display = "none";   
    document.getElementById("others").style.display = "none";
    document.getElementById("protection-paint").style.display = "none";
    document.getElementById("varnish-paint").style.display = "none";   
    document.getElementById("emulsion-paint").style.display = "none";   
    document.getElementById("ceilling-paint").style.display = "block";   
}

function ShowGlossPaint ()
{
    document.getElementById("custom").style.display = "none";
    document.getElementById("water-paint").style.display = "none";   
    document.getElementById("others").style.display = "none";
    document.getElementById("protection-paint").style.display = "none";
    document.getElementById("varnish-paint").style.display = "none";   
    document.getElementById("emulsion-paint").style.display = "none";   
    document.getElementById("ceilling-paint").style.display = "none";   
    document.getElementById("gloss-paint").style.display = "block";   
}

function ShowWaterPaint ()
{
    document.getElementById("custom").style.display = "none";
    document.getElementById("others").style.display = "none";
    document.getElementById("protection-paint").style.display = "none";
    document.getElementById("varnish-paint").style.display = "none";   
    document.getElementById("emulsion-paint").style.display = "none";   
    document.getElementById("ceilling-paint").style.display = "none";   
    document.getElementById("gloss-paint").style.display = "none";   
    document.getElementById("water-paint").style.display = "block";   
}


/*
+++++++++++++++++++++++++ ++
+                          +
+   SADOLIN ENTRIES PAGE   +
+                          + 
++++++++++++++++++++++++++++
*/

function Clear_Weather_Guard_Form_Data (){setTimeout(document.getElementById("weather-guard-form").reset(), 1000);}
function hide_all_divs ()
    {
        
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";
    
        // Tabs ...
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("Silk-Vinyl-Names-Tab").style.display="none";
        document.getElementById("Matt-Vinyl-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Super-Glose-Names-Tab").style.display="none";
        document.getElementById("Weather-Guard-Names-Tab").style.display="none";
        document.getElementById("Weather-Guard-Base-Tab").style.display="none";
        document.getElementById("Clear-Varnish-Tab").style.display = "none";
        document.getElementById("Colour-Varnish-Tab").style.display = "none";
        document.getElementById("Rainshild-Tab").style.display = "none";
        document.getElementById("Dampshild-Tab").style.display = "none";

        document.getElementById("Brush-Tab").style.display = "none";
        document.getElementById("Masking-Tab").style.display = "none";
        document.getElementById("Whitting-Tab").style.display = "none";
        document.getElementById("Cement-Tab").style.display = "none";
        document.getElementById("Rollers-Tab").style.display = "none";
        document.getElementById("Sandpaper-Tab").style.display = "none";
        document.getElementById("Stainner-Tab").style.display = "none";
        document.getElementById("Colourant-Tab").style.display = "none";


    }

    // Tabs.....
function Show_Brush_Tab ()
{
    document.getElementById("Masking-Tab").style.display = "none";    
    document.getElementById("Brush-Tab").style.display = "block";
}
    
function Show_Masking_Tab ()
{
    document.getElementById("Brush-Tab").style.display = "none";
    document.getElementById("Masking-Tab").style.display = "block";    
}

function Show_Whitting_Tab ()
{
    document.getElementById("Cement-Tab").style.display = "none";    
    document.getElementById("Whitting-Tab").style.display = "block";
}
    
function Show_Cement_Tab ()
{
    document.getElementById("Whitting-Tab").style.display = "none";
    document.getElementById("Cement-Tab").style.display = "block";    
}
function Show_Rollers_Tab ()
{
    document.getElementById("Sandpaper-Tab").style.display = "none";    
    document.getElementById("Rollers-Tab").style.display = "block";
}
    
function Show_Sandpaper_Tab ()
{
    document.getElementById("Rollers-Tab").style.display = "none";
    document.getElementById("Sandpaper-Tab").style.display = "block";    
}
function Show_Stainner_Tab ()
{
    document.getElementById("Colourant-Tab").style.display = "none";    
    document.getElementById("Stainner-Tab").style.display = "block";
}
    
function Show_Colourant_Tab ()
{
    document.getElementById("Stainner-Tab").style.display = "none";
    document.getElementById("Colourant-Tab").style.display = "block";    
}

function Show_Clear_Varnish_Tab () 
{
    document.getElementById("Colour-Varnish-Tab").style.display="none";
    document.getElementById("Clear-Varnish-Tab").style.display="block";
}

function Show_Rainshild_Tab () 
{
    document.getElementById("Dampshild-Tab").style.display="none";
    document.getElementById("Rainshild-Tab").style.display="block";
}

function Show_Dampshild_Tab () 
{
    document.getElementById("Rainshild-Tab").style.display="none";
    document.getElementById("Dampshild-Tab").style.display="block";
}


function Show_Colour_Varnish_Tab () 
{
    document.getElementById("Clear-Varnish-Tab").style.display="none";
    document.getElementById("Colour-Varnish-Tab").style.display="block";
}

function Show_Silk_Vinyl_Names_Tab () 
{
    document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
    document.getElementById("Silk-Vinyl-Names-Tab").style.display="block";
}

function Show_Silk_Vinyl_Base_Tab ()
{
    document.getElementById("Silk-Vinyl-Names-Tab").style.display="none";
    document.getElementById("Silk-Vinyl-Base-Tab").style.display="block";
}

function Show_Ceilling_Emulsion_Tab () 
{
    document.getElementById("Matt-Vinyl-Tab").style.display="none";
    document.getElementById("Ceilling-Emulsion-Tab").style.display="block";
}

function Show_Matt_Vinyl_Tab () 
{
    document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
    document.getElementById("Matt-Vinyl-Tab").style.display="block";
}

function Show_Super_Gloss_Names_Tab () 
{
    document.getElementById("Super-Glose-Base-Tab").style.display="none";
    document.getElementById("Super-Glose-Names-Tab").style.display="block";
}
function Show_Super_Gloss_Base_Tab ()
{
    document.getElementById("Super-Glose-Names-Tab").style.display="none";
    document.getElementById("Super-Glose-Base-Tab").style.display="block";
}
function Show_Weather_Guard_Names_Tab () 
{
    document.getElementById("Weather-Guard-Base-Tab").style.display="none";
    document.getElementById("Weather-Guard-Names-Tab").style.display="block";
}
function Show_Weather_Guard_Base_Tab ()
{
    document.getElementById("Weather-Guard-Names-Tab").style.display="none";
    document.getElementById("Weather-Guard-Base-Tab").style.display="block";
}
function Show_AAA_Root_Div ()
{

    document.getElementById("BBB-Root-Div").style.display = "none";
    document.getElementById("CCC-Root-Div").style.display = "none";
    document.getElementById("DDD-Root-Div").style.display = "none";

    document.getElementById("thinner_id").style.display="none";
    document.getElementById("road_marking_id").style.display="none";
    document.getElementById("roof_guard_id").style.display="none";
    document.getElementById("wall_guard_id").style.display="none";
    document.getElementById("Shild-Root-Div").style.display="none";
    document.getElementById("Dampshild-Tab").style.display="none";
    document.getElementById("Varnish-Root-Div").style.display="none";
    document.getElementById("Colour-Varnish-Tab").style.display="none";
    document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
    document.getElementById("budget-emulsion-id").style.display = "none";
    document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
    document.getElementById("budget_gloss_id").style.display="none";
    document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
    document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
    document.getElementById("Super-Gloss-Root-Div").style.display="none";
    document.getElementById("Super-Glose-Base-Tab").style.display="none";
    document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
    document.getElementById("undercoat_id").style.display="none";
    document.getElementById("primers_id").style.display="none";
    document.getElementById("AAA-Root-Div").style.display = "block";
}
function Close_AAA_Root_Div () {document.getElementById("AAA-Root-Div").style.display="none";}

function Show_BBB_Root_Div ()
{

    document.getElementById("CCC-Root-Div").style.display = "none";
    document.getElementById("DDD-Root-Div").style.display = "none";

    document.getElementById("thinner_id").style.display="none";
    document.getElementById("road_marking_id").style.display="none";
    document.getElementById("roof_guard_id").style.display="none";
    document.getElementById("wall_guard_id").style.display="none";
    document.getElementById("Shild-Root-Div").style.display="none";
    document.getElementById("Dampshild-Tab").style.display="none";
    document.getElementById("Varnish-Root-Div").style.display="none";
    document.getElementById("Colour-Varnish-Tab").style.display="none";
    document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
    document.getElementById("budget-emulsion-id").style.display = "none";
    document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
    document.getElementById("budget_gloss_id").style.display="none";
    document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
    document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
    document.getElementById("Super-Gloss-Root-Div").style.display="none";
    document.getElementById("Super-Glose-Base-Tab").style.display="none";
    document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
    document.getElementById("undercoat_id").style.display="none";
    document.getElementById("primers_id").style.display="none";
    document.getElementById("AAA-Root-Div").style.display = "none";
    document.getElementById("BBB-Root-Div").style.display = "block";
}
function Close_BBB_Root_Div () {document.getElementById("BBB-Root-Div").style.display="none";}
function Show_CCC_Root_Div ()
{

    document.getElementById("DDD-Root-Div").style.display = "none";

    document.getElementById("thinner_id").style.display="none";
    document.getElementById("road_marking_id").style.display="none";
    document.getElementById("roof_guard_id").style.display="none";
    document.getElementById("wall_guard_id").style.display="none";
    document.getElementById("Shild-Root-Div").style.display="none";
    document.getElementById("Dampshild-Tab").style.display="none";
    document.getElementById("Varnish-Root-Div").style.display="none";
    document.getElementById("Colour-Varnish-Tab").style.display="none";
    document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
    document.getElementById("budget-emulsion-id").style.display = "none";
    document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
    document.getElementById("budget_gloss_id").style.display="none";
    document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
    document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
    document.getElementById("Super-Gloss-Root-Div").style.display="none";
    document.getElementById("Super-Glose-Base-Tab").style.display="none";
    document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
    document.getElementById("undercoat_id").style.display="none";
    document.getElementById("primers_id").style.display="none";
    document.getElementById("AAA-Root-Div").style.display = "none";
    document.getElementById("BBB-Root-Div").style.display = "none";
    document.getElementById("CCC-Root-Div").style.display = "block";
}
function Close_CCC_Root_Div () {document.getElementById("CCC-Root-Div").style.display="none";}
function Show_DDD_Root_Div ()
{
    document.getElementById("thinner_id").style.display="none";
    document.getElementById("road_marking_id").style.display="none";
    document.getElementById("roof_guard_id").style.display="none";
    document.getElementById("wall_guard_id").style.display="none";
    document.getElementById("Shild-Root-Div").style.display="none";
    document.getElementById("Dampshild-Tab").style.display="none";
    document.getElementById("Varnish-Root-Div").style.display="none";
    document.getElementById("Colour-Varnish-Tab").style.display="none";
    document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
    document.getElementById("budget-emulsion-id").style.display = "none";
    document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
    document.getElementById("budget_gloss_id").style.display="none";
    document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
    document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
    document.getElementById("Super-Gloss-Root-Div").style.display="none";
    document.getElementById("Super-Glose-Base-Tab").style.display="none";
    document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
    document.getElementById("undercoat_id").style.display="none";
    document.getElementById("primers_id").style.display="none";
    document.getElementById("AAA-Root-Div").style.display = "none";
    document.getElementById("BBB-Root-Div").style.display = "none";
    document.getElementById("CCC-Root-Div").style.display = "none";
    document.getElementById("DDD-Root-Div").style.display = "block";
}
function Close_DDD_Root_Div () {document.getElementById("DDD-Root-Div").style.display="none";}

function Show_Primer_Div ()
{

    document.getElementById("AAA-Root-Div").style.display = "none";
    document.getElementById("BBB-Root-Div").style.display = "none";
    document.getElementById("CCC-Root-Div").style.display = "none";
    document.getElementById("DDD-Root-Div").style.display = "none";

    document.getElementById("thinner_id").style.display="none";
    document.getElementById("road_marking_id").style.display="none";
    document.getElementById("roof_guard_id").style.display="none";
    document.getElementById("wall_guard_id").style.display="none";
    document.getElementById("Shild-Root-Div").style.display="none";
    document.getElementById("Dampshild-Tab").style.display="none";
    document.getElementById("Varnish-Root-Div").style.display="none";
    document.getElementById("Colour-Varnish-Tab").style.display="none";
    document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
    document.getElementById("budget-emulsion-id").style.display = "none";
    document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
    document.getElementById("budget_gloss_id").style.display="none";
    document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
    document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
    document.getElementById("Super-Gloss-Root-Div").style.display="none";
    document.getElementById("Super-Glose-Base-Tab").style.display="none";
    document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
    document.getElementById("undercoat_id").style.display="none";
    document.getElementById("primers_id").style.display="block";
}
function Close_Primer_Div () {document.getElementById("primers_id").style.display="none";}



function show_undercoat_div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="block";
    }
function close_undercoat_div () {document.getElementById("undercoat_id").style.display="none";}


function show_emulsion_div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        document.getElementById("Weather-Guard-Base-Tab").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "block";

    }
function close_emulsion_div (){document.getElementById("budget-emulsion-id").style.display = "none";}


function show_budget_gloss_div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        document.getElementById("Weather-Guard-Base-Tab").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="block";
    }
function close_budget_gloss_div (){document.getElementById("budget_gloss_id").style.display="none";}

function show_Ceilling_Paint_Root_Div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="block";
    }function Close_Ceilling_Paint_Root_Div (){document.getElementById("Ceilling-Paint-Root-Div").style.display="none";}

function Show_Silk_Vinyl_Root_Div ()
{

    document.getElementById("primers_id").style.display = "none";
    document.getElementById("AAA-Root-Div").style.display = "none";
    document.getElementById("BBB-Root-Div").style.display = "none";
    document.getElementById("CCC-Root-Div").style.display = "none";
    document.getElementById("DDD-Root-Div").style.display = "none";

    document.getElementById("thinner_id").style.display="none";
    document.getElementById("road_marking_id").style.display="none";
    document.getElementById("roof_guard_id").style.display="none";
    document.getElementById("wall_guard_id").style.display="none";
    document.getElementById("Shild-Root-Div").style.display="none";
    document.getElementById("Dampshild-Tab").style.display="none";
    document.getElementById("Varnish-Root-Div").style.display="none";
    document.getElementById("Colour-Varnish-Tab").style.display="none";
    document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
    document.getElementById("budget-emulsion-id").style.display = "none";
    // document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
    document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
    document.getElementById("budget_gloss_id").style.display="none";
    document.getElementById("Super-Gloss-Root-Div").style.display="none";
    document.getElementById("Super-Glose-Base-Tab").style.display="none";
    document.getElementById("undercoat_id").style.display="none";
    document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
    document.getElementById("Weather-Guard-Base-Tab").style.display="none";
    document.getElementById("Silk-Vinyl-Root-Div").style.display="block";
}function Close_Silk_Vinyl_Root_Div (){document.getElementById("Silk-Vinyl-Root-Div").style.display="none";}

function show_silk_vinyl_base_div ()
{

    document.getElementById("primers_id").style.display = "none";
    document.getElementById("AAA-Root-Div").style.display = "none";
    document.getElementById("BBB-Root-Div").style.display = "none";
    document.getElementById("CCC-Root-Div").style.display = "none";
    document.getElementById("DDD-Root-Div").style.display = "none";

    document.getElementById("thinner_id").style.display="none";
    document.getElementById("road_marking_id").style.display="none";
    document.getElementById("roof_guard_id").style.display="none";
    document.getElementById("wall_guard_id").style.display="none";
    document.getElementById("Shild-Root-Div").style.display="none";
    document.getElementById("Dampshild-Tab").style.display="none";
    document.getElementById("Varnish-Root-Div").style.display="none";
    document.getElementById("Colour-Varnish-Tab").style.display="none";
    document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
    document.getElementById("budget-emulsion-id").style.display = "none";
    document.getElementById("budget_gloss_id").style.display="none";
    document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
    document.getElementById("Super-Gloss-Root-Div").style.display="none";
    document.getElementById("Super-Glose-Base-Tab").style.display="none";
    document.getElementById("undercoat_id").style.display="none";
    document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
    document.getElementById("Weather-Guard-Base-Tab").style.display="none";
    document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
    document.getElementById("Silk-Vinyl-Base-Tab").style.display="block";
}
function close_silk_vinyl_base_div (){document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";}

function Show_Super_Gloss_Root_Div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        // document.getElementById("Weather-Guard-Base-Tab").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="block";
    }
function close_super_gloss_div (){document.getElementById("Super-Gloss-Root-Div").style.display="none";}

function Show_Weather_Guard_Root_Div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Weather-Guard-Base-Tab").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="block";
    }
function Close_Weather_Gaurd_Root_Div () {document.getElementById("Weather-Gaurd-Root-Div").style.display="none";}



function show_thinner_div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Weather-Guard-Base-Tab").style.display="none";
        document.getElementById("thinner_id").style.display="block";
    }
function close_thinner_div () {document.getElementById("thinner_id").style.display="none";}

function show_road_marking_div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Weather-Guard-Base-Tab").style.display="none";
        document.getElementById("road_marking_id").style.display="block";
    }
function close_road_marking_div ()
    {document.getElementById("road_marking_id").style.display="none";}

function show_roof_guard_div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Weather-Guard-Base-Tab").style.display="none";
        document.getElementById("roof_guard_id").style.display="block";
    }
function close_roof_guard_div ()
    {document.getElementById("roof_guard_id").style.display="none";}

function show_wall_guard_div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Weather-Guard-Base-Tab").style.display="none";
        document.getElementById("wall_guard_id").style.display="block";
    }
function close_wall_guard_div () {document.getElementById("wall_guard_id").style.display="none";}

function Show_Varnish_Root_Div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="block";
    }
function Close_Varnish_Root_Div (){document.getElementById("Varnish-Root-Div").style.display="none";}


function Show_Shild_Root_Div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Weather-Guard-Base-Tab").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="block";
    }
function Close_Shild_Root_Div (){document.getElementById("Shild-Root-Div").style.display="none";}

function show_dampshild_div ()
    {

        document.getElementById("primers_id").style.display = "none";
        document.getElementById("AAA-Root-Div").style.display = "none";
        document.getElementById("BBB-Root-Div").style.display = "none";
        document.getElementById("CCC-Root-Div").style.display = "none";
        document.getElementById("DDD-Root-Div").style.display = "none";

        document.getElementById("thinner_id").style.display="none";
        document.getElementById("road_marking_id").style.display="none";
        document.getElementById("Weather-Gaurd-Root-Div").style.display="none";
        document.getElementById("wall_guard_id").style.display="none";
        document.getElementById("Shild-Root-Div").style.display="none";
        document.getElementById("roof_guard_id").style.display="none";
        document.getElementById("Varnish-Root-Div").style.display="none";
        document.getElementById("Colour-Varnish-Tab").style.display="none";
        document.getElementById("Ceilling-Emulsion-Tab").style.display="none";
        document.getElementById("budget-emulsion-id").style.display = "none";
        document.getElementById("Silk-Vinyl-Base-Tab").style.display="none";
        document.getElementById("Ceilling-Paint-Root-Div").style.display="none";
        document.getElementById("undercoat_id").style.display="none";
        document.getElementById("budget_gloss_id").style.display="none";
        document.getElementById("Silk-Vinyl-Root-Div").style.display="none";
        document.getElementById("Super-Gloss-Root-Div").style.display="none";
        document.getElementById("Super-Glose-Base-Tab").style.display="none";
        document.getElementById("Weather-Guard-Base-Tab").style.display="none";
        document.getElementById("Dampshild-Tab").style.display="block";
    }
function close_dampshild_div ()
    {document.getElementById("Dampshild-Tab").style.display="none";}












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






























