# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

<!--
import React from "react";

const AllProduct = () => {
  return (
    <div className="w-full lg:pt-6 xl:pt-8">
      <div className="col-span-12 p-6 rounded bg-gray-100">
        <div>
          <div className="TabGroupContainer">
            <div
              className="TabContentList overflow-x-clip"
              style={{ overflowX: "clip" }}
            >
              <div
                className="flex justify-start transition duration-300"
                style={{ transform: "translateX(0%)" }}
              >
                <div className="min-w-full">
                  <div className="TabGroupInner">
                    <div className="flex items-center">
                      <ul className="flex justify-start min-w-full p-0" style={{ transform: "none" }}>
                        <li className="px-2 pb-4">
                          <div className="border border-gray-300 rounded-md p-2 hover:shadow-lg transition-all">
                            {/* Product Image */}
                            <a
                              href="/pd/10000069/fresho-capsicum-green-500-g"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="https://www.bbassets.com/media/uploads/p/m/10000069_24-fresho-capsicum-green.jpg?tr=w-154,q-80"
                                alt="Capsicum Green/Shimla Mirch"
                                className="w-full h-36 object-cover rounded-md"
                              />
                            </a>

                            {/* Offer Badge */}
                            <div className="mt-2">
                              <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded font-semibold">
                                36% OFF
                              </span>
                            </div>

                            {/* Delivery Time */}
                            <div className="text-green-700 text-sm mt-1 flex items-center gap-1">
                              <svg
                                width="12"
                                height="12"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M2.014 6.417H.351a.327.327 0 0 1-.308-.186.317.317 0 0 1 .03-.36L4.002.194a.466.466 0 0 1 .232-.174.386.386 0 0 1 .28.011.47.47 0 0 1 .22.186.392.392 0 0 1 .059.28L4.34 4.09h2.047c.147 0 .252.066.314.198a.33.33 0 0 1-.047.372L2.34 9.836a.424.424 0 0 1-.239.15.411.411 0 0 1-.273-.022.449.449 0 0 1-.203-.186.41.41 0 0 1-.053-.28l.442-3.081Z" />
                              </svg>
                              <span>5 hrs</span>
                            </div>

                            {/* Product Info */}
                            <div className="mt-2">
                              <h3 className="text-sm font-bold">fresho!</h3>
                              <p className="text-base text-gray-800 leading-tight line-clamp-2">
                                Capsicum Green/Shimla Mirch
                              </p>
                            </div>

                            {/* Weight Selector */}
                            <div className="mt-2">
                              <button className="w-full border border-gray-300 rounded px-3 py-1 text-sm font-medium flex justify-between items-center">
                                500 g
                                <svg
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 15.5a.997.997 0 0 1-.707-.293l-4-4a.999.999 0 1 1 1.414-1.414l3.305 3.305 3.293-3.18a1 1 0 0 1 1.39 1.439l-4 3.862a.998.998 0 0 1-.695.28Z" />
                                </svg>
                              </button>
                            </div>

                            {/* Pricing */}
                            <div className="mt-2 flex gap-2 items-center">
                              <span className="text-lg font-bold text-black">
                                ₹68
                              </span>
                              <span className="text-sm line-through text-gray-500">
                                ₹106
                              </span>
                            </div>

                            {/* Tagline */}
                            <div className="mt-2 bg-green-100 text-green-800 text-sm font-semibold py-1 px-2 rounded text-center">
                              Har Din Sasta!
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-3 flex justify-between items-center gap-2">
                              <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded">
                                -
                              </button>
                              <span className="text-sm font-semibold">1</span>
                              <button className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded">
                                +
                              </button>
                              <button className="flex-1 border border-green-600 text-green-700 font-semibold py-1 rounded hover:bg-green-50">
                                Add
                              </button>
                            </div>
                          </div>
                        </li>
                        <li className="px-2 pb-2">
  <div className="border rounded-md shadow-sm overflow-hidden relative">
    <a
      href="/pd/10000098/fresho-coriander-leaves-250-g"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://www.bbassets.com/media/uploads/p/m/10000098_13-fresho-coriander-leaves.jpg?tr=w-154,q-80"
        alt="fresho! Coriander/Dhaniya 250 g"
        className="w-full object-cover h-40"
      />
    </a>
    <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-2 py-0.5 rounded shadow">
      24% OFF
    </div>
    <div className="px-4 py-2 space-y-2">
      <div className="flex items-center justify-between text-sm text-green-700 font-semibold">
        <span className="flex items-center gap-1">
          <svg
            width="10"
            height="10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.014 6.417H.351a.327.327 0 0 1-.308-.186.317.317 0 0 1 .03-.36L4.002.194a.466.466 0 0 1 .232-.174.386.386 0 0 1 .28.011.47.47 0 0 1 .22.186.392.392 0 0 1 .059.28L4.34 4.09h2.047c.147 0 .252.066.314.198a.33.33 0 0 1-.047.372L2.34 9.836a.424.424 0 0 1-.239.15.411.411 0 0 1-.273-.022.449.449 0 0 1-.203-.186.41.41 0 0 1-.053-.28l.442-3.081Z"
              fill="#5E9400"
            />
          </svg>
          <span>5 hrs</span>
        </span>
      </div>
      <h3 className="text-base font-semibold text-gray-900 leading-tight line-clamp-2">
        Coriander/Dhaniya
      </h3>
      <p className="text-sm text-gray-500 font-medium">250 g</p>
      <div className="flex items-center gap-2">
        <span className="text-orange-600 font-bold">₹53.2</span>
        <span className="text-sm text-gray-400 line-through">₹70</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-orange-500 text-white px-2 py-1 text-sm rounded hover:bg-orange-600">
          -
        </button>
        <span className="px-2">1</span>
        <button className="bg-orange-500 text-white px-2 py-1 text-sm rounded hover:bg-orange-600">
          +
        </button>
      </div>
      <button className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white py-1 rounded text-sm">
        Add to Cart
      </button>
    </div>
  </div>
</li>

                      </ul>
                    </div>
                    {/* Additional tab content like View All and controls can be similarly styled */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;

 -->
