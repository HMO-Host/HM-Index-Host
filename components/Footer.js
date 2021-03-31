import React from 'react';
import { TinaProvider, TinaCMS, useCMS } from 'tinacms';
function Footer() {
  const cmsc = useCMS();
  return (
    <footer id="footer">
        <div className="inner">
            <ul className="icons">
            </ul>
            <ul className="copyright">
                <li>&copy; Hikari Mind</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li><li>Work with Next.JS</li>
            </ul>
            <button onClick={() => cmsc.toggle()}>
             {cmsc.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
            </button>
        </div>
    </footer>
  )
}

export default Footer
