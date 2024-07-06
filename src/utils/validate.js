export const checkValidData = (email , password)=>{
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+])[A-Za-z\d!@#$%^&*()-_=+]{8,}$/.test(password)

    if(!isEmailValid) return 'Please enter a valid email';
    if(!isPasswordValid) return 'Please enter valid password';

    return null;
}
