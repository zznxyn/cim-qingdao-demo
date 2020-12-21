// 移动端响应式匹配 px转rem=20

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var html = document.documentElement;
    var windowWidth = html.clientWidth;
    html.style.fontSize = windowWidth / 96 + 'px';
  }, false);
})();
window.onload=function(){
	document.addEventListener(
    "DOMContentLoaded",
    function() {
      var deviceWidth = document.documentElement.clientWidth;
      document.documentElement.style.fontSize = deviceWidth / 96 + "px";
    },
    false
  );

  window.onresize = function() {
    var deviceWidth = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = deviceWidth / 96 + "px";
  };
}