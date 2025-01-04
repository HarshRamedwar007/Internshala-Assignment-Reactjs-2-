import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Categories() {
    const categories = useSelector((state) => state.book.categories);

    return (
        <section className="mt-4 px-5">
            <h2 className="text-[25px] font-semibold">Search by Categories</h2>
            <section className="mt-3 flex gap-x-5">
                {
                    categories?.map((category => {
                        return (
                            <Link to={"/books/" + category?.type?.toLowerCase()} key={category?.id}>
                                <article className="bg-blue-900 text-white p-4 rounded-md">
                                    <p>{category?.type}</p>
                                </article>
                            </Link>
                        )
                    }))
                }
            </section>
        </section>
    )
}

export default Categories;