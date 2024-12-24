document.addEventListener('DOMContentLoaded', () => {
    const savedLogin = localStorage.getItem('login');
    const savedDob = localStorage.getItem('dob');
    const savedGender = localStorage.getItem('gender');

    if (savedLogin && savedDob && savedGender) {
        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('main-header').classList.remove('hidden');
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('user-login').textContent = savedLogin;
    }
});

function authenticate() {
    const login = document.getElementById('login').value.trim();
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    let valid = true;

    // Проверка логина
    const loginRegex = /^[а-яА-ЯёЁ0-9]{4,10}$/;
    if (!login || !loginRegex.test(login)) {
        document.getElementById('login-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('login-error').classList.add('hidden');
    }

    // Проверка даты рождения
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const minDob = new Date('1950-01-01');
    if (!dob || dobDate < minDob || dobDate > currentDate) {
        document.getElementById('dob-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('dob-error').classList.add('hidden');
    }

    // Проверка пола
    if (!gender) {
        document.getElementById('gender-error').classList.remove('hidden');
        valid = false;
    } else {
        document.getElementById('gender-error').classList.add('hidden');
    }

    // Если все данные корректны, сохраняем их и показываем основной контент
    if (valid) {
        localStorage.setItem('login', login);
        localStorage.setItem('dob', dob);
        localStorage.setItem('gender', gender);

        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('main-header').classList.remove('hidden');
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('user-login').textContent = login;
        location.reload()
    }
}

        function logout() {
            localStorage.removeItem('login');
            localStorage.removeItem('dob');
            localStorage.removeItem('gender');

            document.getElementById('auth-section').classList.remove('hidden');
            document.getElementById('main-content').classList.add('hidden');
            document.getElementById('main-header').classList.add('hidden');
            document.getElementById('user-info').classList.add('hidden');
        }

        function navigate(section) {
            // Скрываем все разделы
            document.querySelectorAll('#main-content > div').forEach(div => div.classList.add('hidden'));
        
            // Показываем выбранный раздел
            document.getElementById(section).classList.remove('hidden');
        
            // Убираем класс "active" со всех ссылок
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
        
            // Добавляем класс "active" для текущей ссылки
            document.getElementById('nav-' + section).classList.add('active');
        }
        
// словарь

const dictionary = {
    term1: {
        title: 'Линия',
        description: 'Это раздел карты, по которой герои сражаются в начале игры, обычно делится на три линии: верхнюю (или скипперскую), центральную и нижнюю. В каждой линии игроки сражаются с вражескими героями и крипами, чтобы заработать золото и опыт.'
    },
    term2: {
        title: 'Рошан',
        description: 'Это сильный нейтральный монстр в Dota 2, который спаунится в центральной части карты. Убийство Рошана даёт команде преимущество в виде Аегиса Бессмертия или других ценных предметов, таких как Шардю'
    },
    term3: {
        title: 'Аегис ',
        description: 'Это предмет, который даёт игроку второе дыхание после смерти. Когда герой с Аегисом умирает, он возрождается в том же месте через несколько секунд, что даёт ему возможность продолжать сражение. Аегис часто получают из Рошана.'
    },
    term4: {
        title: 'Мета',
        description: 'Это стратегия и набор наиболее эффективных тактик, которые считаются оптимальными в определённый момент времени в игре. Мета может изменяться с выходом новых патчей и героев.'
    },
    term5: {
        title: 'Ганк',
        description: 'Это тактика, при которой один или несколько игроков неожиданно нападают на вражеского героя, чтобы его убить. Ганки часто происходят на линии, и они помогают нарушить планы противника, выиграть золото и опыт.'
    },
    term6: {
        title: 'Крипы',
        description: 'Это нейтральные или вражеские существа, которые появляются на карте и служат источником золота и опыта. Игроки убивают крипов для фарма, а также могут использовать крипов для защиты своих линий или нападений на противников.'
    },
    term7: {
        title: 'Ласт-хит',
        description: 'Ласт-хит (или добивание) — это процесс удачного удара по вражескому крипу или герою, который приводит к его уничтожению. За каждый ласт-хит игрок получает золото. Хороший ласт-хит — это важная часть фарма и развития героев в Dota 2.'
    },
    term8: {
        title: 'Ренж и Мили',
        description: 'Это два типа героев в Dota 2. Ренж — это герои, которые атакуют на расстоянии (например, стрелки или маги), а Мили — герои, которые сражаются в ближнем бою, нанося удары в пределах досягаемости (например, танки или дд-герои). Эти различия влияют на тактику игры и выбор предметов.'
    },
    term9: {
        title: 'Варды',
        description: 'Это предметы, которые устанавливаются на карте для обеспечения видимости. Варды позволяют следить за важными участками карты (например, за Рошаном, линиями или лесами), что даёт команде стратегическое преимущество. Различают обнаруживаемые и необнаруживаемые варды, которые могут быть уничтожены врагами или не могут быть замечены.'
    },
    term10: {
        title: 'Руны',
        description: 'Это специальные объекты, которые периодически появляются на карте в определённых местах и предоставляют героям бонусы. Существуют различные типы рун: руна инвиза, руна ускорения, руна регенерации маны, руна силы и другие. Их можно использовать для получения преимущества в игре.'
    }
};

// Функция для отображения описания термина
function showDescription(term) {
    const title = dictionary[term].title;
    const description = dictionary[term].description;

    document.getElementById('term-title').textContent = title;
    document.getElementById('term-description').textContent = description;
}

// Функция для фильтрации списка терминов
function filterDictionary() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const terms = document.querySelectorAll('#terms-list .term');

    terms.forEach(term => {
        const termName = term.textContent.toLowerCase();
        if (termName.includes(searchTerm)) {
            term.style.display = '';
        } else {
            term.style.display = 'none';
        }
    });
}

showDescription('term1');


//галерея
const slides = document.querySelectorAll('.slide');
const butprev = document.getElementById('butprev');
const butnext = document.getElementById('butnext');
const inp = document.getElementById('inp');
const butinp = document.getElementById('butinp');

let currentslide = 0;

function showslide(n) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[n].style.display = 'block';
  currentslide = n;
  slideNumber.textContent = `${currentslide + 1} / ${slides.length}`;
}

function nextslide() {
  if (currentslide < slides.length - 1) {
    showslide(currentslide + 1);
  }
}

function prevslide() {
  if (currentslide > 0) {
    showslide(currentslide - 1);
  }
}

butnext.addEventListener('click', nextslide);
butprev.addEventListener('click', prevslide);

showslide(0);


//тест

function checkTest() {
    let mark = 0;

    const ans1 = document.getElementById('answer1').value;
    if (ans1 === 'Пудж') {
        document.getElementById('ans1').innerText = 'Верно';
        document.getElementById('ans1').className = 'correct';
        mark += 1;
    } else {
        document.getElementById('ans1').innerText = 'Неверно. Ответ: Пудж';
        document.getElementById('ans1').className = 'incorrect';
    }

    const ans2 = document.getElementById('answer2').value;
    if (ans2 === 'Рошан') {
        document.getElementById('ans2').innerText = 'Верно';
        document.getElementById('ans2').className = 'correct';
        mark += 1;
    } else {
        document.getElementById('ans2').innerText = 'Неверно. Ответ: Рошан';
        document.getElementById('ans2').className = 'incorrect';
    }

    const answers1 = document.getElementsByName("11");
    const answers2 = document.getElementsByName("12");

    const res1 = prov(answers1);
    const res2 = prov(answers2);

    if (res1 === '36:40') {
        document.getElementById('res1').innerText = 'Верно';
        document.getElementById('res1').className = 'correct';
        mark += 1;
    } else {
        document.getElementById('res1').innerText = 'Неверно. Ответ: 36:40';
        document.getElementById('res1').className = 'incorrect';
    }

    if (res2 === '100') {
        document.getElementById('res2').innerText = 'Верно';
        document.getElementById('res2').className = 'correct';
        mark += 1;
    } else {
        document.getElementById('res2').innerText = 'Неверно. Ответ: 100';
        document.getElementById('res2').className = 'incorrect';
    }
    localStorage.setItem('mark', mark);
    updateProfile();
}

function prov(answers) {
    let select;
    for (const answer of answers) {
        if (answer.checked) {
            select = answer.value;
            return select;
        }
    }
}

function updateProfile() {
    const mark = localStorage.getItem('mark') || 0;
    document.getElementById('profile-test').textContent = mark + " балла(ов) из 4";
}

window.onload = function() {
    updateProfile();
};


function repeat (){
    document.getElementById('ans1').innerText = '';
    document.getElementById('ans2').innerText = '';
    document.getElementById('res1').innerText = '';
    document.getElementById('res2').innerText = '';
}



// личный кабинет

        function showProfile() {
            const savedLogin = localStorage.getItem('login');
            const savedDob = localStorage.getItem('dob');
            const savedGender = localStorage.getItem('gender');
            document.getElementById('profile-login').textContent = savedLogin;
            document.getElementById('profile-dob').textContent = savedDob;
            document.getElementById('profile-gender').textContent = savedGender === 'male' ? 'Мужской' : 'Женский';

        }
        
        showProfile();




// 
        
