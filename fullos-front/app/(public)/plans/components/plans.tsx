import SignUpBtn from "@/app/components/signUpBtn";
import PlanItem from "./planItem";

type Props = {
    packageName: string,
    fullValue: number,
    itemsTexts: string[],
    fullMode?: boolean,
    plus?: boolean,
}

const Plans = ({ packageName, fullValue, itemsTexts, fullMode, plus }: Props) => {
    const creditValue = (fullValue / 12) * 1.5;

    return (
        <div
            className={`flex flex-col pt-8 pb-12 px-4 rounded-2xl w-auto shadow-sm text-nowrap
                ${fullMode
                    ? "bg-tertiary-el sm:bg-black-el lg:px-14 xl:px-24"
                    : "bg-tertiary-el"
                }`}
        >
            <div className="font-poppins">
                <h3 className="text-2xl font-light text-text-white">{packageName}</h3>
                <h6 className="text-green-theme text-sm"><span className="text-gray-text">12x de </span>R${creditValue.toFixed(2).replace('.', ',')}</h6>
                <h4 className="text-lg text-green-theme font-semibold mb-4">
                    <span className="text-text-white font-light">Ou </span>
                    R${fullValue.toFixed(2).replace('.', ',')}
                    <span className="text-text-white font-light"> á vista</span>
                </h4>
            </div>
            <ul className="flex flex-col gap-4 md:gap-6 mb-4">
                {plus ?
                    itemsTexts.map((text, index) => {
                        const isPlus = index >= itemsTexts.length - 2

                        return (
                            <PlanItem
                                key={text}
                                itemText={text}
                                plus={isPlus}
                            />
                        )
                    })
                    :
                    itemsTexts.map(text => (
                        <PlanItem key={text} itemText={text} />
                    ))
                }
            </ul>
            <div className="flex justify-center">
                {fullMode ? (
                    <>
                        <div className="sm:hidden">
                            <SignUpBtn
                                label="Contrate agora"
                                darkMode
                                className="w-36 text-[10px] py-3 px-3 text-nowrap"
                            />
                        </div>

                        <div className="hidden sm:block">
                            <SignUpBtn
                                label="Contrate agora"
                                className="w-36 text-[10px] py-3 px-3 text-nowrap lg:p-4"
                            />
                        </div>
                    </>
                ) : (
                    <SignUpBtn
                        label="Contrate agora"
                        darkMode
                        className="w-36"
                    />
                )}
            </div>
        </div>
    )
}

export default Plans;