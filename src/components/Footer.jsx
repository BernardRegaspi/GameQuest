import { logo } from "../assets/icons"

const Footer = () => {
  return (
    <footer id="footer">
        <div className="max-w-[20%] py-3 mx-auto text-center">
            <h1 className="text-2xl font-semibold border-b-4 border-cc-green pb-2"> <img src={logo} alt="logo" className="w-12 h-12 mr-2 inline-block"/> Game Quest</h1>
        </div>
        <p className="text-center text-lg">&copy; 2023 Game Quest. All rights reserved.</p>
    </footer>
  )
}

export default Footer