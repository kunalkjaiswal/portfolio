import React, { Component } from "react";
import emailjs from 'emailjs-com';
import './Contact.css';
export default class Contact extends Component {
    constructor() {
        super();
        this.state = {
            userName: "",
            userEmail: "",
            subject: "",
            message: "",
            errorMsg: "",
            disableButton: false
        }
    }
    validateInput = () => {
        try {
            this.setState({ errorMsg: "", disableButton: true});
            const _this = this.state;
            if (_this.userName === "" || _this.userEmail === "" || _this.subject === "" || _this.message === "") {
                this.setState({
                    errorMsg: "All fields are mandatory!",
                    disableButton: false
                });
                return;
            }
            let emailRegex = /\S+@\S+\.\S+/;
            if (!emailRegex.test(_this.userEmail)) {
                this.setState({
                    errorMsg: "Please enter valid email.",
                    disableButton: false
                });
                return;
            }
            this.sendEmail();
        }
        catch (ex) {
            console.log(ex.message)
        }
    }
    sendEmail = () => {
        try {
            const _this = this.state;
            const templateParams = {
                from_name: _this.userName,
                from_email: _this.userEmail,
                subject: _this.subject,
                message: _this.message
            };
            emailjs.send('YOUR_SERVICE_ID', 'YOU_MAIL_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
                .then((response) => {
                    this.setState({
                        userName: "",
                        userEmail: "",
                        subject: "",
                        message: "",
                        disableButton: false
                    });
                    alert("Email Sent", "Thank you for the mail, will get back soon!!");
                }, (err) => {
                    alert("Something went wrong!!");

                });
        }
        catch (ex) {
            console.log(ex.message)
        }
    }
    render() {
        const { userName, userEmail, subject, message, errorMsg, disableButton } = this.state;
        if (this.props.data) {
            var contact = this.props.data;
        }
        return (
            <div className="row contact container" id="contact">
                <div className="line-text">
                    <h4>Contact</h4>
                </div>
                <div className="contact-body row">
                    <div className="col-sm-5 reach-me">
                        <h3 className="contact-tile">Reach me @</h3>
                        <div className="contact-data">
                            <p><i className="fa fa-phone" aria-hidden="true"></i><span className="contact-item">{contact.phone}</span></p>
                            <p><a href={"mailto:" + contact.email}><i className="fa fa-envelope-o" aria-hidden="true"></i><span className="contact-item">{contact.email}</span></a></p>
                            <p>
                                <i className="fa fa-map-marker" aria-hidden="true"></i>
                                <span className="add1 contact-item">{contact.address1}</span><br />
                                <span className="add2 contact-item">{contact.address2}</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-7 say-hello">
                        <h3 className="contact-tile">Say Hello!!</h3>
                        <div className="form-body">
                            <div className="info-input">
                                <input type="text" aria-label="Name*" placeholder="Name*" value={userName} onChange={(e) => { this.setState({ userName: e.target.value }) }} />
                                <div className="field-icon">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="info-input">
                                <input type="text" aria-label="Email*" placeholder="Email*" value={userEmail} onChange={(e) => { this.setState({ userEmail: e.target.value }) }} />
                                <div className="field-icon">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="subject">
                                <input type="text" aria-label="Subject*" placeholder="Subject*" value={subject} onChange={(e) => { this.setState({ subject: e.target.value }) }} />
                                <div className="field-icon">
                                    <i className="fa fa-file-text" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div className="message">
                                <textarea type="text" aria-label="Message*" rows="10" cols="140" placeholder="Message*" value={message} onChange={(e) => { this.setState({ message: e.target.value }) }}></textarea>
                            </div>
                            {
                                errorMsg.length > 0 ?
                                    <p className="errMsg">{errorMsg}</p>
                                    : null
                            }
                            <div className="form-btn">
                                <button disabled={disableButton} onClick={this.validateInput}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}