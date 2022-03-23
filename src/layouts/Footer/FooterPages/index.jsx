import{
  FooterPattern,
  FooterLogo
} from '../../../utils/allImgs';
import Footer from '../Footer';

import SectionHeading from "../../../components/SectionHeading";

import '../Footer.scss';

import IcoName from '../../../data/data-layout/Footer/data-IcoName.json'
import TextFooter from '../../../data/data-layout/Footer/data-TextFooter.json'

const FooterPages = ({ClassSpanTitle=""}) => {
    return (

      <div className="footer-area bg-img mt-5" style={{backgroundImage: `url(${FooterPattern})`}}>
        {/* ##### Contact Area Start ##### */}
        <div className="contact_us_area section-padding-0-0" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <SectionHeading
                  title="Contact us"
                  text="Contact Us"
                  ClassSpanTitle={ClassSpanTitle}
                />

              </div>
            </div>
            {/* Contact Form */}
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="contact_form">
                  <form action="#" method="post" id="main_contact_form" noValidate>
                    <div className="row">
                      <div className="col-12">
                        <div id="success_fail_info" />
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="group fadeInUp" data-wow-delay="0.2s">
                          <input type="text" name="name" id="name" required />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Name</label>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="group fadeInUp" data-wow-delay="0.3s">
                          <input type="text" name="email" id="email" required />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="group fadeInUp" data-wow-delay="0.4s">
                          <input type="text" name="subject" id="subject" required />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="group fadeInUp" data-wow-delay="0.5s">
                          <textarea name="message" id="message" required defaultValue={""} />
                          <span className="highlight" />
                          <span className="bar" />
                          <label>Message</label>
                        </div>
                      </div>
                      <div className="col-12 text-center fadeInUp" data-wow-delay="0.6s">
                        <button type="submit" className="btn more-btn">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ##### Contact Area End ##### */}
      </div>
    );
}

export default FooterPages
