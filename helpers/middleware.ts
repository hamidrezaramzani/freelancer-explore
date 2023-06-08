// /middleware.ts
import { NextResponse } from "next/server";
import type { NextApiRequest } from "next";
import { getIronSession } from "iron-session/edge";
import ironSessionOptions from "./ironSessionOptions";

export const middleware = async (req: NextApiRequest) => {
    const res = NextResponse.next();
    const session = await getIronSession(req, res, ironSessionOptions);
    const user = (session as any).user;

    if (!user) {
        return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    return res;
};