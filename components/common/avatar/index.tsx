import { Images } from "@/assets/images/images";
import Image from "next/image";

export default function MyAvatar() {
  return (
    <div className="rounded-full py-5 flex justify-center">
      <Image
        src={Images.MyPic}
        className="rounded-full"
        width={200}
        height={200}
        alt="Myavatar"
      />
    </div>
  );
}
