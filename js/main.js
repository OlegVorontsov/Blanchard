const gallerySlider = new Splide('#gallerySlider', {
  perPage: 3,
  gap: '50px',
  pagination: false,
  breakpoints: {
    500: {
      perPage: 1,
      arrows: false,
      pagination: true
    }
  }
})

const eventsSlider = new Splide('#eventsSlider', {
  perPage: 3,
  gap: '50px',
  pagination: false,
  breakpoints: {
    1260: {
      gap: '27px'
    },

    768: {
      perPage: 1,
      arrows: false,
      pagination: true
    }
  }
})

gallerySlider.mount()
eventsSlider.mount()



