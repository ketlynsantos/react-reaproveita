import "../styles/components/blog-card.css"

export default function BlogCard({ img, title, description, author, date, readTime, category, onClick, showButton = true }) {
    return (
        <div className="blog-card">
            <img src={img} alt={title} />
            <div className="blog-card-content">
                <span className="blog-category">{category}</span>
                <div className="blog-meta">
                    <span>{author}</span> • <span>{date}</span> • <span>{readTime}</span>
                </div>
                <h3 className="blog-title">{title}</h3>
                <p className="blog-description">{description}</p>
                { showButton && 
                    <button type="button" className="btn-read-more" onClick={onClick}>Leia Mais</button>
                }
            </div>
        </div>
    )
}