// 3.04. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' 
// с элементами 'Беларусь', 'Россия', 'Украина'. 
// С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.
// 
// var obj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
// };


var place = {
        'Минск': 'Беларусь',
        'Москва': 'Мордор',
        'Киев': 'Украина'
    };

for (const city in place) {
    console.log(`${city} - это ${place[city]}.`)
}