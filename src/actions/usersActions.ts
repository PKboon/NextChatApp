import { currentUser } from "@clerk/nextjs/server";

import { connectMongoDB } from "@/configs/dbConfig";
import UserModel from "@/models/userModel";

connectMongoDB();

export const getCurrentUserFromMongoDB = async () => {
	try {
		const clearkUser = await currentUser();

		const mongoUser = await UserModel.findOne({ clerkUserId: clearkUser?.id });
		if (mongoUser) {
			return JSON.parse(JSON.stringify(mongoUser));
		}

		const newUser = await UserModel.create({
			clerkUserId: clearkUser?.id,
			name: clearkUser?.firstName + " " + clearkUser?.lastName,
			userName: clearkUser?.username,
			email: clearkUser?.emailAddresses[0]?.emailAddress || "",
			profilePicture: clearkUser?.imageUrl,
		});

		return JSON.parse(JSON.stringify(newUser));
	} catch (error) {
		console.log(error);
		return {
			error: error instanceof Error ? error.message : "Something went wrong",
		};
	}
};
