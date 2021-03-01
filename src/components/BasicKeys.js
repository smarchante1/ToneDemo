import "./BasicKeys.css"
import React from 'react';
import * as Tone from "tone";
import { CopyBlock, shadesOfPurple } from "react-code-blocks";


const BasicKeys = () => {

    const firstNote =  <CopyBlock
      text=
      {`   
    import * as Tone from 'tone'
      
      // create a variable for a new synth instrument
      const synth = new Tone.Synth().toDestination();

      // create a function to handle a click event.
      synth.triggerAttackRelease("A4", "8n");
      `
      }
          language={'jsx'}
          showLineNumbers={false}
          theme={shadesOfPurple}
    />;

    const eventFunction =  <CopyBlock
      text=
      {`   
    import * as Tone from 'tone'
      
      // create a function to handle a click event.
      function playNote(note) {
        synth.triggerAttackRelease(\`\${note}4\`\, "8n");
      }
      `
      }
          language={'jsx'}
          showLineNumbers={false}
          theme={shadesOfPurple}
    />;

    const clickHandler =  <CopyBlock
      text=
      {`   
    import * as Tone from 'tone'

      // create a function to handle a click event.
      <button className="note" onClick={() => playNote("A")}>
       A
      </button>
      `
      }
          language={'jsx'}
          showLineNumbers={false}
          theme={shadesOfPurple}
    />;

    const synth = new Tone.Synth().toDestination();

    function playNote(note) {
      synth.triggerAttackRelease(`${note}4`, "8n");
    }

    return (
      <div className="App">

        <div className="page-content">
            <h1>II Mapping Notes to Buttons</h1>
            <hr />
        
            <div className="content-container">
                <h3>A. Handling Clicks</h3>
                <p>First, recall how to create a new synth variable:</p>
                <p className="code-content">{firstNote}</p>

                <p>We can map an indvidual note to a button by using an event handler. Let's make a function to handle a click event.</p>                
                <p className="code-content">{eventFunction}</p>
            </div>

          <br />
          <br />
          <br />
            <div className="content-container">
                <h3>B. Mapping to Button</h3>
                <p>Now that we've got a function, let's map it to a button as an onClick handler.</p>

                <p className="code-content">{clickHandler}</p>
                <p>Here we use an arrow function and pass the playNote function we created earlier as the body. Inside of the playNote function, we pass the note we want to play as an argument.</p>
                <div className="generic-button-container">
                  <p>Here's our result:</p>
                  <button className="generic-button" onClick={() => playNote("A")}>A</button>
                </div>
            </div>
        </div>
        
        <div className="note-wrapper">
        <p className="synth-keyboard">With multiple keys:</p>

            <button className="note" onClick={() => playNote("C")}>
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
            </button>


        </div>

      </div>
    );

}

export default BasicKeys