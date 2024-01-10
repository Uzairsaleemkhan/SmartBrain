
import React from "react";

const Signin=({onRouteChange})=>{


    return (
      <article class="br3  ba shadow-5 b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main class="pa4 black-80">
          <form class="measure center">
            <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
              <legend class="f1 fw6 ph0 mh0">Sign In</legend>
              <div class="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
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
                />
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={_=>onRouteChange('home')}
              />
            </div>
            <div className="lh-copy mt3">
              <p onClick={_=>onRouteChange('register')} className="f6 link dim black db pointer">
                Register
              </p>
            </div>
          </form>
        </main>
      </article>
    );
}

export default Signin;