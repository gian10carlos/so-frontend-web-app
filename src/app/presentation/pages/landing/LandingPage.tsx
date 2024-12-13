import { FaAddressBook, FaBell, FaMap } from "react-icons/fa";
import { Link } from "react-router-dom";

const downloadApk = () => {
    const apkUrl = "/apk/yapita_app.apk";
    window.location.href = apkUrl;
}

export default function LandingPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full pt-12 pb-3">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <img
                                    src="/images/logo_pay.png"
                                    alt="Cooperativa Señor de los Milagros Logo"
                                    className="mx-auto"
                                    width={200}
                                    height={200}
                                />
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-blue-600">
                                    Cooperativa Señor de los Milagros
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                                    Realiza tus pagos de manera fácil, rápida y segura. ¡Conéctate con la cooperativa y mantén tus transacciones al día!
                                </p>
                            </div>
                            <div className="space-x-4">
                                <button onClick={downloadApk} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                                    Descargar App
                                </button>
                                <Link to={'/signin'} >
                                    Version web
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-12 sm:grid-cols-3 items-start">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="bg-purple-100 p-4 rounded-full">
                                    <FaBell className="h-10 w-10 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold">Notificaciones de Pagos</h3>
                                <p className="text-gray-500">
                                    Recibe alertas y recordatorios para que nunca se te pase un pago importante.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="bg-blue-100 p-4 rounded-full">
                                    <FaMap className="h-10 w-10 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold">Ubicación de Sucursales</h3>
                                <p className="text-gray-500">
                                    Encuentra la sucursal más cercana para realizar tus pagos o consultas.
                                </p>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <div className="bg-green-100 p-4 rounded-full">
                                    <FaAddressBook className="h-10 w-10 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold">Pago de Servicios</h3>
                                <p className="text-gray-500">
                                    Realiza el pago de tus servicios directamente desde la app, sin complicaciones y con total seguridad.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* App Preview Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-8">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Conoce nuestra aplicación
                            </h2>
                            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                                <img
                                    src="/images/screen_splash.jpeg"
                                    alt="App Screenshot 1"
                                    width={300}
                                    height={600}
                                    className="rounded-2xl shadow-lg"
                                />
                                <img
                                    src="/images/screen_signin.jpeg"
                                    alt="App Screenshot 2"
                                    width={300}
                                    height={600}
                                    className="rounded-2xl shadow-lg"
                                />
                                <img
                                    src="/images/screen_home.jpeg"
                                    alt="App Screenshot 3"
                                    width={300}
                                    height={600}
                                    className="rounded-2xl shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Download Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Descarga la App de la Cooperativa
                            </h2>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                                Mantén tu economía personal organizada. Descarga nuestra aplicación y realiza pagos o consultas fácilmente.
                            </p>
                            <button onClick={downloadApk} className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg">
                                Obtener la App
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="w-full py-6 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <p className="text-gray-500">© 2024 Cooperativa Señor de los Milagros - <b>Dev by Gian Carlos</b> </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
