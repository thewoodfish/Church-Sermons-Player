/*
 *  (c) The Standing Church International
 *  Author: Woodfish
 *  Version: 0.0.2
 *  Date: Apr 23 13:46:50
 */

function qs(val) {
    return document.querySelector(val);
}
  
function qsa(val) { 
    return document.querySelectorAll(val);
}
  
function ce(tag) {
    return document.createElement(tag);
}


function signal(a)
{
  var m = qs('#message');
  m.innerHTML = "<span id='m-inside' class='fs-130 shado'>" + a + "</span>";
  m.classList.remove("is-hidden");
  m.classList.remove("is-removed");
  m.classList.add('is-visible');

  setTimeout(function() {
      m.classList.remove("is-visible");
      m.classList.add("is-hidden");
      setTimeout(function() {
          m.classList.add("is-removed");
          m.innerHTML = "";
      }, 3000);
  },
  5000);
}

function change_theme(t=0) {
  var e = qs('.d__n');

  if (e.dataset.mode == "day") {
    // change to night
    e.dataset.mode = "night";
    e.src = "img/sun-x.png";
    
    // change logo
    qsa('.logo-img')[0].src = "img/logo-z.jpg";
    qsa('.logo-img')[1].src = "img/logo-z.jpg";
    
    // change CSS
    qs('.style').href = "css/dark-style.css";

    // set local storage
    localStorage.setItem('theme', 'night');

    // signal only when expicitly changed
    if (t) signal("Night mode activated");
  } else {
    // change to day
    e.dataset.mode = "day";
    e.src = "img/night.png";

    // change logo
    qsa('.logo-img')[0].src = "img/logo.jpg";
    qsa('.logo-img')[1].src = "img/logo.jpg";
    
    // change CSS
    qs('.style').href = "css/style.css";      

    // set local storage
    localStorage.setItem('theme', 'day');

    if (t) signal("Day mode activated");
  }
}

let sermons = [
    [
      "Commanding the Supernatural",
      "https://www.thestandingchurch.com/storage/sermons/2022/02/Commanding-the-Supernatural-Part-1.mp3",
      "img/Commanding-the-Supernatural-Part-1-mp3-image.jpg",
      "02:35:50"
    ],
    [
      "Divine Security and Protection",
      "https://www.thestandingchurch.com/storage/sermons/2022/02/Divine-Security-and-Protection-Your-Inheritance-in-Christ.mp3",
      "img/Divine-Security-and-Protection-Your-Inheritance-in-Christ-mp3-image.jpg",
      "00:57:18"
    ],
    [
      "Dominating through Wisdom",
      "https://www.thestandingchurch.com/storage/sermons/2021/09/Dominating-Through-Wisdom-A.mp3",
      "img/Dominating-through-Wisdom.jpg",
      "00:40:47"
    ],
    [
      "Go into your Future",
      "https://www.thestandingchurch.com/storage/sermons/2021/07/Go-Into-Your-Future-1.mp3",
      "img/Go-into-your-future.jpg",
      "01:10:55"

    ],
    [
      "God is not Angry with You!",
      "https://www.thestandingchurch.com/storage/sermons/2021/07/God-is-not-Angry-with-You.mp3",
      "img/God-is-not-angry-with-you-2.jpg",
      "00:27:48"
    ],
    [
      "The Wisdom of God",
      "https://www.thestandingchurch.com/storage/2022/01/The-Wisdom-of-God.mp3",
      "img/The-Wisdom-of-God-3-mp3-image.jpg",
      "00:47:04"
    ],
    [
      "Winning Invincible Battles",
      "https://www.thestandingchurch.com/storage/sermons/2021/07/Winning-Invisibles-Battles-A.mp3",
      "img/Winning-Invisible-Battles.jpg",
      "00:51:40"
    ],
    [
      "You will be Great!",
      "https://www.thestandingchurch.com/storage/sermons/2021/04/You-Will-Be-Great-.mp3",
      "img/You-will-be-great-2.jpg",
      "01:37:28"
    ],
    [
      "The Strength of God",
      "https://www.thestandingchurch.com/storage/sermons/2022/02/The-Strength-of-God-2.mp3",
      "img/You-will-be-great-2.jpg",
      "00:44:05"
    ],
    [
      "The Spirit of Faith: David",
      "https://www.thestandingchurch.com/storage/2020/06/The-Spirit-of-Faith-The-Faith-of-David.mp3",
      "img/The-Spirit-of-Faith-David.jpg",
      "00:43:18"
    ],
    [
      "The Spirit of Faith: Abraham",
      "https://www.thestandingchurch.com/storage/2020/06/The-Spirit-Of-Faith-The-Faith-Of-Abraham-1.mp3",
      "img/The-Spirit-of-Faith-Abraham.jpg",
      "00:35:45"
    ],
    [
      "The Process of God",
      "https://www.thestandingchurch.com/storage/2022/01/The-Process-of-God.mp3",
      "img/The-Process-of-God-mp3-image.jpg",
      "01:39:10"
    ],
    [
      "The Power to Command Life",
      "https://www.thestandingchurch.com/storage/2022/01/The-Power-to-Command-Life-Part-A.mp3",
      "img/The-Power-to-Command-Life-Part-A-mp3-image.jpg",
      "01:52:11"
    ],
    [
      "The Power of Righteousness",
      "https://www.thestandingchurch.com/storage/2020/06/The-Power-Of-Righteousness-In-Greatness-1-.mp3",
      "img/Righteousness.jpeg",
      "01:10:31"
    ],
    [
      "The Power of Prayer in Greatness",
      "https://www.thestandingchurch.com/storage/sermons/2021/06/The-Power-of-Prayer-In-Greatness.mp3",
      "img/The-Power-of-Prayer-in-Greatness.jpg",
      "01:19:54"
    ],
    [
      "The Power of Divine Health",
      "https://www.thestandingchurch.com/storage/2020/06/The-Power-of-Divine-Health-In-Greatness-1.mp3",
      "img/The-Power-of-Divine-Health-In-Greatness-1-mp3-image.jpg",
      "00:40:31"
    ],
    [
      "The Mercy of God",
      "https://www.thestandingchurch.com/storage/sermons/2022/02/The-Mercy-of-God.mp3",
      "img/The-Mercy-of-God-2.jpg",
      "01:47:00"
    ],
    [
      "The Faith to Command Resources",
      "The-Faith-to-Command-Resources-mp3-image.jpg",
      "img/The-Faith-to-Command-Resources-mp3-image.jpg",
      "01:45:26"
    ],
    // [
    //   "Start There!",
    //   "https://www.thestandingchurch.com/storage/sermons/2021/06/Start-There.mp3",
    //   "img/Start-there.jpg"
    // ],
    [
      "Resources from Impossible Places",
      "https://www.thestandingchurch.com/storage/sermons/2022/02/Resources-from-Impossible-Places.mp3",
      "img/General-album-cover-2-162x162.jpg",
      "02:46:10"
    ],
    [
      "Reprogramming Your Mind for Wealth",
      "https://www.thestandingchurch.com/storage/2020/06/Reprogramming-Your-Mind-for-Wealth-A.mp3",
      "img/WhatsApp-Image-2019-06-13-at-08.06.16-1.jpeg",
      "00:48:26"
    ],
    [
      "Prayer: Birthing Things Through Prayer",
      "https://www.thestandingchurch.com/storage/sermons/2021/07/03-Birthing-Things-Through-Prayer-Part-A.mp3",
      "img/Birthing-things•The-Standing-Church.jpg",
      "01:36:04"
    ],
    [
      "Made For More",
      "https://www.thestandingchurch.com/storage/sermons/2021/02/Made-For-More.mp3",
      "img/Made-For-More-mp3-image.jpg",
      "01:38:00"
    ],
    [
      "Joyful Harvest",
      "https://www.thestandingchurch.com/storage/sermons/2021/03/Joyful-Harvest.mp3",
      "img/Joyful-Harvest.jpg",
      "01:00:59"
    ],
    [
      "Great Harvest!",
      "https://www.thestandingchurch.com/storage/sermons/2021/10/Great-Harvest.mp3",
      "img/Great-Harvest.jpeg",
      "01:29:27"
    ],
    [
      "Dare to do Big Things",
      "https://www.thestandingchurch.com/storage/sermons/2022/03/Dare-to-do-Big-Things.mp3",
      "img/Dare-to-DoBig-things.jpg",
      "00:59:28"
    ],
    [
      "Commanding the Supernatural : The Word Route",
      "https://www.thestandingchurch.com/storage/sermons/2022/02/Commanding-the-Supernatural-Part-2.mp3",
      "img/Commanding-the-Supernatural-Part-Word-1-mp3-image.jpg",
      "01:52:49"
    ]
];

var errors = [
  "sorry this is taking so long...",
  "the message might be caught up in traffic...",
  "please check your internet connection...",
  "please have a little patience, will you...",
  "maybe you should just give up and reload...",
  "let's say a prayer for the safe delivery of the message..."
];


var ul = qs('.main__list--playlist');


// get and set audio
var audio = qs('#audio');
var flag = false;
var g = 0;
var err_int = -1; // interval timer

for (var i = 0; i < sermons.length; i++) {
  buildDom(i);
}

// deal with day/night setting
if (localStorage.getItem('theme')) {
  localStorage.getItem('theme') == "day" ? qs('.d__n').dataset.mode = "night" : qs('.d__n').dataset.mode = "day";
  change_theme();
}


qs('.msg_search').addEventListener('keyup', (e) => {
  ul.innerHTML = "";
  if (e.target.value == '') {
    for (var i = 0; i < sermons.length; i++) {
      buildDom(i);
    }
  } else {
    ul.innerHTML= "";
    for (var j = 0; j < sermons.length; j++) {
      var s = sermons[j][0].toLowerCase();
      if (s.indexOf(e.target.value.toLowerCase()) >= 0) 
        buildDom(j);
    }

    if (!ul.innerHTML) ul.innerHTML = '<p class="white">No results found for "' + e.target.value + '".';
  }
}, false);

function buildDom(i) {
  var li = ce('li');
  li.className = "single-item";

  var a = ce('a');
  a.dataset.playlist = ""
  a.dataset.title = sermons[i][0];
  a.dataset.artist = "Pst. Tara Akinkuade";
  a.dataset.img = sermons[i][2];
  a.dataset.href = sermons[i][1];
  a.className = "single-item__cover trigger_-_point-" + i;

  var img = ce('img');
  img.src = sermons[i][2];
  img.className = "aud_trigger";
  img.dataset.index = i;

  var div = ce('div');
  div.className = "single-item__title aud_trigger";
  div.dataset.index = i;

  var h4 = ce('h4');
  h4.innerText = sermons[i][0];


  var span = ce('span');
  span.innerText = "Pst. Tara Akinkuade";

  var a1 = ce('a');
  a1.className = "single-item__add";

  var a2 = ce('a');
  a2.className = "single-item__export down__load";
  a2.dataset.index = i;

  var span1 = ce('span');
  span1.className = "single-item__time";
  span1.innerText = sermons[i][3] ? sermons[i][3] :  "--:--:--";

  var unik = '" data-index=' + i;

  var svg = '<svg xmlns="http://www.w3.org/2000/svg" data-active=false class="svg-pause-' + i + ' aud_trigger ' + unik + ' viewBox="0 0 24 24"><path class="aud_trigger ' + unik + ' d="M18.54,9,8.88,3.46a3.42,3.42,0,0,0-5.13,3V17.58A3.42,3.42,0,0,0,7.17,21a3.43,3.43,0,0,0,1.71-.46L18.54,15a3.42,3.42,0,0,0,0-5.92Zm-1,4.19L7.88,18.81a1.44,1.44,0,0,1-1.42,0,1.42,1.42,0,0,1-.71-1.23V6.42a1.42,1.42,0,0,1,.71-1.23A1.51,1.51,0,0,1,7.17,5a1.54,1.54,0,0,1,.71.19l9.66,5.58a1.42,1.42,0,0,1,0,2.46Z"/></svg><svg data-active=true class="svg-play-' + i + ' aud_trigger ' + unik + ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path class="aud_trigger ' + unik + ' d="M16,2a3,3,0,0,0-3,3V19a3,3,0,0,0,6,0V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-2,0V5a1,1,0,0,1,2,0ZM8,2A3,3,0,0,0,5,5V19a3,3,0,0,0,6,0V5A3,3,0,0,0,8,2ZM9,19a1,1,0,0,1-2,0V5A1,1,0,0,1,9,5Z"/></svg>';
  var svg2 = '<svg xmlns="http://www.w3.org/2000/svg" class="down__load' + unik + ' viewBox="0 0 24 24"><path  class="down__load' + unik + ' d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"></path></svg>';

  a.appendChild(img);
  a.innerHTML += svg;

  div.appendChild(h4);
  div.appendChild(span);

  // a1.innerHTML += svg1;

  a2.innerHTML += svg2;

  li.appendChild(a);
  li.appendChild(div);
  // li.appendChild(a1);
  li.appendChild(a2);
  li.appendChild(span1);

  ul.appendChild(li);

  // select all svg 
}

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains('aud_trigger')) {
    // extract DOM element
    var index = e.target.dataset.index;
    var li = qs('.trigger_-_point-' + index);
    var ci = qs('.cover__img');

    li.classList.add('active');
    // remove active from every other list element
    [].forEach.call(qsa('.single-item__cover'), (s) => {
      if (s != li) {
        if (s.classList.contains('active')) s.classList.remove('active');
        if (s.classList.contains('pause')) s.classList.remove('pause');
        if (s.classList.contains('play')) s.classList.remove('play');
      }
    });

    qs('.cmd-title').innerText = li.dataset.title;
    qs('.player__title').innerText = li.dataset.title;
    
    // get image
    switch (e.target.tagName.toLowerCase()) {
      case 'path':
        ci.src = e.target.parentElement.parentElement.dataset.img;
        break;
      case 'svg':
        ci.src = e.target.parentElement.dataset.img;
        break;
      case 'img':
        ci.src = e.target.src;
        break;
      case 'a':
        ci.src = e.target.dataset.img;
        break;
    }

    if (li.classList.contains('play')) {
      li.classList.add('pause');
      li.classList.remove('play');
    } else {
      li.classList.add('play');
      li.classList.remove('pause');      
    }

    // is the audio already playing or not
    if (audio.currentTime && (li.dataset.title.toLowerCase() == audio.dataset.title.toLowerCase())) 
      li.classList.contains('pause') ? audio.pause() : audio.play();
    else {
      // alert user
      signal("Please wait, fetching audio message from server...");

      // set error messages
      flag = false;
      err_int = setInterval(function() {
        if (flag) clearInterval(err_int);
        else {
          // pick random error
          signal(errors[g]);
          g == 6 ? g = 0 : g++;
        }
      }, 10000);

      // change audio src
      audio.src = li.dataset.href;
      audio.dataset.title = li.dataset.title;
      audio.play();
    }
  } else if (e.target.classList.contains('plyr__control') && e.target.dataset.plyr == 'play') {
    // scan through playlist to find playing message
    var l;
    var msgs = qsa('.single-item__cover');

    for (var i = 0; i < msgs.length; i++) {
      if (msgs[i].classList.contains('active')) {
        l = msgs[i];
        break;
      }
    }

    if (e.target.ariaLabel.toLowerCase() == "pause") {
      if (l) l.classList.remove('play');
      if (l) l.classList.add('pause');
    }

    if (e.target.ariaLabel.toLowerCase() == "play") {
      if (l) l.classList.remove('pause');
      if (l) l.classList.add('play');
    }

  } else if (e.target.classList.contains('plyr__control--next')) {
    // play next audio

    var msgs = qsa('.single-item__cover');

    // if prophecy is playing onclick
    if (qs('.cmd-title').innerText.indexOf("ophecy for the year 202") != -1) 
      msgs[0].firstElementChild.click();
    else {
      for (var i = 0; i < msgs.length; i++) {
        if (msgs[i].classList.contains('active')) {
          // we've found the active one
          // check if its not the end of the list
          if (i == (msgs.length - 1)) {
            // wrap round the playlist
            msgs[0].firstElementChild.click();
            break;
          } else {
            // just play next message
            msgs[++i].firstElementChild.click();
            break;
          }
        }
      }
    }
  } else if (e.target.classList.contains('plyr__control--prev')) {
    // play prev audio

    var msgs = qsa('.single-item__cover');

    // if prophecy is playing onclick
    if (qs('.cmd-title').innerText.indexOf("ophecy for the year 202") != -1) 
      msgs[0].firstElementChild.click();
    else {
      for (var i = 0; i < msgs.length; i++) {
        if (msgs[i].classList.contains('active')) {
          // we've found the active one
          // check if its not the beginning og the list
          if (!i) {
            // wrap round the playlist
            msgs[msgs.length - 1].firstElementChild.click();
            break;
          } else {
            // just play prev message
            msgs[--i].firstElementChild.click();
            break;
          }
        }
      }
    }
  } else if (e.target.classList.contains('down__load')) {
    // download file

    // extract DOM element
    var li = qs('.trigger_-_point-' + e.target.dataset.index);

    var a = ce('a');
    a.download = li.dataset.title;
    a.href = li.dataset.href;
    a.target = '_blank';

    a.style.display = "none";

    document.body.appendChild(a);
    a.click();
  } else if (e.target.classList.contains('d__n')) {
    // day night setting
    change_theme(3);
  }
}, false);

// signal oncanplay
qs("#audio").addEventListener('canplay', (e) => {
  flag = true;

  signal('Ready to play "' + e.target.dataset.title + '"');
  e.target.play();
}, false);
