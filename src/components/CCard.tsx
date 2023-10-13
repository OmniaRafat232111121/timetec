import Subobject from './Subobject';

const CCard = ({ title, subobjects }:any) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="flex mx-auto items-center justify-center ">
        {subobjects.map((subobject, index) => (
          <Subobject key={index} subobject={subobject} />
        ))}
      </div>
    </div>
  );
};

export default CCard;
