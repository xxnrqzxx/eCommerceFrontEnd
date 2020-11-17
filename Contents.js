class Contents extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            darken: false
        };

        this.darkBG = this.darkBG.bind(this);
    }

    render() {
        let color = this.state.darken ? "rgba(0, 0, 0, 0.5)" : "";

        document.body.style.backgroundColor = color;

        console.log(color);

        return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a href="#" className="navbar-brand">GRAFIX2GO</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" onClick={this.darkBG}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavbar">
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
        );
    }

    darkBG() {
        this.setState(state => ({
            darken: !this.state.darken
        }));
        console.log("darkBG");
    }
}

// document.addEventListener("click", event => {
//     const element = event.target;
//     console.log(element);

//     if(element.classList.contains('navbar-toggler-icon')) {
//         darkenBG();
//     }
// })


// function darkenBG() {
//     const bgColor = document.body;
//     const sideBar = document.querySelector('#myNavbar');

//     if(sideBar.classList.contains("collapsing") && bgColor.style.backgroundColor === "") {
//         bgColor.style.backgroundColor = "red";
//     } else if(bgColor.style.backgroundColor === "red"){
//         bgColor.style.backgroundColor = "";
//     }
// }

ReactDOM.render(<Contents />, document.querySelector('#nav'));