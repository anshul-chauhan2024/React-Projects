
// Function to generate pagination pages
const getPages = (current, total) => {
    const pages = [];
    if (current >= 5) {
        for (let i; i <= 5; i++) {
            pages.push(i)
        }
    } else {
        if (current <= 3) {
            pages.push(1, 2, 3, '...', total)
        } else if (current >= total - 2) {
            pages.push(1, '...', total - 2, total - 1, total)
        } else {
            pages.push(1, '...', current - 1, current, current + 1, '...', total)
        }
    }

    return pages
}


const Pagination = ({ page, pageHandler, dynamicPage }) => {
    return (
        <div className="mt-10 space-x-4 flex justify-center">

            {/* Previous Button */}
            <button
                disabled={page === 1}
                className={`${page === 1 ? 'bg-red-400' : 'bg-red-600'} p-1 rounded-md cursor-pointer px-3 text-white`}
                onClick={() => pageHandler(page - 1)}
            >
                Prev
            </button>

            {getPages(page, dynamicPage)?.map((item, index) => {
                return (
                    <span key={index} className={`cursor-pointer ${item === page ? 'font-bold text-red-600' : 'text-black'}`} onClick={() => typeof item === 'number' && pageHandler(item)}>{item}</span>
                )
            })}

            {/* Next Button */}
            <button
                disabled={page === dynamicPage}
                className={`${page === dynamicPage ? 'bg-red-400' : 'bg-red-600'} p-1 rounded-md cursor-pointer px-3 text-white`} onClick={() => pageHandler(page + 1)}
            >
                Next
            </button>
        </div>
    )
}

export default Pagination