import Button from "@/components/shared/button";
import Image from "next/image";


const JoinAdventure = () => {
    return (
        <div className="join container mx-auto min-h-[265px] relative flex flex-col md:flex-row justify-around items-center gap-y-2 lg:px-10 py-2">
            <div className="content w-full md:w-6/12 flex flex-col gap-y-2 justify-center px-5">
                <h2 className="text-xl font-extrabold z-50">Join the Adventure!</h2>
                <h3 className="font-semibold text-base z-50">Ready to explore new horizons and create unforgettable memories?</h3>
                <Button href={"/signup"} btnName={"Sign up"}/>
            </div>
            <div className="banner w-full md:w-6/12 px-5">
                <Image width={450} height={200} src={"/images/landingPage/join/nextweekwithus_international-tourism-banner.webp"} alt="join the adventure" />
            </div>
            
        </div>
    );
}

export default JoinAdventure;