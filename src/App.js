import GoogleLogin from "react-google-login";
import "./styles.css";
import { useState } from "react";

export default function App() {
  //use state variables
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [url, setUrl] = useState("");

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    console.log(response);
  };

  return (
    <div className="App">
      <h1>Login w/ Google</h1>
      <h2>Welcome: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>
        Profile Pic: <img src={url} alt={name} />{" "}
      </h2>
      <br />
      <GoogleLogin
        clientId="136092104401-jorrpuda1pbbmo2c24ko1fr6rrl3s6cc.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
