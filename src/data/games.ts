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
    title: '
    Chibi: Three Kingdoms — The Ultimate Battle for Glory!',
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
    description: 'A vibrant battle arena where colors clash and strategy prevails',
    platform: 'PC',
    translations: {
      en: {
        title: 'Color War',
        description: 'A vibrant battle arena where colors clash and strategy prevails',
        story: `<p>Enter a world where colors are your weapons and strategy is your shield. In Color War, players must master the art of color manipulation to dominate the battlefield.</p>`
      },
      de: {
        title: 'Farbenkrieg',
        description: 'Eine lebendige Kampfarena, in der Farben aufeinanderprallen und Strategie siegt',
        story: `<p>Betritt eine Welt, in der Farben deine Waffen und Strategie dein Schild sind. In Farbenkrieg müssen Spieler die Kunst der Farbenmanipulation meistern, um das Schlachtfeld zu beherrschen.</p>`
      },
      fr: {
        title: 'Guerre des Couleurs',
        description: 'Une arène de bataille vibrante où les couleurs s\'affrontent et la stratégie l\'emporte',
        story: `<p>Entrez dans un monde où les couleurs sont vos armes et la stratégie est votre bouclier. Dans Guerre des Couleurs, les joueurs doivent maîtriser l'art de la manipulation des couleurs pour dominer le champ de bataille.</p>`
      },
      ru: {
        title: 'Война Цветов',
        description: 'Яркая боевая арена, где сталкиваются цвета и побеждает стратегия',
        story: `<p>Войдите в мир, где цвета - ваше оружие, а стратегия - ваш щит. В Войне Цветов игроки должны овладеть искусством манипулирования цветом, чтобы доминировать на поле боя.</p>`
      },
      zh: {
        title: '色彩战争',
        description: '一个充满活力的战斗竞技场，色彩碰撞，策略制胜',
        story: `<p>进入一个色彩即为武器，策略即为盾牌的世界。在色彩战争中，玩家必须掌握色彩操控的艺术来主宰战场。</p>`
      },
      ar: {
        title: 'حرب الألوان',
        description: 'ساحة معركة نابضة بالحياة حيث تتصادم الألوان وتسود الاستراتيجية',
        story: `<p>ادخل عالماً حيث الألوان هي أسلحتك والاستراتيجية هي درعك. في حرب الألوان، يجب على اللاعبين إتقان فن التلاعب بالألوان للسيطرة على ساحة المعركة.</p>`
      },
      vi: {
        title: 'Chiến Tranh Sắc Màu',
        description: 'Đấu trường sôi động nơi màu sắc va chạm và chiến lược chiến thắng',
        story: `<p>Bước vào thế giới nơi màu sắc là vũ khí và chiến lược là lá chắn của bạn. Trong Chiến Tranh Sắc Màu, người chơi phải thành thạo nghệ thuật điều khiển màu sắc để thống trị chiến trường.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10',
        processor: 'Intel Core i3-3220 or AMD equivalent',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10',
        processor: 'Intel Core i5-4590 or AMD equivalent',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 9,
    title: 'Dragon Ball Duel: A New Era of Dragon Ball Combat Awaits',
    imageUrl: '/assets/Dragon Ball Duel_ A New Era of Dragon Ball Combat Awaits.jpg',
    description: 'Experience the next evolution of Dragon Ball combat with intense real-time battles',
    platform: 'PC',
    translations: {
      en: {
        title: 'Dragon Ball Duel: A New Era of Dragon Ball Combat Awaits',
        description: 'Experience the next evolution of Dragon Ball combat with intense real-time battles',
        story: `<p>Dragon Ball Duel brings the legendary anime series into a new era of gaming. Face off against other players in intense real-time battles where skill, strategy, and power levels truly matter.</p>`
      },
      de: {
        title: 'Dragon Ball Duell: Eine neue Ära des Dragon Ball Kampfes erwartet dich',
        description: 'Erlebe die nächste Evolution des Dragon Ball Kampfes mit intensiven Echtzeit-Schlachten',
        story: `<p>Dragon Ball Duell bringt die legendäre Anime-Serie in eine neue Gaming-Ära. Tritt gegen andere Spieler in intensiven Echtzeit-Kämpfen an, bei denen Können, Strategie und Kampfkraft wirklich zählen.</p>`
      },
      fr: {
        title: 'Dragon Ball Duel : Une Nouvelle Ère de Combat Dragon Ball Vous Attend',
        description: 'Découvrez la prochaine évolution du combat Dragon Ball avec des batailles intenses en temps réel',
        story: `<p>Dragon Ball Duel fait entrer la série d'anime légendaire dans une nouvelle ère du jeu. Affrontez d'autres joueurs dans des batailles intenses en temps réel où la compétence, la stratégie et les niveaux de puissance comptent vraiment.</p>`
      },
      ru: {
        title: 'Dragon Ball Дуэль: Новая Эра Сражений Dragon Ball',
        description: 'Испытайте следующую эволюцию сражений Dragon Ball с интенсивными боями в реальном времени',
        story: `<p>Dragon Ball Дуэль переносит легендарную аниме-серию в новую эру игр. Сразитесь с другими игроками в интенсивных боях в реальном времени, где действительно важны навыки, стратегия и уровни силы.</p>`
      },
      zh: {
        title: '龙珠对决：龙珠战斗的新纪元来临',
        description: '体验龙珠战斗的下一次进化，尽享激烈的实时战斗',
        story: `<p>龙珠对决将这部传奇动漫系列带入游戏的新纪元。在激烈的实时战斗中与其他玩家对决，技能、策略和战斗力真正重要。</p>`
      },
      ar: {
        title: 'دراغون بول ديول: حقبة جديدة من قتال دراغون بول في انتظارك',
        description: 'اختبر التطور التالي لقتال دراغون بول مع معارك مكثفة في الوقت الفعلي',
        story: `<p>يجلب دراغون بول ديول سلسلة الأنمي الأسطورية إلى حقبة جديدة من الألعاب. واجه لاعبين آخرين في معارك مكثفة في الوقت الفعلي حيث المهارة والاستراتيجية ومستويات القوة مهمة حقًا.</p>`
      },
      vi: {
        title: 'Dragon Ball Đối Đầu: Kỷ Nguyên Mới Của Trận Chiến Dragon Ball',
        description: 'Trải nghiệm sự tiến hóa tiếp theo của Dragon Ball với những trận chiến thời gian thực gay cấn',
        story: `<p>Dragon Ball Đối Đầu mang series anime huyền thoại vào kỷ nguyên mới của gaming. Đối đầu với những người chơi khác trong các trận chiến thời gian thực gay cấn, nơi kỹ năng, chiến lược và cấp độ sức mạnh thực sự quan trọng.</p>`
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