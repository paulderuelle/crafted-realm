import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Homepage() {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `<h1><span class='highlight'>/</span> PAUL DERUELLE<br />FULL-STACK<span class='highlight pipe'> WEB DEVELOPER</span></h1>
        <h3><span class='highlight'>/&gt;</span> Welcome to my “<span class='highlight'><em>Crafted Realm</em></span>”! <br>
        I'm <span class='highlight'>glad you're here</span> and hope you have a fullfiling day.</h3>`
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
