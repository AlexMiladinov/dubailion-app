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
  {
    id: 3,
    title: 'Island Rush: Livestream Tower Defense Chaos',
    imageUrl: '/assets/Island Rush_ Livestream Tower Defense Chaos.jpg',
    description: 'A dynamic tower defense game where stream viewers influence the battlefield',
    platform: 'PC / Mobile',
    translations: {
      en: {
        title: 'Island Rush: Livestream Tower Defense Chaos',
        description: 'A dynamic tower defense game where stream viewers influence the battlefield',
        story: `<p>In <strong>Island Rush</strong>, streamers defend their island paradise while viewers send waves of challenges their way. Every donation and chat message can either help fortify defenses or unleash chaos, creating an ever-changing battlefield where community interaction directly shapes the game's outcome.</p>`
      },
      de: {
        title: 'Island Rush: Livestream Turmverteidigung Chaos',
        description: 'Ein dynamisches Turmverteidigungsspiel, bei dem Stream-Zuschauer das Schlachtfeld beeinflussen',
        story: `<p>In <strong>Island Rush</strong> verteidigen Streamer ihr Inselparadies, während Zuschauer Wellen von Herausforderungen senden. Jede Spende und Chatnachricht kann entweder die Verteidigung stärken oder Chaos entfesseln.</p>`
      },
      fr: {
        title: 'Island Rush: Chaos de Défense de Tour en Direct',
        description: 'Un jeu de défense de tour dynamique où les spectateurs influencent le champ de bataille',
        story: `<p>Dans <strong>Island Rush</strong>, les streamers défendent leur paradis insulaire pendant que les spectateurs envoient des vagues de défis. Chaque don et message peut soit renforcer les défenses, soit déclencher le chaos.</p>`
      },
      ru: {
        title: 'Island Rush: Хаос Башенной Обороны в Прямом Эфире',
        description: 'Динамичная игра в жанре tower defense, где зрители стрима влияют на поле боя',
        story: `<p>В <strong>Island Rush</strong> стримеры защищают свой райский остров, пока зрители посылают волны испытаний. Каждое пожертвование и сообщение в чате может либо укрепить оборону, либо выпустить хаос.</p>`
      },
      zh: {
        title: '岛屿冲锋：直播塔防混战',
        description: '一款动态塔防游戏，观众可以影响战场局势',
        story: `<p>在<strong>岛屿冲锋</strong>中，主播保卫他们的岛屿天堂，而观众则发送层层挑战。每个打赏和聊天消息都可能加强防御或释放混乱。</p>`
      },
      ar: {
        title: 'جزيرة راش: فوضى دفاع البرج المباشر',
        description: 'لعبة دفاع برجية ديناميكية حيث يؤثر المشاهدون على ساحة المعركة',
        story: `<p>في <strong>جزيرة راش</strong>، يدافع البث المباشر عن جنتهم الجزيرية بينما يرسل المشاهدون موجات من التحديات. كل تبرع ورسالة دردشة يمكن أن تعزز الدفاعات أو تطلق الفوضى.</p>`
      },
      vi: {
        title: 'Island Rush: Hỗn Loạn Phòng Thủ Tháp Trực Tiếp',
        description: 'Trò chơi phòng thủ tháp năng động nơi người xem stream ảnh hưởng đến chiến trường',
        story: `<p>Trong <strong>Island Rush</strong>, streamer bảo vệ thiên đường đảo của họ trong khi người xem gửi các đợt thách thức. Mỗi đóng góp và tin nhắn chat có thể củng cố phòng thủ hoặc giải phóng hỗn loạn.</p>`
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
    id: 4,
    title: 'Protect the Princess: The Crown Will Choose',
    imageUrl: '/assets/Protect the Princess_ The Crown Will Choose.jpg',
    description: 'A strategic tower defense game where players protect the princess while viewers influence the outcome',
    platform: 'PC / Mobile',
    translations: {
      en: {
        title: 'Protect the Princess: The Crown Will Choose',
        description: 'A strategic tower defense game where players protect the princess while viewers influence the outcome',
        story: `<p>In <strong>Protect the Princess</strong>, players must defend their royal charge against waves of enemies while stream viewers can either aid the defense or support the attacking forces. Every decision matters as the fate of the kingdom hangs in the balance.</p>`
      },
      de: {
        title: 'Beschütze die Prinzessin: Die Krone wird entscheiden',
        description: 'Ein strategisches Turmverteidigungsspiel, in dem Spieler die Prinzessin beschützen, während Zuschauer das Ergebnis beeinflussen',
        story: `<p>In <strong>Beschütze die Prinzessin</strong> müssen Spieler ihre königliche Schutzbefohlene gegen Angriffswellen verteidigen, während Stream-Zuschauer entweder die Verteidigung unterstützen oder die Angreifer stärken können.</p>`
      },
      fr: {
        title: 'Protégez la Princesse: La Couronne Choisira',
        description: 'Un jeu de défense stratégique où les joueurs protègent la princesse pendant que les spectateurs influencent le résultat',
        story: `<p>Dans <strong>Protégez la Princesse</strong>, les joueurs doivent défendre leur charge royale contre des vagues d'ennemis tandis que les spectateurs peuvent soit aider la défense, soit soutenir les forces d'attaque.</p>`
      },
      ru: {
        title: 'Защити Принцессу: Корона Сделает Выбор',
        description: 'Стратегическая игра в жанре tower defense, где игроки защищают принцессу, а зрители влияют на исход',
        story: `<p>В <strong>Защити Принцессу</strong> игроки должны защищать свою королевскую подопечную от волн врагов, в то время как зрители стрима могут либо помочь обороне, либо поддержать атакующие силы.</p>`
      },
      zh: {
        title: '守护公主：王冠的选择',
        description: '一款策略塔防游戏，玩家保护公主，观众影响结果',
        story: `<p>在<strong>守护公主</strong>中，玩家必须保护他们的皇室成员抵御敌人的波浪攻击，而直播观众可以选择帮助防御或支持进攻力量。</p>`
      },
      ar: {
        title: 'حماية الأميرة: التاج سيختار',
        description: 'لعبة دفاع استراتيجية حيث يحمي اللاعبون الأميرة بينما يؤثر المشاهدون على النتيجة',
        story: `<p>في <strong>حماية الأميرة</strong>، يجب على اللاعبين الدفاع عن مسؤوليتهم الملكية ضد موجات الأعداء بينما يمكن لمشاهدي البث إما مساعدة الدفاع أو دعم قوات الهجوم.</p>`
      },
      vi: {
        title: 'Bảo Vệ Công Chúa: Vương Miện Sẽ Chọn',
        description: 'Trò chơi phòng thủ chiến lược nơi người chơi bảo vệ công chúa trong khi người xem ảnh hưởng đến kết quả',
        story: `<p>Trong <strong>Bảo Vệ Công Chúa</strong>, người chơi phải bảo vệ công chúa khỏi các đợt tấn công của kẻ thù trong khi người xem stream có thể hỗ trợ phòng thủ hoặc ủng hộ lực lượng tấn công.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 (64-bit) or Android 7.0+',
        processor: 'Intel Core i3-4130 or AMD FX-6300',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit) or Android 9.0+',
        processor: 'Intel Core i5-6600K or AMD Ryzen 5 1600',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 5,
    title: 'Three Kingdoms Brawl: Real-Time Faction War',
    imageUrl: '/assets/Three Kingdoms Brawl_ Real-Time Faction War.jpg',
    description: 'An intense real-time strategy game set in the Three Kingdoms era where stream viewers can join different factions',
    platform: 'PC',
    translations: {
      en: {
        title: 'Three Kingdoms Brawl: Real-Time Faction War',
        description: 'An intense real-time strategy game set in the Three Kingdoms era where stream viewers can join different factions',
        story: `<p>In <strong>Three Kingdoms Brawl</strong>, players command armies in a dynamic battlefield where stream viewers can pledge allegiance to different factions, send reinforcements, and influence the tide of war. Every battle becomes an epic clash of strategy, loyalty, and viewer participation.</p>`
      },
      de: {
        title: 'Drei-Reiche-Kampf: Echtzeit-Fraktionskrieg',
        description: 'Ein intensives Echtzeit-Strategiespiel in der Zeit der Drei Reiche, in dem Stream-Zuschauer verschiedenen Fraktionen beitreten können',
        story: `<p>In <strong>Drei-Reiche-Kampf</strong> befehligen Spieler Armeen auf einem dynamischen Schlachtfeld, wo Stream-Zuschauer verschiedenen Fraktionen die Treue schwören, Verstärkungen senden und den Kriegsverlauf beeinflussen können.</p>`
      },
      fr: {
        title: 'Bataille des Trois Royaumes: Guerre des Factions en Temps Réel',
        description: 'Un jeu de stratégie intense en temps réel situé à l\'époque des Trois Royaumes où les spectateurs peuvent rejoindre différentes factions',
        story: `<p>Dans <strong>Bataille des Trois Royaumes</strong>, les joueurs commandent des armées sur un champ de bataille dynamique où les spectateurs peuvent prêter allégeance à différentes factions, envoyer des renforts et influencer le cours de la guerre.</p>`
      },
      ru: {
        title: 'Битва Трёх Королевств: Война Фракций в Реальном Времени',
        description: 'Интенсивная стратегическая игра в реальном времени в эпоху Трёх Королевств, где зрители стрима могут присоединиться к разным фракциям',
        story: `<p>В <strong>Битве Трёх Королевств</strong> игроки командуют армиями на динамичном поле боя, где зрители стрима могут присягнуть на верность разным фракциям, отправлять подкрепления и влиять на ход войны.</p>`
      },
      zh: {
        title: '三国乱斗：实时派系战争',
        description: '一款设定在三国时代的激烈实时策略游戏，观众可以加入不同阵营',
        story: `<p>在<strong>三国乱斗</strong>中，玩家在动态战场上指挥军队，直播观众可以效忠不同阵营，派遣援军，影响战局走向。</p>`
      },
      ar: {
        title: 'معركة الممالك الثلاثة: حرب الفصائل في الوقت الحقيقي',
        description: 'ساحة قتال مستوحاة من ماينكرافت حيث يمكن للمشاهدين استدعاء الوحوش وإطلاق الأحداث والتأثير على البيئة',
        story: `<p>في <strong>معركة الممالك الثلاثة</strong>، يقود اللاعبون الجيوش في ساحة معركة ديناميكية حيث يمكن لمشاهدي البث المباشر إعلان الولاء لفصائل مختلفة وإرسال التعزيزات والتأثير على مجرى الحرب.</p>`
      },
      vi: {
        title: 'Tam Quốc Đại Chiến: Chiến Tranh Phe Phái Thời Gian Thực',
        description: 'Trò chơi chiến thuật thời gian thực gay cấn diễn ra trong thời Tam Quốc, nơi người xem stream có thể tham gia các phe phái khác nhau',
        story: `<p>Trong <strong>Tam Quốc Đại Chiến</strong>, người chơi chỉ huy quân đội trên chiến trường năng động nơi người xem stream có thể tuyên thệ trung thành với các phe phái khác nhau, gửi tiếp viện và ảnh hưởng đến thế trận.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 8/10 (64-bit)',
        processor: 'Intel Core i5-4460 or AMD FX-8350',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i7-7700K or AMD Ryzen 7 2700X',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 6,
    title: 'League of Monsters: Command. Conquer. Survive.',
    imageUrl: '/assets/League of Monsters_ Command. Conquer. Survive..jpg',
    description: 'A monster-collecting battle game where stream viewers can influence monster evolution and battles',
    platform: 'PC / Mobile',
    translations: {
      en: {
        title: 'League of Monsters: Command. Conquer. Survive.',
        description: 'A monster-collecting battle game where stream viewers can influence monster evolution and battles',
        story: `<p>In <strong>League of Monsters</strong>, players collect and train unique creatures while stream viewers can influence their evolution and abilities. Through viewer interactions, monsters can gain new powers, evolve in unexpected ways, and turn the tide of battle in an instant.</p>`
      },
      de: {
        title: 'Monster Liga: Befehligen. Erobern. Überleben.',
        description: 'Ein Monster-Sammel-Kampfspiel, bei dem Stream-Zuschauer die Monster-Evolution und Kämpfe beeinflussen können',
        story: `<p>In <strong>Monster Liga</strong> sammeln und trainieren Spieler einzigartige Kreaturen, während Stream-Zuschauer ihre Entwicklung und Fähigkeiten beeinflussen können. Durch Zuschauerinteraktionen können Monster neue Kräfte erlangen, sich unerwartet entwickeln und das Kampfgeschehen wenden.</p>`
      },
      fr: {
        title: 'Ligue des Monstres: Commander. Conquérir. Survivre.',
        description: 'Un jeu de combat et de collection de monstres où les spectateurs peuvent influencer l\'évolution et les batailles',
        story: `<p>Dans <strong>Ligue des Monstres</strong>, les joueurs collectionnent et entraînent des créatures uniques tandis que les spectateurs peuvent influencer leur évolution et leurs capacités. Les spectateurs peuvent accorder des bonus de puissance temporaires et déclencher des transformations spéciales.</p>`
      },
      ru: {
        title: 'Лига Монстров: Командуй. Покоряй. Выживай.',
        description: 'Игра о сборе монстров и сражениях, где зрители могут влиять на эволюцию монстров и битвы',
        story: `<p>В <strong>Лиге Монстров</strong> игроки собирают и тренируют уникальных существ, а зрители могут влиять на их эволюцию и способности. Зрители могут давать временные усиления и запускать особые трансформации.</p>`
      },
      zh: {
        title: '怪物联盟：指挥·征服·生存',
        description: '一款收集怪物对战游戏，观众可以强化战士并影响战斗结果',
        story: `<p>在<strong>怪物联盟</strong>中，玩家进行激烈的战斗，而直播观众贡献能量来强化战士。观众可以授予临时力量提升，触发特殊变身，甚至召唤传奇战士改变战局。</p>`
      },
      ar: {
        title: 'رابطة الوحوش: قيادة. غزو. بقاء.',
        description: 'لعبة قتال مليئة بالحركة حيث يمكن للمشاهدين تقوية المقاتلين والتأثير على نتائج المعارك',
        story: `<p>في <strong>رابطة الوحوش</strong>، ينخرط اللاعبون في معارك متفجرة بينما يساهم المشاهدون بطاقتهم لتقوية المقاتلين. يمكن للمشاهدين منح تعزيزات قوة مؤقتة وإطلاق تحولات خاصة.</p>`
      },
      vi: {
        title: 'Liên Minh Quái Vật: Chỉ Huy. Chinh Phục. Sinh Tồn.',
        description: 'Trò chơi đối kháng đầy hành động nơi người xem có thể tăng sức mạnh cho các chiến binh và ảnh hưởng đến kết quả trận đấu',
        story: `<p>Trong <strong>Liên Minh Quái Vật</strong>, người chơi tham gia các trận chiến bùng nổ trong khi người xem đóng góp năng lượng để tăng sức mạnh cho các chiến binh. Người xem có thể trao tăng sức mạnh tạm thời và kích hoạt các biến đổi đặc biệt.</p>`
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
    id: 7,
    title: 'Firepower Clash: Real-Time Faction Battle Game',
    imageUrl: '/assets/Firepower Clash_ Real-Time Faction Battle Game.jpg',
    description: 'A fast-paced multiplayer battle game where stream viewers can support their favorite factions with special abilities and power-ups',
    platform: 'PC',
    translations: {
      en: {
        title: 'Firepower Clash: Real-Time Faction Battle Game',
        description: 'A fast-paced multiplayer battle game where stream viewers can support their favorite factions with special abilities and power-ups',
        story: `<p>In <strong>Firepower Clash</strong>, players engage in intense faction-based combat while stream viewers become active participants in the battle. Through chat commands and donations, viewers can grant their chosen faction powerful abilities, tactical advantages, and game-changing power-ups that can turn the tide of battle in an instant.</p>`
      },
      de: {
        title: 'Feuerkraft-Konflikt: Echtzeit-Fraktionsschlacht',
        description: 'Ein schnelles Multiplayer-Kampfspiel, bei dem Stream-Zuschauer ihre Lieblingsfraktionen mit Spezialfähigkeiten und Power-ups unterstützen können',
        story: `<p>In <strong>Feuerkraft-Konflikt</strong> nehmen Spieler an intensiven fraktionsbasierten Kämpfen teil, während Stream-Zuschauer zu aktiven Teilnehmern der Schlacht werden. Durch Chat-Befehle und Spenden können Zuschauer ihrer gewählten Fraktion mächtige Fähigkeiten, taktische Vorteile und spielverändernde Power-ups gewähren.</p>`
      },
      fr: {
        title: 'Conflit de Puissance de Feu: Bataille de Factions en Temps Réel',
        description: 'Un jeu de combat multijoueur rapide où les spectateurs peuvent soutenir leurs factions préférées avec des capacités spéciales et des bonus',
        story: `<p>Dans <strong>Conflit de Puissance de Feu</strong>, les joueurs s'engagent dans des combats intenses basés sur les factions tandis que les spectateurs deviennent des participants actifs. Via les commandes du chat et les dons, les spectateurs peuvent accorder à leur faction choisie des capacités puissantes et des avantages tactiques.</p>`
      },
      ru: {
        title: 'Огневая Мощь: Битва Фракций в Реальном Времени',
        description: 'Динамичная многопользовательская боевая игра, где зрители стрима могут поддерживать любимые фракции особыми способностями и усилениями',
        story: `<p>В <strong>Огневой Мощи</strong> игроки участвуют в интенсивных фракционных сражениях, а зрители стрима становятся активными участниками битвы. С помощью команд чата и пожертвований зрители могут даровать выбранной фракции мощные способности и тактические преимущества.</p>`
      },
      zh: {
        title: '火力冲突：实时阵营战斗游戏',
        description: '一款快节奏的多人战斗游戏，观众可以通过特殊能力和增益来支持他们喜欢的阵营',
        story: `<p>在<strong>火力冲突</strong>中，玩家参与激烈的阵营战斗，而直播观众则成为战斗的积极参与者。通过聊天命令和打赏，观众可以为他们选择的阵营提供强大的能力、战术优势和改变游戏局势的增益。</p>`
      },
      ar: {
        title: 'صراع القوة النارية: لعبة معارك الفصائل في الوقت الحقيقي',
        description: 'لعبة قتال جماعية سريعة الوتيرة حيث يمكن لمشاهدي البث دعم فصائلهم المفضلة بقدرات خاصة وتعزيزات',
        story: `<p>في <strong>صراع القوة النارية</strong>، ينخرط اللاعبون في قتال مكثف قائم على الفصائل بينما يصبح مشاهدو البث مشاركين نشطين في المعركة. من خلال أوامر الدردشة والتبرعات، يمكن للمشاهدين منح فصيلهم المختار قدرات قوية ومزايا تكتيكية وتعزيزات تغير مجرى المعركة.</p>`
      },
      vi: {
        title: 'Đại Chiến Hỏa Lực: Trận Chiến Phe Phái Thời Gian Thực',
        description: 'Trò chơi chiến đấu nhiều người chơi nhịp độ nhanh nơi người xem stream có thể hỗ trợ phe phái yêu thích với các khả năng đặc biệt và tăng cường sức mạnh',
        story: `<p>Trong <strong>Đại Chiến Hỏa Lực</strong>, người chơi tham gia vào các trận chiến phe phái căng thẳng trong khi người xem stream trở thành những người tham gia tích cực. Thông qua lệnh chat và đóng góp, người xem có thể trao cho phe phái họ chọn những khả năng mạnh mẽ, lợi thế chiến thuật và tăng cường sức mạnh có thể thay đổi cục diện trận chiến.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 8/10 (64-bit)',
        processor: 'Intel Core i5-4590 or AMD FX-8350',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i7-8700K or AMD Ryzen 7 3700X',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 8,
    title: 'Honor of Kings: Command Legends. Conquer the Arena',
    imageUrl: '/assets/Honor of Kings_ Command Legends. Conquer the Arena.jpg',
    description: 'A legendary MOBA where stream viewers can influence hero abilities and battlefield conditions',
    platform: 'PC / Mobile',
    translations: {
      en: {
        title: 'Honor of Kings: Command Legends. Conquer the Arena',
        description: 'A legendary MOBA where stream viewers can influence hero abilities and battlefield conditions',
        story: `<p>In <strong>Honor of Kings</strong>, players step into the roles of legendary heroes while stream viewers actively shape the battlefield. Through viewer interactions, heroes can gain enhanced abilities, unlock special skins, and trigger dynamic events that transform the arena into an ever-evolving battleground of strategy and skill.</p>`
      },
      de: {
        title: 'Ehre der Könige: Befehlige Legenden. Erobere die Arena',
        description: 'Ein legendäres MOBA, in dem Stream-Zuschauer Heldenfähigkeiten und Schlachtfeldbedingungen beeinflussen können',
        story: `<p>In <strong>Ehre der Könige</strong> schlüpfen Spieler in die Rollen legendärer Helden, während Stream-Zuschauer das Schlachtfeld aktiv gestalten. Durch Zuschauerinteraktionen können Helden verbesserte Fähigkeiten erhalten, spezielle Skins freischalten und dynamische Ereignisse auslösen.</p>`
      },
      fr: {
        title: 'Honneur des Rois: Commandez les Légendes. Conquérez l\'Arène',
        description: 'Un MOBA légendaire où les spectateurs peuvent influencer les capacités des héros et les conditions du champ de bataille',
        story: `<p>Dans <strong>Honneur des Rois</strong>, les joueurs incarnent des héros légendaires tandis que les spectateurs façonnent activement le champ de bataille. Grâce aux interactions des spectateurs, les héros peuvent obtenir des capacités améliorées et déclencher des événements dynamiques.</p>`
      },
      ru: {
        title: 'Честь Королей: Командуй Легендами. Покори Арену',
        description: 'Легендарная MOBA, где зрители стрима могут влиять на способности героев и условия на поле боя',
        story: `<p>В <strong>Чести Королей</strong> игроки становятся легендарными героями, а зрители стрима активно формируют поле боя. Благодаря взаимодействию со зрителями герои могут получать улучшенные способности и вызывать динамические события.</p>`
      },
      zh: {
        title: '王者荣耀：指挥传奇·征服竞技场',
        description: '一款传奇MOBA游戏，观众可以影响英雄能力和战场环境',
        story: `<p>在<strong>王者荣耀</strong>中，玩家扮演传奇英雄，而直播观众积极塑造战场。通过观众互动，英雄可以获得增强能力，解锁特殊皮肤，并触发改变竞技场的动态事件。</p>`
      },
      ar: {
        title: 'شرف الملوك: قيادة الأساطير. غزو الساحة',
        description: 'لعبة موبا أسطورية حيث يمكن للمشاهدين التأثير على قدرات الأبطال وظروف ساحة المعركة',
        story: `<p>في <strong>شرف الملوك</strong>، يتقمص اللاعبون أدوار الأبطال الأسطوريين بينما يقوم المشاهدون بتشكيل ساحة المعركة بنشاط. من خلال تفاعلات المشاهدين، يمكن للأبطال اكتساب قدرات معززة وفتح مظاهر خاصة وإطلاق أحداث ديناميكية.</p>`
      },
      vi: {
        title: 'Vinh Quang Đế Vương: Chỉ Huy Huyền Thoại. Chinh Phục Đấu Trường',
        description: 'Trò chơi MOBA huyền thoại nơi người xem có thể ảnh hưởng đến khả năng của tướng và điều kiện chiến trường',
        story: `<p>Trong <strong>Vinh Quang Đế Vương</strong>, người chơi nhập vai các tướng huyền thoại trong khi người xem stream tích cực định hình chiến trường. Thông qua tương tác của người xem, các tướng có thể đạt được khả năng nâng cao, mở khóa trang phục đặc biệt và kích hoạt các sự kiện động.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 (64-bit) or Android 7.0+',
        processor: 'Intel Core i3-6100 or AMD FX-6300',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit) or Android 9.0+',
        processor: 'Intel Core i5-7400 or AMD Ryzen 5 1600',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 9,
    title: 'Minecraft Arena: Survive the Chaos, Rule the Arena',
    imageUrl: '/assets/Minecraft Arena_ Survive the Chaos, Rule the Arena.jpg',
    description: 'A Minecraft-inspired battle arena where viewers can spawn mobs, trigger events, and influence the environment',
    platform: 'PC',
    translations: {
      en: {
        title: 'Minecraft Arena: Survive the Chaos, Rule the Arena',
        description: 'A Minecraft-inspired battle arena where viewers can spawn mobs, trigger events, and influence the environment',
        story: `<p>In <strong>Minecraft Arena</strong>, players battle for survival in a dynamic, block-based world where stream viewers actively shape the environment. Through chat commands and donations, viewers can spawn hostile mobs, trigger weather events, and even reshape the terrain, creating an ever-changing battlefield that tests players' adaptability and skill.</p>`
      },
      de: {
        title: 'Minecraft Arena: Überlebe das Chaos, Beherrsche die Arena',
        description: 'Eine von Minecraft inspirierte Kampfarena, in der Zuschauer Monster spawnen, Ereignisse auslösen und die Umgebung beeinflussen können',
        story: `<p>In der <strong>Minecraft Arena</strong> kämpfen Spieler in einer dynamischen, blockbasierten Welt ums Überleben, während Stream-Zuschauer die Umgebung aktiv gestalten. Durch Chat-Befehle und Spenden können Zuschauer feindliche Kreaturen erschaffen, Wetterereignisse auslösen und sogar das Gelände umformen.</p>`
      },
      fr: {
        title: 'Arène Minecraft: Survivez au Chaos, Régnez sur l\'Arène',
        description: 'Une arène de combat inspirée de Minecraft où les spectateurs peuvent faire apparaître des monstres, déclencher des événements et influencer l\'environnement',
        story: `<p>Dans <strong>Arène Minecraft</strong>, les joueurs se battent pour leur survie dans un monde dynamique basé sur des blocs où les spectateurs façonnent activement l'environnement. Les spectateurs peuvent faire apparaître des monstres hostiles, déclencher des événements météorologiques et même remodeler le terrain.</p>`
      },
      ru: {
        title: 'Minecraft Арена: Выживи в Хаосе, Правь Ареной',
        description: 'Боевая арена в стиле Minecraft, где зрители могут призывать мобов, запускать события и влиять на окружение',
        story: `<p>В <strong>Minecraft Арене</strong> игроки сражаются за выживание в динамичном блочном мире, где зрители стрима активно формируют окружение. Зрители могут призывать враждебных мобов, запускать погодные явления и даже изменять ландшафт.</p>`
      },
      zh: {
        title: '我的世界竞技场：在混沌中生存，统治竞技场',
        description: '一个受我的世界启发的战斗竞技场，观众可以生成怪物、触发事件并影响环境',
        story: `<p>在<strong>我的世界竞技场</strong>中，玩家在动态的方块世界中为生存而战，直播观众积极塑造环境。观众可以生成敌对生物、触发天气事件，甚至重塑地形。</p>`
      },
      ar: {
        title: 'ساحة ماينكرافت: النجاة من الفوضى، حكم الساحة',
        description: 'ساحة قتال مستوحاة من ماينكرافت حيث يمكن للمشاهدين استدعاء الوحوش وإطلاق الأحداث والتأثير على البيئة',
        story: `<p>في <strong>ساحة ماينكرافت</strong>، يقاتل اللاعبون من أجل البقاء في عالم ديناميكي قائم على المكعبات حيث يقوم المشاهدون بتشكيل البيئة بنشاط. يمكن للمشاهدين استدعاء وحوش معادية وإطلاق أحداث جوية وحتى إعادة تشكيل التضاريس.</p>`
      },
      vi: {
        title: 'Đấu Trường Minecraft: Sống Sót Trong Hỗn Loạn, Thống Trị Đấu Trường',
        description: 'Đấu trường chiến đấu lấy cảm hứng từ Minecraft nơi người xem có thể sinh ra quái vật, kích hoạt sự kiện và ảnh hưởng đến môi trường',
        story: `<p>Trong <strong>Đấu Trường Minecraft</strong>, người chơi chiến đấu để sinh tồn trong một thế giới khối động nơi người xem stream tích cực định hình môi trường. Người xem có thể sinh ra quái vật thù địch, kích hoạt các sự kiện thời tiết và thậm chí định hình lại địa hình.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 (64-bit)',
        processor: 'Intel Core i3-3210 or AMD A8-7600',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-6600K or AMD Ryzen 5 1600',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 10,
    title: 'Dragon Ball Duel: A New Era of Dragon Ball Combat Awaits',
    imageUrl: '/assets/Dragon Ball Duel_ A New Era of Dragon Ball Combat Awaits.jpg',
    description: 'An action-packed fighting game where stream viewers can influence monster evolution and battles',
    platform: 'PC',
    translations: {
      en: {
        title: 'Dragon Ball Duel: A New Era of Dragon Ball Combat Awaits',
        description: 'An action-packed fighting game where stream viewers can power up fighters and influence battle outcomes',
        story: `<p>In <strong>Dragon Ball Duel</strong>, players engage in explosive battles while stream viewers contribute their energy to power up fighters. Through chat interactions and donations, viewers can grant fighters temporary power boosts, trigger special transformations, and even summon legendary warriors to turn the tide of battle in an instant.</p>`
      },
      de: {
        title: 'Dragon Ball Duell: Eine neue Ära des Dragon Ball Kampfes erwartet dich',
        description: 'Ein actiongeladenes Kampfspiel, in dem Stream-Zuschauer Kämpfer verstärken und Kampfergebnisse beeinflussen können',
        story: `<p>In <strong>Dragon Ball Duell</strong> liefern sich Spieler explosive Kämpfe, während Stream-Zuschauer ihre Energie beisteuern, um Kämpfer zu verstärken. Durch Chat-Interaktionen und Spenden können Zuschauer temporäre Kraftschübe gewähren und spezielle Transformationen auslösen.</p>`
      },
      fr: {
        title: 'Dragon Ball Duel: Une Nouvelle Ère de Combat Dragon Ball Vous Attend',
        description: 'Un jeu de combat plein d\'action où les spectateurs peuvent renforcer les combattants et influencer l\'issue des batailles',
        story: `<p>Dans <strong>Dragon Ball Duel</strong>, les joueurs participent à des batailles explosives tandis que les spectateurs contribuent leur énergie pour renforcer les combattants. Les spectateurs peuvent accorder des bonus de puissance temporaires et déclencher des transformations spéciales.</p>`
      },
      ru: {
        title: 'Dragon Ball Дуэль: Новая Эра Сражений Dragon Ball',
        description: 'Динамичная боевая игра, где зрители могут усиливать бойцов и влиять на исход битв',
        story: `<p>В <strong>Dragon Ball Дуэли</strong> игроки участвуют в взрывных сражениях, а зрители вносят свою энергию для усиления бойцов. Зрители могут давать временные усиления и запускать особые трансформации.</p>`
      },
      zh: {
        title: '龙珠决斗：龙珠战斗的新纪元',
        description: '一款动作激烈的格斗游戏，观众可以强化战士并影响战斗结果',
        story: `<p>在<strong>龙珠决斗</strong>中，玩家进行激烈的战斗，而直播观众贡献能量来强化战士。观众可以授予临时力量提升，触发特殊变身，甚至召唤传奇战士改变战局。</p>`
      },
      ar: {
        title: 'نزال دراغون بول: حقبة جديدة من قتال دراغون بول في انتظارك',
        description: 'لعبة قتال مليئة بالحركة حيث يمكن للمشاهدين تقوية المقاتلين والتأثير على نتائج المعارك',
        story: `<p>في <strong>نزال دراغون بول</strong>، ينخرط اللاعبون في معارك متفجرة بينما يساهم المشاهدون بطاقتهم لتقوية المقاتلين. يمكن للمشاهدين منح تعزيزات قوة مؤقتة وإطلاق تحولات خاصة.</p>`
      },
      vi: {
        title: 'Dragon Ball Đối Đầu: Kỷ Nguyên Mới Của Trận Chiến Dragon Ball',
        description: 'Trò chơi đối kháng đầy hành động nơi người xem có thể tăng sức mạnh cho các chiến binh và ảnh hưởng đến kết quả trận đấu',
        story: `<p>Trong <strong>Dragon Ball Đối Đầu</strong>, người chơi tham gia các trận chiến bùng nổ trong khi người xem đóng góp năng lượng để tăng sức mạnh cho các chiến binh. Người xem có thể trao tăng sức mạnh tạm thời và kích hoạt các biến đổi đặc biệt.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 8/10 (64-bit)',
        processor: 'Intel Core i5-4460 or AMD FX-8350',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i7-8700K or AMD Ryzen 7 3700X',
        memory: '16 GB RAM'
      }
    }
  }
];