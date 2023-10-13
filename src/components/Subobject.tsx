import Image from "next/image";

// components/Subobject.js
const Subobject = ({ subobject }:any) => {
  return (
    <div className="  p-4 rounded-lg shadow-md hover:translate-y-4 duration-150 transition-all 
    ease-in-out 
    ">
      <Image src={subobject.image} alt={subobject.title} className="w-[500px]
       h-auto mx-auto mb-2" />
     <div className=" p-4 w-full rounded-md hover:scale-110 duration-300 ease-in-out 
     transition-all ">
     <h3 className="md:text-lg text-md  font-semibold mt-2">{subobject.title}</h3>
      <p className="text-xs text-gray-500">{subobject.description}</p>
     </div>
    </div>
  );
};

export default Subobject;
