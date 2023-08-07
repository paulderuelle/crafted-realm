import React, { useState, useEffect } from 'react';

export default function About() {
  const [showFirstSection, setShowFirstSection] = useState(false);
  const [showSecondSection, setShowSecondSection] = useState(false);
  const [showThirdSection, setShowThirdSection] = useState(false);

  useEffect(() => {
    const timeouts = [
      setTimeout(() => {
        setShowFirstSection(true);
      }, 0),
      setTimeout(() => {
        setShowSecondSection(true);
      }, 500),
      setTimeout(() => {
        setShowThirdSection(true);
      }, 1000)
    ];

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
    <div className='content-wrapper'>
    <div className={`subsection first ${showFirstSection ? 'anim' : ''}`}>
        <h2>A LONGSTAND PASSION</h2>
        <h3>I'm thrilled you're <span class='highlight'>here te explore</span> my work.</h3>
        <h4>Relatively new to the world of web development, my <span class='highlight'>curiosity</span> led me to embark on a <span class='highlight'>career transition</span> into this exciting.<span className="square"></span></h4>
      </div>
      <div className={`subsection second ${showSecondSection ? 'anim' : ''}`}>
        <h2>WHAT ABOUT NOW</h2>
        <h3>Discovering development has been a <span class='highlight'>wonderful</span> experience.</h3>
        <h4>I can't wait to contribute to <span class='highlight'>innovative projects</span>, so I am genuinely enthusiastic about open-source <span class='highlight'>collaboration</span> or employment <span class='highlight'>opportunities</span> to further my skills.<span className="square"></span></h4>
      </div>
      <div className={`subsection third ${showThirdSection ? 'anim' : ''}`}>
        <h2>WORK IN PROGRESS</h2>
        <h3>I can't wait to share <span class='highlight'>my passion</span> for role-playing games.</h3>
        <h4>In my spare time, I <span class='highlight'>unleash</span> my narrative prowess, binding it with my <span class='highlight'>powers</span> of developer. Will result a thrilling fusion of <span class="hightlight">pixel art</span> and cutting-edge machine learning,<br /> birthing a <span class="hightlight">totally free and browser-accessible</span> experience tailored for rolists.<span className="square"></span></h4>
      </div>
    </div>
    </>
  );
}
