import React, { Component } from 'react';


const callbackStyle = {
    width: '30vw',
    minWidth: '300px',
    float: 'left',
    marginRight: '21px',
    background: '#222D32',
    borderRadius: '6px',
    padding: '10px',
    border: '2px solid white'
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

const red = {
    background : 'red'
}

const white = {
    background : 'white'
}

const green = {
    color: 'green',
    fontWeight: 'bold'
}

class callback extends Component {

    constructor(props){
        super(props);
        this.state = {name: 'white', mobile: 'white', email: 'white', message: ''};
    }

    onSubmitClick = () => {
        this.setState({message: ''})
        if(this._name.value === '' || this._mobile.value === '' || this._email.value === ''){
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
    }

    render(){
        return(
        <div style={callbackStyle}>
            <h3>Request Callback</h3>

            <form>
                <table width="257" border="0" align="center" cellPadding="0" cellSpacing="5">
                    <tbody>
                        <tr>
                            <td width="100">Name*</td>
                            <td width="10">:</td>
                            <td style={eval(this.state.name)}><input name="Name" type="text" id="Name" ref={input => this._name = input} /></td>
                        </tr>

                        <tr>
                            <td>Mobile*</td>
                            <td>:</td>
                            <td style={eval(this.state.mobile)}><input type="text" name="Mobile" id="Mobile" ref={input => this._mobile = input} /></td>
                        </tr>

                        <tr>
                            <td>Email*</td>
                            <td>:</td>
                            <td style={eval(this.state.email)}><input type="text" name="Email" id="Email" ref={input => this._email = input} /></td>
                        </tr>

                        <tr>
                            <td>Query</td>
                            <td>:</td>
                            <td><textarea name="Message" id="Message" rows="5" cols="25" ref={input => this._message = input}></textarea></td>
                        </tr>

                        <tr>
                            <td>&nbsp;</td>
                            <td>&nbsp;</td>
                            <td><input type="button" id="submit" value="Send Request" style={buttonStyle} onClick ={this.onSubmitClick}/>
                            <span style={green}>{this.state.message}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
        )
    }
}

export default callback;