import emailjs from '@emailjs/browser';
import { CONTACT_SERVICE_ID, CONTACT_TEMPLATE_ID, PUBLIC_KEY } from './email';
import toast from 'react-hot-toast';

export async function sendEmail({data, action}) {
  emailjs.send(CONTACT_SERVICE_ID, CONTACT_TEMPLATE_ID, data, PUBLIC_KEY).then(
    () => {
    toast.success("تم الإرسال .. شكرا لكم :)");
    action();
    },
    (error) => {
        toast.error("يبدو أن هناك خطأ ما حاول مرة أخرى")
    }
  );
}
