import React from 'react';
import './Features.css';
import { motion } from 'framer-motion';
import { FaClock, FaChartLine, FaExchangeAlt } from 'react-icons/fa';

const featureData = [
  {
    icon: <FaClock size={32} />,
    title: "Real-Time Prices",
    description: "Access up-to-the-second crypto price updates from top global exchanges."
  },
  {
    icon: <FaChartLine size={32} />,
    title: "Historical Charts",
    description: "Visualize trends and performance over time with beautiful, responsive charts."
  },
  {
    icon: <FaExchangeAlt size={32} />,
    title: "Currency Conversion",
    description: "Switch easily between USD, INR, and other currencies with one click."
  }
];

const Features = () => {
  return (
    <div className="features-container">
      <motion.h1
        className="features-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Platform Features
      </motion.h1>
      <motion.p
        className="features-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Discover key tools that make Cryptoplace the best way to explore, track, and manage your crypto.
      </motion.p>

      <div className="features-grid">
        {featureData.map((feature, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
