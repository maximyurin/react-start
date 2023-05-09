import Counter from "./Counter";

function PersonContactInfo() {
  return (
    <div className="person-contact-info">
      <section>
        <Counter />
      </section>
      <header>
        <h3 className="person-header">Contact</h3>
      </header>
      <section>
        <div className="person-address">
          <h4 className="info-title">Address</h4>
          <p className="address">Krukivshina, Kiev Region, Ukraine</p>
        </div>
        <div className="person-phone">
          <h4 className="info-title">Phone</h4>
          <p className="person-phone-content">+380662497133</p>
        </div>
        <div className="person-email">
          <h4 className="info-title">E-mail</h4>
          <a href="mailto:maximyurinmusic@gmail.com">
            maximyurinmusic@gmail.com
          </a>
        </div>
        <div className="person-linkedin">
          <h4 className="info-title">Linkedin</h4>
          <a
            href="https://www.linkedin.com/in/maxim-yurin/"
            className="linkedin-link"
            target="_blank"
          >
            www.linkedin.com/in/maxim-yurin
          </a>
        </div>
      </section>
    </div>
  );
}

export default PersonContactInfo;
