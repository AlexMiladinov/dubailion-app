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
  }
];