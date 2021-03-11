import React from 'react';
import './post.css';
import Avatar from '@material-ui/core/Avatar';

function Post() {
 return (
   <div className="post">
     <div className="post_header">
       <Avatar
         className="post_avatar"
         alt="Rosskeeley"
         src="/static/images/avatar/1.jpg"
       />
       <h3>Username</h3>
     </div>
     {/* header - avatar + username */}

     {/* image */}
     <img className="post_image" src="https://img.rasset.ie/0011c1e4-500.jpg" alt="" />
     {/* username + caption */}
     <h4 className="post_text"><strong>mrrosskeeley</strong> Making an instagram clone! (image is not right lol)</h4>
   </div>
 )
}

export default Post
