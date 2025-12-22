import Header from "./components/header"

export const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Header
        headerLabels={['Planos', 'Sobre Nós']}
        isBtn={true}
      />
    </div>
  )
}

export default Page