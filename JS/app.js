//Function to be called while clicking the menu icon
function openNav() {
    document.getElementById("menu").style.width = "250px";
}
//Function to be called while closing the menu icon
function closeNav() {
    document.getElementById("menu").style.width = "0";
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
        var template = ' <div class=costdata>\
        <span class="glyphicon sign">&#xe084;</span>\
            <p class=cost>{text-1}</p>\
                </div>\
                <div class=middlecost>\
                <p class=middlecostdata>{text-2}<span class=day>{text-3}<span class=runrate>{text-4}</span></p>\
                </div>\
                <div class=lowerpart>\
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
                     <div class=middleinventory>\
                      <div class=reddata>\
                      <p class=middlecostdata>{text-2}</p>\
                      <span class=day>{text-3}<span class=instances>{text-4}</span>\
                      </div>\
                      <p class=unique>{text-5}<span class=uniqueuse>{text-6}</span></p>\
              </div>\
                <div class=lowerpart>\
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
      
                       results = templates.replace("{text-1}",obj[1].content_1).replace("{text-2}",obj[1].content_2).replace("{text-3}",obj[1].content_3).replace("{text-4}",obj[1].content_4).replace("{text-5}",obj[1].content_5).replace("{text-6}",obj[1].content_6).replace("{text-7}",obj[1].content_7).replace("{text-8}",obj[1].content_8).replace("{text-9}",obj[1].content_9).replace("{text-10}",obj[1].content_10).replace("{text-11}",obj[1].content_11).replace("{text-12}",obj[1].content_12);
                    
                   
                    document.getElementById('second').innerHTML = results;
                    //Contents that are retrieve from json and render it to the html file for INVENTORY section
                    var results = "";
                    var templates = '  <div class=inventory>\
                    <span class="glyphicon sign">&#xe084;</span>\
                    <p class=compliance>{text-1}</p>\
                     </div>\
                     <div class=middleinventory>\
                    <div class=reddata>\
                    <p class=middlecostdata>{text-2}</p>\
                    <span class=day>{text-3}<span class=instances>{text-4}</span>\
                    </div>\
                    <p class=unique>{text-5} <span class=uniqueuse>{text-6}</span></p>\
                 </div>\
                <div class=lowerpart>\
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
            
                             results = templates.replace("{text-1}",obj[2].content_1).replace("{text-2}",obj[2].content_2).replace("{text-3}",obj[2].content_3).replace("{text-4}",obj[2].content_4).replace("{text-5}",obj[2].content_5).replace("{text-6}",obj[2].content_6).replace("{text-7}",obj[2].content_7).replace("{text-8}",obj[2].content_8).replace("{text-9}",obj[2].content_9).replace("{text-10}",obj[2].content_10).replace("{text-11}",obj[2].content_11).replace("{text-12}",obj[2].content_12).replace("{text-13}",obj[2].content_13).replace("{text-14}",obj[2].content_14);
                      
                          document.getElementById('third').innerHTML = results;

                        //Contents that are retrieve from json and render it to the html file for UTILIZATION section
                          var results = "";
                          var templates = '  <div class=inventory>\
                          <span class="glyphicon sign">&#xe084;</span>\
                          <p class=compliance>{text-1}</p>\
                             </div>\
                            <div class=middlemonitoring>\
                             <p class=middlecostdata>{text-2}<span class=overall>{text-3}</p>\
                              </div>\
                            <div class=lowerpart>\
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
                  
                                   results = templates.replace("{text-1}",obj[3].content_1).replace("{text-2}",obj[3].content_2).replace("{text-3}",obj[3].content_3);
                                
                               
                                document.getElementById('fourth').innerHTML = results;

                            //Contents that are retrieve from json and render it to the html file for COMPLIANCE section
                                var results = "";
                                var templates = '  <div class=upperpart>\
                                <span class="glyphicon sign">&#xe084;</span>\
                                <p class=compliance>{text-1}</p>\
                                 </div>\
                                <div>\
                                 <figure>\
                                <img src="assests/Screen Shot 2017-08-11 at 7.15.41 PM.png" class="image">\
                                <figurecaption class="lastscanned">{text-2}</figurecaption>\
                            </figure>\
                         </div>\
                         <div class=lowerpart>\
                                <div>\
                                        <p class=instancehrdata>{text-3}</p>\
                                        <p class=instancehr-copy>{text-4}</p>\
                                </div>\
                                <div>\
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
                            </div>' ;
                        
                                         results = templates.replace("{text-1}",obj[4].content_1).replace("{text-2}",obj[4].content_2).replace("{text-3}",obj[4].content_3).replace("{text-4}",obj[4].content_4).replace("{text-5}",obj[4].content_5).replace("{text-6}",obj[4].content_6).replace("{text-7}",obj[4].content_7).replace("{text-8}",obj[4].content_8).replace("{text-9}",obj[4].content_9).replace("{text-10}",obj[4].content_10).replace("{text-11}",obj[4].content_11);
                                  
                                      document.getElementById('fifth').innerHTML = results;

                                    //Contents that are retrieve from json and render it to the html file for STORAGE section
                                      var results = "";
                                      var templates = '  <div class=storage>\
                                      <span class="glyphicon sign">&#xe084;<span class=storagecontent>{text-1}</span></span>\
                                       <p class=instancehrdata>{text-2}<span class=use>{text-3}</span></p>' ;
                                               results = templates.replace("{text-1}",obj[5].content_1).replace("{text-2}",obj[5].content_2).replace("{text-3}",obj[5].content_3);
                                            console.log(results);
                                            document.getElementById('sixth').innerHTML = results;
                                            document.getElementById('101').innerHTML=obj[6].id_1;
                                            document.getElementById('102').innerHTML=obj[6].id_2;
                                            document.getElementById('103').innerHTML=obj[6].id_3;
                        
      }
    }
});
