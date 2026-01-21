import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-12 pb-6" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

                    {/* Brand & Description */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-rose-300 mb-4">DepiLuq</h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Belleza y cuidado personal con los más altos estándares de calidad.
                            Tecnología láser definitiva y tratamientos faciales para resaltar tu mejor versión.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-rose-200 mb-4">Contacto</h4>
                        <ul className="space-y-3 text-slate-300">
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <FaWhatsapp className="text-green-400" />
                                <a href="https://wa.me/543885108327" target="_blank" rel="noreferrer" className="hover:text-white transition">
                                    +54 3885 108 327
                                </a>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <FaPhone className="text-blue-400" />
                                <span>3885 108 327</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2">
                                <FaMapMarkerAlt className="text-red-400" />
                                <span>Jujuy, Argentina</span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours / Schedule (Placeholder) */}
                    <div>
                        <h4 className="text-lg font-semibold text-rose-200 mb-4">Horarios</h4>
                        <p className="text-slate-400 text-sm">
                            Lunes a Sábado <br />
                            9:00 AM - 9:00 PM <br />
                            <span className="text-xs italic text-slate-500 mt-2 block">Con turno previo</span>
                        </p>
                        <div className="mt-6 flex justify-center md:justify-start gap-4">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-slate-800 rounded-full hover:bg-rose-600 transition text-white">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] uppercase tracking-widest">
                    <div>
                        &copy; {new Date().getFullYear()} DepiLuq. Todos los derechos reservados.
                    </div>
                    <div className="mt-4 md:mt-0">
                        <Link to="/admin" className="hover:text-rose-400 transition-colors">
                            Acceso Administrativo
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
