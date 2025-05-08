import RoomProvider from "@/components/RoomProvider";
import { auth } from "@clerk/nextjs/server";
import { ReactNode } from "react";

export default function DocLayout({
  children,
  params: { id },
}: {
  children: ReactNode;
  params: { id: string };
}) {
  auth.protect();
  return <RoomProvider roomId={id}>{children}</RoomProvider>;
}
