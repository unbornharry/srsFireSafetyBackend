import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import PubSub from 'pubsub-js';

let images = require.context('../images', true);

class itemDetailsModal extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: true
        };
    }

    handleClose() {
        this.setState({ show: false });
        PubSub.publish('modalClose', {open: false});
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        let { image, title, description, options} = this.props;
        let img_src = images(image);

        return (
            <Modal
                show={this.state.show}
                onHide={this.handleClose}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg"
                animation={false}
                backdrop={false}
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-lg">{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <table style={{color:'red'}}>
                        <tbody>
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
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default itemDetailsModal;