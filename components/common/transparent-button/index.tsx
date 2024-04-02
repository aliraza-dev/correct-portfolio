import { SVGS } from "@/assets/svg";

interface TransparentButtonProps {
  onClick?: () => void;
  text: string;
}

const TransparentButton: React.FC<TransparentButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-row rounded ring-1 gap-2 ring-black px-7 py-2 cursor-pointer bg-[rgba(255,255,255,0.7)]"
    >
      {text}
      <div className="w-5 animate-bounce motion-safe:animate-pulse">
        {SVGS.RIGHT_ARROW}
      </div>
    </div>
  );
};

export default TransparentButton;
