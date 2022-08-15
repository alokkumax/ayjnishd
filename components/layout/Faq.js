import React from "react";
import Script from "next/script";
const Faq = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
    function openCity(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
    document.getElementById("defaultOpen").click();
  `,
        }}
      />
      <section id="faq">
        <div className="container">
          <h3 className="heading">F.A.Q</h3>

          <center>
            <div className="row faqmenu my-3">
              <div className="col">
                <div
                  className="tablinks"
                  onclick="openCity(event, 'Scheme')"
                  id="defaultOpen"
                >
                  <i
                    className="fa fa-sun-o"
                    aria-hidden="true"
                    id="faqmenulinks"
                  ></i>
                  Scheme
                </div>
              </div>
              <div className="col">
                <div
                  className="tablinks"
                  onclick="openCity(event, 'Institute')"
                  id="defaultOpen"
                >
                  <i
                    className="fa fa-cube"
                    aria-hidden="true"
                    id="faqmenulinks"
                  ></i>
                  Institute
                </div>
              </div>
              <div className="col">
                <div
                  className="tablinks"
                  onclick="openCity(event, 'Product')"
                  id="defaultOpen"
                >
                  <i
                    className="fa fa-rocket"
                    aria-hidden="true"
                    id="faqmenulinks"
                  ></i>
                  Product
                </div>
              </div>
              <div className="col">
                <div
                  className="tablinks"
                  onclick="openCity(event, 'Eligibility')"
                  id="defaultOpen"
                >
                  <i
                    className="fa fa-file-text"
                    aria-hidden="true"
                    id="faqmenulinks"
                  ></i>
                  Eligibility
                </div>
              </div>
            </div>
          </center>
          <div className="faqcontainer">
            {/* SCHEME SECTION */}
            <section id="Scheme" className="tabcontent">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>What is a Payment Gateway?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h5 className="faqcardheading">
                        What is a Payment Gateway?
                      </h5>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>
                        Does Instapay provide international payments support?
                      </b>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* INSTITUTE SECTION */}
            <section id="Institute" className="tabcontent">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>What is a Payment Gateway?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h5 className="faqcardheading">
                        What is a Payment Gateway?
                      </h5>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>
                        Does Instapay provide international payments support?
                      </b>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* PRODUCT SECTION */}
            <section id="Product" className="tabcontent">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>What is a Payment Gateway?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h5 className="faqcardheading">
                        What is a Payment Gateway?
                      </h5>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>
                        Does Instapay provide international payments support?
                      </b>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* ELIGIBILITY SECTION */}
            <section id="Eligibility" className="tabcontent">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>What is a Payment Gateway?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h5 className="faqcardheading">
                        What is a Payment Gateway?
                      </h5>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>
                        Does Instapay provide international payments support?
                      </b>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      <i className="fa fa-circle" id="faiconcolorfaqdrop"></i>
                      <span>&nbsp;&nbsp;</span>
                      <b>Does Instapay provide national payments support?</b>
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body parafix">
                      <h3 className="faqcardheading">
                        What is a Payment Gateway?
                      </h3>
                      <p>
                        A payment gateway is an ecommerce service that processes
                        online payments for online as well as offline
                        businesses. Payment gateways help accept payments by
                        transferring key information from their merchant
                        websites to issuing banks, card associations and online
                        wallet players.
                      </p>
                      <p>
                        Payment gateways play a vital role in the online
                        transaction process, which is the realisation of value,
                        and hence are seen as an important pillar of ecommerce.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
