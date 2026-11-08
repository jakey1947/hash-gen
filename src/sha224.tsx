import { LaunchProps } from "@vicinae/api";
import { Hash } from './lib'

export default function Command(props: LaunchProps<{ arguments: { content: string } }>) {
    const { content } = props.arguments;

    return Hash("sha224", content);
}