import logo from '../../assets/arch-logo.png'
import NavigationLink from "../navigation/NavigationLink.jsx";

function NavigationSection() {
    const date = new Date();

    const formatted = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    return <>
        <div className="w-full h-[75px] px-[100px]">
            <div className="h-full w-full flex justify-around items-center">
                <div className="w-[200px] h-full">
                    <img src={logo} alt={"logo"} className="mx-auto h-full w-auto"/>
                </div>

                <div className="flex-1 h-full flex justify-center items-center gap-[40px]">
                    <NavigationLink isActive={true}>Home</NavigationLink>
                    <NavigationLink>About</NavigationLink>
                    <NavigationLink>Channels</NavigationLink>
                    <NavigationLink>Contact Us</NavigationLink>
                </div>

                <div className="w-[200px] h-full flex flex-col align-middle justify-center">
                    <p className="text-[12px] font-bold text-[var(--color-primary)]">{formatted}</p>
                    <p className="text-[10px] text-[var(--color-accent)]">Today's News</p>
                </div>
            </div>
        </div>
    </>
}

export default NavigationSection;