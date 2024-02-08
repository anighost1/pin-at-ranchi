import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function ItemCard({ data, setItemProcessing }) {

    const router = useRouter()

    const navigate = () => {
        setItemProcessing(state => !state)
        router.push(`/item/${data._id}`)
        setItemProcessing(state => !state)
    }

    return (
        <div
            className="transition shadow-md cursor-pointer card card-compact w-100 bg-base-100 hover:scale-105 h-80"
            onClick={navigate}
        >
            <figure>
                {data.images[0]?.image && (<Image
                    src={data.images[0]?.image}
                    alt={data.images[0]?.alt}
                    // layout='fill'
                    // objectFit='contain'
                    width={3000}
                    height={3000}
                />)}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <p>{`${data.addressLine1}${data.addressLine2 ? ',' : ''} ${data.addressLine2 || ''}`}</p>
                {/* <div className="justify-end card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    )
}
