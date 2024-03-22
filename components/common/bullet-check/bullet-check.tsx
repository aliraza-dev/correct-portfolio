import { SVGS } from "@/assets/svg";

export function BulletCheck({ content }: { content: string }) {
  return (
    <div>
      <span className="text-gray-500 w-4 h-3 mr-2 rounded-full inline-flex items-center justify-center">
        {SVGS.CHECKMARK}
      </span>
      {content}
    </div>
  );
}
