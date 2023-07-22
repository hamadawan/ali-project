import React, { Fragment, useState, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from './Button';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

interface FormData {
  userType: 'buyer' | 'supplier';
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  productsInterested: string;
  estimatedMonthlyVolume: string;
  referralSource: string;
}

const defaultFormData: FormData = {
  userType: 'buyer',
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  productsInterested: '',
  estimatedMonthlyVolume: '',
  referralSource: '',
};

const FormModal: React.FC = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.firstName || !formData.email) {
      setIsOpen(false);
      return;
    }
    try {
      setLoading(true);
      emailjs.sendForm('service_ywgtkst', 'template_g5zq0pi', form.current, 'Z2qGEhfSte7EUC8t9');
      setFormData(defaultFormData);
    } catch (err) {
      toast.error('Something went wrong.');
      console.log(err);
    }
    setIsOpen(false);
    setLoading(false);
  };

  return (
    <Transition
      show={isOpen}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
      as={Fragment}
    >
      <div className="flex items-center justify-center">
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          <div className="">
            <div className="m-8 fixed inset-2 overflow-scroll">
              <Dialog.Panel>
                <div className="flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
                    <form ref={form} onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label htmlFor="userType" className="block text-gray-700 font-bold mb-2">
                          I am a
                        </label>
                        <select
                          id="userType"
                          name="userType"
                          value={formData.userType}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="buyer">Buyer</option>
                          <option value="supplier">Supplier</option>
                        </select>
                      </div>
                      <div className="flex justify-around">
                        <div className="mb-4">
                          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="productsInterested" className="block text-gray-700 font-bold mb-2">
                          Products Interested In Sourcing
                        </label>
                        <textarea
                          id="productsInterested"
                          name="productsInterested"
                          value={formData.productsInterested}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="estimatedMonthlyVolume" className="block text-gray-700 font-bold mb-2">
                          Estimated Monthly Volume of Units
                        </label>
                        <input
                          type="number"
                          id="estimatedMonthlyVolume"
                          name="estimatedMonthlyVolume"
                          value={formData.estimatedMonthlyVolume}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-5">
                        <label htmlFor="referralSource" className="block text-gray-700 font-bold mb-2">
                          How Did You Hear About Us? (optional)
                        </label>
                        <input
                          type="text"
                          id="referralSource"
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="flex justify-center">
                        <Button text={loading ? 'Loading...' : 'Submit'} onClick={handleSubmit} />
                      </div>
                    </form>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </div>
    </Transition>
  );
};

export default FormModal;


