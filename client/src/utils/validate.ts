function validateCredentials (username: string, password: string, password2?: string) {
    let errors = {
        usernameError: "",
        passwordError: "",
        password2Error: ""
    }
    if (!validateUsername(username)) {
       errors.usernameError = "Username is not valid" ;
    }
    if (!validatePassword(password)) {
        errors.passwordError = "Password is not valid";
    }

    if (password2 && (password2 !== password)) {
        errors.password2Error = "Password 2 is not valid";
    }

    return errors;
}

function validateUsername(username: string) {
    const regex = /^[a-zA-Z0-9]{4,}$/;
    return regex.test(username);
}

function validatePassword(password: string) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&_])[A-Za-z\d$@$!%*#?&_]{8,24}$/;
    return regex.test(password);
}

export default validateCredentials;