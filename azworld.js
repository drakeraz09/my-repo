// Please don't get at me for this  MediaWiki just takes forever to cache JS lmao
console.log("Hi twin it's working");
console.log("Yippee!");
$(function() {
    $('.navbox').each(function() {
        var $navbox = $(this);
        var $title = $navbox.find('.navbox-title');
        var $toggle = $('<span>')
            .css({'float': 'right', 'cursor': 'pointer', 'font-weight': 'normal', 'font-size': '88%'})
            .text('[collapse]');
        var $lists = $navbox.find('.navbox-list, .navbox-group, .navbox-abovebelow');
        var collapsed = false;
        $toggle.on('click', function() {
            collapsed = !collapsed;
            $lists.toggle(!collapsed);
            $toggle.text(collapsed ? '[expand]' : '[collapse]');
        });
        $title.append($toggle);
    });
});