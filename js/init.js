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
    }); // end of document ready
})(jQuery); // end of jQuery name space

function writeSideNav() {
    $.ajax({
        url: "sidenav.html", //パスはcommon.jsが読み込まれたHTMLファイルが基準になります
        cache: false, //キャッシュを利用するか（お好みで）
        async: false, //非同期で読み込むか（お好みで）
        success: function(html) {
            $(".side-nav").html(html);
        }
    });
}

function writeFooter() {
    $.ajax({
        url: "footer.html", //パスはcommon.jsが読み込まれたHTMLファイルが基準になります
        cache: false, //キャッシュを利用するか（お好みで）
        async: false, //非同期で読み込むか（お好みで）
        success: function(html) {
            $(".page-footer").html(html);
        }
    });
}

function sendChrome(url){
  var userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('chrome') != -1){
    console.log(url);
    // 確認ボタン付きのダイアログボックスを表示する
    var extId = "ohncgafccgdbigbbikgkfbkiebahihmb";
    chrome.runtime.sendMessage(extId, {url : url});
  }else{
    Materialize.toast('Chromeブラウザのみ対応', 4000);
  }
  return false;
}
