import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Bitcoin and Blockchain',
      description: 'Learn how Bitcoin and the blockchain technology behind it work in simple terms.',
      author: 'Satoshi Nakamoto',
      date: 'July 1, 2025',
      link: 'https://www.investopedia.com/terms/b/blockchain.asp'
    },
    {
      id: 2,
      title: 'Top 5 Cryptocurrencies to Watch in 2025',
      description: 'These cryptocurrencies show promising growth and stability. Here’s why.',
      author: 'Vitalik Buterin',
      date: 'July 10, 2025',
      link: 'https://coinmarketcap.com/alexandria/article/top-5-cryptocurrencies-to-watch-in-2025'
    },
    {
      id: 3,
      title: 'DeFi: The Future of Finance',
      description: 'Decentralized Finance (DeFi) is transforming banking and lending.',
      author: 'Andreas Antonopoulos',
      date: 'July 15, 2025',
      link: 'https://www.coindesk.com/learn/what-is-defi/'
    },
  ];

  return (
    <div className="blog">
      <h2 className="blog-heading">Latest Blog Posts</h2>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-description">{post.description}</p>
              <span className="blog-meta">{post.author} | {post.date}</span>
              <a
                href={post.link}
                className="read-more"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;



