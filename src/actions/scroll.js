import ScrollMagic from 'scrollmagic'

document.addEventListener('DOMContentLoaded', () => {
  const controller = new ScrollMagic.Controller()
  new ScrollMagic.Scene({
    triggerElement: '#career-selection',
    triggerHook: 0.8
  })
    .setClassToggle('#career-selection', 'show-selection-list')
    .addTo(controller)
  new ScrollMagic.Scene({
    triggerElement: '#career-selection',
    triggerHook: 0.8
  })
    .setClassToggle('.period-wrap', 'fade-in')
    .addTo(controller)

  Array.from(document.querySelectorAll('.my-skills img')).forEach(element => {
    new ScrollMagic.Scene({
      triggerElement: element.parentElement,
      triggerHook: 0.85
    })
      .setClassToggle(element, 'fade-in')
      .addTo(controller)
  })

  Array.from(
    document.querySelectorAll('.social-network img')
  ).forEach(element => {
    new ScrollMagic.Scene({
      triggerElement: element.parentElement,
      triggerHook: 1
    })
      .setClassToggle(element, 'fade-in')
      .addTo(controller)
  })

  Array.from(
    document.querySelectorAll('.references-wrap > div')
  ).forEach(element => {
    new ScrollMagic.Scene({
      triggerElement: element,
      triggerHook: 0.88
    })
      .setClassToggle(element, 'fade-in')
      .addTo(controller)
  })
})
