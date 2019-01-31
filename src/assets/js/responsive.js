(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
    recalc = function () {
  var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    if(clientWidth <= 1920 && clientWidth >= 1080){
        docEl.style.fontSize = 100 * (clientWidth / (1920 * 1.2)) + 'px';
    }else if(clientWidth <= 1080){
        docEl.style.fontSize = 100 * (1080 / (1920 * 1.2)) + 'px';
    }else{
      docEl.style.fontSize = '100px';
    }
    };
  
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window);