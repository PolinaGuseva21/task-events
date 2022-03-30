import { threadId } from 'worker_threads';

/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    const button = document.createElement('button');
    button.textContent = 'Удали меня';
    document.body.appendChild(button);
    button.addEventListener('click', function () {
        document.getElementsByTagName('button')[0].remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((element) => {
        const li = document.createElement('li');
        li.textContent = element;
        ul.appendChild(li);
        li.addEventListener('mouseover', function () {
            this.title = this.textContent;
        });
    });
    document.body.appendChild(ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    a.setAttribute('href', 'https://tensor.ru/');
    a.append('tensor');
    document.body.appendChild(a);
    let clicked = false;
    a.addEventListener('click', function () {
        if (!clicked) {
            this.textContent += ` ${this.getAttribute('href')}`;
            clicked = true;
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    ul.appendChild(li);
    document.body.append(ul, button);

    li.addEventListener('click', function () {
        this.textContent += '!';
    });
    button.addEventListener('click', function () {
        const li2 = document.createElement('li');
        li2.textContent = 'Пункт';
        ul.appendChild(li2);
        li2.addEventListener('click', function () {
            this.textContent += '!';
        });
    });
}
