"use client";
import { useSearchParams } from "next/navigation";
import { Input } from "@nextui-org/react";
import * as actions from "@/actions";
export default function SearchInput() {
  const searchParams = useSearchParams();
  const defaultVal = searchParams.get("term") as string;

  return (
    <form action={actions.search}>
      <Input name="term" defaultValue={defaultVal} />
    </form>
  );
}
