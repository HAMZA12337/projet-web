$(document).ready(function() {

    $('#mssg').hide();


// pour recuperer les artciles 
var start=0;
    var fin=4;

// pour panel author

function get_Author(k){
alert('jkinjnlk')

}
$( "#Article" ).load( "#AppContainer",get_Articles(start,fin));


async function get_Articles(start,fin){
    localStorage.setItem('monChat', 'Tom');
 let resultat =await   $.ajax({
        // async: true,
        type: "GET",
        cache: false,
        url: 'http://localhost:3000/articles?skip='+start+'&take='+fin,
         dataType: "json",
          success: function(response) {
  
           console.log(response)
         

const today = new Date();     
let i=0;

response.forEach(element => {
    
                $( "#articles" ).append('<t style="display:"> <div class="card"><div class="row">'+
                    '<div class="col-md-5 wrapthumbnail">'+
                       ' <a href="#/post">'+
                       '  <div class="thumbnail" style="background-image:url('+ element.image +');">'+
                       '  </div>'+
                       '  </a>'+
                       '  </div>'+
                       ' <div class="col-md-7">'+
                       ' <div class="card-block">'+
                       ' 	<h2 class="card-title"><a href="#/post">'+element.titre+'</a></h2>'+
                       ' 	<h4 class="card-text">'+element.contenu+'</h4>'+
                       ' 	<div class="metafooter">'+
                       ' 	<div class="wrapfooter">'+
                       ' 		<span class="meta-footer-thumb">'+
                       ' 	<img class="author-thumb" onclick="alert("vfvgv");" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal">'+
                       ' 		</span>'+
                       ' 		<span class="author-meta">'+
                       ' 		<span class="post-name"><a href="#/author">Steve</a></span><br/>'+
                       ' 		<span class="post-date">'+element.createdAt.split('T')[0]+'</span><span class="dot"></span><span class="post-read">'+parseInt(Math.abs((new Date(element.createdAt.split('T')[0]).getTime() - today.getTime()))/(1000 * 3600 * 24))+' Jours read</span>'+
                       ' 		</span>'+
                       ' 		<span class="post-read-more"><a href="#/post" title="Read Story"><svg class="svgIcon-use" width="25" height="25" viewbox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd"></path></svg></a></span>'+
                       ' 	</div>'+
                       ' 	</div>'+
                       ' 	</div>'+
                       ' 	</div>'+
                       ' </div>'+
                       ' </div></t>'
                       
                      
                       

                       )

                      
                      
              });
            
          },
          error: function() {
             alert('An error occurred');
          }
        });//ajax request   
    
    }


        $( "#more" ).click(function (){
start=fin;
fin=fin+fin;
get_Articles(start,fin)


} )













 
$('#hh').click(function() {


    $.ajax({
        method: "POST",
        url: 'http://localhost:3000/users/login',
        header:{
            'content-Type':'application/json'
         },
       
             crossDomain:true,
         
        data: {
            "email":$("#username").val(),
            "password":$("#password").val()
        },  error: function (response) {

         
             $('#mssg').show();
            },success:()=>{
                window.location="#/dashbor"

            }
        
    });

 });


});