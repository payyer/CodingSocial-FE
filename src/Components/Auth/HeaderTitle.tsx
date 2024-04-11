interface HeaderTitleProps {
    title?: string,
}
function HeaderTitle({ title }: HeaderTitleProps) {
    return (
        <div className="w-full text-center">
            <h4 className=" text-2xl font-bold text-white mb-2">{title}</h4>
            <p className=" text-lg">Welcome to Coding Social for IT 🔥👩🏻‍💻🔥</p>
        </div>
    )
}

export default HeaderTitle