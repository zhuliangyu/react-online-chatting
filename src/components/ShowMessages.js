import React, {Component} from 'react';


class ShowMessages extends Component {

    render() {
        return (
            <div className="message">
                {this.props.messageList.map(function (message, index) {
                    return (
                        <div key={index} className="alert alert-success">
                            <span className="label label-success">{message.name}</span>

                        <p>Message: {message.body}</p>

                    </div>)
                })}

            </div>
        );
    }
}

export default ShowMessages;

