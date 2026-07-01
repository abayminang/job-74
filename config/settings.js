/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║           OCEAN BIRTHDAY — SEMUA PENGATURAN DI SINI         ║
 * ║  Kamu HANYA perlu edit file ini. Tidak perlu buka file lain. ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  Cara pakai:
 *  1. Baca setiap bagian (1–7)
 *  2. Ganti nilai yang ada tanda  ← GANTI INI
 *  3. Simpan file → refresh browser
 */

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   1. PIN MASUK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PIN 4–6 angka yang harus diketik tamu untuk membuka website.  */
const WEBSITE_PIN = "7373";              // ← GANTI PIN

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   2. NAMA PENERIMA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nama yang muncul di halaman utama (hero).                      */
const RECIPIENT_NAME = "Htar";           // ← GANTI NAMA


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   3. MUSIK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FILE MUSIK  → taruh di:  assets/music/song1.mp3
   FOTO COVER  → taruh di:  assets/music/song1.jpeg  (rasio 3:4)
   Lalu ganti judul dan nama artis di bawah ini.                  */
const MUSIC_TRACKS = [
  {
    title:  "Love",             // ← GANTI JUDUL LAGU
    artist: "Wave To Earth",                   // ← GANTI NAMA ARTIS
    src:    "assets/music/song1.mp3",    //   (nama file mp3 — jangan diubah kecuali nama filenya beda)
    cover:  "assets/music/song1.jpeg",   //   (nama file cover — jangan diubah kecuali nama filenya beda)
    startTime: 0,                           // ← MULAI DARI DETIK KE BERAPA
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   4. FOTO GALERI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Taruh foto di:  assets/images/
   Nama file harus:  img1.jpeg  img2.jpeg  … img8.jpeg
   Ganti caption (keterangan foto) di setiap baris.               */
const GALLERY_PHOTOS = [
  { file: "img1.jpeg", caption: "our precious moment on the love lake " },  // ← GANTI CAPTION
  { file: "img2.jpeg", caption: "u r so good at playing gamesss " },
  { file: "img3.jpeg", caption: "blue hair baby gurl with pudding  },
  { file: "img4.jpeg", caption: "non smile cutie " },
  { file: "img5.jpeg", caption: "cute smile u have " },
  { file: "img6.jpeg", caption: "our little fire that keeps growing " },
  { file: "img7.jpeg", caption: "doing daily with my cutie " },
  { file: "img8.jpeg", caption: "my cutie being cutie " },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   5. ISI SURAT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Setiap string adalah satu paragraf.
   Bisa ditambah atau dikurangi paragrafnya.                       */
const LETTER_PARAGRAPHS = [
"Dear baby girl",
"Some say the best things come into our lives just like dusk arriving exactly when the tired sky needs to rest. u came quietly into my story just like that bringing comfort i didnt even know i was looking for. i made this little digital time capsule so whenever u need a reminder or maybe whenever life gets a bit too heavy u can open this anytime and remember just how insanely loved u r.",
"Ngl todays literally ur day. i hope it feels like a quiet afternoon where the world finally slows down giving u all the peace and comfort u deserve. when i was brainstorming for this i ended up scrolling through our photos from the very beginning. i was literally grinning at my screen like an idiot looking at all the chaotic and cute moments we have captured. u came into my life and completely flipped my world upside down in the best way possible. u r definitely the best plot twist i never saw coming.",
"Thank u for being the kind of person whose presence makes even the most ordinary days feel worth remembering. however u spend today i just hope u r surrounded by people who love u just as much as i do. happy birthday my favorite person ever."

];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   6. KENANGAN (TIMELINE)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   depth  = kedalaman yang ditampilkan (label saja)
   year   = judul bab
   title  = judul kenangan
   text   = isi cerita                                             */
const MEMORIES = [
  {
    depth: "2m",
    year:  "Chapter One",
    title: "where it all started",
    text:  "thinking about how it all began and how much i always wanted to give u the right words. u came in and made me want to nurture our connection with so much care baby girl. u just made everything make sense right from the start.",
  },
  {
    depth: "8m",
    year:  "Chapter Two",
    title: "the quiet days",
    text:  "those days when i just wanted to send u daily texts and find the most thoughtful ways to show my appreciation for u. even when i was trying to write u that heartfelt holiday message to respect our differences those simple quiet moments of trying to make u smile meant everything to me.",
  },
  {
    depth: "16m",
    year:  "Chapter Three",
    title: "through the storms",
    text:  "we definitely had our rough patches where things got messy. there were times when we had our conflicts and i had to really figure out how to sincerely apologize and make things right. but through all that chaos u always gave me room for emotional honesty and we always found a way.",
  },
  {
    depth: "24m",
    year:  "Chapter Four",
    title: "finding the light",
    text:  "u taught me that showing vulnerability and relying on someone else is completely okay. whenever my days got too heavy u were the one who made it all feel so much lighter. u r genuinely the brightest part of my journey and im always grateful for that baby girl.",
  },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   7. UCAPAN ULANG TAHUN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   icon: wave | shell | star | compass | anchor | heart
   text: isi ucapannya                                            */
const WISHES = [
  { icon: "wave",    text: "may this year give u all the calm u deserve. after everything u have been through i just want u to find peace in the little things. u really deserve to have a year full of good days and relaxing moments." },
  { icon: "shell",   text: "hope ur days stay as bright as the comfort u bring. u have this amazing energy that just makes people around u feel safe and warm. i really hope u get the same exact energy back every single day." },
  { icon: "star",    text: "may every lil wish come true. whatever it is that u r silently hoping for right now i hope the universe brings it right to u. u always work so hard so u definitely deserve to see those dreams happen." },
  { icon: "compass", text: "wherever this year takes u i hope u find time to rest and be urself. things might get busy or chaotic but please dont forget to take a break. just take things one step at a time and do what makes u happy." },
  { icon: "anchor",  text: "stay grounded and always remember how amazing u r baby girl. sometimes u might doubt urself but i need u to know that u r doing great. keep being the kind and wonderful person that u have always been." },
  { icon: "heart",   text: "happy birthday baby girl. cheers to another year of beautiful memories and more random things to laugh about. im seriously wishing u the absolute best today and i hope u enjoy every second of it." },
];

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   JANGAN EDIT DI BAWAH INI
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function (window) {
  window.WEBSITE_PIN = String(WEBSITE_PIN);
  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   8. WHATSAPP REPLY BUTTON
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   Nomor WA untuk membalas pesan setelah lilin ditiup.
   Gunakan format internasional tanpa tanda + (contoh: 62812...) */
const WHATSAPP_NUMBER = "6281234567890";   // ← GANTI NOMOR WA YANG ORDER
const WHATSAPP_MESSAGE = "heyy i just opened the bottle, tysm for making my day so much better! ✨"; // ← GANTI PESAN OTOMATIS

window.OCEAN_SETTINGS = {
    recipientName:    String(RECIPIENT_NAME),
    galleryPhotos:    GALLERY_PHOTOS,
    musicTracks:      MUSIC_TRACKS,
    letterParagraphs: LETTER_PARAGRAPHS,
    memories:         MEMORIES,
    wishes:           WISHES,
    whatsappNumber:   WHATSAPP_NUMBER,
    whatsappMessage:  WHATSAPP_MESSAGE
  };
})(window);
