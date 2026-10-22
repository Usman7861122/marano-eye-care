import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { quiz, procedureOptions } from '../../data/home';

type Answers = Record<number, string[]>;


export default function SelfTest() {
  const total = quiz.length; // 7 questions, then the contact form
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(() => {
    const d: Answers = {};
    quiz.forEach((s, i) => {
      if (s.def !== undefined) d[i] = [s.options[s.def].replace(/<[^>]+>/g, '').trim()];
    });
    return d;
  });
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

  return (
    <section id="self-test" className="quiz-section">
      <div className="quiz-wrapper">
        {!isForm && (
          <p className="quiz-count" aria-live="polite">
            {step + 1} out of {total}
          </p>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            {q && (
              <fieldset className="q-row">
                <legend className="sr-only">Question {step + 1}</legend>
                <div className={`q-field ${q.cls ?? ''}`}>
                  <div className="q-label" dangerouslySetInnerHTML={{ __html: q.label }} />
                  {error && <small className="q-error">This field is required.</small>}
                  <div className={q.type === 'radio' ? `q-grid ${q.cls ?? ''}` : `q-checks ${q.cls ?? ''}`}>
                    {q.options.map((html, idx) => {
                      const value = html.replace(/<[^>]+>/g, '').trim();
                      const checked = (answers[step] ?? []).includes(value);
                      return (
                        <div className="q-item" key={idx}>
                          <input
                            type={q.type}
                            id={`q${step}-${idx}`}
                            name={`q${step}`}
                            checked={checked}
                            onChange={() => toggle(value)}
                            className={q.type === 'radio' ? 'q-radio' : 'q-check'}
                          />
                          <label htmlFor={`q${step}-${idx}`} dangerouslySetInnerHTML={{ __html: html }} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </fieldset>
            )}

            {isForm && !sent && (
              <form onSubmit={submit} className="q-form">
                <div className="q-row q-last">
                  <h2 className="q-section-label">
                    Get Your Recommendations
                    <span className="small">One of our patient counselors will review your information and reach out to you ASAP with your results.</span>
                  </h2>
                  <input required placeholder="First Name*" name="first_name" autoComplete="given-name" />
                  <input required placeholder="Last Name*" name="last_name" autoComplete="family-name" />
                  <input required placeholder="Phone*" name="phone" type="tel" autoComplete="tel" />
                  <input placeholder="Email" name="email" type="email" autoComplete="email" />
                  <select required name="procedure_of_interest" defaultValue="">
                    <option value="" disabled>Procedure of Interest*</option>
                    {procedureOptions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                  <textarea rows={1} placeholder="Comments" name="comments" />
                  <div className="q-item q-follow">
                    <input type="checkbox" required id="q-follow" className="q-check" />
                    <label htmlFor="q-follow">By completing this form, you are giving us permission to follow-up by phone, email or text.</label>
                  </div>
                  <div className="q-text-ok">
                    <span>May we text you?</span>
                    <label><input type="radio" name="text_ok" value="Yes" /> Yes</label>
                    <label><input type="radio" name="text_ok" value="No" defaultChecked /> No</label>
                  </div>
                </div>
                <div className="q-submit">
                  <button type="submit" className="btn">Submit</button>
                </div>
              </form>
            )}

            {isForm && sent && (
              <div className="q-done">
                <h2 className="serif mx-auto max-w-[660px] text-[length:var(--fs-h1)] leading-[1.2]">Is vision correction <i>right for you</i>?</h2>
                <p className="mx-auto mt-6 max-w-[660px] text-[18px]">In less than 60 seconds, tell us about your eyes, what bothers you, and how you want to see so we can guide you.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {!isForm && (
          <button type="button" onClick={next} className="quiz-nav next">
            Next
          </button>
        )}
        {step > 0 && !sent && (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="quiz-nav back">
            Back
          </button>
        )}
      </div>
    </section>
  );
}
