import React, { useState, useMemo } from "react";
import { Action, ActionPanel, Detail } from "@vicinae/api";
import { sha256, sha512 } from '@noble/hashes/sha2.js';
import { bytesToHex } from "@noble/hashes/utils.js";
import { md5 } from "@noble/hashes/legacy.js";

export function Hash(algorithm: string, input: string) {
  
	const uint8: Uint8Array = new TextEncoder().encode(input)
	const result = bytesToHex(algorithms[algorithm](input));
	return (
		<Detail
			markdown={"# Copy Hash\n## result : " + result + "\nfrom : \"" + input + 
				'"' + "<br>raw input bytes : " + uint8}
			actions={
				<ActionPanel>
					<Action.CopyToClipboard 
					title="copy hash"
					content={result}
					concealed={true}
					/>
				</ActionPanel>
			}
		/>
	);
}

interface Dictionary<T> {
	[key: string]: T;
}

type HashFunction = (a: string) => Uint8Array<ArrayBufferLike>;

const algorithms : Dictionary<HashFunction> = {
	"sha256": (input: string) => sha256(Uint8Array.from(new TextEncoder().encode(input))),
	"sha512": (input: string) => sha512(Uint8Array.from(new TextEncoder().encode(input))),
	"md5": (input: string) => md5(Uint8Array.from(new TextEncoder().encode(input))),
};