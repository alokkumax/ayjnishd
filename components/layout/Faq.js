import React from "react";
import { FiSun } from "react-icons/fi";
import { BsMoon } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import { AiOutlineQuestion } from "react-icons/ai";

const schemeFaq = [
  {
    id: 1,
    faq: "What is a cochlear implant?",
    des: "The cochlear implant is a prosthetic device, a part of which is surgically implanted inside the cochlea. Cochlear implants have been found to be beneficial for children with severe to profound hearing loss in both ears who do not benefit adequately with hearing aids but have an intact auditory nerve. While a hearing aid provides amplified sound energy to the ear, the cochlear implant directly provides electrical stimulation to the nerve endings in the cochlea",
  },
  {
    id: 2,
    faq: "What does the surgery involve?",
    des: "The surgery for the cochlear implant may take about 1-2 hours. The surgeon makes an incision behind the pinna and then surgically implants the electrodes inside the cochlea and the receiver-stimulator are implanted in the mastoid bone behind the ear. The patient may have to remain in hospital for 2-3 days.",
  },
  {
    id: 3,
    faq: "Will a cochlear implant restore normal hearing in children who are deaf?",
    des: "No, a cochlear implant does not restore normal hearing. It is a communication tool but not a 'cure' for deafness. An implant, supplemented with Speech& Language therapy and Auditory Verbal therapy, can help the children recognize sound, including speech to use it for communication and education purposes.",
  },
  {
    id: 4,
    faq: "What sounds can be heard with a cochlear implant?",
    des: "Your child will probably hear most sounds of medium-to-high loudness. Patients often report that they can hear footsteps, slamming of doors, ringing telephones car engines, barking dogs, crackers, and various other environmental sounds.",
  },
];
const instituteFaq = [
  {
    id: 1,
    faq: "What is a Institute?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 2,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 3,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
  {
    id: 4,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
];
const productfaq = [
  {
    id: 1,
    faq: "My child’s hearing aid(s) did not help him/her very much. Will a cochlear implant be better?",
    des: "It is difficult to predict how each child will do with a cochlear implant, because everyone is different. During the cochlear implant evaluation, the audiologist and/or cochlear implant surgeon can discuss realistic expectations with you. Associated disabilities can also be a deterrent to development of Speech & Language.",
  },
  {
    id: 2,
    faq: "Can a MRI be done with cochlear implant?",
    des: "Yes, with restrictions. The cochlear implant internal device has a magnet that can be removed so that you can go through certain MRI machines. If you need to have a MRI, discuss your options with your Doctor/CI centre.",
  },
  {
    id: 3,
    faq: "Can my child’s X-ray or CT scan possible with cochlear implant?",
    des: "Your child will probably hear most sounds of medium-to-high loudness. Patients often report that they can hear footsteps, slamming of doors, ringing telephones car engines, barking dogs, crackers, and various other environmental sounds.",
  },
  {
    id: 4,
    faq: "Will my child outgrow the internal device and require a new one?",
    des: "No, the cochlea is fully formed at birth and the skull structures achieve almost full growth by age 2. The electrode array is designed to accommodate skull growth in children.",
  },
];
const Eligibilityfaq = [
  {
    id: 1,
    faq: "Can children with cochlear implants identify environmental noises as well as speech?",
    des: "Cochlear implants provide a wide range of sound information. Performance in speech perception testing varies among individuals. With time and training, most patients understand more speech than with hearing aids and many communicate by telephone or enjoy music.",
  },
  {
    id: 2,
    faq: "Can children with cochlear implants swim, shower and participate in sports?",
    des: "Yes, people with implants can swim, shower and participate in virtually all types of sport activities when they are not wearing the external equipment. Just as you would remove your hearing aids, you would take off the outside components (the processor and headpiece) before going swimming or getting your hair wet. Participation in all other athletic activities is unrestricted, although protective headgear is always recommended.",
  },
  {
    id: 3,
    faq: "Can the implantee hear immediately after surgery ?",
    des: "After the surgery, one has to wait for the scar to heal. This period is approximately 2 to 3 weeks. During this time, the implantee cannot hear through the implant because the external part is not coupled to it yet. After this healing period is over, the implant and processor are programmed or mapped for the first time. This is called the ‘switch on’.",
  },
  {
    id: 4,
    faq: "What is a Payment Gateway?",
    des: "A payment gateway is an ecommerce service that processes online payments for online as well as offline businesses. Payment gateways help accept payments by transferring key information from their merchant websites to issuing banks, card associations and online wallet players.",
  },
];
const Faq = () => {
  return (
    <>
      <section id="faq">
        <div className="container">
          <h3 className="heading">F.A.Q</h3>

          <center>
            <ul className="nav nav-tabs faqmenu" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  <FiSun />
                  &nbsp;&nbsp;Scheme
                </button>
              </li>

              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  <BsMoon />
                  &nbsp;&nbsp;Institute
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  <FiBox />
                  &nbsp;&nbsp;Product
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="eligibilty-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#eligibilty"
                  type="button"
                  role="tab"
                  aria-controls="eligibilty"
                  aria-selected="false"
                >
                  <AiOutlineQuestion />
                  &nbsp;&nbsp;Eligibility
                </button>
              </li>
            </ul>
          </center>

          <div className="col mt-5">
            <div className="tab-content " id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                {schemeFaq.map((item, key) => (
                  <div
                    key={item.id}
                    className="accordion-item tab-pane fade show "
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapsescheme${key}`}
                        aria-expanded="true"
                        aria-controls={`#collapsescheme${key}`}
                      >
                        <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                        <span>&nbsp;&nbsp;</span>
                        <b>{item.faq}</b>
                      </button>
                    </h2>

                    <div
                      id={`collapsescheme${key}`}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body parafix">
                        <h5 className="faqcardheading">{item.faq}</h5>
                        <p>{item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
                  
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                {instituteFaq.map((item, key) => (
                  <div
                    key={item.id}
                    className="accordion-item tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseinstitute${item.id}`}
                        aria-expanded="true"
                        aria-controls={`collapseinstitute${item.id}`}
                      >
                        <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                        <span>&nbsp;&nbsp;</span>
                        <b>{item.faq}</b>
                      </button>
                    </h2>

                    <div
                      id={`collapseinstitute${item.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body parafix">
                        <h5 className="faqcardheading">{item.faq}</h5>
                        <p>{item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                {productfaq.map((item, key) => (
                  <div
                    key={item.id}
                    className="accordion-item tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseproduct${item.id}`}
                        aria-expanded="true"
                        aria-controls={`collapseproduct${item.id}`}
                      >
                        <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                        <span>&nbsp;&nbsp;</span>
                        <b>{item.faq}</b>
                      </button>
                    </h2>

                    <div
                      id={`collapseproduct${item.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body parafix">
                        <h5 className="faqcardheading">{item.faq}</h5>
                        <p>{item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="tab-pane fade"
                id="eligibilty"
                role="tabpanel"
                aria-labelledby="eligibilty-tab"
              >
                {Eligibilityfaq.map((item, key) => (
                  <div
                    key={item.id}
                    className="accordion-item tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapseEligibility${item.id}`}
                        aria-expanded="true"
                        aria-controls={`collapseEligibility${item.id}`}
                      >
                        <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                        <span>&nbsp;&nbsp;</span>
                        <b>{item.faq}</b>
                      </button>
                    </h2>

                    <div
                      id={`collapseEligibility${item.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body parafix">
                        <h5 className="faqcardheading">{item.faq}</h5>
                        <p>{item.des}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
