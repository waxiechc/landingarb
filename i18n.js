// Объект с переводами для всех поддерживаемых языков
const translations = {
    ru: {
        // Заголовок
        "header.title": "Автоматический криптоарбитраж на Binance",
        "header.subtitle": "Бот отслеживает и использует ценовые расхождения внутри одной биржи в реальном времени. Полностью автоматический. Безопасный. Проверенный.",
        "header.cta": "Купить Пожизненный доступ за $1000",

        // Продукт
        "product.title": "Как работает наш арбитражный бот",
        "product.card1.title": "Внутрибиржевой арбитраж",
        "product.card1.text": "Бот использует ценовые расхождения между парами на одной биржи (Binance), не требуя вывода средств. Например, если BTC/USDT и BTC/BNB показывают разницу в цене, бот мгновенно совершает серию сделок для фиксации прибыли.",
        "product.card2.title": "Скорость реакции",
        "product.card2.text": "Наш бот реагирует на арбитражные возможности за 0.3-0.5 секунды, что критически важно в условиях высокой волатильности крипторынка. Это в 10-20 раз быстрее ручной торговли.",
        "product.card3.title": "Доходность",
        "product.card3.text": "При достаточной ликвидности и волатильности бот приносит 2-5% прибыли в день. На спокойном рынке доходность составляет 0.5-1.5% в день. Все операции полностью автоматизированы.",

        // Преимущества
        "benefits.title": "Преимущества нашего решения",
        "benefits.item1.title": "Lifetime-доступ",
        "benefits.item1.text": "Одноразовый платеж $1000 вместо ежемесячной подписки. Никаких скрытых платежей.",
        "benefits.item2.title": "Безопасность",
        "benefits.item2.text": "Боту не нужны права на вывод средств. Ваши активы всегда остаются под вашим контролем.",
        "benefits.item3.title": "Работа 24/7",
        "benefits.item3.text": "Бот работает круглосуточно без перерывов, отслеживая рынок даже когда вы спите.",
        "benefits.item4.title": "Простая настройка",
        "benefits.item4.text": "Полная установка занимает менее 10 минут. Подробная инструкция и поддержка.",
        "price.subtitle": "Пожизненный-доступ",
        "benefits.cta": "Получить доступ",

        // Галерея
        "gallery.title": "Бот в действии",
        "gallery.image1.alt": "График арбитражных сделок",
        "gallery.image2.alt": "Терминал работы бота",
        "gallery.image3.alt": "Пример ордеров на Binance",

        // Отзывы
        "testimonials.title": "Отзывы наших клиентов",
        "testimonials.testimonial1.text": "За первый месяц бот окупился в 2 раза! Теперь он приносит стабильный пассивный доход. Настройка действительно заняла меньше 10 минут, как и обещали.",
        "testimonials.testimonial1.name": "Алексей К.",
        "testimonials.testimonial1.position": "Трейдер, Москва",
        "testimonials.testimonial2.text": "Использую 3 месяца, средняя доходность 3.2% в день. Бот работает стабильно, техподдержка отвечает быстро. Лучшее вложение за последние годы!",
        "testimonials.testimonial2.name": "Марина С.",
        "testimonials.testimonial2.position": "Инвестор, Киев",
        "testimonials.testimonial3.text": "Попробовал несколько арбитражных ботов - этот самый быстрый и надежный. Особенно нравится, что не нужно давать права на вывод средств.",
        "testimonials.testimonial3.name": "Дмитрий В.",
        "testimonials.testimonial3.position": "Криптоэнтузиаст, Минск",

        // Покупка
        "buy.title": "Купить Пожизненный-доступ",
        "buy.offer.title": "Что вы получаете:",
        "buy.offer.item1": "Файл бота с инструкцией по установке",
        "buy.offer.item2": "Доступ к закрытому Telegram-чату",
        "buy.offer.item3": "Пожизненные обновления и поддержку",
        "buy.offer.item4": "Настройку и помощь в запуске",
        "buy.price.note": "Одноразовый платеж",
        "buy.cta": "Купить сейчас",
        "buy.payment.methods": "Оплата: BTC ETH USDT BNB",

        // FAQ
        "faq.title": "Частые вопросы",
        "faq.question1": "Это безопасно?",
        "faq.answer1": "Да, бот использует API-ключи Binance только с правами на торговлю, без возможности вывода средств. Ваши активы всегда остаются на вашем аккаунте.",
        "faq.question2": "Какие требования к компьютеру?",
        "faq.answer2": "Бот может работать на любом компьютере с Windows/Linux/Mac. Минимальные требования: 2GB RAM, 2GHz процессор. Рекомендуем VPS для 24/7 работы.",
        "faq.question3": "Как происходит настройка?",
        "faq.answer3": "После покупки вы получаете пошаговую видеоинструкцию. Весь процесс занимает менее 10 минут: установка Python, настройка API-ключей Binance, запуск бота.",
        "faq.question4": "Есть ли гарантия возврата?",
        "faq.answer4": "Мы предлагаем 7-дневную гарантию возврата средств, если бот не соответствует описанию. Для возврата напишите в нашу поддержку в Telegram.",

        // Поддержка
        "support.text": "Поддержка в Telegram",

        // Футер
        "footer.link1": "О боте",
        "footer.link2": "Преимущества",
        "footer.link3": "FAQ",
        "footer.rights": "Все права защищены",
        "footer.disclaimer": "Этот продукт не является финансовой рекомендацией. Криптовалютные рынки высокорискованны."
    },
    uk: {
        // Заголовок
        "header.title": "Автоматичний криптоарбітраж на Binance",
        "header.subtitle": "Бот відстежує та використовує цінові розбіжності всередині однієї біржі в реальному часі. Повністю автоматичний. Безпечний. Перевірений.",
        "header.cta": "Купити Lifetime доступ за $1000",

        // Продукт
        "product.title": "Як працює наш арбітражний бот",
        "product.card1.title": "Внутрішньобіржовий арбітраж",
        "product.card1.text": "Бот використовує цінові розбіжності між парами на одній біржі (Binance), не вимагаючи виведення коштів. Наприклад, якщо BTC/USDT і BTC/BNB показують різницю в ціні, бот миттєво здійснює серію угод для фіксації прибутку.",
        "product.card2.title": "Швидкість реакції",
        "product.card2.text": "Наш бот реагує на арбітражні можливості за 0.3-0.5 секунди, що критично важливо в умовах високої волатильності крипторинку. Це в 10-20 разів швидше, ніж ручна торгівля.",
        "product.card3.title": "Дохідність",
        "product.card3.text": "При достатній ліквідності та волатильності бот приносить 2-5% прибутку на день. На спокійному ринку дохідність становить 0.5-1.5% на день. Всі операції повністю автоматизовані.",

        // Преимущества
        "benefits.title": "Переваги нашого рішення",
        "benefits.item1.title": "Довічний доступ",
        "benefits.item1.text": "Одноразовий платіж $1000 замість щомісячної підписки. Жодних прихованих платежів.",
        "benefits.item2.title": "Безпека",
        "benefits.item2.text": "Боту не потрібні права на виведення коштів. Ваші активи завжди залишаються під вашим контролем.",
        "benefits.item3.title": "Робота 24/7",
        "benefits.item3.text": "Бот працює цілодобово без перерв, відстежуючи ринок навіть коли ви спите.",
        "benefits.item4.title": "Просте налаштування",
        "benefits.item4.text": "Повне встановлення займає менше 10 хвилин. Детальна інструкція та підтримка.",
        "price.subtitle": "Довічний доступ",
        "benefits.cta": "Отримати доступ",

        // Галерея
        "gallery.title": "Бот в дії",
        "gallery.image1.alt": "Графік арбітражних угод",
        "gallery.image2.alt": "Термінал роботи бота",
        "gallery.image3.alt": "Приклад ордерів на Binance",

        // Отзывы
        "testimonials.title": "Відгуки наших клієнтів",
        "testimonials.testimonial1.text": "За перший місяць бот окупився в 2 рази! Тепер він приносить стабільний пасивний дохід. Налаштування дійсно зайняло менше 10 хвилин, як і обіцяли.",
        "testimonials.testimonial1.name": "Олексій К.",
        "testimonials.testimonial1.position": "Трейдер, Київ",
        "testimonials.testimonial2.text": "Використовую 3 місяці, середня дохідність 3.2% на день. Бот працює стабільно, техпідтримка відповідає швидко. Найкраще вкладення за останні роки!",
        "testimonials.testimonial2.name": "Марина С.",
        "testimonials.testimonial2.position": "Інвестор, Львів",
        "testimonials.testimonial3.text": "Спробував кілька арбітражних ботів - цей найшвидший і найнадійніший. Особливо подобається, що не потрібно давати права на виведення коштів.",
        "testimonials.testimonial3.name": "Дмитро В.",
        "testimonials.testimonial3.position": "Криптоентузіаст, Одеса",

        // Покупка
        "buy.title": "Купити довічний доступ",
        "buy.offer.title": "Що ви отримуєте:",
        "buy.offer.item1": "Файл бота з інструкцією з встановлення",
        "buy.offer.item2": "Доступ до закритого Telegram-чату",
        "buy.offer.item3": "Довічні оновлення та підтримку",
        "buy.offer.item4": "Налаштування та допомогу в запуску",
        "buy.price.note": "Одноразовий платіж",
        "buy.cta": "Купити зараз",
        "buy.payment.methods": "Оплата: BTC ETH USDT BNB",

        // FAQ
        "faq.title": "Часті запитання",
        "faq.question1": "Це безпечно?",
        "faq.answer1": "Так, бот використовує API-ключі Binance тільки з правами на торгівлю, без можливості виведення коштів. Ваші активи завжди залишаються на вашому акаунті.",
        "faq.question2": "Які вимоги до комп'ютера?",
        "faq.answer2": "Бот може працювати на будь-якому комп'ютері з Windows/Linux/Mac. Мінімальні вимоги: 2GB RAM, 2GHz процесор. Рекомендуємо VPS для цілодобової роботи.",
        "faq.question3": "Як відбувається налаштування?",
        "faq.answer3": "Після покупки ви отримуєте покрокову відеоінструкцію. Весь процес займає менше 10 хвилин: встановлення Python, налаштування API-ключів Binance, запуск бота.",
        "faq.question4": "Чи є гарантія повернення?",
        "faq.answer4": "Ми пропонуємо 7-денну гарантію повернення коштів, якщо бот не відповідає опису. Для повернення напишіть у нашу підтримку в Telegram.",

        // Поддержка
        "support.text": "Підтримка в Telegram",

        // Футер
        "footer.link1": "Про бота",
        "footer.link2": "Переваги",
        "footer.link3": "FAQ",
        "footer.rights": "Всі права захищені",
        "footer.disclaimer": "Цей продукт не є фінансовою рекомендацією. Криптовалютні ринки високоризиковані."
    },
    en: {
        // Header
        "header.title": "Automatic Crypto Arbitrage on Binance",
        "header.subtitle": "The bot tracks and uses price discrepancies within one exchange in real time. Fully automatic. Secure. Proven.",
        "header.cta": "Buy Lifetime access for $1000",

        // Product
        "product.title": "How our arbitrage bot works",
        "product.card1.title": "Intra-exchange arbitrage",
        "product.card1.text": "The bot uses price discrepancies between pairs on one exchange (Binance) without requiring withdrawals. For example, if BTC/USDT and BTC/BNB show a price difference, the bot instantly executes a series of trades to lock in profit.",
        "product.card2.title": "Reaction speed",
        "product.card2.text": "Our bot reacts to arbitrage opportunities in 0.3-0.5 seconds, which is critical in the highly volatile crypto market. This is 10-20 times faster than manual trading.",
        "product.card3.title": "Profitability",
        "product.card3.text": "With sufficient liquidity and volatility, the bot brings in 2-5% profit per day. In a calm market, the yield is 0.5-1.5% per day. All operations are fully automated.",

        // Benefits
        "benefits.title": "Advantages of our solution",
        "benefits.item1.title": "Lifetime access",
        "benefits.item1.text": "One-time payment of $1000 instead of a monthly subscription. No hidden fees.",
        "benefits.item2.title": "Security",
        "benefits.item2.text": "The bot doesn't need withdrawal rights. Your assets always remain under your control.",
        "benefits.item3.title": "24/7 operation",
        "benefits.item3.text": "The bot works around the clock without breaks, monitoring the market even while you sleep.",
        "benefits.item4.title": "Easy setup",
        "benefits.item4.text": "Complete installation takes less than 10 minutes. Detailed instructions and support.",
        "price.subtitle": "Lifetime access",
        "benefits.cta": "Get access",

        // Gallery
        "gallery.title": "Bot in action",
        "gallery.image1.alt": "Arbitrage trades chart",
        "gallery.image2.alt": "Bot terminal",
        "gallery.image3.alt": "Example of Binance orders",

        // Testimonials
        "testimonials.title": "Customer reviews",
        "testimonials.testimonial1.text": "In the first month, the bot paid for itself 2 times! Now it brings stable passive income. Setup really took less than 10 minutes, as promised.",
        "testimonials.testimonial1.name": "Alex K.",
        "testimonials.testimonial1.position": "Trader, Moscow",
        "testimonials.testimonial2.text": "Using for 3 months, average yield is 3.2% per day. The bot works stably, tech support responds quickly. Best investment in recent years!",
        "testimonials.testimonial2.name": "Marina S.",
        "testimonials.testimonial2.position": "Investor, Kyiv",
        "testimonials.testimonial3.text": "Tried several arbitrage bots - this one is the fastest and most reliable. Especially like that you don't need to give withdrawal rights.",
        "testimonials.testimonial3.name": "Dmitry V.",
        "testimonials.testimonial3.position": "Crypto enthusiast, Minsk",

        // Buy
        "buy.title": "Buy Lifetime access",
        "buy.offer.title": "What you get:",
        "buy.offer.item1": "Bot file with installation instructions",
        "buy.offer.item2": "Access to private Telegram chat",
        "buy.offer.item3": "Lifetime updates and support",
        "buy.offer.item4": "Setup and launch assistance",
        "buy.price.note": "One-time payment",
        "buy.cta": "Buy now",
        "buy.payment.methods": "Payment: BTC ETH USDT BNB",

        // FAQ
        "faq.title": "Frequently Asked Questions",
        "faq.question1": "Is it safe?",
        "faq.answer1": "Yes, the bot uses Binance API keys with trading rights only, without withdrawal capability. Your assets always remain in your account.",
        "faq.question2": "What are the system requirements?",
        "faq.answer2": "The bot can work on any Windows/Linux/Mac computer. Minimum requirements: 2GB RAM, 2GHz processor. We recommend VPS for 24/7 operation.",
        "faq.question3": "How is the setup done?",
        "faq.answer3": "After purchase, you receive a step-by-step video tutorial. The whole process takes less than 10 minutes: install Python, configure Binance API keys, launch the bot.",
        "faq.question4": "Is there a refund guarantee?",
        "faq.answer4": "We offer a 7-day money-back guarantee if the bot doesn't match the description. For a refund, contact our Telegram support.",

        // Support
        "support.text": "Telegram support",

        // Footer
        "footer.link1": "About the bot",
        "footer.link2": "Benefits",
        "footer.link3": "FAQ",
        "footer.rights": "All rights reserved",
        "footer.disclaimer": "This product is not financial advice. Cryptocurrency markets are highly risky."
    }
};

// Функция смены языка
function changeLanguage(lang) {
    // Устанавливаем атрибут lang для html
    document.documentElement.lang = lang;
    
    // Удаляем активный класс у всех кнопок
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Добавляем активный класс выбранной кнопке
    document.querySelector(`.language-btn[data-lang="${lang}"]`).classList.add('active');
    
    // Обновляем все тексты на странице
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Обновляем alt-тексты для изображений
    document.querySelectorAll('[data-i18n-alt]').forEach(img => {
        const key = img.getAttribute('data-i18n-alt');
        if (translations[lang] && translations[lang][key]) {
            img.setAttribute('alt', translations[lang][key]);
        }
    });
}

// Инициализация языка при загрузке
document.addEventListener('DOMContentLoaded', () => {
    // По умолчанию русский
    let currentLang = 'ru';
    
    // Проверяем, есть ли сохраненный язык в localStorage
    if (localStorage.getItem('language')) {
        currentLang = localStorage.getItem('language');
    }
    
    // Устанавливаем язык
    changeLanguage(currentLang);
    
    // Обработчики для кнопок переключения языка
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            localStorage.setItem('language', lang);
            changeLanguage(lang);
        });
    });
});