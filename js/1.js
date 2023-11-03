
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

function task3()
{
    let a = new Date(prompt("Введите дату в формате: год-месяц-число"));
    function getWeekDayNext(a) {
        a.setDate(a.getDate()+1);
        console.log(a)
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[a.getDay()];
        }
    function getWeekDayCurr(a) {
        a.setDate(a.getDate()-1);
        console.log(a)
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[a.getDay()];
        }  
    function getWeekDayPrev(a) {
        a.setDate(a.getDate()-1);
        console.log(a)
        let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        return days[a.getDay()];
        }    
    let week = [
        {
          next: `${getWeekDayNext(a)}`,
          curr:  `${getWeekDayCurr(a)}`,
          prev: `${getWeekDayPrev(a)}`,
        }];
    console.log (week);
    alert ("Ответ указала в console.log");
}