
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
    return <span>Browser doesn&post support speech recognition.</span>;
  }
  var ask_cochlear="Cochlera implants are"
  var user_said=""
  if(document.getElementById('content')==null)
    user_said=""
  else
    user_said=document.getElementById('content').innerText;
  //console.log(user_said);
 getResponse(user_said);
  return (
    <div>
      <center>
      <h3 id="mictext"><b>Microphone: {listening ? 'on' : 'off'}</b></h3>
      <p className='ptransript' id='content'>{transcript}</p>
      <button onClick={SpeechRecognition.startListening} className="startbut">Start</button>&nbsp;&nbsp;
      <button onClick={SpeechRecognition.stopListening} className="startbut">Stop</button>&nbsp;&nbsp;
      <button onClick={resetTranscript} className="startbut">Reset</button>&nbsp;&nbsp;</center>
      <h1>{name}</h1>
    </div>
  );
};
export default App;