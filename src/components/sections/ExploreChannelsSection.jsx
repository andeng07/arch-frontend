import ExploreChannelsButton from "../buttons/ExploreChannelsButton.jsx";

function ExploreChannelsSection() {
    return <>
        <div className="py-[25px] px-[50px] bg-[var(--color-dark)] w-full flex flex-col gap-[25px]">
            <div className="text-(--color-background) flex flex-col gap-[10px]">
                <h1 className="text-[24px] font-bold">Explore more channels</h1>
                <h1 className="text-[12px]">Discover content across different channels</h1>
            </div>
            <div className="flex gap-[25px]">
                <ExploreChannelsButton>ADVERTISEMENTS</ExploreChannelsButton>
                <ExploreChannelsButton>ENTERTAINMENT</ExploreChannelsButton>
                <ExploreChannelsButton>EVENTS</ExploreChannelsButton>
                <ExploreChannelsButton isActive={true}>NEWS & CURRENT AFFAIRS</ExploreChannelsButton>
                <ExploreChannelsButton>SPORTS</ExploreChannelsButton>
                <ExploreChannelsButton>CULTURE</ExploreChannelsButton>
            </div>
        </div>
    </>
}

export default ExploreChannelsSection;