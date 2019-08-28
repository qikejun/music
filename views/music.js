var ap = new APlayer({
  container: document.getElementById('aplayer'),
  mini: false,
  autoplay: false,
  theme: '#FADFA3',
  loop: 'all',
  order: 'random',
  preload: 'auto',
  volume: 0.7,
  mutex: true,
  listFolded: false,
  listMaxHeight: 90,
  lrcType: 3,
  audio: [
    {
      name: "发如雪",
      artist: '周杰伦',
      url: 'https://yunpenggit.github.io/music/jay/发如雪_周杰伦_128K.mp3',
      cover: 'https://yunpenggit.github.io/music/jay/十一月的萧邦.jpg',
      lrc: 'https://yunpenggit.github.io/music/jay/发如雪_周杰伦_128K.lrc',
      theme: '#ebd0c2'
    }, {
      name: "等你下课",
      artist: '周杰伦',
      url: 'https://yunpenggit.github.io/music/jay/等你下课_周杰伦_128K.mp3',
      cover: 'https://yunpenggit.github.io/music/jay/等你下课.jpg',
      lrc: 'https://yunpenggit.github.io/music/jay/等你下课_周杰伦_128K.lrc',
      theme: '#46718b'
    }, {
      name: "告白气球",
      artist: '周杰伦',
      url: 'https://yunpenggit.github.io/music/jay/告白气球_周杰伦_128K.mp3',
      cover: 'https://yunpenggit.github.io/music/jay/周杰伦的床边故事.jpg',
      lrc: 'https://yunpenggit.github.io/music/jay/告白气球_周杰伦_128K.lrc',
      theme: '#ebd0c2'
    }, {
      name: "兰亭序",
      artist: '周杰伦',
      url: 'https://yunpenggit.github.io/music/jay/兰亭序_周杰伦_128K.mp3',
      cover: 'https://yunpenggit.github.io/music/jay/摩杰座.jpg',
      lrc: 'https://yunpenggit.github.io/music/jay/兰亭序_周杰伦_128K.lrc',
      theme: '#46718b'
    }
  ]
});
