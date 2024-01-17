'use client'

import { setCookie } from "cookies-next"
import { useState } from "react"

interface Props {
    currentTab?: number
    tabOptions?: number[]
}

export const TabBar = ({tabOptions = [1,2,3,4], currentTab = 1}: Props) => {
    const [selected, setSelected] = useState(currentTab)

    const onTabSelected = ( tab: number ) => {
        setSelected(tab)
        setCookie('selectedTab', tab.toString())
    }

    return (
      <div className={`grid w-full ${'grid-cols-' + tabOptions.length} space-x-2 rounded-xl bg-white p-2`}>
        
        {tabOptions.map((tab) => (
            <div key={tab}>
                <input
                    type="radio"
                    id={tab.toString()}
                    className="peer hidden"
                    checked={ selected === tab }
                    onChange={() => {}}
                />
                <label
                    onClick={() => onTabSelected(tab)}
                    className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white hover:bg-slate-100">
                    {tab}
                </label>
            </div>
        ))}  
       
      </div>
    )
  }