
$('.course-structure-item-title').click(function() {
    $(this.parentElement).siblings().removeClass('showStructure');
    $(this.parentElement).toggleClass('showStructure');
  });

  $('.hide-item-list').click(function() {
    $(this).siblings().removeClass('showItemList');
    $(this).toggleClass('showItemList');
  });

  $('.additionally-item').click(function() {
    $(this).siblings().removeClass('openAdditionally');
    $(this).toggleClass('openAdditionally');
  });

  
let showReviews = document.querySelector('.show_reviews');
let reviewsHeight = document.querySelector('.reviews__height');

let infoText = 0;
showReviews.addEventListener('click', () => {
    reviewsHeight.classList.add('addScrollReviews');

    if(infoText == 0) {
        reviewsHeight.classList.add('addScrollReviews');
        showReviews.textContent = 'Закрыть отзывы'
        return infoText = 1
    } else {
        reviewsHeight.classList.remove('addScrollReviews');
        showReviews.textContent = 'Показать все отзывы'
        return infoText = 0
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const newYear = new Date('Dec 31 2021 00:00:00');

  const daysVal = document.querySelector('.time .days');
  const hoursVal = document.querySelector('.time .hours');
  const minutesVal = document.querySelector('.time .minuts');

  const daysText = document.querySelector('.day-text');
  const hoursText = document.querySelector('.hour-text');
  const minutesText = document.querySelector('.minuts-text');

  function declOfNum(number, titles) {  
      let cases = [2, 0, 1, 1, 1, 2];  
      return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
  }

  const timeCount = () => {
      let now = new Date();
      let leftUntil = newYear - now

      let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
      let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
      let minutes = Math.floor(leftUntil / 1000 / 60) % 60;

      daysVal.textContent = days;
      hoursVal.textContent = hours;
      minutesVal.textContent = minutes;
      
      
      daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
      hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
      minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
  }

  timeCount();

  setInterval(timeCount, 1000)
})
