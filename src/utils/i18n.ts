export type Language = 'fr' | 'ar';

export const OCCASIONS_MAP: Record<Language, readonly string[]> = {
  fr: [
    'Mariages & fiançailles',
    'Anniversaires',
    'Naissances',
    'Attentions romantiques',
    'Remerciements',
    'Créations personnalisées',
  ],
  ar: [
    'الزفاف والخطوبة',
    'أعياد الميلاد',
    'المواليد الجدد',
    'لحظات رومانسية',
    'رسائل الشكر',
    'إبداعات مخصصة',
  ],
};

export const OCCASION_NOTES_MAP: Record<Language, Record<string, string>> = {
  fr: {
    'Mariages & fiançailles':
      'Célébrer une union avec une attention florale raffinée à partager ou à offrir aux convives.',
    Anniversaires:
      'Marquer une date précieuse par un coffret composé selon la personnalité de la personne célébrée.',
    Naissances:
      'Accueillir un nouveau chapitre avec la douceur visuelle du chocolat blanc et des présentations délicates.',
    'Attentions romantiques':
      'Exprimer un sentiment sincère à travers la symbolique intemporelle de la rose en chocolat.',
    Remerciements:
      'Témoigner votre gratitude avec une création sobre, soignée et porteuse de sens.',
    'Créations personnalisées':
      'Imaginer une composition dédiée à votre événement ou à votre intention particulière.',
  },
  ar: {
    'الزفاف والخطوبة':
      'الاحتفال بالاتحاد بهدية زهور راقية للمشاركة أو للإهداء للضيوف.',
    'أعياد الميلاد':
      'الاحتفاء بتلك اللحظة الخاصة بصندوق مصمم خصيصاً لشخصية المحتفى به.',
    'المواليد الجدد':
      'الترحيب بفصل جديد بنعومة الشوكولاتة البيضاء والعروض الرقيقة.',
    'لحظات رومانسية':
      'التعبير عن مشاعر صادقة من خلال رمزية وردة الشوكولاتة الخالدة.',
    'رسائل الشكر':
      'إظهار الامتنان بابتكار أنيق وذو معنى عميق.',
    'إبداعات مخصصة':
      'ابتكار تنسيق مخصص لحدثك أو لغرضك الخاص.',
  },
};

export const TRANSLATIONS = {
  fr: {
    nav: {
      home: 'Accueil',
      maison: 'La Maison',
      creations: 'Nos Créations',
      occasions: 'Occasions',
      personalization: 'Personnalisation',
      testimonials: 'Avis',
      faq: 'FAQ',
      contact: 'Contact',
      imagineMyCreation: 'Imaginer ma création',
      openMobileMenu: 'Ouvrir le menu de navigation',
      closeMobileMenu: 'Fermer le menu de navigation',
      navAria: 'Navigation principale',
      mobileNavAria: 'Navigation mobile',
      drawerLabel: 'Menu de navigation CHOCO LOUTI',
    },
    hero: {
      eyebrow: 'L’art du chocolat sur mesure',
      titlePart1: 'Le chocolat prend une autre ',
      titleAccent: 'dimension.',
      description:
        'Des fleurs en chocolat noir et blanc sculptées avec délicatesse, réunies en coffret signature pour sublimer l’art d’offrir.',
      discoverCreations: 'Découvrir les créations',
      imagineCreation: 'Imaginer une création',
      features:
        'Fleurs en chocolat personnalisées · Collerettes en dentelle · Écrins sur mesure',
      scroll: 'Défiler',
      scrollAria: 'Découvrir La Maison — défiler vers le bas',
      boxCaption: 'Coffret Signature · Fleurs en chocolat personnalisées',
      macroLabel: 'Rose en chocolat noir',
    },
    maison: {
      eyebrow: 'La Maison',
      title: 'L’élégance du chocolat, pensée sur mesure.',
      body:
        'CHOCO LOUTI imagine chaque fleur en chocolat comme un objet d’attention. Façonnés en chocolat noir et en chocolat blanc, nos bouquets en coffret réunissent précision du modelage, contraste des matières et plaisir authentique d’offrir.',
      altTag: 'Triptyque de fleurs en chocolat',
      macroTag: 'Détail des pétales sculptés',
      caption: 'Fleurs en chocolat noir & blanc',
      dentelle: 'Collerettes ajourées',
      pillars: [
        {
          index: '01',
          title: 'Pétales modelés',
          description:
            'Des fleurs façonnées pétale après pétale, serties dans leur collerette ajourée.',
        },
        {
          index: '02',
          title: 'Composition sur mesure',
          description:
            'Une attention pensée selon votre occasion, entre intensité du noir et douceur du blanc.',
        },
        {
          index: '03',
          title: 'Écrin de présentation',
          description:
            'Un coffret ivoire fermé d’un ruban vert profond, pensé pour offrir dès le premier regard.',
        },
      ],
    },
    creations: {
      eyebrow: 'Nos Créations',
      title: 'Des créations qui marquent les esprits.',
      desc:
        'Photographies authentiques de nos fleurs en chocolat noir et chocolat blanc, présentées en collerettes ajourées et en coffret signature.',
      observeBig: 'Observer en grand',
      see: 'Voir',
      enlargeStudy: 'Agrandir l’étude',
      closePreview: 'Fermer l’aperçu',
      prev: 'Création précédente',
      next: 'Création suivante',
      requestCreation: 'Demander une création',
      items: [
        {
          id: 'coffret-signature',
          title: 'Coffret Signature — Fleurs en chocolat personnalisées',
          subtitle: 'Présentation en écrin ivoire & ruban vert profond',
          caption:
            'Un coffret de présentation couleur ivoire fermé par un ruban de satin vert profond, dévoilant une alternance harmonieuse de fleurs en chocolat noir et chocolat blanc dans leur écrin de dentelle.',
          focalNote: 'Écrin de présentation · Alternance chocolat noir et chocolat blanc',
        },
        {
          id: 'triptyque-floral',
          title: 'Triptyque Floral — Harmonie Noir & Ivoire',
          subtitle: 'Fleurs en chocolat sculptées en pétales',
          caption:
            'Une composition verticale réunissant le contraste naturel du chocolat noir et la douceur lumineuse du chocolat blanc, chaque fleur délicatement posée dans sa collerette.',
          focalNote: 'Composition florale · Reliefs et pétales façonnés',
        },
        {
          id: 'rose-macro',
          title: 'Rose en Chocolat Noir — Détail artisanal',
          subtitle: 'Sculpture florale & finesse des pétales',
          caption:
            'La profondeur du cacao s’exprime à travers des pétales superposés avec minutie, révélant une texture satinée et une silhouette florale singulière.',
          focalNote: 'Étude de détail · Pétales sculptés & collerette ajourée',
        },
      ],
    },
    productDetail: {
      eyebrow: 'L’Art du Chocolat',
      title: 'La beauté se cache dans chaque détail.',
      body:
        'Observer une fleur en chocolat CHOCO LOUTI de près, c’est découvrir le dialogue entre la matière gourmande, la précision du geste et l’élégance d’une mise en scène épurée.',
      macroHeader: 'Étude macro · Fleur en chocolat noir',
      macroSub: 'Présentation dentelle',
      notes: [
        {
          index: '01',
          title: 'Sculpture des pétales',
          description:
            'Des pétales modelés en superposition pour composer une fleur en chocolat aux courbes nettes et équilibrées.',
        },
        {
          index: '02',
          title: 'Teintes naturelles du cacao',
          description:
            'L’intensité mate et satinée du chocolat noir répond à la douceur lumineuse du chocolat blanc, sans artifice.',
        },
        {
          index: '03',
          title: 'Présentation en dentelle',
          description:
            'Chaque fleur repose dans une collerette finement ajourée qui protège sa silhouette et souligne son raffinement.',
        },
      ],
    },
    gifting: {
      eyebrow: 'L’Art d’Offrir',
      title: 'Une attention qui a du sens.',
      desc:
        'Chaque moment mérite un geste choisi avec justesse. Sélectionnez une occasion pour orienter votre future création.',
      choose: 'Choisir',
      selected: 'Sélectionnée',
    },
    personalization: {
      eyebrow: 'Personnalisation',
      title: 'Votre idée. Notre inspiration. Une création à partager.',
      orientation: 'Orientations d’occasions',
      stages: [
        {
          number: '01',
          title: 'Votre occasion',
          description:
            'Vous identifiez le moment que vous souhaitez célébrer et l’intention que vous voulez transmettre à travers ce présent.',
        },
        {
          number: '02',
          title: 'Votre inspiration',
          description:
            'Vous partagez vos préférences visuelles, l’ambiance souhaitée et l’esprit de votre geste entre chocolat noir et chocolat blanc.',
        },
        {
          number: '03',
          title: 'Votre demande',
          description:
            'Nous échangeons directement autour de votre idée afin d’imaginer ensemble la présentation qui correspond à votre attente.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Témoignages & Avis',
      title: 'Ce que disent nos clients d’exception.',
      desc: 'Découvrez les retours de ceux qui ont fait confiance à CHOCO LOUTI pour leurs instants précieux.',
      items: [
        {
          quote: 'Un raffinement absolument extraordinaire pour notre mariage. Les fleurs en chocolat ont émerveillé tous nos invités.',
          author: 'Sarah & Mehdi',
          occasion: 'Mariage d’exception',
        },
        {
          quote: 'Le coffret signature est un véritable chef-d’œuvre visuel et gustatif. L’art de l’attention par excellence.',
          author: 'Amina K.',
          occasion: 'Cadeau d’anniversaire',
        },
        {
          quote: 'Une attention personnalisée touchante et d’une finesse rare. Le service client par WhatsApp est d’un grand professionnalisme.',
          author: 'Karim B.',
          occasion: 'Remerciements & Célébration',
        },
      ],
    },
    newsletter: {
      eyebrow: 'Newsletter & Privilèges',
      title: 'Recevez nos collections saisonnières.',
      desc: 'Inscrivez-vous pour être informé en avant-première de nos créations éphémères et de nos coffrets de saison.',
      placeholder: 'Votre adresse e-mail',
      button: 'S’inscrire',
      success: 'Merci pour votre inscription. Bienvenue dans l’univers CHOCO LOUTI.',
      error: 'Veuillez saisir une adresse e-mail valide.',
    },
    brandStatement: {
      quote: '« Parce que certaines attentions méritent d’être uniques. »',
      sub: 'CHOCO LOUTI · L’art du chocolat sur mesure',
    },
    faq: {
      eyebrow: 'Foire aux questions',
      title: 'Vos questions, nos réponses.',
      desc:
        'Pour toute demande spécifique, notre espace de contact vous permet de préparer votre projet.',
      items: [
        {
          id: 'demande-personnalisee',
          question: 'Comment fonctionne une demande de création personnalisée ?',
          answer:
            'Chaque projet débute par un échange autour de votre occasion et de votre inspiration. Vous pouvez partager votre idée via le formulaire de contact afin que nous puissions imaginer ensemble une composition adaptée à votre attention.',
        },
        {
          id: 'occasions',
          question: 'Pour quelles occasions réalisez-vous des créations ?',
          answer:
            'Nos créations accompagnent les mariages et fiançailles, les anniversaires, les naissances, les attentions romantiques, les remerciements ainsi que toute demande sur mesure pensée pour un moment particulier.',
        },
        {
          id: 'creations-disponibles',
          question: 'Quelles créations composent l’univers CHOCO LOUTI ?',
          answer:
            'CHOCO LOUTI met à l’honneur des fleurs en chocolat personnalisées, façonnées en chocolat noir et en chocolat blanc, présentées individuellement en collerette de dentelle ou réunies dans un coffret signature.',
        },
        {
          id: 'tarifs',
          question: 'Comment obtenir des informations sur les tarifs ?',
          answer:
            'Les créations étant imaginées selon votre occasion et vos souhaits de personnalisation, les informations tarifaires sont communiquées sur demande lors de notre prise de contact directe.',
        },
        {
          id: 'commande-contact',
          question: 'Comment passer commande ou entrer en contact avec la Maison ?',
          answer:
            'Vous pouvez préparer votre demande directement dans la section Contact en précisant votre occasion et votre inspiration. Les canaux de prise de contact directs de la Maison y seront rattachés lors de la mise en ligne finale.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact & Sur-Mesure',
      title: 'Imaginons votre prochaine création.',
      desc:
        'Partagez votre occasion, votre inspiration ou simplement une idée. Entrons en contact pour imaginer votre création.',
      weContact: 'Nous contacter',
      integrationInfo: 'Information d’intégration',
      integrationDesc:
        'Les coordonnées directes de la Maison et l’envoi automatisé de ce formulaire seront activés dès le raccordement du service de messagerie.',
      name: 'Nom',
      namePlaceholder: 'Votre nom ou prénom',
      channel: 'E-mail ou téléphone',
      channelPlaceholder: 'vous@exemple.fr ou 06 00 00 00 00',
      occasionLabel: 'Occasion',
      selectOccasionPlaceholder: 'Sélectionner une occasion',
      message: 'Message',
      messagePlaceholder:
        'Décrivez votre occasion, vos envies ou le style de création souhaité...',
      prepareRequest: 'Préparer ma demande',
      localValidation: 'Validation locale active · Envoi serveur à connecter',
      serverIntegrationTitle: 'Formulaire nécessitant une intégration serveur',
      serverIntegrationDesc:
        'Aucun service d’envoi n’est encore raccordé à cette interface : votre demande n’a pas été transmise automatiquement. Vous pouvez copier votre récapitulatif ci-dessous.',
      copySummary: 'Copier le récapitulatif',
      summaryCopied: 'Récapitulatif copié',
    },
    footer: {
      visualIdentity: 'Identité visuelle proposée · En attente de validation',
      footerDesc:
        'CHOCO LOUTI imagine le chocolat artisanal comme un art de l’attention, à travers des fleurs en chocolat personnalisées et des coffrets sur mesure.',
      navigationHeading: 'Navigation',
      contactMaisonHeading: 'Contact & Maison',
      officialCoords:
        'Les coordonnées officielles (e-mail, téléphone et réseaux sociaux vérifiés) seront publiées ici dès leur confirmation.',
      accessContact: 'Accéder à l’espace contact',
      allRights: '© 2026 CHOCO LOUTI. Tous droits réservés.',
      footerArt: 'CHOCO LOUTI — L’ART DU CHOCOLAT SUR MESURE.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      maison: 'الدار',
      creations: 'إبداعاتنا',
      occasions: 'المناسبات',
      personalization: 'التخصيص',
      testimonials: 'آراء العملاء',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      imagineMyCreation: 'تصميم إبداعي',
      openMobileMenu: 'فتح قائمة التنقل',
      closeMobileMenu: 'إغلاق قائمة التنقل',
      navAria: 'التنقل الرئيسي',
      mobileNavAria: 'التنقل عبر الجوال',
      drawerLabel: 'قائمة تنقل CHOCO LOUTI',
    },
    hero: {
      eyebrow: 'فن الشوكولاتة المصنوعة حسب الطلب',
      titlePart1: 'الشوكولاتة تأخذ ',
      titleAccent: 'بعداً آخر.',
      description:
        'زهور الشوكولاتة البيضاء والسوداء المنحوتة بعناية فائقة، والمجتمعة في صندوق مميز لتخليد فن الإهداء.',
      discoverCreations: 'اكتشف الإبداعات',
      imagineCreation: 'ابتكر ابتكاراً',
      features:
        'زهور الشوكولاتة المخصصة · أطواق الدانتيل · علب الهدايا المصممة خصيصاً',
      scroll: 'التمرير',
      scrollAria: 'اكتشف الدار — التمرير للأسفل',
      boxCaption: 'الصندوق المميز · زهور الشوكولاتة المخصصة',
      macroLabel: 'وردة الشوكولاتة الداكنة',
    },
    maison: {
      eyebrow: 'الدار',
      title: 'أناقة الشوكولاتة، المصممة خصيصاً لك.',
      body:
        'تتخيل CHOCO LOUTI كل زهرة شوكولاتة كقطعة اهتمام. مصممة من الشوكولاتة الداكنة والبيضاء، تجمع باقاتنا بين دقة التشكيل وتناقض المواد ومتعة الإهداء الأصيلة.',
      altTag: 'ثلاثية زهور الشوكولاتة',
      macroTag: 'تفاصيل البتلات المنحوتة',
      caption: 'زهور الشوكولاتة البيضاء والسوداء',
      dentelle: 'أطواق مفرغة',
      pillars: [
        {
          index: '01',
          title: 'بتلات مشكلة',
          description:
            'زهور مصممة بتلة بعد بتلة، موضوعة في طوقها المفرغ الأنيق.',
        },
        {
          index: '02',
          title: 'تنسيق حسب الطلب',
          description:
            'اهتمام مصمم حسب مناسبتك، بين كثافة الشوكولاتة الداكنة ونعومة البيضاء.',
        },
        {
          index: '03',
          title: 'صندوق العرض',
          description:
            'صندوق عاجي مغلق بشريط أخضر داكن، مصمم للإهداء من النظرة الأولى.',
        },
      ],
    },
    creations: {
      eyebrow: 'إبداعاتنا',
      title: 'إبداعات تترك أثراً لا يُنسى.',
      desc:
        'صور حقيقية لزهور الشوكولاتة الداكنة والبيضاء، المعروضة في أطواق مفرغة وفي صندوق مميز.',
      observeBig: 'عرض بالحجم الكامل',
      see: 'عرض',
      enlargeStudy: 'تكبير الدراسة',
      closePreview: 'إغلاق المعاينة',
      prev: 'الإبداع السابق',
      next: 'الإبداع التالي',
      requestCreation: 'طلب ابتكار',
      items: [
        {
          id: 'coffret-signature',
          title: 'الصندوق المميز — زهور الشوكولاتة المخصصة',
          subtitle: 'عرض في صندوق عاجي وشريط أخضر داكن',
          caption:
            'صندوق عرض بلون العاج مغلق بشريط ساتان أخضر داكن، يكشف عن تناوب متناغم لزهور الشوكولاتة الداكنة والبيضاء في إطارها الدانتيل.',
          focalNote: 'صندوق العرض · تناوب الشوكولاتة الداكنة والبيضاء',
        },
        {
          id: 'triptyque-floral',
          title: 'ثلاثية الزهور — تناغم الداكن والعاجي',
          subtitle: 'زهور الشوكولاتة المنحوتة على شكل بتلات',
          caption:
            'تكوين عمودي يجمع بين التباين الطبيعي للشوكولاتة الداكنة والنعومة المضيئة للشوكولاتة البيضاء، وكل زهرة توضع بلطف في طوقها.',
          focalNote: 'تكوين زهور · تضاريس وبتلات مشكلة',
        },
        {
          id: 'rose-macro',
          title: 'وردة الشوكولاتة الداكنة — تفاصيل حرفية',
          subtitle: 'نحت الزهور ورقة البتلات',
          caption:
            'تتعبير عمق الكاكاو من خلال بتلات مترابطة بعناية، كاشفة عن ملمس ساتاني وشكل زهور فريد.',
          focalNote: 'دراسة التفاصيل · بتلات منحوتة وطوق مفرغ',
        },
      ],
    },
    productDetail: {
      eyebrow: 'فن الشوكولاتة',
      title: 'الجمال يكمن في كل تفصيل.',
      body:
        'مراقبة زهرة شوكولاتة CHOCO LOUTI عن قرب هي اكتشاف الحوار بين المادة الشهية ودقة الحركة وأناقة العرض النظيف.',
      macroHeader: 'دراسة ماكرو · زهرة الشوكولاتة الداكنة',
      macroSub: 'عرض الدانتيل',
      notes: [
        {
          index: '01',
          title: 'نحت البتلات',
          description:
            'بتلات مشكلة بطريقة تراكبية لتشكيل زهرة شوكولاتة ذات منحنيات واضحة ومتوازنة.',
        },
        {
          index: '02',
          title: 'ألوان الكاكاو الطبيعية',
          description:
            'كثافة الشوكولاتة الداكنة غير اللامعة والساتينية تلبي نعومة الشوكولاتة البيضاء المضيئة بدون اصطناع.',
        },
        {
          index: '03',
          title: 'عرض الدانتيل',
          description:
            'تستقر كل زهرة في طوق مفرغ بدقة يحمي شكلها ويؤكد رقيها.',
        },
      ],
    },
    gifting: {
      eyebrow: 'فن الإهداء',
      title: 'اهتمام له معنى.',
      desc:
        'كل لحظة تستحق لفتة تم اختيارها بدقة. اختر مناسبة لتوجيه ابتكارك القادم.',
      choose: 'اختيار',
      selected: 'مختار',
    },
    personalization: {
      eyebrow: 'التخصيص',
      title: 'فكرتك. إلهامنا. ابتكار للمشاركة.',
      orientation: 'توجهات المناسبات',
      stages: [
        {
          number: '01',
          title: 'مناسبتك',
          description:
            'أنت تحدد اللحظة التي تريد الاحتفال بها والنية التي تريد نقلها من خلال هذه الهدية.',
        },
        {
          number: '02',
          title: 'إلهامك',
          description:
            'أنت تشارك تفضيلاتك البصرية والجو المرغوب فيه وروح لفتتك بين الشوكولاتة الداكنة والبيضاء.',
        },
        {
          number: '03',
          title: 'طلبك',
          description:
            'نتناقش مباشرة حول فكرتك لنتخيل معاً العرض الذي يناسب توقعاتك.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'آراء العملاء',
      title: 'ماذا يقول عملاؤنا المميزون.',
      desc: 'اكتشف انطباعات من وضعوا ثقتهم في CHOCO LOUTI لمشاركتهم لحظاتهم الثمينة.',
      items: [
        {
          quote: 'رقي استثنائي حقاً لحفل زفافنا. لقد أبهرت زهور الشوكولاتة جميع ضيوفنا.',
          author: 'سارة ومهدي',
          occasion: 'حفل زفاف استثنائي',
        },
        {
          quote: 'الصندوق المميز هو تحفة بصرية وذوقية حقيقية. فن الاهتمام بكل ما للكلمة من معنى.',
          author: 'أمينة ك.',
          occasion: 'هدية عيد ميلاد',
        },
        {
          quote: 'لفتة مخصصة مؤثرة وبدقة نادرة. خدمة العملاء عبر الواتساب تتميز باحترافية عالية.',
          author: 'كريم ب.',
          occasion: 'شكر وامتنان',
        },
      ],
    },
    newsletter: {
      eyebrow: 'النشرة البريدية والامتيازات',
      title: 'احصل على مجموعاتنا الموسمية.',
      desc: 'اشترك لتكون أول من يتم إعلامه بإبداعاتنا الموسمية وصناديق الهدايا الحصرية.',
      placeholder: 'البريد الإلكتروني',
      button: 'اشتراك',
      success: 'شكراً لتسجيلك. أهلاً بك في عالم CHOCO LOUTI.',
      error: 'يرجى إدخال بريد إلكتروني صالح.',
    },
    brandStatement: {
      quote: '« لأن بعض الاهتمامات تستحق أن تكون فريدة. »',
      sub: 'CHOCO LOUTI · فن الشوكولاتة المصنوعة حسب الطلب',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'أسئلتكم، أجوبتنا.',
      desc:
        'لأي طلب خاص، تتيح لك مساحة الاتصال الخاصة بنا إعداد مشروعك.',
      items: [
        {
          id: 'demande-personnalisee',
          question: 'كيف يتم طلب ابتكار مخصص؟',
          answer:
            'يبدأ كل مشروع بنقاش حول مناسبتك وإلهامك. يمكنك مشاركة فكرتك عبر نموذج الاتصال حتى نتمكن من تخيل تنسيق يناسب اهتمامك معاً.',
        },
        {
          id: 'occasions',
          question: 'ما هي المناسبات التي تقدمون إبداعات لها؟',
          answer:
            'ترافق إبداعاتنا حفلات الزفاف والخطوبة، أعياد الميلاد، المواليد الجدد، اللحظات الرومانسية، رسائل الشكر، وأي طلب مخصص مصمم للحظة خاصة.',
        },
        {
          id: 'creations-disponibles',
          question: 'ما هي الإبداعات التي تشكل عالم CHOCO LOUTI؟',
          answer:
            'تکرم CHOCO LOUTI زهور الشوكولاتة المخصصة، المصنوعة من الشوكولاتة الداكنة والبيضاء، والمعروضة بشكل فردي في طوق دنتيل أو مجتمعة في صندوق مميز.',
        },
        {
          id: 'tarifs',
          question: 'كيف يمكننا الحصول على معلومات الأسعار؟',
          answer:
            'نظرًا لأنه يتم ابتكار الإبداعات وفقًا لمناسبتك ورغبات التخصيص الخاصة بك، يتم توفير معلومات الأسعار عند الطلب أثناء الاتصال المباشر.',
        },
        {
          id: 'commande-contact',
          question: 'كيف يمكن تقديم طلب أو التواصل مع الدار؟',
          answer:
            'يمكنك إعداد طلبك مباشرة في قسم الاتصال مع تحديد مناسبتك وإلهامك. سيتم ربط قنوات الاتصال المباشرة للدار بها عند النشر النهائي.',
        },
      ],
    },
    contact: {
      eyebrow: 'الاتصال والتصميم حسب الطلب',
      title: 'دعنا نتخيل ابتكارك القادم.',
      desc:
        'شارك مناسبتك أو إلهامك أو مجرد فكرة. دعنا نتواصل لابتكار ابتكارك.',
      weContact: 'اتصل بنا',
      integrationInfo: 'معلومات التكامل',
      integrationDesc:
        'سيتم تفعيل تفاصيل الاتصال المباشرة للدار وإرسال هذا النموذج تلقائياً بمجرد ربط خدمة الرسائل.',
      name: 'الاسم',
      namePlaceholder: 'اسمك الأول أو الأخير',
      channel: 'البريد الإلكتروني أو الهاتف',
      channelPlaceholder: 'you@example.com أو الهاتف',
      occasionLabel: 'المناسبة',
      selectOccasionPlaceholder: 'اختر مناسبة',
      message: 'الرسالة',
      messagePlaceholder:
        'صف مناسبتك أو رغباتك أو نمط الإبداع المطلوب...',
      prepareRequest: 'تحضير طلبي',
      localValidation: 'التحقق المحلي نشط · إرسال الخادم قيد الاتصال',
      serverIntegrationTitle: 'نموذج يتطلب تكامل الخادم',
      serverIntegrationDesc:
        'لم يتم ربط خدمة إرسال بهذه الواجهة بعد: لم يتم إرسال طلبك تلقائياً. يمكنك نسخ ملخصك أدناه.',
      copySummary: 'نسخ الملخص',
      summaryCopied: 'تم نسخ الملخص',
    },
    footer: {
      visualIdentity: 'الهوية البصرية المقترحة · في انتظار التحقق',
      footerDesc:
        'تتخيل CHOCO LOUTI الشوكولاتة الحرفية كفن اهتمام، من خلال زهور الشوكولاتة المخصصة وصناديق مصممة حسب الطلب.',
      navigationHeading: 'التنقل',
      contactMaisonHeading: 'الاتصال والدار',
      officialCoords:
        'سيتم نشر تفاصيل الاتصال الرسمية هنا بمجرد تأكيدها.',
      accessContact: 'الوصول إلى مساحة الاتصال',
      allRights: '© 2026 CHOCO LOUTI. جميع الحقوق محفوظة.',
      footerArt: 'CHOCO LOUTI — فن الشوكولاتة المصنوعة حسب الطلب.',
    },
  },
};
