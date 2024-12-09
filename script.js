document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname;

    if (currentPage == "/page_2.html")
    {
        let formData = {
            name: '',
            email: '',
            phone: '',
            date: '',
            comments: '',
            printData: function () {
            console.log(`Имя: ${this.name}`);
            console.log(`E-mail: ${this.email}`);
            console.log(`Телефон: ${this.phone}`);
            console.log(`Дата: ${this.date}`);
            console.log(`Комментарий: ${this.comments}`);
            }
        };

        const modalButtons = document.querySelectorAll('.openModal');
        const modal = document.getElementById('modal');
        const closeButton = document.querySelector('.close');

        function openModal(event) {
            const buttonId = event.currentTarget.getAttribute('data-id');
            modal.style.display = 'block';
        }

        modalButtons.forEach(button => {
            button.addEventListener('click', openModal);
        });

        closeButton?.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });

        const phoneInput = document.getElementById("phone");
        phoneInput?.addEventListener("input", function(e) {

            let value = this.value.replace(/[^0-9]/g, '');

            if (value.length > 1) {
                value = '7-' + value.substring(1);
            }
        
            if (value.length > 5) {
                value = value.slice(0, 5) + '-' + value.slice(5); 
            }
        
            if (value.length > 8) {
                value = value.slice(0, 9) + '-' + value.slice(9);
            }
        
            if (value.length > 11) {
                value = value.slice(0, 12) + '-' + value.slice(12);
            }
        
            if (value.length > 15) {
                value = value.slice(0, 15); 
            }
        
            this.value = value; 
        });

        contactForm = this.getElementById('contactForm');

        contactForm.onsubmit = function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const country = document.getElementById("country").value;
            const date = document.getElementById("date").value;
            const comments = document.getElementById("comments").value;
            if (name && email && phone && country && date && comments) {
                const message = document.getElementById('message');
                message.textContent = 'Форма отправлена!';
                message.style.opacity = 1;
                message.style.color = 'blue';

                setTimeout(() => {
                    modal.style.display = "none";
                    message.style.opacity = 0;
                    contactForm.reset(); // Сбросить форму
                }, 2000)

                formData.name = name;
                formData.email = email;
                formData.phone = phone;
                formData.date = date;
                formData.comments = comments;

                formData.printData();
            } else {
                alert("Пожалуйста, заполните все поля.");
            }
        }
    }
});

document.getElementById('scrollToTopBtn')?.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById("navbar");

    const sticky = navbar.offsetTop;

    const placeholder = document.createElement('div');
    placeholder.style.display = 'none';

    navbar.parentNode.insertBefore(placeholder, navbar);

    function stickyNav() {
        if (window.pageYOffset >= sticky && window.innerWidth > 760) {
            placeholder.style.display = 'block';
            placeholder.style.height = navbar.offsetHeight + 'px';
            navbar.classList.add("sticky");
        } else {
            placeholder.style.display = 'none';
            navbar.classList.remove("sticky");
        }
    }

    window.onscroll = function() {stickyNav()};
});

// 1. Обработчик события click на заголовок H1
document.getElementById('title')?.addEventListener('click', function() {
    alert('Вы кликнули на заголовок - так держать!');
});

document.addEventListener('DOMContentLoaded', () => {
    const practiceTable = document.getElementById('seminars');
    
    const firstSemesterPractices = [
        { id: 1, theme: 'Основы языка HTML' },
        { id: 2, theme: 'Формы и кнопки в HTML' },
        { id: 3, theme: 'Таблицы и интерактивные элементы HTML' },
        { id: 4, theme: 'Основы работы с CSS' },
        { id: 5, theme: 'Работа с классами в CSS' },
        { id: 6, theme: 'Работа с сетками и разметкой в HTML' },
        { id: 7, theme: 'Адаптивная вёрстка' },
        { id: 8, theme: 'Bootstrap' },
        { id: 9, theme: 'Основы языка JavaScript' },
        { id: 10, theme: 'Базовые задачи на JS' },
        { id: 11, theme: 'DOM-структура приложений и работа с объектами в языке JS' },
        { id: 12, theme: 'Встраивание скриптов' },
        { id: 13, theme: 'Отладка сценариев' },
        { id: 14, theme: 'Анимации и работа с ними' },
        { id: 15, theme: 'Github' },
        { id: 16, theme: 'Защита проекта' },
    ];

    const secondSemesterPractices = [
        { id: 1, theme: 'Базовое бэкенд-приложение' },
        { id: 2, theme: 'HTTP-запросы' },
        { id: 3, theme: 'JSON и работа с ним' },
        { id: 4, theme: 'HTTP-ответы' },
        { id: 5, theme: 'Проектирование API' },
        { id: 6, theme: 'Роутинг и его настройка' },
        { id: 7, theme: 'NoSQL базы данных' },
        { id: 8, theme: 'Обеспечение авторизации и доступа пользователей' },
        { id: 9, theme: 'Работа сторонних сервисов уведомления и авторизации' },
        { id: 10, theme: 'Основы ReactJS' },
        { id: 11, theme: 'Работа с компонентами динамической DOM' },
        { id: 12, theme: 'Использование хуков в React' },
        { id: 14, theme: 'Основы микросервисной архитектуры' },
        { id: 15, theme: 'Разработка классических модулей веб-приложений' },
        { id: 16, theme: 'Разработка классических модулей веб-приложений' },
    ];

    let isSecondSemester = false;
    let semester;

    changeSemesterButton = document.getElementById('change-table-btn');


    changeSemesterButton?.addEventListener('click', () => {
        if (!isSecondSemester) {
            semester = secondSemesterPractices;
            const table = document.getElementById('seminars');
            const rows = table.rows;
        
            // Удалить все строки, кроме заголовка
            for (let i = rows.length - 1; i > 0; i--) {
                table.deleteRow(i);
            }
        
            semester.forEach((practice) => {
                const row = table.insertRow();
                row.innerHTML = `
                    <td>${practice.id}</td>
                    <td>${practice.theme}</td>
                    <td class="checkbox"><input type="checkbox"></td>
                    <td class="checkbox"><input type="checkbox"></td>
                `;
            });

            changeSemesterButton.textContent = 'Вернуться к темам первого семестра';
        } else {
            semester = firstSemesterPractices;
            const table = document.getElementById('seminars');
            const rows = table.rows;
        
            // Удалить все строки, кроме заголовка
            for (let i = rows.length - 1; i > 0; i--) {
                table.deleteRow(i);
            }
        
            semester.forEach((practice) => {
                const row = table.insertRow();
                row.innerHTML = `
                    <td>${practice.id}</td>
                    <td>${practice.theme}</td>
                    <td class="checkbox"><input type="checkbox"></td>
                    <td class="checkbox"><input type="checkbox"></td>
                `;
            });

            changeSemesterButton.textContent = 'Показать темы второго семестра';
        }
    
        isSecondSemester = !isSecondSemester;
    });
});

const button = document.getElementById('show-lectures');
const table = document.getElementById('lections');

button.addEventListener('click', () => {
    table.style.display = 'block';
    table.style.width = '500px';
    table.style.transition = 'opacity 0.5s ease';
    table.style.opacity = 1;
});
