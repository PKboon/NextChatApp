"use client";

import { ConfigProvider } from "antd";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#31304D",
				},
				components: {
					Button: {
						controlHeight: 48,
					},
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
};
