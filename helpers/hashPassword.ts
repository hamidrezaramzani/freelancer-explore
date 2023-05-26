import bcrypt from "bcrypt";
const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt);
};

export default hashPassword;
