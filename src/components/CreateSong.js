import { Song, Track, Instrument, Effect } from 'reactronica';
import React, { useState } from 'react';
import { CopyBlock, shadesOfPurple } from "react-code-blocks";
import "./BasicKeys.css"

const CreateSong = () => {
    const firstNote =  <CopyBlock
    text=
    {`   
  import { Song, Track, Instrument, Effect } from 'reactronica'
    `
    }
        language={'jsx'}
        showLineNumbers={false}
        theme={shadesOfPurple}
  />;

  const song =  <CopyBlock
    text=
    {`   
  import { Song, Track, Instrument, Effect } from 'reactronica'
    
    const DemoSong = () => {
      return (
        <Song isPlaying={play} bpm={110}>
            <Track
                steps={['Eb4','G4','F4','Ab4']}
                volume={-12}
            >
                <Instrument type="duoSynth" />
                <Effect type="reverb" />
            </Track>

            <Track
                steps={[null, ['A1'], null, ['A1']]}
                volume={-10}
            >
                <Instrument 
                type="pluckSynth" 
                envelope={{
                    attack: 0.001,
                    decay: 0.15,
                    sustain: 0,
                    release:  0.03
                }}
                />
            </Track>

            <Track
                steps={[['D1', 'D1', 'D1', 'D1']]}
            >
                <Instrument type="membraneSynth" />
            </Track>

        </Song>
      )
    }
    `
    }
        language={'jsx'}
        showLineNumbers={false}
        theme={shadesOfPurple}
  />;

    const [play, setPlay] = useState(false)
    const [disabled, setDisabled] = useState(true)

    function playSong() {
        setPlay(!play)
    }

    return (
        <div className="App">
            <div className="page-content">
                <h1>III Creating Songs</h1>
                <hr />
            
                <div className="content-container">
                    <h3>A. Reactronica</h3>
                    <p>Now that we've got the basics down, we can extend the default functionality of Tone.js with the help of libraries like Reactronica.</p>
                    <p className="code-content">{firstNote}</p>

                    <p>We can now use built in components to build "songs" utilizing core concepts from Tone.js. <b>Note:</b></p>                
                        <ul>
                            <li>Song must be the top level component</li>
                            <li>Each instrument must be defined with track components</li>
                        </ul>
                    <p className="code-content">{song}</p>

                <br />
                <br />
                <br />
        
                <button className="song-play" disabled={!disabled} onClick={playSong}>{play ? "Stop" : "Play"}</button>
                <Song isPlaying={play} bpm={120}>
                    <Track
                        steps={['Eb4','G4','F4','Ab4']}
                        volume={-12}
                    >
                        <Instrument type="duoSynth" />
                        <Effect type="reverb" />
                    </Track>

                    <Track
                        steps={[
                            null, ['A1'], null, ['A1']
                        ]}
                        volume={-10}
                    >
                        <Instrument 
                        type="pluckSynth" 
                        envelope={{
                            attack: 0.001,
                            decay: 0.15,
                            sustain: 0,
                            release:  0.03
                        }}
                        />
                    </Track>

                    <Track
                        steps={[
                            ['D1', 'D1', 'D1', 'D1']
                        ]}
                    >
                        <Instrument type="membraneSynth" />
                    </Track> 
                </Song>
                </div>
            </div>
        </div>
    )
}

export default CreateSong