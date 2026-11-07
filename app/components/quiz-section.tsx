"use client";

import { useEffect, useRef, useState } from "react";
import { LuArrowRight, LuCheck, LuRotateCcw, LuX } from "react-icons/lu";
import type { QuizTopic } from "../data/portfolio";
import SectionHeading from "./section-heading";

function resultMessage(score: number, total: number) {
  const ratio = score / total;
  if (ratio === 1) return "Perfect score. Nothing slipped past you.";
  if (ratio >= 0.6) return "Solid run. A couple are worth another look.";
  return "Good start. Read the explanations, then try again.";
}

export default function QuizSection({ topics }: { topics: QuizTopic[] }) {
  const [topicId, setTopicId] = useState(topics[0].id);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const topic = topics.find((t) => t.id === topicId) ?? topics[0];
  const total = topic.questions.length;
  const question = topic.questions[index];
  const answered = selected !== null;

  // Focus moves for keyboard and screen reader users, but never on first load.
  const interacted = useRef(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (answered) nextRef.current?.focus();
  }, [answered]);

  useEffect(() => {
    if (interacted.current) headingRef.current?.focus();
  }, [index, finished, topicId]);

  function reset(nextTopicId = topicId) {
    interacted.current = true;
    setTopicId(nextTopicId);
    setIndex(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  function choose(optionIndex: number) {
    if (answered) return;
    interacted.current = true;
    setSelected(optionIndex);
    if (optionIndex === question.answer) setScore((value) => value + 1);
  }

  function next() {
    interacted.current = true;
    if (index + 1 >= total) {
      setFinished(true);
    } else {
      setIndex((value) => value + 1);
      setSelected(null);
    }
  }

  const primary =
    "group inline-flex items-center gap-2 rounded-full bg-accent-strong px-7 py-3 font-medium text-white transition-all hover:bg-accent hover:text-ink hover:shadow-lg hover:shadow-accent-strong/30 motion-safe:hover:-translate-y-0.5";

  return (
    <section id="quiz" aria-labelledby="quiz-title" className="scroll-mt-16">
      <SectionHeading
        id="quiz-title"
        number="02"
        label="Try it"
        title="Don't just read,"
        highlight="quiz yourself."
        highlightStyle="outline"
        intro="A small taste of the interactive reviewer I want to build: pick a topic, answer, and get the explanation right away. Both topics come from my About section."
      />

      <div className="mt-14 rounded-2xl border border-line bg-surface p-6 sm:p-10">
        {/* Topic picker */}
        <div role="group" aria-label="Quiz topic" className="flex flex-wrap gap-3">
          {topics.map((t) => {
            const isActive = t.id === topicId;
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => !isActive && reset(t.id)}
                className={`flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "border-accent-strong bg-accent-strong text-white"
                    : "border-line text-bright hover:border-accent hover:text-accent motion-safe:hover:-translate-y-0.5"
                }`}
              >
                <span aria-hidden="true">{t.emoji}</span>
                {t.label}
              </button>
            );
          })}
        </div>

        {finished ? (
          <div className="mt-10 text-center">
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">
              {topic.label} quiz complete
            </p>
            <h3
              ref={headingRef}
              tabIndex={-1}
              className="mt-4 text-6xl font-bold tracking-tight text-bright outline-none sm:text-7xl"
            >
              {score}
              <span className="text-outline">/{total}</span>
            </h3>
            <p className="mx-auto mt-4 max-w-md text-lg">{resultMessage(score, total)}</p>
            <div className="mt-8 flex justify-center">
              <button type="button" onClick={() => reset()} className={primary}>
                <LuRotateCcw
                  aria-hidden="true"
                  className="size-5 transition-transform motion-safe:group-hover:-rotate-90"
                />
                Play again
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-10">
            <div className="flex items-center justify-between text-sm">
              <p className="font-semibold tracking-widest text-accent uppercase">
                Question {index + 1} of {total}
              </p>
              <p>
                Score: <span className="font-semibold text-bright">{score}</span>
              </p>
            </div>
            <div aria-hidden="true" className="mt-3 h-1 overflow-hidden rounded-full bg-line">
              <div
                className="h-full rounded-full bg-accent transition-all duration-500"
                style={{ width: `${((index + (answered ? 1 : 0)) / total) * 100}%` }}
              />
            </div>

            <h3
              ref={headingRef}
              tabIndex={-1}
              id="quiz-question"
              className="mt-8 text-2xl leading-snug font-semibold text-bright outline-none sm:text-3xl"
            >
              {question.question}
            </h3>

            <ul aria-labelledby="quiz-question" className="mt-8 grid gap-3 sm:grid-cols-2">
              {question.options.map((option, i) => {
                const isCorrect = i === question.answer;
                const isPicked = i === selected;

                let state = "border-line text-bright hover:border-accent motion-safe:hover:-translate-y-0.5";
                if (answered) {
                  if (isCorrect) state = "border-emerald-400 bg-emerald-400/10 text-bright";
                  else if (isPicked) state = "border-rose-400 bg-rose-400/10 text-bright";
                  else state = "border-line text-body opacity-60";
                }

                return (
                  <li key={option}>
                    <button
                      type="button"
                      onClick={() => choose(i)}
                      aria-disabled={answered}
                      className={`flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left transition-all ${state} ${
                        answered ? "cursor-default" : "cursor-pointer"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="grid size-8 shrink-0 place-items-center rounded-full border border-current text-xs font-semibold"
                      >
                        {answered && isCorrect ? (
                          <LuCheck className="size-4 text-emerald-400" />
                        ) : answered && isPicked ? (
                          <LuX className="size-4 text-rose-400" />
                        ) : (
                          String.fromCharCode(65 + i)
                        )}
                      </span>
                      <span className="flex-1">{option}</span>
                      {answered && isCorrect && <span className="sr-only">(correct answer)</span>}
                      {answered && isPicked && !isCorrect && (
                        <span className="sr-only">(your answer, incorrect)</span>
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Always rendered so screen readers announce the feedback when it appears. */}
            <div role="status" aria-live="polite" className="mt-6 min-h-24">
              {answered && (
                <div className="rounded-xl border border-line bg-ink/60 p-5">
                  <p
                    className={`flex items-center gap-2 font-semibold ${
                      selected === question.answer ? "text-emerald-400" : "text-rose-400"
                    }`}
                  >
                    {selected === question.answer ? (
                      <>
                        <LuCheck aria-hidden="true" className="size-5" />
                        Correct
                      </>
                    ) : (
                      <>
                        <LuX aria-hidden="true" className="size-5" />
                        Not quite. The answer is {question.options[question.answer]}.
                      </>
                    )}
                  </p>
                  <p className="mt-2 leading-relaxed">{question.explanation}</p>
                </div>
              )}
            </div>

            <div className="mt-6 flex min-h-12 justify-end">
              {answered && (
                <button ref={nextRef} type="button" onClick={next} className={primary}>
                  {index + 1 >= total ? "See results" : "Next question"}
                  <LuArrowRight
                    aria-hidden="true"
                    className="size-5 transition-transform motion-safe:group-hover:translate-x-1"
                  />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
