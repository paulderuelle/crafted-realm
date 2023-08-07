import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Homepage() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `<h1><span class='hightlight'>/</span> PAUL DERUELLE<br />FULL-STACK<span class='hightlight pipe'> WEB DEVELOPER</span></h1>
        <h3><span class='hightlight'>/&gt;</span> Welcome to my “<span class='hightlight'><em>Crafted Realm</em></span>”!</h3>
        <h5>I'm <span class='hightlight'>glad you're here</span> and hope you have a <span class='underline'>fullfiling day.</span></h5>`
      ],
    typeSpeed: 30,
    showCursor: false,
  };

  const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div class="content-wrapper">
      <span ref={typedRef} />
    </div>
    </>
  );
}

export default Homepage;
