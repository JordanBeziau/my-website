import ScrollMagic from 'scrollmagic'

document.addEventListener('DOMContentLoaded', () => {
  const controller = new ScrollMagic.Controller()
  new ScrollMagic.Scene({
    triggerElement : '#career-selection',
    triggerHook : .8
  })
    .setClassToggle('#career-selection', 'show-selection-list')
    .addTo(controller)
  new ScrollMagic.Scene({
    triggerElement : '#career-selection',
    triggerHook : .8
  })
    .setClassToggle('.period-wrap', 'fade-in')
    .addTo(controller)

  Array.from(document.querySelectorAll('.my-skills img'))
    .concat(Array.from(document.querySelectorAll('.gif-wrap')))
    .forEach(element => {
      new ScrollMagic.Scene({
        triggerElement : element.parentElement,
        triggerHook : .85
      })
        .setClassToggle(element, 'fade-in')
        .addTo(controller)
    })

  Array.from(document.querySelectorAll('.social-network img'))
    .forEach(element => {
      new ScrollMagic.Scene({
        triggerElement : element.parentElement,
        triggerHook : 1
      })
        .setClassToggle(element, 'fade-in')
        .addTo(controller)
    })

  Array.from(document.querySelectorAll('.gif-link'))
    .forEach(element => {
      new ScrollMagic.Scene({
        triggerElement : element.parentElement,
        triggerHook : .8
      })
        .setClassToggle(element, 'draw')
        .addTo(controller)
    })
})
