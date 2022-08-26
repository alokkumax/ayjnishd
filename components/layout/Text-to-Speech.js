import "regenerator-runtime/runtime";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import { FcBusinessman, FcBusinesswoman } from "react-icons/fc";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillStopCircleFill } from "react-icons/bs";

// import './style.css';

const App = () => {
  function getResponse(content) {
    axios
      .post("https://chatbot-sih-new.herokuapp.com/model/parse", {
        text: `${content}`,
      })
      .then((data) => {
        // console.log(data.data);
        setName(data.data.intent.name);
      });
  }
  const [name, setName] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }
  var response = "";
  var user_said = "";
  if (document.getElementById("content") == null) user_said = "";
  else user_said = document.getElementById("content").innerText;
  //console.log(user_said);
  getResponse(user_said);
  if (name == "ask_cochlear")
    response =
      "The cochlear implant is a prosthetic device, a part of which is surgically implanted inside the cochlea.\nIt is a device to be used by someone with almost complete hearing loss. While a hearing aid provides amplified sound energy to the ear,\n the cochlear implant directly provides electrical stimulation to the nerve endings in the cochlea.";
  else if (name == "bot_job")
    response =
      "I am here to help you with your queries. You can ask me about:\n 1. What is cochlear implant?\n 2. How to apply?";

  return (
    <>
      <section id="voiceassist">
        <center>
          <div className="miccontent">
            <h1>Use Your Microphone To Ask Your Query</h1>
            <h3 id="mictext">
              {listening ? <FaMicrophoneAlt /> : <FaMicrophoneAltSlash />}
            </h3>
            <button
              onClick={SpeechRecognition.startListening}
              className="btn btn-success"
              id="micbtn"
            >
              Start <AiFillCaretRight />
            </button>
            &nbsp;&nbsp;
            <button
              onClick={SpeechRecognition.stopListening}
              className="btn btn-danger"
              id="micbtn"
            >
              Stop <BsFillStopCircleFill />
            </button>
            &nbsp;&nbsp;
            <button
              onClick={resetTranscript}
              className="btn btn-warning"
              id="micbtn"
            >
              Reset <BiReset />
            </button>
            &nbsp;&nbsp;
            <div className="container">
              <div className="row">
                <div className="col-lg-2" id="micimg2">
                  <FcBusinessman />
                </div>
                <div className="col-lg-10">
                  <h6 className="ptransript" id='content'>
                    {transcript}
                  </h6>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10">
                  <h3 className="ptransript2">
                    <p>{response}</p>
                  </h3>
                </div>
                <div className="col-lg-2" id="micimgflex">
                  <FcBusinesswoman />
                </div>
              </div>
            </div>
          </div>
        </center>
      </section>
    </>
  );
};
export default App;
