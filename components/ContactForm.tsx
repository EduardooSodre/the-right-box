"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nome: "",
        empresa: "",
        cidade: "",
        email: "",
        telefone: "",
        solucao: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // TODO: Integrate with email service
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2.5">
            <div>
                <label htmlFor="nome" className="block text-xs text-zinc-600 mb-1 font-semibold uppercase tracking-wide">
                    Nome *
                </label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-1.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso focus:bg-white transition-all"
                />
            </div>

            <div>
                <label htmlFor="empresa" className="block text-xs text-zinc-600 mb-1 font-semibold uppercase tracking-wide">
                    Empresa *
                </label>
                <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-1.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso focus:bg-white transition-all"
                />
            </div>

            <div>
                <label htmlFor="cidade" className="block text-xs text-zinc-600 mb-1 font-semibold uppercase tracking-wide">
                    Cidade *
                </label>
                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                    value={formData.cidade}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-1.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso focus:bg-white transition-all"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-xs text-zinc-600 mb-1 font-semibold uppercase tracking-wide">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-1.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso focus:bg-white transition-all"
                />
            </div>

            <div>
                <label htmlFor="telefone" className="block text-xs text-zinc-600 mb-1 font-semibold uppercase tracking-wide">
                    Telefone/WhatsApp *
                </label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    placeholder="BR +55"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-1.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso focus:bg-white transition-all"
                />
            </div>

            <div>
                <label htmlFor="solucao" className="block text-xs text-zinc-600 mb-1 font-semibold uppercase tracking-wide">
                    Qual solução você procura? *
                </label>
                <select
                    id="solucao"
                    name="solucao"
                    required
                    value={formData.solucao}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-1.5 text-sm text-zinc-900 focus:outline-none focus:border-laranja-intenso focus:bg-white transition-all appearance-none cursor-pointer"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                    }}
                >
                    <option value="">Selecione uma solução</option>
                    <option value="aceleracao-comercial">Aceleração Comercial</option>
                    <option value="midia-paga">Mídia Paga</option>
                    <option value="crm-automacao">CRM & Automação</option>
                    <option value="landing-pages">Landing Pages</option>
                    <option value="criativos">Criativos</option>
                    <option value="email-marketing">Email Marketing</option>
                </select>
            </div>

            <button
                type="submit"
                className="w-full bg-laranja-intenso hover:bg-laranja-chama text-white font-['AmsiPro'] font-bold text-sm uppercase tracking-wider py-2 px-6 rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-laranja-chama focus:ring-offset-2 mt-1"
            >
                Enviar
            </button>
        </form>
    );
}
