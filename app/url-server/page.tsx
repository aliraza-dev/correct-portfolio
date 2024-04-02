import { SVGS } from "@/assets/svg";

const UrlShortner = () => {
  async function handleClick(formData: FormData) {
    "use server";

    const url = formData.get("url");

    console.log("Here is your URL", url);
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
        <form action={handleClick}>
          <input
            type="text"
            name="url"
            id="url"
            placeholder="Please enter your URL here"
            className="shadow-lg border rounded-md px-1 py-3 w-full"
          />

          <div className="flex justify-center my-2">
            <button className="flex flex-row rounded ring-1 gap-2 ring-black px-7 py-2 cursor-pointer bg-[rgba(255,255,255,0.7)]">
              Submit
              <div className="w-5">{SVGS.RIGHT_ARROW}</div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UrlShortner;
