import './AddItem.css';
import React, {Component} from "react";


class AddItem extends Component{

    render(){
        return(
            <form id="add-todo" onSubmit={this.props.onSubmit}>
                <input id="inputText" type="text" placeholder="Enter something"
                       value={this.props.value} onChange={this.props.onChange}
                />
                <button >Add Note</button>
            </form>


        );
    }


}

export default AddItem;