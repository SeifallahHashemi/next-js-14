"use client";
import React, { useState } from "react";
import { LockKeyhole } from "lucide-react";
import OTPInput from "otp-input-react";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import { BsTelephoneFill } from "react-icons/bs";
import "react-phone-input-2/lib/style.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "@/libs/firebase.config";

const OtpAuth = () => {
  const [otp, setOtp] = useState();
  const [loading, setLoading] = useState(false);
  const [ph, setPh] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  const onCaptchaVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // ...
            onSingUp();
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        },
        auth,
      );
    }
  };

  function onSignUp() {
    setLoading(true);
    onCaptchaVerify();

    const appVerifier = window.recaptchaVerifier;

    const formatPh = "+" + ph;

    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }

  function onOTPVerify() {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        setUser(res.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div
      className={
        "grid h-screen max-w-full place-content-center place-items-center space-y-4"
      }
    >
      <div id="recaptcha-container"></div>
      {user ? (
        <h2 className="text-center text-2xl font-medium text-white">
          👍Login Success
        </h2>
      ) : showOTP ? (
        <>
          <div>
            <LockKeyhole
              size={44}
              className={"text-rose-800"}
              strokeWidth={2.75}
            />
          </div>
          <div>
            <OTPInput
              value={otp}
              onChange={setOtp}
              autoFocus
              OTPLength={6}
              otpType="number"
              disabled={false}
              secure
              className={"otp-container"}
            />
          </div>
          <button
            onClick={onOTPVerify}
            className={
              "flex w-full items-center justify-center bg-teal-700 py-2 text-cyan-950"
            }
          >
            {loading ? (
              <CgSpinner className={"animate-spin"} />
            ) : (
              <span>Verify OTP</span>
            )}
          </button>
        </>
      ) : (
        <>
          <div className="mx-auto w-fit rounded-full bg-white p-4 text-emerald-500">
            <BsTelephoneFill size={30} />
          </div>
          <label
            htmlFor=""
            className="text-center text-xl font-bold text-white"
          >
            Verify your phone number
          </label>
          ;
          <PhoneInput country={"ir"} value={ph} onChange={setPh} />;
          <button
            onClick={onSignUp}
            className="flex w-full items-center justify-center gap-1 rounded bg-emerald-600 py-2.5 text-white"
          >
            {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
            <span>Send code via SMS</span>
          </button>
        </>
      )}
    </div>
  );
};

export default OtpAuth;
