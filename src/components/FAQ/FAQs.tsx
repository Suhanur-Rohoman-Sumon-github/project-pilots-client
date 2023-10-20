import  { useState } from 'react';
import "./FAQs.css"
const FAQs = () => {
  const faqItems = [
    {
      id: 1,
      question: "Why is the moon sometimes out during the day?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      id: 2,
      question: "Why is the sky blue?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      id: 3,
      question: "Will we ever discover aliens?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      id: 4,
      question: "How much does the Earth weigh?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      id: 5,
      question: "How do airplanes stay up?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
  ];

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (itemId: number) => {
    setExpandedItem(expandedItem === itemId ? null : itemId);
  };

  return (
    <div className="container">
      <div className="accordion">
        {faqItems.map((item) => (
          <div className="accordion-item" key={item.id}>
            <button
              id={`accordion-button-${item.id}`} 
              className='btn'
              aria-expanded={expandedItem === item.id}
              onClick={() => toggleItem(item.id)}
            >
              <span className="accordion-title">{item.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className={`accordion-content ${expandedItem === item.id ? 'open' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
