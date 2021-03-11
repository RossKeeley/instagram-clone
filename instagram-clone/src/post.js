 import React from 'react';
 import './post.css';

 function Post() {
   return (
     <div class="post">
       <h3>Username</h3>
       {/* header - avatar + username */}

       {/* image */}
       <img className="post_image" src="https://img.rasset.ie/0011c1e4-500.jpg" alt="" />
       {/* username + caption */}
       <h4>mrrosskeeley: Making an instagram clone! (image is not right lol)</h4>
     </div>
   )
 }

 export default Post
