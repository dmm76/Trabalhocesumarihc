import { Bell, ChevronDown, Eye, Home, ShieldCheck } from 'lucide-react';

export function Topbar() {
  return (
    <header className="border-b border-white/8 bg-[#0a0f17]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-4 px-3 py-4 sm:px-4 lg:flex-row lg:items-start lg:justify-between lg:gap-6 lg:px-6 lg:py-5">
        <div className="min-w-0 flex-1">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-slate-400 sm:text-sm">
            <Home className="h-4 w-4 text-slate-500" />
            <span>Dashboard</span>
            <span className="text-slate-600">›</span>
            <span>Produtos</span>
            <span className="text-slate-600">›</span>
            <span className="font-medium text-slate-100">Cadastro de produtos</span>
          </div>

          <h1 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            Cadastro de produtos
          </h1>
          <p className="mt-2 max-w-3xl text-sm text-slate-400">
            Preencha as informações para cadastrar um novo produto na sua loja.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 lg:max-w-[420px] lg:justify-end">
          <button className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.06] sm:h-12">
            <Eye className="h-4 w-4 text-slate-300" />
            Ver loja
          </button>

          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 sm:h-12 sm:w-12">
            <Bell className="h-4 w-4" />
            <span className="absolute right-2.5 top-2.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-emerald-500 px-1 text-[10px] font-semibold text-white">
              3
            </span>
          </div>

          <div className="flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-400 text-sm font-semibold text-white">
              AD
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">Admin User</p>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </div>

          <div className="hidden h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 sm:flex">
            <ShieldCheck className="h-4 w-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
