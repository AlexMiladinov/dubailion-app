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
    title: "King's Duel: Fantasy Clash in Real Time",
    imageUrl: "/assets/King's Duel_ Fantasy Clash in Real Time.jpg",
    description: "Command your fantasy army in epic real-time battles where strategy meets magic",
    platform: "PC",
    translations: {
      en: {
        title: "King's Duel: Fantasy Clash in Real Time",
        description: "Command your fantasy army in epic real-time battles where strategy meets magic",
        story: `<p>Enter a realm where magic and military might collide in real-time strategic warfare. Lead your fantasy armies to victory through tactical brilliance and magical supremacy.</p>`
      },
      de: {
        title: "Duell der Könige: Fantasy-Kampf in Echtzeit",
        description: "Befehlige deine Fantasy-Armee in epischen Echtzeit-Schlachten, wo Strategie auf Magie trifft",
        story: `<p>Betritt eine Welt, in der Magie und militärische Macht in strategischer Kriegsführung in Echtzeit aufeinandertreffen. Führe deine Fantasy-Armeen durch taktische Brillanz und magische Überlegenheit zum Sieg.</p>`
      },
      fr: {
        title: "Duel des Rois : Affrontement Fantastique en Temps Réel",
        description: "Commandez votre armée fantastique dans des batailles épiques en temps réel où la stratégie rencontre la magie",
        story: `<p>Entrez dans un royaume où la magie et la puissance militaire s'affrontent dans une guerre stratégique en temps réel. Menez vos armées fantastiques à la victoire grâce à la brillance tactique et la suprématie magique.</p>`
      },
      ru: {
        title: "Королевская Дуэль: Фэнтезийные Сражения в Реальном Времени",
        description: "Командуйте фэнтезийной армией в эпических сражениях в реальном времени, где стратегия встречается с магией",
        story: `<p>Войдите в мир, где магия и военная мощь сталкиваются в стратегической войне в реальном времени. Ведите свои фэнтезийные армии к победе через тактическое мастерство и магическое превосходство.</p>`
      },
      zh: {
        title: "王者对决：实时奇幻冲突",
        description: "在战略与魔法交织的史诗级实时战斗中指挥你的奇幻军队",
        story: `<p>进入一个魔法与军事力量在实时战略战争中碰撞的领域。通过战术才智和魔法优势带领你的奇幻军队走向胜利。</p>`
      },
      ar: {
        title: "مبارزة الملوك: صراع الخيال في الوقت الحقيقي",
        description: "قُد جيشك الخيالي في معارك ملحمية في الوقت الحقيقي حيث تلتقي الاستراتيجية بالسحر",
        story: `<p>ادخل عالماً حيث يتصادم السحر والقوة العسكرية في حرب استراتيجية في الوقت الحقيقي. قُد جيوشك الخيالية إلى النصر من خلال البراعة التكتيكية والتفوق السحري.</p>`
      },
      vi: {
        title: "Quyết Đấu Vương Giả: Đụng Độ Kỳ Ảo Thời Gian Thực",
        description: "Chỉ huy đội quân kỳ ảo của bạn trong những trận chiến sử thi thời gian thực nơi chiến lược gặp phép thuật",
        story: `<p>Bước vào một vương quốc nơi phép thuật và sức mạnh quân sự va chạm trong chiến tranh chiến lược thời gian thực. Dẫn dắt đội quân kỳ ảo của bạn đến chiến thắng thông qua tài năng chiến thuật và ưu thế phép thuật.</p>`
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
    id: 9,
    title: "League of Monsters: Command. Conquer. Survive",
    imageUrl: "/assets/League of Monsters_ Command. Conquer. Survive.jpg",
    description: "Lead your monster army to victory in this tactical battle arena game",
    platform: "PC",
    translations: {
      en: {
        title: "League of Monsters: Command. Conquer. Survive",
        description: "Lead your monster army to victory in this tactical battle arena game",
        story: `<p>In League of Monsters, command fearsome creatures in intense tactical battles. Each monster brings unique abilities and strategies to the battlefield.</p>`
      },
      de: {
        title: "Liga der Monster: Befehligen. Erobern. Überleben",
        description: "Führe deine Monster-Armee in diesem taktischen Arena-Kampfspiel zum Sieg",
        story: `<p>In Liga der Monster befehligst du furchterregende Kreaturen in intensiven taktischen Schlachten. Jedes Monster bringt einzigartige Fähigkeiten und Strategien auf das Schlachtfeld.</p>`
      },
      fr: {
        title: "Ligue des Monstres : Commander. Conquérir. Survivre",
        description: "Menez votre armée de monstres à la victoire dans ce jeu d'arène tactique",
        story: `<p>Dans Ligue des Monstres, commandez des créatures redoutables dans des batailles tactiques intenses. Chaque monstre apporte des capacités et des stratégies uniques sur le champ de bataille.</p>`
      },
      ru: {
        title: "Лига Монстров: Командуй. Завоёвывай. Выживай",
        description: "Веди свою армию монстров к победе в этой тактической боевой арене",
        story: `<p>В Лиге Монстров командуй грозными существами в интенсивных тактических сражениях. Каждый монстр привносит уникальные способности и стратегии на поле боя.</p>`
      },
      zh: {
        title: "怪物联盟：指挥·征服·生存",
        description: "在这款战术竞技场游戏中带领你的怪物军团走向胜利",
        story: `<p>在怪物联盟中，指挥可怕的生物进行激烈的战术战斗。每个怪物都为战场带来独特的能力和策略。</p>`
      },
      ar: {
        title: "دوري الوحوش: قيادة. غزو. بقاء",
        description: "قُد جيش الوحوش إلى النصر في هذه اللعبة التكتيكية في ساحة المعركة",
        story: `<p>في دوري الوحوش، قُد المخلوقات المخيفة في معارك تكتيكية مكثفة. كل وحش يجلب قدرات واستراتيجيات فريدة إلى ساحة المعركة.</p>`
      },
      vi: {
        title: "Liên Minh Quái Vật: Chỉ Huy. Chinh Phục. Sinh Tồn",
        description: "Dẫn dắt đội quân quái vật của bạn đến chiến thắng trong trò chơi đấu trường chiến thuật này",
        story: `<p>Trong Liên Minh Quái Vật, chỉ huy những sinh vật đáng sợ trong các trận chiến chiến thuật gay cấn. Mỗi quái vật mang đến những khả năng và chiến thuật độc đáo trên chiến trường.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10 64-bit",
        processor: "Intel Core i3-6100 or AMD FX-6300",
        memory: "6 GB RAM"
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 or AMD Ryzen 5 2600",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 10,
    title: "Little Cat Fishing: Pull, Compete, and Conquer!",
    imageUrl: "/assets/Little Cat Fishing_ Pull, Compete, and Conquer!.jpg",
    description: "Join cute cats in an adorable fishing competition where skill meets strategy",
    platform: "Mobile",
    translations: {
      en: {
        title: "Little Cat Fishing: Pull, Compete, and Conquer!",
        description: "Join cute cats in an adorable fishing competition where skill meets strategy",
        story: `<p>Dive into the charming world of Little Cat Fishing, where adorable feline friends compete in strategic fishing challenges. Master different fishing techniques and collect rare catches!</p>`
      },
      de: {
        title: "Kleine Katzen Angeln: Ziehen, Wetteifern und Erobern!",
        description: "Schließe dich niedlichen Katzen in einem entzückenden Angelwettbewerb an, wo Geschick auf Strategie trifft",
        story: `<p>Tauche ein in die bezaubernde Welt von Kleine Katzen Angeln, wo entzückende Katzenfreunde in strategischen Angelherausforderungen wetteifern. Beherrsche verschiedene Angeltechniken und sammle seltene Fänge!</p>`
      },
      fr: {
        title: "Petits Chats Pêcheurs : Tirer, Rivaliser et Conquérir !",
        description: "Rejoignez des chats mignons dans une adorable compétition de pêche où l'habileté rencontre la stratégie",
        story: `<p>Plongez dans le monde charmant des Petits Chats Pêcheurs, où d'adorables amis félins s'affrontent dans des défis de pêche stratégiques. Maîtrisez différentes techniques de pêche et collectez des prises rares !</p>`
      },
      ru: {
        title: "Котята на Рыбалке: Тяни, Соревнуйся и Побеждай!",
        description: "Присоединяйтесь к милым котятам в очаровательном рыболовном соревновании, где мастерство встречается со стратегией",
        story: `<p>Погрузитесь в очаровательный мир Котят на Рыбалке, где милые пушистые друзья соревнуются в стратегических рыболовных испытаниях. Освойте различные техники рыбалки и соберите редкие уловы!</p>`
      },
      zh: {
        title: "小猫钓鱼：拉竿、竞技、制胜！",
        description: "在这个技巧与策略并重的可爱钓鱼比赛中与萌猫一起参与",
        story: `<p>潜入小猫钓鱼的迷人世界，可爱的猫咪朋友们在战略性钓鱼挑战中展开竞争。掌握不同的钓鱼技巧，收集稀有渔获！</p>`
      },
      ar: {
        title: "صيد القطط الصغيرة: اسحب، نافس، وانتصر!",
        description: "انضم إلى القطط اللطيفة في منافسة صيد السمك الجذابة حيث تلتقي المهارة بالاستراتيجية",
        story: `<p>اغمر نفسك في عالم صيد القطط الصغيرة الساحر، حيث يتنافس الأصدقاء القطط اللطفاء في تحديات الصيد الاستراتيجية. أتقن تقنيات الصيد المختلفة واجمع الصيد النادر!</p>`
      },
      vi: {
        title: "Mèo Con Câu Cá: Kéo, Thi Đấu và Chinh Phục!",
        description: "Tham gia cùng những chú mèo dễ thương trong cuộc thi câu cá đáng yêu nơi kỹ năng gặp chiến thuật",
        story: `<p>Đắm mình trong thế giới quyến rũ của Mèo Con Câu Cá, nơi những người bạn mèo đáng yêu cạnh tranh trong các thử thách câu cá chiến lược. Làm chủ các kỹ thuật câu cá khác nhau và thu thập những mẻ câu hiếm!</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Android 5.0 or iOS 11.0",
        processor: "1.5 GHz Quad-core",
        memory: "2 GB RAM"
      },
      recommended: {
        os: "Android 8.0 or iOS 13.0",
        processor: "2.0 GHz Octa-core",
        memory: "4 GB RAM"
      }
    }
  },
  {
    id: 11,
    title: "Mars Colliding with Earth 2: Stream. Battle. Conquer Worlds",
    imageUrl: "/assets/Mars Colliding with Earth 2_ Stream. Battle. Conquer Worlds.jpg",
    description: "Lead your faction in an interplanetary war where Earth and Mars collide",
    platform: "PC",
    translations: {
      en: {
        title: "Mars Colliding with Earth 2: Stream. Battle. Conquer Worlds",
        description: "Lead your faction in an interplanetary war where Earth and Mars collide",
        story: `<p>In this epic sequel, command your forces in a war that spans two planets. Use advanced technology and strategic warfare to determine the fate of both worlds.</p>`
      },
      de: {
        title: "Mars kollidiert mit der Erde 2: Streamen. Kämpfen. Welten erobern",
        description: "Führe deine Fraktion in einem interplanetaren Krieg, in dem Erde und Mars aufeinanderprallen",
        story: `<p>In dieser epischen Fortsetzung befehligst du deine Streitkräfte in einem Krieg, der sich über zwei Planeten erstreckt. Nutze fortschrittliche Technologie und strategische Kriegsführung, um das Schicksal beider Welten zu bestimmen.</p>`
      },
      fr: {
        title: "Mars entre en collision avec la Terre 2 : Stream. Combat. Conquête des Mondes",
        description: "Dirigez votre faction dans une guerre interplanétaire où la Terre et Mars s'affrontent",
        story: `<p>Dans cette suite épique, commandez vos forces dans une guerre qui s'étend sur deux planètes. Utilisez la technologie avancée et la guerre stratégique pour déterminer le destin des deux mondes.</p>`
      },
      ru: {
        title: "Столкновение Марса с Землей 2: Стрим. Битва. Завоевание Миров",
        description: "Возглавьте свою фракцию в межпланетной войне, где сталкиваются Земля и Марс",
        story: `<p>В этом эпическом продолжении командуйте своими силами в войне, охватывающей две планеты. Используйте передовые технологии и стратегическую войну, чтобы определить судьбу обоих миров.</p>`
      },
      zh: {
        title: "火星撞地球2：直播·战斗·征服世界",
        description: "在地球与火星碰撞的星际战争中领导你的阵营",
        story: `<p>在这部史诗续作中，指挥你的部队参与跨越两个星球的战争。运用先进技术和战略战争来决定两个世界的命运。</p>`
      },
      ar: {
        title: "اصطدام المريخ بالأرض 2: بث. معركة. غزو العوالم",
        description: "قُد فصيلتك في حرب بين الكواكب حيث تصطدم الأرض والمريخ",
        story: `<p>في هذا الجزء الملحمي، قُد قواتك في حرب تمتد عبر كوكبين. استخدم التكنولوجيا المتقدمة والحرب الاستراتيجية لتحديد مصير العالمين.</p>`
      },
      vi: {
        title: "Sao Hỏa Va Chạm Trái Đất 2: Stream. Chiến Đấu. Chinh Phục Thế Giới",
        description: "Lãnh đạo phe phái của bạn trong cuộc chiến liên hành tinh nơi Trái Đất và Sao Hỏa va chạm",
        story: `<p>Trong phần tiếp theo hoành tráng này, chỉ huy lực lượng của bạn trong cuộc chiến trải dài hai hành tinh. Sử dụng công nghệ tiên tiến và chiến tranh chiến lược để quyết định số phận của cả hai thế giới.</p>`
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
    id: 12,
    title: "Martial Duel II: The King's Invasion",
    imageUrl: "/assets/Martial Duel II_ The King_s Invasion.jpg",
    description: "Master ancient martial arts in this intense fighting game sequel",
    platform: "PC",
    translations: {
      en: {
        title: "Martial Duel II: The King's Invasion",
        description: "Master ancient martial arts in this intense fighting game sequel",
        story: `<p>Return to the world of martial arts mastery in this epic sequel. Face new challenges as you defend your realm against the invading King's forces using traditional combat techniques.</p>`
      },
      de: {
        title: "Kampfkunst-Duell II: Die Invasion des Königs",
        description: "Meistere alte Kampfkünste in dieser intensiven Kampfspiel-Fortsetzung",
        story: `<p>Kehre zurück in die Welt der Kampfkunst-Meisterschaft in dieser epischen Fortsetzung. Stelle dich neuen Herausforderungen, während du dein Reich mit traditionellen Kampftechniken gegen die eindringenden Streitkräfte des Königs verteidigst.</p>`
      },
      fr: {
        title: "Duel Martial II : L'Invasion du Roi",
        description: "Maîtrisez les arts martiaux anciens dans cette suite intense de jeu de combat",
        story: `<p>Retournez dans le monde de la maîtrise des arts martiaux dans cette suite épique. Affrontez de nouveaux défis en défendant votre royaume contre les forces envahissantes du Roi en utilisant des techniques de combat traditionnelles.</p>`
      },
      ru: {
        title: "Боевая Дуэль II: Вторжение Короля",
        description: "Овладейте древними боевыми искусствами в этом напряженном продолжении файтинга",
        story: `<p>Вернитесь в мир мастерства боевых искусств в этом эпическом продолжении. Встречайте новые вызовы, защищая свое царство от вторгающихся сил Короля, используя традиционные техники боя.</p>`
      },
      zh: {
        title: "武术对决II：王者入侵",
        description: "在这款激烈的格斗游戏续作中掌握古代武术",
        story: `<p>在这部史诗续作中重返武术大师的世界。使用传统战斗技巧面对新的挑战，抵御入侵的王者军队。</p>`
      },
      ar: {
        title: "المبارزة القتالية 2: غزو الملك",
        description: "أتقن فنون القتال القديمة في هذه النسخة المكثفة من لعبة القتال",
        story: `<p>عُد إلى عالم إتقان فنون القتال في هذا الجزء الملحمي. واجه تحديات جديدة أثناء دفاعك عن مملكتك ضد قوات الملك الغازية باستخدام تقنيات القتال التقليدية.</p>`
      },
      vi: {
        title: "Quyết Đấu Võ Thuật II: Cuộc Xâm Lược của Nhà Vua",
        description: "Làm chủ võ thuật cổ xưa trong phần tiếp theo của trò chơi đối kháng gay cấn này",
        story: `<p>Trở lại thế giới của bậc thầy võ thuật trong phần tiếp theo hoành tráng này. Đối mặt với những thách thức mới khi bạn bảo vệ vương quốc của mình chống lại lực lượng xâm lược của Nhà Vua bằng các kỹ thuật chiến đấu truyền thống.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10 64-bit",
        processor: "Intel Core i5-4460 or AMD FX-6300",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i7-7700 or AMD Ryzen 5 1600",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 13,
    title: "Minecraft Arena: Survive the Chaos, Rule the Arena",
    imageUrl: "/assets/Minecraft Arena_ Survive the Chaos, Rule the Arena.jpg",
    description: "Battle for supremacy in this action-packed Minecraft-style arena combat game",
    platform: "PC",
    translations: {
      en: {
        title: "Minecraft Arena: Survive the Chaos, Rule the Arena",
        description: "Battle for supremacy in this action-packed Minecraft-style arena combat game",
        story: `<p>Enter a blocky battlefield where strategy and survival skills determine your fate. Build, fight, and conquer in intense arena matches.</p>`
      },
      de: {
        title: "Minecraft Arena: Überlebe das Chaos, Beherrsche die Arena",
        description: "Kämpfe um die Vorherrschaft in diesem actiongeladenen Minecraft-artigen Arena-Kampfspiel",
        story: `<p>Betritt ein blockiges Schlachtfeld, wo Strategie und Überlebensfähigkeiten dein Schicksal bestimmen. Baue, kämpfe und erobere in intensiven Arena-Matches.</p>`
      },
      fr: {
        title: "Arène Minecraft : Survivez au Chaos, Dominez l'Arène",
        description: "Battez-vous pour la suprématie dans ce jeu de combat d'arène style Minecraft plein d'action",
        story: `<p>Entrez dans un champ de bataille cubique où la stratégie et les compétences de survie déterminent votre destin. Construisez, combattez et conquérez dans des matchs d'arène intenses.</p>`
      },
      ru: {
        title: "Minecraft Арена: Выживи в Хаосе, Правь Ареной",
        description: "Сражайся за превосходство в этой насыщенной действием боевой арене в стиле Minecraft",
        story: `<p>Войдите на блочное поле битвы, где стратегия и навыки выживания определяют вашу судьбу. Стройте, сражайтесь и побеждайте в интенсивных аренных матчах.</p>`
      },
      zh: {
        title: "我的世界竞技场：在混沌中生存，统治竞技场",
        description: "在这款充满动作的我的世界风格竞技场战斗游戏中争夺霸权",
        story: `<p>进入一个由策略和生存技能决定命运的方块战场。在激烈的竞技场比赛中建造、战斗和征服。</p>`
      },
      ar: {
        title: "ساحة ماينكرافت: انجُ من الفوضى، احكم الساحة",
        description: "قاتل من أجل السيادة في هذه اللعبة القتالية المليئة بالحركة على طراز ماينكرافت",
        story: `<p>ادخل ساحة معركة مكعبة حيث تحدد الاستر
اتيجية ومهارات البقاء مصيرك. ابنِ وقاتل واغزُ في مباريات ساحة مكثفة.</p>`
      },
      vi: {
        title: "Đấu Trường Minecraft: Sống Sót Trong Hỗn Loạn, Thống Trị Đấu Trường",
        description: "Chiến đấu giành quyền thống trị trong trò chơi đấu trường phong cách Minecraft đầy hành động này",
        story: `<p>Bước vào chiến trường khối vuông nơi chiến lược và kỹ năng sinh tồn quyết định số phận của bạn. Xây dựng, chiến đấu và chinh phục trong các trận đấu đấu trường gay cấn.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10",
        processor: "Intel Core i3-3210 or AMD A8-7600",
        memory: "4 GB RAM"
      },
      recommended: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4690 or AMD A10-7800",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 14,
    title: "Mole World Battle Adventure",
    imageUrl: "/assets/Mole World Battle Adventure.jpg",
    description: "Embark on an underground adventure in this cute but competitive mole-themed battle game",
    platform: "Mobile",
    translations: {
      en: {
        title: "Mole World Battle Adventure",
        description: "Embark on an underground adventure in this cute but competitive mole-themed battle game",
        story: `<p>Dig, battle, and explore in the charming world of competitive mole warriors. Use your digging skills and special abilities to outmaneuver opponents in underground arenas.</p>`
      },
      de: {
        title: "Maulwurf-Welt Kampfabenteuer",
        description: "Begib dich auf ein unterirdisches Abenteuer in diesem niedlichen aber wettbewerbsorientierten Maulwurf-Kampfspiel",
        story: `<p>Grabe, kämpfe und erkunde in der charmanten Welt der wetteifernden Maulwurf-Krieger. Nutze deine Grabfähigkeiten und Spezialfähigkeiten, um Gegner in unterirdischen Arenen auszumanövrieren.</p>`
      },
      fr: {
        title: "Aventure de Combat du Monde des Taupes",
        description: "Embarquez pour une aventure souterraine dans ce jeu de combat mignon mais compétitif sur le thème des taupes",
        story: `<p>Creusez, combattez et explorez dans le monde charmant des guerriers taupes compétitifs. Utilisez vos compétences de creusement et vos capacités spéciales pour surpasser vos adversaires dans des arènes souterraines.</p>`
      },
      ru: {
        title: "Боевые Приключения в Мире Кротов",
        description: "Отправьтесь в подземное приключение в этой милой, но соревновательной боевой игре про кротов",
        story: `<p>Копайте, сражайтесь и исследуйте в очаровательном мире соревнующихся кротов-воинов. Используйте свои навыки копания и особые способности, чтобы перехитрить противников в подземных аренах.</p>`
      },
      zh: {
        title: "鼹鼠世界战斗冒险",
        description: "在这款可爱但富有竞争性的鼹鼠主题战斗游戏中展开地下冒险",
        story: `<p>在充满魅力的竞技鼹鼠战士世界中挖掘、战斗和探索。使用你的挖掘技能和特殊能力在地下竞技场中战胜对手。</p>`
      },
      ar: {
        title: "مغامرة معركة عالم الخلد",
        description: "انطلق في مغامرة تحت الأرض في هذه اللعبة القتالية اللطيفة ولكن التنافسية بموضوع الخلد",
        story: `<p>احفر وقاتل واستكشف في عالم محاربي الخلد التنافسي الساحر. استخدم مهارات الحفر وقدراتك الخاصة للتفوق على الخصوم في الساحات تحت الأرض.</p>`
      },
      vi: {
        title: "Phiêu Lưu Chiến Đấu Thế Giới Chuột Chũi",
        description: "Bắt đầu cuộc phiêu lưu dưới lòng đất trong trò chơi chiến đấu dễ thương nhưng đầy tính cạnh tranh với chủ đề chuột chũi",
        story: `<p>Đào, chiến đấu và khám phá trong thế giới quyến rũ của các chiến binh chuột chũi đầy tính cạnh tranh. Sử dụng kỹ năng đào và khả năng đặc biệt để vượt qua đối thủ trong các đấu trường dưới lòng đất.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Android 5.0 or iOS 11.0",
        processor: "1.5 GHz Quad-core",
        memory: "2 GB RAM"
      },
      recommended: {
        os: "Android 8.0 or iOS 13.0",
        processor: "2.0 GHz Octa-core",
        memory: "4 GB RAM"
      }
    }
  },
  {
    id: 15,
    title: "Props Avalanche: Climb Fast, Dodge Chaos, Win Live!",
    imageUrl: "/assets/Props Avalanche_ Climb Fast, Dodge Chaos, Win Live!.jpg",
    description: "Race against time and opponents in this frantic prop-climbing challenge",
    platform: "PC",
    translations: {
      en: {
        title: "Props Avalanche: Climb Fast, Dodge Chaos, Win Live!",
        description: "Race against time and opponents in this frantic prop-climbing challenge",
        story: `<p>Scale an ever-changing mountain of props while dodging obstacles and competing against other players in real-time. Every decision counts in this fast-paced vertical challenge!</p>`
      },
      de: {
        title: "Requisiten-Lawine: Schnell Klettern, Chaos Ausweichen, Live Gewinnen!",
        description: "Wettkampf gegen Zeit und Gegner in dieser hektischen Requisiten-Kletter-Herausforderung",
        story: `<p>Erklimme einen sich ständig verändernden Berg von Requisiten, während du Hindernissen ausweichst und in Echtzeit gegen andere Spieler antrittst. Jede Entscheidung zählt in dieser schnellen vertikalen Herausforderung!</p>`
      },
      fr: {
        title: "Avalanche d'Accessoires : Grimpez Vite, Évitez le Chaos, Gagnez en Direct !",
        description: "Faites la course contre le temps et les adversaires dans ce défi frénétique d'escalade d'accessoires",
        story: `<p>Escaladez une montagne d'accessoires en constante évolution tout en évitant les obstacles et en affrontant d'autres joueurs en temps réel. Chaque décision compte dans ce défi vertical rapide !</p>`
      },
      ru: {
        title: "Лавина Предметов: Быстро Карабкайся, Уворачивайся от Хаоса, Побеждай в Прямом Эфире!",
        description: "Соревнуйтесь со временем и противниками в этом безумном испытании по карабканью по предметам",
        story: `<p>Взбирайтесь по постоянно меняющейся горе предметов, уворачиваясь от препятствий и соревнуясь с другими игроками в реальном времени. Каждое решение имеет значение в этом быстром вертикальном испытании!</p>`
      },
      zh: {
        title: "道具雪崩：快速攀爬，躲避混乱，实时制胜！",
        description: "在这个疯狂的道具攀爬挑战中与时间和对手赛跑",
        story: `<p>在不断变化的道具之山上攀爬，同时躲避障碍物并与其他玩家实时竞争。在这个快节奏的垂直挑战中，每个决定都至关重要！</p>`
      },
      ar: {
        title: "انهيار الدعائم: تسلق سريع، تجنب الفوضى، فوز مباشر!",
        description: "سباق ضد الوقت والخصوم في هذا التحدي المحموم لتسلق الدعائم",
        story: `<p>تسلق جبلاً متغيراً باستمرار من الدعائم مع تجنب العقبات والتنافس مع لاعبين آخرين في الوقت الفعلي. كل قرار مهم في هذا التحدي العمودي السريع!</p>`
      },
      vi: {
        title: "Thác Đổ Đạo Cụ: Leo Nhanh, Né Tránh Hỗn Loạn, Chiến Thắng Trực Tiếp!",
        description: "Đua với thời gian và đối thủ trong thử thách leo trèo đạo cụ điên cuồng này",
        story: `<p>Leo lên ngọn núi đạo cụ luôn thay đổi trong khi né tránh chướng ngại vật và cạnh tranh với người chơi khác trong thời gian thực. Mỗi quyết định đều quan trọng trong thử thách theo chiều dọc nhanh này!</p>`
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
    id: 16,
    title: "Props Cleaner: Tidy Up Fast, Before Chaos Hits!",
    imageUrl: "/assets/Props Cleaner_ Tidy Up Fast, Before Chaos Hits!.jpg",
    description: "Clean up the chaos in this fast-paced tidying challenge",
    platform: "PC",
    translations: {
      en: {
        title: "Props Cleaner: Tidy Up Fast, Before Chaos Hits!",
        description: "Clean up the chaos in this fast-paced tidying challenge",
        story: `<p>Race against time to organize and clean various environments before chaos takes over. Use special cleaning powers and compete with other players in real-time!</p>`
      },
      de: {
        title: "Requisiten-Putzer: Schnell Aufräumen, Bevor das Chaos Zuschlägt!",
        description: "Räume das Chaos in dieser schnellen Aufräum-Herausforderung auf",
        story: `<p>Wetteifere gegen die Zeit, um verschiedene Umgebungen zu organisieren und zu reinigen, bevor das Chaos überhand nimmt. Nutze spezielle Reinigungskräfte und tritt in Echtzeit gegen andere Spieler an!</p>`
      },
      fr: {
        title: "Nettoyeur d'Accessoires : Rangez Vite, Avant le Chaos !",
        description: "Nettoyez le chaos dans ce défi de rangement rapide",
        story: `<p>Faites la course contre le temps pour organiser et nettoyer différents environnements avant que le chaos ne prenne le dessus. Utilisez des pouvoirs de nettoyage spéciaux et affrontez d'autres joueurs en temps réel !</p>`
      },
      ru: {
        title: "Уборщик Реквизита: Убирайся Быстро, Пока Не Настал Хаос!",
        description: "Уберите хаос в этом быстром испытании по уборке",
        story: `<p>Соревнуйтесь со временем, чтобы организовать и очистить различные среды, прежде чем воцарится хаос. Используйте особые силы очистки и соревнуйтесь с другими игроками в реальном времени!</p>`
      },
      zh: {
        title: "道具清洁工：快速整理，混乱来临前！",
        description: "在这个快节奏的整理挑战中清理混乱",
        story: `<p>与时间赛跑，在混乱接管之前组织和清理各种环境。使用特殊清洁能力并与其他玩家实时竞争！</p>`
      },
      ar: {
        title: "منظف الدعائم: نظف بسرعة، قبل أن تضرب الفوضى!",
        description: "نظف الفوضى في هذا التحدي السريع للترتيب",
        story: `<p>سباق ضد الوقت لتنظيم وتنظيف البيئات المختلفة قبل أن تسيطر الفوضى. استخدم قوى التنظيف الخاصة وتنافس مع لاعبين آخرين في الوقت الفعلي!</p>`
      },
      vi: {
        title: "Người Dọn Dẹp Đạo Cụ: Dọn Dẹp Nhanh, Trước Khi Hỗn Loạn Ập Đến!",
        description: "Dọn dẹp hỗn loạn trong thử thách sắp xếp nhanh này",
        story: `<p>Đua với thời gian để tổ chức và làm sạch các môi trường khác nhau trước khi hỗn loạn chiếm ưu thế. Sử dụng sức mạnh làm sạch đặc biệt và cạnh tranh với người chơi khác trong thời gian thực!</p>`
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
    id: 17,
    title: "Protect the Princess: The Crown Will Choose",
    imageUrl: "/assets/Protect the Princess_ The Crown Will Choose.jpg",
    description: "Guard the princess through challenging battles and strategic decisions",
    platform: "PC",
    translations: {
      en: {
        title: "Protect the Princess: The Crown Will Choose",
        description: "Guard the princess through challenging battles and strategic decisions",
        story: `<p>Take on the role of a royal guardian in this strategic defense game. Make crucial decisions that will affect the kingdom's fate while protecting the princess from various threats.</p>`
      },
      de: {
        title: "Beschütze die Prinzessin: Die Krone wird Wählen",
        description: "Beschütze die Prinzessin durch herausfordernde Kämpfe und strategische Entscheidungen",
        story: `<p>Übernimm die Rolle eines königlichen Wächters in diesem strategischen Verteidigungsspiel. Triff wichtige Entscheidungen, die das Schicksal des Königreichs beeinflussen, während du die Prinzessin vor verschiedenen Bedrohungen schützt.</p>`
      },
      fr: {
        title: "Protégez la Princesse : La Couronne Choisira",
        description: "Gardez la princesse à travers des batailles difficiles et des décisions stratégiques",
        story: `<p>Prenez le rôle d'un gardien royal dans ce jeu de défense stratégique. Prenez des décisions cruciales qui affecteront le destin du royaume tout en protégeant la princesse de diverses menaces.</p>`
      },
      ru: {
        title: "Защити Принцессу: Корона Сделает Выбор",
        description: "Охраняйте принцессу через сложные битвы и стратегические решения",
        story: `<p>Возьмите на себя роль королевского стража в этой стратегической игре защиты. Принимайте важные решения, которые повлияют на судьбу королевства, защищая принцессу от различных угроз.</p>`
      },
      zh: {
        title: "保护公主：王冠将选择",
        description: "通过具有挑战性的战斗和战略决策保护公主",
        story: `<p>在这个战略防御游戏中担任皇家守卫的角色。在保护公主免受各种威胁的同时，做出影响王国命运的关键决定。</p>`
      },
      ar: {
        title: "حماية الأميرة: التاج سيختار",
        description: "احمِ الأميرة من خلال المعارك الصعبة والقرارات الاستراتيجية",
        story: `<p>تولى دور الحارس الملكي في هذه اللعبة الدفاعية الاستراتيجية. اتخذ قرارات حاسمة ستؤثر على مصير المملكة أثناء حماية الأميرة من التهديدات المختلفة.</p>`
      },
      vi: {
        title: "Bảo Vệ Công Chúa: Vương Miện Sẽ Chọn",
        description: "Bảo vệ công chúa qua những trận chiến đầy thử thách và quyết định chiến lược",
        story: `<p>Đảm nhận vai trò người bảo vệ hoàng gia trong trò chơi phòng thủ chiến lược này. Đưa ra những quyết định quan trọng sẽ ảnh hưởng đến số phận của vương quốc trong khi bảo vệ công chúa khỏi các mối đe dọa khác nhau.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 7/8/10",
        processor: "Intel Core i3-4160 or AMD FX-6300",
        memory: "6 GB RAM"
      },
      recommended: {
        os: "Windows 10",
        processor: "Intel Core i5-6600K or AMD Ryzen 5 1600",
        memory: "8 GB RAM"
      }
    }
  },
  {
    id: 18,
    title: "Ragnarok: Fight for the Final Victory!",
    imageUrl: "/assets/Ragnarok_ Fight for the Final Victory!.jpg",
    description: "Battle through Norse mythology in this epic action-adventure",
    platform: "PC",
    translations: {
      en: {
        title: "Ragnarok: Fight for the Final Victory!",
        description: "Battle through Norse mythology in this epic action-adventure",
        story: `<p>Embark on an epic journey through the nine realms of Norse mythology. Fight alongside gods and heroes as you prepare for the final battle of Ragnarök.</p>`
      },
      de: {
        title: "Ragnarök: Kämpfe für den Finalen Sieg!",
        description: "Kämpfe durch die nordische Mythologie in diesem epischen Action-Adventure",
        story: `<p>Begib dich auf eine epische Reise durch die neun Welten der nordischen Mythologie. Kämpfe an der Seite von Göttern und Helden, während du dich auf die finale Schlacht von Ragnarök vorbereitest.</p>`
      },
      fr: {
        title: "Ragnarök : Combattez pour la Victoire Finale !",
        description: "Battez-vous à travers la mythologie nordique dans cette aventure d'action épique",
        story: `<p>Embarquez pour un voyage épique à travers les neuf royaumes de la mythologie nordique. Combattez aux côtés des dieux et des héros alors que vous vous préparez pour la bataille finale du Ragnarök.</p>`
      },
      ru: {
        title: "Рагнарёк: Битва за Финальную Победу!",
        description: "Сражайтесь через скандинавскую мифологию в этом эпическом экшн-приключении",
        story: `<p>Отправьтесь в эпическое путешествие через девять миров скандинавской мифологии. Сражайтесь бок о бок с богами и героями, готовясь к финальной битве Рагнарёка.</p>`
      },
      zh: {
        title: "诸神黄昏：为最终胜利而战！",
        description: "在这场史诗级动作冒险中穿越北欧神话",
        story: `<p>踏上穿越北欧神话九界的史诗之旅。与众神和英雄并肩作战，为诸神黄昏的最终之战做准备。</p>`
      },
      ar: {
        title: "راغناروك: القتال من أجل النصر النهائي!",
        description: "قاتل عبر الأساطير الشمالية في هذه المغامرة الملحمية",
        story: `<p>انطلق في رحلة ملحمية عبر العوالم التسعة للأساطير الشمالية. قاتل إلى جانب الآلهة والأبطال بينما تستعد للمعركة النهائية لراغناروك.</p>`
      },
      vi: {
        title: "Ragnarok: Chiến Đấu Cho Chiến Thắng Cuối Cùng!",
        description: "Chiến đấu qua thần thoại Bắc Âu trong cuộc phiêu lưu hành động hoành tráng này",
        story: `<p>Bắt đầu hành trình hoành tráng qua chín cõi của thần thoại Bắc Âu. Chiến đấu bên cạnh các vị thần và anh hùng khi bạn chuẩn bị cho trận chiến cuối cùng của Ragnarök.</p>`
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
    id: 19,
    title: "Speed Racing",
    imageUrl: "/assets/Speed Racing.jpg",
    description: "Experience high-octane racing action with stunning graphics and realistic physics",
    platform: "PC",
    translations: {
      en: {
        title: "Speed Racing",
        description: "Experience high-octane racing action with stunning graphics and realistic physics",
        story: `<p>Push your limits in the most advanced racing simulation. Compete against skilled drivers, customize your vehicles, and master challenging tracks in your quest for racing glory.</p>`
      },
      de: {
        title: "Speed Racing",
        description: "Erlebe actiongeladenes Racing mit atemberaubender Grafik und realistischer Physik",
        story: `<p>Gehe in der fortschrittlichsten Rennsimulation an deine Grenzen. Tritt gegen geschickte Fahrer an, individualisiere deine Fahrzeuge und meistere anspruchsvolle Strecken in deinem Streben nach Rennruhm.</p>`
      },
      fr: {
        title: "Speed Racing",
        description: "Vivez l'action de course à haute octane avec des graphismes époustouflants et une physique réaliste",
        story: `<p>Repoussez vos limites dans la simulation de course la plus avancée. Affrontez des pilotes chevronnés, personnalisez vos véhicules et maîtrisez des circuits difficiles dans votre quête de gloire en course.</p>`
      },
      ru: {
        title: "Speed Racing",
        description: "Испытайте захватывающие гонки с потрясающей графикой и реалистичной физикой",
        story: `<p>Испытайте свои пределы в самой продвинутой гоночной симуляции. Соревнуйтесь с опытными гонщиками, настраивайте свои автомобили и осваивайте сложные трассы в погоне за гоночной славой.</p>`
      },
      zh: {
        title: "极速赛车",
        description: "体验具有惊人图形和真实物理效果的高能赛车动作",
        story: `<p>在最先进的赛车模拟中突破极限。在追求赛车荣耀的过程中与技术精湛的车手竞争，定制你的车辆，掌握具有挑战性的赛道。</p>`
      },
      ar: {
        title: "سباق السرعة",
        description: "اختبر إثارة السباقات عالية الأوكتان مع رسومات مذهلة وفيزياء واقعية",
        story: `<p>ادفع حدودك في أكثر محاكاة سباق تقدماً. تنافس ضد السائقين المهرة، خصص مركباتك، وأتقن المسارات الصعبة في سعيك نحو مجد السباقات.</p>`
      },
      vi: {
        title: "Đua Xe Tốc Độ",
        description: "Trải nghiệm hành động đua xe mạnh mẽ với đồ họa tuyệt đẹp và vật lý thực tế",
        story: `<p>Vượt qua giới hạn của bạn trong mô phỏng đua xe tiên tiến nhất. Cạnh tranh với các tay đua lành nghề, tùy chỉnh phương tiện của bạn và làm chủ các đường đua đầy thử thách trong hành trình tìm kiếm vinh quang đua xe.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-4590 or AMD FX-8350",
        memory: "8 GB RAM"
      },
      recommended: {
        os: "Windows 10/11 64-bit",
        processor: "Intel Core i7-8700K or AMD Ryzen 7 2700X",
        memory: "16 GB RAM"
      }
    }
  },
  {
    id: 20,
    title: "Three Kingdoms Brawl: Real-Time Faction War",
    imageUrl: "/assets/Three Kingdoms Brawl_ Real-Time Faction War.jpg",
    description: "Command legendary heroes in epic real-time battles set in ancient China",
    platform: "PC",
    translations: {
      en: {
        title: "Three Kingdoms Brawl: Real-Time Faction War",
        description: "Command legendary heroes in epic real-time battles set in ancient China",
        story: `<p>Lead your chosen faction to victory in this intense real-time strategy game based on the Three Kingdoms period. Deploy legendary warriors, execute tactical maneuvers, and shape the future of ancient China.</p>`
      },
      de: {
        title: "Drei-Reiche-Kampf: Echtzeit-Fraktionskrieg",
        description: "Befehlige legendäre Helden in epischen Echtzeit-Schlachten im alten China",
        story: `<p>Führe deine gewählte Fraktion in diesem intensiven Echtzeit-Strategiespiel aus der Zeit der Drei Reiche zum Sieg. Setze legendäre Krieger ein, führe taktische Manöver aus und gestalte die Zukunft des alten China.</p>`
      },
      fr: {
        title: "Bataille des Trois Royaumes : Guerre de Faction en Temps Réel",
        description: "Commandez des héros légendaires dans des batailles épiques en temps réel dans la Chine ancienne",
        story: `<p>Menez votre faction choisie à la victoire dans ce jeu de stratégie intense en temps réel basé sur la période des Trois Royaumes. Déployez des guerriers légendaires, exécutez des manœuvres tactiques et façonnez l'avenir de la Chine ancienne.</p>`
      },
      ru: {
        title: "Битва Трёх Королевств: Война Фракций в Реальном Времени",
        description: "Командуйте легендарными героями в эпических сражениях в реальном времени в древнем Китае",
        story: `<p>Приведите свою избранную фракцию к победе в этой напряженной стратегической игре в реальном времени, основанной на периоде Трёх Королевств. Развертывайте легендарных воинов, выполняйте тактические маневры и формируйте будущее древнего Китая.</p>`
      },
      zh: {
        title: "三国乱斗：实时派系战争",
        description: "在古代中国的史诗级实时战斗中指挥传奇英雄",
        story: `<p>在这款基于三国时期的激烈实时战略游戏中带领你选择的阵营走向胜利。部署传奇战士，执行战术机动，塑造古代中国的未来。</p>`
      },
      ar: {
        title: "عراك الممالك الثلاث: حرب الفصائل في الوقت الحقيقي",
        description: "قُد الأبطال الأسطوريين في معارك ملحمية في الوقت الحقيقي في الصين القديمة",
        story: `<p>قُد فصيلتك المختارة إلى النصر في هذه اللعبة الاستراتيجية المكثفة في الوقت الحقيقي المستندة إلى فترة الممالك الثلاث. انشر المحاربين الأسطوريين، نفذ المناورات التكتيكية، وشكل مستقبل الصين القديمة.</p>`
      },
      vi: {
        title: "Loạn Chiến Tam Quốc: Chiến Tranh Phe Phái Thời Gian Thực",
        description: "Chỉ huy các anh hùng huyền thoại trong các trận chiến sử thi thời gian thực ở Trung Quốc cổ đại",
        story: `<p>Dẫn dắt phe phái bạn chọn đến chiến thắng trong trò chơi chiến thuật thời gian thực gay cấn này dựa trên thời kỳ Tam Quốc. Triển khai các chiến binh huyền thoại, thực hiện các thao tác chiến thuật và định hình tương lai của Trung Quốc cổ đại.</p>`
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
  }
];