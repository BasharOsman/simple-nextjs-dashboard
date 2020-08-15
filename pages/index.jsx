import Head from 'next/head'
import Sidebar from 'components/Sidebar'
import Navbar from 'components/Navbar'
import Home from 'components/DashboardPages/Home.jsx'
import Users from 'components/DashboardPages/Users'
import Chert from 'components/DashboardPages/Chert'
import Articles from 'components/DashboardPages/Articles'
import About from 'components/DashboardPages/About'
import Setting from 'components/DashboardPages/Setting'

const MainPages={
  home: Home,
  users: Users,
  chert: Chert,
  articles: Articles,
  setting:Setting,
  about: About
}
export default class Dashboard extends React.Component {
  constructor(){
    super();
    this.state={
      display:false,
      comp: "home"
    }
  }
  sidebarHandler = () => {
    this.setState({
      display: !this.state.display
    })
  }
  componentsHandler=(comp)=>{
    this.setState({comp:comp})
  }
  render(){
    const { display , comp} = this.state;
    const MainComponent = MainPages[comp]
    return (
      <div >
        <Head>
          <title>Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossOrigin="anonymous" />
        </Head>
          <Navbar close={this.sidebarHandler} fullBar={display} />
          <Sidebar display={display} route={this.componentsHandler}/>
          <div className={!display ? "container ml-150 mobile": "container m-none"}> 
            <div className="title">
              <MainComponent/>
              </div> 
          </div>
          <style jsx>{`
           .title { 
                margin: 0;
                line-height: 1.15;
                font-size: 4rem;
              }
            @media (max-width: 576px) { 
              .mobile{
                margin-left: 0px;
              }
            }
          `}</style>
      </div>
    )
  }
}
