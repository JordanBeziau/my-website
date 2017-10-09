import ScrollMagic from 'scrollmagic'

document.addEventListener('DOMContentLoaded', () => {
  const controller = new ScrollMagic.Controller()
  const careerScene =
  new ScrollMagic.Scene({
      triggerElement : '#career-selection'
    })
    .setClassToggle('#career-selection', 'show-selection-list')
    .addTo(controller)
})
