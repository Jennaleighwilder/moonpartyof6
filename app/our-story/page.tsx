import Image from "next/image";

export default function OurStoryPage() {
  return (
    <div>
      <section className="section-padding bg-pearl-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-semibold mb-6">Our Story</h1>
          <p className="text-xl text-charcoal leading-relaxed mb-8">
            Dee and Josh Moon met, fell in love, and built a blended family of six. Our journey hasn&apos;t been perfect — but we&apos;ve learned that intentional marriage, daily acts of romance, and honest communication can transform any relationship. This platform exists because we believe every couple deserves the tools to create connection that lasts.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="font-display text-2xl font-semibold mb-4">Maine — Hidden Honey Homes</h2>
              <p className="text-charcoal leading-relaxed mb-4">
                What an incredible visit with Mr. Moon to Hidden Honey Homes at their new Maine location. People might think we&apos;re a little crazy for traveling to the cold in winter… but living in Florida makes it easy to romanticize the snow — and honestly, this trip was pure magic. It was quiet. It was beautiful. It was a time of connection. Even while balancing work, it allowed us to slow down and truly focus on each other.
              </p>
              <p className="text-charcoal leading-relaxed">
                Our first evening was simple and perfect… cooking a romantic dinner together, rest by the fireplace & ending the night with a dip in the hot tub under a snowy sky. It felt as Hallmark as it sounds. If you&apos;ve been looking for a place to nurture your relationship and prioritize each other… Hidden Honey Homes truly delivers.
              </p>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image src="/images/dee-doc-12.png" alt="Dee and Josh at Hidden Honey Homes, Maine" fill className="object-cover" sizes="(max-width: 768px) 100vw, 672px" />
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold mb-4">St Thomas — Anniversary</h2>
              <p className="text-charcoal leading-relaxed">
                Incredible date night at Easterly St Thomas on our Anniversary Trip. The moment we believe the pursuit is over is often the moment the connection begins to fade. A great relationship won&apos;t happen by accident. It requires effort. It requires intention. It requires investment. The same way we pour time into our hobbies, our work, or our goals, our relationship deserves the same.
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-semibold mb-4">Why &quot;Mr. Moon&quot;?</h2>
              <p className="text-charcoal leading-relaxed">
                We get this question a lot — and I love that you all notice it. It&apos;s not because he doesn&apos;t like his name. It&apos;s just something we started as a way to keep the fun, the flirting, and the sweet & spicy teasing alive in our marriage. Life can get monotonous & if you don&apos;t find ways to have fun together, you can really get stuck in an inflexible routine — especially since I play his secretary in real life. &quot;Mr. Moon&quot; is kind of like our little joke when I can&apos;t call him the other things he likes — but now, it&apos;s become this sweet nickname that even you all say in the comments. And I love that. It makes it feel like we&apos;re all in this together.
              </p>
              <p className="text-charcoal font-display text-lg mt-4 italic">— Love, Mr. & Mrs. Moon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
