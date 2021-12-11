let checkHeartAuthor = document.querySelector('.author-header-item .fa-heart');
let checkHeart = document.querySelectorAll('.check-heart');
let check = 0;

let moreInfoBtn = document.querySelector('.author-header-item .btn-moreInfo');
let moreInfoItem = document.querySelector('.author-header-item');
let hiddenInfo = document.querySelector('.author-header-item .hidden-info');
let showReviews = document.querySelector('.show_reviews');
let reviewsHeight = document.querySelector('.reviews__height');

checkHeartAuthor.addEventListener('click', () => {
    checkHeartAuthor.classList.toggle('fas')
})

checkHeart.forEach(heart => {
    heart.addEventListener('click', () => {
        if(check == 0) {
            heart.src = 'assets/images/png/redHeart.png'
            return check = 1
        } else {
            heart.src = 'assets/images/png/blueHeart.png'
            return check = 0
        }
    })
});


let infoText = 0;
moreInfoBtn.addEventListener('click', () => {
    hiddenInfo.classList.toggle('openHiddenInfo');
    moreInfoItem.classList.toggle('openHidden');
    moreInfoBtn.classList.toggle('openedBtn');

    if(infoText == 0) {
        moreInfoBtn.textContent = 'Скрыть'
        return infoText = 1
    } else {
        moreInfoBtn.textContent = 'Подробнее'
        return infoText = 0
    }
});

let revNum = 0;
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