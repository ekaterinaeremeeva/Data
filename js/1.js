
function task1()
{
function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
    }
let date = new Date (prompt("Введите дату в формате: год-месяц-число"));
alert( getWeekDay(date) );
}

function task2()
{
    today = new Date()
    nextDate = new Date("January 1, 2024")
    msPerDay = 24*60*60*1000;
    daysLeft = Math.round((nextDate.getTime() - today.getTime())/msPerDay);
    alert(`До Нового года осталось ${daysLeft} дней`);
}
