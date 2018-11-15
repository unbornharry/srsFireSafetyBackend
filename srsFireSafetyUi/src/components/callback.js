import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Panel, Form, Col } from 'react-bootstrap';

const callbackStyle = {
    width: '30vw',
    minWidth: '400px'
};

class callback extends Component {

    constructor(props){
        super(props);
        this.state = {name: '', mobile: '', email: '', subject: ''};
    }

    onSubmitClick = () => {
        if (this.validateName() === 'success' && this.validateMobile() === 'success' && this.validateEmail() === 'success' && this.validateSubject() === 'success'){
            fetch('/send?subject=callback - ' + this.state.name + ' - ' + this.state.mobile + ' - ' + this.state.email +
                '&text=' + this.state.subject)
                .then(response => response.status)
                .then(status => {
                    if (status === 200)
                        this.setState({callbackRequestStatus: 'Success', callbackStatusColor: 'text-success'});
                    else
                        this.setState({ callbackRequestStatus: 'Failure - ' + status, callbackStatusColor: 'text-danger' });
                })
                .catch(response => this.setState({ callbackRequestStatus: 'Failure - ' + response.status, callbackStatusColor: 'text-danger' }));
        }
        else this.setState({callbackRequestStatus: 'Failure - Fill required fields', callbackStatusColor: 'text-danger'})
    };

    validateName = () => {
        let nameValidation;
        const name = this.state.name;
        if(name === '')
            nameValidation = 'null';
        else if (name.length > 1)
            nameValidation = 'success';
        else
            nameValidation = 'error';
        // this.setState({nameValidation: nameValidation});
        return nameValidation;
    };

    validateMobile = () => {
        const mobile = this.state.mobile;
        let phoneno = /^\d{10}$/, mobileValidation;
        if (mobile === '')
            mobileValidation = 'null';
        else if((mobile.match(phoneno)))
            mobileValidation = 'success';
        else
            mobileValidation = 'error';
        // this.setState({mobileValidation: mobileValidation});
        return mobileValidation
    };

    validateEmail = () => {
        let emailValidation;
        const email = this.state.email;
        if(email === '')
            emailValidation = 'null';
        else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            emailValidation = 'success';
        else
            emailValidation = 'error';
        // this.setState({emailValidation: emailValidation});
        return emailValidation;
    };

    validateSubject = () => {
        let subjectValidation;
        const subject = this.state.subject;
        if (subject === '')
            subjectValidation = 'null';
        else if (subject.length > 1)
            subjectValidation = 'success';
        else
            subjectValidation = 'error';
        // this.setState({subjectValidation: subjectValidation});
        return subjectValidation;
    };

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

    handleMobileChange = (e) => {
        this.setState({ mobile: e.target.value });
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handleSubjectChange = (e) => {
        this.setState({ subject: e.target.value });
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
                            validationState={this.validateName()}
                        >
                            <Col componentClass={ControlLabel} sm={2}>
                                Name
                            </Col>
                            <Col sm={9}>
                                <FormControl
                                    type="text"
                                    value={this.state.name}
                                    placeholder="Enter Name"
                                    onChange={this.handleNameChange}
                                />
                                <FormControl.Feedback/>
                            </Col>
                        </FormGroup>
                        <FormGroup
                            controlId="Phone"
                            validationState={this.validateMobile()}
                        >
                            <Col componentClass={ControlLabel} sm={2}>
                                Mobile
                            </Col>
                            <Col sm={9}>
                                <FormControl
                                    type="text"
                                    value={this.state.mobile}
                                    placeholder="Enter Mobile number"
                                    onChange={this.handleMobileChange}
                                />
                                <FormControl.Feedback/>
                            </Col>
                        </FormGroup>
                        <FormGroup
                            controlId="Email"
                            validationState={this.validateEmail()}
                        >
                            <Col componentClass={ControlLabel} sm={2}>
                                Email ID
                            </Col>
                            <Col sm={9}>
                                <FormControl
                                    type="text"
                                    value={this.state.email}
                                    placeholder="Enter Email ID"
                                    onChange={this.handleEmailChange}
                                />
                                <FormControl.Feedback/>
                            </Col>
                        </FormGroup>
                        <FormGroup
                            controlId="Subject"
                            validationState={this.validateSubject()}
                        >
                            <Col componentClass={ControlLabel} sm={2}>
                                Subject
                            </Col>
                            <Col sm={9}>
                                <textarea type="text" id="form7" value={this.state.subject} onChange={this.handleSubjectChange} className="md-textarea form-control" rows="3" placeholder="Subject for callback"></textarea>
                                <FormControl.Feedback/>
                            </Col>
                        </FormGroup>
                        <Button type="button" className="center-block" onClick={this.onSubmitClick}>Submit</Button>
                        <div>
                            <span className={`${this.state.callbackStatusColor}`}>{this.state.callbackRequestStatus}</span>
                        </div>
                    </Form>
                </Panel.Body>
            </Panel>
            </div>
        )
    }
}

export default callback;