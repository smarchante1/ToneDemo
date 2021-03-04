import './PianoRoll.css'

const PianoRoll = () => {

    return(
        <div>
            <div className="roll-container">
                <div className="heading-container">
                    <h1>Piano Roll 🎹 </h1>
                    <button id='play-pause'>start</button>
                    <div className="grid" id="grid"></div>
                    <div className="grid" id="drum-grid"></div>
                    <div id="playback-controls">
                        <div id='tempo-group'>
                            <label for="tempo">set tempo</label>
                            <input placeholder='60' id="tempo" type="number" min="60" max="200" />
                        </div>
                        <div id='plus-minus-group'>
                            <button className="plus"><i className="fa fa-plus"></i></button>
                            <button className="minus"><i className="fa fa-minus"></i></button>
                        </div>
                        <button id="clear">clear</button>

                    </div>
                </div>
            </div>
            <p className="attribution">modified version of musicBoy2.0 from <a href="http://www.jakeloew.com">Jake Loew</a></p>

        </div>
    )
}

export default PianoRoll