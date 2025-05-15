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
    description: 'Paint your way to victory in this vibrant multiplayer battle arena',
    platform: 'PC',
    translations: {
      en: {
        title: 'Color War',
        description: 'Paint your way to victory in this vibrant multiplayer battle arena',
        story: `<p>Color War transforms the battlefield into a canvas where your artistic skills determine your success. Team up with friends to paint and claim territory in this unique multiplayer experience.</p>`
      },
      de: {
        title: 'Farbenkrieg',
        description: 'Male deinen Weg zum Sieg in dieser lebendigen Mehrspieler-Kampfarena',
        story: `<p>Farbenkrieg verwandelt das Schlachtfeld in eine Leinwand, auf der deine künstlerischen Fähigkeiten deinen Erfolg bestimmen. Schließe dich mit Freunden zusammen, um in diesem einzigartigen Mehrspielererlebnis Territorium zu bemalen und zu beanspruchen.</p>`
      },
      fr: {
        title: 'Guerre des Couleurs',
        description: 'Peignez votre chemin vers la victoire dans cette arène de bataille multijoueur vibrante',
        story: `<p>Guerre des Couleurs transforme le champ de bataille en une toile où vos compétences artistiques déterminent votre succès. Faites équipe avec des amis pour peindre et revendiquer du territoire dans cette expérience multijoueur unique.</p>`
      },
      ru: {
        title: 'Война Красок',
        description: 'Прокладывайте путь к победе красками в этой яркой многопользовательской боевой арене',
        story: `<p>Война Красок превращает поле боя в холст, где ваши художественные навыки определяют успех. Объединяйтесь с друзьями, чтобы раскрашивать и захватывать территорию в этом уникальном многопользовательском опыте.</p>`
      },
      zh: {
        title: '色彩战争',
        description: '在这个充满活力的多人战斗竞技场中用绘画赢得胜利',
        story: `<p>色彩战争将战场变成画布，你的艺术技巧决定成败。在这个独特的多人游戏体验中与朋友组队绘画并占领领地。</p>`
      },
      ar: {
        title: 'حرب الألوان',
        description: 'ارسم طريقك نحو النصر في ساحة معركة متعددة اللاعبين نابضة بالحياة',
        story: `<p>حرب الألوان تحول ساحة المعركة إلى لوحة فنية حيث تحدد مهاراتك الفنية نجاحك. تعاون مع الأصدقاء للرسم والمطالبة بالأراضي في هذه التجربة الفريدة متعددة اللاعبين.</p>`
      },
      vi: {
        title: 'Chiến Tranh Sắc Màu',
        description: 'Vẽ con đường chiến thắng trong đấu trường nhiều người chơi sôi động này',
        story: `<p>Chiến Tranh Sắc Màu biến chiến trường thành một bức tranh, nơi kỹ năng nghệ thuật của bạn quyết định thành công. Hợp tác với bạn bè để vẽ và giành lãnh thổ trong trải nghiệm nhiều người chơi độc đáo này.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 (64-bit)',
        processor: 'Intel Core i3-3220 or AMD FX-4350',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-6600K or AMD Ryzen 3 1300X',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 9,
    title: 'Dragon Ball Duel',
    imageUrl: '/assets/Dragon Ball Duel_ A New Era of Dragon Ball Combat Awaits.jpg',
    description: 'Experience the next evolution of Dragon Ball combat in this action-packed battle arena',
    platform: 'PC',
    translations: {
      en: {
        title: 'Dragon Ball Duel',
        description: 'Experience the next evolution of Dragon Ball combat in this action-packed battle arena',
        story: `<p>Dragon Ball Duel brings the iconic anime series into a new era of competitive gaming. Master legendary techniques, transform mid-battle, and prove yourself in intense PvP matches.</p>`
      },
      de: {
        title: 'Dragon Ball Duell',
        description: 'Erlebe die nächste Evolution des Dragon Ball Kampfes in dieser actiongeladenen Kampfarena',
        story: `<p>Dragon Ball Duell bringt die ikonische Anime-Serie in eine neue Ära des kompetitiven Gamings. Meistere legendäre Techniken, transformiere mitten im Kampf und beweise dich in intensiven PvP-Matches.</p>`
      },
      fr: {
        title: 'Duel Dragon Ball',
        description: 'Découvrez la prochaine évolution du combat Dragon Ball dans cette arène de bataille pleine d\'action',
        story: `<p>Duel Dragon Ball amène la série d'anime iconique dans une nouvelle ère du gaming compétitif. Maîtrisez des techniques légendaires, transformez-vous en plein combat et prouvez-vous dans des matchs PvP intenses.</p>`
      },
      ru: {
        title: 'Дуэль Драгон Болл',
        description: 'Испытайте следующую эволюцию сражений Dragon Ball в этой насыщенной действием боевой арене',
        story: `<p>Дуэль Драгон Болл переносит культовый аниме-сериал в новую эру соревновательных игр. Освойте легендарные техники, трансформируйтесь в разгар боя и докажите себя в интенсивных PvP-матчах.</p>`
      },
      zh: {
        title: '龙珠对决',
        description: '在这个充满动作的战斗竞技场中体验龙珠战斗的新进化',
        story: `<p>龙珠对决将标志性的动漫系列带入竞技游戏的新时代。掌握传奇技能，战斗中变身，在激烈的PvP对战中证明自己。</p>`
      },
      ar: {
        title: 'مبارزة دراغون بول',
        description: 'اختبر التطور التالي لقتال دراغون بول في ساحة المعركة المليئة بالحركة',
        story: `<p>مبارزة دراغون بول تجلب سلسلة الأنمي الشهيرة إلى عصر جديد من الألعاب التنافسية. أتقن التقنيات الأسطورية، تحول في منتصف المعركة، وأثبت نفسك في مباريات PvP مكثفة.</p>`
      },
      vi: {
        title: 'Đấu Trường Dragon Ball',
        description: 'Trải nghiệm sự tiến hóa tiếp theo của Dragon Ball trong đấu trường chiến đấu đầy hành động này',
        story: `<p>Đấu Trường Dragon Ball mang series anime biểu tượng vào kỷ nguyên mới của gaming cạnh tranh. Làm chủ các kỹ thuật huyền thoại, biến đổi giữa trận đấu và chứng minh bản thân trong các trận đấu PvP gay cấn.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-4460 or AMD FX-6300',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 (64-bit)',
        processor: 'Intel Core i7-7700K or AMD Ryzen 5 2600',
        memory: '16 GB RAM'
      }
    }
  },
  {
    id: 10,
    title: 'Elves Battle',
    imageUrl: '/assets/Elves Battle_ Command the Chaos of Your TikTok Live.jpg',
    description: 'Command magical elven forces in this enchanting real-time strategy game',
    platform: 'PC',
    translations: {
      en: {
        title: 'Elves Battle',
        description: 'Command magical elven forces in this enchanting real-time strategy game',
        story: `<p>Enter the mystical realm of Elves Battle, where ancient magic meets modern strategy. Lead your elven armies to victory through enchanted forests and magical battlegrounds.</p>`
      },
      de: {
        title: 'Elfenschlacht',
        description: 'Befehlige magische Elfenstreitkräfte in diesem bezaubernden Echtzeit-Strategiespiel',
        story: `<p>Betritt das mystische Reich der Elfenschlacht, wo uralte Magie auf moderne Strategie trifft. Führe deine Elfenarmeen durch verzauberte Wälder und magische Schlachtfelder zum Sieg.</p>`
      },
      fr: {
        title: 'Bataille des Elfes',
        description: 'Commandez des forces elfiques magiques dans ce jeu de stratégie en temps réel enchanteur',
        story: `<p>Entrez dans le royaume mystique de la Bataille des Elfes, où la magie ancienne rencontre la stratégie moderne. Menez vos armées elfiques à la victoire à travers des forêts enchantées et des champs de bataille magiques.</p>`
      },
      ru: {
        title: 'Битва Эльфов',
        description: 'Командуйте магическими эльфийскими силами в этой очаровательной стратегии в реальном времени',
        story: `<p>Войдите в мистическое царство Битвы Эльфов, где древняя магия встречается с современной стратегией. Ведите свои эльфийские армии к победе через зачарованные леса и магические поля сражений.</p>`
      },
      zh: {
        title: '精灵战争',
        description: '在这款迷人的即时战略游戏中指挥魔法精灵部队',
        story: `<p>进入精灵战争的神秘境界，在这里古老的魔法与现代战略相遇。带领你的精灵军队穿越魔法森林和战场走向胜利。</p>`
      },
      ar: {
        title: 'معركة الجان',
        description: 'قيادة قوات الجان السحرية في هذه اللعبة الاستراتيجية الساحرة في الوقت الفعلي',
        story: `<p>ادخل إلى عالم معركة الجان الغامض، حيث يلتقي السحر القديم بالاستراتيجية الحديثة. قد جيوش الجان إلى النصر عبر الغابات المسحورة وساحات المعارك السحرية.</p>`
      },
      vi: {
        title: 'Trận Chiến Tiên Tộc',
        description: 'Chỉ huy lực lượng tiên tộc ma thuật trong trò chơi chiến thuật thời gian thực mê hoặc này',
        story: `<p>Bước vào vương quốc huyền bí của Trận Chiến Tiên Tộc, nơi phép thuật cổ xưa gặp gỡ chiến thuật hiện đại. Dẫn dắt đội quân tiên tộc của bạn đến chiến thắng qua những khu rừng phép thuật và chiến trường ma thuật.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7/8/10 (64-bit)',
        processor: 'Intel Core i3-4160 or AMD equivalent',
        memory: '4 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-6600 or AMD Ryzen 5 1600',
        memory: '8 GB RAM'
      }
    }
  },
  {
    id: 11,
    title: 'Farm Field',
    imageUrl: '/assets/Farm Field_ Grow Big. Harvest More. Build Your Legacy.jpg',
    description: 'Build and manage your dream farm in this relaxing simulation game',
    platform: 'Mobile',
    translations: {
      en: {
        title: 'Farm Field',
        description: 'Build and manage your dream farm in this relaxing simulation game',
        story: `<p>Farm Field invites you to create your own agricultural paradise. Plant crops, raise animals, and expand your farm into a thriving enterprise while enjoying the peaceful countryside atmosphere.</p>`
      },
      de: {
        title: 'Bauernhof',
        description: 'Baue und verwalte deinen Traumhof in diesem entspannenden Simulationsspiel',
        story: `<p>Bauernhof lädt dich ein, dein eigenes landwirtschaftliches Paradies zu erschaffen. Pflanze Feldfrüchte an, züchte Tiere und erweitere deinen Hof zu einem florierenden Unternehmen, während du die friedliche Landatmosphäre genießt.</p>`
      },
      fr: {
        title: 'Champ Agricole',
        description: 'Construisez et gérez votre ferme de rêve dans ce jeu de simulation relaxant',
        story: `<p>Champ Agricole vous invite à créer votre propre paradis agricole. Plantez des cultures, élevez des animaux et développez votre ferme en une entreprise prospère tout en profitant de l'atmosphère paisible de la campagne.</p>`
      },
      ru: {
        title: 'Фермерское Поле',
        description: 'Постройте и управляйте фермой своей мечты в этой расслабляющей симуляции',
        story: `<p>Фермерское Поле приглашает вас создать свой собственный сельскохозяйственный рай. Выращивайте урожай, разводите животных и превратите свою ферму в процветающее предприятие, наслаждаясь мирной атмосферой сельской местности.</p>`
      },
      zh: {
        title: '农场天地',
        description: '在这款轻松的模拟游戏中建造和管理你梦想中的农场',
        story: `<p>农场天地邀请你创建自己的农业天堂。种植农作物，饲养动物，将你的农场发展成一个繁荣的企业，同时享受宁静的乡村氛围。</p>`
      },
      ar: {
        title: 'حقل المزرعة',
        description: 'ابنِ وأدر مزرعة أحلامك في هذه اللعبة المحاكاة المريحة',
        story: `<p>حقل المزرعة يدعوك لإنشاء جنتك الزراعية الخاصة. ازرع المحاصيل، وربِّ الحيوانات، ووسع مزرعتك لتصبح مشروعًا مزدهرًا بينما تستمتع بأجواء الريف الهادئة.</p>`
      },
      vi: {
        title: 'Đồng Ruộng',
        description: 'Xây dựng và quản lý trang trại trong mơ của bạn trong trò chơi mô phỏng thư giãn này',
        story: `<p>Đồng Ruộng mời bạn tạo ra thiên đường nông nghiệp của riêng mình. Trồng cây, nuôi thú và mở rộng trang trại thành một doanh nghiệp phát đạt trong khi tận hưởng bầu không khí yên bình của vùng quê.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Android 5.0 or iOS 11.0',
        processor: 'Any modern smartphone processor',
        memory: '2 GB RAM'
      },
      recommended: {
        os: 'Android 8.0 or iOS 13.0',
        processor: 'Snapdragon 662 or equivalent',
        memory: '4 GB RAM'
      }
    }
  },
  {
    id: 12,
    title: 'Firepower Clash',
    imageUrl: '/assets/Firepower Clash_ Real-Time Faction Battle Game.jpg',
    description: 'Command powerful armies in intense real-time faction warfare',
    platform: 'PC',
    translations: {
      en: {
        title: 'Firepower Clash',
        description: 'Command powerful armies in intense real-time faction warfare',
        story: `<p>Firepower Clash throws you into the heart of epic battles where strategy meets raw power. Lead your faction to victory through tactical decisions and masterful unit control.</p>`
      },
      de: {
        title: 'Feuerkraft Konflikt',
        description: 'Befehlige mächtige Armeen in intensiven Echtzeit-Fraktionskämpfen',
        story: `<p>Feuerkraft Konflikt wirft dich mitten in epische Schlachten, wo Strategie auf pure Kraft trifft. Führe deine Fraktion durch taktische Entscheidungen und meisterhafte Einheitenkontrolle zum Sieg.</p>`
      },
      fr: {
        title: 'Conflit de Puissance de Feu',
        description: 'Commandez des armées puissantes dans une guerre de factions intense en temps réel',
        story: `<p>Conflit de Puissance de Feu vous plonge au cœur de batailles épiques où la stratégie rencontre la puissance brute. Menez votre faction à la victoire grâce à des décisions tactiques et un contrôle magistral des unités.</p>`
      },
      ru: {
        title: 'Столкновение Огневой Мощи',
        description: 'Командуйте могущественными армиями в интенсивных сражениях фракций в реальном времени',
        story: `<p>Столкновение Огневой Мощи бросает вас в эпицентр эпических сражений, где стратегия встречается с чистой силой. Ведите свою фракцию к победе через тактические решения и мастерское управление отрядами.</p>`
      },
      zh: {
        title: '火力冲突',
        description: '在激烈的实时阵营战争中指挥强大军队',
        story: `<p>火力冲突将你投入史诗般的战斗中心，战略与原始力量在此相遇。通过战术决策和精湛的单位控制带领你的阵营走向胜利。</p>`
      },
      ar: {
        title: 'صراع القوة النارية',
        description: 'قيادة الجيوش القوية في حرب الفصائل المكثفة في الوقت الفعلي',
        story: `<p>صراع القوة النارية يلقي بك في قلب المعارك الملحمية حيث تلتقي الاستراتيجية بالقوة الخام. قد فصيلتك إلى النصر من خلال القرارات التكتيكية والتحكم المتقن بالوحدات.</p>`
      },
      vi: {
        title: 'Đụng Độ Hỏa Lực',
        description: 'Chỉ huy những đội quân hùng mạnh trong chiến tranh phe phái thời gian thực căng thẳng',
        story: `<p>Đụng Độ Hỏa Lực ném bạn vào trung tâm của những trận chiến hoành tráng nơi chiến thuật gặp gỡ sức mạnh thuần túy. Dẫn dắt phe phái của bạn đến chiến thắng thông qua các quyết định chiến thuật và kiểm soát đơn vị điêu luyện.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-4460 or AMD FX-8350',
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
    id: 13,
    title: 'Honor of Kings',
    imageUrl: '/assets/Honor of Kings_ Command Legends. Conquer the Arena.jpg',
    description: 'Lead legendary heroes in epic 5v5 arena battles',
    platform: 'Mobile',
    translations: {
      en: {
        title: 'Honor of Kings',
        description: 'Lead legendary heroes in epic 5v5 arena battles',
        story: `<p>Honor of Kings brings together the greatest heroes from history and mythology in intense 5v5 MOBA combat. Master unique abilities, forge powerful alliances, and dominate the battlefield.</p>`
      },
      de: {
        title: 'Ehre der Könige',
        description: 'Führe legendäre Helden in epischen 5v5 Arena-Kämpfen',
        story: `<p>Ehre der Könige vereint die größten Helden aus Geschichte und Mythologie in intensiven 5v5 MOBA-Kämpfen. Meistere einzigartige Fähigkeiten, schmiede mächtige Allianzen und dominiere das Schlachtfeld.</p>`
      },
      fr: {
        title: 'Honneur des Rois',
        description: 'Dirigez des héros légendaires dans des batailles d\'arène épiques en 5v5',
        story: `<p>Honneur des Rois rassemble les plus grands héros de l'histoire et de la mythologie dans des combats MOBA intenses en 5v5. Maîtrisez des capacités uniques, forgez des alliances puissantes et dominez le champ de bataille.</p>`
      },
      ru: {
        title: 'Честь Королей',
        description: 'Возглавьте легендарных героев в эпических сражениях 5на5 на арене',
        story: `<p>Честь Королей объединяет величайших героев истории и мифологии в интенсивных 5на5 MOBA сражениях. Освойте уникальные способности, создайте мощные альянсы и доминируйте на поле боя.</p>`
      },
      zh: {
        title: '王者荣耀',
        description: '在史诗级5v5竞技场战斗中率领传奇英雄',
        story: `<p>王者荣耀将历史和神话中最伟大的英雄汇聚在激烈的5v5 MOBA战斗中。掌握独特技能，建立强大联盟，主宰战场。</p>`
      },
      ar: {
        title: 'شرف الملوك',
        description: 'قيادة الأبطال الأسطوريين في معارك الساحة الملحمية 5 ضد 5',
        story: `<p>شرف الملوك يجمع أعظم الأبطال من التاريخ والأساطير في قتال MOBA مكثف 5 ضد 5. أتقن القدرات الفريدة، وشكل التحالفات القوية، وسيطر على ساحة المعركة.</p>`
      },
      vi: {
        title: 'Vinh Quang Đế Vương',
        description: 'Lãnh đạo những anh hùng huyền thoại trong những trận chiến đấu trường 5v5 hoành tráng',
        story: `<p>Vinh Quang Đế Vương tập hợp những anh hùng vĩ đại nhất từ lịch sử và thần thoại trong các trận chiến MOBA 5v5 căng thẳng. Làm chủ các kỹ năng độc đáo, tạo dựng liên minh mạnh mẽ và thống trị chiến trường.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Android 5.1 or iOS 11.0',
        processor: 'Snapdragon 450 or equivalent',
        memory: '2 GB RAM'
      },
      recommended: {
        os: 'Android 8.0 or iOS 13.0',
        processor: 'Snapdragon 720G or equivalent',
        memory: '4 GB RAM'
      }
    }
  }
];