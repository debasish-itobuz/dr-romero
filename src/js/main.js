const ul = document.getElementById("myLinks");
const bar = document.querySelector('.bars')
const cross = document.querySelector('.cross')
const leftArrow = document.querySelector('.left-arrow')
const leftArrowHover = document.querySelector('.left-arrow-hover')
const rightArrow = document.querySelector('.right-arrow')
const rightArrowHover = document.querySelector('.right-arrow-hover')

cross.style.display = 'none';
leftArrowHover.style.display = 'none';
rightArrowHover.style.display = 'none';

function display() {
  if (ul.style.display === "flex") {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
  }
}

bar.addEventListener('click', () => {
  bar.style.display = 'none'
  cross.style.display = 'block'
  display();

})

cross.addEventListener('click', () => {
  cross.style.display = 'none';
  bar.style.display = 'block';
  display();
})

leftArrow.addEventListener('mouseover', () => {
  leftArrow.style.display = 'none'
  leftArrowHover.style.display = 'block'
})

leftArrowHover.addEventListener('mouseout', () => {
  leftArrow.style.display = 'block'
  leftArrowHover.style.display = 'none'
})


rightArrow.addEventListener('mouseover', () => {
  rightArrow.style.display = 'none'
  rightArrowHover.style.display = 'block'
})

rightArrowHover.addEventListener('mouseout', () => {
  rightArrow.style.display = 'block'
  rightArrowHover.style.display = 'none'
})
