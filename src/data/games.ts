import { Game } from '../types';

export const games: Game[] = [
  {
    id: 1,
    title: 'King of Soldiers: Who will rule the battlefield?',
    imageUrl: '/assets/King of Soldiers.jpg',
    description: 'A live combat game powered by everyone watching',
    platform: 'PC',
    translations: {
      en: {
        title: 'King of Soldiers: Who will rule the battlefield?',
        description: 'A live combat game powered by everyone watching',
        story: `<p>In King of Soldiers, your actions shape the battlefield in real time. Choose your side! Would you join the Yellow Order or the Green Syndicate?</p>
        <p>Throw your support into the fight by dropping comments, smashing likes, and sending in-game gifts that summon tanks, drones, or even nukes. Real players, real impact.</p>
        <p>Cards are your arsenal, use them smart and rise through the ranks. Each play adds to the pool, and top contributors walk away with exclusive titles and a share of the win.</p>
        <p>The bigger the battle, the louder your impact. Pick a side, play smart, and shift the tide live.</p>
        <p>Lead the charge. Seize the battlefield. Will you be able to survive the chaos?</p>`
      },
      ar: {
        title: 'ملك الجنود: من سيحكم ساحة المعركة؟',
        description: 'لعبة قتال حية، مدعومة من كل من يشاهدها',
        story: `<p>في لعبة King of Soldiers، أفعالك تُغيّر مجرى المعركة في الوقت الفعلي. اختر جانبك! هل ستنضم إلى نظام الأصفر أم إلى تحالف الأخضر؟</p>
        <p>ادعم المعركة بالتعليقات، الإعجابات، وإرسال الهدايا داخل اللعبة التي تستدعي الدبابات، الطائرات المُسيّرة، أو حتى الضربات النووية. اللاعبون الحقيقيون يصنعون الفارق الحقيقي.</p>
        <p>البطاقات هي سلاحك، فاستخدمها بذكاء لتتقدم في التصنيفات. كل خطوة تساهم في الرصيد العام، وأصحاب أعلى مساهمات يحصلون على ألقاب حصرية وجزء من المكافأة.</p>
        <p>كلما اشتدت المعركة، زاد تأثيرك. اختر جانبك، العب بذكاء، وغيّر مسار المعركة مباشرة.</p>
        <p>قد الهجوم. سيطر على أرض المعركة. هل ستتمكن من النجاة وسط الفوضى؟</p>`
      },
      de: {
        title: 'König der Soldaten: Wer wird das Schlachtfeld beherrschen?',
        description: 'Ein Live-Kampf, der von allen Zuschauern unterstützt wird',
        story: `<p>In King of Soldiers bestimmen deine Aktionen das Schlachtfeld in Echtzeit. Wählen Sie Ihre Seite! Würden Sie sich dem Gelben Orden oder dem Grünen Syndikat anschließen?</p>
        <p>Unterstütze den Kampf, indem du Kommentare abgibst, Likes abgibst und Geschenke im Spiel verschickst, die Panzer, Drohnen oder sogar Atombomben herbeirufen. Echte Spieler, echte Wirkung.</p>
        <p>Karten sind dein Arsenal, nutze sie klug und steige in den Rängen auf. Mit jedem Spiel wird der Pool erweitert, und wer am meisten beiträgt, erhält exklusive Titel und einen Teil des Gewinns.</p>
        <p>Je größer die Schlacht, desto lauter ist dein Einfluss. Entscheiden Sie sich für eine Seite, spielen Sie clever und ändern Sie das Blatt live.</p>
        <p>Führen Sie den Angriff an. Erobern Sie das Schlachtfeld. Werden Sie das Chaos überleben können?</p>`
      },
      ru: {
        title: 'King of Soldiers: Кто захватит поле боя?',
        description: 'Сражение в реальном времени, в котором участвуют все зрители',
        story: `<p>В King of Soldiers твои действия меняют поле боя в реальном времени. Выбирай сторону! Ты присоединишься к Жёлтому Ордену или Зелёному Синдикату?</p>
        <p>Поддержи бой: пиши комментарии, ставь лайки и отправляй внутриигровые подарки — они вызывают танки, дроны или даже ядерные удары. Настоящие игроки, настоящий эффект.</p>
        <p>Карты — твоё оружие. Используй их с умом и поднимайся в рейтинге. Каждое действие пополняет общий пул, а лучшие участники получают эксклюзивные титулы и часть награды.</p>
        <p>Чем масштабнее битва, тем громче твое влияние. Выбери сторону, играй с умом и меняй ход битвы в прямом эфире.</p>
        <p>Веди атаку. Захвати поле боя. Сможешь ли ты выжить в этом хаосе?</p>`
      },
      fr: {
        title: 'Roi des Soldats : Qui dirigera le champ de bataille?',
        description: 'Un combat en direct, animé par tous les spectateurs',
        story: `<p>Dans Roi des soldats, vos actions façonnent le champ de bataille en temps réel. Choisissez votre camp! Souhaitez-vous rejoindre le Ordre jaune ou le Syndicat vert?</p>
        <p>Apportez votre soutien au combat en laissant des commentaires, en écrasant des likes et en envoyant des cadeaux dans le jeu qui invoquent des chars, des drones ou même des armes nucléaires. De vrais joueurs, un véritable impact.</p>
        <p>Les cartes sont votre arsenal, utilisez-les intelligemment et gravissez les échelons. Chaque jeu s'ajoute au pool et les meilleurs contributeurs repartent avec des titres exclusifs et une part des gains.</p>
        <p>Plus la bataille est grande, plus votre impact est fort. Choisissez un camp, jouez intelligemment et inversez la tendance en direct.</p>
        <p>Menez la charge. Saisissez le champ de bataille. Serez-vous capable de survivre au chaos?</p>`
      },
      zh: {
        title: '士兵之王：谁将统治战场？',
        description: '实时战斗游戏，由所有观众共同驱动',
        story: `<p>在《士兵之王》中，你的每一步行动都将实时影响战场局势。选择你的阵营！你将加入黄衣军团还是绿衣 syndicate？</p>
        <p>通过评论、点赞和发送游戏内礼物（召唤坦克、无人机甚至核弹）来支持你的阵营。真实玩家，真实影响。</p>
        <p>卡片是你的武器库，巧妙使用它们，晋升军衔。每次操作都会为池中贡献，顶尖贡献者将获得专属头衔和胜利分成。</p>
        <p>战斗越激烈，你的影响越大。选择阵营，智取胜，实时扭转战局。</p>
        <p>率领冲锋。夺取战场。你能在这片混乱中生存下来吗？</p>`
      },
      vi: {
        title: 'Vị Vua Của Những Người Lính: Ai sẽ cai trị chiến trường?',
        description: 'Trận chiến trực tiếp, được thúc đẩy bởi tất cả những người xem',
        story: `<p>Trong Vị Vua Của Những Người Lính, hành động của bạn sẽ tạo ra sự thay đổi trên chiến trường ngay lập tức. Hãy chọn phe của bạn! Bạn sẽ gia nhập Đế Chế Vàng hay Liên Minh Xanh?</p>
        <p>Hãy thể hiện sự ủng hộ của bạn trong trận chiến bằng cách để lại bình luận, nhấn like, và gửi quà trong game để triệu hồi xe tăng, máy bay không người lái, hoặc thậm chí là bom hạt nhân. Người chơi thực sự, tác động thực sự.</p>
        <p>Thẻ bài là kho vũ khí của bạn, hãy sử dụng chúng thông minh và leo lên các cấp bậc. Mỗi lượt chơi sẽ góp phần vào quỹ, và những người đóng góp hàng đầu sẽ nhận được danh hiệu đặc biệt và phần thưởng chia sẻ chiến thắng.</p>
        <p>Trận chiến càng lớn, tác động của bạn càng mạnh mẽ. Chọn phe, chơi thông minh và thay đổi cục diện ngay lập tức.</p>
        <p>Dẫn đầu cuộc tấn công. Chiếm lĩnh chiến trường. Liệu bạn có thể sống sót qua cơn hỗn loạn này?</p>`
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
  }
  // ... Continue with all other games following the same pattern
];