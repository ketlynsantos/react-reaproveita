import { useEffect, useRef, useState } from "react"

const slides = [
    { number: 1000, label: 'Produtos salvos'},
    { number: 100, label: 'Supermercados no app'},
    { number: 2300, label: 'Famílias economizando no app'}
]

export default function Numbers({ isBackgroundOrange = true }) {
    const [current, setCurrent] = useState(0)
    const numberRef = useRef(null)
    
    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1)
    }

    useEffect(() => {
        const element = numberRef.current
        const target = slides[current].number
        let value = 0

        const duration = 1200
        const step = target / (duration / 16) // 16ms

        const animate = () => {
            value += step
            if (value < target) {
                element.innerText = "+" + Math.floor(value).toLocaleString()
                requestAnimationFrame(animate)
            } else {
                element.innerText = "+" + target.toLocaleString()
            }
        }

        animate()
    }, [current])

    return (
        <section className={`numbers-carousel pd-20 ${isBackgroundOrange ? 'bg-orange' : ''}`}>
            <div className="container two-row">
                <h2 className="title">Nossos Números</h2>
                <button className="carousel-btn prev" type="button" onClick={prevSlide}>
                    &#x2039;
                </button>
                <div className="carousel">
                    <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)`}}>
                        { slides.map((slide, index) => (
                            <div
                                key={index}
                                className={`carousel-slide ${index === current ? 'active' : ''}`}
                            >
                                <div className="carousel-info">
                                    { index === current ? (
                                        <h1 className="value" ref={numberRef}>+0</h1>
                                    ) : (
                                        <h1 className="value">{slide.number.toLocaleString()}</h1>
                                    )}
                                    <p className="label">{slide.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="carousel-btn next" type="button" onClick={nextSlide}>
                    &#x203A;
                </button>
                <div className="dots orange">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === current ? 'active' : ''}`}
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}