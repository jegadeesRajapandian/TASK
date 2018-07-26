function dec(x){
  console.log(x);
  if(x=="firstdiv"){
    document.getElementById("firstdiv").style.width="48%";
    document.getElementById("seconddiv").style.width="24%";
    document.getElementById("thirddiv").style.width="24%";
  }
  else if(x=="seconddiv"){
    document.getElementById("firstdiv").style.width="24%";
    document.getElementById("seconddiv").style.width="48%";
    document.getElementById("thirddiv").style.width="24%";
  }
  else{
    document.getElementById("firstdiv").style.width="24%";
    document.getElementById("seconddiv").style.width="24%";
    document.getElementById("thirddiv").style.width="48%";
  }
}
function declaree(x){
  console.log(x);
    document.getElementById("firstdiv").style.width="99%";
    document.getElementById("seconddiv").style.width="99%";
    document.getElementById("thirddiv").style.width="99%";
}
function declareee(x){
  console.log(x);
    document.getElementById("firstdiv").style.width="89%";
    document.getElementById("seconddiv").style.width="89%";
    document.getElementById("thirddiv").style.width="89%";
}
//Function to be called while clicking the menu icon
function openNav() {
    document.getElementById("menu").style.width = "250px";
}
//Function to be called while closing the menu icon
function closeNav() {
    document.getElementById("menu").style.width = "0";
}
var ids=[];
function def() {
  var element1=document.getElementById('first');
  var element2=document.getElementById('second');
  var element3=document.getElementById('third');
  var element4=document.getElementById('fourth');
  var element5=document.getElementById('fifth');
  var element6=document.getElementById('sixth');
  ids.push(element1);
  ids.push(element2);
  ids.push(element3);
  ids.push(element4);
  ids.push(element5);
  ids.push(element6);
}
function active(a){
  def();
  for(loop=0;loop<ids.length;loop++){
  ids[loop].classList.add("inactiveblock");
  ids[loop].classList.remove("subactiveclass");
  ids[loop].classList.remove("activeclass");
  }
  var d = document.getElementById(a);
  console.log(d);
  var x=d.parentElement.parentElement.id;
  console.log(window.innerWidth);
  if(window.innerWidth<800){
    declaree(x);
  }
  else if(window.innerWidth>800&&window.innerWidth<1085){
    declareee(x);
  }
  else{
    dec(x);
  }
    
  //console.log(document.getElementById(a).parentElement.parentElement.id);
  if(d.nextElementSibling!=null){
    d.nextElementSibling.classList.remove("inactiveblock");
    d.nextElementSibling.classList.add("subactiveclass");
    d.classList.remove("inactiveblock");
    d.classList.remove("subactiveclass");
    d.classList.add("activeclass");
  }
  else if(d.previousElementSibling!=null){
    d.previousElementSibling.classList.remove("inactiveblock");
    d.previousElementSibling.classList.add("subactiveclass");
    d.classList.remove("inactiveblock");
    d.classList.remove("subactiveclass");
    d.classList.add("activeclass");

  }
  }
  const http = new easyHTTP;
//Opening the json file to retrieve the data
  http.get('/JSON/db.json', function(err, posts) {
    if(err) {
      console.log(err);
    } else {
      var obj = JSON.parse(posts);
      console.log(obj);
      if(obj!=null){
        //Contents that are retrieve from json and render it to the html file for COST section
        var result = "";
        var template = '<div  class=inventory>\
        <span class="glyphicon sign">&#xe084;</span>\
            <p  class=cost>{text-1}</p>\
                </div>\
                <img class=image1 src="/assests/Screen Shot 2017-08-11 at 7.16.45 PM.png">\
                <div id="data2" class=middleinventory>\
                <p  class=middlecostdata>{text-2}<span class="day">{text-4}</span></p>\
                </div>\
                <div id="data3" class=lowerpart>\
                <div>\
                    <p class=instancehrdatas>{text-5}</p>\
                    <p class=instancehr>{text-6}</p>\
                </div>\
                </div>' ;

                 result = template.replace("{text-1}",obj[0].title).replace("{text-2}",obj[0].dollar).replace("{text-3}",obj[0].day).replace("{text-4}",obj[0].runrate).replace("{text-5}",obj[0].dollardata).replace("{text-6}",obj[0].instance);
              
           
              document.getElementById('first').innerHTML = result;
          //Contents that are retrieve from json and render it to the html file for MONITORING section
              var results = "";
              var templates = '  <div class=inventory>\
              <span class="glyphicon sign">&#xe084;</span>\
              <p class=compliance>{text-1}</p>\
             </div>\
             <img class=image1 src="/assests/Screen Shot 2017-08-11 at 7.16.57 PM.png">\
                     <div class=middleinventory>\
                      <div class=reddata>\
                      <p class=middlecostdata>{text-2}</p>\
                      <span class=day>{text-3}<span class=instances>{text-4}</span>\
                      </div>\
                      <p id="data4" class=unique>{text-5}<span class=uniqueuse>{text-6}</span></p>\
              </div>\
                <div id="data5" class=lowerpart>\
                <div>\
                      <p class=instancehrdata>{text-7}</p>\
                      <p class=instancehr-copy>{text-8}</p>\
                 </div>\
                 <div>\
                      <p class=instancehrdata>{text-9}</p>\
                      <p class=instancehr-copy>{text-10}</p>\
                 </div>\
                 <div>\
                      <p class=instancehrdata>{text-11}</p>\
                      <p class=instancehr-copy>{text-12}</p>\
                  </div>\
              </div>' ;
      
                       results = templates.replace("{text-1}",obj[1].title).replace("{text-2}",obj[1].view).replace("{text-3}",obj[1].requests).replace("{text-4}",obj[1].duration).replace("{text-5}",obj[1].count).replace("{text-6}",obj[1].type).replace("{text-7}",obj[1].views[0]).replace("{text-8}",obj[1].subtitle[0]).replace("{text-9}",obj[1].views[1]).replace("{text-10}",obj[1].subtitle[1]).replace("{text-11}",obj[1].views[2]).replace("{text-12}",obj[1].subtitle[2]);
                    
                   
                    document.getElementById('second').innerHTML = results;
                    //Contents that are retrieve from json and render it to the html file for INVENTORY section
                    var results = "";
                    var templates = '  <div class=inventory>\
                    <span class="glyphicon sign">&#xe084;</span>\
                    <p class=compliance>{text-1}</p>\
                     </div>\
                     <img class=image1 src="/assests/Screen Shot 2017-08-11 at 7.16.18 PM.png">\
                     <div class=middleinventory>\<div class=reddata>\
                    <p class=middlecostdata>{text-2}</p>\
                    <span  class=day>{text-3}<span class=instances>{text-4}</span>\
                    </div>\
                    <p id="data6" class=unique>{text-5} <span class=uniqueuse>{text-6}</span></p>\
                 </div>\
                <div id="data7" class=lowerpart>\
                    <div>\
                            <p class=instancehrdata>{text-7}</p>\
                            <p class=instancehr-copy>{text-8}</p>\
                    </div>\
                    <div>\
                            <p class=instancehrdata>{text-9}</p>\
                            <p class=instancehr-copy>{text-10}</p>\
                    </div>\
                    <div>\
                            <p class=instancehrdata>{text-11}</p>\
                            <p class=instancehr-copy>{text-12}</p>\
                    </div>\
                    <div>\
                            <p class=instancehrdata>{text-13}</p>\
                            <p class=instancehr-copy>{text-14}</p>\
                    </div>\
                </div>'  ;
            
                             results = templates.replace("{text-1}",obj[2].title).replace("{text-2}",obj[2].view).replace("{text-3}",obj[2].requests).replace("{text-4}",obj[2].duration).replace("{text-5}",obj[2].count).replace("{text-6}",obj[2].type).replace("{text-7}",obj[2].views[0]).replace("{text-8}",obj[2].subtitle[0]).replace("{text-9}",obj[2].views[1]).replace("{text-10}",obj[2].subtitle[1]).replace("{text-11}",obj[2].views[2]).replace("{text-12}",obj[2].subtitle[2]).replace("{text-13}",obj[2].views[3]).replace("{text-14}",obj[2].subtitle[3]);
                      
                           document.getElementById('third').innerHTML = results;

                        //Contents that are retrieve from json and render it to the html file for UTILIZATION section
                          var results = "";
                          var templates = '  <div class=inventory>\
                          <span class="glyphicon sign">&#xe084;</span>\
                          <p class=compliance>{text-1}</p>\
                             </div>\
                             <img class=image1 src="/assests/Screen Shot 2017-08-11 at 7.16.33 PM.png">\
                            <div class=middleinventory>\
                             <p class=middlecostdata>{text-2}<span class=overall>{text-3}</p>\
                              </div>\
                            <div id="data8" class=lowerpart>\
                              <div>\
                                  <p class=semicircle></p>\
                             </div>\
                            <div>\
                                          <p class=semicircle></p>\
                            </div>\
                            <div>\
                                          <p class=semicircle></p>\
                            </div>\
                        </div>' ;
                  
                                   results = templates.replace("{text-1}",obj[3].title).replace("{text-2}",obj[3].value).replace("{text-3}",obj[3].subtitle);
                                
                               
                                document.getElementById('fourth').innerHTML = results;

                            //Contents that are retrieve from json and render it to the html file for COMPLIANCE section
                                var results = "";
                                var templates = '  <div class=inventory>\
                                <span class="glyphicon sign">&#xe084;</span>\
                                <p class=compliance>{text-1}</p>\
                                 </div>\
                                <div>\
                                <div class=middleinventory>\<div class=reddatass>\
                              <p class=middlecostdata>{text-13}</p>\
                              <span  class=day>{text-14}<span class=instances>{text-15}</span>\
                             </div>\
                             </div>\
                                 <figure class=figure>\
                                <img id="img" src="assests/Screen Shot 2017-08-11 at 7.15.41 PM.png" class="image">\
                                <figurecaption id="imgcon" class="lastscanned">{text-2}</figurecaption>\
                         </div>\
                         <div class=lowerparts>\
                                <div id="d1">\
                                        <p class=instancehrdata>{text-3}</p>\
                                        <p class=instancehr-copy>{text-4}</p>\
                                </div>\
                                <div id="d2">\
                                        <p class=instancehrdata>{text-5}<span class=oddnum>{text-6}</span></p>\
                                        <p class=instancehr-copy>{text-7}</p>\
                                </div>\
                                <div>\
                                        <p class=instancehrdata>{text-8}</p>\
                                        <p class=instancehr-copy>{text-9}</p>\
                                </div>\
                                <div>\
                                        <p class=instancehrdata>{text-10}</p>\
                                        <p class=instancehr-copy>{text-11}</p>\
                                </div>\
                            </div>\
                            <div id="data5" class=lowerpart>\
                            <div>\
                                  <p class=instancehrdata>{text-16}</p>\
                                  <p class=instancehr-copy>{text-17}</p>\
                             </div>\
                             <div>\
                                  <p class=instancehrdata>{text-18}</p>\
                                  <p class=instancehr-copy>{text-19}</p>\
                             </div>\
                             <div>\
                                  <p class=instancehrdata>{text-20}</p>\
                                  <p class=instancehr-copy>{text-21}</p>\
                              </div>\
                          </div>' ;
                        
                                         results = templates.replace("{text-1}",obj[4].title).replace("{text-2}",obj[4].view).replace("{text-3}",obj[4].views[0]).replace("{text-4}",obj[4].subtitles[0]).replace("{text-5}",obj[4].views[1]).replace("{text-6}",obj[4].views[2]).replace("{text-7}",obj[4].subtitles[1]).replace("{text-8}",obj[4].views[3]).replace("{text-9}",obj[4].subtitles[2]).replace("{text-10}",obj[4].views[4]).replace("{text-11}",obj[4].subtitles[3]).replace("{text-13}",obj[4].views[5]).replace("{text-14}",obj[4].subtitles[4]).replace("{text-15}",obj[4].subtitles[5]).replace("{text-16}",obj[4].views[6]).replace("{text-17}",obj[4].subtitles[6]).replace("{text-18}",obj[4].views[7]).replace("{text-19}",obj[4].subtitles[7]).replace("{text-20}",obj[4].views[8]).replace("{text-21}",obj[4].subtitles[8]);
                                  
                                      document.getElementById('fifth').innerHTML = results;

                                    //Contents that are retrieve from json and render it to the html file for STORAGE section
                                      var results = "";
                                      var templates = ' <div class=inventory>\
                                      <span class="glyphicon sign">&#xe084;</span>\
                                      <p class=compliance>{text-1}</p>\
                                       </div>\
                                       <img id="img" src="/assests/Screen Shot 2017-08-11 at 7.15.57 PM.png" class="image3">\
                                      <div class=middleinventory>\
                                      <div class=reddata>\
                                    <p class=middlecostdata>{text-2}</p>\
                                    <span  class=day>{text-4}<span class=instances>{text-3}</span>\
                                   </div>\
                                   </div>\
                                  <div id="data7" class=lowerpart>\
                    <div>\
                            <p class=instancehrdata>{text-5}</p>\
                            <p class=instancehr-copy>{text-6}</p>\
                    </div>\
                    <div>\
                            <p class=instancehrdata>{text-7}</p>\
                            <p class=instancehr-copy>{text-8}</p>\
                    </div>\
                    <div>\
                            <p class=instancehrdata>{text-9}</p>\
                            <p class=instancehr-copy>{text-10}</p>\
                    </div>\
                                </div> ' ;
                                               results = templates.replace("{text-1}",obj[5].title).replace("{text-2}",obj[5].data).replace("{text-3}",obj[5].subtitle).replace("{text-4}",obj[5].byte).replace("{text-5}",obj[5].storage[0]).replace("{text-6}",obj[5].subtitle[0]).replace("{text-7}",obj[5].storage[1]).replace("{text-8}",obj[5].subtitles[1]).replace("{text-9}",obj[5].storage[2]).replace("{text-10}",obj[5].subtitles[2]);
                                           
                                            document.getElementById('sixth').innerHTML = results;
                                            //Contents that are retrieve from json and render it to the html file for HEADER section
                                            document.getElementById('101').innerHTML=obj[6].production;
                                            document.getElementById('102').innerHTML=obj[6].build;
                                            document.getElementById('103').innerHTML=obj[6].intake;
                        
      }
    }
});
