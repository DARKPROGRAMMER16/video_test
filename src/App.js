import React, { Fragment } from 'react'
import VID from './assets/Coming Soon Reel 1080x1920.mp4'

const App = () => {
  return (
   <Fragment>
     <h1>hello alins</h1>
     <h1>hi there</h1>
     <video playsInline autoPlay loop muted style={{width:"20%",margin:"auto"}} className="mt-3 mb-3">
                                <source src={VID} type="video/mp4"/>
                                your browser does not support tag.
                            </video>
   </Fragment>
    
  )
}

export default App
