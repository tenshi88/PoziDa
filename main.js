'use strict';

{
    function setWord() {
      word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
      target.textContent = word;
      translation.textContent = translations[word]; // 日本語の単語を表示
      loc = 0;
    }
    
    const originalWords = [
      'omoshirokikotomonakiyowoomoshiroku',
      'suminashimonohakokoronarikeri',
      'naimonoyorimoimaarumononihikariwo',
      'kanpekiyorimochiisanashinpo',
      'jibuntomiraihakaerareru',
      'dekirudekirudekiru',
      'akirametarasokodeshiaisyuryoudayo',
      'yonohitohawarewonantomoiwabaie',
      'waganasukotowawarenomizoshiru',
      'henkaninarinasai,anatagasekaidemitaihenkani',

      'shippaidehanai,ichimantoorinoumakuikanaihakkenda',
      'toshiwokasaneteoirunodehanai,risouwoushinatteoiru',
      'michihahitotudehanai,hyakumosenmomanmoaru',
      'sukihasainou,minnnatensai',
      'hannguri-deare,orokamonodeare',
      'kanarazutenngasennninarutokigakuru',
      'kannpekidearukotoyorimazuowaraserukoto',
      'subetenoshippaihaidainaseikounitunagaru',
      'ime-jidekirumonohajitugensuru',
      'nasebanaru,nasanebanaranunanigotomo',

      'subetehayokunarutameniokiteiru',
      'tuiterutuiterutuiteru',
      'nijyuyojikandedekitakoto,yokattakotoha?',
      'nijyuyojikandekansyashitakotoha?',
      'saraniyokunarutamenidoushitaraii?',
      'kyoutanoshiminakoto,yaritaikotoha?',
      'kyounosaiyuusenjikouha?dousurebadekiru?',

    ];
    let words = [...originalWords]; // ゲームで使う単語リスト
    let word;
    let loc = 0;
    let startTime;
    let isPlaying = false;
    const target = document.getElementById('target');
    const translation = document.getElementById('translation'); // 日本語の単語を表示するための要素
  const resetButton = document.getElementById('reset'); // 追加
  const translations = { // 単語とその日本語の対応をマッピング
    'omoshirokikotomonakiyowoomoshiroku': '面白きこともなき世を面白く',
    'suminashimonohakokoronarikeri':'すみなしものは心なりけり',
    'naimonoyorimoimaarumononihikariwo': 'ないものよりも今あるものに光を',
    'kanpekiyorimochiisanashinpo':'完璧よりも小さな進歩',
    'jibuntomiraihakaerareru':'自分と未来は変えられる',
    'dekirudekirudekiru':'できるできるできる',
    'akirametarasokodeshiaisyuryoudayo':'あきらめたらそこで試合終了だよ',
    'yonohitohawarewonantomoiwabaie':'世の人は我を何ともいわば言え',
    'waganasukotowawarenomizoshiru':'我が為すことは我のみぞ知る',
    'henkaninarinasai,anatagasekaidemitaihenkani':'変化になりなさい、あなたが世界で見たい変化に',
    
    'shippaidehanai,ichimantoorinoumakuikanaihakkenda': '失敗ではない、１万通りのうまくいかない発見だ',
    'toshiwokasaneteoirunodehanai,risouwoushinatteoiru': '年を重ねて老いるのではない、理想を失って老いる',
    'michihahitotudehanai,hyakumosenmomanmoaru': '道は一つではない、百も千も万もある',
    'sukihasainou,minnnatensai': '好きは才能、みんな天才',
    'hannguri-deare,orokamonodeare': 'ハングリーであれ、愚か者であれ',
    'kanarazutenngasennninarutokigakuru': '必ず点が線になる時がくる',
    'kannpekidearukotoyorimazuowaraserukoto': '完璧であることよりまず終わらせること',
    'subetenoshippaihaidainaseikounitunagaru': '全ての失敗は偉大な成功につながる',
    'ime-jidekirumonohajitugensuru': 'イメージできるものは実現する',
    'nasebanaru,nasanebanaranunanigotomo': '為せば成る、為さねば成らぬ何事も',

    'subetehayokunarutameniokiteiru': '全ては良くなるために起きている',
    'tuiterutuiterutuiteru': 'ついてるついてるついてる',
    'nijyuyojikandedekitakoto,yokattakotoha?' : '24時間で出来たこと、良かったことは？',
    'nijyuyojikandekansyashitakotoha?' : '24時間で感謝したいことは？',
    'saraniyokunarutamenidoushitaraii?' : 'さらによくなるためにどうしたらいい？',
    'kyoutanoshiminakoto,yaritaikotoha?' : '今日楽しみなこと、やりたいことは？',
    'kyounosaiyuusenjikouha?dousurebadekiru?' : '今日の最優先事項は？どうすればできる？',

  };
// "252秒かかった"

    document.addEventListener('click', () => {
      if (isPlaying === true) {
        return;
      }
      isPlaying = true;
      startTime = Date.now();
      setWord(); // この行をここに移動
    });

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) {
      return;
    }
   
    loc++;
    
    // 1: _ed, 2: __d, 3: ___
    target.textContent = '_'.repeat(loc) + word.substring(loc);
 
    if (loc === word.length) {
      if (words.length === 0) {
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `素晴らしい!! ${elapsedTime} 秒です!`;
        const result2 = document.getElementById('result2');
        result2.textContent = `ステキな一日になりますよーに!!＼(^o^)／`;
        resetButton.style.display = 'block'; // この行を追加
        return;
      }
      setWord();
    }
  });
  // この部分を追加
  resetButton.addEventListener('click', () => {
    words = [...originalWords]; // 単語リストをリセット
    setWord();
    const result = document.getElementById('result');
    result.textContent = '';
    const result2 = document.getElementById('result2');
    result2.textContent = '';
    resetButton.style.display = 'none'; // ボタンを非表示にする
    isPlaying = false; // ゲームの状態をリセット
  });
}
