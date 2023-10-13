// components/CCard.tsx
import { StaticImageData } from 'next/image';
import Subobject from './Subobject';

type SubobjectType = {
  title: string;
  image: StaticImageData; 
  description: string;
};

const CCard = ({ subobjects }: { subobjects: SubobjectType[] }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md">
      <div className="flex mx-auto items-center justify-center">
        {subobjects.map((subobject, index) => (
          <Subobject key={index} subobject={subobject} />
        ))}
      </div>
    </div>
  );
};

export default CCard;
