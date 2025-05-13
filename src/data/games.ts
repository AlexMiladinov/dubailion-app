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
  }
];