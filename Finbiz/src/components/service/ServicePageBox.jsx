const ServiceBox = ({img,name,no}) => {
  return (
    <div className=" relative overflow-hidden bg-white rounded-2xl shadow-lg servicePageBox cursor-pointer" >
      <div className="h[100%] w-[100%] overflow-hidden ">
        <img src={img} height='100%' alt="" className="transition duration-500" />
      </div>

      <div className=" p-5  ">
        <h5 className="text-xl font-bold text-blue-700">{name}</h5>
        <p className="text-gray-600 my-2 ">Porta sagittis diam imperdiet eu, tempus nisi aenean vehicula torquent dis mattis nullam bibendum morbi laoreet lobortis id</p>
      </div>

      <p className="absolute top-0 right-0 bg-white p-3 text-lg font-bold text-blue-700 rounded-bl-2xl">
       {no}
      </p>
    </div>
  )
}

export default ServiceBox