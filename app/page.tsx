import Link from 'next/link';
import {
  Wand2,
  Sparkles,
  Image as ImageIcon,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import Logo from '@/public/logo';
import Image from 'next/image';



export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative pb-48">
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="text-2xl font-bold text-gray-900">photogenai</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900">About</Link>
            </div>
            <Link
              href="/create-model"
              className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Photos with AI Magic
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Enhance, retouch, and transform your photos instantly using the power of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
              <Link
                href="/models"
                className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition-colors flex items-center justify-center"
              >
                View Examples <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              {/* <Link
                href="#"
                className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full hover:border-purple-600 hover:text-purple-600 transition-colors"
              >
                View Examples
              </Link> */}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
            <Image
              src="https://r2-us-west.photoai.com/1726205915-6d92360d4a1f6ebbc975769e3c37d466-1.png"
              alt="Before"
              width={192}
              height={256}
              className="object-cover rounded-lg shadow-lg hidden sm:block  transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-purple-100"
            />
            <Image
              src="https://r2-us-west.photoai.com/1726196604-fcc7adea7c578a52a6394f0550159800-1.png"
              alt="After"
              width={192}
              height={256}
              className="object-cover rounded-lg shadow-lg transform translate-y-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-purple-100"
            />
            <Image
              src="https://r2-us-west.photoai.com/1726208773-43dc89daddac2d4a23db3b7c092256a3-1.png"
              alt="Result"
              width={192}
              height={256}
              className="object-cover rounded-lg shadow-lg hidden sm:block transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-purple-100"
            />
          </div>
        </div>
      </header>

      {/* Features */}
      <section className="pt-48 pb-24 bg-white" id="features">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: <Wand2 className="h-8 w-8 text-purple-600" />,
              title: 'One-Click to clone',
              description: 'Upload your selfies and effortlessly transform them into stunning, high-quality AI-generated photos in seconds.'
            }, {
              icon: <Sparkles className="h-8 w-8 text-purple-600" />,
              title: 'Smart Retouching',
              description: 'Effortlessly achieve flawless skin with automatic enhancement that perfects skin tones and removes imperfections in every photo.'
            }, {
              icon: <ImageIcon className="h-8 w-8 text-purple-600" />,
              title: 'Create an AI influencer',
              description: 'Create your own personalized AI influencer complete with stunning visuals, unique styles, and lifelike personality—ready to captivate your audience in seconds.'
            }].map((feature, idx) => (
              <div key={idx} className="text-center p-6">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Choose Your Plan

          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[{
              name: 'Basic',
              price: '$7',
              features: ['60 photos(credits)/month', 'Basic enhancement', 'Email support'],
              button: 'Get Started',
              className: 'bg-white'
            }, {
              name: 'Pro',
              price: '$45',
              features: ['1000 photos(credits)/month', 'Advanced enhancement', 'Fal-ai photorealistic model', 'Priority support'],
              button: 'Get Started',
              className: 'bg-purple-600 text-white scale-105'
            }, {
              name: 'Enterprise(Beta)',
              price: '$99',
              features: ['2000 photos(credits)', 'Custom enhancement', 'API access', '24/7 support'],
              button: 'Contact Sales',
              className: 'bg-white'
            }].map((plan, idx) => (
              <div
                key={idx}
                className={`${plan.className} ${plan.className === 'bg-white' ? 'text-gray-900' : ''} p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border-2 border-transparent hover:border-purple-100`}

              >
                <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className={`space-y-4 mb-8 ${plan.className.includes('text-white') ? 'text-white' : ''}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle2 className={`h-5 w-5 mr-2 ${plan.className.includes('text-white') ? 'text-white' : 'text-green-500'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full transition-all duration-300 ${plan.className.includes('text-white') ? 'bg-white text-purple-600 hover:bg-purple-50' : 'bg-gray-100 text-gray-800 hover:bg-purple-600 hover:text-white'}`}
                >
                  {plan.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Logo/>
              <span className="text-2xl font-bold">photogenai</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-purple-400">Terms</Link>
              <Link href="#" className="hover:text-purple-400">Privacy</Link>
              <Link href="#" className="hover:text-purple-400">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
