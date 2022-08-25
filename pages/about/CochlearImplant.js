import React from "react";
import Cochlear1 from "../../images/cochlean1.png";
import Cochlear2 from "../../images/cochlean2.png";
import Image from "next/image";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
const CochlearImplant = () => {
  return (
    <>
    <Navbar active="Home"/>
      <div className="container my-5">
        <div className="row">
          
          <div className="col-md-8 col-12">
            <h2>What is a cochlear implant?</h2>
            <p>
              The cochlear implant is a prosthetic device, a part of which is
              surgically implanted inside the cochlea. Cochlear implants have
              been found to be beneficial for children and adults with severe to
              profound hearing loss and steeply sloping hearing loss who do not
              benefit adequately with hearing aids but have an intact auditory
              nerve. While a hearing aid provides amplified sound energy to the
              ear, the cochlear implant directly provides electrical stimulation
              to the nerve endings in the cochlea.
            </p>
            <h2>How does a cochlear implant work?</h2>
            <p>
              A Cochlear implant has an externally worn device which includes
              the microphone, speech processor and transmitting coil and an
              internal device which is surgically implanted in the skull and
              cochlea. The internal device consists of the receiver stimulator
              package and the electrodes.
            </p>
          </div>
          <div className="col-md-4 col-12 d-column-center">
            <Image
              src={Cochlear1}
              width="500px"
              height="250px"
              alt="cochlear1"
            />
          </div>
        </div>
        <div className="row">
        <div className="col-md-8 col-12">
        <h2>Working of a cochlear implant:</h2>
        <ul>
          <li>Sound is picked up by a microphone placed on the ear.</li>
          <li>
            The microphone converts the sound into electrical energy. This
            electrical signal is transmitted through a cable to the speech
            processor.
          </li>
          <li>
            The speech processor may be a body worn device or a ear level
            device. It analyses and digitises the sound into coded signals. This
            coding is done by the processor depending on how it is programmed.
            The speech processor decides how much current is to be sent into the
            cochlea so that the wearer will hear the sound. Different types of
            speech coding strategies are available on speech processors.
          </li>
          <li>
            The coded signal from the speech processor is sent to the
            transmitting coil worn on the head. This coil is held in place with
            a magnet. The transmitting coil sends the coded signal across the
            skin via radio frequency link, to the receiver stimulator package.
          </li>
          <li>
            The receiver- stimulator package is surgically fitted in the mastoid
            bone of the skull just behind the ear. The receiver stimulator
            package contains a magnet so that the transmitting coil and receiver
            are aligned with each other without any direct contact through the
            skin.
          </li>
          <li>
            The signal from the receiver stimulator package is sent to the
            electrode array which has been surgically put into the scala tympani
            of the cochlea. (Given below is a picture of an electrode array. The
            black bands are the electrodes)
          </li>
        </ul></div>

        <div className="col-md-4 col-12 d-column-center">
          <Image src={Cochlear2} width="500px" height="250px" alt="cochlear2" />
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default CochlearImplant;
