import Navbar from "../component/fragments/navbar";
import { Home } from "../component/fragments/home";
import { useState } from "react";
import articles from "../utils/articles";

const ArticleApp = () => {
  const [articleActive, setArticleActive] = useState(null);

  if (articleActive === null) {
    return (
      <div className="dark:bg-black">
        <Home
          header="Smart Finance Insights:"
          isi="Blog Keuangan Masa Kini"
          deskripsi="Jelajahi wawasan finansial cerdas dengan Smart Financial Tracker. Temukan tips keuangan, dan teknologi AI untuk mengelola keuanganmu dengan lebih baik!"
        />
        <h1 className="text-2xl md:text-5xl font-bold text-center text-[#374151] dark:text-white mb-8">
          <span className="text-primary">Artikel</span> untuk kamu
        </h1>

        <div className="flex flex-wrap p-6 gap-4 justify-center">
          {articles.map((article) => (
            <div
              key={article.id}
              className="card shadow-lg flex flex-col w-[350px] h-[550px] border-solid border-[1.5px] border-gray-200 dark:border-gray-700 rounded-2xl p-6 dark:bg-gray-800"
            >
              <div className="foto flex justify-center h-[200px] overflow-hidden mb-4">
                <img
                  className="rounded-2xl w-full h-full object-cover"
                  src={article.foto}
                  alt={article.title}
                />
              </div>
              
              <div className="content flex flex-col flex-grow">
                <div className="tag mb-3">
                  <h1 className="bg-gray-100 dark:bg-gray-700 rounded-3xl inline px-4 py-2 text-primary font-medium">
                    Financial
                  </h1>
                </div>
                
                <div className="deskripsi flex flex-col flex-grow">
                  <h1 className="text-xl font-semibold md:text-2xl mb-2 line-clamp-2 dark:text-white">
                    {article.title}
                  </h1>
                  <p className="line-clamp-4 text-sm dark:text-gray-300">{article.summary}</p>
                </div>
              </div>
              
              <div className="container-button flex justify-center mt-4">
                <button 
                  className="border-solid border-[1.5px] border-gray-200 dark:border-gray-600 w-full text-center px-3 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition dark:text-white"
                  onClick={() => setArticleActive(article)}
                >
                  Baca selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center dark:bg-black">
      <Home
        header={articleActive.title}
        isi={articleActive.subTitle}
        deskripsi={articleActive.summary}
      />
      <div className="container flex flex-col px-8 md:px-[200px] m-auto justify-center items-center max-w-4xl">
        <div className="container-img mb-6 w-full">
          <img src={articleActive.foto} alt={articleActive.title} className="rounded-lg w-full h-auto object-cover"/>
        </div>
        <div className="container-isi w-full">
          <h1 className='text-2xl text-left md:text-4xl font-bold text-primary my-6'>
            <span className='text-[#374151] dark:text-gray-300'>Judul : </span> {articleActive.title}
          </h1>
          <p className="text-justify dark:text-gray-300">{articleActive.content}</p>
        </div>
        <button 
          className="mt-8 mb-12 border-solid border-[1.5px] border-gray-200 dark:border-gray-600 px-6 py-3 rounded-full hover:bg-gray-50 dark:hover:bg-gray-700 transition dark:text-white"
          onClick={() => setArticleActive(null)}
        >
          Kembali ke daftar artikel
        </button>
      </div>
    </div>
  );
};

function Blogs() {
  return (
    <div className="dark:bg-black">
      <Navbar type="home" />
      <ArticleApp />
    </div>
  );
}

export default Blogs;