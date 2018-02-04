import './AddItem.css';
import React, {Component} from "react";


class AddItem extends Component{
    render(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input id="inputText" type="text" placeholder="Enter something"/>
                <input type="submit" value="Hit me"  />

            </form>
        );
    }

    handleSubmit(){

    }



}

export default AddItem;