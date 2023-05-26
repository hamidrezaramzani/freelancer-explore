import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../../database/Models/User";
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { email } = req.query;
        const isExists = await User.findOne({ email });
        if (isExists) {
            return res.status(200).json({
                isDuplicate: true
            });
        } else {
            return res.status(200).json({
                isDuplicate: false
            });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default handler;