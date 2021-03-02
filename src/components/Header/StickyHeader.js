import React, { Fragment, useEffect, useRef, useState } from 'react';
import StickyComponents from './StickyComponents';
import './header.scss'


export default () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <Fragment>
    
      <div className="">
           <div id="header"> 
            <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
              <StickyComponents/>
            </div>
            </div>
        
        
      </div>
    
      
    </Fragment>
  );
};