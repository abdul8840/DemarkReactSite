import React, { Component } from "react";
import "../../styles/enquiry.css";
import inqImg from '../../images/c2.png'

class InquiryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      submitted: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For this example, we'll simply set 'submitted' to true
    this.setState({ submitted: true });
  };

  render() {
    const { name, email, message, submitted } = this.state;

    return (
      <>
        <section className="inq">
          <div className="container">
            <div className="service_top-content">
              <h6 className="subtitle">Inquiry Form</h6>
              <h2>Get In Touch <span className="highlight">With Us</span></h2>
            </div>
            <div className="inquiry-form-container">
              <div className="form-column">
                {submitted ? (
                  <p>Thank you for your inquiry! We'll get back to you soon.</p>
                ) : (
                  <form className="inquiry-form" onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={this.handleChange}
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.handleChange}
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Message"
                      value={message}
                      onChange={this.handleChange}
                      required
                    ></textarea>
                    <button type="submit">Submit</button>
                  </form>
                )}
              </div>
              <div className="image-column">
                {/* Replace the URL with your image */}
                <img
                  src={inqImg}
                  alt="Inquiry Image"
                />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default InquiryForm;
