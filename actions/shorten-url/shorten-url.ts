"use server";

import * as bcrypt from "bcryptjs";

function getRandomSymbol(length: number): string {
  const symbols = "!@#$%^&*()_+=|><";
  let selectedSymbols: string = "";

  for (let sym: number = 0; sym < length; sym++) {
    selectedSymbols += symbols.charAt(
      Math.floor(Math.random() * symbols.length)
    );
  }

  return selectedSymbols;
}

export default async function ShortenUrl(url: string): Promise<string> {
  let shards: string = "";
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(url, salt);

  for (let i: number = 0; i < 8; i++) {
    shards += hash.charAt(Math.floor(Math.random() * hash.length));
  }

  shards += getRandomSymbol(2);

  return `${process.env.MY_DOMAIN}/${shards}`;
}
