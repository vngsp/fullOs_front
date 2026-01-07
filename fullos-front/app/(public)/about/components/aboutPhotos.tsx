import Image, { StaticImageData } from "next/image";

type Props = {
    src: StaticImageData;
    className?: string;
    imgClassName?: string;
};


const AboutPhoto = ({ src, className, imgClassName }: Props) => {
    return (
        <div className={className}>
            <Image
                src={src}
                alt="foto da equipe"
                className={`rounded-xl ${imgClassName}`}
            />
        </div>
    );
};

export default AboutPhoto;
