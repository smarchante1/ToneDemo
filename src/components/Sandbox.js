import "./BasicKeys.css"
import React from 'react';
import * as Tone from "tone";


const Sandbox = () => {

    // We start by initializing an new Synth instrument
    
    const synth = new Tone.Synth().toDestination();

    // Now we must create a function to trigger a note to sound

    // function playNote(note) {
    //   synth.triggerAttackRelease(`${note}4`, "8n");
    // }

    return (
      <div className="App">

        <div className="page-content">
            <h1>Code Sandbox</h1>
            <hr />
        
            <div className="content-container">
                <h3>Mapping Tone Notes To Buttons</h3>
                <p>Let's practice mapping notes to a button using an  onClick handler.</p>

                <p>We can pass a note in as a paramater to our function, and then pass it in our anonymous onClick function.</p>
              
                <div className="generic-button-container">
                  <h2>Single Button:</h2>
                  <p>Try Passing in These Notes: C,D,E,F,G,A,B</p>
                  {/* <button className="generic-button" onClick={() => playNote("A")}>A</button> */}
                </div>
            </div>
        </div>

        <div className="multiple-button-heading">
            <h2>Multiple Buttons:</h2>
        </div>
        
        <div className="note-wrapper">
        
        
            {/* <button className="note" onClick={() => playNote("C")}>
              <span>C</span>
            </button>
            <button className="note" onClick={() => playNote("D")}>
              <span>D</span>
            </button>
            <button className="note" onClick={() => playNote("E")}>
              <span>E</span>
            </button>
            <button className="note" onClick={() => playNote("G")}>
              <span>G</span>
            </button>
            <button className="note" onClick={() => playNote("A")}>
              <span>A</span>
            </button> */}


        </div>

      </div>
    );

}

export default Sandbox