(function(){
  var colors = [
    "#656555",
    "#2B2B2B",
    "#383838",
    "#3F3F3F",
    "#494949",
    "#4F4F4F",
    "#5F5F5F",
    "#6F6F6F",
    "#DCA3A3",
    "#CC9393",
    "#BC8383",
    "#AC7373",
    "#9C6363",
    "#8C5353",
    "#DFAF8F",
    "#F0DFAF",
    "#E0CF9F",
    "#D0BF8F",
    "#5F7F5F",
    "#7F9F7F",
    "#8FB28F",
    "#9FC59F",
    "#AFD8AF",
    "#BFEBBF",
    "#93E0E3",
    "#94BFF3",
    "#8CD0D3",
    "#7CB8BB",
    "#6CA0A3",
    "#5C888B",
    "#4C7073",
    "#366060",
    "#DC8CC3"
  ];

  function range(start, count) {
    return Array.apply(0, Array(count))
      .map(function (element, index) {
        return index + start;
      });
  }

  function random_element(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  var intervals = range(3, 20).map(function(e) { return e * 33 });
  var blinder = null;

  function blind_user() {
    document.body.style.backgroundColor = random_element(colors);
  }

  function set_random_interval(f, intervals) {
    clearInterval(blinder);
    blinder = setInterval(f, random_element(intervals));
  }

  setInterval(
    function me() {
      set_random_interval(blind_user, intervals); return me;
    }(),
    1000);
})();
