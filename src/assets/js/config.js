(function($) {
    $(function(){

        // $(document).ready(function() {
        //     $('[data-fancybox]').fancybox();
        // });

        $('[data-modaal]').modaal({
            // fullscreen: true,
            background_scroll: false,
          });

        //ナビ
        if($('#fn_guest__triger').length){
            $('#fn_guest__triger').on("click", function () {
                $(this).toggleClass('open');
                $('#pg_guiness__guestWrap').toggleClass('active');
            });
        }

    });
})(jQuery);

