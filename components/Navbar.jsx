import React, { Component } from 'react'
import navbarStyle from 'components/styles/navbar'
import NavbarNotification from 'components/NavbarNotification'
export class Navbar extends Component {

    render() {
        const { close, fullBar}=this.props
        const styles = navbarStyle({fullBar})
        return (
            <div className={fullBar ? "navbar full": "navbar"}>
                <i className="fas fa-bars" onClick={close}></i>
                <header>Dashboard</header>
                <NavbarNotification count="100" />
            <style jsx>{styles}</style>
            </div>
        )
    }
}

export default Navbar
