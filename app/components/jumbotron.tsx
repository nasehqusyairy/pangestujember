export type JumbotronProps = {
    title: string
}

export function Jumbotron(props: JumbotronProps) {
    return (
        <div style={{
            backgroundImage: "linear-gradient(rgba(1, 45, 29, 0.2), rgba(1, 45, 29, 1)), url(/images/hero.png)",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
        }}>
            <div className="container py-36 mx-auto h-full">
                <h1 className="text-center text-white text-4xl lg:text-6xl">{props.title}</h1>
            </div>
        </div>
    )
}