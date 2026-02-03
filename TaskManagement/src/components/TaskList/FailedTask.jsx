
const FailedTask = ({data}) => {
  return (
    <div className="bg-red-400 shrink-0 p-5 rounded-md shadow w-full md:w-90 h-78 relative">
      <div>

        <div className="flex justify-between items-end mb-4">
          <h4 className="text-sm bg-red-600 text-white px-2 py-1 font-medium rounded-md">{data.category}</h4>
          <h4 className="text-sm font-medium">{data.date}</h4>
        </div>

        <div>
          <h4 className="text-2xl font-medium">{data.title}</h4>
          <p className="">{data.description}</p>
        </div>

        <div className='flex justify-between mt-5 '>
          <button className='bg-red-600 px-3 py-2 text-sm w-full text-white border border-white font-medium'>Failed</button>
        </div>


      </div>
    </div>
  )
}

export default FailedTask