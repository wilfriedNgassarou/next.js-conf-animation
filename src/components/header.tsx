export function Header() {
  return (
    <header>
      <nav>
        <a href="/" className="logo-container">
          <img src="/next.js.svg" alt="Next Js Logo" />
        </a>
        <ul>
          <li><a href="#">Showcase</a></li>
          <li><a href="#">Docs</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Templates</a></li>
          <li><a href="#">Enterprise</a></li>
        </ul>
      </nav>
      <div>
        <button className="search">
          Search documentation...
          <kbd>CtrlK</kbd>
        </button>
        <a className="button deploy" href="#">
          <svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Vercel icon</title><path d="M24 22.525H0l12-21.05 12 21.05z"></path></g></svg>
          <span>Deploy</span>
        </a>
        <a className="button learn" href="#">Learn</a>
      </div>
    </header>
  )
}