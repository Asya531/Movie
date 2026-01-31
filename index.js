const translations = {
    'en': {
        'welcome-title': 'Without us watch online on Shining Stars',
        'main-content': 'This is the content in English.'
    },
    'uk': {
        'welcome-title2': 'Без нас дивися онлайн на Сяючі Зірки',
        'main-content2': 'Це вміст українською мовою.'
    }
    
};
function changeLanguage(lang) {
    // Отримуємо всі елементи, які мають атрибут data-key
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        // Перевіряємо, чи існує переклад для цього ключа в обраній мові
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
        console.log(`Changed language to ${lang}`);
    });
    // Оновлюємо атрибут lang на головному тегу HTML для SEO та доступності
    document.documentElement.lang = lang; 
}

