"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FromButtonProps {
  children: React.ReactNode;
}
export default function FromButton({ children }: FromButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" isLoading={pending}>
      {children}
    </Button>
  );
}
