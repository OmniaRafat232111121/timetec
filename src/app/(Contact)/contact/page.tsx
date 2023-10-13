"use client"
import Image from 'next/image'
import React from 'react'
import computersupport from '../../../assets/images/Computer Support.png';
import ContactForm from '@/components/Contact';
import ContactInfo from '@/components/ContactInfo';
import Connect from '@/components/Connect';

const cardData = [
  {
    title: 'اصلاح وصيانة ال بى ال سى والسيرفو ',
    imageSrc: computersupport,
  },
  {
    title: 'اصلاح وصيانة الاجهزة الطبية المعقدة',
    imageSrc: computersupport,
  },
  {
    title: 'اصلاح وصيانة الانفرترات والشاشات الصناعية',
    imageSrc: computersupport,
  },
 
 
];
const page = () => {
  return (
    <div className=' font-Changa  px-4 py-8  mb-10 z-[-10]' >
     <ContactInfo/>
<div className='grid 2xl:grid-cols-2  grid-cols-1 mx-auto
'>
<ContactForm/>
<Connect/>



</div>

   
    </div>
  )
}

export default page
