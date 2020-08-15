import React, { Component } from 'react'
import notStyle from 'styles/notification'
export class NavbarNotification extends Component {
    state={
        show: false,
    }
    myRef = React.createRef();
    handleShow=()=>{
        if (!this.state.show) {
            document.addEventListener('click', this.handleOutsideClick, false);
          } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
          }
        this.setState(prev=>({show: !prev.show}))
    }
    handleOutsideClick=(e)=>{
        const eClass = [...e.target.classList]
        const RefClass = [...this.myRef.current.classList]
        if(eClass.some( r => RefClass.indexOf(r) >= 0)){
            return;
        }
      this.handleShow();
    }
    itemHandler(text){
        console.log('NavbarNotification', text)
    }
    render() {
        const { show } = this.state;
        const { count, data } = this.props;

        return (
            <div className="Notification">
                <button className="btn fas fa-bell" onClick={this.handleShow}></button> 
                <span className="badge" onClick={this.handleShow}>{count}</span>
                <div className={show ? "notList d-block": "notList"} ref={this.myRef}>
                    <header>You have {count} Notifications</header>
                    <ul>
                        {data.map(({text},index)=>(
                            <li key={index} onClick={()=>this.itemHandler(text)}>{text}</li>
                            )
                        )}
                    </ul>
                </div>
            <style jsx>{notStyle}</style>
            </div>
        )
    }
}
NavbarNotification.defaultProps={
    count: 10,
    data: [
        {text:"test 1"},
        {text:"test 2"},
        {text:"test 3"},
        {text:"test 4"},
    ]
}
export default NavbarNotification
