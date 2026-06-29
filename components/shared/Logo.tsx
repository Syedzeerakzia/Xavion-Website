import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <h1 className="text-2xl font-bold">
        <span className="text-white">Xavion</span>
        <span className="text-blue-500">Tech</span>
      </h1>
    </Link>
  );
}