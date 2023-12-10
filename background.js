window.addEventListener('load', function () {
  var list = document.getElementById('topnav-menu');
  var newItem = document.createElement('li');
  newItem.className = 'b-topnav__item-link single';
  newItem.textContent = 'mod @Stockgolm';
  newItem.style.fontSize = '11px';
  list.appendChild(newItem);
  var selectors = [
    '.b-player-block-strip',
    '.b-post__wait_status',
    'a[href="/help/JTJGcGF5bWVudHMlMkY=/"]'
	
  ];
  for (var i = 0; i < selectors.length; i++) {
    var elements = document.querySelectorAll(selectors[i]);
    for (var j = 0; j < elements.length; j++) {
      elements[j].parentNode.removeChild(elements[j]);
    }
  }
  var scripts = document.getElementsByTagName('script');
  for (var i = 0; i < scripts.length; i++) {
    if (scripts[i].src.includes('playerjs41.js?v=1')) {
      fetch(scripts[i].src)
        .then(response => response.text())
        .then(data => {
          var modifiedData = data.replace(
            'this.trigger(a.a.MANIFEST_LOADING,{url:t})',
            'this.trigger(a.a.MANIFEST_LOADING, {url: t.replace("https://stream.voidboost.cc/", "https://prx.ukrtelcdn.net/")})'
          );
          var script = document.createElement('script');
          script.textContent = modifiedData;
          document.head.appendChild(script);
        });
    }
  }
});
