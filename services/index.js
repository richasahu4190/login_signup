

export const register_user = async (formData) => {
    try {
        const res = await fetch('https://login-signup-oy7zdbute-richa-sahus-projects.vercel.app/api/Auth/register', {
            headers: {
                'Content-Type': 'application/json',
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
        const res = await fetch('https://login-signup-oy7zdbute-richa-sahus-projects.vercel.app/api/Auth/login', {
            headers: {
                'Content-Type': 'application/json',
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
