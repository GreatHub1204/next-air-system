'use client';

import Image from "next/image";
import LogoAvatar from '@/public/images/logo.png'
import { useRouter } from "next/navigation";

const Logo = () => {
    return ( 
        <Image 
            alt="Logo"
            className="hidden md:block cursor-pointer"
            height="100"
            width="100"
            src={LogoAvatar}
        />
     );
}
 
export default Logo;