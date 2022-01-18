const nameInput= document.querySelector("#name");

function showDate(){
    let date= new Date();
    let hour= date.getHours();
    let minute= date.getMinutes();
    let second = date.getSeconds();
    let day = date.getDay();

    switch(day){
        case 0:
            day="Monday";
            break;
        case 1:
            day="Tuesday";
            break;
        case 2:
            day="Wednesday";
            break;
        case 3:
            day="Thursday";
            break;
        case 4:
            day="Friday";
            break;
        case 5:
            day="Saturday";
            break;
        case 6:
            day="Sunday";
            break;

    }

    function checkTime(item){
        if(item<10){
            item= "0" + item;
        }
        return item;
    }
    hour = checkTime(hour);
    minute= checkTime(minute);
    second = checkTime(second);

    document.querySelector(".alert").innerHTML = `Date is now ${hour}:${minute}:${second}, today is ${day}`;

    let t= setTimeout(showDate, 1000);
}

showDate();

let name= window.prompt("Please, enter your name.");
name=name.toUpperCase();
if (name.length<0){
    nameInput.innerHTML= "Please, enter your name";
}else{
    nameInput.innerHTML=`This is first JS project for Kodluyoruz. Your name is ${name}`;
}
