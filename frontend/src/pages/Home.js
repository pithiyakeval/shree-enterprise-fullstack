import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";
import "./Home.css";


const Home = () => {
  return (
    <div className="home-container">
      {/* 🔷 1. Welcome / Hero */}
      <section
        style={{
          padding: "40px",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          borderRadius: "16px",
          color: "#ffffff",
          maxWidth: "1000px",
          margin: "40px auto",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
        }}
        data-aos="fade-up"
      >
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "800",
            marginBottom: "10px",
            color: "#fca311",
            textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          Welcome to Shree Enterprise
        </h1>

        <p
          style={{
            fontSize: "18px",
            fontWeight: "500",
            marginBottom: "24px",
            lineHeight: "1.6",
          }}
        >
          Powering your home with clean, sustainable solar energy using top brands like Adani & Waaree.
          Supporting government subsidies to make solar accessible and affordable for everyone.
          Also bringing elegance to your events with premium Mandap decoration for weddings & functions.
        </p>
      </section>

      {/* 🔸 2. History / Detailed Overview (original long block) */}
      <section
        style={{
          padding: "40px",
          backgroundColor: "#f1f4f6",
          borderRadius: "16px",
          color: "#2c2c2c",
          maxWidth: "1100px",
          margin: "40px auto",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
        }}
        data-aos="fade-up"
      >
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "800",
            marginBottom: "24px",
            color: "#1c2d5a",
            textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          Powering Lives & Celebrations – Our Commitment to You
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            marginBottom: "30px",
            maxWidth: "900px",
            marginInline: "auto",
          }}
        >
          At <strong>Shree Enterprise</strong> we proudly serve our community through two deeply trusted services —
          empowering homes with sustainable solar energy and enhancing life’s moments with elegant mandap decoration.
        </p>

        {/* Solar Sub‑section */}
        <div style={{ textAlign: "left", marginBottom: "30px" }}>
          <h3 style={{ color: "#0b6e4f", fontSize: "24px", fontWeight: "700", marginBottom: "12px" }}>
            🔆 Solar Energy Solutions
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            We handle everything from site consultation and installation to government‑subsidy paperwork.
            Systems from 2.5 kW to 5 kW, using <strong>Adani</strong> and <strong>Waaree</strong>.
          </p>
        </div>

        <hr style={{ border: "0.5px solid #ccc", margin: "30px 0", maxWidth: "300px" }} />

        {/* Mandap Sub‑section */}
        <div style={{ textAlign: "left" }}>
          <h3 style={{ color: "#9b2226", fontSize: "24px", fontWeight: "700", marginBottom: "12px" }}>
            🎪 Mandap Decoration Services
          </h3>
          <p style={{ fontSize: "17px", lineHeight: "1.8" }}>
            A decade of experience in wedding mandaps, birthdays, engagements, and cultural events —
            with 24×7 support, thematic designs, and budget‑friendly packages.
          </p>
        </div>
      </section>

      {/* 🔸 3. Explore Services Cards (original) */}
      <section
        style={{
          padding: "40px",
          backgroundColor: "#eaf4f7",
          borderRadius: "16px",
          maxWidth: "1100px",
          margin: "40px auto",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        }}
        data-aos="fade-up"
      >
        <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#1c2d5a", marginBottom: "40px" }}>
          Explore Our Services
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
          {/* Solar Card */}
          <div
            style={{
              width: "320px",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              overflow: "hidden",
              textAlign: "left",
            }}
          >
            <img
              src={require("../assets/home/solar-thumb.jpg")}
              alt="Solar Services"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              {/* <h3 style={{ color: "#0b6e4f", fontSize: "20px", marginBottom: "10px" }}>Solar Panel Solutions</h3> */}
              <h3 style={{ color: "#0b6e4f", fontSize: "20px", marginBottom: "10px" }}>🔆 Solar Panel Solutions</h3>
               <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: "17px", lineHeight: "1.8" }}>
                <li>✔ Free site survey & energy analysis</li>
                <li>✔ Installation of 2.5 kW to 5 kW systems</li>
                <li>✔ Use of trusted brands like Adani & Waaree</li>
                <li>✔ Full government subsidy assistance</li>
                <li>✔ Inverter, battery & net meter setup</li>
                <li>✔ Affordable pricing with long-term savings</li>
                <li>✔ Maintenance & support post-installation</li>
              </ul>
              <Link to="/solar" className="explore-btn">🔆 Solar Services</Link>
            </div>
          </div>

          {/* Mandap Card */}
          <div
            style={{
              width: "320px",
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
              overflow: "hidden",
              textAlign: "left",
            }}
          >
            <img
              src={require("../assets/home/mandap-thumb.jpg")}
              alt="Mandap Services"
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              {/* <h3 style={{ color: "#9b2226", fontSize: "20px", marginBottom: "10px" }}>Mandap Decoration</h3> */}
              <h3 style={{ color: "#9b2226", fontSize: "20px", marginBottom: "10px" }}>🎪 Mandap Decoration</h3>
              <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: "17px", lineHeight: "1.8" }}>
                <li>✔ Beautiful wedding & engagement setups</li>
                <li>✔ Custom haldi, mehndi & reception stages</li>
                <li>✔ Elegant gate, stage & entrance decoration</li>
                <li>✔ Budget-friendly themes with quality design</li>
                <li>✔ Lighting, sound & floral arrangements</li>
                <li>✔ 24×7 setup support during events</li>
                <li>✔ Trusted by 100+ families for 5+ years</li>
              </ul>
              <Link to="/mandap" className="explore-btn">🎪 Mandap Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 🔸 4. NEW – Why Choose Us */}
      <section
        style={{
          backgroundColor: "#fffefc",
          padding: "60px 30px",
          borderRadius: "16px",
          maxWidth: "1100px",
          margin: "60px auto",
          textAlign: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        }}
        data-aos="fade-up"
      >
        <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#1c2d5a", marginBottom: "30px" }}>
          🌟 Why Choose Shree Enterprise?
        </h2>
        <ul style={{ listStyle: "none", padding: 0, fontSize: "18px", lineHeight: "1.8" }}>
          <li>✅ Trusted by 200+ families in Saurashtra</li>
          <li>✅ Transparent pricing & genuine work</li>
          <li>✅ Fully equipped for any event scenario</li>
          <li>✅ 24×7 availability, even on short notice</li>
          <li>✅ Registered for solar‑subsidy processing</li>
        </ul>
      </section>

      {/* 🔸 5. NEW – Real Images Gallery */}
      <section
        style={{
          backgroundColor: "#ffffff",
          padding: "60px 20px",
          borderRadius: "16px",
          maxWidth: "1100px",
          margin: "60px auto",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
        }}
        data-aos="fade-up"
      >
        <h2 style={{ fontSize: "32px", fontWeight: "800", color: "#1c2d5a", marginBottom: "40px" }}>
          📸 Our Real Work Snapshots
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px" }}>
          {["solar-install.jpg", ,"solar2.jpg","wedding-decor.jpg","mandap7.jpg","mandap8.jpg"].map((img, i) => (
            <img
              key={img}
              src={require(`../assets/gallery/${img}`)}
              alt="Gallery"
              style={{
                width: "300px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
              data-aos="zoom-in"
              data-aos-delay={i * 150}
            />
          ))}
        </div>
      </section>

      {/* 🔸 6. Testimonials */}
      <Testimonials />

      {/* 🔸 7. Contact Form */}
      <ContactForm />

      {/* 🔸 8. Contact Details */}
      <div
        style={{
          backgroundColor: "#f5f3f0",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "1000px",
          margin: "40px auto",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ color: "#1c2d5a", marginBottom: "16px" }}>📞 Contact Details:</h3>
        <p><strong>Jagdishbhai Pithiya</strong></p>
        <p>📱 9898812423</p>
        <p>📧 jagdishbhai.pithiya@gmail.com</p>
        <p>📍 Main Chowk, Nagichana, Mangrol, Junagadh – 362240</p>
      </div>

      {/* 🔸 9. Developer Footer */}
      <div
        style={{
          backgroundColor: "#e6f0ff",
          padding: "30px",
          borderRadius: "12px",
          maxWidth: "1000px",
          margin: "30px auto 60px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h4 style={{ color: "#1c2d5a", marginBottom: "16px" }}><strong>👨‍💻 Developer Details:</strong></h4>
        <p><strong>Keval Pithiya</strong></p>
        <p>📱 8758787136</p>
        <p>📧 kevala053@gmail.com</p>
        <p>
          Site designed & developed by Keval Ahir — Full‑Stack Developer & Data Analyst.
          Need a modern site? Feel free to reach out!
        </p>
      </div>
    </div>
  );
};

export default Home;
