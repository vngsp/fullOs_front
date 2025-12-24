import Header from "./components/header"
import Title from "./components/Title"
import SignUpBtn from "./components/signUpBtn"
import Text from "./components/text"
import Image from "next/image"
import ordersMobile from '@/public/ordersMobile.jpeg'
import ordersDesktop from '@/public/ordersDesktop.jpeg'

export const Page = () => {
  return (
    <div className="flex flex-col">
      <Header
        headerLabels={['Planos', 'Sobre Nós']}
        isBtn={true}
      />

      <div className="mt-6 lg:mt-10 flex flex-col items-center gap-4 lg:gap-6">
        <Title
          text="A ferramenta definitiva de gerenciamento"
          highlightWord={2}
        />
        <Text text="Gerencie suas ordens de serviço de forma totalmente interativa" />
        <SignUpBtn label="Embarque na experiência" darkMode={true} />
      </div>

      <div className="mt-6 flex flex-col items-center gap-8">
        <Title
          text="Visualize o tempo gasto em cada ordem"
          secondaryTitle={true}
        />

        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-72 aspect-9/16 sm:hidden">
            <Image
              alt="service image mobile"
              src={ordersMobile}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div className="relative hidden w-full max-w-xl lg:max-w-2xl aspect-video sm:block">
            <Image
              alt="service image desktop"
              src={ordersDesktop}
              fill
              className="object-contain"
              sizes="768px"
            />
          </div>
        </div>

        <Text
          text="Visualize o tempo gasto em cada ordem de serviço de forma clara e objetiva."
        />
      </div>
    </div>
  )
}

export default Page