import { useState } from "react";
import Modal from "./component/Modal";

function App() {
  const initData = [
    {
      name: "소주",
      content: "소주는 청하만 먹어요",
      image:
        "https://company.lottechilsung.co.kr/common/images/product_view0204_bh5.jpg",
    },
    {
      name: "맥주",
      content: "맥주는 cass 캔맥주를 먹어요",
      image:
        "https://www.cass.co.kr/sites/default/files/2022-03/casswhite_16-9.jpg",
    },
    {
      name: "샴페인",
      content: "모엣샹동을 먹어봤는데 제 취향은 아니었어요.",
      image:
        "http://m.kanashop.kr/web/product/big/201910/85d73c009b62c0215d1c047a96d25d00.jpg",
    },
    {
      name: "와인",
      content: "와인은 달달한 모스카토 다스띠에가 좋아요!",
      image:"https://t1.daumcdn.net/cfile/tistory/212F8B4751F1B9C402"
    },
    {
      name: "위스키",
      content: "위스키는 글랜피딕을 먹어보고 싶어요",
      image:"https://img.hankyung.com/photo/202101/AD.25077257.1.jpg"
    },
    {
      name: "진",
      content: "진은 핸드릭스진이 좋아요. (오이 싫어하면 조심)",
      image:"https://d1e2y5wc27crnp.cloudfront.net/media/smartorder_reservation/product/thumbnail/ebff0ea0-aa5d-4533-9ef5-4b6d1aafaf3c.jpg"
    },
  ];
  const [data, setData] = useState(initData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let handleAddItem = (item) => {
    setData([...data, item]);
  };

  let handleModalOpen = (value) => {
    setIsModalOpen(value);
  };

  return (
    <>
      <header>
        <span className="title">week 6 과제</span>
      </header>
      <main>
        <div className="sidebar">
          <button
            type="button"
            className="add-button"
            onClick={() => setIsModalOpen(true)}
          >
            추가
          </button>
          {data.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </div>
        <section className="container">
          {data.map((item) => (
            <div className="card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <span>{item.content}</span>
            </div>
          ))}
        </section>
      </main>
      <Modal
        handleAddItem={handleAddItem}
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
      />
    </>
  );
}

export default App;