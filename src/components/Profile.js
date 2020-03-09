import React from 'react';
import publicUrl from 'utils/publicUrl.js';
import PostThumbnail from './PostThumbnail'
import css from './Profile.module.css';



function Profile(props) {
  const {store} = props; // retrieve store

  function findUser(){
      return store.users.find(user => user.id === store.currentUserId);
  }

  function findPosts(){
    return store.posts.filter(post => post.userId === store.currentUserId);
  }

  function findFollowers(){
  
    return store.followers.filter(user => user.userId ===  store.currentUserId).length;
  }

  function findFollowing(){
  
    return store.followers.filter(user  => user.followerId === store.currentUserId).length;
  }


  return (
<article>
<img className={css.profile} src={publicUrl(findUser().photo)} alt="user1"/>
<span>{publicUrl(findUser().id)}</span>
{console.log("findUser: ")}
{console.log(findUser())}
{console.log("findPosts: ")}
{console.log(findPosts())}
{console.log("findFollowers: ")}
{console.log(findFollowers())}
{console.log("findFollowing: ")}
{console.log(findFollowing())}
{console.log(findUser().bio)}

<div>
<strong>{publicUrl(findUser().name)}</strong>
<p>{publicUrl(findUser().bio)}</p>
</div>
<div className={css.row}>
  <div className={css.column}>
  {findPosts().length}
    <div>Posts</div>
  </div>
  <div className={css.column}> 
  {findFollowers()}
  <div>Followers</div>
  </div>  
  <div className={css.column}>
    {findFollowing()}
    <div>Following</div>
  </div>
  </div>
<div className={css.posts}>
{store.posts.filter(post => post.userId ===store.currentUserId)
      .map(post=>
      <PostThumbnail 
      key = {post.userId}
      post = {post}
      />)}   
</div>
</article>
  );
}

export default Profile;