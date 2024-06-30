import heroImg from "../../Assets/satisfied-lovely-woman-holds-modern-cell-phone 1 1.png"
import heroImgTwo from "../../Assets/Image.png"
const HeroSection = ()=>{
    return (
        <div className="flex-col">
                <div className=" w-auto  h-auto flex justify-center items-center gap-2.5 ">
                    <div className="pt-4 ">
                        <p className="text-black text-5xl font-bold">Experience Events Like<br/> Never Before</p>
                        <p className=" font-semibold">Discover, Book, and Enjoy the Best Events and Concerts in Your City</p>
                        <p className="font-semibold text-2xl pt-8">Book tickets for ...</p>
                        <div className="flex gap-10">
                                <div className="flex-col  pt-8  w-40 justify-center items-center text-center ">
                                    <p className="border-2 border-orange-600 font-semibold rounded-md">Concerts</p>
                                    <p className="border-2 border-orange-600 mt-4 font-semibold rounded-md">Conference</p>
                                    <p className="border-2 border-orange-600 mt-4 font-semibold rounded-md">Theatre</p>
                                </div>
                                <div className="flex-col  pt-8 gap-8 w-40 justify-center items-center text-center">
                                    <p className="border-2 border-orange-600 font-semibold rounded-md">Beach Resort</p>
                                    <p className="border-2 border-orange-600 mt-4 font-semibold rounded-md">Festivals</p>
                                    <p className="border-2 border-orange-600 mt-4 font-semibold rounded-md">Family Events</p>
                                </div>
                        </div>
                    </div>
                 <img className="  pt-48 h-fit" src={heroImg} alt={"hero image"}/>
                </div>

                <div className=" w-auto  h-auto flex justify-center items-center gap-14 mt-28">
                    <div>
                        <img className=" h-fit justify-center items-center" src={heroImgTwo} alt={"second hero image"}/>
                    </div>
                    <div>
                    <p className="text-black text-5xl font-bold  ">Unlock the Best <br/>Events in Your City</p>
                    <p className="font-semibold pt-4">Simple, Fast, and Reliable Event Ticket Reservations</p>
                    </div>
                </div>

        </div>
    );
}
export default HeroSection