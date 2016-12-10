import React, { Component } from 'react';

class ShowMessages extends Component {
    constructor(props) {
        super(props);

        // this.onSubmitHandler=this.onSubmitHandler.bind(this);


    }

    // onSubmitHandler(event){
    //
    //     let nameNode=event.target.parentNode.firstChild;
    //     let messageNode=nameNode.nextSibling;
    //
    //     let name=nameNode.value;
    //     let message=messageNode.value;
    //
    //     this.props.mySubmitHandler(name, message);
    //
    //
    // }





    render() {
        return (
            <div className="message">
                {this.props.messageList.map(function (message,index) {
                    return (<div key={index}>

                        <p>Name: {message.name}</p>
                        <p>Message: {message.body}</p>

                    </div>)




                })}

            </div>
        );
    }
}

export default ShowMessages;

