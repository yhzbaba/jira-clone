import {UserButton} from "@/features/auth/components/user-button";
import {getCurrent} from "@/features/auth/actions";
import {redirect} from "next/navigation";

export default async function Home() {
    // const router = useRouter();
    // const {data, isLoading} = useCurrent()
    //
    // useEffect((() => {
    //     if (!data && !isLoading) {
    //         router.push("/sign-in")
    //     }
    // }), [data])
    const user = await getCurrent();
    if (!user) redirect("/sign-in");

    return (
        <div>
            <UserButton/>
        </div>
    )
}
