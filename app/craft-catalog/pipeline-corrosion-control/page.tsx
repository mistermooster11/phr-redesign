import { redirect } from "next/navigation";

// Leftover template route — redirect to the service catalog.
export default function Page() {
  redirect("/craft-catalog");
}
