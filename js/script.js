import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/@splidejs/splide/dist/js/splide.js'
 
function slide(){
    if($('.splide').length>0){
        const splide = new Splide('.splide', {
            autoplay: true,
            type: 'loop',
            focus: 'center',
            autoWidth: true
        }).mount(); 
        
        splide.on('moved',function(){
            const title = $('.splide__slide.is-visible').attr('data-h3');
            const text  = $('.splide__slide.is-visible').attr('data-p');
            
            $('.slide_content').find('h3').text(title);
            $('.slide_content').find('p').text(text);
        })
    }else{
        return
    }
}
slide();


