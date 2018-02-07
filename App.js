import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Menu from "./Menu";
import AddItem from "./AddItem";
import Block from "./Block";
import { connect } from 'react-redux';

class App extends Component {

    constructor(props) {
        super(props);
        this.state ={
            text: ''
        }
    };

    onSubmit =(e)=> {
        e.preventDefault();
        if (this.state.text){
            this.setState({
            savedText: "last note: " + this.state.text

            });
            this.props.onAddNote(this.state.text);
            this.state.text="";

        }else
        {
            alert("Empty");
        }
    };



    onChange=(e)=> {
        this.setState({text: e.target.value});

    };

    // addNote(){
    //     this.props.onAddNote(this.props.text);
    //     this.props.text="";
    // }

    onClear(){
        this.props.onClearNotes();
        this.state.savedText = "";
    }

  render() {
    return (
        <div className="App">
            <Header />
            <Menu/>
            <AddItem onSubmit={this.onSubmit} onChange={this.onChange} value={this.state.text}/>
            <div style={{
                display:'flex',
                justifyContent: 'flex-between'
            }}>
                <Block text={<ul >
                    {this.props.testStore.map((note,index)=>
                        <li key={index}>{note}</li>)}
                </ul>}  />
                <Block text={this.state.savedText}  />
            </div>
            <br/>
            <button onClick={this.onClear.bind(this)}>Clear</button>
            <Footer />
        </div>
    );
  }
}

export default connect(
    state =>({
        testStore: state
    }),
    dispatch =>({
        onAddNote: (noteName)=>{
            dispatch({
                type: 'ADD_NOTE', note: noteName
            });
        },
        onClearNotes: ()=>{
            dispatch({
                type: 'DELETE_NOTES'
            });
        }
    })
)(App);
