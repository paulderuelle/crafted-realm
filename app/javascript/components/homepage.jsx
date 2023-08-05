import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Homepage() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `<p><span class="hightlight">/&gt;</span> Welcome to my “<span class="hightlight"><em>Crafted Realm</em></span>”!<br />
        I'm <span class="hightlight">glad you're here</span> and hope you have a fullfiling day.</p>`
      ],
    typeSpeed: 25,
    showCursor: false,
  };

  const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div class="maintitle">
      <h1><span class="hightlight">/</span> PAUL DERUELLE<br />FULL-STACK<span class="hightlight pipe"> WEB DEVELOPER</span></h1>
      <span ref={typedRef} />
    </div>
    </>
  );
}

export default Homepage;
