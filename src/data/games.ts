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
        story: `<p><strong>Battle of Heroes</strong> is a live-streaming PvP game inspired by the Three Kingdoms era, where viewers actively join the fight. With just a comment or like, fans choose sides, summon warriors, and shape the outcome live.</p>`
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
        description: 'Ein strategisches Verteidigungsspiel mit Einheitenbeschwörung durch Geschenke',
        story: `<p>In Block Rush nehmen Spieler an einem strategischen Verteidigungsspiel teil, bei dem sie Einheiten durch Geschenke beschwören und verbessern. Das Ziel ist es, Gegner durch strategische Platzierung zu überdauern.</p>`
      },
      fr: {
        title: 'Block Rush: Confrontation Stratégique par Cadeaux',
        description: 'Un jeu de défense stratégique avec invocation d\'unités par cadeaux',
        story: `<p>Dans Block Rush, les joueurs participent à un jeu de défense stratégique où ils invoquent et améliorent des unités grâce aux cadeaux. L'objectif est de survivre aux adversaires par un placement stratégique.</p>`
      },
      ru: {
        title: 'Block Rush: Стратегическая Битва Подарков',
        description: 'Стратегическая игра с призывом юнитов через подарки',
        story: `<p>В Block Rush игроки участвуют в стратегической оборонительной игре, где призывают и улучшают юнитов с помощью подарков. Цель - пережить противников стратегическим размещением юнитов.</p>`
      },
      zh: {
        title: '方块冲锋：礼物驱动的策略对决',
        description: '通过游戏内礼物召唤和升级单位的策略防御游戏',
        story: `<p>在方块冲锋中，玩家通过游戏内礼物召唤和升级单位进行策略防御。目标是通过战略性地放置防御和进攻单位来战胜对手。</p>`
      },
      ar: {
        title: 'بلوك راش: معركة استراتيجية بالهدايا',
        description: 'لعبة دفاع استراتيجية مع استدعاء وحدات عبر الهدايا',
        story: `<p>في بلوك راش، يشارك اللاعبون في لعبة دفاع استراتيجية حيث يستدعون ويطورون الوحدات باستخدام الهدايا. الهدف هو البقاء أطول من الخصوم من خلال التموضع الاستراتيجي.</p>`
      },
      vi: {
        title: 'Block Rush: Đối Đầu Chiến Lược Quà Tặng',
        description: 'Trò chơi phòng thủ chiến lược với triệu hồi đơn vị qua quà tặng',
        story: `<p>Trong Block Rush, người chơi tham gia trò chơi phòng thủ chiến lược, triệu hồi và nâng cấp đơn vị bằng quà tặng. Mục tiêu là tồn tại lâu hơn đối thủ bằng việc đặt đơn vị chiến lược.</p>`
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
    description: 'A tower defense game where stream viewers can help or hinder players',
    platform: 'PC',
    translations: {
      en: {
        title: 'Island Rush: Livestream Tower Defense Chaos',
        description: 'A tower defense game where stream viewers can help or hinder players',
        story: `<p>Island Rush brings a new twist to tower defense by integrating live stream interaction. Viewers can send resources, spawn enemies, or activate special events that change the course of the game.</p>`
      },
      de: {
        title: 'Island Rush: Livestream Turmverteidigung Chaos',
        description: 'Ein Turmverteidigungsspiel mit Zuschauerinteraktion',
        story: `<p>Island Rush bringt eine neue Wendung in die Turmverteidigung durch Live-Stream-Interaktion. Zuschauer können Ressourcen senden, Gegner erschaffen oder Spezialereignisse auslösen.</p>`
      },
      fr: {
        title: 'Island Rush: Chaos de Défense en Direct',
        description: 'Un jeu de défense de tour où les spectateurs influencent la partie',
        story: `<p>Island Rush apporte une nouvelle dimension à la défense de tour avec l'interaction en direct. Les spectateurs peuvent envoyer des ressources, faire apparaître des ennemis ou déclencher des événements spéciaux.</p>`
      },
      ru: {
        title: 'Island Rush: Хаос Башенной Обороны',
        description: 'Игра в жанре tower defense с влиянием зрителей',
        story: `<p>Island Rush привносит новый поворот в башенную оборону через взаимодействие со стримом. Зрители могут отправлять ресурсы, создавать противников или активировать особые события.</p>`
      },
      zh: {
        title: '岛屿冲锋：直播塔防混战',
        description: '观众可以帮助或阻碍玩家的塔防游戏',
        story: `<p>岛屿冲锋通过直播互动为塔防带来新玩法。观众可以发送资源、生成敌人或触发改变游戏进程的特殊事件。</p>`
      },
      ar: {
        title: 'جزيرة راش: فوضى دفاع الأبراج المباشر',
        description: 'لعبة دفاع عن الأبراج حيث يمكن للمشاهدين مساعدة أو إعاقة اللاعبين',
        story: `<p>تقدم جزيرة راش تحولاً جديداً في ألعاب دفاع الأبراج من خلال التفاعل المباشر. يمكن للمشاهدين إرسال موارد أو استدعاء أعداء أو تفعيل أحداث خاصة.</p>`
      },
      vi: {
        title: 'Island Rush: Hỗn Loạn Phòng Thủ Trực Tiếp',
        description: 'Trò chơi phòng thủ tháp với sự tương tác của người xem',
        story: `<p>Island Rush mang đến một bước ngoặt mới cho thể loại phòng thủ tháp thông qua tương tác trực tiếp. Người xem có thể gửi tài nguyên, tạo ra kẻ thù hoặc kích hoạt các sự kiện đặc biệt.</p>`
      }
    },
    systemRequirements: {
      minimum: {
        os: 'Windows 7 (64-bit)',
        processor: 'Intel Core i3-6100 or AMD FX-4350',
        memory: '8 GB RAM'
      },
      recommended: {
        os: 'Windows 10 (64-bit)',
        processor: 'Intel Core i5-8400 or AMD Ryzen 5 2600',
        memory: '16 GB RAM'
      }
    }
  }
  // ... Continue with all other games following the same pattern
];