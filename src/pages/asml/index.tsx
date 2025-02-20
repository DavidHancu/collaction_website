import { useRef } from 'react';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import PageSEO from 'src/components/PageSEO';
import { DealsCard } from 'src/components/DealsCard';
import { getDealsData } from 'src/lib/getDeals';

import ASMLBanner from 'public/veganuary-ASML-banner.png';
import CollActionLogoWithText from 'public/logo-black-small.png';
import BadgeApple from 'public/Badge-Apple.png';
import BadgeGoogle from 'public/Badge-Google.png';
import AppPreviewCard1 from 'public/app-preview-card-1.png';
import AppPreviewCard2 from 'public/app-preview-card-2.png';
import AppPreviewCard3 from 'public/app-preview-card-3.png';

export default function ASMLPage({
  deals,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const appLinksRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <PageSEO
        title="CollAction meets ASML | Make an impact together"
        description="ASML participates in Veganuary: an annual challenge that promotes veganism and sustainable food consumption. Read recipes, tips, supplements, and more."
      />

      <div>
        <div className="bg-black-0 px-5 md:px-8 py-28 md:pb-18">
          <div className="max-w-600 mx-auto mb-15 md:mb-18 lg:mb-22">
            <h1 className="text-black-400 text-center mb-8">
              We connect people to solve collective action problems
            </h1>

            <div className="w-32 mx-auto relative leading-none">
              <Image
                priority
                src={CollActionLogoWithText}
                alt="black CollAction logo with text"
                layout="responsive"
                placeholder="blur"
                sizes="128px"
              />
            </div>
          </div>

          <div className="relative block w-full md:w-11/12 lg:w-208 mx-auto">
            <Image
              priority
              src={ASMLBanner}
              alt="asml veganuary banner"
              className="rounded-3xl"
              layout="responsive"
              sizes="(max-width: 768px) 90vw, 830px"
              placeholder="blur"
            />
          </div>

          <div className="mt-12 md:mt-15 lg:mt-26">
            <div className="max-w-600 mx-auto mb-13">
              <h4 className="mb-8">
                Hi, welcome to the ASML edition of Veganuary!
              </h4>
              <p className="mb-6 last:mb-0">
                Veganuary is an annual challenge that promotes veganism and
                sustainable food consumption. Joining is easy, you will go
                through the following steps:
              </p>
              <ul style={{ listStyleType: 'decimal' }} className="pl-8">
                <li className="mb-1">
                  Choose if you want to participate 5 or 7 days a week
                </li>
                <li className="mb-1">Choose your commitments</li>
                <li className="mb-1">
                  Stay tuned for extra activities and restaurant deals
                </li>
                <li className="mb-1">
                  See the impact of you and your colleagues after the dietary
                  change
                </li>
              </ul>
              <p className="mb-6 last:mb-0">
                <br />
                Veganuary is a month where we can challenge ourselves. Let's try
                it out together and help each other by sharing recipes, tips,
                supplements, and more. Shifting to a more plant-based diet is
                great for your health and the environment. Want to participate?
                Click the participate button and fill out the form.
              </p>
            </div>

            <div className="max-w-600 mx-auto mb-13">
              <h4 className="mb-8">Commitments</h4>
              <p className="mb-6 last:mb-0">
                We'd love to optimize your personal impact. Eating vegan for a
                full month can be a difficult task. To maximize the impact of
                the ASML edition of Veganuary, there are multiple levels at
                which you can participate. Your challenge, your rules.
                Therefore, you can join the challenge by eating vegan for a
                month, but eating vegetarian, pescatarian, or simply not eating
                beef/cheese is also possible. Would you like to have the
                weekends off? We've got you covered with a '5/7 days as week'
                option!
              </p>
            </div>

            <div className="mb-13 last:mb-0">
              <h4 className="max-w-600 mx-auto mb-8">Restaurant Deals</h4>
              {/* if we add another paragraph, use the commented line in both and remove the used one */}
              {/* <p className="max-w-500 mx-auto mb-6 last:mb-0"> */}
              <p className="max-w-600 mx-auto mb-0">
                Besides us, restaurants would like to motivate you as well! See
                below which deals are on offer. Note that for some restaurants
                you're required to show the password in{' '}
                {
                  <a
                    className="text-collaction"
                    href="https://my.asml.com/Newsroom/Pages/Sustainability/Join-our-Veganuary-journey.aspx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    this MyASML article
                  </a>
                }
                .
              </p>
              <div className="flex flex-wrap justify-center mx-auto md:max-w-864 mt-12 lg:mt-15">
                {deals.map(deal => (
                  <DealsCard key={deal.title} {...deal} />
                ))}
              </div>
            </div>
          </div>

          {/* SEE MORE DEALS */}
          <Link href="/asml/deals">
            <a className="block bg-accent font-bold leading-none text-button text-white text-center rounded-full p-3.5 mt-5 w-72 shadow sticky bottom-8 inset-x-0 mx-auto z-40">
              See All Deals
            </a>
          </Link>
        </div>

        {/* APP SECTION */}
        <div className="bg-black-400 px-5 md:px-8 pt-20 pb-24 md:pb-22 text-center">
          <div className="max-w-600 mx-auto">
            <h2 className="text-secondary mb-8">
              The CollAction app has launched!
            </h2>
            <p className="text-black-0">
              We’ve been working very hard and are happy to announce that our
              app is live. We have more updates and improvements coming very
              soon, so stay tuned.
            </p>
          </div>

          {/* APP LINKS */}
          <div
            ref={appLinksRef}
            className="flex flex-wrap items-center justify-center mt-8 md:mt-10 mb-15 lg:mb-20 mx-auto"
          >
            <a
              href="https://apps.apple.com/app/id1597643827"
              className="inline-flex mb-5 mx-2 xs:mx-0 xs:mr-5"
              aria-label="apple download badge"
            >
              <Image
                src={BadgeApple}
                alt="apple download badge"
                width={143}
                height={48}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=org.collaction.collaction_app"
              aria-label="google download badge"
              className="inline-flex mb-5 mx-2 xs:mx-0"
            >
              <Image
                src={BadgeGoogle}
                alt="google download badge"
                width={162}
                height={48}
              />
            </a>
          </div>

          <div className="flex flex-wrap justify-center lg:justify-start md:max-w-400 lg:max-w-4xl lg:w-208 mx-auto">
            {/* APP CARD */}
            <div className="bg-secondary text-black-400 max-w-400 w-full rounded-3xl px-10 lg:px-13 py-8 pb-0 mb-5 md:mb-8 lg:mr-8 overflow-hidden">
              <h4 className="text-black-400 mb-5">Make a change today</h4>
              <p className="text-black-200">
                Join a CrowdAction you want to be part of.
              </p>
              <div className="block -mb-9 xs:-mb-12">
                <Image
                  src={AppPreviewCard1}
                  alt="app preview card 1"
                  layout="responsive"
                  sizes="(min-width: 769px) 275px, 300px"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="bg-secondary text-black-400 max-w-400 w-full rounded-3xl px-10 lg:px-13 py-8 mb-5 md:mb-8 lg:mr-8 overflow-hidden lg:order-3">
              <h4 className="text-black-400 mb-5">
                Participate at your own pace
              </h4>
              <p className="text-black-200 mb-4">
                Choose your commitments for the CrowdAction.
              </p>
              <div className="block">
                <Image
                  src={AppPreviewCard2}
                  alt="app preview card 2"
                  layout="responsive"
                  sizes="275px"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="bg-secondary text-black-400 max-w-400 w-full rounded-3xl px-10 lg:px-13 py-8 mb-5 md:mb-8 lg:mr-0 overflow-hidden lg:order-2">
              <div className="block -mt-15 xs:-mt-16">
                <Image
                  src={AppPreviewCard3}
                  alt="app preview card 3"
                  layout="responsive"
                  sizes="275px"
                  placeholder="blur"
                />
              </div>
              <h4 className="text-black-400 mb-5">Join the wave</h4>
              <p className="text-black-200">Make impact together.</p>
            </div>
          </div>
        </div>

        {/* DOWNLOAD THE APP BUTTON */}
        <button
          onClick={() =>
            appLinksRef.current?.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            })
          }
          className="block bg-accent font-bold leading-none text-button text-white text-center rounded-full p-3.5 mb-8 w-72 shadow sticky bottom-8 inset-x-0 mx-auto z-40"
          style={{ marginTop: `calc(-52px - 2rem)` }}
        >
          Download The App!
        </button>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const deals = getDealsData('featured');

  return {
    props: {
      deals,
    },
  };
};
