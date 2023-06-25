import Result from "./Result"
import Summary from "./Summary"

const App = () => {
  return (
    <main className="w-screen md:h-screen flexCenter">
      <section className="flex flex-col h-full w-screen md:flex-row md:w-[50rem] md:h-[40rem] bg-Pale-blue rounded-3xl">
        <Result />
        <Summary />
      </section>
    </main>
  )
}

export default App
