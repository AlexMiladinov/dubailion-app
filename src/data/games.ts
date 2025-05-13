import { Game } from '../types';

export const games: Game[] = [
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
        story: `<p>Join an epic battle between the Monkey King's rebels and the Heavenly Court's forces in this strategic mobile game. Stream viewers can support their chosen faction, summoning mythical warriors and unleashing powerful abilities that turn the tide of battle.</p>`
      },
      de: {
        title: 'Kampf der Westlichen Reise: Konflikt um den Goldenen Stab!',
        description: 'Ein strategisches Tauziehen um die Vorherrschaft mit den Fraktionen des Affenkönigs und des Himmlischen Hofes',
        story: `<p>Nehmen Sie teil an einer epischen Schlacht zwischen den Rebellen des Affenkönigs und den Streitkräften des Himmlischen Hofes. Stream-Zuschauer können ihre gewählte Fraktion unterstützen.</p>`
      },
      fr: {
        title: 'Mêlée du Voyage vers l\'Ouest: Combat pour le Bâton d\'Or!',
        description: 'Un bras de fer stratégique pour la domination, mettant en vedette le Roi Singe et la Cour Céleste',
        story: `<p>Rejoignez une bataille épique entre les rebelles du Roi Singe et les forces de la Cour Céleste. Les spectateurs peuvent soutenir leur faction choisie.</p>`
      },
      ru: {
        title: 'Битва Западного Путешествия: Схватка за Золотой Посох!',
        description: 'Стратегическое противостояние за господство между фракциями Короля Обезьян и Небесного Двора',
        story: `<p>Присоединитесь к эпической битве между повстанцами Короля Обезьян и силами Небесного Двора. Зрители стрима могут поддерживать выбранную фракцию.</p>`
      },
      zh: {
        title: '西游争霸：金箍棒之战！',
        description: '一场以齐天大圣和天庭阵营为主的战略拔河游戏',
        story: `<p>在这款策略手游中加入齐天大圣叛军与天庭势力之间的史诗战斗。直播观众可以支持他们选择的阵营，召唤神话战士并释放强大的技能来扭转战局。</p>`
      },
      ar: {
        title: 'معركة الرحلة الغربية: صراع على العصا الذهبية!',
        description: 'لعبة شد حبل استراتيجية للسيطرة، تضم فصائل ملك القرود والمحكمة السماوية',
        story: `<p>انضم إلى معركة ملحمية بين متمردي ملك القرود وقوات المحكمة السماوية. يمكن لمشاهدي البث دعم الفصيل الذي يختارونه.</p>`
      },
      vi: {
        title: 'Đại Chiến Tây Du: Tranh Đoạt Gậy Như Ý!',
        description: 'Trò chơi kéo co chiến thuật giành quyền thống trị, với các phe phái Tề Thiên Đại Thánh và Thiên Đình',
        story: `<p>Tham gia trận chiến hoành tráng giữa phe nổi loạn của Tề Thiên Đại Thánh và lực lượng Thiên Đình. Người xem stream có thể ủng hộ phe phái họ chọn.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Android 8.0+ or iOS 12.0+',
        processor: 'Snapdragon 665 or equivalent',
        memory: '3 GB RAM'
      },
      recommended: {
        os: 'Android 10.0+ or iOS 14.0+',
        processor: 'Snapdragon 732G or equivalent',
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
        story: `<p>Enter a world where every decision shapes the outcome of an epic faction war. As a rising champion, your choices and combat prowess will determine the fate of your chosen faction. Stream viewers can pledge allegiance and contribute to the war effort through interactive commands and support.</p>`
      },
      de: {
        title: 'Nenn Mich Champion: Forme den Fraktionskrieg mit Jeder Bewegung',
        description: 'Wähle deine Seite, kämpfe für Ruhm und sichere dir deinen Platz an der Spitze!',
        story: `<p>Betritt eine Welt, in der jede Entscheidung den Ausgang eines epischen Fraktionskrieges bestimmt. Als aufstrebender Champion entscheiden deine Wahl und deine Kampffähigkeiten über das Schicksal deiner gewählten Fraktion.</p>`
      },
      fr: {
        title: 'Appelez-Moi Champion: Façonnez la Guerre des Factions à Chaque Mouvement',
        description: 'Choisissez Votre Camp, Battez-vous pour la Gloire et Gagnez Votre Place au Sommet!',
        story: `<p>Entrez dans un monde où chaque décision façonne l'issue d'une guerre épique entre factions. En tant que champion montant, vos choix et votre prouesse au combat détermineront le destin de votre faction.</p>`
      },
      ru: {
        title: 'Зови Меня Чемпион: Определи Судьбу Войны Фракций Каждым Ходом',
        description: 'Выбери Свою Сторону, Сражайся за Славу и Заслужи Место на Вершине!',
        story: `<p>Войдите в мир, где каждое решение определяет исход эпической войны фракций. Как восходящий чемпион, ваш выбор и боевое мастерство определят судьбу вашей избранной фракции.</p>`
      },
      zh: {
        title: '称霸天下：以战定乾坤',
        description: '选择阵营，为荣耀而战，登顶称王！',
        story: `<p>进入一个每个决定都能影响史诗级派系战争结局的世界。作为崛起的冠军，你的选择和战斗实力将决定你所选派系的命运。直播观众可以通过互动命令和支持来宣誓效忠并为战争努力做出贡献。</p>`
      },
      ar: {
        title: 'نادني بطلاً: شكّل حرب الفصائل بكل خطوة',
        description: 'اختر جانبك، قاتل من أجل المجد، واكسب مكانك في القمة!',
        story: `<p>ادخل عالماً حيث كل قرار يشكل نتيجة حرب الفصائل الملحمية. كبطل صاعد، ستحدد اختياراتك وبراعتك في القتال مصير الفصيل الذي اخترته.</p>`
      },
      vi: {
        title: 'Gọi Ta Là Nhà Vô Địch: Định Hình Cuộc Chiến Phe Phái Trong Từng Bước Đi',
        description: 'Chọn Phe Của Bạn, Chiến Đấu Vì Vinh Quang, và Giành Lấy Vị Trí Của Bạn Ở Đỉnh Cao!',
        story: `<p>Bước vào thế giới nơi mỗi quyết định đều định hình kết quả của cuộc chiến phe phái hoành tráng. Là một nhà vô địch đang lên, sự lựa chọn và khả năng chiến đấu của bạn sẽ quyết định số phận của phe phái bạn chọn.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-8400 or AMD Ryzen 5 2600',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i7-9700K or AMD Ryzen 7 3700X',
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
        story: `<p>Take part in an interactive adventure where viewers decide the fate of the legendary Monkey King. Choose to either aid his daring escape from celestial imprisonment or join the heavenly forces trying to maintain order. Every viewer's decision shapes the story!</p>`
      },
      de: {
        title: 'Nennt Mich Da Sheng: Bestimme das Schicksal des Affenkönigs',
        description: 'Wirst du dem Affenkönig bei der Flucht helfen oder ihn aufhalten?',
        story: `<p>Nimm teil an einem interaktiven Abenteuer, bei dem die Zuschauer über das Schicksal des legendären Affenkönigs entscheiden. Hilf bei seiner waghalsigen Flucht aus der himmlischen Gefangenschaft oder schließe dich den himmlischen Kräften an.</p>`
      },
      fr: {
        title: 'Appelez-Moi Da Sheng: Façonnez le Destin du Roi Singe',
        description: 'Aiderez-vous le Roi Singe à s\'échapper, ou l\'arrêterez-vous dans sa course?',
        story: `<p>Participez à une aventure interactive où les spectateurs décident du destin du légendaire Roi Singe. Choisissez d'aider à son audacieuse évasion de l'emprisonnement céleste ou rejoignez les forces célestes.</p>`
      },
      ru: {
        title: 'Зови Меня Да Шэн: Определи Судьбу Короля Обезьян',
        description: 'Поможешь ли ты Королю Обезьян сбежать или остановишь его?',
        story: `<p>Примите участие в интерактивном приключении, где зрители решают судьбу легендарного Короля Обезьян. Выберите: помочь ему совершить дерзкий побег из небесного заточения или присоединиться к небесным силам.</p>`
      },
      zh: {
        title: '唤我大圣：决定齐天大圣的命运',
        description: '你是要帮助齐天大圣逃脱，还是要阻止他的脚步？',
        story: `<p>参与这场互动冒险，观众将决定传奇齐天大圣的命运。选择是协助他从天庭的囚禁中大胆逃脱，还是加入维护秩序的天兵天将。每个观众的决定都将塑造故事的走向！</p>`
      },
      ar: {
        title: 'نادوني دا شنغ: شكّل مصير ملك القرود',
        description: 'هل ستساعد ملك القرود على الهروب، أم ستوقفه في مساره؟',
        story: `<p>شارك في مغامرة تفاعلية حيث يقرر المشاهدون مصير ملك القرود الأسطوري. اختر إما مساعدته في الهروب الجريء من السجن السماوي أو الانضمام إلى القوات السماوية.</p>`
      },
      vi: {
        title: 'Gọi Ta Là Đại Thánh: Định Đoạt Số Phận của Tề Thiên Đại Thánh',
        description: 'Bạn sẽ giúp Tề Thiên Đại Thánh trốn thoát, hay ngăn chặn ông ấy?',
        story: `<p>Tham gia cuộc phiêu lưu tương tác nơi người xem quyết định số phận của Tề Thiên Đại Thánh huyền thoại. Lựa chọn giúp đỡ cuộc đào tẩu táo bạo khỏi ngục thất thiên đình hoặc gia nhập lực lượng thiên binh.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 10 64-bit',
        processor: 'Intel Core i5-7400 or AMD Ryzen 3 3100',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10/11 64-bit',
        processor: 'Intel Core i7-8700 or AMD Ryzen 5 3600',
        memory: '16 GB RAM'
      }
    }
  }
];