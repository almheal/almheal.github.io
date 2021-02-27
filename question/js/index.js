

class Stepper {
  constructor({
    stepsSelector,
    selectorProgress,
    prevButton,
    nextButton,
    numberSelector,
  }) {
    this.steps = [...document.querySelectorAll(stepsSelector)]
    this.progress = document.querySelector(selectorProgress)
    this.prevButton = document.querySelector(prevButton)
    this.nextButton = document.querySelector(nextButton)
    this.number = document.querySelector(numberSelector)
    this.lengthSteps = this.steps.length
    this.oneNumberStep = parseInt(100 / this.steps.length)
  }

  searchActiveStep() {
    const [activeStep] = this.steps.filter((item) =>
      item.classList.contains('active')
    )
    return activeStep
  }

  addClass(el, className) {
    el.classList.add(className)
  }

  prevStep() {
    const activeStep = this.searchActiveStep()
    activeStep.classList.remove('active')
    this.addClass(activeStep.previousElementSibling, 'active')
    if (Number(activeStep.dataset.step) === 2) {
      this.prevButton.classList.remove('active')
    }
    this.calculateProgress('prev')
  }

  nextStep() {
    if (!this.prevButton.classList.contains('active')) {
      this.addClass(this.prevButton, 'active')
    }

    const activeStep = this.searchActiveStep()
    const stepNumber = Number(activeStep.dataset.step)

    if (stepNumber === this.steps.length) return
      activeStep.classList.remove('active')
      this.addClass(activeStep.nextElementSibling, 'active')
      this.calculateProgress('next')
  }

  calculateProgress(operation) {
    if (operation === 'prev') {
      const updateProgress =
        parseInt(this.progress.style.width) - this.oneNumberStep
      this.progress.style.width = updateProgress + '%'
      this.number.textContent = updateProgress + '%'
      return
    }
    const activeStep = this.searchActiveStep()

    let prevSteps = 0
    for (let i = 0; i < Number(activeStep.dataset.step); i++) {
      prevSteps++
    }
    const width = parseInt(prevSteps * this.oneNumberStep) + '%'
    this.number.textContent = width
    this.progress.style.width = width
  }

  initListeners() {
    this.prevButton.addEventListener('click', this.prevStep.bind(this))
    this.nextButton.addEventListener('click', this.nextStep.bind(this))
  }

  init() {
    this.initListeners()
    this.progress.style.width = this.oneNumberStep + '%'
    this.number.textContent = this.oneNumberStep + '%'
  }
}
;

const stepper = new Stepper({
  stepsSelector: '[data-step]',
  selectorProgress: '[data-progress]',
  prevButton: '[data-prev]',
  nextButton: '[data-next]',
  numberSelector: '[data-number]',
})

stepper.init()
