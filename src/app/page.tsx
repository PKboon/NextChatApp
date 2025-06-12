import { Button, Space } from "antd";

export default function Home() {
	return (
		<div className="App">
			<Space>
				<Button type="primary">Primary</Button>
				<Button>Default</Button>
			</Space>
		</div>
	);
}
