import React, { useState, useMemo } from "react";
import { Action, ActionPanel, Detail } from "@vicinae/api";
import { sha224, sha256, sha384, sha512, sha512_224, sha512_256 } from '@noble/hashes/sha2.js';
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
	"sha224": (input: string) => sha224(Uint8Array.from(new TextEncoder().encode(input))),
	"sha512_224": (input: string) => sha512_224(Uint8Array.from(new TextEncoder().encode(input))),
	"sha256": (input: string) => sha256(Uint8Array.from(new TextEncoder().encode(input))),
	"sha512_256": (input: string) => sha512_256(Uint8Array.from(new TextEncoder().encode(input))),
	"sha384": (input: string) => sha384(Uint8Array.from(new TextEncoder().encode(input))),
	"sha512": (input: string) => sha512(Uint8Array.from(new TextEncoder().encode(input))),
	"md5": (input: string) => md5(Uint8Array.from(new TextEncoder().encode(input))),
};