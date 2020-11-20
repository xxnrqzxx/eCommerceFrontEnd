class Contents extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            darken: false
        };

        this.darkBG = this.darkBG.bind(this);
        this.clickDocument = this.clickDocument.bind(this);
    }

    componentDidMount () {
        // alert("width: " + window.innerWidth + " height: " + window.innerHeight);
        if(window.innerWidth < 420) {
            document.querySelector('.navbar').className += " fixed-top";
        } else {
            document.querySelector('.navbar').classList.remove('fixed-top');
        }
        document.addEventListener('click', this.clickDocument);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.clickDocument);
    }

    clickDocument(e) {
        const element = e.target;
        const navBar = document.querySelector('.navbar-collapse');
        const navTogglerOpen = document.querySelector('.navbar-toggler-icon');
        const navTogglerClose = document.querySelector('.navbar-toggler-icon-close');

        if(!(element.classList.contains('nav-link') || element.classList.contains('navbar-collapse') || element.classList.contains('navbar-toggler-icon') || element.classList.contains('navbar-toggler'))) {
            if(navBar.classList.contains('show')) {
                navBar.classList.remove("show", "collapse");
                navBar.className += " collapsing";
                navBar.classList.remove("collapsing");
                setTimeout(function() {
                    navBar.className += " collapse";
                }, 200);
                document.body.style.backgroundColor = "";
                this.darkBG();
            }
        }
    }

    render() {
        let color = this.state.darken ? "rgba(0, 0, 0, 0.5)" : "";

        document.body.style.backgroundColor = color;

        return(
            <div className="d-block">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a href="#" className="navbar-brand">GRAFIX2GO</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" onClick={this.darkBG}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <svg width="3em" height="3em" viewBox="0 0 16 16" className="bi bi-arrow-right close-navbar" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
            </nav>
        </div>  
        );
    }

    darkBG() {
        this.setState(state => ({
            darken: !this.state.darken
        }));
    }
}


ReactDOM.render(<Contents />, document.querySelector('#nav'));