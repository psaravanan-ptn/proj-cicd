import LoginForm from "@/app/ui/login-form";
import Modal from "@/app/ui/modal"

export default function LoginModal() {
  return (
    <Modal>
      <div>
        <h1>Login Page from Intercepting Routes</h1>
        <LoginForm />
      </div>
    </Modal>
  )
}