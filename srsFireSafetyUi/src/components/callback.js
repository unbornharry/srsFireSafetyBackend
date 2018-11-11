import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Panel, Form, Col } from 'react-bootstrap';

const callbackStyle = {
    width: '30vw',
    minWidth: '400px'
};

class callback extends Component {

    constructor(props){
        super(props);
        this.state = {name: '', mobile: '', email: '', message: ''};
    }

    onSubmitClick = () => {
        this.setState({message: ''});
        if(this.state.name === '' || this.state.mobile === '' || this.state.email === ''){
            if(this._name.value === '') this.setState( {name: 'red'})
            else this.setState({name:'white'})
            if(this._mobile.value === '') this.setState( {mobile: 'red'})
            else this.setState({mobile:'white'})
            if(this._email.value === '') this.setState( {email: 'red'})
            else this.setState({email:'white'})
            return;
        }
        else this.setState({name: 'white', mobile: 'white', email: 'white'})
        fetch('/send?subject=callback - ' + this._name.value + ' - ' + this._mobile.value + ' - ' + this._email.value +
            '&text=' + this._message.value)
            .then(response => response.status)
            .then(status => this.setState({message: 'Success'}));
    };

    getValidationState() {
        const length = this.state.name.length;
        console.log(length);
        if (length > 0) return 'success';
        else return 'error';
    };

    handleChange = (e) => {
        this.setState({ name: e.target.value });
    };

    render(){
        return(
            <div style={callbackStyle}>
            <Panel>
                <Panel.Heading>Request Callback</Panel.Heading>
                <Panel.Body>
                    <Form horizontal>
                        <FormGroup
                            controlId="Name"
                            validationState={this.getValidationState()}
                        >
                            <Col componentClass={ControlLabel} sm={2}>
                                Name
                            </Col>
                            <Col sm={9}>
                                <FormControl
                                    type="text"
                                    value={this.state.name}
                                    placeholder="Enter Name"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback/>
                            </Col>
                        </FormGroup>
                        <FormGroup
                            controlId="Phone"
                            validationState={this.getValidationState()}
                        >
                            <Col componentClass={ControlLabel} sm={2}>
                                Mobile
                            </Col>
                            <Col sm={9}>
                                <FormControl
                                    type="text"
                                    value={this.state.mobile}
                                    placeholder="Enter Mobile number"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback/>
                            </Col>
                        </FormGroup>
                        <FormGroup
                            controlId="Email"
                            validationState={this.getValidationState()}
                        >
                            <Col componentClass={ControlLabel} sm={2}>
                                Email ID
                            </Col>
                            <Col sm={9}>
                                <FormControl
                                    type="text"
                                    value={this.state.email}
                                    placeholder="Enter Email ID"
                                    onChange={this.handleChange}
                                />
                                <FormControl.Feedback/>
                            </Col>
                        </FormGroup>
                        <FormGroup
                            controlId="Subject"
                            validationState={this.getValidationState()}
                        >
                            <Col componentClass={ControlLabel} sm={2}>
                                Subject
                            </Col>
                            <Col sm={9}>
                                <textarea type="text" id="form7" value={this.state.message} className="md-textarea form-control" rows="3" placeholder="Subject for callback"></textarea>
                                <FormControl.Feedback/>
                            </Col>
                        </FormGroup>
                        <Button type="submit" className="center-block" onClick={this.onSubmitClick}>Submit</Button>
                    </Form>
                </Panel.Body>
            </Panel>
            </div>
        )
    }
}

export default callback;