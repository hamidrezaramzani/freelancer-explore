import mongoose from "@/database/connection";

interface IUser {
    fullname: string;
    email: string;
    password: string;
    createAt: string;
    updatedAt: string;
}
const Schema = mongoose.Schema;

const UserSchema = new Schema<IUser>({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    }
}, { timestamps: true });


export default mongoose.models.User || mongoose.model("User", UserSchema);