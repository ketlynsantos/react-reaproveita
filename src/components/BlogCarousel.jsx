import { useEffect, useState } from "react"
import { blogPosts } from "../data/blogPosts"
import BlogCard from "./BlogCard"
import { useNavigate } from "react-router-dom"

export default function BlogCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsPerView, setCardsPerView] = useState(getCardsPerView())
    const totalGroups = Math.max(blogPosts.length - cardsPerView + 1, 1)
    const navigate = useNavigate()

    function getCardsPerView() {
        if (window.innerWidth <= 768) return 1
        if (window.innerWidth <= 1024) return 2
        return 3
    }

    useEffect(() => {
        const handleResize = () => setCardsPerView(getCardsPerView())
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const prevSlide = () => {
        setCurrentIndex((current) => (current - 1 + totalGroups) % totalGroups)
    }
    const nextSlide = () => {
        setCurrentIndex((current) => (current + 1) % totalGroups)
    }

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }
  
    const offset = (currentIndex * 100) / cardsPerView

    return (
        <section className="blog-carousel pd-20">
            <div className="container two-row">
                <h2 className="title">Blog</h2>
                <button className="carousel-btn prev" type="button" onClick={prevSlide}>
                    &#x2039;
                </button>
                <div className="carousel">
                    <div className="carousel-track" style={{ transform: `translateX(-${offset}%)` }}>
                        { blogPosts.map((post, index) => (
                            <BlogCard 
                                key={index}
                                img={post.img}
                                title={post.title}
                                description={post.description}
                                author={post.author}
                                date={post.date}
                                readTime={post.readTime}
                                category={post.category}
                            />
                        ))}
                    </div>

                </div>
                <button className="carousel-btn next" type="button" onClick={nextSlide}>
                    &#x203A;
                </button>
                <div id="blog-dots" className="dots orange">
                    { Array.from({ length: totalGroups }).map((_, index) => (
                        <div 
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
                <button className="btn green big" type="button" onClick={() => navigate('/blog')}>
                    Ver novidades
                </button>
            </div>
        </section>
    )
}