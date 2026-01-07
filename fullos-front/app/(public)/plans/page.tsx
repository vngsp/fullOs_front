import SectionTitle from "@/app/components/sectionTitle";
import Text from "@/app/components/text";
import Plans from "./components/plans";

const Page = () => {
    return (
        <div className="flex flex-col">
            <div className="mt-6 lg:mt-10 flex flex-col sm:items-center sm:mb-8 gap-4 lg:gap-6">
                <SectionTitle
                    text="Confira nossos planos"
                    highlightWord={2}
                    width="50"
                />
                <Text text="Aumente a sua capacidade de gerenciamento e obtenha melhores resultados" />
            </div>
            <div className="flex flex-col items-center">
                <div className="flex flex-col items-center sm:flex-row gap-6 sm:gap-2 md:gap-4 w-full">
                    <div className="flex justify-center lg:justify-end w-full py-8 border-b-2 sm:border-b-0 order-1 sm:order-1">
                        <Plans
                            packageName="Pacote Base"
                            fullValue={300}
                            itemsTexts={[
                                "Limite de 3 registros",
                                "Relatórios básicos",
                                "1 ano de registro",
                            ]}
                        />
                    </div>

                    <div className="flex flex-col items-center w-full py-8 border-b-2 sm:px-1 sm:py-1 sm:border-b-0 order-3 sm:order-2 sm:bg-green-theme sm:rounded-xl lg:py-2 lg:w-fit lg:p-2">
                        <h3 className="hidden sm:block sm:text-[10px] sm:font-poppins sm:font-light sm:my-1 lg:text-[12px]">O mais popular</h3>
                        <Plans
                            packageName="Pacote Max"
                            fullValue={600}
                            itemsTexts={[
                                "Limite de 12 registros",
                                "Relatórios avançados",
                                "Dashboard completo",
                                "Histórico ilimitado",
                            ]}
                            plus
                            fullMode
                        />
                    </div>

                    <div className="flex justify-center lg:justify-start w-full py-8 border-b-2 sm:border-b-0 order-2 sm:order-3">
                        <Plans
                            packageName="Pacote Plus"
                            fullValue={450}
                            itemsTexts={[
                                "Limite de 6 registros",
                                "Relatórios avançados",
                                "3 anos de registro",
                            ]}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page;