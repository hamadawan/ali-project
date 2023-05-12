import React from 'react'
import ListItem from './ListItem'
import bullet1 from '@/public/assets/6.svg'
import bullet2 from '@/public/assets/7.svg'
import bullet3 from '@/public/assets/8.svg'
import bullet4 from '@/public/assets/9.svg'
import bullet5 from '@/public/assets/10.svg'
import img from '@/public/assets/5.webp'
import Image from "next/image";

const List = (props) => {
    return (
        <div>
            <div className="grid lg:gap-8 lg:grid-cols-2">
            <div className="lg:col-start-2">
            <div className="mt-1 space-y-8">
                <ListItem bullet={bullet1} text={props.lang ? "Streamlined Sourcing: Cut through the noise of thousands of manufacturing companies in Mexico with a streamlined, easy-to-use platform. No need to vet each potential supplier individually — we've done the work for you by curating a list of the best manufacturers for your specific needs." : "Búsqueda simplificada: No te compliques con miles de fábricas en México; usa nuestra plataforma fácil de usar. No necesitas investigar cada proveedor individualmente, ya hicimos el trabajo por ti eligiendo a los mejores fabricantes para tus necesidades específicas."} />
                <ListItem bullet={bullet2} text={props.lang ? "Secure Messaging and Transactions: Our platform provides secure communication channels between customers and manufacturers, providing peace of mind at every step of the process." : "Mensajería y transacciones seguras: Nuestra plataforma ofrece comunicación segura entre clientes y fabricantes, dándote tranquilidad en cada paso del proceso."} />
                <ListItem bullet={bullet3} text={props.lang ? "Real-Time Updates and Tracking: Track your order every step of the way with our real-time updates, providing you with peace of mind and transparency earlier unavailable." : "Actualizaciones y seguimiento en tiempo real: Rastrea tu pedido en cada paso con nuestras actualizaciones en tiempo real, brindándote tranquilidad y transparencia antes no disponibles."} />
                <ListItem bullet={bullet4} text={props.lang ? "Guaranteed Quality: We guarantee the quality and reliability of our manufacturers thanks to our rigorous vetting process. Only suppliers that meet our stringent standards are included in our network of trusted partners." : "Calidad garantizada: Garantizamos la calidad y confiabilidad de nuestras fábricas gracias a nuestro riguroso proceso de selección. Solo los proveedores que cumplen con nuestros estándares se incluyen en nuestra red de socios de confianza."} />
                <ListItem bullet={bullet5} text={props.lang ? "Dedicated Customer Service: Our team is here to assist you throughout the entire process, ensuring that you can focus on your business while we take care of your sourcing needs. We prioritize your satisfaction, and will do everything in our power to ensure your experience is top-notch." : "Dedicated Customer Service: Nuestro equipo está aquí para ayudarte en todo el proceso, asegurándose de que puedas enfocarte en tu negocio mientras nosotros nos encargamos de tus necesidades de abastecimiento. Tu satisfacción es nuestra prioridad, y haremos todo lo posible para que tu experiencia sea la mejor."} />
        </div>
        </div>
        <div className="mt-10 md:w-[700px] lg:mt-14 lg:col-start-1 lg:row-start-1">
            <Image src={img} alt="" className="" />
        </div>
        </div>
        </div>
        )
}

export default List
