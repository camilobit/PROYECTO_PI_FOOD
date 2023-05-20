function validation(userData) {
    const errors = {};

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = 'Ponga un email válido';
    }
    if (!userData.email) { // userData.email.length === ''
        errors.email = 'Escribe un email para que te dé acceso';
    }
    if (userData.email.length > 35) {
        errors.email = 'que no se pase de los 35 caracteres';
    }
    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = 'recomienda que tengas al menos un número.';
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'Que tu acceso secreto tenga entre 6 y 10 caracteres';
    }

    return errors;
}

export default validation;