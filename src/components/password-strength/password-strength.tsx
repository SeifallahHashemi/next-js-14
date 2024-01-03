'use client';
import React, { useEffect } from "react";
import { Input } from 'antd';
import { Eye, EyeOff } from 'lucide-react';
import ShowPasswordStrength from "@/components/password-strength/show-password-strength";
import { passwordStrength } from "check-password-strength";

type Strength = 0 | 1 | 2 | 3;
const PasswordStrength = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [strength, setStrength] = React.useState<Strength>(0);
  const [password, setPassword] = React.useState("");

  useEffect(() => {
    const strengthId = passwordStrength(password).id as Strength
    setStrength(passwordStrength(password).id as Strength)
  });
  return (
    <div className={"flex flex-col gap-2"}>
      <ShowPasswordStrength strength={strength}/>
      <Input.Password
        onChange={(value) => setPassword(value.target.value)}
        placeholder='input password'
        iconRender={(visible) => (visible ? <Eye /> : <EyeOff />)}
        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}
      />
    </div>
  );
};

export default PasswordStrength;
