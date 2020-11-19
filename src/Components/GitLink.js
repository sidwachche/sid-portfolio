import React from 'react';
import "./GitLink.css"

function GitLink({link}) {
    return (
        <div className="git-link">
         <a target="_blank" rel="noreferrer" href={link}>
             <i className="fab fa-github"></i>
             Check out the code on GitHub</a>
      </div>
    )
}

export default GitLink
