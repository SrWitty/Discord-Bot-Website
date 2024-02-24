import React from "react";

const Contact = () => {
  return (
    <div
      className="container mt- text-white p-4 rounded-lg shadow-lg animate-fade-in"
      style={{ backgroundColor: "#28293A" }}
    >
      <h1 className="text-center text-3xl mb-4">Contact Us</h1>
      <p className="text-center text-sm mb-4">
        <strong>
          Feel free to reach out to us if you have any questions or inquiries.
        </strong>
      </p>

      <form className="mb-4">
        <div className="mb-2">
          <label
            htmlFor="name"
            className="block text-white text-xs font-bold mb-1"
          >
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-xs"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-white text-xs font-bold mb-1"
          >
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-xs"
            placeholder="john.doe@example.com"
          />
        </div>

        <div className="mb-2">
          <label
            htmlFor="message"
            className="block text-white text-xs font-bold mb-1"
          >
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-gray-200 appearance-none border-2 border-gray-300 rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-xs resize-none"
            rows="3"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded transition duration-300 text-xs"
        >
          Submit
        </button>
      </form>

      <p className="text-center text-xs">
        Alternatively, you can contact us via email at{" "}
        <strong>contact@example.com</strong>.
      </p>
    </div>
  );
};

export default Contact;
