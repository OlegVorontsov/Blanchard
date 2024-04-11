const gallerySlider = new Splide('#gallerySlider', {
  perPage: 3,
  gap: '50px',
  pagination: false,
  breakpoints: {
    1020: {
      gap: '34px'
    },

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

    1020: {
      perPage: 2,
      pagination: true,
      arrows: false
    },

    768: {
      perPage: 1
    }
  }
})

gallerySlider.mount()
eventsSlider.mount()



