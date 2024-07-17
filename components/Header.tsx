import { createClient } from "@/prismicio";
import InlineSvg from "@/components/InlineSvg";

export default async function Header(){
	const client = createClient();
	const settings = await client.getSingle("settings");

	return (
		<header>
			<InlineSvg />
		</header>
	)
}