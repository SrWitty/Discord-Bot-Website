import React from 'react';

const FAQPage = () => {
  const faqs = [
    {
      question: 'How do I invite the bot to my server?',
      answer: 'You can invite the bot by visiting our website and clicking on the "Invite" button. Follow the instructions to add the bot to your server.',
    },
    {
      question: 'Are there any commands for the bot?',
      answer: 'Yes, the bot has a variety of commands. You can view the list of commands by typing "!help" in your server.',
    },
    {
      question: 'I\'m experiencing issues with the bot. What should I do?',
      answer: 'If you\'re facing any problems, please check our troubleshooting guide on the website. If the issue persists, feel free to contact our support team.',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 animate-fade-in">Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div key={index} className="mb-6 animate-fade-in">
          <h2 className="text-2xl font-bold mb-2">{faq.question}</h2>
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
