const constants = {
KeyboardType : {
default: "default",
numberPad : "number-pad",
decimalPad : "decimal-pad",
numeric : "numeric",
email_address : "email-address",
phone_pad : "phone-pad"
},
Icon : {
facebook : "facebook",
google : "google",
lock : 'lock',
user: 'user'
},
justifyContent : {
center : 'center',
flexEnd : 'flex-end',
flexStart : 'flex-start',
spaceAround : 'space-around',
spaceBetween : 'space-between',
spaceEvenly : 'space-evenly'
},
alignItems:{
center : 'center',
flexEnd : 'flex-end',
flexStart : 'flex-start',
baseling : 'baseling',
stretch : 'stretch'
},
navigationRoutes : {
Login : 'Login',
Signup: 'Signup',
Onboarding : 'Onboarding'
},
 email : "email",
 password : "password",
 forgotDetails : "Forgot your login details?",
 getHelpSigning : "Get help signing in.",
 donthaveAccountMessage : "Don't have an account?",
 signUp : "Sign up.",
 alreadyHaveAccount : "Already Have an account?",
 signIn : "Sign in.",
 none : "none",
 FaceBook : "Facebook",
 Google : "Google",
 appName : 'SocialAppLS',
}
export const validation = {
    invalidEmail : "auth/invalid-email",
    wrongPassword : "auth/wrong-password",
    userNotFound : "auth/user-not-found",
    invalidEmailMessage : "invailid Email ! Please enter a valid email address",
    wrongPasswordMessage : "password is incorrect !!",
    userNotFoundMessage : "invailid user or Email not registered !",
    enterPassword : "Please enter password!",
    enterConfirmPassword : 'Please enter confirm password!',
    shortRangeError : "Password should be atleast 6 characters long!",
    passwordNotMatch : "Password and confirm Password should be same!",
    
}

export default constants;
