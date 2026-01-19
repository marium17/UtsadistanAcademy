import React from 'react'

export default function Footer(){
  return (
    <div><footer
  className="w-100 text-center py-4"
  style={{
    backgroundColor: "#002c6c", // dark blue
    color: "#fff",
    marginTop: "40px",
  }}
>
  {/* Social Icons */}
  <div className="d-flex justify-content-center gap-4 mb-3">
    <a
      href="https://www.facebook.com/share/19iY9ZqfPe/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#fff" }}
    >
      <i className="bi bi-facebook" style={{ fontSize: "1.5rem" }}></i>
    </a>
    <a
      href="https://www.instagram.com/ustadistan_academy_sirfurqan?igsh=MXdkaXpxYnhrdmEydw=="
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#fff" }}
    >
      <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i>
    </a>
    <a
      href="https://wa.me/923001234567"
      target="_blank"
      rel="noopener noreferrer"
      style={{ color: "#fff" }}
    >
      <i className="bi bi-whatsapp" style={{ fontSize: "1.5rem" }}></i>
    </a>
  </div>

  {/* Contact Info */}
  <p style={{ margin: "0", fontSize: "0.95rem" }}>
    📞 +92 314 1093584 | 📧 ustadistanacademy@gmail.com
  </p>

  {/* Copyright */}
  <p style={{ marginTop: "8px", fontSize: "0.85rem", opacity: "0.8" }}>
    © {new Date().getFullYear()} Ustadistan Academy. All Rights Reserved.
  </p>
</footer>
</div>
  )
}

