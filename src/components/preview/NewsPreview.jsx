function NewsPreview({layout, id, type, title, category, readTime, description}) {
    const renderMedia = (className) => {
        if (type === "image") {
            return (
                <img
                    className={className}
                    src={`/posts/${id}/0.jpg`}
                    alt={title}
                />
            );
        }
        return (
            <video
                className={className}
                src={`/posts/${id}/0.mp4`}
                controls
            />
        );
    };


    switch (layout) {
        case "text-media-vertical": {
            return <>
                <div className="w-full h-full flex flex-col">
                    <div className="px-[10px]">
                        <h1 className="w-full text-[32px] text-[var(--color-dark)] line-[52px]">
                            {title}
                        </h1>
                        <p className="pb-[10px] text-[var(--color-primary)]">
                            <span className="font-bold text-[16px]">{category}</span><span
                            className="text-[16px]"> | {readTime}</span>
                        </p>
                    </div>
                    {renderMedia('w-full h-full object-cover rounded-[10px]')}
                </div>
            </>
        }

        case "text-media-horizontal": {
            return <>
                <div className="w-full flex gap-[10px] items-start">
                    <div className="w-[400px] flex flex-col gap-[5px]">
                        <h1 className="text-[20px] text-[var(--color-dark)] leading-[28px]">{title}</h1>
                        <p className="text-[var(--color-accent)] text-[12px]">
                            {description.slice(0, 100)}...
                        </p>
                        <p>
                            <span className="font-bold text-[var(--color-primary)] text-[12px]">{category}</span>
                            <span className="text-[var(--color-accent)] text-[12px]">{" "} | {readTime}</span>
                        </p>
                    </div>

                    <div className="flex-1">
                        {renderMedia('w-full h-full object-cover rounded-[10px]')}
                    </div>
                </div>
            </>
        }

        case "media-text-overlay": {
            return <>
                <div className="w-full relative">
                    {renderMedia('rounded-[10px] w-full h-full object-cover')}

                    <div className="absolute inset-0 bg-black opacity-60 pointer-events-none rounded-[10px]"></div>

                    <div className="absolute inset-0 flex items-end p-[20px] max-w-[540px]">
                        <div className="flex flex-col gap-[10px]">
                            <h2 className="text-[var(--color-background)] text-[20px] leading-[32px]">{title}</h2>
                            <p className="text-[12px] text-[var(--color-highlight)]">
                                <span className="font-bold">{category}</span><span> | {readTime}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        }

        case "media-text-vertical-v1": {
            return <>
                <div className="flex flex-col gap-[10px] w-full">
                    {renderMedia('w-full h-[200px] object-cover rounded-[10px]')}
                    <div className="flex flex-col gap-[10px] w-full">
                        <p className="text-[var(--color-secondary)] text-[12px]">
                            <span className="font-bold">{category}</span>
                            <span> | {readTime}</span>
                        </p>
                        <h1 className="text-[var(--color-primary)] text-[16px] leading-[24px] font-bold">{title}</h1>
                    </div>
                </div>
            </>
        }

        case "media-text-horizontal": {
            return <>
                <div className="w-full h-full flex flex-col">
                    {renderMedia('w-full h-full object-cover rounded-[10px]')}

                    <div className="pt-[10px] flex flex-col gap-[10px]">
                        <h1 className="w-full text-[28px] text-[var(--color-dark)] line-[24px]">
                            {title}
                        </h1>
                        <p className="text-[var(--color-accent)] text-[16px]">
                            {description.slice(0, 100)}...
                        </p>
                        <p className="pb-[10px]">
                            <span className="font-bold text-[var(--color-primary)] text-[16px]">{category}</span><span
                            className="text-[var(--color-accent)] text-[16px]"> | {readTime}</span>
                        </p>
                    </div>
                </div>
            </>
        }

        case "media-text-vertical-v2": {
            return <>
                <div className="flex gap-[10px]">
                    {renderMedia('flex-1 w-[250px] object-cover rounded-[10px]')}

                    <div className="w-full h-full flex flex-col justify-between">
                        <h1 className="text-[20px] text-[var(--color-dark)] leading-[28px]">{title}</h1>
                        <p className="text-[var(--color-accent)] text-[12px]">{description.slice(0, 100)}...</p>
                        <p className="">
                            <span
                                className="font-bold text-[var(--color-primary)] text-[12px]">{category}</span><span
                            className="text-[var(--color-accent)] text-[12px]"> | {readTime}</span>
                        </p>
                    </div>
                </div>
            </>
        }
    }
}


export default NewsPreview;