import React, { Component } from 'react'

export default class Dropdown extends Component {
    constructor(){
        super();
        this.state={
          drop:false
        }
      }
    dropdownHandler = () =>{
        this.setState({
            drop: !this.state.drop
          })
    }
    render() {
        const { drop } = this.state;
        const { items, icon, title,  route  } = this.props
        return (
            <React.Fragment>
                <li className="dropdownList" onClick={this.dropdownHandler}><i className={icon}></i> <a>{title}</a> <i className="fas fa-chevron-down"></i></li>
                {items.map((item,index)=>{
                        return <li key={index} onClick={()=>route(item.component)} className={`dropdown-item ${drop ? "d-block" : "d-none"}`}><i className={item.icon}></i> <a>{item.title}</a> </li>
                    })}
            </React.Fragment>
        )
    }
}
