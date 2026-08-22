import React, { useState } from 'react';
import { 
  Car, 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  ShieldCheck, 
  Clock,
  Menu,
  X
} from 'lucide-react';

const GabSoftXLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-extrabold tracking-tight text-indigo-600">
                GabSoft<span className="text-slate-900">X</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#ecosistema" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Ecosistema</a>
              <a href="#contacto" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Soporte</a>
              <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100">
                Solicitar Demo
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
            <a href="#ecosistema" className="block text-base font-medium text-slate-600">Ecosistema</a>
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl text-base font-semibold">
              Solicitar Demo
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <ShieldCheck size={16} />
            <span>Software Empresarial de Nueva Generación</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Software Operativo Ágil <br />
            <span className="text-indigo-600">para Negocios Reales</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Optimiza la gestión diaria de tu empresa con herramientas diseñadas para la eficiencia operativa. Controla ingresos, flujos de trabajo y personal desde una sola plataforma.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
              Solicitar Demo <ArrowRight size={20} />
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all shadow-sm">
              Conocer Soluciones
            </button>
          </div>
        </div>
      </section>

      {/* --- ECOSYSTEM SECTION --- */}
      <section id="ecosistema" className="py-24 bg-white border-y border-slate-200 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Ecosistema de Aplicaciones</h2>
            <p className="text-slate-600 max-w-2xl">Módulos especializados que resuelven necesidades críticas de sectores específicos.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* MAIN CARD: VEHICLE WASH */}
            <div className="lg:col-span-2 group">
              <div className="h-full bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden hover:border-indigo-300 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-200">
                        <Car size={32} />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">Gestor para Lavaderos de Vehículos</h3>
                      <p className="text-slate-600 text-lg mb-8">
                        La solución definitiva para centros de estética automotriz. Digitaliza la entrada de vehículos y el control administrativo sin complicaciones.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-indigo-100 p-1 rounded-full text-indigo-600">
                            <LayoutDashboard size={18} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800">Modos Piso/Admin</p>
                            <p className="text-sm text-slate-500">Interfaz simplificada para operarios y panel completo para gerencia.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-indigo-100 p-1 rounded-full text-indigo-600">
                            <BarChart3 size={18} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800">Control de Ingresos</p>
                            <p className="text-sm text-slate-500">Reportes financieros en tiempo real y cierre de caja automático.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-indigo-100 p-1 rounded-full text-indigo-600">
                            <Clock size={18} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800">Control de Flujo</p>
                            <p className="text-sm text-slate-500">Gestión de tiempos de espera y estados de servicio.</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 bg-indigo-100 p-1 rounded-full text-indigo-600">
                            <Users size={18} />
                          </div>
                          <div>
                            <p className="font-bold text-slate-800">Fidelización</p>
                            <p className="text-sm text-slate-500">Módulo de clientes recurrentes y base de datos premium.</p>
                          </div>
                        </div>
                      </div>

                      <button className="bg-slate-900 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-indigo-600 transition-colors flex items-center gap-2">
                        Ver Detalles / Demo <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* COMING SOON CARDS */}
            <div className="flex flex-col gap-8">
              <div className="flex-1 bg-white rounded-3xl border border-slate-200 p-8 border-dashed flex flex-col justify-center items-center text-center opacity-80">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
                  <Layers size={24} />
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Próximamente</span>
                <h4 className="text-xl font-bold text-slate-400">Logística de Almacenes</h4>
                <p className="text-slate-400 text-sm mt-2">Control total de inventarios y despachos en tiempo real.</p>
              </div>

              <div className="flex-1 bg-white rounded-3xl border border-slate-200 p-8 border-dashed flex flex-col justify-center items-center text-center opacity-80">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4">
                  <CheckCircle2 size={24} />
                </div>
                <span className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-full mb-3 uppercase tracking-wider">Próximamente</span>
                <h4 className="text-xl font-bold text-slate-400">Gestión de Taller Pro</h4>
                <p className="text-slate-400 text-sm mt-2">Seguimiento de órdenes de trabajo y repuestos para mecánicas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contacto" className="bg-slate-50 py-16 px-4">
        <div className="max-w-7xl mx-auto border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-extrabold tracking-tight text-indigo-600">
                GabSoft<span className="text-slate-900">X</span>
              </span>
              <p className="text-slate-500 mt-4 max-w-xs leading-relaxed">
                Transformando la operatividad de los negocios latinos a través de software inteligente, ágil y centrado en el usuario.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-4">Producto</h5>
              <ul className="space-y-2 text-slate-600">
                <li className="hover:text-indigo-600 cursor-pointer">Lavaderos App</li>
                <li className="hover:text-indigo-600 cursor-pointer">Funcionalidades</li>
                <li className="hover:text-indigo-600 cursor-pointer">Precios</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-4">Contacto</h5>
              <ul className="space-y-2 text-slate-600">
                <li className="hover:text-indigo-600 cursor-pointer">Soporte técnico</li>
                <li className="hover:text-indigo-600 cursor-pointer">WhatsApp Negocios</li>
                <li className="hover:text-indigo-600 cursor-pointer">Email</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} GabSoftX. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-slate-400 text-sm">
              <span className="hover:text-indigo-600 cursor-pointer transition-colors">Términos</span>
              <span className="hover:text-indigo-600 cursor-pointer transition-colors">Privacidad</span>
            </div>
          </div>
        </div>
      </footer>

      {/* --- CUSTOM CSS FOR ANIMATION --- */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default GabSoftXLanding;
