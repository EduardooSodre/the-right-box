"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        nome: "",
        empresa: "",
        cargo: "",
        email: "",
        telefone: "",
        solucao: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] =
        useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus("success");
                setFormData({
                    nome: "",
                    empresa: "",
                    cargo: "",
                    email: "",
                    telefone: "",
                    solucao: "",
                });

                setTimeout(() => setSubmitStatus("idle"), 5000);
            } else setSubmitStatus("error");
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClass =
        "w-full bg-transparent border-b border-zinc-700 text-sm text-zinc-900 py-1.5 focus:outline-none focus:border-laranja-intenso placeholder:text-zinc-500";

    return (
        <form onSubmit={handleSubmit} className="space-y-3">

            {/* Nome */}
            <div>
                <label htmlFor="nome" className="text-[11px] text-zinc-700 uppercase font-bold mb-1 block">
                    Nome *
                </label>
                <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })
                    }
                    className={inputClass}
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="text-[11px] text-zinc-700 uppercase font-bold mb-1 block">
                    Email *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    className={inputClass}
                />
            </div>

            {/* Telefone */}
            <div>
                <label htmlFor="telefone" className="text-[11px] text-zinc-700 uppercase font-bold mb-1 block">
                    Telefone *
                </label>
                <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    required
                    value={formData.telefone}
                    onChange={(e) =>
                        setFormData({ ...formData, telefone: e.target.value })
                    }
                    className={inputClass}
                />
            </div>

            {/* Nome da Empresa */}
            <div>
                <label htmlFor="empresa" className="text-[11px] text-zinc-700 uppercase font-bold mb-1 block">
                    Nome da Empresa *
                </label>
                <input
                    type="text"
                    id="empresa"
                    name="empresa"
                    required
                    value={formData.empresa}
                    onChange={(e) =>
                        setFormData({ ...formData, empresa: e.target.value })
                    }
                    className={inputClass}
                />
            </div>

            {/* Cargo */}
            <div>
                <label htmlFor="cargo" className="text-[11px] text-zinc-700 uppercase font-bold mb-1 block">
                    Cargo *
                </label>
                <input
                    type="text"
                    id="cargo"
                    name="cargo"
                    title="Cargo"
                    required
                    value={formData.cargo}
                    onChange={(e) =>
                        setFormData({ ...formData, cargo: e.target.value })
                    }
                    className={inputClass}
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-sm bg-black text-white font-bold text-sm uppercase py-2 mt-4 hover:bg-zinc-800 transition"
            >
                {isSubmitting ? "Enviando..." : "Enviar"}
            </button>

            {
                submitStatus === "success" && (
                    <p className="text-green-700 text-sm font-semibold">Mensagem enviada com sucesso!</p>
                )
            }
            {
                submitStatus === "error" && (
                    <p className="text-red-700 text-sm font-semibold">Não foi possível enviar. Tente novamente.</p>
                )
            }
        </form >
    );
}
