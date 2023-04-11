import Image from 'next/image'
import Email from '@svg/Email.svg';
export const EmailSVG = () => {
    return (
        <Image
            src={Email}
            alt={"Picture"}
            width={20}
            height={20}
            loading={"eager"}
            priority
        />
    );
};
