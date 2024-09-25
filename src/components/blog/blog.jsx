import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from './fetch_blogs';
import { deleteBlogById } from './blogs_delete';
import { createBlog } from './blogs_create';
import PropTypes from 'prop-types';
import './blog.css';

const Button = ({ onClick, className, children }) => (
    <button onClick={onClick} className={`btn ${className}`}>
        {children}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

const Card = ({ className, children }) => (
    <div className={`card ${className}`}>
        {children}
    </div>
);

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            onClick={() => onPageChange(number)}
                            className={`pagination-btn ${currentPage === number ? 'active' : ''}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h2>{title}</h2>
                    <button onClick={onClose} className="close-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

const NavItem = ({ text, to }) => {
    return to ? <Link to={to} className="navbar-item">{text}</Link> : <a href="#" className="navbar-item">{text}</a>;
};

NavItem.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string,
};

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [page] = useState(0);
    const [size] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 9;
    const [ setLoading] = useState(true);
    const [ setError] = useState(null);
    const [ setMessage] = useState('');
    const [ setTotalPages] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [blogHeader, setBlogHeader] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            setError(null);
    
            try {
                const data = await getAllBlogs(page, size);
                setBlogs(data.content);
                setTotalPages(data.totalPages);
            } catch (err) {
                setError('Failed to fetch blogs');
            } finally {
                setLoading(false);
            }
        };
    
        fetchBlogs();
    });
    const handleDelete = async (id) => {
        setError(null);
        setMessage('');

        try {
            const response = await deleteBlogById(id);
            setMessage(response); // "Blog deleted successfully."
        } catch (err) {
            setError('Failed to delete blog');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBlog = {
            blogHeader,
            description,
        };

        try {
            const response = await createBlog(newBlog);
            setMessage(response.message); // "Blog created successfully."
            setBlogHeader('');
            setDescription('');
            setIsModalOpen(false);
        } catch (err) {
            setError('Error creating blog. Please try again.');
        }
    };

    const dummyCards = blogs.map(blog => ({
        id: blog.id,
        title: blog.blogHeader,
        description: blog.description
    }));

    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = dummyCards.slice(indexOfFirstCard, indexOfLastCard);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="blog-page">

            {/* Navbar */}

            <nav className="navbar">

                <div className="navbar-logo">

                    <img src="./assets/logo_blog.png" alt="DAPIXEL logo" />

                </div>

                <div className="navbar-menu">

                    <NavItem text="Click Here to Play" />

                    <NavItem text="Services" />

                    <NavItem text="Industries" />

                    <NavItem text="About Us" />

                    <NavItem text="Team DaPixel" />

                    <NavItem text="Blog" />

                </div>

            </nav>

            {/* Blog Content Container */}

            <div className="blog-container">

                <div>

                    <Button

                        onClick={() => setIsModalOpen(true)}

                        className="btn-primary"

                    >

                        Add Blog Content +

                    </Button>

                </div>

                {/* Blog Cards */}

                <div className="blog-card-grid">

                    {currentCards.map((card) => (

                        <Card key={card.id} className="blog-card">

                            <h3 className="blog-card-header">{card.title}</h3>

                            <p className="blog-card-content">{card.description}</p>

                            <div className="blog-card-footer">

                                <Button className="btn-secondary">Read More</Button>

                                <button onClick={() => handleDelete()} style={{ cursor: 'pointer' }}>

                                    🗑️

                                </button>

                            </div>

                        </Card>

                    ))}

                </div>

                {/* Pagination */}

                <div className="pagination-container">

                    <Pagination

                        currentPage={currentPage}

                        totalPages={Math.ceil(dummyCards.length / cardsPerPage)}

                        onPageChange={paginate}

                    />

                </div>

            </div>

      {/* Why DaPixel Section */}
      <div className="why-dapixel-container">
        <div className="why-dapixel-content">
          <div className="why-dapixel-text">
            <h2 className="why-dapixel-title">Why DaPixel?</h2>
            <p className="why-dapixel-description">
            To get customers, its imperative to be seen by the mass. Every successful company is unique and needs contrasting digital marketing strategies. Book a meeting with us and we will help you find the correct strategy for your company.
            </p>
            <button className="why-dapixel-button">Book Free Meeting</button>
          </div>
          <div className="why-dapixel-image">
            <img src="./assets/Marketing.png" alt="Why DaPixel" />
          </div>
        </div>
      </div>

            {/* Footer */}

            <footer className="footer">

                <div className="footer-container">

                    <div className="footer-section">

                        <h2 className="footer-title">DaPixel</h2>

                        <p className="footer-address">123 Digital Street, Tech City, 12345</p>

                        {/* <div className="social-links">

                            <span>FB</span>

                            <span>TW</span>

                            <span>IG</span>

                            <span>LI</span>

                        </div> */}

                    </div>

                    <div className="footer-section">

                        <h3 className="footer-subtitle">Company</h3>

                        <ul className="footer-links">

                            {['Home', 'About Us', 'Latest Blog', 'Our Specialist', 'Contact Us', 'Privacy Policy'].map((item) => (

                                <li key={item}><a href="#" className="footer-link">{item}</a></li>

                            ))}

                        </ul>

                    </div>

                    <div className="footer-section">

                        <h3 className="footer-subtitle">Services</h3>

                        <ul className="footer-links">

                            {['Digital Marketing', 'Free Audit', 'Google Ads', 'Cryptocurrency Marketing', 'SEO', 'SAAS Marketing', 'Website & SEO'].map((item) => (

                                <li key={item}><a href="#" className="footer-link">{item}</a></li>

                            ))}

                        </ul>

                    </div>

                </div>

            </footer>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Add Blog Content"
            >
    <form className="modal-body" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="heading">Heading</label>
        <input
          type="text"
          id="heading"
          className="form-input"
          placeholder="Enter blog post heading"
          onChange={(e) => setBlogHeader(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="form-label" htmlFor="description">Description</label>
        <textarea
          id="description"
          className="form-textarea"
          placeholder="Enter blog post description"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          onClick={() => setIsModalOpen(false)}
          className="btn btn-cancel"
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-submit">
          Submit
        </button>
      </div>
    </form>           
    </Modal>
    </div>
    );
};

export default BlogPage;