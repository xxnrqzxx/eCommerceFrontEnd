class Contents extends  React.Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a href="#" className="navbar-brand">Navbar</a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" id="listDropdownMenu" data-toggle="dropdown" role="button">Dropdown</a>
                        
                            <div className="dropdown-menu">
                                <a href="#" className="dropdown-item">Something</a>
                                <a href="#" className="dropdown-item">Something else</a>
                                <a href="#" className="dropdown-item">Something else else</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }


}

ReactDOM.render(<Contents />, document.querySelector('#nav'));