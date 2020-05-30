const ap = new APlayer({
  container: document.getElementById('aplayer'),
  mini: false,
  autoplay: false,
  theme: '#e9e9e9',
  loop: 'all',
  order: 'random',
  preload: 'auto',
  volume: 0.7,
  mutex: true,
  listFolded: false,
  listMaxHeight: 90,
  lrcType: 1,
  audio: [
    {
      name: 'name',
      artist: 'artist',
      url:
        'https://zhangchen2397.github.io/audioPlayer/example/asset/music/once.mp3',
      cover: 'https://cdn.jsdelivr.net/gh/brightzoe/img/ieslpod',
      lrc: '[00:00.00]APlayer\n[00:04.01]is\n[00:08.02]amazing',

      theme: '#ebd0c2',
    },
  ],
})
ap.lrc.hide() //不显示歌词
createBtn()
document.getElementById('toggle').onclick = toggle
document.getElementsByClassName('aplayer-pic').onclick = toggle
document.getElementById('stop').onclick = stop
document.getElementById('rew').onclick = rew
document.getElementById('ff').onclick = ff

function createBtn() {
  //创建四个button
  let aplayer = document.getElementById('aplayer')
  let btn1 = document.createElement('button')
  let btn2 = document.createElement('button')
  let btn3 = document.createElement('button')
  let btn4 = document.createElement('button')
  btn1.id = 'toggle'
  btn1.title = 'play/pause'

  btn2.id = 'stop'
  btn2.title = 'stop'

  btn3.id = 'rew'
  btn3.title = '-5s'

  btn4.id = 'ff'
  btn4.title = '+5s'

  aplayer.appendChild(btn1)
  aplayer.appendChild(btn2)
  aplayer.appendChild(btn3)
  aplayer.appendChild(btn4)
  let i1 = document.createElement('i')
  let i2 = document.createElement('i')
  let i3 = document.createElement('i')
  let i4 = document.createElement('i')
  btn1.appendChild(i1)
  btn2.appendChild(i2)
  btn3.appendChild(i3)
  btn4.appendChild(i4)

  i1.id = 'i1'
  i1.className = 'iconfont icon-bofang1'
  i1.innerHTML = 'play'

  i2.id = 'i2'
  i2.className = 'iconfont icon-tingzhi'
  i2.innerHTML = 'stop'

  i3.id = 'i3'
  i3.className = 'iconfont icon-kuaituimiao'
  i3.innerHTML = '-5s'

  i4.id = 'i4'
  i4.className = 'iconfont icon-kuaijinmiao'
  i4.innerHTML = '+5s'
}

function toggle() {
  //更改play/pause的显示,包括icon和text
  ap.toggle()
  changeToggle()
  function changeToggle() {
    if (ap.paused) {
      i1.innerHTML = 'play'
      i1.className = 'iconfont icon-bofang1'
    } else {
      i1.innerHTML = 'pause'
      i1.className = 'iconfont icon-zanting'
    }
  }
}

function removeClass(element, classRomove) {
  //删除一个元素的class
  var classNames = ' ' + element.className + ' '

  classNames = classNames.replace(' ' + classRomove + ' ', ' ')

  //String.trim(classNames);

  element.className = classNames
}

function stop() {
  ap.seek(0)
  ap.pause()
}

function rew() {
  //快退5s
  let targetNumber = ap.audio.currentTime - 5 > 0 ? ap.audio.currentTime - 5 : 0
  ap.seek(targetNumber) //target time
}

function ff() {
  //快进5s
  let targetNumber =
    ap.audio.currentTime + 5 < ap.audio.duration
      ? ap.audio.currentTime + 5
      : ap.audio.duration
  ap.seek(targetNumber) //target time
}
//TODO: 左右建快进快退 & 再做一个音量条
