(function(i,s,o,g,r,a,m){
  i['GoogleAnalyticsObject']=r;
  i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
  a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];
  a.async=1;
  a.src=g;
  m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-49746829-1', 'auto');
	ga('send', 'pageview');

var _gaq = _gaq || [];
  	_gaq.push(['_setAccount', 'UA-49746829-1']);
  	_gaq.push(['_trackPageview']);

  	(function() {
    	var ga = document.createElement('script'); 
      ga.type = 'text/javascript'; 
      ga.async = true;
    	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    	
      var s = document.getElementsByTagName('script')[0]; 
      s.parentNode.insertBefore(ga, s);
  	})();

$(document).ready(function(){
  $('#mycarousel').carousel();

  var title = document.getElementById("PageTitle").innerHTML;
  var pathname = window.location.pathname;
  path = pathname.toLowerCase();
  

  if(path == "/"){
    path = "home"
    navIndex = path;
  } else {
    path = pathname.split( '/' );
    navIndex = path[1]
  }

  $("#navbar").children('li').each(function () {
    var navItem =$(this)
    navItem.children("a").each(function(){
      var $item = $(this);
      var id = $item.attr('id').toLowerCase();
      if(id == navIndex){
        navItem.children('a').addClass("activeItem");
      }
    })

    $('a').each(function(){
      var href = $(this).attr('href');
      href = href.toLowerCase()
      $(this).attr('href', href);
      
    });
  });

  $(".post").each(function(){
    var post = $(this);
    var posth3 = $(this).children(".post-title").children("h3");
    var postTitle = posth3.text();
    var postURL = "url('/images/headers/posts/" + postTitle + ".jpg')";
    post.css("background-image", postURL)
    post.css("background-repeat", "no-repeat")
  });

  $(".work").each(function(){
    var post = $(this);
    var posth3 = $(this).children(".work-title").children("h3");
    var postTitle = posth3.text();
    var postURL = "url('/images/portfolio/squares/" + postTitle + ".jpg')";
    var width = post.width() / 2.0

    post.css("height", width + "px")
    post.css("background-image", postURL)
    post.css("background-repeat", "no-repeat")
  });

  if(path[1] === "blog" && path[2] != ""){
    var headImage = "http://www.lukesheard.com/images/headers/posts/" + title + ".jpg"
    var headImageLink = "url('/images/headers/posts/" + title + ".jpg')";
  } else if(path[1] === "portfolio"){
    var headImage = "http://www.lukesheard.com/images/portfolio/squares/" + title + ".jpg"
    var headImageLink = "url('/images/portfolio/squares/" + title + ".jpg')";
  } else {
    var headImage = "http://www.lukesheard.com/images/headers/pages/" + title + ".jpg"
    var headImageLink = "url('/images/headers/pages/" + title + ".jpg')";
  }
  $("header").css("background-image", headImageLink);
  
  $("meta[property='og\\:image']").attr("content", headImage)
  var ogpath = window.location.pathname.toLowerCase()
  var ogurl = "http://www.lukesheard.com" + ogpath
  $("meta[property='og\\:url']").attr("content", ogurl)

  if(title === "Blog"){
    $("#header").css("padding-bottom", 0);
    $("#header").css("margin-bottom", 0)
  };

  if(title === "America"){
    initialize();
  }
  
  if (title === "Resume") {
    var $ul = $('.skills')

    $.each($ul, function(){
      var $liArr = $(this).children('li');
    
      $liArr.sort(function(a,b){
      var temp = parseInt( Math.random()*10 );
      var isOddOrEven = temp%2;
      var isPosOrNeg = temp>5 ? 1 : -1;
      return( isOddOrEven*isPosOrNeg );
      })
    .appendTo($(this));
    })
  } 
});

$(window).load(function(){

  var now = new Date();
  now = now.getTime();

  if(Date.parse(localStorage.date) !== null){
    var date = Date.parse(localStorage.date);
    var difference = now - date;
    difference = difference / 86400000;
      if(difference > 1){
      $('#myModal').modal('show');
    }
  } else {
    $('#myModal').modal('show');
  }
  
  localStorage.date = new Date();
});

var offset = 400;
var duration = 500;
$(window).scroll(function() {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(duration);
    } else {
        $('.back-to-top').fadeOut(duration);
    }
});
$('.back-to-top').click(function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, 2* duration);
    return false;
})