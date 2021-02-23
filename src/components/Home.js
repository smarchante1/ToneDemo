import React from 'react';
import './Home.css'
import { CopyBlock, shadesOfPurple } from "react-code-blocks";

const BasicTones = () => { 
    
    const copy =  <CopyBlock
        text=
        {`// Tester comment
        import * as Tone from 'tone'
        
        const synth = new Tone.Synth().toDestination();

        synth.triggerAttackRelease("C4", "8n");
        `
        }
            language={'jsx'}
            showLineNumbers={false}
            theme={shadesOfPurple}
        />; 
 

    return(
        <div>
            <h1>I Tone.js Basics</h1>
            <p className="content-container">Playing your first note in the browser.</p>
            <div>
                <p className="code-content">{copy}</p>
            </div>
        </div>
    );
}

export default BasicTones