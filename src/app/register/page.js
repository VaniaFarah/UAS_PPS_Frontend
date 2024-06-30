"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nik, setNik] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [createdBy, setCreatedBy] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", {
        name: username,
        email,
        password,
        nik,
        address,
        phone_number: phoneNumber,
        birth_date: birthDate,
        created_by: createdBy,
      });

      const token = response.data.token;

      // Save token to local storage
      localStorage.setItem("token", token);

      // Redirect to protected page
      window.location.href = "/";
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#5F9EA0] to-[#00A2B9] min-h-screen">
      <div className="pt-40">
        <div className="flex justify-center">
          <div className="w-[600px] h-[1000px] bg-white bg-opacity-15 rounded-3xl">
            <div className="pt-10 flex justify-center">
              <img src="./iture.png" className="w-[167px] h-[72px]" />
            </div>
            <div className="flex justify-center pt-10">
              <input
                className="focus:ring-4 focus:ring-[#035B71] w-[475px] h-[60px] rounded-3xl px-4 focus:outline-none"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex justify-center pt-6">
              <input
                className="focus:ring-4 focus:ring-[#035B71] w-[475px] h-[60px] rounded-3xl px-4 focus:outline-none"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-center pt-6">
              <input
                className="focus:ring-4 focus:ring-[#035B71] w-[475px] h-[60px] rounded-3xl px-4 focus:outline-none"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center pt-6">
              <input
                className="focus:ring-4 focus:ring-[#035B71] w-[475px] h-[60px] rounded-3xl px-4 focus:outline-none"
                type="text"
                placeholder="NIK"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
              />
            </div>
            <div className="flex justify-center pt-6">
              <input
                className="focus:ring-4 focus:ring-[#035B71] w-[475px] h-[60px] rounded-3xl px-4 focus:outline-none"
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex justify-center pt-6">
              <input
                className="focus:ring-4 focus:ring-[#035B71] w-[475px] h-[60px] rounded-3xl px-4 focus:outline-none"
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="flex justify-center pt-6">
              <input
                className="focus:ring-4 focus:ring-[#035B71] w-[475px] h-[60px] rounded-3xl px-4 focus:outline-none"
                type="date"
                placeholder="Birth Date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <div className="flex justify-center pt-6">
              <input
                className="focus:ring-4 focus:ring-[#035B71] w-[475px] h-[60px] rounded-3xl px-4 focus:outline-none"
                type="text"
                placeholder="Created By"
                value={createdBy}
                onChange={(e) => setCreatedBy(e.target.value)}
              />
            </div>
            <div className="flex justify-center pt-8">
              <button
                className="w-[250px] h-[65px] hover:duration-200 bg-[#87CEEB] text-[#035B71] text-2xl font-bold rounded-2xl hover:ring-4 hover:ring-[#035B71]"
                onClick={handleRegister}
              >
                Simpan
              </button>
            </div>
            <div className="flex justify-center pt-6">
              <div className="text-white">
                Already have an account?{" "}
                <span className="underline">
                  <Link href={"/"}>Sign In</Link>
                </span>{" "}
                here!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
