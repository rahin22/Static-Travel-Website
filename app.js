const mainDiv = document.querySelector('.main');
const subtitleDiv = document.querySelector('.subtitle');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const opacity = 1 - scrollPosition / 500; 
  mainDiv.style.opacity = opacity < 0 ? 0 : opacity; 
  subtitleDiv.style.opacity = opacity < 0 ? 0 : opacity; 
});




const main2Div = document.querySelector('.main2');
const subtitle2Div = document.querySelector('.subtitle2');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const opacity = 1 - scrollPosition / 500; 
  main2Div.style.opacity = opacity < 0 ? 0 : opacity; 
  subtitle2Div.style.opacity = opacity < 0 ? 0 : opacity; 
});




const cards = document.querySelectorAll('.card')
window.addEventListener('scroll', checkBoxes)
  checkboxes()

  function checkBoxes(){
    const triggerBottom = window.innerHeight / 5 * 4
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top
        if(cardTop < triggerBottom){
            card.classList.add('show')
        } else{
            card.classList.remove('show')
        }
    })
  }



 function redirectToURL(url) {
              window.location.href = url;
            }



 