import React, { useState }  from 'react';
import css from './App.module.css';
import Header from './Header';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import NewPost from './NewPost';
import Activity from './Activity';
import Explore from './Explore';
import initialStore from 'utils/initialStore';
import uniqueId from 'utils/uniqueId';

// Function Component
 function App() {
  const [page, setPage] = useState('home');
  const [store, setStore] = useState(initialStore);

  

  function addLike(postId){
    const like = {
        userId: store.currentUserId, 
        postId,
        datetime: new Date().toISOString()
    };
    
    setStore({
      ...store,
      likes: store.likes.concat(like)
    });
  }
  function removeLike(postId){
    // use filter and currentUserId to remove the like from the likes array

    setStore({
        ...store,
        likes: store.likes.filter(like=>!(like.userId===store.currentUserId && like.postId===postId))

      });
  }

  function addComment(postId, text){
    const comment = {
      userId: store.currentUserId, 
      postId,
      text,
      datetime: new Date().toISOString()
    };
    setStore({
      ...store,
        comments:store.comments.concat(comment)
    });
  }

  function addPost(photo, desc){
		// TODO:
    // 1. Create a new post object (use uniqueId('post') to create an id)
    const post = {
      userId: store.currentUserId,
      id: uniqueId('post'),
      photo: photo,
      desc: desc,
      datetime: new Date().toISOString()
    }
    // 2. Update the store 
    setStore({
      ...store,
      posts: store.posts.concat(post)
    })
    // 3. Call setPage to come back to the home page
    setPage('home')
  }
	function cancelPost(){
		// TODO:
    // 1. Call setPage to come back to the home page (we will use Router to improve this)
    setPage('home')
	}
	// TODO: Pass "store", "addPost", "cancelPost" to <NewPost/>	



  function renderMain(page){
    switch(page){
      case 'home':
        return <Home
        store={store} 
        onLike={addLike} 
        onUnlike={removeLike}
        onComment={addComment} 
        />;
      case 'explore':
        return <Explore/>;
      case 'newpost':
        return <NewPost
        store={store}
        onSubmit={addPost}
        onCancel={cancelPost}
        />;
      case 'activity':
        return <Activity/>;
      case 'profile':
        return <Profile
        store={store}
        />;
      default:
        return <Home/>;
    }

  }
   return (
     <div className={css.container}>
       <Header/>
       <main className={css.content}>
         {renderMain(page)}        
       </main>
       <Navbar onNavChange={setPage}/>
     </div>
   );
 }

 export default App;


// Class Component
/*
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'home',
      store: initialStore // initialize the store as part of the state

    };
    this.addLike = this.addLike.bind(this);
		this.removeLike = this.removeLike.bind(this);
  }
  renderMain(page){
    switch(page){
      case 'home':
        return <Home
        store={this.state.store} 
        onLike={this.addLike} 
        onUnlike={this.removeLike}
        />;
      case 'explore':
        return <Explore/>;
      case 'newpost':
        return <NewPost/>;
      case 'activity':
        return <Activity/>;
      case 'profile':
        return <Profile/>;
      default:
        return <Home/>;
    }
  }
  setPage(page){
    console.log('page', page);
    this.setState({
      page
    });
  }
  render(){
    return (
      <div className={css.container}>
        <Header/>
        <main className={css.content}>
          {this.renderMain(this.state.page)}        
        </main>
        <Navbar onNavChange={e=>this.setPage(e)}/>
      </div>
    );
  }
  addLike(postId){
    const like = {
        userId: this.state.store.currentUserId, 
        postId,
        datetime: new Date().toISOString()
    };
    
    this.setState(state=>({
        store:{
          ...state.store,
          likes: state.store.likes.concat(like)
        }
    }));
  }
  removeLike(postId){
    // use filter and currentUserId to remove the like from the likes array

    this.setState(state=>({
      store:{
        ...state.store,
        likes: state.store.likes.filter(like=>!(like.userId===state.store.currentUserId && like.postId===postId))

      }
  }));
  }
}

*/
