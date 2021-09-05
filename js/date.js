const dateOver = document.querySelector("#dateday")

const dateinformation = {
    week:["일요일","월요일","화요일","수요일","목요일","금요일","토요일"],
    month:["1","2","3","4","5","6","7","8","9","10","11","12"]
}
function TodayDates() {
    const today = new Date();

    const year = today.getFullYear();
    const month = dateinformation.month[today.getMonth()];
    const week = dateinformation.week[today.getDay()];
    const day = today.getDate();
    dateOver.innerText = `${year}년 ${month}월 ${day}일 ${week}`   
}

TodayDates();