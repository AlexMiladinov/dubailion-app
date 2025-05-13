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
        story: `<p><strong>Battle of Heroes</strong> is a live-streaming PvP game where viewers actively join the fight. With just a comment or like, fans choose sides, summon warriors, and shape the outcome live.</p>`
      },
      de: {
        title: 'Kampf der Helden: Streamen, Wettkämpfen, Erobern',
        description: 'Ein intensives PvP-Spiel für Gamer, die für den Wettkampf leben',
        story: `<p><strong>Kampf der Helden</strong> ist ein Live-Streaming-PvP-Spiel, bei dem Zuschauer aktiv am Kampf teilnehmen können.</p>`
      },
      fr: {
        title: 'Bataille des Héros: Stream, Compétition, Conquête',
        description: 'Un jeu PvP haute intensité conçu pour les joueurs qui vivent pour la compétition',
        story: `<p><strong>Bataille des Héros</strong> est un jeu PvP en streaming en direct où les spectateurs participent activement au combat.</p>`
      },
      ru: {
        title: 'Битва Героев: Стрим, Соревнование, Завоевание',
        description: 'Высокоинтенсивная PvP игра для геймеров, живущих соревнованиями',
        story: `<p><strong>Битва Героев</strong> - это PvP игра с прямой трансляцией, где зрители активно участвуют в сражении.</p>`
      },
      zh: {
        title: '英雄之战：直播、竞技、征服',
        description: '为热爱竞技的玩家打造的高强度PvP游戏',
        story: `<p><strong>英雄之战</strong>是一款直播PvP游戏，观众可以积极参与战斗。</p>`
      },
      ar: {
        title: 'معركة الأبطال: بث مباشر، منافسة، فتح',
        description: 'لعبة قتال عالية الحدة مصممة للاعبين الذين يعيشون للمنافسة',
        story: `<p><strong>معركة الأبطال</strong> هي لعبة قتال مباشرة حيث ينضم المشاهدون بنشاط إلى المعركة.</p>`
      },
      vi: {
        title: 'Trận Chiến Anh Hùng: Stream, Thi Đấu, Chinh Phục',
        description: 'Trò chơi PvP cường độ cao dành cho game thủ đam mê thi đấu',
        story: `<p><strong>Trận Chiến Anh Hùng</strong> là trò chơi PvP trực tiếp nơi người xem tích cực tham gia vào trận chiến.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 (64-bit)',
        processor: 'Intel Core i5-4460 or AMD FX-6300',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i7-7700K or AMD Ryzen 5 1600',
        memory: '16 GB RAM'
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
        description: 'Ein strategisches Verteidigungsspiel mit Einheiten-Beschwörung durch Geschenke',
        story: `<p>In Block Rush nehmen Spieler an einem strategischen Verteidigungsspiel teil, bei dem sie Einheiten durch Geschenke beschwören und verbessern.</p>`
      },
      fr: {
        title: 'Block Rush: Confrontation Stratégique par Cadeaux',
        description: 'Un jeu de défense stratégique où les joueurs invoquent des unités grâce aux cadeaux',
        story: `<p>Dans Block Rush, les joueurs participent à un jeu de défense stratégique où ils invoquent et améliorent des unités grâce aux cadeaux.</p>`
      },
      ru: {
        title: 'Block Rush: Стратегическая Битва Подарков',
        description: 'Стратегическая игра, где игроки призывают отряды с помощью подарков',
        story: `<p>В Block Rush игроки участвуют в стратегической оборонительной игре, где призывают и улучшают отряды с помощью подарков.</p>`
      },
      zh: {
        title: '方块冲锋：礼物驱动的策略对决',
        description: '一款通过游戏内礼物召唤和升级单位的策略防御游戏',
        story: `<p>在方块冲锋中，玩家参与策略防御游戏，通过礼物召唤和升级单位。</p>`
      },
      ar: {
        title: 'بلوك راش: معركة استراتيجية مدعومة بالهدايا',
        description: 'لعبة دفاع استراتيجية حيث يستدعي اللاعبون الوحدات من خلال الهدايا',
        story: `<p>في بلوك راش، يشارك اللاعبون في لعبة دفاع استراتيجية حيث يستدعون ويطورون الوحدات باستخدام الهدايا.</p>`
      },
      vi: {
        title: 'Block Rush: Đối Đầu Chiến Lược Bằng Quà Tặng',
        description: 'Trò chơi phòng thủ chiến lược với triệu hồi đơn vị thông qua quà tặng',
        story: `<p>Trong Block Rush, người chơi tham gia trò chơi phòng thủ chiến lược nơi họ triệu hồi và nâng cấp đơn vị bằng quà tặng.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-4400E or AMD FX-6300',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i7-6700 or AMD Ryzen 5 2600',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 3,
    title: 'Dragon Ball Duel: A New Era of Dragon Ball Combat Awaits',
    imageUrl: '/assets/Dragon Ball Duel_ A New Era of Dragon Ball Combat Awaits.jpg',
    description: 'Experience the next evolution of Dragon Ball combat with interactive streaming features',
    platform: 'PC & Mobile',
    translations: {
      en: {
        title: 'Dragon Ball Duel: A New Era of Dragon Ball Combat Awaits',
        description: 'Experience the next evolution of Dragon Ball combat with interactive streaming features',
        story: `<p>Enter the world of Dragon Ball like never before in this revolutionary combat game. Viewers can directly influence battles by sending energy, summoning support characters, and triggering iconic Dragon Ball moments.</p>`
      },
      de: {
        title: 'Dragon Ball Duell: Eine neue Ära des Dragon Ball Kampfes erwartet dich',
        description: 'Erlebe die nächste Evolution des Dragon Ball Kampfes mit interaktiven Streaming-Funktionen',
        story: `<p>Betritt die Welt von Dragon Ball wie nie zuvor in diesem revolutionären Kampfspiel. Zuschauer können Kämpfe direkt beeinflussen.</p>`
      },
      fr: {
        title: 'Dragon Ball Duel: Une Nouvelle Ère de Combat Dragon Ball',
        description: 'Découvrez l\'évolution du combat Dragon Ball avec des fonctionnalités de streaming interactives',
        story: `<p>Entrez dans le monde de Dragon Ball comme jamais auparavant dans ce jeu de combat révolutionnaire. Les spectateurs peuvent influencer directement les combats.</p>`
      },
      ru: {
        title: 'Dragon Ball Дуэль: Новая Эра Сражений Dragon Ball',
        description: 'Испытайте следующую эволюцию боёв Dragon Ball с интерактивными функциями стриминга',
        story: `<p>Войдите в мир Dragon Ball как никогда раньше в этой революционной боевой игре. Зрители могут напрямую влиять на сражения.</p>`
      },
      zh: {
        title: '龙珠对决：龙珠战斗的新纪元',
        description: '体验具有互动直播功能的下一代龙珠战斗',
        story: `<p>在这款革命性的格斗游戏中以前所未有的方式进入龙珠世界。观众可以直接影响战斗。</p>`
      },
      ar: {
        title: 'دراغون بول ديول: حقبة جديدة من قتال دراغون بول',
        description: 'اختبر التطور التالي لقتال دراغون بول مع ميزات البث التفاعلي',
        story: `<p>ادخل عالم دراغون بول كما لم تشهده من قبل في هذه اللعبة القتالية الثورية. يمكن للمشاهدين التأثير مباشرة على المعارك.</p>`
      },
      vi: {
        title: 'Dragon Ball Đối Đầu: Kỷ Nguyên Mới của Chiến Đấu Dragon Ball',
        description: 'Trải nghiệm sự tiến hóa tiếp theo của Dragon Ball với tính năng stream tương tác',
        story: `<p>Bước vào thế giới Dragon Ball theo cách chưa từng có trong trò chơi chiến đấu mang tính cách mạng này. Người xem có thể trực tiếp ảnh hưởng đến các trận chiến.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit / Android 8.0+ / iOS 13.0+',
        processor: 'Intel Core i5-6600K or AMD Ryzen 3 3300X',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit / Android 10.0+ / iOS 14.0+',
        processor: 'Intel Core i7-8700K or AMD Ryzen 5 5600X',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 4,
    title: 'Honor of Kings: Command Legends. Conquer the Arena',
    imageUrl: '/assets/Honor of Kings_ Command Legends. Conquer the Arena.jpg',
    description: 'Lead legendary heroes in epic 5v5 battles with viewer interaction',
    platform: 'Mobile',
    translations: {
      en: {
        title: 'Honor of Kings: Command Legends. Conquer the Arena',
        description: 'Lead legendary heroes in epic 5v5 battles with viewer interaction',
        story: `<p>Command powerful heroes in intense 5v5 battles where stream viewers can influence the tide of war. Choose from a vast roster of legendary characters, each with unique abilities and playstyles.</p>`
      },
      de: {
        title: 'Ehre der Könige: Befehlige Legenden. Erobere die Arena',
        description: 'Führe legendäre Helden in epischen 5v5 Schlachten mit Zuschauer-Interaktion',
        story: `<p>Befehlige mächtige Helden in intensiven 5v5 Schlachten, bei denen Stream-Zuschauer den Kriegsverlauf beeinflussen können.</p>`
      },
      fr: {
        title: 'L\'Honneur des Rois: Commandez des Légendes. Conquérez l\'Arène',
        description: 'Dirigez des héros légendaires dans des batailles épiques 5v5 avec interaction des spectateurs',
        story: `<p>Commandez des héros puissants dans des batailles intenses 5v5 où les spectateurs peuvent influencer le cours de la guerre.</p>`
      },
      ru: {
        title: 'Честь Королей: Командуй Легендами. Покори Арену',
        description: 'Веди легендарных героев в эпических 5v5 сражениях с взаимодействием зрителей',
        story: `<p>Командуй могущественными героями в интенсивных 5v5 сражениях, где зрители стрима могут влиять на ход войны.</p>`
      },
      zh: {
        title: '王者荣耀：指挥传奇，征服竞技场',
        description: '在观众互动的史诗5v5战斗中率领传奇英雄',
        story: `<p>在激烈的5v5战斗中指挥强大的英雄，直播观众可以影响战争走向。从众多传奇角色中选择，每个角色都有独特的能力和玩法。</p>`
      },
      ar: {
        title: 'شرف الملوك: قيادة الأساطير. احتل الساحة',
        description: 'قد الأبطال الأسطوريين في معارك ملحمية 5v5 مع تفاعل المشاهدين',
        story: `<p>قم بقيادة أبطال أقوياء في معارك 5v5 مكثفة حيث يمكن لمشاهدي البث التأثير على مجرى الحرب.</p>`
      },
      vi: {
        title: 'Danh Dự Các Vua: Chỉ Huy Huyền Thoại. Chinh Phục Đấu Trường',
        description: 'Dẫn dắt các anh hùng huyền thoại trong trận chiến 5v5 hoành tráng với tương tác người xem',
        story: `<p>Chỉ huy các anh hùng mạnh mẽ trong các trận chiến 5v5 căng thẳng nơi người xem stream có thể ảnh hưởng đến thế trận.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Android 5.1+ / iOS 11.0+',
        processor: 'Snapdragon 665 or equivalent',
        memory: '3 GB RAM'
      },
      recommended: {
        os: 'Android 8.0+ / iOS 13.0+',
        processor: 'Snapdragon 732G or equivalent',
        memory: '4 GB RAM'
      }
    }
  },
  {
    id: 5,
    title: 'Mars Colliding with Earth 2: Stream. Battle. Conquer Worlds',
    imageUrl: '/assets/Mars Colliding with Earth 2_ Stream. Battle. Conquer Worlds.jpg',
    description: 'Command interplanetary forces in this epic sci-fi strategy game with viewer participation',
    platform: 'PC',
    translations: {
      en: {
        title: 'Mars Colliding with Earth 2: Stream. Battle. Conquer Worlds',
        description: 'Command interplanetary forces in this epic sci-fi strategy game with viewer participation',
        story: `<p>Take command in an interplanetary conflict where Earth and Mars clash for supremacy. Stream viewers can influence battles by providing resources, activating special abilities, and choosing strategic targets.</p>`
      },
      de: {
        title: 'Mars kollidiert mit der Erde 2: Streamen. Kämpfen. Welten erobern',
        description: 'Befehlige interplanetare Streitkräfte in diesem epischen Sci-Fi-Strategiespiel mit Zuschauerbeteiligung',
        story: `<p>Übernimm das Kommando in einem interplanetaren Konflikt, in dem die Erde und der Mars um die Vorherrschaft kämpfen.</p>`
      },
      fr: {
        title: 'Mars en Collision avec la Terre 2: Stream. Bataille. Conquête des Mondes',
        description: 'Commandez des forces interplanétaires dans ce jeu de stratégie épique de science-fiction avec participation des spectateurs',
        story: `<p>Prenez le commandement dans un conflit interplanétaire où la Terre et Mars s\'affrontent pour la suprématie.</p>`
      },
      ru: {
        title: 'Столкновение Марса с Землей 2: Стрим. Битва. Завоевание Миров',
        description: 'Командуй межпланетными силами в этой эпической научно-фантастической стратегии с участием зрителей',
        story: `<p>Возьми командование в межпланетном конфликте, где Земля и Марс сражаются за превосходство.</p>`
      },
      zh: {
        title: '火星撞地球2：直播、战斗、征服世界',
        description: '在这款史诗级科幻策略游戏中指挥星际部队，观众可以参与其中',
        story: `<p>在地球与火星争夺霸权的星际冲突中担任指挥官。直播观众可以通过提供资源、激活特殊能力和选择战略目标来影响战斗。</p>`
      },
      ar: {
        title: 'المريخ يصطدم بالأرض 2: بث. معركة. غزو العوالم',
        description: 'قم بقيادة القوات بين الكواكب في هذه اللعبة الاستراتيجية الملحمية للخيال العلمي مع مشاركة المشاهدين',
        story: `<p>تولى القيادة في صراع بين الكواكب حيث تتصارع الأرض والمريخ من أجل السيادة.</p>`
      },
      vi: {
        title: 'Sao Hỏa Va Chạm Trái Đất 2: Stream. Chiến Đấu. Chinh Phục Thế Giới',
        description: 'Chỉ huy lực lượng liên hành tinh trong trò chơi chiến thuật khoa học viễn tưởng hoành tráng này với sự tham gia của người xem',
        story: `<p>Nắm quyền chỉ huy trong cuộc xung đột liên hành tinh nơi Trái Đất và Sao Hỏa đụng độ giành quyền thống trị.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-9400F or AMD Ryzen 5 2600',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i7-10700K or AMD Ryzen 7 5800X',
        memory: '16 GB RAM'
      }
    }
  }
];