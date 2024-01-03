import React from "react";
import { RegisterLink, LoginLink, getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Button } from "@nextui-org/react";
// import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';

const KindeApp = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isAuthed = await isAuthenticated();
  return (
    <div>
      {isAuthed ? <LogoutLink><Button color={"danger"}>Logout</Button></LogoutLink> : (
        <>
          <LoginLink><Button color={"primary"} variant={"ghost"}>Sign in</Button></LoginLink>
          <RegisterLink><Button color={"default"} variant={"flat"}>Sign up</Button></RegisterLink>
        </>
      )}
    </div>
  );
};

export default KindeApp;