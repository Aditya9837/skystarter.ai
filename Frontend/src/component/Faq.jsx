import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
import '../styles/Faq.css'; 

function Faq() {
  const [expanded, setExpanded] = useState(null); 

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index); 
  };

  const faqData = [
    {
      question: "How do you ensure the quality of your software development?",
      answer:
        "We ensure the quality of our software development by implementing industry best practices such as code reviews, automated testing, continuous integration, and adhering to coding standards. Our development team follows agile methodologies to ensure rapid feedback and continuous improvement."
    },
    {
      question: "What industries do you specialize in for software development?",
      answer:
        "We specialize in various industries including healthcare, finance, e-commerce, and education. Our experience in these domains enables us to build tailored solutions that meet the specific needs of each industry."
    },
    {
      question: "What is your development process?",
      answer:
        "Our development process follows agile methodologies, starting with requirements gathering, followed by design, implementation, testing, and deployment. We work closely with clients throughout the process to ensure transparency and deliver high-quality software."
    },
    {
      question: "How do you stay updated with the latest technology?",
      answer:
        "Our team stays updated with the latest technologies through continuous learning, attending conferences, workshops, and webinars. We also encourage team members to pursue certifications and contribute to open-source projects."
    }
  ];

  return (
    <div className="faq-container">
      <h1 className="faq-heading">Frequently Asked Questions</h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <div onClick={() => toggleExpand(index)} className="faq-question-container">
            <h2 className="faq-question">{faq.question}</h2>
            <div className="faq-icon">
              {expanded === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
          </div>
          {expanded === index && (
            <p className="faq-answer">{faq.answer}</p>
          )}
          <hr className="faq-divider" />
        </div>
      ))}
    </div>
  );
}

export default Faq;
