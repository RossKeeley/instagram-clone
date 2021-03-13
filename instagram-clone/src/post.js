import React from 'react';
import './post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({ username, caption, imageUrl }) {
 return (
   <div className="post">
     <div className="post_header">
       <Avatar
         className="post_avatar"
         alt="Rosskeeley"
         src="/static/images/avatar/1.jpg"
       />
       <h3>{username}</h3>
     </div>
     {/* header - avatar + username */}

     {/* image */}
     <img className="post_image" src={imageUrl} alt="" />
     {/* username + caption */}
     <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
   </div>
 )
}

export default Post
