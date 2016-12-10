/**
 * Created by macbook-retina on 2016-12-08.
 */

/**
 * Created by macbook-retina on 2016-12-08.
 */

import React, {Component} from 'react';
// import Firebase from 'firebase';
// import ReactFireMixin from 'reactfire';
// import reactMixin from 'react-mixin';




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
                <form action="#">
                    <input type="text" name="" id="name" placeholder="Name"/>
                    <input type="text" name="" id="message" placeholder="Message"/>
                    <input type="submit"
                           value="Submit"
                           onClick={this.onSubmitHandler}/>
                </form>

            </div>
        );
    }
};




export default InputBar;
