import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import prisma from "../libs/prismadb";

export async function getSession() {
    const session = await getServerSession(authOptions);

    return session;
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string,
            },
        });

        if (!currentUser) {
            return null;
        }

        return {
            ...currentUser,
            createdAt: currentUser?.createdAt.toISOString(),
            updatedAt: currentUser?.updatedAt.toISOString(),
            emailVerified: currentUser?.emailVerified?.toDateString() || null,
        };
    } catch (error: any) {
        return null;
    }
}
