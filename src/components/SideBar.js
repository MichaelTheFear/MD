import React from 'react'

function SideBar(props) {
    return (
        <div className="mainSidebar" style={props.style}>
            <div id="mySidebar" className="sidebar">
                <a href="/">Home</a>
                <a href={"#/"+props.name1}>{props.name1}</a>
                <a href={"#/"+props.name2}>{props.name2}</a>
                <a href={"#/"+props.name3}>Restart</a>
                <a href="https://www.google.com/">Resolutions</a>
                <a href="https://www.google.com/">Tutorial</a>
            </div>
            <div id="main">
                {props.children}
            </div>
        </div>
    )
}

export default SideBar
