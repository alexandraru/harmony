import React from 'react';
import ReactPlayer from 'react-player'

function Challenge (props){
    return (
        <>
          {props.text.map((el, index) => (
          <div key={index} className="container">
            <div className="video-box">
                <h2 className="video-box-title">День 1</h2>
                <p className="video-box-text">{el.challenge1}</p>
                <ReactPlayer className="video-box-video" style={{border: "1px solid rgb(11, 11, 112)"}} url={"https://youtu.be/d_sjvK831cA?si=r0YNwVwveDULvZ6o"} controls/>
            </div>
            <div className="video-box">
                <h2 className="video-box-title">День 2</h2>
                <ReactPlayer className="video-box-video" url={"https://youtu.be/MHu7UEvOJfU?si=n6utv4YZAZ_27V_c"} controls/>
            </div>
            <div className="video-box">
                <h2 className="video-box-title">День 3</h2>
                <p className="video-box-text">{el.challenge2}</p>
                <ReactPlayer className="video-box-video" url={"https://youtu.be/JuTXFzHK1bc?si=bMZdcVyhRqPZLPLN"} controls/>
                <ReactPlayer className="video-box-video" url={"https://youtu.be/awEUHXCkI9M?si=DGqZmP_0zuVBFJrM"} controls/>
            </div>
            <div className="video-box">
                <h2 className="video-box-title">День 4</h2>
                <ReactPlayer className="video-box-video" url={"https://youtu.be/O6uBOb1NQvc?si=p1NojeBSHn8BXnb0"} controls/>
            </div>
            <div className="video-box">
                <h2 className="video-box-title">День 5</h2>
                <p className="video-box-text">{el.challenge3}</p>
                <ReactPlayer className="video-box-video" url={"https://youtu.be/hI3g19hmjqA?si=K_FWgSHbCe3i3hh1"} controls/>
            </div>
        
        </div> ))}
    </>
    )
}

export default Challenge