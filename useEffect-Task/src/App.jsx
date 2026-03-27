import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'
// import AssistantVideo from "./AssistantVideo.jsx";
import VoiceInput from './VoiceInput.jsx'

function App() {
 

  return (
    <>
      <div>
        {/* <AssistantVideo /> */}
        <VoiceInput />
      </div>
    </>
  )
}

export default App
