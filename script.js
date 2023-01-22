gsap.registerPlugin(ScrollTrigger)

const rellax = new Rellax('.rellax')
const circle = document.querySelector('.circle')
const heroArrow = document.querySelector('.hero__arrow')
const capriTextHeader = document.querySelector('.charming-capri__text h1')
const capriText = document.querySelector('.charming-capri__text p')
const capriWelcomeText = document.querySelector('.paradise__welcome-text')
const paradiseHeader = document.querySelector('.paradise h1')
const paradiseText = document.querySelector('.paradise__text')
const paradiseImage = document.querySelector('.paradise img')
const more = document.querySelectorAll('.more')
const moreGrid = document.querySelectorAll('.more-grid')
const villaHeading = document.querySelector('.caprese-villa h1')
const roomsHeading = document.querySelector('.rooms-heading')
const roomsCarouselBtnLeft = document.querySelector('.carousel-left')
const roomsCarouselBtnRight = document.querySelector('.carousel-right')
const carouselCard = document.querySelector('.rooms__card')
const roomsCarousel = document.querySelector('.carousel-images')
const carouselHeading = document.querySelector('.carousel__heading')
const carouselPara = document.querySelector('.carousel__para')
const roomsImages = document.querySelectorAll('.rooms__card')
const sectionHeadings = document.querySelectorAll('.section-heading')
const rightImages = document.querySelectorAll('.image__right')
const promotionImagesElement = document.querySelector('.promotions-carousel__images')
const promotionCarouselBtnLeft = document.querySelector('.promotions-left')
const promotionCarouselBtnRight = document.querySelector('.promotions-right')
const promotionImages = document.querySelectorAll('.promo-image__container')
const luxCarouselBtnRight = document.querySelector('.lux-carousel-right')
const luxCarouselBtnLeft = document.querySelector('.lux-carousel-left')
const luxImagesElement = document.querySelector('.lux-carousel-images')
const luxImages = document.querySelectorAll('.lux__card')
const footerLinks = document.querySelectorAll('.link')
const main = document.querySelector('main')
const header = document.querySelector('header')
const changeNavEls1 = document.querySelectorAll('.nav__right li:not(:last-child)')
const changeNavEls2 = document.querySelectorAll('.nav__left li:not(:first-child)')


//header
gsap.to(header,{
    backgroundColor: '#fff',
    scrollTrigger: {
        trigger: '.paradise',
        start: 'top 20%',
        toggleActions: "restart none none reverse"
    }
})

gsap.from('header a',{
    color: 'white',
    scrollTrigger: {
        trigger: '.paradise',
        start: 'top 20%',
        toggleActions: "restart none none reverse"
    }
})

const changedEls = [...changeNavEls1, ...changeNavEls2]
changedEls.forEach(el => {
    gsap.from(el,{
        autoAlpha: '0',
        scrollTrigger: {
            trigger: '.paradise',
            start: 'top 20%',
            toggleActions: "restart none none reverse"
        }
    })
})

gsap.from('nav img',{
    autoAlpha: '0',
    scrollTrigger: {
        trigger: '.paradise',
        start: 'top 20%',
        toggleActions: "restart none none reverse"
    }
})

//hero down arrow animation
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        circle.classList.add('active')
        heroArrow.style.opacity = 0

    } else {
        setTimeout(() => {
            heroArrow.style.opacity = 1
        }, 200);
        circle.classList.remove('active')
    }
})


//come into view on scroll
function slideUpPolygon(elements) {
    elements.forEach(element => {
        element.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        gsap.from(element, {
            y: 200,
            duration: .8,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            scrollTrigger: {
                trigger: element,
                start: "top 90%",
                end: "top 50%",
            }
        })
    })
}

function slideUp(elements) {
    elements.forEach(element => {
        gsap.from(element, {
            y: 300,
            duration: .8,
            scrollTrigger: {
                trigger: element,
                start: "top 95%",
                end: "top 50%",
            }
        })
    })
}

function appear(elements) {
    elements.forEach(element => {
        gsap.from(element, {
            scale: 0,
            duration: .5,
            scrollTrigger: {
                trigger: element,
                start: "top 95%",
                end: "top 50%",
            }
        })
    })
}

function appearOpacity(elements) {
    elements.forEach(element => {
        gsap.from(element, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 95%",
                end: "top 50%",
            }
        })
    })
}

slideUpPolygon([capriText, capriTextHeader, villaHeading, carouselHeading, ...sectionHeadings])
slideUp([capriWelcomeText, paradiseHeader, paradiseText, paradiseImage, ...rightImages])
appear([...more, ...moreGrid])
appearOpacity([carouselPara])

const appearImages = [promotionImages, ...roomsImages]

appearImages.forEach((img, i) => {
    gsap.from(img, {
        x: 50,
        delay: i * 0.3,
        scale: .9,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: img,
            start: 'top 95%'
        }
    })
})

footerLinks.forEach((link, i) => {
    gsap.from(link, {
        y:20,
        delay: i * 0.1,
        opacity:0,
        duration: 1,
        scrollTrigger: {
            trigger: link,
            start: 'top 95%'
        }
    })
})


//carousel - rooms section
let carouselState = 1

roomsCarouselBtnLeft.addEventListener('click', () => {
    if (carouselState === 1) return
    const [cardWidth, gapWidth] = calcTransformDistance()
    carouselState--
    displayButtons()
    roomsCarousel.style.transform = `translateX(-${(cardWidth + (gapWidth)) * (carouselState - 1)}px)`
    displayCarouselHeading()
    displayCarouselPara()
    brightenImage()
})

roomsCarouselBtnRight.addEventListener('click', () => {
    if (carouselState === 8) return
    const [cardWidth, gapWidth] = calcTransformDistance()
    carouselState++
    displayButtons()
    roomsCarousel.style.transform = `translateX(-${(cardWidth + (gapWidth)) * (carouselState - 1)}px)`
    displayCarouselHeading()
    displayCarouselPara()
    brightenImage()
})

function calcTransformDistance() {
    const carouselWidth = roomsCarousel.scrollWidth
    const cardWidth = carouselCard.scrollWidth
    const gapWidth = (carouselWidth - cardWidth * 8) / 7
    return [cardWidth, gapWidth]
}

function displayButtons() {
    if (carouselState === 1) {
        roomsCarouselBtnLeft.style.opacity = '0'
    } else {
        roomsCarouselBtnLeft.style.opacity = '1'
    }
    if (carouselState === 8) {
        roomsCarouselBtnRight.style.opacity = '0'
    } else {
        roomsCarouselBtnRight.style.opacity = '1'
    }
}

function brightenImage() {
    roomsImages.forEach(img => {
        img.style.filter = 'brightness(0.5)'
    })
    roomsImages[carouselState - 1].style.filter = 'brightness(1)'
}
brightenImage()


function displayCarouselHeading() {
    carouselHeading.style.transform = 'translateY(100%)'
    carouselHeading.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)'
    setTimeout(() => {
        carouselHeading.textContent = carouselText[carouselState - 1].heading
        carouselPara.textContent = carouselText[carouselState - 1].para
        carouselHeading.style.transform = 'translateY(0)'
        carouselHeading.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    }, 500);
}

function displayCarouselPara() {
    carouselPara.style.transform = 'translateY(20px)'
    carouselPara.style.opacity = '0'

    setTimeout(() => {
        carouselPara.style.transform = 'translateY(0)'
        carouselPara.style.opacity = '1'
    }, 600);
}

const carouselText = [
    {
        heading: 'POOL SUITE SEA VIEW WITH TERRACE',
        para: 'The private terrace features a heated plunge pool overlooking the Mediterranean Sea.'
    },
    {
        heading: 'GARDEN SUITE SEA SIDE',
        para: 'Beautiful small terraces reveal a view of the Bay of Naples and the Sorrento-Amalfi Coast.'
    },
    {
        heading: 'ONE BEDROOM SUITE SEA VIEW',
        para: 'Ample terraces disclose a wide view over the Bay of Naples.'
    },
    {
        heading: 'SUITE SEA VIEW WITH TERRACE',
        para: 'Suites expressing the idea of a discreet, yet enchanting beauty.'
    },
    {
        heading: 'GARDEN PRESTIGE SEA SIDE',
        para: 'These spacious rooms are decorated with the color of the sand and the rocks, typical of our magic coast.'
    },
    {
        heading: 'PRESTIGE ROOM WITH TERRACE',
        para: 'The large terraces disclose a beautiful view of the luxuriant Mediterranean garden.'
    },
    {
        heading: 'PRESTIGE SEA VIEW ROOM WITH BALCONY',
        para: 'Breathtaking View over the Bay of Naples and the Sorrento-Amalfi Coast.'
    },
    {
        heading: 'PRESTIGE ROOM',
        para: 'Rooms feature the unique traits of Caprese Architecture and Design.'
    },
]


//carousel - relax section
let promoState = 1

promotionCarouselBtnRight.addEventListener('click', () => {
    if (promoState === 2) return
    promoState++
    const [cardWidth, gapWidth] = calcTransformPromoDistance()
    promotionImagesElement.style.transform = `translateX(-${(cardWidth + gapWidth) * (promoState - 1)}px)`
    displayPromoButtons()
    brightenPromoImage()
})

promotionCarouselBtnLeft.addEventListener('click', () => {
    if (promoState === 1) return
    promotionImagesElement.style.transform = `translateX(0)`
    promoState--
    displayPromoButtons()
    brightenPromoImage()
})

displayPromoButtons()

function displayPromoButtons() {
    if (promoState === 1) {
        promotionCarouselBtnLeft.style.opacity = '0'
    } else {
        promotionCarouselBtnLeft.style.opacity = '1'
    }
    if (promoState === 2) {
        promotionCarouselBtnRight.style.opacity = '0'
    } else {
        promotionCarouselBtnRight.style.opacity = '1'
    }
}

function brightenPromoImage() {
    promotionImages.forEach(img => {
        img.style.filter = 'brightness(0.5)'
    })
    promotionImages[promoState - 1].style.filter = 'brightness(1)'
}
brightenPromoImage()

function calcTransformPromoDistance() {
    const carouselWidth = promotionImagesElement.scrollWidth
    const cardWidth = promotionImages[0].scrollWidth
    const gapWidth = (carouselWidth - cardWidth * promotionImages.length) / (promotionImages.length - 1)
    return [cardWidth, gapWidth]
}


//carousel lux section
let luxState = 1

luxCarouselBtnRight.addEventListener('click', () => {
    if (luxState === 4) return
    luxState++
    const [cardWidth, gapWidth] = calcTransformLuxDistance()
    luxImagesElement.style.transform = `translateX(-${(cardWidth + gapWidth) * (luxState - 1)}px)`
    displayLuxButtons()
})

luxCarouselBtnLeft.addEventListener('click', () => {
    if (luxState === 1) return
    luxState--
    const [cardWidth, gapWidth] = calcTransformLuxDistance()
    luxImagesElement.style.transform = `translateX(-${(cardWidth + gapWidth) * (luxState - 1)}px)`
    displayLuxButtons()
})

displayLuxButtons()

function calcTransformLuxDistance() {
    const carouselWidth = luxImagesElement.scrollWidth
    const cardWidth = luxImages[0].scrollWidth
    const gapWidth = (carouselWidth - cardWidth * luxImages.length) / (luxImages.length - 1)
    return [cardWidth, gapWidth]
}

function displayLuxButtons(){
    if (luxState === 1) {
        luxCarouselBtnLeft.style.opacity = '0'
    } else {
        luxCarouselBtnLeft.style.opacity = '1'
    }
    if (luxState === 4) {
        luxCarouselBtnRight.style.opacity = '0'
    } else {
        luxCarouselBtnRight.style.opacity = '1'
    }
}

luxImages.forEach((img, i) => {
    gsap.from(img, {
        x: 50,
        delay: i * 0.2,
        scale: .9,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: img,
            start: 'top 95%'
        }
    })
})

