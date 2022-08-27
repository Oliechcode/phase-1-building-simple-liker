// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal')
modal.className = 'hidden'

const hearts = document.querySelectorAll('.like-glyph')
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()

    .then(() => {
      if (heart.innerHTML === EMPTY_HEART) {
        heart.innerHTML = FULL_HEART
        heart.className = 'activated-heart'
      } else {
        heart.innerHTML = EMPTY_HEART
        heart.className = ''
      }
    })
.catch(error => {
      modal.className = ''
      modal.innerText = error
      setTimeout(() => {
        modal.className = 'hidden'
      }, 2000)
    })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
