import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import NavigationSection from "./components/sections/NavigationSection.jsx";
import "./index.css"
import TaglineBanner from "./components/banner/TaglineBanner.jsx";
import ChannelBanner from "./components/banner/ChannelBanner.jsx";
import HeadlineSection from "./components/sections/HeadlineSection.jsx";
import NewsArticlesSection from "./components/sections/NewsArticlesSection.jsx";
import VideoArticlesSection from "./components/sections/VideoArticlesSection.jsx";
import ExploreChannelsSection from "./components/sections/ExploreChannelsSection.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="w-full">
            <div className="max-w-[1440px] mx-auto flex flex-col items-center">
                <NavigationSection/>
                <TaglineBanner/>
                <ChannelBanner/>
                <HeadlineSection/>
                <ExploreChannelsSection/>
                <NewsArticlesSection/>
                <VideoArticlesSection/>
            </div>
        </div>
    </StrictMode>
)
