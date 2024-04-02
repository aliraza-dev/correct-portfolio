"use client";

import { ShortenUrl } from "@/actions";
import TransparentButton from "@/components/common/transparent-button";
import isValidUrl from "@/utils/validate-url";
import Link from "next/link";
import { useState } from "react";

const UrlShortner = () => {
  const [url, setUrl] = useState<string>("");
  const [encodedUrl, setEncodedUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function handleClick() {
    if (!url || !isValidUrl(url)) {
      setError("Invalid URL");

      setEncodedUrl("");

      return;
    }

    setError("");

    const shortUrl = await ShortenUrl(url);

    if (shortUrl) {
      setEncodedUrl(shortUrl);
    }
  }

  return (
    <section className="w-full my-10">
      <div className="w-full justify-center text-center flex mb-10">
        <div className="prose">
          <h1 className="prose text-3xl sm:px-4 lg:px-20 text-center">
            Url Shortner
          </h1>
        </div>
      </div>

      {/* Body */}

      <div className="flex flex-col mx-auto w-1/2 justify-center">
        <input
          type="text"
          name="url"
          id="url"
          value={url}
          placeholder="Please enter your URL here"
          onChange={(e) => setUrl(e.target.value)}
          className="shadow-lg border rounded-md px-3 py-3 mb-2"
          required
        />

        <div className="mb-5 prose">
          {error && <div className="text-red-500">Errors: {error}</div>}
          {encodedUrl && (
            <h4 className="text-gray-500">
              Shortened URL:{" "}
              <Link href={encodedUrl || "#"} target="_blank">
                <span className="ml-2 text-gray-900 font-bold">
                  {encodedUrl}
                </span>
              </Link>
            </h4>
          )}
        </div>

        <div className="flex justify-center">
          <TransparentButton text="Submit" onClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default UrlShortner;
