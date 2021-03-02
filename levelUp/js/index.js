$('[data-reviews]').slick({
  nextArrow: $('[data-reviews-next]'),
  prevArrow: $('[data-reviews-prev]'),
  autoplay: true,
})
;
const orderButtons = document.querySelectorAll('[data-btn-scroll="form"]')
const menu = document.querySelector('[data-menu]')

orderButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault()
    scrollToBlock('[data-order]')
  })
})

menu.addEventListener('click', (e) => {
  if (e.target.dataset.scroll) {
    e.preventDefault()
    scrollToBlock(`[data-section="${e.target.dataset.scroll}"]`)
  }
})

function scrollToBlock(selector) {
  const form = document.querySelector(selector)
  form.scrollIntoView({
    alignToTop: true,
    behavior: 'smooth',
  })
}
;
function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date())
  const seconds = Math.floor((t / 1000) % 60)
  const minutes = Math.floor((t / 1000 / 60) % 60)
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  const days = Math.floor(t / (1000 * 60 * 60 * 24))
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}

function initializeClock(selector, endtime) {
  const clock = document.querySelector(selector)
  const days = clock.querySelector('[data-days]')
  const hours = clock.querySelector('[data-hours]')
  const minutes = clock.querySelector('[data-minutes]')
  const seconds = clock.querySelector('[data-seconds]')

  function updateClock() {
    const t = getTimeRemaining(endtime)

    days.innerHTML = t.days
    hours.innerHTML = ('0' + t.hours).slice(-2)
    minutes.innerHTML = ('0' + t.minutes).slice(-2)
    seconds.innerHTML = ('0' + t.seconds).slice(-2)

    if (t.total <= 0) {
      clearInterval(timeinterval)
    }
  }

  updateClock()
  const timeinterval = setInterval(updateClock, 1000)
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000)

initializeClock('[data-time]', deadline)
;
const animItems = document.querySelectorAll('[data-anim-item]')

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll)

  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i]
      const animItemHeight = animItem.offsetHeight
      const animItemOffset = offset(animItem).top + 400
      const animStart = 4

      let animItemPoint = window.innerHeight - animItemHeight / animStart

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight &&
        !animItem.classList.contains('active')
      ) {
        animItem.classList.add('active')
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  animOnScroll()
}
;
const button = document.querySelector('[data-button-menu]')

button.addEventListener('click', toggleMenu)

function toggleMenu() {
  const menu = document.querySelector('[data-menu]')
  menu.classList.toggle('active')
  const closeButton = document.querySelector('[data-close-menu]')
  closeButton.addEventListener('click', toggleMenu)
}
;

// input type number, prevent letter E

const numberInput = document.querySelector('[data-number]')

numberInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 69) {
    e.preventDefault()
  }
})
