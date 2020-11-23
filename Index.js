class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            darken: false
        };

        this.darkBG = this.darkBG.bind(this);
        this.clickDocument = this.clickDocument.bind(this);
        this.fixedTop = this.fixedTop.bind(this);
    }

    componentDidMount () {
        document.addEventListener('click', this.clickDocument);
        this.fixedTop();
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.clickDocument);
        this.fixedTop();
    }

    clickDocument(e) {
        const element = e.target;
        console.log(element);
        const navBar = document.querySelector('.navbar-collapse');

        if(!(element.classList.contains('nav-link') || element.classList.contains('nav-item') || element.classList.contains('navbar-collapse') || element.classList.contains('navbar-toggler-icon') || element.classList.contains('navbar-toggler'))) {
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

    fixedTop() {
        const navBar = document.querySelector('.navbar');

        if(window.innerWidth <= 800) {
            navBar.className += " fixed-top";
        } else {
            navBar.classList.remove('fixed-top');
        }
    }

    render() {
        let color = this.state.darken ? "rgba(0, 0, 0, 0.5)" : "";
        let scroll = this.state.darken ? "hidden" : "visible";

        document.body.style.backgroundColor = color;
        document.body.style.overflowY = scroll;

        return(
            <div className="d-block d-lg-none">
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

class Contents extends React.Component {
    render() {
        return(
            <div>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, reiciendis possimus voluptatibus aperiam impedit officia earum, natus laborum magni explicabo iure. Libero, ipsam. Neque, beatae saepe? Eveniet autem atque magni.
            </div>
        );
    }
}


ReactDOM.render(<Navbar />, document.querySelector('#nav'));
ReactDOM.render(<Contents />, document.querySelector('#content'));