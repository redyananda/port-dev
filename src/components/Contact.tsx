import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2>
        my <span style={{ color: "#c65040" }}>Inbox</span>
      </h2>
      <div className="contact-container">
        <div className="contact-img">
          <img src="./contact-img.webp" alt="" />
        </div>
        <div>
          <div className="contact-container-content">
            <p>Name</p>
            <input type="text" className="input-short" />
            <p>E-Mail</p>
            <input type="email" className="input-short" />
            <p>Messages</p>
            <textarea className="input-long" rows={5} />
          </div>
          <button className="contact-btn">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
