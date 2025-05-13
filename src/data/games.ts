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
        <p>استخدم بطاقات المعركة بحكمة لفتح القادة الأسطوريين والوحدات النخبة. مساهماتك تغذي جهود الحرب، ويحصل كبار المساهمين على ألقاب ومكافآت فريدة.</p>
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
        <p>Sử dụng thẻ chiến đấu một cách khôn ngoan để mở khóa các chỉ huy huyền thoại và đơn vị tinh nhuệ. Đóng góp của bạn thúc đẩy nỗ lực chiến tranh, với những người ủng hộ hàng đầu nhận được danh hiệu và phần thưởng độc đáo.</p>
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
  },
  {
    id: 4,
    title: 'Legion Clash 2: Rise of Empires',
    imageUrl: '/assets/Legion Clash 2.jpg',
    description: 'The epic strategy battle returns with more factions, deeper gameplay, and greater rewards',
    platform: 'PC',
    translations: {
      en: {
        title: 'Legion Clash 2: Rise of Empires',
        description: 'The epic strategy battle returns with more factions, deeper gameplay, and greater rewards',
        story: `<p>Legion Clash 2 expands the battlefield with four mighty factions vying for supremacy. Will you side with the Solar Empire, Lunar Republic, Storm Federation, or Crystal Alliance?</p>
        <p>Your engagement shapes the war like never before - comments summon elite units, likes trigger powerful abilities, and gifts unleash devastating special attacks. Every action counts in this evolving conflict.</p>
        <p>Master the enhanced card system to build unstoppable armies. Combine faction abilities, unlock legendary heroes, and lead your forces to victory. Top contributors earn exclusive commander titles and share in the spoils of war.</p>
        <p>The more intense the battle becomes, the greater your impact on the outcome. Choose wisely, strategize carefully, and watch your decisions unfold in real-time.</p>
        <p>Build your empire. Command your legions. Will you rise to become the ultimate ruler?</p>`
      },
      ar: {
        title: 'صراع الفيلق 2: صعود الإمبراطوريات',
        description: 'تعود معركة الاستراتيجية الملحمية مع المزيد من الفصائل، وأسلوب لعب أعمق، ومكافآت أكبر',
        story: `<p>يوسع صراع الفيلق 2 ساحة المعركة مع أربع فصائل قوية تتنافس على السيادة. هل ستنحاز إلى الإمبراطورية الشمسية، جمهورية القمر، اتحاد العاصفة، أم تحالف الكريستال؟</p>
        <p>مشاركتك تشكل الحرب كما لم يحدث من قبل - التعليقات تستدعي وحدات النخبة، الإعجابات تطلق قدرات قوية، والهدايا تطلق هجمات خاصة مدمرة. كل إجراء له أهمية في هذا الصراع المتطور.</p>
        <p>أتقن نظام البطاقات المحسن لبناء جيوش لا تقهر. اجمع بين قدرات الفصائل، افتح الأبطال الأسطوريين، وقد قواتك إلى النصر. يحصل كبار المساهمين على ألقاب قائد حصرية ويشاركون في غنائم الحرب.</p>
        <p>كلما ازدادت حدة المعركة، ازداد تأثيرك على النتيجة. اختر بحكمة، خطط بعناية، وشاهد قراراتك تتكشف في الوقت الفعلي.</p>
        <p>ابنِ إمبراطوريتك. قُد فيالقك. هل سترتقي لتصبح الحاكم الأعلى؟</p>`
      },
      de: {
        title: 'Legion Clash 2: Aufstieg der Imperien',
        description: 'Die epische Strategieschlacht kehrt zurück mit mehr Fraktionen, tieferem Gameplay und größeren Belohnungen',
        story: `<p>Legion Clash 2 erweitert das Schlachtfeld mit vier mächtigen Fraktionen, die um die Vorherrschaft kämpfen. Werden Sie sich dem Sonnenimperium, der Mondrepublik, der Sturmföderation oder der Kristallallianz anschließen?</p>
        <p>Ihr Engagement formt den Krieg wie nie zuvor - Kommentare beschwören Eliteeinheiten, Likes lösen mächtige Fähigkeiten aus und Geschenke entfesseln verheerende Spezialangriffe. Jede Aktion zählt in diesem sich entwickelnden Konflikt.</p>
        <p>Meistern Sie das verbesserte Kartensystem, um unaufhaltsame Armeen aufzubauen. Kombinieren Sie Fraktionsfähigkeiten, schalten Sie legendäre Helden frei und führen Sie Ihre Streitkräfte zum Sieg. Top-Beitragende erhalten exklusive Kommandeurstitel und teilen sich die Kriegsbeute.</p>
        <p>Je intensiver die Schlacht wird, desto größer wird Ihr Einfluss auf den Ausgang. Wählen Sie weise, planen Sie sorgfältig und beobachten Sie, wie sich Ihre Entscheidungen in Echtzeit entfalten.</p>
        <p>Bauen Sie Ihr Imperium auf. Befehligen Sie Ihre Legionen. Werden Sie aufsteigen, um der ultimative Herrscher zu werden?</p>`
      },
      ru: {
        title: 'Legion Clash 2: Восхождение Империй',
        description: 'Эпическая стратегическая битва возвращается с большим количеством фракций, более глубоким геймплеем и большими наградами',
        story: `<p>Legion Clash 2 расширяет поле битвы с четырьмя могущественными фракциями, борющимися за превосходство. Присоединитесь ли вы к Солнечной Империи, Лунной Республике, Штормовой Федерации или Кристальному Альянсу?</p>
        <p>Ваше участие формирует войну как никогда раньше - комментарии призывают элитные отряды, лайки активируют мощные способности, а подарки высвобождают разрушительные специальные атаки. Каждое действие имеет значение в этом развивающемся конфликте.</p>
        <p>Освойте улучшенную систему карт, чтобы создать непобедимые армии. Комбинируйте способности фракций, разблокируйте легендарных героев и ведите свои войска к победе. Лучшие участники получают эксклюзивные титулы командиров и делят военные трофеи.</p>
        <p>Чем интенсивнее становится битва, тем больше ваше влияние на её исход. Выбирайте мудро, планируйте тщательно и наблюдайте, как ваши решения воплощаются в реальном времени.</p>
        <p>Постройте свою империю. Командуйте легионами. Сможете ли вы подняться, чтобы стать верховным правителем?</p>`
      },
      fr: {
        title: 'Legion Clash 2 : L\'Ascension des Empires',
        description: 'La bataille stratégique épique revient avec plus de factions, un gameplay plus profond et de plus grandes récompenses',
        story: `<p>Legion Clash 2 élargit le champ de bataille avec quatre puissantes factions en lice pour la suprématie. Rejoindrez-vous l'Empire Solaire, la République Lunaire, la Fédération des Tempêtes ou l'Alliance de Cristal ?</p>
        <p>Votre engagement façonne la guerre comme jamais auparavant - les commentaires invoquent des unités d'élite, les likes déclenchent de puissantes capacités et les cadeaux libèrent des attaques spéciales dévastatrices. Chaque action compte dans ce conflit en évolution.</p>
        <p>Maîtrisez le système de cartes amélioré pour construire des armées inarrêtables. Combinez les capacités des factions, débloquez des héros légendaires et menez vos forces à la victoire. Les meilleurs contributeurs gagnent des titres exclusifs de commandant et partagent le butin de guerre.</p>
        <p>Plus la bataille devient intense, plus votre impact sur le résultat est grand. Choisissez sagement, stratégisez avec soin et regardez vos décisions se dérouler en temps réel.</p>
        <p>Construisez votre empire. Commandez vos légions. Vous élèverez-vous pour devenir le souverain ultime ?</p>`
      },
      zh: {
        title: '军团冲突2：帝国崛起',
        description: '史诗级战略对决回归，带来更多阵营、更深层的游戏玩法和更丰厚的奖励',
        story: `<p>军团冲突2扩展了战场，四大强大阵营争夺霸权。你会选择加入太阳帝国、月球共和国、风暴联邦还是水晶联盟？</p>
        <p>你的参与以前所未有的方式影响战争 - 评论召唤精英部队，点赞触发强大技能，礼物释放毁灭性特殊攻击。在这场不断演变的冲突中，每个行动都至关重要。</p>
        <p>掌握升级后的卡牌系统来建立无敌军队。结合阵营能力，解锁传奇英雄，率领军队走向胜利。顶级贡献者获得专属指挥官头衔并分享战争战利品。</p>
        <p>战斗越激烈，你对结果的影响就越大。明智选择，谨慎策划，实时观察你的决策展开。</p>
        <p>建立你的帝国。统帅你的军团。你能否崛起成为终极统治者？</p>`
      },
      vi: {
        title: 'Xung Đột Quân Đoàn 2: Đế Chế Trỗi Dậy',
        description: 'Trận chiến chiến lược hoành tráng trở lại với nhiều phe phái hơn, lối chơi sâu sắc hơn và phần thưởng lớn hơn',
        story: `<p>Xung Đột Quân Đoàn 2 mở rộng chiến trường với bốn phe phái hùng mạnh tranh giành quyền thống trị. Bạn sẽ về phe Đế Chế Mặt Trời, Cộng Hòa Mặt Trăng, Liên Bang Bão Tố hay Liên Minh Pha Lê?</p>
        <p>Sự tham gia của bạn định hình cuộc chiến như chưa từng có - bình luận triệu hồi đơn vị tinh nhuệ, lượt thích kích hoạt khả năng mạnh mẽ, và quà tặng giải phóng đòn tấn công đặc biệt tàn phá. Mỗi hành động đều có ý nghĩa trong cuộc xung đột không ngừng phát triển này.</p>
        <p>Làm chủ hệ thống thẻ bài nâng cao để xây dựng đội quân bất khả chiến bại. Kết hợp khả năng phe phái, mở khóa anh hùng huyền thoại và dẫn dắt quân đội đến chiến thắng. Những người đóng góp hàng đầu nhận được danh hiệu chỉ huy độc quyền và chia sẻ chiến lợi phẩm.</p>
        <p>Trận chiến càng trở nên dữ dội, ảnh hưởng của bạn đến kết quả càng lớn. Lựa chọn khôn ngoan, lập chiến lược cẩn thận và theo dõi quyết định của bạn diễn ra trong thời gian thực.</p>
        <p>Xây dựng đế chế của bạn. Chỉ huy quân đoàn của bạn. Bạn có thể vươn lên để trở thành người cai trị tối cao?</p>`
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
    title: 'Unified Kingdom: Forge Your Dynasty',
    imageUrl: '/assets/Unified Kingdom.jpg',
    description: 'Build and expand your kingdom while viewers shape its destiny',
    platform: 'PC',
    translations: {
      en: {
        title: 'Unified Kingdom: Forge Your Dynasty',
        description: 'Build and expand your kingdom while viewers shape its destiny',
        story: `<p>Unified Kingdom places you at the helm of an emerging dynasty. Will you lead the Prosperity Alliance or join the Conquest Coalition?</p>
        <p>Every viewer interaction influences your realm - comments recruit citizens, likes develop infrastructure, and gifts unlock powerful kingdom upgrades. Real support builds real empires.</p>
        <p>Master the kingdom cards to establish trade routes, form alliances, and expand your influence. Your decisions shape the fate of nations, with top supporters earning noble titles and royal privileges.</p>
        <p>As your kingdom grows, so does your legacy. Choose your path, implement your vision, and watch your dynasty flourish in real-time.</p>
        <p>Build your legacy. Unite the kingdoms. Will you become the greatest ruler of all time?</p>`
      },
      ar: {
        title: 'المملكة الموحدة: اصنع سلالتك',
        description: 'ابنِ وَوَسِّع مملكتك بينما يشكل المشاهدون مصيرها',
        story: `<p>تضعك المملكة الموحدة على رأس سلالة ناشئة. هل ستقود تحالف الازدهار أم تنضم إلى ائتلاف الفتح؟</p>
        <p>كل تفاعل من المشاهدين يؤثر على مملكتك - التعليقات تجند المواطنين، الإعجابات تطور البنية التحتية، والهدايا تفتح ترقيات قوية للمملكة. الدعم الحقيقي يبني إمبراطوريات حقيقية.</p>
        <p>أتقن بطاقات المملكة لإنشاء طرق تجارية، تشكيل تحالفات، وتوسيع نفوذك. قراراتك تشكل مصير الأمم، ويحصل كبار الداعمين على ألقاب نبيلة وامتيازات ملكية.</p>
        <p>مع نمو مملكتك، يزداد إرثك. اختر مسارك، نفذ رؤيتك، وشاهد سلالتك تزدهر في الوقت الفعلي.</p>
        <p>ابنِ إرثك. وَحِّد الممالك. هل ستصبح أعظم حاكم على مر العصور؟</p>`
      },
      de: {
        title: 'Vereinigtes Königreich: Schmiede deine Dynastie',
        description: 'Baue und erweitere dein Königreich, während Zuschauer sein Schicksal bestimmen',
        story: `<p>Unified Kingdom stellt dich an die Spitze einer aufstrebenden Dynastie. Wirst du die Wohlstandsallianz anführen oder dich der Eroberungskoalition anschließen?</p>
        <p>Jede Zuschauerinteraktion beeinflusst dein Reich - Kommentare rekrutieren Bürger, Likes entwickeln Infrastruktur und Geschenke schalten mächtige Königreich-Upgrades frei. Echte Unterstützung baut echte Imperien.</p>
        <p>Meistere die Königreichskarten, um Handelsrouten zu etablieren, Allianzen zu bilden und deinen Einfluss zu erweitern. Deine Entscheidungen prägen das Schicksal der Nationen, wobei Top-Unterstützer Adelstitel und königliche Privilegien erhalten.</p>
        <p>Mit dem Wachstum deines Königreichs wächst auch dein Vermächtnis. Wähle deinen Weg, setze deine Vision um und beobachte, wie deine Dynastie in Echtzeit gedeiht.</p>
        <p>Baue dein Vermächtnis auf. Vereine die Königreiche. Wirst du zum größten Herrscher aller Zeiten?</p>`
      },
      ru: {
        title: 'Объединённое Королевство: Создай Свою Династию',
        description: 'Строй и расширяй своё королевство, пока зрители определяют его судьбу',
        story: `<p>Объединённое Королевство ставит вас во главе зарождающейся династии. Возглавите ли вы Альянс Процветания или присоединитесь к Коалиции Завоевания?</p>
        <p>Каждое взаимодействие зрителей влияет на ваше царство - комментарии вербуют граждан, лайки развивают инфраструктуру, а подарки открывают мощные улучшения королевства. Реальная поддержка строит реальные империи.</p>
        <p>Освойте карты королевства, чтобы установить торговые пути, сформировать альянсы и расширить своё влияние. Ваши решения определяют судьбу наций, а лучшие сторонники получают дворянские титулы и королевские привилегии.</p>
        <p>По мере роста вашего королевства растёт и ваше наследие. Выберите свой путь, реализуйте своё видение и наблюдайте, как ваша династия процветает в реальном времени.</p>
        <p>Создайте своё наследие. Объедините королевства. Станете ли вы величайшим правителем всех времён?</p>`
      },
      fr: {
        title: 'Royaume Unifié : Forgez Votre Dynastie',
        description: 'Construisez et étendez votre royaume pendant que les spectateurs façonnent son destin',
        story: `<p>Royaume Unifié vous place à la tête d'une dynastie émergente. Dirigerez-vous l'Alliance de la Prospérité ou rejoindrez-vous la Coalition de la Conquête ?</p>
        <p>Chaque interaction des spectateurs influence votre royaume - les commentaires recrutent des citoyens, les likes développent l'infrastructure et les cadeaux débloquent de puissantes améliorations du royaume. Un véritable soutien construit de véritables empires.</p>
        <p>Maîtrisez les cartes du royaume pour établir des routes commerciales, former des alliances et étendre votre influence. Vos décisions façonnent le destin des nations, les meilleurs supporters gagnant des titres de noblesse et des privilèges royaux.</p>
        <p>À mesure que votre royaume grandit, votre héritage s'accroît. Choisissez votre voie, mettez en œuvre votre vision et regardez votre dynastie s'épanouir en temps réel.</p>
        <p>Construisez votre héritage. Unifiez les royaumes. Deviendrez-vous le plus grand souverain de tous les temps ?</p>`
      },
      zh: {
        title: '统一王国：铸造你的王朝',
        description: '建设和扩展你的王国，让观众塑造其命运',
        story: `<p>统一王国让你成为新兴王朝的掌舵者。你是要领导繁荣联盟还是加入征服联盟？</p>
        <p>每个观众互动都会影响你的领域 - 评论招募市民，点赞发展基础设施，礼物解锁强大的王国升级。真实支持建立真实帝国。</p>
        <p>掌握王国卡牌来建立贸易路线，组建联盟，扩大影响力。你的决定塑造国家命运，顶级支持者获得贵族头衔和皇家特权。</p>
        <p>随着王国的成长，你的遗产也在增长。选择你的道路，实现你的愿景，实时观看你的王朝繁荣发展。</p>
        <p>建立你的遗产。统一王国。你能成为有史以来最伟大的统治者吗？</p>`
      },
      vi: {
        title: 'Vương Quốc Thống Nhất: Xây Dựng Triều Đại',
        description: 'Xây dựng và mở rộng vương quốc của bạn trong khi người xem định hình số phận của nó',
        story: `<p>Vương Quốc Thống Nhất đặt bạn vào vị trí lãnh đạo của một triều đại đang lên. Bạn sẽ lãnh đạo Liên Minh Thịnh Vượng hay tham gia Liên Minh Chinh Phục?</p>
        <p>Mỗi tương tác của người xem đều ảnh hưởng đến vương quốc của bạn - bình luận tuyển mộ công dân, lượt thích phát triển cơ sở hạ tầng, và quà tặng mở khóa các nâng cấp vương quốc mạnh mẽ. Hỗ trợ thực sự xây dựng đế chế thực sự.</p>
        <p>Làm chủ các thẻ vương quốc để thiết lập tuyến đường thương mại, hình thành liên minh và mở rộng ảnh hưởng của bạn. Quyết định của bạn định hình số phận các quốc gia, với những người ủng hộ hàng đầu nhận được tước hiệu quý tộc và đặc quyền hoàng gia.</p>
        <p>Khi vương quốc của bạn phát triển, di sản của bạn cũng tăng theo. Chọn con đường của bạn, thực hiện tầm nhìn của bạn và theo dõi triều đại của bạn phát triển trong thời gian thực.</p>
        <p>Xây dựng di sản của bạn. Thống nhất các vương quốc. Bạn có thể trở thành vị vua vĩ đại nhất mọi thời đại không?</p>`
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
    id: 6,
    title: 'Color War: Paint Your Path to Victory',
    imageUrl: '/assets/Color War.jpg',
    description: 'A vibrant battle where viewers paint the battlefield to claim territory',
    platform: 'PC',
    translations: {
      en: {
        title: 'Color War: Paint Your Path to Victory',
        description: 'A vibrant battle where viewers paint the battlefield to claim territory',
        story: `<p>Color War transforms warfare into an explosive artistic showdown. Choose between the Rainbow Raiders or the Neon Knights!</p>
        <p>Every viewer interaction adds splashes of color to the battlefield - comments spray paint, likes create color bombs, and gifts unleash spectacular chromatic explosions. Real participation creates real art.</p>
        <p>Master your color cards to mix powerful combinations, unlock special patterns, and dominate the canvas. Your artistic choices influence territory control, with top contributors earning unique artist titles and exclusive color palettes.</p>
        <p>As the battle intensifies, your artistic influence grows. Pick your palette, plan your masterpiece, and watch your creativity unfold in real-time.</p>
        <p>Paint your legacy. Claim your territory. Will you become the ultimate color commander?</p>`
      },
      ar: {
        title: 'حرب الألوان: ارسم طريقك نحو النصر',
        description: 'معركة نابضة بالحياة حيث يرسم المشاهدون ساحة المعركة للمطالبة بالأراضي',
        story: `<p>تحول حرب الألوان القتال إلى مواجهة فنية متفجرة. اختر بين غزاة قوس قزح أو فرسان النيون!</p>
        <p>كل تفاعل من المشاهدين يضيف رشات من الألوان إلى ساحة المعركة - التعليقات ترش الطلاء، الإعجابات تخلق قنابل ملونة، والهدايا تطلق انفجارات لونية مذهلة. المشاركة الحقيقية تخلق فناً حقيقياً.</p>
        <p>استخدم بطاقات الألوان الخاصة بك لمزج تركيبات قوية، وفتح أنماط خ
اصة، والسيطرة على اللوحة. خياراتك الفنية تؤثر على السيطرة على الأراضي، ويحصل كبار المساهمين على ألقاب فنية فريدة ولوحات ألوان حصرية.</p>
        <p>مع اشتداد المعركة، يزداد تأثيرك الفني. اختر لوحة ألوانك، خطط لتحفتك الفنية، وشاهد إبداعك يتكشف في الوقت الفعلي.</p>
        <p>ارسم إرثك. اطالب بأرضك. هل ستصبح قائد الألوان الأعظم؟</p>`
      },
      de: {
        title: 'Farbenkrieg: Male deinen Weg zum Sieg',
        description: 'Eine lebendige Schlacht, in der Zuschauer das Schlachtfeld bemalen, um Territorium zu beanspruchen',
        story: `<p>Farbenkrieg verwandelt Kriegsführung in einen explosiven künstlerischen Showdown. Wähle zwischen den Regenbogen-Räubern oder den Neon-Rittern!</p>
        <p>Jede Zuschauerinteraktion fügt dem Schlachtfeld Farbspritzer hinzu - Kommentare sprühen Farbe, Likes erzeugen Farbbomben und Geschenke entfesseln spektakuläre chromatische Explosionen. Echte Teilnahme schafft echte Kunst.</p>
        <p>Beherrsche deine Farbkarten, um mächtige Kombinationen zu mischen, spezielle Muster freizuschalten und die Leinwand zu dominieren. Deine künstlerischen Entscheidungen beeinflussen die Gebietskontrolle, wobei Top-Beitragende einzigartige Künstlertitel und exklusive Farbpaletten erhalten.</p>
        <p>Je intensiver die Schlacht wird, desto größer wird dein künstlerischer Einfluss. Wähle deine Palette, plane dein Meisterwerk und beobachte, wie sich deine Kreativität in Echtzeit entfaltet.</p>
        <p>Male dein Vermächtnis. Beanspruche dein Territorium. Wirst du zum ultimativen Farbenkommandeur?</p>`
      },
      ru: {
        title: 'Война Красок: Нарисуй Свой Путь к Победе',
        description: 'Яркая битва, где зрители раскрашивают поле боя, чтобы захватить территорию',
        story: `<p>Война Красок превращает сражение в взрывное художественное противостояние. Выберите между Радужными Рейдерами или Неоновыми Рыцарями!</p>
        <p>Каждое взаимодействие зрителей добавляет брызги цвета на поле боя - комментарии распыляют краску, лайки создают цветные бомбы, а подарки высвобождают впечатляющие хроматические взрывы. Реальное участие создает реальное искусство.</p>
        <p>Освойте свои цветовые карты, чтобы создавать мощные комбинации, разблокировать особые узоры и доминировать на холсте. Ваш художественный выбор влияет на контроль территории, а лучшие участники получают уникальные титулы художников и эксклюзивные цветовые палитры.</p>
        <p>По мере усиления битвы растет ваше художественное влияние. Выберите свою палитру, спланируйте свой шедевр и наблюдайте, как ваше творчество разворачивается в реальном времени.</p>
        <p>Нарисуйте свое наследие. Заявите права на свою территорию. Станете ли вы величайшим командующим красок?</p>`
      },
      fr: {
        title: 'Guerre des Couleurs : Peignez Votre Chemin vers la Victoire',
        description: 'Une bataille vibrante où les spectateurs peignent le champ de bataille pour revendiquer le territoire',
        story: `<p>Guerre des Couleurs transforme la guerre en un affrontement artistique explosif. Choisissez entre les Raiders Arc-en-ciel ou les Chevaliers Néon !</p>
        <p>Chaque interaction des spectateurs ajoute des éclaboussures de couleur au champ de bataille - les commentaires pulvérisent de la peinture, les likes créent des bombes de couleur et les cadeaux libèrent des explosions chromatiques spectaculaires. Une participation réelle crée un art réel.</p>
        <p>Maîtrisez vos cartes de couleur pour mélanger des combinaisons puissantes, débloquer des motifs spéciaux et dominer la toile. Vos choix artistiques influencent le contrôle du territoire, les meilleurs contributeurs gagnant des titres d'artiste uniques et des palettes de couleurs exclusives.</p>
        <p>À mesure que la bataille s'intensifie, votre influence artistique grandit. Choisissez votre palette, planifiez votre chef-d'œuvre et regardez votre créativité se déployer en temps réel.</p>
        <p>Peignez votre héritage. Revendiquez votre territoire. Deviendrez-vous le commandant des couleurs ultime ?</p>`
      },
      zh: {
        title: '色彩战争：绘制胜利之路',
        description: '一场观众通过绘制战场来争夺领地的充满活力的战斗',
        story: `<p>色彩战争将战争转变为爆炸性的艺术对决。在彩虹突击队和霓虹骑士之间做出选择！</p>
        <p>每个观众互动都为战场增添色彩 - 评论喷洒颜料，点赞创造色彩炸弹，礼物释放壮观的色彩爆炸。真实参与创造真实艺术。</p>
        <p>掌握你的色彩卡牌来混合强大组合，解锁特殊图案，主宰画布。你的艺术选择影响领土控制，顶级贡献者获得独特的艺术家头衔和专属调色板。</p>
        <p>随着战斗加剧，你的艺术影响力也在增长。选择你的调色板，规划你的杰作，实时观看你的创意展开。</p>
        <p>绘制你的遗产。宣称你的领地。你能成为终极色彩指挥官吗？</p>`
      },
      vi: {
        title: 'Chiến Tranh Sắc Màu: Vẽ Nên Con Đường Chiến Thắng',
        description: 'Một trận chiến sôi động nơi người xem vẽ chiến trường để giành lãnh thổ',
        story: `<p>Chiến Tranh Sắc Màu biến cuộc chiến thành một màn đối đầu nghệ thuật bùng nổ. Chọn giữa Đội Quân Cầu Vồng hoặc Hiệp Sĩ Neon!</p>
        <p>Mỗi tương tác của người xem đều thêm những vệt màu vào chiến trường - bình luận phun sơn, lượt thích tạo bom màu, và quà tặng giải phóng những vụ nổ sắc màu ngoạn mục. Sự tham gia thực sự tạo nên nghệ thuật thực sự.</p>
        <p>Làm chủ các thẻ màu của bạn để pha trộn những kết hợp mạnh mẽ, mở khóa các mẫu đặc biệt và thống trị bức tranh. Lựa chọn nghệ thuật của bạn ảnh hưởng đến việc kiểm soát lãnh thổ, với những người đóng góp hàng đầu nhận được danh hiệu nghệ sĩ độc đáo và bảng màu độc quyền.</p>
        <p>Khi trận chiến trở nên gay cấn, ảnh hưởng nghệ thuật của bạn cũng tăng theo. Chọn bảng màu của bạn, lên kế hoạch cho kiệt tác và theo dõi sự sáng tạo của bạn phát triển trong thời gian thực.</p>
        <p>Vẽ nên di sản của bạn. Giành lấy lãnh thổ của bạn. Bạn có thể trở thành chỉ huy sắc màu tối thượng không?</p>`
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