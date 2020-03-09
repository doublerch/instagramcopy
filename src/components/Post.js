import React, { useState }  from 'react';
import css from './Post.module.css'; 
import timespan from 'utils/timespan.js';
import publicUrl from 'utils/publicUrl.js';
function Post(props) {
    const [comment, setComment] = useState('');
    const [toggleComment, setToggleComment] = useState(false); // hidden initially
    function handleUnlike(){
        console.log('Unlike');
        props.onUnlike(props.post.id);

    }

    function handleLike(){
        console.log('Like');
        props.onLike(props.post.id);

    }

    function handleSubmitComment(event){
        props.onComment(props.post.id, comment); // this calls addComment from App.js
        setComment(''); //reset
        setToggleComment(false); //close comment box
        event.preventDefault(); // prevent page refresh
      }

    return (
        <article className={css.post}>
            <header className={css.header}>
                <button className={css.user}>
                    <img src={publicUrl(props.user.photo)} alt='User Profile'/> 
                    <span >{props.user.id} </span>
                </button>
            </header>
            <section className={css.content}>
                <div className={css.imgContainer}>
                <img src={publicUrl(props.post.photo)} alt='Post'/>
                </div>
                
            </section>

            <section className={css.actions}>
                <button>
                    {props.likes.self?
                    <img onClick={e=>handleUnlike()} src={publicUrl('/assets/unlike.svg')} alt='Unlike Action'/> :
                    <img onClick={e=>handleLike()} src={publicUrl('/assets/like.svg')} alt='Like Action'/> 
                    }
                    
                </button>
                <button onClick={e=>setToggleComment(!toggleComment)}>
                    <img src={publicUrl('/assets/comment.svg')} alt='Comment Action'/> 
                </button>
            </section>
            <section className={css.activity}>
                <div className={css.likes.count}>
                    {props.likes.count} likes
                </div>
                <div className={css.comments}>
                    <div>
                        <span>{props.post.userId}</span>
                        <span>{props.post.desc}</span>
                    </div>      
                    {props.comments.map((comment,i)=>
                        <div key={i}>
                            <span>{comment.userId}</span>
                            <span>{comment.text}</span>
                        </div>                        
                    )}
                </div>
                <time className={css.time}>
                    {timespan(props.post.datetime).toUpperCase()} AGO
                </time>
            </section>
            {toggleComment &&
            <form className={css.addComment} onSubmit={handleSubmitComment}>
                <input type="text" placeholder="Add a comment…" value={comment} onChange={e=>setComment(e.target.value)}/>
                <button type="submit">Post</button>
           </form>
            }
        </article>
        
    );
}

export default Post;
