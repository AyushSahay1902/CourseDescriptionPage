$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    })
    $('#login').click(function(){
        $('.login-form').addClass('popup');
    })

    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    })

    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        // $('.login-form').removeClass('popup');
    })
    var videoPlayer = document.getElementById("video-player");
    var myVideo = document.getElementById("myVideo");
    function playVideo(file){
        myVideo.src = file;
        videoPlayer.style.display = "block";
    }
    function stopVideo(){
        videoPlayer.style.display="none";
    }

})

