// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";

// export default async function ProfilePage() {
//   const session = await getKindeServerSession();

//   // Redirect to login if the user is not authenticated
//   if (!session) {
//     redirect("/login");
//   }

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="text-2xl text-black font-bold">Welcome to your profile!</h1>
//       <p className="text-gray-700 mt-4">This is a protected page.</p>
//     </div>
//   );
// }

























// pages/profile.js
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from 'next/navigation';

export default async function Profile() {
  const session = await getKindeServerSession();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
    </div>
  );
}











