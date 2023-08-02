import React, { useEffect, useState } from "react";

function ContactForm() {
  const [formInputData, setFormData] = useState({
    first_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (isFormSubmitted) {
      const timeoutId = setTimeout(() => {
        setSuccessMessage("");
        setIsFormSubmitted(false);
      }, 30000);
      return () => clearTimeout(timeoutId);
    }
  }, [isFormSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    var uid = uuidv4();
    const first_name = formInputData.first_name;
    const email = formInputData.email;
    const message = formInputData.message;
    const subject = formInputData.subject;

    // Create a new FormData instance
    const formData = new FormData();
    formData.append("grant_type", "client_credentials");
    formData.append("client_id", "7d1592bb-1b37-2350-dc30-5d838165ce67");
    formData.append("client_secret", "Rnh6A$JinJFM");
    fetch("https://crm.netspective.com/Api/access_token", {
      headers: {
        Accept: "application/vnd.api+json",
      },
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const access_token = data.access_token;
        // second call starts
        fetch("https://crm.netspective.com/Api/V8/module", {
          method: "POST",
          headers: {
            Accept: "application/vnd.api+json",
            Authorization: "Bearer " + access_token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: {
              type: "Contacts",
              id: uid,
              attributes: {
                first_name: first_name,
                email1: email,
                description: message,
                lead_source: "Web Site",
                title: subject,
              },
            },
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            const contactId = data.data.id;
            // Third call Start
            fetch(
              "https://crm.netspective.com/Api/V8/module/Accounts/4dbc839d-3e9e-78f2-b11c-5d837d6905f0/relationships",
              {
                method: "POST",
                headers: {
                  Accept: "application/vnd.api+json",
                  Authorization: "Bearer " + access_token,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  data: {
                    type: "Contacts",
                    id: contactId,
                  },
                }),
              },
            )
              .then((response) => response.json())
              .then((data) => {
                const contactName = first_name;
                const contactEmail = email;
                const contactSubject = message;
                const contactMessage = subject;
                const formData = new FormData();
                formData.append("name", contactName);
                formData.append("email", contactEmail);
                formData.append("subject", contactSubject);
                formData.append("message", contactMessage);
                const responseMail = fetch(
                  "https://formspree.io/support@netspective.media",
                  {
                    method: "POST",
                    body: formData,
                  },
                );
                setIsFormSubmitted(true);
                setSuccessMessage("Form submitted successfully");
                // Clear the form after submission
                setFormData({
                  first_name: "",
                  email: "",
                  subject: "",
                  message: "",
                });
              });

            // Third call ends
          })
          .catch((error) => {
            console.error(error);
          });
        // second call ends
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} id="quickcontact">
      <div>
        <h3 className="text-lg uppercase font-medium mb-2 text-orange-600">
          Contact Us
        </h3>
        <div className="mt-3">
          <input
            type="text"
            className="block w-full rounded-md border-0 py-2 px-4 placeholder:text-gray-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-700 sm:max-w-xs text-base leading-6"
            name="first_name"
            value={formInputData.first_name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="block w-full rounded-md border-0 py-2 px-4 placeholder:text-gray-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-700 sm:max-w-xs text-base leading-6"
            name="email"
            value={formInputData.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>
        <div className="mt-3">
          <input
            type="text"
            className="block w-full rounded-md border-0 py-2 px-4 placeholder:text-gray-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-700 sm:max-w-xs text-base leading-6"
            name="subject"
            value={formInputData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
        </div>
        <div className="mt-3">
          <textarea
            className="block w-full rounded-md border-0 py-2 px-4 placeholder:text-gray-900 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-700 sm:max-w-xs text-base leading-6"
            name="message"
            value={formInputData.message}
            onChange={handleChange}
            placeholder="Message"
          ></textarea>
        </div>
        <div className="mt-3">
          <button
            className="rounded-md bg-orange-600 px-3 py-2 px-4 text-base font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            type="submit"
          >
            Submit
          </button>
        </div>

        {successMessage && (
          <div className="mt-3 text-green-500">
            Form submitted successfully!
          </div>
        )}
      </div>
    </form>
  );
}

function uuidv4(): string {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c: number) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16),
  );
}

export default ContactForm;
