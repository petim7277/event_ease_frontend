import heroImg from "../../Assets/satisfied-lovely-woman-holds-modern-cell-phone 1 1.png"
const HeroSection = ()=>{
    return (
        <div className="  w-auto  h-auto flex justify-center items-center gap-2.5 ">
            <div className="pt-4 ">
                <p className="text-black text-5xl font-bold">Experience Events Like<br/> Never Before</p>
                <p className=" font-semibold">Discover, Book, and Enjoy the Best Events and Concerts in Your City</p>
            </div>
         <img className="  pt-48 h-fit  " src={heroImg} alt={"hero image"}/>
        </div>
    );
}
export default HeroSection