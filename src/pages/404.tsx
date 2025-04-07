import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#B9E605] mb-4">404</h1>
        <h2 className="text-2xl text-white mb-8">Página não encontrada</h2>
        <p className="text-gray-400 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-[#B9E605] text-black rounded-lg hover:bg-[#B9E605]/80 transition-colors"
          >
            Voltar
          </button>
          <Link
            href="/"
            className="px-6 py-2 border border-[#B9E605] text-[#B9E605] rounded-lg hover:bg-[#B9E605]/10 transition-colors"
          >
            Ir para Home
          </Link>
        </div>
      </div>
    </div>
  );
} 