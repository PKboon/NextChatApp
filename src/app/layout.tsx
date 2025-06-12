import type { Metadata } from "next";

import { ThemeProvider } from "@/providers/ThemeProvider";

import "./globals.css";

export const metadata: Metadata = {
	title: "Next Chat App",
	description: "Realtime chat app",
	icons: {
		icon: "/images/favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
