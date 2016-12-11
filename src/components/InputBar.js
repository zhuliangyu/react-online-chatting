import React, {Component} from 'react';



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
                    <input type="text" name="" id="name" placeholder="Name" className="form-control"/>
                    <input type="text" name="" id="message" placeholder="Message" className="form-control"/>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-info"
                        onClick={this.onSubmitHandler}/>
                </form>

            </div>
        );
    }
}

export default InputBar;
