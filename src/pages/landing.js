import React, { useState, useEffect} from 'react'
import { db } from '../components/API'
import { Navbar } from '../components/Navbar'
import Cookies from 'js-cookie'
import axios from 'axios'

export function Landing() {
    const [data, setData] = useState([]);
    const [session, setSession] = useState(false);
    const [comment, setComment] = useState("");

    const getData = async() => {
        const res  = await fetch(`${db}/comments`)
        const data = await res.json()
        console.log(data)
        setData(data)
    }

    const checkCookie = (session) => {
      if(session){
        setSession(true);
      }
    }

    const postComment = async(e) => {
      const data = {
        comment: comment,
        id: parseInt(Cookies.get('Session_Event'))
      }
      try {
        await axios.post(`${db}/scomment`, data)
        console.log("NICE")
      }
      catch(e){
        console.log("ERROR")
      }
      getData()
    }

    useEffect(() => {
      const session = Cookies.get("Session_Event");
      checkCookie(session);
      getData();
    }, []);
    return(
        <div className="bg-[#1b004b]" >
  <section className="mb-40">
    <Navbar/>
    <div className="text-center py-12">
        <img className="w-full h-50" src="https://es.amnesty.org/fileadmin/user_upload/273070.jpg" alt="" />
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 text-[#ffffff]" >La Graduacion Mas Perrona <br /><span className="text-[#bc4ed8]">La Que Hasta Tus Gatos Quieren xdxd</span></h1>
    </div>
  </section>
  <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-80">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl text-stone-50">
            Lea Sobre Nosotros
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {
              data ? (
                data.map((item) => (
                  <blockquote className="rounded-lg bg-gray-100 p-8" key={item.ID}>
              <div className="flex items-center gap-4">
                <img
                  alt="Man"
                  src="/user.png"
                  className="h-16 w-16 rounded-full object-cover"
                />

                <div>
                  <p className="mt-1 text-lg font-medium text-gray-700 text-center">
                    {item.NAME}
                  </p>
                </div>
              </div>

              <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500 text-center">
                {item.COMMENT}
              </p>
            </blockquote>
              )) ) : null
            }
          </div>
        </div>   
            {
        session  ? (
          <div className="isolate bg-[#1b004b] py-24 px-6 sm:py-20 lg:px-8 " >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl text-[#ffffff]">
            Di Algo c:
          </h2>
          <p className="mt-2 text-lg leading-8 text-[#bc4ed8]">
            Cuentanos Como Fue Tu Experiencia Con Nosotros c:
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20" >
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-[#bc4ed8]"
              >
                Mensaje
              </label>
              <div className="mt-2.5">
                <input
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-[#bc4ed8] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              onClick={postComment}
              className="block w-full rounded-md bg-[#7f00b2] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#f988ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Enviar Comentario 
            </button>
          </div>
        </div>
      </div>
        ): null
      }
    </section>
</div>
    )
}