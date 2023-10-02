import './register.component.css';
const RegisterComponent=()=>{
    return(
        <div className='container'>
      
        <form className='form'>
      <dl>
      <h2><span className='bi bi-person-fill'>Login Form</span></h2>
            <dt>User Name</dt>
            <dd><input type="text" className='form-control' /></dd>
            <dt>Password</dt>
            <dd><input type="password" className='form-control'  /></dd>
            <dt>Email Id</dt>
            <dd><input type="email" className='form-control' /></dd>
            <button className='btn btn-primary w-100'>Submit</button>
      </dl>
        </form>
        </div>
    )
}

export default RegisterComponent