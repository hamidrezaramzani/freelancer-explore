import Saved from "@/database/Models/Saved";
import { NextApiRequest, NextApiResponse } from "next";
import digest from "@/helpers/digest";
import { withIronSessionApiRoute } from 'iron-session/next';
import ironSessionOptions from '@/helpers/ironSessionOptions';
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = req.body;
        const id: string = body.projectLink.split("/")[4];
        const userId = (req.session as any).user.id;
        body.user = userId;
        const hash = await digest({ message: `${id}${body.name}` });
        const saved = await Saved.findOne({ hash: hash });
        if (saved) {
            await Saved.deleteOne({ hash: hash });
            return res.status(200).json({
                message: "post save removed",
                isSaved: false,
            });
        }
        body.hash = hash;
        await Saved.create(body);
        return res.status(200).json({
            message: "post saved",
            isSaved: true,
        });
    } catch (error) {
        return res.status(500).json(error);
    }
};

export default withIronSessionApiRoute(handler, ironSessionOptions);