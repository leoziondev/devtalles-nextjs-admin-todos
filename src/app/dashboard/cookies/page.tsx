import { TabBar } from "@/components";
import { cookies } from "next/headers";

export const metadata = {
 title: 'Cookies Page',
 description: 'SEO Title',
};

export default function CookiesPage() {
    const cookieStore = cookies()
    const cookieTab = cookieStore.get('selectedTab')?.value ?? '1'

  return (
    <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col">
            <span className="text-3xl font-bold mb-10 block">Tabs</span>
    
            <TabBar currentTab={ +cookieTab } />
        </div>
    </div>
  )
}
