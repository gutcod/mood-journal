import { SignUp } from '@clerk/nextjs'

const SignUpPage = () => {
  return <SignUp redirectUrl="/sign-in" signInUrl="/sign-in" />
}

export default SignUpPage
