import React from 'react';


const SignIn = ({onRouteChange}) => {
  return (
<article className="br3 ba b--black-40 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" >
    <main className="pa4 black-80">
        <div className="measure" >
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                    <label className="db  lh-copy f3" htmlFor="email-address">Email</label>
                    <input className="pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                 </div>
                 <div className="mv3">
                    <label className="db fw6 lh-copy f3" htmlFor="password">Password</label>
                    <input className="b pa2 input-reset ba bw1 b--black bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                 </div>
             </fieldset>
             <div className="">
                 <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib"
                 onClick = {() => onRouteChange('home')} 
                 type="submit" 
                 value="Sign in" />
             </div>
            <div className="lh-copy mt3">
                <p onClick = {() => onRouteChange('Register')} href="#0" className="f4 link dim pointer black db">Register</p>
            </div>
        </div>
    </main>
</article>
    
    );
}

export default SignIn;