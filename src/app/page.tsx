import {
	SignedIn,
	SignedOut,
	SignInButton,
	SignUpButton,
	UserButton,
} from "@clerk/nextjs";
import { Space } from "antd";

import { getCurrentUserFromMongoDB } from "@/actions/usersActions";
import { connectMongoDB } from "@/configs/dbConfig";

connectMongoDB();

const Home = async () => {
	const currentMongoDBUser = await getCurrentUserFromMongoDB();

	return (
		<div className="App">
			{currentMongoDBUser.name}
			<Space>
				<SignedOut>
					<SignInButton />
					<SignUpButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</Space>
		</div>
	);
};
export default Home;
