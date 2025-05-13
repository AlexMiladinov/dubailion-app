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
  },
  {
    id: 2,
    title: 'Legion Clash: Battle for Glory',
    imageUrl: '/assets/Legion Clash.jpg',
    description: 'An epic real-time strategy battle where viewers shape the outcome',
    platform: 'PC',
    translations: {
      en: {
        title: 'Legion Clash: Battle for Glory',
        description: 'An epic real-time strategy battle where viewers shape the outcome',
        story: `<p>Legion Clash puts you at the heart of an epic battlefield where strategy meets live interaction. Will you join the Dawn Brigade or the Dusk Coalition?</p>
        <p>Every comment, like, and gift you send unleashes powerful units and abilities. Command armies, cast spells, and turn the tide of battle with your support.</p>
        <p>Use your battle cards wisely to unlock legendary commanders and elite units. Your contributions fuel the war effort, with top supporters earning unique titles and rewards.</p>
        <p>As the conflict escalates, so does your influence. Choose your allegiance, plan your strategy, and watch the battle unfold in real-time.</p>
        <p>Rally your forces. Claim victory. Can you emerge triumphant from this epic clash?</p>`
      },
      ar: {
        title: 'صراع الفيلق: معركة المجد',
        description: 'معركة استراتيجية في الوقت الفعلي حيث يشكل المشاهدون النتيجة',
        story: `<p>يضعك صراع الفيلق في قلب ساحة معركة ملحمية حيث تلتقي الاستراتيجية بالتفاعل المباشر. هل ستنضم إلى لواء الفجر أم تحالف الغسق؟</p>
        <p>كل تعليق، إعجاب، وهدية ترسلها تطلق وحدات وقدرات قوية. قم بقيادة الجيوش، إلقاء التعويذات، وتغيير مجرى المعركة بدعمك.</p>
        <p>استخدم بطاقات المعركة بحكمة لفتح القادة الأسطوريين والوحدات النخبة. مساهماتك تغذي جهود الحرب، ويحصل كبار الداعمين على ألقاب ومكافآت فريدة.</p>
        <p>مع تصاعد الصراع، يزداد تأثيرك. اختر ولاءك، خطط استراتيجيتك، وشاهد المعركة تتكشف في الوقت الفعلي.</p>
        <p>احشد قواتك. احصل على النصر. هل يمكنك الخروج منتصراً من هذا الصدام الملحمي؟</p>`
      },
      de: {
        title: 'Legion Clash: Kampf um den Ruhm',
        description: 'Eine epische Echtzeit-Strategieschlacht, in der die Zuschauer den Ausgang bestimmen',
        story: `<p>Legion Clash versetzt dich ins Herz eines epischen Schlachtfelds, wo Strategie auf Live-Interaktion trifft. Wirst du dich der Morgenbrigade oder der Dämmerungskoalition anschließen?</p>
        <p>Jeder Kommentar, Like und jedes Geschenk, das du sendest, entfesselt mächtige Einheiten und Fähigkeiten. Befehlige Armeen, wirke Zauber und wende das Blatt der Schlacht mit deiner Unterstützung.</p>
        <p>Nutze deine Schlachtkarten klug, um legendäre Kommandanten und Eliteeinheiten freizuschalten. Deine Beiträge treiben die Kriegsanstrengungen voran, wobei Top-Unterstützer einzigartige Titel und Belohnungen erhalten.</p>
        <p>Je mehr der Konflikt eskaliert, desto größer wird dein Einfluss. Wähle deine Gefolgschaft, plane deine Strategie und beobachte, wie sich die Schlacht in Echtzeit entfaltet.</p>
        <p>Sammle deine Streitkräfte. Erringe den Sieg. Kannst du siegreich aus diesem epischen Zusammenstoß hervorgehen?</p>`
      },
      ru: {
        title: 'Legion Clash: Битва за Славу',
        description: 'Эпическая стратегическая битва в реальном времени, где зрители определяют исход',
        story: `<p>Legion Clash помещает вас в центр эпического поля боя, где стратегия встречается с живым взаимодействием. Присоединитесь ли вы к Бригаде Рассвета или Коалиции Сумерек?</p>
        <p>Каждый комментарий, лайк и подарок, который вы отправляете, высвобождает мощные отряды и способности. Командуйте армиями, используйте заклинания и меняйте ход битвы своей поддержкой.</p>
        <p>Мудро используйте боевые карты, чтобы разблокировать легендарных командиров и элитные отряды. Ваш вклад питает военные усилия, а лучшие сторонники получают уникальные титулы и награды.</p>
        <p>По мере эскалации конфликта растет и ваше влияние. Выберите свою верность, спланируйте стратегию и наблюдайте, как битва разворачивается в реальном времени.</p>
        <p>Соберите свои силы. Добейтесь победы. Сможете ли вы выйти победителем из этого эпического столкновения?</p>`
      },
      fr: {
        title: 'Legion Clash : Bataille pour la Gloire',
        description: 'Une bataille de stratégie épique en temps réel où les spectateurs façonnent le résultat',
        story: `<p>Legion Clash vous place au cœur d'un champ de bataille épique où la stratégie rencontre l'interaction en direct. Rejoindrez-vous la Brigade de l'Aube ou la Coalition du Crépuscule ?</p>
        <p>Chaque commentaire, like et cadeau que vous envoyez libère de puissantes unités et capacités. Commandez des armées, lancez des sorts et changez le cours de la bataille avec votre soutien.</p>
        <p>Utilisez vos cartes de bataille judicieusement pour débloquer des commandants légendaires et des unités d'élite. Vos contributions alimentent l'effort de guerre, les meilleurs supporters gagnant des titres et récompenses uniques.</p>
        <p>À mesure que le conflit s'intensifie, votre influence grandit. Choisissez votre allégeance, planifiez votre stratégie et regardez la bataille se dérouler en temps réel.</p>
        <p>Ralliez vos forces. Revendiquez la victoire. Pouvez-vous sortir triomphant de cet affrontement épique ?</p>`
      },
      zh: {
        title: '军团冲突：荣耀之战',
        description: '一场观众决定结果的史诗级实时战略战斗',
        story: `<p>军团冲突将你置于史诗战场的中心，战略与实时互动在此交汇。你是否会加入黎明旅或是黄昏联盟？</p>
        <p>你发送的每个评论、点赞和礼物都会释放强大的单位和能力。指挥军队，施放法术，用你的支持改变战局。</p>
        <p>明智地使用你的战斗卡牌来解锁传奇指挥官和精英部队。你的贡献推动战争努力，顶级支持者将获得独特的头衔和奖励。</p>
        <p>随着冲突升级，你的影响力也会增加。选择你的效忠对象，规划你的战略，观看战斗实时展开。</p>
        <p>集结你的力量。夺取胜利。你能在这场史诗般的冲突中胜出吗？</p>`
      },
      vi: {
        title: 'Xung Đột Quân Đoàn: Trận Chiến Vinh Quang',
        description: 'Trận chiến chiến lược thời gian thực hoành tráng nơi người xem định hình kết quả',
        story: `<p>Xung Đột Quân Đoàn đặt bạn vào trung tâm của chiến trường hoành tráng, nơi chiến lược gặp gỡ tương tác trực tiếp. Bạn sẽ tham gia Lữ đoàn Bình minh hay Liên minh Hoàng hôn?</p>
        <p>Mỗi bình luận, lượt thích và quà tặng bạn gửi đều giải phóng các đơn vị và khả năng mạnh mẽ. Chỉ huy quân đội, thi triển phép thuật và thay đổi cục diện trận chiến bằng sự hỗ trợ của bạn.</p>
        <p>Sử dụng thẻ chiến đấu một cách khôn ngoan để mở khóa các chỉ huy huyền thoại và đơn vị tinh nhuệ. Đóng góp của bạn thúc đẩy nỗ lực chiến tranh, những người ủng hộ hàng đầu nhận được danh hiệu và phần thưởng độc đáo.</p>
        <p>Khi xung đột leo thang, ảnh hưởng của bạn cũng tăng theo. Chọn phe trung thành, lên kế hoạch chiến lược và theo dõi trận chiến diễn ra trong thời gian thực.</p>
        <p>Tập hợp lực lượng của bạn. Giành chiến thắng. Bạn có thể chiến thắng trong cuộc đụng độ hoành tráng này không?</p>`
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
];