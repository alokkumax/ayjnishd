import { React, useEffect } from "react";
import Image from "next/image";
import logo from "../../images/logo-sih.png";
import { AiOutlineSound } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";

const message = {
  EnglishText:
    "What is a cochlear implant? The cochlear implant is a prosthetic device, a part of which is surgically implanted inside the cochlea. Cochlear implants have been found to be beneficial for children and adults with severe to profound hearing loss and steeply sloping hearing loss who do not benefit adequately with hearing aids but have an intact auditory nerve. While a hearing aid provides amplified sound energy to the ear, the cochlear implant directly provides electrical stimulation to the nerve endings in the cochlea. How does a cochlear implant work? A Cochlear implant has an externally worn device which includes the microphone, speech processor and transmitting coil and an internal device which is surgically implanted in the skull and cochlea. The internal device consists of the receiver stimulator package and the electrodes.",

  HindiText:
    "कर्णावत प्रत्यारोपण क्या है? कॉक्लियर इम्प्लांट एक प्रोस्थेटिक डिवाइस है जिसका एक हिस्सा कोक्लीअ के अंदर शल्य चिकित्सा द्वारा प्रत्यारोपित किया जाता है। कर्णावर्त प्रत्यारोपण उन बच्चों और वयस्कों के लिए फायदेमंद पाया गया है,जिन्हें गंभीर से गंभीर हानि और तेजी से झुकी हुई श्रवण हानि होती है, जो श्रवण यंत्रों के साथ पर्याप्त रूप से लाभान्वित नहीं होते हैं, लेकिन एक अक्षुण्ण श्रवण तंत्रिका है। जबकि एक हियरिंग एड कान को प्रवर्धित ध्वनि ऊर्जा प्रदान करता है, कर्णावर्त प्रत्यारोपण सीधे कोक्लीअ में तंत्रिका अंत को विद्युत उत्तेजना प्रदान करता है। कॉक्लियर इम्प्लांट कैसे काम करता है? कॉक्लियर इम्प्लांट में एक बाहरी रूप से पहना जाने वाला उपकरण होता है जिसमें माइक्रोफ़ोन, स्पीच प्रोसेसर और ट्रांसमिटिंग कॉइल और एक आंतरिक उपकरण शामिल होता है जिसे शल्य चिकित्सा द्वारा खोपड़ी और कोक्लीअ में प्रत्यारोपित किया जाता है। आंतरिक उपकरण में रिसीवर उत्तेजक पैकेज और इलेक्ट्रोड होते हैं।",
};

const textToSpeech = (lang) => {
  console.log(lang);
  if (lang == "eng") {
    let utterance = new SpeechSynthesisUtterance(message.EnglishText);
    speechSynthesis.speak(utterance);
  } else if (lang == "hin") {
    let utterance = new SpeechSynthesisUtterance(message.HindiText);
    utterance.voice = speechSynthesis.getVoices().at(12);
    speechSynthesis.speak(utterance);
  }
};

export default function Navbar(props) {
  //Google Translator Code Here:
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  var duplicate_google_translate_counter = 0;
  const googleTranslateElementInit = () => {
    if (duplicate_google_translate_counter == 0) {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages:
            "en,hi,mr,te,ta,as,bn,brx,doi,gu,kn,ks,gom,mai,ml,mni,ne,or,pa,sa,sat,sd,ur",
        },
        "google_translate_element"
      );
    }
    duplicate_google_translate_counter++;
  };
  //Google function ends here

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link href="/">
            <a className="navimglink">
              <Image src={logo} width={120} alt="" height={50} />
            </a>
          </Link>

          <Link href="/">
            <a className="navimglink">
              <h1 className="navbar-brand mx-3 text-dark" href="#">
                AYJNISHD
              </h1>
            </a>
          </Link>
          <button
            className="navbar-toggler text-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <HiMenu className="navbar-toggler-icon" />
          </button>
          <div
            className=" collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-end ">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={`nav-link ${
                      props.active === "Home" ? "active" : ""
                    }`}
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="about"
                  className={`nav-link dropdown-toggle ${
                    props.active === "About" ? "active" : ""
                  }`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/about/aboutthescheme">
                      <a type="button" className="dropdown-item">
                        About the Scheme
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/adipscheme">
                      <a className="dropdown-item" href="#">
                        ADIP Scheme
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/cicandidacy">
                      <a className="dropdown-item" href="#">
                        CI Candidacy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/institute">
                      <a className="dropdown-item" href="#">
                        Institute{" "}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about/copyrightact">
                      <a className="dropdown-item" href="#">
                        Copyright Scheme
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    props.active === "Apply" ? "active" : ""
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Apply
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/apply/cienrollment">
                      <a className="dropdown-item" href="#">
                        CI Surgery Enrollment{" "}
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/apply/requestforaudiologist">
                      <a className="dropdown-item" href="#">
                        Request for Audiologist
                      </a>
                    </Link>
                  </li>
                  {/* <li><hr className="dropdown-divider"/></li> */}
                  <li>
                    <Link href="/apply/empanelment">
                      <a className="dropdown-item" href="#">
                        Empanelment of Hospitals
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    props.active === "Login" ? "active" : ""
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Login{" "}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/login/surgicalreport">
                      <a className="dropdown-item" href="#">
                        Surgical Report
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/login/activation">
                      <a className="dropdown-item" href="#">
                        Activation &amp; Mapping
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/login/checkappstatus">
                      <a className="dropdown-item" href="#">
                        Check Application Status
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/login/checkappdetails">
                      <a className="dropdown-item" href="#">
                        Check Application Details
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    props.active === "Contact" ? "active" : ""
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contact
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/contact/contactus">
                      <a className="dropdown-item" href="#">
                        Contact Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/feedback">
                      <a className="dropdown-item" href="#">
                        Feedback
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact/regionalcenters">
                      <a className="dropdown-item" href="#">
                        Regional Centres
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="tel:+917384999670">
                      <a className="dropdown-item">Call Us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:abhinanda361@gmail.com">
                      <a className="dropdown-item">Mail Us</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className={`nav-link dropdown-toggle ${
                    props.active === "Others" ? "active" : ""
                  }`}
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Others
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/others/report">
                      <a className="dropdown-item" href="#">
                        Report of Events
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/others/duration">
                      <a className="dropdown-item" href="#">
                        Duration of Therapy
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/others/guidance">
                      <a className="dropdown-item" href="#">
                        Guidance &amp; Support
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/others/pre-post">
                      <a className="dropdown-item" href="#">
                        Pre &amp; Post Surgery
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/others/ciprocessor">
                      <a className="dropdown-item" href="#">
                        CI Processor Manual
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Google Translate ID: */}
              <div id="google_translate_element"></div>
              <div className="translate" id="google_translate_element"></div>
              {/* google div ends here */}
              <li className="nav-item">
                <Link href="/text-to-speech">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    // data-bs-toggle="dropdown"
                    // aria-expanded="false"
                  >
                    <BsSearch />
                  </a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <AiOutlineSound
                    onClick={() => {
                      if (speechSynthesis.speaking) {
                        speechSynthesis.cancel();
                      }
                    }}
                  />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      value="eng"
                      onClick={(event) => {
                        textToSpeech(event.target.value);
                      }}
                    >
                      English
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      href="#"
                      value="hin"
                      onClick={(event) => {
                        textToSpeech(event.target.value);
                      }}
                    >
                      Hindi
                    </button>
                  </li>
                </ul>
              </li>

              {/* Add  */}
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FiPhoneCall
                   id="phoneicon"
                    onClick={() => {
                      if (speechSynthesis.speaking) {
                        speechSynthesis.cancel();
                      }
                    }}
                  />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="tel:9883505330"
                      className="dropdown-item"
                      // value="eng"
                      // onClick={(event) => {
                      //   textToSpeech(event.target.value);
                      // }}
                    >
                      Call Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="mailto:soumwadeepguha@gmail.com"
                      value="hin"
                      // onClick={(event) => {
                      //   textToSpeech(event.target.value);
                      // }}
                    >
                      Mail Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      value="hin"
                      // onClick={(event) => {
                      //   textToSpeech(event.target.value);
                      // }}
                    >
                      Chat With Us
                    </a>
                  </li>
                </ul>
              </li> */}
              {/* Phone End */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
