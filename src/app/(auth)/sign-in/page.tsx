import {SignInCard} from "@/features/auth/components/sign-in-card";
import {getCurrent} from "@/features/auth/actions";
import {redirect} from "next/navigation";

const SignInPage = async () => {
    const user = await getCurrent();

    if (user) {
        redirect("/")
    }

    return <SignInCard/>
}

export default SignInPage;
