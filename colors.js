var Links = {
    SetColor: function(color) {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while(i < alist.length) {
      alist[i].style.color = color;
      i++;
    }
  }
}
var Body = {
  SetColor: function(color) {
    document.querySelector('body').style.color = color;
  },
  SetBackgroundcolor: function(color) {
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self) {
  var target = document.querySelector('body');
  if (self.value === 'night') {
    Body.SetBackgroundcolor('black');
    Body.SetColor('white');
    self.value = 'day';
    Links.SetColor('powderblue');
  }
  else {
    Body.SetBackgroundcolor('white');
    Body.SetColor('black');
    self.value = 'night';
    Links.SetColor('blue');
  }
}
