import React, { useState } from 'react';
    import css from './NewPost.module.css';
    import FileLoader from './FileLoader.js';
    
     
    
    function NewPost(props) {
      const [dragging, setDragging] = useState(false); // to show a dragging effect
      const [desc, setDesc] = useState('');
      const [photo, setPhoto] = useState(null);
      const [error, setError] = useState(''); // to show an error message
    
      function handleFileDragEnter(e){
        setDragging(true);
      }
      function handleFileDragLeave(e){
        setDragging(false);
      }
      function handleFileDrop(e){
        if (e.dataTransfer.types.includes('Files')===false){
    			return;
        }
        if (e.dataTransfer.files.length>=1){
          let file = e.dataTransfer.files[0];
          if (file.size>1000000){// larger than 1 MB
            return;
          }
          if (file.type.match(/image.*/)){
    				let reader = new FileReader();			
    				reader.onloadend = (e) => {
    					setPhoto(e.target.result);// TODO: call setPhoto with e.target.result** (this is a Base64 image string)
    		
    				};
    				reader.readAsDataURL(file);
    			}
        }
        setDragging(false);    
      }
      function handleDescChange(e){
        console.log(e.target.value)
    		setDesc(e.target.value);// TODO: call setDesc**
      }

      function handleSubmit(e){
    		// TODO:
    		e.preventDefault();// 1. Prevent default behavior
        if (photo === null || desc === ""){
          alert("Submission error!");
          return;
        }else{
          // 2. Show error msg if failed and exit
    		 props.onSubmit(photo, desc);// 3. Call the storage update function passed from the parent
        // 3. Clear error msg**
        }
      }
      function handleCancel(){
         props.onCancel()// TODO: Notify the parent about the cancellation**
      }
      return (
        <div>
            
            <div className={css.photo}>
              {!photo?  <div className={css.message}>Drop your image</div>:
                        <img src={photo} alt="New Post"/>}
                <FileLoader
                  onDragEnter={handleFileDragEnter}
                  onDragLeave={handleFileDragLeave}
                  onDrop={handleFileDrop}
                >
    	            <div className={[css.dropArea, dragging?css.dragging:null].join(' ')}
                  ></div>
    	          </FileLoader>
              
            </div>
            
            <div className={css.desc} >
    					**{/* TODO: add textarea */}**
              <textarea 
              placeholder="Enter description here" onChange={ handleDescChange}
              /> 
            </div>
            <div className={css.error}>
    					**{/* TODO: show error message */}**
            </div>
            <div className={css.actions}>
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={handleSubmit}>Share</button>          
            </div>
        </div>
      );
    }
    
    export default NewPost;