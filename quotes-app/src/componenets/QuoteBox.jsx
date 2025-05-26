import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import useFetch from "../hooks/useFetch";

const QuoteBox = () => {
  const { data, loading, error, refetch } = useFetch(
    "https://api.quotable.io/random"
  );
  console.log("Fetched", data);
  return (
    <div className="max-w-xl mx-auto p-6 mt-20 bg-white rounded-2xl shadow-lg text-center">
      <h1 className="text-2xl font-bold font-poppins mb-4 text-gray-800">
        Random Quotes Generator
      </h1>
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <AnimatePresence mode="wait">
        {data && (
          <motion.div
            key={data._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl italic font-poppins text-gray-700 mb-2">
              "{data.content}"
            </p>
            <p className="text-sm text-gray-600">— {data.author}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
        onClick={refetch}
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteBox;
