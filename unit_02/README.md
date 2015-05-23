# danco-js
<h2>Окружение</h2>

<p id="id1">

Коллекция переменных и их значений, которая существует в определённый момент, называется окружением. Когда программа запускается, окружение не пустое. Там всегда есть переменные, являющиеся частью программного стандарта, и большую часть времени там есть переменные, помогающие взаимодействовать с окружающей системой. К примеру, в браузере есть переменные и функции для изучения состояния загруженной веб-страницы и влияния на неё, для чтения ввода с мыши и клавиатуры.
</p>
<h2>Функции</h2>

Многие величины из стандартного окружения имеют тип function (функция). Функция – отдельный кусочек программы, который можно использовать вместе с другими величинами. К примеру, в браузере переменная alert содержит функцию, которая показывает небольшое окно с сообщением. Используют его так:

alert("С добрым утром!");</p>

<h2>Диалог alert</h2>

Выполнение функции называют вызовом. Вы можете вызвать функцию, записав скобки после выражения, которое возвращает значение функции. Обычно вы напрямую используете имя функции в качестве выражения. Величины, которые можно написать внутри скобок, передаются программному коду внутри функции. Величины, передаваемые функциям, называются аргументами функций. Функция alert требует один аргумент, но другие могут требовать разное количество аргументов разных типов.

<h2>Функция console.log</h2>
<p>
Функция alert может использоваться как средство вывода при экспериментах, но закрывать каждый раз это окно вам скоро надоест. Большинство систем JavaScript (включая все современные браузеры и Node.js) предоставляют функцию console.log, которая выводит величины на какое-либо устройство вывода. В браузерах это консоль JavaScript. Эта часть браузера обычно скрыта – большинство браузеров показывают её по нажатию F12, или Command-Option-I на Маке. 
</p>
<code>
<pre>
var x = 30;
console.log("the value of x is", x);
// → the value of x is 30
</pre>
</code>
<p>
Хотя в именах переменных нельзя использовать точку – она, очевидно, содержится в названии console.log. Это оттого, что console.log – не простая переменная. Это выражение, возвращающее свойство log переменной console. 
</p>
<h2>Возвращаемые значения</h2>
<p>
К примеру, функция Math.max принимает любое количество переменных и возвращает значение самой большой:
<code>
<pre>
console.log(Math.max(2, 4));
// → 4
</pre>
</code>

Когда функция производит значение, говорят, что она возвращает значение. Всё, что производит значение – это выражение, то есть вызовы функций можно использовать внутри сложных выражений. К примеру, возвращаемое функцией Math.min (противоположность Math.max) значение используется как один из аргументов оператора сложения:
<code>
<pre>
console.log(Math.min(2, 4) + 100);
// → 102
</pre>
</code>
</p>
<h2>prompt и confirm</h2>
<p>
Можно вызвать окно с вопросом и кнопками OK/Cancel при помощи функции confirm. Она возвращает булевское значение – true, если нажато OK, и false, если нажато Cancel.

confirm("Ну что, поехали?");
</p>

<h2>Управление порядком выполнения программы</h2>
<p>
Когда в программе больше одной инструкции, они выполняются сверху вниз. 

<code>
<pre>
var theNumber = Number(prompt("Выбери число", ""));
alert("Твоё число – квадратный корень из " +  theNumber * theNumber);
</pre>
</code>

Функция Number преобразовывает величину в число. Есть сходные функции String и Boolean, преобразующие величины в соответствующие типы.
</p>

<h2>Условное выполнение</h2>
<p>
Условное выполнение записывается при помощи ключевого слова if. В простом случае нам нужно, чтобы некий код был выполнен, только если выполняется некое условие. 
<code>
<pre>
var theNumber = prompt("Выбери число ", "");
if (!isNaN(theNumber))
  alert("Твоё число – квадратный корень из " +  theNumber * theNumber);
 </pre>
</code>

Теперь, введя «сыр», вы не получите вывод.
Рекомендуется использовать фигурные скобки всегда, даже когда команда одна.

Это улучшает читаемость кода.
<pre>
var theNumber = prompt("Выбери число ", "");
if (!isNaN(theNumber)) {
  alert("Твоё число – квадратный корень из " +  theNumber * theNumber);
  }
 </pre>
</p>
<p>
Ключевое слово if выполняет или пропускает инструкцию, в зависимости от значения булевого выражения. Это выражение записывается после if в скобках, и за ним идёт нужная инструкция.

Функция isNaN – стандартная функция JavaScript, которая возвращает true, только если её аргумент – NaN (не число). Функция Number возвращает NaN, если задать ей строку, которая не представляет собой допустимое число. В результате, условие звучит так: «выполнить, если только theNumber не является не-числом».
</p>

<h2>Преобразование к логическому типу</h2>
<p>
Оператор if (...) вычисляет и преобразует выражение в скобках к логическому типу.
<br>
В логическом контексте:
<ul>
<li>Число 0, пустая строка "", null и undefined, а также NaN являются false,</li>
<li>Остальные значения — true.</li>
</ul>
Например, такое условие никогда не выполнится:
<pre>
if (0) { // 0 преобразуется к false
  ...
}
</pre>
…А такое — выполнится всегда:
<pre>
if (1) { // 1 преобразуется к true
  ...
}
</pre>
Можно и просто передать уже готовое логическое значение, к примеру, заранее вычисленное в переменной:
<pre>
var cond = (year != 2011); // true/false

if (cond) {
  ...
}
</pre>
</p>

<h2>Неверное условие, else</h2>

Необязательный блок else («иначе») выполняется, если условие неверно:
<pre>
var year = prompt('Введите год появления стандарта ECMA-262 5.1', '');

if (year == 2011) {
  alert( 'Да вы знаток!' );
} else {
  alert( 'А вот и неправильно!' ); // любое значение, кроме 2011
}
</pre>
<p>
Часто нужно написать код не только для случая, когда выражение истинно, но и для случая, когда оно ложно. Путь с вариантами – это вторая стрелочка диаграммы. Ключевое слово else используется вместе с if для создания двух раздельных путей выполнения.
<code>
var theNumber = Number(prompt("Выбери число", ""));
if (!isNaN(theNumber))
  alert("Твоё число – квадратный корень из " + theNumber * theNumber);
else
  alert("Ну ты что число-то не ввёл?");
</code>
</p>
<p>
Если вам нужно больше разных путей, можно использовать несколько пар if/else по цепочке.
<code>
<pre>
var num = Number(prompt("Выбери число", "0"));

if (num &lt; 10)
  alert("Маловато");
else if (num &lt; 100)
  alert("Нормально");
else
  alert("Многовато");
</pre>
</code>

Программа проверяет, действительно ли num меньше 10. Если да – выбирает эту ветку, и показывает «Маловато». Если нет, выбирает другую – на которой ещё один if. Если следующее условие выполняется, значит номер будет между 10 и 100, и выводится «Нормально». Если нет – значит, выполняется последняя ветка.
</p>

<h2>Оператор вопросительный знак '?'</h2>
<p>
Иногда нужно в зависимости от условия присвоить переменную. Например:

<pre>
var access;
var age = prompt('Сколько вам лет?', '');

if (age > 14) {
  access = true;
} else {
  access = false;
}

alert(access);
</pre>
Оператор вопросительный знак '?' позволяет делать это короче и проще.
<br>
Он состоит из трех частей:
<br>
условие ? значение1 : значение2
<br>
Проверяется условие, затем если оно верно — возвращается значение1, если неверно — значение2, например:
<br>
access = (age > 14) ? true : false;
<br>
Оператор '?' выполняется позже большинства других, в частности — позже сравнений, поэтому скобки можно не ставить:
<pre>
access = age > 14 ? true : false;
</pre>
…Но когда скобки есть — код лучше читается. Так что рекомендуется их писать.
</p>
<p>
В данном случае можно было бы обойтись и без оператора '?', т.к. сравнение само по себе уже возвращает true/false:
access = age > 14;
</p>
 <h2>«Тернарный оператор»</h2>
Вопросительный знак — единственный оператор, у которого есть три аргумента, в то время как у обычных операторов их один-два. Поэтому его называют «тернарный оператор».

<h3>Несколько операторов '?'</h3>

Последовательность операторов '?' позволяет вернуть значение в зависимости не от одного условия, а от нескольких.

<pre>

var age = prompt('возраст?', 18);

var message = (age &lt; 3) ? 'Здравствуй, малыш!' :
  (age &lt; 18) ? 'Привет!' :
  (age &lt; 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );
</pre>

Вопросительный знак проверяет сначала age &lt; 3, если верно — возвращает 'Здравствуй, малыш!', если нет — идет за двоеточие и проверяет age &lt; 18. Если это верно — возвращает 'Привет!', иначе проверка age &lt; 100 и 'Здравствуйте!'… И наконец, если ничего из этого не верно, то 'Какой необычный возраст!'.
<br>
То же самое через if..else:
<pre>
if (age &lt; 3) {
  message = 'Здравствуй, малыш!';
} else if (a &lt; 18) {
  message = 'Привет!';
} else if (age &lt; 100) {
  message = 'Здравствуйте!';
} else {
  message = 'Какой необычный возраст!';
}
</pre>
<h3>Нетрадиционное использование '?'</h3>

Иногда оператор вопросительный знак '?' используют как замену if:

<pre>
var company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
   alert('Да, верно') : alert('Неправильно');
</pre>
Работает это так: в зависимости от условия, будет выполнена либо первая, либо вторая часть после '?'.
<br>
Результат выполнения не присваивается в переменную, так что пропадёт (впрочем, alert ничего не возвращает).
<br>
Рекомендуется не использовать вопросительный знак таким образом.
<br>
Несмотря на то, что с виду такая запись короче if, она является существенно менее читаемой.
<br>
Вот, для сравнения, то же самое с if:
<pre>
var company = prompt('Какая компания создала JavaScript?', '');

if (company == 'Netscape') {
  alert('Да, верно');
} else {
  alert('Неправильно');
}
</pre>


<h2>Задачи</h2>
<ol>

<li>
<p>
if (строка с нулём)

Выведется ли alert?

<pre>
if ("0") {
  alert( 'Привет' );
}
</pre>
</p>
</li>
<li>Проверка стандарта
<p>
Используя конструкцию if..else, напишите код, который будет спрашивать: «Каково «официальное» название JavaScript?».

Если посетитель вводит «EcmaScript», то выводить «Верно!», если что-то другое — выводить «Не знаете? «EcmaScript»!».
</p>
</li>
<li>Получить знак числа
<p>
Используя конструкцию if..else, напишите код, который получает значение prompt, а затем выводит alert:
<pre>
1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
</pre>
</p>
</li>
<li>Проверка логина
<p>
Напишите код, который будет спрашивать логин (prompt).

Если посетитель вводит «Админ», то спрашивать пароль, если нажал отмена (escape) — выводить «Вход отменён», если вводит что-то другое — «Я вас не знаю».

Пароль проверять так. Если введён пароль «Чёрный Властелин», то выводить «Добро пожаловать!», иначе — «Пароль неверен», при отмене — «Вход отменён».
</p>
</li>
<li>Перепишите 'if' в '?'
<p>
Перепишите if с использованием оператора '?':
<pre>
if (a + b &lt; 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
</pre>
</p>
</li>
<li>Перепишите 'if..else' в '?'
<p>
Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости — оформляйте код в несколько строк.
<pre>
var message;

if (login == 'Вася') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}
</pre>
</p>
</li>