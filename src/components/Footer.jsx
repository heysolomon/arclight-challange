import logo from "../assets/Logo White.svg"

const Footer = () => {
  return (
    <footer className="w-full px-[10%] py-[80px] grid grid-cols-40-1 text-white gap-10">
        <div>
            <img src={logo} alt="" />
            <p className="mt-6">Keep track of all your affiliate marketing campaigns in once place, and analyze how well they are doing. Best part? It doesn’t cost an arm and a leg.</p>
        </div>
        <div className="grid grid-cols-4 gap-2">
            <div>
                <p className="font-bold">Company</p>
                <ul className="flex flex-col gap-3 mt-6">
                    <li>About</li>
                    <li>Careers</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div>
                <p className="font-bold">Services</p>
                <ul className="flex flex-col gap-3 mt-6">
                    <li>API</li>
                    <li>Customization</li>
                    <li>Marketplace</li>
                </ul>
            </div>
            <div>
                <p className="font-bold">Resources</p>
                <ul className="flex flex-col gap-3 mt-6">
                    <li>Blog</li>
                    <li>Case Studies</li>
                    <li>Press</li>
                </ul>
            </div>
            <div>
                <p className="font-bold">Privacy</p>
                <ul className="flex flex-col gap-3 mt-6">
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>User Agreement</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
