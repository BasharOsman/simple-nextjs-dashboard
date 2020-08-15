import React, { Component } from 'react'
import sidebarStyle from 'styles/sidebar.js'
import Dropdown from 'components/Dropdown'
import routes from 'routes/sidebarRoutes'


export class Sidebar extends Component {
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
        const { display, route } = this.props;
        const { drop } = this.state;
        const styles = sidebarStyle({display});
       
        return (
            <div className={` ${display ? `sidebar ml-150 mobile` : "sidebar"}`} id="scroll">
                <header>Logo</header>
                <ul>
                    {routes.map(({title, icon, type, itemsList, component}, i)=> {
                        const props = { title, icon };
                        if(type ==="link"){
                           return <li key={i} onClick={()=>route(component)}><i className={icon} ></i> <a>{title}</a> </li>
                        }
                        if(type="dropdown"){
                            return (
                                <Dropdown items={itemsList} {...props} key={i} route={route}/>
                            )
                        }
                    })}
                    
                </ul>
            <style jsx>{styles}</style>
            </div>
        )
    }
}
Sidebar.defaultProps = {
    display: false
}
export default Sidebar
