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
  },
  {
    id: 3,
    title: 'Speed Racing: Ultimate Street Challenge',
    imageUrl: '/assets/Speed Racing.jpg',
    description: 'High-octane street racing where viewers boost their favorite racers',
    platform: 'PC',
    translations: {
      en: {
        title: 'Speed Racing: Ultimate Street Challenge',
        description: 'High-octane street racing where viewers boost their favorite racers',
        story: `<p>Speed Racing throws you into the heart of underground street racing culture. Choose between the Midnight Runners or the Daybreak Drifters!</p>
        <p>Every viewer interaction powers up the racers - comments fuel nitro boosts, likes unlock special maneuvers, and gifts provide game-changing power-ups. Real support creates real speed.</p>
        <p>Collect and upgrade your racing cards to unlock legendary vehicles and expert drivers. Your support determines who leads the pack, with top fans earning exclusive titles and racing rewards.</p>
        <p>As the races intensify, your influence grows stronger. Pick your crew, plan your strategy, and watch the action unfold at breakneck speed.</p>
        <p>Rev your engines. Hit the streets. Can you handle the heat of underground racing?</p>`
      },
      ar: {
        title: 'سباق السرعة: تحدي الشوارع النهائي',
        description: 'سباقات شوارع عالية الأوكتان حيث يعزز المشاهدون متسابقيهم المفضلين',
        story: `<p>يضعك سباق السرعة في قلب ثقافة سباقات الشوارع السرية. اختر بين عدائي منتصف الليل أو منجرفي الفجر!</p>
        <p>كل تفاعل من المشاهدين يقوي المتسابقين - التعليقات تغذي معززات النيترو، الإعجابات تفتح مناورات خاصة، والهدايا توفر تعزيزات تغير مجرى اللعبة. الدعم الحقيقي يخلق سرعة حقيقية.</p>
        <p>اجمع وطور بطاقات السباق لفتح المركبات الأسطورية والسائقين المحترفين. دعمك يحدد من يقود المجموعة، ويحصل أفضل المشجعين على ألقاب حصرية ومكافآت سباق.</p>
        <p>مع اشتداد السباقات، يزداد تأثيرك قوة. اختر فريقك، خطط استراتيجيتك، وشاهد الأحداث تتكشف بسرعة مذهلة.</p>
        <p>شغل محركاتك. انطلق إلى الشوارع. هل يمكنك تحمل حرارة السباقات السرية؟</p>`
      },
      de: {
        title: 'Speed Racing: Ultimative Straßen-Challenge',
        description: 'Hochoktaniges Straßenrennen, bei dem Zuschauer ihre Lieblingsfahrer unterstützen',
        story: `<p>Speed Racing versetzt dich mitten in die Underground-Straßenrennkultur. Wähle zwischen den Midnight Runners oder den Daybreak Drifters!</p>
        <p>Jede Zuschauerinteraktion verstärkt die Fahrer - Kommentare befeuern Nitro-Boosts, Likes schalten Spezialmanöver frei und Geschenke bieten spielverändernde Power-ups. Echte Unterstützung schafft echte Geschwindigkeit.</p>
        <p>Sammle und verbessere deine Rennkarten, um legendäre Fahrzeuge und Expertenfahrer freizuschalten. Deine Unterstützung bestimmt, wer das Feld anführt, wobei Top-Fans exklusive Titel und Rennbelohnungen erhalten.</p>
        <p>Je intensiver die Rennen werden, desto stärker wird dein Einfluss. Wähle deine Crew, plane deine Strategie und erlebe die Action in halsbrecherischer Geschwindigkeit.</p>
        <p>Lass die Motoren aufheulen. Ab auf die Straßen. Kannst du mit der Hitze des Underground-Racing umgehen?</p>`
      },
      ru: {
        title: 'Speed Racing: Главный Вызов Улиц',
        description: 'Высокооктановые уличные гонки, где зрители поддерживают своих любимых гонщиков',
        story: `<p>Speed Racing погружает вас в самое сердце культуры подпольных уличных гонок. Выбирайте между Полуночными Гонщиками или Дрифтерами Рассвета!</p>
        <p>Каждое взаимодействие зрителей усиливает гонщиков - комментарии заряжают нитро-ускорение, лайки открывают специальные маневры, а подарки предоставляют меняющие игру усиления. Реальная поддержка создает реальную скорость.</p>
        <p>Собирайте и улучшайте свои гоночные карты, чтобы разблокировать легендарные автомобили и опытных водителей. Ваша поддержка определяет, кто возглавит пелотон, а лучшие фанаты получают эксклюзивные титулы и гоночные награды.</p>
        <p>По мере усиления гонок растет и ваше влияние. Выберите свою команду, спланируйте стратегию и наблюдайте за развитием событий на головокружительной скорости.</p>
        <p>Заводите двигатели. Выходите на улицы. Сможете ли вы выдержать накал подпольных гонок?</p>`
      },
      fr: {
        title: 'Speed Racing : Défi Ultime des Rues',
        description: 'Course de rue à haute octane où les spectateurs boostent leurs pilotes préférés',
        story: `<p>Speed Racing vous plonge au cœur de la culture des courses de rue clandestines. Choisissez entre les Coureurs de Minuit ou les Drifters de l'Aube !</p>
        <p>Chaque interaction des spectateurs renforce les pilotes - les commentaires alimentent les boosts de nitro, les likes débloquent des manœuvres spéciales et les cadeaux fournissent des power-ups qui changent la donne. Un vrai soutien crée une vraie vitesse.</p>
        <p>Collectionnez et améliorez vos cartes de course pour débloquer des véhicules légendaires et des pilotes experts. Votre soutien détermine qui mène la course, les meilleurs fans gagnant des titres exclusifs et des récompenses de course.</p>
        <p>À mesure que les courses s'intensifient, votre influence grandit. Choisissez votre équipe, planifiez votre stratégie et regardez l'action se dérouler à une vitesse vertigineuse.</p>
        <p>Faites vrombir vos moteurs. Prenez la rue. Pouvez-vous supporter la chaleur des courses clandestines ?</p>`
      },
      zh: {
        title: '极速赛车：终极街头挑战',
        description: '高能街头竞速，观众为最爱的赛车手加油助威',
        story: `<p>极速赛车将你带入地下街头赛车文化的核心。在午夜奔驰者和破晓漂移者之间做出选择！</p>
        <p>每一次观众互动都能为赛车手提供动力 - 评论激活氮气加速，点赞解锁特殊动作，礼物提供改变游戏局势的能量提升。真实支持创造真实速度。</p>
        <p>收集并升级你的赛车卡牌以解锁传奇车辆和专业车手。你的支持决定谁能领先车队，顶级粉丝将获得专属头衔和赛车奖励。</p>
        <p>随着比赛强度的提升，你的影响力也会增长。选择你的车队，规划你的策略，观看激动人心的比赛以惊人的速度展开。</p>
        <p>发动引擎。驰骋街头。你能应对地下赛车的热度吗？</p>`
      },
      vi: {
        title: 'Đua Xe Tốc Độ: Thử Thách Đường Phố Tối Thượng',
        description: 'Đua xe đường phố mãnh liệt nơi người xem tăng sức mạnh cho tay đua yêu thích của họ',
        story: `<p>Đua Xe Tốc Độ đưa bạn vào trung tâm của văn hóa đua xe đường phố ngầm. Lựa chọn giữa Tay Đua Nửa Đêm hoặc Tay Drift Bình Minh!</p>
        <p>Mỗi tương tác của người xem đều tăng sức mạnh cho các tay đua - bình luận nạp nitro tăng tốc, lượt thích mở khóa các động tác đặc biệt, và quà tặng cung cấp các năng lực thay đổi cục diện. Hỗ trợ thực sự tạo ra tốc độ thực sự.</p>
        <p>Thu thập và nâng cấp thẻ đua xe của bạn để mở khóa các phương tiện huyền thoại và tay đua chuyên nghiệp. Sự ủng hộ của bạn quyết định ai dẫn đầu đoàn đua, với những người hâm mộ hàng đầu nhận được danh hiệu độc quyền và phần thưởng đua xe.</p>
        <p>Khi các cuộc đua trở nên gay cấn hơn, ảnh hưởng của bạn cũng mạnh mẽ hơn. Chọn đội của bạn, lên kế hoạch chiến thuật và theo dõi hành động diễn ra với tốc độ chóng mặt.</p>
        <p>Khởi động động cơ. Lao ra đường phố. Bạn có thể chịu được sức nóng của đua xe ngầm không?</p>`
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