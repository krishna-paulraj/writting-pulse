import { Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full h-32 flex items-center justify-between">
      <h1 className="text-xl font-normal">writing.dev</h1>
      <div className="flex gap-2">
        <Twitter height={22} />
        <Link href={"/"} className="font-light underline">
          @writting.dev
        </Link>
      </div>
    </div>
  );
}
