//main2 bar js//
$(function(){
    $('.container > .thumb > li').on('click', function(){
        let getUrl = $(this).find('img').attr('src');
        console.log(getUrl);
        $('.container > figure > img ').attr('src', getUrl) ;
      })
});