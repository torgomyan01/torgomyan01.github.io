const translateKeys = [
    {
        key: 'about',
        am: 'Մեր Մասին',
        ru: `О нас`,
        en: `About`
    },
    {
        key: 'works',
        am: 'Մեր Աշխատանքները',
        ru: `Наши работы`,
        en: `english`
    },
    {
        key: 'contact',
        am: 'Կապ',
        ru: 'Контакт',
        en: `Contact`
    },
    {
        key: 'services',
        am: 'Ծառայություններ',
        ru: 'Услуги',
        en: `Services`
    },
    {
        key: 'calc',
        am: 'Հաշվիչ',
        ru: `Калькулятор`,
        en: 'Calculator'
    },
    {
        key: 'pages',
        am: 'Գործընկերներ',
        ru: 'коллеги',
    },
    {
        key: 'header_title',
        am: 'Ունես Բիզնես՞',
        ru: 'Подготовка Веб-Сайтов'
    },
    {
        key: 'header_subtitle',
        am: 'Ցանկացած ժամանակակից բիզնես պետքե ունենա իր կայքը',
        ru: 'Подготовка Веб-Сайтов'
    },
    {
        key: 'key_2',
        am: `
            Քո՝ բիզնեսը կարող է ունենալ մինչեվ 2 անգամ ավել եկամուտ ինչպես նաև կկարողանաք ավելի արագ եվ ճիշտ կառավարել։ <br>
            Մենք Ձեզ հնարաորություն ենք տալիս ունենալ Ձեր կայքը սեղմ ժամկետներում եվ ամենահարմար գներով․ <br>
            Ինչպես նաև մեր առաջին համագործակցության ժամանակ կունենաք նաև զեղչեր։
        `,
        ru: `
            Ваш бизнес может иметь доход до 2 раз больше и вы сможете управлять им быстрее и правильнее. <br>
            Мы даем Вам возможность иметь свой сайт в короткие сроки и по самым удобным ценам. <br>
            Как и при нашем первом сотрудничестве, у вас также будут скидки.
        `
    },
    {
        key: 'btn-header1',
        am: `Կապ մեզ հետ
           <i class="fa-solid fa-phone ps-10"></i>`,
        ru: `Связаться с нами
        <i class="fa-solid fa-phone ps-10"></i>
        `,
    },
    {
        key: 'head1',
        am: `Ինչու ընտրել մեզ`,
        ru: 'Почему выбирают нас',
    },
    {
        key: 'p1',
        am: `<span>Նորարարություն և ստեղծագործականություն.</span> Մենք ստեղծում ենք ժամանակակից վեբ
                նախագծեր և կրթական ծրագրեր, որոնք միշտ մեկ քայլ առաջ են միտումներից:`,
        ru: `
        <span>Инновации и творчество.</span> Мы создаем современные веб-проекты и образовательные
         программы, которые всегда на шаг впереди тенденций.
        `,
        en: `English`
    },
    {
        key: 'p2',
        am: `<span>Պրոֆեսիոնալ թիմ.</span> Մեր փորձառու մշակողները և հրահանգիչները
                ապահովում են ամենաբարձր մակարդակի գիտելիքներն ու հմտությունները:`,
        ru: `
        <span>Профессиональная команда.</span> Наши опытные разработчики и преподаватели обеспечивают высочайший уровень знаний и навыков.
        `,
        en: `English`
    },
    {
        key: 'p3',
        am: `<span>Գործնական փորձ.</span> Սովորել անելով: Ուսանողները լուծում են իրական խնդիրներ՝
                պատրաստվելով հաջող կարիերայի։`,
        ru: `
        <span>Практический опыт.</span>
         Обучение в процессе работы. Студенты решают реальные проблемы, готовясь к успешной карьере.
        `,
        en: `English`
    },
    {
        key: 'p4',
        am: `<span>Ճկունություն և անհատականություն.</span> Մեր ծրագրերը հարմար են հմտությունների բոլոր մակարդակների
                համար, և ճկուն գրաֆիկները
                հարմարեցված են ձեզ համապատասխան:`,
        ru: `
        <span>Гибкость и индивидуальность.</span>
         Наши программы подходят для всех уровней квалификации, а гибкий график специально разработан для вас.
        `,
        en: `English`
    },
    {
        key: 'p5',
        am: `<span>Ոգեշնչող համայնք. </span> Դուք դառնում եք ակտիվ համայնքի մի մասը, որտեղ ձեր
                գաղափարները աջակցվում են:`,
        ru: `
        <span>Вдохновляющее сообщество.</span>
         Вы становитесь частью активного сообщества, где ваши идеи поддерживаются.
        `,
        en: `English`
    },
    {
        key: 'p6',
        am: `<span>Իրական արդյունքներ</span> շրջանավարտները հաջողությամբ կիրառում են գիտելիքները
                սկսելով կարիերա ՏՏ ոլորտում կամ սկսելով իրենց սեփական նախագծերը:`,
        ru: `
        <span>Реальные результаты. </span>
         выпускники успешно применяют полученные знания, чтобы начать карьеру в сфере SS или запустить собственные проекты
        `,
        en: `English`
    },
    {
        key: 'p7',
        am: `Միացե՛ք մեզ և դարձե՛ք հաջողության մի մասը վեբ մշակման և ՏՏ ոլորտում:`,
        ru: 'Присоединяйтесь к нам и станьте частью успеха в веб-разработке и SS.',
        en: `English`
    },
    {
        key: 'head2',
        am: `ՄԵՐ ԱՇԽԱՏԱՆՔՆԵՐԸ `,
        ru: 'НАШИ РАБОТЫ',
        en: "English"
    },
    {
        key: 'btn2',
        am: `Տեսնել Ավելին`,
        ru: 'Посмотреть больше',
        en: "English"
    },
    {
        key: 'head3',
        am: `ԿՈՆՏԱԿՏԱՅԻՆ ՏՎՅԱԼՆԵՐ`,
        ru: 'КОНТАКТЫ',
        en: "English"
    },
    {
        key: 'name',
        am: `ԱՆԴՐԱՆԻԿ ԹՈՐԳՈՄՅԱՆ`,
        ru: 'Андраник Торгомян ',
        en: "Andranik Torgomyan"
    },
    {
        key: 'head4',
        am: `Կայքը ըստ փուլերի`,
        ru: 'Сайт по этапам',
        en: "English"
    },
    {
        key: 'head5',
        am: `Մեր ծառայությունները`,
        ru: 'Наши сервисы',
        en: "English"
    },
    {
        key: 'head6',
        am: `ՀԱՇՎԻՉ`,
        ru: 'КАЛЬКУЛЯТОР',
        en: "English"
    },
    {
        key: 'calc-h3',
        am: ` Խնդրում եմ լրացրեք տվյալները`,
        ru: 'Пожалуйста, заполните информацию',
        en: "English"
    },
    {
        key: 'calc-sp1',
        am: `Ձեր Անունը`,
        ru: 'Ваше имя',
        en: "English"
    },
    {
        key: 'calc-sp2',
        am: `Հեռախոսահամար`,
        ru: 'Номер телефона',
        en: "English"
    },
    {
        key: 'calc-sp3',
        am: `Նկարագրություն`,
        ru: 'Описание',
        en: "English"
    },
    {
        key: 'calc-btn',
        am: `
        Ուղղարկել
        <i class="fa-regular fa-paper-plane ms-2"></i>`,
        ru: `Отправлять
        <i class="fa-regular fa-paper-plane ms-2"></i>
        `,
        en: "English"
    },
    {
        key: 'head7',
        am: `ՄԵԶ ՎՍՏԱՀՈՒՄ ԵՆ`,
        ru: 'НАМ ДОВЕРЯЮТ',
        en: "English"
    },
]


