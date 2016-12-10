import React, {Component} from 'react';
import './App.css';
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
var defaultStorage = defaultApp.storage();
var defaultDatabase = defaultApp.database();

const rootRef = defaultDatabase.ref();
class App extends Component {
    constructor(props) {
        super(props);
        // this.state={
        //     name:"",
        //     message:""
        // };

        this.state = {
            arr: []
        };


        this.submitHander = this.submitHander.bind(this);

    }


    componentDidMount() {
        rootRef.on('value', (snapshot) => {

            let mydata = snapshot.child('messageArr').val();

            // push data to state
            this.setState({
                arr:mydata
            });

            console.log(this.state.messageArr);


        });



    }



    submitHander(name, body) {
        //write back to firebase

        var newArray = this.state.arr.slice();
        newArray.push({name: name, body: body});

        rootRef.set({
            messageArr: newArray
        });

        this.setState({arr: newArray})

    }


    render() {
        return (
            <div className="App">
                <MyName/>
                <InputBar mySubmitHandler={this.submitHander}/>
                <ShowMessage messageList={this.state.arr}/>


            </div>
        );
    }
}

export default App;
