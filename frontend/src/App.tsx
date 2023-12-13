import { Loader } from "@/modules/loader/loader";
import { useIsLoading } from "./hooks"
import { AboutMe, Contacts, Header, Projects } from "./modules"

const App = () => {
  const isLoading = useIsLoading();

  return (
      isLoading
      ? <Loader/>
      : <div className='bg-primary'>
          <Header/>
          <main>
            <AboutMe/>
            <Projects/>
            <Contacts/>
          </main>
        </div> 
  )
}

export default App