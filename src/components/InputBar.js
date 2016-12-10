import React, {Component} from 'react';
// import Firebase from 'firebase';
// import ReactFireMixin from 'reactfire';
// import reactMixin from 'react-mixin';
import Style from './InputBar.css'

import {Button} from 'react-bootstrap';
import {FormGroup} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';


class InputBar extends Component {

    constructor(props) {
        super(props);

        this.onSubmitHandler = this.onSubmitHandler.bind(this);


    }

    onSubmitHandler(event) {

        let nameNode = event.target.parentNode.firstChild;
        let messageNode = nameNode.nextSibling;

        let name = nameNode.value;
        let message = messageNode.value;

        this.props.mySubmitHandler(name, message);

        messageNode.value = '';


    }


    render() {
        return (
            <div>


                <form action="#" className="fixed">
                    {/*<div className="form-group">*/}
                    {/*<label for="Name">Name:</label>*/}
                    {/*<input type="text" className="form-control" id="name"/>*/}
                    {/*</div>*/}
                    {/*<div className="form-group">*/}
                    {/*<label for="body">Message:</label>*/}
                    {/*<input type="body" className="form-control" id="body"/>*/}
                    {/*</div>*/}


                    {/*<FormControl type="text"*/}
                    {/*name=""*/}
                    {/*id="name"*/}
                    {/*placeholder="Name"/>*/}

                    {/*<FormControl type="text"*/}
                    {/*name=""*/}
                    {/*id="message"*/}
                    {/*placeholder="Message"/>*/}


                    {/*<FormControl componentClass="textarea" placeholder="textarea" />*/}

                    <input type="text" name="" id="name" placeholder="Name" className="form-control"/>


                    <input type="text" name="" id="message" placeholder="Message" className="form-control"/>
                    <Button type="submit"
                            bsStyle="primary"
                            value="Submit"
                            onClick={this.onSubmitHandler}>
                        Send</Button>


                </form>

            </div>
        );
    }
}


export default InputBar;
