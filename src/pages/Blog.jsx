import { useState } from "react"
import { blogPosts } from "../data/blogPosts"
import BlogCard from "../components/BlogCard"
import BlogModal from "../components/BlogModal"
import "../styles/blog.css"

export default function Blog() {
    const [selectedCategory, setSelectedCategory] = useState('Todos')
    const [search, setSearch] = useState("")
    const [selectedPost, setSelectedPost] = useState(null)

    const categories = ['Todos', ...new Set(blogPosts.map(post => post.category))]

    const filteredPosts = blogPosts.filter((post) => {
        const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory
        const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <section className="blog hero pd-20">
            <div className="container two-row">
                <h1 className="title">Blog</h1>

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
                <div className="blog-cards">
                    { filteredPosts.map((post, index) => (
                        <BlogCard 
                            key={index}
                            img={post.img}
                            title={post.title}
                            description={post.description}
                            author={post.author}
                            date={post.date}
                            readTime={post.readTime}
                            category={post.category}
                            onClick={() => setSelectedPost(post)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            { selectedPost && (
                <BlogModal post={selectedPost} onClose={() => setSelectedPost(null)} />
            )}
        </section>
    )
}