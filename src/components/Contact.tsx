import { useState } from "react";
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMessage("El nombre es obligatorio.");
      setStatus("error");
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setErrorMessage("El email es inválido.");
      setStatus("error");
      return;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      setErrorMessage("El mensaje debe tener al menos 10 caracteres.");
      setStatus("error");
      return;
    }

    try {
      // Send using Web3Forms (no backend required)
      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
      if (!accessKey) {
        throw new Error("Falta configurar VITE_WEB3FORMS_KEY en el entorno.");
      }

      const payload = {
        access_key: accessKey,
        subject: `Nuevo mensaje desde el portfolio` ,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        // Optional: you can add a redirect URL
        // redirect: 'https://tu-dominio.com/gracias'
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 5000);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "Ocurrió un error al enviar el mensaje.";
      setErrorMessage(msg);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contacto" className="py-16 bg-background">
      <div className="container-custom">
        <h2 className="section-title text-3xl font-bold mb-8">Contacto</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <p className=".text-dark text-lg mb-8 font-semibold">
              ¿Charlamos? Estoy abierta a colaborar en proyectos, prácticas y nuevas oportunidades
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <a 
                href="mailto:ludmilamartos@gmail.com"
                className="flex items-center gap-3 px-4 py-3 bg-pink-50 border border-pink-200 rounded-lg hover:bg-pink-100 transition-colors font-semibold"
              >
                <Send className="text-pink-600" size={20} />
                Email
              </a>
              <a 
                href="https://www.linkedin.com/in/ludmimar89"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors font-semibold"
              >
                <Linkedin className="text-blue-600" size={20} />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Status Messages */}
            {status === "error" && (
              <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <AlertCircle size={20} />
                <span>{errorMessage}</span>
              </div>
            )}
            
            {status === "success" && (
              <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                <CheckCircle size={20} />
                <span>¡Gracias! Tu mensaje fue enviado correctamente.</span>
              </div>
            )}

            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full"
            />
            
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full"
            />
            
            <Textarea
              name="message"
              placeholder="Mensaje"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full resize-none"
            />
            
            <Button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3"
            >
              {status === "sending" ? "Enviando..." : "Enviar"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;