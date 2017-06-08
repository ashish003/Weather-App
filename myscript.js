var myGlobal={};
$(document).ready(function() {
    
    $.getJSON("http://ip-api.com/json/?callback=?", function(json1) {
        var city=json1.city;
        var country=json1.country;
        $("#loc").html(" "+city+", "+country);
        //console.log("city="+city);
        
        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&APPID=061f24cf3cde2f60644a8240302983f2&callback=?", function(json) {
            myGlobal.cels=json.main.temp;
            myGlobal.flag=0;
            var t1=9/5;
            var topq=myGlobal.cels*t1;
            var tp=topq+32;
            var tf=tp.toFixed(1);
            myGlobal.fahren=tf;
    
            $("#temp").html(" "+json.main.temp+" &deg;C");
            $("#desc").html(" "+json.weather[0].main+" ");
            $("#icon1").html("<img src=http://openweathermap.org/img/w/"+json.weather[0].icon+".png>");
            var id=json.weather[0].id;
            
            //console.log("id="+id);
            //id=800;
            var src1;
            if(id>=200 && id<=232) {
                src1="http://wallpapercave.com/wp/8M5Odq4.jpg";
            }
            else if(id>=300 && id<=321) {
                src1="https://trinbagoventures.files.wordpress.com/2011/10/p1020391.jpg";
            }
            else if(id>=500 && id<=531) {
                src1="http://cdn.wallpapersafari.com/17/42/KOfib8.jpg";
            }
            else if(id>=600 && id<=622) {
                src1="https://wallpaperscraft.com/image/city_winter_europe_street_snow_shopping_59090_2560x1444.jpg";
            }
            else if(id>=701 && id<=781) {
                src1="https://ak5.picdn.net/shutterstock/videos/8656627/thumb/1.jpg";
            }
            else if(id===800) {
                src1="http://wallpaperrs.com/uploads/travel-world/clear-sky-over-the-city-bay-wide-wallpaper-21563.jpg";
            }
            else if(id>=801 && id<=804) {
                src1="http://wallpaper.pickywallpapers.com/1920x1080/clouds-over-a-city.jpg";
            }
            else if(id>=900 && id<=906) {
                src1="http://wallpaperbackgrounds.com/Content/wallpapers/photography/manipulation/166207-40138.jpg";
            }
            else {
                src1="http://sf.co.ua/2012/wallpaper-2087385.jpg";
            }
    
            $("body").css("background-image", "url("+src1+")");
            
        });
    });
    
    $("#con").click(function() {
        if(myGlobal.flag===0) {
            $("#temp").html(" "+myGlobal.fahren+" &deg;F");
            myGlobal.flag=1;
        }
        else {
            $("#temp").html(" "+myGlobal.cels+" &deg;C");
            myGlobal.flag=0;
        }
    });
    
});
