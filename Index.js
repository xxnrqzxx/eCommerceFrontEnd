class Navbar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            darken: false
        };

        this.darkBG = this.darkBG.bind(this);
        this.clickDocument = this.clickDocument.bind(this);
        this.changeOrientation = this.changeOrientation.bind(this);
        this.hideSideBar = this.hideSideBar.bind(this);
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
        console.log(element.parentElement);
        const navBar = document.querySelector('.navbar-collapse');
        const navItem = document.querySelectorAll('.nav-item');

        if(!(element.classList.contains('nav-link') || element.classList.contains('nav-item') || element.classList.contains('navbar-collapse') || element.classList.contains('navbar-toggler-icon') || element.classList.contains('navbar-toggler'))) {
            if(navBar.classList.contains('show')) {
                this.hideSideBar();
                this.darkBG();
            }
        }

        if(element.classList.contains('nav-link') || element.classList.contains('nav-item')) {
            for(let i=0; i<navItem.length; i++) {
                navItem[i].classList.remove('active');
            }
            element.parentElement.className += " active";
        }

    }

    fixedTop() {
        const navBar = document.querySelector('.navbar');
        const navBrand = document.querySelector('.navbar-brand');

        if(window.innerWidth <= 970) {
            navBar.className += " fixed-top";
            navBrand.innerHTML = "<img class='g2g' src='./images/Page/logo-sm.png'>";
        } else {
            navBrand.innerHTML = "<img class='g2g-lg' src='./images/Page/logo-lg.png'>"; 
            navBar.classList.remove('fixed-top');

        }
    }


    render() {
        // let nav = this.state.darken ? "-1" : "1";
        let dark = this.state.darken ? "brightness(50%)" : "brightness(100%)";
        let color = this.state.darken ? "rgba(0, 0, 0)" : "";
        let scroll = this.state.darken ? "hidden" : "visible";
    
        document.body.style.backgroundColor = color;
        document.body.style.overflowY = scroll;

        $(document).ready(function() {
            $('.background').css("display", "block");
        })

        window.addEventListener('resize', this.changeOrientation);

        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <a href="#" className="navbar-brand"></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar" onClick={this.darkBG}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <button className="close-navbar">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                            </svg>
                        </button>
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Contents darkenImage = {dark} />
            </div>
        );
    }

    changeOrientation() {
        const navBar = document.querySelector('.navbar');
        const navBrand = document.querySelector('.navbar-brand');
        if(window.innerWidth <= 970) {
            navBrand.innerHTML = "<img class='g2g' src='./images/Page/logo-sm.png'>";
            navBar.className += " fixed-top";
        } else {
            navBrand.innerHTML = "<img class='g2g-lg' src='./images/Page/logo-lg.png'>";  
            navBar.classList.remove('fixed-top');
            this.hideSideBar();
            this.setState(state => ({
                darken: false
            }));
        }
    }

    hideSideBar() {
        const navBar = document.querySelector('.navbar-collapse');
        navBar.classList.remove("show", "collapse");
            navBar.className += " collapsing";
            navBar.classList.remove("collapsing");
            setTimeout(function() {
                navBar.className += " collapse";
            }, 200);
            document.body.style.backgroundColor = "";
        }

    darkBG() {
        this.setState(state => ({
            darken: !this.state.darken
        }));
    }
}

class Contents extends React.Component {


    render() {
        let filter = this.props.darkenImage;
        let navOpened = this.props.navOpened;

        const style = {
            filter: filter
        };

        $(document).ready(function() {

            $('.carousel').carousel({
              interval: 5000
            })

            setTimeout(function() {
                $('.carousel-indicators').fadeOut("fast");
            }, 5000);

            $('.carousel').on({
                mouseenter: function(){
                    $('.carousel-indicators').fadeIn("fast");
                },
                mouseleave: function(){
                    setTimeout(function(){
                        $('.carousel-indicators').fadeOut("fast");
                    }, 5000);
                },
                click: function(){
                    $('.carousel-indicators').fadeIn("fast");
                }
            });
          });

        return(
            <div id="headcontent" className="d-flex-row justify-content-center">
                <h1 style={style} className="services content">Our Services</h1>
                <div className="services container">
                    <div id="image-carousel" className="carousel slide carousel-fade" data-ride="carousel" style={style}>
                        <ol className="carousel-indicators">
                            <li data-target="#image-carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#image-carousel" data-slide-to="1" className=""></li>
                            <li data-target="#image-carousel" data-slide-to="2" className=""></li>
                            <li data-target="#image-carousel" data-slide-to="3" className=""></li>
                        </ol>
                        <div className="carousel-inner text-white">
                            <div className="carousel-item active">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src="./images/Services/logodesign.png"></img>
                                    <div className="card-body d-none d-md-block">
                                        <p>It is a visual shortcut to marketing your business, presenting your image and getting your message across to all clients via ad placement, event marketing & other advertising medium.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src="./images/Services/brochure.png"></img>
                                    <div className="card-body d-none d-md-block">
                                        <p>Set your business apart with a unique brochure. Simply tell us what you want your brochure to communicate and we'll let you know exactly what your brochure design will cost.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src="./images/Services/graphicdesign.png"></img>
                                    <div className="card-body d-none d-md-block">
                                        <p>No matter what your budget is, we are more than happy to talk you through and show you a variety of simple and effective ways to enhance your business through graphic design.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card">
                                    <img className="card-img-top img-fluid" src="./images/Services/businesscards.png"></img>
                                    <div className="card-body d-none d-md-block">
                                        <p>Every company or individual needs an identity and we at Grafix2Go think you should make a very pleasing impression with your business recognition.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#image-carousel" className="carousel-control-next" role="button" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                        </a>
                        <a href="#image-carousel" className="carousel-control-prev" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                        </a>
                    </div>
                </div>       
                <h1 style={style} className="products content">Our Products</h1>
                <div className="products container">
                    <div className="card-group text-white text-center" style={style}>
                        <div className="card">
                            <div id="card-carousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="card-img-top" src="./images/Products/Shirt/customshirt1.jpg"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="card-img-top" src="./images/Products/Shirt/customshirt2.jpg"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="card-img-top" src="./images/Products/Shirt/customshirt3.jpg"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Personalized T-Shirt</h6>
                            </div>
                            <a href="#card-carousel" className="carousel-control-next" role="button" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                            <a href="#card-carousel" className="carousel-control-prev" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                        </div>
                        <div className="card">
                            <div id="card-carousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="card-img-top" src="./images/Products/Shirt/customshirt1.jpg"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="card-img-top" src="./images/Products/Shirt/customshirt2.jpg"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="card-img-top" src="./images/Products/Shirt/customshirt3.jpg"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Personalized T-Shirt</h6>
                            </div>
                            <a href="#card-carousel" className="carousel-control-next" role="button" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                            <a href="#card-carousel" className="carousel-control-prev" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                        </div>
                        <div className="card">
                            <div id="card-carousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="card-img-top" src="./images/Products/Shirt/customshirt1.jpg"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="card-img-top" src="./images/Products/Shirt/customshirt2.jpg"></img>
                                    </div>
                                    <div className="carousel-item">
                                        <img className="card-img-top" src="./images/Products/Shirt/customshirt3.jpg"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">Personalized T-Shirt</h6>
                            </div>
                            <a href="#card-carousel" className="carousel-control-next" role="button" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                            <a href="#card-carousel" className="carousel-control-prev" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}

ReactDOM.render(<Navbar />, document.querySelector('#nav'));
