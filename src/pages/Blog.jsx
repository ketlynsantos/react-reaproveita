import { useEffect, useState } from "react"
import BlogCard from "../components/BlogCard"
import BlogModal from "../components/BlogModal"
import "../styles/blog.css"

const API_URL = import.meta.env.VITE_API_URL

export default function Blog() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const [selectedCategory, setSelectedCategory] = useState('Todos')
    const [search, setSearch] = useState('')
    const [selectedPost, setSelectedPost] = useState(null)

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
    }, [])

    const categories = ['Todos', ...new Set(posts.map(post => post.category))]

    const filteredPosts = posts.filter((post) => {
        const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory
        const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <section className="blog hero pd-20">
            <div className="container two-row">
                <h1 className="title">Blog</h1>

                {categories.length > 1 && (
                    <div className="content-filter">
                        <input
                            className="search-field"
                            type="text"
                            placeholder="Buscar posts..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                        <div className="categories">
                            { categories.map((category, index) => (
                                <button
                                    key={index}
                                    className={`btn-category ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    { category }
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Estado de carregamento */}
                {loading && <p className="loading">Carregando posts...</p>}

                {/* Estado de erro */}
                {error && <p className="error">{error}</p>}

                {/* Cards do blog */}
                {!loading && !error && (
                    <div className="blog-cards">
                        {filteredPosts.length > 0 ? (
                            filteredPosts.map((post, index) => (
                                <BlogCard
                                    key={index}
                                    img={post.img}
                                    title={post.title}
                                    description={post.description}
                                    author={post.author}
                                    date={post.post_date}
                                    readTime={post.read_time}
                                    category={post.category}
                                    onClick={() => setSelectedPost(post)}
                                />
                            ))
                        ) : (
                            <p>Nenhum post encontrado.</p>
                        )}
                    </div>
                )}
            </div>

            {/* Modal */}
            { selectedPost && (
                <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
            )}
        </section>
    )
}