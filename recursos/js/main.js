$(document).ready(function() {
    $('ul.tabs li a:first').addClass('active');
    $('div.secciones').hide();
    $('div.secciones:first').show();

    $('ul.tabs li a').click(function() {
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('div.secciones').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});