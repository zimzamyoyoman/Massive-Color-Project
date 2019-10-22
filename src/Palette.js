import React, { Component } from 'react';
import './Palette.css';
import ColorBox from './ColorBox';
import Navbar from './Navbar';


class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(newLevel) {
        this.setState({ level: newLevel })
    }

    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name} />
        ));

        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} />
                {/* Navbar goes here */}
                <div className="Palette-colors">
                    {colorBoxes}
                </div>
                {/* Footer eventually */}
            </div>
        )
    }
}

export default Palette;
