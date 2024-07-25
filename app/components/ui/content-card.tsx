"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { icons } from "@/data";
import Tooltip from '@mui/material/Tooltip';

export function CardDemo() {
    
  return (
    <div className="group/card p-20 m-10 scale-125">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-[450px] w-[800px] rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
        //   "bg-[url(https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-center bg-cover"
          "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-50"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src="/opkey.jpg"
            className="h-10 w-10 rounded-full border-2 border-white-100 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Opkey, Noida
            </p>
            <p className="text-sm text-gray-400">April, 2023 - March, 2024</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            ML Intern
          </h1>
            <div className='flex items-center justify-between my-2'>
                <div className='flex items-center'>
                    {icons.map((icon, i)=>(
                        <div key={i} className='border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                            style={{transform: `translateX(-${5 * i + 2}px)`}}>
                            <Tooltip title={icon.name}><img src={icon.img} alt={icon.name} className="p-1"/></Tooltip>
                        </div>
                    ))}
                </div>
            </div>
          <p className="font-light text-sm text-gray-50 relative z-10 my-4">
          Built an AI powered chatbot capable of - testcase automation, CRUD & searching artefacts, apart from general conversational abilities. <br/>Data mining of large sets, simplified complex DAG, made predictions based on user logs to enhance UX.
          </p>
        </div>
        
      </div>
    </div>
  );
}
