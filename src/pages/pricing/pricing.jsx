import React, { useContext } from 'react';
import './Pricing.css';
import { CoinContext } from '../../context/CoinContext';
import { motion } from 'framer-motion';

const Pricing = () => {
  const { currency } = useContext(CoinContext);

  const priceSymbol = currency?.symbol || '$';

  const pricingPlans = [
    {
      title: 'Starter',
      price: 0,
      description: 'Basic features for personal use',
      features: ['Real-time Prices', 'Portfolio Tracker', 'Crypto News'],
      button: 'Get Started',
    },
    {
      title: 'Pro',
      price: 9.99,
      description: 'Advanced features for enthusiasts',
      features: ['All Starter features', 'Alerts & Notifications', 'Ad-Free Experience'],
      button: 'Upgrade to Pro',
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      description: 'Best for teams and businesses',
      features: ['Team Access', 'Priority Support', 'Dedicated Manager'],
      button: 'Contact Sales',
    },
  ];

  return (
    <div className="pricing">
      <h2>Our Pricing Plans</h2>
      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <motion.div
            className="pricing-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{plan.title}</h3>
            <div className="price">
              {plan.price === 'Custom' ? 'Custom' : `${priceSymbol}${plan.price}/mo`}
            </div>
            <p>{plan.description}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button>{plan.button}</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
