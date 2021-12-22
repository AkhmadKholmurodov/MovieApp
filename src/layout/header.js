export default function Header() {
    return(
        <nav>
            <div className="nav-wrapper header__nav #546e7a blue-grey darken-1">
                <a href="#s" className="brand-logo right">React</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="#s">Action</a></li>
                    <li><a href="#s">Trends</a></li>
                    <li><a href="#s">Movie</a></li>
                </ul>
            </div>
      </nav>
    )
}