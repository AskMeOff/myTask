import React, {Component} from "react";


class Menu extends Component {
    render() {
        let menus = [
            "Item1",
            "Item2",
            "Item3"
        ]
            return <div> Its Menu
                {menus.map((value, index)=>{
                   return <div key={index}>
                       <Link label={value} />
                   </div>
                })}
            </div>

    }
}

class Link extends Component{
    render(){
        const url = "/" + this.props.label;
        return <div>
            <a href = {url}>{this.props.label}</a>
        </div>
    }
}

export default Menu;