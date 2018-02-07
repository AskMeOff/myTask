import React, {Component} from "react";
import './Header.css';

class Block extends Component {
    constructor(props) {
        super(props)
        this.state ={
            nameColor: 'green'
        }
    };

    onClick =()=> {
       if (this.state.nameColor === 'green'){
        this.setState({
            nameColor: 'red'
        })
       }
        else{
           this.setState({
               nameColor: 'green'
           })
        }
    };
    render() {

        return (
            <div style={{width:200, height:200, backgroundColor: this.state.nameColor, display: 'block',
                border: '1px solid black', marginLeft:'50px', marginTop: '50px'}} onClick={this.onClick}>
                {this.props.text}

            </div>

        );
    }


}

export default Block;
