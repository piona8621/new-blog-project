import {  LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Navbar() {
  // Fetch the session (only server-side)
  const session = await getKindeServerSession();

  return (
    <div>
      <ul className="flex justify-between text-black px-20 mt-10">
        <li><Link href="/">Home</Link></li>
        <div className="flex justify-end gap-4">
          <li><Link href="/profile">Profile</Link></li>
          <LoginLink>
            <button className="bg-blue-600 border rounded px-2">Login</button>
          </LoginLink>
          <LogoutLink>
          <button className="border bg-blue-400 rounded px-2">Logout</button>
          </LogoutLink>
        </div>
      </ul>
    </div>
  );
}



















// // components/Navbar.js
// import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import Link from 'next/link';

// export default async function Navbar() {
//   const session = await getKindeServerSession();

//   return (
//     <div className="flex justify-between p-4 bg-gray-800 text-white">
//       <div>
//         <Link href="/" className="px-4">Home</Link>
//         <Link href="/profile" className="px-4">Profile</Link>
//       </div>
//       <div className="flex items-center gap-4">
//         {!session ? (
//           <LoginLink>
//             <button className="bg-blue-600 px-4 py-2 rounded">Login</button>
//           </LoginLink>
//         ) : (
//           <LogoutLink>
//             <button className="bg-red-600 px-4 py-2 rounded">Logout</button>
//           </LogoutLink>
//         )}
//       </div>
//     </div>
//   );
// }








































































































