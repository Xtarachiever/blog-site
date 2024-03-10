import Main from "@/components/Main";
import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";


export default function Home() {
  return (
    <main
      className={``}
    >
      <NavBar />
      <div className="m-auto w-[90%] my-8">
        <Main />
        <Footer />
      </div>
    </main>
  )
}
