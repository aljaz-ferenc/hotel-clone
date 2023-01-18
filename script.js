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
const capriImageR = document.querySelector('.charming-capri__image--right')



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

function slideUpPolygon(elements) {
    elements.forEach(element => {
        element.style.clipPath = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
        gsap.from(element, {
            y: 200,
            duration: 1,
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
            scrollTrigger: {
                trigger: element,
                start: "top 100%",
                end: "top 50%",
            }
        })
    })
}

function slideUp(elements) {
    elements.forEach(element => {
        gsap.from(element, {
            y: 300,
            duration: 1,
            scrollTrigger: {
                trigger: element,
                start: "top 95%",
                end: "top 50%",
            }
        })
    })
}

slideUpPolygon([capriText,capriTextHeader])
slideUp([capriWelcomeText, paradiseHeader, paradiseText, paradiseImage, capriImageR])








