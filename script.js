document.addEventListener('DOMContentLoaded', () => {
    const savedLogin = localStorage.getItem('name');
    const savedDob = localStorage.getItem('date');
    const savedGender = localStorage.getItem('gen');

    if (savedLogin && savedDob && savedGender) {
        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('main-header').classList.remove('hidden');
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('user-login').textContent = savedLogin;
    }
});

const form1 = document.forms.auth;

form1.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = form1.name.value.trim();
    const date = form1.date.value;
    const gen = form1.gen.value;

    let check = true; 

    if (form1.name.validity.valid) {
        form1.name.labels[0].innerText = "";
        form1.name.labels[0].classList.remove('error');
    } else {
        form1.name.labels[0].innerText = "Введите корректное имя";
        form1.name.labels[0].classList.add('error');
        check = false;
    }

    if (form1.date.validity.valid) {
        form1.date.labels[0].innerText = "";
        form1.date.labels[0].classList.remove('error');
    } else {
        form1.date.labels[0].innerText = "Введите корректную дату";
        form1.date.labels[0].classList.add('error');
        check = false;
    }

    if (check) {
        localStorage.setItem('name', name);
        localStorage.setItem('date', date);
        localStorage.setItem('gen', gen);

        document.getElementById('auth-section').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('main-header').classList.remove('hidden');
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('user-login').textContent = name;
        location.reloadload()
    }

});


        function logout() {
            localStorage.removeItem('name');
            localStorage.removeItem('date');
            localStorage.removeItem('gen');

            document.getElementById('auth-section').classList.remove('hidden');
            document.getElementById('main-content').classList.add('hidden');
            document.getElementById('main-header').classList.add('hidden');
            document.getElementById('user-info').classList.add('hidden');
        }

        function navigate(section) {
            document.querySelectorAll('#main-content > div').forEach(div => div.classList.add('hidden'));
            document.getElementById(section).classList.remove('hidden');
            document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
            document.getElementById('nav-' + section).classList.add('active');
        }
        
// Словарь

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


function showDescription(term) {
    const title = dictionary[term].title;
    const description = dictionary[term].description;

    document.getElementById('term-title').textContent = title;
    document.getElementById('term-description').textContent = description;
}


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


// Галерея
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


// Тест

function checkTest() {
    let mark = 0;

    const ans1 = document.getElementById('answer1').value.toLowerCase();
    if (ans1 === 'пудж') {
        document.getElementById('ans1').innerText = 'Верно';
        document.getElementById('ans1').className = 'correct';
        mark += 1;
    } else {
        document.getElementById('ans1').innerText = 'Неверно. Ответ: Пудж';
        document.getElementById('ans1').className = 'incorrect';
    }

    const ans2 = document.getElementById('answer2').value.toLowerCase();
    if (ans2 === 'рошан') {
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
    document.getElementById('res-test').textContent = mark + " балла(ов) из 4";

    updateProfile();

    document.getElementById('answer1').readOnly = true;
    document.getElementById('answer2').readOnly = true;

    for (const answer of answers1) {
        answer.disabled = true;}
    for (const answer of answers2) {
        answer.disabled = true;}


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
    const mark = localStorage.getItem('mark');
    document.getElementById('profile-test-result').textContent = mark + " балла(ов) из 4";
}

window.onload = function() {
    updateProfile();
};


function repeat (){
    document.getElementById('ans1').innerText = '';
    document.getElementById('ans2').innerText = '';
    document.getElementById('res1').innerText = '';
    document.getElementById('res2').innerText = '';

    document.getElementById('res-test').textContent = 'Не пройден';

    
    const ans1 = document.getElementById('answer1');
    const ans2 = document.getElementById('answer2');
    const answers1 = document.getElementsByName("11");
    const answers2 = document.getElementsByName("12");

    ans1.readOnly = false;
    ans1.value = '';
    ans2.readOnly = false;
    ans2.value = '';

    for (const answer of answers1) {
        answer.disabled = false;
        answer.checked = false;
    }
    for (const answer of answers2) {
        answer.disabled = false;
        answer.checked = false;
    }
}



// Личный кабинет

function showProfile() {
    const savedLogin = localStorage.getItem('name');
    const savedDob = localStorage.getItem('date');
    const savedGender = localStorage.getItem('gen');
    const savedMark = localStorage.getItem('mark');  

    document.getElementById('profile-login').textContent = savedLogin;
    document.getElementById('profile-dob').textContent = savedDob;
    document.getElementById('profile-gender').textContent = savedGender;
    document.getElementById('profile-test-result').textContent = savedMark ? savedMark + " балла(ов) из 4" : "Не пройден"; 
}

showProfile();




        