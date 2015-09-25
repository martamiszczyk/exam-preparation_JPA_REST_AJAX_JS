/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(window).load(function ()
{
   $('path').click(function () {
       var country = ($(this).attr('id'));
       alert(country);
       $(this).css("fill", "#c0c0c0")
       $(this).css("fill", "#ff0000");
       var tUrl = "http://restcountries.eu/rest/v1/alpha?codes=";
       var url = tUrl + country;
       loadCountry(url);
   });
   var xmlhttp;
   function loader(url, cfunc)
   {
       xmlhttp = new XMLHttpRequest();
       xmlhttp.onreadystatechange = cfunc;
       xmlhttp.open("GET", url, true);
       xmlhttp.send();
   }
   var JSONObjects;
   function loadCountry(url)
   {
       loader(url, function ()
       {
           if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
           {
               JSONObjects = JSON.parse(xmlhttp.responseText);
//               alert(JSONObjects[0].name);
               $("#country").text(JSONObjects[0].name);
               $("#population").text(JSONObjects[0].population);
               $("#area").text(JSONObjects[0].area);
               $("#borders").text(JSONObjects[0].borders);
           }
       });
   }

});