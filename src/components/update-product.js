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



const UpdateProduct = (props) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  let [name, setName] = useState(props.state.name)
  let [img, setImg] = useState(props.state.imageUrl)
  let [count, setCount] = useState(props.state.count)
  let [width, setWidth] = useState('')
  let [height, setHeight] = useState('')
  let [weight, setWeight] = useState(props.state.weight)

  const createNewProduct = () => {
    let NewProduct = {
      "id": props.state.id,
      "name": name,
      "imageUrl": img,
      "count": count,
      "size": {
        "width": width,
        "height": height
      },
      "weight": weight
    }
    props.updateProductThunk(props.state.id, NewProduct)
    closeModal()
  }

  return (
    <div>
      <button onClick={openModal}>Змінити продукт</button>
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

export default UpdateProduct
