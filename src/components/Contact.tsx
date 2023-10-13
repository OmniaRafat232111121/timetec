import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  phone: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    console.log('Form submitted');
  };

  return (
    <form className="w-full max-w-lg mx-auto shadow-lg  p-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-left text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none 
          focus:ring focus:border-blue-300"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-left text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="subject" className="block text-left text-gray-700 font-bold mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          {...register('subject', { required: 'Subject is required' })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm">{errors.subject.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-left text-gray-700 font-bold mb-2">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          {...register('phone', { required: 'Phone is required' })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}
      </div>

      <div className="mb-6">
        <button
          type="submit"
          className="w-full px-3 py-2 bg-orange 
           text-white font-bold bg-blue-500 rounded-lg hover:bg-blue
            focus:outline-none focus:ring focus:border-blue"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
