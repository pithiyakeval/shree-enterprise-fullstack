import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, phone, email, service };

    try {
      // const res = await fetch("/submit", {
      const res = await fetch("http://localhost:5000/submit", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert(data.message);

      setName("");
      setPhone("");
      setEmail("");
      setService("");
    } catch (err) {
      alert("Some error occurred. Please try again.");
    }
  };

  return (
    <section
      style={{
        backgroundColor: "#f0f4f8",
        padding: "40px",
        borderRadius: "16px",
        maxWidth: "1000px",
        margin: "60px auto",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        textAlign: "center",
        color: "#1c2d5a",
      }}
    >
      <h2
        style={{
          fontSize: "30px",
          marginBottom: "20px",
          color: "#1c2d5a",
        }}
      >
        📬 Contact Us
      </h2>
      <p
        style={{
          fontSize: "16px",
          marginBottom: "30px",
          maxWidth: "700px",
          marginInline: "auto",
          color: "#444",
        }}
      >
        Have a question or want to get started? Reach out using the form below — we’d love to hear from you!
      </p>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto" }}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="tel"
          placeholder="Enter Your Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
          style={inputStyle}
        >
          <option value="">Choose The Service 😊</option>
          <option value="solar">Solar Panel Installation 🔆</option>
          <option value="mandap">Mandap Decoration 🎪</option>
        </select>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </section>
  );
};

// Input & Button Styles
const inputStyle = {
  width: "100%",
  padding: "12px 15px",
  margin: "10px 0",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
  boxSizing: "border-box",
};

const buttonStyle = {
  backgroundColor: "#1c2d5a",
  color: "white",
  border: "none",
  padding: "12px 24px",
  fontSize: "16px",
  fontWeight: "600",
  borderRadius: "8px",
  marginTop: "20px",
  cursor: "pointer",
  transition: "background 0.3s ease",
};

export default ContactForm;
