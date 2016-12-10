import React, {Component} from 'react';
import './App.css';
import MyName from './components/myName';
import InputBar from './components/InputBar';
import ShowMessage from './components/ShowMessages';

class App extends Component {
    constructor(props) {
        super(props);
        // this.state={
        //     name:"",
        //     message:""
        // };

        this.state={
            arr:[]
        };



        this.submitHander=this.submitHander.bind(this);

    }

    submitHander(name,body) {

        var newArray = this.state.arr.slice();
        newArray.push({name:name,body:body});
        this.setState({arr:newArray})


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
