import heroImg from "../../Assets/emojis.jpg"
const HeroSection = ()=>{
    return (
        <div className="bg-black  w-full  h-96 mt-8 border-orange-600 border-2 ">
         <img className="float-right mr-12 w-6/12 h-80 mt-4" src={heroImg} alt={"hero image"}/>
        </div>
    );
}
export default HeroSection