import Card from "./Card"

interface CardsRendererProps {
    data: any[],
    title: string
}

const CardsRenderer = ({data, title}: CardsRendererProps) => {
    if (data?.length > 0) {
        return (
            <>
                {data.map(obj =>  <Card key={obj._id} {...obj} />)}
            </>
        );
    }

    return <h2 className="mt-5 font-bold">{title}</h2>
}

export default CardsRenderer