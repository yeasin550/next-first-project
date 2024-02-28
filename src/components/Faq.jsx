/* eslint-disable @next/next/no-img-element */
"use client";
import { FaPhoneAlt } from "react-icons/fa";

const Faq = () => {
  return (
    <div className="">
      <div className="flex items-center gap-3">
        <div className="w-1/2">
          <img
            className=""
            src="https://img.freepik.com/free-vector/medical-research-concept-illustration_114360-4763.jpg?w=740&t=st=1708794530~exp=1708795130~hmac=b66932f16261b52c91d856ad003cdc2b078de95e84ba183bd0ef6515506f68d4"
            alt=""
          />
        </div>
        <div className="max-w-screen-xl w-1/2 mx-auto px-5 bg-white">
          <div class="flex flex-col items-center">
            {/* <h2 class="font-bold text-4xl mt-5 tracking-tight">FAQ</h2> */}
            <p class="text-purple-700 text-2xl mt-3">
              Frequently asked questions?
            </p>
          </div>
          <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> How does it work?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form.
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Do I need a designer to use Doctris?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a variety of billing options, including monthly and
                  annual subscription plans, as well as pay-as-you-go pricing
                  for certain services. Payment is typically made through a
                  credit card or other secure online payment method.
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Can I get a refund for my subscription?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offers a 30-day money-back guarantee for most of its
                  subscription plans. If you are not satisfied with your
                  subscription within the first 30 days, you can request a full
                  refund. Refunds for subscriptions that have been active for
                  longer than 30 days may be considered on a case-by-case basis.
                </p>
              </details>
            </div>
            <div class="py-5">
              <details class="group">
                <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> How do I cancel my subscription?</span>
                  <span class="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  To cancel your We subscription, you can log in to your account
                  and navigate to the subscription management page. From there,
                  you should be able to cancel your subscription and stop future
                  billing.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-center my-12 space-y-4">
        <h1 className="text-2xl font-bold">Have Question ? Get in touch!</h1>
        <p className="w-6/12 mx-auto">
          Great doctor if you need your family member to get effective immediate
          assistance, emergency treatment or a simple consultation. !
        </p>
        <div className="w-44 mx-auto">
          <button className="bg-sky-600 rounded-md py-2 px-3 text-white flex items-center gap-1">
            <FaPhoneAlt /> Contact Us
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Faq;
