
import React from "react";

class Register extends React.Component{

  
constructor(props){
  super(props);
  this.state={
    email:'',
    password:'',
    name:''
  }
}

onNameChange=(e)=> this.setState({name:e.target.value})
onEmailChange=(e)=> this.setState({email:e.target.value})
onPasswordChange=(e)=>this.setState({password:e.target.value})
onRegisterSubmit=(e)=>{
  e.preventDefault();
  console.log(this.state);
  fetch('http://localhost:3000/register',{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({
      email:this.state.email,
      password:this.state.password,
      name:this.state.name
    })
  })
  .then(res=>res.json())
  .then(user=>{
    if(user){
      console.log(user)
      this.props.loadUser(user)
      this.props.onRouteChange('home');
    }
  })


}





  render(){
    return (
      <article class="br3  ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main class="pa4 black-80">
          <form class="measure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="f1 fw6 ph0 mh0">Register</legend>
              <div class="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="name"
                  id="name"
                  onChange={this.onNameChange}
                />
              </div>
              <div class="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={this.onEmailChange}
                />
              </div>
              <div class="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Register"
                onClick={this.onRegisterSubmit}
              />
            </div>
          </form>
        </main>
      </article>
    );

  }



}

export default Register;