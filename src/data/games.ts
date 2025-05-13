import { Game } from '../types';

export const games: Game[] = [
  // Previous games...
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
  // ... rest of the games array
];