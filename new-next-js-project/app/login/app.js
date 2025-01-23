// import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/dist/types/components";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <p className="text-gray-700 mt-4">Please login to access your profile.</p>
      <LoginLink>
        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Login</button>
      </LoginLink>
    </div>
  );
}
