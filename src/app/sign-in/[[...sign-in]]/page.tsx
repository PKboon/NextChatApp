import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
	return (
		<div className="bg-primary h-screen flex justify-center items-center">
			<SignIn />
		</div>
	);
};
export default SignInPage;
