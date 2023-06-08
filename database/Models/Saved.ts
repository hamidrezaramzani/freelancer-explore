import mongoose from "@/database/connection";

import * as Mongoose from "mongoose";
interface ISavedTags {
    title: string;
    link: string;
}
interface ISaved {
    name: string;
    hash: string;
    projectTitle: string;
    projectDescription: string;
    projectBudget: string;
    projectTags: ISavedTags[];
    projectLink: string;
    user?: mongoose.Types.ObjectId | string;
}
const Schema = mongoose.Schema;

const SavedSchema = new Schema<ISaved>({
    name: {
        type: String,
    },
    hash: {
        type: String
    },
    projectTitle: {
        type: String
    },
    projectDescription: {
        type: String
    },
    projectBudget: {
        type: String
    },
    projectTags: [{ title: String, link: String }],
    projectLink: {
        type: String
    },
    user: {
        type: Mongoose.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true });


export default mongoose.models.Saved || mongoose.model("Saved", SavedSchema);