var i = 0;
    
    var firstTxt = "I'm sorry Clarice, Alam ko nag tatampo ka di mo lang sinabi or ayaw mo lang talaga aminin pero alam ko nag tatampo ka."+
    " Baka nakalimutan mo sinabi mo sa akin before paano ka mag tampo sabi mo pag nagtatampo ka di mo kakausapin yung tao at nong umaga sinabi mo din na nag tatampo ka" +
    "yung umaga at kanina ayaw mo ako kausapin mag rerespond ka lang pero ayaw mo ako kausapin. I'm Really sorry My Master di naman kita iniwan at di kita iiwan yayain mo"+
    " mo lang ulit ako maglaro pwede naman basta alam muna yun kung saan ka masaya don ako. Palagi ako nandito sayo master upside down"
    var speed=150;
    
function typeWriter() {
    document.getElementById("repeat").innerHTML += firstTxt.charAt(i);
    i++;
    setTimeout(typeWriter, speed); 
  } 
 
typeWriter()

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,50);
}

setTimeout(function(){ pageScroll(); }, 3000);
