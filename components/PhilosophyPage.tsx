import React from "react";
import Chef from "./story/Chef";
import Video from "./story/Video";
// import philsophy from "../public/mundoLingo/mundo_lingo_philosophy.webp";
import Image from "next/image";

export default function StoryPage() {
  return (
    <div className="mb-20">
      <div className="relative border border-black  overflow-hidden h-40 md:h-44 mx-auto mb-10">
        <Image
          layout="fill"
          objectFit="cover"
          // width={900}
          // height={300}
          src="https://images.unsplash.com/photo-1620549146260-938c38c31c13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2765&q=80"
          alt="image"
        />
      </div>
      {/* <div className="flex flex-col gap-10 px-10 md:px-40  text-lg">
        <h1 className="font-crimson-pro uppercase text-center text-4xl md:mt-12 pb-6">
          Our Philosophy{" "}
        </h1>
        <p>
          We prioritise people over profit. We will not subject anyone to spam
          or data collection, nor ask for financial payments. If you want to
          give something back, buy a drink at the bar when you&apos;re good and
          ready. Participants are free to enjoy the social space we provide
          without interference from us or advertisers. We don&apos;t do audience
          participation, talk over microphones, ask you to move around, nor
          participate in novelties or games. No wristbands, ads, handing out
          flyers, sign-up lists, raffles, no messing around. We respect your
          personal space.
        </p>
        <h2 className="md:text-3xl text-2xl font-crimson-pro flex flex-col text-center gap-4">
          A Word On Spam
        </h2>
        <p>
          We don&apos;t accept commissions for anything removing the need to
          advertise anyone&apos;s products in our events or online. Occasionally
          we may talk about a free and language related service just because we
          want to.
        </p>
        <h2 className="md:text-3xl text-2xl font-crimson-pro flex flex-col text-center gap-4">
          Politics
        </h2>
        <p>
          Our flags represent languages. Please don&apos;t politicise our flags
          by pointing out the political significance of the governments they may
          sometimes be associated with. Wear the flag that represent the
          languages and dialects that you speak. Talking about politics however,
          is encouraged. Play nicely.
        </p>
        <h2 className="md:text-3xl text-2xl font-crimson-pro flex flex-col text-center gap-4">
          Commissions
        </h2>
        <p>
          LingoWorld thrives on social capital. Recognising the reality of the
          system we&apos;re in, we have approved some limited channels of money
          to enable us to grow. Commissions is not one of them. We cannot give
          nor receive commissions of any kind. We hope our friends in our
          various associated industries will understand.
        </p>
        <h2 className="md:text-3xl text-2xl font-crimson-pro flex flex-col text-center gap-4">
          Collaborations
        </h2>
        <p>
          In order to respect the above mentioned policies we&apos;re unable to
          accept offers for collaboration through cross promotion, sharing of
          data or any other form of access to our public. Events in
          collaboration with international non-profit organisations are
          considered on a case by case basis. We&apos;re indebted and immensely
          grateful to those people, businesses and organisations, big and small,
          that still choose to promote our events without the prospect of return
          profits.
        </p>
      </div> */}
      <div className="flex flex-col gap-10 px-10 md:px-40  text-lg">
        <h1 className="font-crimson-pro uppercase text-center text-4xl md:mt-12 pb-6">
          Core Beliefs
        </h1>
        <p>
          At LingoWorld, individuals come before gains. We promise a spam-free
          experience without financial strings attached. Feel free to contribute
          by getting a beverage at the venue when the mood strikes. We believe
          in a free-flowing social environment without disruptions. Our events
          exclude forced interactions, mandatory sign-ups, and gimmicks. Your
          privacy and personal space are paramount to us.
        </p>
        <h2 className="md:text-3xl text-2xl font-crimson-pro flex flex-col text-center gap-4">
          Our Stance on Promotions
        </h2>
        <p>
          We decline affiliations, thus eliminating the need to push products
          during our events. However, we might occasionally highlight a
          complimentary, language-centric service that aligns with our ethos.
        </p>
        <h2 className="md:text-3xl text-2xl font-crimson-pro flex flex-col text-center gap-4">
          Flags & Politics
        </h2>
        <p>
          Our flag system symbolizes languages. We urge participants not to
          attribute political connotations to them. Sport the flag corresponding
          to your linguistic capabilities. Engaging in political conversations
          is welcome but always in a courteous manner.
        </p>
        <h2 className="md:text-3xl text-2xl font-crimson-pro flex flex-col text-center gap-4">
          Monetary Transactions
        </h2>
        <p>
          While LingoWorld believes in the power of connections, we acknowledge
          the importance of financial support for growth. However, we distance
          ourselves from any form of commission-based collaborations. We
          appreciate the understanding of our partners in this endeavor.
        </p>
        <h2 className="md:text-3xl text-2xl font-crimson-pro flex flex-col text-center gap-4">
          Partnership Ethics
        </h2>
        <p>
          We meticulously respect our foundational principles, leading us to
          decline most cross-promotion or data-sharing collaborations. However,
          we are open to initiatives with global non-profits, assessed
          individually. A heartfelt thank you to those who continue to champion
          our events, sans any direct incentives.
        </p>
      </div>
    </div>
  );
}
