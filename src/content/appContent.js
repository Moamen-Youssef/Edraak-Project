import {
  BsFillBarChartFill,
  BsReverseLayoutTextWindowReverse,
} from 'react-icons/bs';
import { FaDigitalTachograph, FaHouseUser } from 'react-icons/fa';
import {
  FaBuildingFlag,
  FaDiagramNext,
  FaDiagramPredecessor,
  FaDiagramProject,
} from 'react-icons/fa6';
import { IoLayersSharp } from 'react-icons/io5';
import { LuUsers } from 'react-icons/lu';
import { RiVerifiedBadgeLine } from 'react-icons/ri';

export function appContent() {
  const homePageContent = {
    title: {
      ar: 'إدراك الرقمية لتقنية المعلومات',
      en: 'Idrak Digital Information Technology',
    },
    description: {
      ar: '  مؤسسة سعودية مقرها الرئيسي بمدينة الرياض متخصصة في مجال تكنولوجيا المعلمات والأمن السيبراني تعمل على خدمة القطاعين العام والخاص وكسب رضاء الشركاء وبناء شركات قوية ومستمرة',
      en: 'A Saudi organization headquartered in Riyadh, specializing in the field of information technology and cybersecurity. It serves both the public and private sectors, aiming to gain partner satisfaction and build strong and enduring partnerships.',
    },
  };

  const servicesContent = {
    title: {
      ar: 'خدماتنا',
      en: 'Services',
    },
    description: {
      title: {
        ar: 'نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا',
        en: 'Lorem ipsum dolor sit amet consectetur',
      },
      text: {
        ar: 'نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا',
        en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem!',
      },
    },
    services: [
      {
        serviceIcon: {
          icon: IoLayersSharp,
          color: '#367cff',
        },
        serviceName: {
          ar: 'تطوير البرمجيات',
          en: 'Software Development',
        },
        serviceDescription: {
          ar: 'نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص',
          en: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        },
      },
      {
        serviceIcon: {
          icon: RiVerifiedBadgeLine,
          color: '#bef1be',
        },
        serviceName: {
          ar: 'خدمات الجودة',
          en: 'Quality Services',
        },
        serviceDescription: {
          ar: 'نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص',
          en: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        },
      },
      {
        serviceIcon: {
          icon: BsFillBarChartFill,
          color: '#9f6bd1',
        },
        serviceName: {
          ar: 'تحليل البيانات',
          en: 'Data Analysis',
        },
        serviceDescription: {
          ar: 'نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص',
          en: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        },
      },
      {
        serviceIcon: {
          icon: BsReverseLayoutTextWindowReverse,
          color: '#08f8f8',
        },
        serviceName: {
          ar: 'واجهات المستخدم',
          en: 'User Interfaces',
        },
        serviceDescription: {
          ar: 'نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص',
          en: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        },
      },
      {
        serviceIcon: {
          icon: LuUsers,
          color: '#e7e754',
        },
        serviceName: {
          ar: 'خدمات استشارية',
          en: 'Consulting Services',
        },
        serviceDescription: {
          ar: 'نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص',
          en: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        },
      },
      {
        serviceIcon: {
          icon: FaHouseUser,
          color: '#eeaa2c',
        },
        serviceName: {
          ar: 'الموارد البشرية',
          en: 'Human Resources',
        },
        serviceDescription: {
          ar: 'نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نصتخيلي نصتخيلي نص تخيلي نص تخيلي نص تخيلي نص تخيلي نص',
          en: 'Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur',
        },
      },
    ],
  };

  const productsContent = {
    title: {
      ar: 'منتجاتنا',
      en: 'Products',
    },
    products: [
      {
        productIcon: FaDiagramPredecessor,
        title: {
          ar: 'المكتب السري',
          en: 'The Secret Office',
        },
        description: {
          ar: 'النص الثاني تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات نا تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات',
          en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem!',
        },
        id: '2',
      },
      {
        productIcon: FaDiagramNext,
        title: {
          ar: 'نظام ال pos',
          en: 'POS System',
        },
        description: {
          ar: 'النص الثالث تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات نا تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات',
          en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem!',
        },
        id: '3',
      },
      {
        productIcon: FaBuildingFlag,
        title: {
          ar: 'نظام تواصل الاتصالات والأرشفة الالكترونية',
          en: 'Electronic Communication and Archiving System',
        },
        description: {
          ar: 'نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات نا تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات',
          en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem!',
        },
        id: '4',
      },
      {
        productIcon: FaDigitalTachograph,
        title: {
          ar: 'نظام ERP',
          en: 'ERP System',
        },
        description: {
          ar: 'نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات نا تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات',
          en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem!',
        },
        id: '5',
      },
    ],
  };

  const projectsContent = {
    title: {
      ar: 'أعمالنا',
      en: 'Projects',
    },
    description: {
      title: {
        ar: 'نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا',
        en: 'Lorem ipsum dolor sit amet consectetur',
      },
      text: {
        ar: 'نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا',
        en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem!',
      },
    },
    projects: [
      {
        imgSrc: '/Edraak-Project/project-2.jpg',
        title: {
          ar: 'إمارة منطقة الرياض',
          en: 'Riyadh Region Governorate',
        },
        id: '2',
      },
      {
        imgSrc: '/Edraak-Project/project-3.jpg',
        title: {
          ar: 'منصة التصديق الرقمي',
          en: 'Digital Verification Platform',
        },
        id: '3',
      },
      {
        imgSrc: '/Edraak-Project/project-4.jpg',
        title: {
          ar: 'تحليل وإخراج بيانات الأسر المنتجة',
          en: 'Analysis and Output of Productive Families Data',
        },
        id: '4',
      },
      {
        imgSrc: '/Edraak-Project/project-5.jpg',
        title: {
          ar: 'تطبيق جامعة أم القرى',
          en: 'Umm Al-Qura University Application',
        },
        id: '5',
      },
    ],
  };

  const partnersContent = {
    title: {
      ar: 'شركائنا',
      en: 'partners',
    },
    description: {
      title: {
        ar: 'نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا',
        en: 'Lorem ipsum dolor sit amet consectetur',
      },
      text: {
        ar: 'نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا نص تخيلي للبيانات هنا',
        en: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, rem!',
      },
    },
  };

  const ContactSectionContent = {
    title: {
      ar: 'تواصل معنا',
      en: 'Contact with Us',
    },
    address: {
      ar: 'طريق الملك عبداالله - حي 2978 الورود 8124 - الرياض',
      en: 'King Abdullah Road - Neighborhood 2978, Al-Wurud, Building 8124 - Riyadh',
    },
    email: {
      title: {
        ar: ' كيف يمكننا مساعدتك ؟',
        en: 'How can we assist you?',
      },
      labels: {
        name: {
          ar: 'الإسم',
          en: 'Name',
        },
        mail: {
          ar: 'البريد الإلكتروني',
          en: 'Email',
        },
        message: {
          ar: 'رسالتك',
          en: 'Message',
        },
        send: {
          ar: 'إرسال',
          en: 'Send',
        },
      },
    
    },
    rights: {
      ar: 'جميع الحقوق محفوظة لصالح إدارك الرقمية لتقنية المعلومات',
      en: 'All rights reserved to Edrak Digital for Information Technology',
    },
  };

  return {
    homePageContent,
    servicesContent,
    productsContent,
    projectsContent,
    partnersContent,
    ContactSectionContent,
  };
}
