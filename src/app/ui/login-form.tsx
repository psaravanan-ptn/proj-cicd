"use client"

export default function LoginForm() {
    return (
      <div style={{background: "white", padding: "30px"}}>
        <h2>Login with your credentials</h2>
        <div>
          <label>Email</label>
          <input type="email" name="email" placeholder="Enter your email address" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" placeholder="Enter your password" />
        </div>
        <div>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </div>
    )
}