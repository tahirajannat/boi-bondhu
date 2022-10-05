import { useState } from "react";
// import "./styles.css";
const data = [
  {
    count: 16,
    next: null,
    previous: null,
    results: [
      {
        id: 1,
        option_type: "text",
        point: 3,
        question_option_text: [
          {
            id: 1,
            option: "Sensitive",
            option_group: "most",
          },
        ],
      },
      {
        id: 2,
        option_type: "text",
        point: 4,
        question_option_text: [
          {
            id: 3,
            option: "Stand",
            option_group: "most",
          },
        ],
      },
      {
        id: 3,
        option_type: "text",
        point: 1,
        question_option_text: [
          {
            id: 5,
            option: "Complacent",
            option_group: "most",
          },
        ],
      },
      {
        id: 4,
        option_type: "text",
        point: 2,
        question_option_text: [
          {
            id: 7,
            option: "Tell my story",
            option_group: "most",
          },
        ],
      },
      {
        id: 11,
        option_type: "text",
        point: 5,
        question_option_text: [
          {
            id: 13,
            option: "Orderly",
            option_group: "most",
          },
        ],
      },
      {
        id: 10,
        option_type: "text",
        point: 4,
        question_option_text: [
          {
            id: 11,
            option: "Talkative",
            option_group: "most",
          },
        ],
      },
      {
        id: 9,
        option_type: "text",
        point: 3,
        question_option_text: [
          {
            id: 9,
            option: "Seeks",
            option_group: "most",
          },
        ],
      },
      {
        id: 12,
        option_type: "text",
        point: 2,
        question_option_text: [
          {
            id: 15,
            option: "Fast paces",
            option_group: "most",
          },
        ],
      },
      {
        id: 5,
        option_type: "text",
        point: 1,
        question_option_text: [
          {
            id: 2,
            option: "Sensitive",
            option_group: "least",
          },
        ],
      },
      {
        id: 6,
        option_type: "text",
        point: 2,
        question_option_text: [
          {
            id: 4,
            option: "Stand",
            option_group: "least",
          },
        ],
      },
      {
        id: 7,
        option_type: "text",
        point: 4,
        question_option_text: [
          {
            id: 6,
            option: "Complacent",
            option_group: "least",
          },
        ],
      },
      {
        id: 8,
        option_type: "text",
        point: 3,
        question_option_text: [
          {
            id: 8,
            option: "Tell my story",
            option_group: "least",
          },
        ],
      },
      {
        id: 15,
        option_type: "text",
        point: 4,
        question_option_text: [
          {
            id: 14,
            option: "Orderly",
            option_group: "least",
          },
        ],
      },
      {
        id: 14,
        option_type: "text",
        point: 2,
        question_option_text: [
          {
            id: 12,
            option: "Talkative",
            option_group: "least",
          },
        ],
      },
      {
        id: 13,
        option_type: "text",
        point: 5,
        question_option_text: [
          {
            id: 10,
            option: "Seeks",
            option_group: "least",
          },
        ],
      },
      {
        id: 16,
        option_type: "text",
        point: 3,
        question_option_text: [
          {
            id: 16,
            option: "Fast paces",
            option_group: "least",
          },
        ],
      },
    ],
  },
];

const dataLimit = 4;

export default function Pagination() {
  const { count, results } = data[0];
  const [pages] = useState(Math.round(count / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);
  function goToNextPage() {
    console.log(currentPage);
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  // console.log(results)

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    console.log(results);
    if (results !== undefined) {
      return results.slice(startIndex, endIndex);
    }
  };

  return (
    <div className="App">
      {getPaginatedData().map((d, idx) => {
        // console.log(d);
        return (
          <>
            <p key={idx}>a {d.id}</p>
          </>
        );
      })}
      <div className="col-sm-12 d-flex justify-content-end">
        <button
          type="button"
          onClick={goToPreviousPage}
          className={`prev btn btn-primary me-2 ${
            currentPage === 1 ? "disabled" : ""
          }`}
        >
          <span className="indicator-label">Prev</span>
        </button>

        <button
          type="button"
          id="kt_layout_builder_reset"
          onClick={goToNextPage}
          className={`next btn btn-active-light btn-color-muted ${
            currentPage === pages ? "disabled" : ""
          }`}
        >
          <span className="indicator-label">Next</span>
        </button>
      </div>
    </div>
  );
}
