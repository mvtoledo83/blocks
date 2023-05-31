import React, { useEffect, useState } from "react";
import "./styles.scss";
import HeaderMain from "./components/HeaderMain";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBlocksApi = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://test-candidaturas-front-end.onrender.com/families?skip=0&take=20`
        );
        const result = await response.json();
        const artData = result;
        setData(artData);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getBlocksApi();
  }, []);

  return (
    <main id="blocks-front-main" className="blocks-front-main">
      <HeaderMain />
      <article
        id="blocks-front-main-article"
        className="blocks-front-main-article"
      >
        <h2
          id="blocks-front-main-article-h2"
          className="blocks-front-main-article-h2"
        >
          Resultados
        </h2>
        <ul
          id="blocks-front-main-article-ul"
          className="blocks-front-main-article-ul"
        >
          {data.map((blockItems) => (
            <li
              id="blocks-front-main-article-ul-li"
              className="blocks-front-main-article-ul-li"
              key={blockItems.id}
            >
              <div
                id="blocks-front-main-article-ul-li-div-img"
                className="blocks-front-main-article-ul-li-div-img"
              >
                <img
                  id="blocks-front-main-article-ul-li-div-img-image"
                  className="blocks-front-main-article-ul-li-div-img-image"
                  src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${blockItems.id}.jpg`}
                  alt="o produto XYZ"
                />
              </div>

              <div
                id="blocks-front-main-article-ul-li-div-information"
                className="blocks-front-main-article-ul-li-div-information"
              >
                <p
                  id="blocks-front-main-article-ul-li-div-information-p"
                  className="blocks-front-main-article-ul-li-div-information-p"
                >
                  {blockItems.details.name}
                </p>
                <span
                  id="blocks-front-main-article-ul-li-div-information-span"
                  className="blocks-front-main-article-ul-li-div-information-span"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.63868 1.72043L8.32001 1.72035M8.32001 1.72035L8.32001 7.32088M8.32001 1.72035L1.72035 8.32001"
                      stroke="#474747"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default Main;

