import React, { PureComponent } from 'react';
import css from './App.module.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';


class App extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
  }

  setPage(page)
  {
      // this.setState({page:page});
  }

  handleNavChange=(page)=>{
    // if (page){ change state}
    console.log(this.state, 'before')
    this.setState({
      page:page
    })
  }
      

 /* renderMain(pageState)
  {
    if (pageState === 'home')
      Home;
    else if (pageState === 'profile')
      Profile;
    else if (pageState === 'newpost')
      NewPost;
  }*/

  render(){
  
    let pageContent = (
      <div>
        <Home/>
      </div>
    );


    if(this.state.page==="explore"){
      pageContent =(
        <main style={{paddingTop:50}}>
          <h1> Explore</h1>
        </main>
      )
    }
    if(this.state.page==="newpost"){
      pageContent =(
        <main style={{paddingTop:50}}>
          <h1> New Post</h1>
        </main>
      )
    }
    if(this.state.page==="profile"){
      pageContent =(
        <main style={{paddingTop:50}}>
          <h1> Profile</h1>
        </main>
      )
    }
    if(this.state.page==="activity"){
      pageContent =(
        <main style={{paddingTop:50}}>
          <h1> Activity</h1>
        </main>
      )
    }
  return (
    <div className={css.container} >
      <Header/>
      <main style={{display:'flex', justifyContent:'center', justifyContent:'center'}}>
      {pageContent}        
      </main>
      <Navbar onNavChange={this.handleNavChange}/>
    </div>
  );
  }
}

export default App;
