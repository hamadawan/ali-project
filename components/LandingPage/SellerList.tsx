import React from 'react';
import ListItem from './ListItem';
import bullet1 from '@/public/assets/6.svg';
import bullet2 from '@/public/assets/7.svg';
import bullet3 from '@/public/assets/8.svg';
import bullet4 from '@/public/assets/9.svg';
import bullet5 from '@/public/assets/10.svg';
import img from '@/public/assets/5.webp';
import StorefrontButton from './StorefrontButton';
import Image from 'next/image';

const SellerList = () => {
  return (
    <div>
      <div className="grid lg:gap-8 lg:grid-cols-2">
        <div className="lg:col-start-2">
          <div className="mt-1 space-y-8">
            <ListItem
              bullet={bullet1}
              text="Regístrate en la plataforma: Comienza tu viaje hacia el éxito en las exportaciones registrándote en nuestra plataforma en línea de forma rápida y sencilla. Proporciona la información necesaria y crea tu cuenta para comenzar a aprovechar todas las oportunidades que Puentify tiene para ofrecerte"
            />
            <ListItem
              bullet={bullet2}
              text="Completa la evaluación de preparación para exportar: Asegúrate de estar preparado para exportar tus productos a los Estados Unidos. Nuestro proceso de evaluación de preparación para exportar te ayudará a identificar las áreas en las que puedes mejorar y te brindará recomendaciones personalizadas para asegurar tu éxito en el mercado de Estados Unidos"
            />
            <ListItem
              bullet={bullet3}
              text="Crea tu tienda digital: Llega a los compradores en USA de manera efectiva creando tu propia tienda digital en nuestra plataforma. Personaliza tu tienda, muestra tus productos manufacturados y destaca tus fortalezas únicas. Con una presencia en línea atractiva y profesional, estarás listo para captar la atención de los compradores en los Estados Unidos"
            />
            <ListItem
              bullet={bullet4}
              text="Sigue los pasos para comenzar a exportar: No te preocupes si eres nuevo en el mundo de las exportaciones. En Puentify, te guiaremos a través de los pasos necesarios para comenzar a exportar tus productos manufacturados. Desde la obtención de los permisos y certificaciones adecuados hasta el embalaje y el etiquetado, te proporcionaremos instrucciones claras y te apoyaremos en cada paso del proceso"
            />
            <ListItem
              bullet={bullet5}
              text="Encuentra clientes en los Estados Unidos: na vez que estés listo para exportar, es hora de encontrar clientes en los Estados Unidos. Aprovecha la amplia red de compradores en Puentify y utiliza nuestras herramientas de búsqueda avanzada para identificar y conectar con los compradores más adecuados para tus productos"
            />
          </div>
        </div>
        <div className="mt-10 md:w-[700px] lg:mt-14 lg:col-start-1 lg:row-start-1">
          <Image src={img} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default SellerList;
