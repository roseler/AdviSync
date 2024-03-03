import "../App.css";
import logo from "../img/cics.png";

function signup() {
  return (
    <body>
      <header className="App-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="college">COLLEGE OF COMPUTING SCIENCES</div>
        <div className="batsu">BatStateU Alangilan Campus </div>
      </header>
      <main>
        <div className="login-form">
          <svg
            className="rectangle-2"
            width="503"
            height="88"
            viewBox="0 0 499 88"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_10)">
              <path
                d="M0 0H499V57.1906C465.343 124.294 265.876 64.6662 189.503 38.8896C113.13 13.113 0 72.0601 0 72.0601V0Z"
                fill="#1573B6"
              />
            </g>
          </svg>
          <div className="login">SIGN-UP</div>
          <div className="line-1"></div>
          <div className="username"></div>
          <input
            type="email"
            className="username-input"
            placeholder="Username"
          />
          <div className="password"></div>
          <input
            type="password"
            className="password-input"
            placeholder="Password"
          />
          <div className="password"></div>
          <input
            type="password"
            className="password-input"
            placeholder="Re-enter Password"
          />
          <div className="lgn-btn">
            <button className="login-button">Sign up</button>
          </div>
        </div>
      </main>
    </body>
  );
}

export default signup;