import React, {useState} from 'react'
import { db } from '../components/API'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

export function SignUp() {

    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    const navigate = useNavigate();

    const Signin = async() => {
        const res = await axios.post(`${db}/signup`, {
            name:name,
            pass:pass
        });
        Cookies.set('Session_Event', res.data.id);
        console.log(res.data.id)
        navigate('/');
    }

    return(
    <section className="bg-gray-50 dark:bg-[#1b004b]">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <img className="w-2/12 h-2/12 rounded-full" src="https://thumbs.dreamstime.com/b/el-graduado-maduro-recibe-el-diploma-25519776.jpg" alt="logo"/>
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#7900ff] dark:border-[#ffff]">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#7f00b2] md:text-2xl dark:text-[#1b004b]">
                  Crea Tu Cuenta
              </h1>
              <div className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Su Cuenta</label>
                      <input value={name} type="text" onChange={(e) =>setName(e.target.value)} id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-[#1b004b] dark:placeholder-[#1b004b] dark:text-[#7f00b2] dark:focus:ring-[#7f00b2] dark:focus:border-[#7f00b2]" placeholder="Texto De Ejemplo" required=""/>
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input value={pass} type="password" id="password" onChange={(e) => setPass(e.target.value)} placeholder="Contraseña" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-[#1b004b] dark:placeholder-[#1b004b] dark:text-[#7f00b2] dark:focus:ring-[#7f00b2] dark:focus:border-[#7f00b2]" required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
  
                      </div>
                  </div>
                  <button type="submit" onClick={() => Signin()} className="w-full bg-[#7f00b2] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              </div>
          </div>
      </div>
  </div>
</section>
);
}