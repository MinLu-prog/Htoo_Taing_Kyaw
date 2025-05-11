
import { Link } from 'react-router-dom';

const Contact = () => {

 

  return (
    <>
      {/* Page Header Start */}
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Contact Us</h2>
            </div>
            <div className="col-12">
              <Link to="/">Home</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
      {/* Page Header End */}

      {/* Contact Start */}
      <div className="contact wow fadeInUp">
        <div className="container">
          <div className="row  ">
            <div className="col-md-6">
              <div className="contact-info">
                <div className="contact-item">
                  <i className="flaticon-address"></i>
                  <div className="contact-text">
                    <h2>Location</h2>
                    <p>Zakabar Housing, Yangon</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="flaticon-call"></i>
                  <div className="contact-text">
                    <h2>Phone</h2>
                    <p>+95 965045594</p>
                    <p>+95 95041936</p>
                  </div>
                </div>
                <div className="contact-item">
                  <i className="flaticon-send-mail"></i>
                  <div className="contact-text">
                    <h2>Email</h2>
                    <p>htkengineers@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </div>
      {/* Contact End */}

      {/* Map Start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 p-0">
            <iframe
              title="Google Maps"
              style={{ width: "100%", height: "500px", border: "0" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488372.5660048514!2d96.0172333214862!3d16.91971980320978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c19495c25dbe81%3A0x8c2b5a0c3df5b3e3!2sMingaladon%2C%20Yangon!5e0!3m2!1sen!2smm!4v1715323921262!5m2!1sen!2smm" 
  width="600" 
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Map End */}
    </>
  );
};

export default Contact;