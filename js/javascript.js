const dedline = '2022-05-13'  
function getTimeRemaining(endTime){  
  const t = Date.parse(endTime) - Date.parse(new Date());  
  const days = Math.floor(t/1000/60/60/24);  
   
  const hours = Math.floor((t/(1000*60*60))%24);  
  const minutes = Math.floor((t/(1000*60))%60);  
  const seconds = Math.floor((t/1000)%60)  
  
  
  
  return{  
    total:t,  
    days:days,  
    hours: hours,  
    minutes:minutes,  
    seconds:seconds  
  }  
}  
  
function setClock(selector,endTime){  
  const timer = document.querySelector(selector);  
  const days = timer.querySelector('#days');  
  const hours = timer.querySelector('#hours');  
  const minutes = timer .querySelector('#minutes');  
  const seconds = timer.querySelector('#seconds');  
  updateCLock()  
  
  function addZero(num){  
    if(num>=0 && num< 10){  
      return`0${num}`  
    }  
    else {  
      return num  
    }  
  }  
  const setinterval = setInterval(updateCLock,1000);  
  function updateCLock(){  
    const t = getTimeRemaining(endTime);  
    days.innerHTML = addZero(t.days);  
    hours.innerHTML =addZero(t.hours);  
    minutes.innerHTML = addZero(t.minutes);  
    seconds.innerHTML = addZero(t.seconds);  
  
    if(t.total<=0){  
      clearInterval(setinterval);  
        
    }  
  }  
}  
setClock('.timer', dedline)

const closeArrow = document.querySelector('span')
const modalWindow = document.querySelector('.modal')

closeArrow.addEventListener('click',()=>{
  modalWindow.classList.add('none')
})


const signUp = document.querySelector('.sign-up')

signUp.addEventListener('click',()=>{
  modalWindow.classList.remove('none')
})

const registration = document.querySelector('.group5')

registration.addEventListener('click',()=>{
  modalWindow.classList.add('none')
})
