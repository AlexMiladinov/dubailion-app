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
    title: 'Brawl of the Westward Journey: Clash for the Golden Staff!',
    imageUrl: '/assets/Brawl of the Westward Journey_ Clash for the Golden Staff!.jpg',
    description: 'A strategic tug-of-war for dominance, featuring the Monkey King and Heavenly Court factions',
    platform: 'Mobile',
    translations: {
      en: {
        title: 'Brawl of the Westward Journey: Clash for the Golden Staff!',
        description: 'A strategic tug-of-war for dominance, featuring the Monkey King and Heavenly Court factions',
        story: `<p>Brawl of the Westward Journey is a fast-paced mobile game where players join either the Monkey King or the Heavenly Court faction in a tug-of-war battle to control the legendary Golden Staff.</p>`
      },
      de: {
        title: 'Kampf der Westlichen Reise: Duell um den Goldenen Stab!',
        description: 'Ein strategisches Tauziehen um die Vorherrschaft zwischen dem Affenkönig und den Himmlischen Hof-Fraktionen',
        story: `<p>Kampf der Westlichen Reise ist ein schnelles Mobilspiel, bei dem sich Spieler entweder der Fraktion des Affenkönigs oder des Himmlischen Hofs anschließen, um in einem Tauziehen-Kampf den legendären Goldenen Stab zu kontrollieren.</p>`
      },
      fr: {
        title: 'Bataille du Voyage vers l\'Ouest : Combat pour le Bâton d\'Or !',
        description: 'Un bras de fer stratégique pour la domination, mettant en scène le Roi Singe et les factions de la Cour Céleste',
        story: `<p>Bataille du Voyage vers l'Ouest est un jeu mobile rapide où les joueurs rejoignent soit la faction du Roi Singe, soit celle de la Cour Céleste dans une bataille de tir à la corde pour contrôler le légendaire Bâton d'Or.</p>`
      },
      ru: {
        title: 'Битва Западного Путешествия: Сражение за Золотой Посох!',
        description: 'Стратегическое противостояние за господство между фракциями Короля Обезьян и Небесного Двора',
        story: `<p>Битва Западного Путешествия - это динамичная мобильная игра, где игроки присоединяются к фракции Короля Обезьян или Небесного Двора в борьбе за контроль над легендарным Золотым Посохом.</p>`
      },
      zh: {
        title: '西游争霸：争夺金箍棒之战！',
        description: '以孙悟空和天庭阵营为主的战略拔河对决',
        story: `<p>西游争霸是一款快节奏的手机游戏，玩家可以加入孙悟空或天庭阵营，在拔河战斗中争夺传说中的金箍棒。</p>`
      },
      ar: {
        title: 'معركة الرحلة الغربية: صراع على العصا الذهبية!',
        description: 'لعبة شد الحبل الاستراتيجية للسيطرة، تضم فصائل الملك القرد والمحكمة السماوية',
        story: `<p>معركة الرحلة الغربية هي لعبة جوال سريعة الإيقاع حيث ينضم اللاعبون إما إلى فصيل الملك القرد أو المحكمة السماوية في معركة شد الحبل للسيطرة على العصا الذهبية الأسطورية.</p>`
      },
      vi: {
        title: 'Đại Chiến Tây Du: Tranh Đoạt Gậy Như Ý!',
        description: 'Trò chơi kéo co chiến lược giữa phe Tôn Ngộ Không và Thiên Đình',
        story: `<p>Đại Chiến Tây Du là một trò chơi di động nhịp độ nhanh, nơi người chơi tham gia vào phe Tôn Ngộ Không hoặc Thiên Đình trong trận chiến kéo co để giành quyền kiểm soát Gậy Như Ý huyền thoại.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Android 5.0 or iOS 10.0',
        processor: 'Quad-core 1.5 GHz',
        memory: '2 GB RAM'
      },
      recommended: {
        os: 'Android 8.0 or iOS 12.0',
        processor: 'Octa-core 2.0 GHz',
        memory: '4 GB RAM'
      }
    }
  },
  {
    id: 4,
    title: 'Call Me Champion: Shape the Faction War with Every Move',
    imageUrl: '/assets/Call Me Champion_ Shape the Faction War with Every Move.jpg',
    description: 'Choose Your Side, Fight for Glory, and Earn Your Spot at the Top!',
    platform: 'PC',
    translations: {
      en: {
        title: 'Call Me Champion: Shape the Faction War with Every Move',
        description: 'Choose Your Side, Fight for Glory, and Earn Your Spot at the Top!',
        story: `<p>In Call Me Champion, it's not just about watching, it's about participating. This game throws you into a multi-camp battle where broadcasters and viewers join forces to push their camp to victory.</p>`
      },
      de: {
        title: 'Nenn Mich Champion: Gestalte den Fraktionskrieg mit Jedem Zug',
        description: 'Wähle deine Seite, Kämpfe für Ruhm und Sichere dir deinen Platz an der Spitze!',
        story: `<p>In Nenn Mich Champion geht es nicht nur ums Zusehen, sondern ums Mitmachen. Dieses Spiel wirft dich in eine Multi-Camp-Schlacht, wo Broadcaster und Zuschauer sich zusammentun, um ihr Lager zum Sieg zu führen.</p>`
      },
      fr: {
        title: 'Appelez-Moi Champion : Façonnez la Guerre des Factions à Chaque Mouvement',
        description: 'Choisissez Votre Camp, Battez-vous pour la Gloire et Gagnez Votre Place au Sommet !',
        story: `<p>Dans Appelez-Moi Champion, il ne s'agit pas seulement de regarder, mais de participer. Ce jeu vous plonge dans une bataille multi-camps où diffuseurs et spectateurs unissent leurs forces pour mener leur camp à la victoire.</p>`
      },
      ru: {
        title: 'Зови Меня Чемпион: Определи Исход Войны Фракций Каждым Ходом',
        description: 'Выбери Свою Сторону, Сражайся за Славу и Заработай Место на Вершине!',
        story: `<p>В игре Зови Меня Чемпион важно не просто смотреть, а участвовать. Эта игра погружает вас в многолагерную битву, где стримеры и зрители объединяются, чтобы привести свой лагерь к победе.</p>`
      },
      zh: {
        title: '称霸之战：每一步都决定派系战争的走向',
        description: '选择阵营，为荣耀而战，赢得巅峰地位！',
        story: `<p>在称霸之战中，不仅仅是观看，更重要的是参与。这款游戏将你投入多阵营战斗，主播和观众联手推动自己的阵营走向胜利。</p>`
      },
      ar: {
        title: 'نادني بطل: شكل حرب الفصائل مع كل خطوة',
        description: 'اختر جانبك، قاتل من أجل المجد، واكسب مكانك في القمة!',
        story: `<p>في نادني بطل، الأمر لا يتعلق بالمشاهدة فقط، بل بالمشاركة. تضعك هذه اللعبة في معركة متعددة المعسكرات حيث يتحد البث المباشر والمشاهدون لدفع معسكرهم نحو النصر.</p>`
      },
      vi: {
        title: 'Gọi Tôi Là Nhà Vô Địch: Định Hình Cuộc Chiến Phe Phái Qua Từng Bước Đi',
        description: 'Chọn Phe Của Bạn, Chiến Đấu Vì Vinh Quang và Giành Vị Trí Cao Nhất!',
        story: `<p>Trong Gọi Tôi Là Nhà Vô Địch, không chỉ là xem mà còn là tham gia. Trò chơi này đưa bạn vào trận chiến đa trại, nơi người phát sóng và người xem hợp lực để đưa trại của họ đến chiến thắng.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-4460 or AMD FX-6300',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i7-8700K or AMD Ryzen 5 3600X',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 5,
    title: 'Call Me Da Sheng: Shape the Fate of the Monkey King',
    imageUrl: '/assets/Call Me Da Sheng_ Shape the Fate of the Monkey King.jpg',
    description: 'Will you help the Monkey King escape, or stop him in his tracks?',
    platform: 'PC',
    translations: {
      en: {
        title: 'Call Me Da Sheng: Shape the Fate of the Monkey King',
        description: 'Will you help the Monkey King escape, or stop him in his tracks?',
        story: `<p>In Call Me Da Sheng, your choice is your fate. Help or hinder the Monkey King's escape from Wuzhi Mountain in this intense tug-of-war PVP showdown.</p>`
      },
      de: {
        title: 'Nenn Mich Da Sheng: Bestimme das Schicksal des Affenkönigs',
        description: 'Wirst du dem Affenkönig bei der Flucht helfen oder ihn aufhalten?',
        story: `<p>In Nenn Mich Da Sheng ist deine Wahl dein Schicksal. Hilf dem Affenkönig bei seiner Flucht vom Wuzhi-Berg oder verhindere sie in diesem intensiven Tauziehen-PVP-Showdown.</p>`
      },
      fr: {
        title: 'Appelez-Moi Da Sheng : Façonnez le Destin du Roi Singe',
        description: 'Aiderez-vous le Roi Singe à s\'échapper, ou l\'arrêterez-vous dans sa course ?',
        story: `<p>Dans Appelez-Moi Da Sheng, votre choix est votre destin. Aidez ou empêchez l'évasion du Roi Singe de la montagne Wuzhi dans cet intense face-à-face PVP.</p>`
      },
      ru: {
        title: 'Зови Меня Да Шэн: Определи Судьбу Короля Обезьян',
        description: 'Поможешь Королю Обезьян сбежать или остановишь его?',
        story: `<p>В игре Зови Меня Да Шэн твой выбор определяет твою судьбу. Помоги или помешай побегу Короля Обезьян с горы Уджи в этом напряженном PVP-противостоянии.</p>`
      },
      zh: {
        title: '齐天大圣：决定美猴王的命运',
        description: '你会帮助美猴王逃脱，还是阻止他的脚步？',
        story: `<p>在齐天大圣中，你的选择就是你的命运。在这场激烈的PVP拔河对决中，帮助或阻止美猴王从五指山逃脱。</p>`
      },
      ar: {
        title: 'نادني دا شنغ: شكل مصير ملك القرود',
        description: 'هل ستساعد ملك القرود على الهروب، أم ستوقفه في مساره؟',
        story: `<p>في نادني دا شنغ، اختيارك هو مصيرك. ساعد أو أعق هروب ملك القرود من جبل ووتشي في هذه المواجهة المكثفة للعبة شد الحبل PVP.</p>`
      },
      vi: {
        title: 'Gọi Tôi Là Đại Thánh: Định Đoạt Số Phận Của Tề Thiên Đại Thánh',
        description: 'Bạn sẽ giúp Tề Thiên Đại Thánh thoát thân, hay ngăn chặn ông ấy?',
        story: `<p>Trong Gọi Tôi Là Đại Thánh, sự lựa chọn của bạn là số phận của bạn. Giúp đỡ hoặc cản trở Tề Thiên Đại Thánh thoát khỏi núi Ngũ Chỉ trong trận đối đầu kéo co PVP gay cấn này.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5 (11th Generation) or AMD Ryzen 5',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i7 or AMD Ryzen 7',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 6,
    title: 'Cheese Battle: The Ultimate Cat vs. Mouse Showdown',
    imageUrl: '/assets/Cheese Battle_ The Ultimate Cat vs. Mouse Showdown.jpg',
    description: 'Join the whimsical world of Cheese Battle, where adorable mice defend their cheesy feast against cunning cats',
    platform: 'PC',
    translations: {
      en: {
        title: 'Cheese Battle: The Ultimate Cat vs. Mouse Showdown',
        description: 'Join the whimsical world of Cheese Battle, where adorable mice defend their cheesy feast against cunning cats',
        story: `<p>Step into the delightful chaos of Cheese Battle, a fast-paced PvP game that brings the classic cat-and-mouse chase to life with a modern twist.</p>`
      },
      de: {
        title: 'Käse-Schlacht: Das ultimative Katze-gegen-Maus-Duell',
        description: 'Tritt ein in die verspielte Welt von Käse-Schlacht, wo niedliche Mäuse ihr Käsefest gegen schlaue Katzen verteidigen',
        story: `<p>Tauche ein in das entzückende Chaos von Käse-Schlacht, ein schnelles PvP-Spiel, das die klassische Katz-und-Maus-Jagd mit einer modernen Wendung zum Leben erweckt.</p>`
      },
      fr: {
        title: 'Bataille de Fromage : L\'Ultime Affrontement Chat contre Souris',
        description: 'Rejoignez le monde fantaisiste de Bataille de Fromage, où d\'adorables souris défendent leur festin fromager contre des chats rusés',
        story: `<p>Plongez dans le chaos délicieux de Bataille de Fromage, un jeu PvP rapide qui donne vie à la classique course-poursuite du chat et de la souris avec une touche moderne.</p>`
      },
      ru: {
        title: 'Сырная Битва: Решающее Противостояние Кошек и Мышей',
        description: 'Присоединяйтесь к причудливому миру Сырной Битвы, где очаровательные мыши защищают свой сырный пир от хитрых кошек',
        story: `<p>Окунитесь в восхитительный хаос Сырной Битвы, динамичной PvP-игры, которая оживляет классическую погоню кошки за мышкой с современным поворотом.</p>`
      },
      zh: {
        title: '奶酪大战：猫鼠终极对决',
        description: '加入奶酪大战的奇幻世界，可爱的老鼠们守护着他们的奶酪盛宴，对抗狡猾的猫',
        story: `<p>步入奶酪大战的欢乐混乱，这是一款快节奏的PvP游戏，以现代方式重现经典的猫鼠追逐。</p>`
      },
      ar: {
        title: 'معركة الجبن: المواجهة النهائية بين القط والفأر',
        description: 'انضم إلى عالم معركة الجبن الغريب، حيث تدافع الفئران اللطيفة عن وليمة الجبن ضد القطط الماكرة',
        story: `<p>ادخل إلى الفوضى الممتعة في معركة الجبن، لعبة PvP سريعة تحيي مطاردة القط والفأر الكلاسيكية بلمسة عصرية.</p>`
      },
      vi: {
        title: 'Đại Chiến Phô Mai: Cuộc Đối Đầu Tối Thượng Giữa Mèo và Chuột',
        description: 'Tham gia vào thế giới kỳ thú của Đại Chiến Phô Mai, nơi những chú chuột đáng yêu bảo vệ bữa tiệc phô mai khỏi những chú mèo xảo quyệt',
        story: `<p>Bước vào sự hỗn loạn thú vị của Đại Chiến Phô Mai, một trò chơi PvP nhịp độ nhanh mang lại cuộc rượt đuổi mèo-chuột cổ điển với một twist hiện đại.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7 (SP1+), Windows 10, Windows 11',
        processor: 'Intel Pentium 4 2.00GHz',
        memory: '200 MB RAM'
      },
      recommended: {
        os: 'Windows 10 or later',
        processor: 'Intel i5 or equivalent',
        memory: '4 GB RAM'
      }
    }
  },
  {
    id: 7,
    title: 'Chibi: Three Kingdoms — The Ultimate Battle for Glory!',
    imageUrl: '/assets/Chibi the three kingdoms.jpg',
    description: 'Your Army, Your Strategy, Your Glory!',
    platform: 'PC',
    translations: {
      en: {
        title: 'Chibi: Three Kingdoms — The Ultimate Battle for Glory!',
        description: 'Your Army, Your Strategy, Your Glory!',
        story: `<p>Step into the action-packed world of Chibi: Three Kingdoms, where you control the fate of the kingdom!</p>`
      },
      de: {
        title: 'Chibi: Drei Königreiche — Die ultimative Schlacht um Ruhm!',
        description: 'Deine Armee, Deine Strategie, Dein Ruhm!',
        story: `<p>Tritt ein in die actiongeladene Welt von Chibi: Drei Königreiche, wo du das Schicksal des Königreichs kontrollierst!</p>`
      },
      fr: {
        title: 'Chibi : Les Trois Royaumes — La Bataille Ultime pour la Gloire !',
        description: 'Votre Armée, Votre Stratégie, Votre Gloire !',
        story: `<p>Entrez dans le monde plein d'action de Chibi : Les Trois Royaumes, où vous contrôlez le destin du royaume !</p>`
      },
      ru: {
        title: 'Чиби: Три Королевства — Решающая Битва за Славу!',
        description: 'Твоя Армия, Твоя Стратегия, Твоя Слава!',
        story: `<p>Войдите в насыщенный действием мир Чиби: Три Королевства, где вы контролируете судьбу королевства!</p>`
      },
      zh: {
        title: '赤壁：三国志 — 终极荣耀之战！',
        description: '你的军队，你的策略，你的荣耀！',
        story: `<p>步入充满动作的赤壁：三国志世界，在这里你掌控着王国的命运！</p>`
      },
      ar: {
        title: 'تشيبي: الممالك الثلاثة — المعركة النهائية من أجل المجد!',
        description: 'جيشك، استراتيجيتك، مجدك!',
        story: `<p>ادخل إلى عالم تشيبي المليء بالحركة: الممالك الثلاثة، حيث تتحكم في مصير المملكة!</p>`
      },
      vi: {
        title: 'Chibi: Tam Quốc — Trận Chiến Tối Thượng Vì Vinh Quang!',
        description: 'Quân Đội Của Bạn, Chiến Lược Của Bạn, Vinh Quang Của Bạn!',
        story: `<p>Bước vào thế giới đầy hành động của Chibi: Tam Quốc, nơi bạn kiểm soát vận mệnh của vương quốc!</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7 64-bit or higher',
        processor: 'Intel Core i3-6100 or AMD Ryzen 3 1200',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i5-8400 or AMD Ryzen 5 2600',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 8,
    title: 'Color War',
    imageUrl: '/assets/Color War.jpg',
    description: 'Paint your way to victory in this vibrant battle arena',
    platform: 'Mobile',
    translations: {
      en: {
        title: 'Color War',
        description: 'Paint your way to victory in this vibrant battle arena',
        story: `<p>Color War is an exciting mobile game where players use paint to claim territory and defeat opponents. Every splash of color counts in this fast-paced strategic battle!</p>`
      },
      de: {
        title: 'Farbenkrieg',
        description: 'Male deinen Weg zum Sieg in dieser lebendigen Kampfarena',
        story: `<p>Farbenkrieg ist ein aufregendes Mobilspiel, in dem Spieler mit Farbe Territorium beanspruchen und Gegner besiegen. Jeder Farbklecks zählt in dieser schnellen strategischen Schlacht!</p>`
      },
      fr: {
        title: 'Guerre des Couleurs',
        description: 'Peignez votre chemin vers la victoire dans cette arène de combat vibrante',
        story: `<p>Guerre des Couleurs est un jeu mobile passionnant où les joueurs utilisent la peinture pour revendiquer du territoire et vaincre leurs adversaires. Chaque éclaboussure de couleur compte dans cette bataille stratégique rapide !</p>`
      },
      ru: {
        title: 'Война Красок',
        description: 'Проложите путь к победе красками в этой яркой боевой арене',
        story: `<p>Война Красок - это захватывающая мобильная игра, где игроки используют краски для захвата территории и победы над противниками. Каждый всплеск цвета имеет значение в этой быстрой стратегической битве!</p>`
      },
      zh: {
        title: '色彩战争',
        description: '在这个充满活力的战斗竞技场中用绘画赢得胜利',
        story: `<p>色彩战争是一款刺激的手机游戏，玩家使用颜料来占领领地并击败对手。在这场快节奏的战略战斗中，每一抹色彩都至关重要！</p>`
      },
      ar: {
        title: 'حرب الألوان',
        description: 'ارسم طريقك نحو النصر في ساحة المعركة النابضة بالحياة',
        story: `<p>حرب الألوان هي لعبة جوال مثيرة حيث يستخدم اللاعبون الطلاء للمطالبة بالأراضي وهزيمة الخصوم. كل رشة لون تحسب في هذه المعركة الاستراتيجية السريعة!</p>`
      },
      vi: {
        title: 'Chiến Tranh Sắc Màu',
        description: 'Vẽ con đường chiến thắng trong đấu trường chiến đấu rực rỡ này',
        story: `<p>Chiến Tranh Sắc Màu là một trò chơi di động thú vị, nơi người chơi sử dụng màu sắc để giành lãnh thổ và đánh bại đối thủ. Mỗi vệt màu đều quan trọng trong trận chiến chiến lược nhanh này!</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Android 5.0 or iOS 11.0',
        processor: 'Quad-core 1.2 GHz',
        memory: '2 GB RAM'
      },
      recommended: {
        os: 'Android 7.0 or iOS 13.0',
        processor: 'Octa-core 2.0 GHz',
        memory: '4 GB RAM'
      }
    }
  },
  {
    id: 9,
    title: 'Dragon Ball Duel: A New Era of Dragon Ball Combat Awaits',
    imageUrl: '/assets/Dragon Ball Duel_ A New Era of Dragon Ball Combat Awaits.jpg',
    description: 'Experience the next evolution of Dragon Ball combat with real-time viewer interaction',
    platform: 'PC',
    translations: {
      en: {
        title: 'Dragon Ball Duel: A New Era of Dragon Ball Combat Awaits',
        description: 'Experience the next evolution of Dragon Ball combat with real-time viewer interaction',
        story: `<p>Dragon Ball Duel revolutionizes the fighting game genre by combining intense Dragon Ball action with live streaming interaction. Viewers can send energy to fighters, influence battle conditions, and even summon legendary warriors to aid their favorite combatants.</p>`
      },
      de: {
        title: 'Dragon Ball Duell: Eine neue Ära des Dragon Ball Kampfes erwartet dich',
        description: 'Erlebe die nächste Evolution des Dragon Ball Kampfes mit Echtzeit-Zuschauerinteraktion',
        story: `<p>Dragon Ball Duell revolutioniert das Fighting-Game-Genre durch die Kombination von intensiver Dragon Ball Action mit Live-Streaming-Interaktion. Zuschauer können Kämpfern Energie senden, Kampfbedingungen beeinflussen und sogar legendäre Krieger herbeirufen.</p>`
      },
      fr: {
        title: 'Dragon Ball Duel : Une Nouvelle Ère de Combat Dragon Ball Vous Attend',
        description: 'Découvrez l\'évolution du combat Dragon Ball avec l\'interaction en temps réel des spectateurs',
        story: `<p>Dragon Ball Duel révolutionne le genre du jeu de combat en combinant l'action intense de Dragon Ball avec l'interaction en direct. Les spectateurs peuvent envoyer de l'énergie aux combattants, influencer les conditions de combat et même invoquer des guerriers légendaires.</p>`
      },
      ru: {
        title: 'Dragon Ball Дуэль: Новая Эра Сражений Dragon Ball Ждёт',
        description: 'Испытайте следующую эволюцию сражений Dragon Ball с взаимодействием зрителей в реальном времени',
        story: `<p>Dragon Ball Дуэль революционизирует жанр файтингов, сочетая интенсивное действие Dragon Ball с взаимодействием при прямой трансляции. Зрители могут отправлять энергию бойцам, влиять на условия боя и даже призывать легендарных воинов.</p>`
      },
      zh: {
        title: '龙珠对决：龙珠战斗的新纪元来临',
        description: '体验具有实时观众互动的下一代龙珠战斗进化',
        story: `<p>龙珠对决通过将激烈的龙珠动作与直播互动相结合，革新了格斗游戏类型。观众可以向战士发送能量，影响战斗条件，甚至召唤传奇战士来援助他们喜爱的战士。</p>`
      },
      ar: {
        title: 'دراغون بول ديول: حقبة جديدة من قتال دراغون بول في انتظارك',
        description: 'اختبر التطور التالي لقتال دراغون بول مع تفاعل المشاهدين في الوقت الفعلي',
        story: `<p>دراغون بول ديول يحدث ثورة في نوع ألعاب القتال من خلال الجمع بين عمل دراغون بول المكثف والتفاعل المباشر. يمكن للمشاهدين إرسال الطاقة للمقاتلين والتأثير على ظروف المعركة وحتى استدعاء المحاربين الأسطوريين.</p>`
      },
      vi: {
        title: 'Dragon Ball Đối Đầu: Kỷ Nguyên Mới Của Trận Chiến Dragon Ball Đang Chờ Đợi',
        description: 'Trải nghiệm sự tiến hóa tiếp theo của trận chiến Dragon Ball với tương tác người xem thời gian thực',
        story: `<p>Dragon Ball Đối Đầu cách mạng hóa thể loại game đối kháng bằng cách kết hợp hành động Dragon Ball mãnh liệt với tương tác trực tiếp. Người xem có thể gửi năng lượng cho các chiến binh, ảnh hưởng đến điều kiện chiến đấu và thậm chí triệu hồi các chiến binh huyền thoại.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-6600K or AMD Ryzen 5 1600',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i7-8700K or AMD Ryzen 7 2700X',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 10,
    title: 'Elves Battle: Command the Chaos of Your TikTok Live',
    imageUrl: '/assets/Elves Battle_ Command the Chaos of Your TikTok Live.jpg',
    description: 'Lead your elven forces to victory with the help of your live audience',
    platform: 'PC',
    translations: {
      en: {
        title: 'Elves Battle: Command the Chaos of Your TikTok Live',
        description: 'Lead your elven forces to victory with the help of your live audience',
        story: `<p>In Elves Battle, every stream becomes a battlefield where viewers' interactions directly influence the outcome of magical conflicts between rival elven factions.</p>`
      },
      de: {
        title: 'Elfenschlacht: Beherrsche das Chaos deines TikTok Live',
        description: 'Führe deine Elfenstreitkräfte mit Hilfe deines Live-Publikums zum Sieg',
        story: `<p>In Elfenschlacht wird jeder Stream zu einem Schlachtfeld, wo die Interaktionen der Zuschauer direkten Einfluss auf den Ausgang magischer Konflikte zwischen rivalisierenden Elfenfraktionen haben.</p>`
      },
      fr: {
        title: 'Bataille des Elfes : Commandez le Chaos de Votre TikTok Live',
        description: 'Menez vos forces elfiques à la victoire avec l\'aide de votre public en direct',
        story: `<p>Dans Bataille des Elfes, chaque stream devient un champ de bataille où les interactions des spectateurs influencent directement l'issue des conflits magiques entre factions elfiques rivales.</p>`
      },
      ru: {
        title: 'Битва Эльфов: Управляй Хаосом Твоего TikTok Live',
        description: 'Веди свои эльфийские войска к победе с помощью живой аудитории',
        story: `<p>В Битве Эльфов каждый стрим становится полем боя, где взаимодействия зрителей напрямую влияют на исход магических конфликтов между соперничающими фракциями эльфов.</p>`
      },
      zh: {
        title: '精灵战争：掌控你的TikTok直播混战',
        description: '在观众的帮助下带领你的精灵军队走向胜利',
        story: `<p>在精灵战争中，每次直播都成为战场，观众的互动直接影响着对立精灵派系之间魔法冲突的结果。</p>`
      },
      ar: {
        title: 'معركة الجان: تحكم في فوضى بث TikTok المباشر',
        description: 'قد قوات الجان إلى النصر بمساعدة جمهورك المباشر',
        story: `<p>في معركة الجان، يتحول كل بث إلى ساحة معركة حيث تؤثر تفاعلات المشاهدين مباشرة على نتيجة الصراعات السحرية بين فصائل الجان المتنافسة.</p>`
      },
      vi: {
        title: 'Đại Chiến Tiên Tộc: Chỉ Huy Hỗn Loạn Trong TikTok Live',
        description: 'Dẫn dắt lực lượng tiên tộc đến chiến thắng với sự giúp đỡ của khán giả trực tiếp',
        story: `<p>Trong Đại Chiến Tiên Tộc, mỗi buổi stream trở thành chiến trường nơi sự tương tác của người xem trực tiếp ảnh hưởng đến kết quả của các cuộc xung đột phép thuật giữa các phe phái tiên tộc đối địch.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-4460 or AMD FX-6300',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i7-7700K or AMD Ryzen 5 2600',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 11,
    title: 'Farm Field: Grow Big. Harvest More. Build Your Legacy.',
    imageUrl: '/assets/Farm Field_ Grow Big. Harvest More. Build Your Legacy.jpg',
    description: 'Create and manage your dream farm with help from your live audience',
    platform: 'PC',
    translations: {
      en: {
        title: 'Farm Field: Grow Big. Harvest More. Build Your Legacy.',
        description: 'Create and manage your dream farm with help from your live audience',
        story: `<p>Farm Field transforms farming simulation by integrating live viewer participation. Your audience helps you plant, harvest, and expand your agricultural empire in real-time.</p>`
      },
      de: {
        title: 'Farmfeld: Wachse Groß. Ernte Mehr. Baue Dein Vermächtnis.',
        description: 'Erschaffe und verwalte deine Traumfarm mit Hilfe deines Live-Publikums',
        story: `<p>Farmfeld transformiert die Farming-Simulation durch die Integration von Live-Zuschauer-Beteiligung. Dein Publikum hilft dir in Echtzeit beim Pflanzen, Ernten und Erweitern deines landwirtschaftlichen Imperiums.</p>`
      },
      fr: {
        title: 'Champ Agricole : Grandissez. Récoltez Plus. Bâtissez Votre Héritage.',
        description: 'Créez et gérez votre ferme de rêve avec l\'aide de votre public en direct',
        story: `<p>Champ Agricole transforme la simulation agricole en intégrant la participation des spectateurs en direct. Votre public vous aide à planter, récolter et développer votre empire agricole en temps réel.</p>`
      },
      ru: {
        title: 'Фермерское Поле: Расти Больше. Собирай Больше. Создавай Наследие.',
        description: 'Создавай и управляй фермой своей мечты с помощью живой аудитории',
        story: `<p>Фермерское Поле преображает симулятор фермерства, интегрируя участие живых зрителей. Ваша аудитория помогает вам сажать, собирать урожай и расширять вашу сельскохозяйственную империю в реальном времени.</p>`
      },
      zh: {
        title: '农场天地：成长、收获、建立传奇',
        description: '在直播观众的帮助下创建和管理你梦想中的农场',
        story: `<p>农场天地通过整合直播观众参与改变了农场模拟游戏。你的观众可以实时帮助你种植、收获和扩展你的农业帝国。</p>`
      },
      ar: {
        title: 'حقل المزرعة: انمو كبيراً. احصد أكثر. ابني إرثك.',
        description: 'أنشئ وأدر مزرعة أحلامك بمساعدة جمهورك المباشر',
        story: `<p>حقل المزرعة يحول محاكاة الزراعة من خلال دمج مشاركة المشاهدين المباشرة. يساعدك جمهورك في الزراعة والحصاد وتوسيع إمبراطوريتك الزراعية في الوقت الفعلي.</p>`
      },
      vi: {
        title: 'Đồng Ruộng: Phát Triển. Thu Hoạch Nhiều Hơn. Xây Dựng Di Sản.',
        description: 'Tạo và quản lý trang trại trong mơ với sự giúp đỡ của khán giả trực tiếp',
        story: `<p>Đồng Ruộng biến đổi mô phỏng nông trại bằng cách tích hợp sự tham gia của người xem trực tiếp. Khán giả của bạn giúp bạn trồng trọt, thu hoạch và mở rộng đế chế nông nghiệp của bạn trong thời gian thực.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 64-bit',
        processor: 'Intel Core i3-3220 or AMD FX-4300',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-6600 or AMD Ryzen 5 1400',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 12,
    title: 'Firepower Clash: Real-Time Faction Battle Game',
    imageUrl: '/assets/Firepower Clash_ Real-Time Faction Battle Game.jpg',
    description: 'Command armies and unleash devastating firepower in this intense real-time battle game',
    platform: 'PC',
    translations: {
      en: {
        title: 'Firepower Clash: Real-Time Faction Battle Game',
        description: 'Command armies and unleash devastating firepower in this intense real-time battle game',
        story: `<p>Firepower Clash puts you in command of massive armies where strategic positioning and timing of artillery strikes can turn the tide of battle. Live viewers can support their favorite commanders with resource drops and tactical advantages.</p>`
      },
      de: {
        title: 'Feuerkraft Konflikt: Echtzeit-Fraktionsschlacht',
        description: 'Befehlige Armeen und entfessele verheerende Feuerkraft in diesem intensiven Echtzeit-Kampfspiel',
        story: `<p>Feuerkraft Konflikt stellt dich an die Spitze gewaltiger Armeen, wo strategische Positionierung und das Timing von Artillerieangriffen den Ausgang der Schlacht entscheiden können. Live-Zuschauer können ihre bevorzugten Kommandeure mit Ressourcen-Drops und taktischen Vorteilen unterstützen.</p>`
      },
      fr: {
        title: 'Conflit de Puissance de Feu : Jeu de Bataille de Faction en Temps Réel',
        description: 'Commandez des armées et déchaînez une puissance de feu dévastatrice dans ce jeu de bataille intense en temps réel',
        story: `<p>Conflit de Puissance de Feu vous met aux commandes d'armées massives où le positionnement stratégique et le timing des frappes d'artillerie peuvent renverser le cours de la bataille. Les spectateurs en direct peuvent soutenir leurs commandants favoris avec des largages de ressources et des avantages tactiques.</p>`
      },
      ru: {
        title: 'Столкновение Огневой Мощи: Фракционная Битва в Реальном Времени',
        description: 'Командуйте армиями и высвобождайте разрушительную огневую мощь в этой интенсивной битве в реальном времени',
        story: `<p>Столкновение Огневой Мощи ставит вас во главе массивных армий, где стратегическое позиционирование и выбор времени артиллерийских ударов могут изменить ход битвы. Зрители в прямом эфире могут поддерживать своих любимых командиров сбросом ресурсов и тактическими преимуществами.</p>`
      },
      zh: {
        title: '火力冲突：实时派系战斗游戏',
        description: '在这款激烈的实时战斗游戏中指挥军队并释放毁灭性火力',
        story: `<p>火力冲突让你指挥庞大的军队，战略性的定位和火炮打击的时机可以改变战局。直播观众可以通过资源投放和战术优势支持他们喜欢的指挥官。</p>`
      },
      ar: {
        title: 'صراع القوة النارية: لعبة معارك الفصائل في الوقت الفعلي',
        description: 'قم بقيادة الجيوش وأطلق القوة النارية المدمرة في هذه اللعبة القتالية المكثفة في الوقت الفعلي',
        story: `<p>صراع القوة النارية يضعك في قيادة جيوش ضخمة حيث يمكن للتموضع الاستراتيجي وتوقيت الضربات المدفعية أن يغير مجرى المعركة. يمكن للمشاهدين المباشرين دعم قادتهم المفضلين من خلال إسقاط الموارد والمزايا التكتيكية.</p>`
      },
      vi: {
        title: 'Đại Chiến Hỏa Lực: Trò Chơi Chiến Đấu Phe Phái Thời Gian Thực',
        description: 'Chỉ huy quân đội và giải phóng hỏa lực hủy diệt trong trò chơi chiến đấu căng thẳng thời gian thực này',
        story: `<p>Đại Chiến Hỏa Lực đặt bạn vào vị trí chỉ huy của những đội quân khổng lồ, nơi việc định vị chiến lược và thời điểm tấn công pháo binh có thể thay đổi cục diện trận chiến. Người xem trực tiếp có thể hỗ trợ chỉ huy yêu thích của họ bằng cách thả tài nguyên và lợi thế chiến thuật.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-6600K or AMD Ryzen 5 1600',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i7-8700K or AMD Ryzen 7 2700X',
        memory: '16 GB RAM'
      }
    }
  }
];