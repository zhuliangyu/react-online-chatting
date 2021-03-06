import React, {Component} from 'react';
import MyName from './components/myName';
import InputBar from './components/InputBar';
import ShowMessage from './components/ShowMessages';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCQEOnb4WuWVdBuLcRuRfgZlfFbztbdWuM",
    authDomain: "look4tutorchatting.firebaseapp.com",
    databaseURL: "https://look4tutorchatting.firebaseio.com",
    storageBucket: "look4tutorchatting.appspot.com",
    messagingSenderId: "970356899403"
};

var defaultApp = firebase.initializeApp(config);

//  You can retrieve services via the defaultApp variable...
var defaultDatabase = defaultApp.database();

const rootRef = defaultDatabase.ref();
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            arr: []
        };

        this.submitHander = this.submitHander.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);

    }


    componentDidUpdate(){
        // alert("update")
        // window.scrollTo(0, 999);

        setTimeout(function () {
            window.scrollTo(0, 99999);
        },1);

    }

    componentDidMount() {

        //fetch data from firebase
        //put data into my app state
        rootRef.on('value', (snapshot) => {

            let mydata = snapshot.child('messageArr').val();

            // push data to state
            this.setState({
                arr:mydata
            });


        });



    }



    submitHander(name, body) {
        //write back to firebase

        var newArray = this.state.arr.slice();
        // var newArray = [];
        newArray.push({name: name, body: body});

        //change firebase value
        //push data to firebase db
        rootRef.set({
            messageArr: newArray
        });

        this.setState({arr: newArray})


    }

    deleteHandler(){

        this.setState({arr: []});


    }


    render() {
        return (
            <div className="App">
                <MyName/>
                <ShowMessage messageList={this.state.arr}/>
                <InputBar mySubmitHandler={this.submitHander}/>

                <button type="button" className="btn-danger" onClick={this.deleteHandler}>Delete all message</button>

                {/*personal information*/}
                <div className="well">
                     <div>
                         Github: <a href="https://github.com/zhuliangyu/react-online-chatting">https://github.com/zhuliangyu/react-online-chatting</a>
                     </div>

                    <div>
                        Demo:
                        <a href="https://zhuliangyu.github.io/react-online-chatting/">https://zhuliangyu.github.io/react-online-chatting/</a>
                    </div>

                    <div>
                        Firebase: <a href="https://console.firebase.google.com/project/look4tutorchatting/database/data/messageArr" target="_blank">See all data</a>
                    </div>
                </div>
                {/*personal information*/}


            </div>
        );
    }
}

export default App;
