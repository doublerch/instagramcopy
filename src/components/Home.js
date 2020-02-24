import React from 'react';
import css from './Home.module.css';



/*
fetch ('./components/post.json')
.then (response => {
    return response.json();
}).then(data => {
    console.log(data);
    post = data;

  });
  */
let posts = {
	user:{
		id:"judy",
		photo:"/assets/user1.png",
	},
	post:{
		id:"post-1",
    userId:"judy",
    photo:"/assets/post1.png",
    desc:"#zootopia #excited",
		datetime: "2020-02-09T22:45:28Z"
	},
	likes: {
		self: true,
    count:1,
    heart: "/assets/unlike.svg"
	},
	comments:[
		{
      userId:"nick",
      text:"Welcome to Zootopia!"
    },
    {
        userId:"judy",
        text:"Thanks!😁Looking forward to meeting you!"
    }
	]
}

function Home() {
    return(
      <section id="feed" >
        <div className={css.row}>
       <div className={css.col-6}>
      <div style={{paddingTop:34}}>
        <span ><img className={css.profile} src={posts.user.photo}alt="user1"/>          {posts.user.id}</span>
      </div>

      <div style={{paddingTop:22,}}>
        <img style={{width:'50vh'}} className={css.post} src={posts.post.photo} alt="post1"/>
      </div>

      <div>
        <span><img src={posts.likes.heart} alt="like"/>  <strong>{posts.likes.count} likes</strong></span>
      </div>

      <br></br>
      <div>
        <span><strong>{posts.user.id}</strong>   {posts.post.desc}</span>
      </div>
      <div>
        <span><strong>{posts.comments[0].userId}</strong>    {posts.comments[0].text}</span>
      </div>
      <div>
        <span><strong>{posts.comments[1].userId}</strong>    {posts.comments[1].text}</span>
      </div>
      </div> 
      </div>
      </section>
  );
}



export default Home;