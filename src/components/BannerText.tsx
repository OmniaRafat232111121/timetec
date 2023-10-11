import Container from "./Container";
import { motion } from "framer-motion";

interface Props {
  title: string;
}

const BannerText = ({ title }: Props) => {
  return (
    <div className="  sm:inline-block absolute top-[-170px] left-0 w-full h-full">
      <Container className="flex h-full flex-col items-center  justify-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:text-[6.25rem] text-[4rem] md:mt-0 mt-[50px]
           md:max-w-[800px] font-bold text-white 
          font-Changa text-right "
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-lg text-white md:text-[1.25rem] text-[14px]
           md:max-w-[760px] text-right  font-Changa"
        >
          
تايم تكنولوجى لديها فريق من المهندسين والفنيين المتخصصين في صيانة كافة المهمات
التي يتم توريدها بمعرفة الشركة كما أن لديها إمكانية تقديم الخدمات المتكاملة بموقع العميل

        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex  md:flex-row flex-col justify-between   md:gap-x-[150px]
          gap-y-[10px] mt-6"
        >
          <button className="px-16 py-4 rounded-md text-white 
           hover:text-white
           bg-orange hover:bg-blue duration-200 text-sm uppercase font-semibold">
          خدماتنا
          </button>
          <button className=" px-16 py-4 rounded-md text-white bg-blue hover:bg-orange
          hover:text-white
           duration-200 text-sm uppercase font-semibold">
            تواصل معنا
          </button>
          
        </motion.div>
      </Container>
    </div>
  );
};

export default BannerText;