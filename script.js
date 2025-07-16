let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-time");
let curr_track = document.createElement('audio');

let isRandom = false;
let randomIcon = document.querySelector('.random-track i');

let track_index = 0;
let isPlaying = false;
let updateTimer;

const music_list = 
[
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الفاتحة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/001.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "البقرة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/002.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "ال عمران",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/003.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "النساء",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/004.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "المائدة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/005.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الأنعام",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/006.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الأعراف",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/007.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الأنفال",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/008.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "التوبة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/009.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "يونس",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/010.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "هود",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/011.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "يوسف",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/012.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الرعد",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/013.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "ابراهيم",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/014.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الحجر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/015.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "النحل",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/016.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الاسراء",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/017.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الكهف",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/018.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "مريم",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/019.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "طه",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/020.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الأنبياء",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/021.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الحج",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/022.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "المؤمنون",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/023.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "النور",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/024.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الفرقان",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/025.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الشعراء",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/026.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "النمل",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/027.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "القصص",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/028.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "العنكبوت",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/029.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الروم",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/030.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "لقمان",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/031.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "السجدة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/032.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الأحزاب",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/033.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "سبأ",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/034.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "فاطر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/035.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "يس",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/036.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الصافات",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/037.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "ص",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/038.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الزمر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/039.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "غافر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/040.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "فصلت",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/041.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الشورى",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/042.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الزخرف",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/043.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الدخان",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/044.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الجاثية",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/045.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الأحقاف",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/046.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "محمد",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/047.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الفتح",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/048.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الحجرات",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/049.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "ق",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/050.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الذاريات",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/051.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الطور",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/052.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "النجم",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/053.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "القمر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/054.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الرحمن",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/055.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الواقعة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/056.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الحديد",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/057.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "المجادلة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/058.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الحشر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/059.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الممتحنة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/060.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الصف",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/061.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الجمعة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/062.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "المنافقون",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/063.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "التغابن",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/064.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الطلاق",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/065.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "التحريم",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/066.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الملك",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/067.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "القلم",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/068.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الحاقة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/069.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "المعارج",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/070.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "نوح",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/071.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الجن",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/072.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "المزمل",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/073.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "المدثر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/074.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "القيامة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/075.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الإنسان",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/076.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "المرسلات",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/077.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "النبأ",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/078.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "النازعات",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/079.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "عبس",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/080.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "التكوير",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/081.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الإنفطار",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/082.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "المطففين",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/083.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الإنشقاق",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/084.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "البروج",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/085.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الطارق",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/086.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الأعلى",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/087.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الغاشية",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/088.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الفجر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/089.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "البلد",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/090.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الشمس",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/091.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الليل",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/092.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الضحى",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/093.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الشرح",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/094.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "التين",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/095.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "العلق",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/096.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "القدر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/097.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "البينة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/098.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الزلزلة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/099.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "العاديات",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/100.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "القارعة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/101.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "التكاثر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/102.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "العصر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/103.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الهمزة",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/104.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الفيل",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/105.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "قريش",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/106.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الماعون",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/107.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الكوثر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/108.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الكافرون",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/109.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "النصر",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/110.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "المسد",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/111.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الإخلاص",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/112.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الفلق",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/113.mp3",
    },
    {
        img : "images/retouch_1752672672488.JPEG",
        name : "الناس",
        artist : "أحمد عبد العزيز النفيس",
        music : "sound/114.mp3",
    },
];

loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
}
function reset()
{
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack()
{
    isRandom ? pauseRandom() : playRandom();
}
function playRandom()
{
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom()
{
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack()
{
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack()
{
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(

){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack()
{
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack()
{
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack()
{
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo()
{
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume()
{
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate()
{
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
