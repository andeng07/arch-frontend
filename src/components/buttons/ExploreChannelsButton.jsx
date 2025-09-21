function ExploreChannelsSection({children, isActive}) {
    return <>
        <a href="/public" className={`p-[15px] hover:bg-[var(--color-highlight)] transition-all duration-300 ${isActive ?
            "font-bold bg-[var(--color-highlight)] text-[var(--color-primary)]" : 
            "bg-[var(--color-background)] text-[var(--color-dark)]"}""`}>
            {children}
        </a>
    </>
}

export default ExploreChannelsSection;