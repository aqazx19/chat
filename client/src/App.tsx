import React, { useEffect, useRef, useState } from 'react';
import FloatButton from './FloatButton';
import Modal from './components/Modal';

export default function App(): JSX.Element {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scrollByAmount = (amount: number): void => {
        const el = carouselRef.current;
        if (!el) return;
        el.scrollBy({ left: amount, behavior: 'smooth' });
    };

    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        el.scrollTo({ left: 0 });
    }, []);

    const chickens = [
        {
            brand: '비비큐',
            name: '비비큐 자메이카 통다리',
            src: '/images/비비큐.jpeg',
            desc: '비비큐 자메이카 통다리!! 이거 정말 내가 먹어보고싶은 치킨이야... 개인적으로 이거 사주면 너무 좋겠다~~',
            giftUrl: 'https://kko.kakao.com/XH7ZXWbRkx',
        },
        {
            brand: '교촌치킨',
            name: '교촌치킨 반반콤보',
            src: '/images/교촌치킨.jpeg',
            desc: '교촌치킨 반반콤보는 내가 아주 좋아하는 치킨이지! 특히 레드는 알싸한게 아주 맛있어~ 예전 우리 검암동살때 서해아파트 근처에 교촌치킨집이 있어서 아빠가 사주곤 했었어. 이제는 누나가 사줄래?',
            giftUrl: 'https://kko.kakao.com/rbq-TLMNPd',
        },
    ];
    return (
        <div>
            <style>{`
                @keyframes fadeUp {
                    0% { opacity: 0; transform: translateY(8px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes floaty {
                    0% { transform: translateY(0); }
                    50% { transform: translateY(-6px); }
                    100% { transform: translateY(0); }
                }
            `}</style>

            <main className="min-h-[100dvh] bg-white text-slate-900">
                {/* Header */}
                <header className="border-b border-slate-200/80">
                    <div className="max-w-3xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
                        <div className="font-semibold tracking-tight">
                            치킨🍗 먹고싶다
                        </div>
                    </div>
                </header>

                {/* Hero */}
                <section className="max-w-3xl mx-auto px-4 md:px-6 pt-10 pb-10 md:pt-20 md:pb-14">
                    <h1
                        className="text-4xl md:text-6xl font-extrabold tracking-tight text-center"
                        style={{ animation: 'fadeUp 400ms ease both' }}
                    >
                        세현이는 치킨이 먹고싶다!!
                    </h1>
                    <p
                        className="mt-4 md:mt-6 text-center text-slate-600 text-base md:text-lg leading-relaxed"
                        style={{ animation: 'fadeUp 500ms ease both' }}
                    >
                        치킨사주는 우리 누나 너무 고마워 ❤️
                    </p>
                </section>

                {/* Carousel */}
                <section className="max-w-3xl mx-auto px-4 md:px-6 pb-24">
                    <div className="flex items-center justify-between mb-3">
                        <div className="font-semibold">치킨 후보</div>
                        <div className="hidden md:flex gap-2">
                            <button
                                aria-label="이전"
                                onClick={() =>
                                    scrollByAmount(
                                        -(
                                            carouselRef.current?.clientWidth ||
                                            360
                                        )
                                    )
                                }
                                className="h-9 w-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center"
                            >
                                <span className="sr-only">이전</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    />
                                </svg>
                            </button>
                            <button
                                aria-label="다음"
                                onClick={() =>
                                    scrollByAmount(
                                        carouselRef.current?.clientWidth || 360
                                    )
                                }
                                className="h-9 w-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center"
                            >
                                <span className="sr-only">다음</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    className="h-4 w-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div
                        ref={carouselRef}
                        className="-mx-4 px-4 overflow-x-auto scrollbar-none snap-x snap-mandatory"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div className="flex gap-4 pb-2">
                            {chickens.map((item, index) => (
                                <article
                                    key={index}
                                    className="w-80 md:w-96 flex-shrink-0 snap-start rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                                    style={{
                                        animation: `floaty ${
                                            2400 + index * 100
                                        }ms ease-in-out ${
                                            index * 60
                                        }ms infinite`,
                                    }}
                                >
                                    <div className="aspect-[4/3] w-full rounded-t-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                                        <img
                                            src={item.src}
                                            alt={`치킨 ${item.name}`}
                                            className="w-full h-full object-cover rounded-t-2xl"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <div className="text-sm text-slate-500">
                                            {item.brand}
                                        </div>
                                        <h3 className="mt-1 font-semibold">
                                            {item.name}
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                        <div className="mt-4 flex justify-end">
                                            <a
                                                href={item.giftUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="inline-flex items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm font-medium"
                                            >
                                                사주기
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
