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
        story: `<p><strong>Battle of Heroes</strong> is a live-streaming PvP game inspired by the Three Kingdoms era, where viewers actively join the fight. With just a comment or like, fans choose sides, summon warriors, legendary generals and shape the outcome live.</p>`
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
  // ... [Previous games 2-30 remain unchanged]
  {
    id: 31,
    title: "Color War",
    imageUrl: "/assets/Color War.jpg",
    description: "Paint your way to victory in this vibrant multiplayer battle arena",
    platform: "PC",
    translations: {
      en: {
        title: "Color War",
        description: "Paint your way to victory in this vibrant multiplayer battle arena",
        story: `<p>Enter a world where color is your weapon. Paint the arena, claim territory, and outmaneuver your opponents in this fast-paced multiplayer showdown.</p>`
      },
      de: {
        title: "Farbenkrieg",
        description: "Male deinen Weg zum Sieg in dieser lebendigen Mehrspieler-Kampfarena",
        story: `<p>Betritt eine Welt, in der Farbe deine Waffe ist. Male die Arena, beanspruche Territorium und überlistet deine Gegner in diesem schnellen Mehrspieler-Showdown.</p>`
      },
      fr: {
        title: "Guerre des Couleurs",
        description: "Peignez votre chemin vers la victoire dans cette arène de bataille multijoueur vibrante",
        story: `<p>Entrez dans un monde où la couleur est votre arme. Peignez l'arène, revendiquez du territoire et surpassez vos adversaires dans cet affrontement multijoueur rapide.</p>`
      },
      ru: {
        title: "Война Красок",
        description: "Прокладывайте путь к победе красками в этой яркой многопользовательской боевой арене",
        story: `<p>Войдите в мир, где цвет - ваше оружие. Раскрасьте арену, захватите территорию и перехитрите противников в этой динамичной многопользовательской схватке.</p>`
      },
      zh: {
        title: "色彩战争",
        description: "在这个充满活力的多人战斗竞技场中用绘画赢得胜利",
        story: `<p>进入一个颜色就是武器的世界。在这场快节奏的多人对决中绘制竞技场，占领领地，智胜对手。</p>`
      },
      ar: {
        title: "حرب الألوان",
        description: "ارسم طريقك نحو النصر في ساحة معركة متعددة اللاعبين نابضة بالحياة",
        story: `<p>ادخل عالماً حيث اللون هو سلاحك. ارسم الساحة، اطالب بالأراضي، وتفوق على خصومك في هذه المواجهة السريعة متعددة اللاعبين.</p>`
      },
      vi: {
        title: "Chiến Tranh Sắc Màu",
        description: "Vẽ con đường đến chiến thắng trong đấu trường nhiều người chơi sống động này",
        story: `<p>Bước vào thế giới nơi màu sắc là vũ khí của bạn. Vẽ đấu trường, giành lãnh thổ và vượt qua đối thủ trong cuộc đối đầu nhiều người chơi nhịp độ nhanh này.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10",
        processor: "Intel Core i3-3220 or AMD FX-4350",
        memory: "4 GB RAM"
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i5-6600 or AMD Ryzen 3 1300X",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 32,
    title: "Legion Clash",
    imageUrl: "/assets/Legion Clash.jpg",
    description: "Command vast armies in epic real-time strategy battles",
    platform: "PC",
    translations: {
      en: {
        title: "Legion Clash",
        description: "Command vast armies in epic real-time strategy battles",
        story: `<p>Lead your legion to glory in massive-scale battles. Deploy units strategically, manage resources, and outmaneuver your opponents in this intense RTS experience.</p>`
      },
      de: {
        title: "Legion Zusammenstoß",
        description: "Befehlige riesige Armeen in epischen Echtzeit-Strategieschlachten",
        story: `<p>Führe deine Legion in gewaltigen Schlachten zum Ruhm. Setze Einheiten strategisch ein, verwalte Ressourcen und überlistet deine Gegner in diesem intensiven RTS-Erlebnis.</p>`
      },
      fr: {
        title: "Choc des Légions",
        description: "Commandez de vastes armées dans des batailles de stratégie épiques en temps réel",
        story: `<p>Menez votre légion à la gloire dans des batailles à grande échelle. Déployez des unités stratégiquement, gérez les ressources et surpassez vos adversaires dans cette expérience STR intense.</p>`
      },
      ru: {
        title: "Столкновение Легионов",
        description: "Командуйте огромными армиями в эпических стратегических сражениях в реальном времени",
        story: `<p>Ведите свой легион к славе в масштабных сражениях. Стратегически размещайте отряды, управляйте ресурсами и перехитрите противников в этой напряженной RTS-игре.</p>`
      },
      zh: {
        title: "军团冲突",
        description: "在史诗级即时战略战斗中指挥庞大军队",
        story: `<p>在大规模战斗中带领你的军团走向荣耀。在这个紧张的即时战略体验中战略性地部署单位，管理资源，智胜对手。</p>`
      },
      ar: {
        title: "صدام الفيالق",
        description: "قُد جيوشاً ضخمة في معارك استراتيجية ملحمية في الوقت الحقيقي",
        story: `<p>قُد فيلقك إلى المجد في معارك واسعة النطاق. انشر الوحدات بشكل استراتيجي، أدر الموارد، وتفوق على خصومك في هذه التجربة الاستراتيجية المكثفة في الوقت الحقيقي.</p>`
      },
      vi: {
        title: "Đụng Độ Quân Đoàn",
        description: "Chỉ huy các đội quân khổng lồ trong các trận chiến chiến lược thời gian thực hoành tráng",
        story: `<p>Dẫn dắt quân đoàn của bạn đến vinh quang trong các trận chiến quy mô lớn. Triển khai đơn vị một cách chiến lược, quản lý tài nguyên và vượt qua đối thủ trong trải nghiệm RTS gay cấn này.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K or AMD Ryzen 7 3700X",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 33,
    title: "Legion Clash 2",
    imageUrl: "/assets/Legion Clash 2.jpg",
    description: "The epic sequel to the legendary strategy battle game",
    platform: "PC",
    translations: {
      en: {
        title: "Legion Clash 2",
        description: "The epic sequel to the legendary strategy battle game",
        story: `<p>Return to the battlefield with enhanced graphics, new units, and deeper strategic gameplay. Lead your enhanced legion through challenging campaigns and intense multiplayer battles.</p>`
      },
      de: {
        title: "Legion Zusammenstoß 2",
        description: "Die epische Fortsetzung des legendären Strategiespiels",
        story: `<p>Kehre mit verbesserter Grafik, neuen Einheiten und tiefergehendem strategischen Gameplay auf das Schlachtfeld zurück. Führe deine verbesserte Legion durch herausfordernde Kampagnen und intensive Mehrspielerschlachten.</p>`
      },
      fr: {
        title: "Choc des Légions 2",
        description: "La suite épique du légendaire jeu de bataille stratégique",
        story: `<p>Retournez sur le champ de bataille avec des graphismes améliorés, de nouvelles unités et un gameplay stratégique plus profond. Dirigez votre légion améliorée à travers des campagnes stimulantes et des batailles multijoueurs intenses.</p>`
      },
      ru: {
        title: "Столкновение Легионов 2",
        description: "Эпическое продолжение легендарной стратегической боевой игры",
        story: `<p>Вернитесь на поле боя с улучшенной графикой, новыми отрядами и более глубоким стратегическим геймплеем. Ведите свой усовершенствованный легион через сложные кампании и напряженные многопользовательские сражения.</p>`
      },
      zh: {
        title: "军团冲突2",
        description: "传奇战略战斗游戏的史诗续作",
        story: `<p>以增强的图形、新单位和更深层的战略游戏玩法重返战场。带领你的增强军团完成具有挑战性的战役和激烈的多人战斗。</p>`
      },
      ar: {
        title: "صدام الفيالق 2",
        description: "التكملة الملحمية للعبة المعارك الاستراتيجية الأسطورية",
        story: `<p>عُد إلى ساحة المعركة مع رسومات محسنة، وحدات جديدة، وأسلوب لعب استراتيجي أعمق. قُد فيلقك المحسن عبر حملات صعبة ومعارك متعددة اللاعبين مكثفة.</p>`
      },
      vi: {
        title: "Đụng Độ Quân Đoàn 2",
        description: "Phần tiếp theo hoành tráng của trò chơi chiến đấu chiến lược huyền thoại",
        story: `<p>Trở lại chiến trường với đồ họa nâng cao, các đơn vị mới và lối chơi chiến lược sâu sắc hơn. Dẫn dắt quân đoàn được nâng cấp của bạn qua các chiến dịch đầy thử thách và các trận chiến nhiều người chơi gay cấn.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 or AMD Ryzen 5 2600",
        memory: "12 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-9700K or AMD Ryzen 7 3700X",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 34,
    title: "Unified Kingdom",
    imageUrl: "/assets/Unified Kingdom.jpg",
    description: "Build and manage your medieval kingdom in this grand strategy game",
    platform: "PC",
    translations: {
      en: {
        title: "Unified Kingdom",
        description: "Build and manage your medieval kingdom in this grand strategy game",
        story: `<p>Create and expand your medieval empire through diplomacy, warfare, and economic management. Make crucial decisions that will shape the destiny of your kingdom.</p>`
      },
      de: {
        title: "Vereinigtes Königreich",
        description: "Baue und verwalte dein mittelalterliches Königreich in diesem großen Strategiespiel",
        story: `<p>Erschaffe und erweitere dein mittelalterliches Reich durch Diplomatie, Kriegsführung und Wirtschaftsmanagement. Triff wichtige Entscheidungen, die das Schicksal deines Königreichs bestimmen werden.</p>`
      },
      fr: {
        title: "Royaume Unifié",
        description: "Construisez et gérez votre royaume médiéval dans ce grand jeu de stratégie",
        story: `<p>Créez et étendez votre empire médiéval par la diplomatie, la guerre et la gestion économique. Prenez des décisions cruciales qui façonneront le destin de votre royaume.</p>`
      },
      ru: {
        title: "Объединённое Королевство",
        description: "Постройте и управляйте своим средневековым королевством в этой масштабной стратегической игре",
        story: `<p>Создайте и расширьте свою средневековую империю через дипломатию, войну и экономическое управление. Принимайте важные решения, которые определят судьбу вашего королевства.</p>`
      },
      zh: {
        title: "统一王国",
        description: "在这款宏大的战略游戏中建设和管理你的中世纪王国",
        story: `<p>通过外交、战争和经济管理创建并扩展你的中世纪帝国。做出将塑造你王国命运的关键决定。</p>`
      },
      ar: {
        title: "المملكة الموحدة",
        description: "ابنِ وأدر مملكتك في العصور الوسطى في هذه اللعبة الاستراتيجية الكبرى",
        story: `<p>أنشئ ووسع إمبراطوريتك في العصور الوسطى من خلال الدبلوماسية والحرب والإدارة الاقتصادية. اتخذ قرارات حاسمة ستشكل مصير مملكتك.</p>`
      },
      vi: {
        title: "Vương Quốc Thống Nhất",
        description: "Xây dựng và quản lý vương quốc trung cổ của bạn trong trò chơi chiến lược quy mô lớn này",
        story: `<p>Tạo dựng và mở rộng đế chế trung cổ của bạn thông qua ngoại giao, chiến tranh và quản lý kinh tế. Đưa ra những quyết định quan trọng sẽ định hình số phận của vương quốc của bạn.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10",
        processor: "Intel Core i5-4460 or AMD FX-6300",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i7-7700 or AMD Ryzen 5 1600",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 35,
    title: "King of Soldiers",
    imageUrl: "/assets/King of Soldiers.jpg",
    description: "Lead your army to victory in this tactical combat game",
    platform: "PC",
    translations: {
      en: {
        title: "King of Soldiers",
        description: "Lead your army to victory in this tactical combat game",
        story: `<p>Take command of elite military units in modern warfare scenarios. Use advanced tactics and strategic planning to overcome challenging missions and emerge victorious.</p>`
      },
      de: {
        title: "König der Soldaten",
        description: "Führe deine Armee in diesem taktischen Kampfspiel zum Sieg",
        story: `<p>Übernimm das Kommando über Elite-Militäreinheiten in modernen Kriegsszenarien. Nutze fortgeschrittene Taktiken und strategische Planung, um herausfordernde Missionen zu meistern und siegreich hervorzugehen.</p>`
      },
      fr: {
        title: "Roi des Soldats",
        description: "Menez votre armée à la victoire dans ce jeu de combat tactique",
        story: `<p>Prenez le commandement d'unités militaires d'élite dans des scénarios de guerre moderne. Utilisez des tactiques avancées et une planification stratégique pour surmonter des missions difficiles et sortir victorieux.</p>`
      },
      ru: {
        title: "Король Солдат",
        description: "Ведите свою армию к победе в этой тактической боевой игре",
        story: `<p>Возьмите под командование элитные военные подразделения в сценариях современной войны. Используйте продвинутую тактику и стратегическое планирование, чтобы преодолеть сложные миссии и выйти победителем.</p>`
      },
      zh: {
        title: "士兵之王",
        description: "在这款战术战斗游戏中带领你的军队走向胜利",
        story: `<p>在现代战争场景中指挥精英军事单位。使用先进的战术和战略规划来克服具有挑战性的任务并取得胜利。</p>`
      },
      ar: {
        title: "ملك الجنود",
        description: "قُد جيشك إلى النصر في هذه اللعبة القتالية التكتيكية",
        story: `<p>تولَّ قيادة وحدات عسكرية نخبوية في سيناريوهات الحرب الحديثة. استخدم التكتيكات المتقدمة والتخطيط الاستراتيجي للتغلب على المهام الصعبة والخروج منتصراً.</p>`
      },
      vi: {
        title: "Vua Của Binh Lính",
        description: "Dẫn dắt quân đội của bạn đến chiến thắng trong trò chơi chiến đấu chiến thuật này",
        story: `<p>Nắm quyền chỉ huy các đơn vị quân đội tinh nhuệ trong các kịch bản chiến tranh hiện đại. Sử dụng chiến thuật tiên tiến và lập kế hoạch chiến lược để vượt qua các nhiệm vụ đầy thử thách và giành chiến thắng.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K or AMD Ryzen 7 3700X",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 36,
    title: "Wulin Showdown",
    imageUrl: "/assets/Wulin Showdown – The Ultimate Interactive Martial Arts Livestream Battle Game.jpg",
    description: "Experience the ultimate martial arts combat in this interactive battle game",
    platform: "PC",
    translations: {
      en: {
        title: "Wulin Showdown",
        description: "Experience the ultimate martial arts combat in this interactive battle game",
        story: `<p>Enter the world of ancient martial arts where skill, strategy, and timing determine victory. Master various fighting styles and compete against other players in intense duels.</p>`
      },
      de: {
        title: "Wulin Showdown",
        description: "Erlebe den ultimativen Kampfkunst-Kampf in diesem interaktiven Kampfspiel",
        story: `<p>Tritt ein in die Welt der alten Kampfkünste, wo Geschick, Strategie und Timing den Sieg bestimmen. Meistere verschiedene Kampfstile und tritt in intensiven Duellen gegen andere Spieler an.</p>`
      },
      fr: {
        title: "Confrontation Wulin",
        description: "Vivez le combat d'arts martiaux ultime dans ce jeu de bataille interactif",
        story: `<p>Entrez dans le monde des arts martiaux anciens où l'habileté, la stratégie et le timing déterminent la victoire. Maîtrisez différents styles de combat et affrontez d'autres joueurs dans des duels intenses.</p>`
      },
      ru: {
        title: "Противостояние Улинь",
        description: "Испытайте непревзойденный боевой опыт боевых искусств в этой интерактивной боевой игре",
        story: `<p>Войдите в мир древних боевых искусств, где мастерство, стратегия и время определяют победу. Освойте различные стили боя и соревнуйтесь с другими игроками в напряженных поединках.</p>`
      },
      zh: {
        title: "武林决战",
        description: "在这款互动战斗游戏中体验终极武术格斗",
        story: `<p>进入古代武术的世界，在这里技巧、策略和时机决定胜负。掌握各种战斗风格，在激烈的决斗中与其他玩家竞争。</p>`
      },
      ar: {
        title: "مواجهة وولين",
        description: "اختبر القتال النهائي للفنون القتالية في هذه اللعبة القتالية التفاعلية",
        story: `<p>ادخل عالم الفنون القتالية القديمة حيث تحدد المهارة والاستراتيجية والتوقيت النصر. أتقن أساليب قتال مختلفة وتنافس مع لاعبين آخرين في مبارزات مكثفة.</p>`
      },
      vi: {
        title: "Quyết Đấu Võ Lâm",
        description: "Trải nghiệm võ thuật tối thượng trong trò chơi chiến đấu tương tác này",
        story: `<p>Bước vào thế giới võ thuật cổ xưa nơi kỹ năng, chiến lược và thời điểm quyết định chiến thắng. Làm chủ các phong cách chiến đấu khác nhau và thi đấu với người chơi khác trong các trận đấu gay cấn.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-7500 or AMD Ryzen 5 1600",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-9700K or AMD Ryzen 7 3700X",
        memory: "16 GB RAM"
      }
    }
  }
];