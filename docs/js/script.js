//Слайдер на сайті з кастомними налаштуваннями

$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        adaptiveHeight: true,
        adaptiveWidth: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img_menu/arror_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img_menu/arror_right.png"></button>'
      });
      
      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSlide(item) {
        $(item).each(function(i) {
          $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          });
        });
      }

      toggleSlide('.catalog-item__link');
      toggleSlide('.catalog-item__back');


      // Модальні вікна при замовленні та задати запитання

      $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
      });
      $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      });

      $('.catalog-item__btn').each(function(i){
        $(this).on('click', function(){
          $('#order .modal__item').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow');
        });
      });

      // Форма підтвердження замовлення ( Нажаль не працює)

      $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "phpmailer/mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });

    // Плавний скрол вниз під час натискання на категорію продуктів

    $(".catalog__tab").click(function() {
      
          $('html, body').animate({
              scrollTop: $(".title__menu").offset().top - 100
          });
      });
});

