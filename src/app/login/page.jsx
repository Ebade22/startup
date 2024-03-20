import React from 'react'
import Button from '../components/Button'

export default function Login() {
  return (
    <section>
    <form>
<ul>
<li><input type='text' name='user' id='user' placeholder='username'/></li>

<li><input type="password" name="pwd" id="pwd" placeholder='password' /></li>
<li><Button status="Log In"/></li>
</ul>


    </form>


</section>
  )
}
