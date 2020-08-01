const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let future = new Date(2020,8,5,13,40,0);
console.log(future);
const year = future.getFullYear();
const hours = future.getHours();
const minutes = future.getMinutes();

let month = future.getMonth();
const day = future.getDate();

const weekday = future.getDay()

giveaway.textContent = `site to go live on ${weekdays[weekday]} ${day} ${months[month]} ${year} ${hours}:${minutes}pm`

// future time in ms
const futuretime = future.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const diff = futuretime - today;

    // 1sec = 1000msec
    // 1min = 60 secs
    // 1hr = 60mins
    // 1day = 24hrs
    // 1month = 30/31 days

    // 1 day milli seconds in a day
    const oneMonth = 30*24*60*60*1000
    // console.log(oneMonth);

    const oneDay = 24*60*60*1000
    // console.log(oneDay);

    const oneHour = 60*60*1000
    const oneMinute = 60*1000
    
    let months = Math.floor(diff / oneMonth);
    // console.log(months)

    // let days = Math.floor( diff / oneDay);
    let days = Math.floor((diff % oneMonth) / oneDay)
    // console.log(days)

    let hours = Math.floor((diff % oneDay) / oneHour);
    // console.log(hours)

    let minutes = Math.floor((diff % oneHour) / oneMinute);
    // console.log(minutes);
    
    let seconds = Math.floor((diff % oneMinute) / 1000);
    // console.log(seconds);

    // set values array
    const values = [months,days, hours,minutes, seconds];

    function format(item) {
        if (item<10) {
            return item = `0${item}`
        }
        return item
    }
    items.forEach((item, index)=>{
        item.innerHTML = format(values[index]);
    });

    if(diff < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">We are now live please go the main site</h4>`;
    }
}

//countdown
let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();