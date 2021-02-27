const nextButton = document.querySelector('.next')
const prevButton = document.querySelector('.prev')
const endButton = document.querySelector('.end')
const stepper = document.querySelector('.stepper__body')
const progressBar = document.querySelector('.progress__bar')
const steps = document.querySelectorAll('[data-step]')

stepper.addEventListener('click', clickOnStepper)

function clickOnStepper(e) {
  if (e.target.dataset.next) {
    nextStep()
  }
  if (e.target.dataset.prev) {
    prevStep()
  }
}

function nextStep() {
  const activeStep = stepper.querySelector('[data-step].active')
  if (
    !activeStep.nextElementSibling ||
    !activeStep.nextElementSibling.dataset.step
  ) return

  const nextElement = activeStep.nextElementSibling
  nextElement.classList.add('active')
  if (!prevButton.classList.contains('active')) {
    prevButton.classList.add('active')
  }
  activeStep.classList.remove('active')
  if(!nextElement.previousElementSibling || !nextElement.nextElementSibling.dataset.step){
    endButton.classList.add('active')
    nextButton.classList.remove('active')
  }
  progress('next')
}

function prevStep() {
  const activeStep = stepper.querySelector('[data-step].active')
  const prevStep = activeStep.previousElementSibling
  if (!prevStep || !prevStep.dataset.step) {
    prevButton.classList.remove('active')
    return
  }
  prevStep.classList.add('active')
  activeStep.classList.remove('active')
  if (
    !prevStep.previousElementSibling ||
    !prevStep.previousElementSibling.dataset.step
  ) {
    prevButton.classList.remove('active')
  }
  if (!nextButton.classList.contains('active')) {
    nextButton.classList.add('active')
    endButton.classList.remove('active')
  }
  progress('prev')
}

function progress(operation) {
  const allStepsLength = steps.length
  const numberOneStep = Math.ceil(100 / allStepsLength)
  if (operation === 'prev') {
    const actualWidth = parseInt(progressBar.style.width)
    const width = actualWidth - numberOneStep
    progressBar.style.width = width + '%'
    return
  }
  let prevStepsNumber = 0
  for (let i = 0; i < allStepsLength; i++) {
    if (steps[i].classList.contains('active')) {
      break
    } else {
      prevStepsNumber++
    }
  }
  let width
  if (operation === 'next') {
    width = prevStepsNumber * numberOneStep
    progressBar.style.width = width + '%'
  }
}
