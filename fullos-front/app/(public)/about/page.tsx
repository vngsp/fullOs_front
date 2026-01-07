import SectionTitle from "@/app/components/sectionTitle";
import Text from "@/app/components/text";
import AboutPhoto from "./components/aboutPhotos";
import teamPhoto from '@/public/teamPhoto.jpg';
import secondTeamPhoto from '@/public/secondTeamPhoto.jpg';
import DefaultInput from "./components/defaultInput";
import SignUpBtn from "@/app/components/signUpBtn";

const Page = () => {
    return (
        <div className="flex flex-col">
            <div className="mt-6 lg:mt-10 flex flex-col items-center sm:mb-8 gap-4 lg:gap-6">
                <SectionTitle
                    text="Quem somos e como podemos ajudar"
                    highlightWord={5}
                    width="50"
                />
                <Text
                    text="Nós da Full OS buscamos entregar produtos de gerenciamento de qualidade e sempre focando na melhora de desempenho da sua companhia."
                />
                <AboutPhoto
                    className="rounded-br-lg rounded-xl bg-tertiary-el"
                    src={secondTeamPhoto}
                    imgClassName="w-[225px] sm:w-[300px] md:w-[360px] h-auto"
                />
            </div>
            <div className="mt-6 lg:mt-10 flex flex-col items-center sm:mb-8 gap-4 lg:gap-6">
                <SectionTitle
                    text="Entregando excelência junto a você"
                    highlightWord={1}
                    width="50"
                />
                <div className="flex gap-4">
                    <AboutPhoto
                        className="pl-1 rounded-sm bg-tertiary-el"
                        src={teamPhoto}
                        imgClassName="w-44 sm:w-[220px] md:w-[260px] h-auto"
                    />
                </div>
            </div>
            <div className="mt-6 lg:mt-10 flex flex-col sm:mb-8 sm:items-center gap-4 lg:gap-6">
                <SectionTitle
                    text="Entre em contato conosco"
                    highlightWord={3}
                    width="50"
                />
                <Text
                    text="Estamos aqui para atender suas necessidades! Nos contate para desenvolvermos uma solução perfeita para sua companhia."
                />
                <div className="w-full flex flex-col sm:items-center gap-4">
                    <DefaultInput label="Nome Completo" placeholder="Digite seu nome aqui" width="w-[50vw] sm:w-[30vw]" />
                    <DefaultInput label="Email" placeholder="Entre com seu email" width="w-[50vw] sm:w-[30vw]" />
                    <div className="flex flex-col sm:w-[30vw] gap-4">
                        <DefaultInput label="Como podemos te ajudar ?" placeholder="Nos diga sua necessidade" textArea />
                        <SignUpBtn label="Envie sua mensagem" darkMode className="w-fit self-center" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;