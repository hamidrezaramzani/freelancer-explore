const ironSessionOptions = {
    cookieName: "freelancerexploreCookie",
    password: "complex_password_at_least_32_characters_long",
    // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    }
};

export default ironSessionOptions;