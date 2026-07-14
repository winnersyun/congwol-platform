export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      <section className="flex flex-col items-center justify-center h-screen px-6">

        <p className="text-green-500 tracking-[8px] uppercase">
          CONGWOL
        </p>

        <h1 className="text-6xl font-bold text-center mt-6 leading-tight">
          카페 성공에는
          <br />
          운이 아니라
          <br />
          비법이 있습니다.
        </h1>

        <p className="text-gray-400 text-xl mt-8 text-center max-w-2xl">
          메뉴 개발부터 마케팅,
          AI 자동화,
          교육 플랫폼까지
          콩월이 모두 제공합니다.
        </p>

        <div className="flex gap-5 mt-12">

          <button className="bg-green-600 px-8 py-4 rounded-xl text-lg hover:bg-green-500 transition">
            비법 보기
          </button>

          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
            교육 신청
          </button>

        </div>

      </section>

    </main>
  );
}