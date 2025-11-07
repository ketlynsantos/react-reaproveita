import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import { useNavigate } from "react-router-dom"

const API_URL = import.meta.env.VITE_API_URL

export default function BlogCarousel() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [cardsPerView, setCardsPerView] = useState(getCardsPerView())
    const navigate = useNavigate()

    function getCardsPerView() {
        if (window.innerWidth <= 768) return 1
        if (window.innerWidth <= 1024) return 2
        return 3
    }

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(`${API_URL}/blog`)
                if (!response.ok) throw new Error('Erro ao buscar posts.')
                const data = await response.json()
                setPosts(data)
            } catch (err) {
                console.error('Erro ao carregar posts:', err)
                setError('O servidor pode estar iniciando. Aguarde alguns segundos e recarregue a página.')
            } finally {
                setLoading(false)
            }
        }

        fetchPosts()

        const handleResize = () => setCardsPerView(getCardsPerView())
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const totalGroups = Math.max(posts.length - cardsPerView + 1, 1)

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
                        {loading ? (
                            Array.from({ length: cardsPerView }).map((_, i) => (
                                <div key={i} className="blog-card placeholder"></div>
                            ))
                        ) : (
                            posts.map((post, index) => (
                                <BlogCard
                                    key={index}
                                    img={post.img}
                                    title={post.title}
                                    description={post.description}
                                    author={post.author}
                                    date={new Date(post.post_date).toLocaleDateString("pt-BR")}
                                    readTime={post.read_time}
                                    category={post.category}
                                    showButton={false}
                                />
                            ))
                        )}
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