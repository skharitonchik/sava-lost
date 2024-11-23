// Шаблон для описания точки
function createDescription(title, items) {
    const listItems = items
        .map(
            ({ description, date, time, result }) => `
      <li>
        <b>Описание:</b> ${description}<br>
        <b>Дата:</b> ${date}<br>
        <b>Время:</b> ${time || ''}<br>
        <b>Результат:</b> ${result}
      </li>
    `
        )
        .join("");

    return `
    <h3>${title}</h3>
    <ul>
      ${listItems}
    </ul>
  `;
}

// Конфигурация точек
const points = [
    {
        coords: CENTER_COORDS,
        text: '0',
        description: createDescription("Дом где было ограбление", [
            {
                description: "Вечер субботы в 19 скорее всего было ограбление, начали поиски кота с 22",
                date: "2024-11-16",
                time: "22.00",
                result: "видели два раза, два раза убегал.",
            }
        ]),
        iconColor: "#16501c",
    },
    {
        coords: FIRST_CAT_POINT,
        text: '1',
        description: createDescription("Дом возле поля, первый звонок", [
            {
                description: "Девушка видела возле окна своего дома около 6 утра, позвонила около 22, рядом заброшенный дом в котором кто-то живет",
                date: "2024-11-18",
                result: "Нашли только черного кота в дровнике.",
            }
        ]),
        iconColor: "#882426",
    },
    {
        coords: SECOND_CAT_POINT,
        text: '2',
        description: createDescription("Бабушка которая подкармливает котов", [
            {
                description: "Позвонила девушка которая подкармливает, сказала кушал, но на руки не пошел",
                date: "2024-11-20",
                result: "Спустя 15 минут кот не отозвался.",
            },
            {
                description: "Говорили с бабушкой, видела его 3 раза, но не звонила. Ушел в сторону дороги в последний раз",
                date: "2024-11-22",
                result: "сказала позвонит когда снова увидит.",
            },
        ]),
        iconColor: "#882426",
    },
    {
        coords: THIRD_CAT_POINT,
        text: '3',
        description: createDescription("Улица возле ветеринарки", [
            {
                description: "Видели на улице похожего кота",
                date: "2024-11-22",
                time: "11.00",
                result: "Никого не нашли спустя 10 минут.",
            },
        ]),
        iconColor: "#882426",
    },
];