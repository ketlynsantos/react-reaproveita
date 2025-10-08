import "../styles/blog-modal.css"

export default function BlogModal({ post, onClose }) {
  return (
        <div className="blog-modal" onClick={onClose}>
            <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="btn-close-modal" onClick={onClose}>×</button>
                <div className="blog-modal-image">
                    <img src={post.img} alt={post.alt} />
                </div>
                <div className="blog-modal-info">
                    <span className="blog-modal-category">{post.category}</span>
                    <h2 className="blog-modal-title">{post.title}</h2>
                    <div className="blog-modal-meta">
                        <span>{post.author}</span> • <span>{post.date}</span> • <span>{post.readTime}</span>
                    </div>
                    <div className="blog-modal-text">
                        { post.content.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
