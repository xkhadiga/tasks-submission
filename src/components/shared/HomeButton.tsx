import Link from "next/link";
import { Button } from "../ui/button";
export default function HomeButton() {
  return (
    <Link href="/">
      <Button  className=" cursor-pointer">
        Back Home
      </Button>
    </Link>
  );
}
