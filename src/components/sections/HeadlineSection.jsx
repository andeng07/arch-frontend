import data from '../../data/data.json'

import NewsPreview from "../preview/NewsPreview.jsx";

function HeadlineSection() {
    return <>
        <div className="px-[50px] py-[45px] w-full grid grid-cols-2 gap-[25px]">
            <div className="row-span-3">
                <NewsPreview
                    layout="text-media-vertical"
                    id = {0}
                    type={data[0].type}
                    title={data[0].title}
                    description={data[0].description}
                    category="Sample Category"
                    readTime="1 minute read"
                    media={`/posts/${data[0].id}/0.${data[0].type === "image" ? "jpg" : "mp4"}`}
                />
            </div>

            {data.slice(1, 4).map((item) => (
                <NewsPreview
                    id={item.id}
                    layout="text-media-horizontal"
                    type={item.type}
                    title={item.title}
                    description={item.description}
                    category="Sample Category"
                    readTime="1 minute read"
                    media={`/posts/${item.id}/0.${item.type === "image" ? "jpg" : "mp4"}`}
                />
            ))}
        </div>
    </>
}

export default HeadlineSection;