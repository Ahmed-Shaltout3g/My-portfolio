import { githubsoc, linkedin } from "../assets";

export default function Footer() {
    return (
        <div className="text-center  pb-5 border-t border-gray-800">

            <p className="pt-4">© Shaltout All Rights Reserved</p>
            <p className="py-2">shaltouta477@gmail.com</p>

            <div className="icon-social flex justify-center items-center space-x-2">
                <a href="https://github.com/Ahmed-Shaltout3g" target="_blank"

                    className="black-gradient w-7 h-7 rounded-full flex justify-center items-center cursor-pointer bg-white hover:bg-slate-600  "
                >
                    <img src={githubsoc} alt="source code" className=" object-containrounded-full  " />
                </a>
                <a href="https://www.linkedin.com/in/ahmed-shaltout-015b85252/" target="_blank"

                    className="black-gradient w-7 h-7 rounded-full flex justify-center items-center cursor-pointer bg-white  hover:bg-slate-600  "
                >
                    <img src={linkedin} alt="source code" className=" object-contain  rounded-full " />
                </a>

            </div>
        </div>
    )
}
