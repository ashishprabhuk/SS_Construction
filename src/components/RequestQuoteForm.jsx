// import "./RequestQuoteForm.css";
// import { useState } from 'react';

// const RequestQuoteForm = () => {
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formStatus, setFormStatus] = useState(null);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default to handle submission manually
//     setIsSubmitting(true);
//     setFormStatus(null);

//     const formData = new FormData(e.target);
//     const formDataObject = Object.fromEntries(formData.entries());

//     try {
//       const response = await fetch("https://formsubmit.co/el/bijimi", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formDataObject)
//       });
      
//       if (!response.ok) {
//         throw new Error('Server responded with an error');
//       }
      
//       setFormStatus('success');
//     } catch (error) {
//       setErrorMessage('There was an error submitting the form. Please try again.');
//       setFormStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   if (formStatus === 'success') {
//     return (
//       <div className="quote-container my-5 p-4 bg-white rounded shadow text-center">
//         <h2 style={{ color: "#25D366" }}>Thank you for your submission!</h2>
//         <p>We've received your quote request and will get back to you shortly.</p>
//         <p>Note: If this is your first submission, please check your email to confirm your FormSubmit account.</p>
//         <button 
//           onClick={() => setFormStatus(null)} 
//           className="mt-3"
//           style={{ backgroundColor: "#25D366", borderColor: "#25D366", color: "white", padding: "8px 16px", border: "none", borderRadius: "4px", cursor: "pointer" }}
//         >
//           Submit Another Request
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="quote-container my-5 p-4 bg-white rounded shadow">
//       <h1 className="text-center mb-4" style={{ color: "#25D366" }}>Request a Concrete Quote</h1>
      
//       {formStatus === 'error' && (
//         <div style={{ 
//           backgroundColor: "#f8d7da", 
//           color: "#721c24", 
//           padding: "12px", 
//           borderRadius: "4px", 
//           marginBottom: "20px" 
//         }}>
//           {errorMessage}
//         </div>
//       )}
      
//       <form onSubmit={handleSubmit}>
//         {/* Hidden field for subject */}
//         <input type="hidden" name="_subject" value="New Concrete Quote Request" />

//         {/* Contact Details Section */}
//         <section className="mb-4">
//           <h2 className="section-title mb-3">Contact Information</h2>
//           <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
//             <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
//               <div>
//                 <label htmlFor="formFullName" className="required">Full Name</label>
//                 <input 
//                   type="text" 
//                   id="formFullName" 
//                   name="name" 
//                   required 
//                   style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//                 />
//               </div>
//             </div>
//             <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
//               <div>
//                 <label htmlFor="formCompanyName">Company Name</label>
//                 <input 
//                   type="text" 
//                   id="formCompanyName" 
//                   name="company"
//                   style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
//             <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
//               <div>
//                 <label htmlFor="formEmail" className="required">Email</label>
//                 <input 
//                   type="email" 
//                   id="formEmail" 
//                   name="email" 
//                   required 
//                   style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//                 />
//               </div>
//             </div>
//             <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
//               <div>
//                 <label htmlFor="formPhone" className="required">Phone Number</label>
//                 <input 
//                   type="tel" 
//                   id="formPhone" 
//                   name="phone" 
//                   required 
//                   style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Concrete Specifications */}
//         <section className="mb-4">
//           <h2 className="section-title mb-3">Concrete Specifications</h2>
//           <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
//             <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
//               <div>
//                 <label htmlFor="formConcreteType" className="required">Concrete Type</label>
//                 <select 
//                   id="formConcreteType" 
//                   name="concreteType" 
//                   required
//                   style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//                 >
//                   <option value="">Select Mix Type</option>
//                   <option>Ready-Mix Concrete</option>
//                   <option>Precast Concrete</option>
//                   <option>High-Strength Concrete</option>
//                 </select>
//               </div>
//             </div>
//             <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
//               <div>
//                 <label htmlFor="formGrade" className="required">Grade/Strength</label>
//                 <input 
//                   type="text" 
//                   id="formGrade" 
//                   name="grade" 
//                   required 
//                   style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div style={{ marginBottom: "15px" }}>
//             <label htmlFor="formQuantity" className="required">Quantity Needed (cubic meters)</label>
//             <input 
//               type="number" 
//               step="0.1" 
//               id="formQuantity" 
//               name="quantity" 
//               required 
//               style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//             />
//           </div>
//         </section>

//         {/* Delivery Information */}
//         <section className="mb-4">
//           <h2 className="section-title mb-3">Delivery Details</h2>
//           <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
//             <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
//               <div>
//                 <label htmlFor="formDate" className="required">Preferred Date</label>
//                 <input 
//                   type="date" 
//                   id="formDate" 
//                   name="preferredDate" 
//                   required 
//                   style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//                 />
//               </div>
//             </div>
//             <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
//               <div>
//                 <label htmlFor="formTime">Preferred Time</label>
//                 <input 
//                   type="time" 
//                   id="formTime" 
//                   name="preferredTime" 
//                   style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//                 />
//               </div>
//             </div>
//           </div>
//           <div style={{ marginBottom: "15px" }}>
//             <label htmlFor="formAddress" className="required">Delivery Address</label>
//             <textarea 
//               id="formAddress" 
//               name="address" 
//               rows="3" 
//               required 
//               style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//             ></textarea>
//           </div>
//         </section>

//         {/* Additional Requirements */}
//         <section className="mb-4">
//           <h2 className="section-title mb-3">Additional Information</h2>
//           <div>
//             <textarea 
//               id="formComments" 
//               name="comments" 
//               rows="5" 
//               placeholder="Any special requirements or comments..." 
//               style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
//             ></textarea>
//           </div>
//         </section>

//         <div style={{ textAlign: "center" }}>
//           <button 
//             type="submit" 
//             disabled={isSubmitting}
//             style={{ 
//               backgroundColor: "#25D366", 
//               borderColor: "#25D366", 
//               color: "white", 
//               padding: "10px 20px", 
//               border: "none", 
//               borderRadius: "4px", 
//               cursor: isSubmitting ? "not-allowed" : "pointer",
//               opacity: isSubmitting ? 0.7 : 1
//             }}
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default RequestQuoteForm;

import "./RequestQuoteForm.css";
import { useState } from 'react';

const RequestQuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default to handle submission manually
    setIsSubmitting(true);
    setFormStatus(null);

    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/el/bijimi", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataObject)
      });
      
      if (!response.ok) {
        throw new Error('Server responded with an error');
      }
      
      setFormStatus('success');
    } catch (error) {
      setErrorMessage('There was an error submitting the form. Please try again.');
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (formStatus === 'success') {
    return (
      <div className="quote-container my-5 p-4 bg-white rounded shadow text-center">
        <h2 style={{ color: "#25D366" }}>Thank you for your submission!</h2>
        <p>We've received your quote request and will get back to you shortly.</p>
        <p>Note: If this is your first submission, please check your email to confirm your FormSubmit account.</p>
        <button 
          onClick={() => setFormStatus(null)} 
          className="mt-3"
          style={{ backgroundColor: "#25D366", borderColor: "#25D366", color: "white", padding: "8px 16px", border: "none", borderRadius: "4px", cursor: "pointer" }}
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="quote-container my-5 p-4 bg-white rounded shadow">
      <h1 className="text-center mb-4" style={{ color: "#25D366" }}>Request a Concrete Quote</h1>
      
      {formStatus === 'error' && (
        <div style={{ 
          backgroundColor: "#f8d7da", 
          color: "#721c24", 
          padding: "12px", 
          borderRadius: "4px", 
          marginBottom: "20px" 
        }}>
          {errorMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        {/* Hidden field for subject */}
        <input type="hidden" name="_subject" value="New Concrete Quote Request" />

        {/* Contact Details Section */}
        <section className="mb-4">
          <h2 className="section-title mb-3">Contact Information</h2>
          <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
            <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
              <div>
                <label htmlFor="formFullName" className="required">Full Name</label>
                <input 
                  type="text" 
                  id="formFullName" 
                  name="name" 
                  required 
                  style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
                />
              </div>
            </div>
            <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
              <div>
                <label htmlFor="formCompanyName">Company Name</label>
                <input 
                  type="text" 
                  id="formCompanyName" 
                  name="company"
                  style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
                />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
            <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
              <div>
                <label htmlFor="formEmail" className="required">Email</label>
                <input 
                  type="email" 
                  id="formEmail" 
                  name="email" 
                  required 
                  style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
                />
              </div>
            </div>
            <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
              <div>
                <label htmlFor="formPhone" className="required">Phone Number</label>
                <input 
                  type="tel" 
                  id="formPhone" 
                  name="phone" 
                  required 
                  style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Concrete Specifications */}
        <section className="mb-4">
          <h2 className="section-title mb-3">Concrete Specifications</h2>
          <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
            <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
              <div>
                <label htmlFor="formConcreteType" className="required">Concrete Type</label>
                <select 
                  id="formConcreteType" 
                  name="concreteType" 
                  required
                  style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
                >
                  <option value="">Select Mix Type</option>
                  <option>Ready-Mix Concrete</option>
                  <option>Precast Concrete</option>
                  <option>High-Strength Concrete</option>
                </select>
              </div>
            </div>
            <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
              <div>
                <label htmlFor="formGrade" className="required">Grade/Strength</label>
                <input 
                  type="text" 
                  id="formGrade" 
                  name="grade" 
                  required 
                  style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
                />
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="formQuantity" className="required">Quantity Needed (cubic meters)</label>
            <input 
              type="number" 
              step="0.1" 
              id="formQuantity" 
              name="quantity" 
              required 
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
            />
          </div>
        </section>

        {/* Delivery Information */}
        <section className="mb-4">
          <h2 className="section-title mb-3">Delivery Details</h2>
          <div style={{ display: "flex", flexWrap: "wrap", margin: "0 -10px" }}>
            <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
              <div>
                <label htmlFor="formDate" className="required">Preferred Date</label>
                <input 
                  type="date" 
                  id="formDate" 
                  name="preferredDate" 
                  required 
                  style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
                />
              </div>
            </div>
            <div style={{ flex: "0 0 50%", padding: "0 10px", marginBottom: "15px" }}>
              <div>
                <label htmlFor="formTime">Preferred Time</label>
                <input 
                  type="time" 
                  id="formTime" 
                  name="preferredTime" 
                  style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
                />
              </div>
            </div>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="formAddress" className="required">Delivery Address</label>
            <textarea 
              id="formAddress" 
              name="address" 
              rows="3" 
              required 
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
            ></textarea>
          </div>
        </section>

        {/* Additional Requirements */}
        <section className="mb-4">
          <h2 className="section-title mb-3">Additional Information</h2>
          <div>
            <textarea 
              id="formComments" 
              name="comments" 
              rows="5" 
              placeholder="Any special requirements or comments..." 
              style={{ display: "block", width: "100%", padding: "8px", marginTop: "5px", border: "1px solid #ced4da", borderRadius: "4px" }} 
            ></textarea>
          </div>
        </section>

        <div style={{ textAlign: "center" }}>
          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{ 
              backgroundColor: "#25D366", 
              borderColor: "#25D366", 
              color: "white", 
              padding: "10px 20px", 
              border: "none", 
              borderRadius: "4px", 
              cursor: isSubmitting ? "not-allowed" : "pointer",
              opacity: isSubmitting ? 0.7 : 1
            }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestQuoteForm;