import React, { useState } from "react";

export default function RfqSubmissionPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    deadline: "",
    additionalInfo: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // For now just simulate submission
    setSubmitted(true);
  }

  return (
    <div className="rfq-page">
      <div className="rfq-container">
        <h1 className="rfq-title">Request a Quote</h1>
        <p className="rfq-subtitle">
          Fill out the form below and we will get back to you promptly with a
          personalized quote.
        </p>
        {!submitted ? (
          <form className="rfq-form" onSubmit={handleSubmit} noValidate>
            <label htmlFor="fullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="Your full name"
              value={formData.fullName}
              onChange={handleChange}
            />

            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="company">Company Name</label>
            <input
              id="company"
              name="company"
              type="text"
              placeholder="Your company"
              value={formData.company}
              onChange={handleChange}
            />

            <label htmlFor="product">Product / Service</label>
            <input
              id="product"
              name="product"
              type="text"
              required
              placeholder="What product/service?"
              value={formData.product}
              onChange={handleChange}
            />

            <label htmlFor="quantity">Quantity</label>
            <input
              id="quantity"
              name="quantity"
              type="number"
              min="1"
              required
              placeholder="Desired quantity"
              value={formData.quantity}
              onChange={handleChange}
            />

            <label htmlFor="deadline">Deadline</label>
            <input
              id="deadline"
              name="deadline"
              type="date"
              required
              value={formData.deadline}
              onChange={handleChange}
            />

            <label htmlFor="additionalInfo">Additional Information</label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              rows="4"
              placeholder="Any extra details"
              value={formData.additionalInfo}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="submit-btn">
              Submit RFQ
            </button>
          </form>
        ) : (
          <div className="thank-you-msg">
            <h2>Thank you for your request!</h2>
            <p>We will review your information and get back to you shortly.</p>
          </div>
        )}
      </div>

      <style>{`
        .rfq-page {
          background: #fff;
          min-height: 100vh;
          padding: 3rem 1rem;
          font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
           Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color: #374151; /* gray-700 */
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }
        .rfq-container {
          max-width: 600px;
          width: 100%;
          background: white;
          border-radius: 0.75rem;
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.05);
          padding: 2.5rem 3rem;
          box-sizing: border-box;
        }
        .rfq-title {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
          color: #003366; /* dark navy blue */
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .rfq-subtitle {
          font-size: 1.125rem;
          color: #44403c; /* warm gray */
          margin-bottom: 2rem;
          font-weight: 500;
        }
        form.rfq-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        label {
          font-weight: 600;
          font-size: 0.875rem;
          color: #00529b; /* blue accent */
          margin-bottom: 0.25rem;
          user-select: none;
        }
        input,
        textarea {
          padding: 0.65rem 1rem;
          font-size: 1rem;
          border: 2px solid #d6d3d1;
          border-radius: 0.5rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          font-family: inherit;
          color: #1e293b;
          outline-offset: 2px;
        }
        input::placeholder,
        textarea::placeholder {
          color: #9ca3af;
        }
        input:focus,
        textarea:focus {
          border-color: #d4af37; /* gold */
          box-shadow: 0 0 8px 2px rgba(212, 175, 55, 0.4);
        }
        .submit-btn {
          background: linear-gradient(90deg, #003366, #d4af37);
          color: white;
          font-weight: 700;
          font-size: 1.125rem;
          padding: 0.85rem 1.75rem;
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-top: 1rem;
          align-self: center;
          width: 50%;
          box-shadow: 0 4px 10px #003366a0;
        }
        .submit-btn:hover,
        .submit-btn:focus {
          transform: scale(1.05);
          box-shadow: 0 6px 15px #d4af37bb;
          outline: none;
        }
        .thank-you-msg {
          text-align: center;
          color: #003366;
        }
        .thank-you-msg h2 {
          font-weight: 700;
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        .thank-you-msg p {
          font-size: 1.125rem;
          color: #44403c;
          font-weight: 500;
        }

        @media (max-width: 640px) {
          .rfq-container {
            padding: 1.5rem 1.5rem;
          }
          .submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}

