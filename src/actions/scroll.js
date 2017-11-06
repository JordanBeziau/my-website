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

  document.querySelectorAll('.my-skills img').forEach(element => {
    new ScrollMagic.Scene({
      triggerElement: element.parentElement,
      triggerHook: 0.85
    })
      .setClassToggle(element, 'fade-in')
      .addTo(controller)
  })

  document.querySelectorAll('.social-network img').forEach(element => {
    new ScrollMagic.Scene({
      triggerElement: element.parentElement,
      triggerHook: 1
    })
      .setClassToggle(element, 'fade-in')
      .addTo(controller)
  })

  document.querySelectorAll('.references-wrap > div').forEach(element => {
    new ScrollMagic.Scene({
      triggerElement: element.parentElement,
      triggerHook: 0.88
    })
      .setClassToggle(element, 'fade-in')
      .addTo(controller)
  })

  document
    .querySelectorAll('.title-bullet, .title-wrap h3')
    .forEach(element => {
      const title = new ScrollMagic.Scene({
        triggerElement: element.parentElement,
        triggerHook: 0.9
      })
      title.setClassToggle(element, 'fade-title')
      title.addTo(controller)
    })

  if (window.innerWidth > 767) {
    setInterval(() => {
      const height = document.querySelector('.references-wrap').offsetHeight
      document.querySelector('.references-wrap').style.minHeight = `${height}px`
    }, 500)
  }
})
