import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import PubSub from 'pubsub-js';
import '../../node_modules/react-responsive-modal/lib/react-responsive-modal.css';

let images = require.context('../images', true);

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

class itemDetailsModal extends Component {

    constructor(props){
        super(props);
        this.state= {open: props.modalOpen};
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
        PubSub.publish('modalClose', {open: false});
    };

    render(){
        let { image, title, description, options} = this.props;
        let img_src = images(image);
        const { open } = this.state;

        return(
            <Modal
              open={open}
              onClose={this.onCloseModal}
              little
              classNames={{
                transitionEnter: 'react-responsive-modal-transition-enter',
                transitionEnterActive: 'react-responsive-modal-transition-enter-active',
                transitionExit: 'react-responsive-modal-transition-exit',
                transitionExitActive: 'react-responsive-modal-transition-exit-active',
              }}
              animationDuration={300} closeIconSize = {18}
            >
                <table style={{color:'red'}}>
                <tbody>
                    <tr>
                        <th colSpan="2">{title}</th>
                    </tr>
                    <tr>
                        <td><img src={img_src}  alt=""/> </td>
                        <td>
                            {description ? <div style={{color:'red', fontWeight: 'bold'}}>Description:</div> : null }
                            <div>
                                <ul>
                                {description ? description.map(para => (<li>{para}</li>)) : null}
                                </ul>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td style={{color:'red'}}>
                            {options ? <p style={{color:'red', fontWeight: 'bold'}}>Options</p> : null}
                            <form className="boxed">
                            {options ? options.map(option =>(<label>{option}<input type="radio" id={option} value={option}/></label>)) : null}
                            </form>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </Modal>
        )
    }
}

export default itemDetailsModal;

//
//                            <label>1KG<input type="radio" id="one" name="weight" value="1KG"/></label>
//                            <label>2KG<input type="radio" id="two" name="weight" value="2KG"/></label>
//                            <label>3KG<input type="radio" id="three" name="weight" value="3KG"/></label>
//                            <label>4KG<input type="radio" id="Four" name="weight" value="4KG"/></label>
//                            <label>5KG<input type="radio" id="Five" name="weight" value="5KG"/></label>
//                            <br/><br/>
//                            <button style= {buttonStyle} name="callBack"> Request CallBack</button>
//                            <button style= {buttonStyle} name="enquiry"> Send Enquiry</button>
//