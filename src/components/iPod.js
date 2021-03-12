import React from 'react';
import ZingTouch from 'zingtouch';
import IpodScreen from './iPodScreen';
import './static/iPod.css'

class iPod extends React.Component {
    // state object
    state = { selected: 0, currentPos: 1, angle: 0 };

    // mounts the circular control interface to the rotateEvent of ZingTouch module
    componentDidMount() {
        let region = document.getElementsByClassName('controls');
        this.rotateEvent(region);
    }

    // The rotate event function which changes the select div based on the angle changed
    rotateEvent(e) {
        let region = e[0];
        const newRegion = new ZingTouch.Region(region);
        newRegion.bind(region, 'rotate', (e) => {
            this.setState({angle: this.state.angle + e.detail.distanceFromLast });
            if(this.state.angle > 30 ) {
                if (this.state.currentPos !== 4 && this.state.selected !== 2)
                    this.setState(() => ({currentPos: this.state.currentPos + 1}));
                else if(this.state.currentPos !== 3 && this.state.selected === 2)
                    this.setState(() => ({currentPos: this.state.currentPos + 1}));
                else
                    this.setState(() => ({currentPos: 1}));
                this.setState({angle: 0});
            }
            else if(this.state.angle < (-30)) {
                if (this.state.currentPos === 1 && this.state.selected !== 2)
                    this.setState(() => ({currentPos: 4}));
                else if(this.state.currentPos === 1 && this.state.selected === 2)
                    this.setState(() => ({currentPos: 3}));
                else
                    this.setState(() => ({currentPos: this.state.currentPos === - 1}));
                this.setState({angle: 0});
            }
        });
    }

    //render method
    render() {
        return (
            <div className='container'>
                <div className="ipod">
                    <div className="screen">
                        <IpodScreen primary={this.state.currentPos} selected={this.state.selected}/>
                    </div>
                    <div className="controls">
                        <div className="item-1"
                             onClick={() => this.setState({selected: 0})}>
                            <strong>MENU</strong>
                        </div>
                        <div className="item-2"><i className="fas fa-fast-forward" /></div>
                        <div className="item-3"><i className="fas fa-fast-backward" /></div>
                        <div className="item-4">
                            <div className="img">
                                <i className="fas fa-play" />
                            </div>
                            <div className="img">
                                <i className="fas fa-pause" />
                            </div>
                        </div>
                        <div className="button"
                             onClick={() => this.setState({selected: this.state.currentPos})}
                        />
                    </div>
                </div>
            </div>
        )
    };
}

export default iPod;