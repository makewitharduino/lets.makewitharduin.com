(function($) {
    $(function() {
        writeFooter();
        // Plugin initialization
        $('.button-collapse').sideNav({
            'edge': 'left'
        });
        $('.parallax').parallax();
        $('.collapsible').collapsible({
            accordion: true // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
        $('.scrollspy').scrollSpy();
        $('.slider').slider({
            full_width: true
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space

$(function () {
    var clipboard = new Clipboard('.btn');
    clipboard.on('success', function(e) {
        Materialize.toast('cliped!', 4000)
        e.clearSelection();
    });
    clipboard.on('error', function(e) {
      //失敗時の処理
    });
});

function writeSideNav() {
    $.ajax({
        url: '/sidenav.html', //パスはcommon.jsが読み込まれたHTMLファイルが基準になります
        cache: false, //キャッシュを利用するか（お好みで）
        async: false, //非同期で読み込むか（お好みで）
        success: function(html) {
            $('.side-nav').html(html);
        }
    });
}

function writeFooter() {
    $.ajax({
        url: '/footer.html', //パスはcommon.jsが読み込まれたHTMLファイルが基準になります
        cache: false, //キャッシュを利用するか（お好みで）
        async: false, //非同期で読み込むか（お好みで）
        success: function(html) {
            $('.page-footer').html(html);
        }
    });
}

function sendChrome(url) {
    var userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('chrome') !== -1) {
        // 確認ボタン付きのダイアログボックスを表示する
        var extId = 'ohncgafccgdbigbbikgkfbkiebahihmb';
        chrome.runtime.sendMessage(extId, {
            url: url
        });
    } else {
        Materialize.toast('Chromeブラウザのみ対応', 4000);
    }
    return false;
}

$(document).ready(function() {
    var pagetop = $('.pagetop');
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            pagetop.css('visibility', 'visible');
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function() {
        $('body, html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
