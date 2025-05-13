import { Game } from '../types';

export const games: Game[] = [
  {
    id: 1,
    title: 'Battle of Heroes: Stream, Compete, Conquer',
    imageUrl: '/assets/Battle of Heroes_ Stream, Compete, Conquer.jpg',
    description: 'A high-intensity PvP game built for gamers who live to compete, customize, and conquer',
    platform: 'PC',
    translations: {
      en: {
        title: 'Battle of Heroes: Stream, Compete, Conquer',
        description: 'A high-intensity PvP game built for gamers who live to compete, customize, and conquer',
        story: `<p><strong>Battle of the Heroes</strong> is a live-streaming PvP game inspired by the Three Kingdoms era, where viewers actively join the fight. With just a comment or like, fans choose sides, summon warriors, legendary generals and shape the outcome live.</p>`
      },
      de: {
        title: 'Kampf der Helden: Streamen, Wettkämpfen, Erobern',
        description: 'Ein intensives PvP-Spiel für Gamer, die für den Wettkampf leben',
        story: `<p><strong>Kampf der Helden</strong> ist ein Live-Streaming-PvP-Spiel, inspiriert von der Zeit der Drei Königreiche, bei dem Zuschauer aktiv am Kampf teilnehmen.</p>`
      },
      fr: {
        title: 'Bataille des Héros: Stream, Compétition, Conquête',
        description: 'Un jeu PvP haute intensité conçu pour les joueurs qui vivent pour la compétition',
        story: `<p><strong>Bataille des Héros</strong> est un jeu PvP en streaming en direct inspiré de l'ère des Trois Royaumes, où les spectateurs participent activement au combat.</p>`
      },
      ru: {
        title: 'Битва Героев: Стрим, Соревнование, Завоевание',
        description: 'Высокоинтенсивная PvP игра для геймеров, живущих соревнованиями',
        story: `<p><strong>Битва Героев</strong> - это PvP игра с прямой трансляцией, вдохновленная эпохой Трёх Королевств, где зрители активно участвуют в сражении.</p>`
      },
      zh: {
        title: '英雄之战：直播、竞技、征服',
        description: '为热爱竞技的玩家打造的高强度PvP游戏',
        story: `<p><strong>英雄之战</strong>是一款受三国时代启发的直播PvP游戏，观众可以积极参与战斗。</p>`
      },
      ar: {
        title: 'معركة الأبطال: بث مباشر، منافسة، فتح',
        description: 'لعبة قتال عالية الحدة مصممة للاعبين الذين يعيشون للمنافسة',
        story: `<p><strong>معركة الأبطال</strong> هي لعبة قتال مباشرة مستوحاة من عصر الممالك الثلاثة، حيث ينضم المشاهدون بنشاط إلى المعركة.</p>`
      },
      vi: {
        title: 'Trận Chiến Anh Hùng: Stream, Thi Đấu, Chinh Phục',
        description: 'Trò chơi PvP cường độ cao dành cho game thủ đam mê thi đấu',
        story: `<p><strong>Trận Chiến Anh Hùng</strong> là trò chơi PvP trực tiếp lấy cảm hứng từ thời Tam Quốc, nơi người xem tích cực tham gia vào trận chiến.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 (64-bit)',
        processor: 'Intel Core i5 11th generation or higher',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i7-8700K / AMD Ryzen 5 3600',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 2,
    title: 'Block Rush: Gift-Powered Strategy Showdown',
    imageUrl: '/assets/Block Rush_ Gift-Powered Strategy Showdown.jpg',
    description: 'A strategic defense game where players summon and upgrade units through in-game gifts',
    platform: 'PC',
    translations: {
      en: {
        title: 'Block Rush: Gift-Powered Strategy Showdown',
        description: 'A strategic defense game where players summon and upgrade units through in-game gifts',
        story: `<p>In Block Rush, players engage in a strategic defense game where they summon and upgrade units using in-game gifts. The objective is to outlast opponents by strategically placing defensive and offensive units.</p>`
      },
      de: {
        title: 'Block Rush: Geschenkgetriebenes Strategieduell',
        description: 'Ein strategisches Verteidigungsspiel, in dem Spieler Einheiten durch In-Game-Geschenke beschwören und verbessern',
        story: `<p>In Block Rush nehmen die Spieler an einem strategischen Verteidigungsspiel teil, bei dem sie Einheiten durch In-Game-Geschenke beschwören und verbessern. Das Ziel ist es, Gegner durch strategische Platzierung von Verteidigungs- und Angriffseinheiten zu überdauern.</p>`
      },
      fr: {
        title: 'Block Rush: Confrontation Stratégique Alimentée par les Cadeaux',
        description: 'Un jeu de défense stratégique où les joueurs invoquent et améliorent des unités grâce aux cadeaux en jeu',
        story: `<p>Dans Block Rush, les joueurs participent à un jeu de défense stratégique où ils invoquent et améliorent des unités en utilisant des cadeaux en jeu. L'objectif est de survivre aux adversaires en plaçant stratégiquement des unités défensives et offensives.</p>`
      },
      ru: {
        title: 'Block Rush: Стратегическая Битва с Подарками',
        description: 'Стратегическая игра в жанре защиты, где игроки призывают и улучшают юнитов с помощью внутриигровых подарков',
        story: `<p>В Block Rush игроки участвуют в стратегической оборонительной игре, где они призывают и улучшают юнитов с помощью внутриигровых подарков. Цель - пережить противников, стратегически размещая оборонительные и наступательные юниты.</p>`
      },
      zh: {
        title: '方块冲锋：礼物驱动的策略对决',
        description: '一款策略防御游戏，玩家通过游戏内礼物召唤和升级单位',
        story: `<p>在方块冲锋中，玩家参与策略防御游戏，通过游戏内礼物召唤和升级单位。目标是通过战略性地放置防御和进攻单位来战胜对手。</p>`
      },
      ar: {
        title: 'بلوك راش: معركة استراتيجية مدعومة بالهدايا',
        description: 'لعبة دفاع استراتيجية حيث يستدعي اللاعبون ويطورون الوحدات من خلال الهدايا داخل اللعبة',
        story: `<p>في بلوك راش، يشارك اللاعبون في لعبة دفاع استراتيجية حيث يستدعون ويطورون الوحدات باستخدام الهدايا داخل اللعبة. الهدف هو البقاء أطول من الخصوم من خلال وضع وحدات دفاعية وهجومية بشكل استراتيجي.</p>`
      },
      vi: {
        title: 'Block Rush: Đối Đầu Chiến Lược Bằng Quà Tặng',
        description: 'Trò chơi phòng thủ chiến lược nơi người chơi triệu hồi và nâng cấp đơn vị thông qua quà tặng trong game',
        story: `<p>Trong Block Rush, người chơi tham gia vào trò chơi phòng thủ chiến lược nơi họ triệu hồi và nâng cấp đơn vị bằng quà tặng trong game. Mục tiêu là tồn tại lâu hơn đối thủ bằng cách đặt các đơn vị phòng thủ và tấn công một cách chiến lược.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-4400E or AMD FX-6300',
        memory: '16 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i7-610 or AMD Ryzen 5 3600X',
        memory: '32 GB RAM'
      }
    }
  },
  // Games 3-8 would be here...
  {
    id: 9,
    title: 'Coloring Heroes: Paint. Power Up. Protect the World',
    imageUrl: '/assets/Coloring Heroes_ Paint. Power Up. Protect the World.jpg',
    description: 'A creative action game where viewers help color heroes to unlock their powers',
    platform: 'PC / Mobile',
    translations: {
      en: {
        title: 'Coloring Heroes: Paint. Power Up. Protect the World',
        description: 'A creative action game where viewers help color heroes to unlock their powers',
        story: `<p>In <strong>Coloring Heroes</strong>, players control blank-canvas heroes who gain powers based on how viewers color them. Each color combination unlocks unique abilities and transformations, creating endless possibilities for heroic adventures.</p>`
      },
      de: {
        title: 'Helden Ausmalen: Malen. Aufladen. Die Welt beschützen',
        description: 'Ein kreatives Actionspiel, bei dem Zuschauer Helden ausmalen, um ihre Kräfte freizuschalten',
        story: `<p>In <strong>Helden Ausmalen</strong> steuern Spieler leere Leinwand-Helden, die Kräfte basierend auf der Farbgebung der Zuschauer erhalten. Jede Farbkombination schaltet einzigartige Fähigkeiten frei.</p>`
      },
      fr: {
        title: 'Héros à Colorier: Peindre. Renforcer. Protéger le Monde',
        description: 'Un jeu d\'action créatif où les spectateurs aident à colorier les héros pour débloquer leurs pouvoirs',
        story: `<p>Dans <strong>Héros à Colorier</strong>, les joueurs contrôlent des héros vierges qui gagnent des pouvoirs selon la façon dont les spectateurs les colorient. Chaque combinaison de couleurs débloque des capacités uniques.</p>`
      },
      ru: {
        title: 'Раскраска Героев: Рисуй. Усиливайся. Защищай Мир',
        description: 'Креативная экшн-игра, где зрители помогают раскрашивать героев, чтобы разблокировать их силы',
        story: `<p>В <strong>Раскраске Героев</strong> игроки управляют героями-холстами, которые получают силы в зависимости от того, как зрители их раскрашивают. Каждая цветовая комбинация открывает уникальные способности.</p>`
      },
      zh: {
        title: '英雄上色：绘画、强化、保护世界',
        description: '一款创意动作游戏，观众通过为英雄上色来解锁他们的力量',
        story: `<p>在<strong>英雄上色</strong>中，玩家控制空白画布英雄，根据观众的上色获得力量。每种颜色组合都能解锁独特的能力和变身。</p>`
      },
      ar: {
        title: 'تلوين الأبطال: ارسم. قوِّ. احمِ العالم',
        description: 'لعبة حركة إبداعية حيث يساعد المشاهدون في تلوين الأبطال لفتح قواهم',
        story: `<p>في <strong>تلوين الأبطال</strong>، يتحكم اللاعبون في أبطال لوحة فارغة يكتسبون قوى بناءً على كيفية تلوين المشاهدين لهم. كل مجموعة ألوان تفتح قدرات فريدة.</p>`
      },
      vi: {
        title: 'Tô Màu Anh Hùng: Vẽ. Tăng Sức Mạnh. Bảo Vệ Thế Giới',
        description: 'Trò chơi hành động sáng tạo nơi người xem giúp tô màu các anh hùng để mở khóa sức mạnh',
        story: `<p>Trong <strong>Tô Màu Anh Hùng</strong>, người chơi điều khiển các anh hùng canvas trống, họ nhận được sức mạnh dựa trên cách người xem tô màu cho họ. Mỗi kết hợp màu sắc mở khóa các khả năng độc đáo.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 (64-bit) or Android 8.0+',
        processor: 'Intel Core i3-6100 or AMD FX-4350',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit) or Android 10.0+',
        processor: 'Intel Core i5-7400 or AMD Ryzen 3 1300X',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 10,
    title: 'Dragon Ball Duel: A New Era of Dragon Ball Combat Awaits',
    imageUrl: '/assets/Dragon Ball Duel_ A New Era of Dragon Ball Combat Awaits.jpg',
    description: 'An intense fighting game where stream viewers power up fighters and influence epic battles',
    platform: 'PC / Mobile',
    translations: {
      en: {
        title: 'Dragon Ball Duel: A New Era of Dragon Ball Combat Awaits',
        description: 'An intense fighting game where stream viewers power up fighters and influence epic battles',
        story: `<p>In <strong>Dragon Ball Duel</strong>, players step into the shoes of legendary warriors while stream viewers contribute their energy to power up special moves and transformations. Every viewer interaction charges the Spirit Bomb meter, unlocks new forms, and shapes the outcome of each explosive battle.</p>`
      },
      de: {
        title: 'Dragon Ball Duell: Eine neue Ära des Dragon Ball Kampfes erwartet dich',
        description: 'Ein intensives Kampfspiel, bei dem Stream-Zuschauer Kämpfer verstärken und epische Schlachten beeinflussen',
        story: `<p>In <strong>Dragon Ball Duell</strong> schlüpfen Spieler in die Rolle legendärer Krieger, während Stream-Zuschauer ihre Energie beisteuern, um Spezialattacken und Transformationen zu verstärken. Jede Zuschauerinteraktion lädt den Genkidama-Meter auf und schaltet neue Formen frei.</p>`
      },
      fr: {
        title: 'Dragon Ball Duel: Une Nouvelle Ère de Combat Dragon Ball Arrive',
        description: 'Un jeu de combat intense où les spectateurs du stream renforcent les combattants et influencent les batailles épiques',
        story: `<p>Dans <strong>Dragon Ball Duel</strong>, les joueurs incarnent des guerriers légendaires tandis que les spectateurs contribuent leur énergie pour alimenter les attaques spéciales et les transformations. Chaque interaction des spectateurs charge le compteur du Genkidama et débloque de nouvelles formes.</p>`
      },
      ru: {
        title: 'Dragon Ball Дуэль: Новая Эра Сражений Dragon Ball',
        description: 'Интенсивная боевая игра, где зрители стрима усиливают бойцов и влияют на эпические битвы',
        story: `<p>В <strong>Dragon Ball Дуэль</strong> игроки становятся легендарными воинами, а зрители стрима вносят свою энергию для усиления специальных приёмов и трансформаций. Каждое взаимодействие зрителей заряжает счётчик Генки Дамы и открывает новые формы.</p>`
      },
      zh: {
        title: '龙珠对决：龙珠战斗的新纪元',
        description: '一款激烈的格斗游戏，观众可以为战士充能并影响史诗级战斗',
        story: `<p>在<strong>龙珠对决</strong>中，玩家化身传奇战士，而直播观众贡献能量来强化必杀技和变身。每个观众互动都会为元气弹计量表充能，解锁新的形态，塑造每场爆炸性战斗的结果。</p>`
      },
      ar: {
        title: 'دراغون بول ديول: حقبة جديدة من قتال دراغون بول',
        description: 'لعبة قتال مكثفة حيث يقوم مشاهدو البث بتقوية المقاتلين والتأثير على المعارك الملحمية',
        story: `<p>في <strong>دراغون بول ديول</strong>، يتقمص اللاعبون أدوار المحاربين الأسطوريين بينما يساهم المشاهدون بطاقتهم لتقوية الحركات الخاصة والتحولات. كل تفاعل من المشاهدين يشحن مقياس قنبلة الروح ويفتح أشكالاً جديدة.</p>`
      },
      vi: {
        title: 'Dragon Ball Đối Đầu: Kỷ Nguyên Mới Của Trận Chiến Dragon Ball',
        description: 'Trò chơi đối kháng căng thẳng nơi người xem stream tăng sức mạnh cho các chiến binh và ảnh hưởng đến các trận chiến hoành tráng',
        story: `<p>Trong <strong>Dragon Ball Đối Đầu</strong>, người chơi hóa thân thành các chiến binh huyền thoại trong khi người xem stream đóng góp năng lượng để tăng sức mạnh cho các đòn đặc biệt và biến hình. Mỗi tương tác của người xem sẽ nạp năng lượng cho Genki-dama và mở khóa các hình thái mới.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 (64-bit) or Android 9.0+',
        processor: 'Intel Core i5-4460 or AMD FX-6300',
        memory: '6 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit) or Android 11.0+',
        processor: 'Intel Core i7-7700 or AMD Ryzen 5 2600',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 11,
    title: 'Call Me Da Sheng: Shape the Fate of the Monkey King',
    imageUrl: '/assets/Call Me Da Sheng_ Shape the Fate of the Monkey King.jpg',
    description: 'An interactive Journey to the West adventure where viewers help guide the Monkey King through challenges and battles',
    platform: 'PC / Mobile',
    translations: {
      en: {
        title: 'Call Me Da Sheng: Shape the Fate of the Monkey King',
        description: 'An interactive Journey to the West adventure where viewers help guide the Monkey King through challenges and battles',
        story: `<p>In <strong>Call Me Da Sheng</strong>, players embody the legendary Monkey King while stream viewers influence his journey through ancient China. Through viewer interactions, the Monkey King can unlock new abilities, discover hidden paths, and face increasingly challenging mythical adversaries in this unique blend of action and audience participation.</p>`
      },
      de: {
        title: 'Nennt mich Da Sheng: Gestalte das Schicksal des Affenkönigs',
        description: 'Ein interaktives Die Reise nach Westen-Abenteuer, bei dem Zuschauer den Affenkönig durch Herausforderungen und Kämpfe führen',
        story: `<p>In <strong>Nennt mich Da Sheng</strong> verkörpern Spieler den legendären Affenkönig, während Stream-Zuschauer seine Reise durch das alte China beeinflussen. Durch Zuschauerinteraktionen kann der Affenkönig neue Fähigkeiten freischalten und sich mythischen Gegnern stellen.</p>`
      },
      fr: {
        title: 'Appelez-moi Da Sheng: Façonnez le Destin du Roi Singe',
        description: 'Une aventure interactive du Voyage vers l\'Ouest où les spectateurs aident à guider le Roi Singe à travers défis et batailles',
        story: `<p>Dans <strong>Appelez-moi Da Sheng</strong>, les joueurs incarnent le légendaire Roi Singe tandis que les spectateurs influencent son voyage à travers la Chine ancienne. Les interactions des spectateurs permettent au Roi Singe de débloquer de nouvelles capacités et d'affronter des adversaires mythiques.</p>`
      },
      ru: {
        title: 'Зовите Меня Да Шэн: Определи Судьбу Короля Обезьян',
        description: 'Интерактивное приключение по мотивам Путешествия на Запад, где зрители помогают направлять Короля Обезьян через испытания и битвы',
        story: `<p>В <strong>Зовите Меня Да Шэн</strong> игроки воплощают легендарного Короля Обезьян, а зрители влияют на его путешествие по древнему Китаю. Благодаря взаимодействию со зрителями, Король Обезьян может открывать новые способности и сражаться с мифическими противниками.</p>`
      },
      zh: {
        title: '叫我大圣：决定齐天大圣的命运',
        description: '一场互动的西游记冒险，观众帮助指引齐天大圣度过挑战和战斗',
        story: `<p>在<strong>叫我大圣</strong>中，玩家化身传奇齐天大圣，而直播观众影响他穿越古代中国的旅程。通过观众互动，齐天大圣可以解锁新能力，发现隐藏路径，面对越来越具挑战性的神话对手。</p>`
      },
      ar: {
        title: 'نادوني دا شنغ: شكّل مصير ملك القرود',
        description: 'مغامرة تفاعلية في رحلة إلى الغرب حيث يساعد المشاهدون في توجيه ملك القرود عبر التحديات والمعارك',
        story: `<p>في <strong>نادوني دا شنغ</strong>، يتجسد اللاعبون في شخصية ملك القرود الأسطوري بينما يؤثر المشاهدون على رحلته عبر الصين القديمة. من خلال تفاعلات المشاهدين، يمكن لملك القرود فتح قدرات جديدة واكتشاف مسارات خفية ومواجهة خصوم أسطوريين.</p>`
      },
      vi: {
        title: 'Gọi Ta Là Đại Thánh: Định Hình Số Phận Của Tề Thiên Đại Thánh',
        description: 'Cuộc phiêu lưu Tây Du Ký tương tác nơi người xem giúp dẫn dắt Tề Thiên Đại Thánh vượt qua thử thách và trận chiến',
        story: `<p>Trong <strong>Gọi Ta Là Đại Thánh</strong>, người chơi nhập vai Tề Thiên Đại Thánh huyền thoại trong khi người xem stream ảnh hưởng đến hành trình của anh ta qua Trung Quốc cổ đại. Thông qua tương tác của người xem, Tề Thiên có thể mở khóa khả năng mới và đối mặt với những đối thủ thần thoại.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 (64-bit) or Android 8.0+',
        processor: 'Intel Core i3-6100 or AMD FX-4350',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit) or Android 10.0+',
        processor: 'Intel Core i5-7400 or AMD Ryzen 3 1300X',
        memory: '8 GB RAM'
      }
    }
  }
];