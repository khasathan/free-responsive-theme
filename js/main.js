$(document).ready(function() {
    $('#splash_slide').lightSlider({
        item: 1,
        loop: true,
        auto: true,
        pause: 10000
    });

    $('#search_box').on('focus', function() {
        $(this).css({
            background: '#fff'
        });
    });

    $('#search_btn').on('click', function() {
        var popup = $('#search_popup');
        var search_box = $('#search_popup_box');
        var visible = popup.is(':visible');

        if(visible) {
            popup.hide();
        } else {
            popup.show();
            search_box.focus();
        }
    });

    $('#search_popup_box').on('blur', function() {
        $('#search_popup').hide();
    });

    $('#collapse_menu').slicknav({
        label: '',
        duplicate: false
    });
});
