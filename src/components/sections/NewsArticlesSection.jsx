import NewsPreview from "../preview/NewsPreview.jsx";

import data from "/src/data/data.json";

function NewsArticlesSection() {
    return <>
        <div className="w-full bg-[var(--color-muted)] p-[50px] flex flex-col gap-[25px]">
            <div className="flex flex-col justify-center items-center gap-[25px]">
                <div className="row-span-3 flex items-center justify-center gap-[25px]">
                    {
                        data.filter(function(it) {
                            return it.type === "image"
                        }).slice(0, 2).map((it) => {
                            return <>
                                <NewsPreview
                                    layout="media-text-overlay"
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

            <div className="pt-[50px] flex items-baseline justify-between">
                <h1 className="text-[var(--color-primary)] text-[36px] font-bold">News Articles</h1>
                <h2 className="text-[var(--color-secondary)] text-[16px] font-bold">Show More</h2>
            </div>

            <div className="flex justify-center items-start gap-[25px]">
                {
                    data.filter(function(it) {
                        return it.type === "image"
                    }).slice(2, 6).map((it) => {
                        return <>
                            <NewsPreview
                                layout="media-text-vertical-v1"
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

export default NewsArticlesSection;