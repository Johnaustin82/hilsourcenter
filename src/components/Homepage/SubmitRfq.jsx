
// import React, { useState } from "react";

// export default function RfqSubmissionPage() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     company: "",
//     product: "",
//     quantity: "",
//     deadline: "",
//     additionalInfo: "",
//   });

//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     setSubmitted(true);
//   }

//   return (
//     <div className="rfq-page">
//       <div className="rfq-container">
//         <h1 className="rfq-title">Request a Quote</h1>
//         <p className="rfq-subtitle">
//           Fill out the form below and we will get back to you promptly with a personalized quote.
//         </p>
//         {!submitted ? (
//           <form className="rfq-form" onSubmit={handleSubmit} noValidate>
//             <label htmlFor="fullName">Full Name</label>
//             <input
//               id="fullName"
//               name="fullName"
//               type="text"
//               required
//               placeholder="Your full name"
//               value={formData.fullName}
//               onChange={handleChange}
//             />

//             <label htmlFor="email">Email Address</label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               required
//               placeholder="you@example.com"
//               value={formData.email}
//               onChange={handleChange}
//             />

//             <label htmlFor="company">Company Name</label>
//             <input
//               id="company"
//               name="company"
//               type="text"
//               placeholder="Your company"
//               value={formData.company}
//               onChange={handleChange}
//             />

//             <label htmlFor="product">Product / Service</label>
//             <input
//               id="product"
//               name="product"
//               type="text"
//               required
//               placeholder="What product/service?"
//               value={formData.product}
//               onChange={handleChange}
//             />

//             <label htmlFor="quantity">Quantity</label>
//             <input
//               id="quantity"
//               name="quantity"
//               type="number"
//               min="1"
//               required
//               placeholder="Desired quantity"
//               value={formData.quantity}
//               onChange={handleChange}
//             />

//             <label htmlFor="deadline">Deadline</label>
//             <input
//               id="deadline"
//               name="deadline"
//               type="date"
//               required
//               value={formData.deadline}
//               onChange={handleChange}
//             />

//             <label htmlFor="additionalInfo">Additional Information</label>
//             <textarea
//               id="additionalInfo"
//               name="additionalInfo"
//               rows="2"
//               placeholder="Any extra details"
//               value={formData.additionalInfo}
//               onChange={handleChange}
//             ></textarea>

//             <button type="submit" className="submit-btn">
//               Submit RFQ
//             </button>
//           </form>
//         ) : (
//           <div className="thank-you-msg">
//             <h2>Thank you for your request!</h2>
//             <p>We will review your information and get back to you shortly.</p>
//           </div>
//         )}
//       </div>

//       <style>{`
//         :root {
//           --martell-blue: #002147;
//           --martell-navy: #003366;
//           --martell-gold: #d4af37;
//           --martell-gold-bright: #ffd700;
//           --martell-white: #fff;
//         }
//         .rfq-page {
//           min-height: 100vh;
//           width: 100vw;
//           font-family: 'Poppins', 'Georgia', serif;
//           color: var(--martell-white);
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background: var(--martell-navy);
//         }
//         .rfq-container {
//           max-width: 400px;
//           width: 100%;
//           background: var(--martell-blue);
//           border-radius: 1rem;
//           box-shadow: 0 4px 24px 0 #00214799, 0 1.5px 4px #d4af3740;
//           padding: 1.3rem 1.5rem 1.2rem 1.5rem;
//           box-sizing: border-box;
//           border: 2px solid var(--martell-gold);
//         }
//         .rfq-title {
//           font-size: 1.5rem;
//           font-weight: 700;
//           margin-bottom: 0.3rem;
//           color: var(--martell-gold);
//           text-transform: uppercase;
//           letter-spacing: 0.06em;
//           font-family: 'Georgia', 'Poppins', serif;
//         }
//         .rfq-subtitle {
//           font-size: 0.95rem;
//           color: var(--martell-gold-bright);
//           margin-bottom: 1rem;
//           font-weight: 500;
//         }
//         form.rfq-form {
//           display: flex;
//           flex-direction: column;
//           gap: 0.7rem;
//         }
//         label {
//           font-weight: 600;
//           font-size: 0.92rem;
//           color: var(--martell-gold);
//           margin-bottom: 0.1rem;
//           user-select: none;
//         }
//         input,
//         textarea {
//           padding: 0.45rem 0.8rem;
//           font-size: 0.98rem;
//           border: 1.5px solid var(--martell-blue);
//           border-radius: 0.4rem;
//           background: #f9f9f9;
//           color: var(--martell-navy);
//           transition: border-color 0.3s, box-shadow 0.3s, background 0.3s;
//           font-family: inherit;
//         }
//         input::placeholder,
//         textarea::placeholder {
//           color: #9ca3af;
//         }
//         input:focus,
//         textarea:focus {
//           border-color: var(--martell-gold);
//           background: #fffbe6;
//           box-shadow: 0 0 6px 1px #d4af3780;
//           outline: none;
//         }
//         .submit-btn {
//           background: linear-gradient(90deg, var(--martell-gold) 0%, var(--martell-gold-bright) 80%, var(--martell-navy) 100%);
//           color: var(--martell-navy);
//           font-weight: 700;
//           font-size: 1rem;
//           padding: 0.7rem 1.2rem;
//           border: none;
//           border-radius: 0.6rem;
//           cursor: pointer;
//           transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
//           margin-top: 0.8rem;
//           align-self: center;
//           width: 70%;
//           box-shadow: 0 2px 8px #00214755;
//           letter-spacing: 0.03em;
//         }
//         .submit-btn:hover,
//         .submit-btn:focus {
//           background: linear-gradient(90deg, var(--martell-navy) 0%, var(--martell-gold) 70%, var(--martell-gold-bright) 100%);
//           color: var(--martell-white);
//           transform: scale(1.03);
//           box-shadow: 0 4px 12px #d4af37bb;
//           outline: none;
//         }
//         .thank-you-msg {
//           text-align: center;
//           color: var(--martell-gold);
//         }
//         .thank-you-msg h2 {
//           font-weight: 700;
//           font-size: 1.2rem;
//           margin-bottom: 0.4rem;
//           color: var(--martell-gold);
//         }
//         .thank-you-msg p {
//           font-size: 0.98rem;
//           color: var(--martell-gold-bright);
//           font-weight: 500;
//         }
//         @media (max-width: 500px) {
//           .rfq-container {
//             padding: 1rem 0.4rem;
//             max-width: 98vw;
//           }
//           .submit-btn {
//             width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



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
    attachment: null, // For the attachment file
    image: null, // For the image file
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] })); // Store the selected file
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to an API
    setSubmitted(true);
  }

  return (
    <div className="rfq-page">
      <div className="rfq-container">
        <h1 className="rfq-title">Request a Quote</h1>
        <p className="rfq-subtitle">
          Fill out the form below and we will get back to you promptly with a personalized quote.
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
              rows="2"
              placeholder="Any extra details"
              value={formData.additionalInfo}
              onChange={handleChange}
            ></textarea>

            {/* File input for attachment */}
            <label htmlFor="attachment">Choose Attachment</label>
            <input
              id="attachment"
              name="attachment"
              type="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt" // Acceptable file types
              onChange={handleChange}
            />

            {/* File input for image */}
            <label htmlFor="image">Choose Image</label>
            <input
              id="image"
              name="image"
              type="file"
              accept="image/*" // Accept all image types
              onChange={handleChange}
            />

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
        :root {
          --martell-blue: #002147;
          --martell-navy: #003366;
          --martell-gold: #d4af37;
          --martell-gold-bright: #ffd700;
          --martell-white: #fff;
        }
        .rfq-page {
          min-height: 100vh;
          width: 100vw;
          font-family: 'Poppins', 'Georgia', serif;
          color: var(--martell-white);
          display: flex;
          justify-content: center;
          align-items: center;
          background: var(--martell-navy);
        }
        .rfq-container {
          max-width: 400px;
          width: 100%;
          background: var(--martell-blue);
          border-radius: 1rem;
          box-shadow: 0 4px 24px 0 #00214799, 0 1.5px 4px #d4af3740;
          padding: 1.3rem 1.5rem 1.2rem 1.5rem;
          box-sizing: border-box;
          border: 2px solid var(--martell-gold);
        }
        .rfq-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.3rem;
          color: var(--martell-gold);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          font-family: 'Georgia', 'Poppins', serif;
        }
        .rfq-subtitle {
          font-size: 0.95rem;
          color: var(--martell-gold-bright);
          margin-bottom: 1rem;
          font-weight: 500;
        }
        form.rfq-form {
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        label {
          font-weight: 600;
          font-size: 0.92rem;
          color: var(--martell-gold);
          margin-bottom: 0.1rem;
          user-select: none;
        }
        input,
        textarea {
          padding: 0.45rem 0.8rem;
          font-size: 0.98rem;
          border: 1.5px solid var(--martell-blue);
          border-radius: 0.4rem;
          background: #f9f9f9;
          color: var(--martell-navy);
          transition: border-color 0.3s, box-shadow 0.3s, background 0.3s;
          font-family: inherit;
        }
        input::placeholder,
        textarea::placeholder {
          color: #9ca3af;
        }
        input:focus,
        textarea:focus {
          border-color: var(--martell-gold);
          background: #fffbe6;
          box-shadow: 0 0 6px 1px #d4af3780;
          outline: none;
        }
        .submit-btn {
          background: linear-gradient(90deg, var(--martell-gold) 0%, var(--martell-gold-bright) 80%, var(--martell-navy) 100%);
          color: var(--martell-navy);
          font-weight: 700;
          font-size: 1rem;
          padding: 0.7rem 1.2rem;
          border: none;
          border-radius: 0.6rem;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          margin-top: 0.8rem;
          align-self: center;
          width: 70%;
          box-shadow: 0 2px 8px #00214755;
          letter-spacing: 0.03em;
        }
        .submit-btn:hover,
        .submit-btn:focus {
          background: linear-gradient(90deg, var(--martell-navy) 0%, var(--martell-gold) 70%, var(--martell-gold-bright) 100%);
          color: var(--martell-white);
          transform: scale(1.03);
          box-shadow: 0 4px 12px #d4af37bb;
          outline: none;
        }
        .thank-you-msg {
          text-align: center;
          color: var(--martell-gold);
        }
        .thank-you-msg h2 {
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 0.4rem;
          color: var(--martell-gold);
        }
        .thank-you-msg p {
          font-size: 0.98rem;
          color: var(--martell-gold-bright);
          font-weight: 500;
        }
        @media (max-width: 500px) {
          .rfq-container {
            padding: 1rem 0.4rem;
            max-width: 98vw;
          }
          .submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
