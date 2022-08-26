
import 'regenerator-runtime/runtime';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// import './style.css';
 
const App = () => {
  function getResponse(content) {
    axios.post("https://chatbot-sih-new.herokuapp.com/model/parse", {
      "text": `${content}`
    }).then((data)=>{
      // console.log(data.data);
      setName(data.data.intent.name)
    })
  }
  const [name, setName] = useState('');
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }
  var response=""
  var user_said=""
  if(document.getElementById('content')==null)
    user_said=""
  else
    user_said=document.getElementById('content').innerText;
  //console.log(user_said);
 getResponse(user_said);
 if(name=="ask_cochlear")
  response="The cochlear implant is a prosthetic device, a part of which is surgically implanted inside the cochlea.\nIt is a device to be used by someone with almost complete hearing loss. While a hearing aid provides amplified sound energy to the ear,\n the cochlear implant directly provides electrical stimulation to the nerve endings in the cochlea."
 else if(name=="bot_job")
  response="I am here to help you with your queries. You can ask me about:\n 1. What is cochlear implant?\n 2. How to apply?"
 
  
  return (
    <div>
      <center>
      <h3 id="mictext"><b>Microphone: {listening ? 'on' : 'off'}</b></h3>
      <p className='ptransript' id='content'>{transcript}</p>
      <button onClick={SpeechRecognition.startListening} className="startbut">Start</button>&nbsp;&nbsp;
      <button onClick={SpeechRecognition.stopListening} className="startbut">Stop</button>&nbsp;&nbsp;
      <button onClick={resetTranscript} className="startbut">Reset</button>&nbsp;&nbsp;</center>
      <h3><pre>{response}</pre></h3>
    </div>
  );
};
export default App;