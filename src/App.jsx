import React from 'react';
import MediaModalTarget from './MediaModal.jsx';
import { Button } from 'reactstrap';
import './App.css';

const App = () => (
  <div className="App">
    <div className="App-header">
      <MediaModalTarget 
        type="image" 
        src="https://jaaproductions.com/static/media/AlienBrowser_v8.0.7918854d.jpg" 
        title="AlienBrowser" 
        target={<Button id="image-test" color="primary" className="bob1">Image Test</Button>} 
      />
      <br />
      <MediaModalTarget 
        type="video" 
        src="https://dl.dropbox.com/s/iptusk9mkpaf3r2/rs_DriveMyCar.mp4"
        isModalOpen={true}
        target={<Button id="video-test" color="warning" className="bob2">Video Test</Button>}
      />
      <br />
      <MediaModalTarget 
        type="youtube" 
        src="https://www.youtube.com/embed/kfFcGQ96utU"
        target={<Button id="youtube-test" color="danger" className="bob3">YouTube Test</Button>} 
      />
      <br />
      <MediaModalTarget 
        type="web" 
        src="https://hexipi.com"
        title="HexiPi"
        target={<Button id="web-test" className="bob4">Web Test</Button>} 
      />
      <br />
      <MediaModalTarget 
        type="web" 
        src="https://jaaproductions.com"
        title="J.A.A. Productions"
        target={<Button id="web-test" className="bob5">Web Test 2</Button>} 
      />
      <br />
    </div>
  </div>
);
  
export default App;