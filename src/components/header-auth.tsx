"use client";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Button,
  Avatar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import * as actions from "@/actions";
import { signOut as nextAuthSignOut } from "next-auth/react";

export default function HeaderAuth() {
  const session = useSession();
  let authContent: React.ReactNode;
  if (session.status === "loading") {
    authContent = null;
  } else if (session?.data?.user) {
    authContent = (
      <Popover placement="left">
        <PopoverTrigger>
          <div className="flex">
            <Avatar src={session.data.user.image || ""} />
            <span className="p-2">
              {session?.data?.user?.name?.split(" ")[0] || ""}
            </span>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <div className="p-4">
            <form
              action={async () => {
                await actions.signOut();
                await nextAuthSignOut({ redirect: false });
              }}
            >
              <Button type="submit" color="secondary" variant="bordered">
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="secondary" variant="bordered">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="flat">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    );
  }
  return authContent;
}
