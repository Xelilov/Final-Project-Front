
// <<<<<<<<<<<<<<<<<<<<<<< Index.html<<<<<<<<<<<<<<<<<<<<<< \\

$('#index_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoHeight:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



$('#clothing_content .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoHeight:true,    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})






// <<<<<<<<<<<<<<<<<<<<<<<  Left Search <<<<<<<<<<<<<<<<<<<<<< \\

 $("._material ul li").click(function(){
    $(this).remove(); 
     $("._cl_selected ul").append($(this))
    
 })



// <<<<<<<<<<<<<<<<<<<<<<<  Product <<<<<<<<<<<<<<<<<<<<<< \\

var old_img=$('._cl_product_img img').attr('src')

$("._cl_product_img_list div div div img").click(function(){ 
    $('._cl_product_img img').attr('src',$(this).attr('src'))
    old_img=$('._cl_product_img img').attr('src')
})




$("._cl_product_img_list div div div img").hover(function(){
    $('._cl_product_img img').attr('src',$(this).attr('src')); 
})

$("._cl_product_img_list div div div img").mouseleave(function(){
    $('._cl_product_img img').attr('src',old_img);    
})



// <<<<<<<<<<<<<<<<<<<<<<<  Product  Quantity <<<<<<<<<<<<<<<<<<<<<< \\
$(document).ready(function(){

var quantitiy=0;
   $('.quantity-right-plus').click(function(e){
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        $('#quantity').val(quantity + 1);
    });

     $('.quantity-left-minus').click(function(e){
        e.preventDefault();
        var quantity = parseInt($('#quantity').val());
        if(quantity>0){
            $('#quantity').val(quantity - 1);
            }
    });
    
});