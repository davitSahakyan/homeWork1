import './App.css';
import React from 'react'
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Home from "./components/home/Home"


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loginedUser: {
                fullName: "",
                userName: "",
                password: '',
                imgUrl: "",
                isLoggedIn: false,
            }
        }
        this.onSubmitButtonClick = this.onSubmitButtonClick.bind(this)
        this.logOutClick = this.logOutClick.bind(this)
    }
  USERS_REGISTRED = [
      {
          id: 1,
          fullName: "Vazgen Sargsyan",
          userName: "vazgenS",
          password: '12345',
          imgUrl: "https://www.aravot-ru.am/wp-content/uploads/2018/12/Vazgen-Sargsyan-3.jpg",
          isLoggedIn: false,
      },
      {
          id: 2,
          fullName: "Galust Sahakyan",
          userName: "galusS",
          password: '12345',
          imgUrl: "https://armenpress.am/static/news/b/2016/02/836354.jpg",
          isLoggedIn: false,
      },
      {
          id: 3,
          fullName: "Nikol Pashinyan",
          userName: "nikolP",
          password: '12345',
          imgUrl: "https://cdnn1.img.armeniasputnik.am/img/07e4/09/1b/24624393_203:0:1172:1066_1920x0_80_0_0_949af6422bb764badada08400648de01.jpg",
          isLoggedIn: false,
      },
      {
          id: 4,
          fullName: "Ashot Erkat",
          userName: "ashotE",
          password: '12345',
          imgUrl: "https://www.aysor.am/news_images/591/1771817_2/f5fb022501fa42_5fb022501fa83.thumb.jpg",
          isLoggedIn: false,
      },
  ]

    onSubmitButtonClick({userName,password}) {
       let loginedUser = this.USERS_REGISTRED.find( user => {
            return user.userName === userName && user.password === password
        })
        debugger;
        this.setState(prevState => ({
            loginedUser: {
                fullName: loginedUser.fullName,
                userName: loginedUser.userName,
                password: loginedUser.password,
                imgUrl: loginedUser.imgUrl,
                isLoggedIn: true,
            }
        }))
    }

    logOutClick() {
        this.setState(prevState => ({
            loginedUser: {
                ...prevState.loginedUser,
                isLoggedIn: false
            }
        }))
    }

    render () {
        let page;
        if(this.state.loginedUser.isLoggedIn) {
            page =  <div className="home-container">
                         <Home activeUser={this.state.loginedUser}/>
                    </div>
        } else {
            page =  <div className="login-container">
                        <Login onSubmitButtonClick = {this.onSubmitButtonClick}/>
                    </div>
        }
        return (
            <div className="main">
                <div className="header-container">
                    <Header logOutClick={this.logOutClick} activeUser={this.state.loginedUser}/>
                </div>
                {page}

            </div>
        );
    }
}

export default App;
