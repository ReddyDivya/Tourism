import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

function Tourism(props)
{
    return  <div className='Cards'>
                <a href={props.source} class="destination-place-image">
                    <img data-src={props.source} class="img-responsive ls-is-cached lazyloaded" 
                    src={props.source} loading="lazy" style={{opacity: 1}}/>
                    <h4 class="place-title">{props.state}</h4>
                </a>
            </div>
}

export default Tourism;