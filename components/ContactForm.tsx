"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        cargo: "",
        empresa: "",
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
        <form onSubmit={handleSubmit} className="space-y-3">
            <div>
                <label htmlFor="nome" className="block text-xs text-zinc-600 mb-1 font-medium">
                    Nome *
                </label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 rounded-none px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso focus:ring-1 focus:ring-laranja-intenso transition-all"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-xs text-zinc-600 mb-1 font-medium">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 rounded-none px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso focus:ring-1 focus:ring-laranja-intenso transition-all"
                />
            </div>

            <div>
                <label htmlFor="telefone" className="block text-xs text-zinc-600 mb-1 font-medium">
                    Telefone *
                </label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    placeholder="BR +55"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 rounded-none px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso focus:ring-1 focus:ring-laranja-intenso transition-all"
                />
            </div>

            <div>
                <label htmlFor="cargo" className="block text-xs text-zinc-600 mb-1 font-medium">
                    Cargo *
                </label>
                <select
                    id="cargo"
                    name="cargo"
                    required
                    value={formData.cargo}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 rounded-none px-3 py-2 text-sm text-zinc-900 focus:outline-none focus:border-laranja-intenso focus:ring-1 focus:ring-laranja-intenso transition-all"
                >
                    <option value="">Selecione o seu cargo</option>
                    <option value="ceo">CEO/Proprietário</option>
                    <option value="diretor">Diretor</option>
                    <option value="gerente">Gerente</option>
                    <option value="coordenador">Coordenador</option>
                    <option value="analista">Analista</option>
                    <option value="outro">Outro</option>
                </select>
            </div>

            <div>
                <label htmlFor="empresa" className="block text-xs text-zinc-600 mb-1 font-medium">
                    Nome da empresa *
                </label>
                <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full bg-white border border-zinc-200 rounded-none px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso focus:ring-1 focus:ring-laranja-intenso transition-all"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-['AmsiPro'] font-bold text-xs uppercase tracking-wide py-2.5 px-6 rounded-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-laranja-intenso mt-4"
            >
                Next → <span className="text-zinc-400 ml-2">1 / 2</span>
            </button>
        </form>
    );
}
