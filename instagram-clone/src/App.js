import React from 'react';
import './App.css';
import Post from './post';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <div className="app_header">
        <img className="app_headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="Instagram Logo" />
      </div>

      <h1>Hello</h1>

      {/* Posts */}
      <Post username="mrrosskeeley" caption="Making and instagram clone!" imageUrl="https://img.rasset.ie/0011c1e4-500.jpg" />
      <Post username="practicalpod" caption="brunch in the city" imageUrl="https://i.pinimg.com/originals/f1/05/cd/f105cd1d6909c23823762dcad36612ab.jpg" />
      <Post username="duckymcduckface" caption="I'm so big!!" imageUrl="https://www.dailybreeze.com/wp-content/uploads/migration/2014/201408/NEWS_140819552_AR_0_GOLPJJIEGDOP.jpg" />
      <Post username="borisjohnson" caption="Well yes um there's eh an um little bit of a uh problem with the uh going outside um thing, and the-the-the staying indoors um thing as well" imageUrl="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F973719a4-f2ee-11ea-9de6-a6e4d4016fb7.jpg?crop=3913%2C2201%2C65%2C381&resize=1180" />
      {/* Posts */}
      {/*  */}

    </div>
  );
}

export default App;
