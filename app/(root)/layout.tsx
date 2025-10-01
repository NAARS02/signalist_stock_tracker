import Header from "@/components/Header"


const Layout = ({ children }: { children: React.ReactNode}) => {
  return (
    <main className="min=hscreen text-gray-400">
        <Header user={undefined} />
        <div className='container py-10'>
            {children}
        </div>

    </main>
  )
}

export default Layout
