import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-white/8 py-6 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#666666]">
          &copy; 2026 Abdul Siddiq
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/arsiddiq"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#666666] hover:text-white transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:ar.siddiq1025@gmail.com"
            aria-label="Email"
            className="text-[#666666] hover:text-white transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
