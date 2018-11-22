import React, { Component } from 'react';
import ItemDetailsModal from './itemDetailsModal';
import PubSub from 'pubsub-js';

const style = {
    background: 'linear-gradient(lavender, lightgrey)',
    display: 'inline-block',
    width: '200px',
    margin: '13px',
    padding: '5px',
    height: '250px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px 0 #002B36, 0 6px 20px 0 #002B36',
    position: 'relative',
    overflow: 'auto'
};

const buttonStyle = {
	background: '#4CAF50', /* Green */
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    padding: '5px 10px',
    textAlign: 'center',
    textDecoration: 'none',
	display: 'inline-block',
    fontSize: '14px',
    margin: '2px 2px',
    cursor: 'pointer',
    WebkitTransitionDuration: '0.4s', /* Safari */
    transitionDuration: '0.4s',
	boxShadowhadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
};

const imageStyle = {
   maxWidth: '100%',
   maxHeight: '80%',
    margin: 'auto',
    overflow: 'hidden'
};

const captionStyle = {
    textAlign: 'center',
    color: 'black',
    fontSize: '14px',
    fontWeight: 'bold'
};

let images = require.context('../images', true);

class displayItem extends Component {

    constructor(props){
        super(props);
        this.state = {modalOpen: false};
    };

    componentDidMount() {
        this.token = PubSub.subscribe('modalClose', this.modalClosed);
    };

    modalClosed = (msg, data) => {
        this.setState({modalOpen: data.open});
    };

    openModal = () => {
        this.setState({modalOpen: true});
    };
    render(){
        let { image, title, description, options} = this.props;
        let img_src = images(image);
        return(
            <div style={style}>
                <div style={imageStyle}>
                    <img src={img_src} style={imageStyle} onClick={this.openModal} alt=""  />
                </div>
                <div style={captionStyle}>{title}</div>
                <div style={captionStyle}>
                    <button className="btn btn-action" style= {buttonStyle} onClick={this.openModal}>
                      Show Details
                    </button>
                </div>
                { this.state.modalOpen ? <ItemDetailsModal image = {image} title = {title} description = {description} options = {options} modalOpen={this.state.modalOpen} /> : null }
            </div>
        );
    }
}

export default displayItem;