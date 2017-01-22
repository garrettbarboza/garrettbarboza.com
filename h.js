(function(){
  var colors = [
    '#ff00ff', '#00ffff', '#00ff00', '#ffff00', '#ff0000', '#7920FF', '#FD0987',
    '#FF3300', '#FF6EC7', '#00FF66', '#4D4DFF', '#67C8FF', '#7BFB2D', '#AAFF00',
    '#FF00AA', '#AA00FF', '#FF7F00', '#228DFF', '#ff6d38', '#f90000', '#fd8b25',
    '#25d7fb', '#7920ff', '#fe51c3', '#ff9072', '#ff63a2', '#e3e641',
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
