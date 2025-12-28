import BgForm from "./bgForm";

const baseBgClass = "absolute w-28 sm:w-32 xl:w-40";

const backgrounds = [
    {
        className:
            "left-38 md:left-100 lg:left-135 xl:left-220 -top-20 sm:-top-15 xl:-top-13 stroke-green-theme",
    },
    {
        className:
            "-left-4 lg:left-10 xl:left-20 top-50 sm:top-70 lg:top-100 xl:top-120 rotate-90 stroke-white-el",
    },
    {
        className:
            "left-58 sm:left-150 lg:left-180 xl:left-280 top-80 sm:top-90 lg:top-110 -rotate-12 stroke-white-el",
    },
    {
        className:
            "sm:hidden left-58 sm:left-150 lg:left-180 xl:left-280 top-200 sm:top-90 lg:top-110 rotate-45 stroke-white-el",
    },
    {
        className:
            "hidden sm:block left-58 md:left-110 lg:left-120 xl:left-200 top-70 sm:top-40 -rotate-12 stroke-red-theme",
    },
    {
        className:
            "hidden sm:block left-220 sm:left-150 md:left-220 xl:left-360 top-40 sm:top-30 rotate-45 stroke-white-el",
    },
    {
        className:
            "hidden sm:block -left-5 sm:-left-10 xl:-left-20 -top-10 sm:-top-20 rotate-180 stroke-white-el",
    },
];

const Background = () => (
    <div className="absolute inset-0 -z-10 overflow-hidden">
        {backgrounds.map((bg, index) => (
            <BgForm
                key={index}
                className={`${baseBgClass} ${bg.className}`}
            />
        ))}
    </div>
);

export default Background;
