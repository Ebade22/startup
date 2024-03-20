import React from 'react'
import Button from '../components/Button'

export default function SignUp() {
  return (
    <section>
        <form>
<ul>
    <li><input type='text' name='user' id='user' placeholder='username'/></li>
    <li><input type="email" name="email" id="email"placeholder='email address' /></li>
    <li><input type="password" name="pwd" id="pwd" placeholder='password' /></li>
    <li><Button status="Sign Up"/></li>
</ul>


        </form>


    </section>
  )
}
