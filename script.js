// ============================================================
//  EDIT ME: everything on the page comes from PLAYER and TABS.
//  Icons are painted in code (see PAINTERS below): sword, gamepad, note,
//  gem, scroll, skull, potion, key, heart, eye, candle, book, moon.
//  Rarity 1-5 = WoW quality colours: grey, green, blue, purple, orange.
// ============================================================
const PLAYER = {
  name: "vexizz",
  class: "Wandering Soul",
  level: 19,
  status: "ONLINE",
  hp: [226, 226],
  mp: [34, 50],
  stats: { STR: 34, DEF: 38, DEX: 23, CHA: 27, INT: 40, LUK: 7 },
  intro: "Oh... a visitor! Welcome to my corner of the internet. Pick a slot on the right (or press 1-6) to rummage through my things, and click any item to inspect it.",
  // shown instead on phones, where the section tabs sit below the character
  introMobile: "Oh... a visitor! Welcome to my corner of the internet. Pick a slot below to rummage through my things, and tap any item to inspect it.",
  // Equipment slots around the character: 5 on the left, 5 on the right.
  // Each is [tabId, itemIndex] or null for an empty slot.
  gear: [
    ["games", 0], ["skills", 0], ["favs", 24], null, ["music", 1],
    ["music", 0], ["links", 0], ["skills", 7], ["favs", 0], null,
  ],
};

// Each item: name, icon (painter name), qty, rarity (1-5), stats (up to 6 [label, value] pairs),
// desc (shown in the dialog box), and optional: title (small gold line under the name),
// link (adds an OPEN button), compact: true (shows it in the small grid under the tab's main items).
const TABS = [
  {
    id: "games", icon: "gamepad", label: "Games", moreLabel: "Other Favorites",
    items: [
      { name: "Main Game", title: "World of Warcraft", icon: "wow", qty: 1, rarity: 5,
        stats: [["Genre", "MMORPG"], ["Hours", "18k+"], ["Main", "DK/DH"], ["Since", "2011"], ["Mode", "Casual"], ["Love", "∞"]],
        desc: "On & off. Catch me at taverns and guild raids!" },
      { name: "Comfort Game", title: "Call of Duty: Black Ops", icon: "blackops", qty: 1, rarity: 4,
        stats: [["Genre", "FPS"], ["Hours", "1k+"], ["Mode", "Casual"], ["Love", "∞"]],
        desc: "I talk about this franchise like I'm in a movie and it's my dead wife..." },
      { name: "Currently Playing", title: "Minecraft", icon: "minecraft", qty: 1, rarity: 3,
        stats: [["Genre", "Sandbox"], ["Hours", "5k+"], ["Status", "PLAYING"], ["Verdict", "TBD"]],
        desc: "What I'm obsessed with right now. Ask me what I'm building." },
      // Other favourites: add more by copying a line. Unknown icon names fall back to a "?".
      { compact: true, name: "Final Fantasy XIV", icon: "ff14", qty: 1, rarity: 5,
        stats: [["Genre", "MMORPG"], ["Class", "DK"]], desc: "Came for the story, stayed for the glamour." },
      { compact: true, name: "Guild Wars 2", icon: "gw2", qty: 1, rarity: 4,
        stats: [["Genre", "MMORPG"], ["Class", "Engineer"]], desc: "Alts, alts, and way too many alts." },
      { compact: true, name: "Persona 1-5", icon: "persona2", qty: 1, rarity: 5,
        stats: [["Genre", "JRPG"], ["Favorite", "2:IS"]], desc: "Maya Amano..." },
      { compact: true, name: "Overcooked!", icon: "overcooked", qty: 1, rarity: 3,
        stats: [["Genre", "Co-op"], ["Chaos", "MAX"]], desc: "Unlocking my inner Gordon Ramsay." },
      { compact: true, name: "Little Nightmares II", icon: "nightmares", qty: 1, rarity: 4,
        stats: [["Genre", "Horror"], ["Spook", "HIGH"]], desc: "Read a 1M word fanfic of this game. Never needed copium this bad before." },
      { compact: true, name: "Marvel's Spider-Man", icon: "spiderman", qty: 1, rarity: 3,
        stats: [["Genre", "Action"], ["Swing", "100"]], desc: "Keep him to saving cats and flower shops please." },
      { compact: true, name: "Shin Megami Tensei III", icon: "smt3", qty: 1, rarity: 5,
        stats: [["Genre", "JRPG"], ["Pain", "HIGH"]], desc: "Two level choices: Normal and FUCK YOU." },
    ],
  },
  {
    id: "music", icon: "note", label: "Music", moreLabel: "More Artists",
    // An item with an `id` becomes a collapsible group; items with `under: thatId` sit in its branch.
    items: [
      { id: "yorushika", name: "Favorite Artist", title: "Yorushika · ヨルシカ", icon: "yorushika", qty: 1, rarity: 5,
        stats: [["Genre", "J-Rock"], ["From", "Japan"], ["Members", "2"], ["Love", "∞"]],
        desc: "n-buna's songwriting and suis's voice... I'll never shut up about them." },
      { under: "yorushika", name: "Favorite Song", title: "嘘月 · Usotsuki", icon: "usotsuki", qty: 1, rarity: 5,
        stats: [["Album", "創作"], ["Plays", "∞"]],
        desc: "Whoa, why's the screen blurry all of a sudden?" },
      { under: "yorushika", name: "Favorite Album", title: "盗作 · Plagiarism", icon: "tousaku", qty: 1, rarity: 5,
        stats: [["Year", "2020"], ["Fav", "花人局"]],
        desc: "10/10 album AND novel." },
      { id: "paramore", name: "Favorite Artist II", title: "Paramore", icon: "paramore", qty: 1, rarity: 4,
        stats: [["Genre", "Pop-Punk"], ["From", "USA"], ["Members", "3"], ["Love", "∞"]],
        desc: "Paramore. Enough said." },
      { under: "paramore", name: "Favorite Song", title: "Brick by Boring Brick", icon: "brick", qty: 1, rarity: 4,
        stats: [["Album", "BNE"], ["Plays", "∞"]],
        desc: "Keep your feet on the ground when your head's in the clouds." },
      { under: "paramore", name: "Favorite Album", title: "Brand New Eyes", icon: "brandneweyes", qty: 1, rarity: 4,
        stats: [["Year", "2009"], ["Fav", "BBBB"]],
        desc: "The furthest mall emo will ever go." },
      // More artists: icon "emblem:TEXT:#colour:symbol" paints a band emblem (symbols listed by EMBLEM_SYMBOLS).
      { compact: true, name: "Neck Deep", icon: "emblem:ND:#2a8aff:wave", qty: 1, rarity: 4,
        stats: [["Genre", "Pop-Punk"], ["From", "Wales"]], desc: "Life's not out to get you!!" },
      { compact: true, name: "All Time Low", icon: "emblem:ATL:#e0201a:star", qty: 1, rarity: 4,
        stats: [["Genre", "Pop-Punk"], ["From", "USA"]], desc: "I'M GONNA BREAK YOUR LITTLE HEART IN TWO </3" },
      { compact: true, name: "Hayley Williams", icon: "emblem:HW:#ff7a1a:flower", qty: 1, rarity: 5,
        stats: [["Genre", "Alt / Indie"], ["From", "USA"]], desc: "Can we pretend that airplanes in the night sky are shooting stars?" },
      { compact: true, name: "Lights", icon: "emblem:L:#9a4aff:orb", qty: 1, rarity: 3,
        stats: [["Genre", "Synth-Pop"], ["From", "Canada"]], desc: "The Listening is one of my favourite albums of all time." },
      { compact: true, name: "The Marías", icon: "emblem:M:#c0103a:heart", qty: 1, rarity: 4,
        stats: [["Genre", "Dream-Pop"], ["From", "USA"]], desc: "All I did was dream of you..." },
      { compact: true, name: "Co shu Nie", icon: "emblem:CSN:#3ab8e0:moon", qty: 1, rarity: 5,
        stats: [["Genre", "J-Rock"], ["From", "Japan"]], desc: "Their basslines!! Their drums!! Their guitar!! Their vocals!!" },
      { compact: true, name: "tricot", icon: "emblem:tricot:#7ad020:triangle", qty: 1, rarity: 4,
        stats: [["Genre", "Math-Rock"], ["From", "Japan"]], desc: "The Simpsons Paradox in time signatures." },
      { compact: true, name: "Motionless in White", icon: "emblem:MIW:#8a8a9a:skull", qty: 1, rarity: 4,
        stats: [["Genre", "Metalcore"], ["From", "USA"]], desc: "Solid asf." },
      { compact: true, name: "Brand New", icon: "emblem:BN:#8a9ab0:moon", qty: 1, rarity: 4,
        stats: [["Genre", "Alt-Rock"], ["From", "USA"]], desc: "Okay, I believe you...... but my tommy gun don't." },
      { compact: true, name: "Korn", icon: "emblem:KoЯN:#4a9a2a:scratch", qty: 1, rarity: 3,
        stats: [["Genre", "Nu-Metal"], ["From", "USA"]], desc: "X-Men Evolution Rogue and I would get along~" },
      { compact: true, name: "Thirty Seconds to Mars", icon: "emblem:30STM:#d0301a:triad", qty: 1, rarity: 4,
        stats: [["Genre", "Alt-Rock"], ["From", "USA"]], desc: "They were ALL OVER YOUTUBE OKAY." },
    ],
  },
  {
    // section: "Name" starts a new divider in the list from that item onwards.
    id: "skills", icon: "sword", label: "Skills",
    items: [
      { section: "Design", name: "Web Dev", icon: "book", qty: 1, rarity: 3,
        stats: [["LV", "4 yrs"], ["EXP", "MIDDLE"], ["Cost", "Coffee"], ["Range", "LONG"]],
        desc: "Super into creative coding!" },
      { name: "UI/UX Design", icon: "uiux", qty: 1, rarity: 4,
        stats: [["LV", "2 yrs"], ["Class", "Design"], ["Tool", "Figma"], ["Range", "LONG"]],
        desc: "Making things EASY to use because I was always too stupid for the internet and never knew why." },
      { name: "Motion Graphics", icon: "emblem:MG:#ff6a2a:wave", qty: 1, rarity: 4,
        stats: [["LV", "8 yrs"], ["Class", "Design"], ["Tool", "AE"], ["Range", "LONG"]],
        desc: "Colours! Shapes! Vectors! Flashbangs! AAAAAAAAAAAAA" },
      { name: "Illustration", icon: "illustration", qty: 1, rarity: 4,
        stats: [["LV", "8 yrs"], ["Class", "Art"], ["Tool", "CSP"], ["Style", "???"]],
        desc: "Professional artist and colour assistant for mangaka. AKA: Horrible back." },
      { name: "Editing", icon: "animation", qty: 1, rarity: 4,
        stats: [["LV", "7 yrs"], ["Class", "Art"], ["Tool", "Many"], ["Frames", "MANY"]],
        desc: "Editing and translating videos for MCYT Streamers and content creators." },
      { name: "Graphic Design", icon: "graphic", qty: 1, rarity: 3,
        stats: [["LV", "6 yrs"], ["Class", "Design"], ["Tool", "PS"], ["Kerning", "100"]],
        desc: "I don't even know what I'm doing." },
      { name: "3D Art", icon: "art3d", qty: 1, rarity: 4,
        stats: [["LV", "4yrs"], ["Class", "Art"], ["Tool", "Maya"], ["Polys", "MANY"]],
        desc: "Either photorealism or very low poly. NO in-between." },

      { section: "Hobbies", id: "instruments", name: "Music", icon: "lute", qty: 1, rarity: 5,
        stats: [["LV", "??"], ["Class", "Bard"], ["Inst", "7"], ["Theory", "12yrs"]],
        desc: "Instruments and music theory." },
      { under: "instruments", compact: true, name: "Piano", title: "ABRSM Grade 7", icon: "emblem:Pno:#e8e0d0:keys", qty: 1, rarity: 5,
        stats: [["Type", "Keys"], ["Experience", "10 yrs"]], desc: "ABRSM Grade 7." },
      { under: "instruments", compact: true, name: "Flute", title: "ABRSM 5 · Orchestra 5 yrs", icon: "emblem:Fl:#c8d0e0:note", qty: 1, rarity: 5,
        stats: [["Type", "Woodwind"], ["Experience", "ABRSM Gr. 5"], ["Orchestra", "5 yrs"]], desc: "ABRSM Grade 5, and five years in an orchestra." },
      { under: "instruments", compact: true, name: "Clarinet", icon: "emblem:Cl:#3a3a5a:note", qty: 1, rarity: 4,
        stats: [["Type", "Woodwind"], ["Experience", "1 yr"]], desc: "I was bored." },
      { under: "instruments", compact: true, name: "Oboe", icon: "emblem:Ob:#7a4a24:note", qty: 1, rarity: 4,
        stats: [["Type", "Woodwind"], ["Experience", "3 yrs"]], desc: "I actually really love it." },
      { under: "instruments", compact: true, name: "Violin", icon: "emblem:Vn:#c06a2a:strings", qty: 1, rarity: 4,
        stats: [["Type", "Strings"], ["Experience", "1 yr"]], desc: "Mom: We have the cello at home!" },
      { under: "instruments", compact: true, name: "Electric Bass", icon: "emblem:Bs:#3a6aff:strings", qty: 1, rarity: 4,
        stats: [["Type", "Strings"], ["Experience", "7 yrs"]], desc: "Squier Classic Vibe '60s Precision Bass Laurel & Yamaha TRBX304 PJ." },
      { under: "instruments", compact: true, name: "Harp", icon: "emblem:Hp:#e9b64a:strings", qty: 1, rarity: 5,
        stats: [["Type", "Strings"], ["Experience", "2 yrs"]], desc: "Why is this so inconvenient to bring around???" },
      { under: "instruments", compact: true, name: "Music Theory", title: "ABRSM Grade 6", icon: "emblem:♮:#9a7aff:ring", qty: 1, rarity: 4,
        stats: [["Type", "Theory"], ["Experience", "12 yrs"]], desc: "ABRSM Grade 6." },
      { name: "Writing", icon: "writing", qty: 1, rarity: 3,
        stats: [["LV", "??"], ["Class", "Lore"], ["Ink", "∞"], ["Genre", "???"]],
        desc: "Stories, ideas and the occasional lore dump." },
      { name: "Reading", icon: "reading", qty: 1, rarity: 3,
        stats: [["LV", "??"], ["Class", "Lore"], ["Books", "MANY"], ["Fav", "???"]],
        desc: "Always in the middle of at least one book/fanfic." },
      { name: "Horror Movies", icon: "horror", qty: 1, rarity: 5,
        stats: [["LV", "??"], ["Class", "Curse"], ["Fear", "NONE"], ["Fav", "???"]],
        desc: "Easily the best genre." },
    ],
  },
  {
    id: "favs", icon: "gem", label: "Favorites",
    // Each favourite is a collapsible group: the card shows the top pick, its branch holds the rest.
    items: [
      { section: "Media", id: "series", name: "Favorite Series", title: "Fullmetal Alchemist", icon: "fma", qty: 1, rarity: 5,
        stats: [["Type", "Anime"], ["Alchemy", "∞"], ["Brothers", "2"], ["Love", "∞"]],
        desc: "Equivalent exchange: my heart for this show." },
      { under: "series", compact: true, name: "Omniscient Reader's Viewpoint", icon: "emblem:ORV:#3a6aff:star", qty: 1, rarity: 5,
        stats: [["Type", "Web Novel"]], desc: "The scenario has begun." },
      { under: "series", compact: true, name: "Haikyuu!!", icon: "emblem:HQ!!:#ff8a1a:ball", qty: 1, rarity: 5,
        stats: [["Type", "Anime"]], desc: "SHITTYKAWA!!!" },
      { under: "series", compact: true, name: "Wotakoi", icon: "emblem:ヲタ:#ff6aa0:heart", qty: 1, rarity: 4,
        stats: [["Type", "Anime"]], desc: "Too relatable." },
      { under: "series", compact: true, name: "Tokyo Ghoul", icon: "emblem:喰:#c0101a:scratch", qty: 1, rarity: 4,
        stats: [["Type", "Anime"]], desc: "Tears... so many tears." },
      { under: "series", compact: true, name: "Jujutsu Kaisen", icon: "emblem:呪:#5a3aff:ring", qty: 1, rarity: 5,
        stats: [["Type", "Anime"]], desc: "Gege, when I catch you, Gege..." },
      { under: "series", compact: true, name: "Slam Dunk", icon: "emblem:SD:#e0301a:ball", qty: 1, rarity: 4,
        stats: [["Type", "Anime"]], desc: "I physically CANNOT shut up about this." },
      { under: "series", compact: true, name: "Code Geass", icon: "emblem:CG:#d01a6a:geass", qty: 1, rarity: 5,
        stats: [["Type", "Anime"]], desc: "All hail Lelouch." },
      { under: "series", compact: true, name: "Monogatari", icon: "emblem:物語:#b01a1a:moon", qty: 1, rarity: 4,
        stats: [["Type", "Anime"]], desc: "I'm literally in love with wordplay, language, and media; what did you expect?" },
      { under: "series", compact: true, name: "Blue Period", icon: "emblem:青:#2a7aff:wave", qty: 1, rarity: 4,
        stats: [["Type", "Anime"]], desc: "Would I recommend it? Yes. Would I read it again? Absolutely not." },
      { under: "series", compact: true, name: "Hibike! Euphonium", icon: "emblem:響:#e0a020:note", qty: 1, rarity: 4,
        stats: [["Type", "Anime"]], desc: "In love with Kyoani's animation AND storytelling." },
      { under: "series", compact: true, name: "Business Proposal", icon: "emblem:BP:#ff7ab0:heart", qty: 1, rarity: 3,
        stats: [["Type", "K-Drama"]], desc: "Peak comfort show lol. It's SO stupid." },

      { id: "books", name: "Favorite Books", title: "The Little Prince", icon: "littleprince", qty: 1, rarity: 5,
        stats: [["Author", "Saint-Exupéry"], ["Year", "1943"], ["Rose", "1"], ["Love", "∞"]],
        desc: "\"What is essential is invisible to the eye.\"" },
      { under: "books", compact: true, name: "Calvin and Hobbes", icon: "emblem:C&H:#ff8a1a:stripes", qty: 1, rarity: 5,
        stats: [["Type", "Comic Strip"], ["Tiger", "1"]], desc: "A boy, his tiger and endless sarcastic quips." },
      { under: "books", compact: true, name: "Peanuts", icon: "emblem:PNTS:#f0c020:zigzag", qty: 1, rarity: 4,
        stats: [["Type", "Comic Strip"], ["Lucy", "1"]], desc: "Oh, good grief!" },
      { under: "books", compact: true, name: "The Three Musketeers", icon: "emblem:III:#3a5aff:star", qty: 1, rarity: 4,
        stats: [["Author", "Dumas"], ["Year", "1844"]], desc: "All for one, one for all." },
      { under: "books", compact: true, name: "Pachinko", icon: "emblem:Pa:#c0303a:ball", qty: 1, rarity: 5,
        stats: [["Author", "Min Jin Lee"], ["Year", "2017"]], desc: "One of the best depictions in media ever on Asian generational trauma and historical cultural impacts on the identity and expression of women." },

      { id: "va", name: "Favorite Voice Actors", title: "内山 昂輝", icon: "emblem:内山:#3a8aff:mic", qty: 1, rarity: 5,
        stats: [["Type", "Seiyuu"], ["Voice", "100"]], desc: "Kouki Uchiyama (内山 昂輝)." },
      { under: "va", compact: true, name: "花澤 香菜", icon: "emblem:花澤:#ff7ab0:mic", qty: 1, rarity: 5,
        stats: [["Type", "Seiyuu"]], desc: "Kana Hanazawa (花澤 香菜)." },
      { under: "va", compact: true, name: "石川 界人", icon: "emblem:石川:#3ac0a0:mic", qty: 1, rarity: 5,
        stats: [["Type", "Seiyuu"]], desc: "Kaito Ishikawa (石川 界人)." },

      { id: "chars", name: "Favorite Characters", title: "Xiao · 魈", icon: "emblem:魈:#20b0a0:wave", qty: 1, rarity: 5,
        stats: [["From", "Genshin"], ["Element", "Anemo"]], desc: "Almond tofu." },
      { under: "chars", compact: true, name: "Toge Inumaki · 狗巻 棘", icon: "emblem:棘:#6a5aff:ring", qty: 1, rarity: 5,
        stats: [["From", "JJK"]], desc: "Tuna mayo." },
      { under: "chars", compact: true, name: "Alphonse Elric", icon: "emblem:Al:#a8b0c0:ring", qty: 1, rarity: 5,
        stats: [["From", "FMA"]], desc: "The biggest suit of armour and heart." },
      { under: "chars", compact: true, name: "Asada Shino · 朝田 詩乃", icon: "emblem:詩乃:#6ac0ff:crosshair", qty: 1, rarity: 4,
        stats: [["From", "SAO"]], desc: "a.k.a. Sinon." },

      { section: "Misc", id: "food", name: "Favorite Food", title: "Sushi", icon: "sushi", qty: 9, rarity: 5,
        stats: [["Taste", "100"], ["Heal", "+50"], ["Type", "Nigiri"], ["Weight", "1"]],
        desc: "Would eat it every day if mercury didn't exist." },
      { under: "food", name: "Dessert", title: "Pistachio Raspberry Gelato", icon: "gelato", qty: 2, rarity: 4,
        stats: [["Sweet", "MAX"], ["Heal", "+30"]], desc: "Pistachio and raspberry: the perfect combo." },
      { under: "food", name: "Comfort Food", title: "Lasagna", icon: "lasagna", qty: 1, rarity: 4,
        stats: [["Cozy", "MAX"], ["Heal", "+80"]], desc: "Garfield put me on this." },
      { under: "food", name: "Cravings", title: "Margherita / Hawaiian Pizza", icon: "pizza", qty: 8, rarity: 3,
        stats: [["Slices", "∞"], ["Pineapple", "YES"]], desc: "Yes, pineapple belongs on pizza." },

      { name: "Favorite Color", title: "Blood Red", icon: "blood", qty: 1, rarity: 5,
        stats: [["Hex", "#8A0303"], ["Vibe", "Gothic"]], desc: "Blood red. Obviously." },
    ],
  },
  {
    // link: adds a button in Inspect (linkLabel changes its text); locked: shows a PRIVATE tag instead.
    id: "links", icon: "scroll", label: "Connections",
    items: [
      { name: "Discord", icon: "discord", qty: 1, rarity: 5,
        stats: [["User", "vexizz"], ["Reply", "SLOW"]],
        desc: "Best way to reach me. Add me!" },
      { name: "MyAnimeList", icon: "emblem:MAL:#2e51a2:star", qty: 1, rarity: 4,
        stats: [["User", "vexziz"], ["Status", "PUBLIC"]],
        desc: "My anime list. See what I've watched and what I'm watching.", link: "https://myanimelist.net/profile/vexziz" },
      { name: "Twitter", icon: "twitter", qty: 1, rarity: 3, locked: true,
        stats: [["User", "???"], ["Status", "PRIVATE"]],
        desc: "Currently private." },
      { name: "Pixiv", icon: "emblem:P:#0096fa:orb", qty: 1, rarity: 3, locked: true,
        stats: [["User", "???"], ["Status", "PRIVATE"]],
        desc: "Currently private." },
      { name: "Portfolio", icon: "portfolio", qty: 1, rarity: 5, locked: true,
        stats: [["Access", "EMAIL"], ["Status", "PRIVATE"]],
        desc: "Due to privacy and personal reasons, I've decided to keep my non-professional and work life separate. Please send me an email at el.vexizz@gmail.com for business inquiries. Thanks for understanding :)",
        link: "mailto:el.vexizz@gmail.com", linkLabel: "EMAIL ▶" },
    ],
  },
  {
    // Groups can nest (Japanese -> Japanese Sign Language). bars: [[left, right, left%]] draws a split bar.
    id: "other", icon: "skull", label: "Other", badge: "他",
    items: [
      { id: "langs", name: "Languages", title: "Mandarin · English · Japanese · Indonesian", icon: "emblem:文:#3ab0a0:ring", qty: 4, rarity: 5,
        stats: [["Spoken", "4"], ["Signed", "1"]], desc: "Mandarin, English, Japanese and Indonesian, plus Japanese Sign Language." },
      { under: "langs", name: "Mandarin", title: "中文", icon: "emblem:中:#d0201a:ring", qty: 1, rarity: 5,
        stats: [["Script", "汉字"], ["Level", "Native"]], desc: "Mandarin Chinese and Taiwanese dialect." },
      { under: "langs", name: "English", title: "English", icon: "emblem:En:#2a5aff:star", qty: 1, rarity: 5,
        stats: [["Script", "Latin"], ["Level", "Native"]], desc: "English." },
      { id: "japanese", under: "langs", name: "Japanese", title: "日本語", icon: "emblem:あ:#e0405a:orb", qty: 1, rarity: 5,
        stats: [["Script", "かな/漢字"], ["Level", "Fluent"]], desc: "Its branch holds Japanese Sign Language." },
      { under: "japanese", name: "Japanese Sign Language", title: "日本手話 · JSL", icon: "emblem:手話:#f0a030:heart", qty: 1, rarity: 4,
        stats: [["Mode", "Signed"], ["Level", "Fluent"]], desc: "Japanese Sign Language." },
      { under: "langs", name: "Indonesian", title: "Bahasa Indonesia", icon: "emblem:ID:#e0301a:wave", qty: 1, rarity: 5,
        stats: [["Script", "Latin"], ["Level", "Native"]], desc: "Indonesian (Bahasa Indonesia)." },

      { name: "MBTI", title: "INFJ · 694", icon: "emblem:INFJ:#2a9a6a:flower", qty: 1, rarity: 4,
        stats: [["Type", "INFJ"], ["Ennea", "694"]], bars: [["I", "E", 57]],
        desc: "INFJ, Type 694. 57% introverted." },

      { id: "studies", name: "Studies", title: "Dual Bachelors + Masters", icon: "grad", qty: 3, rarity: 5,
        stats: [["Degrees", "3"], ["Coffee", "∞"]], desc: "Sigh... we live in a society... jk." },
      { under: "studies", name: "Bachelors (Dual Degree)", title: "Biochemistry", icon: "dna", qty: 1, rarity: 4,
        stats: [["Type", "Bachelors"], ["Field", "Science"]], desc: "Bachelor of Biochemistry, half of my dual degree." },
      { under: "studies", name: "Bachelors (Dual Degree)", title: "Digital Design", icon: "graphic", qty: 1, rarity: 4,
        stats: [["Type", "Bachelors"], ["Field", "Design"]], desc: "Bachelor of Digital Design, the other half of my dual degree." },
      { under: "studies", name: "Masters", title: "Information Systems", icon: "emblem:IS:#3a8aff:ring", qty: 1, rarity: 5,
        stats: [["Type", "Masters"], ["Field", "Tech"]], desc: "Master of Information Systems." },

      { id: "interests", name: "Super Interests", title: "Languages · Typography · Sportbikes · Media", icon: "emblem:★:#ff8a1a:star", qty: 4, rarity: 5,
        stats: [["Count", "4"], ["Focus", "MAX"]], desc: "My super interests. Ask me about any of these and I won't stop talking." },
      { under: "interests", compact: true, name: "Languages", icon: "emblem:語:#3ab0a0:wave", qty: 1, rarity: 5,
        stats: [["Focus", "MAX"]], desc: "Wordplay, poetry, learning how people talk, write and sign." },
      { under: "interests", compact: true, name: "Typography", icon: "emblem:Aa:#c040ff:triangle", qty: 1, rarity: 5,
        stats: [["Focus", "MAX"]], desc: "Yes, I will notice your font choice. Yes, I have 5k fonts downloaded on my PC." },
      { under: "interests", compact: true, name: "Sportbikes", icon: "sportbike", qty: 1, rarity: 5,
        stats: [["Focus", "MAX"]], desc: "I'm almost always on my Yamaha YZF-R6 back home, riding around at night for city lights!" },
      { under: "interests", compact: true, name: "Media Analyses", icon: "eye", qty: 1, rarity: 5,
        stats: [["Focus", "MAX"]], desc: "Breaking down films, shows, games, creepypasta, and books. Live, laugh, love theories." },

      { name: "Secret Item", icon: "key", qty: 1, rarity: 5,
        stats: [["Rarity", "S"], ["Found", "YOU!"]],
        desc: "You found the secret key. Tell me in DMs and I'll be impressed." },
    ],
  },
];

// ============================================================
//  Painted icons: old-school MMO style (glowy, airbrushed, grainy).
//  Each painter gets a 64x64 canvas; `bg` is [glow colour, dark colour].
// ============================================================
const PI = Math.PI;
const grain = (seed, x, y) => { const v = Math.sin(seed * 91.7 + x * 12.9898 + y * 78.233) * 43758.5453; return v - Math.floor(v); };
const hashStr = (s) => [...s].reduce((a, c) => a * 31 + c.charCodeAt(0), 7) % 9973;
const rgba = (hex, a) => { const n = parseInt(hex.slice(1), 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; };
const lin = (x, x0, y0, x1, y1, stops) => { const g = x.createLinearGradient(x0, y0, x1, y1); stops.forEach(([o, c]) => g.addColorStop(o, c)); return g; };
const rad = (x, cx, cy, r0, r1, stops) => { const g = x.createRadialGradient(cx, cy, r0, cx, cy, r1); stops.forEach(([o, c]) => g.addColorStop(o, c)); return g; };
const glow = (x, color, blur, fn) => { x.save(); x.shadowColor = color; x.shadowBlur = blur; fn(); x.restore(); };
const poly = (x, pts) => { x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); x.closePath(); };
const circle = (x, cx, cy, r) => { x.beginPath(); x.arc(cx, cy, r, 0, PI * 2); };
function sparkle(x, cx, cy, r, color = "#ffffff") {
  glow(x, color, 8, () => {
    x.fillStyle = color;
    poly(x, [[cx, cy - r], [cx + r * .2, cy - r * .2], [cx + r, cy], [cx + r * .2, cy + r * .2], [cx, cy + r], [cx - r * .2, cy + r * .2], [cx - r, cy], [cx - r * .2, cy - r * .2]]);
    x.fill();
  });
}

const PAINTERS = {
  // runeblade: leaf blade with glowing runes, winged guard, soul gem, arcane energy coiling around it
  sword: { bg: ["#5a3cff", "#0a0630"], draw(x) {
    const gold = lin(x, 0, 2, 0, 14, [[0, "#fff4b0"], [.5, "#e0a030"], [1, "#6a3a08"]]);
    x.save(); x.translate(31, 33); x.rotate(PI / 4);
    x.save(); x.globalCompositeOperation = "lighter";
    glow(x, "#7ad8ff", 10, () => {
      x.lineWidth = 1.8; x.strokeStyle = "rgba(140,220,255,.9)";
      x.beginPath(); x.moveTo(-10, 6); x.bezierCurveTo(-18, -10, 13, -14, 4, -31); x.stroke();
      x.lineWidth = 1.3; x.strokeStyle = "rgba(210,150,255,.85)";
      x.beginPath(); x.moveTo(10, 2); x.bezierCurveTo(16, -14, -13, -18, -2, -34); x.stroke();
    });
    x.restore();
    glow(x, "#8fb4ff", 12, () => {
      x.fillStyle = lin(x, -6, 0, 6, 0, [[0, "#2e3060"], [.4, "#e8f0ff"], [.5, "#ffffff"], [.6, "#aab8e0"], [1, "#1e2448"]]);
      poly(x, [[0, -33], [4, -26], [6, -12], [5, 6], [-5, 6], [-6, -12], [-4, -26]]); x.fill();
    });
    glow(x, "#3ef0ff", 6, () => {
      x.strokeStyle = "#c8faff"; x.lineWidth = 1;
      for (let y = -23; y <= 0; y += 6) {
        x.beginPath(); x.moveTo(0, y); x.lineTo(0, y + 4); x.moveTo(0, y + 1); x.lineTo(1.8, y + 2.5); x.moveTo(0, y + 2.5); x.lineTo(-1.8, y + 4); x.stroke();
      }
    });
    glow(x, "#ffb030", 8, () => {
      x.fillStyle = gold;
      for (const s of [-1, 1]) {
        x.beginPath(); x.moveTo(0, 6); x.bezierCurveTo(s * 8, 4, s * 15, 1, s * 20, -8); x.bezierCurveTo(s * 18, 2, s * 14, 9, s * 4, 12); x.closePath(); x.fill();
      }
      x.fillRect(-4, 6, 8, 7);
    });
    glow(x, "#c040ff", 10, () => { x.fillStyle = rad(x, -1, 8, 0, 4, [[0, "#ffe0ff"], [.4, "#b040ff"], [1, "#3a0660"]]); circle(x, 0, 9, 3.3); x.fill(); });
    x.fillStyle = "#2a1640"; x.fillRect(-2.5, 13, 5, 11);
    x.strokeStyle = "#9a7ac0"; x.lineWidth = 1;
    for (let y = 14; y < 24; y += 2.5) { x.beginPath(); x.moveTo(-2.5, y); x.lineTo(2.5, y + 1.5); x.stroke(); }
    glow(x, "#ffb030", 6, () => { x.fillStyle = gold; poly(x, [[0, 22], [4.5, 26], [0, 32], [-4.5, 26]]); x.fill(); });
    x.restore();
    sparkle(x, 49, 12, 7); sparkle(x, 15, 46, 3, "#d0b0ff"); sparkle(x, 42, 31, 2, "#bff8ff");
  } },
  gamepad: { bg: ["#22a050", "#041a0a"], draw(x) {
    x.save(); x.translate(0, -5); // centre the controller (body is drawn around y 38; the icon centre is 33)
    glow(x, "#000000", 10, () => {
      x.fillStyle = lin(x, 0, 24, 0, 50, [[0, "#9a8cc0"], [.45, "#4e4270"], [1, "#1a1428"]]);
      x.beginPath(); x.arc(20, 38, 12, PI * .5, PI * 1.5); x.lineTo(44, 26); x.arc(44, 38, 12, -PI * .5, PI * .5); x.closePath(); x.fill();
    });
    x.strokeStyle = "rgba(255,255,255,.35)"; x.lineWidth = 1.5;
    x.beginPath(); x.arc(20, 38, 11, PI * 1.05, PI * 1.5); x.lineTo(44, 27); x.arc(44, 38, 11, -PI * .5, -PI * .1); x.stroke();
    x.fillStyle = "#120c1c"; x.fillRect(13, 36, 12, 4); x.fillRect(17, 32, 4, 12);
    [[44, 32, "#ff3b3b"], [49.5, 38, "#3ee6c4"], [38.5, 38, "#ffd04a"], [44, 44, "#4a8aff"]].forEach(([cx, cy, c]) => {
      glow(x, c, 8, () => { x.fillStyle = rad(x, cx - 1, cy - 1, 0, 3, [[0, "#ffffff"], [.4, c], [1, rgba(c, .8)]]); circle(x, cx, cy, 2.8); x.fill(); });
    });
    x.restore();
    sparkle(x, 52, 14, 6, "#c8ffd8"); sparkle(x, 12, 18, 3);
  } },
  note: { bg: ["#c02ab8", "#22042a"], draw(x) {
    const gold = lin(x, 10, 10, 54, 54, [[0, "#fff6c0"], [.45, "#f0b030"], [1, "#7a3a06"]]);
    glow(x, "#ffb040", 14, () => {
      x.fillStyle = gold;
      x.beginPath(); x.ellipse(20, 47, 8, 5.5, -.45, 0, PI * 2); x.fill();
      x.beginPath(); x.ellipse(43, 41, 8, 5.5, -.45, 0, PI * 2); x.fill();
      x.fillRect(25, 15, 4, 32); x.fillRect(48, 9, 4, 32);
      poly(x, [[25, 15], [52, 9], [52, 17], [25, 23]]); x.fill();
    });
    x.fillStyle = "rgba(255,255,255,.7)";
    x.beginPath(); x.ellipse(17, 45, 3, 1.5, -.45, 0, PI * 2); x.fill();
    x.beginPath(); x.ellipse(40, 39, 3, 1.5, -.45, 0, PI * 2); x.fill();
    sparkle(x, 12, 16, 6); sparkle(x, 55, 52, 3, "#ffd0ff");
  } },
  // soul gem: ruby in a gold filigree cradle with a swirling light inside and orbiting shards
  gem: { bg: ["#e0203a", "#24020a"], draw(x) {
    const gold = lin(x, 0, 10, 0, 60, [[0, "#fff4b0"], [.5, "#e0a030"], [1, "#6a3a08"]]);
    glow(x, "#ffb030", 6, () => {
      x.strokeStyle = gold; x.lineWidth = 3;
      x.beginPath(); x.moveTo(10, 28); x.bezierCurveTo(7, 46, 22, 57, 32, 59); x.bezierCurveTo(42, 57, 57, 46, 54, 28); x.stroke();
      x.lineWidth = 2;
      for (const s of [-1, 1]) { circle(x, 32 + s * 22, 47, 3.5); x.stroke(); }
    });
    x.save(); x.translate(32, 34); x.scale(.84, .84); x.translate(-32, -34);
    glow(x, "#ff2a1a", 18, () => { x.fillStyle = "#a01410"; poly(x, [[18, 18], [46, 18], [55, 29], [32, 57], [9, 29]]); x.fill(); });
    const f = (pts, c) => { x.fillStyle = c; poly(x, pts); x.fill(); };
    f([[22, 18], [42, 18], [46, 29], [18, 29]], lin(x, 0, 18, 0, 29, [[0, "#ffc0b0"], [1, "#ff5a48"]]));
    f([[18, 18], [22, 18], [18, 29], [9, 29]], "#d82a20");
    f([[42, 18], [46, 18], [55, 29], [46, 29]], "#7a0c0a");
    f([[9, 29], [18, 29], [32, 57]], "#c01a14");
    f([[46, 29], [55, 29], [32, 57]], "#4a0606");
    f([[18, 29], [46, 29], [32, 57]], lin(x, 18, 29, 40, 57, [[0, "#ff5a48"], [1, "#6a0806"]]));
    x.strokeStyle = "rgba(255,210,200,.45)"; x.lineWidth = .8;
    [[[18, 29], [46, 29]], [[22, 18], [18, 29]], [[42, 18], [46, 29]], [[18, 29], [32, 57]], [[46, 29], [32, 57]]].forEach(([a, b]) => { x.beginPath(); x.moveTo(...a); x.lineTo(...b); x.stroke(); });
    x.restore();
    x.save(); x.globalCompositeOperation = "lighter";
    x.fillStyle = rad(x, 32, 32, 0, 12, [[0, "rgba(255,240,240,.95)"], [.4, "rgba(255,90,120,.5)"], [1, "rgba(255,0,40,0)"]]);
    circle(x, 32, 32, 12); x.fill();
    glow(x, "#ff9ab0", 6, () => {
      x.strokeStyle = "rgba(255,225,235,.85)"; x.lineWidth = 1;
      x.beginPath();
      for (let t = 0; t < PI * 4; t += .2) { const r = 1 + t * 1.05; x.lineTo(32 + Math.cos(t) * r, 33 + Math.sin(t) * r * .7); }
      x.stroke();
    });
    x.restore();
    x.fillStyle = gold;
    [[17, 22], [47, 22]].forEach(([a, b]) => { poly(x, [[a - 3, b + 5], [a, b - 3], [a + 3, b + 5]]); x.fill(); });
    [[9, 13, 3.5], [55, 50, 3]].forEach(([a, b, r]) => glow(x, "#ff4a6a", 8, () => {
      x.fillStyle = lin(x, a, b - r, a, b + r, [[0, "#ffd0d8"], [1, "#c0102a"]]);
      poly(x, [[a, b - r * 1.6], [a + r, b], [a, b + r * 1.6], [a - r, b]]); x.fill();
    }));
    sparkle(x, 26, 21, 8); sparkle(x, 42, 44, 3);
  } },
  // spell scroll: parchment with a burning-orange magic circle, wax seal and drifting embers
  scroll: { bg: ["#ff8a1a", "#2a0c02"], draw(x) {
    glow(x, "#000000", 8, () => {
      x.fillStyle = lin(x, 15, 0, 49, 0, [[0, "#a8834e"], [.5, "#f6e8c4"], [1, "#a8834e"]]);
      x.fillRect(16, 13, 32, 37);
    });
    x.fillStyle = rad(x, 32, 31, 2, 20, [[0, "rgba(255,200,90,.55)"], [1, "rgba(255,200,90,0)"]]);
    x.fillRect(16, 13, 32, 37);
    const roll = (y) => { x.fillStyle = lin(x, 0, y, 0, y + 9, [[0, "#fff2d0"], [.5, "#c9a06a"], [1, "#5a3a18"]]); x.beginPath(); x.roundRect ? x.roundRect(11, y, 42, 9, 4) : x.rect(11, y, 42, 9); x.fill(); };
    roll(8); roll(47);
    glow(x, "#ff7a10", 8, () => {
      x.strokeStyle = "#c83a08"; x.lineWidth = 1.3;
      circle(x, 32, 31, 11); x.stroke();
      x.lineWidth = .9; circle(x, 32, 31, 7.5); x.stroke();
      for (let i = 0; i < 8; i++) {
        const a = i * PI / 4;
        x.beginPath(); x.moveTo(32 + Math.cos(a) * 7.5, 31 + Math.sin(a) * 7.5); x.lineTo(32 + Math.cos(a) * 11, 31 + Math.sin(a) * 11); x.stroke();
      }
      x.lineWidth = 1.1; poly(x, [[32, 24.5], [37.5, 34.5], [26.5, 34.5]]); x.stroke();
    });
    glow(x, "#ffcf3a", 12, () => { x.fillStyle = "#fff2a0"; circle(x, 32, 31.5, 2.2); x.fill(); });
    x.fillStyle = "rgba(90,40,10,.75)";
    for (let i = 0; i < 6; i++) { x.fillRect(19 + i * 4.5, 17, 2.5, 1.5); x.fillRect(20 + i * 4.5, 44, 2, 1.5); }
    x.fillStyle = "#a01410"; poly(x, [[38, 52], [41, 61], [43, 53]]); x.fill(); poly(x, [[45, 52], [47, 61], [49, 53]]); x.fill();
    glow(x, "#ff2a1a", 10, () => { x.fillStyle = rad(x, 42, 48, 0, 7, [[0, "#ff8a7a"], [.5, "#c0201a"], [1, "#4a0404"]]); circle(x, 43.5, 50, 6); x.fill(); });
    x.strokeStyle = "rgba(60,0,0,.8)"; x.lineWidth = 1; circle(x, 43.5, 50, 3.2); x.stroke();
    [[11, 40, 1.4], [53, 28, 1.2], [9, 22, 1], [55, 41, 1]].forEach(([a, b, r]) => glow(x, "#ff8a1a", 6, () => { x.fillStyle = "#ffd890"; circle(x, a, b, r); x.fill(); }));
    sparkle(x, 52, 12, 5, "#ffe0a0");
  } },
  // horned demon skull with green soul-fire pouring from the eyes and glowing cracks
  skull: { bg: ["#3acc1a", "#031603"], draw(x) {
    const flame = (cx, cy, h, w) => { x.beginPath(); x.moveTo(cx, cy - h); x.quadraticCurveTo(cx + w * 1.4, cy - h * .25, cx, cy); x.quadraticCurveTo(cx - w * 1.4, cy - h * .25, cx, cy - h); x.closePath(); };
    x.save(); x.globalCompositeOperation = "lighter";
    [[20, 22, 20, 7], [32, 18, 24, 8], [44, 22, 20, 7]].forEach(([cx, cy, h, w]) => {
      x.fillStyle = rad(x, cx, cy, 0, h, [[0, "rgba(200,255,150,.6)"], [1, "rgba(40,200,20,0)"]]);
      flame(cx, cy, h, w); x.fill();
    });
    x.restore();
    const horn = lin(x, 0, 2, 0, 28, [[0, "#2a1e12"], [.5, "#a89070"], [1, "#efe2c0"]]);
    for (const s of [-1, 1]) {
      glow(x, "#000000", 4, () => {
        x.fillStyle = horn;
        x.beginPath(); x.moveTo(32 + s * 9, 17); x.bezierCurveTo(32 + s * 22, 16, 32 + s * 27, 9, 32 + s * 23, 2);
        x.bezierCurveTo(32 + s * 30, 10, 32 + s * 27, 23, 32 + s * 15, 26); x.closePath(); x.fill();
      });
      x.strokeStyle = "rgba(40,25,10,.6)"; x.lineWidth = .8;
      for (let k = 0; k < 3; k++) { x.beginPath(); x.moveTo(32 + s * (16 + k * 3), 18 - k * 3); x.lineTo(32 + s * (20 + k * 3), 21 - k * 3); x.stroke(); }
    }
    glow(x, "#000000", 10, () => {
      x.fillStyle = rad(x, 25, 20, 2, 30, [[0, "#fffbe8"], [.5, "#d8c9a0"], [1, "#5a4a2a"]]);
      x.beginPath(); x.ellipse(32, 29, 18, 17, 0, 0, PI * 2); x.fill();
      x.beginPath(); x.roundRect ? x.roundRect(21, 37, 22, 16, 5) : x.rect(21, 37, 22, 16); x.fill();
    });
    x.fillStyle = "#0a0604";
    x.beginPath(); x.ellipse(24.5, 32, 6, 7, .25, 0, PI * 2); x.fill();
    x.beginPath(); x.ellipse(39.5, 32, 6, 7, -.25, 0, PI * 2); x.fill();
    x.fillStyle = "#1a1008"; poly(x, [[32, 38], [29, 44], [35, 44]]); x.fill();
    x.strokeStyle = "#2a1a0a"; x.lineWidth = 1.2;
    x.beginPath(); x.moveTo(22, 47); x.lineTo(42, 47); x.stroke();
    for (let tx = 25; tx <= 39; tx += 3.5) { x.beginPath(); x.moveTo(tx, 43); x.lineTo(tx, 52); x.stroke(); }
    x.fillStyle = "#f4ead0";
    poly(x, [[23, 46], [26, 46], [24.5, 51]]); x.fill(); poly(x, [[38, 46], [41, 46], [39.5, 51]]); x.fill();
    x.save(); x.globalCompositeOperation = "lighter";
    for (const ex of [24.5, 39.5]) glow(x, "#7aff3a", 10, () => {
      x.fillStyle = rad(x, ex, 30, 0, 10, [[0, "#ffffff"], [.3, "#c0ff6a"], [1, "rgba(40,200,20,0)"]]);
      flame(ex, 36, 15, 4.5); x.fill();
    });
    glow(x, "#7aff3a", 6, () => {
      x.strokeStyle = "#b8ff7a"; x.lineWidth = 1;
      x.beginPath(); x.moveTo(37, 12); x.lineTo(40, 18); x.lineTo(37, 22); x.lineTo(39, 25); x.stroke();
      x.beginPath(); x.moveTo(22, 15); x.lineTo(25, 20); x.lineTo(23, 23); x.stroke();
    });
    x.restore();
    sparkle(x, 12, 50, 3, "#c8ff9a"); sparkle(x, 53, 46, 2.5, "#c8ff9a");
  } },
  potion: { bg: ["#2a5aff", "#050a28"], draw(x) {
    x.fillStyle = "rgba(200,230,255,.18)"; circle(x, 32, 40, 15); x.fill(); x.fillRect(27, 14, 10, 14);
    x.save(); circle(x, 32, 40, 14); x.clip();
    glow(x, "#ff2a1a", 14, () => { x.fillStyle = rad(x, 28, 40, 1, 18, [[0, "#ff9a8a"], [.45, "#e0201a"], [1, "#4a0404"]]); x.fillRect(0, 33, 64, 31); });
    x.fillStyle = "rgba(255,170,150,.8)"; x.beginPath(); x.ellipse(32, 33.5, 13, 2, 0, 0, PI * 2); x.fill();
    x.fillStyle = "rgba(255,220,210,.8)"; [[27, 44, 1.5], [36, 40, 1], [33, 49, 1.2]].forEach(([a, b, r]) => { circle(x, a, b, r); x.fill(); });
    x.restore();
    x.strokeStyle = "rgba(230,245,255,.7)"; x.lineWidth = 1.5;
    circle(x, 32, 40, 15); x.stroke(); x.strokeRect(27, 13, 10, 13);
    x.strokeStyle = "rgba(255,255,255,.85)"; x.lineWidth = 2.5; x.beginPath(); x.arc(32, 40, 11, PI * .9, PI * 1.35); x.stroke();
    x.fillStyle = lin(x, 25, 0, 39, 0, [[0, "#4a2a10"], [.5, "#b07a40"], [1, "#3a1a08"]]); x.fillRect(25, 7, 14, 8);
    sparkle(x, 50, 14, 6, "#bcd0ff");
  } },
  key: { bg: ["#1aa08a", "#03201a"], draw(x) {
    x.save(); x.translate(20, 22); x.rotate(PI / 4);
    const gold = lin(x, 0, -6, 0, 6, [[0, "#fff1a8"], [.5, "#e0a030"], [1, "#6a3a08"]]);
    glow(x, "#ffcf5a", 12, () => {
      x.strokeStyle = gold; x.lineWidth = 5; circle(x, 0, 0, 8.5); x.stroke();
      x.fillStyle = gold; x.fillRect(10, -2.5, 34, 5); x.fillRect(32, 2, 4, 7); x.fillRect(39, 2, 4, 9);
    });
    glow(x, "#3ee6c4", 10, () => { x.fillStyle = rad(x, -1, -1, 0, 4, [[0, "#ffffff"], [.5, "#3ee6c4"], [1, "#0a4a40"]]); circle(x, 0, 0, 3.5); x.fill(); });
    x.restore();
    sparkle(x, 50, 14, 6, "#d0fff4"); sparkle(x, 14, 50, 3);
  } },
  heart: { bg: ["#a020b0", "#1e0424"], draw(x) {
    const heart = () => { x.beginPath(); x.moveTo(32, 54); x.bezierCurveTo(6, 36, 9, 12, 23, 12); x.bezierCurveTo(28, 12, 32, 16, 32, 21); x.bezierCurveTo(32, 16, 36, 12, 41, 12); x.bezierCurveTo(55, 12, 58, 36, 32, 54); x.closePath(); };
    glow(x, "#ff2a5a", 18, () => { x.fillStyle = rad(x, 23, 22, 1, 36, [[0, "#ffc0cc"], [.3, "#ff3050"], [1, "#4a0412"]]); heart(); x.fill(); });
    x.fillStyle = "rgba(255,255,255,.65)"; x.beginPath(); x.ellipse(22, 21, 5, 2.6, -.6, 0, PI * 2); x.fill();
    sparkle(x, 48, 16, 6, "#ffd0e0"); sparkle(x, 14, 48, 3);
  } },
  eye: { bg: ["#a01a60", "#1a0410"], draw(x) {
    const lid = () => { x.beginPath(); x.moveTo(5, 32); x.quadraticCurveTo(32, 6, 59, 32); x.quadraticCurveTo(32, 58, 5, 32); x.closePath(); };
    glow(x, "#ff4a2a", 10, () => { x.fillStyle = rad(x, 32, 32, 4, 28, [[0, "#fff6d0"], [.65, "#d8b880"], [1, "#6a3a1a"]]); lid(); x.fill(); });
    x.save(); lid(); x.clip();
    x.strokeStyle = "rgba(170,20,10,.6)"; x.lineWidth = .8;
    [[8, 30, 18, 28], [9, 35, 19, 37], [56, 30, 46, 27], [55, 35, 45, 38], [30, 52, 31, 44]].forEach(([a, b, c, d]) => { x.beginPath(); x.moveTo(a, b); x.quadraticCurveTo((a + c) / 2, b - 3, c, d); x.stroke(); });
    glow(x, "#ff7a10", 14, () => { x.fillStyle = rad(x, 32, 32, 0, 12, [[0, "#ffe890"], [.45, "#ff6a10"], [1, "#5a0800"]]); circle(x, 32, 32, 11.5); x.fill(); });
    x.fillStyle = "#050202"; x.beginPath(); x.ellipse(32, 32, 2.6, 9.5, 0, 0, PI * 2); x.fill();
    x.fillStyle = "rgba(255,255,255,.9)"; circle(x, 36.5, 27, 2); x.fill();
    x.restore();
    x.strokeStyle = "#1a0604"; x.lineWidth = 2; lid(); x.stroke();
  } },
  candle: { bg: ["#e07010", "#2a0a02"], draw(x) {
    x.fillStyle = lin(x, 0, 52, 0, 60, [[0, "#ffd890"], [.5, "#b5793a"], [1, "#3a1a06"]]);
    x.beginPath(); x.ellipse(32, 55, 17, 5, 0, 0, PI * 2); x.fill();
    x.fillStyle = lin(x, 23, 0, 41, 0, [[0, "#8a7a5a"], [.45, "#fff6e0"], [1, "#7a6a4a"]]);
    x.fillRect(24, 29, 16, 25);
    x.fillStyle = "#f4ead0";
    x.beginPath(); x.ellipse(32, 29, 8, 3, 0, 0, PI * 2); x.fill();
    [[26, 29, 2, 7], [37, 29, 1.8, 10], [31, 30, 1.6, 4]].forEach(([a, b, w, h]) => { x.beginPath(); x.ellipse(a, b + h / 2, w, h / 2, 0, 0, PI * 2); x.fill(); });
    x.strokeStyle = "#2a1a0a"; x.lineWidth = 1.5; x.beginPath(); x.moveTo(32, 28); x.lineTo(32, 23); x.stroke();
    glow(x, "#ffaa30", 22, () => {
      x.fillStyle = rad(x, 32, 19, 0, 12, [[0, "#ffffff"], [.35, "#ffe27a"], [1, "#ff5a08"]]);
      x.beginPath(); x.moveTo(32, 5); x.quadraticCurveTo(41, 17, 32, 25); x.quadraticCurveTo(23, 17, 32, 5); x.fill();
    });
    sparkle(x, 48, 12, 4, "#ffe0a0");
  } },
  // grimoire: violet leather tome, gold filigree, clasp, glowing hexagram sigil, light leaking from the pages
  book: { bg: ["#6a2aff", "#0a0428"], draw(x) {
    glow(x, "#000000", 8, () => {
      x.fillStyle = lin(x, 0, 14, 0, 54, [[0, "#fff4d8"], [1, "#b8a078"]]); x.fillRect(43, 15, 7, 38);
      x.fillStyle = lin(x, 13, 12, 46, 54, [[0, "#5a2a8a"], [.5, "#2e1048"], [1, "#12041e"]]);
      x.beginPath(); x.roundRect ? x.roundRect(13, 12, 32, 42, 3) : x.rect(13, 12, 32, 42); x.fill();
    });
    glow(x, "#ffcf6a", 8, () => { x.fillStyle = "rgba(255,225,150,.95)"; x.fillRect(45.5, 16, 1.5, 36); });
    x.strokeStyle = "rgba(120,100,70,.5)"; x.lineWidth = .6;
    for (let y = 18; y < 52; y += 3) { x.beginPath(); x.moveTo(47, y); x.lineTo(50, y); x.stroke(); }
    x.fillStyle = "rgba(255,255,255,.12)"; x.fillRect(14, 13, 3, 40);
    const gold = lin(x, 0, 0, 64, 64, [[0, "#fff1a8"], [.5, "#e0a030"], [1, "#7a4a10"]]);
    x.strokeStyle = gold; x.lineWidth = 1.4; x.strokeRect(18.5, 16.5, 22, 33);
    x.fillStyle = gold;
    [[18.5, 16.5], [40.5, 16.5], [18.5, 49.5], [40.5, 49.5]].forEach(([cx, cy]) => { poly(x, [[cx, cy - 3.5], [cx + 3.5, cy], [cx, cy + 3.5], [cx - 3.5, cy]]); x.fill(); });
    x.fillRect(40, 30, 9, 7);
    x.fillStyle = "#3a0a50"; circle(x, 45, 33.5, 1.6); x.fill();
    x.save(); x.globalCompositeOperation = "lighter";
    glow(x, "#5ae0ff", 12, () => {
      x.strokeStyle = "#c8f6ff"; x.lineWidth = 1.3;
      circle(x, 29.5, 33, 9.5); x.stroke();
      x.lineWidth = .7; circle(x, 29.5, 33, 7); x.stroke();
      x.lineWidth = 1.1;
      poly(x, [[29.5, 24.5], [37, 37.5], [22, 37.5]]); x.stroke();
      poly(x, [[29.5, 41.5], [22, 28.5], [37, 28.5]]); x.stroke();
    });
    glow(x, "#ff4af0", 10, () => { x.fillStyle = "#ffd0ff"; circle(x, 29.5, 33, 2.3); x.fill(); });
    [[52, 14, 1.4], [55, 22, 1], [49, 8, 1.1], [10, 44, 1]].forEach(([a, b, r]) => glow(x, "#5ae0ff", 6, () => { x.fillStyle = "#e0faff"; circle(x, a, b, r); x.fill(); }));
    x.restore();
    sparkle(x, 54, 10, 5, "#d8c8ff");
  } },
  moon: { bg: ["#2a4ab0", "#030716"], draw(x) {
    x.save(); x.beginPath(); x.rect(0, 0, 64, 64); x.arc(41, 25, 16, 0, PI * 2, true); x.clip("evenodd");
    glow(x, "#bcd0ff", 20, () => { x.fillStyle = rad(x, 26, 30, 2, 22, [[0, "#ffffff"], [.55, "#dfe8ff"], [1, "#6a7aa8"]]); circle(x, 31, 33, 19); x.fill(); });
    x.fillStyle = "rgba(110,120,170,.45)"; [[22, 40, 3], [26, 26, 2], [19, 32, 1.6]].forEach(([a, b, r]) => { circle(x, a, b, r); x.fill(); });
    x.restore();
    sparkle(x, 50, 44, 5, "#e0eaff"); sparkle(x, 47, 12, 3); sparkle(x, 12, 52, 2.5);
  } },
  // ---------- game icons: stylized fan takes, not official logos ----------
  wow: { bg: ["#3a6aff", "#050b22"], draw(x) {
    const gold = lin(x, 10, 10, 54, 56, [[0, "#fff6b0"], [.35, "#f0c030"], [.7, "#c06a10"], [1, "#6a3006"]]);
    x.fillStyle = gold;
    [[12, 13], [52, 13], [12, 53], [52, 53]].forEach(([a, b]) => { poly(x, [[a, b - 6], [a + 6, b], [a, b + 6], [a - 6, b]]); x.fill(); });
    x.fillStyle = rad(x, 24, 22, 2, 24, [[0, "#9ab8e0"], [.45, "#34486a"], [1, "#0a0e18"]]);
    circle(x, 32, 33, 19); x.fill();
    x.strokeStyle = "rgba(10,14,24,.75)"; x.lineWidth = 2.5;
    x.beginPath(); x.moveTo(15, 27); x.lineTo(21, 30); x.lineTo(24, 36); x.moveTo(36, 15); x.quadraticCurveTo(34, 22, 40, 26); x.stroke();
    glow(x, "#ffb030", 8, () => { x.strokeStyle = gold; x.lineWidth = 5; circle(x, 32, 33, 21); x.stroke(); });
    x.strokeStyle = "rgba(255,255,255,.35)"; x.lineWidth = 1; x.beginPath(); x.arc(32, 33, 23, PI * 1.05, PI * 1.6); x.stroke();
    const W = [[16, 20], [25, 20], [28.5, 37], [32, 25], [35.5, 37], [39, 20], [48, 20], [40, 48], [34.5, 48], [32, 40], [29.5, 48], [24, 48]];
    x.strokeStyle = "#0a0604"; x.lineWidth = 3; poly(x, W); x.stroke();
    glow(x, "#ffcf3a", 10, () => { x.fillStyle = lin(x, 16, 20, 48, 48, [[0, "#fff2a0"], [.4, "#f0c020"], [.75, "#e07a10"], [1, "#8a3006"]]); poly(x, W); x.fill(); });
    x.fillStyle = "rgba(160,60,0,.55)";
    poly(x, [[25, 20], [28.5, 37], [27, 42], [22, 22]]); x.fill();
    poly(x, [[48, 20], [40, 48], [37.5, 48], [44.5, 22]]); x.fill();
    x.fillStyle = "rgba(255,250,200,.6)"; poly(x, [[16, 20], [19, 20], [26, 48], [24, 48]]); x.fill();
  } },
  blackops: { bg: ["#6a7a5a", "#070806"], draw(x) {
    x.fillStyle = rad(x, 32, 26, 2, 24, [[0, "#b0b8a0"], [.5, "#4a5442"], [1, "#101410"]]);
    circle(x, 32, 33, 21); x.fill();
    x.strokeStyle = "#1a1a16"; x.lineWidth = 2.4;
    x.beginPath(); x.moveTo(12, 12); x.lineTo(26, 34); x.moveTo(52, 12); x.lineTo(38, 34); x.stroke();
    x.lineWidth = 1.5; x.beginPath(); x.moveTo(17, 22); x.lineTo(14, 25); x.moveTo(47, 22); x.lineTo(50, 25); x.stroke();
    x.fillStyle = "#0c0e0a";
    x.beginPath(); x.moveTo(13, 56); x.quadraticCurveTo(14, 32, 25, 30); x.lineTo(39, 30); x.quadraticCurveTo(50, 32, 51, 56); x.closePath(); x.fill();
    x.beginPath(); x.ellipse(32, 22, 7, 8, 0, 0, PI * 2); x.fill();
    x.fillStyle = "#1e221a"; x.beginPath(); x.ellipse(32, 16.5, 7.5, 3.5, 0, PI, 0); x.fill();
    glow(x, "#ffe0a0", 6, () => { x.fillStyle = "rgba(255,230,180,.9)"; circle(x, 33.5, 23, 1); x.fill(); });
    x.fillStyle = lin(x, 0, 38, 0, 52, [[0, "#8a5a40"], [1, "#3a2216"]]);
    x.fillRect(20, 38, 5, 13); x.fillRect(39, 38, 5, 13);
    x.fillStyle = "#2a2a28"; x.fillRect(21, 50, 3, 7); x.fillRect(40, 50, 3, 7);
    glow(x, "#ff7a20", 8, () => { x.strokeStyle = "#e0661a"; x.lineWidth = 2.5; circle(x, 32, 33, 22); x.stroke(); });
  } },
  minecraft: { bg: ["#5ab040", "#081806"], draw(x) {
    const face = (A, U, V, shadeF, top) => {
      x.save(); x.transform((U[0] - A[0]) / 8, (U[1] - A[1]) / 8, (V[0] - A[0]) / 8, (V[1] - A[1]) / 8, A[0], A[1]);
      for (let u = 0; u < 8; u++) for (let v = 0; v < 8; v++) {
        const g = grain(top ? 3 : U[0], u, v);
        let col;
        if (top) col = [[90, 160, 60], [110, 185, 70], [140, 210, 90], [80, 140, 50]][Math.floor(g * 4)];
        else if (v < 1 || (v < 2 && g > .4) || (v < 3 && g > .8)) col = [[60, 140, 50], [80, 160, 60], [50, 120, 40]][Math.floor(g * 3)];
        else col = g > .93 ? [120, 120, 120] : [[150, 100, 70], [120, 80, 55], [90, 60, 40], [170, 115, 80]][Math.floor(g * 4)];
        x.fillStyle = `rgb(${col.map((c) => Math.round(c * shadeF)).join(",")})`;
        x.fillRect(u, v, 1.03, 1.03);
      }
      x.restore();
    };
    face([13, 22], [32, 12], [32, 32], 1.1, true);
    face([13, 22], [32, 32], [13, 43], .85, false);
    face([32, 32], [51, 22], [32, 53], .62, false);
    x.strokeStyle = "rgba(255,255,220,.35)"; x.lineWidth = 1;
    x.beginPath(); x.moveTo(13, 22); x.lineTo(32, 12); x.lineTo(51, 22); x.stroke();
    x.strokeStyle = "rgba(0,0,0,.35)"; x.beginPath(); x.moveTo(32, 32); x.lineTo(32, 53); x.stroke();
    sparkle(x, 50, 11, 4, "#e0ffd0");
  } },
  ff14: { bg: ["#3ab0ff", "#03101e"], draw(x) {
    x.save(); x.globalCompositeOperation = "lighter";
    for (let i = 0; i < 16; i++) {
      const a = grain(41, i, 1) * PI * 2, l = 12 + grain(41, i, 2) * 16, w = 1 + grain(41, i, 3) * 1.6;
      x.fillStyle = `rgba(${170 + grain(41, i, 4) * 85},235,255,.55)`;
      poly(x, [[32 + Math.cos(a + PI / 2) * w, 30 + Math.sin(a + PI / 2) * w], [32 + Math.cos(a) * l, 30 + Math.sin(a) * l], [32 - Math.cos(a + PI / 2) * w, 30 - Math.sin(a + PI / 2) * w]]); x.fill();
    }
    x.restore();
    glow(x, "#7ad8ff", 16, () => {
      x.fillStyle = lin(x, 26, 14, 38, 46, [[0, "#ffffff"], [.45, "#bfeeff"], [1, "#2a8ad0"]]);
      poly(x, [[32, 12], [39, 30], [32, 48], [25, 30]]); x.fill();
    });
    x.fillStyle = "rgba(255,255,255,.75)"; poly(x, [[32, 12], [32, 48], [25, 30]]); x.fill();
    glow(x, "#7ad8ff", 8, () => { x.strokeStyle = "#cff4ff"; x.lineWidth = 1.5; x.beginPath(); x.arc(32, 22, 28, PI * .3, PI * .7); x.stroke(); });
    sparkle(x, 18, 18, 4); sparkle(x, 48, 42, 3, "#cff4ff");
  } },
  gw2: { bg: ["#e0401a", "#1c0402"], draw(x) {
    const fire = lin(x, 0, 8, 0, 58, [[0, "#ffd070"], [.4, "#ff6a10"], [.75, "#c01a0a"], [1, "#4a0402"]]);
    glow(x, "#ff4a10", 14, () => {
      x.fillStyle = fire;
      x.font = "bold 54px Georgia, serif"; x.textAlign = "center"; x.textBaseline = "middle";
      x.fillText("2", 34, 36);
      [[18, 22, 8, 10], [22, 14, 12, 5], [30, 9, 16, 4], [42, 10, 22, 7], [14, 30, 6, 16]].forEach(([a, b, c, d]) => {
        poly(x, [[a, b], [c, d], [a + 5, b + 3]]); x.fill();
      });
    });
    x.strokeStyle = "rgba(30,0,0,.6)"; x.lineWidth = 1;
    for (let i = 0; i < 6; i++) { x.beginPath(); x.moveTo(16 + i * 6, 52 - i * 2); x.lineTo(24 + i * 6, 44 - i * 3); x.stroke(); }
    glow(x, "#ffd070", 6, () => { x.fillStyle = "#ffe8a0"; circle(x, 26, 20, 1.6); x.fill(); });
  } },
  persona2: { bg: ["#d01a1a", "#180202"], draw(x) {
    x.fillStyle = "rgba(60,0,0,.5)";
    [[14, 16, 6], [50, 48, 8], [44, 14, 4], [16, 50, 5]].forEach(([a, b, r]) => { circle(x, a, b, r); x.fill(); });
    x.save(); x.translate(32, 33);
    for (const r of [PI / 4, -PI / 4]) {
      x.save(); x.rotate(r);
      glow(x, "#ff2a1a", 10, () => { x.fillStyle = lin(x, 0, -6, 0, 6, [[0, "#ff6a5a"], [.5, "#e01a10"], [1, "#7a0404"]]); x.fillRect(-27, -6, 54, 12); });
      x.restore();
    }
    x.restore();
    const heart = () => { x.beginPath(); x.moveTo(32, 46); x.bezierCurveTo(16, 36, 18, 22, 26, 22); x.bezierCurveTo(29, 22, 32, 25, 32, 28); x.bezierCurveTo(32, 25, 35, 22, 38, 22); x.bezierCurveTo(46, 22, 48, 36, 32, 46); x.closePath(); };
    glow(x, "#000000", 6, () => { x.fillStyle = "#0c0606"; heart(); x.fill(); });
    x.strokeStyle = "#f4ead8"; x.lineWidth = 2; heart(); x.stroke();
    x.fillStyle = "rgba(255,255,255,.35)"; x.beginPath(); x.ellipse(27, 28, 3, 1.6, -.6, 0, PI * 2); x.fill();
  } },
  // just the chef's hat, centred
  overcooked: { bg: ["#4ab8ff", "#06182e"], draw(x) {
    glow(x, "#000000", 8, () => {
      x.fillStyle = rad(x, 26, 19, 2, 22, [[0, "#ffffff"], [.7, "#e8eef4"], [1, "#9aa8b8"]]);
      [[22, 30, 9], [32, 25, 10], [42, 30, 9], [32, 33, 9]].forEach(([a, b, r]) => { circle(x, a, b, r); x.fill(); });
      x.fillStyle = lin(x, 0, 36, 0, 48, [[0, "#ffffff"], [1, "#b8c4d0"]]); x.fillRect(19, 36, 26, 12);
    });
    x.strokeStyle = "rgba(120,140,160,.6)"; x.lineWidth = 1;
    [26, 32, 38].forEach((a) => { x.beginPath(); x.moveTo(a, 37); x.lineTo(a, 47); x.stroke(); });
    sparkle(x, 50, 14, 4, "#e0f4ff");
  } },
  // just the paper bag head, centred
  nightmares: { bg: ["#2aa8b0", "#02121a"], draw(x) {
    glow(x, "#000000", 10, () => {
      x.fillStyle = lin(x, 18, 0, 44, 0, [[0, "#8a7450"], [.45, "#d8c49a"], [1, "#7a6444"]]);
      poly(x, [[19, 17], [24, 14], [29, 17], [34, 13], [40, 16], [45, 15], [44, 51], [20, 51]]); x.fill();
    });
    x.strokeStyle = "rgba(90,70,40,.6)"; x.lineWidth = 1;
    [[22, 21, 26, 33], [40, 19, 37, 43], [30, 41, 34, 47]].forEach(([a, b, c, d]) => { x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.stroke(); });
    x.fillStyle = "rgba(60,40,20,.35)"; x.fillRect(20, 46, 24, 5);
    x.fillStyle = "#050302";
    x.beginPath(); x.ellipse(27, 31, 2.8, 3.4, 0, 0, PI * 2); x.fill();
    x.beginPath(); x.ellipse(37, 31, 2.8, 3.4, 0, 0, PI * 2); x.fill();
  } },
  spiderman: { bg: ["#e0201a", "#1e0204"], draw(x) {
    glow(x, "#000000", 8, () => {
      x.fillStyle = rad(x, 26, 22, 2, 26, [[0, "#ff6a5a"], [.5, "#d01a14"], [1, "#5a0404"]]);
      x.beginPath(); x.ellipse(32, 33, 16, 20, 0, 0, PI * 2); x.fill();
    });
    x.save(); x.beginPath(); x.ellipse(32, 33, 16, 20, 0, 0, PI * 2); x.clip();
    x.strokeStyle = "rgba(20,0,0,.65)"; x.lineWidth = .8;
    for (let i = 0; i < 10; i++) { const a = i * PI / 5; x.beginPath(); x.moveTo(32, 30); x.lineTo(32 + Math.cos(a) * 30, 30 + Math.sin(a) * 30); x.stroke(); }
    for (let r = 6; r < 30; r += 6) { x.beginPath(); for (let i = 0; i <= 10; i++) { const a = i * PI / 5, rr = r * (i % 2 ? .92 : 1); x.lineTo(32 + Math.cos(a) * rr, 30 + Math.sin(a) * rr); } x.stroke(); }
    x.restore();
    // angular eyes: wide at the outer top, tapering to the inner bottom, with thick black frames
    for (const s of [-1, 1]) {
      const eye = [[32 + s * 2.5, 39], [32 + s * 14.5, 29], [32 + s * 15, 36], [32 + s * 9.5, 41.5]];
      x.lineJoin = "round"; x.strokeStyle = "#0a0404"; x.lineWidth = 3; poly(x, eye); x.stroke();
      glow(x, "#ffffff", 4, () => { x.fillStyle = lin(x, 0, 29, 0, 42, [[0, "#ffffff"], [1, "#c8d4e4"]]); poly(x, eye); x.fill(); });
    }
  } },
  // the Demi-fiend: olive-yellow face lit from the left, dark hair, glowing gold eyes,
  // black tattoo stripes with green-glowing edges running down the face, blood spatter
  smt3: { bg: ["#a8a020", "#0e0c02"], draw(x) {
    // painted a little smaller so the whole face fits inside the frame after the icon zoom
    x.translate(32, 33); x.scale(.8, .8); x.translate(-32, -33);
    const face = () => { x.beginPath(); x.moveTo(12, 16); x.quadraticCurveTo(32, 10, 52, 16); x.quadraticCurveTo(57, 36, 48, 52); x.quadraticCurveTo(40, 62, 32, 62); x.quadraticCurveTo(22, 62, 16, 52); x.quadraticCurveTo(7, 36, 12, 16); x.closePath(); };
    glow(x, "#000000", 6, () => { x.fillStyle = lin(x, 10, 0, 56, 0, [[0, "#f2e690"], [.45, "#c4b450"], [.8, "#6a5e1c"], [1, "#2a2408"]]); face(); x.fill(); });
    // tattoo stripes, clipped to the face
    x.save(); face(); x.clip();
    const stripe = (pts) => {
      const path = () => { x.beginPath(); pts.forEach(([a, b], i) => (i ? x.lineTo(a, b) : x.moveTo(a, b))); };
      x.lineJoin = "round"; x.strokeStyle = "#060604"; x.lineWidth = 2.8; path(); x.stroke();
      glow(x, "#3aff8a", 6, () => { x.strokeStyle = "rgba(110,255,160,.9)"; x.lineWidth = .7; x.save(); x.translate(1.6, 0); path(); x.stroke(); x.restore(); });
    };
    stripe([[35, 8], [36, 22], [40, 30], [38, 44], [42, 62]]);
    stripe([[45, 10], [47, 24], [50, 34], [47, 50], [49, 62]]);
    stripe([[14, 30], [13, 42], [17, 54]]);
    stripe([[22, 52], [26, 58], [32, 60]]);
    // shadow on the far side of the face
    x.fillStyle = lin(x, 30, 0, 56, 0, [[0, "rgba(0,0,0,0)"], [1, "rgba(0,0,0,.45)"]]); x.fillRect(30, 0, 30, 64);
    x.restore();
    // hair and bangs
    x.fillStyle = "#0c0a06";
    x.beginPath(); x.moveTo(6, 2); x.lineTo(58, 2); x.lineTo(58, 22);
    x.quadraticCurveTo(52, 15, 47, 23); x.quadraticCurveTo(42, 14, 37, 22); x.quadraticCurveTo(31, 13, 27, 21); x.quadraticCurveTo(21, 14, 17, 22); x.quadraticCurveTo(11, 16, 8, 26); x.closePath(); x.fill();
    // brows, eyes, nose, mouth
    x.strokeStyle = "#1a1404"; x.lineWidth = 1.8; x.lineCap = "round";
    x.beginPath(); x.moveTo(17, 27); x.lineTo(27, 25.5); x.stroke();
    x.beginPath(); x.moveTo(37, 25.5); x.lineTo(46, 27); x.stroke();
    [[22.5, 31, 1], [41, 31, .7]].forEach(([ex, ey, lit]) => {
      x.fillStyle = `rgba(250,244,200,${lit})`; x.beginPath(); x.moveTo(ex - 5, ey); x.quadraticCurveTo(ex, ey - 3.6, ex + 5, ey); x.quadraticCurveTo(ex, ey + 2.8, ex - 5, ey); x.fill();
      glow(x, "#ffcf3a", 8, () => { x.fillStyle = rad(x, ex, ey, 0, 2.8, [[0, "#fff8c0"], [.5, "#f0b020"], [1, "#6a4004"]]); circle(x, ex, ey, 2.4); x.fill(); });
      x.fillStyle = "#0a0602"; x.fillRect(ex - .5, ey - 1.8, 1, 3.6);
      x.strokeStyle = "#1a1404"; x.lineWidth = 1; x.beginPath(); x.moveTo(ex - 5, ey); x.quadraticCurveTo(ex, ey - 3.6, ex + 5, ey); x.stroke();
    });
    x.strokeStyle = "rgba(70,58,14,.7)"; x.lineWidth = 1;
    x.beginPath(); x.moveTo(32, 31); x.lineTo(33.5, 41); x.lineTo(30, 43); x.stroke();
    x.strokeStyle = "#3a2e0a"; x.lineWidth = 1.2; x.beginPath(); x.moveTo(27, 50); x.quadraticCurveTo(32, 51, 37, 49.5); x.stroke();
    // blood spatter
    x.fillStyle = "rgba(90,10,4,.75)"; [[50, 40, 2.2], [53, 46, 1.4], [48, 22, 1.2], [16, 46, 1]].forEach(([a, b, r]) => { circle(x, a, b, r); x.fill(); });
  } },
  // ---------- other-tab icons ----------
  dna: { bg: ["#3ac060", "#02140a"], draw(x) {
    const at = (y, s) => 32 + Math.sin(y * .22) * 14 * s;
    for (let y = 8; y <= 56; y += 4) {
      const front = Math.cos(y * .22) > 0;
      x.strokeStyle = front ? "rgba(220,255,230,.75)" : "rgba(80,160,100,.5)"; x.lineWidth = 1.6;
      x.beginPath(); x.moveTo(at(y, 1), y); x.lineTo(at(y, -1), y); x.stroke();
      x.fillStyle = ["#ff5a7a", "#ffcf3a", "#5ad0ff", "#b07aff"][(y / 4) % 4];
      circle(x, (at(y, 1) + at(y, -1)) / 2, y, 1.3); x.fill();
    }
    [1, -1].forEach((s) => glow(x, s > 0 ? "#7affa0" : "#5ad0ff", 10, () => {
      x.strokeStyle = s > 0 ? "#c8ffd8" : "#bfeeff"; x.lineWidth = 3; x.lineCap = "round";
      x.beginPath(); for (let y = 6; y <= 58; y++) x.lineTo(at(y, s), y); x.stroke();
    }));
  } },
  grad: { bg: ["#3a5aff", "#040a20"], draw(x) {
    glow(x, "#000000", 8, () => {
      x.fillStyle = lin(x, 0, 28, 0, 44, [[0, "#2a2e4a"], [1, "#0a0c18"]]);
      x.beginPath(); x.moveTo(20, 28); x.lineTo(44, 28); x.lineTo(43, 41); x.quadraticCurveTo(32, 46, 21, 41); x.closePath(); x.fill();
      x.fillStyle = lin(x, 8, 14, 56, 34, [[0, "#4a5070"], [.5, "#20243a"], [1, "#0a0c18"]]);
      poly(x, [[6, 24], [32, 13], [58, 24], [32, 35]]); x.fill();
    });
    x.strokeStyle = "rgba(160,170,220,.5)"; x.lineWidth = 1; poly(x, [[6, 24], [32, 13], [58, 24], [32, 35]]); x.stroke();
    const gold = lin(x, 0, 20, 0, 50, [[0, "#fff1a8"], [.5, "#e0a030"], [1, "#7a4a10"]]);
    glow(x, "#ffcf3a", 8, () => {
      x.strokeStyle = gold; x.lineWidth = 1.6;
      x.beginPath(); x.moveTo(32, 24); x.lineTo(50, 28); x.lineTo(50, 42); x.stroke();
      x.fillStyle = gold; circle(x, 32, 24, 2.2); x.fill();
      poly(x, [[47.5, 42], [52.5, 42], [54, 52], [46, 52]]); x.fill();
    });
    sparkle(x, 14, 46, 4, "#dfe4ff"); sparkle(x, 52, 10, 3);
  } },
  sportbike: { bg: ["#ff3a2a", "#1a0402"], draw(x) {
    x.strokeStyle = "rgba(255,200,180,.35)"; x.lineWidth = 1.2;
    [[2, 26, 14], [2, 32, 10], [4, 38, 12]].forEach(([a, b, l]) => { x.beginPath(); x.moveTo(a, b); x.lineTo(a + l, b); x.stroke(); });
    [[17, 44], [47, 44]].forEach(([a, b]) => {
      x.fillStyle = "#0a0a0c"; circle(x, a, b, 9.5); x.fill();
      x.strokeStyle = lin(x, a - 6, b - 6, a + 6, b + 6, [[0, "#e8eaf0"], [1, "#5a5e68"]]); x.lineWidth = 1.5; circle(x, a, b, 5.5); x.stroke();
      x.fillStyle = "#b0b4c0"; circle(x, a, b, 1.6); x.fill();
    });
    x.strokeStyle = "#8a8e98"; x.lineWidth = 2; x.beginPath(); x.moveTo(17, 44); x.lineTo(28, 36); x.moveTo(47, 44); x.lineTo(44, 30); x.stroke();
    glow(x, "#ff4a2a", 10, () => {
      x.fillStyle = lin(x, 12, 22, 50, 42, [[0, "#ff8a6a"], [.45, "#e0201a"], [1, "#6a0404"]]);
      poly(x, [[12, 36], [22, 29], [34, 27], [44, 21], [53, 25], [52, 33], [41, 38], [28, 40], [16, 40]]); x.fill();
    });
    x.fillStyle = "rgba(120,180,220,.75)"; poly(x, [[42, 22], [47, 15], [51, 24]]); x.fill();
    x.fillStyle = "#121216"; poly(x, [[18, 30], [30, 27], [32, 30], [20, 33]]); x.fill();
    x.fillStyle = "#d8dce4"; x.fillRect(10, 38, 9, 3);
    x.fillStyle = "rgba(255,255,255,.55)"; poly(x, [[24, 31], [40, 28], [38, 30], [26, 33]]); x.fill();
    glow(x, "#fff4a0", 6, () => { x.fillStyle = "#fff8d0"; circle(x, 52, 28, 1.6); x.fill(); });
  } },
  // ---------- connection icons ----------
  discord: { bg: ["#5865f2", "#05061c"], draw(x) {
    glow(x, "#aab4ff", 12, () => {
      x.fillStyle = rad(x, 26, 22, 2, 30, [[0, "#ffffff"], [.7, "#e4e8ff"], [1, "#a8b0e8"]]);
      x.beginPath();
      x.moveTo(17, 18); x.quadraticCurveTo(32, 12, 47, 18);
      x.quadraticCurveTo(56, 32, 54, 46); x.quadraticCurveTo(50, 50, 44, 51); x.lineTo(41, 46);
      x.quadraticCurveTo(32, 49, 23, 46); x.lineTo(20, 51); x.quadraticCurveTo(14, 50, 10, 46);
      x.quadraticCurveTo(8, 32, 17, 18); x.fill();
    });
    x.fillStyle = "#1a1e5a";
    x.beginPath(); x.ellipse(24.5, 35, 4, 4.6, 0, 0, PI * 2); x.fill();
    x.beginPath(); x.ellipse(39.5, 35, 4, 4.6, 0, 0, PI * 2); x.fill();
    x.fillStyle = "rgba(255,255,255,.8)"; circle(x, 25.5, 33.5, 1); x.fill(); circle(x, 40.5, 33.5, 1); x.fill();
    sparkle(x, 52, 11, 4, "#dfe4ff");
  } },
  twitter: { bg: ["#1da1f2", "#020c18"], draw(x) {
    glow(x, "#9ad8ff", 12, () => {
      x.fillStyle = rad(x, 30, 26, 2, 26, [[0, "#ffffff"], [.7, "#dff2ff"], [1, "#8ac8f0"]]);
      x.beginPath(); x.ellipse(31, 36, 16, 11, -.35, 0, PI * 2); x.fill();
      circle(x, 44, 23, 7.5); x.fill();
      poly(x, [[50, 20], [58, 17], [51, 25]]); x.fill();
      poly(x, [[18, 40], [7, 34], [11, 46]]); x.fill();
      x.beginPath(); x.moveTo(20, 32); x.quadraticCurveTo(14, 18, 8, 16); x.quadraticCurveTo(22, 18, 34, 28); x.fill();
    });
    x.fillStyle = "#0a2a4a"; circle(x, 46, 22, 1.5); x.fill();
    x.strokeStyle = "rgba(60,140,200,.5)"; x.lineWidth = 1; x.beginPath(); x.moveTo(22, 34); x.quadraticCurveTo(30, 40, 40, 36); x.stroke();
  } },
  portfolio: { bg: ["#a07a3a", "#140c04"], draw(x) {
    x.strokeStyle = "#3a2210"; x.lineWidth = 3.5; x.beginPath(); x.moveTo(25, 22); x.lineTo(25, 15); x.lineTo(39, 15); x.lineTo(39, 22); x.stroke();
    glow(x, "#000000", 8, () => {
      x.fillStyle = lin(x, 0, 20, 0, 52, [[0, "#b07040"], [.5, "#7a4420"], [1, "#3a1a08"]]);
      x.beginPath(); x.roundRect ? x.roundRect(9, 21, 46, 31, 4) : x.rect(9, 21, 46, 31); x.fill();
    });
    x.strokeStyle = "rgba(30,14,4,.7)"; x.lineWidth = 1.2; x.beginPath(); x.moveTo(9, 33); x.lineTo(55, 33); x.stroke();
    x.strokeStyle = "rgba(255,220,180,.25)"; x.setLineDash([2, 2]); x.strokeRect(12, 24, 40, 25); x.setLineDash([]);
    const gold = lin(x, 0, 30, 0, 50, [[0, "#fff1a8"], [.5, "#e0a030"], [1, "#7a4a10"]]);
    x.strokeStyle = gold; x.lineWidth = 3; x.beginPath(); x.arc(32, 36, 5, PI, 0); x.stroke();
    glow(x, "#ffcf3a", 10, () => { x.fillStyle = gold; x.beginPath(); x.roundRect ? x.roundRect(25, 36, 14, 12, 2) : x.rect(25, 36, 14, 12); x.fill(); });
    x.fillStyle = "#2a1404"; circle(x, 32, 41, 1.8); x.fill(); x.fillRect(31.2, 41, 1.6, 4);
    sparkle(x, 50, 13, 4, "#fff0c0");
  } },
  // ---------- favourites icons ----------
  littleprince: { bg: ["#2a4ab8", "#03061a"], draw(x) {
    [[10, 12, 2.5], [52, 10, 3.5], [56, 30, 2], [8, 34, 2], [44, 20, 1.6]].forEach(([a, b, r]) => sparkle(x, a, b, r, "#fff4c0"));
    glow(x, "#ffcf6a", 14, () => { x.fillStyle = rad(x, 26, 40, 2, 18, [[0, "#ffe8a0"], [.6, "#d8a050"], [1, "#6a4018"]]); circle(x, 32, 47, 15); x.fill(); });
    x.fillStyle = "rgba(110,60,20,.45)"; [[26, 44, 2.5], [37, 50, 2], [30, 54, 1.5]].forEach(([a, b, r]) => { circle(x, a, b, r); x.fill(); });
    x.fillStyle = "#3a8a2a"; x.fillRect(42.5, 30, 1, 5);
    glow(x, "#ff3a4a", 5, () => { x.fillStyle = "#e0203a"; circle(x, 43, 29, 2.3); x.fill(); });
    x.fillStyle = "#1a7a4a"; x.fillRect(27, 26, 7, 8);
    x.fillStyle = "#3aa04a"; x.fillRect(27.5, 33, 2.4, 2.5); x.fillRect(31.2, 33, 2.4, 2.5);
    x.fillStyle = "#ffe0c0"; circle(x, 30.5, 22, 3.6); x.fill();
    x.fillStyle = "#ffd040"; x.beginPath(); x.moveTo(26.5, 21); x.quadraticCurveTo(30.5, 15, 34.5, 21); x.quadraticCurveTo(30.5, 18.5, 26.5, 21); x.fill();
    glow(x, "#ffcf3a", 6, () => {
      x.fillStyle = "#ffd040"; x.fillRect(27, 25.5, 7, 2);
      x.beginPath(); x.moveTo(33, 26); x.quadraticCurveTo(42, 22, 46, 18); x.quadraticCurveTo(42, 26, 33, 28); x.fill();
    });
  } },
  sushi: { bg: ["#2a7ab0", "#030a14"], draw(x) {
    x.strokeStyle = lin(x, 0, 0, 64, 0, [[0, "#a87a4a"], [1, "#e8c890"]]); x.lineWidth = 2.5; x.lineCap = "round";
    x.beginPath(); x.moveTo(30, 6); x.lineTo(58, 22); x.moveTo(34, 4); x.lineTo(60, 16); x.stroke();
    glow(x, "#000000", 8, () => { x.fillStyle = rad(x, 28, 38, 2, 22, [[0, "#ffffff"], [.7, "#f0ece0"], [1, "#b8b0a0"]]); x.beginPath(); x.ellipse(32, 42, 21, 10, 0, 0, PI * 2); x.fill(); });
    x.fillStyle = "rgba(200,190,170,.7)"; for (let i = 0; i < 14; i++) { x.beginPath(); x.ellipse(15 + grain(2, i, 1) * 34, 40 + grain(2, i, 2) * 9, 1.6, .8, grain(2, i, 3) * PI, 0, PI * 2); x.fill(); }
    glow(x, "#ff8a4a", 10, () => {
      x.fillStyle = lin(x, 10, 22, 54, 40, [[0, "#ffb080"], [.5, "#ff7a3a"], [1, "#d0461a"]]);
      x.beginPath(); x.moveTo(9, 39); x.bezierCurveTo(12, 22, 48, 18, 56, 34); x.bezierCurveTo(48, 40, 22, 44, 9, 39); x.fill();
    });
    x.strokeStyle = "rgba(255,240,230,.85)"; x.lineWidth = 1.6;
    [[16, 36, 22, 26], [24, 38, 30, 24], [33, 38, 38, 23], [42, 37, 46, 25]].forEach(([a, b, c, d]) => { x.beginPath(); x.moveTo(a, b); x.quadraticCurveTo((a + c) / 2 + 3, (b + d) / 2, c, d); x.stroke(); });
    glow(x, "#7aff5a", 6, () => { x.fillStyle = "#8ad04a"; x.beginPath(); x.ellipse(52, 50, 4, 3, 0, 0, PI * 2); x.fill(); });
  } },
  gelato: { bg: ["#ff7ab0", "#1e0612"], draw(x) {
    x.fillStyle = lin(x, 22, 38, 42, 58, [[0, "#e8b060"], [1, "#9a6020"]]);
    poly(x, [[20, 36], [44, 36], [32, 60]]); x.fill();
    x.strokeStyle = "rgba(110,60,20,.7)"; x.lineWidth = 1;
    for (let i = 0; i < 5; i++) { x.beginPath(); x.moveTo(20 + i * 5, 36); x.lineTo(32 + i * 2.5, 58 - i * 4); x.moveTo(44 - i * 5, 36); x.lineTo(32 - i * 2.5, 58 - i * 4); x.stroke(); }
    glow(x, "#a0e070", 8, () => { x.fillStyle = rad(x, 22, 26, 1, 13, [[0, "#d8f0a8"], [.6, "#9ac860"], [1, "#5a8a30"]]); circle(x, 26, 32, 11); x.fill(); });
    glow(x, "#ff4a8a", 10, () => { x.fillStyle = rad(x, 34, 18, 1, 13, [[0, "#ffc0d8"], [.6, "#f04a7a"], [1, "#a01a40"]]); circle(x, 38, 25, 11); x.fill(); });
    x.fillStyle = "#f04a7a"; x.beginPath(); x.ellipse(44, 35, 2, 4, 0, 0, PI * 2); x.fill();
    x.fillStyle = "#6a9a30"; [[20, 26], [24, 36], [29, 28], [18, 33]].forEach(([a, b]) => { x.fillRect(a, b, 2, 1.4); });
    glow(x, "#ff2a4a", 6, () => { x.fillStyle = rad(x, 36, 12, 0, 5, [[0, "#ff8aa0"], [1, "#a0081a"]]); circle(x, 37, 13, 4); x.fill(); });
    x.fillStyle = "rgba(255,220,230,.8)"; [[35, 12], [38, 14], [37, 11]].forEach(([a, b]) => { circle(x, a, b, .5); x.fill(); });
    x.fillStyle = "#3a8a2a"; poly(x, [[38, 9], [42, 6], [40, 10]]); x.fill();
  } },
  lasagna: { bg: ["#e06a1a", "#1e0a02"], draw(x) {
    x.save(); x.globalCompositeOperation = "lighter"; x.strokeStyle = "rgba(255,255,255,.35)"; x.lineWidth = 2;
    [20, 32, 44].forEach((a) => { x.beginPath(); x.moveTo(a, 22); x.bezierCurveTo(a - 5, 16, a + 5, 12, a, 4); x.stroke(); });
    x.restore();
    x.fillStyle = "rgba(240,240,240,.85)"; x.beginPath(); x.ellipse(32, 54, 26, 6, 0, 0, PI * 2); x.fill();
    glow(x, "#000000", 6, () => { x.fillStyle = "#c0301a"; x.fillRect(10, 28, 44, 24); });
    const layers = [["#f4d070", 28, 4], ["#c0301a", 32, 3], ["#f6eedc", 35, 3], ["#f0c860", 38, 3], ["#a8281a", 41, 3], ["#f6eedc", 44, 2], ["#f0c860", 46, 3], ["#8a2010", 49, 3]];
    layers.forEach(([c, y, h]) => { x.fillStyle = c; x.beginPath(); x.moveTo(10, y); for (let i = 0; i <= 44; i += 4) x.lineTo(10 + i, y + Math.sin(i / 3 + y) * .8); x.lineTo(54, y + h); x.lineTo(10, y + h); x.fill(); });
    x.fillStyle = lin(x, 0, 18, 0, 30, [[0, "#fff0b0"], [1, "#e8b040"]]);
    x.beginPath(); x.moveTo(10, 28); x.lineTo(18, 20); x.lineTo(60, 20); x.lineTo(54, 28); x.closePath(); x.fill();
    x.fillStyle = "#c0301a"; poly(x, [[54, 28], [60, 20], [60, 44], [54, 52]]); x.fill();
    x.fillStyle = "rgba(160,80,20,.75)"; [[24, 23], [36, 22], [46, 25], [30, 26]].forEach(([a, b]) => { x.beginPath(); x.ellipse(a, b, 3, 1.4, 0, 0, PI * 2); x.fill(); });
    x.fillStyle = "#f0e0b0"; [[16, 29, 6], [30, 29, 5], [44, 29, 4]].forEach(([a, b, h]) => { x.beginPath(); x.ellipse(a, b + h / 2, 1.8, h / 2, 0, 0, PI * 2); x.fill(); });
  } },
  pizza: { bg: ["#ffb020", "#1e1002"], draw(x) {
    const slice = () => { x.beginPath(); x.moveTo(9, 15); x.quadraticCurveTo(32, 4, 55, 15); x.lineTo(32, 59); x.closePath(); };
    glow(x, "#000000", 8, () => { x.fillStyle = lin(x, 0, 10, 0, 58, [[0, "#ffe890"], [1, "#f0b030"]]); slice(); x.fill(); });
    x.save(); slice(); x.clip();
    x.strokeStyle = "rgba(200,40,20,.55)"; x.lineWidth = 4; x.beginPath(); x.moveTo(9, 18); x.quadraticCurveTo(32, 8, 55, 18); x.stroke();
    x.fillStyle = "#fffaf0"; [[22, 22, 4], [38, 24, 4.5], [30, 38, 3.5]].forEach(([a, b, r]) => { circle(x, a, b, r); x.fill(); });
    x.fillStyle = "#2a8a2a"; [[28, 26, -.6], [40, 34, .5], [24, 32, .2]].forEach(([a, b, r]) => { x.beginPath(); x.ellipse(a, b, 3.5, 1.8, r, 0, PI * 2); x.fill(); });
    glow(x, "#ffe040", 4, () => { x.fillStyle = "#ffe050"; [[34, 30], [20, 28], [33, 45], [44, 21]].forEach(([a, b]) => { x.fillRect(a - 2, b - 2, 4, 4); }); });
    x.fillStyle = "#e08a90"; [[16, 22], [36, 40], [46, 27]].forEach(([a, b]) => { x.fillRect(a - 2.5, b - 2, 5, 4); });
    x.restore();
    x.strokeStyle = lin(x, 0, 6, 0, 18, [[0, "#e0a050"], [1, "#8a4a14"]]); x.lineWidth = 5; x.lineCap = "round";
    x.beginPath(); x.moveTo(9, 15); x.quadraticCurveTo(32, 4, 55, 15); x.stroke();
    x.fillStyle = "#f0c030"; x.beginPath(); x.ellipse(31, 59, 1.6, 3.5, 0, 0, PI * 2); x.fill();
  } },
  fma: { bg: ["#3a8aff", "#030a1a"], draw(x) {
    x.save(); x.globalCompositeOperation = "lighter";
    glow(x, "#5ad0ff", 10, () => {
      x.strokeStyle = "rgba(140,220,255,.75)"; x.lineWidth = 1.5;
      circle(x, 32, 33, 25); x.stroke(); circle(x, 32, 33, 20); x.stroke();
      poly(x, [[32, 13], [49, 43], [15, 43]]); x.stroke();
      for (let i = 0; i < 12; i++) { const a = i * PI / 6; x.beginPath(); x.moveTo(32 + Math.cos(a) * 20, 33 + Math.sin(a) * 20); x.lineTo(32 + Math.cos(a) * 25, 33 + Math.sin(a) * 25); x.stroke(); }
    });
    x.restore();
    const red = lin(x, 0, 6, 0, 58, [[0, "#ff6a5a"], [.5, "#d01a10"], [1, "#6a0404"]]);
    x.strokeStyle = "#0a0204"; x.lineWidth = 2;
    glow(x, "#ff2a1a", 10, () => {
      x.fillStyle = red;
      x.fillRect(29.5, 14, 5, 42); x.fillRect(18, 22, 28, 5);
      poly(x, [[24, 14], [26, 7], [29, 11], [32, 5], [35, 11], [38, 7], [40, 14]]); x.fill();
    });
    x.strokeStyle = "#ff4a3a"; x.lineWidth = 3.5; x.lineCap = "round";
    x.beginPath(); x.moveTo(26, 52); x.bezierCurveTo(44, 48, 44, 40, 32, 38); x.bezierCurveTo(20, 36, 20, 30, 38, 28); x.stroke();
    x.fillStyle = "#ff4a3a"; poly(x, [[37, 25], [43, 28], [37, 31]]); x.fill();
    x.fillStyle = "#ffe0d0"; circle(x, 39, 27.5, .8); x.fill();
  } },
  blood: { bg: ["#b0101a", "#140204"], draw(x) {
    const drop = (cx, cy, s) => { x.beginPath(); x.moveTo(cx, cy - 24 * s); x.bezierCurveTo(cx + 4 * s, cy - 12 * s, cx + 16 * s, cy - 2 * s, cx + 16 * s, cy + 8 * s); x.bezierCurveTo(cx + 16 * s, cy + 20 * s, cx - 16 * s, cy + 20 * s, cx - 16 * s, cy + 8 * s); x.bezierCurveTo(cx - 16 * s, cy - 2 * s, cx - 4 * s, cy - 12 * s, cx, cy - 24 * s); x.fill(); };
    glow(x, "#ff1a1a", 16, () => { x.fillStyle = rad(x, 27, 32, 1, 22, [[0, "#ff4a3a"], [.5, "#a00810"], [1, "#3a0004"]]); drop(32, 32, 1); });
    x.fillStyle = "#8a0303"; drop(50, 50, .3); drop(14, 52, .22);
    x.fillStyle = "rgba(255,200,190,.75)"; x.beginPath(); x.ellipse(25, 36, 3, 6, .4, 0, PI * 2); x.fill();
    x.fillStyle = "rgba(255,255,255,.85)"; circle(x, 27, 26, 1.5); x.fill();
  } },
  // ---------- skill icons ----------
  uiux: { bg: ["#2a8aff", "#040a1e"], draw(x) {
    glow(x, "#7ab8ff", 10, () => { x.fillStyle = lin(x, 0, 12, 0, 48, [[0, "#2a3a5a"], [1, "#0e1424"]]); x.beginPath(); x.roundRect ? x.roundRect(10, 13, 44, 34, 3) : x.rect(10, 13, 44, 34); x.fill(); });
    x.fillStyle = "#3a4e78"; x.fillRect(10, 13, 44, 6);
    [["#ff5a4a", 14], ["#ffcf3a", 18.5], ["#3aff6a", 23]].forEach(([c, a]) => { x.fillStyle = c; circle(x, a, 16, 1.6); x.fill(); });
    x.fillStyle = "rgba(140,190,255,.55)"; x.fillRect(14, 22, 14, 10); x.fillRect(31, 22, 19, 3); x.fillRect(31, 27, 15, 2); x.fillRect(14, 35, 36, 3);
    glow(x, "#3ae0ff", 8, () => { x.fillStyle = "#3ae0ff"; x.fillRect(14, 40, 14, 4); });
    glow(x, "#ffffff", 8, () => {
      x.fillStyle = "#ffffff"; x.strokeStyle = "#0a0a14"; x.lineWidth = 1.2;
      poly(x, [[38, 34], [38, 54], [43, 49], [47, 57], [50, 55.5], [46, 48], [53, 48]]); x.fill(); x.stroke();
    });
  } },
  art3d: { bg: ["#20c0a0", "#031410"], draw(x) {
    const P = { t: [32, 10], l: [13, 21], r: [51, 21], c: [32, 32], bl: [13, 43], br: [51, 43], b: [32, 54] };
    const face = (pts, c) => { x.fillStyle = c; poly(x, pts.map((k) => P[k])); x.fill(); };
    face(["t", "r", "c", "l"], lin(x, 13, 10, 51, 32, [[0, "#c8fff0"], [1, "#4ad0b0"]]));
    face(["l", "c", "b", "bl"], lin(x, 13, 21, 32, 54, [[0, "#2aa088"], [1, "#0e4a40"]]));
    face(["c", "r", "br", "b"], lin(x, 32, 21, 51, 54, [[0, "#1a7a68"], [1, "#062420"]]));
    glow(x, "#5affe0", 8, () => {
      x.strokeStyle = "#b8fff0"; x.lineWidth = 1;
      [["t", "r"], ["r", "c"], ["c", "l"], ["l", "t"], ["l", "bl"], ["bl", "b"], ["b", "br"], ["br", "r"], ["c", "b"], ["t", "c"], ["l", "b"], ["c", "br"]].forEach(([a, b]) => { x.beginPath(); x.moveTo(...P[a]); x.lineTo(...P[b]); x.stroke(); });
      x.fillStyle = "#ffffff"; Object.values(P).forEach(([a, b]) => { x.fillRect(a - 1.5, b - 1.5, 3, 3); });
    });
    sparkle(x, 52, 10, 4, "#d0fff4");
  } },
  illustration: { bg: ["#ff8a2a", "#1e0a02"], draw(x) {
    x.save(); x.globalCompositeOperation = "lighter"; x.lineCap = "round";
    [["#ff3a6a", 0], ["#ffcf3a", 4], ["#3ae0ff", 8]].forEach(([c, o]) => glow(x, c, 8, () => {
      x.strokeStyle = c; x.lineWidth = 4; x.beginPath(); x.moveTo(8, 50 - o); x.bezierCurveTo(18, 30 - o, 30, 58 - o, 44, 40 - o); x.stroke();
    }));
    x.restore();
    x.save(); x.translate(38, 28); x.rotate(PI / 4);
    x.fillStyle = lin(x, -3, 0, 3, 0, [[0, "#6a3a14"], [.5, "#c87a3a"], [1, "#4a2008"]]); x.fillRect(-2.5, -26, 5, 22);
    x.fillStyle = lin(x, -3.5, 0, 3.5, 0, [[0, "#6a6e78"], [.5, "#f0f2f6"], [1, "#4a4e58"]]); x.fillRect(-3.5, -4, 7, 7);
    x.fillStyle = "#2a1a10"; x.beginPath(); x.moveTo(-3.5, 3); x.quadraticCurveTo(-4, 12, 0, 18); x.quadraticCurveTo(4, 12, 3.5, 3); x.fill();
    glow(x, "#ff3a6a", 6, () => { x.fillStyle = "#ff3a6a"; x.beginPath(); x.moveTo(-2.5, 11); x.quadraticCurveTo(0, 20, 2.5, 11); x.fill(); });
    x.restore();
    sparkle(x, 14, 14, 4, "#fff0c0");
  } },
  graphic: { bg: ["#c040ff", "#14041e"], draw(x) {
    glow(x, "#e0a0ff", 10, () => { x.strokeStyle = "#f4e0ff"; x.lineWidth = 2.2; x.beginPath(); x.moveTo(8, 46); x.bezierCurveTo(20, 10, 40, 60, 56, 20); x.stroke(); });
    x.strokeStyle = "rgba(220,180,255,.8)"; x.lineWidth = 1; x.setLineDash([2, 2]);
    x.beginPath(); x.moveTo(8, 46); x.lineTo(20, 10); x.moveTo(56, 20); x.lineTo(40, 60); x.stroke(); x.setLineDash([]);
    [[8, 46], [56, 20]].forEach(([a, b]) => { x.fillStyle = "#ffffff"; x.fillRect(a - 2.5, b - 2.5, 5, 5); x.strokeStyle = "#5a1a8a"; x.strokeRect(a - 2.5, b - 2.5, 5, 5); });
    [[20, 10], [40, 60]].forEach(([a, b]) => { x.fillStyle = "#c040ff"; circle(x, a, b, 2.3); x.fill(); });
    // positioned so the nib's tip (local 0,14) lands exactly on the curve at t = 0.6 (35.6, 36.1)
    x.save(); x.translate(27.4, 24.7); x.rotate(-PI / 5);
    glow(x, "#000000", 6, () => {
      x.fillStyle = lin(x, -7, 0, 7, 0, [[0, "#3a3a46"], [.5, "#d8dae4"], [1, "#2a2a34"]]);
      poly(x, [[0, 14], [-7, 0], [-5, -10], [5, -10], [7, 0]]); x.fill();
      x.fillStyle = "#1a1a24"; x.fillRect(-6, -16, 12, 7);
    });
    x.fillStyle = "#1a0a2a"; x.fillRect(-.6, 0, 1.2, 13); circle(x, 0, 1, 1.8); x.fill();
    x.restore();
  } },
  animation: { bg: ["#ffcf3a", "#1a1202"], draw(x) {
    x.save(); x.translate(32, 33); x.rotate(-PI / 9);
    glow(x, "#000000", 8, () => { x.fillStyle = "#14100c"; x.fillRect(-30, -13, 60, 26); });
    x.fillStyle = "#f4ead0";
    for (let i = -28; i < 30; i += 6) { x.fillRect(i, -11, 3, 3); x.fillRect(i, 8, 3, 3); }
    [-19, 0, 19].forEach((fx, i) => {
      x.fillStyle = lin(x, 0, -7, 0, 7, [[0, "#ffe8a0"], [1, "#e0a030"]]); x.fillRect(fx - 8, -7, 16, 14);
      glow(x, "#ff3a3a", 4, () => { x.fillStyle = "#e0201a"; x.beginPath(); x.ellipse(fx - 3 + i * 3, 3 - [8, 0, 5][i] * .7, 3, i === 1 ? 2.2 : 3, 0, 0, PI * 2); x.fill(); });
    });
    x.restore();
    sparkle(x, 50, 12, 4, "#fff4c0"); sparkle(x, 14, 52, 3);
  } },
  writing: { bg: ["#3a9a6a", "#03140a"], draw(x) {
    glow(x, "#7affb0", 6, () => { x.strokeStyle = "rgba(200,255,220,.85)"; x.lineWidth = 1.4; x.beginPath(); x.moveTo(10, 52); x.bezierCurveTo(16, 44, 20, 58, 26, 50); x.bezierCurveTo(30, 44, 34, 54, 38, 49); x.stroke(); });
    x.fillStyle = lin(x, 38, 40, 56, 58, [[0, "#3a3e50"], [1, "#0a0c14"]]);
    x.beginPath(); x.moveTo(42, 44); x.lineTo(54, 44); x.lineTo(56, 56); x.lineTo(40, 56); x.closePath(); x.fill();
    x.fillStyle = "#1a2a8a"; x.fillRect(42, 42, 12, 3);
    x.save(); x.translate(30, 26); x.rotate(PI / 5);
    glow(x, "#000000", 6, () => {
      x.fillStyle = lin(x, -8, 0, 8, 0, [[0, "#c8d8d0"], [.5, "#ffffff"], [1, "#8aa898"]]);
      x.beginPath(); x.moveTo(0, 22); x.quadraticCurveTo(-11, 0, -2, -24); x.quadraticCurveTo(10, -6, 0, 22); x.fill();
    });
    x.strokeStyle = "rgba(90,120,110,.7)"; x.lineWidth = .8;
    for (let y = -18; y < 16; y += 4) { x.beginPath(); x.moveTo(0, y + 4); x.lineTo(-6, y); x.moveTo(0, y + 4); x.lineTo(4, y + 1); x.stroke(); }
    x.strokeStyle = "#5a4a30"; x.lineWidth = 1.2; x.beginPath(); x.moveTo(-2, -22); x.lineTo(0, 26); x.stroke();
    x.restore();
  } },
  reading: { bg: ["#e0a040", "#1a0e02"], draw(x) {
    glow(x, "#ffcf6a", 18, () => {
      x.fillStyle = lin(x, 0, 20, 0, 50, [[0, "#fffaf0"], [1, "#d8c8a0"]]);
      x.beginPath(); x.moveTo(32, 26); x.quadraticCurveTo(20, 18, 7, 22); x.lineTo(7, 48); x.quadraticCurveTo(20, 44, 32, 52); x.closePath(); x.fill();
      x.beginPath(); x.moveTo(32, 26); x.quadraticCurveTo(44, 18, 57, 22); x.lineTo(57, 48); x.quadraticCurveTo(44, 44, 32, 52); x.closePath(); x.fill();
    });
    x.fillStyle = "#6a1a14"; poly(x, [[6, 48], [32, 54], [58, 48], [58, 51], [32, 57], [6, 51]]); x.fill();
    x.strokeStyle = "rgba(90,60,30,.55)"; x.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
      x.beginPath(); x.moveTo(11, 28 + i * 4); x.quadraticCurveTo(20, 25 + i * 4, 29, 30 + i * 4); x.stroke();
      x.beginPath(); x.moveTo(35, 30 + i * 4); x.quadraticCurveTo(44, 25 + i * 4, 53, 28 + i * 4); x.stroke();
    }
    x.strokeStyle = "rgba(120,80,40,.6)"; x.beginPath(); x.moveTo(32, 26); x.lineTo(32, 52); x.stroke();
    x.save(); x.globalCompositeOperation = "lighter";
    [[24, 14, 1.4], [32, 10, 1.8], [40, 15, 1.2], [29, 6, 1]].forEach(([a, b, r]) => glow(x, "#ffcf6a", 6, () => { x.fillStyle = "#fff4c0"; circle(x, a, b, r); x.fill(); }));
    x.restore();
  } },
  lute: { bg: ["#e03a8a", "#1e0412"], draw(x) {
    x.save(); x.translate(32, 33); x.rotate(PI / 4);
    x.fillStyle = lin(x, -2, 0, 2, 0, [[0, "#3a1a08"], [.5, "#8a5a30"], [1, "#2a1006"]]); x.fillRect(-2.5, -30, 5, 26);
    x.fillStyle = "#e9c88a"; for (let y = -26; y < -6; y += 4) x.fillRect(-2.5, y, 5, .8);
    x.fillStyle = "#2a1006"; x.fillRect(-4, -34, 8, 6);
    x.fillStyle = "#e9b64a"; [[-5, -33], [5, -33], [-5, -30], [5, -30]].forEach(([a, b]) => { circle(x, a, b, 1.2); x.fill(); });
    glow(x, "#ff6ab0", 10, () => {
      x.fillStyle = rad(x, -4, 4, 2, 20, [[0, "#f0b070"], [.6, "#b0602a"], [1, "#4a1a06"]]);
      circle(x, 0, 2, 10); x.fill(); circle(x, 0, 14, 13); x.fill();
    });
    x.fillStyle = "#1a0804"; circle(x, 0, 9, 4); x.fill();
    x.strokeStyle = "#e9b64a"; x.lineWidth = 1; circle(x, 0, 9, 5); x.stroke();
    x.fillStyle = "#2a1006"; x.fillRect(-5, 19, 10, 2.5);
    x.strokeStyle = "rgba(255,240,220,.85)"; x.lineWidth = .5;
    [-1.5, -.5, .5, 1.5].forEach((s) => { x.beginPath(); x.moveTo(s, -28); x.lineTo(s * 1.5, 20); x.stroke(); });
    x.restore();
    [[12, 16], [50, 50]].forEach(([a, b]) => glow(x, "#ff6ab0", 6, () => { x.fillStyle = "#ffd0e8"; x.font = "bold 12px Georgia, serif"; x.textAlign = "center"; x.fillText("♪", a, b); }));
  } },
  horror: { bg: ["#a0101a", "#0e0204"], draw(x) {
    glow(x, "#000000", 10, () => { x.fillStyle = lin(x, 0, 16, 0, 48, [[0, "#2a2a2e"], [1, "#08080a"]]); x.fillRect(8, 17, 48, 30); });
    x.fillStyle = "#e8dcc0"; x.fillRect(13, 21, 38, 10);
    x.fillStyle = "#b0101a"; x.font = "bold 9px Georgia, serif"; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText("HORROR", 32, 26.5);
    x.fillStyle = "#050506"; x.fillRect(16, 34, 32, 10);
    [24, 40].forEach((a) => { x.fillStyle = "#d8d8dc"; circle(x, a, 39, 4); x.fill(); x.fillStyle = "#08080a"; circle(x, a, 39, 1.6); x.fill(); });
    glow(x, "#ff1a1a", 8, () => {
      x.fillStyle = lin(x, 0, 14, 0, 40, [[0, "#ff3a2a"], [1, "#8a0408"]]);
      x.fillRect(8, 14, 48, 4);
      [[14, 10], [21, 16], [30, 7], [38, 13], [47, 19], [52, 9]].forEach(([a, l]) => {
        x.fillRect(a - 1.2, 16, 2.4, l); circle(x, a, 16 + l, 2.2); x.fill();
      });
    });
    x.fillStyle = "rgba(255,180,170,.6)"; [[14, 24], [30, 21], [47, 33]].forEach(([a, b]) => { circle(x, a - .6, b, .7); x.fill(); });
  } },
  // ---------- music icons ----------
  yorushika: { bg: ["#3a4ab0", "#04050e"], draw(x) {
    glow(x, "#bcd0ff", 10, () => {
      x.fillStyle = "#eef2ff";
      poly(x, [[8, 29], [15, 20], [14, 38]]); x.fill();
      poly(x, [[56, 29], [49, 20], [50, 38]]); x.fill();
      x.fillStyle = rad(x, 28, 24, 2, 17, [[0, "#ffffff"], [.7, "#dfe6ff"], [1, "#8a98c8"]]);
      circle(x, 32, 29, 15); x.fill();
    });
    x.strokeStyle = "#05060e"; x.lineWidth = 2; circle(x, 32, 29, 13); x.stroke();
    x.fillStyle = "#05060e";
    x.beginPath(); x.moveTo(32, 15); x.quadraticCurveTo(35.5, 22, 32, 29); x.quadraticCurveTo(28.5, 22, 32, 15); x.fill();
    x.beginPath(); x.moveTo(32, 28); x.quadraticCurveTo(36, 36, 32, 43); x.quadraticCurveTo(28, 36, 32, 28); x.fill();
    glow(x, "#bcd0ff", 6, () => {
      x.fillStyle = "#eef2ff"; x.font = "9px 'Yu Gothic', 'MS Gothic', sans-serif"; x.textAlign = "center"; x.textBaseline = "middle";
      x.fillText("ヨルシカ", 32, 52);
    });
  } },
  usotsuki: { bg: ["#2a3a9a", "#03040e"], draw(x) {
    glow(x, "#fff2b0", 20, () => { x.fillStyle = rad(x, 28, 21, 1, 14, [[0, "#ffffff"], [.6, "#fff4c8"], [1, "#d8c080"]]); circle(x, 32, 25, 12); x.fill(); });
    x.fillStyle = "rgba(180,160,100,.4)"; [[28, 22, 2.5], [36, 28, 1.8], [30, 30, 1.2]].forEach(([a, b, r]) => { circle(x, a, b, r); x.fill(); });
    x.fillStyle = lin(x, 0, 40, 0, 60, [[0, "#1a2a6a"], [1, "#04081a"]]); x.fillRect(0, 41, 64, 23);
    x.save(); x.globalCompositeOperation = "lighter";
    for (let i = 0; i < 6; i++) {
      x.fillStyle = `rgba(255,240,180,${.55 - i * .08})`;
      const w = 18 - i * 2 + (i % 2) * 4;
      x.fillRect(32 - w / 2, 43 + i * 2.4, w, 1.2);
    }
    x.restore();
    x.strokeStyle = "rgba(200,220,255,.5)"; x.lineWidth = 1; x.beginPath(); x.moveTo(6, 41); x.lineTo(58, 41); x.stroke();
    x.fillStyle = "rgba(230,235,255,.55)"; x.font = "bold 10px 'Yu Mincho', 'MS Mincho', serif"; x.textAlign = "center"; x.fillText("嘘", 13, 20);
    sparkle(x, 50, 12, 4, "#e0eaff"); sparkle(x, 12, 33, 2.5);
  } },
  tousaku: { bg: ["#2a8a86", "#03100f"], draw(x) {
    [["#5a6a66", -.2, 8, 8, 26, 30], ["#8a7a5a", .15, 30, 6, 28, 22], ["#2a3a3a", -.1, 14, 30, 34, 28], ["#a8b0a0", .25, 36, 30, 22, 26], ["#c05a2a", 0, 50, 4, 5, 56]].forEach(([c, r, a, b, w, h]) => {
      x.save(); x.translate(a + w / 2, b + h / 2); x.rotate(r); x.fillStyle = c; x.globalAlpha = .85; x.fillRect(-w / 2, -h / 2, w, h); x.restore();
    });
    x.strokeStyle = "rgba(220,240,230,.35)"; x.lineWidth = .7;
    for (let i = 0; i < 7; i++) { x.beginPath(); x.moveTo(8, 12 + i * 6); x.lineTo(56, 10 + i * 6.5); x.stroke(); }
    const lid = () => { x.beginPath(); x.moveTo(16, 28); x.quadraticCurveTo(32, 16, 48, 28); x.quadraticCurveTo(32, 38, 16, 28); x.closePath(); };
    glow(x, "#bff8f0", 8, () => { x.fillStyle = rad(x, 32, 27, 2, 16, [[0, "#ffffff"], [1, "#b8c8c0"]]); lid(); x.fill(); });
    x.fillStyle = rad(x, 32, 27, 0, 6, [[0, "#3a4a48"], [1, "#0a1010"]]); circle(x, 32, 27.5, 5.5); x.fill();
    x.fillStyle = "rgba(255,255,255,.85)"; circle(x, 34, 25.5, 1.3); x.fill();
    x.strokeStyle = "#0a1010"; x.lineWidth = 1.2; lid(); x.stroke();
    glow(x, "#000000", 4, () => {
      x.fillStyle = "#f4f8f4"; x.font = "bold 13px 'Yu Mincho', 'MS Mincho', serif"; x.textAlign = "center"; x.textBaseline = "middle";
      x.fillText("盗", 14, 46); x.fillText("作", 50, 46);
    });
  } },
  paramore: { bg: ["#9a9aa8", "#040406"], draw(x) {
    glow(x, "#ffffff", 14, () => { x.fillStyle = lin(x, 18, 10, 46, 56, [[0, "#ffffff"], [1, "#d0d2d8"]]); x.fillRect(19, 11, 26, 43); });
    x.fillStyle = "#06060a";
    [23, 30, 37].forEach((a) => x.fillRect(a, 16, 4, 33));
    x.fillStyle = "rgba(255,255,255,.12)"; [23, 30, 37].forEach((a) => x.fillRect(a, 16, 1, 33));
    sparkle(x, 50, 12, 4); sparkle(x, 13, 50, 2.5);
  } },
  brick: { bg: ["#e0801a", "#1a0802"], draw(x) {
    for (let row = 0; row < 7; row++) {
      for (let col = -1; col < 5; col++) {
        const bx = col * 14 + (row % 2 ? 7 : 0) + 4, by = 26 + row * 6;
        x.fillStyle = lin(x, bx, by, bx, by + 5, [[0, `rgb(${190 + grain(5, row, col) * 40},${90 + grain(6, row, col) * 30},50)`], [1, "#5a2410"]]);
        x.fillRect(bx, by, 13, 5);
      }
    }
    x.fillStyle = "#0a0402"; x.beginPath(); x.moveTo(24, 64); x.lineTo(24, 46); x.arc(32, 46, 8, PI, 0); x.lineTo(40, 64); x.fill();
    glow(x, "#ffcf3a", 12, () => {
      x.fillStyle = lin(x, 0, 8, 0, 22, [[0, "#fff4b0"], [.5, "#f0b020"], [1, "#8a4a04"]]);
      poly(x, [[20, 22], [20, 11], [26, 16], [32, 8], [38, 16], [44, 11], [44, 22]]); x.fill();
    });
    [[26, 18, "#ff3a3a"], [32, 17, "#3ae0ff"], [38, 18, "#3aff6a"]].forEach(([a, b, c]) => glow(x, c, 5, () => { x.fillStyle = c; circle(x, a, b, 1.5); x.fill(); }));
    sparkle(x, 50, 8, 4, "#fff0c0");
  } },
  brandneweyes: { bg: ["#f0d890", "#2a1c08"], draw(x) {
    x.strokeStyle = "rgba(60,40,20,.5)"; x.lineWidth = 1; x.beginPath(); x.moveTo(46, 0); x.lineTo(44, 64); x.stroke();
    const wing = () => {
      x.fillStyle = "#120a04";
      x.beginPath(); x.moveTo(30, 30); x.bezierCurveTo(24, 12, 8, 10, 6, 17); x.bezierCurveTo(6, 26, 13, 32, 19, 34);
      x.bezierCurveTo(11, 41, 11, 51, 17, 53); x.bezierCurveTo(24, 51, 28, 42, 30, 34); x.closePath(); x.fill();
      x.fillStyle = lin(x, 8, 14, 28, 48, [[0, "#ffd040"], [.6, "#f0a018"], [1, "#c06a08"]]);
      x.beginPath(); x.moveTo(28, 30); x.bezierCurveTo(23, 17, 12, 15, 10, 19); x.bezierCurveTo(10, 25, 15, 30, 21, 32);
      x.bezierCurveTo(15, 38, 15, 46, 18, 48); x.bezierCurveTo(22, 46, 26, 40, 28, 33); x.closePath(); x.fill();
      x.strokeStyle = "#120a04"; x.lineWidth = 1.1;
      [[28, 31, 12, 20], [28, 31, 15, 27], [28, 32, 19, 44], [28, 32, 23, 46]].forEach(([a, b, c, d]) => { x.beginPath(); x.moveTo(a, b); x.lineTo(c, d); x.stroke(); });
      x.fillStyle = "#ffe070"; [[8, 20], [9, 24], [13, 50], [16, 52]].forEach(([a, b]) => { circle(x, a, b, .9); x.fill(); });
    };
    // a specimen pin: pale blue head with a highlight
    const pin = (px, py) => {
      x.fillStyle = "#1a0e04"; circle(x, px, py, 2.1); x.fill();
      x.fillStyle = rad(x, px - .6, py - .6, 0, 2, [[0, "#ffffff"], [.4, "#c8e8f8"], [1, "#6a9ab8"]]); circle(x, px, py, 1.6); x.fill();
    };
    glow(x, "#000000", 6, wing);
    x.save(); x.translate(64, 0); x.scale(-1, 1); glow(x, "#000000", 6, wing); x.restore();
    x.fillStyle = "#1a0e04"; x.beginPath(); x.ellipse(32, 32, 1.6, 9, 0, 0, PI * 2); x.fill();
    x.strokeStyle = "#1a0e04"; x.lineWidth = .8; x.beginPath(); x.moveTo(32, 23); x.lineTo(29, 17); x.moveTo(32, 23); x.lineTo(35, 17); x.stroke();
    // three pins in a row: one on each upper wing near the body, one through the body
    pin(22.5, 31.5); pin(41.5, 31.5); pin(32, 30);
  } },
  question: { bg: ["#a07a10", "#181004"], draw(x) {
    x.font = "bold 50px Georgia, serif"; x.textAlign = "center"; x.textBaseline = "middle";
    glow(x, "#ffcf3a", 16, () => { x.fillStyle = lin(x, 0, 10, 0, 56, [[0, "#fff6b0"], [.5, "#f0b020"], [1, "#8a4a04"]]); x.fillText("?", 32, 35); });
    x.strokeStyle = "rgba(40,20,0,.8)"; x.lineWidth = 1.5; x.strokeText("?", 32, 35);
  } },
};

const mixHex = (hex, to, t) => {
  const a = parseInt(hex.slice(1), 16), b = parseInt(to.slice(1), 16);
  const ch = (n, s) => (n >> s) & 255, m = (s) => Math.round(ch(a, s) + (ch(b, s) - ch(a, s)) * t);
  return `rgb(${m(16)},${m(8)},${m(0)})`;
};
const layer = (S) => { const c = document.createElement("canvas"); c.width = c.height = S; return [c, c.getContext("2d")]; };

// Reusable band/artist emblem, written as an icon name: "emblem:TEXT:#colour:symbol"
// symbols: wave, star, flower, orb, heart, moon, triangle, skull, scratch, triad,
//          ring, ball, geass, stripes, zigzag, note, mic, crosshair, keys, strings
const EMBLEM_SYMBOLS = {
  wave: (x) => { x.lineWidth = 3; for (let k = 0; k < 3; k++) { x.beginPath(); for (let i = 0; i <= 48; i++) x.lineTo(8 + i, 20 + k * 12 + Math.sin(i / 5 + k) * 4); x.stroke(); } },
  star: (x) => { poly(x, Array.from({ length: 10 }, (_, i) => { const r = i % 2 ? 10 : 24, a = -PI / 2 + i * PI / 5; return [32 + Math.cos(a) * r, 33 + Math.sin(a) * r]; })); x.fill(); },
  flower: (x) => { for (let i = 0; i < 6; i++) { const a = i * PI / 3; x.beginPath(); x.ellipse(32 + Math.cos(a) * 12, 33 + Math.sin(a) * 12, 11, 6, a, 0, PI * 2); x.fill(); } },
  orb: (x) => { for (let i = 0; i < 8; i++) { const a = i * PI / 4; x.beginPath(); x.moveTo(32, 33); x.lineTo(32 + Math.cos(a) * 30, 33 + Math.sin(a) * 30); x.lineWidth = 2; x.stroke(); } circle(x, 32, 33, 15); x.fill(); },
  heart: (x) => { x.beginPath(); x.moveTo(32, 56); x.bezierCurveTo(4, 36, 8, 10, 22, 10); x.bezierCurveTo(28, 10, 32, 15, 32, 20); x.bezierCurveTo(32, 15, 36, 10, 42, 10); x.bezierCurveTo(56, 10, 60, 36, 32, 56); x.fill(); },
  moon: (x) => { x.save(); x.beginPath(); x.rect(0, 0, 64, 64); x.arc(42, 26, 18, 0, PI * 2, true); x.clip("evenodd"); circle(x, 30, 34, 22); x.fill(); x.restore(); },
  triangle: (x) => { x.lineWidth = 3; [24, 16, 8].forEach((r) => { poly(x, [[32, 33 - r], [32 + r * .9, 33 + r * .55], [32 - r * .9, 33 + r * .55]]); x.stroke(); }); },
  skull: (x) => { x.beginPath(); x.ellipse(32, 28, 20, 18, 0, 0, PI * 2); x.fill(); x.fillRect(22, 38, 20, 16); },
  scratch: (x) => { x.lineWidth = 4; for (let i = 0; i < 4; i++) { x.beginPath(); x.moveTo(14 + i * 9, 8); x.quadraticCurveTo(18 + i * 9, 32, 10 + i * 9, 58); x.stroke(); } },
  keys: (x) => {
    x.fillRect(6, 14, 52, 38);
    x.save(); x.globalCompositeOperation = "destination-out"; x.lineWidth = 1.5;
    for (let i = 1; i < 7; i++) { x.beginPath(); x.moveTo(6 + i * 52 / 7, 14); x.lineTo(6 + i * 52 / 7, 52); x.stroke(); }
    x.restore();
    x.save(); x.globalAlpha = .9; x.fillStyle = "#0a0806";
    [1, 2, 4, 5, 6].forEach((i) => x.fillRect(6 + i * 52 / 7 - 3.5, 14, 7, 22));
    x.restore();
  },
  strings: (x) => {
    x.lineWidth = 2.5; x.beginPath(); x.moveTo(10, 56); x.quadraticCurveTo(14, 10, 54, 8); x.lineTo(54, 56); x.stroke();
    x.lineWidth = 1.2; for (let i = 0; i < 7; i++) { const sx = 18 + i * 5; x.beginPath(); x.moveTo(sx, 56); x.lineTo(sx, 50 - Math.pow(i, 1.3) * 5.5 - 6); x.stroke(); }
  },
  triad: (x) => { x.lineWidth = 3; poly(x, [[32, 6], [57, 52], [7, 52]]); x.stroke(); circle(x, 32, 37, 10); x.stroke(); x.beginPath(); x.moveTo(32, 6); x.lineTo(32, 27); x.stroke(); },
  ring: (x) => { x.lineWidth = 2.5; circle(x, 32, 33, 25); x.stroke(); circle(x, 32, 33, 19); x.stroke(); poly(x, [[32, 14], [48.5, 42.5], [15.5, 42.5]]); x.stroke(); poly(x, [[32, 52], [15.5, 23.5], [48.5, 23.5]]); x.stroke(); },
  ball: (x) => {
    circle(x, 32, 33, 23); x.fill();
    x.save(); x.globalCompositeOperation = "destination-out"; x.lineWidth = 2.5;
    x.beginPath(); x.moveTo(9, 33); x.lineTo(55, 33); x.moveTo(32, 10); x.lineTo(32, 56); x.stroke();
    x.beginPath(); x.arc(4, 33, 20, -PI / 3, PI / 3); x.stroke(); x.beginPath(); x.arc(60, 33, 20, PI * 2 / 3, PI * 4 / 3); x.stroke();
    x.restore();
  },
  geass: (x) => {
    x.beginPath(); x.moveTo(4, 20); x.quadraticCurveTo(18, 44, 32, 50); x.quadraticCurveTo(46, 44, 60, 20); x.quadraticCurveTo(46, 34, 32, 36); x.quadraticCurveTo(18, 34, 4, 20); x.fill();
    circle(x, 32, 24, 7); x.fill();
  },
  stripes: (x) => { [[0, 10, 22, 16, 0, 20], [0, 34, 26, 38, 0, 44], [64, 14, 40, 20, 64, 24], [64, 40, 36, 44, 64, 50], [24, 0, 30, 18, 34, 0], [26, 64, 32, 48, 38, 64]].forEach(([a, b, c, d, e, f]) => { poly(x, [[a, b], [c, d], [e, f]]); x.fill(); }); },
  zigzag: (x) => { poly(x, [[0, 26], [10, 34], [20, 26], [32, 36], [44, 26], [54, 34], [64, 26], [64, 38], [54, 46], [44, 38], [32, 48], [20, 38], [10, 46], [0, 38]]); x.fill(); },
  note: (x) => { x.font = "bold 50px Georgia, serif"; x.textAlign = "center"; x.textBaseline = "middle"; x.fillText("♫", 32, 34); },
  mic: (x) => {
    x.beginPath(); x.roundRect ? x.roundRect(23, 6, 18, 30, 9) : x.rect(23, 6, 18, 30); x.fill();
    x.lineWidth = 3; x.beginPath(); x.arc(32, 26, 15, 0, PI); x.stroke();
    x.beginPath(); x.moveTo(32, 41); x.lineTo(32, 54); x.moveTo(22, 55); x.lineTo(42, 55); x.stroke();
  },
  crosshair: (x) => {
    x.lineWidth = 2.5; circle(x, 32, 33, 20); x.stroke(); circle(x, 32, 33, 9); x.stroke();
    x.beginPath(); x.moveTo(32, 5); x.lineTo(32, 24); x.moveTo(32, 42); x.lineTo(32, 61); x.moveTo(4, 33); x.lineTo(23, 33); x.moveTo(41, 33); x.lineTo(60, 33); x.stroke();
    circle(x, 32, 33, 2); x.fill();
  },
};
function emblemPainter(name) {
  if (!name.startsWith("emblem:")) return null;
  const [, text, color, symbol] = name.split(":");
  const light = mixHex(color, "#ffffff", .55);
  return { bg: [color, "#060406"], draw(x) {
    x.save(); x.globalAlpha = .55;
    glow(x, light, 12, () => { x.fillStyle = light; x.strokeStyle = light; (EMBLEM_SYMBOLS[symbol] || EMBLEM_SYMBOLS.orb)(x); });
    x.restore();
    const size = text.length <= 2 ? 28 : text.length <= 3 ? 21 : text.length <= 4 ? 17 : 13;
    x.font = `bold ${size}px Georgia, 'Times New Roman', serif`; x.textAlign = "center"; x.textBaseline = "middle";
    x.strokeStyle = "rgba(8,4,4,.9)"; x.lineWidth = 3.5; x.strokeText(text, 32, 34);
    glow(x, color, 10, () => { x.fillStyle = lin(x, 0, 20, 0, 46, [[0, "#ffffff"], [.5, light], [1, mixHex(color, "#000000", .25)]]); x.fillText(text, 32, 34); });
    sparkle(x, 50, 13, 4);
  } };
}

// Paints one icon like an old MMO icon: a bright colour burst behind an oversized object
// that crops at the frame, dark painted outline, rim light, then a soft, saturated, grainy finish.
const ICON_ZOOM = 1.32;
function paintIcon(name) {
  const S = 64, p = PAINTERS[name] || emblemPainter(name) || PAINTERS.question, seed = hashStr(name);
  const [hi, lo] = p.bg;

  // 1. backdrop: hot centre, light rays, airbrushed blobs
  const [bg, b] = layer(S);
  b.fillStyle = rad(b, 32, 32, 0, 48, [[0, mixHex(hi, "#ffffff", .45)], [.28, hi], [.7, lo], [1, "#020101"]]);
  b.fillRect(0, 0, S, S);
  b.save(); b.translate(32, 32); b.rotate(grain(seed, 9, 9) * PI); b.globalCompositeOperation = "lighter";
  for (let i = 0; i < 12; i++) {
    b.rotate(PI / 6);
    b.fillStyle = rgba(hi, .06 + grain(seed, i, 7) * .1);
    poly(b, [[0, 0], [-3 - grain(seed, i, 8) * 4, -46], [3 + grain(seed, i, 8) * 4, -46]]); b.fill();
  }
  b.restore();
  for (let i = 0; i < 8; i++) {
    const bx = grain(seed, i, 1) * S, by = grain(seed, i, 2) * S, br = 10 + grain(seed, i, 3) * 20;
    b.fillStyle = rad(b, bx, by, 0, br, [[0, rgba(hi, .35 * grain(seed, i, 4))], [1, rgba(hi, 0)]]);
    b.fillRect(0, 0, S, S);
  }

  // 2. the object, oversized so it fills the frame, with painted light/shadow on top
  const [ob, o] = layer(S);
  o.translate(32, 33); o.scale(ICON_ZOOM, ICON_ZOOM); o.translate(-32, -33);
  o.save(); p.draw(o); o.restore();
  o.setTransform(1, 0, 0, 1, 0, 0);
  o.globalCompositeOperation = "source-atop";
  o.fillStyle = lin(o, 0, 0, S, S, [[0, "rgba(255,255,255,.3)"], [.45, "rgba(255,255,255,0)"], [1, "rgba(0,0,0,.5)"]]);
  o.fillRect(0, 0, S, S);

  // 3. hard silhouette (ignores soft glows) for the dark outline
  const [sil, s] = layer(S);
  s.drawImage(ob, 0, 0);
  const sd = s.getImageData(0, 0, S, S);
  for (let i = 0; i < sd.data.length; i += 4) {
    const on = sd.data[i + 3] > 150;
    sd.data[i] = 8; sd.data[i + 1] = 4; sd.data[i + 2] = 4; sd.data[i + 3] = on ? 235 : 0;
  }
  s.putImageData(sd, 0, 0);

  // 4. composite: backdrop, back-glow, outline, object
  const [out, x] = layer(S);
  x.drawImage(bg, 0, 0);
  glow(x, mixHex(hi, "#ffffff", .3), 16, () => x.drawImage(sil, 0, 0));
  [[-1.5, 0], [1.5, 0], [0, -1.5], [0, 1.5], [1.5, 1.5]].forEach(([dx, dy]) => x.drawImage(sil, dx, dy));
  x.drawImage(ob, 0, 0);

  // 5. soften like an old low-res texture, then punch up contrast/saturation and add grain
  const [small, sm] = layer(44);
  sm.imageSmoothingQuality = "high";
  sm.drawImage(out, 0, 0, 44, 44);
  x.clearRect(0, 0, S, S);
  x.imageSmoothingQuality = "high";
  x.drawImage(small, 0, 0, S, S);
  const img = x.getImageData(0, 0, S, S), d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    let r = d[i], g = d[i + 1], bl = d[i + 2];
    const l = r * .3 + g * .59 + bl * .11;
    r = l + (r - l) * 1.3; g = l + (g - l) * 1.3; bl = l + (bl - l) * 1.3;   // saturation
    const n = (grain(seed, i % 256, i >> 8) - .5) * 18;                      // grain
    d[i] = (r - 128) * 1.12 + 128 + n;                                        // contrast
    d[i + 1] = (g - 128) * 1.12 + 128 + n;
    d[i + 2] = (bl - 128) * 1.12 + 128 + n;
  }
  x.putImageData(img, 0, 0);

  // 6. corner shadow and a bevelled black frame
  x.fillStyle = rad(x, 32, 32, 26, 46, [[0, "rgba(0,0,0,0)"], [1, "rgba(0,0,0,.45)"]]);
  x.fillRect(0, 0, S, S);
  x.lineWidth = 1;
  x.strokeStyle = "rgba(255,255,255,.28)"; x.beginPath(); x.moveTo(1.5, S - 2); x.lineTo(1.5, 1.5); x.lineTo(S - 2, 1.5); x.stroke();
  x.strokeStyle = "rgba(0,0,0,.8)"; x.beginPath(); x.moveTo(S - 1.5, 2); x.lineTo(S - 1.5, S - 1.5); x.lineTo(2, S - 1.5); x.stroke();
  return out;
}

// icons are painted once and served from blob URLs so the DOM stays light
const ICON_URLS = {};
function icon(name) {
  if (!ICON_URLS[name]) {
    const bin = atob(paintIcon(name).toDataURL("image/png").split(",")[1]), arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
    ICON_URLS[name] = URL.createObjectURL(new Blob([arr], { type: "image/png" }));
  }
  return `<img src="${ICON_URLS[name]}" alt="" draggable="false">`;
}

// ============================================================
//  Small pixel sprites: only the panel corners and the arrow cursor.
// ============================================================
const K = "#0a0706";
// The cursor is generated rather than hand-drawn so it is exactly symmetric about its diagonal
// (pixel at column c, row r always matches c<->r). Tip at the top-left, triangular gem body,
// gold frame, darker base, and a small pendant hanging off the middle of the base.
function pointerPixels() {
  const N = 16;
  const tri = (c, r) => r >= c * .4 - .01 && c >= r * .4 - .01 && c + r <= 13;
  // a pendant hanging from the middle of the base: stem, little side curls, and a knob
  const pendant = (c, r) => (c === r && c >= 7 && c <= 10) || (c === 8 && r === 10) || (c === 10 && r === 8);
  const solid = (c, r) => c >= 0 && r >= 0 && c < N && r < N && (tri(c, r) || pendant(c, r));
  const rows = [];
  for (let r = 0; r < N; r++) {
    let row = "";
    for (let c = 0; c < N; c++) {
      if (!solid(c, r)) {
        let near = false;
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (solid(c + dx, r + dy)) near = true;
        row += near ? "k" : ".";
      } else if (pendant(c, r)) row += c === 10 && r === 10 ? "d" : "g";
      else if (!tri(c - 1, r) || !tri(c + 1, r) || !tri(c, r - 1) || !tri(c, r + 1)) row += c + r >= 13 ? "d" : "g";
      else { const t = (c + r) / 13; row += t < .3 ? "w" : t < .5 ? "o" : t < .75 ? "r" : "b"; }
    }
    rows.push(row);
  }
  return rows;
}
const SPRITES = {
  // gold-framed arrowhead with an amber gem, mirror-symmetric along its diagonal
  pointer: { pal: { k: "#1a0e06", g: "#e8c070", d: "#8a5a20", w: "#ffe6b8", o: "#e08a3a", r: "#a04a1a", b: "#4a1e0a" }, px: pointerPixels() },
  corner: { pal: { b: "#cdbd98", d: "#6b5a44" }, px: [
    "bbbbbbbbb.", "bddddddb..", "bdbbbbb...", "bdb...b.b.", "bdb....b..",
    "bdb...b.b.", "bdb.......", "bb.b......", "b...b.....", "b........."] },
};
function spriteSVG(name, { flipX = false, flipY = false, size, pal } = {}) {
  const s = SPRITES[name];
  const colors = { ...s.pal, ...pal };
  const h = s.px.length, w = Math.max(...s.px.map((r) => r.length));
  let rects = "";
  s.px.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      if (!colors[row[x]]) continue;
      const rx = flipX ? w - 1 - x : x, ry = flipY ? h - 1 - y : y;
      rects += `<rect x="${rx}" y="${ry}" width="1" height="1" fill="${colors[row[x]]}"/>`;
    }
  });
  const dims = size ? ` width="${size}" height="${size}"` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"${dims} shape-rendering="crispEdges" aria-hidden="true">${rects}</svg>`;
}
const svgURL = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;


// grimy noise + scratches tile, used as a texture layer on every panel
function makeNoise() {
  const S = 128, c = document.createElement("canvas");
  c.width = c.height = S;
  const ctx = c.getContext("2d"), img = ctx.createImageData(S, S), d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const r = Math.random();
    if (r < .38) { d[i + 3] = Math.random() * 46; }
    else if (r > .94) { d[i] = 227; d[i + 1] = 214; d[i + 2] = 184; d[i + 3] = Math.random() * 20; }
  }
  ctx.putImageData(img, 0, 0);
  for (let i = 0; i < 7; i++) {
    ctx.strokeStyle = `rgba(227,214,184,${.03 + Math.random() * .04})`;
    ctx.beginPath();
    const x = Math.random() * S, y = Math.random() * S, a = Math.random() * PI, l = 8 + Math.random() * 30;
    ctx.moveTo(x, y); ctx.lineTo(x + Math.cos(a) * l, y + Math.sin(a) * l); ctx.stroke();
  }
  for (let i = 0; i < 4; i++) {
    ctx.fillStyle = `rgba(0,0,0,${.05 + Math.random() * .06})`;
    ctx.beginPath(); ctx.arc(Math.random() * S, Math.random() * S, 4 + Math.random() * 12, 0, PI * 2); ctx.fill();
  }
  return `url(${c.toDataURL()})`;
}

// ---------- animated wall torches in the title bar ----------
function initTorches() {
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  // skull brazier on a curled iron bracket: blue-hot core, layered fire, rising sparks and smoke
  document.querySelectorAll("canvas.torch").forEach((c, ci) => {
    const W = 56, H = 84, CX = 28, BASE = 47;
    const RES = .5; // drawn at half resolution and shown with chunky pixels for a crunchier look
    c.width = W * RES; c.height = H * RES;
    const x = c.getContext("2d"), parts = [];
    const iron = lin(x, 0, 0, W, 0, [[0, "#1a120c"], [.5, "#6a5a48"], [1, "#1a120c"]]);
    const gold = lin(x, 0, 40, 0, 52, [[0, "#fff1a8"], [.5, "#e0a030"], [1, "#6a3a08"]]);
    const sconce = (t) => {
      x.strokeStyle = iron; x.lineWidth = 3;
      x.beginPath(); x.moveTo(CX, 84); x.lineTo(CX, 63); x.stroke();
      x.lineWidth = 2;
      x.beginPath(); x.arc(CX - 7, 72, 5, -PI / 2, PI * .7); x.stroke();
      x.beginPath(); x.arc(CX + 7, 72, 5, PI * .3, PI * 1.5); x.stroke();
      x.fillStyle = lin(x, 0, BASE, 0, 64, [[0, "#8a7058"], [.4, "#3a2a1e"], [1, "#0e0806"]]);
      x.beginPath(); x.moveTo(11, BASE); x.lineTo(45, BASE); x.quadraticCurveTo(43, 61, CX, 64); x.quadraticCurveTo(13, 61, 11, BASE); x.fill();
      x.fillStyle = gold; x.fillRect(9, BASE - 2, 38, 3.5);
      [12, 20, 36, 44].forEach((a) => { poly(x, [[a - 2, BASE - 1], [a, BASE - 8], [a + 2, BASE - 1]]); x.fill(); });
      x.fillStyle = rad(x, CX - 2, 52, 0, 8, [[0, "#fff6e0"], [1, "#8a7a5a"]]);
      x.beginPath(); x.ellipse(CX, 54, 5.5, 5, 0, 0, PI * 2); x.fill(); x.fillRect(CX - 3, 57, 6, 3.5);
      x.fillStyle = "#1a0e08"; x.fillRect(CX - 2.5, 59, 1, 2.5); x.fillRect(CX - .5, 59, 1, 2.5); x.fillRect(CX + 1.5, 59, 1, 2.5);
      const pulse = .6 + Math.sin(t * 3 + ci) * .25;
      glow(x, "#ff3a1a", 6, () => { x.fillStyle = `rgba(255,${90 + pulse * 80},40,1)`; circle(x, CX - 2, 54, 1.4); x.fill(); circle(x, CX + 2, 54, 1.4); x.fill(); });
    };
    let t = 0;
    const frame = () => {
      t += 1 / 60;
      x.setTransform(RES, 0, 0, RES, 0, 0);
      x.clearRect(0, 0, W, H);
      x.globalCompositeOperation = "lighter";
      const flick = .26 + Math.random() * .08;
      x.fillStyle = rad(x, CX, 30, 0, 32, [[0, `rgba(255,130,40,${flick})`], [1, "rgba(255,60,10,0)"]]);
      x.fillRect(0, 0, W, H);
      for (let i = 0; i < 5; i++) parts.push({ k: "fire", x: CX + (Math.random() - .5) * 18, y: BASE - 1, vx: (Math.random() - .5) * .5, vy: .6 + Math.random() * 1.1, life: 1 });
      for (let i = 0; i < 2; i++) parts.push({ k: "core", x: CX + (Math.random() - .5) * 8, y: BASE - 1, vx: 0, vy: .25 + Math.random() * .3, life: .6 });
      if (Math.random() < .18) parts.push({ k: "spark", x: CX + (Math.random() - .5) * 10, y: BASE - 10, vx: (Math.random() - .5) * 1.2, vy: 1 + Math.random() * 1.4, life: 1 });
      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.y -= p.vy;
        if (p.k === "spark") { p.x += p.vx + Math.sin(t * 9 + i) * .25; p.life -= .015; }
        else { p.x += p.vx + (CX - p.x) * .035; p.life -= .028 + Math.random() * .02; }
        if (p.life <= 0) { parts.splice(i, 1); continue; }
        if (p.k === "spark") {
          x.fillStyle = `rgba(255,${190 + Math.random() * 60},120,${p.life * (Math.random() < .2 ? .3 : 1)})`;
          x.fillRect(p.x, p.y, 1.5, 1.5);
          continue;
        }
        const r = p.k === "core" ? 3 + p.life * 5 : 2 + p.life * 7;
        const col = p.k === "core"
          ? [[0, `rgba(170,200,255,${p.life * 1.2})`], [1, "rgba(60,90,255,0)"]]
          : [[0, `rgba(255,${150 + p.life * 100},${p.life > .7 ? 120 : 30},${p.life * .7})`], [.6, `rgba(255,70,10,${p.life * .3})`], [1, "rgba(255,40,0,0)"]];
        x.fillStyle = rad(x, p.x, p.y, 0, r, col);
        x.fillRect(p.x - r, p.y - r, r * 2, r * 2);
      }
      x.globalCompositeOperation = "source-over";
      sconce(t);
      // retro finish: fewer colours, stepped transparency and fresh grain every frame
      x.setTransform(1, 0, 0, 1, 0, 0);
      const img = x.getImageData(0, 0, c.width, c.height), d = img.data;
      for (let i = 0; i < d.length; i += 4) {
        if (!d[i + 3]) continue;
        const n = (Math.random() - .5) * 34;
        d[i] = Math.round((d[i] + n) / 36) * 36;
        d[i + 1] = Math.round((d[i + 1] + n) / 36) * 36;
        d[i + 2] = Math.round((d[i + 2] + n) / 36) * 36;
        d[i + 3] = Math.min(255, Math.round(d[i + 3] / 64) * 64);
      }
      x.putImageData(img, 0, 0);
      if (!still) setTimeout(() => requestAnimationFrame(frame), 33); // ~30fps, a little choppier like old sprites
    };
    frame();
  });
}

// Diablo-style pixel orb, `frac` full (0-1).
function orbSVG(frac, [dark, mid, light]) {
  const N = 24, c = 11.5, level = 2 + (1 - frac) * 19;
  let rects = "";
  const px = (x, y, col) => { rects += `<rect x="${x}" y="${y}" width="1" height="1" fill="${col}"/>`; };
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      const dx = x - c, dy = y - c, d = Math.hypot(dx, dy);
      if (d > 11.6) continue;
      if (d > 10.4) { px(x, y, dx + dy < 0 ? "#d6a35c" : "#5a3418"); continue; } // bronze rim
      if (d > 9.6) { px(x, y, K); continue; }
      const dither = (x + y) % 2 === 0;
      if (y >= level) {
        const t = d / 9.6;
        let col = t > .78 ? dark : t > .45 ? (dither && t > .62 ? dark : mid) : (dither && t > .3 ? mid : light);
        if (Math.floor(level) === y) col = light; // surface line
        px(x, y, col);
      } else {
        px(x, y, dither && d > 7 ? "#120b0a" : "#1c1210");
      }
    }
  }
  [[7, 6], [8, 6], [7, 7], [6, 8]].forEach(([x, y]) => px(x, y, "rgba(255,255,255,.75)"));
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${N} ${N}" shape-rendering="crispEdges" aria-hidden="true">${rects}</svg>`;
}

// ============================================================
//  Engine. No need to touch this to change content.
// ============================================================
const $ = (id) => document.getElementById(id);
const allKeys = TABS.flatMap((t) => t.items.map((_, i) => t.id + ":" + i));
const GEAR_LABELS = ["HEAD", "CHEST", "HANDS", "LEGS", "FEET", "NECK", "RING", "CHARM", "RELIC", "SOUL"];
let currentTab = TABS[0].id;
let currentKey = null;
const openGroups = new Set(); // ids of expanded collapsible groups (e.g. an artist's song + album)

// equipped items, one item key ("tab:index") or null per gear slot. Starts from PLAYER.gear;
// visitors can drag items onto the slots, and their loadout is remembered in their browser.
let gear = PLAYER.gear.map((g) => (g ? g[0] + ":" + g[1] : null));
try {
  const saved = JSON.parse(localStorage.getItem("vxz-gear"));
  if (Array.isArray(saved) && saved.length === gear.length) gear = saved.map((k) => (k && allKeys.includes(k) ? k : null));
} catch (e) {}
const saveGear = () => { try { localStorage.setItem("vxz-gear", JSON.stringify(gear)); } catch (e) {} };

(() => {
  const root = document.documentElement.style;
  root.setProperty("--noise", makeNoise());
  root.setProperty("--corner-tl", svgURL(spriteSVG("corner")));
  root.setProperty("--corner-tr", svgURL(spriteSVG("corner", { flipX: true })));
  root.setProperty("--corner-bl", svgURL(spriteSVG("corner", { flipY: true })));
  root.setProperty("--corner-br", svgURL(spriteSVG("corner", { flipX: true, flipY: true })));
  root.setProperty("--cursor", `${svgURL(spriteSVG("pointer", { size: 32 }))} 1 1, auto`);
  // over clickable things the gem lights up
  root.setProperty("--cursor-click", `${svgURL(spriteSVG("pointer", { size: 32, pal: { w: "#ffffff", o: "#ffb04a", r: "#e0602a", b: "#8a2a0a" } }))} 1 1, pointer`);
})();

// discovered items persist per-visitor (nice-to-have; works without storage too)
let found = new Set();
try { found = new Set(JSON.parse(localStorage.getItem("vxz-found") || "[]").filter((k) => allKeys.includes(k))); } catch (e) {}
const saveFound = () => { try { localStorage.setItem("vxz-found", JSON.stringify([...found])); } catch (e) {} };

// tiny 8-bit sounds
let soundOn = true, audio;
try { soundOn = localStorage.getItem("vxz-sound") !== "off"; } catch (e) {}
function blip(freq = 440, dur = 0.06, type = "square", vol = 0.035) {
  if (!soundOn) return;
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const o = audio.createOscillator(), g = audio.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, audio.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + dur);
    o.connect(g).connect(audio.destination);
    o.start(); o.stop(audio.currentTime + dur);
  } catch (e) {}
}
const chime = () => { blip(523, .08); setTimeout(() => blip(784, .1), 70); setTimeout(() => blip(1046, .14), 140); };

// ---------- background music: a quiet fantasy-MMO style loop, generated live ----------
// Soft pads and a low drone over a medieval minor progression, a gentle 8-bit plucked arpeggio,
// the odd melody phrase and distant bell, all through reverb. Original, not sampled from any game.
let musicOn = true, music = null;
try { musicOn = localStorage.getItem("vxz-music") !== "off"; } catch (e) {}
const MUSIC_VOLUME = .055;
const hz = (midi) => 440 * Math.pow(2, (midi - 69) / 12);
// Am – Dm – G – C – Am – F – Em – Am
const CHORDS = [[57, 60, 64], [50, 53, 57], [55, 59, 62], [48, 52, 55], [57, 60, 64], [53, 57, 60], [52, 55, 59], [57, 60, 64]];
const MELODY = [57, 60, 62, 64, 67, 69, 72]; // A minor pentatonic
function startMusic() {
  if (!musicOn || music) return;
  try { audio = audio || new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
  if (audio.state === "suspended") audio.resume();
  const ac = audio, now = ac.currentTime;
  const master = ac.createGain();
  master.gain.setValueAtTime(0, now);
  master.gain.linearRampToValueAtTime(MUSIC_VOLUME, now + 5); // slow fade in
  const warm = ac.createBiquadFilter();
  warm.type = "lowpass"; warm.frequency.value = 2200;
  // cathedral-ish reverb from a decaying noise impulse
  const verb = ac.createConvolver(), len = ac.sampleRate * 3.5, imp = ac.createBuffer(2, len, ac.sampleRate);
  for (let ch = 0; ch < 2; ch++) { const d = imp.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6); }
  verb.buffer = imp;
  const dry = ac.createGain(), wet = ac.createGain();
  dry.gain.value = .6; wet.gain.value = .55;
  warm.connect(dry).connect(master);
  warm.connect(verb).connect(wet).connect(master);
  master.connect(ac.destination);
  const tone = (type, freq, start, dur, vol, attack = .01) => {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, start);
    g.gain.linearRampToValueAtTime(vol, start + attack);
    g.gain.exponentialRampToValueAtTime(.0001, start + dur);
    o.connect(g).connect(warm);
    o.start(start); o.stop(start + dur + .05);
  };
  const BAR = 3.4;
  let next = now + .3, bar = 0;
  // schedule a little ahead of time so playback stays smooth
  const schedule = () => {
    while (next < ac.currentTime + 1.5) {
      const chord = CHORDS[bar % CHORDS.length];
      chord.forEach((n, i) => {
        tone("triangle", hz(n - 12), next, BAR * 1.15, .05, 1.2); // pad
        tone("sine", hz(n), next + i * .03, BAR, .03, 1.5);
      });
      tone("sine", hz(chord[0] - 24), next, BAR, .06, .8); // drone
      for (let s = 0; s < 8; s++) { // plucked 8-bit arpeggio, a few notes left out
        if (Math.random() < .25) continue;
        tone("square", hz(chord[s % 3] + (s >= 4 ? 12 : 0)), next + (s * BAR) / 8, .5, .012);
      }
      if (bar % 2 === 1) for (let s = 0; s < 4; s++) { // a short melody every other bar
        if (Math.random() < .35) continue;
        tone("triangle", hz(MELODY[Math.floor(Math.random() * MELODY.length)] + 12), next + (s * BAR) / 4 + BAR / 8, .9, .025, .02);
      }
      if (Math.random() < .3) tone("sine", hz(chord[2] + 24), next + Math.random() * BAR, 2.5, .02, .005); // distant bell
      next += BAR; bar++;
    }
  };
  schedule();
  music = { master, timer: setInterval(schedule, 400) };
}
function stopMusic() {
  if (!music) return;
  const m = music, t = audio.currentTime;
  music = null;
  clearInterval(m.timer);
  m.master.gain.cancelScheduledValues(t);
  m.master.gain.setValueAtTime(m.master.gain.value, t);
  m.master.gain.linearRampToValueAtTime(0, t + 1);
  setTimeout(() => m.master.disconnect(), 1300);
}
// browsers only allow sound after the visitor interacts, so the music starts on their first click/tap/key
addEventListener("pointerdown", startMusic);
addEventListener("keydown", startMusic);
// pause everything while the tab is in the background
document.addEventListener("visibilitychange", () => { if (audio) document.hidden ? audio.suspend() : audio.resume(); });

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const getItem = (key) => { const [t, i] = key.split(":"); return TABS.find((x) => x.id === t).items[+i]; };

// the welcome line: phones (stacked layout, no keyboard) get their own wording
const introText = () => (innerWidth <= 900 && PLAYER.introMobile ? PLAYER.introMobile : PLAYER.intro);

// typewriter dialog with a little voice blip
let typeTimer;
function say(text, who = PLAYER.name) {
  clearInterval(typeTimer);
  $("who").textContent = who;
  const el = $("dialog-text");
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = text; return; }
  el.textContent = "";
  let i = 0;
  typeTimer = setInterval(() => {
    el.textContent = text.slice(0, ++i);
    el.parentElement.scrollTop = el.parentElement.scrollHeight; // keep the newest line in view
    if (audio && i % 3 === 0 && text[i - 1] !== " ") blip(180 + Math.random() * 60, .03, "triangle", .05);
    if (i >= text.length) clearInterval(typeTimer);
  }, 24);
}

function statsTable(stats) {
  const rows = [];
  for (let i = 0; i < stats.length; i += 2) {
    const a = stats[i], b = stats[i + 1];
    rows.push(`<tr><th>${esc(a[0])}</th><td>${esc(a[1])}</td>` +
      (b ? `<th>${esc(b[0])}</th><td>${esc(b[1])}</td>` : "<th></th><td></td>") + "</tr>");
  }
  return `<table class="stats">${rows.join("")}</table>`;
}

const qtyBadge = (it) => (it.qty > 1 ? `<b class="qty">${it.qty}</b>` : "");
const iconSlot = (it, extra = "") => `<span class="slot r${it.rarity} ${extra}">${icon(it.icon)}${qtyBadge(it)}</span>`;

const childKeys = (key) => {
  const it = getItem(key), [t] = key.split(":");
  if (!it.id) return [];
  return TABS.find((x) => x.id === t).items.map((_, i) => t + ":" + i).filter((k) => getItem(k).under === it.id);
};

// split bar, e.g. ["I", "E", 63] -> I 63% ▬▬▬▬▬▬░░░ 37% E
const duoBars = (it) => (it.bars || []).map(([l, r, pct]) => `<span class="duo">
    <span class="duo-l">${esc(l)} ${pct}%</span><span class="duobar"><i style="width:${pct}%"></i></span><span class="duo-r">${100 - pct}% ${esc(r)}</span>
  </span>`).join("");

function card(key) {
  const it = getItem(key);
  const badge = found.has(key) ? "" : '<span class="new">NEW</span>';
  const kids = childKeys(key);
  if (kids.length) {
    const open = openGroups.has(it.id);
    return `<button class="item parent${it.under ? " child" : ""}" data-key="${key}" aria-pressed="${key === currentKey}" aria-expanded="${open}">
      <span class="item-icon">${badge}${iconSlot(it)}</span>
      <span class="item-body"><span class="item-name q${it.rarity}"><span>${esc(it.name)}</span><span class="chev">${open ? "▼" : "▶"} ${kids.length}</span></span>${it.title ? `<span class="item-sub">${esc(it.title)}</span>` : ""}${statsTable(it.stats)}</span>
    </button>`;
  }
  if (it.compact) {
    return `<button class="item compact" data-key="${key}" aria-pressed="${key === currentKey}" title="${esc(it.name)}">
      <span class="item-icon">${badge}${iconSlot(it)}</span>
      <span class="item-body"><span class="item-name q${it.rarity}">${esc(it.name)}</span></span>
    </button>`;
  }
  return `<button class="item${it.under ? " child" : ""}" data-key="${key}" aria-pressed="${key === currentKey}">
    <span class="item-icon">${badge}${iconSlot(it)}</span>
    <span class="item-body"><span class="item-name q${it.rarity}">${esc(it.name)}</span>${it.title ? `<span class="item-sub">${esc(it.title)}</span>` : ""}${duoBars(it)}${statsTable(it.stats)}</span>
  </button>`;
}

function renderSheet() {
  const p = PLAYER;
  $("name").textContent = p.name;
  $("klass").textContent = `Lv ${p.level} / ${p.class}`;
  $("hp-fill").style.width = Math.round((p.hp[0] / p.hp[1]) * 100) + "%";
  $("hp-text").textContent = `HP ${p.hp[0]}/${p.hp[1]}`;
  $("stats").innerHTML =
    Object.entries(p.stats).map(([k, v]) => `<li><span>${k}</span><b>${v}</b></li>`).join("") +
    `<li><span>STATUS</span><b class="ok">${esc(p.status)}</b></li><li><span>LVL</span><b>${p.level}</b></li>`;
  $("orb-hp").innerHTML = orbSVG(p.hp[0] / p.hp[1], ["#4a0707", "#9b1111", "#e0362a"]);
  $("orb-hp-text").textContent = `HP ${p.hp[0]}/${p.hp[1]}`;
  $("orb-mp").innerHTML = orbSVG(p.mp[0] / p.mp[1], ["#0b1450", "#2238b8", "#5a84ff"]);
  $("orb-mp-text").textContent = `MP ${p.mp[0]}/${p.mp[1]}`;
}

function renderGear() {
  // every slot is a drop target (data-gear); filled slots can also be dragged to move or unequip
  const slot = (key, i) => {
    if (!key) return `<span class="slot empty" data-gear="${i}" title="${GEAR_LABELS[i]}: drag an item here"><span class="lbl">${GEAR_LABELS[i]}</span></span>`;
    const it = getItem(key);
    return `<button class="slot r${it.rarity}" data-key="${key}" data-gear="${i}" data-drag-key="${key}" aria-pressed="${key === currentKey}" title="${esc(it.name)} (${GEAR_LABELS[i]})" aria-label="${esc(it.name)}">${icon(it.icon)}</button>`;
  };
  $("gear-left").innerHTML = gear.slice(0, 5).map((k, i) => slot(k, i)).join("");
  $("gear-right").innerHTML = gear.slice(5, 10).map((k, i) => slot(k, i + 5)).join("");
}

function renderBag() {
  $("bag").innerHTML = allKeys.map((key) => {
    const it = getItem(key);
    return found.has(key)
      ? `<button class="slot r${it.rarity}" data-key="${key}" data-drag-key="${key}" aria-pressed="${key === currentKey}" title="${esc(it.name)}" aria-label="${esc(it.name)}">${icon(it.icon)}${qtyBadge(it)}</button>`
      : `<button class="slot r1" data-key="${key}" title="???" aria-label="Undiscovered item">${icon("question")}</button>`;
  }).join("");
  $("bag-count").textContent = `${found.size}/${allKeys.length}`;
}

function renderTabs() {
  $("tabs").innerHTML = TABS.map((t, i) =>
    `<button class="tab" role="tab" data-tab="${t.id}" aria-selected="${t.id === currentTab}"
      title="${esc(t.label)} [${i + 1}]" aria-label="${esc(t.label)}">${icon(t.icon)}<span class="n">${i + 1}</span>${t.badge ? `<span class="badge">${esc(t.badge)}</span>` : ""}</button>`
  ).join("");
}

function renderList() {
  const tab = TABS.find((t) => t.id === currentTab);
  $("list-title").textContent = tab.label;
  $("list-count").textContent = tab.items.length + " ITEMS";
  const keys = tab.items.map((_, i) => tab.id + ":" + i);
  const main = keys.filter((k) => !getItem(k).compact && !getItem(k).under);
  const more = keys.filter((k) => getItem(k).compact && !getItem(k).under);
  const withBranch = (k) => {
    const kids = childKeys(k), open = kids.length && openGroups.has(getItem(k).id);
    if (!kids.length) return card(k);
    const full = kids.filter((c) => !getItem(c).compact), small = kids.filter((c) => getItem(c).compact);
    const branch = full.map(withBranch).join("") + (small.length ? `<div class="compact-grid">${small.map(card).join("")}</div>` : "");
    return `<div class="group${open ? " open" : ""}">${card(k)}${open ? `<div class="branch">${branch}</div>` : ""}</div>`;
  };
  const divider = (k) => (getItem(k).section ? `<div class="list-sub"><span>${esc(getItem(k).section)}</span></div>` : "");
  $("list").innerHTML = main.map((k) => divider(k) + withBranch(k)).join("") + (more.length
    ? `<div class="list-sub"><span>${esc(tab.moreLabel || "More")}</span></div><div class="compact-grid">${more.map(card).join("")}</div>`
    : "");
}

function renderInspect() {
  const head = `<h2 class="heading">Inspect <span class="kanji">検査</span></h2>`;
  if (!currentKey) {
    $("inspect").innerHTML = `${head}<div class="top"><span class="slot big r1">${icon("eye")}</span>
      <p class="empty">Select an item to inspect it...</p></div>`;
    return;
  }
  const it = getItem(currentKey), worn = gear.indexOf(currentKey);
  $("inspect").innerHTML = `${head}
    <div class="top"><span class="drag-src" data-drag-key="${currentKey}" title="Drag onto a gear slot to equip">${iconSlot(it, "big")}</span>
      <div><h3 class="q${it.rarity}">${esc(it.name)}</h3>${it.title ? `<div class="sub">${esc(it.title)}</div>` : ""}
      <div class="rarity tiny r${it.rarity}">RARITY <span>${"◆".repeat(it.rarity)}${"◇".repeat(5 - it.rarity)}</span></div>
      <div class="equip-hint tiny">${worn >= 0 ? `EQUIPPED · <b>${GEAR_LABELS[worn]}</b>` : "drag the icon onto a gear slot to equip"}</div></div>
    </div>
    <p>${esc(it.desc)}</p>
    ${duoBars(it)}
    ${statsTable(it.stats)}
    <div class="actions">
      ${it.locked ? `<span class="btn locked" aria-label="Private">🔒 PRIVATE</span>` : ""}
      ${it.link ? `<a class="btn" href="${esc(it.link)}" target="_blank" rel="noopener">${esc(it.linkLabel || "OPEN ▶")}</a>` : ""}
    </div>`;
}

function renderFound() {
  const n = found.size, total = allKeys.length;
  $("xp-text").textContent = `${n}/${total}`;
  $("xp-fill").style.width = (n / total) * 100 + "%";
}

function renderAll() { renderTabs(); renderList(); renderGear(); renderBag(); renderInspect(); renderFound(); }

function switchTab(id) {
  if (id === currentTab) return;
  currentTab = id;
  blip(330, .07);
  renderTabs(); renderList();
  $("list").scrollTop = 0;
}

function selectItem(key) {
  const [t] = key.split(":");
  if (t !== currentTab) { currentTab = t; renderTabs(); }
  const it = getItem(key);
  // reveal an item picked from the bag or gear by opening every group above it
  const items = TABS.find((x) => x.id === t).items;
  for (let up = it.under; up; up = (items.find((i) => i.id === up) || {}).under) openGroups.add(up);
  if (it.id && childKeys(key).length) {                 // clicking a group header toggles its branch
    if (openGroups.has(it.id) && currentKey === key) openGroups.delete(it.id); else openGroups.add(it.id);
  }
  currentKey = key;
  const fresh = !found.has(key);
  found.add(key); saveFound();
  fresh ? chime() : blip(440, .05);
  renderList(); renderGear(); renderBag(); renderInspect(); renderFound();
  const sel = document.querySelector(`#list .item[data-key="${key}"]`);
  if (sel) sel.scrollIntoView({ block: "nearest" });
  say(getItem(key).desc);
  if (fresh && found.size === allKeys.length) {
    setTimeout(() => { chime(); say("Every relic discovered... you've seen it all. Thanks for snooping around. Come say hi :)"); }, 2400);
  }
}

// ============================================================
//  Rotatable 3D character (three.js), rendered at low resolution
//  and scaled up for a crunchy, pixelated retro-MMO look.
//  Colours for the outfit are in COL below.
// ============================================================
function initCharacter() {
  const stage = $("stage");
  const fallback = () => stage.insertAdjacentHTML("afterbegin", `<div class="fallback">${icon("skull")}</div>`);
  if (!window.THREE) return fallback();
  const T = THREE;
  let renderer;
  try { renderer = new T.WebGLRenderer({ antialias: false, alpha: true }); } catch (e) { return fallback(); }
  renderer.setPixelRatio(1);
  renderer.setClearColor(0x000000, 0);
  stage.insertBefore(renderer.domElement, stage.firstChild);

  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(30, 1, 0.1, 50);
  camera.position.set(0, 1.35, 6.2);
  camera.lookAt(0, 1.22, 0);

  scene.add(new T.AmbientLight(0xffffff, 0.5));
  const key = new T.DirectionalLight(0xfff1e0, 0.85); key.position.set(2, 3, 4); scene.add(key);
  const rim = new T.DirectionalLight(0x9fb4ff, 0.55); rim.position.set(-3, 2, -4); scene.add(rim);

  // 3-step toon ramp
  const ramp = new T.DataTexture(new Uint8Array([70, 150, 255]), 3, 1, T.LuminanceFormat);
  ramp.minFilter = ramp.magFilter = T.NearestFilter; ramp.needsUpdate = true;
  const mats = {};
  const toon = (hex) => mats[hex] || (mats[hex] = new T.MeshToonMaterial({ color: hex, gradientMap: ramp }));
  const outlineMat = new T.MeshBasicMaterial({ color: 0x0a0706, side: T.BackSide });

  const COL = {
    skin: 0xf8e4d8, hair: 0x1b1519, white: 0xf3efe9, cream: 0xe6d8c2, pink: 0xe7a9b8,
    lilac: 0xa9b6dc, ribbon: 0x5a1f2e, tights: 0xf4f0f0, boot: 0xdedbd6, steel: 0x8d939b,
    bronze: 0xb5793a, eye: 0xc0201a,
  };
  const S = (r, w = 16, h = 12) => new T.SphereGeometry(r, w, h);
  const C = (rt, rb, h, s = 12) => new T.CylinderGeometry(rt, rb, h, s);

  const root = new T.Group(); scene.add(root);
  const body = new T.Group(); root.add(body);
  function part(geo, color, { pos = [0, 0, 0], rot = [0, 0, 0], scale = [1, 1, 1], outline = 0.05, parent = body } = {}) {
    const m = new T.Mesh(geo, toon(color));
    m.position.set(...pos); m.rotation.set(...rot); m.scale.set(...scale);
    if (outline) { const o = new T.Mesh(geo, outlineMat); o.scale.setScalar(1 + outline); m.add(o); }
    parent.add(m);
    return m;
  }

  // legs + boots
  for (const s of [-1, 1]) {
    part(C(.075, .065, .5), COL.tights, { pos: [s * .1, .42, 0] });
    part(C(.1, .11, .26), COL.boot, { pos: [s * .1, .13, 0] });
    part(C(.118, .118, .05), COL.cream, { pos: [s * .1, .27, 0], outline: .03 });
    part(S(.09), COL.boot, { pos: [s * .1, .03, .06], scale: [1, .6, 1.4] });
  }
  // skirt, petticoat and hem
  // points listed top-to-bottom; reversed so the faces point outward
  const lathe = (pts) => new T.LatheGeometry(pts.slice().reverse().map(([x, y]) => new T.Vector2(x, y)), 18);
  part(lathe([[.4, 0], [.5, -.1], [.57, -.2], [.57, -.22]]), COL.pink, { pos: [0, .8, 0], outline: .03 });
  part(lathe([[.17, .2], [.22, .14], [.32, .04], [.42, -.08], [.5, -.18], [.5, -.2]]), COL.white, { pos: [0, .82, 0], outline: .03 });
  part(new T.TorusGeometry(.5, .025, 6, 24), COL.cream, { pos: [0, .62, 0], rot: [PI / 2, 0, 0], outline: .02 });
  // torso, corset, collar and jabot
  part(C(.16, .21, .38), COL.white, { pos: [0, 1.17, 0] });
  part(C(.168, .2, .2), COL.ribbon, { pos: [0, 1.08, 0], outline: .02 });
  part(new T.TorusGeometry(.13, .045, 6, 16), COL.white, { pos: [0, 1.38, 0], rot: [PI / 2, 0, 0] });
  for (let i = 0; i < 4; i++) part(S(.07 - i * .008), COL.cream, { pos: [0, 1.33 - i * .07, .17], scale: [1.4, .6, .6], outline: .04 });
  part(S(.05), COL.pink, { pos: [-.06, 1.4, .12], scale: [1.3, .8, .6], outline: .05 });
  part(S(.05), COL.pink, { pos: [.06, 1.4, .12], scale: [1.3, .8, .6], outline: .05 });
  // arms in a little "ta-da" pose
  for (const s of [-1, 1]) {
    part(S(.13), COL.white, { pos: [s * .24, 1.3, 0] });
    const arm = new T.Group();
    arm.position.set(s * .26, 1.3, 0); arm.rotation.z = s * .55;
    body.add(arm);
    part(C(.055, .05, .42), COL.white, { pos: [0, -.26, 0], parent: arm });
    part(C(.06, .11, .12), COL.cream, { pos: [0, -.48, 0], parent: arm });
    part(S(.055), COL.skin, { pos: [0, -.57, 0], parent: arm });
  }
  part(C(.05, .06, .1), COL.skin, { pos: [0, 1.43, 0], outline: 0 });

  // head
  const head = new T.Group(); head.position.set(0, 1.72, 0); body.add(head);
  part(S(.33, 20, 16), COL.skin, { parent: head, scale: [1, .95, .95] });
  for (const s of [-1, 1]) {
    part(S(.06, 10, 8), COL.eye, { pos: [s * .12, -.04, .29], scale: [.75, 1.1, .35], parent: head, outline: .2 });
    part(S(.018, 6, 6), 0xffffff, { pos: [s * .12 + .015, 0, .315], parent: head, outline: 0 });
    part(S(.035, 8, 6), COL.pink, { pos: [s * .18, -.12, .27], scale: [1.3, .6, .3], parent: head, outline: 0 });
  }
  part(S(.015, 6, 6), 0x8a3a3a, { pos: [0, -.15, .31], scale: [1.5, .6, .5], parent: head, outline: 0 });
  // hair: cap, straight hime bangs, side locks and long back hair
  part(new T.SphereGeometry(.355, 20, 14, 0, PI * 2, 0, PI * .45), COL.hair, { pos: [0, .02, -.01], rot: [-.3, 0, 0], parent: head });
  part(S(.34), COL.hair, { pos: [0, -.02, -.17], scale: [1.04, 1.04, .85], parent: head });
  for (let i = -3; i <= 3; i++) part(S(.07, 8, 6), COL.hair, { pos: [i * .075, .1, .3 - Math.abs(i) * .03], scale: [.7, 1.1, .5], parent: head, outline: .06 });
  for (const s of [-1, 1]) part(new T.BoxGeometry(.09, .55, .08), COL.hair, { pos: [s * .29, -.32, .1], parent: head });
  const backHair = part(C(.3, .38, .9, 14), COL.hair, { pos: [0, -.55, -.18], scale: [1, 1, .55], parent: head });
  // bunny ears + bow
  const ears = [];
  for (const s of [-1, 1]) {
    const ear = new T.Group();
    ear.position.set(s * .13, .3, -.02); ear.rotation.set(-.15, 0, -s * .2 + (s > 0 ? -.25 : 0));
    head.add(ear); ears.push(ear);
    part(S(.1, 12, 10), COL.white, { pos: [0, .32, 0], scale: [.55, 2.2, .3], parent: ear });
    part(S(.1, 10, 8), COL.pink, { pos: [0, .32, .025], scale: [.3, 1.7, .15], parent: ear, outline: 0 });
  }
  part(S(.06), COL.ribbon, { pos: [-.24, .22, .14], scale: [1.4, .8, .6], parent: head });
  part(S(.06), COL.ribbon, { pos: [-.12, .26, .2], scale: [1.4, .8, .6], parent: head });

  // big spiked round shield on her back
  const shield = new T.Group(); shield.position.set(0, 1.15, -.42); shield.rotation.set(.15, 0, .35); body.add(shield);
  part(C(.55, .55, .06, 24), COL.steel, { rot: [PI / 2, 0, 0], parent: shield, outline: .02 });
  part(new T.TorusGeometry(.55, .05, 6, 24), COL.bronze, { parent: shield, outline: .02 });
  part(S(.12), COL.bronze, { pos: [0, 0, -.06], scale: [1, 1, .6], parent: shield });
  part(S(.04, 8, 6), COL.eye, { pos: [0, 0, -.13], parent: shield, outline: .2 });
  for (let i = 0; i < 6; i++) {
    const a = i * PI / 3 + PI / 6;
    part(new T.ConeGeometry(.05, .35, 6), COL.steel, { pos: [Math.cos(a) * .7, Math.sin(a) * .7, 0], rot: [0, 0, a - PI / 2], parent: shield, outline: .04 });
  }

  // glowing pedestal
  const ring = new T.Mesh(new T.RingGeometry(.55, .68, 32), new T.MeshBasicMaterial({ color: 0x3ee6c4, transparent: true, opacity: .55, side: T.DoubleSide }));
  ring.rotation.x = -PI / 2; ring.position.y = .005; scene.add(ring);
  const disc = new T.Mesh(new T.CircleGeometry(.55, 32), new T.MeshBasicMaterial({ color: 0x0c3a33, transparent: true, opacity: .45 }));
  disc.rotation.x = -PI / 2; disc.position.y = .004; scene.add(disc);

  // pixel size: render at 1/3 resolution
  const PIXEL = 3;
  const resize = () => {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(Math.max(1, Math.round(w / PIXEL)), Math.max(1, Math.round(h / PIXEL)), false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(stage);
  resize();

  // rotation: drag, arrow buttons, or slow idle turn
  let target = -0.35, current = target, dragging = false, lastX = 0, idle = 0;
  stage.addEventListener("pointerdown", (e) => {
    if (e.target.closest("button")) return;
    dragging = true; lastX = e.clientX; idle = 0;
    stage.classList.add("dragging"); stage.setPointerCapture(e.pointerId);
  });
  stage.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    target += (e.clientX - lastX) * 0.015; lastX = e.clientX;
  });
  const stop = () => { dragging = false; stage.classList.remove("dragging"); };
  stage.addEventListener("pointerup", stop);
  stage.addEventListener("pointercancel", stop);
  $("rot-l").addEventListener("click", () => { target -= PI / 4; idle = 0; blip(260, .05); });
  $("rot-r").addEventListener("click", () => { target += PI / 4; idle = 0; blip(260, .05); });

  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const clock = new T.Clock();
  (function loop() {
    requestAnimationFrame(loop);
    const dt = Math.min(clock.getDelta(), .1), t = clock.elapsedTime;
    idle += dt;
    if (!dragging && idle > 6 && !still) target += dt * .25; // slowly turns when left alone
    current += (target - current) * Math.min(1, dt * 10);
    root.rotation.y = current;
    if (!still) {
      body.position.y = Math.sin(t * 2) * .015;
      ears[0].rotation.x = -.15 + Math.sin(t * 1.7) * .06;
      ears[1].rotation.x = -.15 + Math.sin(t * 1.7 + 1) * .08;
      backHair.rotation.x = Math.sin(t * 1.3) * .03;
    }
    renderer.render(scene, camera);
  })();
}

// ---------- events ----------
$("tabs").addEventListener("click", (e) => {
  const b = e.target.closest(".tab");
  if (b) switchTab(b.dataset.tab);
});
$("tabs").addEventListener("keydown", (e) => {
  if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
  const i = TABS.findIndex((t) => t.id === currentTab);
  switchTab(TABS[(i + (e.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length].id);
  $("tabs").querySelector(`[data-tab="${currentTab}"]`).focus();
});
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= TABS.length) switchTab(TABS[n - 1].id);
});
let suppressClick = false; // set right after a drag so the drop doesn't also count as a click
document.addEventListener("click", (e) => {
  if (suppressClick) return;
  const b = e.target.closest("[data-key]");
  if (b) selectItem(b.dataset.key);
});

// ---------- equipment: drag items onto the gear slots ----------
// Drag the Inspect icon, a Bag item, or an equipped item. Drop on a slot to equip (an item already
// worn elsewhere swaps places); drop an equipped item anywhere else to unequip it.
let drag = null;
const gearSlotAt = (x, y) => { const el = document.elementFromPoint(x, y); return el && el.closest("[data-gear]"); };
const clearTargets = (keep) => document.querySelectorAll(".drop-target").forEach((el) => el !== keep && el.classList.remove("drop-target"));
document.addEventListener("pointerdown", (e) => {
  const src = e.target.closest("[data-drag-key]");
  if (!src || e.button > 0) return;
  if (src.closest("#bag") && e.pointerType !== "mouse") return; // let touch users scroll the bag
  drag = { key: src.dataset.dragKey, from: src.dataset.gear, x: e.clientX, y: e.clientY, ghost: null };
});
document.addEventListener("pointermove", (e) => {
  if (!drag) return;
  if (!drag.ghost) {
    if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 6) return; // still a click
    drag.ghost = document.createElement("div");
    drag.ghost.className = "drag-ghost";
    drag.ghost.innerHTML = icon(getItem(drag.key).icon);
    document.body.appendChild(drag.ghost);
    document.body.classList.add("dragging-item");
    blip(520, .04);
  }
  drag.ghost.style.left = e.clientX + "px";
  drag.ghost.style.top = e.clientY + "px";
  const over = gearSlotAt(e.clientX, e.clientY);
  clearTargets(over);
  if (over) over.classList.add("drop-target");
});
const endDrag = (e, cancelled) => {
  if (!drag) return;
  const d = drag;
  drag = null;
  if (!d.ghost) return; // it was just a click
  d.ghost.remove();
  document.body.classList.remove("dragging-item");
  clearTargets(null);
  suppressClick = true; setTimeout(() => { suppressClick = false; }, 0);
  if (cancelled) return;
  const it = getItem(d.key), target = gearSlotAt(e.clientX, e.clientY);
  const label = it.title ? `${it.name} (${it.title})` : it.name;
  if (target) {
    const i = +target.dataset.gear, j = gear.indexOf(d.key);
    if (i === j) return;
    if (j >= 0) gear[j] = gear[i]; // it was worn in another slot: swap the two
    gear[i] = d.key;
    chime();
    say(`Equipped ${label} to the ${GEAR_LABELS[i]} slot.`);
  } else if (d.from !== undefined) {
    gear[+d.from] = null;
    blip(220, .12, "triangle", .05);
    say(`Unequipped ${label}.`);
  } else return;
  saveGear(); renderGear(); renderInspect();
};
document.addEventListener("pointerup", (e) => endDrag(e, false));
document.addEventListener("pointercancel", (e) => endDrag(e, true));
$("lobby").addEventListener("click", () => {
  currentTab = TABS[0].id; currentKey = null;
  blip(110, .25, "sawtooth", .03);
  renderAll(); say(introText());
  window.scrollTo({ top: 0, behavior: "smooth" });
});
const soundBtn = $("sound");
const syncSound = () => { soundBtn.setAttribute("aria-pressed", soundOn); soundBtn.textContent = soundOn ? "SND ON" : "SND OFF"; };
soundBtn.addEventListener("click", () => {
  soundOn = !soundOn; syncSound();
  try { localStorage.setItem("vxz-sound", soundOn ? "on" : "off"); } catch (e) {}
  blip(660);
});
const musicBtn = $("music");
const syncMusic = () => { musicBtn.setAttribute("aria-pressed", musicOn); musicBtn.textContent = musicOn ? "BGM ON" : "BGM OFF"; };
musicBtn.addEventListener("click", () => {
  musicOn = !musicOn; syncMusic();
  try { localStorage.setItem("vxz-music", musicOn ? "on" : "off"); } catch (e) {}
  musicOn ? startMusic() : stopMusic();
});

// ---------- fit the whole UI to the window on desktop ----------
// Widens .game to match the window's shape (so widescreens get wider panels instead of empty sides),
// then zooms it so the whole thing fits the viewport, smaller or larger, like a game window.
const game = document.querySelector(".game");
function fitToWindow() {
  game.style.zoom = ""; game.style.width = "";
  if (innerWidth <= 900) return; // phones/tablets use the stacked layout instead
  const pad = 24, vw = innerWidth - pad, vh = innerHeight - pad;
  const designH = game.offsetHeight;
  // WIDTH_RATIO < 1 keeps the window a bit narrower than the screen so everything zooms up larger
  const WIDTH_RATIO = 0.8;
  const width = Math.max(1200, Math.min(1650, designH * (vw / vh) * WIDTH_RATIO));
  game.style.width = width + "px";
  const scale = Math.min(vw / width, vh / game.offsetHeight, 1.8);
  game.style.zoom = scale.toFixed(4);
  // when shrunk, small text is only a few pixels tall, so the moving grain/flicker makes it shimmer
  document.documentElement.classList.toggle("calm-fx", scale < .9);
}
addEventListener("resize", fitToWindow);
if (document.fonts) document.fonts.ready.then(fitToWindow);

// ---------- boot ----------
document.title = PLAYER.name;
syncSound(); syncMusic(); renderSheet(); renderAll(); say(introText());
initTorches();
initCharacter();
fitToWindow();
