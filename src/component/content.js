import React from "react";
import {useEffect,useState} from "react";
import PropTypes from 'prop-types';
import './loading.css';

export const Content = ({ primary, size,borderTopColor,...props }) => {
    const mode = primary ? 'loading--primary' : 'loading--secondary';
    const [post,setPost]=useState(null)

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts/1')
    //     .then(res=>res.json())
    //     .then(res=>{
    //         const {body}= res
    //         console.log(body); 
    //         setPost(body);
    //     });  
    // },[])
    return (
        <div>
            {/* <h1 align = "center">loading indicator</h1> */}
            {post?post:<loading type='loading'
            className={['loading', `loading--${size}`, mode].join(' ')}
            style={borderTopColor && {borderTopColor}}
            {...props} />}
        </div>
    //   <div>

    //   {/* <h2>hello world</h2> */}
    // </div >
    );
  };
  Content.propTypes = {
    /**
   * Is this the principal call to action on the page?
   */
    primary: PropTypes.bool,
    /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
/**
   * What background color to use
   */
 borderTopColor: PropTypes.string,
 
};

Content.defaultProps = {
    primary:false,
    size:'large',
    borderTopColor:'#bac81f',
};


  