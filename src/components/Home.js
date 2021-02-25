import React, { useState } from 'react';
import './Home.css'
import { CopyBlock, shadesOfPurple } from "react-code-blocks";
import * as Tone from 'tone'

const BasicTones = () => { 
    
    const firstNote =  <CopyBlock
        text=
        {`   
    import * as Tone from 'tone'
        
        // create a variable for a new synth instrument
        const synth = new Tone.Synth().toDestination();

        //  .triggerAttackRelease makes a note sound
        synth.triggerAttackRelease("A4", "8n");
        `
        }
            language={'jsx'}
            showLineNumbers={false}
            theme={shadesOfPurple}
        />; 

    const synthTypes = <CopyBlock
        text=
        {`   
    import * as Tone from 'tone'
        
        // FM Synth
        const fmSynth = new Tone.FMSynth().toDestination();

        //  .triggerAttackRelease makes a note sound
        fmSynth.triggerAttackRelease("A4", "8n");
        `
        }
        language={'jsx'}
        showLineNumbers={false}
        theme={shadesOfPurple}
         />; 

    const samplerCode = <CopyBlock
        text=
        {`   
    import * as Tone from 'tone'
        
        const player = 
        new Tone.Player("https://tonejs.github.io/audio/berklee/drum_low_1.mp3").toDestination();

        function playSample() {
            Tone.loaded().then(() => {
            player.start();
        });
        `
        }
        language={'jsx'}
        showLineNumbers={false}
        theme={shadesOfPurple}
         />; 
 

    const synth = new Tone.Synth().toDestination();
    const fmSynth = new Tone.FMSynth().toDestination();
    const amSynth = new Tone.AMSynth().toDestination();

    function playNote(note) {
        synth.triggerAttackRelease(`${note}4`, "8n");
    }

    function playFmNote(note) {
        fmSynth.triggerAttackRelease(`${note}4`, "8n");
    }

    function playAmNote(note) {
        amSynth.triggerAttackRelease(`${note}4`, "8n");
    }

    const player = new Tone.Player("https://tonejs.github.io/audio/berklee/drum_low_1.mp3").toDestination();

    function playSample() {
        Tone.loaded().then(() => {
        player.start();
        console.log('I WAS CLICKED')
    });
    }

    return(
        <div className="page-content">
            <h1>I Tone.js Basics</h1>
            <hr />
            <div className="content-container">
                <h3>A. Playing your first note in the browser</h3>
                <ul>
                    <li>What is a note?</li>
                    <li>What is a scale?</li>
                    <li>What is a attack? (This will help you understand what the function is doing)</li>
                </ul>
            </div>
            <div>
                <p className="code-content">{firstNote}</p>
            </div>
            <div className="content-container">
               <p> Let's hear it! (Typically with this code the sounds would play without a particular event)</p>

                <br />

                <button className="play-button" onClick={() => playNote("A")}><span>Play Note</span></button>
            </div>

            <br />
            <br />
            <br />
            <br />
            
            <div className="content-container">
                <h3>B. Tone.js Instruments</h3>
                <ul>
                    <li>What types of synths are available to us?</li>
                    <li>What is monophonic?</li>
                    <li>What is polyphonic?</li>
                </ul>
            </div>          
            <div>
                <p className="code-content">{synthTypes}</p>
            </div>
            <div className="content-container">
               <p> Let's hear how the FM Synth sounds!</p>

                <br />

                <button className="play-button" onClick={() => playFmNote("A")}><span>Play FM Note</span></button>

                <br />
                <br />

                <p>Now, let's hear how the AM Synth sounds shall we?</p>

                <br />

                <button className="play-button" onClick={() => playAmNote("A")}><span>Play AM Note</span></button>

            </div>

            <div className="content-container">
                <p>So far we've been listening to synth notes. But we won't win any grammy's that way. What other instruments can we have?</p>            
            </div>

            <br />
            <br />
            <br />
            <br />

            <div className="content-container">
                <h3>C. Sampler</h3>
                <ul>
                    <li>How can we use external sound files to create button samplers?</li>
                    <li>What does Tone.loaded().then() do?</li>
                </ul>
            </div>          
            <div>
                <p className="code-content">{samplerCode}</p>
            </div>
            <div className="content-container">
               <p>Awesome, let's listen to a drum sample.</p>

                <br />

                <button className="play-button" onClick={() => playSample()}><span>Play Drum Kick </span></button>

                <br />
                <br />
            </div>

        </div>
    );
}

export default BasicTones