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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({
                    nome: "",
                    empresa: "",
                    cidade: "",
                    email: "",
                    telefone: "",
                    solucao: "",
                });

                // Esconder mensagem de sucesso após 5 segundos
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="nome" className="block text-[10px] text-zinc-700 mb-1 font-bold uppercase tracking-wider">
                    Nome *
                </label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-zinc-400 px-0 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso transition-all"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-[10px] text-zinc-700 mb-1 font-bold uppercase tracking-wider">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-zinc-400 px-0 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso transition-all"
                />
            </div>

            <div>
                <label htmlFor="telefone" className="block text-[10px] text-zinc-700 mb-1 font-bold uppercase tracking-wider">
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
                    className="w-full bg-transparent border-b-2 border-zinc-400 px-0 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso transition-all"
                />
            </div>

            <div>
                <label htmlFor="empresa" className="block text-[10px] text-zinc-700 mb-1 font-bold uppercase tracking-wider">
                    Nome da Empresa *
                </label>
                <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-zinc-400 px-0 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso transition-all"
                />
            </div>

            <div>
                <label htmlFor="cidade" className="block text-[10px] text-zinc-700 mb-1 font-bold uppercase tracking-wider">
                    Cargo *
                </label>
                <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    required
                    value={formData.cidade}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-zinc-400 px-0 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-laranja-intenso transition-all"
                />
            </div>

            {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-300 text-green-800 px-3 py-2 rounded text-xs">
                    ✓ Formulário enviado com sucesso!
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-300 text-red-800 px-3 py-2 rounded text-xs">
                    ✗ Erro ao enviar. Tente novamente.
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black hover:bg-zinc-800 text-white font-bold text-sm uppercase tracking-wider py-3 px-6 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-zinc-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
            </button>
        </form>
    );
}
