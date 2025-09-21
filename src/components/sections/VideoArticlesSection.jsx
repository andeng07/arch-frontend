import NewsPreview from "../preview/NewsPreview.jsx";
import data from "../../data/data.json";

function VideoArticlesSection() {
    return <>
        <div className="w-full p-[50px] flex flex-col gap-[25px]">
            <div className="pt-[50px] flex items-baseline justify-between">
                <h1 className="text-[var(--color-primary)] text-[36px] font-bold">News In Video</h1>
                <h2 className="text-[var(--color-secondary)] text-[16px] font-bold">Show More</h2>
            </div>
            <div className="grid grid-cols-2 gap-[25px]">
                {
                    data.filter(function(it) {
                        return it.type === "video"
                    }).slice(1, 2).map((it) => {
                        return <>
                            <NewsPreview
                                layout="media-text-vertical-v2"
                                id={it.id}
                                type={it.type}
                                title={it.title}
                                description={it.description}
                                category="Sample Category"
                                readTime="1 minute read"
                            />
                        </>
                    })
                }
                {
                    data.filter(function(it) {
                        return it.type === "video"
                    }).slice(0, 1).map((it) => {
                        return <div className="row-span-3">
                            <NewsPreview
                                layout="media-text-horizontal"
                                id={it.id}
                                type={it.type}
                                title={it.title}
                                description={it.description}
                                category="Sample Category"
                                readTime="1 minute read"
                            />
                        </div>
                    })
                }
                {
                    data.filter(function(it) {
                        return it.type === "video"
                    }).slice(2, 4).map((it) => {
                        return <>
                            <NewsPreview
                                layout="media-text-vertical-v2"
                                id={it.id}
                                type={it.type}
                                title={it.title}
                                description={it.description}
                                category="Sample Category"
                                readTime="1 minute read"
                            />
                        </>
                    })
                }
            </div>
        </div>
    </>
}

export default VideoArticlesSection;