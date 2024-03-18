gsap.set('.p-5.card-container', { yPercent: -50 })

const uncover = gsap.timeline({ paused: true })

uncover
  .to('.p-5.card-container', { yPercent: 0, ease: 'none' })
  ;

ScrollTrigger.create({
  trigger: 'section.conclusion',
  start: 'top top',
  end: '+=75%',
  animation: uncover,
  scrub: true,
})