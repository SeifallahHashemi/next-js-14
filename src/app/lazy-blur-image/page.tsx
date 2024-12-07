import getBase64 from "@/components/LazyLoadingImage/get-base64";
import Image from "next/image";

export default async function Page() {
    const remoteImage = "https://images.unsplash.com/photo-1723015614356-4d41137469fb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const blurData = await getBase64(remoteImage);

    return(
        <main className="flex min-h-screen flex-col items-center justify-center">
            <Image src={remoteImage} width={600} height={600} alt=""/>
        </main>
    )
}