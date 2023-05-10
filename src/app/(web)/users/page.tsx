import getAllUsers from "@/lib/getAllUsers"
import { Metadata } from "next";
import Link from "next/link";

// export const metadata = {
//     title: 'Users',
//     description: 'All users',
// }

export async function generateMetadata(): Promise<Metadata> {
    const users = await getAllUsers();

    return {
        title: users[0].company.name,
        description: users[0].address.city
    }
}


export default async function UsersPage() {

    const users = await getAllUsers();

    return (
        <div className="w-screen min-h-screen flex flex-col">
            <div className="flex-grow grid place-items-center ">
                <Link href={'/'}>
                    <div className="my-5">Back to Home()</div>
                </Link>
                {
                    users.map(user => (
                        <Link key={user.id} href={`/users/${user.id}`}>
                            <div  className="text-3xl">{user.name}</div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}