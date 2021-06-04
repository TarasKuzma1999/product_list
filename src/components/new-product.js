import React, { useState } from 'react';
import ModalWindow from 'react-modal'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};


const NewProduct = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }



  function closeModal() {
    setIsOpen(false);
  }

  let [name, setName] = useState('')
  let [img, setImg] = useState('')
  let [count, setCount] = useState('')
  let [width, setWidth] = useState('')
  let [height, setHeight] = useState('')
  let [weight, setWeight] = useState('')

  const createNewProduct = () => {
    let NewProduct = {
      "name": name,
      "imageUrl": img,
      "count": count,
      "size": {
        "width": width,
        "height": height
      },
      "weight": weight
    }
    props.postNewProductThunk(NewProduct)
    closeModal()
  }

  return (
    <div>
      <button onClick={openModal}>Додати товар</button>
      <ModalWindow
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <div>Новий продукт</div>
        <form>
          Назва продукту: <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              Посилання на зображення: <input type="text" value={img} onChange={(e) => setImg(e.target.value)} />
              Кількість: <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
              Довжина: <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} />
              Висота: <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
              Вага: <input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </form>
        <button onClick={() => createNewProduct()}>Add</button>
        <button onClick={closeModal}>Cancel</button>
      </ModalWindow>
    </div>
  );
}



export default NewProduct