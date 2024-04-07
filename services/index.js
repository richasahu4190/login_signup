export const register_user = async (formData) => {
    try {
        const res = await fetch('https://login-signup-rb1d.onrender.com/api/Auth/register', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://login-signup-rb1d.onrender.com/'
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in register_user (service) => ', error);
        return error.message
    }
};

export const login_user = async (formData) => {
    try {
        const res = await fetch('https://login-signup-rb1d.onrender.com//api/Auth/login', {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'https://login-signup-rb1d.onrender.com/'
            },
            method: 'POST',
            body: JSON.stringify(formData),
        });
        const data = res.json();
        return data;
    } catch (error) {
        console.log('Error in login_user (service) => ', error);
        return error.message
    }
};
