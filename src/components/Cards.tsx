import Image from 'next/image'
import computer from '../assets/images/pc.png';
import rect from '../assets/images/rect.png'
const Cards = () => {
  const cardsitems=[
    {
      title:'صيانة لكافة الكروت والاجهزة الاليكترونية ',
      image:computer,
      back:rect,

    },{
      title:'صيانة لكافة الكروت والاجهزة الاليكترونية ',
      image:computer,
      back:rect,

    },
    {
      title:'صيانة لكافة الكروت والاجهزة الاليكترونية ',
      image:computer,
      back:rect,

    },{
      title:'صيانة لكافة الكروت والاجهزة الاليكترونية ',
      image:computer,
      back:rect,
    }
  ]
  return (
  <div className='md:absolute md:bottom-[40px] md:right-[180px] md:mx-auto md:flex md:items-center 
  md:justify-center'>
  <div className='lg:grid xl:grid-cols-4 lg:grid-cols-2 hidden  items-center justify-center
   gap-8 text-orange'>
    {cardsitems.map((card, index) => (
      <div
        key={index}
        className={`card-with-background  
        flex  justify-between px-4 py-2`}
      >
        <div className='flex flex-col md:flex-row items-center justify-between  
        gap-[20px] space-x-[30px]'>
        <h3 className='mt-3 text-right text-white text-[1.25rem] md:w-[200px]'>{card.title}</h3>
        <Image src={card.image} alt={card.title} />
          </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default Cards
