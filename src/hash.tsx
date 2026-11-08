import { LaunchProps } from "@vicinae/api";
import { Hash } from "./lib"

export default function Command(props: LaunchProps<{ arguments: { algorithm: string, content: string } }>) {
	const { algorithm, content: input } = props.arguments;

	return Hash(algorithm, input);
}