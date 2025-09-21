function NavigationLink({children, isActive}) {
    return <>
        <div className="flex flex-col items-center justify-center gap-[2px] group hover:cursor-pointer">
            <a className={`text-[16px] px-[15px] transition-all duration-300 ${isActive ?
                "text-[var(--color-primary)] font-bold" :
                "text-[var(--color-accent)] group-hover:text-[var(--color-primary)]"}`}>{children}</a>

            <div className={`h-[2px] bg-[var(--color-primary)] w-0 transition-all duration-300 ${isActive ?
                "w-full group-hover:w-0" :
                "group-hover:w-full"}`}></div>
        </div>
    </>
}

export default NavigationLink;