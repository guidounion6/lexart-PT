import { sidebarLinks } from "../constants"
import { Link, useLocation } from "react-router-dom"
import cn from "classnames"



const SideBar = () => {

  const location = useLocation()
  const pathname = location.pathname


  return (
    <section className="sticky left-0 top-0 flex flex-col h-screen w-fit justify-between bg-black p-6 pt-28 text-white max-sm:hidden lg:w-[246px] ">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
          return (
            <Link
              to={item.route}
              key={item.label}
              className={cn("flex gap-4 items-center p-4 rounded-lg justify-start", {
                "bg-primary hover:bg-accent": isActive
              })}
            >
              <img 
              src={item.imgUrl} 
              alt={item.label}
              width={24}
              height={24} 
              />
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default SideBar