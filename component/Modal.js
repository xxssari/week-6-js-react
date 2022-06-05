import { useState } from "react";

function Modal({ handleAddItem, isModalOpen, handleModalOpen }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem({ name, content, image });
    handleModalOpen(false);
  };

  return (
    <div className="modal-background" hidden={!isModalOpen}>
      <form className="modal" onSubmit={handleSubmit}>
        <span className="modal-close" onClick={() => handleModalOpen(false)}>
          X
        </span>
        <label htmlFor="name" className="label">
          이름
        </label>
        <input
          id="name"
          type="text"
          placeholder="추가할 술의 이름"
          className="input"
          maxLength="10"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="image" className="label">
          사진
        </label>
        <input
          id="image"
          type="text"
          placeholder="URL로 입력해주세요."
          className="input"
          required
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="content" className="label">
          설명
        </label>
        <input
          id="content"
          type="text"
          placeholder="술에 대한 설명을 입력해주세요."
          className="input"
          required
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="submit-button">
          올리기
        </button>
      </form>
    </div>
  );
}
export default Modal;