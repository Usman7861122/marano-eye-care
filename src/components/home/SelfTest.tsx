import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { quiz, procedureOptions } from '../../data/home';

type Answers = Record<number, string[]>;

const inputBase =
  'w-full rounded-[10px] border border-white/30 bg-transparent px-4 py-3 text-[16px] text-white placeholder:text-white/60 focus:border-white focus:outline-none';

export default function SelfTest() {
  const total = quiz.length; // 7 questions, then the contact form
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);

  const isForm = step === total;
  const q = !isForm ? quiz[step] : null;

  const toggle = (value: string) => {
    if (!q) return;
    setError(false);
    setAnswers((a) => {
      const cur = a[step] ?? [];
      if (q.type === 'radio') return { ...a, [step]: [value] };
      return { ...a, [step]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value] };
    });
  };

  const next = () => {
    if ((answers[step] ?? []).length === 0) return setError(true);
    setError(false);
    setStep((s) => s + 1);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: connect to the real form endpoint / CRM (old site posted to /self-test/thank-you/).
    setSent(true);
  };

  const optionRows = q
    ? (q.options as (string | string[])[]).map((o) => (Array.isArray(o) ? { title: o[0], text: o[1] } : { title: '', text: o }))
    : [];

  return (
    <section
      id="self-test"
      className="px-[clamp(16px,4.26vw,61px)] py-[clamp(48px,6.4vw,92px)]"
      style={{ backgroundImage: 'linear-gradient(45deg, #91b2cd 0%, #041a34 30%)' }}
    >
      <div
        className="relative rounded-[45px] border border-white pb-[190px] text-white"
        style={{ backgroundImage: 'linear-gradient(36deg, #273e55, #041a34 30%)' }}
      >
        {!isForm && (
          <p className="absolute right-[clamp(20px,5.4vw,78px)] top-[clamp(20px,3vw,44px)] text-[16px]" aria-live="polite">
            <span className="text-[24px]">{step + 1}</span> out of <span className="text-[24px]">{total}</span>
          </p>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="px-[clamp(20px,8.9vw,127px)] pt-[clamp(56px,6vw,88px)]"
          >
            {q && (
              <fieldset className="relative mx-auto max-w-[1060px]">
                <legend className="serif mx-auto max-w-[760px] text-center text-[clamp(28px,3.2vw,46px)] leading-[1.1]">
                  {q.q} {q.italic && <i>{q.italic}</i>}
                  {q.sub && (
                    <span className="mt-10 block font-sans text-[18px] font-semibold leading-[1.1]">{q.sub}</span>
                  )}
                </legend>

                {error && (
                  <small className="absolute right-0 top-0 rounded-[3px] bg-[#dc7474] px-1 py-[2px] text-[10px] uppercase tracking-[0.7px]">
                    This field is required.
                  </small>
                )}

                <div
                  className={`mt-[78px] grid gap-x-20 gap-y-10 ${
                    optionRows.length > 6 ? 'md:grid-cols-2' : 'md:grid-cols-3'
                  }`}
                >
                  {optionRows.map((o, idx) => {
                    const value = (o.title ? o.title + ' ' : '') + o.text;
                    const checked = (answers[step] ?? []).includes(value);
                    return (
                      <label key={idx} className="flex cursor-pointer items-center gap-5">
                        <input
                          type={q.type}
                          name={`q${step}`}
                          checked={checked}
                          onChange={() => toggle(value)}
                          className="peer sr-only"
                        />
                        <span
                          className={`grid h-[48px] w-[48px] shrink-0 place-items-center border transition ${
                            q.type === 'radio' ? 'rounded-full' : 'rounded-[10px]'
                          } ${checked ? 'border-white shadow-[0_0_8px_0_#91b2cd]' : 'border-white/20 hover:border-white/60'}`}
                          aria-hidden="true"
                        >
                          {checked && <span className={`h-[20px] w-[20px] bg-white ${q.type === 'radio' ? 'rounded-full' : 'rounded-[4px]'}`} />}
                        </span>
                        <span className="text-[16.76px] leading-[1.5]">
                          {o.title && <strong className="block font-semibold">{o.title}</strong>}
                          {o.text}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            )}

            {isForm && !sent && (
              <form onSubmit={submit} className="mx-auto max-w-[760px]">
                <h2 className="serif text-center text-[clamp(28px,3.2vw,46px)] leading-[1.1]">Get Your Recommendations</h2>
                <p className="mb-8 mt-4 text-center text-[18px]">
                  One of our patient counselors will review your information and reach out to you ASAP with your results.
                </p>
                <div className="grid gap-4 md:grid-cols-2">
                  <input required className={inputBase} placeholder="First Name*" name="first_name" autoComplete="given-name" />
                  <input required className={inputBase} placeholder="Last Name*" name="last_name" autoComplete="family-name" />
                  <input required className={inputBase} placeholder="Phone*" name="phone" type="tel" autoComplete="tel" />
                  <input className={inputBase} placeholder="Email" name="email" type="email" autoComplete="email" />
                  <select required className={`${inputBase} md:col-span-2`} name="procedure_of_interest" defaultValue="">
                    <option value="" disabled className="text-navy">Procedure of Interest*</option>
                    {procedureOptions.map((p) => (
                      <option key={p} value={p} className="text-navy">{p}</option>
                    ))}
                  </select>
                  <textarea className={`${inputBase} md:col-span-2`} rows={3} placeholder="Comments" name="comments" />
                </div>
                <label className="mt-5 flex items-start gap-3 text-[14px]">
                  <input type="checkbox" required className="mt-1" />
                  By completing this form, you are giving us permission to follow-up by phone, email or text.
                </label>
                <fieldset className="mt-4 flex items-center gap-6 text-[16px]">
                  <legend className="sr-only">May we text you?</legend>
                  <span>May we text you?</span>
                  <label className="flex items-center gap-2"><input type="radio" name="text_ok" value="Yes" /> Yes</label>
                  <label className="flex items-center gap-2"><input type="radio" name="text_ok" value="No" /> No</label>
                </fieldset>
                <div className="mt-8 flex justify-center">
                  <button type="submit" className="btn white">Submit</button>
                </div>
              </form>
            )}

            {isForm && sent && (
              <div className="py-16 text-center">
                <h2 className="serif text-[clamp(28px,3.2vw,46px)] leading-[1.1]">Thank <i>you.</i></h2>
                <p className="mt-4 text-[18px]">A patient counselor will be in touch with your results.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {!isForm && (
          <button
            type="button"
            onClick={next}
            className="absolute bottom-[clamp(16px,2.5vw,36px)] right-[clamp(20px,5.4vw,78px)] flex flex-row-reverse items-center gap-[14px] rounded-full border border-white/20 px-6 py-[14px] text-[16px] text-white transition hover:bg-white/10"
          >
            Next
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M1 6h14M10 1l5 5-5 5" /></svg>
          </button>
        )}
        {step > 0 && !sent && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="absolute bottom-[clamp(16px,2.5vw,36px)] left-[clamp(20px,5.4vw,78px)] rounded-full border border-white/20 px-6 py-[14px] text-[16px] text-white transition hover:bg-white/10"
          >
            Back
          </button>
        )}
      </div>
    </section>
  );
}
