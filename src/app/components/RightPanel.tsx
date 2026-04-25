import { Check, CheckCircle2, Minus, Plus, Shield, TriangleAlert } from 'lucide-react';

interface RightPanelProps {
  isActive: boolean;
  onActiveChange: (value: boolean) => void;
  controlStock: boolean;
  onControlStockChange: (value: boolean) => void;
  quantity: string;
  onQuantityChange: (value: string) => void;
  minQuantity: string;
  onMinQuantityChange: (value: string) => void;
  categories: string[];
  onCategoriesChange: (categories: string[]) => void;
  onSave: () => void;
  isSaving: boolean;
}

function Panel({
  title,
  icon: Icon,
  children,
  action,
}: {
  title: string;
  icon: typeof Shield;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/8 bg-[#171d27]/92 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] sm:p-6">
      <div className="mb-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/8">
            <Icon className="h-4 w-4 text-emerald-400" />
          </div>
          <h3 className="text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">{title}</h3>
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function Toggle({
  checked,
  onChange,
  title,
  description,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  title: string;
  description: string;
}) {
  return (
    <label className="flex items-start gap-4">
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={[
          'relative mt-1 h-7 w-12 shrink-0 rounded-full transition',
          checked ? 'bg-emerald-400' : 'bg-slate-700',
        ].join(' ')}
      >
        <span
          className={[
            'absolute top-1 h-5 w-5 rounded-full bg-white transition',
            checked ? 'left-6' : 'left-1',
          ].join(' ')}
        />
      </button>
      <span className="min-w-0">
        <span className="block text-base font-medium text-white sm:text-lg">{title}</span>
        <span className="mt-1 block text-sm text-slate-400">{description}</span>
      </span>
    </label>
  );
}

export function RightPanel({
  isActive,
  onActiveChange,
  controlStock,
  onControlStockChange,
  quantity,
  onQuantityChange,
  minQuantity,
  onMinQuantityChange,
  categories,
  onCategoriesChange,
  onSave,
  isSaving,
}: RightPanelProps) {
  const availableCategories = [
    'Eletrônicos',
    'Smartphones',
    'Acessórios',
    'Notebooks',
    'Casa e decoração',
    'Eletrodomésticos',
  ];

  const toggleCategory = (category: string) => {
    if (categories.includes(category)) {
      onCategoriesChange(categories.filter((item) => item !== category));
      return;
    }

    onCategoriesChange([...categories, category]);
  };

  const updateNumber = (
    currentValue: string,
    onChange: (value: string) => void,
    delta: number,
  ) => {
    const nextValue = Math.max(0, Number(currentValue || '0') + delta);
    onChange(String(nextValue));
  };

  return (
    <aside className="w-full shrink-0 space-y-5 2xl:w-[420px]">
      <div className="rounded-3xl border border-emerald-500/25 bg-[#14321f] p-5 text-white shadow-[0_18px_50px_rgba(16,185,129,0.08)]">
        <div className="flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/20 text-emerald-200">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-base font-semibold sm:text-lg">Produto salvo com sucesso!</p>
            <p className="mt-1 text-sm text-emerald-100/75">As alterações foram aplicadas.</p>
          </div>
          <button type="button" className="text-emerald-100/70">
            ×
          </button>
        </div>
      </div>

      <Panel title="Status do produto" icon={Shield}>
        <div className="space-y-6">
          <Toggle
            checked={isActive}
            onChange={onActiveChange}
            title="Produto ativo"
            description="O produto ficará visível na sua loja."
          />

          <Toggle
            checked={controlStock}
            onChange={onControlStockChange}
            title="Controlar estoque"
            description="Habilite para gerenciar o estoque."
          />
        </div>
      </Panel>

      <Panel title="Estoque" icon={TriangleAlert}>
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-slate-200">
              Quantidade em estoque <span className="text-rose-400">*</span>
            </label>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-full items-center rounded-2xl border border-emerald-500/70 bg-[#131923] pl-4 pr-2 text-white transition focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-500/15 sm:h-[3.75rem]">
                <input
                  type="number"
                  value={quantity}
                  onChange={(event) => onQuantityChange(event.target.value)}
                  className="w-full bg-transparent text-base text-white outline-none [appearance:textfield]"
                />

                <div className="ml-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateNumber(quantity, onQuantityChange, -1)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:bg-white/[0.08]"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => updateNumber(quantity, onQuantityChange, 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-300 transition hover:bg-emerald-500/20"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-400" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="flex items-center gap-1 text-sm font-medium text-slate-200">
              Alerta mínimo <span className="text-rose-400">*</span>
            </label>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-full items-center rounded-2xl border border-rose-500/70 bg-[#131923] pl-4 pr-2 text-white transition focus-within:border-rose-400 focus-within:ring-4 focus-within:ring-rose-500/15 sm:h-[3.75rem]">
                <input
                  type="number"
                  value={minQuantity}
                  onChange={(event) => onMinQuantityChange(event.target.value)}
                  className="w-full bg-transparent text-base text-white outline-none [appearance:textfield]"
                />

                <div className="ml-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateNumber(minQuantity, onMinQuantityChange, -1)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:bg-white/[0.08]"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => updateNumber(minQuantity, onMinQuantityChange, 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-300 transition hover:bg-rose-500/20"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-400" />
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-amber-400">
            <TriangleAlert className="h-4 w-4 shrink-0" />
            <span>Estoque baixo: restam {quantity} unidades.</span>
          </div>
        </div>
      </Panel>

      <Panel
        title="Categorias"
        icon={Check}
        action={<button className="text-sm font-medium text-sky-400">Gerenciar categorias</button>}
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-400">
            Selecione as categorias <span className="text-rose-400">*</span>
          </p>

          <div className="space-y-3">
            {availableCategories.map((category) => {
              const checked = categories.includes(category);

              return (
                <label key={category} className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => toggleCategory(category)}
                    className={[
                      'flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition',
                      checked
                        ? 'border-emerald-400 bg-emerald-400 text-[#0a0f17]'
                        : 'border-white/15 bg-transparent text-transparent',
                    ].join(' ')}
                  >
                    <Check className="h-3.5 w-3.5" />
                  </button>
                  <span className="text-base text-white sm:text-lg">{category}</span>
                </label>
              );
            })}
          </div>
        </div>
      </Panel>

      <div className="space-y-4 pt-1">
        <div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-1">
          <button
            type="button"
            className="h-14 rounded-2xl border border-white/15 bg-transparent text-base font-medium text-white transition hover:bg-white/[0.03] sm:text-lg"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={onSave}
            disabled={isSaving}
            className="h-14 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-400 text-base font-semibold text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70 sm:text-lg"
          >
            {isSaving ? 'Salvando...' : 'Salvar produto'}
          </button>
        </div>

        <p className="text-sm text-slate-400">Todas as alterações serão salvas automaticamente</p>
        <p className="text-sm text-slate-500">Última atualização: há poucos segundos</p>
      </div>
    </aside>
  );
}
