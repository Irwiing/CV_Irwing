import 'tailwindcss/tailwind.css'

import Footer from '../components/Footer'

export default function MyApp({ Component, pageProps }){
    return (
    <>
        <div className="min-h-screen bg-gray-300">
            <Component {...pageProps } />
        </div>
        <Footer />
    </>
    )
}