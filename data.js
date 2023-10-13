import work1 from './src/assets/images/work1.png';
import work2 from './src/assets/images/work2.png';
import work3 from './src/assets/images/work3.png';
import work4 from './src/assets/images/work4.png';

export const data = [
  {
    subobjects: [
      {
        title: ' تصميم وتوريد وتركيب وصيانة محطات الخرسانة الجاهزة.  صيانة كلا من',
        image: work1,
        description: `PLC 
        - Electronics Card 
        - عمل منظومة التحكم الالى 
        - HMI`,
      },
    ],
  },
  {
    title: 'Electronics Card',
    subobjects: [
      {
        title: 'صيانة لكافة الكروت والأجهزة الإلكترونية المستخدمة في مجال الصناعة مثل:',
        image: work2, // Change to a string if this is an image source URL
        description: `
        PLC
        - AC and drives
        - Interface
        - HMI
        - Servo Drive`
      },
    ],
  },
  {
    subobjects: [
      {
        title: ' تصميم وتوريد وتركيب وصيانة لوحات الجهد المنخفض بجميع أنواعها على سبيل المثال :',
        image: work3, // Change to a string if this is an image source URL
        description: `
        لوحات المناورة Two out of three
        - لوحات التوزيع Distribution Panel up to 6000A
        - لوحات تحسين معامل القدرة Power factor correction Panel`
      },
    ],
  },
  {
    subobjects: [
      {
        title: ' الدعم الفني والتدريب',
        image: work4, // Change to a string if this is an image source URL
        description: `PLC
        - Different controller technique
        - Control- Drive 
        - HMI
        - Different controller technique
        - Scada`
      },
    ],
  },
];
